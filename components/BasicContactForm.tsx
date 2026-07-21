'use client';

import { useState } from 'react';
import { Field, ThankYou, inputCls } from '@/components/InterestFormControls';
import { serviceList } from '@/content/services';

/**
 * The one contact form used across every service page and location page.
 *
 * It replaced BathroomInterestForm, which asked bathroom-specific questions
 * ("photos of your current bathroom", "what type of shower do you prefer?")
 * on every service — including kitchens, basements, ADUs, custom homes and
 * barndominiums, where those questions made no sense to the reader.
 *
 * ⚠️ SUBMISSION IS STILL NOT WIRED. See onSubmit below. This form collects the
 * fields and shows a thank-you, exactly as the form it replaced did — it does
 * NOT deliver the enquiry anywhere yet. That is the outstanding GoHighLevel
 * task, and until it is done no lead submitted through this form reaches
 * anyone. The field names below are the contract to map against.
 */

/** Service options, taken from the real service list so the two cannot drift. */
const SERVICE_OPTIONS = serviceList
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((s) => s.name);

const TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening', 'Any time'];

export default function BasicContactForm({
  service,
  location,
}: {
  /** Pre-selects the dropdown when the form sits on a service page. */
  service?: string;
  /** Pre-fills the location when the form sits on a location page. */
  location?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: service && SERVICE_OPTIONS.includes(service) ? service : '',
    location: location ?? '',
    date: '',
    time: '',
    message: '',
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST `form` to the GoHighLevel webhook / CRM.
    // Until this is done the enquiry is NOT delivered to anyone — the user
    // simply sees the thank-you below. Do not ship to production without it.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ThankYou
        name={form.name}
        body="We received your details and will reach out within one business day."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            className={inputCls}
            autoComplete="name"
          />
        </Field>

        <Field label="Phone" required>
          <input
            required
            type="tel"
            maxLength={30}
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            className={inputCls}
            autoComplete="tel"
          />
        </Field>

        <Field label="Email">
          <input
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputCls}
            autoComplete="email"
          />
        </Field>

        <Field label="Service" required>
          <select
            required
            value={form.service}
            onChange={(e) => set('service', e.target.value)}
            className={inputCls}
          >
            <option value="">Please choose…</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>

        <Field label="Location" required>
          <input
            required
            maxLength={120}
            value={form.location}
            onChange={(e) => set('location', e.target.value)}
            className={inputCls}
            placeholder="Neighborhood, city or ZIP"
            autoComplete="address-level2"
          />
        </Field>

        <Field label="Preferred date">
          <input
            type="date"
            value={form.date}
            onChange={(e) => set('date', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Preferred time">
          <select
            value={form.time}
            onChange={(e) => set('time', e.target.value)}
            className={inputCls}
          >
            <option value="">No preference</option>
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message">
        <textarea
          rows={5}
          maxLength={2000}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          className={inputCls}
          placeholder="Tell us a little about the project — as much or as little as you like."
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-md bg-crimson px-8 py-4 font-sans text-sm uppercase tracking-widest text-white transition hover:bg-crimson/90 sm:w-auto"
      >
        Send enquiry
      </button>
    </form>
  );
}
