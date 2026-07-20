import type { InvestCopy } from '@/components/InvestSection';

/**
 * "Invest in your future" copy, per service.
 *
 * Deliberately free of statistics. It is easy to write "recoups 70% at resale"
 * and impossible to stand behind it — figures like that vary by market, year and
 * source, and the client would be the one answering for them. Where a service
 * genuinely is regarded as a strong return (kitchens, bathrooms) the claim is
 * made qualitatively; everywhere else the argument is the real one, which is
 * usually daily use, independence, or usable space gained.
 *
 * Images are only listed where dedicated detail photography exists. Services
 * without it render as a single centred column rather than repeating the
 * triptych images that already appear further up the same page.
 */
export const serviceInvest: Record<string, InvestCopy> = {
  'bathroom-remodel': {
    heading: 'A bathroom that pays you back — daily and at resale.',
    body: [
      'Beyond the look and feel, a full bathroom remodel is one of the smartest moves you can make in your home. It consistently ranks at the top for return on investment — so you’re not just upgrading your morning routine, you’re adding real value to the property itself.',
    ],
    quote:
      'There’s something special about handing a homeowner the keys to a bathroom that’s been completely reimagined from the ground up. If you’re still weighing it, give us a call — we love walking people through what’s possible.',
    images: [
      { src: '/assets/bathroom-detail-1.webp', alt: 'Marble walk-in shower with brass rainfall fixture' },
      { src: '/assets/bathroom-detail-2.webp', alt: 'Custom double vanity with arched mirror and brass hardware' },
    ],
  },

  'walk-in-showers': {
    heading: 'The one upgrade you use twice a day.',
    body: [
      'A walk-in shower is a rare kind of improvement: it changes something you do every single morning, and it does it for a fraction of what a full remodel costs. Step-free access, a room that feels bigger, and a shower built properly behind the surface rather than resurfaced over an old one.',
      'It also broadens who your home suits. A sound, modern shower is one of the first things a buyer looks at in an older house — and one of the first things that lets an owner stay in a home they had no wish to leave.',
    ],
    quote:
      'Most people tell us the same thing afterwards — that they wish they had done it years earlier. If you’re weighing it up, call us and we’ll tell you honestly what your room can take.',
  },

  'tub-shower-combos': {
    heading: 'Keep the tub. Gain a shower worth using.',
    body: [
      'Converting every tub in a house is a decision people sometimes regret — for young families, and for the buyer pool when it comes time to sell. A tub and shower combination sidesteps that entirely: everyone in the household gets what they need from the same footprint, with none of the compromise.',
      'Built properly, it is the same job as any other: the old assembly out, the substrate and waterproofing new, a quality valve, and a finish that lasts.',
    ],
    quote:
      'We would rather talk you into keeping a tub you will miss than sell you a conversion you regret. Call us and we will work through it honestly.',
  },

  'walk-in-tubs': {
    heading: 'The upgrade that keeps you in your own home.',
    body: [
      'The value here is not measured at resale. Stepping over a tub wall is one of the most common reasons people leave houses they love, and a walk-in tub removes that single obstacle — with a door that seals, a seat at the right height, and controls reachable from seated.',
      'Set against the cost of moving, or of care, it is a modest sum for a great deal of independence.',
    ],
    quote:
      'This is the work we are proudest of. If you are weighing it up for yourself or for a parent, call us and we will talk it through without any pressure.',
  },

  'bathroom-flooring': {
    heading: 'The layer everything else depends on.',
    body: [
      'A bathroom floor is not a finish — it is the waterproofing plane the rest of the room sits on. Done correctly, with a sound substrate, proper falls and a bonded assembly, it protects the structure beneath for decades. Done as a surface laid over whatever was there, it fails quietly and takes the subfloor with it.',
      'It is also the cheapest moment to fix level, threshold and door clearance problems that are expensive to touch later.',
    ],
    quote:
      'Nobody photographs a subfloor. It is still the part that decides whether your bathroom is sound in fifteen years — and it is where we will not cut anything.',
  },

  kitchens: {
    heading: 'A kitchen that pays you back — daily and at resale.',
    body: [
      'The kitchen is the room a household actually lives in, and it consistently ranks among the strongest returns of any remodel. You are improving how every day in the house feels, and adding real value to the property at the same time.',
      'The difference between a kitchen that works and one that merely looks good is planning: where things are stored, how far you walk, where the light falls and how two people pass each other.',
    ],
    quote:
      'A kitchen is the room you will spend the most hours in. It is worth getting the plan right before anyone talks about door styles.',
    images: [
      { src: '/assets/svc/kitchens-1.webp', alt: 'Custom kitchen with island and full-height cabinetry' },
      { src: '/assets/svc/kitchens-2.webp', alt: 'Kitchen detail with counters, backsplash and integrated storage' },
    ],
  },

  'kitchen-remodeling-older-homes': {
    heading: 'Modern function without erasing the house.',
    body: [
      'An older home’s kitchen is usually its most compromised room and its most characterful one at the same time. The work is making it genuinely functional — storage, worktop, light, circulation — without stripping out what made the house worth buying.',
      'That balance is the whole job, and it is why these kitchens take more planning than a new-build. It is also why they are worth more when they are done.',
    ],
    quote:
      'The aim is a kitchen that works like it was built this decade and looks like it always belonged. That takes more thought, and it is the part we enjoy most.',
    images: [
      { src: '/assets/svc/kitchen-remodeling-older-homes-1.webp', alt: 'Period kitchen with modern function and traditional detailing' },
      { src: '/assets/svc/kitchen-remodeling-older-homes-2.webp', alt: 'Older-home kitchen with custom cabinetry and updated worktops' },
    ],
  },

  'basement-remodel': {
    heading: 'The square footage you already own.',
    body: [
      'A basement is the only place you can add a substantial amount of finished living space without extending the building or losing any of the garden. The walls, the roof and the foundation are already paid for — what remains is making the space warm, dry and worth being in.',
      'The order matters: moisture and drainage first, insulation and structure second, finishes last. Reversing that is why so many finished basements have to be done twice.',
    ],
    quote:
      'We will tell you honestly whether your basement is ready to be finished. Sometimes the right first job is drainage rather than drywall.',
    images: [
      { src: '/assets/svc/basement-remodel-1.webp', alt: 'Finished basement living space with built-in storage' },
      { src: '/assets/svc/basement-remodel-2.webp', alt: 'Basement remodel with lighting, flooring and finished walls' },
    ],
  },

  'accessory-dwelling-units': {
    heading: 'A building that can earn, or keep family close.',
    body: [
      'An ADU is unusual among remodeling projects in that it can produce income or replace a cost. Rented, it is an asset on the same lot you already own. Occupied by a parent or an adult child, it is the alternative to a care arrangement or a second mortgage — with independence on both sides.',
      'What decides feasibility is not the design but the lot: zoning, setbacks, utility routes and access. We establish all of that before anyone draws anything.',
    ],
    quote:
      'The first honest question is whether your lot can take one at all. We would rather answer that in week one than after you have paid for drawings.',
  },

  barndominiums: {
    heading: 'More building for the money.',
    body: [
      'A barndominium gets its value from its structure: a clear-span shell encloses a large volume for less per square foot than conventional framing, and leaves the interior almost entirely free to plan. That is why the format suits people who want workshop, storage and living space under one roof.',
      'The savings are real but they are not unlimited — insulation, mechanical systems and finishes cost what they cost, and we will be straight with you about where the shell advantage stops.',
    ],
    quote:
      'People come to us expecting a barndominium to be half the price of a house. It is not — but the space you get for the money is genuinely different, and we will show you exactly where.',
  },

  'custom-homes': {
    heading: 'Built around how you actually live.',
    body: [
      'Every existing house is a compromise with someone else’s decisions. A custom home is the one chance to plan around your household instead — where the light falls, how many people cook at once, whether anyone needs a bedroom on the ground floor in ten years.',
      'The value is in the decisions made before anything is built. That is where we spend the most time, because it is the only stage where changes are still cheap.',
    ],
    quote:
      'The best money in a custom home is spent before the foundation goes in. We would rather spend an extra month planning than have you live with something for thirty years.',
  },
};
