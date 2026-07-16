// Featured project gallery. Representative Cincinnati-area remodels.

export type Project = {
  slug: string;
  title: string;
  type: 'Kitchen' | 'Bathroom' | 'Basement' | 'Whole Home';
  image: string;
  location: string;
  blurb: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: 'hyde-park-classic-kitchen',
    image: '/photos/kitchen-island.jpg',
    title: 'Hyde Park Classic Kitchen',
    type: 'Kitchen',
    location: 'Hyde Park, OH',
    blurb: 'A dated galley kitchen in a 1920s colonial reimagined as an open, light-filled cook-and-gather space.',
    details: ['Wall removed to open to dining', 'Custom inset cabinetry', 'Quartz counters & island seating', 'Restored original trim'],
  },
  {
    slug: 'west-chester-primary-bath',
    image: '/photos/bathroom-spa.jpg',
    title: 'West Chester Spa Bath',
    type: 'Bathroom',
    location: 'West Chester, OH',
    blurb: 'A cramped builder-grade primary bath transformed into a spa retreat with a curbless shower and heated floors.',
    details: ['Curbless walk-in shower', 'Freestanding soaking tub', 'Double floating vanity', 'Radiant heated tile floor'],
  },
  {
    slug: 'crestview-hills-basement',
    image: '/photos/basement-bar.jpg',
    title: 'Crestview Hills Basement',
    type: 'Basement',
    location: 'Crestview Hills, KY',
    blurb: 'An unfinished basement turned into a full entertainment level with a bar, media area, and guest bath.',
    details: ['Moisture control before framing', 'Wet bar with cabinetry', 'Media room wiring', 'Full guest bathroom'],
  },
  {
    slug: 'wyoming-century-kitchen',
    image: '/photos/kitchen-older.jpg',
    title: 'Wyoming Century-Home Kitchen',
    type: 'Kitchen',
    location: 'Wyoming, OH',
    blurb: 'A Victorian kitchen modernized behind the scenes while keeping every bit of its period charm.',
    details: ['New wiring & plumbing', 'Period-matched cabinetry', 'Butcher-block & quartz mix', 'Original hardwood restored'],
  },
  {
    slug: 'mason-tub-to-shower',
    image: '/photos/walk-in-shower.jpg',
    title: 'Mason Tub-to-Shower Conversion',
    type: 'Bathroom',
    location: 'Mason, OH',
    blurb: 'An unused garden tub converted into an open, low-maintenance walk-in shower in just a few days.',
    details: ['Tub removed & reframed', 'Low-maintenance surround', 'Frameless glass panel', 'Built-in niche & bench'],
  },
  {
    slug: 'fort-thomas-guest-bath',
    image: '/photos/tub-shower.jpg',
    title: 'Fort Thomas Guest Bath',
    type: 'Bathroom',
    location: 'Fort Thomas, KY',
    blurb: 'A tired hall bath in a historic home refreshed with durable, timeless finishes that photograph beautifully.',
    details: ['New tub-shower combo', 'Custom vanity & storage', 'Classic subway tile', 'Updated lighting & vent'],
  },
  {
    slug: 'montgomery-open-kitchen',
    image: '/photos/kitchen-open.jpg',
    title: 'Montgomery Open Kitchen',
    type: 'Kitchen',
    location: 'Montgomery, OH',
    blurb: 'A closed-off executive kitchen opened to the family room for the way this family actually entertains.',
    details: ['Load-bearing wall opened', 'Oversized waterfall island', 'Panel-ready appliances', 'Walk-in pantry added'],
  },
  {
    slug: 'anderson-accessible-bath',
    image: '/photos/walk-in-tub.jpg',
    title: 'Anderson Accessible Bath',
    type: 'Bathroom',
    location: 'Anderson Township, OH',
    blurb: 'A safe, beautiful aging-in-place bathroom with a walk-in tub and barrier-free shower.',
    details: ['Walk-in tub with jets', 'Curbless roll-in shower', 'Grab bars & bench', 'Non-slip heated floor'],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
