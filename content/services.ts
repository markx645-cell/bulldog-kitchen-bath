// Kitchen & bath service-page content. Brand voice, honest claims only.

export type Faq = { q: string; a: string };
export type Option = { title: string; blurb: string; bullets: string[] };
export type Benefit = { title: string; body: string; icon?: string };

export type Service = {
  slug: string; // matches the route path (no leading slash)
  eyebrow: string;
  name: string;
  short: string; // one-liner for hub cards
  image: string; // hero/card photo in /public
  featureImage?: string; // secondary photo for the features band
  order: number;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSub: string;
  intro: string;
  introEyebrow?: string;
  introHeading?: string;
  benefits: Benefit[];
  features?: { heading: string; sub?: string; banner?: string; items: string[] };
  optionsHeading?: string;
  options?: Option[];
  faqs: Faq[];
};

const financingFaq: Faq = {
  q: 'Can I finance this project?',
  a: 'Yes — including 0% interest for 18 months on approved credit, with financing available up to $100,000. Checking your rate is a soft pull that will not affect your credit score.',
};

export const kitchens: Service = {
  slug: 'kitchens',
  eyebrow: 'Kitchen Remodeling',
  name: 'Kitchen Remodels',
  short: 'Full kitchen renovations — cabinetry, counters, islands, and layout, designed and built by one team.',
  image: '/photos/kitchens.jpg',
  featureImage: '/photos/kitchen-island.jpg',
  order: 1,
  metaTitle: 'Kitchen Remodeling in Cincinnati & Northern Kentucky',
  metaDescription:
    'Bulldog Kitchen & Bath designs and builds full kitchen remodels across Greater Cincinnati — cabinetry, countertops, islands, and layout. Fixed pricing, in-house design, lifetime workmanship warranty.',
  heroHeadline: 'A kitchen built around',
  heroHighlight: 'how you actually live',
  heroSub:
    'From a refreshed layout to a full gut renovation, we design and build kitchens as one accountable team — so cabinetry, counters, plumbing, and electrical all land right the first time.',
  intro:
    'Your kitchen is where the house comes together. We start with your in-house design and a 3D rendering, lock in a fixed price, and then one crew handles demo through the final walkthrough. Most kitchens finish on-site in about a week, and every one is backed by our lifetime workmanship warranty.',
  introEyebrow: 'Full-Service Kitchen Remodels',
  introHeading: 'Designed, Priced, and Built Under One Roof',
  benefits: [
    { icon: 'design', title: 'Design-led layouts', body: 'Our designers reshape the room around real traffic and storage — then show you a 3D rendering before demo day.' },
    { icon: 'pricing', title: 'Fixed, itemized pricing', body: 'One all-in number covering cabinetry, counters, trades, and finishes. No surprise change orders halfway through.' },
    { icon: 'clock', title: 'About a week on-site', body: 'Materials are staged before demo, so the crew never stalls waiting on a backordered cabinet or countertop.' },
    { icon: 'shield', title: 'Lifetime workmanship warranty', body: 'The cabinetry, tile, and plumbing install are covered for as long as you own the home.' },
  ],
  features: {
    heading: 'What a Bulldog kitchen includes',
    sub: 'Every kitchen is scoped to your home and budget, but the fundamentals are always done right.',
    banner: 'One Team From Layout to Final Coat',
    items: [
      'In-house design with a 3D rendering of your finished kitchen',
      'Custom or semi-custom cabinetry, professionally installed',
      'Quartz, granite, or butcher-block countertops',
      'Islands, peninsulas, and reworked layouts for real flow',
      'Tile backsplashes, sinks, faucets, and under-cabinet lighting',
      'Coordinated plumbing and electrical by our own trades',
    ],
  },
  optionsHeading: 'Ways homeowners remodel',
  options: [
    { title: 'Layout Refresh', blurb: 'New cabinetry, counters, and finishes on the existing footprint.', bullets: ['Fastest turnaround', 'Big visual change', 'Great value'] },
    { title: 'Open-Concept Renovation', blurb: 'Remove a wall, add an island, and open the kitchen to living space.', bullets: ['Better flow', 'More seating', 'Structural work handled'] },
    { title: 'Full Gut Renovation', blurb: 'Down to the studs — new layout, mechanicals, cabinetry, and finishes.', bullets: ['Complete redesign', 'New plumbing & electrical', 'Like-new kitchen'] },
  ],
  faqs: [
    { q: 'How long does a kitchen remodel take?', a: 'Most kitchens are completed on-site in about 7 working days once materials are staged. Full gut renovations with layout changes run longer, and you get a firm schedule in your proposal.' },
    { q: 'Do you help pick cabinets and finishes?', a: 'Yes. Our in-house designers walk you through cabinetry, countertops, tile, and fixtures, then show you a 3D rendering of the finished kitchen before we build it.' },
    { q: 'Will I be without a kitchen the whole time?', a: 'There is downtime during demo and install, but because we stage materials ahead and run one tight crew, we keep that window as short as possible and tell you what to expect up front.' },
    financingFaq,
  ],
};

