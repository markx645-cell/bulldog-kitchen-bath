'use client';

import { useState } from 'react';
import { CheckCircle2, Calendar, Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';

// Mirrors the production consult form field-for-field.
// Front-end only for now — production POSTs this exact shape to
// /api/public/consult-submit. Wire it to GoHighLevel where marked below.
type FormState = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  property_address: string;
  /**
   * The chip selection. Production binds its radios to `help_with` — the same
   * field as the textarea below — so typing a description silently clears the
   * chosen category. Split out here so both values survive to the CRM.
   */
  project_type: string;
  help_with: string;
  availability: string;
};

const initial: FormState = {
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  property_address: '',
  project_type: '',
  help_with: '',
  availability: '',
};

const HELP_OPTIONS = [
  'Kitchen Remodel',
  'Full Bathroom Remodel',
  'Walk-In Shower',
  'Tub / Shower Combo',
  'Walk-In Tub',
  'Basement Remodel',
  'Other',
];

const input =
  'w-full rounded-md border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson/40';

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink/80"
    >
      {children}
      {required && <span className="ml-1 text-crimson">*</span>}
    </label>
  );
}

function StepHeading({ step, title }: { step: string; title: string }) {
  return (
    <>
      <div className="mb-2 font-condensed text-xs uppercase tracking-widest text-crimson">
        {step}
      </div>
      <h2 className="font-display text-3xl text-ink">{title}</h2>
    </>
  );
}

export default function ConsultForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    // TODO: POST `form` to the GoHighLevel webhook / CRM endpoint here,
    // and surface any failure via setError().
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass p-8 md:p-10">
        <div className="py-10 text-center">
          <div className="mb-6 inline-flex size-16 items-center justify-center rounded-full bg-crimson/10 text-crimson">
            <CheckCircle2 className="size-8" />
          </div>
          <h2 className="mb-3 font-display text-3xl text-ink md:text-4xl">
            Thanks, {form.first_name || 'friend'}!
          </h2>
          <p className="mx-auto max-w-md text-ink/75">
            We got your request. Someone from our team will reach out within one business day to
            confirm your 15-minute call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass p-8 md:p-10">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <StepHeading step="Step 1 · About You" title="Your details" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="first_name" required>
              <User className="-mt-0.5 mr-1.5 inline size-3" />
              First Name
            </Label>
            <input
              id="first_name"
              required
              maxLength={100}
              value={form.first_name}
              onChange={(e) => set('first_name', e.target.value)}
              className={input}
              autoComplete="given-name"
            />
          </div>
          <div>
            <Label htmlFor="last_name" required>
              Last Name
            </Label>
            <input
              id="last_name"
              required
              maxLength={100}
              value={form.last_name}
              onChange={(e) => set('last_name', e.target.value)}
              className={input}
              autoComplete="family-name"
            />
          </div>
          <div>
            <Label htmlFor="phone" required>
              <Phone className="-mt-0.5 mr-1.5 inline size-3" />
              Phone Number
            </Label>
            <input
              id="phone"
              type="tel"
              required
              maxLength={30}
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              className={input}
              autoComplete="tel"
              placeholder="(513) 555-0123"
            />
          </div>
          <div>
            <Label htmlFor="email" required>
              <Mail className="-mt-0.5 mr-1.5 inline size-3" />
              Email
            </Label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              className={input}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="property_address" required>
            <MapPin className="-mt-0.5 mr-1.5 inline size-3" />
            Property Address
          </Label>
          <input
            id="property_address"
            required
            maxLength={300}
            value={form.property_address}
            onChange={(e) => set('property_address', e.target.value)}
            className={input}
            autoComplete="street-address"
            placeholder="123 Main St, Cincinnati, OH 45202"
          />
        </div>

        <div className="border-t border-ink/10 pt-4">
          <StepHeading step="Step 2 · The Project" title="What do you need help with?" />

          <div className="mb-5 mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup">
            {HELP_OPTIONS.map((opt) => {
              const selected = form.project_type === opt;
              return (
                <label
                  key={opt}
                  className={`cursor-pointer rounded-md border px-4 py-3 text-sm transition ${
                    selected
                      ? 'border-crimson bg-crimson/10 text-ink'
                      : 'border-ink/15 bg-white/50 text-ink/70 hover:border-crimson/70'
                  }`}
                >
                  <input
                    type="radio"
                    name="project_type"
                    value={opt}
                    checked={selected}
                    onChange={(e) => set('project_type', e.target.value)}
                    className="sr-only"
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          <Label htmlFor="help_with" required>
            <MessageSquare className="-mt-0.5 mr-1.5 inline size-3" />
            Tell us a bit more
          </Label>
          <textarea
            id="help_with"
            required
            rows={5}
            maxLength={2000}
            value={form.help_with}
            onChange={(e) => set('help_with', e.target.value)}
            className={`${input} resize-none`}
            placeholder="Briefly describe your project — rooms, scope, timeline, style ideas, anything we should know."
          />
        </div>

        <div className="border-t border-ink/10 pt-4">
          <StepHeading step="Step 3 · Schedule" title="When’s a good time for a 15-min call?" />
          <p className="mb-4 mt-2 text-sm text-ink/70">
            Share a couple of windows that work — we’ll confirm one.
          </p>
          <Label htmlFor="availability" required>
            <Calendar className="-mt-0.5 mr-1.5 inline size-3" />
            Availability
          </Label>
          <textarea
            id="availability"
            required
            rows={3}
            maxLength={500}
            value={form.availability}
            onChange={(e) => set('availability', e.target.value)}
            className={`${input} resize-none`}
            placeholder="e.g. Tue 3-5pm, Wed mornings, or Fri after 1pm"
          />
        </div>

        {error && (
          <div className="rounded-md border border-crimson/40 bg-crimson/5 p-3 text-sm text-crimson">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full !bg-crimson hover:!bg-crimson-600 disabled:opacity-60 sm:w-auto"
        >
          {submitting ? 'Sending…' : 'Request My Consultation'}
        </button>
        <p className="text-xs text-ink/60">
          By submitting, you agree we may contact you about your project. We don’t share your info.
        </p>
      </form>
    </div>
  );
}
