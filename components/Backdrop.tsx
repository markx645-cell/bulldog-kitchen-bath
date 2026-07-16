// Fixed decorative backdrop: soft blurred blooms on the near-white ground.
// Sections are transparent, so this sits behind the whole page and gives the
// glass panels something to refract — without it, frosted glass reads as a
// flat tint. Kept low-opacity so the page stays black/white/crimson, not pink.
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bone">
      {/* crimson blooms */}
      <div className="absolute -left-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-crimson/20 blur-3xl" />
      <div className="absolute -right-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-crimson/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-crimson/20 blur-3xl" />

      {/* ink pools — depth, and contrast for the refraction */}
      <div className="absolute right-1/4 -top-10 h-[22rem] w-[22rem] rounded-full bg-ink/[0.06] blur-3xl" />
      <div className="absolute -left-16 top-1/2 h-[28rem] w-[28rem] rounded-full bg-ink/[0.05] blur-3xl" />

      {/* warm cream wash to keep the whites from going clinical */}
      <div className="absolute bottom-1/3 right-1/3 h-[24rem] w-[24rem] rounded-full bg-cream blur-3xl" />
    </div>
  );
}
