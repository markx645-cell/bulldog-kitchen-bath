'use client';

// Shared controls for the Kitchen and Bathroom interest forms, which use the
// same field primitives in production.

export const inputCls =
  'w-full rounded-md border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson/40';

const optionCls = (active: boolean) =>
  `flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition ${
    active
      ? 'border-crimson bg-crimson/10 text-ink'
      : 'border-ink/15 bg-white/50 text-ink/75 hover:border-crimson/50'
  }`;

export function Field({
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
      <label className="block font-sans text-sm uppercase tracking-widest text-ink/80">
        {label}
        {required && <span className="ml-1 text-crimson">*</span>}
      </label>
      {children}
    </div>
  );
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
  required,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((opt) => (
        <label key={opt} className={optionCls(value === opt)}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="size-4 accent-crimson"
            required={required}
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

export function CheckboxGroup({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) =>
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt]);

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((opt) => (
        <label key={opt} className={optionCls(values.includes(opt))}>
          <input
            type="checkbox"
            checked={values.includes(opt)}
            onChange={() => toggle(opt)}
            className="size-4 accent-crimson"
          />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  );
}

export function FileField({
  hint,
  files,
  onChange,
}: {
  hint: string;
  files: File[];
  onChange: (f: File[]) => void;
}) {
  return (
    <>
      <p className="mb-2 text-sm text-ink/70">{hint}</p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onChange(Array.from(e.target.files ?? []))}
        className="block w-full font-sans text-sm text-ink/70 file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-crimson file:px-4 file:py-2 file:font-sans file:text-xs file:uppercase file:tracking-widest file:text-white"
      />
      {files.length > 0 && (
        <p className="mt-2 text-xs text-ink/60">
          {files.length} file{files.length === 1 ? '' : 's'} selected
        </p>
      )}
    </>
  );
}

export function ThankYou({ name, body }: { name: string; body: string }) {
  return (
    <div className="rounded-xl border border-crimson/40 bg-crimson/5 p-10 text-center">
      <h3 className="mb-3 font-display text-3xl text-ink">
        Thanks, {name.split(' ')[0] || 'friend'}!
      </h3>
      <p className="text-ink/75">{body}</p>
    </div>
  );
}