export const olderHomes: Service = {
  slug: 'kitchen-remodeling-older-homes',
  eyebrow: 'Older-Home Kitchens',
  name: 'Kitchen Remodeling for Older Homes',
  short: 'Character-rich remodels for Cincinnati’s historic and century homes — modern function, original charm.',
  image: '/photos/kitchen-older.jpg',
  order: 2,
  metaTitle: 'Kitchen Remodeling for Older Homes in Cincinnati',
  metaDescription:
    'Remodeling a kitchen in a Cincinnati historic or century home takes specialists. Bulldog Kitchen & Bath modernizes older kitchens while respecting original character — plaster, old wiring, and all.',
  heroHeadline: 'Modern kitchens for',
  heroHighlight: 'Cincinnati’s older homes',
  heroSub:
    'Hyde Park foursquares, Mariemont Tudors, century homes in Wyoming — older kitchens hide surprises behind the plaster. We remodel them with the patience and the trades those houses actually need.',
  intro:
    'Older homes reward careful work. Uneven floors, knob-and-tube wiring, undersized plumbing, and out-of-square walls are normal — and they are exactly what our crews plan for. We modernize the function of your kitchen while protecting the character that made you buy the house.',
  introEyebrow: 'Historic & Century-Home Specialists',
  introHeading: 'Modern Function Without Losing the Character',
  benefits: [
    { icon: 'design', title: 'Respects original character', body: 'We keep and restore the details worth keeping — trim profiles, transoms, hardwood — while updating everything behind them.' },
    { icon: 'oneteam', title: 'Trades that know old houses', body: 'Electricians and plumbers who expect knob-and-tube, galvanized pipe, and plaster — and price it into a fixed number.' },
    { icon: 'shield', title: 'No surprise change orders', body: 'We open walls carefully and plan for the unknowns older homes hide, so the price you sign is the price you pay.' },
    { icon: 'clock', title: 'Careful, tidy work', body: 'Dust control and protection for original floors and woodwork, because you cannot just replace 1920s oak.' },
  ],
  features: {
    heading: 'What older kitchens usually need',
    sub: 'Every century home is different, but these are the updates we handle again and again.',
    banner: 'Built for Houses With a History',
    items: [
      'Electrical brought up to code — goodbye knob-and-tube',
      'Plumbing re-run and properly vented for modern fixtures',
      'Sub-floor leveling and structural repair as needed',
      'Custom cabinetry sized to out-of-square walls',
      'Restored or matched trim, transoms, and moldings',
      'Insulation and drywall where old plaster has to go',
    ],
  },
  optionsHeading: 'Common older-home projects',
  options: [
    { title: 'Sympathetic Refresh', blurb: 'Update cabinets, counters, and mechanicals while keeping the original footprint and charm.', bullets: ['Keeps the character', 'Updated systems', 'Period-right finishes'] },
    { title: 'Open It Up', blurb: 'Carefully remove a wall between a cramped kitchen and dining room — structure handled properly.', bullets: ['More light & flow', 'Engineered beams', 'Original details saved'] },
    { title: 'Down-to-Studs Modernization', blurb: 'Full modernization of a century kitchen with new everything behind restored surfaces.', bullets: ['All-new mechanicals', 'Code-compliant', 'Charm preserved'] },
  ],
  faqs: [
    { q: 'My house has knob-and-tube wiring. Can you handle that?', a: 'Yes. Updating outdated electrical is one of the most common things we do in older kitchens. We bring the circuits up to code as part of the project and price it into your fixed proposal.' },
    { q: 'Will you damage my original woodwork and floors?', a: 'We protect original floors, trim, and woodwork with dust control and physical protection, and we restore or match details wherever we can. Preserving character is the whole point.' },
    { q: 'How do you handle surprises behind the walls?', a: 'We open things carefully during design and planning so we can see what we are dealing with before we commit to a number. That is how we hold a fixed price even in a 100-year-old house.' },
    financingFaq,
  ],
};

