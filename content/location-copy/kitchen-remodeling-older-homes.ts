import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /kitchen-remodeling-older-homes/[location].
 *
 * THE SPLIT WITH kitchens.ts — read before editing.
 *   KITCHENS (the main service) owns the design conversation: layout and
 *   workflow, island clearances, cabinet construction and lead times,
 *   countertop material and seams, appliance sizing, ventilation and make-up
 *   air, electrical circuits and outlet spacing, lighting layers, storage,
 *   sequencing, living without a kitchen, budget allocation and resale.
 *   NONE of that belongs here.
 *
 *   THIS FILE owns what the old house does when you open it up:
 *   plaster and lath, knob-and-tube and undersized service, galvanised supply
 *   and cast-iron waste, out-of-square walls and sloping floors, chimney
 *   breasts and disused flues, balloon framing and what is actually
 *   load-bearing, original hardwood and trim, matching period cabinetry,
 *   butler's pantries and back stairs, radiators, soffits hiding ducts,
 *   small original footprints built as service rooms, and settlement.
 *   The through-line is that the surprise is the budget, so the surveying
 *   happens before the contract rather than after demolition.
 *
 * ⚠️ HARD RULE — HAZARDOUS MATERIALS.
 * Housing of these eras can contain lead paint and asbestos-bearing materials.
 * This file follows the posture already set in bathroom-flooring.ts:
 *   - NEVER state that a specific house or neighborhood contains either.
 *   - NEVER claim a certification, licence or accreditation for handling them.
 *     The site claims none anywhere, and this file must not be where one
 *     appears.
 *   - DO say that age puts testing on the table, that testing rather than
 *     assumption settles it, and that it is established before anything is
 *     disturbed.
 *
 * ⚠️ ALSO NEVER: a dollar figure or cost per square foot, a claim about what
 * an insurer will or will not do about knob-and-tube, a promise that original
 * floors or cabinets can be saved before anyone has seen them, or a zoning or
 * historic-district boundary claim.
 *
 * Facts used here (ZIP, county, parent city) come from content/locations.ts
 * and are cross-checked by script. Housing-era statements are general and
 * observable, never parcel-specific.
 */
