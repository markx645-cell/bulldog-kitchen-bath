'use client';

import { useState } from 'react';

// Mirrors the production BookEstimateForm's fields. Front-end only for now:
// production's own handler also just flips to a thank-you state. Wire the
// submit to GoHighLevel (or a server action) where marked below.
const INTERESTS = [
  'Full Bathroom Remodel',
  'Walk-In Shower',
  'Tub / Shower Combo',
  'Walk-In Tub',
  'Bathroom Flooring',
  'Painting',
  'Kitchen Remodel',
  'Financing Information',
  'Other',
];

const inputCls =
  'w-full rounded-md border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/20';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-sans text-xs uppercase tracking-widest text-ink/80">
        {label}
        {required && <span className="ml-1 text-crimson">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function BookEstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    interest: '',
    description: '',
  });
  const [files, setFiles] = useState<File[]>([]);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST `form` + `files` to the GoHighLevel webhook / CRM here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-crimson/40 bg-crimson/5 p-10 text-center">
        <h3 className="mb-3 font-display text-3xl text-ink">
          Thanks, {form.name.split(' ')[0] || 'friend'}!
        </h3>
        <p className="text-ink/75">
          We received your estimate request and will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Field label="Name" required>
        <input
          required
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className={inputCls}
          placeholder="First and last name"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputCls}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Phone" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            className={inputCls}
            placeholder="(513) 000-0000"
          />
        </Field>
      </div>

      <Field label="Address">
        <input
          value={form.address}
          onChange={(e) => set('address', e.target.value)}
          className={inputCls}
          placeholder="Street, city, ZIP"
        />
      </Field>

      <Field label="I'm interested in" required>
        <div className="grid gap-2 sm:grid-cols-2">
          {INTERESTS.map((i) => (
            <label key={i} className="flex cursor-pointer items-center gap-2 text-sm text-ink">
              <input
                type="radio"
                name="interest"
                value={i}
                required
                checked={form.interest === i}
                onChange={(e) => set('interest', e.target.value)}
                className="size-4 accent-crimson"
              />
              {i}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Project details">
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          className={`${inputCls} resize-none`}
          placeholder="Describe what you need remodeled:"
        />
      </Field>

      <Field label="Photos (optional)">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          className="w-full font-sans text-sm text-ink/70 file:mr-4 file:rounded-md file:border-0 file:bg-ink file:px-4 file:py-2 file:font-sans file:text-xs file:uppercase file:tracking-widest file:text-white hover:file:bg-ink-700"
        />
        {files.length > 0 && (
          <p className="text-xs text-ink/60">
            {files.length} file{files.length === 1 ? '' : 's'} selected
          </p>
        )}
      </Field>

      <button type="submit" className="btn-primary w-full !bg-crimson hover:!bg-crimson-600">
        Request My Estimate
      </button>
    </form>
  );
}