export const bathroom: Service = {
  slug: 'bathroom-remodel',
  eyebrow: 'Bathroom Remodeling',
  name: 'Bathroom Remodels',
  short: 'Full bathroom renovations — custom vanities, tile, freestanding tubs, heated floors, and smart fixtures.',
  image: '/photos/bathroom.jpg',
  featureImage: '/photos/bathroom-spa.jpg',
  order: 3,
  metaTitle: 'Bathroom Remodeling in Cincinnati & Northern Kentucky',
  metaDescription:
    'Bulldog Kitchen & Bath builds full bathroom remodels across Greater Cincinnati — custom vanities, tile work, freestanding tubs, heated floors, and smart fixtures. Most finish in 2–5 days.',
  heroHeadline: 'A bathroom that feels like',
  heroHighlight: 'a place you want to be',
  heroSub:
    'Custom vanities, tile that is set right, freestanding tubs, heated floors, and smart fixtures — designed and installed by one team, with most full baths finished on-site in 2–5 days.',
  intro:
    'A bathroom is small enough that every detail shows and big enough that the details are hard. We design the layout, lock in a fixed price, and put one crew on it start to finish — waterproofing, tile, plumbing, and finish work done in the right order by people who do it every week.',
  introEyebrow: 'Full Bathroom Remodels',
  introHeading: 'Every Detail Set Right, By One Crew',
  benefits: [
    { icon: 'clock', title: 'Finished in 2–5 days', body: 'Most full bathroom remodels wrap on-site in under a week, because the crew and materials are scheduled tight.' },
    { icon: 'design', title: 'Designed for your space', body: 'We rework the layout, storage, and lighting so a small bath lives a lot bigger than its square footage.' },
    { icon: 'shield', title: 'Waterproofed to last', body: 'Proper waterproofing behind the tile is the part you never see and the part that saves you in ten years.' },
    { icon: 'pricing', title: 'Fixed, honest pricing', body: 'One all-in number for demo, plumbing, tile, and fixtures — no creative change orders once we start.' },
  ],
  features: {
    heading: 'What a Bulldog bathroom includes',
    sub: 'Scoped to your home and budget, always built in the right order.',
    banner: 'Small Room, Zero Shortcuts',
    items: [
      'Custom or semi-custom vanities and storage',
      'Full waterproofing systems behind every tile surface',
      'Curbless walk-in showers, freestanding tubs, or tub-shower combos',
      'Heated tile floors and updated lighting',
      'New plumbing fixtures, faucets, and smart toilets',
      'Ventilation done right to stop mold and moisture',
    ],
  },
  optionsHeading: 'Bathroom projects we build',
  options: [
    { title: 'Guest & Hall Bath', blurb: 'A clean, durable refresh that photographs well and holds up to heavy use.', bullets: ['Great value', 'Fast turnaround', 'Durable finishes'] },
    { title: 'Primary Suite Bath', blurb: 'Double vanities, a walk-in shower, freestanding tub, and heated floors.', bullets: ['Spa feel', 'Custom storage', 'Premium fixtures'] },
    { title: 'Accessible Bath', blurb: 'Curbless showers, grab bars, and walk-in tubs for aging in place.', bullets: ['Safe & barrier-free', 'Still beautiful', 'Built to code'] },
  ],
  faqs: [
    { q: 'How long does a bathroom remodel take?', a: 'Most full bathroom remodels are completed on-site in 2–5 days. Larger primary suites or projects that move plumbing take a bit longer, and you get a firm schedule in your proposal.' },
    { q: 'Can you make a small bathroom feel bigger?', a: 'Yes — that is where design earns its keep. Reworking the layout, swapping a tub for a curbless shower, adding the right lighting, and choosing the right tile can transform how big a small bath feels.' },
    { q: 'How do you prevent leaks and mold?', a: 'We install full waterproofing systems behind the tile and vent the room properly. The parts you never see are the ones that determine whether the bathroom lasts.' },
    financingFaq,
  ],
};

