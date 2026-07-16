'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Mirrors the production accordion: first item open, +/- toggles.
export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl text-ink md:text-2xl">{f.q}</span>
              {isOpen ? (
                <Minus className="size-5 shrink-0 text-crimson" />
              ) : (
                <Plus className="size-5 shrink-0 text-crimson" />
              )}
            </button>
            {isOpen && <p className="pb-6 text-lg leading-relaxed text-ink/75">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
