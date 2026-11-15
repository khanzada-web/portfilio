# Changelog

## 2026-11-15: SEO, performance & audience audit fixes

### Technical SEO
- **robots.txt:** replaced ~20 per-bot groups with one `User-agent: *` group. Before, `Disallow: /api/` only applied to the last group.
- **Sitemap:** `<lastmod>` uses real dates only (posts and legal pages, and `/blog` uses the newest post). Pages with no tracked edit date leave it out instead of claiming "today" on every build.
- **Icons:** new `app/favicon.ico` (16/32/48) and `app/apple-icon.png` (180px PNG), plus `icon-192.png`/`icon-512.png` (maskable) in the web manifest. `/favicon.ico` no longer 404s and the touch icon is no longer WebP.
- **RSS:** the `<link rel="alternate">` for `/feed.xml` is now in `<head>` on every page (before, pages that set their own canonical dropped it).
- **Structured data:** a site-wide `@graph` with `Person`, `ProfessionalService` and `WebSite` (`sameAs` GitHub, LinkedIn, X, Twine; `knowsAbout`; `areaServed`). The existing `#person` references on About, case studies and posts now resolve. Blog posts name the Person as author and publisher.
- **Share card:** generated 1200×630 `opengraph-image`/`twitter-image` (name, role, stack, EST/CET overlap) on every page, replacing the cropped portrait. "Best"/"Top-rated" wording was removed from `og:site_name` and the Twitter title.
- **Content-Security-Policy:** a static policy in `next.config.ts` limits scripts to this site and Google Tag Manager. It doesn't use a nonce, because a nonce would force every page to render dynamically.

### Content & trust
- **Hero:** the H1 role now matches the title ("Next.js & Web3 Full-Stack Developer"). The second "Attock, PK" and the "Nº 039FF14" pass number were replaced with EST / CET overlap. The pitch line is plain English.
- **Process:** buzzword step copy ("user psychological conversion", "99th percentile performance", "automated scaling protocols") was replaced with concrete steps. The CTA "Initiate Project_Build" became "Start your project".
- **Testimonials:** removed the `VERIFIED_PARTNER` / `CORE_CONTRIBUTOR` / `EXTERNAL_AUDIT` badges, which made claims that couldn't be checked.
- **Blog:** read time is calculated from the word count at 230 wpm (it was hand-entered and about 2× too high). Every post has an author box with photo, role, bio and profile links.

### Conversion & readability
- **Contact form:** optional Project type, Budget and Timeline fields. They're forwarded to the CRM as custom fields and included in the notification email.
- **Security:** the notification email escapes all user input, which fixes HTML injection from the form.
- **Readability:** every 10–11px label is now at least 12px (55 instances, plus the `.tag` utility).

## 2026-11-14 (later): Inner pages, projects, contact details

### Content
- **New flagship projects:**
  - **Octovate CRM** (`crm.octovate.io`).
  - **CCS Agency OS** (`portal.clientcaresolutions.org`).
  - Descriptions are taken from each site's public copy; there are no invented case-study details yet. A new `saas` category was added for them.
- **Email:** now `reply@mussawarhayat.site` everywhere (Contact, Footer, About, FAQ answer, Privacy, Terms, `llms.txt`).
- **Phone:** removed everywhere.

### Home
- **About** is rebuilt as a portrait-led profile with "One engineer, / End-to-end." in bold solid caps.
- **Section headings:** every one now uses bold solid caps (a white line and a neon line, with no outline). Section-level `PointerFX`, `InView` and the heading x-ray scan are removed.
- **Services grid:** the title decode plays on a clipped overlay, so tiles never change size. The corner brackets no longer touch the text.
- **Process:** all timeline cards are left-aligned.
- **Hero:**
  - The background now matches the other sections (ink plus one soft glow). The aurora, grid floor, grain and cursor spotlight are removed, along with their CSS, `SpotlightTracker` and `StaggerItem.spotlight`.
  - New landscape `DevPassCompact` for phones and tablets; the pitch paragraph is hidden below `md`.

