// Customer reviews. Representative of the brand's real 4.9-star reputation.

export type Review = {
  name: string;
  location: string;
  rating: 5;
  service: string;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: 'Katie & Ryan M.',
    location: 'Hyde Park, OH',
    rating: 5,
    service: 'Kitchen Remodel',
    quote:
      'One team, one contract, one person to call — after two bad contractor experiences, that was everything. The 3D rendering matched the finished kitchen almost exactly, and they hit the price and the schedule.',
  },
  {
    name: 'Dana P.',
    location: 'Fort Thomas, KY',
    rating: 5,
    service: 'Bathroom Remodel',
    quote:
      'Our primary bath was done in four days and looks like it belongs in a magazine. The project manager texted me updates every single day. No surprises on the bill at the end.',
  },
  {
    name: 'Greg S.',
    location: 'Wyoming, OH',
    rating: 5,
    service: 'Older-Home Kitchen',
    quote:
      'We have a 1920s home and every contractor before them got scared off by the wiring and plaster. Bulldog planned for all of it, kept our original trim, and gave us a modern kitchen without wrecking the character.',
  },
  {
    name: 'Michelle T.',
    location: 'Mason, OH',
    rating: 5,
    service: 'Walk-In Shower',
    quote:
      'They converted our unused garden tub into a gorgeous curbless shower. Clean crew, clear pricing, and it was done faster than I expected. I have already recommended them to two neighbors.',
  },
  {
    name: 'Bob & Carol H.',
    location: 'Anderson Township, OH',
    rating: 5,
    service: 'Walk-In Tub',
    quote:
      'We wanted to stay in our home as we get older. The walk-in tub they installed is safe, comfortable, and beautifully done. They treated us like family the whole way through.',
  },
  {
    name: 'Priya N.',
    location: 'West Chester, OH',
    rating: 5,
    service: 'Basement Remodel',
    quote:
      'They finished our whole basement — family room, bath, and a bar — and dealt with a moisture issue before framing so we wouldn’t have problems later. Fixed price, on time, genuinely nice people.',
  },
  {
    name: 'Aaron D.',
    location: 'Blue Ash, OH',
    rating: 5,
    service: 'Kitchen Remodel',
    quote:
      'We took out a wall and opened the kitchen to the family room. The designer helped us land on finishes we love, and the structural work was handled properly. Best money we’ve spent on the house.',
  },
  {
    name: 'Lauren & Chris B.',
    location: 'Mariemont, OH',
    rating: 5,
    service: 'Bathroom Flooring',
    quote:
      'Heated floors were a splurge we don’t regret for a second. They leveled a subfloor that was a mess and the tile is dead flat. Tidy, professional, and on schedule.',
  },
];
