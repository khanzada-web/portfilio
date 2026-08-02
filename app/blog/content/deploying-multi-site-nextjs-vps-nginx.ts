export const title = 'Deploy Multi-Site Next.js on VPS with Nginx, PM2 & SSL'
export const excerpt = 'Run multiple Next.js 16 apps on one VPS with Nginx reverse proxy, PM2 process management, Let's Encrypt SSL, and zero-downtime symlink deploys. Production directory layout, server blocks, ecosystem config, and checklist.'
export const content = `<div class="intro-section"><h2>One VPS, Many Production Next.js Apps</h2><p class="lead-paragraph">A single VPS can host several Next.js 16 sites with isolated Node processes, Nginx as the TLS terminator and reverse proxy, and PM2 for process management and zero-downtime reloads. This is the exact production layout I use for multi-site hosting: directory structure, unique localhost ports, Nginx server blocks with HTTP/2, PM2 ecosystem files, Certbot SSL with auto-renewal, and a symlink-based deploy pattern that supports instant rollback.</p><div class="key-highlights"><h3>What You Will Learn</h3><ul><li>Production directory and port allocation per app</li><li>Nginx reverse proxy, HTTP/2, and required proxy headers</li><li>PM2 ecosystem config for multiple Next.js apps</li><li>Certbot SSL and renew hooks that reload Nginx</li><li>Zero-downtime deploy with release directories and symlink flips</li><li>Firewall, logging, and monitoring checklist</li></ul></div></div><div class="technical-section"><h2>1. Directory Layout and Ports</h2><p>Keep each site in its own tree under <code>/var/www</code>. Use a <code>releases</code> folder plus a <code>current</code> symlink so deploys are atomic and rollbacks are one command.</p><pre><code>/var/www/
  site-a/
    releases/
      2026-08-01-1200/
      2026-08-02-0900/
    current -> releases/2026-08-02-0900
  site-b/
    releases/
    current -> ...
/etc/nginx/sites-available/
  site-a.conf
  site-b.conf
/etc/nginx/sites-enabled/   # symlinks to sites-available
</code></pre><p>Each Next.js app listens on a unique localhost port (3001, 3002, …). Never bind Node to a public interface. Nginx alone terminates TLS and proxies to <code>127.0.0.1:&lt;port&gt;</code>.</p></div><div class="onpage-section"><h2>2. Nginx Server Block for Next.js</h2><p>Use a dedicated server block per hostname. Prefer HTTP/2, modern TLS, and the proxy headers Next.js and logging need.</p><pre><code>server {
  listen 443 ssl http2;
  server_name example.com www.example.com;

  ssl_certificate     /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

  # Optional: security headers
  add_header X-Frame-Options "SAMEORIGIN" always;
  add_header X-Content-Type-Options "nosniff" always;

  location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
  }
}

# Redirect HTTP to HTTPS
server {
  listen 80;
  server_name example.com www.example.com;
  return 301 https://$host$request_uri;
}
</code></pre><p>Enable the site with a symlink into <code>sites-enabled</code>, test with <code>nginx -t</code>, then reload. For multi-domain email deliverability on the same VPS, see also <a href="/blog/spf-dkim-dmarc-multi-domain-vps">SPF, DKIM &amp; DMARC for Multi-Domain VPS</a>.</p></div><div class="content-strategy-section"><h2>3. PM2 Ecosystem for Multiple Apps</h2><p>Define every app in one ecosystem file so process management is consistent.</p><pre><code>// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'site-a',
      cwd: '/var/www/site-a/current',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      instances: 1,
      exec_mode: 'fork',
      env: { NODE_ENV: 'production', PORT: 3001 },
    },
    {
      name: 'site-b',
      cwd: '/var/www/site-b/current',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3002',
      instances: 1,
      exec_mode: 'fork',
      env: { NODE_ENV: 'production', PORT: 3002 },
    },
  ],
}
</code></pre><p>Start or reload with <code>pm2 start ecosystem.config.cjs</code> and <code>pm2 reload site-a</code>. Use <code>output: 'standalone'</code> in Next.js for smaller runtime footprints when you later move to Docker (see <a href="/blog/docker-multi-stage-nextjs-16-standalone-production">Docker Multi-Stage Builds for Next.js 16</a>).</p></div><div class="local-seo-section"><h2>4. Zero-Downtime Deploy Pattern</h2><ol><li>Build on CI or on the server into a new timestamped release directory.</li><li>Install production dependencies and run <code>next build</code> (or copy a pre-built standalone output).</li><li>Flip the <code>current</code> symlink to the new release.</li><li><code>pm2 reload &lt;app-name&gt;</code> so the process picks up the new code with minimal downtime.</li><li>Keep the previous release for instant rollback: point <code>current</code> back and reload again.</li></ol><p>This pattern avoids in-place overwrites and makes failed deploys recoverable in seconds.</p></div><div class="linkbuilding-section"><h2>5. SSL with Certbot and Auto-Renewal</h2><p>Issue certificates once per primary domain (and www if needed), then rely on Certbot’s timer.</p><pre><code>sudo certbot --nginx -d example.com -d www.example.com
</code></pre><p>Add a deploy hook so Nginx reloads after renewal:</p><pre><code># /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh
#!/bin/sh
systemctl reload nginx
</code></pre><p>Test renewal with <code>certbot renew --dry-run</code>. Keep only ports 80/443 (and SSH) open on the firewall.</p></div><div class="analytics-section"><h2>6. Monitoring and Hardening</h2><ul><li>Firewall: allow 80, 443, and SSH only; deny public access to Node ports</li><li>Log rotation for Nginx access/error logs and PM2 logs</li><li>Disk and memory alerts (simple cron + df/free or a lightweight agent)</li><li>Health checks against each public hostname</li><li>Fail2ban or equivalent on SSH</li><li>Keep system packages and Node LTS updated on a schedule</li></ul></div><div class="faq-section"><h2>7. FAQ: Multi-Site Next.js on VPS</h2><h3>How many Next.js apps can one VPS run?</h3><p>It depends on traffic and memory. Each Node process needs RAM for the app and peak concurrency. Start with one or two apps on a 2–4 GB VPS, monitor RSS and CPU, then scale vertically or split hosts.</p><h3>Should I use PM2 cluster mode with Next.js?</h3><p>For most sites, a single fork instance per app behind Nginx is simpler and sufficient. Next.js already handles concurrent requests inside one process. Use multiple instances only when you have measured CPU-bound load and understand sticky sessions / shared cache implications.</p><h3>Is Nginx required or can I expose Next.js directly?</h3><p>Do not expose Node publicly. Nginx (or another reverse proxy) should terminate TLS, handle HTTP→HTTPS redirects, and forward only to localhost ports.</p><h3>How does this relate to Prisma and connection pooling?</h3><p>On a long-lived VPS process you can use a higher Prisma <code>connection_limit</code> than pure serverless. Still prefer a pooler (PgBouncer or Prisma Accelerate) under concurrent load. See the <a href="/blog/prisma-connection-exhaustion-nextjs-16-accelerate">Prisma Connection Exhaustion guide</a>.</p><h3>When should I move from PM2 to Docker?</h3><p>When you need reproducible images, stricter isolation, or the same deploy path across multiple servers. Multi-stage standalone builds are the next step after a stable PM2 + Nginx setup.</p></div><div class="conclusion-section"><h2>8. Production Checklist</h2><ul><li>Unique localhost ports per app; never expose Node ports publicly</li><li>TLS via Certbot with a renew hook that reloads Nginx</li><li>Firewall: only 80/443 and SSH open</li><li>PM2 ecosystem file for all apps; reload (not restart) for deploys</li><li>Symlink releases for atomic deploys and fast rollback</li><li>Log rotation for Nginx and PM2</li><li>Health checks and disk/memory alerts</li><li>Proxy headers: Host, X-Forwarded-For, X-Forwarded-Proto, Upgrade/Connection for websockets</li></ul><h2>Summary</h2><p>Nginx + PM2 + symlink releases is a durable, low-cost way to run multiple Next.js production sites on one VPS. Isolate processes by port, terminate TLS at Nginx, deploy with atomic symlink flips, and monitor resources. This foundation scales until you need Docker or a larger fleet.</p><div class="final-takeaway"><h3>Key Takeaway</h3><p><em>Isolate processes by port, terminate TLS at Nginx, deploy with symlink flips plus PM2 reload, and keep Node off the public internet.</em></p></div><hr><div class="cta-section"><h3>Need a production VPS multi-site setup?</h3><p>I configure multi-site Next.js hosting, SSL, PM2, and deploy pipelines on VPS. <a href="/contact" style="color: #39FF14;">Get in touch</a>, or explore <a href="/services" style="color: #39FF14;">DevOps and full-stack services</a>.</p></div></div>`
export const date = '2026-05-15'
export const readTime = '12 min read'
export const category = 'DevOps'
export const author = 'Mussawar Hayat'
export const keywords = ['Multi-site Next.js VPS', 'Next.js Nginx reverse proxy', 'PM2 Next.js production', 'Next.js SSL Certbot', 'deploy Next.js VPS', 'Nginx HTTP/2 Next.js', 'zero-downtime Next.js deploy', 'multiple Next.js apps one server', 'Next.js 16 VPS deployment']
