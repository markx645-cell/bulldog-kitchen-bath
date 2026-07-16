// Canonical business facts for Bulldog Kitchen & Bath.
// Single source of truth — every page pulls from here.

export const site = {
  name: 'Bulldog Kitchen & Bath',
  shortName: 'Bulldog Kitchen & Bath',
  parent: 'Bulldog Remodel Group',
  tagline: 'Built by One Team.',
  headline: 'Beautiful Kitchens & Baths. Built by One Team.',
  founded: 2009,
  yearsInBusiness: '15+',
  url: 'https://bulldogkitchenbath.com',
  phone: '(513) 657-3750',
  phoneHref: 'tel:+15136573750',
  email: 'hello@bulldogkitchenbath.com',
  address: {
    street: '4030 Smith Rd, Suite 200',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45209',
  },
  serviceArea: 'Greater Cincinnati & Northern Kentucky',
  hours: 'Mon–Fri 9am–5pm',
} as const;

export const stats = {
  homesRemodeled: '850+',
  googleRating: '4.9',
  reviewsLabel: 'hundreds of 5-star reviews',
  ratings: [
    { platform: 'Google', score: '4.9' },
    { platform: 'BBB', score: 'A+' },
    { platform: 'Houzz', score: '5.0' },
    { platform: 'Angi', score: '4.9' },
  ],
} as const;

export const trustPoints = [
  { icon: 'star', stat: '4.9★', label: 'Hundreds of 5-star reviews' },
  { icon: 'medal', stat: '850+', label: 'Cincinnati kitchens & baths' },
  { icon: 'shield', stat: 'Lifetime', label: 'Workmanship warranty' },
  { icon: 'clock', stat: 'Fixed', label: 'Price guarantee, no surprises' },
] as const;

// Current offers grid.
export const offers = [
  {
    tag: 'Financing',
    headline: '0% Interest for 18 Months',
    body: 'Spread your remodel across a year and a half with no interest on approved credit. Soft-pull application, a decision in minutes.',
    cta: 'See Financing',
    href: '/financing',
  },
  {
    tag: 'No obligation',
    headline: 'Free Design Consultation',
    body: 'We walk your space, talk through your wishlist, and hand you a fixed, itemized price — no high-pressure sales, no obligation.',
    cta: 'Book a Consult',
    href: '/consult',
  },
] as const;

// Certifications & affiliations strip.
export const certifications = [
  'BBB A+ Accredited',
  'Licensed & Insured',
  'In-House Designers',
  'Lead-Safe Certified',
  'Lifetime Workmanship Warranty',
  'Cincinnati Family-Owned',
] as const;

// "What happens at your free design consultation."
export const estimateSteps = [
  {
    step: '01',
    title: 'Walk your space',
    body: 'We measure the room, look at what is working and what is not, and listen to how you actually want to live in it — no sales script.',
  },
  {
    step: '02',
    title: 'See the fixed price',
    body: 'You get one clear, itemized number and your financing options laid out, including 0% for 18 months. The price is the price — no change-order games.',
  },
  {
    step: '03',
    title: 'Meet your one team',
    body: 'One designer, one project manager, one accountable crew from demo to the final walkthrough. You always know who to call.',
  },
] as const;

// Warranty highlight.
export const warranty = {
  headline: 'The Bulldog Lifetime Workmanship Warranty',
  lead: 'Manufacturers warranty their materials. We warranty the work — the tile, the plumbing, the cabinetry, the install — for as long as you own the home.',
  points: [
    {
      title: 'Lifetime workmanship warranty',
      body: 'Every remodel we build is covered against installation defects for the life of your ownership.',
    },
    {
      title: 'One number to call',
      body: 'If something is ever off, you call us — not a subcontractor who has moved on. We come back and make it right.',
    },
    {
      title: 'Backed by our own crews',
      body: 'The people who built it are the people who stand behind it — full-time employees and long-term trade partners, never a rotating cast.',
    },
  ],
} as const;

// Financing detail band.
export const financing = {
  headline: 'A beautiful remodel, paid for over time',
  lead: 'A kitchen or bath you love should not mean draining your savings. Our financing menu is built to keep the monthly number comfortable.',
  points: [
    { big: '0%', small: 'Interest for 18 months on approved credit' },
    { big: '$100k', small: 'Available financing for whole-home projects' },
    { big: 'Soft pull', small: 'Checking your rate will not affect your credit' },
    { big: '12 yrs', small: 'Low-payment terms available on larger jobs' },
  ],
} as const;

// Value pillars — "Why Cincinnati Chooses Us."
export const pillars = [
  {
    icon: 'concierge',
    title: 'Concierge Project Management',
    body: 'One dedicated project manager runs the whole job — scheduling, materials, trades, and updates — so you are never chasing anyone for answers.',
  },
  {
    icon: 'design',
    title: 'Design-Led, In-House',
    body: 'Our own designers help you choose layouts, finishes, and fixtures with 3D renderings — you see the room before we swing a hammer.',
  },
  {
    icon: 'oneteam',
    title: 'One Team, One Contract',
    body: 'Design, materials, trades, and management all under one roof and one accountable contract. No finger-pointing between vendors.',
  },
  {
    icon: 'clock',
    title: 'Faster Turnarounds',
    body: 'Most full bathrooms finish on-site in 2–5 days and kitchens in about a week — because our crews are scheduled tight and stocked ahead.',
  },
  {
    icon: 'pricing',
    title: 'Fixed-Price Guarantee',
    body: 'The number in your contract is the number you pay. No mid-project surprises, no creative change orders.',
  },
  {
    icon: 'shield',
    title: 'Lifetime Workmanship Warranty',
    body: 'We stand behind every install for as long as you own the home. One call, and we make it right.',
  },
] as const;