export const walkInShowers: Service = {
  slug: 'walk-in-showers',
  eyebrow: 'Walk-In Showers',
  name: 'Walk-In Showers',
  short: 'Curbless and low-threshold walk-in showers — custom tile or low-maintenance surrounds.',
  image: '/photos/walk-in-shower.jpg',
  order: 4,
  metaTitle: 'Walk-In Shower Installation in Cincinnati & N. Kentucky',
  metaDescription:
    'Bulldog Kitchen & Bath installs custom walk-in showers across Greater Cincinnati — curbless designs, tile or low-maintenance surrounds, glass enclosures, and built-in seating. Free design consult.',
  heroHeadline: 'A walk-in shower that is',
  heroHighlight: 'easy to use and easy to clean',
  heroSub:
    'Trade a cramped tub-shower for an open, curbless walk-in — custom tile or a sleek low-maintenance surround, glass enclosures, niches, and a bench, all waterproofed to last.',
  intro:
    'A walk-in shower is the single most requested bathroom upgrade we do, and for good reason: it opens up the room, it is safer to step into, and it is far easier to clean. We build them in custom tile or low-maintenance acrylic and solid-surface, always over a properly waterproofed base.',
  introEyebrow: 'Custom Walk-In Showers',
  introHeading: 'Open, Safe, and Built to Stay Sealed',
  benefits: [
    { icon: 'design', title: 'Opens up the room', body: 'Losing the tub wall makes even a small bathroom feel open and modern.' },
    { icon: 'shield', title: 'Waterproofed base', body: 'Every shower is built over a full waterproofing system so the tile stays sealed for the long haul.' },
    { icon: 'accessible', title: 'Curbless & step-in options', body: 'Go fully curbless for barrier-free access or a low threshold — your call, built to code.' },
    { icon: 'clock', title: 'Low-maintenance choices', body: 'Prefer no grout lines to scrub? We install solid-surface and acrylic surrounds that wipe clean.' },
  ],
  features: {
    heading: 'What goes into a walk-in shower',
    banner: 'The Upgrade Everyone Asks For',
    items: [
      'Full waterproofing membrane and proper slope to drain',
      'Custom tile or low-maintenance solid-surface surrounds',
      'Frameless or semi-frameless glass enclosures',
      'Built-in niches and benches',
      'Curbless or low-threshold entries',
      'Modern valves, rain heads, and handheld sprayers',
    ],
  },
  optionsHeading: 'Walk-in shower styles',
  options: [
    { title: 'Custom Tile Shower', blurb: 'Fully tiled walls, floor, and niches in the pattern of your choice.', bullets: ['Fully custom', 'Any tile & pattern', 'High-end look'] },
    { title: 'Low-Maintenance Surround', blurb: 'Solid-surface or acrylic walls with no grout lines to scrub.', bullets: ['Wipes clean', 'Fewer seams', 'Fast install'] },
    { title: 'Curbless / Barrier-Free', blurb: 'A zero-threshold entry for accessibility and a seamless look.', bullets: ['Roll-in ready', 'Aging-in-place', 'Sleek & modern'] },
  ],
  faqs: [
    { q: 'Is a curbless shower a good idea?', a: 'For accessibility and a clean modern look, yes. It takes proper slope and waterproofing to keep water where it belongs, which is exactly why it is worth having a specialist crew build it.' },
    { q: 'Tile or a low-maintenance surround — which should I pick?', a: 'Tile gives you a fully custom, high-end look; solid-surface and acrylic surrounds cost less to maintain and have no grout to scrub. We will show you both and price them side by side.' },
    { q: 'Can you convert my tub into a walk-in shower?', a: 'Yes — tub-to-shower conversions are one of our most popular projects. Many are completed in just a few days.' },
    financingFaq,
  ],
};

