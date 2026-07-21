import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /kitchens/[location].
 *
 * IMPORTANT — the split with kitchen-remodeling-older-homes.
 * These two services overlap by definition, so the angles are divided
 * deliberately and neither file should cross the line:
 *
 *   THIS FILE (Kitchen Remodels) — layout and workflow, island clearances,
 *   cabinet construction and lead times, countertop material and seams,
 *   appliance sizing, ventilation and make-up air, electrical circuits and
 *   outlet spacing, lighting layers, storage, sequencing, living without a
 *   kitchen, budget allocation, and resale.
 *
 *   OLDER HOMES — plaster and lath, knob-and-tube, galvanised supply, chimney
 *   breasts, out-of-square walls, original hardwood, period cabinetry matching,
 *   undersized electrical service, pantry conversions and small original
 *   footprints. None of that belongs here.
 */
export const kitchensCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Kitchen remodel in Sedamsville? A hillside house means everything comes up a stair. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'A kitchen is the largest delivery any house takes — cabinets arrive as a pallet, countertops as slabs that cannot be tilted or flexed, and appliances in crates. On a hillside street with limited parking and a stair from the pavement, that route decides the schedule as much as the build does. We walk it at survey and book access before a delivery date is agreed, because a countertop that reaches the door and stops costs a week.',
    ],
    localFaqs: [
      {
        q: 'Can cabinets and countertops get into a hillside house?',
        a: 'Usually, with the route measured first. Stone countertops in particular cannot be tilted or flexed, so the stair turn and door widths get checked against the actual slab sizes before fabrication.',
      },
      {
        q: 'Does difficult access add cost?',
        a: 'A modest amount in labour where materials have to be carried a distance or up stairs. It appears on the quote rather than as a surprise.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Kitchen remodel in Sayler Park? Cabinet lead times set the schedule, not our diary. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'People are surprised that the wait is longer than the work. Stock cabinets ship in weeks; semi-custom runs longer; full custom is measured in months. Nothing starts until the cabinets are in our warehouse and checked, because demolishing a kitchen and then waiting on a delayed delivery leaves a household without one. We give you the real lead time at quotation rather than the optimistic one.',
    ],
    localFaqs: [
      {
        q: 'How long does a kitchen take?',
        a: 'The build is typically three to five weeks on site. The wait beforehand is usually longer — stock cabinets ship in weeks, semi-custom longer, full custom in months.',
      },
      {
        q: 'Do you start before the cabinets arrive?',
        a: 'No. Everything is in our warehouse and checked before demolition, because tearing out a kitchen and then waiting on a delayed delivery is how households end up cooking in a garage for a month.',
      },
    ],
  },

  riverside: {
    intro:
      'Kitchen remodel in Riverside? An island needs clearance on every side to work. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'Everyone wants an island and not every kitchen can take one. The working figure is around 42 inches of clear aisle on each side, and 48 where two people need to pass or an appliance door opens into it. Squeeze that to 36 and you have a kitchen that fights you every day — a dishwasher door that blocks the route, a fridge you cannot open fully. We measure the aisles before drawing the island, not after.',
    ],
    localFaqs: [
      {
        q: 'Will an island fit our kitchen?',
        a: 'It needs roughly 42 inches of clear aisle on each side, and 48 where two people pass or an appliance door swings into it. We measure the aisles before drawing the island rather than after.',
      },
      {
        q: 'What if there is not enough room?',
        a: 'A peninsula gives you most of the same worktop and seating without needing clearance on all four sides. We would rather propose that than squeeze an island in.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Kitchen remodel in East Price Hill? In a two-family, one kitchen job affects both units. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'Kitchens in these buildings usually stack, which means shared plumbing stacks and often a shared electrical service. Moving a sink or adding the dedicated circuits a modern kitchen needs touches infrastructure the other unit depends on, and water gets isolated for both. We establish what is shared before designing, and we agree shut-off windows with the neighbour rather than surprising them.',
    ],
    localFaqs: [
      {
        q: 'Will work in our kitchen affect the other unit?',
        a: 'It can — kitchens in these buildings usually stack and share plumbing and sometimes electrical service. We establish what is shared before designing and agree shut-off windows in advance.',
      },
      {
        q: 'Can the sink be moved?',
        a: 'Usually, though on a shared stack it needs more planning. How far it can move depends on the drain run and the venting, which we map first.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Kitchen remodel in West Price Hill? Cabinets are about half the budget — start there. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'In most kitchens the cabinets are the single largest line, and the difference between grades is real: particleboard boxes with stapled joints and a thin door, versus plywood boxes with dovetailed drawers and soft-close hardware rated for decades. The second costs meaningfully more and is what people notice every day for twenty years. Knowing that split early is what lets you allocate the rest of the budget sensibly.',
    ],
    localFaqs: [
      {
        q: 'Where does the money go in a kitchen?',
        a: 'Cabinets are usually the largest single line, often around half. Countertops, appliances, labour and everything else divide the rest — knowing that early is what lets you allocate sensibly.',
      },
      {
        q: 'Is the cabinet upgrade worth it?',
        a: 'Plywood boxes, dovetailed drawers and properly rated soft-close hardware are what you touch every day for twenty years. If something has to give, we would sooner economise on the countertop.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Kitchen remodel in Lower Price Hill? A galley kitchen has rules worth respecting. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'Rowhouses are deep and narrow, and the kitchen that results is usually a galley — which is a genuinely efficient layout when it is planned properly. The working aisle wants around 42 inches between runs, appliance doors need to not collide across it, and the sink, hob and fridge should sit so you are not walking the length of the room repeatedly. Done right a galley beats a badly planned open kitchen comfortably.',
    ],
    localFaqs: [
      {
        q: 'Is a galley kitchen a compromise?',
        a: 'Not when it is planned properly — it is one of the most efficient layouts there is. The aisle wants around 42 inches, and appliance doors must not collide across it.',
      },
      {
        q: 'Can we open it up instead?',
        a: 'Sometimes, though in a rowhouse the wall in question is frequently structural. We establish that before drawing anything, because it changes the project entirely.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Kitchen remodel in Over-the-Rhine? In a condo, the board approves before we start. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'A kitchen touches more shared systems than any other room — the stack, the electrical panel, and frequently the ventilation route to outside. In a converted building all three usually need association approval, and a range hood venting externally may need a facade penetration the board will have views about. We establish what is permitted before designing, because a recirculating hood instead of a ducted one changes the whole plan.',
    ],
    localFaqs: [
      {
        q: 'Do we need condo approval for a kitchen?',
        a: 'In most OTR buildings yes — the work touches the stack, the electrical service and often the ventilation route. We establish what is permitted before designing rather than after.',
      },
      {
        q: 'Can a range hood vent outside?',
        a: 'It depends on the building and whether a facade penetration is allowed. Where it is not, a recirculating hood is the fallback — and that changes the design, so we settle it first.',
      },
    ],
  },

  downtown: {
    intro:
      'Kitchen remodel in Downtown Cincinnati? Every delivery goes through a booked dock. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'A kitchen means multiple large deliveries over several weeks — cabinets, appliances, stone slabs — and in a tower each one needs a dock window, a freight elevator booking and an insurance certificate on file. Debris goes out the same way. It is entirely routine and it is a scheduling exercise that has to run alongside the build rather than being improvised, which is why we deal with building management directly.',
    ],
    localFaqs: [
      {
        q: 'How do deliveries work in a downtown building?',
        a: 'Each one needs a dock window, a freight elevator booking and an insurance certificate on file, and debris goes out the same way. We arrange all of it with building management directly.',
      },
      {
        q: 'Can stone countertops fit in the elevator?',
        a: 'Usually, but slab size against elevator dimensions is checked before fabrication. Where it is tight, the template is planned with a seam that suits the access.',
      },
    ],
  },

  'west-end': {
    intro:
      'Kitchen remodel in the West End? Modern kitchens need circuits older panels may not have. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'A kitchen built to current requirements wants a good deal of dedicated circuitry — separate circuits for the small-appliance counters, the dishwasher, the disposal, the microwave and the range, with GFCI protection on the counter outlets. That is more than many existing panels have spare, and a panel upgrade is a real cost that belongs on the quote rather than appearing mid-job. We check capacity at survey.',
    ],
    localFaqs: [
      {
        q: 'Will our electrical panel handle a new kitchen?',
        a: 'It has to be checked. A modern kitchen wants several dedicated circuits with GFCI protection on the counter outlets, and older panels frequently have no spare capacity.',
      },
      {
        q: 'What does a panel upgrade cost?',
        a: 'It varies with the service size and the work involved, and it appears as its own line rather than being absorbed into a square-foot price.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Kitchen remodel in Mount Adams? Ventilation is the detail most kitchens get wrong. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'A hood has to be sized for the range beneath it, ducted in the shortest sensible run to outside, and in a tightly built modern envelope a powerful one may need make-up air to work at all. Recirculating hoods filter grease and do essentially nothing for heat and moisture. In a narrow townhouse the duct route is the constraint, and it is worth solving at design stage rather than discovering the only path is impossible.',
    ],
    localFaqs: [
      {
        q: 'Does a range hood have to vent outside?',
        a: 'It should. A recirculating hood filters grease and does essentially nothing for heat and moisture. In a narrow house the duct route is the real constraint, so we solve it at design stage.',
      },
      {
        q: 'What is make-up air?',
        a: 'A powerful hood extracts more air than a tight house can replace, which can starve it or pull on other appliances. Where the numbers require it, a make-up air supply is part of the design.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Kitchen remodel in Mount Auburn? A rental kitchen is specified differently to your own. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Where a kitchen serves tenancies, the specification that pays is durable rather than impressive: plywood boxes with a hard-wearing laminate or thermofoil door, quartz rather than a porous stone, a stainless sink instead of composite, and appliances from a range with easily sourced parts. It costs more than the cheapest option once and considerably less across a decade of turnovers.',
    ],
    localFaqs: [
      {
        q: 'What specification suits a rental kitchen?',
        a: 'Plywood boxes with hard-wearing doors, quartz rather than porous stone, a stainless sink, and appliances with easily sourced parts. More than the cheapest option once, far less over a decade.',
      },
      {
        q: 'Can it be done between tenancies?',
        a: 'A kitchen is three to five weeks on site plus lead time, so it needs a longer gap than a bathroom. We give firm dates before you commit to a vacancy.',
      },
    ],
  },

  clifton: {
    intro:
      'Kitchen remodel in Clifton? Removing a wall is a structural question first. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Opening a kitchen to the room beside it is the most requested change in houses this size, and the first question is what the wall is carrying. Where it is structural, a beam has to be sized and supported down to something that can take the load — which frequently means work in the basement below as well. That is entirely routine and it is not a same-day decision, so it belongs in the design phase rather than as an idea mid-demolition.',
    ],
    localFaqs: [
      {
        q: 'Can we take out the wall between the kitchen and dining room?',
        a: 'Frequently, but what it carries decides the work. A structural wall needs a sized beam with support carried down to something that can take the load, often including work in the basement.',
      },
      {
        q: 'How do we know if it is load-bearing?',
        a: 'From the framing direction and what sits above it, confirmed at survey. Where there is any doubt we involve an engineer rather than guessing.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Kitchen remodel in Corryville? Near campus, the summer window is the only window. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'A kitchen cannot be done between tenancies the way a bathroom can — three to five weeks on site plus cabinet lead time means the whole summer, and that only works if the order is placed in spring. Landlords who ring us in June for an August turnover are usually too late for anything but stock cabinets. We would rather say that plainly and plan next year properly than promise a date we would miss.',
    ],
    localFaqs: [
      {
        q: 'Can a kitchen be done between academic years?',
        a: 'Only with the order placed in spring. Three to five weeks on site plus cabinet lead time means the whole summer, and a June call for an August turnover is usually too late.',
      },
      {
        q: 'What is realistic at short notice?',
        a: 'Stock cabinets and a like-for-like layout. Anything semi-custom or involving moved plumbing needs planning a season ahead.',
      },
    ],
  },

  northside: {
    intro:
      'Kitchen remodel in Northside? Open shelving looks superb and asks something of you. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'Open shelving is the most requested look here and the one people most often reverse. It is genuinely lovely with a curated set of things and genuinely unforgiving with a normal household’s mismatched glassware — and everything on it collects cooking grease. A middle route works well: open on one wall where it earns its place, closed storage doing the actual work elsewhere. We will tell you honestly how it lives.',
    ],
    localFaqs: [
      {
        q: 'Is open shelving practical?',
        a: 'It is lovely with a curated set of things and unforgiving with a normal household’s mismatched glassware — and everything on it collects cooking grease. Open on one wall with closed storage elsewhere usually works best.',
      },
      {
        q: 'Does it save money over wall cabinets?',
        a: 'Somewhat, though you lose a lot of storage. That trade matters more in a small kitchen than the saving does.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Kitchen remodel in College Hill? Drawers beat doors in a base cabinet, every time. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'The single change that makes a kitchen work better day to day is replacing base cabinet doors with deep drawers. A door means kneeling and reaching into a dark box; a drawer brings everything to you and uses the full depth. It costs a little more per unit and it is the upgrade clients mention most a year later — more than the countertop, more than the appliances.',
    ],
    localFaqs: [
      {
        q: 'Drawers or doors in base cabinets?',
        a: 'Drawers, almost always. A door means kneeling and reaching into a dark box; a drawer brings everything to you and uses the full depth. It is the upgrade people mention most a year later.',
      },
      {
        q: 'Do drawers cost much more?',
        a: 'A little per unit, and it is where we would spend before upgrading a countertop. Good drawer hardware rated for the weight is part of that.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Kitchen remodel in Walnut Hills? In a subdivided house, the kitchen stack is shared. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Where a large house has been divided, kitchens usually stack vertically onto one drain and one vent, and the electrical service was rarely upgraded to match. Adding the dedicated circuits a modern kitchen needs, or relocating a sink, touches infrastructure other units depend on. We map what is shared before designing and coordinate isolation with the other occupants rather than shutting them down unannounced.',
    ],
    localFaqs: [
      {
        q: 'Can we move the sink in a subdivided house?',
        a: 'Usually, though on a shared stack the distance is limited by the drain run and venting. We map what is shared before designing rather than assuming.',
      },
      {
        q: 'Will the other units lose water?',
        a: 'Briefly, during isolation. We agree those windows with the other occupants in advance rather than shutting them down unannounced.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Kitchen remodel in East Walnut Hills? Protecting the route matters as much as the room. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'A kitchen job runs for weeks, which means weeks of materials and debris crossing whatever lies between the door and the room. In a house with original floors and joinery that route needs hard protection, a sealed dust barrier and covered handrails from day one — not laid down on the first day and forgotten. It is unglamorous and it is why the rest of the house looks the same at the end as it did at the start.',
    ],
    localFaqs: [
      {
        q: 'How do you protect the house during a multi-week job?',
        a: 'Hard floor protection along a planned route, a sealed dust barrier at the kitchen, covered handrails and daily clean-down. Over weeks that has to be maintained rather than laid once.',
      },
      {
        q: 'How much dust does a kitchen make?',
        a: 'A great deal at demolition and again at any drywall stage. Contained properly it stays in the room, which is the whole point of doing the barrier first.',
      },
    ],
  },

  avondale: {
    intro:
      'Kitchen remodel in Avondale? Appliance sizes are not as standard as they look. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'Refrigerators in particular have grown, and a modern one frequently will not fit the opening its predecessor sat in — depth as much as width, since counter-depth and standard-depth differ by several inches. Cabinets are made to the appliance rather than the other way round, so the appliances have to be chosen and their specification sheets in hand before cabinets are ordered. Choosing them afterwards is how a fridge ends up projecting into a walkway.',
    ],
    localFaqs: [
      {
        q: 'Do we have to choose appliances before cabinets?',
        a: 'Yes — cabinets are built to the appliance specifications, not the other way round. Choosing afterwards is how a fridge ends up projecting into a walkway.',
      },
      {
        q: 'Will a modern fridge fit the old space?',
        a: 'Frequently not. They have grown in depth as much as width, and counter-depth versus standard-depth differs by several inches. We check the opening against the actual model.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Kitchen remodel in Hyde Park? Countertop seams are placed by design, not by chance. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'Stone comes in slabs of finite size, so any long run has a seam somewhere — and where it falls is a decision. Put it behind the sink or over a cabinet division and it disappears; let a fabricator place it for cutting convenience and it lands mid-run in the light. On a book-matched or heavily veined slab, the layout matters more still. We template with you and agree seam positions before anything is cut.',
    ],
    localFaqs: [
      {
        q: 'Can we avoid seams in the countertop?',
        a: 'On a long run, rarely — slabs have a finite size. What matters is where the seam falls, and putting it behind the sink or over a cabinet division makes it nearly invisible.',
      },
      {
        q: 'Do we get to see the slab?',
        a: 'On a veined or figured stone we would insist on it, and on the layout too. Where the pattern falls across a run is the difference between striking and awkward.',
      },
    ],
  },

  oakley: {
    intro:
      'Kitchen remodel in Oakley? Lighting is three separate jobs, not one. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'A single ceiling fitting puts you in your own shadow at the worktop, which is why kitchens with one light always feel dim regardless of the bulb. It takes three layers: under-cabinet task lighting on the work surfaces, general ambient light for the room, and something over an island or table. All of it has to be wired before the walls close, which makes it a design-stage decision rather than something added later.',
    ],
    localFaqs: [
      {
        q: 'Why does our kitchen feel dim with a bright light?',
        a: 'Because a ceiling fitting behind you puts the worktop in your shadow. It takes three layers — under-cabinet task lighting, general ambient light and something over an island or table.',
      },
      {
        q: 'Can lighting be added later?',
        a: 'Under-cabinet lighting in particular needs wiring before the walls close and the cabinets go on. It is one of the cheaper things at design stage and awkward afterwards.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Kitchen remodel in Mount Lookout? Plan where you will cook for a month. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'A kitchen is three to five weeks without a kitchen, and households that plan for it cope far better than those who do not. A temporary setup somewhere else in the house — the fridge relocated, a microwave, a kettle, a sink you can reach — makes the difference between an inconvenience and a genuinely difficult month. We help set that up on day one rather than leaving you to work it out.',
    ],
    localFaqs: [
      {
        q: 'How do we manage without a kitchen for weeks?',
        a: 'A temporary setup elsewhere — the fridge relocated, a microwave, a kettle and a sink within reach. We help arrange that on day one rather than leaving you to work it out.',
      },
      {
        q: 'Can the old kitchen stay usable partway?',
        a: 'Rarely for long. Once demolition starts the plumbing and power go, and stringing that out extends the whole job. A short, clean run is better than a long, half-usable one.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Kitchen remodel in Columbia-Tusculum? A modern kitchen can sit in a Victorian without pastiche. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'People who have restored a house carefully usually want a kitchen that works like this decade and belongs to the house — which is achievable without reproduction detailing. Door style, cabinet proportion, the height of a wall run, and where a modern appliance is concealed do most of the work. It is a design conversation rather than a shopping one, and it is the part we enjoy most.',
    ],
    localFaqs: [
      {
        q: 'Can a modern kitchen suit a Victorian house?',
        a: 'Yes, and without reproduction detailing. Door style, cabinet proportion, the height of a wall run and where appliances are concealed do most of the work.',
      },
      {
        q: 'Should appliances be panel-ready?',
        a: 'It suits a period room considerably, particularly for the fridge and dishwasher. It costs more and it is where the money buys the most visual difference in a house like this.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Kitchen remodel in Mount Washington? Sequence decides whether the schedule holds. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'A kitchen has a fixed order and every stage waits on the one before: demolition, rough plumbing and electrical, inspection, drywall, flooring, cabinets, then countertop templating — which cannot happen until the cabinets are set and level — then two weeks or so of fabrication, then splashback and final fit. That templating gap is the one that surprises people, and it is why a kitchen cannot be compressed the way a smaller job can.',
    ],
    localFaqs: [
      {
        q: 'Why is there a gap after the cabinets go in?',
        a: 'Countertops are templated off the installed cabinets and then fabricated, which takes a week or two. That gap is unavoidable and it is why a kitchen cannot be compressed.',
      },
      {
        q: 'Can we use the kitchen during it?',
        a: 'Partly — we fit a temporary worktop over the base cabinets where it helps. The sink is usually the thing you are waiting on.',
      },
    ],
  },

  madisonville: {
    intro:
      'Kitchen remodel in Madisonville? A kitchen is the strongest return in the house. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'In a neighbourhood where people are weighing the house as an asset, this is the room that carries most weight with buyers — and the one where a dated example does the most damage to a viewing. That argues for finishing it properly rather than half-doing it, and for choices that read as considered rather than personal. Bold colour and unusual layouts are for a house you are staying in.',
    ],
    localFaqs: [
      {
        q: 'Does a kitchen add value?',
        a: 'It carries more weight with buyers than any other room, and a dated one does the most damage at a viewing. That argues for finishing it properly rather than half-doing it.',
      },
      {
        q: 'Should we choose neutral if we may sell?',
        a: 'For cabinets and countertops, generally — they are expensive to change. Paint, hardware and lighting are where personality costs nothing to reverse.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Kitchen remodel in Pleasant Ridge? Outlet spacing is set by code, not by preference. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Counter outlets have required spacing, so no point along a work surface is far from one, and they need GFCI protection. That matters for design because it decides where they land in a splashback — and an outlet in the middle of a feature tile panel is the kind of thing that only becomes obvious once it is fitted. Planning the spacing against the tile layout is a small step that keeps both correct.',
    ],
    localFaqs: [
      {
        q: 'Where do the counter outlets have to go?',
        a: 'Spaced so no point along a work surface is far from one, with GFCI protection. Planning that against the splashback layout keeps an outlet out of the middle of a feature panel.',
      },
      {
        q: 'Can outlets go under the cabinets instead?',
        a: 'Sometimes, depending on what is permitted and how the run is arranged. It is worth asking about early if the splashback matters to you.',
      },
    ],
  },

  westwood: {
    intro:
      'Kitchen remodel in Westwood? Quartz and granite behave differently — choose on use. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Quartz is engineered and non-porous, so it never needs sealing and resists staining — but it can mark from heat and it fades in strong direct sun. Granite is natural and needs periodic sealing, tolerates heat better and every slab is different. Neither is superior; they suit different households. We will explain how each actually lives rather than which has the better margin.',
    ],
    localFaqs: [
      {
        q: 'Quartz or granite?',
        a: 'Quartz never needs sealing and resists staining but can mark from heat. Granite tolerates heat better and needs periodic sealing. Neither is superior — they suit different households.',
      },
      {
        q: 'What about butcher block?',
        a: 'Warm, affordable and repairable by sanding. It needs oiling, it will mark, and it is a poor choice immediately around a sink unless you accept maintaining it.',
      },
    ],
  },

  norwood: {
    intro:
      'Kitchen remodel in Norwood? Norwood permits and inspects this work itself. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'A kitchen is firmly a permitted job — plumbing altered, circuits added, sometimes structure changed — with inspections at rough-in before anything is closed up. Here that runs through the City of Norwood rather than Cincinnati, whatever the postal address suggests. We file and schedule those inspections as part of the work, and the rough-in one is why the drywall cannot go on when it suits us.',
    ],
    localFaqs: [
      {
        q: 'Does a kitchen need a permit?',
        a: 'Almost always — plumbing altered, circuits added, sometimes structure changed, with inspections at rough-in before anything is closed up. In Norwood that runs through the city itself.',
      },
      {
        q: 'Does inspection delay things?',
        a: 'It is scheduled into the programme rather than added to it. What causes delay is contractors who close walls before inspection and have to open them again.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Kitchen remodel in Blue Ash? A 1990s builder kitchen is sound and dated — that is the sweet spot. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Kitchens in this housing usually have nothing structurally wrong with them — the layout is workable, the plumbing is fine, the cabinets are simply builder-grade and the finishes date the room. That makes for an efficient project: no surprises behind the walls, so nearly the whole budget goes into what you see and use. It is the most predictable kitchen work we do.',
    ],
    localFaqs: [
      {
        q: 'Is a 1990s kitchen worth remodelling if it works?',
        a: 'It makes for an efficient project. With the layout workable and nothing wrong behind the walls, nearly the whole budget goes into cabinets, countertops and appliances rather than repair.',
      },
      {
        q: 'Should we keep the layout?',
        a: 'Where it works, yes — moving plumbing and electrics is where cost climbs fastest. We will tell you honestly when a change is worth it and when it is not.',
      },
    ],
  },

  montgomery: {
    intro:
      'Kitchen remodel in Montgomery? A professional range brings requirements with it. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'A high-output range is not just an appliance swap. It wants a hood sized to it, a duct run capable of the volume, frequently a make-up air supply so the hood can actually work, a larger gas line or a dedicated heavy circuit, and clearances to combustible surfaces either side. Every one of those is solvable and none is optional — which is why the appliance gets chosen at design stage, not selected later.',
    ],
    localFaqs: [
      {
        q: 'What does a professional range need?',
        a: 'A hood sized to it, a duct capable of the volume, often a make-up air supply, a larger gas line or heavy circuit, and clearances either side. All solvable, none optional.',
      },
      {
        q: 'Can we decide the range later?',
        a: 'Not sensibly — it drives the hood, the ducting, the gas or electrical supply and the cabinet layout around it. It is one of the first decisions rather than one of the last.',
      },
    ],
  },

  madeira: {
    intro:
      'Kitchen remodel in Madeira? Here is how three to five weeks actually unfolds. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Households here mostly stay in the house, so the shape matters. Week one is protection and demolition. Week two is rough plumbing and electrical with an inspection at the end of it. Week three is drywall, paint and flooring. Cabinets go in around week four and countertops are templated then — with a week or two of fabrication before the final fit. We give you that programme before starting, not as it happens.',
    ],
    localFaqs: [
      {
        q: 'What happens in each week?',
        a: 'Protection and demolition, then rough plumbing and electrical with an inspection, then drywall, paint and flooring, then cabinets and countertop templating, then final fit after fabrication.',
      },
      {
        q: 'Can we stay in the house throughout?',
        a: 'Almost always. The work is contained behind a dust barrier and we set up a temporary kitchen elsewhere on day one.',
      },
    ],
  },

  wyoming: {
    intro:
      'Kitchen remodel in Wyoming? A butler’s pantry is worth reclaiming where one survives. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'Houses of this size were built with service space adjoining the kitchen, and where a butler’s pantry or back hall survives it is the most valuable square footage available — a second sink, a coffee station, a dishwasher, or simply the storage that lets the main kitchen stay uncluttered. Bringing it back into use frequently achieves more than enlarging the kitchen itself would.',
    ],
    localFaqs: [
      {
        q: 'Is a butler’s pantry worth restoring?',
        a: 'Where one survives, it is often the most valuable space available — a second sink, a coffee station or the storage that keeps the main kitchen uncluttered. It frequently beats enlarging the kitchen.',
      },
      {
        q: 'Does it need its own plumbing?',
        a: 'For a sink, yes, and the run is usually short since it adjoins the kitchen. We establish the drain route before designing it.',
      },
    ],
  },

  mariemont: {
    intro:
      'Kitchen remodel in Mariemont? The Landmark review is exterior — your kitchen is not. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Owners here reasonably ask what they are allowed to do, and the interior is theirs. The one place it intersects is ventilation: a range hood ducting to outside means a penetration in an exterior wall, and that is visible. It is usually straightforward and it is worth raising early rather than at installation, because the alternative — a recirculating hood — changes what the kitchen can do.',
    ],
    localFaqs: [
      {
        q: 'Does the historic designation restrict our kitchen?',
        a: 'The interior is yours. The one intersection is a hood duct penetrating an exterior wall, which is visible — worth raising early rather than at installation.',
      },
      {
        q: 'What if external venting is not permitted?',
        a: 'A recirculating hood is the fallback, and it does much less for heat and moisture. Knowing which you have changes the design, so we settle it first.',
      },
    ],
  },

  cheviot: {
    intro:
      'Kitchen remodel in Cheviot? Good stock cabinets beat poor custom ones. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'On this housing the top of the range does not make sense, and there is a genuinely good middle. Quality stock cabinets in plywood with soft-close hardware, a durable quartz worktop and a sensible appliance package produce a kitchen that works properly and lasts. What we would avoid is stretching to custom cabinetry and then economising on the drawer hardware and the worktop, which is the worst of both.',
    ],
    localFaqs: [
      {
        q: 'Are stock cabinets a compromise?',
        a: 'Good ones are not — plywood boxes with soft-close hardware in a standard size range cover most kitchens well. The compromise is stretching to custom and then economising on hardware and worktop.',
      },
      {
        q: 'When is semi-custom worth it?',
        a: 'When the room has awkward dimensions that stock sizes waste, or when you need a specific height or depth. Otherwise it is buying flexibility you do not need.',
      },
    ],
  },

  covedale: {
    intro:
      'Kitchen remodel in Covedale? Storage design matters more than storage quantity. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Most kitchens do not need more cabinets so much as better ones. A deep drawer for pans instead of a base cabinet, a pull-out for the corner that would otherwise swallow things, a tray divider beside the oven, and the bin where you actually prepare food. Those decisions cost little at cabinet order and are impossible to add later, and they do more for daily use than an extra run of units would.',
    ],
    localFaqs: [
      {
        q: 'How do we get more usable storage?',
        a: 'Better storage rather than more of it — deep drawers for pans, a corner pull-out, tray dividers by the oven, and the bin where you actually prepare. Those are ordered with the cabinets and cannot be added later.',
      },
      {
        q: 'Are corner cabinets worth the pull-out mechanism?',
        a: 'In a corner you would otherwise lose entirely, yes. It is one of the few accessories that genuinely earns its cost.',
      },
    ],
  },

  covington: {
    intro:
      'Kitchen remodel in Covington? Kentucky permitting, and rowhouse kitchens that are narrow. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Two things shape the work here. Permitting and inspection run under Kentucky rules rather than Ohio, confirmed before scheduling. And these rowhouse kitchens are long and narrow, which means a galley or single-run layout planned around aisle width and appliance door swings — and frequently a decision about whether the wall to the next room is structural before anything is opened up.',
    ],
    localFaqs: [
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, and we confirm requirements before scheduling.',
      },
      {
        q: 'Can a narrow rowhouse kitchen be opened up?',
        a: 'Sometimes, though the wall in question is frequently structural. That is established before design, because a beam changes the project substantially.',
      },
    ],
  },

  newport: {
    intro:
      'Kitchen remodel in Newport? East Row kitchens are usually at the back and small. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'The kitchen in these houses sits at the back where the service rooms were, and it is small relative to the rest of the house. The interesting question is usually whether an adjoining room — a back parlour, a rear hall, an enclosed porch — can be absorbed. That is a bigger project than a refit and frequently the one that makes the house work, so it is worth pricing both rather than assuming the footprint is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can we make the kitchen bigger?',
        a: 'Frequently, by absorbing an adjoining back room or enclosed porch. It is a bigger project than a refit and often the one that makes the house work — we price both so you can compare.',
      },
      {
        q: 'Is that wall structural?',
        a: 'It has to be established rather than assumed. Where it is, a sized beam with support carried down changes the scope, and we would rather know at design stage.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Kitchen remodel in Bellevue? Getting a cabinet run through a narrow house takes planning. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Cabinets arrive as boxes and a tall pantry unit is a large, rigid object that will not go round a tight turn. On these narrow streets there is also nowhere to stage a delivery for long. We measure the route and the specific unit sizes before ordering, and where a tall unit will not make the turn there are usually stacked alternatives that achieve the same thing and do fit.',
    ],
    localFaqs: [
      {
        q: 'Will tall cabinets fit through the house?',
        a: 'It gets measured before ordering. A tall pantry unit is rigid and will not go round a tight turn — where it will not, stacked alternatives achieve the same thing and do fit.',
      },
      {
        q: 'Where do materials get staged?',
        a: 'On these streets, in our warehouse until the day rather than in your drive. That is why nothing is ordered until we have somewhere to keep it.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Kitchen remodel in Fort Thomas? On hard water, the sink and fittings choice matters. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Hard water shows on a kitchen faster than anywhere else in the house because the sink is used constantly. A polished chrome tap and a dark composite sink both hold visible mineral film; a brushed finish and stainless hide it far better. It is a small consideration that decides whether the fittings look good with a daily wipe or only after a proper clean.',
    ],
    localFaqs: [
      {
        q: 'Which sink and tap finishes suit hard water?',
        a: 'Brushed finishes and stainless hide mineral film far better than polished chrome or a dark composite sink, which show every drop. It is a small choice with a daily consequence.',
      },
      {
        q: 'Is a filtered tap worth it?',
        a: 'For drinking water, many people find it so. It needs an under-sink unit and its own tap hole, which is decided at design stage rather than added later.',
      },
    ],
  },

  florence: {
    intro:
      'Kitchen remodel in Florence? Refacing is real and it has real limits. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'Where cabinet boxes are sound and the layout works, refacing — new doors, drawer fronts and veneer on the visible carcass — costs considerably less than replacement and takes a fraction of the time. What it cannot do is change the layout, fix a poorly planned kitchen, or improve interiors that are particleboard and sagging. We will tell you honestly which situation you are in rather than defaulting to the larger job.',
    ],
    localFaqs: [
      {
        q: 'Is refacing worth considering?',
        a: 'Where the boxes are sound and the layout works, genuinely — new doors and fronts cost far less than replacement. It cannot change the layout or fix sagging particleboard interiors.',
      },
      {
        q: 'How do we know if our boxes are sound?',
        a: 'We look at the construction, the joints and whether shelves are sagging. It takes ten minutes and it decides which conversation we are having.',
      },
    ],
  },

  erlanger: {
    intro:
      'Kitchen remodel in Erlanger? The dishwasher needs to be beside the sink, not across from it. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Small placement decisions decide whether a kitchen is pleasant. The dishwasher goes immediately beside the sink so plates go straight in — across an aisle means dripping across the floor twice a day. The bin belongs where you prepare, not by the door. And the fridge wants to be reachable from outside the cooking zone so somebody can get a drink without crossing the person at the hob. None of that costs anything; it just has to be drawn.',
    ],
    localFaqs: [
      {
        q: 'Does dishwasher placement really matter?',
        a: 'It is one of the details people notice most. Immediately beside the sink means plates go straight in; across an aisle means dripping across the floor twice a day.',
      },
      {
        q: 'What else is worth getting right?',
        a: 'The bin where you prepare rather than by the door, and the fridge reachable from outside the cooking zone. Neither costs anything — they just have to be drawn.',
      },
    ],
  },

  mason: {
    intro:
      'Kitchen remodel in Mason? Newer houses make this predictable and efficient. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'This is the most predictable kitchen work we do. The electrical panel usually has capacity, the plumbing is copper or PEX in serviceable condition, the floor structure is engineered and known, and the walls are square. That removes nearly every unknown that adds cost in older housing, so the budget goes into cabinets, countertops and appliances rather than into making the house ready to receive them.',
    ],
    localFaqs: [
      {
        q: 'Is a newer house cheaper to remodel?',
        a: 'Usually, because the unknowns are removed — panel capacity, serviceable plumbing, known floor structure and square walls. The budget goes into what you see rather than preparation.',
      },
      {
        q: 'Do we still need a permit?',
        a: 'Where plumbing is altered, circuits added or structure changed, yes. We file and schedule the inspections as part of the job.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Kitchen remodel in West Chester? The builder kitchen works and it is not what you wanted. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'These kitchens repeat: an oak or maple builder cabinet set, a laminate worktop, an island that is really a peninsula, and a layout planned for construction cost rather than cooking. Nothing is wrong with it, which is why it survives — and it is the room most people here eventually replace. Because nothing behind the walls needs repair, that project is unusually efficient.',
    ],
    localFaqs: [
      {
        q: 'Should we replace a kitchen that still works?',
        a: 'It is the room most people here eventually replace, and because nothing behind the walls needs repair the project is efficient — nearly all of the budget goes into what you see and use.',
      },
      {
        q: 'Can we keep the layout?',
        a: 'Often, and it saves real money. Where the layout was planned for construction cost rather than cooking, changing it is where the value is — we will say which yours is.',
      },
    ],
  },

  pendleton: {
    intro:
      'Kitchen remodel in Pendleton? An open loft kitchen has nowhere to hide. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'In an open-plan loft the kitchen is furniture in a living space, which changes the brief. Cooking noise, extraction and mess are all visible from the sofa, so a properly ducted hood matters more than usual, appliance noise ratings become worth reading, and the back of the island is a piece of joinery rather than a cabinet run. Building approval for any ducting through the envelope is the practical constraint.',
    ],
    localFaqs: [
      {
        q: 'What is different about an open loft kitchen?',
        a: 'It is furniture in a living space — noise, extraction and mess are all visible. A properly ducted hood matters more, appliance noise ratings become worth reading, and the island back is joinery.',
      },
      {
        q: 'Can we duct a hood through the wall?',
        a: 'It depends on the building and what the board permits for a facade penetration. We establish that before designing, because a recirculating hood changes what the kitchen can do.',
      },
    ],
  },

  queensgate: {
    intro:
      'Kitchen remodel in Queensgate? Mostly a working district — here is the honest answer. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers, and Queensgate is a working district more than a residential one. Where there is a residence here, typically a live-work or converted space, we do the same work we do anywhere — same fixed price, same in-house team, same warranty. Commercial kitchens are a different trade with different code requirements, and we will say so on the phone rather than after a visit.',
    ],
    localFaqs: [
      {
        q: 'Do you work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here.',
      },
      {
        q: 'Can you do commercial kitchens?',
        a: 'No. Commercial kitchens carry different code requirements and equipment standards, and we would rather say so than take on work outside what we do well.',
      },
    ],
  },

  cuf: {
    intro:
      'Kitchen remodel in CUF? A shared student kitchen needs a landlord specification. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'A kitchen shared by five people takes years of wear in one tenancy. What survives is plywood boxes with laminate or thermofoil doors, quartz rather than laminate worktop edges that swell, a stainless sink, and appliances chosen for parts availability rather than features. The single most common failure is a worktop that got wet at a seam — which is a specification choice rather than bad luck.',
    ],
    localFaqs: [
      {
        q: 'What survives a shared student kitchen?',
        a: 'Plywood boxes with laminate or thermofoil doors, a quartz worktop rather than laminate that swells at the seams, a stainless sink and appliances chosen for parts availability.',
      },
      {
        q: 'Can several units be done together?',
        a: 'Yes, and it is cheaper per unit with one specification across the building — which also means a future repair uses parts you already hold.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Kitchen remodel in Camp Washington? A small kitchen benefits most from good planning. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'In a compact kitchen every decision counts twice. A slimmer dishwasher or a single-bowl sink can free the run that makes a worktop usable. Wall cabinets taken to the ceiling add real storage in a room with no floor space to spare. And where the fridge sits decides whether two people can be in there at once. Planning does more here than budget does.',
    ],
    localFaqs: [
      {
        q: 'How do we get more from a small kitchen?',
        a: 'A slimmer dishwasher or single-bowl sink can free the worktop run that makes it usable, and wall cabinets to the ceiling add real storage. Planning does more here than budget does.',
      },
      {
        q: 'Is a small kitchen cheaper?',
        a: 'In materials, yes — fewer cabinets and less worktop. The labour and the trades involved barely change, so it is not proportionally cheaper.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Kitchen remodel in South Fairmount? A dishwasher and disposal both change the drain load. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'Adding a dishwasher and a disposal to a kitchen that had neither puts more through the drain line, and in a valley with this drainage history a line that was coping may stop coping. It is worth establishing the condition of the run before the work rather than blaming the new appliances afterwards — and where there is any history of slow drains, that is a check worth doing first.',
    ],
    localFaqs: [
      {
        q: 'Will a dishwasher and disposal overload the drain?',
        a: 'They put more through it, and a line that was coping may stop. Where there is any history of slow drains, it is worth establishing the condition before the work rather than after.',
      },
      {
        q: 'Can that be checked?',
        a: 'We look at the symptoms and tell you plainly when a camera inspection is warranted, rather than installing onto a known problem.',
      },
    ],
  },

  'east-end': {
    intro:
      'Kitchen remodel in the East End? In a river cottage the kitchen is often an addition. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'In these cottages the kitchen is frequently a rear addition, framed lighter than the original house and sometimes on a shallower foundation. That matters for a kitchen because stone worktops and a full cabinet run are a substantial load along one wall, and because an addition’s wall may not be tied into the main structure the way you would assume. Both get established before design.',
    ],
    localFaqs: [
      {
        q: 'Can a rear addition take a full kitchen?',
        a: 'Usually, with the structure checked first. Stone worktops and a full cabinet run are a substantial load along one wall, and additions were framed lighter than the main house.',
      },
      {
        q: 'What if the structure is marginal?',
        a: 'Stiffening from below usually solves it, and it appears on the quote. Where it does not, a lighter worktop material is the honest alternative.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Kitchen remodel in North Fairmount? Laminate worktops have improved a great deal. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'Modern laminate is not what people remember — the printing and the edge profiles are far better, and at a fraction of stone cost it frees budget for cabinets, which matter more day to day. Its real limits are that it will not take a hot pan, it cannot be repaired if it chips, and water at a seam or around the sink will eventually swell the substrate. Knowing those honestly is what makes it a good choice rather than a regret.',
    ],
    localFaqs: [
      {
        q: 'Is a laminate worktop a false economy?',
        a: 'Not with modern products. It will not take a hot pan, it cannot be repaired if chipped, and water at a seam will swell the substrate — but it frees budget for cabinets, which matter more daily.',
      },
      {
        q: 'Where should the money go instead?',
        a: 'Cabinet construction and drawer hardware. You touch those every day; the worktop you mostly look at.',
      },
    ],
  },

  evanston: {
    intro:
      'Kitchen remodel in Evanston? Two people cooking needs a layout that allows it. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'Most kitchens are designed around one person working, and most households have two people in there at once at least sometimes. That means a second prep zone away from the hob, an aisle wide enough to pass behind someone, and the fridge positioned so getting a drink does not cross the cooking path. It costs nothing at design stage and it is the difference between a kitchen that works and one people take turns in.',
    ],
    localFaqs: [
      {
        q: 'Can a kitchen work for two people at once?',
        a: 'With a second prep zone away from the hob, an aisle wide enough to pass behind someone, and the fridge outside the cooking path. It costs nothing at design stage.',
      },
      {
        q: 'Does that need a big kitchen?',
        a: 'Less than people think — it is about where things are rather than how much room there is. A well-planned galley handles two people better than a badly planned large kitchen.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Kitchen remodel in South Cumminsville? Moving the sink is where cost climbs. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'The single biggest cost driver in a kitchen layout change is whether the sink moves — it needs a drain with fall to the stack and a vent within a permitted distance, and on a ground floor over a slab that can mean cutting concrete. Keeping the sink where it is while changing everything else around it saves a substantial amount, and we will show you both plans so the difference is a choice rather than a surprise.',
    ],
    localFaqs: [
      {
        q: 'Why is moving the sink expensive?',
        a: 'It needs drain fall to the stack and a vent within a permitted distance — and on a ground floor over a slab that can mean cutting concrete. It is the biggest cost driver in a layout change.',
      },
      {
        q: 'Can we change the layout without moving it?',
        a: 'Frequently, and it saves a substantial amount. We will draw both so the difference is a choice rather than a surprise.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Kitchen remodel in English Woods? Where the trades go in order is what keeps a kitchen on time. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'A kitchen involves demolition, plumbing, electrical, drywall, flooring, cabinetry, stone fabrication and finish carpentry, and every one waits on the last. A single trade running late pushes everything behind it. Because we use our own installers and one project manager rather than coordinating separate subcontractors around their own schedules, that chain holds — which is most of why the dates in a contract mean something.',
    ],
    localFaqs: [
      {
        q: 'Why do kitchen projects overrun?',
        a: 'Because every trade waits on the last, so one running late pushes everything behind it. Using our own installers with one project manager is most of why our chain holds.',
      },
      {
        q: 'Do you subcontract any of it?',
        a: 'No. Our own team from demolition through final trim, which is also why we can back the work with a lifetime workmanship warranty.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Kitchen remodel in North Avondale? A large kitchen needs zones, not just space. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'A big kitchen can be worse to work in than a small one if everything is spread along the walls — you end up walking. What makes a large room work is zoning: the cooking zone tight enough that hob, sink and fridge are a few steps apart, with the extra space given to a separate prep area, a baking station or somewhere for people to sit that is not in the way. Space is only an advantage if it is organised.',
    ],
    localFaqs: [
      {
        q: 'Is a bigger kitchen always better?',
        a: 'Not if everything is spread along the walls — you end up walking. What makes a large room work is a tight cooking zone with the extra space given to prep, baking or seating out of the way.',
      },
      {
        q: 'Do we need two sinks?',
        a: 'In a genuinely large kitchen with a second prep zone, it earns its place. In a normal one it usually costs worktop you would rather have.',
      },
    ],
  },

  millvale: {
    intro:
      'Kitchen remodel in Millvale? In a tight kitchen, appliance doors decide the plan. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'The constraint people miss in a small kitchen is not the footprint but what happens when doors open. An oven door, a dishwasher door and a fridge door each need clear swing space, and in a compact room they can collide with each other or block the only route through. Drawing every door in its open position at design stage is a ten-minute exercise that prevents the most common small-kitchen mistake.',
    ],
    localFaqs: [
      {
        q: 'What goes wrong in small kitchen layouts?',
        a: 'Appliance doors — an oven, dishwasher and fridge each need clear swing space, and in a tight room they collide or block the only route through. We draw every door open at design stage.',
      },
      {
        q: 'Are there appliances that help?',
        a: 'Slimmer dishwashers, a fridge with a reversible door hinge, and a side-opening oven all solve specific clashes. It is worth choosing them for the room rather than the showroom.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Kitchen remodel in Paddock Hills? Cabinet colour is the decision hardest to reverse. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Almost everything in a kitchen can be changed later — hardware, lighting, splashback, even the worktop with some disruption. The cabinets are the exception, and their colour is what dates a kitchen most visibly. That argues for holding a strong colour to an island or a lower run and keeping the main body somewhere you will still be comfortable in a decade, with the personality in the parts that are cheap to change.',
    ],
    localFaqs: [
      {
        q: 'What is hardest to change later?',
        a: 'The cabinets, and their colour most of all. Hardware, lighting and splashback are cheap to change; a full cabinet set is not.',
      },
      {
        q: 'Can we have a bold colour anywhere?',
        a: 'An island or a lower run carries it well while the main body stays neutral. That way the personality is in the part you could repaint or replace.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Kitchen remodel in Spring Grove Village? A kitchen sink drain finds an old lateral fast. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'Kitchen waste is harder on a drain line than anything else in the house — grease, food solids and a dishwasher discharging hot water at pressure. On a street with mature trees over old clay or cast-iron laterals, that is exactly what exposes a partly blocked run. Where there is any history of slow drains, establishing the cause before a new kitchen goes in is far better than diagnosing it afterwards.',
    ],
    localFaqs: [
      {
        q: 'Is kitchen waste harder on drains?',
        a: 'Considerably — grease, food solids and a dishwasher discharging hot water at pressure. On old laterals under mature trees, that is what exposes a partly blocked run.',
      },
      {
        q: 'Should we check the line first?',
        a: 'Where there is any history of slow drains, yes. We would rather flag it and recommend a camera inspection than install onto a problem.',
      },
    ],
  },

  linwood: {
    intro:
      'Kitchen remodel in Linwood? Cabinets on an exterior wall want the cavity checked. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'Once wall cabinets go up, the wall behind them is inaccessible for the life of the kitchen. If that is an uninsulated exterior wall, this is the only practical moment to insulate it — and doing so stops the cold spot that causes condensation inside a cabinet against an outside wall. It is a small addition while the wall is open and effectively impossible afterwards.',
    ],
    localFaqs: [
      {
        q: 'Should we insulate behind the cabinets?',
        a: 'On an exterior wall, yes — once cabinets go up that wall is inaccessible for the life of the kitchen, and a cold spot causes condensation inside the cupboard.',
      },
      {
        q: 'Is it expensive?',
        a: 'Modest while the wall is open, and effectively impossible afterwards without taking the kitchen off the wall.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Kitchen remodel in Bond Hill? Plan how the plumbing gets serviced later. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'Everything under a kitchen sink eventually needs attention — the trap, the disposal, the dishwasher connection, the isolation valves. Whether that is a twenty-minute job or an awkward one was decided when the cabinet went in. Accessible isolation valves, a sensible arrangement in the cabinet rather than a tangle, and a base that can be reached without emptying three drawers are all free at installation and valuable for two decades.',
    ],
    localFaqs: [
      {
        q: 'Will the plumbing under the sink be serviceable?',
        a: 'Yes — accessible isolation valves and a sensible arrangement in the cabinet rather than a tangle. It costs nothing at installation and matters every time something needs attention.',
      },
      {
        q: 'Should there be a shutoff just for the kitchen?',
        a: 'The sink and dishwasher get their own isolation valves as standard. It turns a leak into a ten-second job rather than a trip to the basement.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Kitchen remodel in Villages of Roll Hill? Mostly apartments, so this goes through the owner. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'Being straight about this: in a community of rented apartments, a kitchen is commissioned by the owner or management company rather than the resident. If you rent here, the route is your landlord — and we are happy to speak to them. For owners, a single specification across units is cheaper per kitchen and far simpler when a cabinet door or an appliance needs replacing years later.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can I have the kitchen replaced?',
        a: 'It has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'We manage the building — can units be done together?',
        a: 'Yes, and it is cheaper per kitchen. A single specification also means a replacement door or appliance years later is a part you already know.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Kitchen remodel in East Westwood? Sometimes cabinets and worktop alone is the right job. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'Where a layout works and the plumbing and electrics are sound, replacing cabinets and worktop in the same positions is a much smaller project than a full remodel — no permit implications from moved services, no drywall, no inspection wait. It is not the job with the biggest margin and it is frequently the sensible one, so we will tell you when your kitchen is a candidate.',
    ],
    localFaqs: [
      {
        q: 'Can we just replace cabinets and worktop?',
        a: 'Where the layout works and services are sound, yes — and it is a much smaller project with no moved plumbing, no drywall and no inspection wait. We will say when your kitchen is a candidate.',
      },
      {
        q: 'How much cheaper is that?',
        a: 'Substantially, because the trades involved drop away. The cabinets themselves cost what they cost; almost everything around them does not.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Kitchen remodel in Western Hills? Wall cabinets to the ceiling change a room. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Standard wall cabinets stop short of the ceiling, leaving a soffit or a dust-collecting gap above. Taking them to the ceiling adds a full shelf of storage for occasional things, removes the cleaning problem, and makes the room read as taller. The upper shelf needs a step to reach, which is the honest trade — and in a house where storage is short, it is one worth making.',
    ],
    localFaqs: [
      {
        q: 'Should cabinets go to the ceiling?',
        a: 'It adds a full shelf of storage, removes the dust-collecting gap above and makes the room read taller. The trade is that the top shelf needs a step to reach.',
      },
      {
        q: 'What about an existing soffit?',
        a: 'Frequently it can come out, though sometimes it hides ducting or pipework. We open it and look before promising the taller cabinets.',
      },
    ],
  },

  california: {
    intro:
      'Kitchen remodel in California? On low ground, what the cabinets sit on matters. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'In a house that has taken water, base cabinets are the first casualty — particleboard carcasses wick moisture upward and swell irreversibly, while plywood boxes on adjustable legs can often be dried and saved. That distinction costs a modest amount at specification and decides whether a future event means new doors or a new kitchen. Worth considering deliberately rather than by default here.',
    ],
    localFaqs: [
      {
        q: 'What happens to cabinets if water gets in?',
        a: 'Particleboard carcasses wick moisture and swell irreversibly. Plywood boxes on adjustable legs can often be dried and saved — which on this ground is worth the modest extra.',
      },
      {
        q: 'Is that really a consideration?',
        a: 'On ground with a history, we think so. It is the difference between replacing doors and replacing a kitchen.',
      },
    ],
  },

  carthage: {
    intro:
      'Kitchen remodel in Carthage? Paint and hardware buy time on a sound kitchen. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Where the boxes are solid and the layout works but the budget is not there this year, painting the doors properly, changing the hardware and updating the lighting produces a genuine improvement for a small fraction of a remodel. It is not what a remodeler makes money on and it is sometimes the right advice — and it does not waste anything, since none of it is lost when you do the full job later.',
    ],
    localFaqs: [
      {
        q: 'Is painting cabinets worth doing?',
        a: 'Where the boxes are solid and the layout works, it is a genuine improvement for a fraction of a remodel — properly prepared and sprayed rather than brushed. It buys several years.',
      },
      {
        q: 'Does it waste money if we remodel later?',
        a: 'Very little is lost — the hardware and lighting carry over, and you have had a better kitchen in the meantime. We would rather say that than push the larger job.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Kitchen remodel in Winton Hills? Three things decide whether a kitchen lasts. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'Cabinet box construction, drawer hardware and how well the units were levelled and fixed to the wall. Those three decide whether a kitchen is solid in fifteen years, and none of them is what a showroom shows you. A beautiful door on a stapled particleboard box with builder-grade runners will sag and stick; a plain door on a well-built box will not. It is worth asking about all three specifically.',
    ],
    localFaqs: [
      {
        q: 'What decides whether a kitchen lasts?',
        a: 'Box construction, drawer hardware and how well the units were levelled and fixed. A beautiful door on a stapled particleboard box with poor runners will sag; a plain door on a good box will not.',
      },
      {
        q: 'How do we compare two quotes?',
        a: 'Ask about those three specifically — box material and joinery, the drawer runner brand and rating, and installation method. That is where a lower number usually comes from.',
      },
    ],
  },

  roselawn: {
    intro:
      'Kitchen remodel in Roselawn? Mid-century kitchens are usually straightforward to work in. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'Houses of this era generally have square walls, plywood or board subfloors in known condition, and plumbing that is copper or accessible from a basement below. That makes cabinet installation predictable — units that sit level against a straight wall without endless scribing and packing. It is unglamorous and it takes real time and cost out of a kitchen compared with the older neighbourhoods.',
    ],
    localFaqs: [
      {
        q: 'Are mid-century houses easier for kitchens?',
        a: 'Generally — square walls, known subfloor and plumbing accessible from a basement. Cabinets sit level without endless scribing, which takes real time and cost out of the job.',
      },
      {
        q: 'Will the electrical need upgrading?',
        a: 'Frequently some, since kitchens of this era predate current circuit requirements. We check panel capacity at survey and show any upgrade as its own line.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Kitchen remodel in Mount Airy? A split-level kitchen has a landing to negotiate. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'Split-levels put the kitchen half a storey up with a turning stair between it and the front door, and that is the route every cabinet, appliance and stone slab has to travel. It is entirely manageable and it has to be measured against the actual unit sizes before ordering — particularly the worktop, since a slab cannot be tilted round a turn the way a cabinet box can.',
    ],
    localFaqs: [
      {
        q: 'Is a split-level harder to deliver to?',
        a: 'The turning stair is the constraint, particularly for stone worktops which cannot be tilted round a turn. We measure the route against actual slab and unit sizes before ordering.',
      },
      {
        q: 'What if a slab will not make the turn?',
        a: 'The template is planned with a seam that suits the access. It is why the fabricator templates on site rather than working from a drawing.',
      },
    ],
  },

  hartwell: {
    intro:
      'Kitchen remodel in Hartwell? A separate dining room is worth thinking about before opening up. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Opening a kitchen into the dining room is the default request and it is not automatically right. In a house with defined rooms and original detail, losing the dining room can cost the house something a larger kitchen does not repay — and the cooking noise, smell and mess become part of the living space permanently. A widened opening rather than a full removal frequently gives most of the benefit and keeps both rooms.',
    ],
    localFaqs: [
      {
        q: 'Should we open the kitchen into the dining room?',
        a: 'Not automatically. In a house with defined rooms and original detail, losing the dining room can cost more than the larger kitchen repays — and cooking noise and mess become permanent.',
      },
      {
        q: 'What is the middle option?',
        a: 'A widened opening rather than full removal. It gives most of the connection and light while keeping both rooms usable, and it is usually a smaller structural job.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Kitchen remodel in Kennedy Heights? Decide where things live before the cabinets are ordered. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'The kitchens that work are the ones where somebody thought about what goes where — plates near the dishwasher, pans near the hob, the everyday glasses somewhere a child can reach, spices beside where you cook rather than across the room. That is a conversation about how you actually use a kitchen, and it decides drawer depths and cabinet types at order stage. It cannot be adjusted afterwards.',
    ],
    localFaqs: [
      {
        q: 'Why plan where things will live?',
        a: 'Because it decides drawer depths and cabinet types at order stage — plates near the dishwasher, pans near the hob, spices where you cook. None of that can be adjusted afterwards.',
      },
      {
        q: 'Do you help with that?',
        a: 'It is part of the design conversation rather than an extra. We ask how you actually cook before drawing anything.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Kitchen remodel in St. Bernard? The village inspects at rough-in, before walls close. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'A kitchen is inspected twice — once at rough-in with the plumbing and electrical exposed, and again at completion. The first is the one that governs the programme, because drywall cannot go on until it passes. Here that runs through the City of St. Bernard rather than Cincinnati, and we schedule those inspections into the programme rather than treating them as an interruption.',
    ],
    localFaqs: [
      {
        q: 'When does inspection happen?',
        a: 'At rough-in with plumbing and electrical exposed, and again at completion. The first governs the programme because drywall cannot go on until it passes.',
      },
      {
        q: 'Who inspects here?',
        a: 'The City of St. Bernard — it is a separate municipality even though Cincinnati surrounds it entirely.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Kitchen remodel in Elmwood Place? A small kitchen is not proportionally cheaper. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Half the cabinets does not mean half the price. Every trade still comes — plumber, electrician, drywall, flooring, fabricator — and each has a minimum. The materials scale down; the labour and the mobilisation largely do not. What that means practically is that in a small kitchen it is worth buying better cabinets, because the upgrade costs proportionally less against a total that is dominated by fixed costs.',
    ],
    localFaqs: [
      {
        q: 'Is a small kitchen much cheaper?',
        a: 'Materials scale down; the trades and mobilisation largely do not. Every trade still comes and each has a minimum.',
      },
      {
        q: 'So what should we do differently?',
        a: 'Buy better cabinets. In a small kitchen the upgrade costs proportionally less against a total dominated by fixed costs, so it is where the money goes furthest.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Kitchen remodel in Delhi Hills? A walkout level can take a second kitchen. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope often have a walkout lower level, and where a family wants space for a parent or an older child, a second kitchen down there is genuinely feasible — drainage below the slab is the question, along with ventilation and whether a second cooking appliance is permitted under the local requirements. It is a bigger project than a refit and worth pricing properly rather than dismissing.',
    ],
    localFaqs: [
      {
        q: 'Can we put a kitchen in the lower level?',
        a: 'On a walkout, frequently — the questions are drainage below the slab, ventilation to outside, and what the local requirements permit for a second cooking appliance.',
      },
      {
        q: 'Does that make it a separate dwelling?',
        a: 'That depends on the jurisdiction and how it is arranged, and it has real implications. We establish it before designing rather than after.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Kitchen remodel in Golf Manor? The village permits and inspects this work. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'A kitchen is firmly a permitted job with a rough-in inspection before walls close, and here that runs through Golf Manor rather than the city your postal address suggests. We confirm and file before scheduling. The compact lots also mean cabinet and appliance deliveries need access arranged in advance rather than a lorry finding somewhere on the day.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm and file before scheduling.',
      },
      {
        q: 'Is delivery access a problem on these lots?',
        a: 'It is a planning matter. Cabinets and appliances arrive on a lorry, so we arrange access in advance rather than hoping on the day.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Kitchen remodel in Fairfax? A splashback is where three trades have to agree. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'The strip between worktop and wall cabinets carries the outlets, meets the underside of the cabinets, and finishes against the worktop — so the electrician, the cabinet fitter and the tiler all have a say in it. When it goes wrong it is because none of them coordinated: an outlet mid-pattern, a tile course that dies awkwardly under a cabinet, or a gap at the worktop filled with sealant. Planning it as one detail is what avoids all three.',
    ],
    localFaqs: [
      {
        q: 'Why do splashbacks often look awkward?',
        a: 'Because the electrician, cabinet fitter and tiler each affect it and rarely coordinate — an outlet mid-pattern, a course dying under a cabinet, or a sealant-filled gap at the worktop.',
      },
      {
        q: 'Full height or just above the worktop?',
        a: 'Full height between worktop and cabinets is standard and easiest to clean. Behind a hob it is worth taking to the hood, which is where the mess actually lands.',
      },
    ],
  },

  mack: {
    intro:
      'Kitchen remodel in Mack? Living without a kitchen for a month needs planning. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'Three to five weeks is long enough that improvising does not work. A temporary kitchen elsewhere — fridge relocated, microwave, kettle, and access to a sink that is not the bathroom basin if possible — makes a real difference to how the month feels. Households with children feel it most. We set that up on day one and we are honest that the takeaway budget is a real line item nobody quotes.',
    ],
    localFaqs: [
      {
        q: 'How do families manage for a month?',
        a: 'A temporary setup elsewhere — fridge relocated, microwave, kettle, and a sink that is not the bathroom basin if possible. We set it up on day one rather than leaving you to it.',
      },
      {
        q: 'Can it be done faster?',
        a: 'Only by compressing stages that need curing or inspection, which we will not do. What we can do is give you an accurate programme so you can plan around it.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Kitchen remodel in Monfort Heights? A peninsula does most of what an island does. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Kitchens in this housing are frequently just short of the width an island needs, and squeezing one in produces aisles that fight you daily. A peninsula attached at one end gives the same extra worktop, the same seating, and often the same sense of separation from the dining space — while needing clearance on two sides instead of four. It is the answer more often than people expect and it is rarely the one they arrive asking for.',
    ],
    localFaqs: [
      {
        q: 'Island or peninsula?',
        a: 'A peninsula gives the same worktop and seating while needing clearance on two sides rather than four. In kitchens just short of island width it is the answer more often than people expect.',
      },
      {
        q: 'Does a peninsula feel like a compromise?',
        a: 'Less than an island with 36-inch aisles does. We will draw both to scale so you can see the actual clearances rather than deciding from a photograph.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Kitchen remodel in Bridgetown? Choose the worktop for how you actually cook. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Worktop choice is usually made on looks and lived with on behaviour. Quartz never needs sealing and will mark from a hot pan. Granite takes heat and needs sealing. Butcher block is warm and repairable and hates standing water. Solid surface can be sanded and scratches more easily. None is best — the question is which failure mode you can live with, and that depends on how your household cooks.',
    ],
    localFaqs: [
      {
        q: 'Which worktop is best?',
        a: 'None of them universally — the question is which failure mode suits you. Quartz marks from heat, granite needs sealing, butcher block hates standing water, solid surface scratches but sands out.',
      },
      {
        q: 'Which is lowest maintenance?',
        a: 'Quartz, by a clear margin — no sealing ever. Just keep hot pans off it, which is the one thing it genuinely will not tolerate.',
      },
    ],
  },

  finneytown: {
    intro:
      'Kitchen remodel in Finneytown? Here is the week-by-week programme. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth setting out plainly, because a kitchen is the longest job we do in an occupied house. Week one: protection, temporary kitchen, demolition. Week two: rough plumbing and electrical, then inspection. Week three: drywall, paint, flooring. Week four: cabinets set and levelled, then countertop templating. Weeks five to six: fabrication, then worktop, splashback, appliances and final trim.',
    ],
    localFaqs: [
      {
        q: 'What is the week-by-week schedule?',
        a: 'Protection and demolition, then rough plumbing and electrical with inspection, then drywall, paint and flooring, then cabinets and templating, then fabrication and final fit.',
      },
      {
        q: 'Where does it usually slip?',
        a: 'Waiting on an inspection, or a delayed cabinet delivery. We schedule inspections into the programme and do not start until cabinets are in our warehouse.',
      },
    ],
  },

  amberley: {
    intro:
      'Kitchen remodel in Amberley Village? A large kitchen justifies a second dishwasher. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'In a household that entertains, the appliances that earn their place are not the showiest — a second dishwasher, a beverage fridge outside the cooking zone so guests are not in the way, and a warming drawer. Each needs its own circuit and its own cabinet allowance, decided at design. A double oven is worth it if you genuinely cook two things at different temperatures and is otherwise a large expense doing one job.',
    ],
    localFaqs: [
      {
        q: 'Is a second dishwasher worth it?',
        a: 'In a household that entertains, more than most upgrades — it halves the clearing-up bottleneck. It needs its own circuit and cabinet allowance, decided at design stage.',
      },
      {
        q: 'What about a double oven?',
        a: 'Worth it if you genuinely cook two things at different temperatures. Otherwise it is a large expense doing one job, and we will say so.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Kitchen remodel in Arlington Heights? A little preparation makes the design visit count. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Since we travel to reach the valley villages, one visit should do the work of two. Access to the kitchen and to whatever is below it lets us see the plumbing run. Knowing where the electrical panel is and whether it has spare capacity matters. And a rough sense of what frustrates you about the current kitchen is worth more than a folder of photographs — it is what a good layout is actually built from.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready?',
        a: 'Access to the kitchen and below it, the location of the electrical panel, and a sense of what frustrates you about the current kitchen. That last one is what a good layout is built from.',
      },
      {
        q: 'Should we have chosen anything beforehand?',
        a: 'Appliances if you have strong views, since cabinets are built to them. Everything else can be decided together — and we would rather you did not commit before seeing the layout.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Kitchen remodel in North College Hill? Kitchen noise carries in a closely built house. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'A modern kitchen is noisier than the one it replaces — a powerful extractor, a disposal, and a dishwasher running at night. In a closely built house with bedrooms above or next door, those are worth choosing on their published noise ratings rather than ignoring, and insulating the wall behind a dishwasher is a cheap improvement while it is open. A quieter dishwasher costs a little more and gets noticed daily.',
    ],
    localFaqs: [
      {
        q: 'Are modern kitchens noisier?',
        a: 'A powerful extractor, a disposal and a night-running dishwasher all add noise. All three have published ratings worth reading, and insulating behind the dishwasher is cheap while the wall is open.',
      },
      {
        q: 'Is a quieter dishwasher worth the extra?',
        a: 'In an open-plan or closely built house, yes — it is the appliance that runs while you are in the room. It is one of the better small upgrades.',
      },
    ],
  },

  newtown: {
    intro:
      'Kitchen remodel in Newtown? A crawl space makes plumbing changes far easier. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'For a kitchen, a crawl space beneath is genuinely good news. Moving a sink means running a new drain with fall and a vent, and doing that from underneath is straightforward where doing it through a slab means cutting concrete. It widens the layouts available considerably and takes real cost out of any plan that relocates the sink — which is the most expensive single change in a kitchen.',
    ],
    localFaqs: [
      {
        q: 'Does a crawl space help with a kitchen?',
        a: 'Considerably. Moving a sink means new drain and vent runs, and doing that from underneath is far cheaper than cutting a slab — which widens the layouts available to you.',
      },
      {
        q: 'What do you check down there?',
        a: 'Moisture, ventilation and the joist condition under the kitchen — particularly where stone worktops and a full cabinet run will load one wall.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Kitchen remodel in Turpin Hills? A pantry is worth more than another run of cabinets. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Where a kitchen adjoins a hall closet, a laundry or unused space under a stair, converting that into a pantry frequently does more than extending the cabinet run. Bulk storage out of the kitchen proper means the working cabinets hold what you actually use daily, and the room stays uncluttered. It costs less than cabinetry and it is the change people notice most in how the kitchen lives.',
    ],
    localFaqs: [
      {
        q: 'Is a pantry better than more cabinets?',
        a: 'Frequently. Bulk storage out of the kitchen proper means the working cabinets hold what you use daily, and it costs less than an equivalent run of cabinetry.',
      },
      {
        q: 'Where does one usually fit?',
        a: 'A hall closet, a laundry corner or unused space under a stair adjoining the kitchen. We look at what is on the other side of every wall before assuming the footprint is fixed.',
      },
    ],
  },

  silverton: {
    intro:
      'Kitchen remodel in Silverton? Flooring under the cabinets or up to them — decide early. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'Running the floor wall to wall before cabinets go in costs more material and makes any future layout change straightforward. Stopping at the cabinet line saves material and means a future change exposes bare subfloor — and a dishwasher that has to come out sits in a recess. There is a genuine case for both, and it is a decision worth making deliberately rather than however the flooring contractor prefers.',
    ],
    localFaqs: [
      {
        q: 'Should the floor go under the cabinets?',
        a: 'Wall to wall costs more material and makes any future change straightforward. Stopping at the cabinet line saves material but leaves bare subfloor if anything moves — and recesses an appliance.',
      },
      {
        q: 'Which do you recommend?',
        a: 'Under the cabinets in most kitchens, and particularly under the dishwasher space so it can be pulled out and replaced without a step.',
      },
    ],
  },

  lockland: {
    intro:
      'Kitchen remodel in Lockland? A small kitchen still needs the same trades. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The kitchens in these worker cottages are compact, and the honest position is that the total is dominated by fixed costs rather than square footage. Every trade still attends, permits and inspections still apply, and the mobilisation is the same. What that means is the sensible advice here is a tight, well-planned layout with good cabinets rather than a large amount of mediocre cabinetry.',
    ],
    localFaqs: [
      {
        q: 'Is a small kitchen much cheaper?',
        a: 'Less than proportionally. Every trade still attends, permits still apply and the mobilisation is the same — the materials scale down, the rest largely does not.',
      },
      {
        q: 'What is the best approach here?',
        a: 'A tight, well-planned layout with good cabinets rather than a large amount of mediocre cabinetry. In a small room the quality is what you notice.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Kitchen remodel in Groesbeck? See the cabinet door and the worktop together, in the room. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Cabinet and worktop samples chosen separately under showroom lighting frequently disagree in the actual kitchen — a warm white door against a cool grey quartz reads as a mismatch that neither showed alone. Holding both together in the room, in daylight and again in the evening, settles it. It costs nothing and it prevents the one mistake that is expensive to reverse.',
    ],
    localFaqs: [
      {
        q: 'Can we see samples in our own kitchen?',
        a: 'Yes, and we would insist on it — cabinet and worktop samples chosen separately under showroom light frequently disagree in the room. Look at them together in daylight and evening.',
      },
      {
        q: 'How different can it look?',
        a: 'Enough to matter. Warm and cool whites in particular read completely differently against each other and under different light.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Kitchen remodel in Mount Healthy? Getting the kitchen out of a back corner may be the real project. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'Older houses here frequently put the kitchen in the smallest, darkest room at the back because that is where service rooms went. Refitting it improves the kitchen; relocating it into a better-lit adjoining room can change the house. The second is a much bigger project involving plumbing runs and structure, and it is worth pricing alongside the first rather than assuming the position is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can the kitchen move to a different room?',
        a: 'Sometimes, where a better-lit adjoining room exists and the plumbing can reach. It is a much bigger project than a refit and occasionally the one that changes the house.',
      },
      {
        q: 'How much more does that cost?',
        a: 'Substantially, because it means new drain, vent and supply runs plus making good the old room. We price both so you can compare rather than guess.',
      },
    ],
  },

  reading: {
    intro:
      'Kitchen remodel in Reading? A laundry in the kitchen changes the plan. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'Where the washing machine lives in the kitchen — common in these houses — it takes a cabinet bay, its own circuit, and a drain that has to cope with a machine discharging alongside a dishwasher. It also adds noise and moisture to a room that already has both. Where there is anywhere else it could sensibly go, moving it frees a bay and improves the kitchen more than most upgrades would.',
    ],
    localFaqs: [
      {
        q: 'Should the washing machine stay in the kitchen?',
        a: 'If there is anywhere else it can sensibly go, moving it frees a cabinet bay and removes noise and moisture from a room that has enough of both. It is worth pricing.',
      },
      {
        q: 'Can the drain cope with both?',
        a: 'It has to be checked — a washer and a dishwasher discharging into the same run is what finds an undersized line. We look at it before designing.',
      },
    ],
  },

  dent: {
    intro:
      'Kitchen remodel in Dent? Where the bin goes is a real design decision. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'The bin is the thing every kitchen designer treats as an afterthought and every household uses twenty times a day. A pull-out unit immediately beside the prep area — not by the door, not across the room — with separate compartments for recycling, is a small line on a cabinet order and one of the changes people mention most afterwards. Deciding it late means it goes wherever there is a gap.',
    ],
    localFaqs: [
      {
        q: 'Where should the bin go?',
        a: 'In a pull-out immediately beside the prep area, not by the door or across the room. It is used twenty times a day and it is the thing most often left to wherever there is a gap.',
      },
      {
        q: 'Is a recycling separator worth it?',
        a: 'If your household recycles, yes — a divided pull-out is far more likely to be used than a second bin somewhere else. It costs very little on the cabinet order.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Kitchen remodel in Deer Park? An accessible kitchen is mostly about heights and reach. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Where somebody has limited mobility, the changes that matter are unglamorous: a section of lowered worktop, drawers rather than doors throughout so nothing needs reaching into, a wall oven at a height that avoids bending over a hot door, a shallow sink with the drain to the back, and lever taps. None of it looks specialised, all of it has to be decided at cabinet order, and it makes the difference between usable and not.',
    ],
    localFaqs: [
      {
        q: 'What makes a kitchen accessible?',
        a: 'A lowered worktop section, drawers rather than doors throughout, a wall oven at a sensible height, a shallow sink with a rear drain and lever taps. None of it looks specialised.',
      },
      {
        q: 'Can it be adapted later?',
        a: 'Some of it, expensively. Worktop heights and drawer configurations are cabinet-order decisions, so they are far better made now if the need is foreseeable.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Kitchen remodel in Terrace Park? Undercabinet lighting is the upgrade people rate most. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Of everything we install, properly specified undercabinet lighting is what clients mention most a year later — because it is the only light that puts the worktop out of your own shadow. What matters is a continuous run rather than pucks that pool, a warm colour temperature that suits the room, and a dimmer. All of it is wired before the cabinets go on, which makes it a design decision rather than an accessory.',
    ],
    localFaqs: [
      {
        q: 'Is undercabinet lighting worth it?',
        a: 'It is the upgrade clients mention most a year later — the only light that puts the worktop out of your own shadow. A continuous run rather than pucks, warm, and on a dimmer.',
      },
      {
        q: 'Can it be added afterwards?',
        a: 'Awkwardly and visibly. It is wired before the cabinets go on, which makes it a design decision rather than something to add later.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Kitchen remodel in Dry Run? A fridge and a dishwasher both want leak protection. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'The two most common kitchen water incidents are a fridge ice-maker line and a dishwasher supply connection, and both fail slowly behind an appliance nobody moves. Accessible isolation valves for each, a braided stainless supply rather than plastic tubing, and a leak sensor under the dishwasher are all inexpensive at installation. Over a finished basement they are worth more than most visible upgrades.',
    ],
    localFaqs: [
      {
        q: 'What usually leaks in a kitchen?',
        a: 'A fridge ice-maker line or a dishwasher supply connection, both failing slowly behind an appliance nobody moves. Braided stainless supplies and accessible isolation valves address both cheaply.',
      },
      {
        q: 'Are leak sensors worth fitting?',
        a: 'Over a finished basement, we think so. They catch the slow failure rather than the dramatic one, which is the kind that does real damage.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Kitchen remodel in White Oak? Cabinet specifications tell you more than the door does. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Two cabinet sets can look identical and be built completely differently. What separates them is box material — plywood versus particleboard — how the joints are made, whether the back is a full panel or a thin sheet, whether drawers are dovetailed, and what the runners are rated to carry. None of that shows in a showroom door sample, and all of it decides whether the kitchen still works properly in fifteen years.',
    ],
    localFaqs: [
      {
        q: 'What should we ask about cabinet construction?',
        a: 'Box material, how the joints are made, whether the back is a full panel, whether drawers are dovetailed, and the runner load rating. None of it shows in a door sample.',
      },
      {
        q: 'Is plywood worth the upgrade over particleboard?',
        a: 'It holds screws better, tolerates a leak far better and does not sag under weight. In a kitchen expected to last twenty years, yes.',
      },
    ],
  },

  forestville: {
    intro:
      'Kitchen remodel in Forestville? Doing the flooring with the kitchen saves real money. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'The floor goes down before the cabinets, so a kitchen is the only sensible moment to replace it — doing it afterwards means working around fixed units and leaves a visible line at the cabinet edge. If the floor is likely to want replacing within a few years, it costs meaningfully less as part of this project than as a separate one, and the result is materially better.',
    ],
    localFaqs: [
      {
        q: 'Should we do the floor at the same time?',
        a: 'If it is likely to want replacing within a few years, yes — it goes down before the cabinets, so doing it later means working around fixed units and leaves a visible line.',
      },
      {
        q: 'Can it wait?',
        a: 'It can, and you will pay more for a worse result. That is the honest position rather than a sales one.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Kitchen remodel in Cherry Grove? The panel is what decides how much kitchen you can have. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'A modern kitchen wants dedicated circuits for the small-appliance counters, dishwasher, disposal, microwave, range and often a second oven — and older panels frequently have no spare spaces at all. That is a real constraint on what appliances are possible, not just a cost. We check capacity at survey before appliance choices are made, because discovering it afterwards means changing the specification or upgrading the service.',
    ],
    localFaqs: [
      {
        q: 'Will our panel support a new kitchen?',
        a: 'It has to be checked before appliance choices are made — a modern kitchen wants several dedicated circuits, and older panels frequently have no spare spaces at all.',
      },
      {
        q: 'What if it will not?',
        a: 'Either the panel is upgraded, shown as its own line, or the appliance specification changes. Better to know before you choose a range than after.',
      },
    ],
  },

  kenwood: {
    intro:
      'Kitchen remodel in Kenwood? In a large kitchen, plan the second cook’s route. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Large kitchens fail in a specific way: everyone ends up at the island and the actual cooking zone is crowded. What fixes it is designing the traffic route — where guests come in, where drinks are, where the person cooking works — so the two do not overlap. A beverage fridge and glasses at the far end of an island keeps people out of the cooking zone entirely, and it costs nothing to plan.',
    ],
    localFaqs: [
      {
        q: 'Why does everyone end up in the way?',
        a: 'Because the traffic route and the cooking zone were not separated at design stage. Drinks and glasses at the far end of an island keeps people out of the working area entirely.',
      },
      {
        q: 'Is a beverage fridge worth it?',
        a: 'In a household that entertains, it earns its place mostly by keeping guests out of the main fridge and the cooking zone. It needs its own circuit and cabinet allowance.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Kitchen remodel in Lincoln Heights? The village permits it, and we quote to the house. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical points. It is its own municipality, so permits and inspections come through Lincoln Heights rather than the county, confirmed before scheduling. And the housing is modest, so the sensible specification is quality stock cabinets with good hardware and a durable worktop rather than custom cabinetry — the money is better in the box construction than in the door style, and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits here?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'How much should we spend?',
        a: 'Quality stock cabinets with good hardware and a durable worktop. The money is better in box construction than in door style, and it lasts longer for the same outlay.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Kitchen remodel in Dillonvale? Filler strips are where a cabinet run meets reality. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Cabinets come in fixed widths and rooms do not, so every run ends with a gap to close. Handled well, fillers are scribed to the wall and sized so they read as part of the design. Handled badly, you get a four-inch strip of bare panel beside the fridge. Where the fillers fall is a layout decision made at design stage, and it is one of the clearest signs of whether a kitchen was planned or assembled.',
    ],
    localFaqs: [
      {
        q: 'What are filler strips and why do they matter?',
        a: 'Cabinets come in fixed widths and rooms do not, so every run ends with a gap. Where those fillers fall is a design decision, and it is one of the clearest signs of a planned kitchen.',
      },
      {
        q: 'Can they be avoided?',
        a: 'Not entirely, but they can be distributed sensibly or absorbed into a wider unit. What we avoid is a bare strip beside the fridge.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Kitchen remodel in Woodlawn? Ask how the cabinets will be fixed to the wall. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'A wall cabinet loaded with crockery is carrying real weight, and how it is fixed decides whether that stays on the wall. Into studs with appropriate fixings is the answer; into drywall with anchors is not, however confident the anchor packaging is. Where studs do not land conveniently, blocking goes in first. It is invisible, it takes a little longer, and it is the difference between secure and eventually not.',
    ],
    localFaqs: [
      {
        q: 'How are wall cabinets fixed?',
        a: 'Into studs with appropriate fixings, with blocking added first where studs do not land conveniently. Drywall anchors are not an answer for a cabinet loaded with crockery.',
      },
      {
        q: 'Does that take longer?',
        a: 'A little, and it is invisible afterwards — which is exactly why it is the sort of thing a rushed installation skips.',
      },
    ],
  },

  addyston: {
    intro:
      'Kitchen remodel in Addyston? If we open a wall and find a problem, here is what happens. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'A kitchen opens more of a house than any other job — walls, floor, ceiling and services all at once. Our price is fixed, and it holds because we investigate before quoting rather than after: opening a section of wall, looking at the panel, checking what is under the floor. Where genuinely concealed damage exists beyond what any inspection would find, we show you the photograph, the cost and the options before continuing.',
    ],
    localFaqs: [
      {
        q: 'What if you find something behind the walls?',
        a: 'We stop, photograph it and show you the cost and options before continuing. Most of what becomes a surprise elsewhere is found at our survey, because we investigate before quoting.',
      },
      {
        q: 'So the fixed price can move?',
        a: 'It holds for everything reasonably establishable beforehand, which is nearly all of it. Genuinely concealed damage is the exception, and we say so plainly rather than promising what nobody can.',
      },
    ],
  },

  greenhills: {
    intro:
      'Kitchen remodel in Greenhills? Built to one plan, so we know these kitchens. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because the town was built as a single scheme, the kitchens repeat from home to home — compact, with the same footprint and the same service positions. That is genuinely useful: we know which layouts work in the room, where the plumbing runs and what the realistic options are for opening up. The Landmark designation concerns the exterior, with a hood duct penetration the one detail worth raising early.',
    ],
    localFaqs: [
      {
        q: 'Do you know these kitchens already?',
        a: 'Yes — Greenhills was built as one scheme, so the kitchens repeat. We know which layouts work in the footprint and where the services run.',
      },
      {
        q: 'Does the historic designation affect the kitchen?',
        a: 'The interior is yours. A hood duct penetrating an exterior wall is visible, so that is worth raising early rather than at installation.',
      },
    ],
  },

  northbrook: {
    intro:
      'Kitchen remodel in Northbrook? A kitchen is weeks of dust — containment is not optional. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Kitchen demolition and drywall work generate the most dust of anything we do, and unlike a bathroom the room usually opens directly onto living space. A sealed barrier with a zipped access, negative air where the layout warrants it, and hard floor protection along the route go in on day one and are maintained for the duration. Over three to five weeks, maintaining it is what separates a contained job from a house you clean for a month.',
    ],
    localFaqs: [
      {
        q: 'How much dust does a kitchen make?',
        a: 'More than anything else we do, and the room usually opens onto living space. A sealed barrier with zipped access and floor protection goes in day one and is maintained throughout.',
      },
      {
        q: 'Is that extra?',
        a: 'Never. It is part of the job, and over three to five weeks maintaining it is what separates a contained project from a house you clean for a month.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Kitchen remodel in Indian Hill? On a well, the water affects appliances and fittings. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Where a house is on a private well, hard or iron-bearing water shortens the life of a dishwasher, marks a sink and stains fittings — and an ice-maker and a filtered tap both depend on it too. That makes treatment part of a kitchen conversation rather than a separate plumbing one, particularly where expensive appliances are being specified around water that will work against them.',
    ],
    localFaqs: [
      {
        q: 'Does well water affect kitchen appliances?',
        a: 'Hard or iron-bearing water shortens dishwasher life, marks sinks and stains fittings, and it affects any ice-maker or filtered tap. It belongs in the kitchen conversation rather than a separate one.',
      },
      {
        q: 'Should we treat the water first?',
        a: 'Where expensive appliances are being specified, it is worth doing before rather than after. We will give a straight view rather than selling equipment.',
      },
    ],
  },

  evendale: {
    intro:
      'Kitchen remodel in Evendale? Everything gets tested before we call it finished. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'The end of a kitchen is where corners get cut, because everything looks done. Before we hand over, every drawer and door is checked for alignment and soft-close operation, every appliance is run, the dishwasher is cycled with the connection watched, the disposal is run, every outlet is tested, the hood is checked for actual extraction rather than just noise, and the sink is filled and drained. That list takes an afternoon and it is the difference between finished and nearly finished.',
    ],
    localFaqs: [
      {
        q: 'What is checked before handover?',
        a: 'Every drawer and door for alignment and soft-close, every appliance run, the dishwasher cycled with the connection watched, outlets tested, the hood checked for real extraction, and the sink filled and drained.',
      },
      {
        q: 'What if something is not right?',
        a: 'It is put right before the invoice rather than after. The snagging visit exists to close a list, not to open one.',
      },
    ],
  },

  glendale: {
    intro:
      'Kitchen remodel in Glendale? A kitchen can be modern and belong to a Victorian house. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'The kitchens that work in these houses are not reproductions — they are modern in how they function and considered in proportion. Full-height wall cabinets sized to the ceiling, a freestanding-looking dresser element rather than an unbroken run, panel-ready appliances so the fridge is not the focal point, and hardware that suits the period. It is a design conversation with real lead times on the pieces that matter.',
    ],
    localFaqs: [
      {
        q: 'Can a modern kitchen suit a Victorian house?',
        a: 'Yes, and without reproduction detailing — proportion, a freestanding-looking dresser element rather than an unbroken run, panel-ready appliances and period-appropriate hardware do most of it.',
      },
      {
        q: 'Do those pieces take longer to source?',
        a: 'Frequently. We identify them at design stage and order first so the lead time runs alongside everything else rather than holding up the fit.',
      },
    ],
  },

  sharonville: {
    intro:
      'Kitchen remodel in Sharonville? Every decision settled up front is a delay avoided. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'A kitchen has the longest decision list of anything we build: layout, cabinet range, door style, colour, hardware, worktop material and edge, sink and tap, splashback, every appliance with its specification sheet, lighting, flooring, and paint. All of it settled before demolition with materials in our warehouse — which is what makes a fixed price and a five-week programme possible rather than aspirational.',
    ],
    localFaqs: [
      {
        q: 'What do we need to decide before you start?',
        a: 'Layout, cabinet range and door style, colour, hardware, worktop and edge, sink and tap, splashback, every appliance with its specification, lighting, flooring and paint.',
      },
      {
        q: 'What if we change our minds mid-job?',
        a: 'Before ordering, straightforward. After cabinets are in production or stone is templated, it costs real money and real time — which is why we settle it properly at the start.',
      },
    ],
  },

  northgate: {
    intro:
      'Kitchen remodel in Northgate? Sometimes the honest answer is a smaller job. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'Where a layout works and the boxes are sound, refacing or replacing doors with a new worktop delivers most of the visible change for a fraction of a full remodel. Where the layout genuinely does not work, no amount of new doors fixes it. The distinction is worth being honest about, including when it means quoting a much smaller job than the one we were asked for.',
    ],
    localFaqs: [
      {
        q: 'Do we need a full remodel?',
        a: 'Not if the layout works and the boxes are sound — new doors and a worktop deliver most of the visible change for a fraction of the cost. Where the layout does not work, doors will not fix it.',
      },
      {
        q: 'Will you tell us if the smaller job is enough?',
        a: 'Yes, including when it means quoting considerably less than we were asked for. That is more useful to you than the larger sale is to us.',
      },
    ],
  },

  springdale: {
    intro:
      'Kitchen remodel in Springdale? A busy family kitchen needs specifying for wear. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'A kitchen serving several people takes a decade of wear in a few years. What survives is a quartz worktop rather than a laminate edge that swells, drawer runners rated well above what they will carry, a hard-wearing door finish rather than a delicate painted one, and a sink that will not scratch visibly. It is not the glamorous specification and it is the one that still looks acceptable when the children have left.',
    ],
    localFaqs: [
      {
        q: 'What specification suits a busy family kitchen?',
        a: 'Quartz rather than a laminate edge that swells, drawer runners rated well above their load, a hard-wearing door finish rather than a delicate painted one, and a sink that will not scratch visibly.',
      },
      {
        q: 'Are painted cabinets a mistake with children?',
        a: 'Not necessarily, but a factory-applied catalysed finish holds up far better than a hand-painted one. It is worth knowing which you are being quoted.',
      },
    ],
  },

  miamitown: {
    intro:
      'Kitchen remodel in Miamitown? A long run out here, so we schedule it as a block. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'This is one of the further corners of our area and a kitchen is three to five weeks with multiple trades and deliveries — so it is scheduled as an uninterrupted block rather than squeezed between closer work. On low river-bottom ground we also establish the floor structure properly before a full cabinet run and stone worktop load one wall, and look at any crawl space while we are there.',
    ],
    localFaqs: [
      {
        q: 'Do you come out as far as Miamitown?',
        a: 'Yes, and we schedule it as an uninterrupted block because a kitchen is three to five weeks with multiple trades and deliveries. That is why the dates we write down hold.',
      },
      {
        q: 'Does the low ground matter for a kitchen?',
        a: 'It makes the floor structure worth establishing before a full cabinet run and stone worktop load one wall, and any crawl space worth looking at while we are there.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Kitchen remodel in Forest Park? Most of this runs while you are at work. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Over three to five weeks, most days need nothing from you. We work to agreed hours with a key or lockbox arrangement and a named project manager on site, and the house is secured before we leave each day. The exceptions are worth knowing: someone should be present for the countertop templating and for the final walkthrough, and available by phone on the day appliances arrive.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home?',
        a: 'Most days, no — agreed hours, a key or lockbox arrangement and a named project manager on site. Be present for countertop templating and the final walkthrough.',
      },
      {
        q: 'Who is actually in our house?',
        a: 'Our own installers — we do not subcontract. That is the same reason we can back the work with a lifetime workmanship warranty.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Kitchen remodel in Pleasant Run? Where the pet bowls and the door meet matters. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'Small household realities shape a kitchen more than showroom features do. Pet bowls that end up in a walkway, a back door that opens into the fridge, muddy boots arriving where food is prepared. A recessed bowl station in a toe-kick, a door swing reconsidered, or a small landing area by the back door are cheap at design stage and remove daily irritations that nobody thinks to mention until afterwards.',
    ],
    localFaqs: [
      {
        q: 'Can pet bowls be built in?',
        a: 'A recessed station in a toe-kick or a base unit keeps them out of the walkway entirely. It is a small line on a cabinet order and removes a daily irritation.',
      },
      {
        q: 'What about the back door?',
        a: 'Worth reviewing — a door opening into the fridge or straight into a prep area is common and usually solvable by reconsidering the swing or the layout around it.',
      },
    ],
  },

  cleves: {
    intro:
      'Kitchen remodel in Cleves? If the house has flooded, base cabinets tell the story. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'In a house that has taken water, the kitchen usually shows it first — particleboard carcasses that swelled and never recovered, a floor that lifted, and sometimes damp still in the wall behind. Fitting new cabinets over that seals the problem in. The sequence is open it, assess, remediate, dry, then build — and specifying plywood boxes on adjustable legs gives a better outcome next time.',
    ],
    localFaqs: [
      {
        q: 'Our house flooded — what does that mean for a kitchen?',
        a: 'The wall behind and the floor get opened and assessed first. Fitting new cabinets over damp structure seals the problem in rather than fixing it.',
      },
      {
        q: 'Can we specify for next time?',
        a: 'Plywood boxes on adjustable legs rather than particleboard carcasses sitting on the floor. It is a modest difference in cost and a large one in outcome.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Kitchen remodel in North Bend? A settled house means scribing every cabinet. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'In a house that has moved over a century, walls are not plumb and floors are not level — which means every cabinet is packed and scribed to fit rather than simply set against the wall. Done properly the run looks straight and the doors align; done quickly you get gaps at the wall and doors that do not line up across a run. It takes longer in these houses, and it is where the quality of an installation shows.',
    ],
    localFaqs: [
      {
        q: 'Why does installation take longer in an old house?',
        a: 'Walls are not plumb and floors are not level, so every cabinet is packed and scribed rather than set against the wall. Done quickly you get gaps and doors that do not line up.',
      },
      {
        q: 'Does that cost more?',
        a: 'It is more labour, and it appears on the quote rather than as a surprise. It is also the difference between a run that looks straight and one that does not.',
      },
    ],
  },

  loveland: {
    intro:
      'Kitchen remodel in Loveland? A back-door kitchen takes the brunt of an active household. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'Where the back door leads into the kitchen and the trail leads to the back door, the room becomes a thoroughfare — mud, bikes, bottles and gear all crossing where food is prepared. A landing zone by the door, a hard-wearing floor at that end and a sink that copes with rinsing kit are worth planning for. Otherwise it is the worktop nearest the door that takes all the wear.',
    ],
    localFaqs: [
      {
        q: 'Can the kitchen handle being a thoroughfare?',
        a: 'With a landing zone by the door, a hard-wearing floor at that end and a sink that copes with rinsing kit. Otherwise the worktop nearest the door takes all the wear.',
      },
      {
        q: 'Is a second sink worth it?',
        a: 'Where the back door genuinely brings mud and gear through, a utility sink nearby earns its place more than a second prep sink in an island would.',
      },
    ],
  },

  harrison: {
    intro:
      'Kitchen remodel in Harrison? On the state line, permitting depends which side. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'A kitchen is inspected for both plumbing and electrical at rough-in, and sitting on a state boundary means whether that runs under Ohio or Indiana rules depends on which side the property is on. The two processes differ in scheduling and requirements. It is a short conversation and it belongs before a start date is agreed rather than when an inspector is due.',
    ],
    localFaqs: [
      {
        q: 'Does the state line affect our project?',
        a: 'For permitting and inspection, yes — Ohio and Indiana run different processes, and a kitchen is inspected for both plumbing and electrical. We confirm which applies before scheduling.',
      },
      {
        q: 'Do you work on the Indiana side?',
        a: 'Yes. It is a different jurisdiction rather than a different job.',
      },
    ],
  },

  ludlow: {
    intro:
      'Kitchen remodel in Ludlow? A narrow Victorian kitchen has one good layout. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'These kitchens are long and narrow, and there is usually one layout that works: a single run with the appliances distributed along it, or a galley if the width genuinely allows. What does not work is trying to fit an island or a peninsula into a room that cannot spare the aisle. We draw the realistic options to scale rather than the aspirational one, which saves everybody time.',
    ],
    localFaqs: [
      {
        q: 'Can we have an island in a narrow Victorian kitchen?',
        a: 'Usually not — the aisle clearance simply is not there, and forcing it produces a kitchen that fights you daily. We draw the realistic options to scale rather than the aspirational one.',
      },
      {
        q: 'What works instead?',
        a: 'A single run with appliances distributed along it, or a galley where the width allows. Both are efficient when planned properly.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Kitchen remodel in Park Hills? Getting a kitchen up a hillside house is the first problem. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'A kitchen is several tons of material arriving over weeks — cabinets, appliances, stone — and in a tall house built into a hillside every piece comes up a stair from a street with limited parking. Debris goes back down the same way. It is a planning and labour matter rather than an obstacle, and it is why we walk the route at survey and cost the access honestly rather than discovering it on delivery day.',
    ],
    localFaqs: [
      {
        q: 'Is difficult access a real problem?',
        a: 'It is a planning and labour matter. Several tons of material comes up a stair over weeks and debris goes back down, so we walk the route at survey and cost it honestly.',
      },
      {
        q: 'Can stone worktops make the turn?',
        a: 'The template is planned with seams that suit the access. It is why the fabricator templates on site rather than working from a drawing.',
      },
    ],
  },

  bromley: {
    intro:
      'Kitchen remodel in Bromley? On low ground, specify the cabinets for it. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Ground-floor kitchens this close to the river deserve a deliberate specification rather than a default one. Plywood carcasses on adjustable legs rather than particleboard sitting on the floor, a floor assembly that can be dried, and services routed so they are not the first casualty. It costs a modest amount more and it decides whether a future event means new doors or a new kitchen.',
    ],
    localFaqs: [
      {
        q: 'How should a kitchen be specified on low ground?',
        a: 'Plywood carcasses on adjustable legs rather than particleboard sitting on the floor, and a floor assembly that can be dried. It is a modest extra and a large difference in outcome.',
      },
      {
        q: 'Is that over-cautious?',
        a: 'On ground with a history, we do not think so. It is the difference between replacing doors and replacing a kitchen.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Kitchen remodel in Fort Wright? Hilltop houses are straightforward to work in. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation removes the damp questions that shape work in the river villages below, and the mid-century housing gives square walls, accessible plumbing from a basement and a known floor structure. That combination makes cabinet installation predictable and takes real cost out of the job. Kentucky permitting applies, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Is this housing straightforward for a kitchen?',
        a: 'Generally — square walls, plumbing accessible from a basement and a known floor structure. Cabinets sit level without endless scribing, which takes real cost out.',
      },
      {
        q: 'Do you handle Kentucky permitting?',
        a: 'Yes. It runs under Kentucky rules rather than Ohio, and we confirm requirements before scheduling.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Kitchen remodel in Fort Mitchell? Choose a kitchen you will still like in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Kitchens date faster than any other room because they are the most fashion-driven. The elements that hold up are the ones without a strong signature: simple door profiles, neutral cabinet bodies, and a worktop chosen for how it behaves rather than for a pattern that will read as a particular year. Put the personality in hardware, paint and lighting — the things you can change without a project.',
    ],
    localFaqs: [
      {
        q: 'What dates a kitchen fastest?',
        a: 'Strongly patterned worktops, of-the-moment cabinet colours and elaborate door profiles. Simple profiles and neutral bodies hold up, with the personality in hardware, paint and lighting.',
      },
      {
        q: 'Is a bold colour a mistake?',
        a: 'Not if you love it — just put it where it is cheap to change. An island or a lower run carries colour without committing the whole kitchen.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Kitchen remodel in Villa Hills? We do not fit cabinets over an unsound wall. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There is a fast version of a kitchen where cabinets go straight back onto whatever is there — no drywall repair, no checking what the fixings are going into, no attention to the wall behind. It is quicker and cheaper and it is how a loaded wall cabinet ends up pulling away three years later. We make the substrate good and fix into structure, which takes longer and is what the warranty rests on.',
    ],
    localFaqs: [
      {
        q: 'Does the wall behind the cabinets need work?',
        a: 'Where the drywall is damaged or the fixings would go into nothing, yes. Cabinets fixed into an unsound wall pull away eventually, however good the cabinet is.',
      },
      {
        q: 'Is that included?',
        a: 'Making good and fixing into structure is part of the job rather than an extra. It is what the workmanship warranty actually rests on.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Kitchen remodel in Lakeside Park? A well-built kitchen should last twenty-five years. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'Plywood boxes properly fixed, drawer runners rated well above their load, a quartz worktop and appliances replaced as they fail should give twenty-five years. What ends a kitchen early is almost never wear — it is a layout that never worked, or particleboard that swelled at one leak. Both are decided at specification, which is why that conversation matters more than the finish selection does.',
    ],
    localFaqs: [
      {
        q: 'How long should a kitchen last?',
        a: 'Twenty-five years on plywood boxes properly fixed with well-rated runners, replacing appliances as they fail. What ends one early is a layout that never worked or particleboard that swelled.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Very little — keep water off the toe-kicks, wipe the hinges occasionally, and re-seal a granite worktop if that is what you have. Quartz needs nothing.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Kitchen remodel in Crescent Springs? Ask for the quote itemised. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'A kitchen quote as one number tells you almost nothing. Ours separates demolition and disposal, plumbing, electrical, drywall and paint, flooring, cabinets, worktop and fabrication, splashback, appliance installation, hardware, and labour against each. That is what lets you compare honestly — and in kitchens the gap between two numbers is usually cabinet construction grade or an appliance allowance that will not cover what you want.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'Demolition and disposal, plumbing, electrical, drywall and paint, flooring, cabinets, worktop and fabrication, splashback, appliance installation and hardware — itemised with labour against each.',
      },
      {
        q: 'How do we compare quotes?',
        a: 'Line by line. Ask specifically about cabinet box construction and whether the appliance allowance covers what you actually want — that is usually where a lower number comes from.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Kitchen remodel in Crestview Hills? Spend where you stand, not where guests look. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'It is worth being deliberate about where the budget concentrates. The drawer you open twenty times a day, the worktop you actually prepare on, the tap you touch constantly and the light over the sink all get used more than the island pendant everyone comments on. Where money is finite, we would put it into the working parts and take the visible statement somewhere cheaper — and say so plainly.',
    ],
    localFaqs: [
      {
        q: 'Where should the budget concentrate?',
        a: 'The parts you touch — drawer hardware, the prep worktop, the tap, the light over the sink. Those get used constantly; the island pendant gets commented on.',
      },
      {
        q: 'Is it worth economising anywhere?',
        a: 'Splashback tile, pendant lighting and hardware are all cheap to upgrade later. Cabinet construction and layout are not, which is where the money should go first.',
      },
    ],
  },

  edgewood: {
    intro:
      'Kitchen remodel in Edgewood? Plan for the household you will have in ten years. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'A kitchen outlasts most household arrangements, and small decisions now keep it working later. Drawers rather than doors mean nothing needs reaching into. A wall oven at a sensible height avoids bending over a hot door. Lever taps and good task lighting suit everybody. None of it looks like an adaptation and all of it is a cabinet-order decision that cannot be revisited cheaply.',
    ],
    localFaqs: [
      {
        q: 'How do we plan for later?',
        a: 'Drawers rather than doors so nothing needs reaching into, a wall oven at a sensible height, lever taps and good task lighting. None of it looks specialised and all of it is a cabinet-order decision.',
      },
      {
        q: 'Can that be added later?',
        a: 'Some of it, expensively. Worktop heights and drawer configurations are ordered with the cabinets, so they are far better decided now if the need is foreseeable.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Kitchen remodel in Taylor Mill? Winter is a reasonable time to do this. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'The work is interior, so weather barely matters — the only genuine points are that paint and adhesives cure more slowly in a cold room, and that a household without a kitchen in December feels it more than in June. Against that, availability is better in the quieter months and lead times are frequently shorter. It is a fair trade and worth knowing rather than defaulting to spring.',
    ],
    localFaqs: [
      {
        q: 'Should we wait until spring?',
        a: 'No strong reason to. Paint and adhesives cure more slowly in a cold room and availability is better in the quieter months, with shorter lead times. It is a fair trade.',
      },
      {
        q: 'Is a kitchen worse to be without in winter?',
        a: 'Households tell us so, since eating out and improvising is less appealing. Worth factoring in rather than only looking at the schedule.',
      },
    ],
  },

  elsmere: {
    intro:
      'Kitchen remodel in Elsmere? Here is exactly when money changes hands. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Stated plainly, because a kitchen involves the largest sums we handle. A deposit at signing orders the cabinets, which are frequently made to order. A progress payment falls at cabinet delivery, before installation. The balance is due on completion after the walkthrough. We do not ask for the full amount up front, and nothing appears at the end that was not in the signed itemisation.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing to order the cabinets, a progress payment at cabinet delivery before installation, and the balance on completion after the walkthrough.',
      },
      {
        q: 'Why a payment at delivery?',
        a: 'Because the cabinets are the largest single cost and they are made to your order. It is a standard structure and it is set out in writing before you sign.',
      },
    ],
  },

  independence: {
    intro:
      'Kitchen remodel in Independence? Here is what the warranty covers and what it does not. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Three warranties apply and they are different. Ours covers how the kitchen was built — the installation, the levelling and fixing, the plumbing and electrical connections we made. The cabinet manufacturer covers the boxes, doors and hardware. Each appliance carries its own. We register the ones we can and hand you the documentation, and we will tell you which is which before something fails rather than after.',
    ],
    localFaqs: [
      {
        q: 'What does your warranty cover?',
        a: 'How the kitchen was built — installation, levelling and fixing, and the plumbing and electrical connections we made. The cabinet manufacturer covers boxes, doors and hardware; appliances carry their own.',
      },
      {
        q: 'Who do we call if a drawer runner fails?',
        a: 'Us first. If it is the hardware rather than the installation we handle the manufacturer claim for you rather than sending you to them.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Kitchen remodel in Dayton? These houses were not built for modern appliances. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Kitchens in late-1800s houses were sized for a range and a larder, not a fridge, dishwasher, microwave and range together. Fitting all four into the footprint is the real design problem, and it usually means choosing appliances for their dimensions rather than their features — a slimmer dishwasher, a counter-depth fridge, a combination oven. That is a design-stage conversation and not a compromise if it is planned rather than forced.',
    ],
    localFaqs: [
      {
        q: 'Can modern appliances fit an old kitchen?',
        a: 'With appliances chosen for dimensions rather than features — a slimmer dishwasher, a counter-depth fridge, a combination oven. Planned properly it is not a compromise.',
      },
      {
        q: 'What if the room genuinely is too small?',
        a: 'Then absorbing an adjoining space is the honest conversation. We would rather raise that than force four appliances into a room that cannot take them.',
      },
    ],
  },

  southgate: {
    intro:
      'Kitchen remodel in Southgate? Three questions decide the scope. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Rather than starting with a budget, three questions. Does the current layout work, or does it fight you? Are the cabinet boxes sound? And is the electrical panel able to support what a modern kitchen wants? Those three answers separate a door-and-worktop job from a full remodel, and they are settled at the survey rather than negotiated later.',
    ],
    localFaqs: [
      {
        q: 'How do we know what scope we need?',
        a: 'Whether the layout works, whether the cabinet boxes are sound, and whether the panel supports a modern kitchen. Those three answers separate a door-and-worktop job from a full remodel.',
      },
      {
        q: 'What if only one of them is a problem?',
        a: 'Then we address that one. We would rather quote the smaller job accurately than package everything together because it is easier to sell.',
      },
    ],
  },

  wilder: {
    intro:
      'Kitchen remodel in Wilder? Keep the paperwork — it matters at resale. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'A kitchen is the most expensive thing most people put in a house, and the documentation is worth keeping: the itemised specification, the cabinet manufacturer details and warranty, appliance registrations and manuals, and the permit records. A buyer seeing what was installed, by whom and when is a genuine part of what the work is worth — and a future contractor can order a matching door.',
    ],
    localFaqs: [
      {
        q: 'What should we keep afterwards?',
        a: 'The itemised specification, cabinet manufacturer details and warranty, appliance registrations and manuals, and the permit records. A buyer seeing all that is part of what the work is worth.',
      },
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'Our workmanship warranty is tied to the installation rather than to you personally, and we provide documentation for a sale.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Kitchen remodel in Highland Heights? A let kitchen is specified for durability. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'A kitchen shared by several tenants takes a decade of wear in a few years, and the failures are predictable: a laminate worktop swollen at the sink cut-out, drawer runners collapsed under load, and a door finish worn through at the handle. Quartz, well-rated runners and a hard-wearing finish address all three. It costs more once and considerably less across turnovers.',
    ],
    localFaqs: [
      {
        q: 'What fails first in a rental kitchen?',
        a: 'A laminate worktop swollen at the sink cut-out, drawer runners collapsed under load, and a door finish worn through at the handle. Quartz, well-rated runners and a hard finish address all three.',
      },
      {
        q: 'Can it be done between academic years?',
        a: 'Only with the order placed in spring. Three to five weeks on site plus cabinet lead time means the whole summer, and a late call misses it.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Kitchen remodel in Cold Spring? Just bought the house? Do the kitchen before you move in. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'Of every job we do, a kitchen benefits most from an empty house — three to five weeks with no household improvising meals, nothing to protect, no dust barrier to live behind and no temporary kitchen to set up. In a growing area plenty of people here have just closed, and if the cabinets are ordered before completion the lead time can run alongside the purchase rather than after it.',
    ],
    localFaqs: [
      {
        q: 'Should we do the kitchen before moving in?',
        a: 'It is the job that benefits most — three to five weeks with no household improvising meals and nothing to protect. If cabinets are ordered before completion, the lead time runs alongside the purchase.',
      },
      {
        q: 'Can we order before we own the house?',
        a: 'We can design and price it, and place the order once you are certain of completion. That way the lead time is not lost.',
      },
    ],
  },

  alexandria: {
    intro:
      'Kitchen remodel in Alexandria? On a well and septic, both matter to a kitchen. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'On the semi-rural properties here, two things affect a kitchen that would not in town. Well water chemistry shortens dishwasher life, marks a sink and affects any filtered tap or ice-maker. And a disposal adds solids to a septic system that some systems handle poorly. Both are worth establishing at design stage — the second occasionally means recommending against a disposal entirely.',
    ],
    localFaqs: [
      {
        q: 'Does a disposal suit a septic system?',
        a: 'Some systems handle the extra solids poorly. It is worth confirming against your system before fitting one — occasionally we would recommend against it.',
      },
      {
        q: 'Does well water affect kitchen appliances?',
        a: 'It shortens dishwasher life, marks sinks and affects filtered taps and ice-makers. Worth establishing before specifying appliances that will work against it.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Kitchen remodel in Melbourne? One team from demolition to the last handle. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'In a village this small, a five-week job with a rotating cast of subcontractors is something everybody notices. We do not subcontract — the same installers work through demolition, rough-in, cabinets and finish trim with one project manager over it. On a job with this many dependent stages, that continuity is most of why the programme holds and why there is one person accountable for the whole thing.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes — our own installers through demolition, rough-in, cabinets and finish trim, with one project manager. On a job with this many dependent stages, that is most of why the programme holds.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we schedule it as a block rather than promising a date we would have to move.',
      },
    ],
  },

  hebron: {
    intro:
      'Kitchen remodel in Hebron? A basement below makes plumbing changes easy. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'For a kitchen, an accessible basement under it is worth a great deal. Moving the sink means new drain and vent runs, and doing that from below is straightforward where doing it through a slab means cutting concrete. It widens the layouts available considerably — which matters because sink position is the single biggest constraint on what a kitchen can become.',
    ],
    localFaqs: [
      {
        q: 'Does a basement help with a kitchen?',
        a: 'Considerably. Moving the sink means new drain and vent runs, and doing that from below is far cheaper than cutting a slab — which widens the layouts available to you.',
      },
      {
        q: 'Is sink position really that limiting?',
        a: 'It is the single biggest constraint on what a kitchen can become. Everything else can move relatively cheaply.',
      },
    ],
  },

  burlington: {
    intro:
      'Kitchen remodel in Burlington? Clearances are code, not preference. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'A kitchen has required clearances that a drawing can quietly breach — space in front of appliances, distances around a cooking surface, the working aisle. On a permitted job an inspector will pick that up, and correcting it after cabinets are set is expensive. We draw the whole room to the requirements rather than fitting the maximum cabinetry and hoping, which occasionally means one fewer unit than a showroom plan showed.',
    ],
    localFaqs: [
      {
        q: 'Are there rules about kitchen clearances?',
        a: 'Yes — space in front of appliances, distances around a cooking surface and the working aisle. An inspector will pick up a breach, and correcting it after cabinets are set is expensive.',
      },
      {
        q: 'Does that mean fewer cabinets than we hoped?',
        a: 'Occasionally one fewer unit than a showroom plan showed. We would rather draw it correctly than have you find out at inspection.',
      },
    ],
  },

  union: {
    intro:
      'Kitchen remodel in Union? The builder island is often really a peninsula. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'Kitchens in this housing frequently have an island that is too small to work at and too close to the runs either side, because it was drawn to a construction budget rather than to clearances. The useful change is often making it larger with proper aisles, or removing it in favour of a peninsula that frees the floor. Both are straightforward because the structure and services beneath are modern and known.',
    ],
    localFaqs: [
      {
        q: 'Can our island be improved?',
        a: 'Frequently — either made larger with proper aisles, or removed for a peninsula that frees the floor. It is straightforward here because the structure and services beneath are modern.',
      },
      {
        q: 'Can an island have a sink or hob?',
        a: 'Yes, though a sink means drain and vent runs in the floor and a hob means extraction above it. Both are easier over a basement than a slab.',
      },
    ],
  },

  walton: {
    intro:
      'Kitchen remodel in Walton? On a well, plan the tap and filtration together. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'On the rural properties out here, well water usually means some filtration, and where that lives is a kitchen design decision. An under-sink unit takes cabinet space, needs its own tap hole in the worktop, and wants access for cartridge changes. Deciding it after the worktop is templated means drilling a finished stone surface. It is a small thing and it has to be settled early.',
    ],
    localFaqs: [
      {
        q: 'Where does a water filter go?',
        a: 'Usually under the sink, taking cabinet space and needing its own tap hole in the worktop plus access for cartridge changes. It has to be decided before the worktop is templated.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, and we schedule it as a block because a kitchen is three to five weeks with multiple deliveries.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Kitchen remodel in Mount Carmel? A ranch kitchen usually vents through the roof. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'Single-storey plans frequently put the hob on an interior wall or an island, which means the extraction route is up through the roof rather than out through a wall. That is entirely normal and it needs a proper insulated duct run with a roof cap — not a flexible pipe terminating in the loft, which does nothing except deposit grease and moisture in the roof structure.',
    ],
    localFaqs: [
      {
        q: 'How does a hood vent in a single-storey house?',
        a: 'Usually up through the roof with an insulated duct and a proper roof cap. What it must not do is terminate in the loft, which deposits grease and moisture in the roof structure.',
      },
      {
        q: 'Can an island hood vent properly?',
        a: 'Yes, with the duct run through the ceiling. It needs planning at design stage because the route affects the ceiling and sometimes the roof structure.',
      },
    ],
  },

  summerside: {
    intro:
      'Kitchen remodel in Summerside? Cabinet depth matters more than people expect. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Standard base cabinets are 24 inches deep and standard wall cabinets 12, and both can be varied. A shallower base run on one wall can rescue an aisle that is otherwise too tight, and deeper wall cabinets over a section without worktop beneath add real storage. Neither costs much and both have to be specified with the order — it is the kind of adjustment that makes a difficult room work.',
    ],
    localFaqs: [
      {
        q: 'Can cabinet depths be changed?',
        a: 'Yes — a shallower base run can rescue a tight aisle, and deeper wall cabinets over a section without worktop add real storage. Both are ordered rather than adjusted later.',
      },
      {
        q: 'Does a shallower worktop feel cramped?',
        a: 'Less than a blocked aisle does. Where a room is genuinely tight it is a good trade, and we will draw both so you can judge.',
      },
    ],
  },

  withamsville: {
    intro:
      'Kitchen remodel in Withamsville? Keeping some cabinets is possible and rarely tidy. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Replacing part of a kitchen and keeping the rest sounds economical and usually disappoints. New doors will not match aged ones even in the same range, a new worktop will not sit flush against old cabinets of a different height, and the join is visible from every angle. Where the budget is limited we would sooner do a smaller scope completely — doors and worktop throughout — than half the room properly.',
    ],
    localFaqs: [
      {
        q: 'Can we replace half the kitchen?',
        a: 'It is possible and rarely tidy — new doors will not match aged ones, heights differ and the join shows. We would sooner do a smaller scope completely than half the room properly.',
      },
      {
        q: 'What is the better compromise?',
        a: 'New doors and a new worktop throughout, keeping the boxes. That reads as a whole kitchen rather than a repair.',
      },
    ],
  },

  milford: {
    intro:
      'Kitchen remodel in Milford? Out-of-square rooms make cabinet setting-out matter. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'Two things are true in these houses: walls are not square to each other and floors are not level. A cabinet run set against one wall will drift visibly away from the opposite one, and a worktop template made without allowing for it produces a gap somewhere. Both are managed by scribing and by deciding early where any taper is least visible — which is a planning step rather than an installation surprise.',
    ],
    localFaqs: [
      {
        q: 'What if the walls are not square?',
        a: 'A cabinet run set against one wall drifts visibly away from the opposite one. It is managed by scribing and by deciding early where the taper is least visible.',
      },
      {
        q: 'Does that affect the worktop?',
        a: 'It is why the fabricator templates on site against the installed cabinets rather than working from a drawing. In these houses a drawing would not fit.',
      },
    ],
  },

  mulberry: {
    intro:
      'Kitchen remodel in Mulberry? On a fixed budget, cabinets before countertop. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Where the budget will not cover everything, the split matters more than the total. Good cabinets with a modest worktop can be upgraded later — a new worktop on existing cabinets is a straightforward job. Poor cabinets with an expensive worktop cannot: replacing the boxes means the stone comes off and usually does not survive. Spend on the part that is hardest to change, which is the one you also touch every day.',
    ],
    localFaqs: [
      {
        q: 'Cabinets or countertop if we cannot do both well?',
        a: 'Cabinets. A worktop can be upgraded later on existing boxes; replacing boxes means the stone comes off and rarely survives. Spend on the part hardest to change.',
      },
      {
        q: 'What is a sensible interim worktop?',
        a: 'A good laminate, replaced in a few years when budget allows. It is genuinely serviceable and it keeps the option open.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Kitchen remodel in Mount Repose? Buy a cabinet range that will still exist. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Cabinet ranges get discontinued, and when one does, matching a damaged door or adding a unit later becomes impossible. That is a real argument for established manufacturers with long-running ranges over whatever is heavily discounted this season. It is worth asking how long a range has been in production and whether individual doors can be ordered — before rather than after.',
    ],
    localFaqs: [
      {
        q: 'Does the cabinet brand matter?',
        a: 'For future matching, considerably. A discontinued range means a damaged door cannot be replaced and a later addition will not match. Ask how long a range has been in production.',
      },
      {
        q: 'Should we keep a spare door?',
        a: 'It is not a bad idea, particularly for a range you are unsure about. A spare of the most-used door size costs little and solves a real problem later.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Kitchen remodel in Day Heights? On septic, a disposal deserves a conversation. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'A waste disposal adds solids to a septic system continuously, and some systems and some tank sizes handle that poorly — it can mean more frequent pumping or, in a marginal system, real problems. On the semi-rural properties here that is worth establishing before fitting one, and occasionally the honest recommendation is to leave it out and compost instead.',
    ],
    localFaqs: [
      {
        q: 'Can we have a disposal on a septic system?',
        a: 'Frequently, but it adds solids continuously and some systems handle that poorly — meaning more frequent pumping or real problems in a marginal system. Worth establishing first.',
      },
      {
        q: 'What if ours will not take it?',
        a: 'Then we would leave it out and say so. It is a small feature and it is not worth the risk to a septic system.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Kitchen remodel in New Richmond? A tall old room takes full-height cabinets well. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'The ceiling height in these rooms is an opportunity rather than a problem. Wall cabinets taken to full height, or a dresser-style tall unit that reads as furniture, both suit the proportions in a way they would look overbearing in a modern eight-foot room. It does mean the top shelf needs a step, and it adds real storage in houses that frequently have little.',
    ],
    localFaqs: [
      {
        q: 'Do tall cabinets suit a period room?',
        a: 'A nine or ten foot ceiling carries full-height cabinets and dresser-style tall units far better than a modern room does — they suit the proportions rather than overbearing them.',
      },
      {
        q: 'Is the top shelf usable?',
        a: 'With a step, for occasional things. In houses with little storage that is a fair trade, and it is worth planning what lives up there.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Kitchen remodel in Amelia? Debris removal over five weeks is part of the job. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'A kitchen produces waste in stages — demolition first, then packaging from cabinets and appliances, then offcuts and trim. All of it leaves with our crew as it is generated rather than accumulating in your drive for five weeks, and the appliance packaging alone is a surprising volume. Where a skip is warranted we arrange placement in advance rather than parking one outside indefinitely.',
    ],
    localFaqs: [
      {
        q: 'Where does all the waste go?',
        a: 'It leaves with our crew as it is generated rather than accumulating in your drive — demolition debris, then cabinet and appliance packaging, then offcuts and trim.',
      },
      {
        q: 'Will there be a skip outside for weeks?',
        a: 'Only where genuinely warranted, and with placement arranged in advance. Most of it goes in our vehicles as we go.',
      },
    ],
  },

  batavia: {
    intro:
      'Kitchen remodel in Batavia? Hardware is the cheapest thing you touch most. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'Handles and knobs are a small line on a kitchen quote and the part your hands are on every day. A comfortable pull that suits the door style changes how a cabinet feels to use, and getting it wrong is one of the few kitchen decisions that is genuinely easy to reverse later. That makes hardware the sensible place to be adventurous and the wrong place to economise for the sake of it.',
    ],
    localFaqs: [
      {
        q: 'Does cabinet hardware matter?',
        a: 'It is the part your hands are on every day and a small line on the quote. It is also one of the few kitchen decisions that is genuinely easy to change later.',
      },
      {
        q: 'Knobs or pulls?',
        a: 'Pulls on drawers almost always — they are easier with a full drawer. Knobs on doors is a matter of taste, and mixing them is entirely normal.',
      },
    ],
  },

  owensville: {
    intro:
      'Kitchen remodel in Owensville? One design visit should do the work of two. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we travel to reach the eastern villages, it helps to make the survey count. Access to the kitchen and to whatever is below it lets us see the plumbing route. The electrical panel location and whether it has spare capacity matters. And most usefully, a clear sense of what does not work about the current kitchen — that is what a layout is built from, far more than a folder of photographs is.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready?',
        a: 'Access to the kitchen and below it, the electrical panel location, and a clear sense of what does not work about the current kitchen. That last one is what a layout is built from.',
      },
      {
        q: 'Should we have chosen finishes?',
        a: 'Appliances if you have strong views, since cabinets are built to them. We would rather you did not commit to finishes before seeing a layout.',
      },
    ],
  },

  goshen: {
    intro:
      'Kitchen remodel in Goshen? A rural kitchen usually needs a proper mudroom beside it. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'On a working property the kitchen is where everything arrives — boots, produce, animals, deliveries. The single most useful change is frequently not in the kitchen at all but beside it: a landing zone with a hard floor, storage for outdoor things and a utility sink, so the kitchen proper is not doing that job. Where an adjoining space allows it, that does more for the kitchen than another run of cabinets would.',
    ],
    localFaqs: [
      {
        q: 'What helps a rural kitchen most?',
        a: 'Frequently something beside it rather than in it — a landing zone with a hard floor, outdoor storage and a utility sink, so the kitchen proper is not doing that job.',
      },
      {
        q: 'Can that be done at the same time?',
        a: 'Where an adjoining space allows, yes, and it is cheaper alongside than as a separate project. We will price both.',
      },
    ],
  },

  moscow: {
    intro:
      'Kitchen remodel in Moscow? A kitchen is a large commitment in a small village house. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'This deserves a plain conversation. A full kitchen is the most expensive thing most people put in a house, and in a modest village property it is possible to spend more than the room can sensibly carry. A good stock kitchen with sound boxes, decent hardware and a durable worktop does everything a household needs — and we will recommend that rather than a specification the house will not repay.',
    ],
    localFaqs: [
      {
        q: 'How much should we spend on a kitchen here?',
        a: 'A good stock kitchen with sound boxes, decent hardware and a durable worktop does everything a household needs. We will say so rather than quoting a specification the house will not repay.',
      },
      {
        q: 'Does that mean a lesser kitchen?',
        a: 'A well-built one rather than an expensive one. The construction and the installation are the same standard whichever door style sits on the front.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Kitchen remodel in Newtonsville? Here is what keeps a five-week job on schedule. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the northeastern villages, a lost day costs more here than closer in. What keeps it on programme: decisions all made before we start, materials in our warehouse, a clear route for deliveries, somewhere to park, and someone reachable by phone on delivery and templating days. That is genuinely the list, and with it in place the dates hold.',
    ],
    localFaqs: [
      {
        q: 'What keeps the schedule on track?',
        a: 'All decisions made before we start, materials in our warehouse, a clear delivery route, parking, and someone reachable by phone on delivery and templating days.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, and we schedule it as an uninterrupted block rather than fitting it around closer work. That is why the dates we write down hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Kitchen remodel in Williamsburg? An addition kitchen may not be tied into the house. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'In these 19th-century houses the kitchen is frequently in a later rear addition, framed to whatever standard applied at the time and sometimes barely tied into the original structure. That matters when cabinets are being fixed to those walls and a stone worktop is loading one of them. Establishing what the walls are and what they are attached to comes before design rather than during installation.',
    ],
    localFaqs: [
      {
        q: 'Is an addition different to build in?',
        a: 'It can be — framed to whatever standard applied at the time and sometimes barely tied into the original structure. That matters when cabinets are fixed to those walls.',
      },
      {
        q: 'What if the walls will not take the load?',
        a: 'Blocking or reinforcement goes in first, and it appears on the quote. It is straightforward once identified, which is why we look before designing.',
      },
    ],
  },

  bethel: {
    intro:
      'Kitchen remodel in Bethel? Function before finish, on any budget. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'On a limited budget the order is clear. A layout that works. Sound cabinet boxes. Drawer hardware rated properly. Adequate task lighting. A durable worktop. Those five make a kitchen that functions well and lasts, and every one is compatible with a modest door style and standard appliances. The premium finishes come after all of them and frequently not at all.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget cover first?',
        a: 'A layout that works, sound cabinet boxes, properly rated drawer hardware, adequate task lighting and a durable worktop. All five are compatible with a modest door style.',
      },
      {
        q: 'What can wait?',
        a: 'Splashback tile, pendant lighting, upgraded hardware and premium appliances. All are straightforward to change later; the layout and boxes are not.',
      },
    ],
  },

  ross: {
    intro:
      'Kitchen remodel in Ross? On hard well water, choose the sink and tap carefully. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Hard water shows on a kitchen constantly because the sink is used more than anything else in the house. A dark composite sink and a polished chrome tap both hold visible mineral film after every use; stainless and a brushed finish hide it. It is a small specification decision that decides whether the sink area looks tidy with a wipe or only after a proper clean, and it is worth making deliberately.',
    ],
    localFaqs: [
      {
        q: 'Which sink suits hard water?',
        a: 'Stainless with a brushed finish tap hides mineral film far better than a dark composite sink and polished chrome, which show every drop. It is a small decision with a daily consequence.',
      },
      {
        q: 'Does it affect the dishwasher?',
        a: 'Hard water shortens dishwasher life and leaves film on glassware. Where treatment is not happening, it is worth factoring into the appliance choice.',
      },
    ],
  },

  fairfield: {
    intro:
      'Kitchen remodel in Fairfield? Cleaning products damage cabinets faster than use does. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Most cabinet finishes that look tired were cleaned into that state. All-purpose sprays containing solvents dull a catalysed finish over time, abrasive creams scratch it, and water left standing at a toe-kick or a sink base swells the substrate beneath even a good finish. A damp cloth and a mild detergent is genuinely the whole routine, along with drying the area around the sink.',
    ],
    localFaqs: [
      {
        q: 'How should cabinets be cleaned?',
        a: 'A damp cloth and mild detergent. Solvent-based sprays dull a catalysed finish over time and abrasives scratch it — and standing water at a toe-kick swells the substrate beneath.',
      },
      {
        q: 'What about the worktop?',
        a: 'Quartz needs nothing but soap and water; granite wants a stone-safe cleaner and periodic sealing. Acidic products are what damage both grout and stone.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Kitchen remodel in Beckett Ridge? No HOA approval needed for an interior kitchen. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'An interior kitchen is not an association’s concern — they govern what is visible from outside. The one intersection is a range hood duct through an exterior wall, since the vent cap is visible, and that is usually straightforward but worth checking. Township permitting applies for the plumbing and electrical work, which we file. Otherwise this housing is predictable: modern structure, adequate panel, square walls.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval?',
        a: 'Not for an interior kitchen. The one intersection is a hood duct through an exterior wall, since the vent cap is visible — usually straightforward but worth checking.',
      },
      {
        q: 'Is this housing straightforward?',
        a: 'Predictable — modern structure, usually adequate panel capacity and square walls. Cabinets sit level and the unknowns are few.',
      },
    ],
  },

  wetherington: {
    intro:
      'Kitchen remodel in Wetherington? A large kitchen benefits from two working zones. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Where a kitchen is genuinely large, the useful move is a second zone rather than more of the first — a prep area with its own sink and worktop set apart from the main cooking run, so two people work without crossing. That is what a large kitchen can do that a small one cannot, and it is more valuable than an extra bank of cabinets or a bigger island.',
    ],
    localFaqs: [
      {
        q: 'What should a large kitchen prioritise?',
        a: 'A second working zone with its own sink and worktop, set apart from the main cooking run, so two people work without crossing. That is what size buys that a small kitchen cannot.',
      },
      {
        q: 'Is a second sink worth it?',
        a: 'In a genuine second prep zone, yes. In a normal-sized kitchen it usually costs worktop you would rather have.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Kitchen remodel in Hamilton? An old service panel decides what appliances are possible. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'In houses of this age the electrical service is frequently the binding constraint on a kitchen — not the room, not the budget, but how many circuits the panel can carry. A modern kitchen wants several dedicated ones, and where the service itself is undersized that is a service upgrade rather than a panel swap. Establishing it before appliances are chosen is the difference between a plan and a disappointment.',
    ],
    localFaqs: [
      {
        q: 'Will an old house support a modern kitchen electrically?',
        a: 'It has to be checked before appliances are chosen. A modern kitchen wants several dedicated circuits, and where the service itself is undersized that is a service upgrade rather than a panel swap.',
      },
      {
        q: 'How much does that add?',
        a: 'It varies with the service size and the utility connection, and it appears as its own line. It is better known at design stage than discovered at rough-in.',
      },
    ],
  },

  millville: {
    intro:
      'Kitchen remodel in Millville? Cabinet lead time is the whole schedule. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'The constraint is almost never our diary. Stock cabinets ship in weeks, semi-custom takes longer, and full custom is measured in months — and nothing starts until they are in our warehouse and checked for damage. Ordering earlier than feels necessary is the single most useful thing a client can do, and we give the realistic figure at quotation rather than the optimistic one.',
    ],
    localFaqs: [
      {
        q: 'How far ahead should we order?',
        a: 'Earlier than feels necessary. Stock cabinets ship in weeks, semi-custom longer and full custom in months — and nothing starts until they are in our warehouse and checked.',
      },
      {
        q: 'Why check them before starting?',
        a: 'Because a damaged or missing unit discovered mid-installation stops the job with your kitchen in pieces. Checking on arrival means a replacement is ordered before demolition.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Kitchen remodel in New Miami? A small kitchen still needs every trade. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'The kitchens in these mill-era cottages are compact, and the honest position is that a kitchen has a floor to its cost regardless of size. Plumber, electrician, drywall, flooring, fabricator and installer all attend, permits apply, and each has a minimum. Materials scale down; almost nothing else does. That argues for putting the available money into good cabinets rather than spreading it thin.',
    ],
    localFaqs: [
      {
        q: 'Is a small kitchen much cheaper?',
        a: 'Materials scale down and very little else does — every trade still attends and each has a minimum. There is a floor to what a kitchen costs regardless of size.',
      },
      {
        q: 'So where should the money go?',
        a: 'Into good cabinets. In a small kitchen the upgrade is proportionally cheap against a total dominated by fixed costs, and quality shows more in a small room.',
      },
    ],
  },

  monroe: {
    intro:
      'Kitchen remodel in Monroe? Working from home for five weeks needs planning. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'A kitchen is our longest job in an occupied house, and the noise is not constant — demolition and any structural work are loud, rough-in and finishing largely are not. If you work from home, tell us at booking and the loud stretches get scheduled around your commitments. Monroe straddles two counties, so we also confirm which jurisdiction permits and inspects before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Can we work from home during it?',
        a: 'Mostly — demolition and structural work are loud, rough-in and finishing largely are not. Tell us at booking and the loud stretches get scheduled around your commitments.',
      },
      {
        q: 'Which county permits our job?',
        a: 'It depends which side of the line the property sits on, since Monroe straddles Butler and Warren. We confirm before scheduling.',
      },
    ],
  },

  landen: {
    intro:
      'Kitchen remodel in Landen? In an attached home, kitchen noise reaches next door. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, a shared wall carries more than people expect — a disposal, a dishwasher running at night, and cabinet doors closing. Soft-close hardware handles the last one entirely, insulating a shared wall while it is open handles much of the rest, and a quieter dishwasher is worth the modest premium. All three are decided before the wall closes.',
    ],
    localFaqs: [
      {
        q: 'Will the neighbours hear the kitchen?',
        a: 'A disposal, a night-running dishwasher and cabinet doors all carry through a shared wall. Soft-close hardware, insulating the wall while it is open and a quieter dishwasher address all three.',
      },
      {
        q: 'Can we alter plumbing on a shared wall?',
        a: 'It depends whether the stack serves both homes, which we establish before designing rather than assuming.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Kitchen remodel in Loveland Park? Mid-century kitchens are usually easy to work in. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Houses of this era generally give square walls, a plywood subfloor and plumbing reachable from a basement below — which makes cabinet installation predictable and sink relocation genuinely affordable. What usually needs attention is the electrical, since kitchens of this vintage predate current circuit requirements. That is a known cost rather than an unknown, which is what makes these projects straightforward to price.',
    ],
    localFaqs: [
      {
        q: 'Are mid-century houses easier for a kitchen?',
        a: 'Generally — square walls, plywood subfloor and plumbing reachable from a basement, which makes cabinet installation predictable and sink relocation affordable.',
      },
      {
        q: 'What usually needs upgrading?',
        a: 'The electrical, since kitchens of this vintage predate current circuit requirements. It is a known cost rather than an unknown.',
      },
    ],
  },

  maineville: {
    intro:
      'Kitchen remodel in Maineville? Design for the household you will have in ten years. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'A kitchen outlasts most household arrangements. Decisions that keep working: drawers rather than doors so nothing needs reaching into, a layout that lets two people work without crossing, storage sized generously rather than exactly, and ventilation rated for real cooking. None of it costs much and all of it is fixed at cabinet order — which is why the design conversation is about how you will live rather than how you live now.',
    ],
    localFaqs: [
      {
        q: 'What decisions keep working long term?',
        a: 'Drawers rather than doors, a layout that lets two people work without crossing, generous rather than exact storage, and ventilation rated for real cooking. All fixed at cabinet order.',
      },
      {
        q: 'Will the kitchen suit older children?',
        a: 'If the fridge and everyday glasses are reachable from outside the cooking zone, considerably. That is a layout decision worth making now.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Kitchen remodel in Pleasant Plain? Five weeks without a kitchen is the real question here. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Out here there is no convenient takeaway to fall back on, which makes the temporary kitchen a genuine part of the plan rather than an afterthought. A relocated fridge, a microwave, a kettle and a reachable sink somewhere workable makes five weeks manageable. We set that up on day one, and we schedule the job as an uninterrupted block rather than stretching it around closer work.',
    ],
    localFaqs: [
      {
        q: 'How do we cope for five weeks?',
        a: 'A proper temporary kitchen — relocated fridge, microwave, kettle and a reachable sink. Out here that matters more than in town, so we set it up on day one.',
      },
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it as an uninterrupted block rather than squeezing it in. That is why the dates we write down hold.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Kitchen remodel in South Lebanon? In a newer home, check the builder warranty first. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'With this much new construction, plenty of homes here remain inside a builder warranty, and altering plumbing, electrical or structure can affect what it covers. Worth reading before commissioning. The upside is that these are the easiest kitchens we build — modern structure, adequate panel capacity, square walls and known plumbing, so almost nothing is spent preparing the house.',
    ],
    localFaqs: [
      {
        q: 'Will remodeling affect our builder warranty?',
        a: 'It can, where the work touches plumbing, electrical or structure. Worth reading the terms first — and if there is a defect, it may be theirs to fix rather than yours to pay for.',
      },
      {
        q: 'Are newer houses easier?',
        a: 'The easiest we build in. Modern structure, adequate panel capacity, square walls and known plumbing mean almost nothing is spent preparing the house.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Kitchen remodel in Lawrenceburg? Above a business, water and access both need planning. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A good deal of downtown housing sits above ground-floor commercial space, which affects a kitchen twice. Water shut-offs and any leak affect a business below, so isolation is arranged with the tenant and the floor assembly deserves proper attention. And deliveries and debris have to work around trading hours. Indiana permitting applies, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Our apartment is above a shop — what changes?',
        a: 'Water shut-offs are arranged with the tenant below, the floor assembly deserves proper attention, and deliveries and debris work around trading hours.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Permitting and inspection run under Indiana rules rather than Ohio, which we confirm before a start date is agreed.',
      },
    ],
  },

  greendale: {
    intro:
      'Kitchen remodel in Greendale? A hillside house makes deliveries the first problem. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Houses stepped into this hillside frequently have the kitchen a floor or two above street level with a turning stair between. Cabinets, appliances and stone all travel that route and debris comes back down it. It is manageable and it is labour, and it gets measured against actual unit sizes and costed honestly rather than discovered on delivery day.',
    ],
    localFaqs: [
      {
        q: 'Is hillside access a real problem?',
        a: 'It is labour rather than an obstacle. Cabinets, appliances and stone all travel a turning stair and debris comes back down — we measure the route and cost it honestly.',
      },
      {
        q: 'Can stone worktops make the turn?',
        a: 'The template is planned with seams that suit the access, which is why the fabricator templates on site rather than from a drawing.',
      },
    ],
  },

  aurora: {
    intro:
      'Kitchen remodel in Aurora? Here is exactly what we check before the final invoice. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'The last day matters as much as the first. Before the balance is due we walk it with you: every door and drawer checked for alignment and soft-close, every appliance run, the dishwasher cycled with the connection watched, the sink filled and drained, every outlet tested, the hood checked for actual extraction, the worktop seams inspected and every cabinet checked for movement. Anything on that list gets put right before the invoice.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'Every door and drawer checked for alignment and soft-close, every appliance run, the dishwasher cycled with the connection watched, outlets tested, the hood checked for real extraction, and seams inspected.',
      },
      {
        q: 'What if something appears months later?',
        a: 'Tell us and we come back. Installation faults are ours; we handle cabinet and appliance manufacturer claims for you rather than sending you to them.',
      },
    ],
  },
};