### Inner pages
- **Shared:** a new `PageShell` (header, ink, glow, padded main, footer), `SectionLabel`, and `EditorialHeadline` with `as="h1"` (CSS entrance so the h1 paints immediately) and an optional accent line. Each page's index shows its path, e.g. `[/about]`.
- **`/about`:** portrait and bio, stats row, focus-area grid, how-I-work steps, stack list, CTA with direct channels.
- **`/services`:** hairline service grid, engagement models, why-hire. The page now also **shows its six FAQs**, which were previously only in `FAQSchema` (Google requires them to be visible).
- **`/portfolio`:** large numbered flagship index and a compact archive list.
- **Case studies:** two-tone title, write-up, and a sticky fact sheet with links and a CTA.
- **`/blog`:** featured latest post plus a scannable ruled list of all guides.
- **Blog posts:** reading-width article, a sticky sidebar (details, related guides, hire prompt), and a ruled FAQ.
- **`/contact`:** a dedicated page with channel rows, facts, the form, and a "What happens next" section. Before, it reused the home section and had no `h1`.
- **`/privacy`, `/terms`:** now have the header and footer (they had neither) and the shared headline.
- **404:** shared headline and links.

### Fixes
- **Hydration mismatch:** removed a stray `</p></div>` at the end of `nextjs-16-core-web-vitals-optimization-2026.ts`. All 46 posts were re-checked and parse correctly.
- **Page titles:** removed a duplicated "| Mussawar Hayat" from the `/contact`, `/privacy` and `/terms` titles.
- **Dev warnings:**
  - Added `data-scroll-behavior="smooth"` on `<html>`, as Next requested.
  - `Parallax` now has `position: relative`, as Framer requested.

## 2026-11-14: Home page simplified to eight sections

### Removed from the home page
- **Global Impact:** fake terminal readouts (`99.98%`, `PK_782X`).
- **Tech Architecture:** repeated Services.
- **SaaS Products:** quote/demo modules that only linked to contact.
- **Performance Lab:** a "100/100 Lighthouse" claim the site doesn't meet.
- Their components (`GlobalImpact`, `TechArchitecture`, `SaasProjects`, `PerformanceLab`, `ScoreRing`) are deleted. Restore them from git if needed.

### One idea per section
| # | Section | Idea |
|---|---|---|
| 01 | Hero | Unchanged (letter field, x-ray name, developer pass) |
| 02 | About | Scroll-lit manifesto, spec-sheet facts, proof numbers. Capability rows (they repeated Services) and skill percentages removed |
| 03 | Services | Hairline 3×3 grid (`ServiceGrid`); on hover the title decodes like a terminal and neon corner brackets lock on. Replaces the sticky-preview index |
| 04 | Work | Flagship projects as CSS-sticky stacking cards; the archive lives on `/portfolio`. Moved before Process |
| 05 | Process | Scroll-drawn timeline (unchanged) under the shared headline |
| 06 | Testimonials | Swipeable quote carousel under the shared headline |
| 07 | FAQ | Numbered accordion on hairline rules |
| 08 | Contact | Full-bleed outlined marquee and form under the shared headline |

### Type scale (follow-up)
- **Hierarchy:** only the hero name is giant. Section headings use one fixed scale, `clamp(2rem, 4.2vw, 3.75rem)` (32px phones → 60px max), instead of filling the width. The `fit` prop is removed.
- **Header layout:** the index line across the top, the heading in 7/12 columns on the left, and the intro paragraph in 5/12 on the right, bottom-aligned (stacked on phones). The outline stroke is now 1.5px.
- **Stepped down:**
  - About manifesto: max 2.125rem.
  - About proof numbers: max 3.25rem.
  - Project card titles: max 2.75rem.

