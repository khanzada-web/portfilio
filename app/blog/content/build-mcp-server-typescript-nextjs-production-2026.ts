export const title = 'Build a Production MCP Server in TypeScript for Next.js & Node.js (2026 Guide)'
export const excerpt = 'Step-by-step guide to building a production-ready Model Context Protocol (MCP) server with the official TypeScript SDK. Cover tools, resources, stdio and Streamable HTTP transports, security, and how to wire your Next.js or Node.js backend so AI agents can safely call your APIs and data.'
export const content = `<div class=\"intro-section\"><h2>Why MCP Servers Matter for Full-Stack Teams in 2026</h2><p class=\"lead-paragraph\">The Model Context Protocol (MCP) has become the standard way AI agents and coding tools connect to external data and actions. Instead of writing one-off integrations for Claude, Cursor, Codex, or your own agent runtime, you expose tools and resources once through an MCP server. Any compliant client can discover and call them.</p><p>For Next.js and Node.js teams this is practical, not theoretical. You already own Postgres, Prisma models, Stripe webhooks, and internal APIs. Packaging those capabilities as MCP tools lets coding agents and internal chatbots operate against real project context instead of guessing from a prompt.</p><div class=\"key-highlights\"><h3>What You Will Learn</h3><ul><li>What MCP is and how hosts, clients, and servers interact</li><li>How to scaffold a TypeScript MCP server with the official v2 SDK</li><li>Registering tools and resources with Zod schemas</li><li>Stdio vs Streamable HTTP transports and when to use each</li><li>Production patterns for Next.js / Node backends, auth, and least privilege</li><li>Security, performance, common mistakes, and a real use-case walkthrough</li></ul></div></div><div class=\"technical-section\"><h2>1. MCP Architecture in One Page</h2><p>MCP is an open protocol (JSON-RPC 2.0) that standardises how LLM applications obtain context and invoke capabilities. The three roles are:</p><ul><li><strong>Host</strong> — the AI application (Claude Desktop, Claude Code, Cursor, your own agent UI)</li><li><strong>Client</strong> — the connector inside the host that speaks MCP to one or more servers</li><li><strong>Server</strong> — the process you build that exposes tools, resources, and prompts</li></ul><p>Servers offer three main feature types:</p><ul><li><strong>Tools</strong> — model-controlled actions (query DB, create issue, run a report)</li><li><strong>Resources</strong> — read-only context the model or user can load (file contents, schema docs, config)</li><li><strong>Prompts</strong> — reusable prompt templates with arguments</li></ul><p>Transports move messages between client and server. The two you will use most:</p><ul><li><strong>stdio</strong> — process stdin/stdout; ideal for local CLI and desktop agents</li><li><strong>Streamable HTTP</strong> — HTTP endpoint for remote or multi-user servers</li></ul><p>Official docs and the 2026-07-28 specification live at <a href=\"https://modelcontextprotocol.io\" rel=\"noopener noreferrer\" target=\"_blank\">modelcontextprotocol.io</a>. The TypeScript SDK is maintained at <a href=\"https://github.com/modelcontextprotocol/typescript-sdk\" rel=\"noopener noreferrer\" target=\"_blank\">modelcontextprotocol/typescript-sdk</a>.</p></div><div class=\"onpage-section\"><h2>2. Project Setup (TypeScript + Official SDK v2)</h2><p>Use Node.js 20+ and ES modules. The v2 packages are split: <code>@modelcontextprotocol/server</code> for servers and <code>@modelcontextprotocol/client</code> for clients.</p><pre><code>mkdir project-mcp-server && cd project-mcp-server
npm init -y
npm pkg set type=module
npm install @modelcontextprotocol/server zod
npm install -D typescript tsx @types/node

# Optional: Express/Hono adapters for HTTP later
# npm install @modelcontextprotocol/express express</code></pre><p>Minimal <code>tsconfig.json</code>:</p><pre><code>{
  \"compilerOptions\"": {
    \"target\": \"ES2022\",
    \"module\": \"NodeNext\",
    \"moduleResolution\": \"NodeNext\",
    \"strict\": true,
    \"esModuleInterop\": true,
    \"skipLibCheck\": true,
    \"outDir\": \"dist\",
    \"rootDir\": \"src\",
    \"types\": [\"node\"]
  },
  \"include\": [\"src/**/*\"]
}</code></pre><p>Create <code>src/index.ts</code> with a single tool over stdio:</p><pre><code>import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio.js';
import * as z from 'zod/v4';

const server = new McpServer({
  name: 'project-tools',
  version: '1.0.0',
});

server.registerTool(
  'greet',
  {
    description: 'Greet a user by name',
    inputSchema: z.object({ name: z.string().min(1) }),
  },
  async ({ name }) => ({
    content: [{ type: 'text', text: `Hello, ${name}!` }],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});</code></pre><p>Run it:</p><pre><code>npx tsx src/index.ts</code></pre><p>Important: log only with <code>console.error</code>. Anything written to stdout becomes part of the JSON-RPC stream and will break the protocol.</p></div><div class=\"content-strategy-section\"><h2>3. Production Tools for a Next.js / Prisma Stack</h2><p>A useful MCP server exposes the same operations your app already performs — through a controlled, schema-validated interface. Below is a realistic pattern: list projects for an authenticated user and create a project, both backed by a server-only data-access layer.</p><h3>3.1 Shared Prisma client and DAL</h3><pre><code>// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// src/data/projects.ts
import 'server-only'; // if this module is ever imported from a Next.js boundary
import { prisma } from '../lib/prisma.js';

export async function listProjectsForUser(userId: string) {
  return prisma.project.findMany({
    where: { ownerId: userId },
    select: { id: true, name: true, updatedAt: true },
    orderBy: { updatedAt: 'desc' },
    take: 50,
  });
}

export async function createProjectForUser(userId: string, name: string) {
  return prisma.project.create({
    data: { name, ownerId: userId },
    select: { id: true, name: true, createdAt: true },
  });
}</code></pre><h3>3.2 Register tools with ownership checks</h3><pre><code>import { listProjectsForUser, createProjectForUser } from './data/projects.js';

function requireUserId(userId: string | undefined): string {
  if (!userId || typeof userId !== 'string') {
    throw new Error('Authenticated user id is required');
  }
  return userId;
}

server.registerTool(
  'list_projects',
  {
    description: 'List projects owned by the current user. Returns id, name, updatedAt.',
    inputSchema: z.object({
      userId: z.string().uuid().describe('Authenticated user id from the host session'),
    }),
  },
  async ({ userId }) => {
    const id = requireUserId(userId);
    const projects = await listProjectsForUser(id);
    return {
      content: [{ type: 'text', text: JSON.stringify(projects, null, 2) }],
    };
  }
);

server.registerTool(
  'create_project',
  {
    description: 'Create a new project for the current user.',
    inputSchema: z.object({
      userId: z.string().uuid(),
      name: z.string().min(1).max(120),
    }),
  },
  async ({ userId, name }) => {
    const id = requireUserId(userId);
    const project = await createProjectForUser(id, name);
    return {
      content: [{ type: 'text', text: JSON.stringify(project, null, 2) }],
    };
  }
);</code></pre><p>Never accept a raw connection string or admin token from the model. Pass only the authenticated user id that the host already verified, and scope every query to that id.</p><h3>3.3 Resources for schema and docs</h3><pre><code>server.registerResource(
  'schema://projects',
  {
    description: 'JSON Schema description of the Project model the tools operate on',
    mimeType: 'application/json',
  },
  async () => ({
    contents: [{
      uri: 'schema://projects',
      mimeType: 'application/json',
      text: JSON.stringify({
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          ownerId: { type: 'string', format: 'uuid' },
          updatedAt: { type: 'string', format: 'date-time' },
        },
        required: ['id', 'name', 'ownerId'],
      }, null, 2),
    }],
  })
);</code></pre></div><div class=\"local-seo-section\"><h2>4. Transports: Stdio for Local Agents, HTTP for Shared Servers</h2><h3>4.1 Stdio (local Claude Code / Cursor)</h3><p>Stdio is the default for desktop and CLI hosts. Point the host at your entry file:</p><pre><code>// Example Claude Desktop / Claude Code MCP config snippet
{
  \"mcpServers\": {
    \"project-tools\": {
      \"command\": \"npx\",
      \"args\": [\"tsx\", \"/absolute/path/to/project-mcp-server/src/index.ts\"],
      \"env\": {
        \"DATABASE_URL\": \"postgresql://...\"
      }
    }
  }
}</code></pre><h3>4.2 Streamable HTTP (remote or multi-user)</h3><p>For a service that multiple users or agents can call over the network, use Streamable HTTP. The official middleware packages (<code>@modelcontextprotocol/express</code>, <code>@modelcontextprotocol/hono</code>, <code>@modelcontextprotocol/node</code>) wrap the transport so you can mount it on an existing Node server.</p><p>Sketch with Express:</p><pre><code>import express from 'express';
import { McpServer } from '@modelcontextprotocol/server';
// Use the official Express helper package in real code; pattern is:
// create the McpServer, register tools, then mount the Streamable HTTP handler
// on a path such as /mcp with proper Host header validation and auth middleware.

const app = express();
// app.use('/mcp', authMiddleware, mcpHttpHandler);
app.listen(process.env.PORT ?? 3100);</code></pre><p>Always put authentication in front of the HTTP transport. The host must present a token or session that maps to a real user id before any tool runs.</p></div><div class=\"analytics-section\"><h2>5. Security Considerations</h2><ul><li><strong>Least privilege</strong> — each tool should do one thing and only for the authenticated principal. Never expose admin or cross-tenant operations without an explicit, separate gate.</li><li><strong>Validate every argument</strong> — Zod (or another Standard Schema library) is mandatory. Reject unexpected keys and out-of-range values.</li><li><strong>No secrets in tool results</strong> — strip connection strings, API keys, and PII before returning content to the model.</li><li><strong>Destructive tools</strong> — mark or gate delete/update operations. Prefer human-in-the-loop approval for irreversible actions when the host supports it.</li><li><strong>Transport isolation</strong> — stdio servers inherit the process environment; HTTP servers must not trust the network. Use TLS, short-lived tokens, and Host header validation.</li><li><strong>Audit logging</strong> — log tool name, user id, argument hashes, latency, and success/failure. Do not log full argument payloads if they can contain sensitive data.</li><li><strong>Dependency hygiene</strong> — pin the SDK version, review changes on upgrade, and treat third-party MCP servers the same way you treat third-party npm packages.</li></ul></div><div class=\"performance-section\"><h2>6. Performance and Operational Notes</h2><ul><li>Keep tool handlers fast. Agents often call several tools in sequence; a 2-second DB query becomes painful under multi-step workflows.</li><li>Return compact JSON. Large dumps waste tokens and degrade model focus. Prefer summaries plus an optional resource URI for full detail.</li><li>Reuse connection pools (Prisma, Redis). A new client per tool call will exhaust connections under concurrent agent sessions.</li><li>For HTTP servers, prefer horizontal scale with sticky sessions only if the transport requires them; otherwise keep the server stateless where the protocol allows.</li><li>Monitor error rates and p95 latency per tool. Spikes often mean schema drift or a missing index, not an MCP problem.</li></ul></div><div class=\"use-cases-section\"><h2>7. Real Use Cases</h2><ul><li><strong>Internal coding agent</strong> — expose read-only tools that list open issues, recent deploys, and failing CI jobs so Claude Code or Cursor can reason about the real project state.</li><li><strong>Support triage bot</strong> — tools that look up a customer by id, list recent tickets, and draft a reply draft that a human still sends.</li><li><strong>Ops runbook agent</strong> — resources that load runbook markdown and tools that trigger approved, non-destructive health checks.</li><li><strong>SaaS product feature</strong> — customers connect their own MCP clients to your remote server so their agents can query only their tenant’s data.</li></ul></div><div class=\"performance-section\"><h2>8. Common Mistakes</h2><ul><li>Writing to stdout with <code>console.log</code> and breaking the stdio protocol.</li><li>Passing the entire request body or raw DB row back to the model without filtering.</li><li>Trusting a userId supplied by the model without verifying it against the host session.</li><li>Registering one mega-tool that does everything instead of small, well-described tools.</li><li>Running an HTTP MCP endpoint without authentication or Host validation.</li><li>Hard-coding production database credentials in the MCP process environment used for local agent experiments.</li><li>Ignoring the official specification and SDK examples when the API surface changes between major versions.</li></ul></div><div class=\"faq-section\"><h2>9. FAQ</h2><div class=\"faq-item\"><h3>Is MCP only for Anthropic products?</h3><p>No. MCP is an open standard. Claude, Cursor, VS Code, ChatGPT (where supported), and many agent frameworks implement clients. Build the server once and reuse it.</p></div><div class=\"faq-item\"><h3>Should I use the v1 or v2 TypeScript SDK?</h3><p>Prefer v2 (<code>@modelcontextprotocol/server</code> / <code>@modelcontextprotocol/client</code>) which targets the 2026-07-28 specification. v1 remains available for legacy projects with a documented migration path.</p></div><div class=\"faq-item\"><h3>Can I mount an MCP server inside a Next.js app?</h3><p>Yes for HTTP transports: run a dedicated Node process or Route Handler that speaks Streamable HTTP, and keep Prisma and secrets server-side only. Stdio is better as a separate process the host launches.</p></div><div class=\"faq-item\"><h3>How do I test tools without a full AI host?</h3><p>Use the SDK client packages or the official example clients to list tools and call them with fixed arguments. Treat tools like any other API: unit-test the handler logic and integration-test the wire format.</p></div><div class=\"faq-item\"><h3>What about authorization for multi-tenant SaaS?</h3><p>Authenticate at the transport layer, map the token to a tenant and user, and pass only those identifiers into tools. Every data access must filter by tenant (and user where required). Never let the model choose a tenant id.</p></div></div><div class=\"conclusion-section\"><h2>10. Summary</h2><p>MCP turns your existing TypeScript backend into a first-class context source for AI agents. Start with the official v2 server package, register small Zod-validated tools that call a proper data-access layer, choose stdio for local agents and Streamable HTTP for remote ones, and enforce authentication and least privilege from day one.</p><div class=\"final-takeaway\"><h3>Key Takeaway</h3><p><em>Treat an MCP server like a public API: strict schemas, scoped credentials, audit logs, and no raw database or secret exposure. The protocol is the easy part; production safety is the real work.</em></p></div><hr><div class=\"cta-section\"><h3>Need help wiring MCP or AI agents into a production Next.js stack?</h3><p>I help teams design secure Server Actions, Prisma data layers, and agent-friendly backends in TypeScript. <a href=\"/contact\" style=\"color: #39FF14;\">Get in touch</a> or explore <a href=\"/services\" style=\"color: #39FF14;\">full-stack and AI development services</a>.</p><p>Related reading: <a href=\"/blog/agent-skills-typescript-nextjs-2026\">Agent Skills for TypeScript & Next.js</a> and <a href=\"/blog/openai-agents-sdk-typescript-multi-agent-workflows-2026\">OpenAI Agents SDK Multi-Agent Workflows</a>.</p></div></div>`
export const date = '2026-08-23'
export const readTime = '14 min read'
export const category = 'AI & Full-Stack'
export const author = 'Mussawar Hayat'
export const keywords = [
  'MCP server TypeScript',
  'Model Context Protocol TypeScript',
  'build MCP server Next.js',
  'MCP production guide 2026',
  'Model Context Protocol Node.js',
  'MCP tools resources',
  'Streamable HTTP MCP',
  'stdio MCP server',
  '@modelcontextprotocol/server',
  'AI agents MCP',
  'Claude Code MCP server',
  'Cursor MCP TypeScript',
  'production MCP server',
  'MCP Prisma Next.js',
  'how to build MCP server TypeScript',
]
