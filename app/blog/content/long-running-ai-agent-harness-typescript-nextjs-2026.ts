export const title = 'Build a Production Long-Running AI Agent Harness in TypeScript and Next.js (2026)'
export const excerpt = 'Long-running agents fail when each session starts with no memory. This guide implements Anthropic’s initializer + coding-agent harness pattern in TypeScript and Next.js: feature lists, progress files, git handoffs, incremental work, verification gates, and security for production use.'
export const date = '2026-11-22'
export const readTime = '15 min read'
export const category = 'AI & Full-Stack'
export const author = 'Mussawar Hayat'
export const keywords = [
  'long-running AI agent harness TypeScript',
  'Anthropic agent harness Next.js',
  'initializer coding agent pattern',
  'feature_list.json agent progress',
  'Claude Agent SDK TypeScript harness',
  'production AI agent sessions 2026',
  'agent context handoff git',
  'incremental agent coding Next.js',
  'how to build long-running agent harness',
  'AI agent reliability TypeScript',
]
export const content = `<div class="intro-section"><h2>Why Long-Running Agents Need a Harness, Not Just a Bigger Context Window</h2><p class="lead-paragraph">The dominant conversation on X right now is harness engineering. Teams are discovering that the model is not the hard part. The loop, state, permissions, and recovery around the model decide whether an agent finishes a multi-hour task or leaves half-written files and a broken build.</p><p>Anthropic published a concrete pattern in their engineering post “Effective harnesses for long-running agents.” An initializer agent sets up the environment once. Every later coding agent starts with a fresh context window, reads progress artifacts, works on one feature, tests it, and leaves the tree in a clean state. This guide turns that pattern into production TypeScript and Next.js code you can run and extend.</p><div class="key-highlights"><h3>What you will build</h3><ul><li>Initializer and coding-agent prompts that force incremental progress</li><li>feature_list.json as the single source of truth (passes: false → true only)</li><li>claude-progress.txt + git commits as the handoff between sessions</li><li>A TypeScript runner that launches sessions, enforces budgets, and records state</li><li>Security: path allowlists, command restrictions, no secret exposure</li><li>Next.js Route Handler to trigger and observe runs</li></ul></div></div><div class="technical-section"><h2>1. The problem the harness solves</h2><p>Context windows are finite. Compaction helps, but it is lossy. An agent that tries to one-shot a full application often runs out of context mid-feature, leaving the next session with undocumented half-done work. Later sessions then either re-implement the same code or declare victory after seeing some green tests.</p><p>The Anthropic pattern splits the work:</p><ol><li><strong>Initializer agent (first session only)</strong> — reads the spec, writes a comprehensive feature_list.json of end-to-end tests (all starting as failing), creates init.sh, makes the first git commit, and writes an initial progress note.</li><li><strong>Coding agent (every subsequent session)</strong> — starts by reading progress + git log + feature list, runs a basic smoke test, implements exactly one failing feature, verifies it end-to-end, marks it passing, commits, and updates the progress file.</li></ol><p>Official source: <a href="https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents" rel="noopener noreferrer" target="_blank">Anthropic – Effective harnesses for long-running agents</a>. Companion quickstart: <a href="https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding" rel="noopener noreferrer" target="_blank">anthropics/claude-quickstarts/autonomous-coding</a>.</p></div><div class="onpage-section"><h2>2. Core artifacts the harness must produce</h2><pre><code>my-project/
├── app_spec.txt          # human-written or agent-expanded specification
├── feature_list.json     # exhaustive tests; only "passes" may change
├── init.sh               # starts the dev server / installs deps
├── claude-progress.txt   # chronological session notes
├── .git/                 # every meaningful change is a commit
└── src/ ...              # the application under construction</code></pre><p>feature_list.json entries look like this (JSON is preferred over Markdown because models are less likely to rewrite structured data):</p><pre><code>{
  "category": "functional",
  "description": "New chat button creates a fresh conversation",
  "steps": [
    "Navigate to main interface",
    "Click the New Chat button",
    "Verify a new conversation is created",
    "Check that the chat area shows the welcome state"
  ],
  "passes": false
}</code></pre><p>Rule enforced in prompts: “It is unacceptable to remove or edit tests. You may only change passes from false to true after verified end-to-end testing.”</p></div><div class="content-strategy-section"><h2>3. TypeScript harness runner</h2><p>The runner is a Node script (or a Next.js background job) that owns the loop, not the model. It decides when a session starts, what tools are allowed, and when to stop.</p><pre><code>// scripts/harness.ts
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const execFileAsync = promisify(execFile);

type Feature = {
  category: string;
  description: string;
  steps: string[];
  passes: boolean;
};

const PROJECT = process.env.PROJECT_DIR ?? path.resolve('./workspace');
const MAX_TURNS = Number(process.env.MAX_TURNS ?? 40);
const MAX_BUDGET_USD = Number(process.env.MAX_BUDGET_USD ?? 5);

async function readFeatures(): Promise<Feature[]> {
  const raw = await readFile(path.join(PROJECT, 'feature_list.json'), 'utf8');
  return JSON.parse(raw) as Feature[];
}

async function nextFailingFeature(): Promise<Feature | null> {
  const features = await readFeatures();
  return features.find((f) => !f.passes) ?? null;
}

async function runSession(prompt: string) {
  // Example using the Claude Agent SDK query() loop.
  // In production you also pass allowedTools, permissionMode, and a sandbox.
  const { query, ClaudeAgentOptions } = await import('@anthropic-ai/claude-agent-sdk');

  const options = new ClaudeAgentOptions({
    model: process.env.MODEL ?? 'claude-sonnet-4-5-20250929',
    maxTurns: MAX_TURNS,
    maxBudgetUsd: MAX_BUDGET_USD,
    cwd: PROJECT,
    allowedTools: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep'],
    // permissionMode: 'dontAsk' only after you have a strict allowlist
  });

  for await (const message of query({ prompt, options })) {
    if (message.type === 'assistant') {
      // stream or log for observability
    }
    if (message.type === 'result') {
      return message;
    }
  }
}

async function main() {
  const isFirst = !(await fileExists(path.join(PROJECT, 'feature_list.json')));
  const prompt = isFirst
    ? await readFile('./prompts/initializer.md', 'utf8')
    : await readFile('./prompts/coding.md', 'utf8');

  await runSession(prompt);

  // After the session the model must have written commits and updated progress.
  // Your runner can also append a machine-readable summary.
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function fileExists(p: string) {
  try { await readFile(p); return true; } catch { return false; }
}</code></pre><p>Replace the SDK call with the current <code>@anthropic-ai/claude-agent-sdk</code> API. The important contract is that every session is bounded (turns + budget) and starts from the artifacts on disk, not from a long in-memory transcript.</p></div><div class="local-seo-section"><h2>4. Prompts that enforce the pattern</h2><h3>Initializer (session 1)</h3><pre><code>You are the initializer agent. Read app_spec.txt.
Create feature_list.json with exhaustive end-to-end tests (all passes: false).
Create init.sh that installs dependencies and starts the development server.
Initialize git and make the first commit.
Write a short summary to claude-progress.txt.
Work on at most one high-priority feature if time remains.
Do not declare the project complete.</code></pre><h3>Coding agent (sessions 2+)</h3><pre><code>Start by running: pwd, then read claude-progress.txt, feature_list.json, and git log --oneline -20.
Run ./init.sh (or the documented start command) and perform a basic smoke test.
Choose the highest-priority feature that still has passes: false.
Implement only that feature.
Test it end-to-end the way a user would (browser tools if available).
Only then set passes: true.
Commit with a descriptive message and append a summary to claude-progress.txt.
Leave the tree clean. Do not start a second feature.</code></pre><p>These prompts mirror the official quickstart guidance. Strong wording against rewriting the feature list is essential.</p></div><div class="analytics-section"><h2>5. Next.js integration</h2><p>Expose a protected Route Handler that starts or resumes a harness run for a given project id. Store run metadata (session id, feature progress count, last commit, cost) in Postgres via Prisma.</p><pre><code>// app/api/harness/runs/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { startHarnessSession } from '@/lib/harness';

const Body = z.object({
  projectId: z.string().uuid(),
  mode: z.enum(['initializer', 'coding']).optional(),
});

export async function POST(req: Request) {
  // auth + rate limit omitted for brevity; required in production
  const json = await req.json();
  const { projectId, mode } = Body.parse(json);

  const run = await prisma.harnessRun.create({
    data: { projectId, status: 'running', mode: mode ?? 'coding' },
  });

  // fire-and-forget or queue; do not block the HTTP response for hours
  startHarnessSession(run.id).catch((err) => {
    console.error('harness failed', err);
  });

  return NextResponse.json({ runId: run.id });
}</code></pre><p>Progress is read from the workspace files and written back to the database after each session so a dashboard can show “features passing: 17 / 214” without parsing git every time.</p></div><div class="performance-section"><h2>6. Security considerations</h2><ul><li><strong>Filesystem sandbox</strong> — restrict all Read/Write/Edit to the project directory. The Claude Agent SDK and Claude Code support permission modes and path restrictions.</li><li><strong>Command allowlist</strong> — only npm, node, git, and a short list of inspection tools. Block curl to arbitrary hosts, package installs from unknown registries, and any command that can exfiltrate data.</li><li><strong>Secrets</strong> — never put API keys or database URLs in the workspace the agent can read. Inject them at the process level only for tools that need them, or use a vault proxy as described in Anthropic’s Managed Agents architecture.</li><li><strong>Human gates</strong> — for destructive actions (force-push, drop table, send email) require an explicit approval event before the next session continues.</li><li><strong>Audit</strong> — log every tool call (name, hashed arguments, result size, latency). Store the log outside the agent’s writable directory.</li></ul><p>The official quickstart ships with an OS-level sandbox and bash allowlist precisely for unattended runs. Treat your TypeScript version the same way.</p></div><div class="use-cases-section"><h2>7. Performance and cost notes</h2><ul><li>Cap turns and dollars per session. A single runaway loop can exhaust a budget before the feature list advances.</li><li>Prefer smaller models for the coding agent once the initializer has produced a clear feature list; reserve larger models for hard debugging.</li><li>Keep feature steps concrete. Vague descriptions cause the agent to re-read large files and waste tokens.</li><li>After each session, a cheap deterministic check (tsc, unit tests, or a Playwright smoke script) should run outside the model before the next session is allowed to start.</li></ul></div><div class="performance-section"><h2>8. Common mistakes</h2><ul><li>Letting the agent rewrite feature_list.json descriptions or delete failing tests.</li><li>Starting a new feature before verifying the previous one end-to-end.</li><li>Using a single long conversation instead of fresh sessions + on-disk handoff.</li><li>Giving the agent unrestricted shell access in an unattended loop.</li><li>Marking a feature “passing” after unit tests only, without browser or HTTP verification.</li><li>Forgetting to commit, so the next session cannot see what changed.</li></ul></div><div class="faq-section"><h2>9. FAQ</h2><div class="faq-item"><h3>Do I need the Claude Agent SDK or can I use the Messages API?</h3><p>You can implement the same pattern with the Messages API plus your own tool loop. The Agent SDK already supplies sessions, compaction, and the tool harness that Claude Code uses, so most teams start there. Managed Agents is the hosted version if you do not want to run the loop yourself.</p></div><div class="faq-item"><h3>How many features should the initializer create?</h3><p>The public quickstart aims for ~200 for a full application. For internal tools start with 30–60 high-quality end-to-end tests. Quality of the feature list matters more than the number.</p></div><div class="faq-item"><h3>Can this pattern work with non-Anthropic models?</h3><p>Yes. The artifacts (feature_list.json, progress file, git) are model-agnostic. You only replace the query/tool loop.</p></div><div class="faq-item"><h3>What about multi-agent setups?</h3><p>Anthropic’s follow-up work explored planner/generator/evaluator splits. The single-loop + strong harness remains the recommended starting point; add specialized agents only when a single loop measurably fails on a sub-task.</p></div></div><div class="conclusion-section"><h2>10. Summary</h2><p>Harness engineering is the practical response to the limits of context windows and the tendency of agents to one-shot or declare victory early. An initializer that writes an exhaustive failing feature list, a coding agent that works one feature at a time, progress files, and git commits give every new session a clean, verifiable starting point. Implement the runner in TypeScript, enforce budgets and path restrictions, and surface progress through a Next.js API. The model becomes replaceable; the harness is the system you own.</p><div class="final-takeaway"><h3>Key takeaway</h3><p><em>The agent does not remember. The files and git history do. Design the harness so a fresh context window can always resume correctly.</em></p></div><hr><div class="cta-section"><h3>Need a production harness or agent runtime on a Next.js / TypeScript stack?</h3><p>I design secure agent loops, MCP servers, evaluation gates, and durable workflows for teams moving from demos to production. <a href="/contact" style="color: #39FF14;">Get in touch</a> or explore <a href="/services" style="color: #39FF14;">full-stack and AI development services</a>.</p><p>Related reading: <a href="/blog/build-mcp-server-typescript-nextjs-production-2026">Build a Production MCP Server in TypeScript</a> and <a href="/blog/coding-agent-evals-typescript-nextjs-production-2026">Production Evals for Coding Agents</a>.</p></div></div><script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"Build a Production Long-Running AI Agent Harness in TypeScript and Next.js (2026)","description":"Long-running agents fail when each session starts with no memory. This guide implements Anthropic’s initializer + coding-agent harness pattern in TypeScript and Next.js: feature lists, progress files, git handoffs, incremental work, verification gates, and security for production use.","image":"https://mussawarhayat.site/og-image.jpg","author":{"@type":"Person","name":"Mussawar Hayat"},"datePublished":"2026-11-22","dateModified":"2026-11-22","mainEntityOfPage":{"@type":"WebPage","@id":"https://mussawarhayat.site/blog/long-running-ai-agent-harness-typescript-nextjs-2026"}}</script>`