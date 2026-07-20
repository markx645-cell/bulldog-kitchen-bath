import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /tub-shower-combos/[location].
 *
 * This is the third service to cover the same 170 places, after
 * bathroom-remodel and walk-in-showers, and it sits closest to walk-in-showers
 * of any of them. So the angle set here is deliberately about THE TUB rather
 * than the enclosure: fill time against water heater capacity, cast-iron weight
 * against floor structure, step-over height, reglazing versus replacing, doors
 * versus curtain, and keeping something bathable for young children and buyers.
 *
 * Anything that would restate the shower pages — drain relocation, waterproofing
 * systems, glass hardware — is left to those pages on purpose.
 */
export const tubShowerCombosCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Tub and shower combo in Sedamsville? A cast-iron tub weighs more than the floor under it was designed for. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'A cast-iron tub full of water and a person is a serious load — several hundred pounds concentrated on a small area of an upstairs floor. In houses of this age, joists have often been notched by a century of plumbers and the span was never calculated for it. Before we set a new tub we look at what is carrying it, and where the structure needs help we say so. It is not a common problem, but it is not one you want found by the ceiling below.',
    ],
    localFaqs: [
      {
        q: 'Is our upstairs floor strong enough for a cast-iron tub?',
        a: 'Usually, but it is worth checking in a house this age — joists get notched over a century of plumbing work. We look at what is under the bathroom before setting anything heavy on it.',
      },
      {
        q: 'Would a lighter tub be safer?',
        a: 'A quality acrylic tub weighs a fraction of cast iron and is a legitimate choice where the structure is marginal. It warms up faster too; it just does not hold heat as long.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Tub and shower combo in Sayler Park? A standard tub is 14 inches deep — a proper soaking tub is not. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'Most people replacing a tub assume all tubs are the same depth, and they are not. A builder-standard unit gives you about fourteen inches to the overflow, which covers your legs and very little else. Deeper models in the same footprint exist, and in a house where the bathroom is small the depth is the only dimension you can actually gain. It costs a little more and it is the difference between a bath and sitting in a puddle.',
    ],
    localFaqs: [
      {
        q: 'Can we get a deeper tub without a bigger bathroom?',
        a: 'Yes — depth is independent of footprint. A deeper tub fits the same alcove and gives you a genuinely usable bath, which in a small room is the only dimension you can gain.',
      },
      {
        q: 'Does a deeper tub cost much more to fill?',
        a: 'It uses more hot water per bath, which matters if your heater is already marginal. We check the tank capacity against the tub volume before recommending one.',
      },
    ],
  },

  riverside: {
    intro:
      'Tub and shower combo in Riverside? If the tub takes fifteen minutes to fill, that is the faucet, not the tub. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'Fill time is decided by the faucet and the supply feeding it, not by the tub. An old two-handle valve on corroded half-inch galvanised pipe delivers a trickle, and a new tub plumbed onto it fills just as slowly. Replacing the run serving the bathroom while the wall is open is inexpensive; discovering the problem after everything is tiled is not. We check the flow at the existing tap before specifying anything.',
    ],
    localFaqs: [
      {
        q: 'Why does our tub take so long to fill?',
        a: 'Almost always the faucet and the supply pipe rather than the tub. Corroded galvanised line delivers a fraction of its original flow, and a new tub on the old pipe fills exactly as slowly.',
      },
      {
        q: 'Can that be fixed as part of the job?',
        a: 'Yes, and while the wall is open it is cheap. We measure the flow at the existing tap first so you know what you are buying.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Tub and shower combo in East Price Hill? In a two-family, the tub is what makes a unit rentable to families. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'For a landlord here, the tub is not a preference — it is the thing that keeps a unit available to tenants with young children, which is a substantial share of the market in this neighbourhood. Converting to a shower narrows who can rent it. Where a building has two units and you want one of each, that is a sensible split; converting both is a decision worth making deliberately rather than by default.',
    ],
    localFaqs: [
      {
        q: 'Should a rental unit keep its tub?',
        a: 'In a neighbourhood with a lot of young families, usually yes — it keeps the unit available to a wider pool of tenants. In a building with several units, one of each is often the right mix.',
      },
      {
        q: 'What holds up best in a rental tub?',
        a: 'A solid acrylic or porcelain-on-steel tub with a one-piece or well-sealed surround, a solid-brass valve body, and a curtain rather than sliding doors — tracks collect grime and are what tenants complain about.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Tub and shower combo in West Price Hill? Getting into a tub is the hardest thing most bathrooms ask of you. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'In a neighbourhood where households stay put, the step over a tub wall is the thing that eventually becomes a problem — and it is solvable without giving up the tub. A lower-profile model reduces the step by several inches, a rated grab bar at the entry point gives something solid to hold, and a slip-resistant tub floor does more than any bath mat. Decided at design stage, none of it looks like an adaptation.',
    ],
    localFaqs: [
      {
        q: 'Can a tub be made easier to get into?',
        a: 'Yes — a lower-profile tub cuts several inches off the step, a rated grab bar at the entry gives something solid to hold, and a textured tub floor beats any mat. None of it has to look clinical.',
      },
      {
        q: 'When does a walk-in tub make more sense?',
        a: 'When the step is genuinely the barrier rather than an inconvenience. We would rather point you to the right product than sell you a standard tub you will struggle with in two years.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Tub and shower combo in Lower Price Hill? Sliding doors on a tub look tidy and are a nuisance to live with. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'In a narrow rowhouse bathroom, sliding doors on a tub are the obvious choice and usually the wrong one. They halve the opening, which makes bathing a child or cleaning the tub genuinely awkward, and the bottom track collects grime that never fully comes out. A curtain on a decent rail costs a fraction, opens the full width, and is replaceable on a whim. We will fit doors where you want them — we would just rather you chose them knowing that.',
    ],
    localFaqs: [
      {
        q: 'Sliding doors or a curtain on a tub?',
        a: 'A curtain, in most rooms this shape. Doors halve the opening — awkward for bathing a child or cleaning — and the bottom track traps grime permanently. Doors do keep more water in, which is the honest trade.',
      },
      {
        q: 'Is there a middle option?',
        a: 'A single hinged or pivoting glass screen at the tap end. It keeps water off the floor without closing off the opening, and there is no track to clean.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Tub and shower combo in Over-the-Rhine? Getting a tub into a converted building is a logistics question first. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'A tub is a bulky, rigid object that cannot be taken apart, and in a converted building it has to come up a stair or into a lift and around a landing that was laid out in the 1870s. We measure that route before ordering, because the alternative is a tub that reaches your door and stops. Where the turn genuinely will not take a standard unit, there are shorter and shallower models that will, and we would rather find that out at the survey.',
    ],
    localFaqs: [
      {
        q: 'Will a tub even fit up our stairs?',
        a: 'We measure the route — stair width, landing turn, door openings — before ordering rather than after. Where a standard unit will not make the turn, shorter or shallower models often will.',
      },
      {
        q: 'Do we need building approval?',
        a: 'In most converted buildings here, yes, for anything touching a shared stack or the waterproofing. We prepare what the board asks for and work to their access and shut-off rules.',
      },
    ],
  },

  downtown: {
    intro:
      'Tub and shower combo in Downtown Cincinnati? In a tower, the tub arrives on the building’s schedule, not ours. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'A tub is the single most awkward item we deliver, and in a high-rise it has to go through a booked loading dock, into a protected freight elevator and along a corridor — all inside a window the building agrees to, often outside normal hours. None of that is difficult, but every part of it is arranged in advance. We deal with building management directly rather than leaving it with you.',
    ],
    localFaqs: [
      {
        q: 'How does a tub get into a downtown condo?',
        a: 'Through a booked dock window and a protected freight elevator, at a time the building agrees to. We arrange the dock, the insurance certificate and the elevator booking with management before the date.',
      },
      {
        q: 'Can the old tub go out the same day?',
        a: 'Yes. Where it is cast iron it is cut down and removed in sections, which is often the only way it leaves a tower at all.',
      },
    ],
  },

  'west-end': {
    intro:
      'Tub and shower combo in the West End? Reglazing buys a few years. Replacing is the honest fix. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'Reglazing a worn tub is genuinely cheaper and it has a place — in a rental between tenancies, or where money is tight this year. But it is a coating over a worn surface, it typically lasts a handful of years rather than decades, and it does nothing about what is behind the surround or under the tub. Where the substrate has been taking water, reglazing seals the problem in. We will tell you honestly which situation you are in.',
    ],
    localFaqs: [
      {
        q: 'Should we reglaze instead of replacing?',
        a: 'It is a legitimate short-term option, but it lasts years rather than decades and does nothing about the wall or floor behind the tub. Where water has been getting in, it seals the problem in rather than fixing it.',
      },
      {
        q: 'How do we know if water has got behind?',
        a: 'Soft spots at the tub edge, staining below, or a floor that gives underfoot. We open a small area on the site visit rather than guessing from the surface.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Tub and shower combo in Mount Adams? On the hill, the tub route in is planned before the tub is ordered. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'These houses are tall and narrow with stairs to match, and a tub is the one item that cannot be angled, tilted or taken apart to make a turn. We measure the full route on the site visit — parking, front door, stair width, the landing turn, the bathroom door — before anything is ordered. Where a standard sixty-inch unit will not make it, we will say so at survey rather than on delivery day.',
    ],
    localFaqs: [
      {
        q: 'Can a tub get up a Mount Adams stair?',
        a: 'Usually, with the route measured first. Stair width and the landing turn are what decide it, and we check both at survey rather than discovering the problem on delivery day.',
      },
      {
        q: 'How does the old tub come out?',
        a: 'Frequently cut down and removed in sections, particularly cast iron. That is normal on the hill and it is in the quote rather than sprung on you.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Tub and shower combo in Mount Auburn? Between tenancies, a tub swap is the fastest bathroom win there is. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Replacing a tired tub and surround in the same footprint is the highest-impact, lowest-disruption job available to a landlord: the plumbing stays where it is, nothing structural moves, and the unit reads as refreshed. Specified for tenancy rather than for a showroom — porcelain-on-steel or solid acrylic, a solid valve body, a curtain rather than a track — it comes back cheaper across five turnovers than the cheap version does across two.',
    ],
    localFaqs: [
      {
        q: 'Can a tub be replaced between tenants?',
        a: 'It is one of the quickest jobs we do, because nothing moves. Materials are staged before we start so the on-site window is short and you get firm dates before committing to a turnover gap.',
      },
      {
        q: 'What specification survives tenants?',
        a: 'Porcelain-on-steel or solid acrylic, a solid-brass valve body, a well-sealed one-piece surround, and a curtain instead of sliding doors. Tracks are what tenants complain about and what never comes clean.',
      },
    ],
  },

  clifton: {
    intro:
      'Tub and shower combo in Clifton? These Victorians have room for a tub worth lying in. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Unlike most of the older housing we work in, the bathrooms in these big Victorians are frequently generous — which means the tub does not have to be a standard sixty-inch alcove unit squeezed between three walls. There is often room for something longer, deeper, or set with a tiled deck and a shower over one end. The design question here is proportion rather than fit: choosing something that sits right in a period room rather than imported from a hotel.',
    ],
    localFaqs: [
      {
        q: 'Do we have to use a standard-size tub?',
        a: 'Not in a bathroom this size. Longer and deeper models exist, and a tiled deck with a shower over one end is a legitimate arrangement where the room allows. We measure and show you what it can genuinely take.',
      },
      {
        q: 'Will a modern tub look wrong in a Victorian?',
        a: 'It can, and we will say so before you commit. Profile, apron detail and tap style do most of the work — the tub can be entirely modern in function and still sit correctly in a period house.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Tub and shower combo in Corryville? Students shower; the tub is still what keeps a unit lettable to everyone else. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'Landlords here reasonably ask why a student let needs a tub at all, and the honest answer is flexibility. Property near campus does not stay student property forever, and a unit with a tub can be let to a young family or sold to an owner-occupier without further work. Where a building has several units, keeping tubs in some and converting others costs nothing extra and keeps every option open.',
    ],
    localFaqs: [
      {
        q: 'Do student rentals need a tub?',
        a: 'Not for the tenants you have now, but it keeps the unit lettable to families and saleable later without further work. In a multi-unit building, a mix of tubs and showers costs nothing extra.',
      },
      {
        q: 'Can the work fit between leases?',
        a: 'Yes — a same-footprint tub swap is one of the quickest jobs we do. Materials are staged in advance so the on-site window fits a turnover gap.',
      },
    ],
  },

  northside: {
    intro:
      'Tub and shower combo in Northside? The tub does not have to be white, and the tap does not have to be chrome. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'People here rarely want the default, and with a tub there is more room to move than most assume. The apron can be tiled or panelled rather than moulded plastic, the filler can be a wall-mounted or exposed set in an unlacquered finish, and the surround can be tile in a colour rather than a white acrylic box. None of it changes the plumbing or the timeline — it changes what the room looks like when you walk in.',
    ],
    localFaqs: [
      {
        q: 'Does a tub have to be a plain white alcove unit?',
        a: 'No. The apron can be tiled or panelled, the filler can be exposed and in a finish you actually like, and the surround can be tile in any colour. None of that changes the plumbing or the schedule.',
      },
      {
        q: 'Can you match something we have seen?',
        a: 'Usually, or get honestly close. Bring the picture to the site visit and we will tell you which parts your room and budget can carry.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Tub and shower combo in College Hill? Where the tap sits decides whether two people can use the room. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'In the bigger early-1900s houses the bathroom is often large enough that the tub does not have to sit in the obvious alcove — and moving the filler to the long side rather than the end changes how the room works. It frees the end wall, makes bathing a child from a kneeling position far easier, and stops the tap being the thing you lean against. In the mid-century houses the alcove decides it, and the work is a precise fit into a fixed opening.',
    ],
    localFaqs: [
      {
        q: 'Does the tap have to go at the end of the tub?',
        a: 'In a standard alcove, effectively yes. In the larger early-1900s bathrooms here there is often a genuine choice, and a side-mounted filler makes bathing a child much easier.',
      },
      {
        q: 'What fits in a standard alcove?',
        a: 'A 60-inch opening takes a full tub with a shower over, a tiled or panelled apron and a proper surround. The gain over a worn unit is depth, a sound substrate behind it and a valve that holds temperature.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Tub and shower combo in Walnut Hills? Before the clawfoot goes, understand what you would be giving up. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Many of these houses still have their original cast-iron clawfoot, and replacing it with an alcove tub and shower is a real upgrade in function — a proper shower, a sealed surround, no water on the floor. It is also irreversible, and the clawfoot is part of what the house is. Where a bathroom is large enough for a fitted tub-and-shower in an alcove and the clawfoot elsewhere, that is the outcome worth exploring first.',
    ],
    localFaqs: [
      {
        q: 'Should we replace the original clawfoot?',
        a: 'Only after considering the alternative. A fitted tub with a shower over is genuinely better to use, but the clawfoot is original and refinishable. Where the room takes both, that is usually the better answer.',
      },
      {
        q: 'Why not just put a shower over the clawfoot?',
        a: 'Because it leaks — the curtain clings inward and water escapes at the rim onto a floor never built to be wet. If you want a real shower, it wants a real enclosure.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Tub and shower combo in East Walnut Hills? A tub coming out is the heaviest thing that will cross your floors. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'In a house with original floors and stair joinery, the removal route matters more than anything that happens in the bathroom. A cast-iron tub is cut down and taken out in sections precisely so it never has to be dragged across a hall floor, and the route is protected hard before anything moves. It is unglamorous work and it is the reason the rest of the house looks the same at the end of the day as it did at the start.',
    ],
    localFaqs: [
      {
        q: 'How do you protect original floors during a tub removal?',
        a: 'Hard floor protection along a planned route, covered handrails, and cutting a cast-iron tub down so it leaves in manageable sections rather than being dragged out whole.',
      },
      {
        q: 'Is sectional removal extra?',
        a: 'No — in a house of this age it is the method we would use anyway, and it is in the quote rather than raised on the day.',
      },
    ],
  },

  avondale: {
    intro:
      'Tub and shower combo in Avondale? A tub that never fills properly is a supply problem, not a tub problem. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'Galvanised supply pipe corrodes inward over decades until the effective bore is a fraction of what it started as, and a tub is where that shows most plainly — because unlike a shower, you are waiting on volume rather than pressure. Replacing the run serving the bathroom while the wall is already open is inexpensive and it is the difference between a five-minute fill and a twenty-minute one. We measure the flow before specifying anything.',
    ],
    localFaqs: [
      {
        q: 'Will a new tub fill any faster?',
        a: 'Only if the supply is dealt with too. In houses this age the galvanised line has usually closed up with corrosion, and a new tub on the old pipe fills exactly as slowly.',
      },
      {
        q: 'Does the whole house need repiping?',
        a: 'Usually not. Replacing the run serving the bathroom while the wall is open solves it, and we will tell you plainly if the rest genuinely needs doing.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Tub and shower combo in Hyde Park? Filling a deep tub can empty a standard water heater. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'Deep tubs are the most common upgrade here and the most common disappointment, for a reason nobody mentions in a showroom: a generous soaking tub can want more hot water than the tank holds. Fill it and the last third runs cool, or the shower upstairs does. We work out the tub’s volume against the heater’s capacity before specifying, and where the numbers do not add up we say so — sometimes that means a different tub, sometimes a different heater.',
    ],
    localFaqs: [
      {
        q: 'Will our water heater fill a deep soaking tub?',
        a: 'It has to be checked rather than assumed. A large tub can want more hot water than the tank holds, which is why the last third runs cool. We total the volume against the capacity before recommending anything.',
      },
      {
        q: 'What if it will not?',
        a: 'Either the tub is sized to what the house can deliver or the heater is upgraded as part of the project. We price both rather than quietly installing something that will disappoint you.',
      },
    ],
  },

  oakley: {
    intro:
      'Tub and shower combo in Oakley? These bungalows put a window right over the tub — that needs handling. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'Bungalow bathrooms of this era very often have a window set in the wall above the tub, and adding a shower over that tub puts the window inside a wet zone. It has to be dealt with deliberately: waterproofed into the surround with a tiled, sloped sill, or fitted with an obscured glazed unit. Ignoring it is how a good new tub surround rots a window frame within a few winters.',
    ],
    localFaqs: [
      {
        q: 'There is a window over our tub — is that a problem?',
        a: 'Only if it is worked around rather than built in. A tiled sloped sill and a suitable glazed unit let it shed water instead of holding it, which is what keeps the frame sound.',
      },
      {
        q: 'Could we remove the window instead?',
        a: 'Sometimes, though it is more expensive and it costs the room its daylight. We price both so you can weigh it properly.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Tub and shower combo in Mount Lookout? An access panel now saves opening tile in ten years. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'A tub hides its own plumbing. The waste, the overflow and the trap all sit behind the apron, and when one of them eventually needs attention, how that job goes was decided when the tub went in. A removable panel in a tiled apron, or an access hatch in the wall behind, turns a wall-opening job into an hour. It costs almost nothing at installation and it is invisible afterwards — which is exactly why it gets skipped.',
    ],
    localFaqs: [
      {
        q: 'Will we be able to reach the tub waste later?',
        a: 'Yes, if it is planned. A removable panel in the apron or a hatch in the wall behind turns a future repair into an hour rather than opening finished tile.',
      },
      {
        q: 'Does an access panel look obvious?',
        a: 'Not when it is set out with the tiling. A panelled apron can be made entirely removable with no visible fixings, which is what we would normally do.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Tub and shower combo in Columbia-Tusculum? In a restored Victorian, the apron is where the detail shows. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'People restore houses here properly, and the moulded plastic skirt on a standard alcove tub is the single item most likely to look wrong in a room like this. A panelled timber apron, or a tiled one detailed to meet the floor cleanly, costs modestly more and changes the character of the whole installation. The tub behind it can be an ordinary modern unit — it is the visible face that decides whether it belongs.',
    ],
    localFaqs: [
      {
        q: 'How do you keep a modern tub from looking wrong in a period bathroom?',
        a: 'Mostly through the apron. A panelled or tiled skirt in place of a moulded plastic one changes the whole character, and the tub behind it can be an ordinary modern unit.',
      },
      {
        q: 'Does the riverside ground affect this work?',
        a: 'On the lower ground it is worth checking the floor structure before setting a heavy tub, particularly a cast-iron one. We look at what is underneath on the site visit.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Tub and shower combo in Mount Washington? A shower over a tub puts more moisture in the room than a bath does. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'Where a tub is used mainly as a shower — which in most households it is — the room takes far more vapour than the original extractor in a house of this era was ever sized for. If the fan is not upgraded alongside the tub, the new surround is fine but the paint, the grout and eventually the window frames are not. We size the extractor to the room and duct it outside as part of the job rather than as an upsell.',
    ],
    localFaqs: [
      {
        q: 'Does the extractor really need upgrading too?',
        a: 'In this housing, almost always. The original was undersized for a tub, and a shower over that tub produces far more vapour. It is a small part of the cost and it is what stops the room deteriorating.',
      },
      {
        q: 'Where does the fan vent to?',
        a: 'Outside, always — through the wall or the roof. Venting into a loft just moves the moisture somewhere you cannot see it.',
      },
    ],
  },

  madisonville: {
    intro:
      'Tub and shower combo in Madisonville? Keeping a tub is the safest resale decision in the bathroom. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'Reinvestment means people here are weighing what a change does to the house as an asset. On that measure a tub with a shower over it is the least risky choice available: it suits buyers with young children, it suits buyers who only shower, and it never has to be explained. Converting the only tub in a family home narrows the buyer pool for a benefit you may not be here to enjoy.',
    ],
    localFaqs: [
      {
        q: 'Does keeping a tub help resale?',
        a: 'It avoids narrowing the buyer pool, particularly for families with young children. A tub with a shower over it suits everyone, which is why it is the lower-risk choice in a house you may sell.',
      },
      {
        q: 'What if we would rather have a walk-in shower?',
        a: 'Then have one — in a house with two bathrooms, convert one and keep the other. Where there is only one bathroom, we will be straight with you about the tradeoff before you decide.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Tub and shower combo in Pleasant Ridge? Most tub leaks are the waste and overflow, not the tub. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'When a ceiling stains below a bathroom, the tub itself is rarely at fault. It is almost always the overflow plate or the waste connection behind the apron — a rubber gasket that has hardened over forty years and a linkage nobody has touched since. Those parts are cheap and they are the reason we replace the whole waste and overflow assembly with a new tub as standard rather than reusing what is there.',
    ],
    localFaqs: [
      {
        q: 'What usually leaks on an old tub?',
        a: 'The overflow gasket and the waste connection behind the apron, not the tub. The parts are inexpensive, which is why we replace the whole assembly with a new tub rather than reusing the old one.',
      },
      {
        q: 'There is a stain on the ceiling below — is the tub cracked?',
        a: 'Usually not. It is far more often the overflow or a failed joint at the surround. We open it up and look before quoting so the real cause is in the price.',
      },
    ],
  },

  westwood: {
    intro:
      'Tub and shower combo in Westwood? Cast iron, steel or acrylic — the material changes everything about the job. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Across that much housing we fit all three, and they are genuinely different. Cast iron holds heat longest, feels solid and is heavy enough to need the floor considered. Porcelain-on-steel is far lighter and cheaper but noisier and quicker to cool. Quality acrylic is warm to the touch, light to install and the most forgiving of an uneven floor. There is no single right answer — there is a right answer for your bathroom, and we will explain which and why.',
    ],
    localFaqs: [
      {
        q: 'Which tub material is best?',
        a: 'It depends on the room. Cast iron holds heat and feels solid but is heavy; steel is light and economical but noisier; quality acrylic is warm underfoot and forgiving of an uneven floor. We recommend for your house rather than by default.',
      },
      {
        q: 'Is acrylic a cheap option?',
        a: 'A thin one is. A properly reinforced acrylic tub is a legitimate long-term choice and is what we fit most often — the difference is in the wall thickness and the support underneath.',
      },
    ],
  },

  norwood: {
    intro:
      'Tub and shower combo in Norwood? Replacing just the tub means deciding where the tile line lands. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'A tub-only swap is the cheapest version of this job and it is often the right one — but the tile above has to be cut back to remove the old unit, and where that cut lands decides whether the result looks deliberate or patched. Sometimes the tile can be salvaged to a clean line and a new surround meets it properly. Sometimes the honest answer is that the wall should be done too. We show you where the join would be before you decide.',
    ],
    localFaqs: [
      {
        q: 'Can we replace just the tub and keep the tile?',
        a: 'Often, and it saves real money. The tile has to be cut back to remove the old tub, so what matters is whether that line can be made to look deliberate. We show you where it would land first.',
      },
      {
        q: 'Who issues the permit here?',
        a: 'The City of Norwood — it is a separate municipality even though Cincinnati surrounds it. We file and schedule accordingly.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Tub and shower combo in Blue Ash? If small children use it, the tub should be specified for them. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'A family hall bath has a brief nobody writes down. A textured tub floor matters more than any bath mat. A thermostatic or limit-stopped valve prevents a child turning the tap the wrong way. A hand shower on a rail makes rinsing hair possible without a jug. And a tub with a flatter floor is easier to sit a small child in than a curved one. None of it costs much and all of it has to be chosen before the wall closes.',
    ],
    localFaqs: [
      {
        q: 'What makes a tub better for small children?',
        a: 'A textured floor, a valve with a temperature limit stop, a hand shower on a rail for rinsing hair, and a flatter tub floor to sit in. All of it is decided at specification, not afterwards.',
      },
      {
        q: 'Is a temperature limit worth fitting?',
        a: 'With young children, yes. It caps how hot the tap can go regardless of what gets turned, which is the one scald risk a tub genuinely has.',
      },
    ],
  },

  montgomery: {
    intro:
      'Tub and shower combo in Montgomery? A freestanding tub is beautiful and it is not a small decision. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'Freestanding tubs are the most requested upgrade at this end of the market and the one with the most hidden cost. The floor has to carry a concentrated load, the filler needs plumbing up through the floor or a wall with no apron to hide it, showering over one is awkward and usually means a separate shower elsewhere, and cleaning around it is a job. Where the room and the budget support all of that it is superb. Where they do not, we will say so.',
    ],
    localFaqs: [
      {
        q: 'Can we have a freestanding tub?',
        a: 'Where the floor can carry it and the room allows a separate shower, yes — they are superb. The costs people miss are the floor-mounted filler, the structural check and the fact that showering over one rarely works well.',
      },
      {
        q: 'Can you shower over a freestanding tub?',
        a: 'Rarely well. Without a surround the water goes on the floor, so a freestanding tub usually assumes a separate shower in the same room. That is the decision to make before falling for the tub.',
      },
    ],
  },

  madeira: {
    intro:
      'Tub and shower combo in Madeira? One-piece surround or tiled — the seams are the difference. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'The wall above the tub is the choice that decides how the bathroom lives. A one-piece acrylic surround has no joints at the corners, which is where tiled walls most often fail — it is fast, economical and very low maintenance. Tile gives you far more design freedom and a better-looking room, at the cost of grout that wants sealing and corners that want detailing properly. Both are legitimate; what matters is that it is chosen rather than defaulted to.',
    ],
    localFaqs: [
      {
        q: 'One-piece surround or tile?',
        a: 'A one-piece surround has no corner joints to fail and needs almost no maintenance. Tile looks considerably better and gives you freedom, but wants sealed grout and properly detailed corners. Both are legitimate.',
      },
      {
        q: 'Do one-piece surrounds look cheap?',
        a: 'The thin ones do. Better systems are convincing and are genuinely the sensible choice in a hall bath or a rental — we will show you the difference rather than assuming.',
      },
    ],
  },

  wyoming: {
    intro:
      'Tub and shower combo in Wyoming? An original cast-iron tub is often worth refinishing rather than replacing. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'The cast-iron tubs in these houses were built to a standard nothing sold today matches, and a worn surface is not the same as a worn tub. Professionally refinished — stripped, etched and recoated properly rather than rolled over — one has decades left. That is a genuine alternative to replacement here, and it is worth considering before an irreplaceable original goes into a skip. What it does not fix is the wall or floor behind it, which we check either way.',
    ],
    localFaqs: [
      {
        q: 'Is it worth refinishing an original cast-iron tub?',
        a: 'In a house like this, often yes. Properly stripped and recoated, the tub itself has decades left and is better made than most replacements. It does not address the wall or floor behind it, which we check separately.',
      },
      {
        q: 'How long does a refinished surface last?',
        a: 'Done properly and looked after, many years — but it is a coating, and it will not match a new tub for lifespan. We will give you the honest comparison rather than pushing either way.',
      },
    ],
  },

  mariemont: {
    intro:
      'Tub and shower combo in Mariemont? That original 1920s tile is worth working around, not through. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'A good number of these bathrooms still have their original 1920s and 30s tile — coloured, small-format, and genuinely of the house. Where it survives sound, the interesting job is fitting a new tub to it rather than clearing the room: cutting back to a clean line, matching or deliberately contrasting the new surround, and keeping what cannot be bought again. The Landmark designation concerns the exterior, so the decision is entirely yours.',
    ],
    localFaqs: [
      {
        q: 'Can we keep the original tile and still replace the tub?',
        a: 'Frequently, where it is sound. The tile has to be cut back to remove the old tub, so the question is whether that line can be made to look deliberate — we show you before you decide.',
      },
      {
        q: 'Does the historic designation restrict our bathroom?',
        a: 'No — the review concerns what is visible from outside. Interior work is yours to decide.',
      },
    ],
  },

  cheviot: {
    intro:
      'Tub and shower combo in Cheviot? Tubs come shorter than 60 inches — which sometimes solves the room. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'Almost everyone assumes a tub is sixty inches, and in a bathroom that will not take one that assumption ends the conversation early. Fifty-four and even forty-eight inch tubs exist and are properly made — shorter in footprint, often deeper to compensate. In a compact early-1900s bathroom that difference can be what allows a tub at all rather than a shower by default. We measure before telling you what your options are.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is too small for a tub — is it?',
        a: 'Possibly not. Tubs are made at 54 and even 48 inches, often deeper to compensate for the shorter footprint. We measure before concluding that a shower is the only option.',
      },
      {
        q: 'Is a shorter tub uncomfortable?',
        a: 'For a tall adult lying full length, yes. For bathing children, washing, and a shower over it, a deeper short tub works well — and it beats having no tub in the house at all.',
      },
    ],
  },

  covedale: {
    intro:
      'Tub and shower combo in Covedale? The joint between tub and wall is where these fail. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'A tub moves. It flexes slightly when it fills and when someone steps in, and that tiny movement is why the joint where it meets the wall is the first thing to fail in almost every installation. Done properly the tub is filled with water before that joint is sealed, so the silicone cures at the tub’s loaded position rather than its empty one. It is a small discipline that most installers skip and it roughly doubles how long the seal lasts.',
    ],
    localFaqs: [
      {
        q: 'Why does the silicone around our tub keep failing?',
        a: 'Usually because it was sealed with the tub empty. A tub flexes when it fills, so a joint cured in the empty position tears the first time it is used. We fill the tub before sealing.',
      },
      {
        q: 'How often should it be redone?',
        a: 'A properly detailed joint should last years rather than months. Where it is failing annually, the cause is the installation rather than the sealant.',
      },
    ],
  },

  covington: {
    intro:
      'Tub and shower combo in Covington? A hand shower on a rail is what makes a tub genuinely useful. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'In the narrow rowhouse bathrooms here, a tub earns its place by doing several jobs, and a hand shower on a slide rail is what lets it. Rinsing hair, washing a child, cleaning the tub itself and rinsing something in it are all awkward with a fixed head alone. It needs a diverter, which is a decision made at the valve rather than added afterwards. Permitting and inspection here run under Kentucky rules, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Fixed head or hand shower over a tub?',
        a: 'Both, where the valve allows. A fixed head for showering and a hand shower on a rail for hair, children and cleaning the tub. It needs a diverter, so it is decided before the wall closes.',
      },
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, and we confirm the requirements before a start date is agreed.',
      },
    ],
  },

  newport: {
    intro:
      'Tub and shower combo in Newport? A curtain rail fixed into old plaster will not hold. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'In East Row houses the walls above a tub are lath and plaster, and a tension rod or a rail screwed into that will pull out — usually while someone is holding it. A rail has to reach the studs, or it needs blocking set behind the plaster before the surround goes on. Where neither is possible, a ceiling-mounted track solves it outright. It is a small detail and it is the one people call us back about.',
    ],
    localFaqs: [
      {
        q: 'Why does our shower curtain rail keep pulling out?',
        a: 'Because it is fixed into plaster rather than into studs or blocking. In a lath-and-plaster house a rail has to reach solid timber — or be replaced with a ceiling-mounted track.',
      },
      {
        q: 'Can blocking be added now?',
        a: 'Yes, while the wall is open for the tub — which is exactly the moment it is cheap. Afterwards it means opening a finished surround.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Tub and shower combo in Bellevue? In these houses the old tub is built into the wall, not sitting against it. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'In houses of this age the tub went in before the walls were finished, so the plaster and tile were built down over its rim rather than up to it. That means the old unit cannot simply be pulled out — the wall has to be cut back above it first, carefully, because what is above that line is original and often worth keeping. It is slower than a modern removal and it is the difference between a clean job and a damaged wall.',
    ],
    localFaqs: [
      {
        q: 'Why is removing an old tub more work in a house like this?',
        a: 'Because the wall was finished down over the tub rim rather than up to it. The plaster and tile have to be cut back carefully before the tub moves, particularly where what is above is original.',
      },
      {
        q: 'Will the wall above be damaged?',
        a: 'Not if the cut is planned. We decide where that line falls before starting, so the new surround meets it deliberately rather than patching what tore.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Tub and shower combo in Fort Thomas? A tiled tub deck looks superb and gives you more to clean. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'In the larger bathrooms here there is often room to set the tub into a tiled deck rather than a plain alcove, and it does look considerably better. The honest tradeoff is maintenance: a deck adds horizontal grouted surfaces that collect water and a rim joint that has to be detailed properly, and it makes access to the waste harder unless a panel is designed in. Worth doing — worth doing knowingly.',
    ],
    localFaqs: [
      {
        q: 'Is a tiled tub deck worth it?',
        a: 'It looks far better than a plain apron and suits a larger bathroom. The tradeoff is more grouted surface to keep clean and a rim joint that must be detailed properly — plus an access panel designed in for the waste.',
      },
      {
        q: 'How do you reach the plumbing under a deck?',
        a: 'Through a removable panel set out with the tiling. If that is not planned at the start, a future repair means breaking tile.',
      },
    ],
  },

  florence: {
    intro:
      'Tub and shower combo in Florence? We do not fit liners over an existing tub — here is why. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'There is a whole industry built on dropping an acrylic liner into an existing tub in a day. It is fast and cheap, and it leaves whatever was failing underneath exactly where it was — including water already sitting between the old tub and the new shell, which has nowhere to go and no way to dry. We take the old tub out, look at the substrate and the floor, and build back from something sound. It costs more and it is a different product.',
    ],
    localFaqs: [
      {
        q: 'Why not fit a liner over our old tub?',
        a: 'Because it encloses the old surface rather than replacing it. Water that gets between the two has nowhere to go, and anything already wrong with the wall or floor behind stays there sealed in.',
      },
      {
        q: 'Is a full replacement much slower?',
        a: 'A same-footprint tub swap is still a short job. What you get is everything behind the surface new and inspected rather than covered over.',
      },
    ],
  },

  erlanger: {
    intro:
      'Tub and shower combo in Erlanger? The diverter is the part of a tub that fails first. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Nearly every complaint we hear about an ageing tub is the diverter — the pull-up knob on the spout that sends water to the shower. It is a small mechanical part working in hard water and it wears out, which is why the shower dribbles while half the water still runs into the tub. Where the diverter is built into the spout it is a cheap replacement; where it is in the valve body it is a wall job. Which you have is worth knowing before it fails.',
    ],
    localFaqs: [
      {
        q: 'Why does water still run into the tub when the shower is on?',
        a: 'A worn diverter. Where it is in the spout it is an inexpensive swap; where it is in the valve body it means opening the wall — which is why a tub replacement is the sensible moment to deal with it.',
      },
      {
        q: 'Which type is better?',
        a: 'A valve-body diverter feels better and lasts longer; a spout diverter is far cheaper to replace when it goes. We will tell you which your setup has.',
      },
    ],
  },

  mason: {
    intro:
      'Tub and shower combo in Mason? If the tub flexes underfoot, it was never properly bedded. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'Builder-grade tubs in this housing were frequently set straight onto the subfloor with nothing underneath them. The base then flexes every time someone steps in, which feels cheap, makes noise, and over years works the joint at the wall loose. A tub bedded properly on mortar or a manufacturer’s foam base does not move at all. It is an hour of work and some material, and it is the single biggest difference between a tub that feels solid and one that does not.',
    ],
    localFaqs: [
      {
        q: 'Why does our tub flex when we step in?',
        a: 'It was set on the subfloor without being bedded underneath. A mortar bed or the manufacturer’s foam base stops it entirely, and it is inexpensive to do at installation.',
      },
      {
        q: 'Can an existing tub be bedded without removing it?',
        a: 'Not properly. It is one of the reasons a flexing builder tub is usually better replaced than patched.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Tub and shower combo in West Chester? What goes under the tub matters as much as the tub. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'Two identical tubs can feel completely different depending on what is beneath them. Set on a full mortar bed or the correct foam support, a tub is silent, rigid and warmer to sit in because there is no air gap under it. Set on its feet alone, it drums, flexes and loses heat. The support is invisible, it is where a low quote saves money, and it is worth asking any contractor about specifically.',
    ],
    localFaqs: [
      {
        q: 'What should go under a new tub?',
        a: 'A full mortar bed or the manufacturer’s foam support, so the base is rigid and silent with no air gap under it. It is invisible work and it is often where a cheaper quote is cheaper.',
      },
      {
        q: 'Does it affect how warm the bath stays?',
        a: 'A little, yes — a bedded tub has no air gap under it losing heat. The bigger difference is that it does not flex or drum.',
      },
    ],
  },

  pendleton: {
    intro:
      'Tub and shower combo in Pendleton? An old timber loft floor and a full tub deserve a look first. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'Loft conversions here sit on heavy timber beams that were specified for warehouse loading, which sounds reassuring — but the decking between them, and any alterations made during conversion, are a different question. A filled tub is a concentrated live load in one corner of a room. We look at what is actually under the bathroom before setting a cast-iron tub on it, and where the answer is uncertain a lighter acrylic unit removes the question entirely.',
    ],
    localFaqs: [
      {
        q: 'Can a converted loft floor take a cast-iron tub?',
        a: 'Often, but it is worth establishing rather than assuming — the original beams are heavy, the decking and any conversion alterations less predictable. A lighter acrylic tub removes the question.',
      },
      {
        q: 'Do we need building approval?',
        a: 'In most converted buildings here, yes, for anything touching a shared stack or the waterproofing. We prepare what the board asks for.',
      },
    ],
  },

  queensgate: {
    intro:
      'Tub and shower combo in Queensgate? Mostly a working district — here is the honest answer about what we do here. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers, and Queensgate is a working district more than a residential one — so we would rather set the expectation plainly. Where there is a residence here, typically a live-work or converted space, we do the same work we do anywhere: the same fixed price, the same in-house installers, the same warranty. For a commercial facility we are not the right firm, and we will say so on the phone rather than after a site visit.',
    ],
    localFaqs: [
      {
        q: 'Do you actually work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here.',
      },
      {
        q: 'Can you fit tubs in a commercial building?',
        a: 'No. We are residential remodelers and would rather say so up front than take on work outside what we are set up to do well.',
      },
    ],
  },

  cuf: {
    intro:
      'Tub and shower combo in CUF? In a shared house, the tub drain is the thing that gets called in about. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'A tub shared by four or five people blocks, and how often a landlord gets called out depends on decisions made at installation. A removable strainer that can actually be lifted and cleared without tools, a trap that is reachable through an access panel, and a waste run with as few tight bends as the layout allows will cut those calls substantially. None of it is visible and all of it is cheaper than repeat visits.',
    ],
    localFaqs: [
      {
        q: 'How do we reduce blocked-drain callouts?',
        a: 'A strainer a tenant can lift and clear without tools, a trap reachable through an access panel, and as few tight bends in the waste run as the layout allows. All decided at installation.',
      },
      {
        q: 'Can several units be done together?',
        a: 'Yes, and it is cheaper per unit — one mobilisation, one delivery, and a single specification so spare parts fit every bathroom in the building.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Tub and shower combo in Camp Washington? A plain tub fitted properly beats a fancy one fitted badly. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'On this housing the top of our range does not make sense and we will say so. A well-made porcelain-on-steel or reinforced acrylic tub, bedded properly, with a sound substrate behind the surround and a solid valve, will outlast a more expensive tub set on a flexing floor with a cheap valve behind it. The money that matters here is in the parts nobody photographs, and that costs the same whichever tub you choose.',
    ],
    localFaqs: [
      {
        q: 'How much should we spend on a tub here?',
        a: 'Usually the middle of our range rather than the top. A well-made tub bedded properly with a sound substrate and a solid valve outlasts an expensive one installed carelessly.',
      },
      {
        q: 'Where does the money actually matter?',
        a: 'The bedding under the tub, the substrate behind the surround, the valve body and the waste assembly. None of it shows and all of it decides how long the installation lasts.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Tub and shower combo in South Fairmount? A tub dumps forty gallons at once — the drain line has to take it. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'A shower trickles; a tub empties forty gallons or more in a couple of minutes. That surge is what finds a partly blocked lateral or an undersized waste run, and it is why a new tub sometimes appears to cause a drainage problem that was there all along. In a valley with this drainage history it is worth establishing the condition of the line before the work rather than after the first bath.',
    ],
    localFaqs: [
      {
        q: 'Could a new tub cause our drains to back up?',
        a: 'It will not cause it, but it will reveal it. A tub empties a large volume quickly, which finds a partly blocked or undersized line that a shower never troubled.',
      },
      {
        q: 'Should we have the line checked first?',
        a: 'Where there is any history of slow drains here, yes. We would rather flag it and recommend a camera inspection than install onto a problem.',
      },
    ],
  },

  'east-end': {
    intro:
      'Tub and shower combo in the East End? The old cast-iron tub leaves with us the same day. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'On a narrow riverfront street there is nowhere to leave a cast-iron tub sitting for a week, and we would not ask you to arrange a hauler after the fact. It is cut down, removed in sections and taken away by our crew on the day, in the price. The iron goes for scrap rather than landfill where we can, which costs you nothing either way but is worth doing.',
    ],
    localFaqs: [
      {
        q: 'Who takes the old tub away?',
        a: 'We do, on the same day, and it is in the price. On streets this tight there is rarely anywhere to store it, so leaving it with you is not an option we would offer.',
      },
      {
        q: 'Is there a skip outside for days?',
        a: 'Not on a job this size — debris leaves in our vehicles the day it comes out.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Tub and shower combo in North Fairmount? A porcelain-on-steel tub is honest value and we will say so. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'Porcelain-on-steel tubs get dismissed as the cheap option and they should not be. The surface is genuinely hard-wearing — it is fired enamel, not a coating — and the only real drawbacks are that it cools faster than cast iron and drums if it is not bedded properly. Bed it correctly and both largely disappear. In this housing it is frequently the sensible choice, and we would rather put the difference into the substrate behind the surround.',
    ],
    localFaqs: [
      {
        q: 'Is a steel tub a downgrade?',
        a: 'Not really. The enamel surface is hard-wearing and it is fired rather than coated. It cools faster than cast iron and drums if it is not bedded — both largely solved by bedding it properly.',
      },
      {
        q: 'Where should the money go instead?',
        a: 'Into the substrate behind the surround, the valve and the waste assembly. Those decide how long the installation lasts, and they cost the same whichever tub sits in front of them.',
      },
    ],
  },

  evanston: {
    intro:
      'Tub and shower combo in Evanston? One tub, several people, and one temperature setting — that is the problem. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'A tub shared by a whole household gets used at very different temperatures — a bath for a small child and a shower for an adult are not the same setting, and an old two-handle valve makes that a guessing game every time. A single-lever valve with a limit stop gives a repeatable, capped setting that everyone can use safely. It is a modest part and it is what stops the daily fiddling.',
    ],
    localFaqs: [
      {
        q: 'Can we set a maximum temperature?',
        a: 'Yes — a limit stop on a modern valve caps how hot it can go regardless of what gets turned. With small children in the house it is the single most worthwhile part of the valve specification.',
      },
      {
        q: 'Is a single-lever valve better than two handles?',
        a: 'For a shared bathroom, considerably. It gives a repeatable setting rather than a guess, and it is the only sensible way to add a temperature limit.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Tub and shower combo in South Cumminsville? On a slab, the tub waste is under concrete. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Where a bathroom sits on a ground-floor slab, the tub’s waste and trap are cast into the concrete beneath it. A like-for-like replacement usually connects to what is there and needs no cutting at all — which is the good news. But if the existing trap is damaged or the new tub’s outlet does not line up, it means saw-cutting and repouring. We check the outlet position against the existing waste before ordering, precisely so that does not become a surprise.',
    ],
    localFaqs: [
      {
        q: 'What if our bathroom floor is concrete?',
        a: 'A like-for-like tub usually connects straight to the existing waste with no cutting. It only becomes a slab job if the trap is damaged or the new tub’s outlet does not line up — which we check before ordering.',
      },
      {
        q: 'How do you check without breaking the floor?',
        a: 'By measuring the existing outlet position and matching the replacement tub to it. Choosing a tub with the waste in the same place is what avoids the concrete entirely.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Tub and shower combo in English Woods? A grab bar by the tub only works if there is timber behind it. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Stepping into a tub is the point in a bathroom where people are least stable, and a bar screwed into tile and board will pull out under exactly the load it was bought for. One that works is anchored into solid blocking fixed between the studs before the surround went on. That blocking costs almost nothing at the right moment and cannot be added afterwards without removing finished tile, which is why we put it in whether or not bars go up on day one.',
    ],
    localFaqs: [
      {
        q: 'Can grab bars be added by the tub later?',
        a: 'Only safely where blocking was installed behind the surround first. Fixed into board alone they pull out under load — which is precisely the moment they were meant for.',
      },
      {
        q: 'Should we fit bars now or just the blocking?',
        a: 'Blocking always, bars when you want them. The wall is then ready and you are not committing to the look before you need it.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Tub and shower combo in North Avondale? These houses have room for a proper children’s bathroom. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'Houses this size usually have more than one bathroom, and that allows something most homes cannot do: specify one of them properly for children rather than compromising a single room for everyone. A slightly lower tub, a limit-stopped valve, a hand shower on a rail, a textured floor and storage at a height a child can reach. Meanwhile the primary bathroom gets specified for adults without having to hedge.',
    ],
    localFaqs: [
      {
        q: 'Should the children’s bathroom be different?',
        a: 'Where a house has more than one, yes. A lower tub, a temperature limit stop, a hand shower on a rail and a textured floor make a genuine difference — and it frees the primary bathroom from having to compromise.',
      },
      {
        q: 'Is that a lot of extra cost?',
        a: 'Very little. Almost all of it is specification rather than product, and it has to be decided before the wall closes either way.',
      },
    ],
  },

  millvale: {
    intro:
      'Tub and shower combo in Millvale? In a tight bathroom, the door and the tub have to be planned together. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'In the smallest bathrooms the constraint is rarely the tub itself — it is what happens in front of it. A door swinging inward, a basin projecting into the walkway and a tub apron all competing for the same three feet is what makes a room unusable. Changing the door to a slider, or moving the basin a few inches, frequently does more for the room than anything to do with the tub. We look at the whole floor plan before talking about products.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom feels impossible — is a tub realistic?',
        a: 'Often yes, once the door swing and basin position are looked at. In a small room those two things usually cost more floor space than the tub does.',
      },
      {
        q: 'Would a shorter tub help?',
        a: 'Sometimes. Tubs are made at 54 and 48 inches, often deeper to compensate. We measure before concluding anything.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Tub and shower combo in Paddock Hills? That mid-century coloured tub may be worth keeping. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Mid-century bathrooms used colour with a confidence that has come back into fashion, and a sound original tub in pink, mint or pale blue is not something you can buy now. Where the tub itself is solid and only the surround has failed, replacing the walls around a retained tub is a legitimate and much cheaper project. Where the tub is chipped through to the iron, it is a different conversation — and we will tell you which you have.',
    ],
    localFaqs: [
      {
        q: 'Should we keep our original coloured tub?',
        a: 'Where the surface is sound, it is worth considering — that colour cannot be bought new, and replacing only the surround is much cheaper. Where it is chipped through to the iron, replacement makes more sense.',
      },
      {
        q: 'Can a new surround match an old tub?',
        a: 'It can be matched or deliberately contrasted, and honestly contrast usually looks better. We will show you both before you decide.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Tub and shower combo in Spring Grove Village? Mature trees, old laterals, and forty gallons at once. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'Streets shaded by mature trees have mature root systems, and old clay or cast-iron laterals are what those roots find. A tub is the fixture that exposes a partly blocked line, because it releases its whole volume in a couple of minutes rather than trickling. Where a house has any history of slow drains, we would rather establish the cause before fitting a new tub than be called back after the first bath.',
    ],
    localFaqs: [
      {
        q: 'Our drains are slow — will a new tub make it worse?',
        a: 'It will make it more obvious, because a tub empties a large volume quickly. If there is a history of slow drains, the lateral is worth investigating before the new work.',
      },
      {
        q: 'Do you check the drain line as part of the job?',
        a: 'We look at the symptoms and tell you plainly when a camera inspection is warranted, rather than installing onto a known problem.',
      },
    ],
  },

  linwood: {
    intro:
      'Tub and shower combo in Linwood? A recess in an outside wall above a tub is a cold, damp corner. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'People often want a recessed shelf in the wall above a tub, and the obvious wall is frequently an outside one — which is the one place it should not go. Cutting a recess into an exterior wall removes insulation depth and leaves a cold surface inside a wet zone, where it collects condensation. An interior partition is the right home for it, positioned in a stud bay carrying no services. We plan that at design stage rather than cutting where it happens to be convenient.',
    ],
    localFaqs: [
      {
        q: 'Can we have a recessed shelf above the tub?',
        a: 'Yes, but in an interior wall wherever possible. An exterior wall loses insulation depth at the recess and becomes a cold, condensation-prone surface.',
      },
      {
        q: 'What if only the outside wall is available?',
        a: 'It can be done with the insulation and vapour detailing rebuilt at the recess — but it is a considered decision with a cost, not a default.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Tub and shower combo in Bond Hill? Think about servicing the valve before the surround closes. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'Every tub and shower valve eventually needs a cartridge, and how that job goes was decided when the surround went on. A valve set at a sensible depth with its trim removable from the front is a twenty-minute repair; one buried too deep or with no route in can mean opening finished tile. It costs nothing to get right at rough-in and it is invisible afterwards, which is exactly why it gets skipped.',
    ],
    localFaqs: [
      {
        q: 'Will the valve be serviceable later?',
        a: 'Yes — we set it at the correct depth so a cartridge can be changed from the front without disturbing the surround. It costs nothing at the right moment.',
      },
      {
        q: 'Do we need an access panel behind the tub?',
        a: 'For the valve, usually not with a properly set modern one. For the waste and overflow, a removable apron panel is worth having and we will design one in.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Tub and shower combo in Villages of Roll Hill? Mostly apartments here, so we deal with owners and managers. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'Being straight about this: in a community of rented apartments, the person who commissions a tub replacement is the owner or the management company rather than the resident. If you rent here and your tub needs work, the route is your landlord — and we are happy to speak to them directly. For owners, doing units as a programme with one specification across the building is both cheaper per unit and far easier to maintain afterwards.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can I have the tub replaced?',
        a: 'The work has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'We manage several units — can they be done together?',
        a: 'Yes, and it is the sensible way. One mobilisation, one specification across every unit, and interchangeable parts when something needs servicing later.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Tub and shower combo in East Westwood? The apron panel decides whether you can ever reach the plumbing. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'A tub’s waste, overflow and trap all live behind the apron, and how they are reached in ten years is decided now. A moulded skirt tiled or sealed permanently in place means any future repair starts by breaking something. A panelled apron made genuinely removable, with no visible fixings, costs a modest amount more and turns that repair into an hour. It is the sort of decision nobody thinks about until they need it.',
    ],
    localFaqs: [
      {
        q: 'Will we be able to reach the tub plumbing later?',
        a: 'Yes, if the apron is made removable rather than sealed permanently. A panelled skirt with concealed fixings looks the same and turns a future repair into an hour.',
      },
      {
        q: 'Does a removable panel look obvious?',
        a: 'Not when it is set out with the finish. It is one of the details we would specify as standard rather than as an option.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Tub and shower combo in Western Hills? A tub is the one fixture you look at while lying down. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Bathrooms of this era were lit by one fitting in the middle of the ceiling, positioned for someone standing at the basin. Lie in the tub and you are looking straight into it. Moving the fitting, adding a dimmable circuit, or putting a second wet-rated light over the tub end changes the room from functional to somewhere you would actually want to spend twenty minutes. Since the ceiling is usually open for the extractor anyway, it is a small addition.',
    ],
    localFaqs: [
      {
        q: 'Can the lighting be improved over the tub?',
        a: 'Yes — repositioning the fitting or adding a dimmable wet-rated light over the tub end. Since the ceiling is usually open for the extractor, it is a small addition that changes how the room feels.',
      },
      {
        q: 'Does the bathroom need rewiring?',
        a: 'Rarely. Usually the existing circuit takes it, and we will tell you plainly if yours is the exception.',
      },
    ],
  },

  california: {
    intro:
      'Tub and shower combo in California? On this ground, waterproof the whole floor, not just the tub wall. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'Standard practice waterproofs the wall above a tub and stops there, which is fine in most houses. In homes that have taken water before, extending a bonded membrane across the whole bathroom floor and up the wall base is worth the modest extra — it turns the room into a tray rather than a floor with a sealed corner. It will not stop a river. It is the difference between drying a room out and replacing its structure.',
    ],
    localFaqs: [
      {
        q: 'Why waterproof beyond the tub surround?',
        a: 'In a house that has taken water before, the value is in the whole floor being a sealed tray. It is a modest addition while the floor is open and impossible to add later.',
      },
      {
        q: 'Does that protect against flooding?',
        a: 'Not against a river — nothing in a bathroom does. It makes the room far easier to dry out and far less likely to need structural repair.',
      },
    ],
  },

  carthage: {
    intro:
      'Tub and shower combo in Carthage? A tub replacement is the cheapest way to make a bathroom feel new. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Where a bathroom is dated but sound, replacing the tub and its surround alone changes the room out of all proportion to what it costs. The tub and the wall above it are what your eye goes to, they are the parts that show wear first, and none of it requires moving plumbing or touching the floor. Where a household wants the biggest visible improvement for the smallest outlay, this is usually our recommendation over a full remodel.',
    ],
    localFaqs: [
      {
        q: 'What is the cheapest way to update a tired bathroom?',
        a: 'Usually the tub and surround alone. They are what the eye goes to and what shows wear first, and replacing them needs no plumbing moved and no floor touched.',
      },
      {
        q: 'Will it look odd against an old floor and vanity?',
        a: 'Sometimes, and we will say so honestly on the site visit rather than after. Where it would, doing the floor as well is often a modest addition.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Tub and shower combo in Winton Hills? Bedding, substrate and valve — that is where a tub job is won. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'Three things decide whether a tub installation lasts, and none of them is the tub. It has to be bedded so it does not flex. The wall behind the surround has to be a moisture-resistant substrate rather than ordinary board. And the valve body has to be one whose parts will still exist in a decade. Get those right with a modest tub and you have a good bathroom. Get them wrong with an expensive one and you have a problem in five years.',
    ],
    localFaqs: [
      {
        q: 'What actually decides how long a tub installation lasts?',
        a: 'Bedding under the tub so it does not flex, a moisture-resistant substrate behind the surround, and a valve whose parts will still be available in ten years. None of those is the tub itself.',
      },
      {
        q: 'How do we compare two quotes?',
        a: 'Ask about those three specifically. That is usually where a lower number is coming from, rather than the tub on the front page.',
      },
    ],
  },

  roselawn: {
    intro:
      'Tub and shower combo in Roselawn? A mid-century steel tub lifts out whole — which keeps the job cheap. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'The tub in most of these houses is pressed steel rather than cast iron — a fraction of the weight and removable in one piece by two people. That matters to the price. Where an older house needs a cast-iron tub cut down and carried out in sections, a steel unit takes real labour and real disruption out of the day. It is one of the reasons tub replacements in this housing are among the most affordable jobs we do.',
    ],
    localFaqs: [
      {
        q: 'Is our tub cast iron or steel?',
        a: 'In most mid-century houses here it is pressed steel — much lighter and removable whole. The weight and the sound when tapped tell us apart quickly on the site visit.',
      },
      {
        q: 'Does that make it cheaper?',
        a: 'Noticeably. No cutting, no sectional removal and less protection on the route out, which comes off the labour rather than the materials.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Tub and shower combo in Mount Airy? A split-level puts the bathroom on a half-storey with a shallow floor. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'The terrain produced a lot of split-levels here, and a split-level puts the bathroom on a half-storey with a shallow floor void beneath it. For a like-for-like tub that is no problem at all. It becomes one if the replacement tub has its waste in a different position, because there is very little depth to route a new trap into. We match the outlet position to what is there wherever possible rather than assuming room to move it.',
    ],
    localFaqs: [
      {
        q: 'Does a split-level complicate a tub replacement?',
        a: 'Only if the waste has to move. The floor void on a half-storey is shallow, so we match the new tub’s outlet position to the existing one wherever possible.',
      },
      {
        q: 'What if the tub we want has the waste at the other end?',
        a: 'Then it is worth knowing before ordering. Most tubs are available in both hands, and choosing the right one avoids the problem entirely.',
      },
    ],
  },

  hartwell: {
    intro:
      'Tub and shower combo in Hartwell? A shower ring over a clawfoot leaks. An alcove tub does not. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Owners of these houses often try the compromise first: a riser and a hoop curtain over the original clawfoot. It looks charming and it puts water on a floor that was never built to be wet — the curtain clings inward and escapes at the rim. If you want a bath and a genuine shower in the same room, a fitted tub in a properly waterproofed alcove is the arrangement that actually works. The clawfoot can stay elsewhere if the room allows.',
    ],
    localFaqs: [
      {
        q: 'Can we just add a shower ring to the clawfoot?',
        a: 'You can, but it tends to leak — the curtain clings inward and water escapes at the rim onto an unprotected floor. We would rather say that than fit one and be called back.',
      },
      {
        q: 'Can we keep the clawfoot as well?',
        a: 'Where the room takes both, yes — a fitted tub and shower in an alcove with the clawfoot retained is the best of both. Where it does not, we will give you a straight recommendation.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Tub and shower combo in Kennedy Heights? Decide where the shampoo goes before the surround goes on. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'The detail that quietly spoils a good tub installation is storage. Bottles end up balanced on the rim or on a suction rack that falls into the bath, because nobody decided at design stage where they belong. A recess sized to what you actually own, set at a height reachable from both standing and sitting, is a small piece of planning that removes a daily irritation for twenty years — and it has to be framed before the surround goes on.',
    ],
    localFaqs: [
      {
        q: 'Where should storage go around a tub?',
        a: 'A recess sized to what you actually use, reachable both standing and sitting in the tub. It has to be framed before the surround goes on, which makes it a design decision rather than a later one.',
      },
      {
        q: 'Is a corner shelf enough?',
        a: 'It is better than nothing and it is what most people end up with. A recess costs a little more at the right moment and looks considerably better.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Tub and shower combo in St. Bernard? Move a tub waste and the vent has to follow. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'A like-for-like tub swap leaves the venting alone, which is one reason it is a straightforward job. But where the waste moves — a different tub hand, a repositioned unit — the trap needs a vent within a set distance or draining water siphons it dry and the room starts smelling of the sewer. In tight early-1900s houses the existing vent is often not where a new position needs it. It is invisible work, and it is not optional.',
    ],
    localFaqs: [
      {
        q: 'Why does venting matter if we move the tub?',
        a: 'Because without a vent within the permitted distance, draining water siphons the trap dry and sewer gas comes back into the room. It shows up weeks later if it is skipped.',
      },
      {
        q: 'Can we avoid it by keeping the tub where it is?',
        a: 'Largely, yes — a like-for-like swap usually leaves the venting untouched, which is part of why it is the cheaper job.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Tub and shower combo in Elmwood Place? Same position, same size, new everything — usually the right job. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Not every bathroom needs rethinking. Where the layout already works, replacing the tub in its existing position — new unit, new surround, new valve, new waste — costs considerably less than moving anything, because no plumbing relocates and no wall does. In small houses that is usually the sensible project, and we will recommend it rather than talking you into a reconfiguration that buys very little.',
    ],
    localFaqs: [
      {
        q: 'Can we just replace what is there?',
        a: 'Often, and it is usually the better value. Keeping the tub position means no waste moves and no venting changes, which removes the most expensive parts of the job.',
      },
      {
        q: 'Is that a lesser job?',
        a: 'Cheaper, not lesser. The tub, surround, valve and waste are all new — you are simply not paying to move plumbing that was already in the right place.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Tub and shower combo in Delhi Hills? A walkout lower level is the easiest second bathroom you will get. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope frequently have a walkout lower level with a half bath already in it, and where there is space, adding a tub there is the most economical second bathroom available. Drain and supply already exist and the walkout usually gives the room a window. What decides it is whether the waste can run to the sewer by gravity, which depends on where your house sits on the hill — measured on the first visit rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Can the lower-level half bath take a tub?',
        a: 'Where there is floor area and the waste can reach the sewer, yes — and it is the cheapest way to add a second full bathroom. We measure the drain elevation on the first visit.',
      },
      {
        q: 'Will it need a pump?',
        a: 'It depends where the house sits on the hill. Gravity where possible; a sealed ejector where not, priced clearly rather than folded in.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Tub and shower combo in Golf Manor? Golf Manor issues its own permits — not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Being an incorporated village entirely surrounded by the city catches people out. Permits and inspections for plumbing work here come through Golf Manor rather than the city your postal address suggests, and we confirm that before scheduling. On the compact lots, delivery access for a bulky item like a tub also gets arranged in advance rather than sorted out on the morning.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit for work in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm the authority and its requirements before scheduling.',
      },
      {
        q: 'Does a tub replacement need a permit?',
        a: 'Where the plumbing is altered, generally yes. A pure like-for-like swap sometimes does not, and we will tell you which yours is rather than guessing.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Tub and shower combo in Fairfax? A cracked tub cannot really be patched — here is why. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'A hairline crack in an acrylic or fiberglass tub is a symptom rather than the problem. Those bases flex where they are unsupported, and a repair kit does nothing about the movement that caused it — so the crack reappears beside the patch. Worse, water has usually been passing through it for a while, which means the floor beneath wants checking. We would rather open it up and tell you what is actually going on than sell you a repair twice.',
    ],
    localFaqs: [
      {
        q: 'Can a cracked tub be repaired?',
        a: 'Temporarily. The crack comes from flex in an unsupported base, and a patch does not remove the flex — so it returns beside the repair. By then water has usually reached the floor.',
      },
      {
        q: 'How do we know if water got underneath?',
        a: 'A floor that gives near the tub, staining below, or a soft spot at the apron. We open a small area on the site visit rather than guessing.',
      },
    ],
  },

  mack: {
    intro:
      'Tub and shower combo in Mack? Filling a tub and running a shower are two different demands on the heater. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'A family running showers back to back is asking about recovery rate. A family filling baths is asking about tank volume, which is a different question with a different answer. A deep tub can take most of a standard tank in one go, so a household that baths children in the evening and showers in the morning is pulling on the heater in two ways. We work both out before recommending a tub, rather than after the first cold bath.',
    ],
    localFaqs: [
      {
        q: 'Will our heater cope with baths and showers?',
        a: 'They are different demands — a bath needs volume in one go, back-to-back showers need recovery rate. We check both against the tub you are considering rather than assuming.',
      },
      {
        q: 'Do we need a bigger water heater?',
        a: 'Not always. Sometimes a slightly shallower tub or a different bathing routine solves it, and we would rather say that than sell you equipment.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Tub and shower combo in Monfort Heights? An upstairs tub sits directly over your living space. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Most of these houses put the family bathroom on the second floor over a living room or kitchen, and a tub is the fixture with the most water in it. A slow leak at the waste or the wall joint does not announce itself upstairs — it appears months later as a stained ceiling and a joist that has been wet the whole time. That is why the waste assembly is replaced rather than reused, and why the wall joint is sealed with the tub filled.',
    ],
    localFaqs: [
      {
        q: 'Our tub is above the living room — what protects it?',
        a: 'A completely new waste and overflow assembly rather than reusing the old one, a moisture-resistant substrate behind the surround, and the wall joint sealed with the tub filled so it cures at its loaded position.',
      },
      {
        q: 'There is already a stain below — what does that mean?',
        a: 'Usually the overflow gasket or a failed wall joint that has been leaking slowly. We open it up and check the joists and subfloor before quoting so it is in the fixed price.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Tub and shower combo in Bridgetown? How much cleaning you sign up for is decided at design stage. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Grout is where tub surrounds get their reputation for maintenance, and how much you live with is a choice. Large-format tile means fewer joints. Epoxy grout resists staining far better than cement-based. A one-piece surround has effectively none. Each step costs a little more up front and saves a recurring job for twenty years — worth deciding before the tile is chosen rather than at the first annual clean.',
    ],
    localFaqs: [
      {
        q: 'How do we get a surround that needs less cleaning?',
        a: 'Fewer joints and better grout — large-format tile, epoxy grout, or a one-piece surround with almost no grout at all. Each costs a little more and saves a recurring chore.',
      },
      {
        q: 'Does grout need resealing?',
        a: 'Cement-based does, periodically. Epoxy does not in the same way, which is much of what you are paying for.',
      },
    ],
  },

  finneytown: {
    intro:
      'Tub and shower combo in Finneytown? A same-footprint tub swap really is a one-day job. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth being straight about the timeline, because tub jobs and shower jobs differ. Replacing a tub in its existing position with a stock unit and a one-piece or standard tiled surround is genuinely a day on site. What extends it is a tiled surround needing grout to cure, a non-standard tub on order, or anything that moves the waste. We tell you which of those applies to your job at quotation rather than letting you plan around the wrong one.',
    ],
    localFaqs: [
      {
        q: 'Is it really a one-day job?',
        a: 'For a same-position tub with a stock unit and a standard surround, yes. A tiled surround needs curing time and a non-standard tub needs ordering — we tell you which yours is before you sign.',
      },
      {
        q: 'Can we use it that evening?',
        a: 'With a one-piece surround, usually. With tile and grout there is a curing period first, and we are clear about it up front.',
      },
    ],
  },

  amberley: {
    intro:
      'Tub and shower combo in Amberley Village? At this size, the tub and the shower can stop sharing. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'A tub with a shower over it is a compromise made for space, and in a bathroom this size the compromise is not necessary. Separating them — a proper enclosed shower and a tub that is only ever a tub — means the tub can be deeper and set where it suits the room rather than jammed into a plumbing wall, and the shower can be a real one. Where the room genuinely takes both, we would almost always recommend it over one better combination unit.',
    ],
    localFaqs: [
      {
        q: 'Should we separate the tub and shower?',
        a: 'Where the room takes both, almost always. The tub can be deeper and positioned for the room rather than the plumbing wall, and the shower becomes a real one instead of a compromise.',
      },
      {
        q: 'Does that cost much more?',
        a: 'More than one combined unit, yes — two sets of plumbing and two enclosures. In a bathroom this size it is usually where the money is best spent.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Tub and shower combo in Arlington Heights? A few minutes of preparation makes the site visit worth more. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Since we come a distance to reach the valley villages, it is worth making the visit count. Clearing access to the bathroom and to whatever is below it lets us check the waste run and the floor structure the same day. Knowing where your main shutoff is helps, as does a rough build date. And if there is any history of the ceiling below staining, say so — it changes what we look for before we quote.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the site visit?',
        a: 'Access to the bathroom and to whatever is below it, the location of your main shutoff, a rough build date, and any history of staining on the ceiling underneath. That is usually enough for a fixed price the same day.',
      },
      {
        q: 'Will you need to open anything?',
        a: 'A small area behind the surround, with your agreement. It is the only honest way to price a fixed-cost job rather than padding it with contingency.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Tub and shower combo in North College Hill? A tub filling at 6am is louder than you think. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'In closely built houses with bathrooms backing onto bedrooms, the noise a tub makes is a real quality-of-life issue — the drumming of water into a steel base, the rush through pipes in a shared wall, and the bang when the valve closes. Bedding the tub kills the drumming, insulating the pipe run in the wall handles most of the rest, and an arrestor at the valve stops the bang. All three are cheap while the wall is open and impossible afterwards.',
    ],
    localFaqs: [
      {
        q: 'Can a tub be made quieter?',
        a: 'Considerably. Bedding it stops the drumming as it fills, insulating and isolating the pipe run in a shared wall handles the rush, and an arrestor at the valve stops the bang when it shuts off.',
      },
      {
        q: 'Is that expensive?',
        a: 'Very little while the wall is open, and effectively impossible afterwards without opening finished tile.',
      },
    ],
  },

  newtown: {
    intro:
      'Tub and shower combo in Newtown? Over a crawl space, the tub waste is reachable from below. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'A lot of these houses sit over a crawl space rather than a basement or a slab, and for tub work that is genuinely the easiest case — the waste, the trap and the venting are all reachable from underneath without cutting concrete or lifting the bathroom floor. What the crawl does demand is a proper look at what is under there first: moisture, ventilation and the condition of the joists all matter on ground this low, particularly under a fixture that gets heavy when full.',
    ],
    localFaqs: [
      {
        q: 'Is a crawl space better or worse for tub work?',
        a: 'Better, generally. The waste and venting are reachable from underneath rather than through the floor, which keeps cost and disruption down.',
      },
      {
        q: 'What do you check down there?',
        a: 'Moisture, ventilation and the condition of the joists under the bathroom — particularly important under a fixture that weighs several hundred pounds when full.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Tub and shower combo in Turpin Hills? The linen closet next door is usually the cheapest space you own. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Where a hall bath is too tight for the tub to work properly, the answer is often a wall away rather than a fixture away. A linen closet or the corner of an adjoining wardrobe backing onto the tub end can usually be absorbed, which turns a cramped alcove into a room you can actually move around. Because the waste generally stays put, it costs far less than the extra space suggests. We look at what is on the other side of every wall before assuming the footprint is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can the bathroom be made bigger?',
        a: 'Often, by absorbing an adjoining closet rather than moving plumbing. Since the tub waste usually stays where it is, the cost is much lower than people expect for the space gained.',
      },
      {
        q: 'Is losing the linen closet worth it?',
        a: 'That depends where else the storage can go, and we will work through it rather than assuming. Sometimes the honest answer is that the closet is worth more.',
      },
    ],
  },

  silverton: {
    intro:
      'Tub and shower combo in Silverton? Take the tile to the ceiling and the damp band disappears. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'Stopping a tub surround at showerhead height is the cheaper detail and it leaves a painted band above that takes the full force of the steam — which is where peeling and mould appear first. Running it to the ceiling costs a little more, removes that vulnerable band and makes a small room read as taller. Where a budget will not stretch, the compromise is a moisture-resistant paint system rather than ordinary emulsion, and we will tell you which you are getting.',
    ],
    localFaqs: [
      {
        q: 'Should the surround go all the way up?',
        a: 'Where the budget allows, yes. The painted band above showerhead height takes the most steam and is where problems start. Full-height removes it and makes the room feel taller.',
      },
      {
        q: 'What if we cannot stretch to that?',
        a: 'The band above wants a proper moisture-resistant paint system rather than ordinary emulsion. It is a real difference and we specify it rather than leaving it to chance.',
      },
    ],
  },

  lockland: {
    intro:
      'Tub and shower combo in Lockland? There are usually three floors under the one you can see. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The bathroom in a worker cottage was added decades after the house was built and has typically been redone twice since, each covering laid straight over the last. Lift the vinyl and there is often sheet flooring over hardboard over the original boards. Every layer raises the floor, which is why the tub apron looks short and the door catches. Taking it back to structure is the right start, and it usually gives back an inch or two into the bargain.',
    ],
    localFaqs: [
      {
        q: 'Why does our tub look like it is sinking into the floor?',
        a: 'Layers. Each renovation added a covering over the last, raising the floor around a tub set at the original level. Taking it back to structure recovers that height.',
      },
      {
        q: 'Does all of it have to come out?',
        a: 'For a sound installation, yes — a tub wants bedding on a known, solid substrate. It is also the only way to see the condition of what is underneath before committing to a price.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Tub and shower combo in Groesbeck? Set the showerhead for the people who use it, not for 1958. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Showerheads over tubs in this housing were roughed in at a height that suited an average adult of the 1950s, which is why plenty of people here duck to rinse their hair. That height is set once, before the surround closes, and it costs nothing to get right at that moment. We ask who actually uses the bathroom and set the head and the valve to them rather than to a standard nobody chose.',
    ],
    localFaqs: [
      {
        q: 'Can the showerhead over the tub be raised?',
        a: 'Yes, and it costs nothing if it is decided before the surround closes. We ask who uses the bathroom and set the rough-in height accordingly.',
      },
      {
        q: 'What if the household is different heights?',
        a: 'A fixed head set for the tallest plus a hand shower on a slide rail covers everyone — and the rail is useful for bathing children and cleaning the tub anyway.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Tub and shower combo in Mount Healthy? If the only bathroom is off the kitchen, there may be a better place. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'Older houses here often had their first bathroom carved out of a ground-floor service room, because that is where the plumbing already ran. It works, but it means a tub downstairs and a walk in the night. Where a suitable upstairs room exists and the stack can be reached, relocating is worth pricing alongside simply replacing what is there. We show you both rather than assuming the existing position is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can the bathroom move upstairs?',
        a: 'Sometimes, where a suitable room exists and the stack is reachable. It is a much bigger project than a tub replacement, so we price both and let you compare properly.',
      },
      {
        q: 'Is it worth keeping the downstairs bathroom?',
        a: 'Usually yes, even reduced to a half bath. Two bathrooms in a house this size is worth more than one better-placed one.',
      },
    ],
  },

  reading: {
    intro:
      'Tub and shower combo in Reading? If the tub gurgles when the washer drains, they share a line. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'In a lot of these houses the bathroom waste and the laundry discharge join the same run, and both release a large volume quickly. A washing machine dumping while a bath drains is what finds an undersized or partly blocked section — and a new tub will make that more obvious rather than less. Far better established before the installation than blamed on the new work afterwards.',
    ],
    localFaqs: [
      {
        q: 'Our drains gurgle when the washer runs — why?',
        a: 'They are almost certainly sharing a waste line that cannot take both discharge rates. A new tub makes it more obvious rather than less, so it is worth sorting first.',
      },
      {
        q: 'Can that be fixed as part of the job?',
        a: 'Often, by upsizing or re-venting the shared section while things are open. We quote it separately so you can see exactly what it is.',
      },
    ],
  },

  dent: {
    intro:
      'Tub and shower combo in Dent? Put the valve where you can reach it from outside the tub. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'A detail that separates a considered installation from a standard one: where the control sits. On a tub, the valve is traditionally at the tap end below the spout, which means leaning over the rim to start it and reaching through cold water when showering. Set higher and toward the entry side, it can be reached from outside the tub entirely — better for filling a bath, better for starting a shower, and considerably better for anyone bathing a child.',
    ],
    localFaqs: [
      {
        q: 'Where should the tub valve go?',
        a: 'Higher than the traditional position and toward the entry side, so it can be reached from outside the tub. Better for filling, better for starting a shower, and much better for bathing a child.',
      },
      {
        q: 'Can the valve be moved in an existing tub?',
        a: 'Only by opening the wall, which is why a replacement is the moment to fix it. During the job it is essentially free to relocate.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Tub and shower combo in Deer Park? For a walker or a wheelchair, a tub is the wrong fixture — honestly. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'There is a limit to what grab bars and a textured floor can do. Where someone genuinely cannot lift a leg over a fifteen-inch wall, the answer is not a better tub — it is a walk-in tub with a door, or a level-entry shower. We would rather say that at the site visit than fit a standard tub with every safety accessory bolted on and watch it fail the person it was for. Where the step is an inconvenience rather than a barrier, a lower-profile tub and a proper bar do the job well.',
    ],
    localFaqs: [
      {
        q: 'Can a standard tub be made accessible enough?',
        a: 'Up to a point. A lower-profile tub, a rated grab bar and a textured floor help a great deal where the step is an inconvenience. Where it is a genuine barrier, a walk-in tub or a level-entry shower is the honest answer.',
      },
      {
        q: 'How do we tell which situation we are in?',
        a: 'Whether the step can be managed safely on a bad day, not a good one. We will give you a straight view rather than selling you the fixture we happen to be quoting.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Tub and shower combo in Terrace Park? A warm floor beside a tub is the upgrade people rate most. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Of everything we install, electric underfloor heating is the item clients mention most a year later — and it matters more beside a tub than anywhere, because you step out of one wet and stay in the room. The mat goes down during a job the floor is already open for, so the cost is the mat, a thermostat and an afternoon. It also dries the floor faster, which quietly helps everything else in the room last.',
    ],
    localFaqs: [
      {
        q: 'Is underfloor heating worth it in a bathroom?',
        a: 'It is the upgrade people rate most highly afterwards, and it matters most beside a tub because you step out wet. Since the floor is open anyway, the added cost is modest.',
      },
      {
        q: 'Is it expensive to run?',
        a: 'For a bathroom-sized area on a timer, no. We set it up on a thermostat rather than leaving it running.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Tub and shower combo in Dry Run? Put a shutoff where you can reach it before the wall closes. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'In most houses here, stopping a leak in the bathroom means finding the main in the basement — in the dark, while water runs. Fitting accessible isolation valves for the bathroom while the wall is open is a small part that turns that into a ten-second job. Where a tub sits above a finished basement, we would go further and suggest a leak sensor at the waste, because that is the connection most likely to weep and the space below is what actually costs.',
    ],
    localFaqs: [
      {
        q: 'Can we get a shutoff just for the bathroom?',
        a: 'Yes, and fitting isolation valves while the wall is open is inexpensive. It turns a frantic trip to the basement into a ten-second job.',
      },
      {
        q: 'Are leak sensors worth fitting?',
        a: 'Where the tub sits over a finished basement, we think so. The tub itself is unlikely to fail; the waste connection behind the apron is the one that weeps.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Tub and shower combo in White Oak? A tub spout’s flow rate is not on the box. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Showerheads are sold on flow rate; tub spouts largely are not, and they vary more than people expect. A restricted spout on a deep tub is a genuinely slow fill, and it is the sort of thing nobody checks until they are waiting on it. We match the spout and the valve to the tub’s volume and to what the house can actually supply, rather than fitting whatever came in the box with the trim.',
    ],
    localFaqs: [
      {
        q: 'Does the tub spout affect fill time?',
        a: 'Considerably, and it is rarely specified on the box. We match the spout and valve to the tub volume and to what your supply can actually deliver.',
      },
      {
        q: 'Is a floor-mounted filler slower?',
        a: 'Not inherently, but it depends entirely on the pipe feeding it. It is worth checking before choosing one for its looks.',
      },
    ],
  },

  forestville: {
    intro:
      'Tub and shower combo in Forestville? A lower-profile tub takes inches off the step you climb daily. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Standard tub walls run around fifteen to sixteen inches, and lower-profile models come in several inches under that. It sounds trivial and it is not — it is the difference between stepping over and climbing over, repeated twice a day for twenty years. In a household planning to stay, choosing the lower unit costs nothing extra and is the single most useful decision available in a tub specification.',
    ],
    localFaqs: [
      {
        q: 'How much lower can a tub be?',
        a: 'Several inches under the standard fifteen or sixteen. It sounds minor and it is the difference between stepping over and climbing over, every day.',
      },
      {
        q: 'Does a lower tub hold less water?',
        a: 'Not necessarily — depth to the overflow is a separate dimension from the outside wall height. We check both rather than assuming they move together.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Tub and shower combo in Cherry Grove? The electrical side of a bathroom is where corners get cut quietly. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'A tub job usually touches the electrics — an extractor sized for the room, sometimes a light over the tub, sometimes underfloor heating — and all of it has to be on properly protected circuits with GFCI where required. In houses of this age the bathroom circuit is frequently older than the requirement, and quietly adding load to it is exactly the sort of shortcut nobody sees. We check what the circuit is and what it can take before adding to it.',
    ],
    localFaqs: [
      {
        q: 'Does a tub replacement involve electrical work?',
        a: 'Usually the extractor at minimum, sometimes lighting or underfloor heating. All of it needs appropriate protection, and the existing bathroom circuit is worth checking before load is added.',
      },
      {
        q: 'Will the bathroom need rewiring?',
        a: 'Rarely. Usually it is a matter of confirming the circuit and its protection, and anything that genuinely needs upgrading appears as a line on the quote.',
      },
    ],
  },

  kenwood: {
    intro:
      'Tub and shower combo in Kenwood? In a primary suite, a tub you never use is expensive floor space. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'The honest question in a large primary bathroom is whether the tub gets used. If it does, it deserves to be a good one — deep, comfortable, properly filled by a spout that does not take fifteen minutes. If it does not, it is occupying the best corner of the room for a few baths a year, and that space is worth more as a larger shower. We will ask the question directly rather than quoting whatever is already there.',
    ],
    localFaqs: [
      {
        q: 'Should we keep the tub in our primary suite?',
        a: 'Only if it gets used. If it does, it is worth doing properly — deep, comfortable, with a spout that fills it quickly. If it does not, the space is usually worth more as a larger shower.',
      },
      {
        q: 'Is there a resale argument for keeping one?',
        a: 'Where it is the only tub in the house, yes. Where there is another bathroom with a tub, converting the primary is a low-risk decision.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Tub and shower combo in Lincoln Heights? The village issues its own permits — and we quote to the house. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical things follow. It is its own municipality, so permits and inspections come through Lincoln Heights rather than the county or a neighbouring city, and we confirm that before scheduling. And the housing is modest, which means the top of our range rarely makes sense — a well-made tub bedded properly, a sound substrate and a solid valve is the right call, and we will say so rather than quoting upward.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits for work in Lincoln Heights?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm its requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'How much should we spend on a tub here?',
        a: 'Usually the middle of our range. The money that matters is the bedding, the substrate and the valve — and that costs the same whichever tub sits in front of it.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Tub and shower combo in Dillonvale? Where the tile cuts land is decided before the first tile goes on. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Two surrounds can use identical tile and look completely different, and the reason is setting out. Starting at a corner and working across leaves a sliver of a cut tile at the far end and a recess that lands mid-tile. Setting out from the tub’s centreline, or from the most visible edge, puts the awkward cuts where nobody looks and lets the niche land on full tiles. It costs nothing but half an hour of planning that most jobs skip.',
    ],
    localFaqs: [
      {
        q: 'Why do some tiled surrounds look better with the same tile?',
        a: 'Setting out — deciding where the cuts fall so the visible edges get full tiles and the recess lands cleanly. It is a planning step rather than a material one.',
      },
      {
        q: 'Can we see the layout before you start?',
        a: 'Yes. We mark the setting out and the recess position before any tile is fixed, so you can see where things land while it can still change.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Tub and shower combo in Woodlawn? Ask what goes behind the tile — the answer tells you a lot. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'A tub surround gets wet on the wall above it every day, and what is behind the tile decides whether that matters. A bonded membrane, a liquid-applied system or sealed foam board will all last decades. Ordinary drywall or greenboard behind tile — still common, still cheap — is not waterproofing; it is board that tolerates damp for a while. It is worth asking any contractor which of those you are being quoted, because it is invisible once it is finished.',
    ],
    localFaqs: [
      {
        q: 'What goes behind the tile above a tub?',
        a: 'A bonded membrane, a liquid-applied system or sealed foam board, depending on the job. What we do not do is rely on greenboard, which tolerates damp rather than excluding water.',
      },
      {
        q: 'Can we see it before it is tiled over?',
        a: 'Yes, and we would encourage it. It is the part of the job you are paying for and cannot inspect afterwards.',
      },
    ],
  },

  addyston: {
    intro:
      'Tub and shower combo in Addyston? If we open a wall and find rot, here is what happens to the price. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'In century-old houses on low ground, the honest question is what happens when something unexpected turns up behind a tub. Our price is fixed, and that holds because we open a wall on the site visit rather than quoting blind — most of what people call a surprise is simply something nobody looked for. Where genuine concealed damage exists that no inspection could have found, we show you the photograph, the cost and the options before touching it.',
    ],
    localFaqs: [
      {
        q: 'What if you find rot behind the tub?',
        a: 'We stop, photograph it, and show you the cost and options before doing anything. Most of what becomes a surprise elsewhere is found at our site visit, because we open a wall before quoting.',
      },
      {
        q: 'So the fixed price is not always fixed?',
        a: 'It holds for everything reasonably establishable beforehand, which is nearly all of it. Genuinely concealed structural damage is the exception, and we state that plainly rather than promising what no one can.',
      },
    ],
  },

  greenhills: {
    intro:
      'Tub and shower combo in Greenhills? The town was built to a plan, so we have done your bathroom before. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because Greenhills was designed and built as a single scheme, its original bathrooms are near-identical from one home to the next — compact, efficient and laid out to a standard. That is genuinely useful: we know what fits, where the stack runs and which tub sizes work in the room. The Landmark designation concerns the exterior, so the bathroom is open; what the 1930s construction affects is the fabric behind the tile.',
    ],
    localFaqs: [
      {
        q: 'Does the historic district restrict our bathroom?',
        a: 'No — the designation concerns what is visible from outside. Interior work is yours to decide. Anything touching a window or an elevation is a different conversation.',
      },
      {
        q: 'Will a standard tub fit these original bathrooms?',
        a: 'In most of the standard layouts here, yes — we have done the room before. Where the alcove is short, 54-inch tubs fit properly rather than being forced.',
      },
    ],
  },

  northbrook: {
    intro:
      'Tub and shower combo in Northbrook? Doing the vanity at the same time costs far less than later. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'A new tub and surround has a habit of making everything else in the room look tired, and the vanity is usually next. Doing both together is meaningfully cheaper than doing them a year apart — the floor is already protected, the crew is already there, the water is already isolated and the room is only disrupted once. We price the tub on its own and the tub with the vanity, so you can see the difference rather than discover it when you come back to it.',
    ],
    localFaqs: [
      {
        q: 'Should we do the vanity at the same time?',
        a: 'If you are likely to want it within a couple of years, yes — it costs considerably less alongside the tub than as a separate job. We quote both so you can compare.',
      },
      {
        q: 'Does that make it a full remodel?',
        a: 'Not necessarily. Tub, surround and vanity is still a focused job, well short of a down-to-the-studs remodel.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Tub and shower combo in Indian Hill? On a private well, the water decides what the tub will look like. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Where a house runs on a private well, water chemistry stops being an abstraction — and a tub shows it faster than anything else in the house, because it holds standing water against the surface. Iron leaves orange staining at the waterline within months, manganese leaves black, and neither is a cleaning problem. It is a treatment problem that no tub material solves. We establish it before specifying, because it changes what belongs in the room.',
    ],
    localFaqs: [
      {
        q: 'Our well water stains everything — will a new tub be the same?',
        a: 'Without treatment, yes. A tub holds standing water against its surface, so iron and manganese show at the waterline within months regardless of the material.',
      },
      {
        q: 'Does a tub add much load to a septic system?',
        a: 'It adds volume in surges rather than steadily, so the system’s capacity is worth confirming at design stage rather than assuming.',
      },
    ],
  },

  evendale: {
    intro:
      'Tub and shower combo in Evendale? The waste connection gets tested before the apron closes. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'The waste and overflow behind a tub apron is the one part of the job that cannot be inspected once the panel is on, so it gets tested before it is closed. The tub is filled to above the overflow, held, and the connections watched from below or through the access opening. If it holds, the apron goes on. If it does not, it is found now — when it costs twenty minutes rather than a ceiling. It is not universal practice and it is worth asking about.',
    ],
    localFaqs: [
      {
        q: 'How do you know the waste connection does not leak?',
        a: 'Because the tub is filled above the overflow and the connections are watched before the apron closes. If it holds, we finish. If not, it is found at the point it costs twenty minutes.',
      },
      {
        q: 'Does that add time to the job?',
        a: 'Very little, and it is built into the schedule rather than added to it.',
      },
    ],
  },

  glendale: {
    intro:
      'Tub and shower combo in Glendale? If you want it to look original, the parts have to be sourced. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Owners here often want a tub and shower that looks as though it could always have been there, and that is achievable — but it is a sourcing exercise rather than a selection from a standard range. An exposed thermostatic set with a riser, a period-profile filler, hexagonal floor tile and correctly proportioned subway all exist, and all have lead times. Knowing that early is what keeps the project on schedule rather than holding it up at the end.',
    ],
    localFaqs: [
      {
        q: 'Can a new tub and shower look period-appropriate?',
        a: 'Yes, with the right components — an exposed riser set, a period-profile filler and correctly proportioned tile. It is a sourcing exercise rather than a standard selection, so we start it early.',
      },
      {
        q: 'Do those parts take longer to get?',
        a: 'Often. We identify them at design stage and order first, so the lead time runs alongside everything else.',
      },
    ],
  },

  sharonville: {
    intro:
      'Tub and shower combo in Sharonville? Every choice made before we start is a change order that never happens. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'Most change orders in this trade are not surprises — they are decisions that were never actually made. Tub size, material and hand; surround type; valve, spout and trim finish; diverter arrangement; recess size and position; fan and light. All of it is settled and written down before demolition, and everything is on site before the first tool comes out. That is exactly what makes a fixed price and a short install possible.',
    ],
    localFaqs: [
      {
        q: 'What do we need to choose, and when?',
        a: 'Tub size, material and which end the waste is at; surround type; valve, spout and trim finish; recess size and position; fan and light — all before demolition. We walk you through it in one session.',
      },
      {
        q: 'What if we change our minds after signing?',
        a: 'Before materials are ordered, usually straightforward. After they arrive it costs real money — which is why we settle selections properly at the start.',
      },
    ],
  },

  northgate: {
    intro:
      'Tub and shower combo in Northgate? Sometimes the tub is the whole job — and sometimes it is not the right one. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'A tub replacement is a focused, affordable project and it is genuinely the right answer in most of these houses. But where the floor is failing, the vanity is going, the layout does not work and the ventilation was never adequate, doing it piecemeal costs more in total than doing the room once. We will tell you which situation you are in, including when the honest recommendation is the larger job we would otherwise be quoting a fraction of.',
    ],
    localFaqs: [
      {
        q: 'Should we do the tub or a full bathroom remodel?',
        a: 'If the tub is the problem and the rest of the room is sound, the tub. If the floor, vanity, layout and ventilation all need work, doing it once is cheaper than four visits.',
      },
      {
        q: 'Can we do the tub now and the rest later?',
        a: 'Yes, and sometimes that is right for budget reasons. We will just be clear about what staging it costs compared with doing it together.',
      },
    ],
  },

  springdale: {
    intro:
      'Tub and shower combo in Springdale? One bathroom, three generations — the tub has to suit all of them. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'Where a household spans grandparents, parents and children, one tub has to work for someone who needs a low step and something to hold, someone who wants a quick shower, and someone who needs bathing. That is not one specification — it is a lower-profile tub, a rated bar at the entry, a limit-stopped valve, a hand shower on a rail and a textured floor. All decided at design stage, none of it looking specialised afterwards.',
    ],
    localFaqs: [
      {
        q: 'Can one tub work for a multigenerational household?',
        a: 'Yes, with the right details — a lower-profile tub, a rated grab bar, a temperature limit stop, a hand shower on a rail and a textured floor. All decided before the wall closes.',
      },
      {
        q: 'What if the step is too much for someone?',
        a: 'Then we would look honestly at a walk-in tub instead. We would rather point you to the right product than fit a standard one with accessories bolted on.',
      },
    ],
  },

  miamitown: {
    intro:
      'Tub and shower combo in Miamitown? It is a long run out here, so we are straight about scheduling. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'This is one of the further corners of our area, and we schedule it deliberately rather than squeezing it between closer work — overbooking is how written start dates start slipping. The housing adds its own checks: the floor structure under an older bathroom wants looking at before a full tub sits on it, and on low river-bottom ground it is worth knowing what is under the joists as well as what is over them.',
    ],
    localFaqs: [
      {
        q: 'Do you come out as far as Miamitown?',
        a: 'Yes, and we schedule it deliberately because of the distance rather than promising a date we would have to move. Once it is in writing, it stands.',
      },
      {
        q: 'Does the low ground affect a tub installation?',
        a: 'It makes the floor structure worth checking before setting several hundred pounds of filled tub on it — particularly in an older house.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Tub and shower combo in Forest Park? Most of our installs happen while people are at work. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Nobody wants to take a day of leave to watch a tub go in. In most of these houses we work while the household is out: an agreed arrival time, a key or lockbox arrangement, a named project manager on site rather than a rotating crew, and the house locked and the protection removed before we leave. You get a photograph of the finished work the same day. It is a small thing that decides whether a one-day job actually costs you a day.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home for the install?',
        a: 'Not usually. We arrange access, work to an agreed arrival time and lock up before leaving, with a named project manager on site throughout.',
      },
      {
        q: 'Who is actually in our house?',
        a: 'Our own installers — we do not subcontract. That is the same reason we can back the work with a lifetime workmanship warranty.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Tub and shower combo in Pleasant Run? If the dog gets washed in it, say so before we order. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'A tub that doubles as where the dog gets washed has a different brief. A lower wall matters more, because lifting a wet dog over a sixteen-inch rim is a genuine job. A hand shower on a long hose is essential rather than optional. And the waste wants a strainer that actually catches coat and can be lifted out and cleared, because dog hair blocks a tub trap faster than anything human. None of it costs much and all of it is decided before ordering.',
    ],
    localFaqs: [
      {
        q: 'Can a tub work for washing dogs?',
        a: 'Yes, with a lower wall height, a long hand-shower hose and a strainer that genuinely catches coat and lifts out. Tell us at design stage — the wall height cannot be changed later.',
      },
      {
        q: 'Will the drain block up?',
        a: 'Far less with the right strainer and an accessible trap. We specify one that can be cleared without tools rather than a flush grille that looks neat and traps everything.',
      },
    ],
  },

  cleves: {
    intro:
      'Tub and shower combo in Cleves? If the house has flooded, what is in the wall comes first. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'In a house that has been flooded, the wall behind a tub surround can look sound and still hold saturated insulation and mould. Building a new waterproof assembly straight over that seals the problem in rather than solving it. So the sequence here is: open it, assess it, remediate, let it dry, and only then start the new work. It is the reason mould and mildew remediation is part of what we do rather than something we discover and hand back to you.',
    ],
    localFaqs: [
      {
        q: 'Our house flooded — can you still fit a new tub?',
        a: 'Yes, but the wall cavity gets opened and assessed first. Building over saturated insulation or mould seals the problem in instead of fixing it.',
      },
      {
        q: 'Is remediation extra?',
        a: 'Mould and mildew remediation is part of a proper installation. Where flood damage goes beyond the bathroom, that is a bigger conversation and we will be straight about it.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Tub and shower combo in North Bend? A century-old house has settled — a tub needs a level floor. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Houses of this age have moved, and a bathroom floor that looks fine can be out by half an inch across its width. A tub set on that rocks, stresses its waste connection and drains toward the wrong corner. The substrate gets checked with a level and, where needed, brought true with a self-levelling compound before the tub goes in. It is an unglamorous step that adds a few hours and prevents the most common cause of an early failure.',
    ],
    localFaqs: [
      {
        q: 'Does the floor need levelling first?',
        a: 'In a house this old, frequently. A tub set on an uneven floor rocks, stresses the waste connection and drains toward the wrong end. We check with a level before fitting anything.',
      },
      {
        q: 'Does that add much cost?',
        a: 'A modest amount — compound and a few hours. Far cheaper than the installation failing in three years.',
      },
    ],
  },

  loveland: {
    intro:
      'Tub and shower combo in Loveland? If the bike trail ends at your back door, spec the tub for grit. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'A household that comes home muddy from the trail asks more of a tub than one that does not. A hand shower on a long hose to rinse legs and kit, a hard-wearing surface rather than a soft coating, a strainer that clears grit without tools, and a floor beside the tub that is not lethal when wet. The house may be historic; the bathroom can still be built for how you actually use it.',
    ],
    localFaqs: [
      {
        q: 'What makes a tub better for rinsing off outdoor gear?',
        a: 'A long hand-shower hose, a hard-wearing surface, and a strainer you can clear of grit without tools. Grit is what scratches a finish and blocks a trap, and it is easy to design around.',
      },
      {
        q: 'Does the riverside location affect the work?',
        a: 'On the low ground near the Little Miami it is worth checking the floor structure before setting a heavy tub. We look at what is underneath on the site visit.',
      },
    ],
  },

  harrison: {
    intro:
      'Tub and shower combo in Harrison? On the state line, the first question is which side you are on. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'Sitting on a state boundary makes jurisdiction the first practical question rather than an afterthought. Whether permitting and inspection run under Ohio or Indiana rules depends on which side of the line the property sits, and the two are not the same process. We confirm it before a start date is agreed rather than discovering it partway through a job.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the state line we are on?',
        a: 'For permitting and inspection, yes — Ohio and Indiana run different processes. We confirm which applies before scheduling.',
      },
      {
        q: 'Do you work on the Indiana side?',
        a: 'Yes. It is a different jurisdiction rather than a different job, and we handle the filing either way.',
      },
    ],
  },

  ludlow: {
    intro:
      'Tub and shower combo in Ludlow? There may be an original tiled floor under your vinyl. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'A surprising number of bathrooms here still have their original hexagonal or mosaic floor hidden under later coverings, and where it survives intact it is worth more than anything we would put down in its place. Fitting a new tub while retaining it is possible — the tub is set to the existing floor, the apron detailed to meet it, and the join made deliberate rather than apologetic. We lift a corner on the site visit before assuming the floor comes up.',
    ],
    localFaqs: [
      {
        q: 'Could there be an original floor under our vinyl?',
        a: 'In houses of this era here, often — hexagonal or mosaic tile laid over and forgotten. We lift a corner on the site visit before assuming the whole floor comes out.',
      },
      {
        q: 'Can a new tub work with an original floor?',
        a: 'Yes, with the tub set to the existing level and the apron detailed to meet it. It takes more care than replacing everything, and it is usually worth it.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Tub and shower combo in Park Hills? Filling a tub several floors from the heater takes patience. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Houses built into this hillside are tall rather than wide, and the bathroom is often several floors from a water heater in the lowest level. Every foot of that run holds cooling water that has to be drawn off before hot arrives — which on a tub means minutes and gallons wasted before the bath even starts. A recirculation loop fitted while the walls are open fixes it properly and costs a fraction of what it would as a standalone retrofit.',
    ],
    localFaqs: [
      {
        q: 'Why does hot water take so long to reach our tub?',
        a: 'Distance from the heater, which in a tall hillside house is considerable. A recirculation loop solves it, and fitting one while the walls are open is far cheaper than doing it later.',
      },
      {
        q: 'Is that expensive to add?',
        a: 'Modest during a tub replacement, because the access already exists. As a standalone job afterwards it costs several times as much.',
      },
    ],
  },

  bromley: {
    intro:
      'Tub and shower combo in Bromley? On ground this low, think twice about a tub downstairs. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'A lower-level bathroom here needs a sealed ejector to lift waste to the sewer, and a tub sends a large volume at once — which is exactly what a marginal pump arrangement struggles with. Add waterproofing specified for sustained moisture and an honest view of what happens when the river is high, and it is real money for a room that may not stay dry. In most of these houses the same budget does more on the main floor, and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Should we put a tub in the basement?',
        a: 'On ground this low, usually not — and we would rather say so before you spend. A tub sends a large volume at once, which is what a marginal ejector arrangement struggles with.',
      },
      {
        q: 'What if we genuinely need a second bathroom downstairs?',
        a: 'Then it is built for the conditions: a properly sized sealed ejector, waterproofing specified for sustained moisture, and a frank conversation about high water first.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Tub and shower combo in Fort Wright? Up on the hilltop, a lower-level tub is usually straightforward. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation here removes the water-table questions that dominate work in the river villages below, so adding a bathroom with a tub to a lower level is generally conventional rather than specialised. What still needs checking is the drain elevation: houses stepped into a grade can put a lower floor closer to the sewer line than expected, and that decides whether a tub drains by gravity or needs a pump sized for its volume. We measure it on the first visit.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level tub easier up here than by the river?',
        a: 'Generally yes — the elevation avoids the high water table that shapes work in Bromley or Ludlow. We still measure the drain elevation, because a stepped house can sit closer to the sewer than expected.',
      },
      {
        q: 'Will it need a pump?',
        a: 'Often not on the hilltop. Where the measurement says otherwise, an ejector sized for a tub’s discharge is straightforward and priced clearly.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Tub and shower combo in Fort Mitchell? Choose a trim finish you will still like in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Fixture finishes move in cycles, and a tub filler and valve are not things you redo when the fashion turns. Polished chrome and a good brushed nickel have looked right for decades and will keep doing so. Matt black and unlacquered brass are genuinely handsome and are having a moment — fine if you love them, worth thinking about if you are choosing them because everything else does. We will also tell you which show water spots, because a tub filler sits in splash range all day.',
    ],
    localFaqs: [
      {
        q: 'Which finish dates fastest?',
        a: 'Whatever is most fashionable at the time. Chrome and brushed nickel have stayed right for decades; matt black and unlacquered brass are excellent if you genuinely love them rather than following them.',
      },
      {
        q: 'Do some finishes show water marks more?',
        a: 'Yes — polished chrome and matt black both show spotting readily, brushed finishes hide it best. On a tub filler that matters, because it is in splash range constantly.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Tub and shower combo in Villa Hills? We take the old tub out rather than lining over it. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There is a whole industry built on dropping an acrylic liner into an existing tub in a day. It is fast and cheap, and it leaves whatever was failing underneath exactly where it was — including water that finds its way between the two shells and has nowhere to go. We take the old tub out, look at the substrate, the floor and the waste, and build back from something sound. That takes longer and costs more, and it is a different product.',
    ],
    localFaqs: [
      {
        q: 'Why not fit a liner over the old tub?',
        a: 'Because it encloses the old surface rather than replacing it. Water that gets between the two has nowhere to dry, and anything already wrong behind the surround stays there sealed in.',
      },
      {
        q: 'Does that mean a much longer job?',
        a: 'A same-footprint replacement is still short. What you get is everything behind the surface new and inspected rather than covered over.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Tub and shower combo in Lakeside Park? A properly fitted tub should outlast two kitchens. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'A tub installed correctly — bedded solid, a sound substrate behind the surround, a new waste assembly and a quality valve — should give you twenty to thirty years without drama. What shortens that is almost never the tub. It is a surround fixed to board that was never meant to get wet, a waste gasket reused from the old installation, or a valve whose parts stopped being made. Since those are the invisible items, they are what a low quote is usually saving money on.',
    ],
    localFaqs: [
      {
        q: 'How long should a new tub last?',
        a: 'Two to three decades where the bedding, substrate, waste assembly and valve are right. What ends an installation early is almost always one of those rather than the tub.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Very little — keep the grout sealed if it is cement-based, run the fan long enough after a bath or shower, and check the silicone joint once a year. That is genuinely most of it.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Tub and shower combo in Crescent Springs? Ask what a fixed price covers — ours is itemised. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'A single headline number tells you nothing about what is in it. Ours breaks out demolition and disposal, substrate and waterproofing, the tub, bedding, the waste and overflow assembly, plumbing and valve, the surround, ventilation and any electrical work, with labour against each. That itemisation is what lets you compare two quotes honestly and see where a cheaper one is actually cheaper — usually the substrate, the valve, or the old tub’s removal being left to you.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'Demolition and disposal, substrate and waterproofing, the tub and its bedding, a new waste and overflow assembly, plumbing and valve, the surround, ventilation and any electrical work — itemised.',
      },
      {
        q: 'How do we compare two quotes fairly?',
        a: 'Line by line rather than on the total. Ask specifically about the substrate behind the surround, the valve brand, whether the waste assembly is new, and whether removal is included.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Tub and shower combo in Crestview Hills? A guest bathroom does not need your specification. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'It is worth being deliberate about where money goes between bathrooms. A tub used twice a month by visitors does not need the depth, the valve or the surround of the one your household uses daily — and spending equally usually means underspending on the one that matters. What should not vary is the substrate behind the surround and the waste assembly, because a leak in a guest bathroom does exactly as much damage as one anywhere else.',
    ],
    localFaqs: [
      {
        q: 'Should the guest bathroom match the main one?',
        a: 'Not necessarily. Save on tub depth, valve and surround finish in a room used twice a month, and put that into the bathroom you use daily. The substrate and waste assembly should be identical.',
      },
      {
        q: 'Does a simpler specification mean a shorter life?',
        a: 'Not if the savings come from finishes rather than what is behind them. A plain tub installed properly lasts as long as an expensive one.',
      },
    ],
  },

  edgewood: {
    intro:
      'Tub and shower combo in Edgewood? Sometimes the bathroom is needed before a discharge date. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'A good number of the calls we take here are prompted by something specific: a surgery scheduled, a parent coming home, a household that suddenly needs a bathroom someone can use safely and soon. That changes what matters — a hard date, a lower step, a rated bar where it will actually be gripped, a hand shower reachable from seated. Tell us the deadline at the first conversation and we will tell you honestly whether we can meet it, including when the answer is no.',
    ],
    localFaqs: [
      {
        q: 'Can you work to a hospital discharge date?',
        a: 'Often, if we know at the first conversation. A same-position tub swap is quick and materials are staged in advance — but we will tell you straight when a date is not achievable rather than promising it.',
      },
      {
        q: 'What makes a tub safer for someone recovering?',
        a: 'A lower wall height, a rated grab bar at the entry, a textured floor, and a hand shower reachable from seated. Where the step itself is the barrier, a walk-in tub is the honest answer instead.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Tub and shower combo in Taylor Mill? Winter or summer makes very little difference. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'People often wait for spring, and for a tub replacement there is no real reason to. The work is entirely interior, the water is off for part of a day rather than days, and nothing about bedding a tub or tiling a surround cares what the weather is doing. If anything the quieter months mean better availability and firmer dates. The only genuine seasonal factor is leaving the heating on so the room stays above freezing overnight while adhesives and grout cure.',
    ],
    localFaqs: [
      {
        q: 'Should we wait until spring?',
        a: 'No need. The work is interior and unaffected by weather, and availability is usually better in the quieter months. Just leave the heating on so the room stays warm while things cure.',
      },
      {
        q: 'Is the house cold while you work?',
        a: 'Not meaningfully — the work is contained to one room behind a dust barrier, and it is the water rather than the heating that goes off for part of the day.',
      },
    ],
  },

  elsmere: {
    intro:
      'Tub and shower combo in Elsmere? Here is exactly when money changes hands. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Worth stating plainly, because it is what people are too polite to ask. A deposit is taken at signing to order and stage materials — that is what makes a fixed price and a short install window possible. The balance falls due on completion, after the final walkthrough, not before. We do not ask for the full amount up front and we do not add anything at the end that was not in the signed itemisation.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing, which orders and stages the materials, and the balance on completion after the final walkthrough. Nothing is added at the end that was not in the signed itemisation.',
      },
      {
        q: 'Why is a deposit needed at all?',
        a: 'Because everything is ordered and on site before demolition starts — which is precisely what makes a fixed price and a short install possible.',
      },
    ],
  },

  independence: {
    intro:
      'Tub and shower combo in Independence? A lifetime workmanship warranty — here is what it covers. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'A warranty is only as clear as its boundaries, so: our lifetime workmanship warranty covers how the installation was built — the bedding, the substrate, the surround, the waste connection and the plumbing joints we made. The tub, valve and trim carry their own manufacturer warranties, which we register and help you claim on. What it does not cover is damage from something else in the house, or from a later alteration by someone other than us.',
    ],
    localFaqs: [
      {
        q: 'What does the workmanship warranty cover?',
        a: 'How the installation was built — bedding, substrate, surround, waste connection and the joints we made. The tub, valve and trim carry manufacturer warranties, which we register for you.',
      },
      {
        q: 'What is not covered?',
        a: 'Damage caused by something else in the house, or by later alterations made by someone else. We would rather be clear at the start than argue about it later.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Tub and shower combo in Dayton? A modern valve body needs more wall depth than these studs give. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'A detail that catches people out in houses this old: modern thermostatic and pressure-balancing valve bodies are deeper than what they replace, and the shallow stud walls in a late-1800s house sometimes cannot take them without furring the wall out an inch or two. That is manageable, but it changes the finished wall line — which matters where original trim meets it. We check the wall depth against the chosen valve before the order goes in rather than after.',
    ],
    localFaqs: [
      {
        q: 'Will a modern valve fit our old walls?',
        a: 'Usually, but not always without furring the wall out slightly, because modern valve bodies are deeper. We measure the wall against the specific valve before ordering.',
      },
      {
        q: 'Does furring affect the original trim?',
        a: 'It can change where the finished surface meets existing casing, which is why we raise it early. There are usually valve options that avoid it, and we show you those first.',
      },
    ],
  },

  southgate: {
    intro:
      'Tub and shower combo in Southgate? Walk-in or keep the tub — here is how to actually decide. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'The decision comes down to four questions rather than taste. Is this the only bathroom in the house? Does anyone in the household bathe rather than shower, now or soon? Are there young children? And are you likely to sell within five years? Two or more yes answers and a tub with a shower over it is the right call here. All no, and a walk-in shower is straightforwardly the better room. We would rather work through that than assume you want what we are selling.',
    ],
    localFaqs: [
      {
        q: 'How do we decide between a tub and a walk-in shower?',
        a: 'Whether it is the only bathroom, whether anyone bathes, whether there are young children, and whether you may sell soon. Two or more yes answers points to keeping a tub.',
      },
      {
        q: 'Can we have both in one bathroom?',
        a: 'Only where the room is genuinely large enough, which most mid-century bathrooms here are not. We measure rather than guess.',
      },
    ],
  },

  wilder: {
    intro:
      'Tub and shower combo in Wilder? If you sell the house, the warranty question is worth knowing now. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'People improving a house they may not stay in forever ask a sensible question: does any of this follow the property? Our workmanship warranty is tied to the installation rather than to you personally, and we provide the documentation for a sale — worth keeping in a file with the itemised specification and the manufacturer registrations. A buyer being able to see exactly what was installed and by whom is a small but real part of what the work is worth.',
    ],
    localFaqs: [
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'It is tied to the installation rather than to you personally, and we provide documentation for a sale. Keep it with the itemised specification and manufacturer registrations.',
      },
      {
        q: 'Do you work on the residential side here?',
        a: 'Yes — residential remodeling is all we do. Wilder is better known for its commercial base, but the neighborhoods here are ordinary housing.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Tub and shower combo in Highland Heights? In a shared student house, the fan has to run on its own. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'A bathroom used by four or five people in sequence never gets a chance to dry out, and nobody in a shared house runs the fan for twenty minutes after their own shower. The answer is to take it out of their hands: a humidistat-controlled extractor that starts when moisture rises and runs until it drops, or a timer overrun on the light. It costs very little and it is the difference between a surround that stays sound and a bathroom repainted every year.',
    ],
    localFaqs: [
      {
        q: 'How do you stop a shared bathroom staying damp?',
        a: 'A humidistat-controlled extractor that runs on moisture rather than on someone remembering, or a timer overrun on the light. In a house with several tenants it is the most useful thing you can fit.',
      },
      {
        q: 'What else survives heavy shared use?',
        a: 'A porcelain-on-steel or reinforced acrylic tub, a solid valve body, a well-sealed surround and a curtain rather than sliding doors — tracks are what tenants complain about.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Tub and shower combo in Cold Spring? Just bought the house? Do it before you move in. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'An empty house is the best possible condition to work in, and a growing area means plenty of people here have just closed on one. No furniture to protect, no household to work around, no water shut-off to schedule around anyone, and no living with the dust. If there is a gap between closing and moving, it is worth asking us to look at the bathroom during it — the same job is simpler, quicker and less disruptive than it will ever be again.',
    ],
    localFaqs: [
      {
        q: 'Should we do the bathroom before moving in?',
        a: 'If there is a gap between closing and moving, yes. An empty house means no protection, no scheduling around a household and no living through it.',
      },
      {
        q: 'How quickly can you get to us after closing?',
        a: 'It depends on the season and on whether anything is on order. Tell us the dates early and we will be honest about what fits rather than promising to hit a moving day we might miss.',
      },
    ],
  },

  alexandria: {
    intro:
      'Tub and shower combo in Alexandria? On a well, filling a tub is a different demand than a shower. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'Where a house runs on a private well, filling a tub draws sustained volume rather than the intermittent demand a shower makes — which is exactly what exposes an undersized pressure tank or a pump cycling too frequently. It is worth checking those settings before choosing a deep tub, because no fixture compensates for a supply that cannot keep up. On the semi-rural properties here it is the first thing we look at.',
    ],
    localFaqs: [
      {
        q: 'Will our well fill a deep tub?',
        a: 'It depends on the pump and pressure tank rather than the tub. Sustained volume is a different demand from a shower, and it is worth checking those settings before choosing a deep model.',
      },
      {
        q: 'Does a tub add much load to a septic system?',
        a: 'It adds volume in surges, so the system’s capacity is worth confirming at design stage — particularly on the semi-rural properties around the town.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Tub and shower combo in Melbourne? The same installers from first cut to final seal. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'In a village this small you will hear about it if a contractor turns up with a different face every morning. We do not subcontract: the installers who take the old tub out are the ones who bed the new one, fit the surround and seal the joints, with one project manager over the job. It matters more than it sounds, because the person who made the waste connection is the person who answers for it — which is also why the workmanship warranty can be what it is.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes. We use our own installers rather than subcontractors, with one project manager over the work, so whoever makes the waste connection is accountable for it.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we are honest about scheduling rather than promising a date we would have to move.',
      },
    ],
  },

  hebron: {
    intro:
      'Tub and shower combo in Hebron? Your basement may already be roughed in for a bathroom. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Builders in this housing frequently roughed in a lower-level bathroom and then capped it — a drain stub, a vent and sometimes supply lines sitting under the slab, waiting. Homeowners often have no idea it is there. If it is, adding a second full bathroom with a tub downstairs is dramatically cheaper than starting from nothing, because the expensive part is already done. It takes minutes to establish on a site visit and it is the first thing we look for here.',
    ],
    localFaqs: [
      {
        q: 'How do we know if the basement is roughed in?',
        a: 'Look for capped pipe stubs in the slab, often in a corner or under a stair. If they are there, the cost of a lower-level bathroom drops considerably.',
      },
      {
        q: 'What if there is no rough-in?',
        a: 'Then it means cutting and trenching the slab, which is real work with a real cost — particularly for a tub, which needs a trap and a vent rather than just a drain.',
      },
    ],
  },

  burlington: {
    intro:
      'Tub and shower combo in Burlington? A tub still has to leave legal clearance at the toilet. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'People sketch a longer or wider tub and forget that the rest of the room has minimums. There is a required clear width around a toilet and a required clearance in front of it, and a door cannot swing into a fixture. Push a tub out by six inches and one of those can quietly fail — which an inspector will pick up even if you would not have. We draw the whole room to the clearances rather than the tub in isolation, so what we quote is what will actually pass.',
    ],
    localFaqs: [
      {
        q: 'How big can the tub be?',
        a: 'Until the rest of the room stops meeting its clearances — the clear space around and in front of the toilet, and the door swing. We draw the whole room rather than just the tub.',
      },
      {
        q: 'Would an inspector really pick that up?',
        a: 'On a permitted job, yes. It is one of the more common reasons work fails inspection, and it is entirely avoidable at design stage.',
      },
    ],
  },

  union: {
    intro:
      'Tub and shower combo in Union? The hall bath tub is the one that actually gets used. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'In this housing the primary suite usually has a garden tub nobody touches, while the hall bath has a builder-grade tub that the whole household actually uses — and it is the second one that is worn out. Spending on the bathroom people use rather than the one that photographs well is the sensible order here, and it is frequently the opposite of what gets quoted. We will say so even though the primary suite is the bigger contract.',
    ],
    localFaqs: [
      {
        q: 'Which bathroom should we do first?',
        a: 'Usually the hall bath, because in this housing it is the one that actually gets used while the primary garden tub sits idle. We will say so even though the primary suite is the bigger job.',
      },
      {
        q: 'What is wrong with builder-grade tubs?',
        a: 'Usually nothing structural — they are thin, they flex because they were never bedded, and the surround is basic. Replacing one properly is a noticeable upgrade for a modest sum.',
      },
    ],
  },

  walton: {
    intro:
      'Tub and shower combo in Walton? On softened water a bath feels different — that is normal. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'A lot of the rural and semi-rural properties out here run a water softener, and it changes a bath more than a shower. Soap lathers readily and rinses slowly, so the water feels slippery and a bath leaves less residue on the tub — which people occasionally mistake for something being wrong with a brand-new installation. The upside is real: no scale line at the waterline and grout that stays clean far longer.',
    ],
    localFaqs: [
      {
        q: 'Why does the water feel slippery in the bath?',
        a: 'If the house is on a softener, that is the softened water rather than a fault — soap rinses more slowly. The trade is no scale at the waterline, which most people prefer once they know what it is.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, it is the southern edge of our area. We schedule it deliberately because of the distance rather than promising a date we would struggle to hold.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Tub and shower combo in Mount Carmel? An interior bathroom has to vent through the roof. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'A lot of the ranch plans here put the bathroom in the middle of the house with no exterior wall, and the shortcut in that situation is to duct the extractor into the loft space and stop. That does not remove moisture from the house — it relocates it into the roof structure where it condenses on the underside of the deck. A proper roof or soffit termination is the only real answer, and where the existing fan discharges into the loft we will tell you.',
    ],
    localFaqs: [
      {
        q: 'Where does the extractor vent if there is no outside wall?',
        a: 'Through the roof or to a soffit termination. Ducting into the loft does not remove the moisture from the house — it condenses in the roof structure instead.',
      },
      {
        q: 'How do we know where ours goes?',
        a: 'We check it on the site visit. Finding a fan discharging into the loft is common enough that we look for it as a matter of course.',
      },
    ],
  },

  summerside: {
    intro:
      'Tub and shower combo in Summerside? Above a tub, big tiles usually beat small ones. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Instinct says small tiles suit a small bathroom, and above a tub it is generally backwards. A grid of small tiles in a compact surround reads as busy and full of joints — and every joint is somewhere grout can stain. Large-format tile gives fewer lines, less maintenance and a calmer, larger-feeling room. The exception is any area that has to follow a curve or a slope, where a smaller format is genuinely easier to lay well.',
    ],
    localFaqs: [
      {
        q: 'Do small tiles suit a small bathroom?',
        a: 'Above a tub, usually the opposite. Large-format tile means fewer joints, less grout to keep clean and a calmer, larger-feeling space.',
      },
      {
        q: 'Does large tile work on uneven walls?',
        a: 'Less well — it needs a flat plane. Where a wall is out we either bring it true first or use a smaller format, and we will tell you which before you choose.',
      },
    ],
  },

  withamsville: {
    intro:
      'Tub and shower combo in Withamsville? Keeping the floor? Look at where it meets the tub. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Keeping an existing bathroom floor while replacing the tub is entirely reasonable and it saves real money — but the junction where the old floor meets the new tub apron is where it either looks deliberate or looks patched. It has to be planned: the tub set to land on a sound line, the apron detailed properly, and a realistic view of whether the old floor tile can be cut into without damaging it. Sometimes the honest answer is that the floor should go too.',
    ],
    localFaqs: [
      {
        q: 'Can we keep the existing floor?',
        a: 'Often, and it saves money. What matters is the junction where the tub apron meets it — that has to be planned rather than improvised, and old tile does not always cut cleanly.',
      },
      {
        q: 'When should the floor be replaced too?',
        a: 'When it is failing, when the junction cannot be made to look deliberate, or when the level has to change. We will give you a straight view rather than defaulting to the bigger job.',
      },
    ],
  },

  milford: {
    intro:
      'Tub and shower combo in Milford? Where new tile meets old plaster is what gives a job away. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'In a 19th-century house the surround is a new, flat, waterproofed plane meeting old plaster that is neither flat nor square. That junction is where inexperienced work shows: a bead of silicone bridging a visible gap, or a tile edge running out of line against a wall that wanders. Done properly the transition is planned — the substrate packed out to meet the plaster, a deliberate trim or reveal where the two meet, and the tile set to the eye rather than to a level the room does not share.',
    ],
    localFaqs: [
      {
        q: 'How do you handle the join between new tile and old plaster?',
        a: 'By planning it rather than caulking it. The substrate is packed out, the transition gets a deliberate trim or reveal, and the tile is set to look right in a room that is not square.',
      },
      {
        q: 'Will the old plaster survive the work?',
        a: 'Largely, with care. Some making-good at the edges is normal in a house this age, and we allow for it in the quote rather than raising it afterwards.',
      },
    ],
  },

  mulberry: {
    intro:
      'Tub and shower combo in Mulberry? On a fixed budget, one thing done properly beats three done cheaply. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'When the budget will not cover everything the room needs, the temptation is to spread it thin — a bit of tile, a new vanity, the cheapest tub. That usually produces a room where nothing is finished properly and the tub installation fails first. Our advice here is nearly always to do the tub and surround fully, to the standard they should be, and leave the vanity and floor for next year. A half-built tub surround is the one item in a bathroom that costs you twice.',
    ],
    localFaqs: [
      {
        q: 'We cannot afford the whole room — what first?',
        a: 'The tub and surround, done properly. Substrate, bedding, waste and valve are the items that cost you twice if compromised, whereas a dated vanity simply looks dated until you replace it.',
      },
      {
        q: 'Is it more expensive to do it in stages?',
        a: 'Somewhat, because of repeat mobilisation. But it is far cheaper than a surround that has to be rebuilt, and we would rather you spread the work than the standard.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Tub and shower combo in Mount Repose? Specify a valve whose parts still exist in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'The valve is buried in the wall, so it is the one component you cannot change your mind about. What matters is not just how it performs on day one but whether its cartridge will still be available a decade later — which is why we fit valves from manufacturers with long production runs and genuine parts support rather than whatever is cheapest at the counter. In a settled area where people stay in their houses, that is worth more than a fashionable trim.',
    ],
    localFaqs: [
      {
        q: 'Does the valve brand matter?',
        a: 'More than the trim does. The body is in the wall permanently, so what counts is whether cartridges will still be available in ten or fifteen years.',
      },
      {
        q: 'Can we choose the trim separately?',
        a: 'Yes, and that is the sensible way round — a solid valve body in the wall, with the visible trim chosen to taste and changeable later.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Tub and shower combo in Day Heights? On septic, where a new waste run goes matters. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Adding or moving a tub waste on a property with a septic system is not only a question of capacity — a tub discharges a large volume at once, and the new run has to reach the existing line without disturbing the tank or the drain field. On larger semi-rural lots people often do not know precisely where those sit. Establishing it before anything is dug or cut is straightforward and it avoids the genuinely expensive mistake, which is finding the field with a trench.',
    ],
    localFaqs: [
      {
        q: 'Does a new waste run affect our septic system?',
        a: 'It can, if it is routed near the tank or the drain field. We establish where those are before any cutting or trenching rather than after.',
      },
      {
        q: 'Does a tub strain a septic system?',
        a: 'It sends volume in surges rather than steadily, so capacity is worth confirming at design stage rather than assuming.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Tub and shower combo in New Richmond? In a tall 19th-century room, tile height is a proportion decision. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'These rooms have height that modern bathrooms do not, and running a tub surround the full nine or ten feet to the ceiling can read as clinical rather than generous. A considered horizontal line — tile to a height that relates to the door head or a picture rail, with a proper moisture-resistant finish above — usually sits far better in a room of this period. It is a proportion judgement rather than a technical one, and worth making deliberately.',
    ],
    localFaqs: [
      {
        q: 'Should the surround run to the ceiling in a tall old room?',
        a: 'Not always. In a nine or ten foot room, stopping at a line that relates to the door head often looks far better, with a moisture-resistant finish above.',
      },
      {
        q: 'Is a lower tile line a moisture problem?',
        a: 'Not where the wet zone above the tub is tiled to full shower height and the wall above is properly finished. The area at risk is the shower zone, not the far side of the room.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Tub and shower combo in Amelia? A slow-filling tub is usually the spout, not the tub. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'People replacing a tub because it fills slowly are often replacing the wrong thing. Fill rate is set by the spout, the valve and the supply pipe behind them — none of which is the tub. A restricted spout on a corroded half-inch line delivers a trickle no matter what it is pouring into. We measure the flow at the existing tap before quoting so you know whether you are buying a tub or a plumbing fix, or both.',
    ],
    localFaqs: [
      {
        q: 'Will a new tub fill faster?',
        a: 'Only if the spout, valve and supply are dealt with too. Fill rate is set by what feeds the tub, not by the tub — which is why we measure the flow before quoting.',
      },
      {
        q: 'Can that be fixed at the same time?',
        a: 'Yes, and while the wall is open it is inexpensive. It is one of the more satisfying improvements because you notice it every time.',
      },
    ],
  },

  batavia: {
    intro:
      'Tub and shower combo in Batavia? Grab bars no longer look like hospital fittings. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The reason people refuse a bar beside the tub is that they picture institutional stainless tube. That is not what is available now. A properly rated bar can match your valve trim, or be a corner shelf that takes weight, or a towel rail engineered to be gripped — none of which announces itself. Since the blocking has to go in before the surround closes either way, the sensible move is to prepare for one and choose the visible product whenever you want it.',
    ],
    localFaqs: [
      {
        q: 'Do grab bars have to look clinical?',
        a: 'Not any more. Rated bars come in the same finishes as valve trim, and some double as shelves or towel rails. The requirement is that they are rated and properly anchored.',
      },
      {
        q: 'Can a normal towel rail take weight?',
        a: 'No — an ordinary rail will pull out, usually at the worst moment. If you want something that doubles as a grab bar it has to be a rated product anchored into blocking.',
      },
    ],
  },

  owensville: {
    intro:
      'Tub and shower combo in Owensville? A few minutes of preparation makes the site visit worth more. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we come a distance to reach the eastern villages, it is worth making the visit count. Clearing access to the bathroom and to whatever is below it lets us check the waste run and the floor structure the same day. Knowing where your main shutoff is helps, as does a rough build date. And if the property is on a well or septic, saying so in advance means we arrive knowing what to look at rather than needing a second trip.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the site visit?',
        a: 'Access to the bathroom and to whatever is below it, the main shutoff location, a rough build date, and whether you are on well or septic. That is usually enough for a fixed price the same day.',
      },
      {
        q: 'Will you need to open a wall?',
        a: 'A small area, with your agreement. It is the only honest way to price a fixed-cost job rather than padding it with contingency.',
      },
    ],
  },

  goshen: {
    intro:
      'Tub and shower combo in Goshen? On a rural property, a utility-room tub earns its keep. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'On a working rural property the most useful tub in the house is sometimes not in a bathroom at all. A deep, robust tub in a utility or mudroom — near where boots, animals and mud come in — keeps all of that out of the house. It wants a low wall, a hand shower on a long hose, a hard-wearing surface and a strainer that clears grit, and it does not want expensive finishes. The limits are drain access and whether the septic system can take the volume.',
    ],
    localFaqs: [
      {
        q: 'Can a tub go in the utility room?',
        a: 'Often, and on a rural property it is frequently the most useful one in the house. It needs drain access and septic capacity confirmed, and it should be specified for hard use rather than looks.',
      },
      {
        q: 'Does it need to be a full bathroom?',
        a: 'Not necessarily. A tub and a drain in a utility space is a legitimate arrangement, though adding a toilet changes both the plumbing and the permitting.',
      },
    ],
  },

  moscow: {
    intro:
      'Tub and shower combo in Moscow? Not sure you will stay? A tub is the safe improvement. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'In a small village where people are sometimes weighing whether to stay, it is fair to ask what an improvement is worth if you leave. A tub with a shower over it is the least risky thing you can put in a bathroom: it suits every buyer, it never has to be explained, and you use it daily in the meantime. What does not pay back is over-specifying it — which on this housing we would steer you away from regardless.',
    ],
    localFaqs: [
      {
        q: 'Is a new tub worth it if we might move?',
        a: 'More than most improvements. You use it daily while you are here, and a sound tub and shower is what every buyer expects to find. Just do not over-specify it.',
      },
      {
        q: 'Should we put a bathroom in the basement?',
        a: 'On ground this low, usually not — we would rather say so before you spend. The same money generally does more on the main floor.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Tub and shower combo in Newtonsville? Here is what we need from you on install day. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the far northeastern villages, a lost morning is expensive for both of us — so it is worth knowing what makes the day run. The bathroom cleared of everything portable, a clear route from the door to it wide enough for a tub, somewhere to park within reach, pets elsewhere for the day, and access to the water shutoff. That is genuinely the whole list, and with it in place a one-day job stays a one-day job.',
    ],
    localFaqs: [
      {
        q: 'What do we need to do before install day?',
        a: 'Clear the bathroom, keep a route from the door wide enough for a tub, make parking available near the house, keep pets elsewhere, and make sure we can reach the water shutoff.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, and we schedule it deliberately rather than fitting it around closer work. That is exactly why the dates we put in writing hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Tub and shower combo in Williamsburg? A surround on an uninsulated exterior wall stays cold and damp. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'In 19th-century houses the bathroom was frequently added on an exterior wall with little or no insulation in it, and tiling over that creates a permanently cold surface in a room full of vapour. Warm air condenses on it, the grout stays damp and the wall never fully dries. The fix is not more waterproofing — it is insulating the cavity properly and detailing the vapour control while the wall is open, which is a modest addition at exactly the moment it is possible.',
    ],
    localFaqs: [
      {
        q: 'Should we insulate behind the surround?',
        a: 'On an exterior wall in a house this age, yes. Without it the tiled surface stays cold, vapour condenses on it and the wall never properly dries.',
      },
      {
        q: 'Is that not what waterproofing is for?',
        a: 'No — waterproofing keeps liquid water out of the structure. Condensation forms on the warm side, and only insulation and vapour detailing address that.',
      },
    ],
  },

  bethel: {
    intro:
      'Tub and shower combo in Bethel? On a modest budget, safety comes before finishes. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Where someone is living alone in an older house and the budget is limited, the priority order is clear to us even when it is not to a showroom. A lower tub wall, a textured floor, blocking with a rated bar at the entry, a hand shower reachable from seated and a limit-stopped valve come first. Tile choice, surround finish and heated floors come after. We would rather build a plain bathroom that is safe than a handsome one that is not.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget go on first?',
        a: 'A lower tub wall, a textured surface, blocking with a rated bar, a hand shower reachable from seated and a temperature limit stop. Finishes come after those.',
      },
      {
        q: 'How much should we spend here?',
        a: 'Usually the middle of our range rather than the top. The money that matters is behind the surface and in the safety details, and neither depends on an expensive finish.',
      },
    ],
  },

  ross: {
    intro:
      'Tub and shower combo in Ross? On hard well water, the tub shows it at the waterline. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Hard water leaves its mark on a tub faster than anywhere else in the house, because standing water sits against the surface for as long as the bath lasts. That is a scale ring at the waterline and, over time, a dulled finish that no amount of scrubbing recovers — and scrubbing hard is what damages it. Where a property is on a well, we would rather raise treatment before you choose a finish than after you are fighting it every week.',
    ],
    localFaqs: [
      {
        q: 'Why does our tub get a ring that will not come off?',
        a: 'Hard water depositing scale at the waterline, and often an abrasive cleaner having dulled the surface trying to remove it. Treatment addresses the cause; a gentler cleaner protects the finish.',
      },
      {
        q: 'Would a softener help?',
        a: 'It would, throughout the house, but it is a bigger decision. We will give you a straight view on whether it is worth it for you rather than selling equipment.',
      },
    ],
  },

  fairfield: {
    intro:
      'Tub and shower combo in Fairfield? The cleaner under your sink may be ruining the finish. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Most people finish a new tub and then clean it with whatever is strongest, which is where the damage starts. Abrasive creams dull acrylic permanently and scratch enamel. Acidic limescale removers attack cement grout. Bleach degrades the silicone joint at the wall until it discolours and lifts. A mild detergent and a soft cloth will keep a tub looking new for years — and we would rather tell you that than replace a surface you scoured off.',
    ],
    localFaqs: [
      {
        q: 'What should we clean a new tub with?',
        a: 'A mild detergent and a soft cloth. Avoid abrasive creams on acrylic and enamel, acidic descalers on cement grout, and bleach on the silicone joint.',
      },
      {
        q: 'How do we deal with limescale then?',
        a: 'Mostly by rinsing and drying after use. Where descaler is genuinely needed, we will tell you which surfaces in your bathroom can take it and which cannot.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Tub and shower combo in Beckett Ridge? The HOA governs the outside — the bathroom is yours. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'In a planned community people sometimes assume approvals are needed for everything, and it is worth being clear: a homeowners association concerns itself with what is visible from outside — elevations, roofing, landscaping. An interior bathroom is not its business, so the specification is entirely open. What does still apply is township permitting where plumbing is altered, which we file and schedule as part of the job.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval for a bathroom?',
        a: 'No — an association concerns itself with what is visible from outside. Township permitting still applies where plumbing is altered, and we handle that.',
      },
      {
        q: 'What is worth changing in a house of this era?',
        a: 'Usually the hall bath tub, which is builder-grade and flexes because it was never bedded. It is a modest job with a noticeable result.',
      },
    ],
  },

  wetherington: {
    intro:
      'Tub and shower combo in Wetherington? In a suite this size, the tub and shower should separate. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'A tub with a shower over it is a compromise made for space, and in a primary suite this size the compromise is unnecessary. Separating them lets the tub be deeper and positioned for the room rather than jammed against a plumbing wall, and lets the shower be a real one. The honest caveat is that two sets of plumbing and two enclosures cost more than one combined unit — and in a bathroom of this scale it is usually where the money is best spent.',
    ],
    localFaqs: [
      {
        q: 'Should the tub and shower be separate?',
        a: 'In a suite this size, almost always. The tub can be deeper and positioned for the room, and the shower becomes a real one instead of a compromise.',
      },
      {
        q: 'Is the hall bath worth doing at the same time?',
        a: 'Frequently, and it costs less alongside the primary than as a separate job later. We will quote both so you can see the difference.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Tub and shower combo in Hamilton? When we open a galvanised wall, how far back do we replace? Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Open a wall behind a tub in one of these houses and you will usually find galvanised supply pipe at the end of its life. The honest question is where to stop. Replacing only the visible foot leaves the corroded run feeding it, so the tub still fills slowly; replacing the whole house is a different project. Our normal recommendation is back to the nearest accessible junction — which fixes the bathroom properly without becoming a repipe. We show you what we found and let you decide.',
    ],
    localFaqs: [
      {
        q: 'How much of the old pipe gets replaced?',
        a: 'Normally back to the nearest accessible junction, which solves the fill rate without becoming a whole-house repipe. Replacing only the visible section leaves the restriction in place.',
      },
      {
        q: 'Will we need to repipe the whole house eventually?',
        a: 'In a house of this age, probably at some point. We will tell you honestly what we saw rather than either alarming you or pretending the rest is fine.',
      },
    ],
  },

  millville: {
    intro:
      'Tub and shower combo in Millville? How far ahead should you book? Further than people expect. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'The install itself is short, which misleads people about the timeline. From first visit to finished bathroom is typically a few weeks, and most of that is neither design nor building — it is material lead times. A stock tub in a standard size moves quickly; a non-standard size, a particular finish or a specific valve does not. Spring and early summer are the busiest stretch. If there is a date you are working toward, tell us at the first conversation.',
    ],
    localFaqs: [
      {
        q: 'How far ahead do we need to book?',
        a: 'Usually a few weeks, and longer in spring and early summer. The install is short but material lead times set the real timeline.',
      },
      {
        q: 'Can anything be done sooner?',
        a: 'A stock-size tub and a standard surround move much faster than a non-standard size or a particular finish. If speed matters more than specification, we will show you the quicker route.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Tub and shower combo in New Miami? A bathroom over the kitchen changes what a small leak costs. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'In these compact houses the bathroom sits directly above the kitchen more often than not, and a tub is the fixture with the most water in it. A weeping overflow gasket does not announce itself upstairs — it appears as a stain on a kitchen ceiling months later, by which point the joists have been wet the whole time and the cabinets below may have gone. That is why the waste and overflow assembly is replaced rather than reused, and why it is tested before the apron closes.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is above the kitchen — what protects it?',
        a: 'A completely new waste and overflow assembly rather than reusing the old one, tested with the tub filled before the apron closes, and a moisture-resistant substrate behind the surround.',
      },
      {
        q: 'There is already a stain below — what does that mean?',
        a: 'Usually the overflow gasket or a failed wall joint leaking slowly. We open it up and check the joists and subfloor before quoting so it is in the fixed price.',
      },
    ],
  },

  monroe: {
    intro:
      'Tub and shower combo in Monroe? Working from home? Tell us — we can schedule the noisy part. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'A tub replacement is not loud all day, but the noisy stretch is genuinely noisy: cutting out an old surround and breaking up a cast-iron tub is an hour or two of real racket. If you are on calls from home, tell us at booking and we will front-load that work into the morning or schedule around a meeting. It costs us nothing to plan and it is the difference between a job you can work through and one you cannot.',
    ],
    localFaqs: [
      {
        q: 'How loud is the work, and for how long?',
        a: 'The removal is genuinely noisy for an hour or two, particularly with a cast-iron tub; the rest of the day is not. Tell us if you work from home and we will schedule that stretch around you.',
      },
      {
        q: 'Which county issues our permit?',
        a: 'It depends which side of the line your property sits on, since Monroe straddles Butler and Warren. We confirm the jurisdiction before scheduling.',
      },
    ],
  },

  landen: {
    intro:
      'Tub and shower combo in Landen? In an attached home, the shared wall carries the stack and the sound. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, the wall between you and your neighbour frequently carries the plumbing stack for both — and a tub is the noisiest fixture on it. Filling one sends water rushing through a shared wall at whatever hour you choose. Bedding the tub, insulating the pipe run and isolating it from the framing handle most of that, and an arrestor at the valve stops the bang when it shuts off. All cheap while the wall is open.',
    ],
    localFaqs: [
      {
        q: 'Can we alter plumbing on a shared wall?',
        a: 'It depends whether the stack serves both homes, which we establish before designing. Where it is shared, isolating it needs coordinating rather than assuming.',
      },
      {
        q: 'Will the neighbours hear the tub filling?',
        a: 'Less than they hear it now, if the pipe run is insulated and isolated from the framing and the tub is bedded. Both are inexpensive while the wall is open.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Tub and shower combo in Loveland Park? Old sliding door tracks leave holes that must be dealt with. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Almost every tub in this housing has a framed sliding glass door, and those frames are screwed and sealed through the tile into the substrate. Removing them leaves a line of penetrations along the tub deck and up the jambs — every one a route for water into the wall if it is simply filled and forgotten. Where the surrounding tile is being kept, those holes get properly made good rather than caulked over, and that is worth asking about specifically.',
    ],
    localFaqs: [
      {
        q: 'What happens to the holes left by the old door frame?',
        a: 'They get properly made good, not filled with silicone and covered. Every one goes through the tile into the substrate, and left unsealed they let water into the wall.',
      },
      {
        q: 'Can we keep the surrounding tile?',
        a: 'Sometimes, where it is sound and the colour is liveable. We will show you honestly what the repair line will look like before you decide.',
      },
    ],
  },

  maineville: {
    intro:
      'Tub and shower combo in Maineville? Build for the household you will have in ten years. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'A growing town means growing households, and the bathroom that suits a family with a toddler is not the one that suits the same family with two teenagers. That argues for decisions that stay right: a tub deep enough to be worth a bath, a hand shower alongside a fixed head, a limit-stopped valve that stops mattering and never gets in the way, and ventilation rated for back-to-back use. None of it costs much now; all of it is expensive to change later.',
    ],
    localFaqs: [
      {
        q: 'What should we plan for as the family grows?',
        a: 'A hand shower alongside a fixed head, a temperature limit stop, and ventilation rated for back-to-back use. Those keep working as the household changes and none is easy to add later.',
      },
      {
        q: 'Will a limit stop annoy us later?',
        a: 'No — it caps the maximum rather than restricting normal use, and it can be adjusted. With young children it is the single most worthwhile part of the valve specification.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Tub and shower combo in Pleasant Plain? If it is your only bathroom, we do not start what we cannot finish. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Out here, a bathroom out of action is not a minor inconvenience — there is nowhere else to go. So we do not open a single-bathroom job until every component is on site and checked, and we schedule it as a block rather than fitting it around closer work. That is the practical reason we are careful about start dates in the outer villages: a crew stretched thin is how a household ends up without a bathroom for a week.',
    ],
    localFaqs: [
      {
        q: 'We only have one bathroom — how long will we be without it?',
        a: 'Typically part of a single day for a same-position replacement, and you get that window in writing. We do not begin until every component is on site, precisely so a delay cannot strand you.',
      },
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it deliberately rather than squeezing it in. That honesty about distance is why the start date we put in writing holds.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Tub and shower combo in South Lebanon? In a new build, check the builder warranty first. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'With this much new construction, plenty of homes here are still inside their builder warranty period — and altering plumbing or a tub installation can affect what that warranty covers. It is worth reading before commissioning work, and worth asking the builder whether a defect you are trying to fix is actually theirs to put right. We would rather you got a flexing tub bedded properly under warranty than paid us to replace it.',
    ],
    localFaqs: [
      {
        q: 'Will remodeling affect our builder warranty?',
        a: 'It can, where the work touches plumbing or the tub installation. Check the terms first — and if the problem is a defect, it may be the builder’s to fix rather than yours to pay for.',
      },
      {
        q: 'Our new tub already flexes — is that a defect?',
        a: 'Usually it means it was never bedded underneath. Raise it with the builder first; if it is within warranty that is their responsibility, and we will happily tell you what we think is wrong without charging you.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Tub and shower combo in Lawrenceburg? Above a business, a leak is someone else’s livelihood. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A good deal of downtown housing here sits above ground-floor commercial space, and a tub is the fixture with the most water in it. A weeping waste connection does not just damage a ceiling — it can close a business for a week. So over occupied commercial space we treat the waterproofing and the waste assembly as the whole job: everything new, tested with the tub filled before the apron closes, and shut-off timing agreed with the tenant below in advance.',
    ],
    localFaqs: [
      {
        q: 'Our apartment is above a shop — what extra care is taken?',
        a: 'A completely new waste and overflow assembly tested with the tub filled before anything closes, a full waterproofed substrate, and shut-off timing agreed with the business below.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Permitting and inspection run under Indiana rules rather than Ohio, which we confirm before a start date is agreed.',
      },
    ],
  },

  greendale: {
    intro:
      'Tub and shower combo in Greendale? If the bathroom drains by pump, ask about a power cut. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Where a house is stepped into this hillside, a lower-level bathroom sometimes sits below the sewer line and drains through a sealed ejector — a pump, which needs electricity. A tub makes that more demanding than a shower, because it discharges its whole volume at once. If a lower-level bathroom is going in on a pump here, decide on battery backup at the same time; retrofitting it afterwards means going back into the same pit.',
    ],
    localFaqs: [
      {
        q: 'Does a pumped bathroom still work in a power cut?',
        a: 'Not without backup. If the lower level drains through an ejector, it is worth deciding on battery backup at the same time — retrofitting means opening the same pit again.',
      },
      {
        q: 'Will our lower level need a pump?',
        a: 'It depends where the house sits on the hill. We measure the drain elevation against the sewer line on the first visit rather than assuming.',
      },
    ],
  },

  aurora: {
    intro:
      'Tub and shower combo in Aurora? Here is what we check at the walkthrough before asking for payment. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'The last hour of a job matters as much as the first. Before we ask for the balance we walk it with you: the tub filled and drained to check the waste and overflow, the shower run to confirm the diverter holds, every silicone joint inspected, the valve tested through its range, the tub checked for any movement underfoot, the extractor confirmed as pulling, and the route through the house checked for anything we touched. Anything you are not happy with is put right before the invoice.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'We fill and drain the tub to check the waste, run the shower to confirm the diverter holds, inspect every joint, test the valve, check the tub for movement and confirm the extractor pulls. Anything you are unhappy with is put right before the invoice.',
      },
      {
        q: 'What if something shows up a month later?',
        a: 'Tell us and we come back. The workmanship warranty exists precisely for the things that do not reveal themselves on day one.',
      },
    ],
  },
};
