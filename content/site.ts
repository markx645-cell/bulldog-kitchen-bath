// Canonical business facts for Bulldog Kitchen & Bath.
// Ported verbatim from the production export (speedy-kitchen-copy-5a2fe50f).

export const site = {
  name: 'Bulldog Kitchen & Bath',
  shortName: 'Bulldog Kitchen & Bath',
  parent: 'Bulldog Remodel Group',
  tagline: 'Built to last, backed for life.',
  headline: 'Beautiful Kitchens & Baths. Built by One Team.',
  positioning: 'Cincinnati’s most organized remodeler',
  url: 'https://bulldogkitchenbath.com',
  phone: '(513) 657-3750',
  phoneHref: 'tel:5136573750',
  // The real site publishes locality only — no street address.
  address: {
    city: 'Cincinnati',
    state: 'OH',
  },
  serviceArea: 'Cincinnati, OH and the surrounding OH, KY & IN tri-state area',
  serviceAreaShort: 'Ohio, Kentucky & Indiana',
  hours: 'Mon–Fri 9am–5pm',
} as const;

// Trust band — exactly the four the production ServicePage shows.
export const trustPoints = [
  { icon: 'shield', label: 'Lifetime Warranty' },
  { icon: 'badge', label: 'Best Price Guarantee' },
  { icon: 'clock', label: 'Rapid Turnaround' },
  { icon: 'check', label: 'In-House Installers' },
] as const;

// "Why Cincinnati Chooses Us" — the six real differentiators.
export const pillars = [
  {
    icon: 'concierge',
    title: 'Concierge Project Management',
    body: 'A dedicated on-site Project Manager oversees every trade, every detail, every day. Daily updates, dust barriers, floor protection, and a final professional cleaning.',
  },
  {
    icon: 'design',
    title: 'Design-Led with In-House Designers',
    body: 'No cookie-cutter packages. A dedicated interior designer guides curated selections of cabinetry, countertops, tile, lighting, and finishes — with 3D renderings before we build.',
  },
  {
    icon: 'oneteam',
    title: 'One Team, One Contract',
    body: 'Forget juggling multiple contractors and invoices. Design, materials, trades, and project management all happen under one accountable roof.',
  },
  {
    icon: 'clock',
    title: 'Faster Turnarounds, Less Disruption',
    body: 'An engineered process gets your kitchen or bath done in a fraction of the time of a traditional remodel — without sacrificing craft.',
  },
  {
    icon: 'pricing',
    title: 'Fixed Pricing, Zero Surprises',
    body: 'An itemized, fixed-price contract that includes every material, finish, and scope detail. No hidden fees. No mid-project change orders.',
  },
  {
    icon: 'shield',
    title: 'Lifetime Workmanship Warranty',
    body: 'Every cabinet, countertop, tile, and fixture we install is backed for life. If it isn’t right, we make it right — quickly and professionally.',
  },
] as const;

// The real 7-step homepage process.
export const process = [
  { step: '01', title: 'Discovery & Design', body: 'We meet at your home to discuss your vision, take measurements, and explore layouts with initial renderings and selections.' },
  { step: '02', title: 'Design Refinement', body: 'We refine your design based on your feedback, aligning layouts and selections with your style, function, and budget.' },
  { step: '03', title: 'Final Approval', body: 'You sign off on all selections and we issue your fixed-price contract. Every detail locked in. No scope creep.' },
  { step: '04', title: 'Planning & Preparation', body: 'We order and stage all materials, verify final measurements, and coordinate every licensed trade before Day 1.' },
  { step: '05', title: 'Installation', body: 'Your Project Manager oversees demolition, cabinetry, countertops, tile, plumbing, electrical, and finishing. Daily updates throughout.' },
  { step: '06', title: 'Final Walkthrough', body: 'We complete fine-tuning and professionally clean your entire home. Your new space is spotless and ready to enjoy.' },
  { step: '07', title: 'Lifetime Warranty', body: 'You receive your warranty packet and care guidelines. We stand behind our work for life — just a call away.' },
] as const;

// What happens at the free in-home estimate — the first three real process
// steps, which is exactly what the visit covers.
export const estimateSteps = [
  {
    step: '01',
    title: 'Discovery & Design',
    body: 'We meet at your home to discuss your vision, take measurements, and explore layouts with initial renderings and selections.',
  },
  {
    step: '02',
    title: 'Design Refinement',
    body: 'We refine your design based on your feedback, aligning layouts and selections with your style, function, and budget.',
  },
  {
    step: '03',
    title: 'Final Approval',
    body: 'You sign off on all selections and we issue your fixed-price contract. Every detail locked in. No scope creep.',
  },
] as const;

// What the company stands for (About page).
export const values = [
  { icon: 'home', title: 'Locally Owned', body: 'Cincinnati-based and Cincinnati-staffed. We answer to our neighbors.' },
  { icon: 'oneteam', title: 'In-House Crews', body: 'No rotating subcontractors. Our team handles demo through finish.' },
  { icon: 'shield', title: 'Lifetime Warranty', body: 'Every project is backed by our Lifetime Workmanship Warranty.' },
  { icon: 'pricing', title: 'Fixed Pricing', body: 'What you sign for is what you pay. No surprise change orders.' },
] as const;

