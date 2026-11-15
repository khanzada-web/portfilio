export const title = 'Implement Code Mode for TypeScript AI Agents: Batch Tool Calls and Cut Token Burn (2026)'
export const excerpt = 'Claude Code shipped experimental Code Mode. Build the same pattern in your own Next.js and Node.js agents with the AI SDK code-mode package: concurrent tools, filtered results, and a QuickJS sandbox.'
export const content = `<div class="intro-section"><h2>Batch Tool Calls Instead of Chatting With Every Result</h2><p class="lead-paragraph">On November 12, 2026 Claude Code 2.1.323 added experimental Code Mode. Instead of emitting one tool call, reading the full result, and deciding the next step, Claude writes a short JavaScript program that calls several tools, filters the output, and returns only what the model needs. Intermediate data stays out of the context window.</p><p>The same problem exists in every production agent you write with the AI SDK or a custom loop. A ten-step job becomes ten model turns and a growing transcript. Code mode collapses that. This guide shows the production shape for TypeScript backends: the official AI SDK code-mode package, QuickJS isolation, execution limits, and the security boundary you must keep.</p><div class="key-highlights"><h3>What You Will Learn</h3><ul><li>Why sequential tool calling burns tokens and latency</li><li>How Claude Code Code Mode and the AI SDK code-mode package differ</li><li>A production pattern that routes tools through code mode while keeping approval-gated tools direct</li><li>Execution limits, concurrent worker caps, and what the QuickJS sandbox actually prevents</li><li>Where node:vm fails as a sandbox and why you should not copy Claude Code’s in-process approach</li></ul></div></div><div class="technical-section"><h2>Table of Contents</h2><ol><li><a href="#problem">The sequential tool-call problem</a></li><li><a href="#how-it-works">How code mode works</a></li><li><a href="#implementation">Step-by-step implementation</a></li><li><a href="#practices">Best practices</a></li><li><a href="#security">Security considerations</a></li><li><a href="#performance">Performance notes</a></li><li><a href="#mistakes">Common mistakes</a></li><li><a href="#use-cases">Real use cases</a></li><li><a href="#faq">FAQ</a></li><li><a href="#summary">Summary</a></li></ol><h2 id="problem">1. The Problem</h2><p>Classic agent loops treat every tool as a separate model turn. The model asks for a read, receives the full file, reasons, asks for a search, receives every match, reasons again. Large tool results and repeated system prompts dominate cost. Parallel independent work is impossible because each call waits for the previous result to re-enter the context.</p><p>Claude Code’s Code Mode (experimental, off by default, Claude Code v2.1.323+) and Anthropic’s programmatic tool calling both attack this. The AI SDK’s experimental <code>@ai-sdk/code-mode</code> package gives the same capability to any TypeScript application: the model writes JavaScript or type-stripped TypeScript that calls your tools as async functions. Only the final JSON-serializable return value (plus optional console output) returns to the model.</p><h2 id="how-it-works">2. How Code Mode Works</h2><p>You declare a tool set. You mark which tools may be called from generated code via <code>experimental_toolCallers</code>. The code-mode tool receives a TypeScript-shaped catalog of those tools. The model emits a program. The package runs it in a fresh QuickJS context. Nested tool calls execute in your host process (outside the sandbox) after schema validation. The program’s return value becomes the tool result the model sees.</p><p>Supported features include top-level await, <code>Promise.all</code>, standard control flow, <code>JSON.parse</code>/<code>JSON.stringify</code>, and the four common <code>console</code> methods. Detached promises that outlive the return fail the run. The sandbox has no <code>process</code>, <code>require</code>, filesystem, <code>fetch</code>, or <code>eval</code>. Any network or system capability must be a tool you explicitly provide.</p><p>Claude Code implements its own Code Mode with an in-process <code>node:vm</code> context (on Bun). Node’s own documentation states that <code>vm</code> is not a security boundary. One constructor escape reaches the host. The AI SDK package uses QuickJS instead. Prefer that isolation for application code you do not fully control.</p></div><div class="onpage-section"><h2 id="implementation">3. Step-by-Step Implementation</h2><h3>3.1 Install</h3><p>Requires Node.js 22 or later. Not available in the browser or edge runtimes.</p><pre><code>pnpm add ai @ai-sdk/code-mode zod</code></pre><h3>3.2 Define tools and route them through code mode</h3><p>Keep tools that need human approval or that perform irreversible actions as direct tools. Code mode does not integrate with the AI SDK’s tool-approval flow; a nested approval request is rejected rather than paused.</p><pre><code>import { generateText, tool } from 'ai'
import { codeModeTool, DIRECT_TOOL_CALL } from '@ai-sdk/code-mode'
import { anthropic } from '@ai-sdk/anthropic'
import { z } from 'zod'

const getInventory = tool({
  description: 'Return current stock for a product SKU',
  inputSchema: z.object({ productId: z.string() }),
  execute: async ({ productId }) => {
    // replace with real data access
    return { productId, availableUnits: 42 }
  },
})

const getDemand = tool({
  description: 'Return requested units for the same SKU',
  inputSchema: z.object({ productId: z.string() }),
  execute: async ({ productId }) => {
    return { productId, requestedUnits: 15 }
  },
})

const sendAlert = tool({
  description: 'Send an irreversible ops alert. Requires human approval.',
  inputSchema: z.object({ message: z.string() }),
  execute: async ({ message }) => {
    // approval-gated path stays direct
    return { sent: true, message }
  },
  // needsApproval: true — keep this tool out of code mode
})

const codeMode = codeModeTool({
  executionPolicy: {
    timeoutMs: 30_000,
    cpuTimeoutMs: 10_000,
    memoryLimitBytes: 64 * 1024 * 1024,
    maxResultBytes: 1024 * 1024,
    maxBridgeRequests: 50,
    maxInFlightBridgeRequests: 8,
  },
})

const result = await generateText({
  model: anthropic('claude-sonnet-5.5'),
  tools: {
    codeMode,
    getInventory,
    getDemand,
    sendAlert,
  },
  experimental_toolCallers: {
    getInventory: ['code_mode'],
    getDemand: ['code_mode'],
    // sendAlert stays directly callable only
  },
  prompt: 'Check whether SKU sku_123 has enough stock for current demand. Return remaining units. Do not send alerts.',
})
</code></pre><p>The model can then emit a program such as:</p><pre><code>const [inventory, demand] = await Promise.all([
  tools.getInventory({ productId: 'sku_123' }),
  tools.getDemand({ productId: 'sku_123' }),
])

return {
  sufficient: inventory.availableUnits >= demand.requestedUnits,
  remaining: inventory.availableUnits - demand.requestedUnits,
}
</code></pre><p>Only that final object enters the conversation. The two tool payloads do not.</p><h3>3.3 Optional: stable tool definitions for caching</h3><p>By default the code-mode tool description changes when the set of host tools changes. Set <code>toolDiscovery: 'conversation'</code> so the provider-visible tool definition stays fixed and the catalog arrives as a user message. Actual cache hits still depend on the provider.</p><h3>3.4 Cap concurrent workers</h3><pre><code>import { experimental_setMaxWorkers as setMaxWorkers } from '@ai-sdk/code-mode'

setMaxWorkers(4)
</code></pre><p>Without a cap the package chooses a value based on available memory, up to 32 workers.</p></div><div class="content-strategy-section"><h2 id="practices">4. Best Practices</h2><ul><li>Route only pure, idempotent, or easily reversible tools through code mode. Keep writes that need approval or audit as direct tools.</li><li>Write precise Zod schemas and descriptions. The generated TypeScript signatures come from them. Vague schemas produce broken programs.</li><li>Return the smallest useful value. The whole point is to filter before the model sees the data.</li><li>Set tight <code>executionPolicy</code> values in production. Defaults exist; override them to the minimum that still finishes real jobs.</li><li>Pair code mode with the same project rules and permission model you already use for Claude Code or the OpenAI Agents SDK. Code mode does not replace authorization inside each tool.</li><li>Log the generated source (size-capped) for debugging. Do not log full tool payloads that may contain secrets.</li><li>Link related internal posts: <a href="/blog/claude-code-mods-typescript-production-guardrails-2026">Claude Code Mods in TypeScript</a> and <a href="/blog/openai-agents-sdk-typescript-multi-agent-workflows-2026">OpenAI Agents SDK multi-agent workflows</a>. For implementation help see the <a href="/services">services</a> page.</li></ul><h2 id="security">5. Security Considerations</h2><ul><li>The QuickJS context is a fresh isolate. It cannot reach Node globals, the filesystem, or the network by itself. Treat it as defense in depth, not the only control.</li><li>Every tool you expose is available to the generated program. Enforce authentication, authorization, and input validation inside the tool’s <code>execute</code> function. Schema validation happens before <code>execute</code>, but business rules still belong in the tool.</li><li>Do not implement code mode with <code>node:vm</code> or <code>vm2</code>. Node documents that the <code>vm</code> module is not a security mechanism. Community reports on Claude Code’s implementation correctly flag this.</li><li>Code mode currently rejects nested tools that require user approval. Do not work around that by removing the approval requirement.</li><li>Cap <code>maxBridgeRequests</code>, <code>maxInFlightBridgeRequests</code>, timeouts, and result size. An unbounded loop of tool calls is a denial-of-wallet vector.</li><li>Abort signals from the parent generation are forwarded. Still set your own timeouts so a hung tool cannot hold a worker forever.</li></ul><h2 id="performance">6. Performance Notes</h2><p><code>Promise.all</code> lets independent tools run concurrently. That is the main latency win. Token savings come from two places: fewer model turns and the absence of intermediate tool results in the context. Claude Code’s own documentation and early user measurements show the fixed tool list shrinks as well; the AI SDK package produces a similar effect when you route most tools through code mode.</p><p>CPU time inside the sandbox is limited separately from wall-clock time spent waiting on tools (<code>cpuTimeoutMs</code> vs <code>timeoutMs</code>). Memory and result-size limits prevent a single program from exhausting the host.</p><h2 id="mistakes">7. Common Mistakes</h2><ul><li>Exposing every tool, including destructive ones, to code mode.</li><li>Returning large arrays or full documents from the program. Filter first.</li><li>Forgetting top-level await or leaving promises un-awaited. The run fails.</li><li>Assuming TypeScript is type-checked. The package only strips type syntax.</li><li>Running the package on Node &lt; 22 or in an edge runtime.</li><li>Copying Claude Code’s <code>node:vm</code> approach into application code.</li></ul><h2 id="use-cases">8. Real Use Cases</h2><ul><li>Inventory and pricing checks that need two or three reads before a decision.</li><li>Log or trace analysis where the model should see only matching lines, not the full file.</li><li>Multi-file refactors that search, filter, and edit without re-reading every intermediate result.</li><li>Data aggregation across internal APIs where only the final summary matters.</li></ul></div><div class="faq-section" id="faq"><h2>FAQ</h2><h3>Does Claude Code Code Mode use the AI SDK package?</h3><p>No. Claude Code has its own experimental implementation (v2.1.323+) that runs generated JavaScript in-process. The AI SDK package is a separate, QuickJS-based option for your own applications.</p><h3>Can I use code mode with models other than Claude?</h3><p>Yes. The package works with any model the AI SDK supports, provided the model can emit valid JavaScript or type-stripped TypeScript.</p><h3>Is the sandbox a complete security boundary?</h3><p>No. It prevents the generated program from directly reaching Node APIs. Tools still run with the privileges of your server process. Authorization belongs in each tool.</p><h3>What happens if the generated code needs user approval?</h3><p>Nested approval is not supported. Keep those tools as direct tools.</p></div><div class="conclusion-section" id="summary"><h2>Summary</h2><p>Code Mode, whether in Claude Code or via the AI SDK’s <code>@ai-sdk/code-mode</code> package, is the practical response to chatty agents. Batch the tool calls, filter the results, and return only the value the model needs. Use QuickJS isolation, tight execution limits, and keep irreversible tools out of the generated program.</p><div class="final-takeaway"><h3>Key Takeaway</h3><p><em>Treat code mode as a context-control and concurrency tool, not a sandbox that replaces authorization.</em></p></div><h3>Next step</h3><p>If you need this pattern wired into an existing Next.js or Node service, including guardrails and observability, <a href="/services">see the services page</a> or read the related guides on <a href="/blog/claude-code-mods-typescript-production-guardrails-2026">Claude Code mods</a> and <a href="/blog/ai-agents-non-human-identity-least-privilege-typescript-nextjs-2026">least-privilege agent identities</a>.</p></div>`
export const date = '2026-11-15'
export const readTime = '12 min read'
export const category = 'AI & Full-Stack'
export const author = 'Mussawar Hayat'
export const keywords = ['code mode', 'AI agents', 'TypeScript', 'AI SDK', 'tool calling', 'token optimization', 'Claude Code', 'Next.js', 'production agents', 'QuickJS']