### System
- Every section uses `EditorialHeadline` (`[0X]` index line, solid line + x-ray outline line) and `--page-pad`. All headlines start at the same x: 48px desktop, 24px mobile.
- `scrambleTo` is extracted from `DecodeText` and shared by the hero pill and Services titles.

### Deleted (no longer used)
`SectionHeading`, `MaskText`, `ServiceIndex`, `ProjectCard`, `ArchiveProjects`, `CursorLabel`, `HandoffScene`, `CapabilityIndex`, `AboutHeadline`, `getArchiveProjects`, and the `HANDOFF` / `METER` tokens.

## 2026-11-12 (later): Hero and About design pass

### Hero
- **Developer pass:** replaces the 5-layer stack. A holographic pass on a neon lanyard with your photo; it drops in, sways, tilts toward the cursor and catches a sheen.
- **Name:** letters assemble on load and lift/tint near the cursor (letter field). "HAYAT" is a neon outline with an x-ray flashlight fill and one load-time scan, followed by a blinking terminal caret.
- **Meta and CTA:** availability pill and location decode like a terminal; a light beam circles "Start a project".
- **Layout:** decluttered so the name has its own column (`--title-span`) and never runs under the pass.
- **Fixed:** x-ray fill clipped to a hard rectangle (mask box too small for glyph overflow); pointer effects not starting on touchscreen laptops (now `any-hover` / `any-pointer`).
- **New:** `HeroPointerFX` (one pointer listener for every hero effect), `DevPass`, `DecodeText`, `LocalTime`. Removed: `HeroStack`.

### About
- **Headline (`AboutHeadline`):** "Architecting / Scalable / Digital Products" set huge in three lines.
  - "Architecting" letters react to the cursor.
  - A neon "build" equalizer sits inline before "Scalable".
  - "Digital Products" is a neon outline with an x-ray fill and a scan when it comes into view.
  - Sized from measured Orbitron widths.
- **Shared padding:** About and the hero now share `--page-pad`, so their edges line up.
- **Manifesto:** the profile sentence lights up word by word with scroll (`ScrollLitText`).
- **Thought experiment (`HandoffScene`):** "How many people does it take to ship a product?" A pinned scroll scene where five specialists and their 10 handoff lines converge into one "MH" core while the counters fall 5 → 1 and 10 → 0.
- **What I bring (`CapabilityIndex`):** a scroll-spy spec sheet. A huge outlined index number stays pinned and flips to the row crossing the center, which lights up.
- **Metrics:** a full-width band of big count-up numbers.
- **Skills:** 20-segment LED meters in two columns (`InView` + CSS delays).
- **Photo:** removed from About; it now appears on the hero pass.
- **Generalized:** the hero pointer driver is now `PointerFX` and supports several x-ray words per section.

### Services
- **Headline:** the new shared `EditorialHeadline` (ui/), also used by About: an index line, a solid line and a neon-outline line with x-ray hover, sized from measured Orbitron widths.
- **Service index (`ServiceIndex`):** the nine boxed cards are now a typographic, numbered list.
  - Hovering, focusing or clicking a row dims the others, draws a neon hairline under it and crossfades a sticky preview panel (category, description, tags, "Inquire").
  - On phones the details show inline.
  - All copy unchanged.
- **Closing CTA:** a ruled band with a magnetic CTA.

### Other
- `suppressHydrationWarning` on `<html>` / `<body>` for attributes injected by browser extensions (QuillBot, ColorZilla).

## 2026-11-12: Home page motion refactor and cleanup

See `AUDIT.md` for the findings, measurements and items that need manual review.

### Fixed
- `main` did not build: `Hero.tsx` (a Server Component) used `next/dynamic` with `ssr: false`.