export const warranty = {
  headline: 'The Lifetime Workmanship Warranty',
  lead: 'Every cabinet, countertop, tile, and fixture we install is backed for life. If it isn’t right, we make it right — quickly and professionally.',
  points: [
    { title: 'Backed for life', body: 'Every project is backed by our Lifetime Workmanship Warranty, for as long as you own the home.' },
    { title: 'One number to call', body: 'You receive your warranty packet and care guidelines at the final walkthrough. We’re just a call away.' },
    { title: 'In-house installers', body: 'No rotating subcontractors. Our team handles demo through finish — and stands behind it.' },
  ],
} as const;

// Real financing terms, from the production financing page + homepage FAQ.
export const financing = {
  headline: 'Flexible financing for your remodel',
  lead: 'We partner with top home-improvement lenders. Pre-qualification takes 60 seconds with a soft credit pull only — no impact to your score.',
  points: [
    { big: '0%', small: 'Intro APR plans available' },
    { big: '18 mo', small: 'Same-as-cash: no interest if paid in full within the promotional window' },
    { big: '120 mo', small: 'Fixed monthly payment terms available' },
    { big: '60 sec', small: 'Pre-qualify with a soft credit pull — no score impact' },
  ],
} as const;

// Homepage FAQ — the real eight.
export const faqs = [
  { q: 'How long does a typical kitchen or bath remodel take?', a: 'Most full bathroom remodels are completed on-site in 2–5 days, and kitchens in about 7 days. The full process — from initial design meeting to final walkthrough — typically takes 4–8 weeks depending on selections and lead times.' },
  { q: 'Do you offer financing?', a: 'Yes. We partner with top home-improvement lenders to offer 0% intro APR plans, fixed monthly payments up to 120 months, and same-as-cash options. Pre-qualification takes 60 seconds with a soft credit pull only — no impact to your score. See our Financing page for details.' },
  { q: 'Do you handle design, demo, and installation?', a: 'Yes. Bulldog Kitchen & Bath is a true one-team remodeler. Our in-house designers, project managers, and licensed trades handle every step under one contract.' },
  { q: 'Will the quality be the same as a traditional remodel?', a: 'Often better. Because we plan everything before construction starts and use specialized crews, our quality control is tighter. Every component is professionally installed and backed by our Lifetime Workmanship Warranty.' },
  { q: 'Can I stay in my home during the remodel?', a: 'Yes — most clients do. We isolate the workspace, install protective barriers, and perform daily clean-ups to minimize dust and disruption.' },
  { q: 'Are my selections limited to pre-set packages?', a: 'Not at all. You have access to a wide range of cabinetry, countertops, tile, and finishes — curated for style, quality, and availability.' },
  { q: 'What’s included in your fixed pricing?', a: 'Everything: design, cabinetry, countertops, tile, fixtures, lighting, electrical, plumbing, painting, project management, post-project cleaning, and our Lifetime Workmanship Warranty.' },
  { q: 'Do you offer a warranty on your work?', a: 'Yes. Every project is backed by a Lifetime Workmanship Warranty. If anything ever needs attention, we make it right — quickly and professionally.' },
] as const;

// Two ways to start. Real offers only.
export const offers = [
  {
    tag: 'Financing',
    headline: 'Pre-qualify in 60 seconds',
    body: '0% intro APR plans, fixed monthly payments up to 120 months, and same-as-cash options. Soft credit pull only — no impact to your score.',
    cta: 'See Financing',
    href: '/financing',
  },
  {
    tag: 'No obligation',
    headline: 'Free In-Home Estimate',
    body: 'We come to you, measure the space, and talk through what’s possible. Fixed pricing before we start — no pressure, no obligation.',
    cta: 'Book an Estimate',
    href: '/consult',
  },
] as const;

// Grouped for the service-area block. Derived from content/locations.ts.
export const serviceAreas = [
  {
    region: 'Ohio',
    cities: [
      'West Chester, OH', 'Mason, OH', 'Liberty Township, OH', 'Hyde Park, OH', 'Oakley, OH',
      'Montgomery, OH', 'Blue Ash, OH', 'Loveland, OH', 'Milford, OH', 'Wyoming, OH',
      'Madeira, OH', 'Indian Hill, OH', 'Anderson Township, OH', 'Sharonville, OH',
      'Fairfield, OH', 'Hamilton, OH', 'Lebanon, OH', 'Springboro, OH', 'Norwood, OH',
      'Terrace Park, OH', 'Mariemont, OH', 'Mt. Lookout, OH',
    ],
  },
  {
    region: 'Northern Kentucky',
    cities: [
      'Crestview Hills, KY', 'Fort Mitchell, KY', 'Edgewood, KY', 'Florence, KY',
      'Union, KY', 'Fort Thomas, KY', 'Erlanger, KY', 'Villa Hills, KY',
    ],
  },
] as const;

export const serviceCities = serviceAreas.flatMap((a) => [a.region, ...a.cities]);

export const nav = {
  services: {
    label: 'Services',
    href: '/services',
    // Order and labels match the production header exactly.
    children: [
      { label: 'Full Bathroom Remodels', href: '/bathroom-remodel' },
      { label: 'Walk-In Showers', href: '/walk-in-showers' },
      { label: 'Tub Shower Combos', href: '/tub-shower-combos' },
      { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
      { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
      { label: 'Kitchen Remodels', href: '/kitchens' },
      { label: 'Kitchen Remodels for Older Homes', href: '/kitchen-remodeling-older-homes' },
      { label: 'Basement Remodels', href: '/basement-remodel' },
    ],
  },
  simple: [
    { label: 'Our Process', href: '/our-process' },
    { label: 'Pricing', href: '/pricing-guide' },
    { label: 'Financing', href: '/financing' },
    { label: 'Featured Projects', href: '/projects' },
  ],
} as const;