export const olderHomesCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Older kitchen in Sedamsville? Behind that plaster is the real budget. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) climbs the west-side hillside above River Road, and most of its houses went up in the late 1800s and early 1900s — frame construction, plaster on wood lath, and kitchens built as back-of-house service rooms.',
      'In houses of this age the demolition is where the project is really priced. Plaster and lath comes off in a way drywall never does, and what it reveals — the state of the framing, what the wiring actually is, whether a wall someone called non-structural is carrying something — decides the rest. We survey before quoting rather than after, because the alternative is a contract that changes in week two.',
    ],
    localFaqs: [
      {
        q: 'Why does plaster removal matter so much?',
        a: 'It is messier and slower than drywall, and it is where the surprises live. What it exposes about the framing and the wiring usually sets the real budget.',
      },
      {
        q: 'Can you price it before opening the walls?',
        a: 'We survey what we can reach first and tell you where the genuine unknowns are. A number that ignores them is not a real number.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Older kitchen in Sayler Park? Victorian bones, modern loads. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) was the independent village of Home City until annexation in the early 1900s, and its tree-lined streets carry Victorian and early-1900s frame houses with their original room layouts largely intact.',
      'A kitchen from that period was wired, if at all, for a light and perhaps one outlet. A modern one wants dedicated circuits for the range, the oven, the refrigerator, the dishwasher, the disposal, the microwave and the countertop small appliances. Whether the existing service can carry that is the first electrical question, and it is answered by looking at the panel and the incoming service rather than by hoping.',
    ],
    localFaqs: [
      {
        q: 'Will I need a bigger electrical panel?',
        a: 'Often, in a house of this age. A modern kitchen wants several dedicated circuits, and whether your service can carry them is settled by looking at the panel, not by assuming.',
      },
      {
        q: 'Is that included in the quote?',
        a: 'Where it is needed, yes — it goes in the contract as a real line rather than surfacing as a change order once the walls are open.',
      },
    ],
  },

  riverside: {
    intro:
      'Older kitchen in Riverside? Low ground, old plumbing, real fixes. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road between the hillside and the Ohio, with much of its older housing sitting low on river bottomland.',
      'Houses on low ground tend to have had a damp century, and the kitchen is where that shows — in the floor structure under the sink, in the base of the wall behind the cabinets, and in supply lines that have been patched more than once. Galvanised pipe of that vintage narrows from the inside as it corrodes, which is why the pressure drops long before it leaks. Opening a kitchen is the sensible moment to replace what is reachable.',
    ],
    localFaqs: [
      {
        q: 'Should the old supply lines be replaced during the remodel?',
        a: 'If they are galvanised, this is the right moment — the walls are open and access will never be cheaper. Corroded pipe narrows from the inside long before it leaks.',
      },
      {
        q: 'What about the floor under the sink?',
        a: 'In a house that has been damp, that is the first place to check. We look at the structure below before pricing the cabinets that sit on it.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Older kitchen in East Price Hill? Grand houses, tiny kitchens. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the hilltop above the basin, a dense grid of substantial late-1800s and early-1900s houses, many far larger than their kitchens suggest.',
      'That mismatch is the defining problem here. These were houses with servants’ arrangements, so the kitchen was a small working room at the back, often with a pantry beside it and the dining room through a door. Getting a modern kitchen out of that usually means taking in the pantry or removing a wall — which turns immediately into the question of what that wall is holding up, and that gets answered structurally rather than optimistically.',
    ],
    localFaqs: [
      {
        q: 'Can we open the kitchen into the next room?',
        a: 'Often, and it depends what the wall carries. That gets determined structurally before it goes in a drawing, because the beam it may need is a real cost.',
      },
      {
        q: 'Is taking in the old pantry a good idea?',
        a: 'It is frequently the cheapest square footage in the house — no exterior work, and the services are already nearby. It is usually the first thing we look at.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Older kitchen in West Price Hill? Two eras, two problems. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) runs west from the hilltop toward Covedale, mixing early-1900s frame houses with a large stock of post-war brick on gentler ground.',
      'Which of those two you own changes the job entirely. The early-1900s houses bring plaster, small original kitchens and wiring that predates the loads a kitchen now carries. The post-war brick brings a different set — plaster or early drywall, a compact galley plan, and soffits above the wall cabinets that often hide ductwork or a vent rather than empty space. We establish which before quoting, because the two are not the same project.',
    ],
    localFaqs: [
      {
        q: 'What is usually inside the soffit above the cabinets?',
        a: 'Sometimes nothing, often ductwork, a vent or a drain line. It is worth knowing before you plan cabinets to the ceiling, so we check rather than assume.',
      },
      {
        q: 'Does the age of the house change the price?',
        a: 'Substantially. An early-1900s frame house and a post-war brick one bring different problems, so we establish which we are dealing with first.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Older kitchen in Lower Price Hill? 19th-century brick, tight access. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is a compact basin neighborhood of 19th-century brick housing on a tight grid, hemmed in by the Mill Creek, the river and the industrial corridor.',
      'Solid masonry walls change what a kitchen remodel involves. There is no stud cavity to run a cable or a vent through, so new services either surface-run, get chased into the masonry, or route through the floor — each with a different cost and a different look. Getting the extraction outside through a solid brick wall is its own piece of work. None of it is difficult, but it is all decided at design rather than discovered at first fix.',
    ],
    localFaqs: [
      {
        q: 'How do you run new wiring in solid brick walls?',
        a: 'Chased into the masonry, surface-run behind cabinetry, or routed through the floor. Which one suits gets decided at design, since each has a different cost and finish.',
      },
      {
        q: 'Can the extractor vent outside?',
        a: 'Usually, and cutting through solid masonry is real work rather than an afterthought. We plan the route before the cabinets are ordered.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Older kitchen in Over-the-Rhine? Italianate, and rightly protected. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the country’s largest concentrations of 19th-century Italianate architecture, much of it three and four storeys, built wall to wall.',
      'These buildings put their kitchens in whatever room could take one, often with tall windows, deep reveals, original trim and ceilings well above modern cabinet heights. Working with that rather than against it is the whole craft — cabinetry scaled to the room, a plan that does not fight the window positions, and no assumption that anything is square or plumb, because in a building of this age very little is. Anything affecting the exterior is a separate conversation with the city.',
    ],
    localFaqs: [
      {
        q: 'Will new cabinets fit rooms with ceilings this tall?',
        a: 'They fit, but stock heights leave an awkward gap. The answer is cabinetry scaled to the room rather than to a catalogue, which is a design decision made early.',
      },
      {
        q: 'Do we need approval to change anything?',
        a: 'Interior work generally differs from anything affecting the exterior. What applies to your building is determined by the city, and we establish it before design.',
      },
    ],
  },

  downtown: {
    intro:
      'Older kitchen Downtown? Usually a condo, with its own rules. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) is the central business district between the river and Central Parkway, where residential space is overwhelmingly apartments and condominiums, much of it converted from older commercial buildings.',
      'A kitchen in a converted building is governed by the building as much as by the unit. Where the waste stack runs decides whether the sink can move, the association usually sets working hours and how materials come in and out, and a shared extraction route can rule out the hood you had in mind. We establish the building’s requirements before design, because they shape the plan more than the floor area does.',
    ],
    localFaqs: [
      {
        q: 'Can I move the sink in a condo kitchen?',
        a: 'It depends where the waste stack runs and what fall is available. That gets established from the building rather than assumed from the floor plan.',
      },
      {
        q: 'Does the association need to approve the work?',
        a: 'Usually, and it often sets working hours and access routes too. We get those requirements in writing before design so the programme is realistic.',
      },
    ],
  },

  'west-end': {
    intro:
      'Older kitchen in the West End? Century-old services behind the wall. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) retains blocks of 19th-century housing alongside mid-century building, on ground that was substantially cleared through the last century.',
      'In the surviving older housing the services are the story. A century of partial upgrades tends to leave a kitchen wall with several generations of wiring in it at once — some replaced, some abandoned in place, some still live and older than anyone expects. Establishing what is actually live and what merely looks disused is a first-fix job done properly rather than quickly, and it is the part of the work most worth not rushing.',
    ],
    localFaqs: [
      {
        q: 'What do you find in the walls of these houses?',
        a: 'Usually several generations of wiring at once — some replaced, some abandoned, some still live. Sorting out what is genuinely dead is careful work.',
      },
      {
        q: 'Does that add time?',
        a: 'It adds first-fix time, and it is time worth spending. We would rather find it in week one than have it found for us later.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Older kitchen on Mount Adams? Narrow houses, narrow access. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) sits on the bluff above the basin, a hillside neighborhood of closely packed 19th-century and later houses on notably narrow streets.',
      'Access is the practical constraint that shapes everything here. Getting cabinetry, worktops and appliances into a tall narrow house on a street with nowhere to park is a logistics exercise, and a stone worktop that cannot make the turn on the stair is a genuine problem rather than a hypothetical. We measure the route in, not just the room, before anything is ordered — and where the route rules something out, we say so at design.',
    ],
    localFaqs: [
      {
        q: 'Will a stone worktop fit up the stairs?',
        a: 'That is measured before it is ordered. Where the route in rules a single slab out, we design around it rather than discovering it on delivery day.',
      },
      {
        q: 'How do you handle deliveries on these streets?',
        a: 'They get scheduled rather than improvised, with parking and timing arranged in advance. On streets this tight that is part of the plan.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Older kitchen in Mount Auburn? The city’s first hilltop suburb. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is Cincinnati’s earliest hilltop suburb, rising north of the basin, with substantial 19th-century houses on steep winding streets.',
      'Houses of this size and age usually have a chimney breast somewhere in or beside the kitchen, and it is rarely as removable as it looks. It may be carrying masonry above, it may still serve a flue for a boiler or water heater, and it is almost never square to the room. Whether it goes, stays or gets built around is a structural and mechanical question settled before the cabinetry is drawn, not after.',
    ],
    localFaqs: [
      {
        q: 'Can the old chimney breast be removed?',
        a: 'Sometimes, and it depends what sits above it and whether the flue still serves an appliance. That is settled structurally before any cabinetry is drawn.',
      },
      {
        q: 'What if it has to stay?',
        a: 'Then it gets designed into the room properly. Built around deliberately it reads as character; worked around late it reads as a compromise.',
      },
    ],
  },

  clifton: {
    intro:
      'Older kitchen in Clifton? Estate houses, and original detail worth keeping. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is known for its 19th-century estate houses along Clifton and Lafayette and the Gaslight area around Ludlow, with unusually varied and ambitious architecture.',
      'Houses at this level often still have their original joinery, and the kitchen is usually where a previous decade did the most damage. Where original trim, doors or a back stair survive, matching new work to them is a joinery problem with a real answer — profiles can be replicated, timber can be matched. What we will not do is promise that before seeing it. What is achievable depends on what is actually there.',
    ],
    localFaqs: [
      {
        q: 'Can new joinery match our original trim?',
        a: 'Often, by replicating the profile and matching the timber. How close it gets depends on what survives, so we look before promising anything.',
      },
      {
        q: 'Is it worth keeping the original details?',
        a: 'In houses of this quality, usually — it is much of what the house is worth. Where something is beyond saving we will say so plainly.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Older kitchen in Corryville? Often undoing someone else’s shortcut. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits around the University of Cincinnati and the Uptown hospital campuses, and much of its older housing has been let for decades, frequently divided into units along the way.',
      'Kitchens installed for letting tend to have been installed cheaply and quickly, and the work underneath them shows it — supply teed off wherever was nearest, waste run at whatever fall was convenient, circuits extended from whatever was closest rather than from the panel. Putting in a proper kitchen here usually starts with undoing that. It is not glamorous and it is not optional, and we would rather price it honestly than pretend the existing services are a starting point.',
    ],
    localFaqs: [
      {
        q: 'Can you just replace the cabinets?',
        a: 'Sometimes, but in a house that has been let for years the services behind them are often the real problem. We look before promising a cosmetic job will hold up.',
      },
      {
        q: 'Why does previous cheap work cost me money now?',
        a: 'Because it has to come out before anything good goes in. Correcting improvised supply, waste and circuits is real work, and we would rather it was in the quote.',
      },
    ],
  },

  northside: {
    intro:
      'Older kitchen in Northside? Decades of layers to work through. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue north-west of the Mill Creek valley, a neighborhood of late-1800s and early-1900s frame housing with a strong tradition of owners doing their own work.',
      'That tradition leaves a distinctive kind of kitchen — several eras of improvement stacked on top of each other, each done to the standard of its day. Vinyl over lino over the original boards, a wall that was opened once and patched twice, a circuit added in the 1970s feeding half the room. None of it is unusual and most of it is fixable; what matters is finding it before the contract rather than during the demolition.',
    ],
    localFaqs: [
      {
        q: 'Is previous DIY work a problem?',
        a: 'Not automatically — some of it is perfectly sound. The issue is that it is unpredictable, so we survey properly rather than assuming the last person did it right.',
      },
      {
        q: 'What if you find something serious?',
        a: 'We tell you straight away, with what it means for the price and the programme. Finding it early is the whole reason we look first.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Older kitchen in College Hill? The pantry is your best square footage. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) grew around 19th-century institutions and estates on the north-western ridge, and it retains generous lots and substantial older houses along Hamilton Avenue and Belmont.',
      'Houses of that period frequently still have the working arrangements they were built with — a butler’s pantry between kitchen and dining room, sometimes a back stair, sometimes both. Those spaces are the cheapest expansion available to you: no exterior work, no foundation, and the services already run nearby. Whether one can be absorbed depends on what the wall between does and whether the stair is a required means of escape, and both get established early.',
    ],
    localFaqs: [
      {
        q: 'Can we take the old pantry into the kitchen?',
        a: 'Frequently yes, and it is usually the cheapest space you can gain — no exterior work and the services are already close. What the dividing wall carries decides the detail.',
      },
      {
        q: 'What about the back stair?',
        a: 'Sometimes it can go and sometimes it is doing a job — access or escape — that has to be preserved. That gets established before it appears in a drawing.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Older kitchen in Walnut Hills? Built for a household with staff. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a 19th-century hilltop neighborhood of substantial brick and stone houses on the ridge east of the basin, many built at genuine scale.',
      'Houses this grand were designed with the kitchen deliberately out of the way, because it was a working room for staff rather than a place the family spent time. The result is a small back room, often below or behind the principal rooms, connected by a service corridor. Turning that into the room everyone lives in is the real project, and it is usually more about removing the separation than about the fittings that go in afterwards.',
    ],
    localFaqs: [
      {
        q: 'Why is the kitchen so small in such a large house?',
        a: 'Because it was built as a service room, not a living space. Making it the heart of the house usually means addressing the separation rather than just the fittings.',
      },
      {
        q: 'Does that mean removing walls?',
        a: 'Often, and what they carry is settled structurally first. In houses of this weight that is a real engineering question, not a formality.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Older kitchen in East Walnut Hills? Original joinery worth matching. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) holds some of the city’s most substantial older houses around Madison Road and Grandin, with interiors finished to a standard that is rare now.',
      'Where a kitchen opens into rooms that still carry their original joinery, the new work has to hold its own against it. That is a matching problem with real answers — profiles can be replicated, timber species and grain can be matched, and finishes can be built up to sit alongside a century-old one. What it takes is time at the drawing and sampling stage. What it does not take is pretending a stock door will pass beside original work, because it will not.',
    ],
    localFaqs: [
      {
        q: 'Can new cabinetry sit beside original joinery?',
        a: 'Yes, with the profile replicated, the timber matched and the finish built up deliberately. It takes time at the sampling stage, which is where we spend it.',
      },
      {
        q: 'Would stock cabinetry work here?',
        a: 'Beside original work of this quality it tends to look exactly like what it is. In these houses that is usually a false economy.',
      },
    ],
  },

  avondale: {
    intro:
      'Older kitchen in Avondale? Often reversing a division. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) has grand late-1800s and early-1900s houses on its northern streets, a good number of which were divided into separate units during the last century.',
      'Where a large house was split, the kitchens went in wherever the services could be reached, and returning the house to a single dwelling means unpicking that. A kitchen in what was clearly a bedroom, a waste line run through a principal room’s ceiling, a second-floor supply teed off in a cupboard — these are the traces. Reversing them is satisfying work and it is properly surveyed work, because what was added is rarely documented.',
    ],
    localFaqs: [
      {
        q: 'Can a divided house be put back to one kitchen?',
        a: 'Usually, and the work is in unpicking services that were added without records. We survey what is actually there before pricing rather than guessing.',
      },
      {
        q: 'What happens to the second kitchen?',
        a: 'It comes out, the services get capped back properly, and the room returns to whatever it was built to be. That is scoped work, not a demolition afterthought.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Older kitchen in Hyde Park? Modernise it without flattening it. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) was built largely between the 1890s and the 1930s around Hyde Park Square, and its houses are valued in no small part for the period character they have kept.',
      'That character is an asset with a number attached, which makes the design brief here specific: bring the kitchen fully up to date without stripping out the things that make the house what it is. Original trim, a leaded window, a decent floor, the proportions of the room itself — these are worth working around. A kitchen that could have been dropped into any house built this decade is the one thing that will not serve a house on these streets.',
    ],
    localFaqs: [
      {
        q: 'Will modernising the kitchen hurt the character?',
        a: 'Only if it is done without regard for the house. The brief here is a fully current kitchen that still belongs, which is a design question we take seriously.',
      },
      {
        q: 'Should we keep the original trim and windows?',
        a: 'Where they are sound, usually yes — they are much of why the house is worth what it is. Where something is beyond saving we will tell you plainly.',
      },
    ],
  },

  oakley: {
    intro:
      'Older kitchen in Oakley? Small rooms, and a plan that has to work hard. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) grew as a working neighborhood around the factories along the rail corridor, and its residential blocks are largely early-1900s houses built compactly on narrow lots.',
      'These were not large houses and the kitchens were not large rooms, which means the plan has to earn every inch rather than rely on floor area. Where the room genuinely cannot take a modern layout, the honest options are absorbing an adjacent space, taking a wall down, or accepting a well-executed compact kitchen. We would rather lay those out plainly than promise an island that would leave you unable to open the oven.',
    ],
    localFaqs: [
      {
        q: 'Can I get an island in a kitchen this size?',
        a: 'Often not without clearances that make the room worse to use. Where that is the case we will say so and show you what does work instead.',
      },
      {
        q: 'What are the options if the room is too small?',
        a: 'Absorb an adjacent space, remove a wall where it can go, or design a genuinely good compact kitchen. All three are legitimate; we lay out the trade-offs.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Older kitchen in Mount Lookout? Check what the soffit is hiding. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) sits on the ridge above the river on the east side, with a housing stock running from early-1900s frame through to mid-century brick.',
      'In houses of both eras the boxed soffit above the wall cabinets is the standard unknown. Sometimes it is purely decorative and can simply go, which buys you cabinet height and a much better looking room. Sometimes it carries a duct, a vent or a drain from above, and then it stays or gets rerouted at a cost worth knowing in advance. We open a small section and look rather than pricing it either way on assumption.',
    ],
    localFaqs: [
      {
        q: 'Can the soffit above the cabinets come out?',
        a: 'It depends what is in it. We open a small section and look, because pricing it as empty and finding a duct is exactly the surprise nobody wants.',
      },
      {
        q: 'Is taking it out worth it?',
        a: 'Where it is empty, usually — taller cabinets and a cleaner line change the room considerably for a modest cost.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Older kitchen in Columbia-Tusculum? Nothing here is level. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest settled neighborhood, known for the painted Victorian houses on its hillside and older ground than anywhere else in the city.',
      'In houses of this age, and particularly on ground that has moved over a century and a half, floors slope and walls run out of square in ways that matter once you install cabinetry. Runs have to be scribed, worktops templated in place rather than cut to a drawing, and appliance openings checked against reality rather than a nominal dimension. It is entirely manageable, and it is why measuring properly takes longer here than a survey of a newer house.',
    ],
    localFaqs: [
      {
        q: 'Our floors slope — is that a problem for new cabinets?',
        a: 'It is manageable, and it means scribing the runs and templating the worktops in place rather than cutting to a drawing. It is normal work in houses this old.',
      },
      {
        q: 'Should the floor be levelled first?',
        a: 'Sometimes, and sometimes the movement is long settled and better worked with than fought. We assess which before recommending anything.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Older kitchen in Mount Washington? Post-war has its own problems. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) occupies the hilltop at the eastern edge of the city, with much of its housing built post-war on larger, more regular lots.',
      'A 1950s house is old enough to bring real issues even though it does not feel like an old house. Cast-iron waste that has been draining for seventy years, original service that was generous for its day and is not now, a compact galley plan with a single window, and steel cabinetry that people either love or want gone. None of it is dramatic, but a kitchen of that era is not a blank slate and it should not be priced as one.',
    ],
    localFaqs: [
      {
        q: 'Is a 1950s house really an older home?',
        a: 'Old enough to matter. Cast-iron waste, an electrical service sized for the era and a compact original plan are all real considerations rather than cosmetic ones.',
      },
      {
        q: 'What about the old steel cabinets?',
        a: 'Some people want them kept and restored, others want them gone. Both are legitimate, and it is worth deciding early because it changes the plan.',
      },
    ],
  },

  madisonville: {
    intro:
      'Older kitchen in Madisonville? Several renovations deep already. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is a long-established east-side neighborhood with its own historic centre around Madison Road and Whetsel, and a housing stock of older frame and brick.',
      'Houses here have generally been updated more than once, and each round tends to have covered the last rather than removed it. Under the current kitchen there may be two floors, a ceiling below the ceiling, and a wall finish over the original plaster. That accumulation matters because it changes floor heights, door clearances and what the demolition actually involves — all of which we would rather establish on the survey than at the skip.',
    ],
    localFaqs: [
      {
        q: 'Why does the old flooring build-up matter?',
        a: 'It changes floor heights, appliance openings and door clearances. Finding three layers after the cabinets are ordered is how a programme slips.',
      },
      {
        q: 'Does everything have to come out?',
        a: 'Not always — sometimes a sound build-up can stay. It is a judgement made once we can see what is actually there.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Older kitchen in Pleasant Ridge? Bungalow details worth saving. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) was built largely between the 1910s and the 1930s, with a notably consistent streetscape of bungalows and small colonials.',
      'Houses of that period were built with joinery as standard rather than as an upgrade — built-in dressers, a breakfast nook, glazed cabinet doors, a plate rail. Much of it was ripped out in the decades since, and where it survives it is usually worth keeping and working around. A kitchen that keeps a good original built-in and puts modern function around it reads far better in a house like this than one that clears the room and starts again.',
    ],
    localFaqs: [
      {
        q: 'Should we keep the original built-ins?',
        a: 'Where they survive and are sound, usually yes — they are part of why the house reads the way it does. We design the modern function around them.',
      },
      {
        q: 'Can a breakfast nook stay?',
        a: 'Often, and it is frequently the most-used seat in the house. Whether it stays as-is or gets rebuilt to match is a design decision we make with you.',
      },
    ],
  },

  westwood: {
    intro:
      'Older kitchen in Westwood? Which Westwood decides the job. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is Cincinnati’s largest neighborhood by population, holding everything from 19th-century estate houses near Harrison Avenue to dense early-1900s blocks and post-war subdivisions.',
      'There is no single answer here because there is no single Westwood. A kitchen in an estate house near Harrison brings scale, original joinery and service-room planning; one in a dense early-1900s block brings a small room and century-old wiring; one in a post-war subdivision brings a galley plan and cast-iron waste. We establish which of the three we are in before quoting, because pricing one as another is how a project goes wrong.',
    ],
    localFaqs: [
      {
        q: 'Why does it matter which part of Westwood I am in?',
        a: 'Because the housing spans a century. An estate house, a dense early-1900s block and a post-war subdivision are genuinely different projects.',
      },
      {
        q: 'How do you work out which applies?',
        a: 'A survey of the actual house — its age, construction and what previous work has been done. That comes before any number.',
      },
    ],
  },

  // ---------- Cohort 3 · Independent Hamilton County cities, NKY river cities & the growth corridor ----------

  norwood: {
    intro:
      'Older kitchen in Norwood? Working houses, built close together. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is a separate city surrounded by Cincinnati, built out densely in the early 1900s around what was then a major industrial employer, with houses close together on a tight grid.',
      'These were built as working family houses, which means efficient plans, modest kitchens and very little slack in the layout. Because the city sets its own zoning and permitting, the approvals come from Norwood rather than Cincinnati — worth knowing at the outset. And with neighbours this close, how the work is staged, where the skip sits and when the noisy days fall are practical questions we settle before starting rather than negotiate midway.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit in Norwood?',
        a: 'Norwood does. It is its own city with its own zoning and building department, even though Cincinnati surrounds it.',
      },
      {
        q: 'How do you manage work with neighbours this close?',
        a: 'By planning the staging, the skip position and the noisy days in advance. On a grid this tight that is part of the programme rather than an afterthought.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Older kitchen in Blue Ash? Mostly post-war, with older pockets. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is an independent city in north-eastern Hamilton County whose residential streets were built largely post-war on generous, well-treed lots, with some older properties predating that.',
      'A mid-century house here typically brings an original galley or L-shaped kitchen, a service that was adequate for its decade, and cast-iron waste that has been in the ground a long time. The generous lot sizes help — where the plan genuinely cannot work, extending into the house or out to the rear is more feasible than it is on a tight urban lot. Which route makes sense gets settled once we have seen both the room and the structure around it.',
    ],
    localFaqs: [
      {
        q: 'Is my 1960s house old enough to have these issues?',
        a: 'Old enough, yes. Cast-iron waste, period electrical service and an original compact plan are all real considerations in a house of that age.',
      },
      {
        q: 'Could we extend rather than rework the existing room?',
        a: 'On lots this size it is more feasible than in the city. Whether it is the better value depends on the structure, and we assess both routes.',
      },
    ],
  },

  montgomery: {
    intro:
      'Older kitchen in Montgomery? A 19th-century village core. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) grew from a 19th-century village and has kept the character of its old centre while developing substantial residential streets around it.',
      'That gives two quite different jobs. In the older village-core houses the work is genuinely period — plaster, original joinery, small service-room kitchens and the usual century-old wiring. In the later streets it is a mid-century or newer house with a dated plan. The other thing to establish early is whether anything about the work engages the city’s interest in how buildings present, which is determined by Montgomery rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Does the city take an interest in interior work?',
        a: 'Interior work generally differs from anything affecting the exterior. What applies to your property is determined by the city, and we establish it before design.',
      },
      {
        q: 'Are the village-core houses different to work in?',
        a: 'Considerably. Plaster, original joinery and small service-room kitchens make them a genuine period job rather than a cosmetic refit.',
      },
    ],
  },

  madeira: {
    intro:
      'Older kitchen in Madeira? Mid-century ranches, dated plans. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is a small independent city on the east side, largely built out with mid-century ranches and capes on regular lots.',
      'The recurring job here is a house that is structurally sound and entirely liveable with a kitchen laid out for how people cooked in 1958 — closed off from the living space, a single window, and a run of base units around a compact footprint. Opening it up is usually what people actually want, and that turns immediately into what the dividing wall carries. In a single-storey ranch that is frequently more than it looks, since the roof structure may bear on it.',
    ],
    localFaqs: [
      {
        q: 'Can we open the kitchen into the living room?',
        a: 'Often, and in a single-storey ranch the dividing wall frequently carries roof load. What it is doing gets determined structurally before it appears in a drawing.',
      },
      {
        q: 'Is a beam expensive?',
        a: 'It is a real line rather than a rounding error, and it depends on the span and what sits above. We price it properly rather than leaving it open.',
      },
    ],
  },

  wyoming: {
    intro:
      'Older kitchen in Wyoming? Period houses that deserve care. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is an independent city north of Cincinnati known for its 19th-century and early-1900s houses, mature tree canopy and unusually strong architectural continuity.',
      'Houses of this quality tend to have kept their original joinery, and in the kitchen that usually means a room that was modernised once, badly, in a decade that did not value what it removed. The work here is as much restoration as remodelling — matching what survives, correcting what was done poorly, and putting a fully current kitchen inside a room that still reads as part of the house. That takes longer at the design stage, and it is where the value is.',
    ],
    localFaqs: [
      {
        q: 'Can a modern kitchen still suit a period house?',
        a: 'Yes, when the detailing is matched to the house rather than imported. That work happens at the design and sampling stage, which is where we spend the time.',
      },
      {
        q: 'What if a previous remodel removed the original detail?',
        a: 'It can often be replicated from what survives elsewhere in the house. Where it cannot, we will tell you what is realistic rather than overpromise.',
      },
    ],
  },

  mariemont: {
    intro:
      'Older kitchen in Mariemont? A 1920s plan, protected by design. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden village laid out in the 1920s to a single coherent design, with Tudor and English-village architecture arranged around a central square.',
      'Because the village was built as one piece, the houses share plan types and original details in a way that is unusual — which cuts both ways. It means what works in one house often informs another, and it means the character is collective rather than private, so anything touching the exterior is the village’s business and gets established with them first. Inside, expect small original kitchens, solid construction and the usual century-old services.',
    ],
    localFaqs: [
      {
        q: 'Do we need the village’s approval?',
        a: 'For anything affecting the exterior, expect the village to have a view, and we establish what applies before design. Interior work is generally a different matter.',
      },
      {
        q: 'Are the kitchens all similar here?',
        a: 'The village was built to a set of plan types, so houses often share layouts and details. That familiarity genuinely helps at the design stage.',
      },
    ],
  },

  cheviot: {
    intro:
      'Older kitchen in Cheviot? Modest houses, efficient plans. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a compact independent city on the west side, built out early in the 20th century on a tight grid of modest frame and brick houses.',
      'Kitchens in these houses were sized for the era and are small by current expectations, so the design work is about making a compact room genuinely good rather than pretending it is a larger one. Cheviot issues its own permits and sets its own zoning, which is worth confirming rather than assuming from the neighbouring Cincinnati streets. And in houses of this age the wiring behind the plaster is the standard first-fix question.',
    ],
    localFaqs: [
      {
        q: 'Can a small kitchen still work well?',
        a: 'Very well, when the plan is designed for the room rather than scaled down from a larger one. That is most of the value we add in houses this size.',
      },
      {
        q: 'Does Cincinnati permit this work?',
        a: 'No — Cheviot is its own city and issues its own permits, even though the streets run continuously into Cincinnati neighborhoods.',
      },
    ],
  },

  covedale: {
    intro:
      'Older kitchen in Covedale? Solid 1920s-to-1940s construction. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) sits on the west side beyond Price Hill toward Green Township, developed largely between the 1920s and the 1940s with brick and frame houses on regular lots.',
      'Houses of that period are generally well built and well proportioned, with plaster walls and a kitchen sized as a working room rather than a living one. The two questions that recur are whether the original service can carry a modern kitchen’s circuits and what the wall between kitchen and dining room is doing. Both are answerable early, and both are much better in the contract than discovered behind the plaster in week two.',
    ],
    localFaqs: [
      {
        q: 'Are houses from this era well built?',
        a: 'Generally yes — solid construction and good proportions. The dated parts are the services and the plan, which is exactly what a remodel addresses.',
      },
      {
        q: 'What decides whether the wall can go?',
        a: 'What it carries. That gets determined structurally before design rather than assumed from how the room looks.',
      },
    ],
  },

  covington: {
    intro:
      'Older kitchen in Covington? Solid masonry, Kentucky rules. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) is the largest city in Kenton County, with a 19th-century core of brick rowhouses and townhouses across several distinct historic neighborhoods.',
      'Solid masonry construction changes the mechanics of the job — there is no stud cavity to run cables or ducts through, so services get chased, surface-run behind cabinetry or routed through floors, each with its own cost and finish. Kentucky’s building code and permitting apply rather than Ohio’s. And in a historic neighborhood, anything touching the exterior — including where an extractor terminates — is worth establishing with the city before design.',
    ],
    localFaqs: [
      {
        q: 'How do services run in solid brick walls?',
        a: 'Chased into the masonry, surface-run behind cabinetry, or through the floor. Which suits is a design decision, because each has a different cost and appearance.',
      },
      {
        q: 'Does the extractor outlet need approval?',
        a: 'Where it penetrates the exterior in a historic neighborhood it can. We establish what applies with the city before the design is finalised.',
      },
    ],
  },

  newport: {
    intro:
      'Older kitchen in Newport? Narrow 19th-century river housing. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) sits at the confluence of the Licking and the Ohio, a dense old river city of 19th-century housing on streets running back from the water.',
      'Houses here tend to be narrow and deep, with the kitchen at the back and rooms running one into the next. That plan concentrates the services in one part of the house, which helps, but it also means the kitchen is often the furthest point from the panel and the stack. Where the sink can move depends on the fall available to the existing waste, and that is measured rather than assumed. Kentucky code and permitting apply throughout.',
    ],
    localFaqs: [
      {
        q: 'Can the sink move to the other side of the room?',
        a: 'It depends on the fall available to the existing waste run. That gets measured before it goes in a drawing rather than assumed from the layout.',
      },
      {
        q: 'Is Kentucky permitting different?',
        a: 'Yes — its own code, authority and inspections. We work both sides of the river regularly and handle it as part of the same contract.',
      },
    ],
  },

  bellevue: {
    intro:
      'Older kitchen in Bellevue? Tight houses, tighter access. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Campbell County river city known for its walkable Fairfield Avenue centre and closely spaced 19th-century and early-1900s houses on narrow lots.',
      'Narrow lots mean narrow houses, and narrow houses mean the route in matters as much as the room itself. Cabinetry, appliances and a stone worktop all have to make it through the front door and round whatever turn the hall makes, and where they cannot, the design changes rather than the delivery. We measure the access route as part of the survey, which sounds obvious and is regularly the thing nobody checked.',
    ],
    localFaqs: [
      {
        q: 'Will the worktop fit through the house?',
        a: 'We measure the route in as part of the survey. Where a single slab will not make the turn, the design accounts for it rather than the delivery discovering it.',
      },
      {
        q: 'Where do the materials get stored?',
        a: 'On streets this tight that gets planned in advance, along with parking and the noisy days. It is part of the programme rather than improvised.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Older kitchen in Fort Thomas? Substantial houses, original detail. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) sits on the Campbell County ridge above the Ohio, an established city of tree-lined streets and substantial older houses with long valley views.',
      'Houses of this size and period generally retain good original joinery, and the kitchen is usually the room where that is least intact. The work is matching what survives elsewhere in the house and putting current function inside a room that still belongs to it. Alongside that sit the usual period questions — what the plaster is hiding, whether the service can carry the load, and what the chimney breast in the wall is still doing.',
    ],
    localFaqs: [
      {
        q: 'Can new work match the original joinery elsewhere?',
        a: 'Usually, by replicating profiles and matching timber and finish. How close depends on what survives, so we look before committing to anything.',
      },
      {
        q: 'What about the chimney breast in the kitchen?',
        a: 'Whether it can go depends on what sits above it and whether the flue still serves an appliance. That is settled before the cabinetry is drawn.',
      },
    ],
  },

  florence: {
    intro:
      'Older kitchen in Florence? The older stock is specific. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is Boone County’s largest city, grown substantially in the post-war decades and since, with a comparatively small stock of genuinely older housing among much newer development.',
      'It is worth being straight that most housing here is not old, so this service applies to a particular subset — the farmhouses and early properties that predate the growth, and the mid-century houses now old enough to bring their own issues. If your house is genuinely period we will treat it as such; if it is a 1990s build with a dated kitchen, that is our main kitchen service rather than this one, and it is a different and usually simpler job.',
    ],
    localFaqs: [
      {
        q: 'Is my Florence house old enough for this service?',
        a: 'It depends on the house. The farmhouses and early properties genuinely are; a 1990s build with a dated kitchen is our main kitchen service instead.',
      },
      {
        q: 'Does it matter which one it is?',
        a: 'It changes the price and the programme substantially, so we establish it on the survey rather than assuming from the address.',
      },
    ],
  },

  erlanger: {
    intro:
      'Older kitchen in Erlanger? Mid-century houses, real issues. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is a Kenton County city west of Covington, settled largely with mid-century and later housing, lying close to the Cincinnati/Northern Kentucky International Airport.',
      'A house from the 1950s or 1960s is old enough to bring the things people associate with older homes — cast-iron waste that has drained for decades, an electrical service sized for the appliances of its day, and an original kitchen closed off from the rest of the ground floor. The good news is that construction of that era is generally straightforward to work in, so the surprises are fewer than in a genuinely Victorian house.',
    ],
    localFaqs: [
      {
        q: 'Are mid-century houses easier to work in?',
        a: 'Generally yes — the construction is more predictable than a Victorian house, so there are fewer surprises once the walls are open.',
      },
      {
        q: 'What usually needs upgrading?',
        a: 'The electrical service for a modern kitchen’s circuits, and often the cast-iron waste. Both get assessed before the quote rather than after.',
      },
    ],
  },

  mason: {
    intro:
      'Older kitchen in Mason? A historic core in a new city. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a substantial Warren County city that has grown rapidly in recent decades, with a small historic centre surrounded by much newer development.',
      'The genuinely older housing here is concentrated in and around that original centre, and it is a real period stock — plaster, original joinery, small service kitchens and century-old services. Everything else is comparatively recent. Establishing which you have matters because it changes the job entirely, and because Mason is its own city in Warren County, so both the zoning and the county administration differ from Hamilton County practice.',
    ],
    localFaqs: [
      {
        q: 'Where is the older housing in Mason?',
        a: 'Concentrated in and around the original centre. Away from it the stock is much newer, which is a different and generally simpler kitchen project.',
      },
      {
        q: 'Which authority permits the work?',
        a: 'The City of Mason, in Warren County — both differ from Hamilton County practice, so we confirm requirements with the city.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Older kitchen in West Chester? Older houses exist, but they are the minority. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large township in Butler County along the I-75 corridor, one of the region’s major growth areas, with extensive recent residential development.',
      'Most housing here postdates the growth, so genuinely older properties are the exception — farmhouses and early homes that predate the subdivisions. Those are proper period work with everything that implies. If yours is a 1990s or 2000s house with a kitchen that has simply dated, that is our main kitchen service and a more straightforward project. This is township ground in Butler County, so both the zoning and the administration differ from a Hamilton County city.',
    ],
    localFaqs: [
      {
        q: 'Are there older homes in West Chester?',
        a: 'Some — the farmhouses and early properties that predate the subdivisions. They are genuine period work, but they are the minority of the housing here.',
      },
      {
        q: 'What if my house is newer?',
        a: 'Then our main kitchen remodeling service fits better, and the job is usually simpler and less prone to surprises. We will tell you which applies.',
      },
    ],
  },

  // ---------- Cohort 4 · Basin edges, Mill Creek valley & the near east ----------

  pendleton: {
    intro:
      'Older kitchen in Pendleton? 19th-century brick, wall to wall. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a few blocks of 19th-century Italianate buildings on the eastern edge of Over-the-Rhine, standing shoulder to shoulder on a tight grid.',
      'In a building sharing party walls on both sides, everything about a kitchen has to route through the floor, up an internal wall, or out the back — there is no side elevation to work with. That constrains where the sink and the extractor can go more than the floor area does. Original ceiling heights are generous, which is an opportunity if the cabinetry is scaled to them rather than left with an awkward gap above.',
    ],
    localFaqs: [
      {
        q: 'Where can the extractor vent in a party-wall building?',
        a: 'Through the floor, up an internal route, or out the rear — there is no side elevation. Which is possible gets established before the design is fixed.',
      },
      {
        q: 'What about the tall ceilings?',
        a: 'They are an opportunity if the cabinetry is scaled to them. Stock heights leave a gap that makes a fine room look unfinished.',
      },
    ],
  },

  queensgate: {
    intro:
      'Older kitchen in Queensgate? Very little housing here. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is Cincinnati’s industrial and distribution district west of Downtown, dominated by warehousing, rail infrastructure and commercial premises.',
      'There is very little residential property in Queensgate, so an older-home kitchen here is an unusual case rather than a routine one. Where a residence does exist it is worth establishing what the building was originally built as, since a converted commercial or industrial space brings a different set of questions — structure, services and ventilation among them — from a house. We are glad to look at a specific property.',
    ],
    localFaqs: [
      {
        q: 'Are there homes in Queensgate?',
        a: 'Very few — it is an industrial and distribution district. A residential kitchen project here is unusual rather than routine.',
      },
      {
        q: 'What if mine is a converted building?',
        a: 'Then the questions differ from a house — structure, services and ventilation especially. Worth establishing what it was originally before design.',
      },
    ],
  },

  cuf: {
    intro:
      'Older kitchen in CUF? Decades of letting leave a mark. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview on the hillsides west and south of the University of Cincinnati, with dense older housing on steep streets.',
      'Much of this housing has been let for a very long time, often divided into units, and the kitchens reflect the economics of that — installed quickly, replaced rarely, with services extended rather than renewed. A proper kitchen here usually begins by removing what was improvised. On the steeper streets there is a second factor: getting materials in and waste out of a house partway up a hill is a genuine part of the programme.',
    ],
    localFaqs: [
      {
        q: 'Why does previous rental work matter?',
        a: 'Because improvised supply, waste and circuits usually have to come out before anything good goes in. That is real work and it belongs in the quote.',
      },
      {
        q: 'Does the hill make the job harder?',
        a: 'It affects access for materials and waste removal, which we plan into the programme rather than discover on the first day.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Older kitchen in Camp Washington? Workers’ housing among the works. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) sits in the Mill Creek valley north-west of the basin, historically one of the city’s major industrial districts, with a surviving pocket of older workers’ housing.',
      'These are small, efficiently planned houses built for people who worked nearby, and the kitchens are correspondingly compact. In housing of this age and type the recurring items are plaster on lath, wiring that has been extended more than renewed, and supply pipe old enough to have narrowed from the inside. All three are ordinary work; the point is finding them before the contract is signed rather than during the demolition.',
    ],
    localFaqs: [
      {
        q: 'Are these houses difficult to remodel?',
        a: 'Not difficult, but not blank slates either. Plaster, extended wiring and old supply pipe are the usual three, and all are better priced than discovered.',
      },
      {
        q: 'Can a compact kitchen still be a good one?',
        a: 'Yes, when the plan is designed for the room rather than scaled down from something bigger. That is where the design work earns its keep.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Older kitchen in South Fairmount? Valley houses that have seen damp. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) runs along the Lick Run valley west of the basin, a narrow corridor between the hillsides with older housing on both the valley floor and its sides.',
      'Houses on low valley ground tend to have a history with water, and the kitchen shows it first — in the floor structure, at the base of the walls and in whatever has been done about it before. Before new cabinetry goes in it is worth establishing whether the cause was dealt with or merely covered, because a beautiful kitchen installed over an unresolved damp problem is an expensive way to postpone the question.',
    ],
    localFaqs: [
      {
        q: 'What if there has been damp in the kitchen?',
        a: 'We establish whether the cause was resolved or just covered. Installing over an unresolved problem only postpones it, at considerable cost.',
      },
      {
        q: 'Does that always mean major work?',
        a: 'Not always — sometimes it was properly dealt with years ago. We look rather than assume it either way.',
      },
    ],
  },

  'east-end': {
    intro:
      'Older kitchen in the East End? River-adjacent houses, older services. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a long narrow neighborhood running east along Kellogg Avenue between the Ohio River and the hillside, with older housing on largely low ground.',
      'In houses this close to the river, the services below the kitchen deserve attention before anything above it is planned. Floor structure, the condition of what runs under it, and whether previous work accounted for the ground it sits on all bear on a new kitchen’s life expectancy. Where a house has been raised or altered for flood reasons at some point, that history is worth understanding rather than working blindly around.',
    ],
    localFaqs: [
      {
        q: 'Does the river location affect a kitchen remodel?',
        a: 'It affects what is under the floor and how previous work was done. We look below before planning what sits above.',
      },
      {
        q: 'What if the house was altered for flood reasons?',
        a: 'That history is worth understanding, because it changes floor structure and service routes. We establish it rather than working around it blindly.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Older kitchen in North Fairmount? Hillside frame houses. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) sits on the hillside above the Mill Creek valley west of the basin, a small neighborhood of older frame housing on steep streets.',
      'Frame houses set into a slope tend to have moved a little over a century, and the kitchen is usually where that shows in the floor. That does not necessarily mean a problem — much of the movement is long settled — but it does mean cabinetry gets scribed and worktops templated in place rather than cut from a drawing. Establishing whether the movement is historic or ongoing is worth doing before anything is installed on top of it.',
    ],
    localFaqs: [
      {
        q: 'The kitchen floor slopes — should I worry?',
        a: 'Often not; much hillside movement is long settled. What matters is establishing whether it is historic or ongoing before installing anything on it.',
      },
      {
        q: 'How do cabinets handle an uneven floor?',
        a: 'They get scribed to it and the worktops templated in place. It is normal work in houses of this age and terrain.',
      },
    ],
  },

  evanston: {
    intro:
      'Older kitchen in Evanston? Late-1800s houses near Xavier. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) lies on the east side around Xavier University, an older neighborhood of late-1800s and early-1900s housing with a mix of owner-occupied and let property.',
      'The age is the constant here: plaster on lath, original room proportions and a kitchen that was built as a back room. Whether a particular house has been let matters, because that usually determines how much improvised service work sits behind the walls. Both cases are ordinary; they price differently, which is why we survey the specific house rather than the street.',
    ],
    localFaqs: [
      {
        q: 'Does it matter whether the house has been rented?',
        a: 'It usually determines how much improvised service work sits behind the walls, and that changes the price. We survey the specific house.',
      },
      {
        q: 'What is standard in houses of this age?',
        a: 'Plaster on lath, a kitchen built as a back room and wiring that predates modern kitchen loads. All ordinary, all worth pricing properly.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Older kitchen in South Cumminsville? Small valley houses. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) sits in the Mill Creek valley north-west of the basin, a small neighborhood of older housing bounded by rail and industrial land.',
      'Housing here is modest and compact, built for people working nearby, with kitchens sized accordingly. The recurring work is the period standard — plaster, dated services and a plan that assumed cooking was a task rather than a social activity. Where the room genuinely will not take a modern layout, we would rather say so and show what does work than sell an arrangement that leaves the space worse to use.',
    ],
    localFaqs: [
      {
        q: 'What if the room is too small for what I want?',
        a: 'We will say so plainly and show what does work in the space. Selling a layout that makes a room worse to use helps nobody.',
      },
      {
        q: 'Can we borrow space from next door?',
        a: 'Sometimes, depending on what the dividing wall carries and what the adjacent room is doing. That gets assessed on the survey.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Older kitchen in English Woods? Limited housing on the hilltop. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) occupies a hilltop above the Mill Creek valley on the west side, substantially cleared of its earlier large-scale housing.',
      'With much of the earlier housing gone, individual older homes here are comparatively few, so this is an unusual location for the service rather than a routine one. Where a period property does stand, the work is the same as anywhere of its age — establishing what is behind the plaster, what the service can carry and what the plan will allow. We are glad to look at a specific house on its own terms.',
    ],
    localFaqs: [
      {
        q: 'Are there many older homes here?',
        a: 'Comparatively few, given how much of the earlier housing was cleared. It is an unusual location for this service rather than a routine one.',
      },
      {
        q: 'Will you still come out?',
        a: 'Of course. Where a period house stands the work is the same as anywhere of its age, and we assess it on its own terms.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Older kitchen in North Avondale? Ambitious houses, ambitious detail. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is known for substantial late-1800s and early-1900s houses on broad tree-lined streets, among the most architecturally ambitious residential fabric in the city.',
      'Houses built at this level usually retain original joinery, and the kitchen is where a mid-century modernisation most often did damage. The work here is genuinely restorative — replicating what survives, correcting what was done badly, and fitting a fully modern kitchen inside a room that still reads as part of a house of this quality. Expect the design and sampling stage to take longer, because that is where the outcome is actually decided.',
    ],
    localFaqs: [
      {
        q: 'Is this restoration or remodelling?',
        a: 'In houses of this quality, usually both — replicating what survives while fitting a fully current kitchen inside it.',
      },
      {
        q: 'Why does design take longer here?',
        a: 'Because matching profiles, timber and finish to century-old work is where the result is decided. Rushing that stage is what makes new work look new.',
      },
    ],
  },

  millvale: {
    intro:
      'Older kitchen in Millvale? Mostly planned housing here. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small neighborhood in the Mill Creek valley on the west side, developed largely around planned housing rather than individually owned period homes.',
      'Because of how the neighborhood developed, privately owned older houses are not a large part of the stock here, so this service applies to a limited number of properties. Where one exists we are glad to assess it properly. Where the property is part of a managed development, the work usually runs through the managing organisation rather than directly, which is a different route and worth establishing at the outset.',
    ],
    localFaqs: [
      {
        q: 'Are there privately owned older homes in Millvale?',
        a: 'Some, but they are a limited part of the stock given how the neighborhood developed. We are glad to look at a specific property.',
      },
      {
        q: 'What if the property is part of a managed development?',
        a: 'Then the work usually runs through the managing organisation rather than directly. Worth establishing that route at the outset.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Older kitchen in Paddock Hills? A small mid-century enclave. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, quiet residential neighborhood on the north side, with mid-century houses on curving streets and a settled, self-contained feel.',
      'Mid-century houses bring their own version of the older-home problem: a kitchen closed off from the living space, an electrical service sized for the appliances of its decade, and cast-iron waste that has been working for a long time. The construction is generally straightforward to work in, which means fewer surprises than a Victorian house — but the services and the plan are genuinely dated and should be priced as such.',
    ],
    localFaqs: [
      {
        q: 'Is a mid-century house easier to work in?',
        a: 'Generally yes — the construction is more predictable, so there are fewer surprises once the walls are open.',
      },
      {
        q: 'What still needs attention?',
        a: 'The electrical service for modern kitchen circuits, often the cast-iron waste, and a plan that closes the kitchen off from everything else.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Older kitchen in Spring Grove Village? Valley housing beside industry. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) lies along the Mill Creek valley on the north side near Spring Grove Cemetery, with older housing set among rail corridors and long-established commercial premises.',
      'The housing is modest and of an age where plaster, dated services and small kitchens are the norm. On valley ground it is also worth checking what is under the kitchen floor before planning what sits on it, since low-lying houses in this corridor have often had water at some point. Establishing whether that was resolved properly is the sensible first step rather than an afterthought.',
    ],
    localFaqs: [
      {
        q: 'Should the floor be checked before new cabinets?',
        a: 'On low valley ground, yes. If there has been water at any point, we establish whether it was properly resolved before installing over it.',
      },
      {
        q: 'What else is typical here?',
        a: 'Plaster on lath, dated services and compact kitchens. All ordinary period work, and all better in the quote than in a change order.',
      },
    ],
  },

  linwood: {
    intro:
      'Older kitchen in Linwood? Small, low, and long-settled. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smallest neighborhoods, sitting low on the east side near the confluence of the Little Miami and the Ohio, hemmed in by rail and the hillside.',
      'The houses are modest and their kitchens compact, and on ground this low what sits beneath the floor matters as much as what goes above it. Floor structure, service condition and any history of water are the first things we look at. Beyond that it is standard period work — plaster, dated wiring and a plan built for a different way of cooking.',
    ],
    localFaqs: [
      {
        q: 'What gets looked at first in a house here?',
        a: 'What is under the kitchen floor — structure, service condition and any history of water. That comes before planning anything above it.',
      },
      {
        q: 'Are the kitchens all small?',
        a: 'Generally compact, yes. A well-designed compact kitchen is usually a better outcome than forcing a layout the room cannot take.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Older kitchen in Bond Hill? Post-war houses, dated plans. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood developed substantially in the mid-20th century, with post-war houses on regular, reasonably wide lots.',
      'These houses are generally sound and straightforward to work in, which makes them good value to remodel — the money goes into the kitchen rather than into fixing what the demolition uncovered. The dated parts are the ones you would expect: a kitchen closed off from the living space, an electrical service sized for its era, and cast-iron waste. All three are known quantities rather than unknowns.',
    ],
    localFaqs: [
      {
        q: 'Are these houses good value to remodel?',
        a: 'Generally yes. The construction is predictable, so more of the budget goes into the kitchen rather than into fixing surprises.',
      },
      {
        q: 'Can the kitchen be opened up?',
        a: 'Often, and what the dividing wall carries gets determined structurally first. In single-storey houses it frequently carries roof load.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Older kitchen in Villages of Roll Hill? Largely planned housing. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) sits on a hilltop above the Mill Creek valley on the west side, built around large-scale planned housing rather than individually owned period homes.',
      'As with the other planned-housing neighborhoods in this valley, privately owned older houses are not really a feature here, so this service applies to few properties. Where the property forms part of a managed development, work generally runs through the managing organisation rather than with an individual owner — a different route that is worth establishing before anything else is discussed.',
    ],
    localFaqs: [
      {
        q: 'Does this service apply here?',
        a: 'To a limited number of properties. The area was built around planned housing rather than individually owned period homes.',
      },
      {
        q: 'How does it work in a managed development?',
        a: 'The work usually runs through the managing organisation rather than directly with an owner. That is worth establishing at the outset.',
      },
    ],
  },

  // ---------- Cohort 5 · West-side hilltops, north-side villages & the independent municipalities ----------

  'east-westwood': {
    intro:
      'Older kitchen in East Westwood? Early-1900s frame, compact plans. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a compact west-side neighborhood between Westwood proper and the Mill Creek valley, with early-1900s housing on streets that fall away at the edges.',
      'Houses of this period were built with the kitchen at the back and a door between it and everything else, which is the layout most people now want changed. Whether that door becomes an opening depends on what the wall carries — and in a two-storey frame house of this age, that is worth determining rather than assuming from how thin the wall looks. The plaster comes off first either way, and what it reveals sets the rest.',
    ],
    localFaqs: [
      {
        q: 'Can the kitchen wall be opened up?',
        a: 'It depends what it carries, and a thin-looking wall in a two-storey frame house can still be structural. That gets determined before design.',
      },
      {
        q: 'What usually turns up behind the plaster?',
        a: 'The state of the framing and the real condition of the wiring. Both set the budget, which is why we look before quoting.',
      },
    ],
  },

  'western-hills': {
    intro:
      'Older kitchen in Western Hills? 1920s to 1940s, well built. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the broad name for the established west-side area along the ridge around Glenway and Werk, with 1920s-to-1940s brick and frame housing on regular lots.',
      'Houses of this era are generally solid and well proportioned, and the kitchen is usually the one room that has aged badly rather than the house itself. Plaster walls, a service sized for its decade and a room planned as a work space are the standard three. Because the name spans more than one jurisdiction, we confirm which authority issues the permit for the specific address rather than assuming from the neighborhood name.',
    ],
    localFaqs: [
      {
        q: 'Which authority permits the work?',
        a: 'It depends on the address — the name spans more than one jurisdiction. We confirm it for the specific property before starting.',
      },
      {
        q: 'Are these houses well built?',
        a: 'Generally yes. It is usually the kitchen that has dated rather than the house, which is a good position to remodel from.',
      },
    ],
  },

  california: {
    intro:
      'Older kitchen in California? Semi-rural houses at the city’s edge. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far south-eastern neighborhood on the Ohio River, a semi-rural pocket of wooded ground and larger parcels.',
      'Houses out here vary more than in a platted neighborhood — some genuinely old, some added to over generations, some with outbuildings and arrangements that predate any code. That variety means the survey matters more than usual, particularly around what services actually serve the kitchen and how previous additions were tied in. It is rewarding work; it is not work to price from a photograph.',
    ],
    localFaqs: [
      {
        q: 'Why does the survey matter more here?',
        a: 'Because the houses vary so much. Additions made over generations and services extended piecemeal mean the specific property tells you far more than the area does.',
      },
      {
        q: 'Are older additions a problem?',
        a: 'Not automatically, but how they were tied in structurally and for services is worth establishing before planning a kitchen inside one.',
      },
    ],
  },

  carthage: {
    intro:
      'Older kitchen in Carthage? A former village on narrow lots. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a small north-side neighborhood that began as an independent village along the Mill Creek corridor, with modest older housing on narrow lots.',
      'Narrow lots produced narrow houses, and narrow houses produced kitchens where the layout has very little slack. That makes the design work specific: every inch of the run matters, appliance sizes have to be checked against real openings rather than nominal ones, and the route in for materials is worth measuring before anything is ordered. All of it is manageable when it is planned rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Do standard appliances fit these kitchens?',
        a: 'Not always. We check real openings rather than nominal sizes, because in houses this narrow the difference matters.',
      },
      {
        q: 'Is getting materials in a problem?',
        a: 'It is worth measuring the route before ordering. A worktop that will not make the turn is a problem best found at survey, not delivery.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Older kitchen in Winton Hills? Mostly planned housing. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) sits on the north side above the Mill Creek valley, combining planned residential housing with a substantial industrial and business park.',
      'Individually owned older houses are a limited part of the stock here, so this service applies to relatively few properties. Where the property is part of a managed development, the work generally runs through the managing organisation rather than with an individual owner, and that route is worth establishing first. Where a privately owned period house does exist, we assess it exactly as we would anywhere of its age.',
    ],
    localFaqs: [
      {
        q: 'Does this apply to my property?',
        a: 'It depends whether it is privately owned or part of a managed development. That route is worth establishing before anything else is discussed.',
      },
      {
        q: 'Will you assess a privately owned older house here?',
        a: 'Certainly, and on exactly the same terms as anywhere else of its age.',
      },
    ],
  },

  roselawn: {
    intro:
      'Older kitchen in Roselawn? Mid-century on regular lots. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood developed largely mid-century, with houses on regular lots and a mix of uses along the Reading Road corridor.',
      'Mid-century housing here is generally predictable to work in, which is genuinely good news — fewer unknowns behind the walls, so the budget goes into the kitchen. What does need addressing is the same set every time: a service sized for the appliances of the day, cast-iron waste with decades behind it, and a plan that shut the kitchen off from the rest of the house. Known quantities, priced as such.',
    ],
    localFaqs: [
      {
        q: 'Are there fewer surprises in a mid-century house?',
        a: 'Generally yes. The construction is predictable, so more of the budget goes into the finished kitchen rather than into remediation.',
      },
      {
        q: 'What always needs doing?',
        a: 'The electrical service for modern circuits, usually the cast-iron waste, and opening up a plan that was designed to close the kitchen off.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Older kitchen in Mount Airy? Wooded ground, varied housing. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) occupies high ground on the north-west side around Mount Airy Forest, with wooded parcels and a housing stock spanning several decades.',
      'The range here means the first job is establishing what you actually have — an early-1900s frame house and a post-war build present completely different problems behind the same plaster-looking wall. On wooded parcels there is a secondary point worth raising: houses under heavy tree cover tend to hold moisture longer, so the condition of the floor structure below a kitchen is worth checking before new cabinetry goes on top of it.',
    ],
    localFaqs: [
      {
        q: 'Does heavy tree cover affect the house?',
        a: 'It can mean the structure holds moisture longer, so we check the floor below a kitchen before installing new cabinetry over it.',
      },
      {
        q: 'How do you know which era my house is?',
        a: 'From the construction itself on the survey. It matters, because the two eras present very different problems behind similar-looking walls.',
      },
    ],
  },

  hartwell: {
    intro:
      'Older kitchen in Hartwell? A former village with intact character. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) began as an independent village north of the city and kept the feel of one, with late-1800s and early-1900s houses on a compact grid.',
      'Houses that have held their character this well usually retain original details in the rooms around the kitchen even where the kitchen itself has been redone. That makes the matching question the interesting one — how new joinery relates to the trim, doors and floors it will sit alongside. Where the original kitchen detail is long gone, it can often be replicated from what survives elsewhere in the house.',
    ],
    localFaqs: [
      {
        q: 'Can lost kitchen detail be replicated?',
        a: 'Often, from what survives elsewhere in the house — profiles and timber can be matched. We look at the whole house rather than just the room.',
      },
      {
        q: 'Does new work have to match exactly?',
        a: 'It has to sit comfortably, which is not always the same as matching exactly. That is a design conversation worth having early.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Older kitchen in Kennedy Heights? Varied housing on rolling ground. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) sits on the north-east side on rolling ground, with a varied older housing stock and an active local arts presence.',
      'The variety here is real — houses of several eras within a few streets — so the era of your specific house does more to set the project than the neighborhood does. What is consistent is the terrain: on ground that rises and falls, older houses have often settled a little, and that shows up in the kitchen floor. Whether it is historic movement or something ongoing is worth establishing before cabinetry is installed over it.',
    ],
    localFaqs: [
      {
        q: 'Is a sloping kitchen floor a concern?',
        a: 'Often it is long-settled movement rather than an active problem. Establishing which comes before installing anything on top of it.',
      },
      {
        q: 'Does the neighborhood tell you what my house needs?',
        a: 'Less than usual here, because the housing spans several eras within a few streets. The specific house is what matters.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Older kitchen in St. Bernard? Its own city, its own permits. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is an independent city entirely surrounded by Cincinnati, built compactly in the early 1900s beside the long-established industrial works in the Mill Creek valley.',
      'These are early-1900s working family houses — efficient plans, modest kitchens, plaster on lath and services that have been extended rather than renewed. The practical point specific to St. Bernard is that it sets its own zoning and issues its own permits, so a Cincinnati approval means nothing here. We establish the city’s requirements at the outset rather than partway through.',
    ],
    localFaqs: [
      {
        q: 'Does Cincinnati permit work in St. Bernard?',
        a: 'No. St. Bernard is its own city with its own building department, despite being entirely surrounded by Cincinnati.',
      },
      {
        q: 'What is typical in these houses?',
        a: 'Efficient early-1900s plans, modest kitchens, plaster on lath, and wiring that has been extended over the decades rather than renewed.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Older kitchen in Elmwood Place? Very small houses, very small rooms. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a small independent village north of Cincinnati in the Mill Creek valley, densely built in the late 1800s and early 1900s on notably small lots.',
      'Small lots meant small houses and genuinely small kitchens, and that is the honest starting point. The design work is about making a compact room work properly — appliance sizes checked against real openings, storage planned rather than assumed, and no layout that leaves you unable to open two doors at once. The village issues its own permits, which is worth confirming rather than assuming from the county.',
    ],
    localFaqs: [
      {
        q: 'Can these small kitchens really be improved much?',
        a: 'Considerably, when the plan is designed for the actual room. Most of the gain comes from storage and workflow rather than from finding extra floor area.',
      },
      {
        q: 'Who issues the permit?',
        a: 'The village does. Elmwood Place has its own zoning and permitting rather than following county practice.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Older kitchen in Delhi Hills? Township ground, mixed eras. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits on the west side above the Ohio in Delhi Township, historically a greenhouse and nursery area, with mid-century and later housing on ground that rolls toward the river.',
      'Delhi Township rather than the city governs here, which is the first thing to confirm for an address. The housing is largely mid-century onward, which means predictable construction and a familiar list — dated service, cast-iron waste and a kitchen closed off from the living space. Where an older property predates the post-war development, it is a genuinely different job and we price it as one.',
    ],
    localFaqs: [
      {
        q: 'Who governs building work in Delhi Hills?',
        a: 'Delhi Township, not the City of Cincinnati. We confirm requirements with the township for the specific address.',
      },
      {
        q: 'Is my house mid-century or older?',
        a: 'Most here are mid-century onward, but some predate that. It changes the job substantially, so we establish it on the survey.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Older kitchen in Golf Manor? A small village, compact houses. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small independent village surrounded by Cincinnati on the north-east side, developed largely in the early and mid-20th century on a compact grid.',
      'Houses here are modest and well built for their period, with kitchens sized to match. The village runs its own zoning and permitting, which is easy to overlook on streets that read as continuous with the city — and getting that right at the outset saves time later. Behind the plaster, expect the usual for the era: services extended over the decades and a plan that separated the kitchen from everything else.',
    ],
    localFaqs: [
      {
        q: 'Is Golf Manor part of Cincinnati?',
        a: 'No, it is its own village with its own permitting, even though Cincinnati surrounds it and the streets run continuously.',
      },
      {
        q: 'What is behind the walls in these houses?',
        a: 'Typically services that have been extended rather than renewed, and a plan that shut the kitchen off. Both ordinary, both worth pricing properly.',
      },
    ],
  },

  fairfax: {
    intro:
      'Older kitchen in Fairfax? A small village, mid-century stock. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small independent village on the east side between Mariemont and the Red Bank corridor, with modest mid-century housing.',
      'Mid-century construction here is generally straightforward to work in, so the project tends to be predictable — which is worth something. The dated elements are consistent: an electrical service sized for its decade, cast-iron waste, and a kitchen shut off from the living space by a wall people now want opened. The village sets its own permitting, which we confirm rather than assume from a neighbouring jurisdiction.',
    ],
    localFaqs: [
      {
        q: 'Is this an easy house to remodel?',
        a: 'Comparatively, yes. Mid-century construction is predictable, which keeps the surprises down and the budget in the kitchen.',
      },
      {
        q: 'Who issues the permit?',
        a: 'The village does. Fairfax sets its own zoning and permitting rather than following a neighbouring jurisdiction.',
      },
    ],
  },

  mack: {
    intro:
      'Older kitchen in Mack? Post-war township housing. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an unincorporated Green Township community on the west side, developed substantially in the post-war decades with houses on regular, comfortably sized lots.',
      'Green Township and Hamilton County govern here rather than a city. The housing is post-war and predictable, and the generous lot sizes mean that where a kitchen genuinely cannot work within its existing footprint, extending is a realistic option rather than a fantasy. Whether reworking or extending is better value depends on the structure and the services, and we assess both rather than defaulting to the larger job.',
    ],
    localFaqs: [
      {
        q: 'Should we extend or rework the existing kitchen?',
        a: 'It depends on the structure and where the services run. We assess both rather than defaulting to the bigger job.',
      },
      {
        q: 'Who governs building work in Mack?',
        a: 'Green Township and Hamilton County. It is unincorporated, so no city zoning applies.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Older kitchen in Monfort Heights? Space to work with. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is an unincorporated Green Township community on the north-west side, developed from the mid-20th century onward with generous lots.',
      'The lot sizes are the advantage here — where an original kitchen is too small or too closed off, there is genuinely room to extend rather than only to rearrange. The construction is mid-century and predictable, so the unknowns are fewer than in a period house. The usual dated items apply: a service sized for its decade and a plan that treated the kitchen as a separate work room.',
    ],
    localFaqs: [
      {
        q: 'Is extending realistic here?',
        a: 'More so than in most of the county, given the lot sizes. Whether it is the better value depends on the structure, which we assess.',
      },
      {
        q: 'How predictable is the construction?',
        a: 'Mid-century building is generally straightforward to work in, so there are fewer surprises than in a genuinely period house.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Older kitchen in Bridgetown? Post-war subdivisions, familiar problems. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is an unincorporated Green Township community on the west side, built out largely through the post-war decades in platted residential subdivisions.',
      'Houses built as part of a subdivision tend to share a plan, which is genuinely useful — what we learn in one house often applies down the street, and the structural questions have usually been answered before. The recurring work is the era’s standard: opening the kitchen to the living space, upgrading a service sized for fewer appliances, and dealing with cast-iron waste that has done long service.',
    ],
    localFaqs: [
      {
        q: 'Does it help that houses here are similar?',
        a: 'It does. Where a subdivision shares a plan, the structural questions are often already answered, which speeds up design and reduces risk.',
      },
      {
        q: 'What is the most common request?',
        a: 'Opening the kitchen to the living space. What the dividing wall carries decides the detail, and that gets checked structurally first.',
      },
    ],
  },

  // ---------- Cohort 6 · Springfield, Colerain & Anderson Townships, north-side cities & east villages ----------

  finneytown: {
    intro:
      'Older kitchen in Finneytown? 1950s and 60s, aged in place. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is an unincorporated Springfield Township community north of the city, developed largely in the 1950s and 1960s across rolling, well-treed ground.',
      'Houses of that vintage are now old enough that the original kitchen has almost always been replaced at least once, and the quality of that intermediate remodel is what we assess first. A competent 1990s refit leaves a workable base; a cheap one usually has to come out entirely, services included. Springfield Township and Hamilton County govern rather than a city, which we confirm for the address.',
    ],
    localFaqs: [
      {
        q: 'Does a previous remodel help or hurt?',
        a: 'It depends entirely on how well it was done. A competent refit leaves a usable base; a cheap one usually has to come out, services and all.',
      },
      {
        q: 'Who governs the work here?',
        a: 'Springfield Township and Hamilton County — it is unincorporated, so there is no city zoning involved.',
      },
    ],
  },

  amberley: {
    intro:
      'Older kitchen in Amberley Village? Large houses, generous rooms. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an independent village on the north-east side known for large, heavily wooded residential parcels and a deliberately low-density character.',
      'Houses here tend to be substantial, which means the kitchen usually has room to become what people now want without borrowing from elsewhere — the constraint is rarely floor area. What does need settling is the village’s own requirements, since Amberley sets its own zoning, permitting and engineering standards rather than following county practice. On larger houses, how the kitchen connects to the rest of the plan is usually the more interesting design question.',
    ],
    localFaqs: [
      {
        q: 'Is space usually the constraint here?',
        a: 'Rarely. In houses this size the more interesting question is how the kitchen connects to the rest of the plan rather than how to find more floor area.',
      },
      {
        q: 'Who sets the requirements?',
        a: 'The village. Amberley has its own zoning, permitting and engineering standards, so county practice is not the reference point.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Older kitchen in Arlington Heights? A tiny village, modest houses. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is one of Hamilton County’s smallest villages, a compact residential pocket in the Mill Creek corridor bounded by highway, rail and industrial land.',
      'The houses are modest and the kitchens compact, which makes the design work about getting real function into a small room rather than about ambition. The village runs its own zoning and permitting despite its size, which is worth confirming rather than assuming from the county. Behind the walls, expect what the era gives: extended services and a plan that kept the kitchen separate.',
    ],
    localFaqs: [
      {
        q: 'Does such a small village do its own permitting?',
        a: 'Yes, despite its size it sets its own zoning and permitting. We confirm requirements with the village rather than assuming county practice.',
      },
      {
        q: 'How much can a small kitchen be improved?',
        a: 'A great deal, mostly through storage and workflow. Designing for the actual room beats scaling down a plan meant for a bigger one.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Older kitchen in North College Hill? Dense early-1900s stock. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is an independent city on the north-west side, developed densely through the first half of the 20th century with modest houses on small, regular lots.',
      'These houses were built efficiently and their kitchens reflect it — compact rooms, separated from the living space, with services that have been added to over the decades. The city sets its own zoning and issues its own permits, which is easy to miss on streets running continuously into neighbouring Cincinnati and township ground. That gets confirmed at the outset rather than partway through.',
    ],
    localFaqs: [
      {
        q: 'Which authority permits the work?',
        a: 'North College Hill does — it is its own city, even though the streets run continuously into Cincinnati and township ground nearby.',
      },
      {
        q: 'Are the kitchens usually small?',
        a: 'Compact, yes, and separated from the living space. Opening that up is the most common request, subject to what the wall carries.',
      },
    ],
  },

  newtown: {
    intro:
      'Older kitchen in Newtown? A village with genuinely old houses. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small independent village on the east side near the Little Miami, with a village core, larger parcels and a more rural feel than the townships around it.',
      'The older houses in and around the village core are genuine period properties, and some have been added to over generations in ways that were never documented. That makes the survey the important part — how additions were tied in, where services actually run, and what the original structure is doing. The village sets its own zoning and permitting, distinct from the surrounding township.',
    ],
    localFaqs: [
      {
        q: 'What if the house has been added to over the years?',
        a: 'Then how those additions were tied in — structurally and for services — is the thing to establish. It is rarely documented, so we survey it properly.',
      },
      {
        q: 'Village or township rules?',
        a: 'Newtown is its own village with its own zoning and permitting, which differs from the surrounding township ground.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Older kitchen in Turpin Hills? Larger houses on wooded parcels. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is an unincorporated Anderson Township community on the east side, characterised by larger, well-treed residential parcels.',
      'The houses here are generally substantial and largely post-war onward, which means predictable construction and kitchens that are dated rather than inadequate. Floor area is seldom the constraint, so the work tends to be about connection — opening the kitchen to family space and reworking a plan that separated them. Anderson Township and Hamilton County govern, with no village or city process to satisfy.',
    ],
    localFaqs: [
      {
        q: 'Is the kitchen usually too small here?',
        a: 'Rarely. More often it is dated and closed off, so the work is about connection to the rest of the house rather than finding more area.',
      },
      {
        q: 'Who governs the permit?',
        a: 'Anderson Township and Hamilton County — it is unincorporated, so there is no village or city process involved.',
      },
    ],
  },

  silverton: {
    intro:
      'Older kitchen in Silverton? A small city, early-1900s houses. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a compact independent city on the north-east side, developed largely in the first half of the 20th century with modest houses on regular lots.',
      'Houses of this period bring the familiar list — plaster on lath, a compact kitchen at the back, and services extended rather than renewed as appliances multiplied. The construction is generally sound, which means the remodel is about the plan and the services rather than about repairing the house. The city runs its own zoning and permitting, which we confirm for the address.',
    ],
    localFaqs: [
      {
        q: 'Are these houses structurally sound?',
        a: 'Generally yes. The dated parts are the plan and the services, which is a good position to remodel from rather than a problem.',
      },
      {
        q: 'Who permits the work?',
        a: 'The city does. Silverton sets its own zoning and permitting despite how continuous the streets look with neighbouring communities.',
      },
    ],
  },

  lockland: {
    intro:
      'Older kitchen in Lockland? A canal-era town, valley ground. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a small independent city in the Mill Creek valley that grew as a canal and milling town, with compact older housing among long-established industrial premises.',
      'Housing this old on low valley ground gives two things to check before anything else: what the plaster is hiding, and whether there is any history of water beneath the kitchen floor. Both are ordinary findings in a town of this age and both are far cheaper to establish on a survey than during demolition. The city sets its own zoning and permitting.',
    ],
    localFaqs: [
      {
        q: 'What gets checked first here?',
        a: 'What is behind the plaster and whether there is any history of water below the kitchen floor. Both are common in a town of this age.',
      },
      {
        q: 'Does water history rule out a remodel?',
        a: 'Not at all — it means establishing whether the cause was resolved before installing over it, which is a straightforward assessment.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Older kitchen in Groesbeck? Post-war, platted, predictable. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is an unincorporated Colerain Township community on the north-west side, built out substantially in the post-war decades across platted subdivisions.',
      'Subdivision housing of this era is straightforward to work in and shares plans across streets, which reduces the unknowns considerably. The recurring items are the era’s standard: a kitchen closed off from the living space, an electrical service sized for fewer appliances, and cast-iron waste well into its service life. Colerain Township and Hamilton County govern rather than a city.',
    ],
    localFaqs: [
      {
        q: 'Are there many unknowns in these houses?',
        a: 'Fewer than in period housing. Shared subdivision plans mean the structural questions are often answered before we open anything.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Colerain Township and Hamilton County. It is unincorporated, so no city zoning applies.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Older kitchen in Mount Healthy? A genuine 19th-century core. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a small independent city on the north-west side that grew as a 19th-century village, retaining an older core alongside later residential streets.',
      'That gives two distinct jobs within one small city. In the older core the houses are genuinely period — plaster, original joinery where it survives, and a small kitchen built as a working room. On the later streets it is mid-century construction with dated services and a closed-off plan. Establishing which you have is the first thing, because they price very differently.',
    ],
    localFaqs: [
      {
        q: 'Does it matter where in Mount Healthy I am?',
        a: 'It matters a great deal. The 19th-century core and the later residential streets are genuinely different projects with different budgets.',
      },
      {
        q: 'How do you tell?',
        a: 'From the construction on the survey rather than from the address. It is the first thing we establish.',
      },
    ],
  },

  reading: {
    intro:
      'Older kitchen in Reading? A long-established city on tight lots. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a long-established independent city in the Mill Creek corridor, with a compact older residential fabric and commercial land close alongside.',
      'The older streets here carry compact houses with correspondingly compact kitchens, and services that have generally been extended over a long period rather than renewed at any point. Sorting out what is live, what is abandoned and what needs replacing is first-fix work worth doing thoroughly. The city sets its own zoning and permitting, which we confirm at the outset.',
    ],
    localFaqs: [
      {
        q: 'Why does sorting the wiring take time?',
        a: 'Because a century of extensions leaves live, abandoned and half-replaced runs in the same wall. Working that out properly is worth the first-fix time.',
      },
      {
        q: 'Who permits the work?',
        a: 'The City of Reading. It sets its own zoning and permitting rather than following county practice.',
      },
    ],
  },

  dent: {
    intro:
      'Older kitchen in Dent? An old crossroads, varied properties. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is an unincorporated Green Township community on the west side that grew around an old crossroads, mixing older properties on irregular parcels with later subdivision housing.',
      'Because the area filled in over a long period, the housing varies more than a platted neighborhood does. Older properties here may have been extended more than once, may have services that predate mains provision, and may have arrangements that were entirely normal when built. None of that is a problem; all of it is a reason the survey matters more than the postcode.',
    ],
    localFaqs: [
      {
        q: 'Why is the survey more important here?',
        a: 'Because the housing varies so much. Older properties may have been extended repeatedly and carry services predating mains provision.',
      },
      {
        q: 'Who governs the work?',
        a: 'Green Township and Hamilton County — it is unincorporated, so no city or village zoning applies.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Older kitchen in Deer Park? 1920s to 1950s, compact and sound. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small independent city on the north-east side, built out largely between the 1920s and the 1950s with modest houses on regular lots.',
      'That range spans two eras of construction, and which one you have changes what is behind the plaster. The 1920s houses bring genuine period issues; the 1950s ones bring predictable construction with dated services. Both share compact kitchens separated from the living space, and in both cases opening that up depends on what the dividing wall is carrying. The city sets its own permitting.',
    ],
    localFaqs: [
      {
        q: 'Does the decade of the house matter?',
        a: 'Yes. A 1920s house and a 1950s one differ considerably behind the plaster, even where the kitchens look similar.',
      },
      {
        q: 'Can the kitchen be opened to the living room?',
        a: 'Often, subject to what the dividing wall carries. That gets determined structurally before it appears in a drawing.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Older kitchen in Terrace Park? Period houses under big trees. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is a small independent village on the east side beside the Little Miami, known for its mature tree canopy, generous lots and strongly protected residential character.',
      'The older houses here are substantial and generally well cared for, which usually means original detail survives in the rooms around the kitchen even where the kitchen itself has been redone. Matching new work to that is the interesting problem. The village sets its own zoning and permitting, and anything affecting the exterior in a village this protective of its character is worth establishing with them before design.',
    ],
    localFaqs: [
      {
        q: 'Will the village be involved?',
        a: 'For anything affecting the exterior, expect so. Interior work generally differs, and we establish what applies before design begins.',
      },
      {
        q: 'Can new cabinetry match the original detail?',
        a: 'Usually, by replicating profiles and matching timber and finish to what survives elsewhere in the house.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Older kitchen in Dry Run? Newer houses with dating kitchens. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is an unincorporated Anderson Township community on the east side, developed more recently than much of the county with contemporary subdivisions.',
      'Most housing here is recent enough that this is not really period work — a kitchen that has dated is a different and simpler project than a century-old house, and our main kitchen service usually fits better. Where a property predates the subdivisions it is genuine older-home work and we treat it as such. Establishing which applies is the first conversation, because the two price very differently.',
    ],
    localFaqs: [
      {
        q: 'Is my Dry Run house an older home?',
        a: 'Most here are recent enough that our main kitchen service fits better. Where a property predates the subdivisions, this service applies.',
      },
      {
        q: 'Does it change the price much?',
        a: 'Considerably. A dated kitchen in a newer house has far fewer unknowns than a century-old one, and it should be priced accordingly.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Older kitchen in White Oak? Post-war township housing. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is an unincorporated Colerain Township community on the north-west side, with post-war residential streets set back from a substantial commercial corridor.',
      'The housing is post-war and predictable, which keeps the unknowns down and the budget in the kitchen rather than in remediation. The dated items are consistent across the era — a closed-off plan, a service sized for fewer appliances and cast-iron waste with decades behind it. Colerain Township and Hamilton County govern, and there is no city process to satisfy.',
    ],
    localFaqs: [
      {
        q: 'Are surprises likely in these houses?',
        a: 'Fewer than in period housing. Post-war construction is predictable, so more of the budget goes into the finished kitchen.',
      },
      {
        q: 'What always needs upgrading?',
        a: 'The electrical service for modern kitchen circuits and, frequently, the cast-iron waste. Both get assessed before the quote.',
      },
    ],
  },

  forestville: {
    intro:
      'Older kitchen in Forestville? Several decades of housing. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is an unincorporated Anderson Township community on the east side, developed from the mid-20th century onward with a mix of subdivision eras.',
      'Because the area filled in over several decades, houses a few streets apart can be twenty years apart in construction — and that shows up behind the plaster more than it does at the kerb. Establishing the era of the specific house is what sets the expectation for the services and the structure. Anderson Township and Hamilton County govern the permit.',
    ],
    localFaqs: [
      {
        q: 'Are the houses here all similar?',
        a: 'Less than they look. The area developed over several decades, so nearby houses can differ by twenty years in construction.',
      },
      {
        q: 'Does that change the work?',
        a: 'It changes what is behind the walls and what the services will need. We establish the era of the specific house before quoting.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Older kitchen in Cherry Grove? Post-war, and ready for opening up. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is an unincorporated Anderson Township community on the east side, built out substantially in the post-war decades on regular, reasonably generous lots.',
      'These houses are sound and straightforward to work in, and the request is almost always the same: open the kitchen to the living space and bring the services up to what a modern kitchen actually draws. In single-storey houses the dividing wall frequently carries roof load, so what it is doing gets determined structurally before it goes in a drawing rather than after.',
    ],
    localFaqs: [
      {
        q: 'Can the wall between kitchen and living room come out?',
        a: 'Often, and in a single-storey house it frequently carries roof load. That gets determined structurally before design rather than assumed.',
      },
      {
        q: 'Will the electrical service cope?',
        a: 'Frequently not with a modern kitchen’s circuits. We assess the panel and the incoming service before quoting rather than after.',
      },
    ],
  },

  // ---------- Cohort 7 · Sycamore & Colerain Townships, the planned villages & the far west ----------

  kenwood: {
    intro:
      'Older kitchen in Kenwood? Unincorporated, and mostly mid-century. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an unincorporated Sycamore Township community on the north-east side, with established residential streets close to a major concentration of retail and offices.',
      'There is no city hall here — Sycamore Township and Hamilton County govern, which surprises people who assume somewhere this well known must be its own municipality. The housing is largely mid-century, so the construction is predictable and the dated items familiar: a closed-off plan, a service sized for its decade, and cast-iron waste that has been working a long time.',
    ],
    localFaqs: [
      {
        q: 'Is Kenwood its own city?',
        a: 'No. It is unincorporated, so Sycamore Township and Hamilton County govern the zoning and issue the permits.',
      },
      {
        q: 'What is typical in these houses?',
        a: 'Predictable mid-century construction with a closed-off kitchen plan, a period electrical service and cast-iron waste.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Older kitchen in Lincoln Heights? Its own village, its own permits. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is an independent village in the Mill Creek corridor, notable as one of the first self-governing Black communities incorporated in the northern United States, with residential streets bounded by industrial and transport land.',
      'The village sets its own zoning and issues its own permits, so requirements come from Lincoln Heights rather than the county or a neighbouring city — established at the outset. The housing is of an age where plaster, extended services and a compact kitchen separated from the living space are the norm, and where sorting out what is live behind the walls is proper first-fix work.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit here?',
        a: 'The village does. Lincoln Heights sets its own zoning and permitting rather than following the county or a neighbouring city.',
      },
      {
        q: 'What is behind the walls?',
        a: 'Typically plaster on lath and services added to over the decades. Establishing what is genuinely live is careful first-fix work.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Older kitchen in Dillonvale? Compact mid-century houses. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a small unincorporated Sycamore Township community on the north-east side, developed largely in the mid-20th century with modest houses on compact lots.',
      'Mid-century construction on a compact plan means predictable building and a kitchen that is small rather than merely dated. The design work is about making that room genuinely function — storage planned properly, appliance sizes checked against real openings, and a workflow that suits the space rather than one imported from a larger plan. Sycamore Township and Hamilton County govern.',
    ],
    localFaqs: [
      {
        q: 'How much can a small mid-century kitchen improve?',
        a: 'Substantially, mostly through storage and workflow. The gains come from designing for the actual room rather than scaling down a larger plan.',
      },
      {
        q: 'Who governs the permit?',
        a: 'Sycamore Township and Hamilton County. It is unincorporated, so there is no separate village or city process.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Older kitchen in Woodlawn? A village with a working district. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is an independent village north of Cincinnati combining established residential streets with a substantial industrial and distribution district.',
      'The village runs its own zoning and permitting, which is where an address here starts. The residential housing is of an age that brings the familiar set — plaster or early drywall depending on the street, services extended rather than renewed, and kitchens planned as separate work rooms. None of it unusual, all of it better established on a survey than during demolition.',
    ],
    localFaqs: [
      {
        q: 'Who sets the requirements in Woodlawn?',
        a: 'The village does, with its own zoning and permitting separate from the county and neighbouring municipalities.',
      },
      {
        q: 'What should I expect behind the walls?',
        a: 'Plaster or early drywall depending on the street, and services that have been extended over time. Ordinary findings, better priced than discovered.',
      },
    ],
  },

  addyston: {
    intro:
      'Older kitchen in Addyston? A small river village, older stock. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small independent village on the Ohio River at the western edge of Hamilton County, with a compact residential core and industrial premises alongside.',
      'The housing is modest, older and on ground close to the river, which puts what is under the kitchen floor near the top of the list — structure, service condition and any history of water. The village sets its own zoning and permitting despite its size. Where a house has been in the same family a long time, expect services added incrementally rather than renewed, which is ordinary and worth pricing properly.',
    ],
    localFaqs: [
      {
        q: 'What gets looked at first?',
        a: 'What is beneath the kitchen floor — structure, services and any history of water. On ground this close to the river that comes before anything above it.',
      },
      {
        q: 'Who permits the work?',
        a: 'The village. Addyston sets its own zoning and permitting rather than following the county.',
      },
    ],
  },

  greenhills: {
    intro:
      'Older kitchen in Greenhills? A 1930s planned town. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is an independent village north-west of Cincinnati, built in the 1930s as one of only three federally planned Greenbelt towns in the United States, laid out as a single coherent design.',
      'Because the town was designed and built as one piece, the houses share plan types and original details — which means what we learn in one informs the next, and it means the character is collective. Anything affecting the exterior is the village’s business and gets established with them first. Inside, expect original 1930s planning: compact kitchens, sound construction and services long since outgrown.',
    ],
    localFaqs: [
      {
        q: 'Will the village be involved in the work?',
        a: 'For anything affecting the exterior, expect so, given how deliberately the town’s design is protected. Interior work generally differs.',
      },
      {
        q: 'Are the houses all similar?',
        a: 'They share plan types, having been built as a single planned town. That familiarity genuinely helps at the design stage.',
      },
    ],
  },

  northbrook: {
    intro:
      'Older kitchen in Northbrook? Platted post-war housing. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is an unincorporated Colerain Township community on the north-west side, developed through the post-war decades in platted subdivisions on gently rolling ground.',
      'Subdivision housing of this era is predictable and shares plans across streets, so the structural questions are frequently answered before anything is opened. The work is the era’s standard — opening the kitchen to the living space, upgrading a service sized for fewer appliances, and addressing cast-iron waste. Colerain Township and Hamilton County govern the permit.',
    ],
    localFaqs: [
      {
        q: 'Are these houses predictable to work in?',
        a: 'Generally yes. Shared subdivision plans mean fewer unknowns, which keeps the budget in the kitchen rather than in remediation.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Colerain Township and Hamilton County — it is unincorporated, so no city zoning applies.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Older kitchen in Indian Hill? Substantial houses on acreage. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an independent village on the east side defined by large residential parcels, extensive tree cover and a deliberately rural, low-density character.',
      'Houses here range from genuine period properties to substantial later builds, and the older ones frequently have service arrangements that reflect a rural setting — including, on some parcels, private water or waste systems. Establishing what actually serves the house is part of the survey. The village sets its own zoning, permitting and engineering standards, which govern throughout rather than county practice.',
    ],
    localFaqs: [
      {
        q: 'Are the houses on mains services?',
        a: 'Not always, given the rural setting. What actually serves the property is part of the survey rather than an assumption.',
      },
      {
        q: 'Who sets the requirements?',
        a: 'The village. Indian Hill has its own zoning, permitting and engineering standards, and they govern rather than county practice.',
      },
    ],
  },

  evendale: {
    intro:
      'Older kitchen in Evendale? A small residential village component. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is an independent village north of Cincinnati whose area is dominated by a large industrial and aviation manufacturing presence, with a comparatively small residential component.',
      'The residential housing here is limited in number but ordinary in nature — largely mid-century, predictable to work in, with the dated services and closed-off plans of the era. The village sets its own zoning and permitting, and its requirements govern for any residential property within it. That gets confirmed for the address at the outset.',
    ],
    localFaqs: [
      {
        q: 'Are there many homes in Evendale?',
        a: 'A comparatively small number, since most of the village’s land is industrial. The housing itself is ordinary mid-century stock.',
      },
      {
        q: 'Who permits residential work?',
        a: 'The village sets its own zoning and permitting, and its requirements govern for any residential property within it.',
      },
    ],
  },

  glendale: {
    intro:
      'Older kitchen in Glendale? An 1850s planned suburb. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is an independent village north of Cincinnati laid out in the 1850s as one of the country’s earliest planned railroad suburbs, with curving streets and substantial 19th-century architecture.',
      'This is among the most genuinely period housing in the region, and the work reflects it — plaster on lath, original joinery worth matching, chimney breasts that may still serve flues, and kitchens built as service rooms well away from the principal spaces. The village takes its architecture seriously, so anything affecting the exterior is established with them before design begins.',
    ],
    localFaqs: [
      {
        q: 'Is this genuinely period work?',
        a: 'As period as it gets in our area. Plaster, original joinery, service-room kitchens and chimney breasts still serving flues are all standard here.',
      },
      {
        q: 'Will the village have a view?',
        a: 'On anything affecting the exterior, expect so. What applies to your property gets established in writing before design.',
      },
    ],
  },

  sharonville: {
    intro:
      'Older kitchen in Sharonville? A city across a county line. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is an independent city north of Cincinnati extending across the Hamilton and Butler county boundary, with established residential streets alongside industrial land.',
      'The city’s zoning and permitting apply throughout, but which county a specific address sits in affects records and some administration, and that is worth settling early rather than midway. The housing itself spans several decades, so the era of the specific property does more to set the project than the city does. We establish both before quoting.',
    ],
    localFaqs: [
      {
        q: 'Which county is my Sharonville address in?',
        a: 'It depends on the parcel — the city spans Hamilton and Butler. City zoning applies throughout, but the county affects records and administration.',
      },
      {
        q: 'Does the era of the house matter more?',
        a: 'For the work itself, yes. The housing spans several decades and that sets the expectations behind the plaster.',
      },
    ],
  },

  northgate: {
    intro:
      'Older kitchen in Northgate? Post-war subdivisions. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is an unincorporated Colerain Township community on the north-west side, with post-war residential subdivisions around a long-established retail corridor.',
      'Post-war subdivision housing is predictable to work in and the projects run accordingly — fewer unknowns, more of the budget in the finished kitchen. The dated elements are the era’s standard: a plan that closed the kitchen off, an electrical service sized for fewer appliances, and cast-iron waste well into its service life. Colerain Township and Hamilton County govern.',
    ],
    localFaqs: [
      {
        q: 'Is this a predictable house to remodel?',
        a: 'Generally yes. Post-war subdivision construction means fewer unknowns and a budget that stays in the kitchen.',
      },
      {
        q: 'Can the kitchen be opened to the living space?',
        a: 'Usually, subject to what the dividing wall carries. In single-storey houses that frequently includes roof load.',
      },
    ],
  },

  springdale: {
    intro:
      'Older kitchen in Springdale? Post-war housing, dated plans. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is an independent city north of Cincinnati combining post-war residential neighborhoods with a significant commercial base along its corridors.',
      'The residential housing is post-war and straightforward, so the work is about the plan and the services rather than about repairing the building. The city sets its own zoning and permitting rather than following township or county practice, which we confirm for the address. Beyond that it is the familiar list — opening up a closed plan and bringing the electrical service to what a modern kitchen draws.',
    ],
    localFaqs: [
      {
        q: 'Who permits the work here?',
        a: 'The City of Springdale. It sets its own zoning and permitting rather than following township or county practice.',
      },
      {
        q: 'Is the house likely to need rewiring?',
        a: 'The kitchen circuits usually need upgrading for modern loads. Whether it extends further depends on the panel and the incoming service.',
      },
    ],
  },

  miamitown: {
    intro:
      'Older kitchen in Miamitown? Village-era houses, rural setting. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small unincorporated Whitewater Township community on the Great Miami River at the western edge of Hamilton County, with an old village core and rural ground around it.',
      'Properties in the old core are genuinely period, and those on the rural ground around it may carry service arrangements that reflect it — private water or waste in some cases. Establishing what actually serves the house is part of the survey rather than an assumption. Whitewater Township and Hamilton County govern, and on ground near the river what is beneath the kitchen floor is worth checking first.',
    ],
    localFaqs: [
      {
        q: 'Are properties here on mains services?',
        a: 'Not all of them this far west. What actually serves the house is established on the survey rather than assumed.',
      },
      {
        q: 'Does the river matter for a kitchen remodel?',
        a: 'On ground near it, what is under the floor is worth checking — structure, services and any history of water — before installing above it.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Older kitchen in Forest Park? A planned city, consistent housing. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is an independent city north of Cincinnati developed from the 1950s onward as a planned community, laid out in coherent phases with consistent residential subdivisions.',
      'Planned development means houses that share plans, which reduces the unknowns considerably and speeds up design. The work is the era’s standard — a kitchen closed off from the living space, a service sized for fewer appliances, and cast-iron waste with decades behind it. Where a property carries recorded subdivision covenants, anything affecting the exterior is worth checking against them as well as against city zoning.',
    ],
    localFaqs: [
      {
        q: 'Does the planned layout help?',
        a: 'It does. Shared house plans mean the structural questions are frequently answered before anything is opened up.',
      },
      {
        q: 'Do covenants affect a kitchen remodel?',
        a: 'Interior work generally not, but anything affecting the exterior is worth checking against them as well as against city zoning.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Older kitchen in Pleasant Run? Small community, township rules. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a small unincorporated community on the north side near Forest Park, with residential streets on gently rolling ground.',
      'The township and Hamilton County govern rather than a city, which is worth confirming for an address given how closely the area reads with the incorporated ground next to it. The housing is largely post-war and predictable, so the work is about the plan and the services — opening up a closed kitchen and bringing the electrical provision to what a modern one actually draws.',
    ],
    localFaqs: [
      {
        q: 'Is Pleasant Run part of Forest Park?',
        a: 'No, it is unincorporated, so the township and county govern rather than the neighbouring city. Worth confirming for the address.',
      },
      {
        q: 'What does the work usually involve?',
        a: 'Opening up a closed-off kitchen plan and upgrading the electrical provision for modern kitchen loads.',
      },
    ],
  },

  cleves: {
    intro:
      'Older kitchen in Cleves? Village houses near the rivers. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a small independent village at the western edge of Hamilton County near where the Great Miami meets the Ohio, with a compact village core and open ground beyond.',
      'The village sets its own zoning and permitting, distinct from the surrounding township, and that is the first thing to confirm for an address. On the lower ground near the rivers, what sits beneath the kitchen floor deserves checking before anything is planned above it. In the older core, expect genuine period construction with the services of its day.',
    ],
    localFaqs: [
      {
        q: 'Village or township?',
        a: 'Cleves is its own village with its own zoning and permitting, distinct from the surrounding township. We confirm it for the address.',
      },
      {
        q: 'What about the ground near the rivers?',
        a: 'On lower parcels, checking the floor structure and any history of water comes before planning what goes above it.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Older kitchen in North Bend? A historic village on steep ground. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a small historic village on the Ohio River at the far west of Hamilton County, where the ground rises sharply from the riverbank to wooded high ground.',
      'Houses built into ground this steep have generally moved a little over their lifetimes, and the kitchen floor is where that tends to show. Establishing whether the movement is long settled or ongoing matters before cabinetry is installed on top of it. Access is the other practical factor, since getting materials to a house partway up a slope is part of the programme rather than an afterthought.',
    ],
    localFaqs: [
      {
        q: 'The floor is not level — is that a problem?',
        a: 'Often it is long-settled movement rather than an active issue. Establishing which comes before installing anything over it.',
      },
      {
        q: 'Is access difficult here?',
        a: 'On the steeper streets it needs planning — materials in and waste out get scheduled rather than improvised.',
      },
    ],
  },

  loveland: {
    intro:
      'Older kitchen in Loveland? A historic core across county lines. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is an independent city on the Little Miami River north-east of Cincinnati, with a walkable historic core and a boundary extending across more than one county.',
      'The older housing is concentrated in and around the historic core and is genuinely period — plaster, original detail where it survives, and small service kitchens. The city’s zoning and permitting apply throughout, but which county an address sits in affects records and some administration, and that is worth settling early. Newer housing away from the core is a different and simpler project.',
    ],
    localFaqs: [
      {
        q: 'Which county is my address in?',
        a: 'It depends on the parcel — the city extends across more than one county line. City zoning applies throughout, but the county affects records.',
      },
      {
        q: 'Is the older housing all near the core?',
        a: 'Largely, yes. Away from it the stock is newer, which is a different and generally simpler kitchen project.',
      },
    ],
  },

  harrison: {
    intro:
      'Older kitchen in Harrison? A historic core on a state line. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) sits at the far western edge of Hamilton County directly on the Ohio–Indiana state line, with a historic core and considerable newer development around it.',
      'Which side of the state line a property falls on decides the building code, the permitting authority and the inspection regime, and it is not always obvious from an address — so it is the first thing we establish. The older housing in and around the historic core is genuinely period work; the newer development around it is a different and simpler project entirely.',
    ],
    localFaqs: [
      {
        q: 'Does the state line affect a kitchen remodel?',
        a: 'It decides the code, the permitting authority and the inspections. It is the first thing we establish, since it is not always obvious from an address.',
      },
      {
        q: 'Is the older housing all in the core?',
        a: 'Largely. The newer development around it is a different and generally simpler project than genuine period work.',
      },
    ],
  },

  // ---------- Cohort 8 · Kenton County, Kentucky ----------

  ludlow: {
    intro:
      'Older kitchen in Ludlow? Narrow 19th-century river houses. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a small Kenton County city on the Ohio River west of Covington, densely built in the 19th and early 20th centuries on a compact grid running back from the river.',
      'Houses on this grid are narrow and deep, which puts the kitchen at the back and leaves very little width to play with. Appliance sizes get checked against real openings rather than nominal ones, and the route in for cabinetry and worktops is measured at survey rather than discovered on delivery day. Kentucky code and permitting apply, and Ludlow issues through its own city.',
    ],
    localFaqs: [
      {
        q: 'Will standard units fit these houses?',
        a: 'Not always. We measure real openings rather than working from nominal sizes, because in houses this narrow the difference decides the layout.',
      },
      {
        q: 'Is Kentucky permitting different?',
        a: 'Yes — its own code, authority and inspections. We work both sides of the river and handle it within the same contract.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Older kitchen in Park Hills? Hillside houses that have settled. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a small Kenton County city on the wooded hillside above Covington, with curving streets following the contours and substantial tree cover.',
      'Houses set into a hillside tend to have moved over their lifetimes, and in the kitchen that shows up as a floor that is not quite level and walls that are not quite square. Much of it is long settled and simply gets worked with — cabinetry scribed, worktops templated in place. Establishing whether the movement is historic or ongoing is the assessment worth making before installing anything on top of it.',
    ],
    localFaqs: [
      {
        q: 'Should I be concerned about an uneven kitchen floor?',
        a: 'Usually it is long-settled hillside movement. What matters is establishing whether it is historic or ongoing before installing over it.',
      },
      {
        q: 'How do cabinets deal with that?',
        a: 'They get scribed to the actual floor and the worktops templated in place rather than cut from a drawing. Normal work in houses like these.',
      },
    ],
  },

  bromley: {
    intro:
      'Older kitchen in Bromley? A tiny river city, tight houses. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is one of the smallest cities in Kenton County, a compact riverside community west of Ludlow on low ground close to the Ohio.',
      'Small, old and low is the combination, and it sets the priorities. What sits beneath the kitchen floor — structure, service condition and any history of water — comes before anything planned above it. The houses themselves are narrow, so the practical limits are width and the route in. Both are established at survey rather than during installation.',
    ],
    localFaqs: [
      {
        q: 'What comes first in a house here?',
        a: 'Looking under the kitchen floor — structure, services and any history of water. On ground this low that precedes planning anything above.',
      },
      {
        q: 'Are the houses very narrow?',
        a: 'Generally yes, which makes width and the delivery route the practical limits. Both get measured at survey.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Older kitchen in Fort Wright? Ridge houses across several decades. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a Kenton County city on the ridge above the Ohio and Licking valleys, with established residential streets spanning several building eras.',
      'The range matters here — an early-1900s house and a 1960s one sit on the same ridge and present entirely different problems behind similar-looking walls. Establishing the era of the specific property is the first job. Where the ground falls away, older houses may have settled, and the kitchen floor is usually where that first becomes visible.',
    ],
    localFaqs: [
      {
        q: 'Does the era of my house change the job?',
        a: 'Considerably. An early-1900s house and a 1960s one differ substantially behind the plaster even where the kitchens look alike.',
      },
      {
        q: 'Is settlement common on the ridge?',
        a: 'Where the ground falls away, some movement is normal in older houses. Whether it is historic or ongoing is worth establishing.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Older kitchen in Fort Mitchell? Mature streets, mixed eras. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city with mature, well-treed residential streets and a housing stock built across much of the 20th century.',
      'Because the housing spans decades, the specific property tells you far more than the street does. Earlier houses bring plaster, original detail worth matching and services long outgrown; mid-century ones bring predictable construction with a closed-off plan. In both cases the most common request is opening the kitchen to the living space, which turns on what the dividing wall carries.',
    ],
    localFaqs: [
      {
        q: 'What is the most common project here?',
        a: 'Opening the kitchen to the living space. What the dividing wall carries decides the detail, and that is determined structurally first.',
      },
      {
        q: 'Do older houses here keep their original detail?',
        a: 'Often in the rooms around the kitchen, even where the kitchen itself was redone. That gives us something to match new work to.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Older kitchen in Villa Hills? Mostly later housing here. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a Kenton County city on the bluff above the Ohio River, developed comparatively recently with larger residential parcels and substantial river views.',
      'Most of the housing here postdates the era this service is really aimed at, so for many properties a dated kitchen in a sound later house is the accurate description — which is our main kitchen service and a more straightforward job. Where a property genuinely predates the modern development we treat it as period work. Establishing which applies changes the price materially, so we do it on the survey.',
    ],
    localFaqs: [
      {
        q: 'Is my Villa Hills house an older home?',
        a: 'Most here are later builds, in which case our main kitchen service fits better. Where a property predates the development, this one applies.',
      },
      {
        q: 'Why does the distinction matter?',
        a: 'Because a dated kitchen in a sound later house carries far fewer unknowns than a period property, and it should be priced accordingly.',
      },
    ],
  },

  'lakeside-park': {
    intro:
      'Older kitchen in Lakeside Park? Compact, established, mid-century. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a compact Kenton County city adjoining Fort Mitchell, residential throughout and effectively built out, with mature streets and established lots.',
      'The housing is largely mid-century and predictable to work in, which keeps the unknowns down. The dated items are the era’s standard — a kitchen closed off from the living space, an electrical service sized for fewer appliances, and cast-iron waste well into its life. The city sets its own zoning and permitting rather than following the neighbouring city whose streets run into it.',
    ],
    localFaqs: [
      {
        q: 'Do the neighbouring city’s rules apply?',
        a: 'No. Lakeside Park sets its own zoning and permitting, even where the streets run continuously into the city next door.',
      },
      {
        q: 'What usually needs upgrading?',
        a: 'The electrical service for modern kitchen circuits, and frequently the cast-iron waste. Both get assessed before the quote.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Older kitchen in Crescent Springs? A mix of building eras. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a Kenton County city that has grown steadily over recent decades, mixing established residential streets with more recent development.',
      'That mix means the era of the specific house sets the project rather than the city does. Earlier properties bring genuine period conditions; the newer streets bring sound construction with kitchens that have simply dated. We establish which on the survey, because pricing one as the other is the most common way a kitchen project goes wrong.',
    ],
    localFaqs: [
      {
        q: 'How do I know which category my house is in?',
        a: 'From the construction on the survey rather than the address. It is the first thing we establish, because it sets the whole budget.',
      },
      {
        q: 'Are older properties much more work?',
        a: 'Generally yes — more unknowns behind the walls and older services. That is exactly why the distinction matters before quoting.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Older kitchen in Crestview Hills? Largely later housing. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a small Kenton County city combining residential streets with a substantial retail, office and medical presence along its corridors.',
      'The residential stock here is largely later 20th century onward, so for most properties this is a dated kitchen in a sound house rather than period work — our main kitchen service, and a more predictable job. Where an older property exists we assess it as such. The city sets its own zoning and permitting for either.',
    ],
    localFaqs: [
      {
        q: 'Does this service apply to my house?',
        a: 'It depends on the age. Most here are later builds where our main kitchen service fits better and the work is more predictable.',
      },
      {
        q: 'Who issues the permit?',
        a: 'The city does. Crestview Hills sets its own zoning and permitting rather than following county practice.',
      },
    ],
  },

  edgewood: {
    intro:
      'Older kitchen in Edgewood? Later-20th-century stock. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a predominantly residential Kenton County city developed largely in the later 20th century, with comfortable lot sizes and consistent subdivision streets.',
      'Housing of this period is sound and straightforward, so the work is generally about a kitchen that has dated rather than a house that needs remediation — fewer unknowns, and more of the budget in the finished room. The generous lot sizes also mean that where a plan genuinely cannot work, extending is a realistic option rather than a fantasy.',
    ],
    localFaqs: [
      {
        q: 'Is this really an older-home project?',
        a: 'Often it is closer to a dated kitchen in a sound house, which is our main kitchen service. We will tell you which fits on the survey.',
      },
      {
        q: 'Could we extend instead?',
        a: 'On lots this size it is realistic. Whether it is better value than reworking depends on the structure, and we assess both.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Older kitchen in Taylor Mill? Rolling ground, mid-century houses. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a Kenton County city on rolling ground east of Covington above the Licking valley, with residential development across noticeably varied terrain.',
      'The housing is largely mid-century and predictable, but the terrain varies enough that houses on the steeper parcels may have settled where those on level ground have not. In the kitchen that shows as a floor out of level, which is worked with rather than fought once it is established as historic. The services are the more usual issue — sized for the appliances of their decade.',
    ],
    localFaqs: [
      {
        q: 'Does the terrain affect the house?',
        a: 'On the steeper parcels, older houses may have settled a little. That shows in the kitchen floor and is worked with once established as historic.',
      },
      {
        q: 'What is the main upgrade?',
        a: 'Usually the electrical provision, since a service sized for a 1960s kitchen will not carry what a modern one draws.',
      },
    ],
  },

  elsmere: {
    intro:
      'Older kitchen in Elsmere? Compact 20th-century houses. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is a Kenton County city west of Covington, developed through the 20th century with modest housing on compact lots.',
      'The houses are modest and the kitchens compact, so the design work is about getting real function into the room that exists rather than pretending a larger one is available. Storage planned properly and appliance sizes checked against real openings do more here than any amount of ambition. The city sets its own zoning and permitting.',
    ],
    localFaqs: [
      {
        q: 'Can a compact kitchen be genuinely improved?',
        a: 'Considerably, mostly through storage and workflow. Designing for the actual room beats scaling down a plan meant for a bigger one.',
      },
      {
        q: 'Who permits the work?',
        a: 'The City of Elsmere. It sets its own zoning and permitting rather than following county practice.',
      },
    ],
  },

  independence: {
    intro:
      'Older kitchen in Independence? Growth area with older pockets. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is a city in the more open southern part of Kenton County, one of the region’s growth areas, with substantial recent development alongside older rural properties.',
      'Most of the housing is recent, so for many addresses this is a dated kitchen in a sound modern house rather than period work. The genuinely older stock is the farmhouses and early properties that predate the growth, and those are proper period projects — often with service arrangements reflecting their rural origins. Establishing which you have comes first.',
    ],
    localFaqs: [
      {
        q: 'Where is the older housing here?',
        a: 'In the farmhouses and early properties that predate the growth. Most other housing is recent, which is a simpler and cheaper project.',
      },
      {
        q: 'Do the older properties have unusual services?',
        a: 'Sometimes, reflecting rural origins. What actually serves the house is established on the survey rather than assumed.',
      },
    ],
  },

  // ---------- Cohort 9 · Campbell & Boone Counties, Kentucky ----------

  'dayton-ky': {
    intro:
      'Older kitchen in Dayton? Narrow river-city houses. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a small Campbell County city on the Ohio River east of Bellevue, densely built in the 19th and early 20th centuries on a compact grid.',
      'These houses are narrow and deep with the kitchen at the back, which leaves little width and makes the route in for materials a real consideration. On the lower ground, what sits beneath the kitchen floor is worth establishing before anything is planned above it. Kentucky code and city permitting apply throughout.',
    ],
    localFaqs: [
      {
        q: 'Will a worktop fit through the house?',
        a: 'We measure the route in at survey. Where a single slab will not make the turn, the design accounts for it rather than the delivery finding out.',
      },
      {
        q: 'What about the floor below?',
        a: 'On lower ground it is worth checking structure, services and any history of water before installing new cabinetry over it.',
      },
    ],
  },

  southgate: {
    intro:
      'Older kitchen in Southgate? A small city on rising ground. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city on the rising ground behind Newport, residential throughout, with streets climbing away from the river valley.',
      'Houses on the rise here have generally settled a little over their lifetimes, and the kitchen floor is where that becomes apparent. Whether that movement is long finished or ongoing is worth establishing before cabinetry goes on top of it. The city is small and largely built out, and it sets its own zoning and permitting rather than following the neighbouring cities.',
    ],
    localFaqs: [
      {
        q: 'Is a sloping kitchen floor normal here?',
        a: 'On the rising ground, some settlement in older houses is common. Establishing whether it is historic or active comes before installing over it.',
      },
      {
        q: 'Who permits the work?',
        a: 'The City of Southgate sets its own zoning and permitting, separate from the neighbouring river cities.',
      },
    ],
  },

  wilder: {
    intro:
      'Older kitchen in Wilder? Valley ground, mixed housing. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River valley south of Newport, combining residential streets with commercial and light industrial land.',
      'On the valley floor, what sits under the kitchen floor matters — structure, service condition and any history of water all bear on how long a new kitchen lasts. The housing spans more than one era, so establishing the age of the specific property sets the expectations for what is behind the walls. Kentucky code and city permitting apply.',
    ],
    localFaqs: [
      {
        q: 'Does the valley location matter?',
        a: 'It makes what is under the kitchen floor worth checking first — structure, services and any history of water.',
      },
      {
        q: 'Is the housing consistent here?',
        a: 'Not especially. The era of the specific property does more to set the project than the city does.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Older kitchen in Highland Heights? A university city, mostly newer. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city built around Northern Kentucky University, with established residential streets and continued development around the campus.',
      'Most housing here is recent enough that a dated kitchen in a sound house is the usual description rather than period work. Where a property has been let — and near a university a good number have — the services behind the kitchen are worth assessing carefully, because rental kitchens tend to have been installed quickly and extended rather than renewed.',
    ],
    localFaqs: [
      {
        q: 'Does it matter if the house has been rented?',
        a: 'It usually determines how much improvised service work sits behind the kitchen, and that changes the price. We survey it properly.',
      },
      {
        q: 'Is my house old enough for this service?',
        a: 'Many here are recent enough that our main kitchen service fits better. We will tell you which applies on the survey.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Older kitchen in Cold Spring? A growth corridor with older pockets. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a Campbell County city along the US-27 corridor south of the river cities, a steady growth area with recent development alongside older properties.',
      'The older stock here is the farmhouses and early properties that predate the growth, and those are genuine period projects — often with service arrangements reflecting a rural setting. The newer streets are sound houses with kitchens that have dated, which is a different and more predictable job. Establishing which you have is the first thing we do.',
    ],
    localFaqs: [
      {
        q: 'Which houses count as older here?',
        a: 'The farmhouses and early properties predating the growth. The newer streets are a different and more predictable project.',
      },
      {
        q: 'Do older properties have unusual services?',
        a: 'Sometimes, reflecting rural origins. What actually serves the house gets established on the survey.',
      },
    ],
  },

  alexandria: {
    intro:
      'Older kitchen in Alexandria? Farmhouses in rural Campbell County. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is a city in the more rural southern part of Campbell County, with a small historic centre and open rolling farmland around it.',
      'The genuinely older properties here are farmhouses, and they bring a particular set: additions made over generations without records, services extended piecemeal, and in some cases private water or waste arrangements. The survey does more work than usual because the house has usually been changed more than usual. It is rewarding work and it is not work to price from a description.',
    ],
    localFaqs: [
      {
        q: 'What is different about a farmhouse kitchen?',
        a: 'Generations of additions without records, services extended piecemeal, and sometimes private water or waste. The survey does more work than usual.',
      },
      {
        q: 'Can you price it without visiting?',
        a: 'Not honestly. Houses changed this much over this long need to be seen before any number means anything.',
      },
    ],
  },

  melbourne: {
    intro:
      'Older kitchen in Melbourne? A tiny river city, old houses. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a very small Campbell County city on the Ohio River south-east of the main river cities, with open rural ground around it.',
      'Somewhere this small, everything is property-specific. What services actually reach the house, whether private water or waste arrangements are in play, and on the lower ground what sits beneath the kitchen floor are all established individually rather than inferred from the area. We travel out here regularly and would rather make one visit do the work of two.',
    ],
    localFaqs: [
      {
        q: 'What should I have ready for the visit?',
        a: 'Access to the kitchen and to whatever is below it, and a rough build date. That lets us assess properly in one visit rather than two.',
      },
      {
        q: 'Are properties here on mains services?',
        a: 'Not all of them. What actually serves the house is established on the survey rather than assumed from the area.',
      },
    ],
  },

  hebron: {
    intro:
      'Older kitchen in Hebron? Rural properties among newer growth. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is an unincorporated Boone County community west of the airport, combining rural ground with substantial distribution and logistics development.',
      'Boone County governs rather than a city, and Kentucky code and permitting apply. The genuinely older housing is the rural properties that predate the growth, and they bring the farmhouse pattern — additions over generations, services extended rather than renewed, and sometimes private water or waste. Newer housing nearby is a different and simpler project.',
    ],
    localFaqs: [
      {
        q: 'Who governs building work in Hebron?',
        a: 'Boone County — it is unincorporated, so there is no city zoning, and Kentucky code and permitting apply.',
      },
      {
        q: 'Which houses are genuinely older?',
        a: 'The rural properties predating the growth. They tend to have been added to over generations, which the survey has to unpick.',
      },
    ],
  },

  burlington: {
    intro:
      'Older kitchen in Burlington? A historic core in a growing county. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is an unincorporated Boone County community at the administrative centre of the county, with a historic core and considerable newer development around it.',
      'The older housing is concentrated in and around that core and is genuine period stock — plaster, original detail where it survives, and small kitchens built as work rooms. Away from the core the housing is much newer and the work correspondingly simpler. Boone County governs the permit, and being at the administrative centre tends to make that a direct process.',
    ],
    localFaqs: [
      {
        q: 'Where is the period housing?',
        a: 'In and around the historic core. Away from it the stock is much newer, which is a simpler and more predictable project.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Boone County. Being at the county’s administrative centre generally makes that a fairly direct process.',
      },
    ],
  },

  union: {
    intro:
      'Older kitchen in Union? Mostly recent subdivisions. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is a Boone County city in the southern part of the county that has grown quickly in recent decades, developed largely as planned residential subdivisions.',
      'Most housing here is modern, so a dated kitchen in a sound house is the usual description and our main kitchen service is the better fit — a more predictable and generally less expensive project. Where a property predates the subdivisions it is genuine period work. Recorded covenants may bear on anything affecting the exterior, though interior work is generally a separate matter.',
    ],
    localFaqs: [
      {
        q: 'Is my Union house an older home?',
        a: 'Most here are modern subdivision houses, where our main kitchen service fits better. Properties predating the subdivisions are the exception.',
      },
      {
        q: 'Do the covenants affect a kitchen?',
        a: 'Interior work generally not. Anything affecting the exterior is worth checking against them as well as against city rules.',
      },
    ],
  },

  walton: {
    intro:
      'Older kitchen in Walton? A historic centre and rural farmhouses. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a city in southern Boone County near the I-75 corridor, with a small historic centre and open rolling rural ground around it.',
      'Two kinds of older property here: the period houses in and around the historic centre, and the farmhouses on the rural ground. Both are genuine period work, and the farmhouses in particular tend to have been added to over generations with services extended rather than renewed, and sometimes private water or waste arrangements. The survey establishes what actually serves the house.',
    ],
    localFaqs: [
      {
        q: 'Are farmhouse kitchens different to work on?',
        a: 'Usually more involved. Generations of additions and piecemeal services mean the survey matters more than the description.',
      },
      {
        q: 'Are these properties on mains services?',
        a: 'Not all of them. Whether private water or waste arrangements are in play gets established on the survey rather than assumed.',
      },
    ],
  },

  // ---------- Cohort 10 · Clermont County, Ohio ----------

  'mount-carmel': {
    intro:
      'Older kitchen in Mount Carmel? Township ground, mixed eras. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is an unincorporated community in Union Township, Clermont County, east of Cincinnati, with residential development on gently rolling ground.',
      'Union Township and Clermont County govern rather than a village, and Clermont’s process differs from Hamilton County’s in both administration and timing — worth establishing at the outset. The housing spans more than one era, so the age of the specific property does more to set the project than the area does. We confirm both before quoting.',
    ],
    localFaqs: [
      {
        q: 'Which authority governs the work?',
        a: 'Union Township and Clermont County. It is unincorporated, and Clermont’s process differs from Hamilton County’s.',
      },
      {
        q: 'Is the housing consistent here?',
        a: 'Not especially — it spans more than one era, so the specific property tells you more than the neighborhood does.',
      },
    ],
  },

  summerside: {
    intro:
      'Older kitchen in Summerside? Largely recent subdivisions. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is an unincorporated Union Township community in Clermont County, developed substantially in recent decades as platted residential subdivisions.',
      'Most housing here is modern enough that a dated kitchen in a sound house is the accurate description, which is our main kitchen service and a more predictable job. Where an older property predates the subdivisions, it is genuine period work. Establishing which applies changes the price materially, so it happens on the survey rather than over the phone.',
    ],
    localFaqs: [
      {
        q: 'Is this an older-home project?',
        a: 'For most Summerside houses, no — they are recent subdivision builds where our main kitchen service fits better.',
      },
      {
        q: 'How is that decided?',
        a: 'On the survey, from the construction itself. It changes the price materially, so it is not something to guess at.',
      },
    ],
  },

  withamsville: {
    intro:
      'Older kitchen in Withamsville? Mixed housing near a busy corridor. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is an unincorporated Union Township community in Clermont County, with residential streets around the commercial corridor along State Route 125.',
      'The housing here spans several decades, so the era of the specific property is what sets the expectations behind the plaster. Older properties bring the familiar period list; newer ones bring predictable construction and dated finishes. Union Township and Clermont County govern the permit, with the county’s process differing from Hamilton’s.',
    ],
    localFaqs: [
      {
        q: 'Does the era of my house change the budget?',
        a: 'Substantially. Period houses carry more unknowns behind the walls than later ones, and the price should reflect that honestly.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Union Township and Clermont County — it is unincorporated, and Clermont’s administration differs from Hamilton County’s.',
      },
    ],
  },

  milford: {
    intro:
      'Older kitchen in Milford? A genuine historic core. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is an independent city on the Little Miami River east of Cincinnati, with a walkable historic centre and a boundary extending across a county line.',
      'The older housing is concentrated in and around the historic core and is proper period stock — plaster, original detail where it survives, and small kitchens built as working rooms. The city’s zoning and permitting apply throughout, but which county a specific parcel sits in affects records and some administration. Both get established before design.',
    ],
    localFaqs: [
      {
        q: 'Which county is my Milford address in?',
        a: 'It depends on the parcel, since the city extends across a county line. City zoning applies throughout, but the county affects records.',
      },
      {
        q: 'Is the historic core different to work in?',
        a: 'Considerably — genuine period construction with all that implies, versus newer stock further out.',
      },
    ],
  },

  mulberry: {
    intro:
      'Older kitchen in Mulberry? Rolling township ground. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is an unincorporated Miami Township community in Clermont County near Milford, on noticeably rolling ground with a mix of older properties and later development.',
      'On ground that rolls, older houses have often settled, and the kitchen floor is where that first shows. Establishing whether the movement is long finished or ongoing comes before cabinetry is installed over it. The mix of eras here also means the specific property matters more than the area, which is what the survey is for.',
    ],
    localFaqs: [
      {
        q: 'Is settlement common in these houses?',
        a: 'On rolling ground, some movement in older houses is normal. Whether it is historic or ongoing is the assessment worth making first.',
      },
      {
        q: 'Who governs the permit?',
        a: 'Miami Township and Clermont County — it is unincorporated, so there is no village or city process.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Older kitchen in Mount Repose? Several development eras. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is an unincorporated Miami Township community in Clermont County, developed over several decades with a mix of subdivision eras.',
      'Because the area filled in gradually, houses a few streets apart can differ by decades in construction — and that difference lives behind the plaster rather than at the kerb. Service provision can vary too, with some older properties on arrangements that predate mains provision in the area. Both are established for the specific address rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Are all properties here on public sewer?',
        a: 'Not necessarily. The area developed over several decades, so some older properties may be on different arrangements. It is confirmed per address.',
      },
      {
        q: 'Does the build era really change things?',
        a: 'It changes what is behind the walls and what the services need, which is most of the budget. We establish it on the survey.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Older kitchen in Day Heights? A small community, varied houses. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a small unincorporated Miami Township community in Clermont County, with a modest residential footprint on gently rolling ground east of Milford.',
      'In a community this size the housing varies more than it standardises, so the individual property does the talking. Older houses here bring the usual period conditions and may have been extended over time in ways that were never recorded. Miami Township and Clermont County govern the permit rather than any village or city.',
    ],
    localFaqs: [
      {
        q: 'Why does the individual property matter so much?',
        a: 'Because in a small community with varied housing, the era and history of your specific house tells you far more than the area does.',
      },
      {
        q: 'Are undocumented extensions a problem?',
        a: 'Not automatically, but how they were tied in structurally and for services is worth establishing before planning a kitchen inside one.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Older kitchen in New Richmond? A period river village. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a village on the Ohio River in southern Clermont County, with a historic riverfront core on low ground and higher land rising behind it.',
      'The riverfront core holds genuinely old houses, and on low ground the first thing worth establishing is what sits under the kitchen floor — structure, service condition and any history of water. On the higher ground behind, those questions ease and the work becomes standard period remodelling. The village sets its own zoning and permitting for both.',
    ],
    localFaqs: [
      {
        q: 'Does the river location affect the kitchen?',
        a: 'On the low riverfront ground, what is beneath the floor comes first — structure, services and any history of water.',
      },
      {
        q: 'Are the houses in the core genuinely old?',
        a: 'Many are, and they are proper period work: plaster, original detail where it survives, and services long outgrown.',
      },
    ],
  },

  amelia: {
    intro:
      'Older kitchen in Amelia? Confirm the governing authority. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) sits in Clermont County east of Cincinnati along the State Route 125 corridor, with residential development around a long-standing centre on gently rolling ground.',
      'Local government arrangements in this part of Clermont County have changed in recent years, so which authority actually issues the permit for a given address is something we confirm in writing at the outset rather than assume from an older reference. Once that is settled the work is ordinary, with the era of the specific house setting the expectations behind the plaster.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit for an Amelia address?',
        a: 'Arrangements here have changed in recent years, so we confirm the current authority in writing for the specific address rather than assuming.',
      },
      {
        q: 'Does that hold up the project?',
        a: 'Not if it is done first. It is a short piece of work at the outset that avoids submitting to the wrong office later.',
      },
    ],
  },

  batavia: {
    intro:
      'Older kitchen in Batavia? A county seat with period housing. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, a village on the East Fork of the Little Miami with a historic centre and township ground around it.',
      'The village core holds genuine period houses — plaster, original proportions and kitchens built as working rooms. The first practical question is whether an address sits inside the village or in the surrounding township, since they are separate authorities with separate processes. That gets established before anything else, along with the era of the house itself.',
    ],
    localFaqs: [
      {
        q: 'Village or township — does it matter?',
        a: 'It decides which authority issues the permit and which rules apply. We confirm which side of the boundary an address falls on first.',
      },
      {
        q: 'Is the village housing genuinely period?',
        a: 'In the core, yes — plaster, original proportions and kitchens built as service rooms rather than living space.',
      },
    ],
  },

  owensville: {
    intro:
      'Older kitchen in Owensville? Village houses and farmhouses. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in central Clermont County with a compact centre and open agricultural ground surrounding it.',
      'Two kinds of older property here: the period houses in the village itself, and the farmhouses on the township ground beyond. The farmhouses tend to have been added to over generations, with services extended piecemeal and sometimes private water or waste arrangements. Which authority governs — village or township — is established alongside what actually serves the house.',
    ],
    localFaqs: [
      {
        q: 'Are farmhouse kitchens more involved?',
        a: 'Usually. Generations of additions and piecemeal services mean the survey does more work than it would in a village house.',
      },
      {
        q: 'Village or township rules?',
        a: 'They are separate authorities with separate processes. We confirm which governs the specific address before design.',
      },
    ],
  },

  goshen: {
    intro:
      'Older kitchen in Goshen? Rural township, farmhouse work. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is an unincorporated community in Goshen Township, northern Clermont County, with open rolling farmland across much of the township.',
      'The genuinely older housing here is farmhouses, and they bring the pattern that goes with them — additions made across generations without records, services extended rather than renewed, and in some cases private water or on-site waste. The survey carries more weight than usual because the house has usually been changed more than usual. Goshen Township and Clermont County govern.',
    ],
    localFaqs: [
      {
        q: 'What should I expect in a farmhouse remodel?',
        a: 'Additions without records, services extended piecemeal, and sometimes private water or waste. The survey does the real work here.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Goshen Township and Clermont County — it is unincorporated, so there is no village process.',
      },
    ],
  },

  moscow: {
    intro:
      'Older kitchen in Moscow? A small river village. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small village on the Ohio River in southern Clermont County, with rural ground extending behind the riverside settlement.',
      'On riverside ground the first thing worth establishing is what sits beneath the kitchen floor — structure, service condition and any history of water. The village is small, so service provision to a specific property is confirmed individually rather than inferred. Since we travel out here, it helps to make one visit do the work of two.',
    ],
    localFaqs: [
      {
        q: 'What gets checked first?',
        a: 'What is under the kitchen floor — structure, services and any history of water. On riverside ground that precedes anything above it.',
      },
      {
        q: 'How do I make the visit count?',
        a: 'Access to the kitchen and to whatever is below it, plus a rough build date. That usually lets us assess fully in one visit.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Older kitchen in Newtonsville? A tiny village in farm country. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a very small village in north-eastern Clermont County surrounded by open agricultural country.',
      'Whether an address sits inside the village or on township ground decides the zoning and the permitting, and it usually decides whether the property is on mains services or private arrangements. Older houses out here tend to have been extended over generations. All of it is establishable on one properly prepared visit, which is how we would rather do it.',
    ],
    localFaqs: [
      {
        q: 'Inside the village or outside — what changes?',
        a: 'The zoning, the permitting authority and usually whether the property is on mains services or private arrangements.',
      },
      {
        q: 'Do you travel out this far?',
        a: 'Regularly. We would rather make one well-prepared visit than two, so access and a rough build date help considerably.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Older kitchen in Williamsburg? An early historic core. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a village in eastern Clermont County on the East Fork of the Little Miami, with an early historic core and rural township ground around it.',
      'The core holds some genuinely early housing, which means proper period conditions — plaster, original joinery where it survives, and kitchens built as working rooms. On the township ground beyond, the farmhouse pattern applies instead. Which authority governs, village or township, is established alongside the era of the house.',
    ],
    localFaqs: [
      {
        q: 'How old is the housing in the core?',
        a: 'Some of it is genuinely early, which means real period conditions rather than a cosmetic refit.',
      },
      {
        q: 'Does the township differ?',
        a: 'It is a separate authority with its own process, and the housing there tends to be farmhouses rather than village houses.',
      },
    ],
  },

  bethel: {
    intro:
      'Older kitchen in Bethel? Village houses and working farms. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a village in southern Clermont County with a compact historic centre and extensive farmland across the surrounding township.',
      'The village houses are period properties with the conditions that implies; the farmhouses beyond bring generations of additions and services extended rather than renewed. Some rural properties are on private water or on-site waste, which is established on the survey rather than assumed. We travel out here regularly and plan the visit to do the work in one trip.',
    ],
    localFaqs: [
      {
        q: 'Are rural properties on mains services?',
        a: 'Not all of them. Whether private water or on-site waste is in play gets established on the survey rather than assumed.',
      },
      {
        q: 'Village or farmhouse — which is more work?',
        a: 'Farmhouses usually, because generations of undocumented additions take more unpicking than a village house does.',
      },
    ],
  },

  // ---------- Cohort 11 · Butler & Warren County, Ohio, and southeastern Indiana ----------

  ross: {
    intro:
      'Older kitchen in Ross? Farmhouses in the Miami valley. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is an unincorporated community in Ross Township, western Butler County, set in open agricultural country along the Great Miami River valley.',
      'The older properties here are farmhouses, with the pattern that implies — additions across generations, services extended piecemeal, and sometimes private water or waste. Ross Township and Butler County govern, and Butler’s administration differs from Hamilton County’s. On valley ground, what sits beneath the kitchen floor is worth checking before anything above it is planned.',
    ],
    localFaqs: [
      {
        q: 'Who governs a Ross address?',
        a: 'Ross Township and Butler County. It is unincorporated, and Butler’s process differs from Hamilton County’s.',
      },
      {
        q: 'What is typical in a farmhouse here?',
        a: 'Additions made over generations, services extended rather than renewed, and sometimes private water or waste arrangements.',
      },
    ],
  },

  fairfield: {
    intro:
      'Older kitchen in Fairfield? Later-20th-century housing. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a substantial independent city in Butler County north of Cincinnati, developed largely through the later 20th century with consistent residential subdivisions.',
      'Most housing here is recent enough that a dated kitchen in a sound house is the accurate description — our main kitchen service, and a more predictable job with fewer unknowns. Where a property predates the growth it is genuine period work. The city sets its own zoning and permitting under Butler County administration.',
    ],
    localFaqs: [
      {
        q: 'Is my Fairfield house an older home?',
        a: 'Most here are later builds where our main kitchen service fits better. Properties predating the growth are the exception.',
      },
      {
        q: 'Who permits the work?',
        a: 'The City of Fairfield, under Butler County administration rather than Hamilton County’s.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Older kitchen in Beckett Ridge? A modern planned community. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a large planned residential community in West Chester Township, Butler County, developed around a golf course with consistent architectural standards.',
      'The housing here is modern, so this is generally a dated kitchen in a sound house rather than period work — our main kitchen service, and a straightforward project. The association’s architectural standards typically govern anything affecting the exterior, though interior work is usually a separate matter. Worth confirming with the association where a project touches the outside.',
    ],
    localFaqs: [
      {
        q: 'Does the association need to approve a kitchen remodel?',
        a: 'Interior work generally not. Anything affecting the exterior typically does, so we establish that where the project touches the outside.',
      },
      {
        q: 'Is this really an older-home project?',
        a: 'Usually not — the housing is modern. Our main kitchen service is the better fit and the more predictable job.',
      },
    ],
  },

  wetherington: {
    intro:
      'Older kitchen in Wetherington? Modern houses, strict standards. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is a planned residential community in West Chester Township, Butler County, developed to a consistent and closely maintained standard with controlled access.',
      'The housing is modern, so a kitchen here is generally a refit rather than period work. What is distinctive is the practical side: a controlled-access community usually governs construction traffic, working hours and where materials may be stored, and those rules shape the programme. We establish them alongside the design rather than discovering them on the first morning.',
    ],
    localFaqs: [
      {
        q: 'Do the community rules affect the work?',
        a: 'Often — deliveries, working hours and material storage are commonly governed, and that shapes the programme rather than just the paperwork.',
      },
      {
        q: 'Is this period work?',
        a: 'Generally not. The housing is modern, so our main kitchen service usually fits better than this one.',
      },
    ],
  },

  hamilton: {
    intro:
      'Older kitchen in Hamilton? A 19th-century city with real stock. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, a substantial city built on both banks of the Great Miami, with a 19th-century core and historic residential streets.',
      'This is one of the better bodies of genuinely period housing in the region — plaster, original joinery where it survives, chimney breasts still in the kitchen wall, and small service kitchens. On ground near the river, what sits beneath the floor is worth establishing first. Where a property falls in an area the city treats as historically significant, anything affecting the exterior is confirmed with them before design.',
    ],
    localFaqs: [
      {
        q: 'Is there much genuine period housing here?',
        a: 'A considerable amount, particularly in the 19th-century core and the older residential streets. It is proper period work.',
      },
      {
        q: 'Will the city have a view on the work?',
        a: 'Interior work generally differs from anything affecting the exterior. What applies to your property is established before design.',
      },
    ],
  },

  millville: {
    intro:
      'Older kitchen in Millville? A tiny village in farm country. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a very small village in western Butler County surrounded by open agricultural ground.',
      'Whether an address sits inside the village or on township ground decides the zoning and the permitting, and often whether the property is on mains services. Older properties out here tend to have been extended over generations with services added rather than renewed. Butler County administration applies either way, and it differs from Hamilton County’s.',
    ],
    localFaqs: [
      {
        q: 'Village or township ground?',
        a: 'It decides the zoning, the permitting authority and often whether the property is on mains services. We confirm it for the address.',
      },
      {
        q: 'Is Butler County’s process different?',
        a: 'It differs from Hamilton County’s in administration and timing, which we account for in the programme.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Older kitchen in New Miami? A small village with industrial roots. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village in Butler County just north of Hamilton along the Great Miami, shaped by the heavy industry that historically operated in the valley.',
      'The housing is modest, built for people working nearby, with compact kitchens and services extended over a long period. On valley ground close to the river, what sits under the kitchen floor is worth checking before planning above it. The village sets its own zoning and permitting despite its size.',
    ],
    localFaqs: [
      {
        q: 'What is typical in these houses?',
        a: 'Modest working-family construction, compact kitchens and services added to over decades rather than renewed.',
      },
      {
        q: 'Does the village do its own permitting?',
        a: 'Yes, despite its size. We confirm requirements with the village rather than assuming county practice.',
      },
    ],
  },

  monroe: {
    intro:
      'Older kitchen in Monroe? A historic centre in a growing city. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is an independent city along the I-75 corridor whose boundary extends across the Butler and Warren county line, grown substantially in recent decades.',
      'The older housing is concentrated around the original centre; most of the rest is recent. The city’s zoning and permitting apply throughout, but which county a parcel sits in affects records and some administration, and that is worth settling early. Establishing the era of the specific house comes first, since it sets everything else.',
    ],
    localFaqs: [
      {
        q: 'Which county is my Monroe address in?',
        a: 'It depends on the parcel — the city spans the Butler and Warren line. City zoning applies throughout, but the county affects records.',
      },
      {
        q: 'Where is the older housing?',
        a: 'Concentrated around the original centre. Most of the rest of the city is recent development.',
      },
    ],
  },

  landen: {
    intro:
      'Older kitchen in Landen? Planned subdivisions, modern houses. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is an unincorporated community in Deerfield Township, Warren County, developed as planned residential subdivisions around shared open space.',
      'The housing is modern, so this is generally a dated kitchen in a sound house rather than period work — our main kitchen service, with fewer unknowns and a more predictable programme. Deerfield Township and Warren County handle the permit, and Warren’s administration differs from Hamilton County’s in process and timing.',
    ],
    localFaqs: [
      {
        q: 'Is this period work?',
        a: 'Generally not — the housing is modern subdivision stock, where our main kitchen service fits better.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Deerfield Township and Warren County. Warren’s process and timing differ from Hamilton County’s.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Older kitchen in Loveland Park? Not the same as Loveland. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is an unincorporated community in Warren County adjoining the city of Loveland, with established residential streets on generally level ground.',
      'The shared name causes real confusion, and it has a practical consequence: this is unincorporated Warren County ground, so the township and county govern rather than the City of Loveland, and the city’s permitting does not apply. Establishing that for the address at the outset avoids approaching the wrong office entirely.',
    ],
    localFaqs: [
      {
        q: 'Is Loveland Park part of Loveland?',
        a: 'No. It is unincorporated Warren County ground, so the township and county govern and the city’s permitting does not apply.',
      },
      {
        q: 'Does that matter practically?',
        a: 'It changes who you apply to. Establishing it first avoids submitting to the wrong office and losing weeks.',
      },
    ],
  },

  maineville: {
    intro:
      'Older kitchen in Maineville? A historic centre, growing edges. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a village in Warren County north-east of Cincinnati, with a small historic centre and considerable recent development around it.',
      'The genuinely older housing is in and around the historic centre and is proper period stock. Away from it the development is recent and the work correspondingly simpler. Whether an address sits inside the village or on township ground decides the permitting authority, which in a fast-developing area is worth confirming rather than assuming.',
    ],
    localFaqs: [
      {
        q: 'Where is the period housing?',
        a: 'In and around the historic centre. The development beyond it is recent, which is a simpler and more predictable project.',
      },
      {
        q: 'Village or township?',
        a: 'It decides the permitting authority, and in a fast-developing area that boundary is worth confirming for the specific address.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Older kitchen in Pleasant Plain? A small village in farm country. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in eastern Warren County surrounded by open agricultural ground.',
      'Whether an address is inside the village or on township land decides the zoning, the permitting and often whether the property is on mains services. The older properties out here are typically farmhouses that have been extended over generations, with services added rather than renewed. Since we travel out, we plan the visit to establish all of it in one trip.',
    ],
    localFaqs: [
      {
        q: 'What decides the permitting here?',
        a: 'Whether the address sits inside the village or on township land. That also often decides whether mains services are available.',
      },
      {
        q: 'How should I prepare for the visit?',
        a: 'Access to the kitchen and to whatever is below it, plus a rough build date. That usually lets us assess fully in one trip.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Older kitchen in South Lebanon? A historic core beside the river. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a village in Warren County on the Little Miami River, with a historic centre and substantial recent development around it.',
      'The period housing sits in and around the historic centre; the newer development is a different and simpler project. On ground near the Little Miami, what is beneath the kitchen floor is worth establishing before anything above it is planned. Whether an address is village or township ground decides the permitting authority.',
    ],
    localFaqs: [
      {
        q: 'Does the river affect the work?',
        a: 'On ground near the valley, checking the floor structure and any history of water comes before planning what sits above it.',
      },
      {
        q: 'Is all the housing here old?',
        a: 'No — the period stock is around the historic centre, with substantial recent development beyond it.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Older kitchen in Lawrenceburg? Indiana code, historic river town. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a Dearborn County city on the Ohio River in south-eastern Indiana, a historic river town on low ground with hills rising behind it.',
      'Building here means Indiana’s code, permitting authority and inspections — nothing carries across from an Ohio or Kentucky approval. The older housing is genuine period stock, and on the low ground near the river what sits beneath the kitchen floor is worth establishing first: structure, services and any history of water.',
    ],
    localFaqs: [
      {
        q: 'Is Indiana permitting different?',
        a: 'Yes — its own code, authority and inspections. An Ohio or Kentucky approval carries nothing across the state line.',
      },
      {
        q: 'What comes first on low river ground?',
        a: 'Establishing what is beneath the kitchen floor — structure, service condition and any history of water.',
      },
    ],
  },

  greendale: {
    intro:
      'Older kitchen in Greendale? Indiana rules, hillside houses. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County town in south-eastern Indiana adjoining Lawrenceburg, set largely on higher ground rising away from the Ohio River valley.',
      'Sitting above the valley means the flood questions ease and the hillside ones take over — older houses on rising ground often settle, and the kitchen floor is where that shows. Establishing whether the movement is long finished or ongoing precedes installing anything over it. Indiana’s code and the town’s own zoning both apply.',
    ],
    localFaqs: [
      {
        q: 'Is settlement common here?',
        a: 'On rising ground, some movement in older houses is normal. Whether it is historic or ongoing is the assessment worth making first.',
      },
      {
        q: 'Which rules apply?',
        a: 'Indiana’s code and permitting, alongside the town’s own zoning. Both get confirmed for the address before design.',
      },
    ],
  },

  aurora: {
    intro:
      'Older kitchen in Aurora? A historic Indiana river town. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a Dearborn County city on the Ohio River in south-eastern Indiana, a 19th-century river town with a notable architectural legacy and streets climbing the hillside above the waterfront.',
      'The period housing here is genuine and often of real quality, which makes matching new work to surviving original detail the interesting problem. Indiana’s code and permitting apply alongside the city’s own zoning. On the hillside streets, older houses may have settled, and on the lower ground the usual checks beneath the kitchen floor come first.',
    ],
    localFaqs: [
      {
        q: 'Is the older housing here worth preserving?',
        a: 'Often, yes — the town has a real architectural legacy, and matching new work to what survives is much of the value.',
      },
      {
        q: 'Which authority governs?',
        a: 'Indiana’s code and permitting alongside the city’s own zoning. Both get confirmed for the specific address.',
      },
    ],
  },
};
