# Codebase audit — home page motion refactor

Date: 2026-11-12 · Base commit: `6c498eb` (plus the uncommitted Hero build fix, see "Pre-existing build break")

Tools used: `knip@5`, `depcheck`, `eslint`, `next build` (Turbopack), Lighthouse 12 (mobile, local `next start`), and manual `grep` to confirm every removal.

---

## 0. Pre-existing build break (fixed first)

`app/components/sections/Hero.tsx` (a Server Component) called `next/dynamic` with `ssr: false`. Next 16 rejects that, so **`main` did not build**. Fixed by moving the dynamic import into a client wrapper (`HeroStackLazy.tsx`). All "before" numbers below were measured with that fix applied.

---

## 1. Unused code

| Item | Evidence | Action |
|---|---|---|
| `app/components/AdSense.tsx` | Not imported anywhere (knip and grep). The AdSense loader script was also removed from `layout.tsx` upstream. | **Delete.** See *needs manual review*: ads are currently off site-wide. |
| `app/components/seo/ReviewSchema.tsx` | Not imported anywhere | **Delete** |
| `app/components/seo/ServiceSchema.tsx` | Not imported anywhere | **Delete** |
| `app/components/ui/AnimatedCounter.tsx` | Used once. Re-renders every 20 ms via `setInterval` and starts on mount, not when it scrolls into view | **Replace** with `CountUp` (rAF, writes to the DOM directly, starts on view, runs once) |
| `app/fonts/*.woff2` (8 Manrope/Sora files) | No reference in any file | **Delete** |
| `public/logo.avif` | Looked unused in code, but `public/site.webmanifest` lists it as an icon (Lighthouse caught the 404) | **Kept** |
| `export type ProjectCategory` (`app/lib/projects.ts`) | Only used inside the file | Un-export |
| `BlogPost` type export | Used inside `posts.ts` only, but it describes the public return type | Keep (intentional API) |
| knip "unused files" for `app/blog/content/*.ts` | **False positive.** Loaded through dynamic `import(\`../content/${slug}\`)` | Keep |

### npm dependencies

| Package | Evidence | Action |
|---|---|---|
| `three`, `@react-three/fiber`, `@react-three/drei`, `@types/three` | No import anywhere (only `optimizePackageImports` mentions them) | **Remove** |
| `@fontsource/manrope`, `@fontsource/roboto`, `@fontsource/roboto-mono`, `@fontsource/sora` | No import. Fonts come from `next/font/google` | **Remove** |
| `react-intersection-observer` | No import | **Remove** |
| `@vercel/speed-insights` | No import | **Remove** |
| `@next/third-parties` | No import (GTM is loaded on first interaction by an inline script) | **Remove** |
| `critters` | Only needed for `experimental.optimizeCss`, which upstream turned off | **Remove** |
| `@types/nodemailer` | Type-only package listed under `dependencies` | Move to `devDependencies` |
| `sharp` | Flagged by knip, but Next uses it at runtime for image optimisation in `standalone` output | Keep |

---

## 2. Dummy / placeholder code

- No lorem ipsum, `console.log`, TODO/FIXME or demo pages outside blog content.
- Two `eslint-disable` comments that hide `setState` inside effects (`Header.tsx`, `AnimatedCounter.tsx`). Both go away in the rewrite.
- **Fake system readouts** written as copy: GlobalImpact terminal (`Uptime 99.98%`, `Node_ID PK_782X`, `Traffic AES_256`), TechArchitecture footers (`Stable.Build`, `Checksum_Verified`), Process panel (`Status: Optimized_Core`, `Priority: Critical_System`).
  - The Process readouts disappear with the timeline redesign (there is no single "current step" panel any more).
  - The others are kept because they're part of the visual identity. See *needs manual review*.

---

## 3. Duplication

