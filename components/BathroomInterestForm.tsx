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

// Mirrors the production BathroomInterestForm field-for-field.
// Front-end only: production's own handler also just flips to a thank-you
// state. Wire the submit to GoHighLevel (or a route handler) where marked.
const PROJECT_TYPES = [
  'Full bathroom remodel',
  'Tub-to-shower conversion',
  'Walk-in shower upgrade',
  'Shower replacement only',
  'Vanity / flooring / tile updates',
  'Not sure yet',
];

const PROBLEMS = [
  'Outdated / ugly',
  'Mold / water damage',
  'Hard to clean / high maintenance',
  'Poor layout / not functional',
  'Small / cramped',
  'Safety / accessibility (elderly, kids)',
  'Just want an upgrade',
];

const FEATURES = [
  'Walk-in shower',
  'Frameless glass door',
  'Tile shower',
  'Panel system (low maintenance)',
  'Double vanity',
  'New flooring',
  'Better lighting',
  'Luxury finishes',
  'Easy-to-clean surfaces',
];

const BUDGETS = [
  'Under $10,000',
  '$10,000–$20,000',
  '$20,000–$35,000',
  '$35,000+',
  'Not sure yet',
];

const SHOWER_TYPES = [
  'Fast install (1–2 day system, panels)',
  'Custom tile shower',
  'Not sure — need guidance',
];

const READINESS = ['Yes', 'Maybe (depends on price)', 'No (just researching)'];

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

export default function BathroomInterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    problem: '',
    features: [] as string[],
    budget: '',
    showerType: '',
    readiness: '',
    priorities: [] as string[],
    timeline: '',
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
      <ThankYou
        name={form.name}
        body="We received your bathroom project details and will reach out within one business day."
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
        <Field label="Phone">
          <input
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

      <Field label="Files & Photos">
        <FileField
          hint="Photos of your current bathroom and/or dream bathroom."
          files={files}
          onChange={setFiles}
        />
      </Field>

      <Field label="What type of bathroom project are you considering?">
        <RadioGroup
          name="projectType"
          options={PROJECT_TYPES}
          value={form.projectType}
          onChange={(v) => set('projectType', v)}
        />
      </Field>

      <Field label="What’s the main problem with your current bathroom?">
        <RadioGroup
          name="problem"
          options={PROBLEMS}
          value={form.problem}
          onChange={(v) => set('problem', v)}
        />
      </Field>

      <Field label="Which features are you most interested in?">
        <CheckboxGroup
          options={FEATURES}
          values={form.features}
          onChange={(v) => set('features', v)}
        />
      </Field>

      <Field label="What is your estimated budget range for bathroom remodel?">
        <RadioGroup
          name="budget"
          options={BUDGETS}
          value={form.budget}
          onChange={(v) => set('budget', v)}
        />
      </Field>

      <Field label="What type of shower do you prefer?" required>
        <RadioGroup
          name="showerType"
          options={SHOWER_TYPES}
          value={form.showerType}
          onChange={(v) => set('showerType', v)}
          required
        />
      </Field>

      <Field label="Are you ready to move forward with the right contractor?" required>
        <RadioGroup
          name="readiness"
          options={READINESS}
          value={form.readiness}
          onChange={(v) => set('readiness', v)}
          required
        />
      </Field>

      <Field label="What matters most when choosing a contractor?">
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

      <button
        type="submit"
        className="btn-primary w-full !bg-crimson hover:!bg-crimson-600 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
}
