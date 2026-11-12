# Changelog

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
