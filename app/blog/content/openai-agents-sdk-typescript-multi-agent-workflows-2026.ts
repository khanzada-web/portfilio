export const title = 'Building Production Multi-Agent Workflows with the OpenAI Agents SDK in TypeScript (2026 Guide)'
export const excerpt = 'A practical, production-oriented guide to the OpenAI Agents SDK for TypeScript. Learn agents, tools, handoffs, agents-as-tools, guardrails, and how to orchestrate reliable multi-agent systems for Next.js and Node.js applications.'
export const content = `<div class=\"intro-section\"><h2>Why Multi-Agent Systems Matter in 2026</h2><p class=\"lead-paragraph\">Single-prompt LLM calls are no longer enough for serious software work. Gartner lists multiagent systems among the top strategic technology trends for 2026, and engineering teams are moving from one general-purpose agent to specialised agents that hand work to each other. The OpenAI Agents SDK for TypeScript gives you a small, production-ready set of primitives to do exactly that without inventing your own orchestration layer.</p><p>This guide walks through the current SDK (v0.16+), shows real TypeScript patterns that fit Next.js and Node.js backends, and covers the production concerns that usually get skipped: guardrails, deterministic vs LLM orchestration, error handling, and observability.</p><div class=\"key-highlights\"><h3>What You Will Learn</h3><ul><li>Core primitives: Agent, tools, handoffs, and agents-as-tools</li><li>When to use LLM-driven routing versus code-driven pipelines</li><li>Production-ready examples with Zod validation and structured outputs</li><li>Input, output, and tool guardrails that actually stop bad behaviour</li><li>Security, cost, and common mistakes when shipping multi-agent systems</li></ul></div></div><div class=\"technical-section\"><h2>1. What the OpenAI Agents SDK Actually Provides</h2><p>The SDK is the production successor to the experimental Swarm library. It is deliberately small:</p><ul><li><strong>Agents</strong> — an LLM plus instructions, tools, guardrails, and optional handoffs</li><li><strong>Sandbox agents</strong> — agents paired with an isolated filesystem and shell (beta)</li><li><strong>Realtime agents</strong> — low-latency voice agents</li><li><strong>Handoffs</strong> — transfer the conversation to a specialist agent</li><li><strong>Agents as tools</strong> — call a specialist as a tool while the manager keeps control</li><li><strong>Guardrails</strong> — input, output, and tool-level validation that can tripwire</li><li><strong>Tracing</strong> — built-in visibility into every tool call and handoff</li></ul><p>Installation is straightforward:</p><pre><code>npm install @openai/agents zod</code></pre><p>Requires Node.js 22+, Deno, or Bun. Set <code>OPENAI_API_KEY</code> in the environment (or use the config helpers).</p></div><div class=\"onpage-section\"><h2>2. First Agent and Basic Tools</h2><p>Start with a plain text agent:</p><pre><code>import { Agent, run, tool } from '@openai/agents';
import { z } from 'zod';

const getWeather = tool({
  name: 'get_weather',
  description: 'Get current weather for a city',
  parameters: z.object({ city: z.string() }),
  execute: async ({ city }) => {
    // Replace with a real weather API in production
    return `Weather in ${city}: 22°C, clear`;
  },
});

const assistant = new Agent({
  name: 'Assistant',
  instructions: 'You are a helpful assistant. Use tools when you need facts.',
  tools: [getWeather],
});

const result = await run(assistant, 'What is the weather in Berlin?');
console.log(result.finalOutput);</code></pre><p>The <code>tool()</code> helper turns any TypeScript function into a model-callable tool with automatic Zod schema generation and strict validation. Non-string return values are serialised for the model.</p></div><div class=\"content-strategy-section\"><h2>3. Multi-Agent Orchestration Patterns</h2><p>There are two primary patterns. Choose deliberately.</p><h3>3.1 Handoffs (specialist takes over)</h3><p>Use handoffs when the specialist should own the rest of the conversation and speak directly to the user.</p><pre><code>import { Agent, run } from '@openai/agents';

const historyTutor = new Agent({
  name: 'History Tutor',
  instructions: 'Explain historical events clearly with context and dates.',
});

const mathTutor = new Agent({
  name: 'Math Tutor',
  instructions: 'Solve math problems step by step and show reasoning.',
});

const triage = Agent.create({
  name: 'Triage',
  instructions: 'Route the user question to the correct specialist.',
  handoffs: [historyTutor, mathTutor],
});

const result = await run(triage, 'When did the Roman Empire fall?');
console.log(result.finalOutput);
console.log('Handled by:', result.lastAgent?.name);</code></pre><p><code>Agent.create</code> keeps TypeScript types aligned across handoff graphs. The runner automatically transfers conversation context to the chosen specialist.</p><h3>3.2 Agents as tools (manager stays in control)</h3><p>Use this when you want one agent to own the final answer and combine results from specialists without giving them the user-facing conversation.</p><pre><code>import { Agent, run, tool } from '@openai/agents';
import { z } from 'zod';

const researcher = new Agent({
  name: 'Researcher',
  instructions: 'Find concise, factual answers. Prefer primary sources.',
});

const writer = new Agent({
  name: 'Writer',
  instructions: 'Turn research notes into clear technical prose.',
});

const manager = new Agent({
  name: 'Manager',
  instructions: 'Coordinate research and writing. Always return a polished final answer.',
  tools: [
    researcher.asTool({
      toolName: 'research',
      toolDescription: 'Research a technical topic and return key facts',
    }),
    writer.asTool({
      toolName: 'write',
      toolDescription: 'Turn research notes into a short technical article section',
    }),
  ],
});

const result = await run(
  manager,
  'Write a short section explaining why multi-agent systems improve reliability over a single general agent.'
);
console.log(result.finalOutput);</code></pre><p>You can mix both patterns: a triage agent hands off to a specialist, and that specialist still uses other agents as tools for bounded subtasks.</p></div><div class=\"local-seo-section\"><h2>4. Production Patterns for Next.js / Node.js</h2><p>In a real backend you almost never run agents from a client component. Keep the orchestration on the server.</p><h3>Route Handler example (App Router)</h3><pre><code>// app/api/agents/route.ts
import { Agent, run } from '@openai/agents';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const BodySchema = z.object({
  message: z.string().min(1).max(4000),
});

const supportAgent = new Agent({
  name: 'Support',
  instructions: 'Answer product questions briefly and accurately. Escalate if unsure.',
});

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const result = await run(supportAgent, parsed.data.message);
  return NextResponse.json({
    output: result.finalOutput,
    agent: result.lastAgent?.name,
  });
}</code></pre><h3>Code-driven pipelines for determinism</h3><p>When latency, cost, or auditability matter more than open-ended reasoning, orchestrate in code:</p><ul><li>Use structured outputs (Zod schemas on agents) to classify intent.</li><li>Chain agents: research → outline → draft → critique → revise.</li><li>Run independent specialists in parallel with <code>Promise.all</code>.</li><li>Loop an evaluator agent until a quality threshold is met.</li></ul><p>These patterns appear in the official <code>examples/agent-patterns</code> directory and give you predictable token spend and easier testing.</p></div><div class=\"analytics-section\"><h2>5. Guardrails That Belong in Production</h2><p>Guardrails are first-class. They prevent expensive or dangerous runs before (or while) the main agent executes.</p><pre><code>import {
  Agent,
  run,
  InputGuardrail,
  InputGuardrailTripwireTriggered,
} from '@openai/agents';
import { z } from 'zod';

const guardrailAgent = new Agent({
  name: 'Safety check',
  instructions: 'Detect requests for disallowed topics (e.g. credential dumping).',
  outputType: z.object({
    isDisallowed: z.boolean(),
    reason: z.string(),
  }),
});

const safetyGuardrail: InputGuardrail = {
  name: 'Safety',
  runInParallel: false, // block the main model until the check finishes
  execute: async ({ input, context }) => {
    const result = await run(guardrailAgent, input, { context });
    return {
      outputInfo: result.finalOutput,
      tripwireTriggered: result.finalOutput?.isDisallowed ?? false,
    };
  },
};

const agent = new Agent({
  name: 'Support',
  instructions: 'Help users with product questions only.',
  inputGuardrails: [safetyGuardrail],
});</code></pre><p>Key rules:</p><ul><li>Input guardrails run only on the first agent in a chain.</li><li>Output guardrails run only on the agent that produces the final answer.</li><li>Tool guardrails attach to individual <code>tool()</code> definitions and run on every invocation.</li><li>Prefer <code>runInParallel: false</code> for high-risk checks so you do not spend tokens on a request that will be rejected.</li></ul></div><div class=\"performance-section\"><h2>6. Security, Cost, and Observability</h2><h3>Security</h3><ul><li>Never expose your OpenAI API key to the browser. Create ephemeral tokens server-side for realtime agents.</li><li>Treat every tool as untrusted input. Validate arguments with Zod and keep side-effecting tools behind human-in-the-loop approval when the risk is high.</li><li>Sandbox agents (beta) give you an isolated filesystem and shell — use them for any code-execution or file-write workflows.</li><li>Log the full run result (including tool calls) for audit trails; the SDK’s tracing already records the graph.</li></ul><h3>Cost control</h3><ul><li>Specialist agents with focused instructions and smaller models reduce tokens.</li><li>Code-driven pipelines are usually cheaper than open-ended LLM orchestration for fixed workflows.</li><li>Guardrails that run before the main model prevent wasted spend on blocked requests.</li></ul><h3>Observability</h3><p>Every run produces a trace visible in the OpenAI dashboard. Use it to see which agent handled the request, which tools were called, and where handoffs occurred. For production, also emit your own structured logs around <code>run()</code> so you can alert on error rates and latency.</p></div><div class=\"use-cases-section\"><h2>7. Real Use Cases for Full-Stack Teams</h2><ul><li><strong>Support triage</strong> — route billing, technical, and account questions to specialised agents with different tools and knowledge bases.</li><li><strong>Code-adjacent workflows</strong> — a manager agent that calls a research agent, a code-review agent, and a documentation agent, then synthesises a PR description.</li><li><strong>Internal tools</strong> — agents that query your Postgres via a carefully scoped DAL tool, never receiving raw connection strings.</li><li><strong>Content pipelines</strong> — research → outline → draft → SEO critique → final polish, each step an agent with a strict output schema.</li></ul></div><div class=\"faq-section\"><h2>8. FAQ</h2><div class=\"faq-item\"><h3>Is the OpenAI Agents SDK only for OpenAI models?</h3><p>No. The core is provider-agnostic. The default package wires OpenAI, but lower-level packages let you plug in other providers.</p></div><div class=\"faq-item\"><h3>Should I use handoffs or agents-as-tools?</h3><p>Handoffs when the specialist should speak to the user and own the conversation. Agents-as-tools when a manager must stay in control and combine multiple specialist results.</p></div><div class=\"faq-item\"><h3>Can I use this inside a Next.js Server Action?</h3><p>Yes, as long as the action runs on the server and you keep the API key server-side. Prefer Route Handlers for longer-running or streaming agent work.</p></div><div class=\"faq-item\"><h3>How do I keep context across turns?</h3><p>Pass <code>result.history</code> back into the next <code>run()</code>, attach a Session, or use OpenAI server-managed conversation state. See the running-agents and sessions guides.</p></div><div class=\"faq-item\"><h3>Are sandbox agents ready for production?</h3><p>They are marked beta. Prefer them for development and carefully scoped workloads; keep production file and shell access behind your own review gates until the API stabilises further.</p></div></div><div class=\"conclusion-section\"><h2>9. Summary</h2><p>The OpenAI Agents SDK gives TypeScript teams a clean, small surface for multi-agent systems: agents, tools, handoffs, agents-as-tools, and guardrails. Use LLM orchestration for open-ended tasks and code orchestration when you need determinism, cost control, and auditability. Always put the orchestration on the server, validate every tool argument, and treat guardrails as mandatory rather than optional.</p><div class=\"final-takeaway\"><h3>Key Takeaway</h3><p><em>Start with a triage or manager agent, give specialists focused instructions and minimal tools, enforce guardrails on input and high-risk tools, and keep the final human review step for anything that touches production data or code.</em></p></div><hr><div class=\"cta-section\"><h3>Need help designing multi-agent systems for a Next.js or Node.js product?</h3><p>I help teams ship production React, Next.js, TypeScript, and full-stack applications that incorporate modern AI agents safely and reliably. <a href=\"/contact\" style=\"color: #39FF14;\">Get in touch</a> or explore <a href=\"/services\" style=\"color: #39FF14;\">full-stack and AI development services</a>.</p><p>Related reading: <a href=\"/blog/agent-skills-typescript-nextjs-2026\">Agent Skills for TypeScript & Next.js</a> and <a href=\"/blog/claude-code-auto-mode-default-production-guide-2026\">Claude Code Auto Mode Production Guide</a>.</p></div></div>`
export const date = '2026-08-16'
export const readTime = '14 min read'
export const category = 'AI & Full-Stack'
export const author = 'Mussawar Hayat'
export const keywords = [
  'OpenAI Agents SDK TypeScript',
  'multi-agent workflows TypeScript',
  'OpenAI Agents SDK 2026',
  'agent handoffs TypeScript',
  'agents as tools',
  'multi-agent orchestration',
  'AI agents Next.js',
  'production multi-agent systems',
  'OpenAI Agents SDK guide',
  'guardrails AI agents',
  'TypeScript AI agents',
  'Node.js multi-agent',
  'building AI agents TypeScript',
]