| Duplicate | Where | Consolidated into |
|---|---|---|
| Section header (eyebrow badge with pulsing icon + h2 with accent span + intro paragraph) | 11 sections, copy-pasted with small differences | `components/ui/SectionHeading.tsx` |
| Ambient glow blob (`absolute inset-0 opacity-20 … blur-[160px]`) | 11 sections | `components/ui/SectionGlow.tsx` |
| Glass card classes (`bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-xl … hover:border-[#39FF14]/40`) | ~20 places | `.card` utility in `globals.css` |
| Primary / ghost button classes | ~14 places | `.btn-neon` / `.btn-ghost` utilities |
| Tech-tag pill classes | 5 places | `.tag` utility |
| `const VIEWPORT = { once: true, amount: 0.2, margin: … }` | 4 files | `app/lib/motion.ts` |
| Inline motion numbers (`duration: 0.4`, `delay: i * 0.05`, `ease: 'easeOut'`, `y: 16` …) | 11 files | `app/lib/motion.ts` tokens + shared components |
| Two icon packs (`react-icons/fa` in SaasProjects, `react-icons/fi` everywhere else) | SaasProjects | Feather (`fi`) only |
| `font-orbitron` set on every section | 11 sections | Kept per section (other pages use the same pattern) |
| Header + Footer imported on every page | 9 pages | Kept: each page controls its own wrapper/background, so moving them into the layout is a cross-page layout change outside this task |

---

## 4. Animation duplication and problems

- **Two animation systems.** Framer Motion (11 files) plus unused CSS keyframes in `globals.css` (`float`, `fade-in`, `fade-in-up`, `spin-slow` and their `animate-*` classes, none referenced), plus Tailwind `animate-pulse` / `animate-[spin_…]` used directly.
- **Framer Motion loaded in full** (`motion.*`) in 11 components, so about 35 KB gz of animation features are on the critical path.
- **Infinite animations that never pause:** GlobalImpact `rotate: 360` (Framer, `repeat: Infinity`) plus a CSS reverse spin; `animate-pulse` on 13 badges and dots; Process, Testimonials and HeroStack auto-play intervals keep running off-screen.
- **Animating layout properties** (forbidden by the brief):
  - About skill bars animate `width`.
  - Portfolio archive animates `height: 0 → auto`.
  - Header mobile menu animates `max-height`, and the header itself animates `padding`.
  - Nav underlines and progress dots animate `width`.
- **`transition-all`** on ~25 elements (now partly fixed by the earlier stash tweaks).
- **No `prefers-reduced-motion` handling** anywhere except HeroStack.

---

## 5. Global CSS bloat (`app/globals.css`, 511 lines)

- **Unused:**
  - Classes: `.gradient-text`, `.btn-primary`, `.hover-card`, `.code-card*`, `.blog-card`, `.checklist-box`, `.strategy-grid`, `.callout-info`, `.link-building-tactics`, `.tools-focus`.
  - The 4 keyframes and 3 `animate-*` classes.
  - Variables: `--primary`, `--primary-hover`, `--secondary`, `--transition-base`, `--transition-fast`.
