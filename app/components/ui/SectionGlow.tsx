/**
 * Soft ambient glow behind a section. A radial gradient instead of a blurred div:
 * same look, no 160px blur filter to rasterize on scroll.
 */
export function SectionGlow({ className = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px]' }: { className?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className={`absolute bg-[radial-gradient(closest-side,rgb(57_255_20/0.06),transparent)] ${className}`} />
    </div>
  );
}