export const tubShower: Service = {
  slug: 'tub-shower-combos',
  eyebrow: 'Tub & Shower',
  name: 'Tub-to-Shower Conversions & Combos',
  short: 'Convert an unused tub into a walk-in shower, or install a durable tub-shower combo.',
  image: '/photos/tub-shower.jpg',
  order: 5,
  metaTitle: 'Tub-to-Shower Conversions & Tub-Shower Combos in Cincinnati',
  metaDescription:
    'Bulldog Kitchen & Bath converts unused tubs into walk-in showers and installs durable tub-shower combos across Greater Cincinnati. Many finish in just a few days. Free design consult.',
  heroHeadline: 'Reclaim your bathroom with',
  heroHighlight: 'the right tub-or-shower call',
  heroSub:
    'Ditch the tub you never use for an open walk-in shower — or keep a family-friendly tub-shower combo done right. Either way, one crew, proper waterproofing, and a fast turnaround.',
  intro:
    'Not every bathroom needs a tub, and not every household should give one up. If your kids still take baths or you are protecting resale, a well-built tub-shower combo is the smart move. If that tub just collects dust, converting it to a walk-in shower transforms the room. We help you make the call and then build it right.',
  introEyebrow: 'Conversions & Combos',
  introHeading: 'Keep the Tub, or Reclaim the Space',
  benefits: [
    { icon: 'clock', title: 'Fast, few-day projects', body: 'Many conversions and combo installs finish in just a few days with one crew.' },
    { icon: 'shield', title: 'Waterproofed properly', body: 'Whether it is tile or a surround, it goes over a real waterproofing system — no shortcuts behind the wall.' },
    { icon: 'design', title: 'The right choice for resale', body: 'We will tell you honestly when keeping a tub protects your home’s value and when a shower is the better move.' },
    { icon: 'accessible', title: 'Safer step-in', body: 'Conversions lower the step-in height and can add grab bars and benches for easier, safer use.' },
  ],
  optionsHeading: 'Your options',
  options: [
    { title: 'Tub-to-Shower Conversion', blurb: 'Remove an unused tub and build an open walk-in shower in its place.', bullets: ['Opens the room', 'Easier to step into', 'Custom or low-maintenance'] },
    { title: 'Tub-Shower Combo', blurb: 'A durable, family-friendly tub with a tiled or solid-surround shower wall.', bullets: ['Great for kids', 'Protects resale', 'Low upkeep options'] },
    { title: 'New Soaking Tub', blurb: 'Swap a dated builder tub for a freestanding or drop-in soaking tub.', bullets: ['Spa feel', 'Modern look', 'Paired with a shower'] },
  ],
  faqs: [
    { q: 'Should I keep at least one bathtub in the house?', a: 'For resale, having at least one tub — usually in the guest or hall bath — is generally smart, especially for families with young kids. In a primary suite, a walk-in shower is often the better upgrade. We will give you an honest read for your home.' },
    { q: 'How long does a tub-to-shower conversion take?', a: 'Many conversions are completed in just a few days, depending on whether you choose custom tile or a low-maintenance surround.' },
    { q: 'Can you add safety features?', a: 'Absolutely — lower thresholds, grab bars, benches, and handheld sprayers can all be built in for safer, easier use.' },
    financingFaq,
  ],
};

export const walkInTubs: Service = {
  slug: 'walk-in-tubs',
  eyebrow: 'Walk-In Tubs',
  name: 'Walk-In Tubs',
  short: 'Safe, low-threshold walk-in tubs with doors, seats, and therapeutic jets for aging in place.',
  image: '/photos/walk-in-tub.jpg',
  order: 6,
  metaTitle: 'Walk-In Tub Installation in Cincinnati & Northern Kentucky',
  metaDescription:
    'Bulldog Kitchen & Bath installs walk-in tubs across Greater Cincinnati — low-threshold entry, built-in seating, grab bars, and therapeutic jets. Safe, independent bathing. Free consult.',
  heroHeadline: 'Bathe safely and',
  heroHighlight: 'stay in the home you love',
  heroSub:
    'A walk-in tub means a low, sealed door instead of a high tub wall to climb over — with a built-in seat, grab bars, and optional therapeutic jets, installed and waterproofed by one accountable crew.',
  intro:
    'For a lot of Cincinnati homeowners, staying independent comes down to the bathroom. A walk-in tub replaces the dangerous climb over a tub wall with a low, watertight door and a comfortable seat. We install them properly — the plumbing, the door seal, and the surround all done right so it stays safe and dry for years.',
  introEyebrow: 'Accessible Walk-In Tubs',
  introHeading: 'Independence, Comfort, and a Safer Step-In',
  benefits: [
    { icon: 'accessible', title: 'Low-threshold, sealed door', body: 'Step in over a few inches instead of climbing a tub wall — the door seals watertight.' },
    { icon: 'shield', title: 'Built-in safety', body: 'A comfortable seat, grab bars, textured non-slip floor, and anti-scald valves come standard.' },
    { icon: 'design', title: 'Therapeutic options', body: 'Optional hydrotherapy and air jets to ease sore joints and muscles.' },
    { icon: 'oneteam', title: 'Installed and warrantied by us', body: 'One crew handles the plumbing, the seal, and the surround — and we stand behind the install.' },
  ],
  optionsHeading: 'Walk-in tub options',
  options: [
    { title: 'Soaker Walk-In Tub', blurb: 'A safe, low-entry tub with a seat and grab bars for a relaxing soak.', bullets: ['Sealed door', 'Built-in seat', 'Non-slip floor'] },
    { title: 'Hydrotherapy Tub', blurb: 'Adds water and air jets to ease sore joints and muscles.', bullets: ['Therapeutic jets', 'Heated options', 'Fast-fill & drain'] },
    { title: 'Tub + Shower Combo', blurb: 'A walk-in tub with an overhead shower for flexible, safe bathing.', bullets: ['Sit or stand', 'Handheld sprayer', 'Glass panel'] },
  ],
  faqs: [
    { q: 'Do I have to wait in the tub while it fills and drains?', a: 'You do sit in the tub during fill and drain, but the models we install use fast-fill and fast-drain systems and heated seating options to keep that time short and comfortable.' },
    { q: 'Will a walk-in tub fit my existing space?', a: 'In most cases, yes — many walk-in tubs are designed to fit a standard tub alcove. We measure at the free consult and confirm the right model for your bathroom.' },
    { q: 'Are walk-in tubs safe for someone with mobility issues?', a: 'That is exactly what they are built for: a low sealed door, a seat, grab bars, non-slip surfaces, and anti-scald valves all reduce the risk of a fall.' },
    financingFaq,
  ],
};