// "The Bulldog Process" — 7 steps, discovery through lifetime support.
export const process = [
  {
    step: '01',
    title: 'Discovery Call',
    body: 'A quick call to understand your space, your goals, and your budget range before we ever set foot in the house.',
  },
  {
    step: '02',
    title: 'In-Home Consultation',
    body: 'We measure, photograph, and talk through how you want the room to work. You meet the person who will run your project.',
  },
  {
    step: '03',
    title: 'Design & 3D Rendering',
    body: 'Our in-house designers lay out the room and finishes, then show you a 3D rendering so you can see it before you commit.',
  },
  {
    step: '04',
    title: 'Fixed-Price Proposal',
    body: 'One itemized, all-in price with your financing options. The number is locked — no change-order surprises.',
  },
  {
    step: '05',
    title: 'Materials & Scheduling',
    body: 'We order and stage every material before demo day, so your crew never stalls waiting on a backorder.',
  },
  {
    step: '06',
    title: 'Build & Concierge Updates',
    body: 'One accountable crew does the work while your project manager keeps you updated daily and keeps the site clean.',
  },
  {
    step: '07',
    title: 'Walkthrough & Lifetime Warranty',
    body: 'We walk the finished room together, fix anything on your punch list, and back the work for as long as you own the home.',
  },
] as const;

// Service areas grouped by state, for the service-area block.
export const serviceAreas = [
  {
    region: 'Cincinnati & Hamilton County, OH',
    cities: [
      'Hyde Park, OH',
      'Oakley, OH',
      'Montgomery, OH',
      'Blue Ash, OH',
      'Wyoming, OH',
      'Madeira, OH',
      'Indian Hill, OH',
      'Anderson Township, OH',
      'Sharonville, OH',
      'Norwood, OH',
      'Terrace Park, OH',
      'Mariemont, OH',
      'Mt. Lookout, OH',
    ],
  },
  {
    region: 'Butler & Warren County, OH',
    cities: [
      'West Chester, OH',
      'Mason, OH',
      'Liberty Township, OH',
      'Loveland, OH',
      'Fairfield, OH',
      'Hamilton, OH',
      'Lebanon, OH',
      'Springboro, OH',
    ],
  },
  {
    region: 'Clermont County, OH',
    cities: ['Milford, OH'],
  },
  {
    region: 'Northern Kentucky',
    cities: [
      'Crestview Hills, KY',
      'Fort Mitchell, KY',
      'Edgewood, KY',
      'Florence, KY',
      'Union, KY',
      'Fort Thomas, KY',
      'Erlanger, KY',
      'Villa Hills, KY',
    ],
  },
] as const;

export const serviceCities = serviceAreas.flatMap((a) => [a.region, ...a.cities]);

// Homepage FAQ.
export const faqs = [
  {
    q: 'How long does a remodel take?',
    a: 'Most full bathroom remodels are completed on-site in 2–5 days, and kitchens in about 7 working days. Larger, design-heavy projects run longer, but you get a firm schedule in your proposal before we start.',
  },
  {
    q: 'Is the price really fixed?',
    a: 'Yes. Your contract price is all-in and itemized. The only way it changes is if you decide to add scope mid-project — and even then, you approve the number in writing first. No surprise change orders.',
  },
  {
    q: 'Do you handle design, or do I need my own designer?',
    a: 'We have in-house designers. They help you lay out the space, pick finishes and fixtures, and show you a 3D rendering so you can see the room before we build it. It is all included.',
  },
  {
    q: 'Can I finance my project?',
    a: 'Yes — including 0% interest for 18 months on approved credit, with financing available up to $100,000 for whole-home projects. Checking your rate is a soft pull that will not affect your credit score.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'One accountable team runs your entire job — our own crews and long-term trade partners under a single contract and a single project manager. You always have one number to call.',
  },
  {
    q: 'Is the work guaranteed?',
    a: 'Every remodel is backed by our lifetime workmanship warranty for as long as you own the home, on top of the manufacturer warranties on your materials and fixtures.',
  },
] as const;

// Navigation.
export const nav = {
  services: {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Kitchen Remodels', href: '/kitchens' },
      { label: 'Kitchen Remodeling for Older Homes', href: '/kitchen-remodeling-older-homes' },
      { label: 'Bathroom Remodels', href: '/bathroom-remodel' },
      { label: 'Walk-In Showers', href: '/walk-in-showers' },
      { label: 'Tub-to-Shower Conversions', href: '/tub-shower-combos' },
      { label: 'Walk-In Tubs', href: '/walk-in-tubs' },
      { label: 'Bathroom Flooring', href: '/bathroom-flooring' },
      { label: 'Basement Remodels', href: '/basement-remodel' },
      { label: 'All Services', href: '/services' },
    ],
  },
  simple: [
    { label: 'Our Process', href: '/our-process' },
    { label: 'Pricing', href: '/pricing-guide' },
    { label: 'Financing', href: '/financing' },
  ],
  about: {
    label: 'More',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Service Areas', href: '/service-areas' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} as const;
