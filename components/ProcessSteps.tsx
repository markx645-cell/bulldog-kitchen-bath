import { process } from '@/content/site';

export default function ProcessSteps({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  const steps = compact ? process.slice(0, 4) : process;
  return (
    <section className={`section ${dark ? 'bg-ink' : 'bg-cream-50'}`}>
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className={`mt-2 font-display text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>
            The Bulldog Process
          </h2>
          <p className={`mt-4 ${dark ? 'text-white/80' : 'text-steel'}`}>
            {compact
              ? 'From first call to lifetime warranty — one team owns every step.'
              : 'Seven clear steps from your first call to lifetime warranty support. You always know what happens next and who is responsible for it.'}
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
          {steps.map((s) => (
            <div
              key={s.step}
              className={`rounded-xl border p-6 shadow-card transition-colors ${
                dark
                  ? 'border-ink-700 bg-ink-800 hover:border-sage'
                  : 'border-steel-200 bg-cream-50 hover:border-sage'
              }`}
            >
              <span className={`font-display text-4xl font-bold ${dark ? 'text-sage-400' : 'text-sage'}`}>
                {s.step}
              </span>
              <h3 className={`mt-3 font-display text-lg font-bold ${dark ? 'text-white' : 'text-ink'}`}>
                {s.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/75' : 'text-steel'}`}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