export const flooring: Service = {
  slug: 'bathroom-flooring',
  eyebrow: 'Bathroom Flooring',
  name: 'Bathroom Flooring',
  short: 'Waterproof tile, luxury vinyl, and heated floors installed over a properly prepped subfloor.',
  image: '/photos/flooring.jpg',
  order: 7,
  metaTitle: 'Bathroom Flooring & Heated Floors in Cincinnati',
  metaDescription:
    'Bulldog Kitchen & Bath installs waterproof bathroom flooring across Greater Cincinnati — porcelain and ceramic tile, luxury vinyl, and radiant heated floors over a properly prepped subfloor.',
  heroHeadline: 'Bathroom floors that are',
  heroHighlight: 'waterproof and warm underfoot',
  heroSub:
    'Porcelain and ceramic tile, luxury vinyl, and radiant heated floors — installed over a properly prepped, level subfloor so they stay flat, sealed, and crack-free.',
  intro:
    'A bathroom floor takes water, temperature swings, and daily traffic. The finish you pick matters, but what is under it matters more: a level, sound, properly prepped subfloor. We handle both — the prep and the finish — so your floor lasts and, if you want, warms your feet on a cold Cincinnati morning.',
  introEyebrow: 'Waterproof & Heated Floors',
  introHeading: 'It Starts Under the Tile',
  benefits: [
    { icon: 'shield', title: 'Waterproof by design', body: 'Porcelain tile and luxury vinyl shrug off the moisture that ruins the wrong flooring in a bathroom.' },
    { icon: 'design', title: 'Warm underfoot', body: 'Optional radiant heat mats turn a cold tile floor into the best part of your morning.' },
    { icon: 'oneteam', title: 'Subfloor done right', body: 'We level, repair, and prep the subfloor so tile does not crack and grout does not fail.' },
    { icon: 'clock', title: 'Clean, contained install', body: 'Dust control and tidy work — because a floor tear-out does not have to wreck the house.' },
  ],
  optionsHeading: 'Flooring options',
  options: [
    { title: 'Porcelain & Ceramic Tile', blurb: 'The gold standard — waterproof, durable, endless styles.', bullets: ['Fully waterproof', 'Any look', 'Pairs with heat'] },
    { title: 'Luxury Vinyl (LVP/LVT)', blurb: 'Warm, quiet, waterproof, and budget-friendly.', bullets: ['Softer underfoot', 'Waterproof core', 'Fast install'] },
    { title: 'Radiant Heated Floors', blurb: 'Electric mats under tile for warmth on demand.', bullets: ['Programmable', 'Energy-efficient', 'Luxury feel'] },
  ],
  faqs: [
    { q: 'What is the best flooring for a bathroom?', a: 'Porcelain tile is the most durable and fully waterproof option and pairs perfectly with heated mats. Luxury vinyl is a warmer, quieter, budget-friendly alternative that is also waterproof. We will match the choice to your room and budget.' },
    { q: 'Are heated floors worth it?', a: 'For most homeowners who try them, absolutely — they take the chill off tile and run efficiently since they only heat when you want them to. They are easiest and cheapest to add during a remodel.' },
    { q: 'Why does the subfloor matter so much?', a: 'Tile is only as good as what is under it. An unlevel or flexing subfloor is what causes cracked tile and failed grout, so we prep and repair it before a single tile goes down.' },
    financingFaq,
  ],
};

