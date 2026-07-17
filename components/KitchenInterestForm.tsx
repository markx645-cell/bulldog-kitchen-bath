'use client';

import { useState } from 'react';
import {
  Field,
  RadioGroup,
  CheckboxGroup,
  FileField,
  ThankYou,
  inputCls,
} from '@/components/InterestFormControls';

// Mirrors the production KitchenInterestForm field-for-field.
// Front-end only: production's own handler also just flips to a thank-you
// state. Wire the submit to GoHighLevel (or a route handler) where marked.
const REASONS = [
  'Kitchen is outdated',
  'Need more space / better layout',
  'Preparing to sell',
  'Damage / repairs needed',
  'Want a luxury upgrade',
  'Other',
];

const PROJECT_TYPES = [
  'Full kitchen remodel',
  'Cabinet replacement',
  'Cabinet refacing / painting',
  'Countertops only',
  'Layout change',
  'Flooring / lighting / backsplash',
  'Not sure yet',
];

const FEATURES = [
  'New cabinets',
  'Quartz/granite countertops',
  'Island',
  'Better storage',
  'Lighting',
  'Flooring',
  'Backsplash',
  'Appliances',
  'Open concept',
  'Luxury finishes',
];

const LAYOUT_OPTIONS = [
  'No, same layout',
  'Maybe minor changes',
  'Yes, major layout change',
  'Not sure',
];

const BUDGETS = [
  'Under $15,000',
  '$15,000–$30,000',
  '$30,000–$60,000',
  '$60,000+',
  'Not sure yet',
];

const CONTRACTOR_PRIORITIES = [
  'Best price',
  'Quality workmanship',
  'Speed',
  'Design help',
  'Financing/payment options',
  'Trust and communication',
  'Warranty',
  'Clean job site',
];

const TIMELINES = ['ASAP', 'Within 30 days', '1–3 months', '3–6 months', 'Just researching'];

export default function KitchenInterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    reason: '',
    projectType: '',
    features: [] as string[],
    layout: '',
    budget: '',
    priorities: [] as string[],
    timeline: '',
  });
  const [files, setFiles] = useState<File[]>([]);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Production guards these two with a window.alert(); shown inline instead.
    if (form.features.length === 0 || form.priorities.length === 0) {
      setError('Please select at least one feature and one contractor priority.');
      return;
    }
    setError(null);
    // TODO: POST `form` + `files` to the GoHighLevel webhook / CRM here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ThankYou
        name={form.name}
        body="We received your kitchen project details and will reach out within one business day."
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
        <Field label="Email" required>
          <input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className={inputCls}
            autoComplete="email"
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
        <Field label="Address" required>
          <input
            required
            maxLength={200}
            value={form.address}
            onChange={(e) => set('address', e.target.value)}
            className={inputCls}
            autoComplete="street-address"
          />
        </Field>
      </div>

      <Field label="What is your main reason for kitchen remodeling?" required>
        <RadioGroup
          name="reason"
          options={REASONS}
          value={form.reason}
          onChange={(v) => set('reason', v)}
          required
        />
      </Field>

      <Field label="What type of kitchen project are you considering?" required>
        <RadioGroup
          name="projectType"
          options={PROJECT_TYPES}
          value={form.projectType}
          onChange={(v) => set('projectType', v)}
          required
        />
      </Field>

      <Field label="What kitchen feature(s) are most important to you?" required>
        <CheckboxGroup
          options={FEATURES}
          values={form.features}
          onChange={(v) => set('features', v)}
        />
      </Field>

      <Field label="Are you planning to change the kitchen layout?" required>
        <RadioGroup
          name="layout"
          options={LAYOUT_OPTIONS}
          value={form.layout}
          onChange={(v) => set('layout', v)}
          required
        />
      </Field>

      <Field label="What is your estimated budget range?" required>
        <RadioGroup
          name="budget"
          options={BUDGETS}
          value={form.budget}
          onChange={(v) => set('budget', v)}
          required
        />
      </Field>

      <Field label="Files & Photos">
        <FileField
          hint="Upload photos of your current kitchen and/or your dream kitchen."
          files={files}
          onChange={setFiles}
        />
      </Field>

      <Field label="What matters most when choosing a contractor?" required>
        <CheckboxGroup
          options={CONTRACTOR_PRIORITIES}
          values={form.priorities}
          onChange={(v) => set('priorities', v)}
        />
      </Field>

      <Field label="How soon are you hoping to start?" required>
        <RadioGroup
          name="timeline"
          options={TIMELINES}
          value={form.timeline}
          onChange={(v) => set('timeline', v)}
          required
        />
      </Field>

      {error && (
        <div className="rounded-md border border-crimson/40 bg-crimson/5 p-3 text-sm text-crimson">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="btn-primary w-full !bg-crimson hover:!bg-crimson-600 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}
