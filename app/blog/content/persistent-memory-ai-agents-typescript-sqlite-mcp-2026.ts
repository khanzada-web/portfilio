export const title = 'Build Persistent Memory for AI Agents with TypeScript, SQLite & MCP (2026 Guide)'
export const excerpt = 'Stop losing context between AI agent sessions. Practical production guide to implementing persistent memory for coding agents using TypeScript, better-sqlite3, FTS5 search, and the Model Context Protocol — inspired by the 100k+ star claude-mem pattern.'
export const content = `<div class=\"intro-section\"><h2>Why AI Agents Forget Everything (and How to Fix It)</h2><p class=\"lead-paragraph\">In late 2026 the hottest conversation on X around AI coding agents is no longer raw model power. It is memory. Tools like claude-mem (over 105,000 GitHub stars) exploded because agents still start every session as a blank slate. This guide shows you how to build the same capability yourself in TypeScript for Next.js and custom agents.</p><div class=\"key-highlights\"><h3>What You Will Build</h3><ul><li>A production-ready SQLite memory store with FTS5 full-text search</li><li>An MCP server that exposes memory tools any agent can call</li><li>Progressive retrieval so you inject only relevant context</li><li>Privacy controls, compression patterns, and security practices</li><li>Integration examples for Claude Code, Cursor, and custom Next.js agents</li></ul></div></div><div class=\"technical-section\"><h2>1. The Problem: Context Resets Kill Productivity</h2><p>Every coding agent session begins empty. Decisions made yesterday, bug fixes, file ownership, and architecture choices disappear. Developers re-explain the same context repeatedly. Token costs rise and quality drops.</p><p>claude-mem solved this by hooking into session lifecycle events, compressing tool observations with a model, storing them in SQLite + vector search, and injecting a compact index on the next session start. The same pattern works for any agent that supports MCP or custom tools.</p><p>Official sources: <a href=\"https://docs.claude-mem.ai/introduction\" rel=\"noopener noreferrer\" target=\"_blank\">claude-mem docs</a> and the <a href=\"https://modelcontextprotocol.io/specification/2026-07-28\" rel=\"noopener noreferrer\" target=\"_blank\">MCP specification</a>.</p></div><div class=\"onpage-section\"><h2>2. Architecture Overview</h2><p>A minimal but production-capable memory system has three pieces:</p><ul><li><strong>Storage</strong> — SQLite with WAL mode and FTS5 for fast local search. No external services required.</li><li><strong>MCP Server</strong> — Tools for create, search, get, and delete memories. Agents call these automatically.</li><li><strong>Progressive Disclosure</strong> — Return a short index first; full observation only when the agent requests the ID.</li></ul><p>For Next.js apps you can also write memories from Server Actions and read them for agent orchestration. The MCP server remains the portable interface for external agents.</p></div><div class=\"content-strategy-section\"><h2>3. Step-by-Step Implementation</h2><h3>Install dependencies</h3><pre><code>npm install @modelcontextprotocol/sdk better-sqlite3 zod
npm install -D @types/better-sqlite3 typescript</code></pre><h3>Database schema (src/memory/db.ts)</h3><pre><code>import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'

const sqlite = new Database(process.env.MEMORY_DB_PATH ?? './agent-memory.db')
sqlite.pragma(\`journal_mode = WAL\`)
sqlite.pragma(\`foreign_keys = ON\`)

sqlite.exec(\`
  CREATE TABLE IF NOT EXISTS memories (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT DEFAULT 'observation',
    project TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );
  CREATE VIRTUAL TABLE IF NOT EXISTS memories_fts USING fts5(
    title, content, content='memories', content_rowid='rowid'
  );
\`)

export const db = sqlite</code></pre><h3>Core memory tools (MCP)</h3><pre><code>import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'
import { db } from './db.js'
import { randomUUID } from 'crypto'

const server = new McpServer({ name: 'agent-memory', version: '1.0.0' })

server.tool(
  'memory_create',
  'Store a new observation or decision for later retrieval',
  {
    title: z.string().describe('Short title'),
    content: z.string().describe('Full observation or decision text'),
    type: z.string().optional().default('observation'),
    project: z.string().optional()
  },
  async ({ title, content, type, project }) => {
    const id = randomUUID()
    db.prepare(
      \`INSERT INTO memories (id, title, content, type, project) VALUES (?, ?, ?, ?, ?)\`
    ).run(id, title, content, type, project ?? null)
    return { content: [{ type: 'text', text: \`Stored memory \${id}\` }] }
  }
)

server.tool(
  'memory_search',
  'Search past memories by keyword. Returns compact index with IDs.',
  {
    query: z.string().describe('Search terms'),
    limit: z.number().optional().default(5)
  },
  async ({ query, limit }) => {
    const rows = db.prepare(
      \`SELECT m.id, m.title, snippet(memories_fts, 1, '<b>', '</b>', '...', 20) as snippet
       FROM memories_fts f JOIN memories m ON f.rowid = m.rowid
       WHERE memories_fts MATCH ? ORDER BY rank LIMIT ?\`
    ).all(query, limit)
    return { content: [{ type: 'text', text: JSON.stringify(rows, null, 2) }] }
  }
)

const transport = new StdioServerTransport()
await server.connect(transport)</code></pre><p>Run the server with <code>npx tsx src/memory/server.ts</code> and add it to your agent's MCP config.</p></div><div class=\"analytics-section\"><h2>4. Production Best Practices</h2><ul><li>Always use WAL mode and enable foreign keys.</li><li>Return short indexes first (title + snippet + id). Full content only on explicit get-by-id.</li><li>Tag memories with project and type so agents can filter.</li><li>Compress long tool outputs before storage (send a summary, keep raw optional).</li><li>Version the schema and run migrations.</li></ul><h3>Security considerations</h3><p>Never store secrets, API keys, or PII. Use <code>&lt;private&gt;</code> markers or a redaction pass before insert. Restrict the MCP server to local stdio when possible. If you expose HTTP, require authentication and scope tools by user or project. Treat memory content as untrusted input when injecting back into prompts.</p><h3>Performance notes</h3><p>FTS5 is fast enough for tens of thousands of observations on a single machine. For multi-user Next.js apps prefer PostgreSQL with full-text search or a dedicated vector store, and keep the MCP interface identical so agents do not care about the backend.</p></div><div class=\"performance-section\"><h2>5. Common Mistakes</h2><ul><li>Injecting full raw tool logs instead of compressed summaries — token waste.</li><li>No progressive disclosure — dumping every memory into context.</li><li>Storing secrets or large binaries.</li><li>Forgetting to rebuild the FTS index after bulk inserts.</li><li>Running the MCP server without WAL mode under concurrent agent use.</li><li>Not filtering by project so agents see unrelated memories.</li></ul></div><div class=\"use-cases-section\"><h2>6. Real Use Cases</h2><ul><li><strong>Coding agents</strong> — Remember architecture decisions, file ownership, and previous bug fixes across days.</li><li><strong>Next.js product agents</strong> — Persist user preferences and past support resolutions for a customer-facing assistant.</li><li><strong>Multi-agent crews</strong> — Shared memory so research, coding, and review agents stay aligned.</li><li><strong>Onboarding</strong> — New agent sessions automatically load the last ten relevant observations for a project.</li></ul></div><div class=\"faq-section\"><h2>7. FAQ</h2><div class=\"faq-item\"><h3>Can I just use claude-mem instead?</h3><p>Yes for Claude Code and supported hosts. This guide is for teams that want a portable, self-hosted memory layer that works with any MCP client or custom Next.js agent, or that need to store memories inside their own application database.</p></div><div class=\"faq-item\"><h3>Does this work with Cursor and Codex?</h3><p>Any client that supports MCP stdio or Streamable HTTP can call the memory tools. Configure the server in the client's MCP settings.</p></div><div class=\"faq-item\"><h3>How do I add semantic / vector search?</h3><p>Keep FTS5 for keyword recall and add a separate embedding column or Chroma/Postgres pgvector store. Query both and merge results. claude-mem does exactly this.</p></div><div class=\"faq-item\"><h3>Is SQLite safe for production?</h3><p>For a single-user or single-project coding agent, yes. For multi-tenant SaaS agents, move the same schema to PostgreSQL and keep the MCP tool interface unchanged.</p></div></div><div class=\"conclusion-section\"><h2>8. Summary</h2><p>Persistent memory is the practical layer that turns short-lived coding agents into reliable long-running collaborators. The pattern proven by claude-mem — capture, compress, store, progressive retrieve — is straightforward to implement in TypeScript with SQLite and the Model Context Protocol.</p><div class=\"final-takeaway\"><h3>Key Takeaway</h3><p><em>Give agents a durable memory store they can search on demand. Return a compact index first, full detail only when requested, and never store secrets. The same MCP tools work across Claude Code, Cursor, custom Next.js agents, and multi-agent systems.</em></p></div><hr><div class=\"cta-section\"><h3>Need help adding reliable memory and guardrails to your AI agents?</h3><p>I design production TypeScript and Next.js agent systems, MCP servers, and secure data layers. <a href=\"/contact\" style=\"color: #39FF14;\">Get in touch</a> or explore <a href=\"/services\" style=\"color: #39FF14;\">full-stack and AI development services</a>.</p><p>Related reading: <a href=\"/blog/agent-skills-typescript-nextjs-2026\">Agent Skills for TypeScript & Next.js</a> and <a href=\"/blog/build-mcp-server-typescript-nextjs-production-2026\">Building Production MCP Servers in TypeScript</a>.</p></div></div>`
export const date = '2026-11-01'
export const readTime = '14 min read'
export const category = 'AI & Full-Stack'
export const author = 'Mussawar Hayat'
export const keywords = [
  'persistent memory AI agents',
  'claude-mem',
  'MCP memory server',
  'TypeScript SQLite memory',
  'AI agent memory TypeScript',
  'Model Context Protocol memory',
  'better-sqlite3 MCP',
  'FTS5 agent memory',
  'Next.js AI agent memory',
  'production AI agent memory 2026',
  'how to add memory to AI coding agents',
  'claude-mem alternative'
]
