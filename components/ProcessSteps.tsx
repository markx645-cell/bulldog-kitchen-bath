import { process } from '@/content/site';

// Matches the production homepage PROCESS section: eyebrow, heading, sub, then
// all 7 steps as "STEP 01" + title + description across a 4-column grid.
export default function ProcessSteps({
  compact = false,
  eyebrow = 'Our Process',
  heading = 'How your remodel comes to life',
  sub = 'A proven, step-by-step process designed for clarity, confidence, and speed.',
}: {
  compact?: boolean;
  eyebrow?: string;
  heading?: string;
  sub?: string;
}) {
  const steps = compact ? process.slice(0, 4) : process;

  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">{heading}</h2>
          <p className="mt-4 text-ink/75">{sub}</p>
        </div>
        {/* Drop rather than the domino tip: the steps read as a sequence, so
            they fall in from above strictly one at a time. */}
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-drop>
          {steps.map((s) => (
            <li key={s.step} className="border-t border-ink/15 pt-6">
              <div className="mb-3 font-sans text-xs font-medium tracking-[0.3em] text-crimson">
                STEP {s.step}
              </div>
              <h3 className="mb-3 font-display text-xl text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink/75">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