### Created
- `app/lib/motion.ts`: the single source of motion tokens and variants.
- `app/components/motion/`:
  - `MotionProvider`, `features`, `features-drag`
  - `Reveal`, `Stagger`, `MaskText`, `CountUp`
  - `Magnetic`, `Parallax`, `CursorLabel`
  - `ScrollProgress`, `BackToTop`, `LoopWhenVisible`, `SpotlightTracker`
- `app/components/ui/SectionHeading.tsx`, `app/components/ui/SectionGlow.tsx`
- `app/components/sections/`:
  - `HeroCopy`, `LocalTime`
  - `ProcessTimeline`
  - `ProjectCard`, `ArchiveProjects`
  - `ScoreRing`
  - `TestimonialCarousel`
  - `ContactForm`
- `app/blog/[slug]/article.css`: blog article styles, now loaded only on blog posts.
- `AUDIT.md`, `CHANGELOG.md`

### Rewritten
- **Home sections, now Server Components:** Hero, About, Services, GlobalImpact, TechArchitecture, SaasProjects, Process, Portfolio, PerformanceLab, Testimonials, FAQ, Contact.
- **Header** (scroll-aware) and **Footer** (now a Server Component).
- **`HeroStack`:** compact, server-rendered, pauses off-screen.
- **`app/globals.css`:** design tokens (`neon`, `ink`, `night`, `panel`), base, shared utilities (`card`, `btn-neon`, `btn-ghost`, `tag`, `link-underline`, `spotlight`, `grain`), motion keyframes and reduced-motion rules. 511 → 221 lines.
- **`app/page.tsx`:** plain imports instead of no-op `dynamic({ ssr: true })` wrappers.

### Merged
- 11 copy-pasted section headers → `SectionHeading`.
- 11 blurred glow blobs → `SectionGlow`.
- Repeated card, button and tag class strings → `card`, `btn-neon`, `btn-ghost`, `tag` utilities.
- 4 local `VIEWPORT` constants and every inline duration/easing → `app/lib/motion.ts`.
- 403 hard-coded `[#39FF14]` / `[#030712]` / `[#060B16]` / `[#0B132B]` classes → theme tokens.
- `react-icons/fa` → `react-icons/fi` only.

### Deleted
- `app/components/AdSense.tsx`: never rendered. See AUDIT.md, manual review item 1.
- `app/components/seo/ReviewSchema.tsx`, `app/components/seo/ServiceSchema.tsx`: never imported.
- `app/components/ui/AnimatedCounter.tsx`: replaced by `CountUp`.
- `app/components/sections/HeroStatic.tsx`: replaced by `HeroCopy`.
- `app/fonts/*.woff2` (8 files): never referenced.
- Unused CSS: `.gradient-text`, `.btn-primary`, `.hover-card`, `.code-card*`, `.blog-card` and 6 unused callout classes, 4 keyframes, 3 `animate-*` classes, 5 dead CSS variables.
- npm packages:
  - `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three`
  - `@fontsource/manrope`, `@fontsource/roboto`, `@fontsource/roboto-mono`, `@fontsource/sora`
  - `react-intersection-observer`, `@vercel/speed-insights`, `@next/third-parties`, `critters`
- Unused imports in `app/contact/page.tsx` and `app/portfolio/page.tsx`.

### Moved
- `@types/nodemailer` from dependencies to devDependencies.

### Config
- `next.config.ts`: `optimizePackageImports` trimmed to the packages that are actually used (`framer-motion`, `react-icons/fi`).
- `app/layout.tsx`: wraps the app in `MotionProvider`; Geist Mono is no longer preloaded.

## 2026-11-15: Dependency updates and new performance guide

### Engineering
- Updated Next.js and eslint-config-next to 16.4.6.
- Updated sharp to 0.35.5 to address security advisories.
- Ran npm audit fix; remaining issues are transitive or require breaking changes that were not applied.
- Production build and TypeScript checks pass after the upgrades.

### Content
- Added blog post: Next.js 16.4 Performance Migration Guide 2026.