- **Component-specific styles in global scope:** ~400 lines of blog-article prose styles (`.prose-invert …`) load on every page, including the home page. These move to a route-scoped stylesheet imported only by `app/blog/[slug]/page.tsx`.
- `prose` / `prose-headings:*` / `prose-a:*` classes on the blog article are **no-ops** because `@tailwindcss/typography` isn't installed. Left as-is, see *needs manual review*.
- `.container` is redefined outside a layer (`max-width: 1200px`). That overrides Tailwind's `max-w-7xl` / `px-6` on every section. **Kept as-is** to preserve the current layout; listed for review.
- `html { scroll-behavior: smooth }` ignores reduced motion. Fixed.
- Scrollbar thumb uses `--foreground` (#171717) on a near-black site. Kept (branding), noted.

---

## 6. Performance issues (baseline)

Lighthouse 12, mobile emulation, local production build (`next start`), home page:

| Metric | Before |
|---|---|
| Performance | **84** |
| Accessibility | 91 |
| Best Practices | 100 |
| SEO | 100 |
| FCP | 1.1 s |
| LCP | **3.8 s** (hero subtitle text; 1.3 s "element render delay", i.e. the main thread was blocked by JS) |
| TBT | 240 ms |
| CLS | 0 |
| Speed Index | 2.7 s |
| Initial JS + CSS for `/` | 13 files · **998 KB raw / 290 KB gzip** |

Causes found:

- **Every home section is a Client Component** (`'use client'`), including FAQ, which has no state at all. All section markup is hydrated, and all of Framer Motion ships up front.
- `page.tsx` wraps Server Components in `next/dynamic({ ssr: true })`. Per the Next 16 docs, that gives **no code splitting** for Server Components; it only adds indirection.
- About's `AnimatedCounter` re-renders React state every 20 ms.
- `optimizePackageImports` lists packages that aren't installed or used (`three`, `@react-three/*`, `react-icons/fa`).
- Accessibility failures: 27 × `color-contrast` (text at `white/30`–`white/50` on the dark background), 6 × `target-size` (1.5-px-tall carousel dots), 1 × `aria-prohibited-attr` (`aria-label` on a plain `div` for the star rating).

---

## Needs manual review (kept on purpose)

1. **AdSense is off site-wide.** The loader script was removed from `layout.tsx` upstream and the `<AdSense>` component was never rendered. `public/ads.txt` and the privacy policy still describe AdSense. Decide whether ads should come back; the component is deleted here but can be restored from git.
2. **Fake status copy** (GlobalImpact terminal "99.98% uptime", "PK_782X"; TechArchitecture "Checksum_Verified"). It reads as decorative, but "99.98% uptime" is a factual claim.
3. **`.container` override** in `globals.css` caps content at 1200 px and beats Tailwind's `max-w-*` / `px-*`. Removing it would widen every section to 1280 px.
4. **Blog `prose` classes do nothing.** Either install `@tailwindcss/typography` or drop the classes; the custom route CSS currently does the styling.
5. **Contact API HTML injection.** `app/api/contact/route.ts` puts raw `name` / `email` / `message` into the admin email HTML. Out of scope for a UI refactor, but worth fixing.
6. **AGENTS.md is stale:** it mentions `app/api/crm/route.ts` (doesn't exist), CRM tracking in `layout.tsx` (removed), and `optimizeCss` (turned off).

---

## Results

### Lighthouse (mobile, simulated throttling, local `next start`, same method before and after)

| Metric | Before | After (3 runs) |
|---|---|---|
| Performance | 84 | **86 – 90** |
| Accessibility | 91 | **100** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |
| FCP | 1.1 s | 1.1 s |
| LCP (simulated) | 3.8 s | 3.6 – 3.7 s |
| LCP (observed, unthrottled) | 1.34 s | **0.47 – 0.55 s** (= FCP: headline counts on first paint) |
| TBT | 240 ms | 90 – 190 ms |
| CLS | 0 | **0** |
| Speed Index | 2.7 s | 1.9 – 2.1 s |

The simulated LCP still sits above 2.5 s. Lighthouse's mobile model charges all JavaScript requested before first paint to LCP, and what remains is mostly framework code: react-dom ≈ 72 KB gz, the Next router ≈ 51 KB gz, other Next runtime ≈ 30 KB gz. Framer Motion is ≈ 29 KB gz, and its features load asynchronously. The real paint happens at first render (observed LCP = FCP).

Getting to 90+ on every run would need a framework-level change, such as turning off client-side navigation (Next has no switch for that) or dropping Framer Motion entirely for CSS-only reveals. That is out of scope here.

### Bundle (home page, initial assets referenced by `index.html`)

| | Before | After |
|---|---|---|
| JS + CSS, raw | 997,663 B | 848,617 B (**−15%**) |
| JS + CSS, gzip | 289,500 B | 253,610 B (**−12%**); 39 KB of it is the `noModule` polyfill modern browsers never fetch |
| npm runtime dependencies | 18 | **6** |
| `'use client'` section components | 12 of 12 | **0 of 12**; client code is limited to 22 small leaves (motion primitives, form, carousel, timeline, header) |
| HTML (`index.html`) | 225 KB raw | 473 KB raw / 63 KB gzip |

HTML grew because Server Component markup passed as `children` into client motion wrappers is serialized twice: once as HTML and once in the RSC payload. That costs far less than shipping the same sections as client JavaScript, and it is reflected in the TBT and Speed Index gains.

### What changed

- **One motion system.**
  - `app/lib/motion.ts` holds every easing, duration, distance, viewport trigger, spring, autoplay interval and variant.
  - `app/components/motion/*` holds the primitives: `Reveal`, `Stagger`/`StaggerItem`, `MaskText`, `CountUp`, `Magnetic`, `Parallax`, `CursorLabel`, `ScrollProgress`, `BackToTop`, `LoopWhenVisible`, `SpotlightTracker`.
  - Framer Motion is loaded through `LazyMotion` (strict, async `domAnimation`; drag features only for the testimonial carousel).
  - The CSS keyframes in `globals.css` mirror the same tokens. They are used only where JS must not be required: the hero entrance, and cheap looping decoration that pauses off-screen.
- **Reduced motion respected everywhere:** `MotionConfig reducedMotion="user"`, a global CSS media query, autoplay disabled, scroll-linked effects frozen.
- **Only `transform`, `opacity`, `clip-path` and `filter` are animated.** Removed animations on `width` (skill bars, nav underline, dots), `height` (archive panel), `max-height` (mobile menu) and `padding` (header).
- **Per-section motion:**

  | Section | Motion |
  |---|---|
  | Hero | Poster layout locked to one viewport; width-filling name with a focus-pull entrance; perspective grid floor, aurora, cursor spotlight, live local clock; magnetic CTA; parallax product stack |
  | Section headings | Masked word-by-word slide-up (shared `SectionHeading`) |
  | About | Staggered cards with spotlight; portrait clip-wipe; count-up; skill bars grow with `scaleX` |
  | Services | Staggered rise; spotlight; hover lift; magnetic CTA |
  | Global Impact | CSS orbit paused off-screen; nodes pop in; status panel slides in; count-up |
  | Architecture | Layers slide in from alternating sides |
  | SaaS Products | Cards scale in; banner clip-wipe |
  | Process | Vertical timeline whose line draws with scroll; the current step lights up |
  | Portfolio | Cards clip-wipe in; whole card clickable; cursor-following "View case study" label; archive cards fade up (no height animation) |
  | Performance Lab | Rings draw with `pathLength` while scores count up |
  | Testimonials | Draggable/swipeable carousel with direction-aware slides; pauses on hover, focus, off-screen and reduced motion |
  | FAQ | Staggered reveal (now a Server Component) |
  | Contact | Outlined marquee band; big masked headline; panels slide in from both sides |
  | Header | Hides on scroll down, returns on scroll up; scroll progress bar; active-section indicator on the home page; `scaleX` underlines; fading mobile menu with Escape to close |
  | Footer | Staggered columns; animated link underlines; back-to-top appears only after the first screen |

- **Accessibility:**
  - Text contrast raised (`white/30–50` → `white/60–75` on informative text).
  - 44-px hit areas on carousel indicators.
  - The star rating has `role="img"`.
  - Keyboard focus styles on every new control.
  - The fake `role="tab"` markup on the Process dots is gone.

### Copy and content changes made for the redesign

- **Hero:** the second, repeated sub-paragraph ("Remote full-stack developer building…") was removed so the hero fits one screen. The per-layer summary sentences in the hero stack were shortened to tech lists; the same content lives in the Architecture section. Added "Available for freelance" and a live "Attock, PK · PKT" clock.
- **Process:** the auto-playing tab panel is now an always-visible timeline, so its fake "Status: Optimized_Core / Priority: Critical_System" readouts were dropped.
- **SaaS Products:** Font Awesome icons swapped for their Feather equivalents (one icon pack site-wide).