export const basement: Service = {
  slug: 'basement-remodel',
  eyebrow: 'Basement Remodeling',
  name: 'Basement Remodels',
  short: 'Finished basements — family rooms, suites, bars, and baths — waterproofed and built to code.',
  image: '/photos/basement.jpg',
  featureImage: '/photos/basement-bar.jpg',
  order: 8,
  metaTitle: 'Basement Remodeling & Finishing in Cincinnati',
  metaDescription:
    'Bulldog Kitchen & Bath finishes basements across Greater Cincinnati — family rooms, guest suites, bars, home offices, and bathrooms. Moisture control, egress, and code handled by one team.',
  heroHeadline: 'Turn the basement into',
  heroHighlight: 'the best room in the house',
  heroSub:
    'A finished basement is the most square footage you can add without touching the footprint — family rooms, suites, bars, offices, and baths, all waterproofed and built to code by one team.',
  intro:
    'Your basement is already there. Finishing it is the cheapest square footage in the house — if it is done right. That means controlling moisture first, framing and insulating properly, handling egress and code, and running the plumbing and electrical for a real living space. We do all of it under one contract.',
  introEyebrow: 'Finished Basements',
  introHeading: 'Real Living Space, Done to Code',
  benefits: [
    { icon: 'shield', title: 'Moisture handled first', body: 'We address water and humidity before we frame — the step that separates a lasting basement from a moldy one.' },
    { icon: 'design', title: 'Designed for how you live', body: 'Media rooms, guest suites, gyms, bars, offices, in-law setups — designed around your family.' },
    { icon: 'oneteam', title: 'Egress & code covered', body: 'Egress windows, ceiling height, and permits handled so your finished space is legal and safe.' },
    { icon: 'pricing', title: 'One fixed price', body: 'Framing, electrical, plumbing, HVAC, and finishes in a single itemized number.' },
  ],
  features: {
    heading: 'What a basement finish includes',
    banner: 'The Cheapest Square Footage You Own',
    items: [
      'Moisture and humidity control before framing',
      'Framing, insulation, and drywall',
      'Egress windows and code-compliant exits',
      'Electrical, lighting, and HVAC extensions',
      'Optional wet bars, kitchenettes, and full bathrooms',
      'Flooring, trim, and finish work throughout',
    ],
  },
  optionsHeading: 'Popular basement builds',
  options: [
    { title: 'Family & Media Room', blurb: 'An open, comfortable hangout with the wiring done for it.', bullets: ['Home theater ready', 'Great lighting', 'Durable flooring'] },
    { title: 'Guest / In-Law Suite', blurb: 'A bedroom, full bath, and living area with proper egress.', bullets: ['Egress windows', 'Full bathroom', 'Private & legal'] },
    { title: 'Bar & Entertainment', blurb: 'A wet bar or kitchenette built for hosting.', bullets: ['Wet bar plumbing', 'Cabinetry', 'Fridge & sink'] },
  ],
  faqs: [
    { q: 'My basement gets damp. Can it still be finished?', a: 'Often, yes — but only after the moisture is addressed. We diagnose and handle water and humidity before any framing goes up, because finishing over a moisture problem is how basements end up with mold.' },
    { q: 'Can you add a bathroom or bar downstairs?', a: 'Yes. Full bathrooms, wet bars, and kitchenettes are some of the most popular additions. We run the plumbing and electrical as part of the project.' },
    { q: 'Do I need egress windows?', a: 'If the basement will have a bedroom, code requires proper egress. We handle egress windows and permits so your finished space is safe and legal.' },
    financingFaq,
  ],
};

export const serviceList: Service[] = [
  kitchens,
  olderHomes,
  bathroom,
  walkInShowers,
  tubShower,
  walkInTubs,
  flooring,
  basement,
];

export const services: Record<string, Service> = Object.fromEntries(
  serviceList.map((s) => [s.slug, s]),
);
