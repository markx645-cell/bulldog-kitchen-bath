'use client';

import { useState } from 'react';

// TODO: replace with the Bulldog Kitchen & Bath GoHighLevel (or CRM) webhook URL
// before going live. Until then, submissions are attempted but silently no-op.
const WEBHOOK_URL = '';

const projectTypes = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Walk-In Shower',
  'Walk-In Tub',
  'Tub-to-Shower Conversion',
  'Bathroom Flooring',
  'Basement Remodel',
  'Other / Not Sure',
];

const timeWindows = ['Morning (9am–12pm)', 'Midday (11am–2pm)', 'Afternoon (2pm–5pm)'];

const inputCls =
  'w-full rounded-lg border border-steel-200 bg-cream-50 px-3.5 py-2.5 text-sm text-ink placeholder:text-steel-400 focus:border-vermilion focus:outline-none focus:ring-2 focus:ring-vermilion/15';

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-1.5 block font-display text-[11px] font-bold uppercase tracking-wide text-ink">
      {children}
      {required && <span className="text-vermilion"> *</span>}
    </label>
  );
}

export default function QuoteForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    agree: true,
    address: '',
    date: '',
    time: '',
  });

  const set =
    (k: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((d) => ({
        ...d,
        [k]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value,
      }));

  async function sendToWebhook() {
    if (!WEBHOOK_URL) return;
    const payload = {
      first_name: data.first,
      last_name: data.last,
      full_name: `${data.first} ${data.last}`.trim(),
      phone: data.phone,
      email: data.email,
      project_type: data.service,
      message: data.message,
      address: data.address,
      preferred_date: data.date,
      preferred_time: data.time,
      consent: data.agree,
      source: 'Bulldog Kitchen & Bath Website',
      page: typeof window !== 'undefined' ? window.location.href : '',
    };
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    try {
      await sendToWebhook();
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="overflow-hidden rounded-2xl bg-cream-50 p-8 text-center shadow-[0_24px_60px_-15px_rgba(22,24,26,0.35)] ring-1 ring-black/5">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vermilion/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e73213" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-steel">
          Thanks — a Bulldog project consultant will reach out shortly to schedule your free design
          consultation.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-cream-50 shadow-[0_24px_60px_-15px_rgba(22,24,26,0.35)] ring-1 ring-black/5">
      <div className="bg-vermilion px-6 py-5 sm:px-7">
        <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
          Book Your Free Design Consultation
        </h3>
        <p className="mt-1 font-display text-xs font-semibold uppercase tracking-wide text-white/80">
          Step {step} of 2
        </p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-cream-50/25">
          <div
            className="h-full rounded-full bg-cream-50 transition-all duration-300"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-7">
        {step === 1 ? (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label required>First Name</Label>
                <input required placeholder="First name" className={inputCls} value={data.first} onChange={set('first')} />
              </div>
              <div>
                <Label required>Last Name</Label>
                <input required placeholder="Last name" className={inputCls} value={data.last} onChange={set('last')} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label required>Phone Number</Label>
                <input required type="tel" placeholder="Active phone number" className={inputCls} value={data.phone} onChange={set('phone')} />
              </div>
              <div>
                <Label required>Email</Label>
                <input required type="email" placeholder="Active email" className={inputCls} value={data.email} onChange={set('email')} />
              </div>
            </div>
            <div>
              <Label required>Project Type</Label>
              <select required className={inputCls} value={data.service} onChange={set('service')}>
                <option value="" disabled>
                  Select project type…
                </option>
                {projectTypes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <Label>Tell us about your project</Label>
              <textarea
                rows={3}
                placeholder="What are you hoping to remodel? Share as much detail as you like."
                className={`${inputCls} resize-none`}
                value={data.message}
                onChange={set('message')}
              />
            </div>
            <label className="flex items-start gap-2.5 text-xs leading-relaxed text-steel">
              <input
                type="checkbox"
                required
                checked={data.agree}
                onChange={set('agree')}
                className="mt-0.5 h-4 w-4 shrink-0 accent-vermilion"
              />
              <span>
                I agree to be contacted by Bulldog Kitchen &amp; Bath by phone, text, or email about
                my request. Message and data rates may apply.
              </span>
            </label>
            <button type="submit" className="btn-primary w-full">
              Next →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label>Project Address</Label>
              <input
                placeholder="Street, city, ZIP"
                className={inputCls}
                value={data.address}
                onChange={set('address')}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Preferred Date</Label>
                <input type="date" className={inputCls} value={data.date} onChange={set('date')} />
              </div>
              <div>
                <Label>Preferred Time</Label>
                <select className={inputCls} value={data.time} onChange={set('time')}>
                  <option value="" disabled>
                    Select a window…
                  </option>
                  {timeWindows.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1">
              <button type="button" onClick={() => setStep(1)} className="btn-ghost" disabled={submitting}>
                ← Back
              </button>
              <button type="submit" className="btn-primary" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
