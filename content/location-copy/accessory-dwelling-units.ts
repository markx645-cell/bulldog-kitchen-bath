import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /accessory-dwelling-units/[location].
 *
 * ⚠️ HARD RULE — NO INVENTED ZONING.
 * ADU rules (whether they are permitted at all, maximum size, setbacks,
 * owner-occupancy, parking, short-term-let restrictions) vary by jurisdiction
 * and change over time. This file must NEVER state a specific ordinance figure
 * — no square-foot caps, no setback distances, no lot-size minimums, no fee
 * amounts. A homeowner could rely on it and lose money.
 *
 * What these pages DO say is accurate and useful:
 *   - which authority governs (verifiable: Norwood, St. Bernard, Golf Manor,
 *     Lincoln Heights etc. are their own municipalities; KY and IN are
 *     separate states),
 *   - what gets checked and why it decides the project,
 *   - physical constraints visible on the lot itself — size, slope, alley
 *     access, trees, easements, how equipment reaches the back,
 *   - the real cost categories people miss (utility taps, sewer or septic
 *     capacity, foundations),
 *   - and honest framing on financing, appraisal and family-versus-rental use.
 *
 * If a future edit wants to add a specific rule, it must come from that
 * jurisdiction's current code — not from here.
 */
export const aduCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'ADU in Sedamsville? On a hillside lot, the foundation decides the budget. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'Building on a slope costs more before anything is above ground. A stepped or piered foundation, retaining where the cut requires it, and getting equipment to the back of a hillside lot are all real figures rather than contingencies. We survey the actual grade and access before quoting, because on this terrain the difference between a flat corner and a steep one can be a substantial share of the whole project.',
    ],
    localFaqs: [
      {
        q: 'Does a hillside lot make an ADU much more expensive?',
        a: 'It can. A stepped or piered foundation, any retaining, and getting equipment to the back are real costs rather than contingencies — so we survey the grade and access before quoting.',
      },
      {
        q: 'What is the first thing you check?',
        a: 'Whether the zoning permits it at all, then whether the lot physically takes it. Both before design, because either can end the project.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'ADU in Sayler Park? Zoning comes before drawings, always. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'Whether an ADU is permitted, at what size, and where it can sit on the lot are set by the governing jurisdiction — and they are the questions that decide the project. We establish them in writing with the authority before anyone pays for a design. Paying for drawings first and discovering the setbacks afterwards is the most common and most expensive way this goes wrong.',
    ],
    localFaqs: [
      {
        q: 'What is the first step for an ADU?',
        a: 'Confirming with the governing authority whether it is permitted, at what size, and where it can sit on the lot. That happens before anyone pays for a design.',
      },
      {
        q: 'Why not design it first?',
        a: 'Because setbacks, size limits and lot coverage frequently reshape the whole thing. Designing first and checking afterwards is the most expensive way to do this.',
      },
    ],
  },

  riverside: {
    intro:
      'ADU in Riverside? On low river ground, the foundation and flood questions come first. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'Building a new dwelling on low river bottomland brings requirements a remodel never faces — how the structure sits relative to flood elevation, what that does to the foundation design and the cost, and what it means for insuring it afterwards. Those are established at the outset rather than discovered at permit review, and on some of these lots they change the answer entirely.',
    ],
    localFaqs: [
      {
        q: 'Can we build an ADU on low river ground?',
        a: 'It depends on flood elevation requirements, which affect the foundation design, the cost and the insurance afterwards. We establish those at the outset rather than at permit review.',
      },
      {
        q: 'Could that rule it out?',
        a: 'On some lots it makes the foundation cost disproportionate to the project. We would rather tell you that early than after you have paid for drawings.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'ADU in East Price Hill? On a tight lot, coverage and setbacks decide what fits. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'The lots here are narrow and deep, and between required setbacks and limits on how much of a lot can be built on, the space genuinely available for a detached structure is frequently smaller than the back garden suggests. Measuring that envelope against the jurisdiction’s requirements is the first exercise — and where it does not work, a garage conversion or an attached addition sometimes does.',
    ],
    localFaqs: [
      {
        q: 'Is our back garden big enough for an ADU?',
        a: 'Less often than it looks. Setbacks and lot coverage limits reduce the usable envelope considerably, and measuring that against the jurisdiction’s requirements is the first exercise.',
      },
      {
        q: 'What if a detached ADU will not fit?',
        a: 'A garage conversion or an attached addition sometimes works where a detached building does not. We look at all three rather than assuming detached.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'ADU in West Price Hill? Keeping a parent close is the usual reason, and it is a good one. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'Most ADU enquiries here are about family rather than income — a parent who should not be living alone but does not want to move in, or an adult child who needs their own front door. Built for that, the specification changes: level thresholds, a bathroom that works for someone unsteady, and a layout that suits one person living independently rather than a lettable unit.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU a good option for a parent?',
        a: 'It is the most common reason people build one — independence on both sides without anyone moving away. Built for that, the specification is different from a rental unit.',
      },
      {
        q: 'What should be specified differently?',
        a: 'Level thresholds, a bathroom that works for someone unsteady, single-storey living and a layout planned for one person rather than maximum lettable rooms.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'ADU in Lower Price Hill? Rowhouse lots rarely leave room for a second building. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'We should be straightforward: a detached ADU needs a lot with room around it, and 19th-century rowhouse plots frequently do not have that once setbacks are applied. Where there is alley access and a rear yard, sometimes it works. More often the realistic route here is converting existing space — an upper floor, a rear structure, or a basement where the height allows — rather than adding a building.',
    ],
    localFaqs: [
      {
        q: 'Can a rowhouse lot take a detached ADU?',
        a: 'Frequently not once setbacks are applied. Where there is alley access and a rear yard it sometimes works, but we would rather assess honestly than encourage a design that cannot be sited.',
      },
      {
        q: 'What is the alternative?',
        a: 'Converting existing space — an upper floor, a rear structure, or a basement where the height allows. That is a different project and often the realistic one here.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'ADU in Over-the-Rhine? Historic district review applies to anything visible. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'A new structure in a historic district faces design review as well as zoning, and both have to be satisfied before construction. That is a longer path with more meetings, and it shapes materials, roof form and window proportions rather than just permitting them. It is entirely navigable and it is not a process to start without knowing it exists.',
    ],
    localFaqs: [
      {
        q: 'Does historic designation affect an ADU?',
        a: 'A new structure faces design review alongside zoning, and it shapes materials, roof form and proportions rather than simply permitting them. It is navigable and it takes longer.',
      },
      {
        q: 'How much longer?',
        a: 'It adds a review stage with its own schedule. We build that into the programme from the start rather than treating it as a delay.',
      },
    ],
  },

  downtown: {
    intro:
      'ADU in Downtown Cincinnati? Honestly, this is rarely the right setting. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'An ADU is an accessory to a single-family lot, and the central business district is largely condominiums and converted commercial buildings without the lot to put one on. We would say that on the phone rather than after a site visit. Where a downtown-adjacent property genuinely has land and single-family zoning, the same feasibility work applies as anywhere else.',
    ],
    localFaqs: [
      {
        q: 'Can you build an ADU downtown?',
        a: 'Rarely — an ADU is accessory to a single-family lot, and the central business district is largely condominiums and converted buildings without land to put one on. We will say so on the phone.',
      },
      {
        q: 'What about a lot on the edge of downtown?',
        a: 'Where a property genuinely has land and the right zoning, the same feasibility work applies as anywhere else. It is worth a conversation.',
      },
    ],
  },

  'west-end': {
    intro:
      'ADU in the West End? Utility connections are the cost people miss. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'A second dwelling needs water, sewer, gas and electric, and whether those are extended from the house or run as separate services is both a cost decision and sometimes a requirement. Connection and capacity charges are a genuine line item that surprises people, and the trench from the street or the house to the new building is real work. We establish all of it before quoting.',
    ],
    localFaqs: [
      {
        q: 'What do utility connections cost?',
        a: 'It depends whether services extend from the house or run separately, and on the connection charges in your jurisdiction. It is a genuine line item and we establish it before quoting rather than after.',
      },
      {
        q: 'Does an ADU need separate meters?',
        a: 'Sometimes it is required and sometimes it is a choice with rental implications. We confirm which applies before designing the services.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'ADU in Mount Adams? Steep lots and no access is the usual answer here. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'Two constraints compound here. The lots are small and tightly packed, so the buildable envelope after setbacks is frequently nothing. And where there is space, getting concrete trucks and equipment to a steep rear yard on these streets is a genuine problem rather than an inconvenience. We assess both before anything else, and on most of the hill the honest answer is no.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be built on the hill?',
        a: 'On most of these lots, no — small tightly packed plots leave little buildable envelope after setbacks, and steep rear access makes construction genuinely difficult. We assess both first.',
      },
      {
        q: 'Is there anything that works here?',
        a: 'Converting existing space is frequently the realistic route — an upper floor or a rear structure rather than a new building.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'ADU in Mount Auburn? Some of these houses already have the space inside. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Houses this size frequently have a coach house, a rear wing or an upper floor that could become a self-contained unit — which is a conversion rather than new construction, with a different permitting path and usually a lower cost. Whether it counts as an ADU or a second dwelling unit is a zoning question with real implications, and it is worth answering before the work is designed.',
    ],
    localFaqs: [
      {
        q: 'Can we convert existing space instead of building?',
        a: 'In houses this size, frequently — a coach house, a rear wing or an upper floor. It is a different permitting path from new construction and usually costs less.',
      },
      {
        q: 'Is a conversion still an ADU?',
        a: 'How it is classified is a zoning question with real implications for what is permitted. We establish that before the work is designed rather than after.',
      },
    ],
  },

  clifton: {
    intro:
      'ADU in Clifton? Big lots and mature trees both matter. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'The lots here are generous enough that a detached ADU is genuinely feasible, and the constraint is frequently the trees rather than the zoning. Mature specimens have root systems that a foundation and a utility trench will damage, and some are protected. Siting the building around them rather than through them is part of the feasibility work, not an afterthought.',
    ],
    localFaqs: [
      {
        q: 'Do mature trees affect where an ADU can go?',
        a: 'Considerably — root systems are damaged by foundations and utility trenches, and some trees are protected. Siting around them is part of the feasibility work rather than an afterthought.',
      },
      {
        q: 'Are these lots big enough?',
        a: 'Frequently yes, which makes Clifton one of the better prospects. The buildable envelope after setbacks is still the first thing we measure.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'ADU in Corryville? Near campus, letting rules deserve checking first. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'The obvious use near campus is student accommodation, and that is exactly where restrictions most often apply — some jurisdictions require the owner to live on the property, some limit how an ADU may be let, and some treat short-term letting differently again. Those rules decide whether the investment case works at all, so they get confirmed in writing before anyone commits.',
    ],
    localFaqs: [
      {
        q: 'Can we let an ADU to students?',
        a: 'It depends on the jurisdiction — some require owner-occupancy on the property, some limit how an ADU may be let. Those rules decide the investment case, so we confirm them in writing first.',
      },
      {
        q: 'What about short-term letting?',
        a: 'It is frequently treated differently from a standard tenancy and sometimes restricted entirely. Worth confirming before the project is costed around that income.',
      },
    ],
  },

  northside: {
    intro:
      'ADU in Northside? Alley access changes what is possible on a lot. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'A rear alley is genuinely valuable for an ADU: construction access without dragging materials past the house, a separate entrance so the unit does not share a path with the main dwelling, and sometimes parking that would otherwise be a problem. Where a lot backs onto one, that materially improves both the build and the finished arrangement. It is one of the first things we look for.',
    ],
    localFaqs: [
      {
        q: 'Does alley access help?',
        a: 'Considerably — construction access without going past the house, a genuinely separate entrance, and sometimes parking that would otherwise be difficult. It is one of the first things we look for.',
      },
      {
        q: 'What if there is no alley?',
        a: 'It is workable, but materials and equipment have to come past or through, which adds cost and disruption. We factor that honestly rather than glossing over it.',
      },
    ],
  },

  'college-hill': {
    intro:
      'ADU in College Hill? Garage conversions are frequently the cheaper route. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'Where a detached garage already exists, converting it can cost meaningfully less than building new — the foundation, the walls and the roof are already there and already sited legally. What it needs is insulation, proper services, egress, and frequently structural work the original never had. Whether it qualifies under the jurisdiction’s rules is the first question, and it is not automatic.',
    ],
    localFaqs: [
      {
        q: 'Is converting the garage cheaper?',
        a: 'Frequently, because the foundation, walls and roof exist and are already sited legally. It still needs insulation, services, egress and often structural work the original never had.',
      },
      {
        q: 'Does a garage conversion automatically qualify?',
        a: 'No — whether it counts and what it must meet is a jurisdiction question. We confirm that before designing rather than assuming.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'ADU in Walnut Hills? A surviving coach house is a real head start. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Some of these properties still have the original carriage house or rear service building, and where one survives it is the most promising ADU opportunity there is — an existing structure, already sited, frequently with alley access. What it needs is a structural assessment first, because 19th-century outbuildings were not built to carry a dwelling and many have been neglected for decades.',
    ],
    localFaqs: [
      {
        q: 'Can an old carriage house become an ADU?',
        a: 'It is the most promising starting point there is — existing structure, already sited, often with alley access. It needs a structural assessment first, since these were not built to carry a dwelling.',
      },
      {
        q: 'What if the structure is poor?',
        a: 'Sometimes it is rebuilt on the existing footprint, which can retain the siting advantage. We assess honestly rather than promising a conversion that becomes a rebuild.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'ADU in East Walnut Hills? A new building has to sit right beside a period house. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'On a street of stately period houses, a new structure in the garden is visible and it will be judged. Proportion, roof form, window rhythm and materials are what make it read as belonging rather than as a shed with plumbing — and where the property sits in a review district, those are also what gets approved. It is a design conversation rather than a catalogue selection.',
    ],
    localFaqs: [
      {
        q: 'Will a new ADU look out of place?',
        a: 'It can. Proportion, roof form, window rhythm and materials are what make it read as belonging — and where a review district applies, those are also what gets approved.',
      },
      {
        q: 'Can it be modern?',
        a: 'Yes, and a well-proportioned modern building frequently sits better beside a period house than a weak imitation does. It is a design conversation either way.',
      },
    ],
  },

  avondale: {
    intro:
      'ADU in Avondale? Check whether the existing electrical service can carry two homes. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'A second dwelling is a substantial electrical load, and in houses of this age the incoming service frequently cannot carry it. That means either a service upgrade at the main house or a separate service to the ADU, and both are real costs with utility lead times attached. We establish the existing service capacity at the feasibility stage rather than at rough-in.',
    ],
    localFaqs: [
      {
        q: 'Will our electrical service carry an ADU?',
        a: 'In houses of this age, frequently not. That means a service upgrade at the main house or a separate service to the ADU — both real costs with utility lead times attached.',
      },
      {
        q: 'When do you check that?',
        a: 'At the feasibility stage, alongside zoning. It is one of the figures that can meaningfully change the budget, so it belongs early.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'ADU in Hyde Park? Financing one is harder than financing a remodel. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'An ADU sits awkwardly between products — larger than most home improvement lending, and not a straightforward mortgage. Appraisers also treat the added value inconsistently, so the finished building may not raise the valuation by what it cost. None of that stops the project and all of it is better understood before committing than discovered at the lending stage.',
    ],
    localFaqs: [
      {
        q: 'How do people finance an ADU?',
        a: 'It sits awkwardly between products — larger than most home improvement lending and not a straightforward mortgage. Worth exploring with a lender before committing rather than after.',
      },
      {
        q: 'Does it add its cost in value?',
        a: 'Appraisers treat added value inconsistently, so frequently not pound for pound. If the reason is family or income rather than valuation, that matters less — and we would rather say so.',
      },
    ],
  },

  oakley: {
    intro:
      'ADU in Oakley? Bungalow lots are deeper than they look. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'The bungalow plots here are frequently long, and the rear portion is genuinely usable once the setbacks are mapped. What decides it is how services reach the back and whether equipment can get there without going through the house — a side passage wide enough for a mini excavator changes the cost substantially compared with hand-digging. Both are established on the first visit.',
    ],
    localFaqs: [
      {
        q: 'Are these lots deep enough?',
        a: 'Frequently yes — bungalow plots here are long and the rear portion is usable once setbacks are mapped. Access to it is the variable that decides the cost.',
      },
      {
        q: 'Why does equipment access matter?',
        a: 'A side passage wide enough for a small excavator changes foundation and trenching costs substantially compared with hand-digging. It is established on the first visit.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'ADU in Mount Lookout? On a sloping lot, the cheapest site is not always the obvious one. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'On sloping ground the position that looks best from the house is frequently the most expensive to build on. Siting the building where the grade is flattest, even if it is not the obvious spot, can save a substantial amount in foundation and retaining work. That trade-off is worth having in front of you before the design is fixed rather than after.',
    ],
    localFaqs: [
      {
        q: 'Does where we put it change the cost?',
        a: 'On a slope, considerably. Siting where the grade is flattest rather than where it looks best from the house can save a substantial amount in foundation and retaining work.',
      },
      {
        q: 'Can we see both options?',
        a: 'We would put the trade-off in front of you before the design is fixed — the view from the house against the foundation cost. It is your call, made on real numbers.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'ADU in Columbia-Tusculum? Near the river, flood elevation shapes the design. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'On the lower ground near the river, how a new dwelling sits relative to flood elevation affects the foundation design, the cost and the insurance. That is established before design rather than at permit review. On the higher ground away from the river the question largely falls away, which is why we assess the specific lot rather than the neighbourhood.',
    ],
    localFaqs: [
      {
        q: 'Does flood elevation affect an ADU?',
        a: 'On the lower ground near the river it affects the foundation design, the cost and the insurance. On higher ground the question largely falls away — so we assess the specific lot.',
      },
      {
        q: 'Does the historic character affect the design?',
        a: 'A new building here will be looked at, and where a review district applies it is formally assessed. Proportion and materials are what make it sit well.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'ADU in Mount Washington? Sewer capacity is worth confirming before design. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'A second dwelling adds a full set of fixtures to whatever the property drains into, and connecting it is not always a simple tee into the existing lateral. Where the lateral is old, undersized or already marginal, upgrading it is part of the project rather than an optional extra. We establish the connection route and the condition of what it joins before quoting.',
    ],
    localFaqs: [
      {
        q: 'Can the ADU connect to our existing sewer lateral?',
        a: 'Usually, though where the lateral is old, undersized or already marginal, upgrading it becomes part of the project. We establish the route and the condition before quoting.',
      },
      {
        q: 'Would it need its own connection?',
        a: 'Sometimes it is required and sometimes it is the better engineering answer. That is confirmed with the authority rather than assumed.',
      },
    ],
  },

  madisonville: {
    intro:
      'ADU in Madisonville? Rental income is a real case, with real caveats. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'In a reinvesting neighbourhood the income case is what people are weighing, and it deserves honest numbers rather than optimistic ones. Against the build cost sit the letting rules in your jurisdiction, whether owner-occupancy is required, what the unit realistically achieves locally, and the fact that appraised value rarely matches spend. We would rather set that out plainly than help build a business case that does not hold.',
    ],
    localFaqs: [
      {
        q: 'Does an ADU pay for itself?',
        a: 'Over a long enough period sometimes, and it deserves honest numbers — letting rules, whether owner-occupancy is required, realistic local rents, and the fact that appraised value rarely matches spend.',
      },
      {
        q: 'Will you help with the numbers?',
        a: 'We will give you an accurate build cost and tell you plainly what we do not know. The rental side is worth checking with someone who works that market locally.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'ADU in Pleasant Ridge? Parking requirements catch people out. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Adding a dwelling frequently adds a parking requirement, and on a street where cars already fill the kerb that can be the constraint that decides the project rather than the building itself. Whether an additional space is required, and whether it has to be off-street, is confirmed with the authority at the outset — because finding somewhere to put it afterwards is not always possible.',
    ],
    localFaqs: [
      {
        q: 'Does an ADU need extra parking?',
        a: 'Frequently, and whether it must be off-street varies. On a street where the kerb is already full that can be the constraint that decides the project rather than the building.',
      },
      {
        q: 'When is that established?',
        a: 'At the outset with the authority, alongside setbacks and size. Finding somewhere to put a required space afterwards is not always possible.',
      },
    ],
  },

  westwood: {
    intro:
      'ADU in Westwood? Across this much housing, every lot is a different answer. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Lot sizes here range from tight urban plots to genuinely generous suburban ones, and that alone decides whether a detached ADU is realistic. There is no neighbourhood-level answer — the feasibility work is measuring your specific lot against the requirements that apply to it. That takes an hour and it is what we do before quoting anything.',
    ],
    localFaqs: [
      {
        q: 'Can you tell us over the phone if it is possible?',
        a: 'Not honestly. Lot sizes here range from tight urban plots to generous suburban ones, and feasibility means measuring your specific lot against the requirements that apply to it.',
      },
      {
        q: 'What does the feasibility visit cover?',
        a: 'The buildable envelope after setbacks, access for equipment, where services would run, and confirming with the authority what is permitted. About an hour.',
      },
    ],
  },

  norwood: {
    intro:
      'ADU in Norwood? Norwood sets its own rules, not Cincinnati’s. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'This matters more for an ADU than for any other project. Norwood is a separate municipality with its own zoning code, and whether an accessory dwelling is permitted, on what lots and under what conditions is Norwood’s decision — not the city’s that surrounds it. Assuming Cincinnati’s rules apply because the postal address suggests it is the single most likely way to waste money here.',
    ],
    localFaqs: [
      {
        q: 'Do Cincinnati’s ADU rules apply in Norwood?',
        a: 'No. Norwood is a separate municipality with its own zoning code, and whether an accessory dwelling is permitted is its decision — not the city’s that surrounds it.',
      },
      {
        q: 'How do we find out what applies?',
        a: 'We confirm it in writing with Norwood before any design work. Assuming the surrounding city’s rules apply is the most likely way to waste money here.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'ADU in Blue Ash? Suburban lots make this genuinely feasible. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Lot sizes here are generous enough that a detached ADU frequently fits comfortably within the setbacks, which removes the constraint that ends most urban projects. What still decides it is the jurisdiction’s position on accessory dwellings, confirmed at the outset. Where it is permitted, these are among the more straightforward sites we work on.',
    ],
    localFaqs: [
      {
        q: 'Are suburban lots big enough?',
        a: 'Frequently comfortably so, which removes the constraint that ends most urban projects. What still decides it is the jurisdiction’s position, confirmed at the outset.',
      },
      {
        q: 'What makes a site straightforward?',
        a: 'Space within the setbacks, level ground, room for equipment to reach the back, and services that can be extended without a long trench. Blue Ash lots frequently give all four.',
      },
    ],
  },

  montgomery: {
    intro:
      'ADU in Montgomery? Its own city, and the historic district adds review. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'Two things shape it. Montgomery is its own municipality with its own zoning position on accessory dwellings, confirmed before anything else. And within the historic district a new structure faces design review as well, which affects materials and form rather than simply permission. Outside the district the second question falls away, so the specific property matters.',
    ],
    localFaqs: [
      {
        q: 'Who decides whether an ADU is permitted here?',
        a: 'The City of Montgomery — it is its own municipality with its own zoning code. We confirm its position in writing before any design work.',
      },
      {
        q: 'Does the historic district add anything?',
        a: 'Within it, a new structure faces design review affecting materials and form as well as permission. Outside it that falls away, so the specific property matters.',
      },
    ],
  },

  madeira: {
    intro:
      'ADU in Madeira? Its own city, with its own position on accessory dwellings. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Madeira is a separate municipality and sets its own zoning, which is the first thing established for any ADU here rather than assumed from a neighbouring authority. The housing itself is favourable — mid-century lots with reasonable depth and level ground, and rear access that is frequently workable. Where it is permitted, the physical side is usually the easier half.',
    ],
    localFaqs: [
      {
        q: 'Does Madeira permit ADUs?',
        a: 'It is a separate municipality setting its own zoning, so that is confirmed in writing with the city rather than assumed from a neighbouring authority.',
      },
      {
        q: 'Are these lots suitable?',
        a: 'Physically, frequently — mid-century plots with reasonable depth, level ground and workable rear access. Where it is permitted, the physical side is usually the easier half.',
      },
    ],
  },

  wyoming: {
    intro:
      'ADU in Wyoming? Its own city, large lots, and a historic character to respect. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'The lots here are among the most generous we work on and frequently already have a surviving carriage house or outbuilding — the best possible starting point. Wyoming is its own municipality setting its own rules, and given the neighbourhood’s character a new structure will be looked at closely whether or not formal review applies. Both get established before design.',
    ],
    localFaqs: [
      {
        q: 'Is a carriage house conversion possible?',
        a: 'Where one survives it is the best starting point there is — existing structure, already sited. It needs a structural assessment, since these were not built to carry a dwelling.',
      },
      {
        q: 'Who governs the zoning here?',
        a: 'The City of Wyoming — its own municipality with its own rules, confirmed in writing before design work begins.',
      },
    ],
  },

  mariemont: {
    intro:
      'ADU in Mariemont? A Landmark district means design review matters here. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'This is the one place where the exterior review that does not touch a bathroom becomes central — a new structure in a Landmark district is entirely visible and faces design scrutiny alongside zoning. Mariemont is also its own village setting its own rules. Both are established before design, and the design itself has to work with the village’s architectural character rather than beside it.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be built in Mariemont?',
        a: 'The village sets its own zoning and a new structure in a Landmark district faces design review as well. Both are established before design work rather than after.',
      },
      {
        q: 'How much does the design have to match?',
        a: 'It has to work with the village’s architectural character rather than sit beside it. That is a real design constraint and it shapes the whole building.',
      },
    ],
  },

  cheviot: {
    intro:
      'ADU in Cheviot? Its own city, and tight lots that need measuring. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'Cheviot is its own municipality with its own zoning, which is confirmed first — not assumed from the surrounding city. Physically the lots are tight, so the buildable envelope after setbacks is frequently the deciding factor. Where a detached structure does not fit, a garage conversion sometimes does, and we look at both rather than only the one people ask about.',
    ],
    localFaqs: [
      {
        q: 'Does Cheviot follow Cincinnati’s rules?',
        a: 'No — it is its own municipality with its own zoning code, confirmed first rather than assumed from the surrounding city.',
      },
      {
        q: 'Are the lots big enough?',
        a: 'Frequently tight, so the buildable envelope after setbacks is the deciding factor. Where detached does not fit, a garage conversion sometimes does.',
      },
    ],
  },

  covedale: {
    intro:
      'ADU in Covedale? An in-law suite is the usual brief here. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Households here stay for decades and the enquiry is nearly always about a parent — someone who needs their own space but nearby. Built for that, the design priorities are single-level living, level thresholds, a bathroom that works for someone unsteady, and enough separation that both households have privacy. That is a different building from one designed to maximise lettable rooms.',
    ],
    localFaqs: [
      {
        q: 'What makes a good in-law suite?',
        a: 'Single-level living, level thresholds, a bathroom that works for someone unsteady, and enough separation that both households have real privacy. Different from a lettable unit.',
      },
      {
        q: 'Can it be let later?',
        a: 'Frequently, and building with that in mind costs little now. Whether letting is permitted is a zoning question worth confirming even if it is not the immediate plan.',
      },
    ],
  },

  covington: {
    intro:
      'ADU in Covington? Kentucky rules, and rowhouse lots that rarely have room. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Two things. This is Kentucky — a different state with different building code administration and its own municipal zoning, none of which follows Ohio practice. And MainStrasse and Licking Riverside lots are narrow historic plots that frequently cannot accommodate a detached structure once setbacks apply. Both are established before design rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Do Ohio rules apply across the river?',
        a: 'No — Kentucky is a different state with different code administration, and Covington sets its own zoning. Neither follows Ohio practice, and we confirm both before design.',
      },
      {
        q: 'Will a rowhouse lot take one?',
        a: 'Frequently not once setbacks apply. Where there is alley access and a rear yard it sometimes works, and converting existing space is often the realistic route.',
      },
    ],
  },

  newport: {
    intro:
      'ADU in Newport? Kentucky rules, and East Row is a historic district. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'Three layers apply here: Kentucky code administration, Newport’s own zoning, and within East Row a historic district review for anything visible. Each is navigable and all three have to be satisfied before construction. On the plus side, some East Row properties retain rear outbuildings that make a far better starting point than new construction on a narrow lot.',
    ],
    localFaqs: [
      {
        q: 'What applies in East Row?',
        a: 'Kentucky code administration, Newport’s zoning, and historic district review for anything visible. All three are navigable and all three come before construction.',
      },
      {
        q: 'Is there an easier route here?',
        a: 'Some East Row properties retain rear outbuildings, and converting one is frequently a better starting point than new construction on a narrow historic lot.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'ADU in Bellevue? Tight river-town lots and Kentucky zoning together. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Bellevue is its own Kentucky city with its own zoning, confirmed first. Physically the plots are narrow and the houses sit close together, which frequently leaves little buildable envelope once setbacks apply. Where a lot backs onto an alley the picture improves considerably — both for siting and for getting equipment in without going past the house.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules here?',
        a: 'The City of Bellevue, under Kentucky code administration. Neither follows Ohio practice, and we confirm both in writing before design work.',
      },
      {
        q: 'Do these lots have room?',
        a: 'Frequently little once setbacks apply. Alley access improves the picture considerably, both for siting and for getting equipment in without going past the house.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'ADU in Fort Thomas? Larger lots make this a realistic prospect. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'The lots here are among the more generous in Northern Kentucky, and above the river the flood questions that shape work in the river towns fall away. Fort Thomas is its own city setting its own zoning, confirmed at the outset. Where a property has mature trees, siting the building and its utility trench around the root systems is part of the feasibility work.',
    ],
    localFaqs: [
      {
        q: 'Are these lots suitable?',
        a: 'Among the more generous in Northern Kentucky, and above the river the flood questions fall away. Zoning is confirmed with the city first, as always.',
      },
      {
        q: 'Do the trees matter?',
        a: 'Mature root systems are damaged by foundations and utility trenches, so siting around them is part of the feasibility rather than an afterthought.',
      },
    ],
  },

  florence: {
    intro:
      'ADU in Florence? Boone County lots and Kentucky administration. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'Florence sets its own zoning under Kentucky code administration, confirmed first. Physically the newer subdivision lots are frequently generous and level with straightforward rear access — the conditions that make an ADU realistic. Where a property sits in an association-governed subdivision, private covenants can restrict what zoning permits, which is a separate check worth making.',
    ],
    localFaqs: [
      {
        q: 'Can a subdivision association restrict an ADU?',
        a: 'Private covenants can restrict what zoning otherwise permits, and they are a separate check from the city’s rules. Worth making before design either way.',
      },
      {
        q: 'Are the lots suitable?',
        a: 'Newer subdivision lots are frequently generous and level with straightforward rear access — the conditions that make an ADU realistic.',
      },
    ],
  },

  erlanger: {
    intro:
      'ADU in Erlanger? Kenton County zoning, confirmed before anything else. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Erlanger is its own city with its own zoning position on accessory dwellings, established before design rather than assumed. The mid-century housing gives lots of reasonable depth with level ground and generally workable rear access, which is favourable. Utility connection routes and the capacity of the existing electrical service are the practical figures we establish alongside.',
    ],
    localFaqs: [
      {
        q: 'What is the first step?',
        a: 'Confirming Erlanger’s zoning position in writing, then measuring the buildable envelope on your lot. Both before any design work is paid for.',
      },
      {
        q: 'What else gets checked early?',
        a: 'Utility connection routes and whether the existing electrical service can carry a second dwelling. Both can meaningfully change the budget.',
      },
    ],
  },

  mason: {
    intro:
      'ADU in Mason? Warren County, its own city, and generous lots. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'Mason is its own city in Warren County, so both the zoning and the county differ from anything in Hamilton County. Physically the subdivision lots are generous and level with good access — genuinely favourable conditions. The check most often missed here is the subdivision association, whose covenants can restrict what city zoning otherwise allows.',
    ],
    localFaqs: [
      {
        q: 'Who governs an ADU in Mason?',
        a: 'The City of Mason, in Warren County — both differ from anything in Hamilton County. We confirm the city’s position in writing before design work.',
      },
      {
        q: 'What is most often missed?',
        a: 'The subdivision association. Private covenants can restrict what city zoning permits, and that is a separate check worth making early.',
      },
    ],
  },

  'west-chester': {
    intro:
      'ADU in West Chester? Butler County township rules, not city ones. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'This is a township in Butler County rather than an incorporated city, which means a different zoning authority and a different process from anything in Hamilton County. The subdivision lots themselves are frequently generous, level and well-accessed. As elsewhere in this housing, association covenants are the second check after the township’s position.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority here?',
        a: 'The township in Butler County rather than an incorporated city, which is a different authority and process from Hamilton County. We confirm its position first.',
      },
      {
        q: 'Do covenants matter too?',
        a: 'They can restrict what zoning permits, so they are the second check after the township. Both are established before design.',
      },
    ],
  },

  pendleton: {
    intro:
      'ADU in Pendleton? Historic district, converted buildings, and rarely a lot. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'An ADU needs a lot to sit on, and this is a district of attached historic buildings and condominium conversions where that rarely exists. Where a property genuinely has a rear yard, historic district review applies to anything visible alongside zoning. We would rather establish both on the phone than after a visit.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU realistic here?',
        a: 'Rarely — this is a district of attached historic buildings and conversions where a suitable lot seldom exists. We would rather establish that on the phone than after a visit.',
      },
      {
        q: 'What if there is a rear yard?',
        a: 'Then zoning and historic district review both apply to anything visible, and it is worth a proper feasibility conversation.',
      },
    ],
  },

  queensgate: {
    intro:
      'ADU in Queensgate? A commercial district is not ADU territory. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'An accessory dwelling is accessory to a residential property, and Queensgate is zoned and built for industry rather than housing. We would say that plainly rather than arrange a visit. Where a genuine residential property exists here — a live-work conversion — the same feasibility work applies, starting with what the zoning actually permits.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be built in Queensgate?',
        a: 'Almost certainly not — it is zoned and built for industry rather than housing, and an ADU is accessory to a residential property. We would say so plainly rather than arrange a visit.',
      },
      {
        q: 'What if we have a live-work property?',
        a: 'Then the same feasibility work applies, starting with what the zoning actually permits on that specific parcel.',
      },
    ],
  },

  cuf: {
    intro:
      'ADU in CUF? Near campus, tight lots and letting rules both apply. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'Two constraints. The lots are small and steeply sited, so the buildable envelope after setbacks is frequently nothing. And where the intent is student letting, owner-occupancy requirements and restrictions on how an ADU may be let become central. Both are confirmed before design, and together they rule out more projects here than anywhere else we work.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU realistic near campus?',
        a: 'Frequently not — small steeply sited lots leave little envelope, and letting restrictions or owner-occupancy requirements often apply to the intended use. Both are confirmed first.',
      },
      {
        q: 'What works instead?',
        a: 'Converting existing space within the house is usually the realistic route here, and it is a different permitting question worth exploring.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'ADU in Camp Washington? Small valley lots need measuring carefully. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The worker cottages here sit on small plots, frequently with industrial parcels adjoining, and the buildable envelope after setbacks is the first measurement. Where a lot does have room, low valley ground raises the same foundation and drainage questions a basement would — which affects the cost of putting a new structure on it.',
    ],
    localFaqs: [
      {
        q: 'Do these lots have room?',
        a: 'The cottage plots are small, so the buildable envelope after setbacks is the first measurement. Some do, and it is worth measuring rather than assuming either way.',
      },
      {
        q: 'Does the valley ground affect the build?',
        a: 'It raises the same foundation and drainage questions a basement would, which affects the cost of putting a new structure on the lot.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'ADU in South Fairmount? Valley drainage affects a new foundation. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'Putting a new dwelling on valley ground with this drainage history means the foundation, the site drainage and how the structure sits relative to water are design questions rather than assumptions. Where a lot has room within its setbacks, those get established before design. On some parcels they change the cost enough to change the answer.',
    ],
    localFaqs: [
      {
        q: 'Does the valley drainage history matter for a new build?',
        a: 'It makes the foundation, site drainage and how the structure sits relative to water design questions rather than assumptions. On some parcels that changes the cost enough to change the answer.',
      },
      {
        q: 'When is that established?',
        a: 'At feasibility, alongside zoning. Both before anyone pays for a design.',
      },
    ],
  },

  'east-end': {
    intro:
      'ADU in the East End? Between hillside and river, most lots say no. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'Squeezed between a hillside and the river, these parcels are narrow and constrained, and flood elevation requirements apply to a new dwelling on the lower ground. Between the two, most of these lots will not support an ADU — and we would rather establish that quickly than run a feasibility exercise that was never going to work.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be built here?',
        a: 'On most of these parcels, no — narrow constrained lots between a hillside and the river, with flood elevation requirements on the lower ground. We establish that quickly.',
      },
      {
        q: 'Is there any version that works?',
        a: 'Where a property genuinely has land above the flood elevation with room within setbacks, it is worth assessing. That is the exception rather than the rule here.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'ADU in North Fairmount? The feasibility visit tells you yes or no quickly. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'An ADU is the one service where we frequently establish in an hour that the answer is no — small hillside lots, limited buildable envelope and difficult rear access are common here. That hour is worth having early, because it costs nothing compared with paying for a design that cannot be sited. We would rather tell you quickly than run a process.',
    ],
    localFaqs: [
      {
        q: 'How quickly can you tell us if it is possible?',
        a: 'Usually within an hour on site. Small hillside lots, limited envelope and difficult rear access are common here, and knowing quickly costs far less than a design that cannot be sited.',
      },
      {
        q: 'Do you charge for that?',
        a: 'The initial feasibility conversation is how we would rather start with any ADU. It saves both of us running a process that was never going to work.',
      },
    ],
  },

  evanston: {
    intro:
      'ADU in Evanston? Near campus, letting rules shape the whole case. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'Proximity to Xavier makes student letting the obvious use, and that is where owner-occupancy requirements and restrictions on how an accessory dwelling may be let matter most. Those rules decide whether the numbers work before the building is even designed. We confirm them in writing rather than assuming the intended use is permitted.',
    ],
    localFaqs: [
      {
        q: 'Can we let an ADU near Xavier?',
        a: 'It depends on owner-occupancy requirements and how the jurisdiction treats letting an accessory dwelling. Those rules decide whether the numbers work before the building is designed.',
      },
      {
        q: 'When do you confirm that?',
        a: 'In writing at the feasibility stage, before anyone pays for a design. Assuming the intended use is permitted is how these projects go wrong.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'ADU in South Cumminsville? Small valley lots beside industry. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Residential parcels here are small and frequently adjoin industrial land, and zoning in mixed-use areas can be more complicated than in a straightforwardly residential neighbourhood. What is permitted on a specific parcel is worth establishing precisely rather than by neighbourhood, because the answer can differ from one side of a street to the other.',
    ],
    localFaqs: [
      {
        q: 'Does mixed-use zoning complicate things?',
        a: 'It can — what is permitted on a specific parcel may differ from one side of a street to the other. We establish it for your parcel rather than for the neighbourhood.',
      },
      {
        q: 'Is that harder to find out?',
        a: 'It takes a proper zoning check rather than a general assumption, which is what we would do anyway. It is worth doing before design.',
      },
    ],
  },

  'english-woods': {
    intro:
      'ADU in English Woods? Redeveloped areas can have different zoning. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Where an area has been redeveloped, the zoning applying to newer parcels can differ from what applies to older surrounding ones, and development agreements sometimes carry their own conditions. That makes a parcel-specific check more important here than a neighbourhood-level assumption. It is straightforward to establish and it belongs before design.',
    ],
    localFaqs: [
      {
        q: 'Does redevelopment affect what is permitted?',
        a: 'It can — newer parcels may carry different zoning or development agreement conditions from older surrounding ones. That makes a parcel-specific check more important than an area assumption.',
      },
      {
        q: 'How do you check?',
        a: 'Directly with the zoning authority for your specific parcel, in writing, before any design work.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'ADU in North Avondale? Large lots and surviving outbuildings both help. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'These are among the most promising ADU lots in the city — genuinely large, frequently with a surviving carriage house or garage, and with room to site a new building properly rather than squeezing it. The constraints that remain are mature trees, whether the property sits within any review area, and getting equipment past a large house to a deep rear garden.',
    ],
    localFaqs: [
      {
        q: 'Are these lots suitable?',
        a: 'Among the most promising in the city — genuinely large, frequently with a surviving outbuilding, and with room to site a building properly rather than squeezing it.',
      },
      {
        q: 'What still needs checking?',
        a: 'Mature trees and their root systems, whether any review area applies, and equipment access past a large house to a deep rear garden.',
      },
    ],
  },

  millvale: {
    intro:
      'ADU in Millvale? Compact lots make this unlikely, and we will say so. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'Small plots in a compact community frequently leave no buildable envelope once setbacks are applied, and that is the honest starting position rather than an outcome discovered late. Where a specific lot does have room, the valley ground raises foundation and drainage questions that affect the cost. We establish both quickly rather than running a long process.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU likely to work here?',
        a: 'On most of these plots, no — small lots frequently leave no buildable envelope once setbacks apply. That is the honest starting position rather than a late discovery.',
      },
      {
        q: 'What if ours is bigger?',
        a: 'Then it is worth measuring properly. Valley ground also raises foundation and drainage questions that affect the cost, and we establish both quickly.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'ADU in Paddock Hills? A small pocket with decent lots. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'This is a genuinely residential pocket with lots that frequently have room, which puts it ahead of much of the surrounding area for an ADU. What varies is access — some of these properties have easy rear access and some do not, and that difference affects foundation and trenching costs materially. It is one of the first things measured.',
    ],
    localFaqs: [
      {
        q: 'Do these lots have room?',
        a: 'Frequently, which puts this pocket ahead of much of the surrounding area. The buildable envelope after setbacks is still measured on the specific property.',
      },
      {
        q: 'Why does rear access matter so much?',
        a: 'It decides whether equipment reaches the site or the foundation and trenching are done by hand, which is a material cost difference.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'ADU in Spring Grove Village? Mixed residential and industrial zoning needs checking. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'With residential and industrial parcels adjoining, what is permitted varies more here than in a uniformly residential neighbourhood — and a parcel-specific zoning check is genuinely necessary rather than a formality. Where a lot is suitable, valley ground and mature trees are the practical constraints on siting a new structure.',
    ],
    localFaqs: [
      {
        q: 'Does the mixed zoning complicate an ADU?',
        a: 'It means a parcel-specific check is genuinely necessary rather than a formality — what is permitted varies more here than in a uniformly residential neighbourhood.',
      },
      {
        q: 'What are the physical constraints?',
        a: 'Valley ground raising foundation and drainage questions, and mature trees whose root systems affect where a building and its trench can go.',
      },
    ],
  },

  linwood: {
    intro:
      'ADU in Linwood? A small neighbourhood on low ground near the river. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'On the lower ground here, flood elevation requirements apply to a new dwelling and they affect the foundation design, the cost and the insurance. Combined with modest lot sizes, that rules out a fair number of parcels. Where a property sits higher with room inside its setbacks, the same feasibility work applies as anywhere.',
    ],
    localFaqs: [
      {
        q: 'Does the river bottom ground rule it out?',
        a: 'On the lower parcels, flood elevation requirements affect the foundation design, cost and insurance enough to rule out a fair number. Higher ground with room inside setbacks is different.',
      },
      {
        q: 'How do we know which we have?',
        a: 'The elevation and the applicable requirements are established at feasibility, before design. It is a quick check with a decisive answer.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'ADU in Bond Hill? Established lots with reasonable depth. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'The mid-century portion of this housing gives lots with reasonable depth and level ground — the conditions an ADU needs. What decides individual projects is the buildable envelope after setbacks, whether the existing electrical service can carry a second dwelling, and how services would reach the rear. All three are established at feasibility.',
    ],
    localFaqs: [
      {
        q: 'Are these lots workable?',
        a: 'The mid-century portion frequently gives reasonable depth and level ground, which are the conditions an ADU needs. The envelope after setbacks is measured on the specific lot.',
      },
      {
        q: 'What else is checked early?',
        a: 'Whether the existing electrical service can carry a second dwelling and how water, sewer and gas would reach the rear. Both can change the budget meaningfully.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'ADU in Villages of Roll Hill? Multi-unit property is a different question. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'An accessory dwelling is accessory to a single-family property, and a community of multi-unit apartment buildings is a different planning proposition entirely — adding units there is a development question rather than an ADU one. Where a genuinely single-family property exists here, the standard feasibility work applies, starting with what the zoning permits on that parcel.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be added to an apartment property?',
        a: 'That is a development question rather than an ADU one — an accessory dwelling is accessory to a single-family property. It is a different planning proposition entirely.',
      },
      {
        q: 'What if we own a single-family house here?',
        a: 'Then the standard feasibility work applies, starting with what the zoning permits on that specific parcel.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'ADU in East Westwood? On a slope, siting decides the cost. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'On sloping lots the foundation is where the money goes, and the flattest part of the garden is frequently not where people picture the building. Siting it where the grade works rather than where the view is best can save a substantial share of the budget. We put that trade-off in front of you at feasibility rather than after a design is drawn.',
    ],
    localFaqs: [
      {
        q: 'Where should it go on a sloping lot?',
        a: 'Usually where the grade is flattest rather than where the view is best — the foundation is where the money goes, and siting can save a substantial share of the budget.',
      },
      {
        q: 'Can we choose the view instead?',
        a: 'Of course, on real numbers. We put the trade-off in front of you at feasibility rather than after a design is drawn around one option.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'ADU in Western Hills? A garage conversion is worth pricing alongside. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Detached garages are common in this housing, and converting one avoids the biggest costs of new construction — the foundation and the siting approval, both of which already exist. It still needs insulation, proper services, egress and frequently structural work. We price both routes where a garage exists, because the answer is not always the one people expect.',
    ],
    localFaqs: [
      {
        q: 'Should we convert the garage or build new?',
        a: 'Where a detached garage exists we price both. Converting avoids the foundation and the siting, but still needs insulation, services, egress and often structural work.',
      },
      {
        q: 'Do we lose the garage?',
        a: 'Yes, and where the jurisdiction requires off-street parking that can become a constraint. It is part of the same feasibility check.',
      },
    ],
  },

  california: {
    intro:
      'ADU in California? Flood elevation governs anything new here. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'A new dwelling on low riverside ground is governed by how it sits relative to flood elevation, and that drives the foundation design, the construction cost and what it costs to insure afterwards. On a number of these parcels it makes the project disproportionate. That is established at feasibility and it is frequently the answer rather than a detail.',
    ],
    localFaqs: [
      {
        q: 'Can we build on low riverside ground?',
        a: 'Flood elevation requirements govern it and drive the foundation design, the cost and the insurance afterwards. On a number of these parcels it makes the project disproportionate.',
      },
      {
        q: 'Is that the usual answer here?',
        a: 'Frequently, and we establish it at feasibility rather than after a design. It is better to know quickly.',
      },
    ],
  },

  carthage: {
    intro:
      'ADU in Carthage? Older village lots vary more than the street suggests. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Lot sizes in former village neighbourhoods are inconsistent — some plots are genuinely deep and some are not, and neighbouring properties can differ substantially. That makes a measured feasibility visit worth more here than an assumption based on the street. Where a lot has depth, the remaining questions are access and how services reach the rear.',
    ],
    localFaqs: [
      {
        q: 'Are the lots here big enough?',
        a: 'They vary considerably — neighbouring plots can differ substantially in a former village neighbourhood. That makes a measured visit worth more than an assumption based on the street.',
      },
      {
        q: 'What decides it once there is room?',
        a: 'Access for equipment and how water, sewer, gas and electric reach the rear. Both are real cost variables established at feasibility.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'ADU in Winton Hills? Zoning first, and it varies by parcel here. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'With residential, multi-unit and industrial land in close proximity, what is permitted differs meaningfully from parcel to parcel. A general answer for the neighbourhood would be wrong for a lot of properties in it, so the feasibility check is specific to the address. That is straightforward to obtain and it is the first thing we do.',
    ],
    localFaqs: [
      {
        q: 'Can you tell us what is permitted in this neighbourhood?',
        a: 'Not accurately — residential, multi-unit and industrial land sit close together and what is permitted differs from parcel to parcel. The check is specific to your address.',
      },
      {
        q: 'How long does that take?',
        a: 'It is a straightforward enquiry to the zoning authority and it is the first thing we do, before any design work.',
      },
    ],
  },

  roselawn: {
    intro:
      'ADU in Roselawn? Mid-century lots are frequently workable. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'The single-family portion of this housing gives level lots with reasonable depth and generally straightforward rear access — favourable conditions once the zoning position is confirmed. The practical figures that follow are the existing electrical service capacity and the route for water, sewer and gas to a new structure. Both are established before quoting.',
    ],
    localFaqs: [
      {
        q: 'Are these lots suitable?',
        a: 'The single-family portion frequently gives level lots with reasonable depth and straightforward rear access — favourable once the zoning position is confirmed.',
      },
      {
        q: 'What are the main cost variables?',
        a: 'The existing electrical service capacity and the route for water, sewer and gas to the new structure. Both established before quoting rather than after.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'ADU in Mount Airy? Wooded hillside lots need proper siting work. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'Lots here are frequently generous but sloping and wooded, which means the siting exercise matters more than usual — finding the flattest workable area, keeping clear of mature root systems, and getting equipment to it. Done properly that produces a good site. Done casually it produces a foundation quote that surprises everybody.',
    ],
    localFaqs: [
      {
        q: 'Are wooded sloping lots workable?',
        a: 'Frequently yes, with proper siting — finding the flattest workable area, keeping clear of mature root systems and getting equipment to it. That work is where the cost is decided.',
      },
      {
        q: 'Do trees have to come down?',
        a: 'Sometimes, and some may be protected. Siting around them where possible is part of the feasibility rather than a decision made during construction.',
      },
    ],
  },

  hartwell: {
    intro:
      'ADU in Hartwell? Streetcar-suburb lots frequently have depth. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Streetcar suburbs were laid out with deep lots, and that depth is exactly what an ADU needs — frequently with a surviving rear structure that gives a head start. The design consideration is that a new building here is visible in a neighbourhood with real architectural character, so proportion and materials matter more than they would on a modern street.',
    ],
    localFaqs: [
      {
        q: 'Do these lots have the depth?',
        a: 'Frequently — streetcar suburbs were laid out with deep plots, and some retain a rear structure that gives a head start. The envelope after setbacks is still measured.',
      },
      {
        q: 'Does the design matter here?',
        a: 'A new building is visible in a neighbourhood with real architectural character, so proportion and materials matter more than on a modern street.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'ADU in Kennedy Heights? Larger period lots, and a design that has to sit well. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'The resort-era origins left larger lots than most city neighbourhoods, which makes siting genuinely possible. What follows is a design question rather than a feasibility one — a new structure beside a substantial period house will be seen, and getting its proportion and materials right is what separates a considered building from an outbuilding with plumbing.',
    ],
    localFaqs: [
      {
        q: 'Are these lots big enough?',
        a: 'The resort-era origins left larger plots than most city neighbourhoods, which makes siting genuinely possible. The envelope after setbacks is measured on the specific property.',
      },
      {
        q: 'How much does the design matter?',
        a: 'Beside a substantial period house, considerably. Proportion and materials are what separate a considered building from an outbuilding with plumbing.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'ADU in St. Bernard? The city sets its own rules, not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'This is the point that matters most here. St. Bernard is a separate municipality with its own zoning code, and whether an accessory dwelling is permitted is its decision entirely. Assuming the surrounding city’s rules apply is the most likely way to waste money. Physically the grid is dense, so the buildable envelope after setbacks is the second question.',
    ],
    localFaqs: [
      {
        q: 'Do Cincinnati’s rules apply here?',
        a: 'No. St. Bernard is a separate municipality with its own zoning code, and whether an accessory dwelling is permitted is its decision entirely.',
      },
      {
        q: 'Are the lots big enough?',
        a: 'The grid is dense, so the buildable envelope after setbacks is the second question — and frequently the deciding one.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'ADU in Elmwood Place? Its own village, and very compact lots. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Elmwood Place is its own village setting its own zoning, confirmed first rather than assumed. The plots are among the most compact we work with, so the buildable envelope after setbacks is frequently the constraint that ends the conversation. Where a garage exists, converting it is usually the more realistic route than building new.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules here?',
        a: 'The village of Elmwood Place — its own municipality with its own zoning, confirmed first rather than assumed from a neighbouring authority.',
      },
      {
        q: 'Is there room on these lots?',
        a: 'Frequently not for a new detached building once setbacks apply. Where a garage exists, converting it is usually the more realistic route.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'ADU in Delhi Hills? Township zoning, and a walkout basement alternative. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'This is township jurisdiction rather than a city, which is a different authority and process. And on these hillside lots many houses have a walkout lower level — which frequently makes a self-contained suite within the existing house a cheaper and simpler route than a detached building. Both options get priced rather than assuming the detached one.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority here?',
        a: 'Delhi Township rather than a city, which is a different authority and process. We confirm its position before any design work.',
      },
      {
        q: 'Is a walkout basement suite an alternative?',
        a: 'On these hillside lots, frequently — an existing entrance and natural light make a self-contained suite cheaper and simpler than a detached building. We price both.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'ADU in Golf Manor? The village decides, not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Golf Manor is an incorporated village entirely surrounded by the city, and it sets its own zoning — whether an accessory dwelling is permitted is the village’s decision. That confirmation comes first. Physically the grid is compact, so the buildable envelope after setbacks is likely to be the practical constraint even where the zoning allows it.',
    ],
    localFaqs: [
      {
        q: 'Who decides whether an ADU is permitted?',
        a: 'The village of Golf Manor, not the City of Cincinnati that surrounds it. That confirmation comes before anything else.',
      },
      {
        q: 'Is there room on a Golf Manor lot?',
        a: 'The grid is compact, so the envelope after setbacks is likely the practical constraint even where zoning allows it. We measure rather than assume.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'ADU in Fairfax? Its own village, with its own zoning position. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'Fairfax is an incorporated village setting its own rules, so its position on accessory dwellings is confirmed rather than assumed from Mariemont next door or from the county. The housing itself is mid-century with lots of reasonable depth, which is favourable — but zoning comes first, because no amount of lot depth matters if the use is not permitted.',
    ],
    localFaqs: [
      {
        q: 'Does Fairfax follow Mariemont’s rules?',
        a: 'No — it is its own incorporated village with its own zoning, confirmed directly rather than assumed from a neighbour or from the county.',
      },
      {
        q: 'Are the lots suitable?',
        a: 'Mid-century plots with reasonable depth are favourable, but zoning comes first — lot depth is irrelevant if the use is not permitted.',
      },
    ],
  },

  mack: {
    intro:
      'ADU in Mack? Green Township jurisdiction and decent suburban lots. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'This is township jurisdiction rather than a city, which is a different authority and process from anything inside Cincinnati. The lots are suburban with reasonable depth and generally level ground, which is favourable for siting. Where a household is planning for a parent, that use frequently sits more comfortably with zoning than a lettable unit does — worth raising when the position is confirmed.',
    ],
    localFaqs: [
      {
        q: 'Who has authority in Green Township?',
        a: 'The township rather than a city, which is a different authority and process from anything inside Cincinnati. We confirm its position before design.',
      },
      {
        q: 'Does the intended use matter?',
        a: 'It can — family occupancy frequently sits more comfortably with zoning than a lettable unit. Worth raising when the position is confirmed.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'ADU in Monfort Heights? Suburban lots make the physical side straightforward. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Level suburban lots with reasonable depth and rear access are the conditions an ADU needs, and this housing generally has them — which makes the physical feasibility the easy half here. The deciding factor is Green Township’s zoning position, confirmed at the outset. Where permitted, these sites are among the more straightforward we build on.',
    ],
    localFaqs: [
      {
        q: 'Is the physical side straightforward here?',
        a: 'Generally — level lots with reasonable depth and rear access are what an ADU needs, and this housing has them. The deciding factor is the township’s zoning position.',
      },
      {
        q: 'What makes a site easy to build on?',
        a: 'Space within setbacks, level ground, equipment access to the rear, and services that extend without a long trench. This housing frequently gives all four.',
      },
    ],
  },

  bridgetown: {
    intro:
      'ADU in Bridgetown? Township rules first, then the lot. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Green Township sets the zoning here, and its position on accessory dwellings is the first thing established in writing. After that the questions are physical: the envelope after setbacks, whether equipment can reach the rear, and how services would run. The suburban lots in this housing frequently answer all three favourably.',
    ],
    localFaqs: [
      {
        q: 'What order do things get checked in?',
        a: 'Township zoning position first, in writing. Then the envelope after setbacks, equipment access to the rear, and how services would run. Design comes after all four.',
      },
      {
        q: 'Why not design first?',
        a: 'Because any of those four can reshape or end the project. Designing first is the most expensive way to find that out.',
      },
    ],
  },

  finneytown: {
    intro:
      'ADU in Finneytown? Springfield Township, and a realistic timeline. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth being straight about the timeline: an ADU is not a remodel. Feasibility and zoning confirmation, then design, then permitting, then construction — the whole thing runs in months rather than weeks, and permitting is frequently the longest single stage. We give that programme honestly at the outset rather than quoting only the build.',
    ],
    localFaqs: [
      {
        q: 'How long does an ADU take?',
        a: 'Months rather than weeks — feasibility and zoning confirmation, design, permitting, then construction. Permitting is frequently the longest single stage.',
      },
      {
        q: 'Can any of it run in parallel?',
        a: 'Some, and we sequence it to overlap where possible. What cannot be compressed is a permitting authority’s own schedule.',
      },
    ],
  },

  amberley: {
    intro:
      'ADU in Amberley Village? Large lots and its own village government. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'The lots here are among the largest we work on, which removes the constraint that ends most urban ADU projects. Amberley is its own village setting its own zoning, confirmed at the outset. What remains is a genuine siting exercise — mature woodland, long service runs to a distant building position, and getting equipment across a large property.',
    ],
    localFaqs: [
      {
        q: 'Are these lots large enough?',
        a: 'Among the largest we work on, which removes the constraint that ends most urban projects. The village’s own zoning position is confirmed first regardless.',
      },
      {
        q: 'What are the practical costs on a big lot?',
        a: 'Long service runs to a distant building position, equipment access across the property, and siting around mature woodland. All established at feasibility.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'ADU in Arlington Heights? Its own village, and compact valley lots. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Arlington Heights is its own village with its own zoning, confirmed rather than assumed. The plots are compact, so the envelope after setbacks is likely the practical constraint. Where a lot does have room, valley ground raises the same foundation questions a basement would — worth establishing before the cost is assumed.',
    ],
    localFaqs: [
      {
        q: 'Who sets the zoning here?',
        a: 'The village itself, confirmed directly rather than assumed from a neighbouring authority. That is the first step for any ADU.',
      },
      {
        q: 'Do the lots have room?',
        a: 'They are compact, so the envelope after setbacks is likely the constraint. Where there is room, valley ground raises foundation questions worth establishing early.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'ADU in North College Hill? Its own city, and closely built lots. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'North College Hill is a separate city setting its own zoning, confirmed first rather than assumed from the adjoining Cincinnati neighbourhood of a similar name. The grid is dense, so the envelope after setbacks decides most projects. Where a detached garage exists, converting it is frequently the more realistic route on lots this size.',
    ],
    localFaqs: [
      {
        q: 'Is this the same as College Hill?',
        a: 'No — North College Hill is a separate city with its own zoning, while College Hill is a Cincinnati neighbourhood. The rules are not the same and we confirm the right authority.',
      },
      {
        q: 'Do these lots have room?',
        a: 'The grid is dense, so the envelope after setbacks decides most projects. Where a detached garage exists, converting it is frequently more realistic.',
      },
    ],
  },

  newtown: {
    intro:
      'ADU in Newtown? Its own village near the Little Miami. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'Newtown is its own village with its own zoning, confirmed at the outset. The physical constraint is the river-bottom ground — flood elevation requirements affect a new dwelling’s foundation design and cost, and on some parcels change the answer. Where a property sits on higher ground with room inside setbacks, the picture is considerably better.',
    ],
    localFaqs: [
      {
        q: 'Who governs zoning in Newtown?',
        a: 'The village itself, confirmed directly. That comes before any assessment of the lot.',
      },
      {
        q: 'Does the river-bottom ground matter?',
        a: 'Flood elevation requirements affect a new dwelling’s foundation design and cost, and on some parcels change the answer. Higher ground with room inside setbacks is a different picture.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'ADU in Turpin Hills? Anderson Township, and generous suburban lots. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Anderson Township is the zoning authority here rather than a city, which is a different process. The lots are suburban and frequently generous with level ground and workable rear access — favourable conditions once the township’s position is confirmed. Service runs to a rear building position are the main practical cost variable on larger plots.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority here?',
        a: 'Anderson Township rather than a city, which is a different authority and process. We confirm its position in writing before design.',
      },
      {
        q: 'What drives the cost on a larger lot?',
        a: 'The service runs to a rear building position and equipment access across the property. Both are established at feasibility rather than estimated.',
      },
    ],
  },

  silverton: {
    intro:
      'ADU in Silverton? Its own city, and established lots. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'Silverton is a separate city setting its own zoning, confirmed rather than assumed from a neighbouring authority. The housing gives established lots of varying depth, so the envelope after setbacks is measured on the specific property rather than generalised. Where there is room, the physical conditions are usually workable.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules in Silverton?',
        a: 'The City of Silverton — its own municipality with its own zoning, confirmed directly rather than assumed from a neighbouring authority.',
      },
      {
        q: 'Do the lots vary?',
        a: 'Considerably, so the envelope after setbacks is measured on the specific property rather than generalised from the street.',
      },
    ],
  },

  lockland: {
    intro:
      'ADU in Lockland? Its own village, and very tight worker-housing lots. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'Lockland is its own village with its own zoning, confirmed first. The worker-housing plots are among the tightest in the region, and the envelope after setbacks frequently leaves nothing for a detached structure. Where a garage or rear outbuilding exists, converting it is realistically the only route — and that is worth assessing rather than dismissing.',
    ],
    localFaqs: [
      {
        q: 'Is there room on these lots?',
        a: 'The worker-housing plots are among the tightest in the region, and the envelope after setbacks frequently leaves nothing for a detached structure.',
      },
      {
        q: 'Is there any route that works?',
        a: 'Converting an existing garage or rear outbuilding, where one exists. That is realistically the option here and it is worth assessing rather than dismissing.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'ADU in Groesbeck? Colerain Township sets the rules here. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Colerain Township is the zoning authority, which is a different process from a city and worth confirming directly. The mid-century housing gives level lots with reasonable depth — the conditions an ADU wants. Where a household is building for a parent rather than to let, that distinction is worth raising when the position is confirmed, because permitted uses sometimes differ.',
    ],
    localFaqs: [
      {
        q: 'Who is the zoning authority?',
        a: 'Colerain Township rather than a city, which is a different process. We confirm its position directly before any design work.',
      },
      {
        q: 'Does it matter who will live in it?',
        a: 'Sometimes — permitted uses can differ between family occupancy and letting. Worth raising when the position is confirmed rather than after.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'ADU in Mount Healthy? Its own city, and older lots that vary. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'Mount Healthy is a separate city with its own zoning, confirmed at the outset. Lot sizes vary considerably between the older town centre and the mid-century streets around it, so the buildable envelope is measured on the specific property. Where a lot lacks room, a conversion of existing space is worth pricing as the alternative.',
    ],
    localFaqs: [
      {
        q: 'Who sets the zoning here?',
        a: 'The City of Mount Healthy — its own municipality with its own code, confirmed directly rather than assumed from the county.',
      },
      {
        q: 'Do the lots vary much?',
        a: 'Considerably between the older town centre and the mid-century streets around it, so the envelope is measured on the specific property rather than generalised.',
      },
    ],
  },

  reading: {
    intro:
      'ADU in Reading? Its own city in the Mill Creek valley. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'Reading sets its own zoning, confirmed before design. The valley position raises the same foundation and drainage questions that shape basement work — a new structure needs its site drainage thought through rather than assumed. Lot sizes vary between the older and mid-century portions, so the envelope is measured property by property.',
    ],
    localFaqs: [
      {
        q: 'Who governs an ADU in Reading?',
        a: 'The City of Reading — its own municipality with its own zoning, confirmed in writing before design work.',
      },
      {
        q: 'Does the valley position matter?',
        a: 'It raises foundation and site drainage questions for a new structure that are worth thinking through rather than assuming.',
      },
    ],
  },

  dent: {
    intro:
      'ADU in Dent? Green Township, and suburban lots that generally work. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Green Township is the zoning authority, confirmed first. The lots here are suburban with reasonable depth, level ground and rear access that generally works — the physical conditions an ADU needs. Where that combination exists, the remaining variables are service runs and whether the existing electrical service can carry a second dwelling.',
    ],
    localFaqs: [
      {
        q: 'Are these lots workable?',
        a: 'Generally — suburban depth, level ground and rear access that works. Those are the physical conditions an ADU needs, once the township position is confirmed.',
      },
      {
        q: 'What are the remaining cost variables?',
        a: 'Service runs to the new structure and whether the existing electrical service can carry a second dwelling. Both established at feasibility.',
      },
    ],
  },

  'deer-park': {
    intro:
      'ADU in Deer Park? Its own city, and an in-law suite that has to be reachable. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Deer Park is its own city setting its own zoning, confirmed first. Where the purpose is a parent, the design questions matter as much as the permission — level access from the parking area to the door, no steps at the threshold, single-level living inside, and a path between the two dwellings that is safe in the dark and in winter.',
    ],
    localFaqs: [
      {
        q: 'What makes an ADU work for an older parent?',
        a: 'Level access from parking to the door, no threshold step, single-level living inside, and a path between the dwellings that is safe in the dark and in winter.',
      },
      {
        q: 'Who sets the zoning here?',
        a: 'The City of Deer Park — its own municipality, confirmed directly rather than assumed from a neighbour.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'ADU in Terrace Park? Its own village, larger lots and river proximity. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Terrace Park is its own village setting its own zoning, and given the character of the village a new structure will be looked at closely. The lots are generous, which helps considerably. On parcels nearer the Little Miami, flood elevation requirements affect a new dwelling’s foundation and are established at feasibility rather than at permit review.',
    ],
    localFaqs: [
      {
        q: 'Who decides here?',
        a: 'The village of Terrace Park — its own municipality with its own zoning, confirmed in writing before design.',
      },
      {
        q: 'Does proximity to the river matter?',
        a: 'On parcels nearer the Little Miami, flood elevation requirements affect the foundation design and cost. That is established at feasibility rather than at permit review.',
      },
    ],
  },

  'dry-run': {
    intro:
      'ADU in Dry Run? Anderson Township, and lots with room. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Anderson Township is the zoning authority, confirmed first. The suburban lots here frequently have genuine room within the setbacks, level ground and accessible rear gardens — which makes the physical feasibility the easier half. Where a subdivision association exists, its covenants are the second check after the township.',
    ],
    localFaqs: [
      {
        q: 'Are these lots suitable?',
        a: 'Frequently — genuine room within setbacks, level ground and accessible rear gardens. That makes physical feasibility the easier half once the township position is confirmed.',
      },
      {
        q: 'Do covenants apply?',
        a: 'Where a subdivision association exists, its covenants can restrict what zoning permits. That is the second check after the township.',
      },
    ],
  },

  'white-oak': {
    intro:
      'ADU in White Oak? Green Township, and the utility connection question. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Green Township sets the zoning, confirmed at the outset. On these lots the physical siting is usually straightforward, so the figures that decide the budget are the service connections — how far water, sewer, gas and electric have to run to the new building, and whether the existing electrical service needs upgrading to carry it. Both established before quoting.',
    ],
    localFaqs: [
      {
        q: 'What drives the cost once siting is easy?',
        a: 'The service connections — how far water, sewer, gas and electric run to the new building, and whether the existing electrical service needs upgrading to carry it.',
      },
      {
        q: 'Can services just extend from the house?',
        a: 'Sometimes, and sometimes separate connections are required or sensible. That is confirmed with the authority and the utilities rather than assumed.',
      },
    ],
  },

  forestville: {
    intro:
      'ADU in Forestville? Anderson Township, and a realistic sequence. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'The order matters more on an ADU than on any other project we do. Zoning confirmation, then a measured feasibility of the lot, then design, then permitting, then build. People frequently want to start at design because it is the enjoyable part, and that is precisely the sequence that wastes money. We hold to it even when it is not what someone wants to hear.',
    ],
    localFaqs: [
      {
        q: 'Why not start with the design?',
        a: 'Because zoning and the measured lot feasibility can reshape or end the project entirely. Starting at design is the sequence that wastes money, and we hold to the right order.',
      },
      {
        q: 'How long before we see a design?',
        a: 'After zoning is confirmed and the lot is measured — usually a short step, and it means the design is drawn to what is actually achievable.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'ADU in Cherry Grove? Anderson Township, and electrical capacity to check. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Anderson Township governs the zoning, confirmed first. A second dwelling is a substantial electrical load, and whether the existing service can carry it or a separate service is needed is a real figure with a utility lead time attached. On mid-century housing that check matters more than people expect, and it belongs at feasibility rather than rough-in.',
    ],
    localFaqs: [
      {
        q: 'Will the existing electrical service carry an ADU?',
        a: 'On mid-century housing, frequently not without an upgrade. That is a real figure with a utility lead time attached, and it belongs at feasibility rather than rough-in.',
      },
      {
        q: 'What is the alternative to upgrading?',
        a: 'A separate service to the ADU, which has its own cost and lead time. We establish which route applies before quoting.',
      },
    ],
  },

  kenwood: {
    intro:
      'ADU in Kenwood? Unincorporated area, so the county governs. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Being unincorporated matters: zoning here runs through the county rather than a city or a village, which is a different authority and process from most of the surrounding area. The lots are frequently generous with room to site a building properly. Confirming the correct authority is the first step, because assuming a neighbouring city’s rules is a common and expensive error.',
    ],
    localFaqs: [
      {
        q: 'Who governs zoning in an unincorporated area?',
        a: 'The county rather than a city or village, which is a different authority and process from most of the surrounding area. Confirming the correct authority is the first step.',
      },
      {
        q: 'Are the lots suitable?',
        a: 'Frequently generous with room to site a building properly. The envelope after setbacks is still measured on the specific property.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'ADU in Lincoln Heights? The village governs, and we quote to the lot. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Lincoln Heights has been self-governing since its founding and sets its own zoning, confirmed directly rather than assumed from the county. The plots are modest, so the buildable envelope after setbacks is the practical question. Where there is room, valley ground raises foundation considerations that affect what a new structure costs.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority here?',
        a: 'The village itself — it has been self-governing since its founding, and its position is confirmed directly rather than assumed from the county.',
      },
      {
        q: 'Is there room on these lots?',
        a: 'They are modest, so the envelope after setbacks is the practical question. Where there is room, valley ground raises foundation considerations affecting the cost.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'ADU in Dillonvale? Sycamore Township is the authority here. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Sycamore Township governs the zoning rather than a city, which is a different process worth confirming directly. The mid-century lots here are level with reasonable depth — favourable conditions. What varies property to property is rear access and how far services would run, and both are measured rather than assumed at feasibility.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority?',
        a: 'Sycamore Township rather than a city, which is a different process. We confirm its position directly before any design work.',
      },
      {
        q: 'What varies between properties?',
        a: 'Rear access for equipment and how far services would run. Both measured rather than assumed, because both change the budget materially.',
      },
    ],
  },

  woodlawn: {
    intro:
      'ADU in Woodlawn? Its own village, with mixed land use nearby. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'Woodlawn is its own village setting its own zoning, and with industrial corridors close to residential streets what is permitted can differ by parcel. That makes an address-specific check genuinely necessary rather than a formality. Where a residential lot has room, the valley position raises foundation and drainage questions for a new structure.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules in Woodlawn?',
        a: 'The village itself, and with industrial corridors close to residential streets what is permitted can differ by parcel. An address-specific check is genuinely necessary.',
      },
      {
        q: 'Does the valley position affect a new build?',
        a: 'It raises foundation and site drainage questions worth establishing before the cost is assumed.',
      },
    ],
  },

  addyston: {
    intro:
      'ADU in Addyston? Its own village on river ground. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'Addyston is its own village with its own zoning, confirmed first. The mill-town plots are closely spaced and modest, and river-ground flood elevation requirements apply to a new dwelling. Between the two, a fair number of these parcels will not support one — which we establish quickly rather than through a long process.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU realistic here?',
        a: 'On a fair number of these parcels, no — closely spaced mill-town plots and river-ground flood elevation requirements together. We establish that quickly rather than through a long process.',
      },
      {
        q: 'Who sets the zoning?',
        a: 'The village of Addyston, confirmed directly rather than assumed from the county or a neighbour.',
      },
    ],
  },

  greenhills: {
    intro:
      'ADU in Greenhills? A Landmark district and a village government. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Two layers apply. Greenhills is its own village setting its own zoning, and the Landmark district means a new structure faces design review for anything visible. The town was also built to a deliberate plan with consistent lot layouts, so what is possible tends to be consistent across similar properties — which makes the feasibility answer more predictable than in most places.',
    ],
    localFaqs: [
      {
        q: 'Does the Landmark designation affect an ADU?',
        a: 'A new structure is visible, so design review applies alongside the village’s zoning. Both come before construction and both shape what is buildable.',
      },
      {
        q: 'Are the lots consistent here?',
        a: 'The town was built to a deliberate plan, so what is possible tends to be consistent across similar properties — which makes the answer more predictable than in most places.',
      },
    ],
  },

  northbrook: {
    intro:
      'ADU in Northbrook? Colerain Township, and suburban lots that help. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Colerain Township governs the zoning, confirmed at the outset. The mid-century suburban lots here generally have the depth, the level ground and the rear access an ADU needs — which puts the physical feasibility ahead of most of the city. Service runs and existing electrical capacity are the practical figures that follow.',
    ],
    localFaqs: [
      {
        q: 'Are these lots favourable?',
        a: 'Generally — depth, level ground and rear access are the conditions an ADU needs and this housing has them. That puts physical feasibility ahead of most city neighbourhoods.',
      },
      {
        q: 'What follows once the lot works?',
        a: 'Service runs to the new structure and whether the existing electrical service can carry it. Both are established before quoting.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'ADU in Indian Hill? Large estates, its own village, and septic to consider. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Lot size is not the constraint here — the village’s own zoning is the first question, and it sets its own rules. The practical considerations on multi-acre wooded properties are long service runs to a distant building position, equipment access across the property, and where a property is on well and septic, whether the system can carry a second dwelling at all.',
    ],
    localFaqs: [
      {
        q: 'Does septic capacity limit an ADU?',
        a: 'It can be the deciding factor — a second dwelling adds substantial load, and whether the system can carry it or needs expanding is established at feasibility rather than at permit review.',
      },
      {
        q: 'What else costs money on a large lot?',
        a: 'Long service runs to a distant building position and equipment access across the property. Both real figures rather than contingencies.',
      },
    ],
  },

  evendale: {
    intro:
      'ADU in Evendale? Its own village with a large industrial base. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'Evendale is its own village setting its own zoning, and with a substantial industrial base alongside residential streets what is permitted varies by parcel. The residential portion has lots with reasonable depth. As always, the parcel-specific confirmation comes before anything is designed rather than a neighbourhood-level assumption.',
    ],
    localFaqs: [
      {
        q: 'Who sets the zoning here?',
        a: 'The village of Evendale, and with a substantial industrial base alongside residential streets what is permitted varies by parcel. The check is address-specific.',
      },
      {
        q: 'Do you work on the residential side?',
        a: 'Yes — residential is all we do. The village is known for its industrial base, but the neighbourhoods here are ordinary housing.',
      },
    ],
  },

  glendale: {
    intro:
      'ADU in Glendale? A Landmark village where design review matters. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Glendale sets its own zoning and the Landmark designation means a new structure faces design review for anything visible. The lots are generous and some properties retain carriage houses, which is the best possible starting point. Where new construction is proposed, its proportion and materials will be assessed rather than simply permitted.',
    ],
    localFaqs: [
      {
        q: 'Does a new building face design review?',
        a: 'In a Landmark village, anything visible does — alongside the village’s own zoning. Proportion and materials are assessed rather than simply permitted.',
      },
      {
        q: 'Is a carriage house conversion easier?',
        a: 'Where one survives it is the best starting point — existing structure, already sited. It needs a structural assessment, since these were not built to carry a dwelling.',
      },
    ],
  },

  sharonville: {
    intro:
      'ADU in Sharonville? Its own city spanning two counties. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'Sharonville is its own city and parts of it extend beyond Hamilton County, which means confirming both the municipal position and which county applies to your specific parcel. With residential, commercial and industrial land in proximity, the parcel-level check matters more than a neighbourhood assumption. All of it is straightforward and all of it comes first.',
    ],
    localFaqs: [
      {
        q: 'Why does the county matter?',
        a: 'Parts of Sharonville extend beyond Hamilton County, so confirming both the municipal position and which county applies to your parcel is part of the initial check.',
      },
      {
        q: 'Is the zoning consistent across the city?',
        a: 'With residential, commercial and industrial land in proximity, a parcel-level check matters more than a neighbourhood assumption.',
      },
    ],
  },

  northgate: {
    intro:
      'ADU in Northgate? Colerain Township, and lots that generally have room. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'Colerain Township governs the zoning, confirmed first. The residential lots here are suburban with reasonable depth and level ground, which is favourable. Where a household is weighing an ADU against a large addition to the main house, both are worth pricing — the addition is frequently simpler on the permitting side even where it costs more to build.',
    ],
    localFaqs: [
      {
        q: 'Is an addition simpler than an ADU?',
        a: 'Frequently on the permitting side, even where it costs more to build. Where you are weighing both, we would price both rather than assuming the ADU is the better route.',
      },
      {
        q: 'Who governs the zoning?',
        a: 'Colerain Township rather than a city, confirmed directly before any design work.',
      },
    ],
  },

  springdale: {
    intro:
      'ADU in Springdale? Its own city, and multigenerational demand. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'Springdale sets its own zoning, confirmed first. Where a household is multigenerational, an ADU is a genuinely good answer — independence for both sides without anyone moving away — and the mid-century lots here frequently have the room. Whether the intended occupancy is permitted is part of the same confirmation, since permitted uses sometimes distinguish family from letting.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU good for a multigenerational household?',
        a: 'It is one of the better answers there is — independence for both sides without anyone moving away. Whether the intended occupancy is permitted is part of the same zoning confirmation.',
      },
      {
        q: 'Do these lots have room?',
        a: 'The mid-century portion frequently does. The envelope after setbacks is measured on the specific property.',
      },
    ],
  },

  miamitown: {
    intro:
      'ADU in Miamitown? River-bottom ground and a long run for us. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'Two things. Flood elevation requirements govern a new dwelling on low river-bottom ground, and they affect the foundation design, the cost and the insurance enough to change the answer on some parcels. And this is one of the further corners of our area, so we schedule and price the distance honestly rather than absorbing it.',
    ],
    localFaqs: [
      {
        q: 'Does the river-bottom ground rule it out?',
        a: 'On some parcels the flood elevation requirements affect the foundation cost enough to change the answer. It is established at feasibility rather than at permit review.',
      },
      {
        q: 'Do you come out this far?',
        a: 'Yes, and we price the distance honestly rather than absorbing it. The feasibility visit comes first regardless.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'ADU in Forest Park? Its own city, and a planned community layout. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Forest Park is its own city setting its own zoning, confirmed first. Because it was developed as a planned community, lot layouts are consistent across neighbourhoods — which makes the feasibility answer more predictable than in places that grew piecemeal. The lots generally have depth and level ground, so where zoning permits it the physical side is usually workable.',
    ],
    localFaqs: [
      {
        q: 'Who governs the zoning?',
        a: 'The City of Forest Park — its own municipality, confirmed directly before design work rather than assumed.',
      },
      {
        q: 'Are the lots consistent?',
        a: 'Largely, since it was developed as a planned community — which makes the feasibility answer more predictable than in places that grew piecemeal.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'ADU in Pleasant Run? Springfield Township, and workable suburban lots. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'Springfield Township is the zoning authority rather than a city, confirmed at the outset. The suburban lots here generally have the depth, level ground and rear access an ADU needs. Where a household is building for family rather than to let, that distinction sometimes matters to what is permitted and is worth raising in the same conversation.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority?',
        a: 'Springfield Township rather than a city, which is a different process. We confirm its position before any design work.',
      },
      {
        q: 'Does the intended occupancy matter?',
        a: 'Sometimes permitted uses distinguish family occupancy from letting. Worth raising in the same conversation as the zoning confirmation.',
      },
    ],
  },

  cleves: {
    intro:
      'ADU in Cleves? Its own village on flood-prone ground. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'Cleves is its own village setting its own zoning, confirmed first. The larger constraint is the ground: flood elevation requirements govern a new dwelling here and drive the foundation design, the construction cost and the insurance. On flood-prone parcels that frequently makes the project disproportionate, and we establish it at feasibility rather than after a design.',
    ],
    localFaqs: [
      {
        q: 'Can a new dwelling be built on flood-prone ground?',
        a: 'Flood elevation requirements govern it and drive the foundation design, cost and insurance. On many of these parcels that makes the project disproportionate.',
      },
      {
        q: 'When is that established?',
        a: 'At feasibility, alongside the village’s zoning position — before anyone pays for a design.',
      },
    ],
  },

  'north-bend': {
    intro:
      'ADU in North Bend? Its own village on riverside ground. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'North Bend sets its own zoning as an incorporated village, confirmed at the outset. On riverside ground flood elevation requirements shape a new dwelling’s foundation and cost, and on parcels sitting higher the picture is considerably better. Which you have is established at feasibility rather than assumed from the village.',
    ],
    localFaqs: [
      {
        q: 'Does every parcel here face flood requirements?',
        a: 'No — parcels sitting higher are a considerably better picture than those on the low riverside ground. Which you have is established at feasibility rather than assumed.',
      },
      {
        q: 'Who sets the zoning?',
        a: 'The village of North Bend, confirmed directly rather than assumed from the county.',
      },
    ],
  },

  loveland: {
    intro:
      'ADU in Loveland? A city spanning three counties — the parcel decides. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'Loveland extends across more than one county, which means confirming both the city’s position and which county applies to your specific parcel — an unusually important check here. On the lower ground near the Little Miami, flood elevation requirements also apply to a new dwelling. Both are established before anything is designed.',
    ],
    localFaqs: [
      {
        q: 'Why does the county matter in Loveland?',
        a: 'The city extends across more than one, so confirming both the municipal position and which county applies to your parcel is an unusually important first check here.',
      },
      {
        q: 'Does the river affect it?',
        a: 'On the lower ground near the Little Miami, flood elevation requirements apply to a new dwelling and affect the foundation design and cost.',
      },
    ],
  },

  harrison: {
    intro:
      'ADU in Harrison? On the state line, the jurisdiction question is bigger. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'This is the most jurisdictionally complicated place we work. Which state a parcel sits in decides the code administration entirely, and the municipal zoning differs on each side. For a new dwelling that is not a detail — it changes the process, the requirements and the timeline. It is confirmed in writing before anything else happens.',
    ],
    localFaqs: [
      {
        q: 'Does the state line really matter?',
        a: 'For a new dwelling, considerably — which state a parcel sits in decides the code administration entirely, and the municipal zoning differs on each side. It changes process, requirements and timeline.',
      },
      {
        q: 'Do you build on the Indiana side?',
        a: 'Yes. It is a different jurisdiction with a different process rather than a different job, and we confirm which applies before anything else.',
      },
    ],
  },

  ludlow: {
    intro:
      'ADU in Ludlow? Kentucky rules, and narrow river-town lots. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'Ludlow is a Kentucky city setting its own zoning under Kentucky code administration — neither follows Ohio practice. The historic plots are narrow and closely built, so the envelope after setbacks frequently leaves nothing for a detached structure. Where a rear outbuilding survives, converting it is realistically the better route.',
    ],
    localFaqs: [
      {
        q: 'Do Ohio rules apply here?',
        a: 'No — Kentucky code administration and Ludlow’s own zoning, neither of which follows Ohio practice. Both are confirmed before design.',
      },
      {
        q: 'Is there room on these lots?',
        a: 'Frequently not for a detached structure once setbacks apply. Where a rear outbuilding survives, converting it is realistically the better route.',
      },
    ],
  },

  'park-hills': {
    intro:
      'ADU in Park Hills? Steep hillside lots and Kentucky zoning. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Park Hills sets its own zoning under Kentucky administration, confirmed first. The physical constraint is the terrain — steep lots mean expensive foundations and genuinely difficult equipment access to rear gardens. Where a property has a flatter area with room inside its setbacks, it is worth assessing properly. On much of the hill it will not.',
    ],
    localFaqs: [
      {
        q: 'Do steep lots rule it out?',
        a: 'Not automatically, but they mean expensive foundations and difficult equipment access. Where a property has a flatter area with room inside setbacks it is worth assessing properly.',
      },
      {
        q: 'Who sets the rules?',
        a: 'The City of Park Hills under Kentucky code administration — neither follows Ohio practice, and both are confirmed first.',
      },
    ],
  },

  bromley: {
    intro:
      'ADU in Bromley? A small Kentucky village on low river ground. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Bromley is its own Kentucky village setting its own zoning, confirmed first. The ground is the larger question — low riverside land brings flood elevation requirements that drive a new dwelling’s foundation and cost. Combined with modest lot sizes, a fair number of these parcels will not support one, and we establish that quickly.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU realistic here?',
        a: 'On a fair number of these parcels, no — modest lots combined with flood elevation requirements on low riverside ground. We establish that quickly rather than through a long process.',
      },
      {
        q: 'Who governs the zoning?',
        a: 'The village of Bromley under Kentucky code administration, confirmed directly rather than assumed.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'ADU in Fort Wright? Hilltop Kentucky city with workable lots. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'Fort Wright is its own Kentucky city setting its own zoning, confirmed first. Above the river the flood questions that shape the river villages fall away, and the mid-century lots frequently have depth and reasonable access. Where the ground slopes, siting the building on the flattest workable area is what controls the foundation cost.',
    ],
    localFaqs: [
      {
        q: 'Are hilltop lots better than the river villages?',
        a: 'Considerably — the flood elevation questions fall away and the mid-century lots frequently have depth and reasonable access.',
      },
      {
        q: 'Does the slope still matter?',
        a: 'Where the ground falls, siting on the flattest workable area is what controls the foundation cost. That trade-off is put in front of you at feasibility.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'ADU in Fort Mitchell? Its own Kentucky city, and a design that has to sit well. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Fort Mitchell sets its own zoning under Kentucky administration, confirmed at the outset. The housing mixes historic and mid-century, so lot sizes and the design context both vary by street. On the historic portion a new structure will be seen, and proportion and materials matter more than on a mid-century street.',
    ],
    localFaqs: [
      {
        q: 'Who sets the zoning?',
        a: 'The City of Fort Mitchell under Kentucky code administration — confirmed directly rather than assumed from a neighbouring city.',
      },
      {
        q: 'Does the design context vary?',
        a: 'By street. On the historic portion a new structure will be seen and proportion and materials matter more than on a mid-century street.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'ADU in Villa Hills? Hilltop Kentucky lots with genuine room. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'Villa Hills is its own Kentucky city setting its own zoning, confirmed first. The residential lots here are frequently generous with level or gently sloping ground — favourable conditions. Above the river the flood questions fall away entirely, which makes this one of the more straightforward Northern Kentucky settings for a new structure.',
    ],
    localFaqs: [
      {
        q: 'Are these lots suitable?',
        a: 'Frequently generous with level or gently sloping ground, and above the river the flood questions fall away entirely. One of the more straightforward Northern Kentucky settings.',
      },
      {
        q: 'Who confirms the zoning?',
        a: 'The City of Villa Hills under Kentucky code administration. We confirm its position in writing before any design work.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'ADU in Lakeside Park? Its own small Kentucky city. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'Lakeside Park is its own city setting its own zoning, confirmed directly rather than assumed from the several neighbouring municipalities that share its postal code. That point matters more here than most places — a handful of separate small cities sit close together in this part of Kenton County, each with its own code. Getting the right authority is the first step.',
    ],
    localFaqs: [
      {
        q: 'Why does the authority matter so much here?',
        a: 'Several separate small cities sit close together in this part of Kenton County, sharing postal codes but each with its own zoning code. Getting the right one is genuinely the first step.',
      },
      {
        q: 'Are these lots suitable?',
        a: 'Mid-century plots with reasonable depth and level ground are favourable. The envelope after setbacks is measured on the specific property.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'ADU in Crescent Springs? Its own city, and a clear feasibility process. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'Crescent Springs sets its own zoning, confirmed first. What follows is a defined sequence: measure the buildable envelope after setbacks, check equipment access to the proposed position, establish where services would run and whether the electrical service can carry a second dwelling, then design. Each step can change the answer, which is why they come in that order.',
    ],
    localFaqs: [
      {
        q: 'What does the feasibility process cover?',
        a: 'Zoning confirmation, the buildable envelope after setbacks, equipment access to the position, service routes, and whether the electrical service can carry a second dwelling.',
      },
      {
        q: 'How long does it take?',
        a: 'The site work is about an hour; the zoning confirmation depends on the authority. Both come before design because either can change the answer.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'ADU in Crestview Hills? Its own city, and honest cost expectations. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'Worth setting expectations plainly: an ADU is a complete small house — foundation, structure, roof, a full kitchen, a full bathroom, and its own plumbing, electrical and HVAC. It costs accordingly, and it is closer to a small custom home than to a large remodel. Anyone quoting it like an addition has not understood the scope.',
    ],
    localFaqs: [
      {
        q: 'Why does an ADU cost what it does?',
        a: 'Because it is a complete small house — foundation, structure, roof, full kitchen, full bathroom, and its own plumbing, electrical and HVAC. It is closer to a small custom home than a large remodel.',
      },
      {
        q: 'Is there a cheaper route?',
        a: 'Converting existing space — a garage, a basement, an upper floor — avoids the foundation and shell entirely. Where that is possible it is meaningfully cheaper and we price both.',
      },
    ],
  },

  edgewood: {
    intro:
      'ADU in Edgewood? Its own city, and family-driven demand. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Edgewood sets its own zoning, confirmed first. Enquiries here are frequently prompted by a parent’s health, which brings a timeline attached — and an ADU is the wrong project for a short deadline. Feasibility, design, permitting and construction run in months. Where the need is urgent, adapting existing space in the main house is the honest alternative and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Can an ADU be built quickly?',
        a: 'No — feasibility, design, permitting and construction run in months. Where the need is urgent, adapting existing space in the main house is the honest alternative.',
      },
      {
        q: 'What can be done sooner?',
        a: 'A ground-floor bedroom and accessible bathroom in the existing house is a far shorter project and frequently the right one when a timeline is short.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'ADU in Taylor Mill? Hilltop Kentucky city with reasonable lots. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'Taylor Mill is its own city setting its own zoning, confirmed at the outset. Above the river valley the flood questions fall away, and the mid-century and newer lots frequently have depth and workable access. Where the ground slopes, the siting exercise is what controls the foundation cost — and it is worth doing properly rather than defaulting to the obvious position.',
    ],
    localFaqs: [
      {
        q: 'Are hilltop lots easier?',
        a: 'The flood questions fall away and the lots frequently have depth and workable access. Where the ground slopes, siting is what controls the foundation cost.',
      },
      {
        q: 'Who sets the zoning?',
        a: 'The City of Taylor Mill under Kentucky code administration, confirmed directly before any design work.',
      },
    ],
  },

  elsmere: {
    intro:
      'ADU in Elsmere? Its own city, and a clear payment structure. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Elsmere sets its own zoning, confirmed first. On the commercial side, an ADU is staged rather than paid as one sum — feasibility and design are their own step, and the build has progress payments tied to real milestones such as foundation, framing and completion. Nothing appears at the end that was not in the signed itemisation.',
    ],
    localFaqs: [
      {
        q: 'How is an ADU paid for?',
        a: 'In stages — feasibility and design as their own step, then progress payments on the build tied to real milestones like foundation, framing and completion.',
      },
      {
        q: 'Do we pay for feasibility separately?',
        a: 'Design work is its own stage rather than bundled into a build price, which means you can stop after it if the answer is not what you hoped.',
      },
    ],
  },

  independence: {
    intro:
      'ADU in Independence? Kenton County seat, with its own zoning. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Independence sets its own zoning, confirmed first. The newer subdivisions frequently have generous level lots — genuinely favourable conditions — though subdivision covenants are a separate restriction from zoning and worth checking alongside. The historic core has smaller plots where the envelope after setbacks decides it.',
    ],
    localFaqs: [
      {
        q: 'Do subdivision covenants matter?',
        a: 'They are a separate restriction from zoning and can prohibit what the city otherwise permits. Worth checking alongside rather than after.',
      },
      {
        q: 'Are the newer lots better?',
        a: 'Generally — generous and level with good access. The historic core has smaller plots where the envelope after setbacks decides it.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'ADU in Dayton? A tight Kentucky river city, mostly not. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Dayton is its own Kentucky city with its own zoning, confirmed first. The late-1800s plots are narrow and closely built, and the envelope after setbacks frequently leaves nothing for a new structure. Where a lot backs onto an alley or retains a rear outbuilding, the picture changes — and those are the properties worth assessing properly.',
    ],
    localFaqs: [
      {
        q: 'Is there room on these lots?',
        a: 'Frequently not once setbacks apply — the late-1800s plots are narrow and closely built. Alley access or a surviving rear outbuilding changes the picture.',
      },
      {
        q: 'Who governs the zoning?',
        a: 'The City of Dayton in Kentucky under Kentucky code administration — not to be confused with Dayton, Ohio, and confirmed directly.',
      },
    ],
  },

  southgate: {
    intro:
      'ADU in Southgate? Its own Campbell County city. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Southgate sets its own zoning, confirmed first rather than assumed from Newport or Fort Thomas either side. The mid-century lots sit above the river towns with level ground and reasonable depth, which is favourable. Where a household is weighing an ADU against extending the main house, both are worth pricing.',
    ],
    localFaqs: [
      {
        q: 'Does Southgate follow Newport’s rules?',
        a: 'No — it is its own city with its own zoning, confirmed directly rather than assumed from either neighbour.',
      },
      {
        q: 'Should we consider an addition instead?',
        a: 'Where you are weighing both, we price both. An addition is frequently simpler on the permitting side even where it costs more to build.',
      },
    ],
  },

  wilder: {
    intro:
      'ADU in Wilder? Its own city with mixed land use. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'Wilder sets its own zoning, and with a substantial commercial and industrial base alongside residential streets what is permitted varies by parcel. An address-specific check is genuinely necessary here rather than a neighbourhood assumption. The residential portion is ordinary housing and we work on it regularly.',
    ],
    localFaqs: [
      {
        q: 'Does the mixed land use complicate it?',
        a: 'What is permitted varies by parcel with commercial and industrial land close to residential streets. An address-specific check is genuinely necessary rather than an area assumption.',
      },
      {
        q: 'Do you work on the residential side?',
        a: 'Yes — residential is all we do. Wilder is known for its commercial base, but the neighbourhoods here are ordinary housing.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'ADU in Highland Heights? Near NKU, letting rules decide the case. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'The obvious intent near a university is student letting, and that is exactly where owner-occupancy requirements and restrictions on letting an accessory dwelling most often apply. Those rules decide whether the investment case exists at all. Highland Heights sets its own zoning, and we confirm both the permission and the permitted use in writing before anything is designed.',
    ],
    localFaqs: [
      {
        q: 'Can we let an ADU to students here?',
        a: 'It depends on owner-occupancy requirements and how the city treats letting an accessory dwelling. Those rules decide whether the investment case exists, so they come first.',
      },
      {
        q: 'What if letting is not permitted?',
        a: 'Then the project only makes sense for family occupancy, and we would say so plainly before you commit to the cost.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'ADU in Cold Spring? A growing Campbell County city with room. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'Cold Spring sets its own zoning, confirmed first. The newer subdivisions have generous level lots with good access — favourable conditions — while the established neighbourhoods vary more. Where a property is in a subdivision, association covenants are a separate check from the city’s rules and can restrict what zoning otherwise permits.',
    ],
    localFaqs: [
      {
        q: 'Are the newer subdivision lots suitable?',
        a: 'Frequently generous and level with good access. Where an association exists, its covenants are a separate check that can restrict what zoning permits.',
      },
      {
        q: 'Who confirms the zoning?',
        a: 'The City of Cold Spring under Kentucky code administration, confirmed in writing before design.',
      },
    ],
  },

  alexandria: {
    intro:
      'ADU in Alexandria? Campbell County seat, and septic capacity matters. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'Alexandria sets its own zoning, confirmed first. On the semi-rural properties the deciding factor is frequently not zoning or lot size but the septic system — a second dwelling adds substantial load, and whether the system can carry it or would need expanding is established at feasibility rather than at permit review. On municipal services that question falls away.',
    ],
    localFaqs: [
      {
        q: 'Can a septic system carry a second dwelling?',
        a: 'It is frequently the deciding factor on semi-rural properties — a second dwelling adds substantial load, and whether the system carries it or needs expanding is established at feasibility.',
      },
      {
        q: 'What about properties on municipal services?',
        a: 'That question falls away, and the connection route and capacity become the practical figures instead.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'ADU in Melbourne? A small Kentucky village on low river ground. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'Melbourne is its own village setting its own zoning, confirmed first. The ground is the larger question — flood elevation requirements on low riverside land drive a new dwelling’s foundation and cost. This is also a long run for us, so we schedule and price the distance honestly rather than absorbing it.',
    ],
    localFaqs: [
      {
        q: 'Does the riverside ground affect a new build?',
        a: 'Flood elevation requirements drive the foundation design, the cost and the insurance. On some parcels that changes the answer entirely.',
      },
      {
        q: 'Do you come out this far?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns. We price the distance honestly rather than absorbing it.',
      },
    ],
  },

  hebron: {
    intro:
      'ADU in Hebron? Boone County, and semi-rural lots with septic to check. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Boone County zoning applies here rather than a city, confirmed first. The semi-rural properties frequently have generous lots — the constraint is rarely space — but where they run on well and septic, whether the system can carry a second dwelling is often the deciding factor. That is established at feasibility rather than at permit review.',
    ],
    localFaqs: [
      {
        q: 'Is lot size the constraint here?',
        a: 'Rarely on the semi-rural properties. Where they run on well and septic, whether the system can carry a second dwelling is more often the deciding factor.',
      },
      {
        q: 'Who has zoning authority?',
        a: 'Boone County rather than a city for the unincorporated areas, confirmed directly before any design work.',
      },
    ],
  },

  burlington: {
    intro:
      'ADU in Burlington? The Boone County seat, with room on many lots. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Boone County governs the zoning in the unincorporated areas, confirmed at the outset. The newer subdivisions have generous level lots with good access; the historic core around the courthouse has smaller plots where the envelope after setbacks decides it. Which you have makes a substantial difference, so we assess the specific property.',
    ],
    localFaqs: [
      {
        q: 'Do the newer subdivisions work better?',
        a: 'Generally — generous level lots with good access. The historic core around the courthouse has smaller plots where the envelope after setbacks decides it.',
      },
      {
        q: 'Do subdivision covenants apply?',
        a: 'Where an association exists they are a separate restriction from zoning and can prohibit what the county otherwise permits. Worth checking alongside.',
      },
    ],
  },

  union: {
    intro:
      'ADU in Union? Boone County subdivisions with genuine room. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'The lots in this housing are frequently generous and level with straightforward access — among the most physically favourable conditions we encounter. What most often decides these projects is not the zoning or the lot but the subdivision association, whose covenants can prohibit an accessory dwelling regardless of what the jurisdiction permits. Both checks come first.',
    ],
    localFaqs: [
      {
        q: 'What usually decides it here?',
        a: 'Not the zoning or the lot but the subdivision association — covenants can prohibit an accessory dwelling regardless of what the jurisdiction permits. Both checks come first.',
      },
      {
        q: 'Where do we find the covenants?',
        a: 'With the association or in the deed restrictions from your purchase. It is worth locating them before any design work.',
      },
    ],
  },

  walton: {
    intro:
      'ADU in Walton? Rural Boone County lots, and septic capacity. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'The rural properties out here have space in abundance, which removes the constraint that ends urban projects. What replaces it is the septic system — a second dwelling adds substantial load and whether the system can carry it or would need expanding is frequently the deciding figure. Long service runs to a distant building position are the other real cost.',
    ],
    localFaqs: [
      {
        q: 'Is space ever the constraint on a rural lot?',
        a: 'Rarely. The septic system usually is — a second dwelling adds substantial load, and whether it can be carried or needs expanding is frequently the deciding figure.',
      },
      {
        q: 'What else costs money out here?',
        a: 'Long service runs to a distant building position and getting equipment across the property. Both real figures established at feasibility.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'ADU in Mount Carmel? Union Township, and suburban lots that work. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'Union Township in Clermont County is the zoning authority here, confirmed first — a different process from anything in Hamilton County. The suburban lots generally have the depth, level ground and rear access an ADU needs, which makes the physical side the easier half once the township’s position is known.',
    ],
    localFaqs: [
      {
        q: 'Who governs the zoning?',
        a: 'Union Township in Clermont County rather than a city, which is a different authority and process from anything in Hamilton County.',
      },
      {
        q: 'Are these lots suitable?',
        a: 'Generally — depth, level ground and rear access are what an ADU needs and this housing has them. The envelope after setbacks is still measured.',
      },
    ],
  },

  summerside: {
    intro:
      'ADU in Summerside? Clermont County township jurisdiction. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Union Township governs the zoning, confirmed at the outset. The suburban lots here are workable, and the practical variables that follow are the service runs to a rear building position and whether the existing electrical service can carry a second dwelling. Both established before quoting rather than estimated.',
    ],
    localFaqs: [
      {
        q: 'What are the practical variables here?',
        a: 'Service runs to a rear building position and whether the existing electrical service can carry a second dwelling. Both established before quoting rather than estimated.',
      },
      {
        q: 'Who confirms the zoning?',
        a: 'Union Township in Clermont County, confirmed directly rather than assumed from a neighbouring authority.',
      },
    ],
  },

  withamsville: {
    intro:
      'ADU in Withamsville? Township rules, and a corridor location that helps access. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Union Township is the zoning authority, confirmed first. With commercial strips close to residential streets, what is permitted can vary by parcel — so the check is address-specific. The corridor position does help practically: access for deliveries and equipment is generally straightforward compared with tighter neighbourhoods.',
    ],
    localFaqs: [
      {
        q: 'Does the mixed use affect what is permitted?',
        a: 'It can vary by parcel with commercial strips close to residential streets, so the zoning check is address-specific rather than a neighbourhood assumption.',
      },
      {
        q: 'Is access easier here?',
        a: 'Generally — the corridor position makes deliveries and equipment access straightforward compared with tighter neighbourhoods.',
      },
    ],
  },

  milford: {
    intro:
      'ADU in Milford? Its own city, and a historic district to consider. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'Milford is its own city setting its own zoning, confirmed first — and it extends across more than one county, so which applies to your parcel is part of the same check. Within the historic district a new structure faces additional design consideration, and on the lower ground near the Little Miami flood elevation requirements apply.',
    ],
    localFaqs: [
      {
        q: 'Why does the county matter here?',
        a: 'Milford extends across more than one, so confirming which applies to your specific parcel is part of the initial check alongside the city’s position.',
      },
      {
        q: 'Does the historic district add review?',
        a: 'A new structure within it faces additional design consideration. On the lower ground near the river, flood elevation requirements also apply.',
      },
    ],
  },

  mulberry: {
    intro:
      'ADU in Mulberry? Clermont County suburban lots. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'The relevant township or county authority is confirmed first, since this is unincorporated Clermont County rather than a city. The suburban lots here generally have workable depth and access. Where a household is weighing an ADU against a large addition, we would price both — the addition is frequently simpler on permitting even where it builds for more.',
    ],
    localFaqs: [
      {
        q: 'Who has zoning authority here?',
        a: 'The relevant township or county for this unincorporated part of Clermont County rather than a city. We confirm the correct authority before any design work.',
      },
      {
        q: 'Is an addition worth considering instead?',
        a: 'Where you are weighing both, we price both. An addition is frequently simpler on permitting even where it builds for more.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'ADU in Mount Repose? Clermont County, and a long-term family use. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'The correct county or township authority is confirmed first. In settled communities like this the usual driver is family — a parent or an adult child — which shapes the building differently from a lettable unit: single-level living, level access, and a layout that suits one person for years rather than maximum rooms.',
    ],
    localFaqs: [
      {
        q: 'What suits a long-term family occupant?',
        a: 'Single-level living, level access from the parking area, a bathroom that works for someone unsteady, and a layout for one person over years rather than maximum rooms.',
      },
      {
        q: 'Could it be let later?',
        a: 'Frequently, and building with that in mind costs little now. Whether letting is permitted is a zoning question worth confirming even if it is not the plan.',
      },
    ],
  },

  'day-heights': {
    intro:
      'ADU in Day Heights? Semi-rural Clermont lots with room. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'The correct authority is confirmed first for this unincorporated area. The semi-rural properties have space in abundance, so the constraints shift to the septic system’s capacity for a second dwelling, the length of service runs to a distant position, and getting equipment across the property. All three are real figures established at feasibility.',
    ],
    localFaqs: [
      {
        q: 'What limits an ADU on a larger lot?',
        a: 'Rarely space. Septic capacity for a second dwelling, the length of service runs to a distant position, and equipment access across the property are the real constraints.',
      },
      {
        q: 'Can a septic system be expanded?',
        a: 'Sometimes, and it is a real cost with its own approval process. It is established at feasibility rather than discovered at permit review.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'ADU in New Richmond? Its own village on the riverfront. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'New Richmond is its own village setting its own zoning, confirmed first. Riverfront parcels face flood elevation requirements that drive a new dwelling’s foundation and cost, and the historic 19th-century plots along the river are frequently narrow. Properties set back on higher ground are a considerably better prospect.',
    ],
    localFaqs: [
      {
        q: 'Are riverfront parcels workable?',
        a: 'Flood elevation requirements drive the foundation and cost, and the historic riverfront plots are frequently narrow. Properties set back on higher ground are a better prospect.',
      },
      {
        q: 'Who sets the zoning?',
        a: 'The village of New Richmond, confirmed directly rather than assumed from the county.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'ADU in Amelia? Clermont County, and a clear first step. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'The correct authority is confirmed first — Amelia’s municipal status has changed in recent years, which makes establishing who actually governs your parcel a genuine first step rather than a formality. Once that is settled, the established lots here generally have workable depth and access for the physical side.',
    ],
    localFaqs: [
      {
        q: 'Who governs zoning in Amelia?',
        a: 'That is worth establishing rather than assuming — the municipal status has changed in recent years, so confirming who actually governs your parcel is a genuine first step.',
      },
      {
        q: 'Are the lots workable?',
        a: 'The established neighbourhoods generally have depth and access that work. The envelope after setbacks is measured on the specific property.',
      },
    ],
  },

  batavia: {
    intro:
      'ADU in Batavia? The Clermont County seat, with two different settings. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'Whether the village or the county governs depends on which side of the boundary your parcel sits, and that is confirmed first. The historic core has smaller plots near the East Fork with flood considerations; the newer development has generous lots on higher ground. Those are genuinely different propositions and we assess the specific property.',
    ],
    localFaqs: [
      {
        q: 'Village or county authority?',
        a: 'It depends which side of the boundary your parcel sits on, and that is confirmed first rather than assumed from the postal address.',
      },
      {
        q: 'Does location within Batavia matter?',
        a: 'Considerably — the historic core has smaller plots near the East Fork with flood considerations, the newer development generous lots on higher ground.',
      },
    ],
  },

  owensville: {
    intro:
      'ADU in Owensville? A small village with rural surroundings. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Owensville is its own village setting its own zoning within the village limits, while surrounding rural properties fall under the county — so establishing which applies to your parcel is the first step. On the rural properties the septic system’s capacity for a second dwelling is frequently the deciding factor rather than the lot.',
    ],
    localFaqs: [
      {
        q: 'Village or county rules?',
        a: 'It depends whether your parcel sits within the village limits or in the surrounding county area. Establishing which applies is the first step.',
      },
      {
        q: 'What decides it on a rural property?',
        a: 'Frequently the septic system’s capacity for a second dwelling rather than the lot size. That is established at feasibility.',
      },
    ],
  },

  goshen: {
    intro:
      'ADU in Goshen? Township jurisdiction and rural properties. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'Goshen Township is the zoning authority, confirmed first. On the rural properties space is plentiful and the real constraints are the septic system’s capacity, the length of service runs to a building position away from the house, and equipment access. All three are established rather than estimated, because together they can be a substantial share of the budget.',
    ],
    localFaqs: [
      {
        q: 'What limits an ADU on a rural property?',
        a: 'Rarely space. Septic capacity, the length of service runs to a position away from the house, and equipment access — together frequently a substantial share of the budget.',
      },
      {
        q: 'Who has zoning authority?',
        a: 'Goshen Township rather than a city, confirmed directly before any design work.',
      },
    ],
  },

  moscow: {
    intro:
      'ADU in Moscow? A small river village where the ground decides. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'Moscow is its own village setting its own zoning, confirmed first. The ground is the larger question — flood elevation requirements on low riverside land drive a new dwelling’s foundation, cost and insurance, and on many of these parcels that makes the project disproportionate. We establish it quickly rather than through a long process.',
    ],
    localFaqs: [
      {
        q: 'Is a new dwelling realistic on this ground?',
        a: 'On many of these parcels the flood elevation requirements make the foundation cost disproportionate. We establish that quickly rather than through a long process.',
      },
      {
        q: 'Do you come out this far?',
        a: 'Yes, and we price the distance honestly. The feasibility assessment comes first regardless of how far it is.',
      },
    ],
  },

  newtonsville: {
    intro:
      'ADU in Newtonsville? Rural Clermont with room and septic questions. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'The correct authority — village or county — is confirmed first depending on the parcel. On the rural properties around the village, space is abundant and the deciding factors are the septic system’s capacity for a second dwelling and the practical cost of running services to a position away from the house. This is also one of the further corners of our area.',
    ],
    localFaqs: [
      {
        q: 'What are the real constraints out here?',
        a: 'Septic capacity for a second dwelling and the cost of running services to a position away from the house. Space itself is rarely the limit.',
      },
      {
        q: 'Will you come out this far?',
        a: 'Yes, scheduled and priced honestly for the distance. The feasibility assessment comes first regardless.',
      },
    ],
  },

  williamsburg: {
    intro:
      'ADU in Williamsburg? A historic village with rural land around it. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'Whether the village or the county governs depends on the parcel, and that is confirmed first. The 19th-century core has narrow plots near the East Fork where flood considerations apply; the surrounding rural properties have space but bring septic capacity into the frame. Two different propositions in one postal code.',
    ],
    localFaqs: [
      {
        q: 'Village or county authority?',
        a: 'It depends on your parcel, and that is confirmed first. The two have different processes and it is not something to assume from the address.',
      },
      {
        q: 'Which is the better prospect?',
        a: 'Usually the rural properties for space, though septic capacity becomes the deciding factor there. The village core has narrow plots with flood considerations near the river.',
      },
    ],
  },

  bethel: {
    intro:
      'ADU in Bethel? A historic village with modest plots. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Bethel sets its own zoning within the village, with the county governing the rural surroundings — confirmed first depending on the parcel. Worth being honest about cost here too: an ADU is a complete small house and the figure reflects that. In modest housing the same budget frequently does more extending or adapting the existing home, and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU sensible on modest housing?',
        a: 'It is a complete small house and costs accordingly. In modest housing the same budget frequently does more extending or adapting the existing home, and we will say so plainly.',
      },
      {
        q: 'What would you suggest instead?',
        a: 'A ground-floor bedroom and bathroom in the existing house, or a rear addition. Both are considerably cheaper than a separate dwelling and often solve the same problem.',
      },
    ],
  },

  ross: {
    intro:
      'ADU in Ross? Butler County township with rural lots. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Ross Township in Butler County is the zoning authority, confirmed first — a different county and process from anything in Hamilton or Clermont. On the rural properties space is plentiful and septic capacity is the usual constraint. Near the Great Miami, flood elevation requirements apply to a new dwelling and affect the foundation cost.',
    ],
    localFaqs: [
      {
        q: 'Who governs the zoning?',
        a: 'Ross Township in Butler County — a different county and process from anything in Hamilton or Clermont. Confirmed directly before design.',
      },
      {
        q: 'Does the river affect it?',
        a: 'Near the Great Miami, flood elevation requirements apply to a new dwelling and affect the foundation design and cost.',
      },
    ],
  },

  fairfield: {
    intro:
      'ADU in Fairfield? Its own Butler County city with varied housing. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Fairfield is its own city in Butler County setting its own zoning, confirmed first. The housing spans decades, so lot sizes and conditions vary considerably — the mid-century neighbourhoods and the newer subdivisions are different propositions. Where a subdivision association exists, its covenants are a separate check from the city’s rules.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules here?',
        a: 'The City of Fairfield in Butler County — its own municipality with its own zoning, confirmed directly before design work.',
      },
      {
        q: 'Do the lots vary?',
        a: 'Considerably across the mid-century neighbourhoods and the newer subdivisions. The envelope after setbacks is measured on the specific property.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'ADU in Beckett Ridge? The association matters as much as the township. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'This is a planned community with a homeowners association, and its covenants can prohibit an accessory dwelling regardless of what township zoning permits. That check matters as much as the zoning one here and is frequently the decisive answer. Physically the lots are suburban with reasonable room, so where both permissions exist the build side is straightforward.',
    ],
    localFaqs: [
      {
        q: 'Can the association block an ADU?',
        a: 'Covenants can prohibit one regardless of what township zoning permits, and in a planned community that check is frequently the decisive answer. It matters as much as the zoning.',
      },
      {
        q: 'What if the covenants allow it?',
        a: 'Then the lots are suburban with reasonable room and the build side is straightforward. Township zoning is confirmed alongside.',
      },
    ],
  },

  wetherington: {
    intro:
      'ADU in Wetherington? A covenanted community — check that first. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'An upscale planned community typically carries detailed covenants governing what may be built and how it must look, and those are frequently stricter than township zoning. In a community like this, the association check comes before everything — it is the most likely reason a project does not proceed, and it is far better established at the outset.',
    ],
    localFaqs: [
      {
        q: 'What is the first check here?',
        a: 'The association covenants, which in an upscale planned community are typically detailed and frequently stricter than township zoning. It is the most likely reason a project does not proceed.',
      },
      {
        q: 'Would the association govern the design too?',
        a: 'Frequently — materials, roof form and appearance can all be covered. Where that applies we design to it rather than seeking approval afterwards.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'ADU in Hamilton? The Butler County seat, with its own city zoning. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Hamilton is its own city in Butler County setting its own zoning, confirmed first. Within the historic districts a new structure faces design consideration alongside it, and those 19th-century plots are frequently narrow. Near the Great Miami, flood elevation requirements affect a new dwelling’s foundation. Three separate checks, all before design.',
    ],
    localFaqs: [
      {
        q: 'What applies in the historic districts?',
        a: 'The city’s zoning, design consideration for a new structure, and near the river flood elevation requirements affecting the foundation. All three before design.',
      },
      {
        q: 'Are these lots big enough?',
        a: '19th-century district plots are frequently narrow, so the envelope after setbacks decides it. Newer parts of the city are a different proposition.',
      },
    ],
  },

  millville: {
    intro:
      'ADU in Millville? A small Butler County village with rural land. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'Whether the village or Butler County governs depends on the parcel, confirmed first. On the rural properties around the village, space is not the constraint — septic capacity for a second dwelling and the length of service runs to a distant position are. Both are established at feasibility, because together they can be a substantial share of the cost.',
    ],
    localFaqs: [
      {
        q: 'Village or county authority?',
        a: 'It depends on your parcel and is confirmed first rather than assumed from the address.',
      },
      {
        q: 'What are the real constraints on rural land?',
        a: 'Septic capacity for a second dwelling and the length of service runs to a distant position. Together they can be a substantial share of the cost.',
      },
    ],
  },

  'new-miami': {
    intro:
      'ADU in New Miami? A tight village on the Great Miami. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'New Miami is its own village setting its own zoning, confirmed first. The mill-era plots are closely spaced and modest, and river-ground flood elevation requirements apply to a new dwelling. Between the two, a fair number of these parcels will not support one — and we would rather establish that quickly than run a feasibility process that was never going to work.',
    ],
    localFaqs: [
      {
        q: 'Is an ADU realistic here?',
        a: 'On a fair number of these parcels, no — closely spaced mill-era plots combined with river-ground flood elevation requirements. We establish that quickly.',
      },
      {
        q: 'Who governs the zoning?',
        a: 'The village of New Miami, confirmed directly rather than assumed from Hamilton next door or the county.',
      },
    ],
  },

  monroe: {
    intro:
      'ADU in Monroe? A city spanning two counties — the parcel decides. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Monroe straddles two counties, so confirming both the city’s position and which county applies to your specific parcel is part of the first check. The newer subdivisions have generous lots — favourable — while the older core has smaller plots. Subdivision covenants are the separate second check where an association exists.',
    ],
    localFaqs: [
      {
        q: 'Why does the county matter?',
        a: 'Monroe straddles Butler and Warren, so confirming which applies to your parcel is part of the first check alongside the city’s own position.',
      },
      {
        q: 'Are the newer subdivisions better?',
        a: 'Generally, for lot size and access. Where an association exists its covenants are a separate check that can restrict what zoning permits.',
      },
    ],
  },

  landen: {
    intro:
      'ADU in Landen? A planned community where covenants govern. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'A planned community with common areas typically has an association whose covenants govern what can be built, and those are frequently the decisive answer regardless of Warren County zoning. That check comes first here. Where homes are attached or closely grouped, the buildable envelope is also frequently minimal.',
    ],
    localFaqs: [
      {
        q: 'What is the first check in a planned community?',
        a: 'The association covenants, which typically govern what can be built and are frequently decisive regardless of county zoning.',
      },
      {
        q: 'Do attached homes rule it out?',
        a: 'Where homes are attached or closely grouped the buildable envelope is frequently minimal, which usually settles it before covenants even arise.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'ADU in Loveland Park? Warren County jurisdiction near the river. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'The correct Warren County or township authority is confirmed first — and worth distinguishing from the City of Loveland, which is a separate jurisdiction with different rules. The mid-century lots generally have workable depth. On the lower-lying streets nearer the Little Miami, flood elevation requirements affect a new dwelling.',
    ],
    localFaqs: [
      {
        q: 'Is this the same as the City of Loveland?',
        a: 'No — Loveland Park and the City of Loveland are separate jurisdictions with different rules. Confirming which governs your parcel is a genuine first step.',
      },
      {
        q: 'Does the river matter here?',
        a: 'On the lower-lying streets nearer the Little Miami, flood elevation requirements affect a new dwelling’s foundation and cost.',
      },
    ],
  },

  maineville: {
    intro:
      'ADU in Maineville? A growing Warren County town with rural edges. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'Whether the village or Warren County governs depends on the parcel, confirmed first. Three different settings sit within this postal code — a small historic core with modest plots, newer subdivisions with covenants to check, and rural properties where septic capacity is the constraint. Each is a different assessment.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which part of Maineville we are in?',
        a: 'Considerably — the historic core, the newer subdivisions and the rural properties are three different assessments with different constraints and sometimes different authorities.',
      },
      {
        q: 'What is the constraint on a rural parcel?',
        a: 'Usually septic capacity for a second dwelling rather than space, plus the length of service runs to a position away from the house.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'ADU in Pleasant Plain? Rural Warren County with room and septic limits. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'The village or county authority is confirmed first depending on the parcel. On the rural land around the village there is space in abundance, so the real questions are septic capacity for a second dwelling, service runs to a distant position, and equipment access. This is also one of the further corners of our area and we price the distance honestly.',
    ],
    localFaqs: [
      {
        q: 'What limits it out here?',
        a: 'Septic capacity for a second dwelling, the length of service runs to a distant position and equipment access. Space itself is rarely the constraint.',
      },
      {
        q: 'Do you work this far out?',
        a: 'Yes, with the distance priced honestly rather than absorbed. The feasibility assessment comes first regardless.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'ADU in South Lebanon? Warren County, and a growing town with covenants. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'The town or Warren County authority is confirmed first depending on the parcel. With this much new subdivision development, association covenants are frequently the decisive restriction rather than zoning — and they are a separate check worth making early. The historic core near the river brings flood considerations instead.',
    ],
    localFaqs: [
      {
        q: 'Are covenants likely to apply?',
        a: 'With this much new subdivision development, frequently — and they are a separate restriction from zoning that can be decisive. Worth checking early.',
      },
      {
        q: 'What about the historic core?',
        a: 'Smaller plots and, near the river, flood elevation requirements affecting a new dwelling’s foundation. A different assessment from the subdivisions.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'ADU in Lawrenceburg? Indiana rules, and a levee that does not settle it. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'This is Indiana — different state code administration entirely — with Lawrenceburg setting its own zoning on top. Neither follows Ohio practice. And the levee protects against the river without resolving how a new dwelling must sit relative to flood elevation requirements. All three are established before design rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Does the levee mean flood requirements do not apply?',
        a: 'No — it protects against the river, but how a new dwelling must sit relative to flood elevation requirements is a separate question that still has to be answered.',
      },
      {
        q: 'Do Ohio rules apply?',
        a: 'Not at all. Indiana code administration and Lawrenceburg’s own zoning, neither following Ohio practice. Both confirmed before design.',
      },
    ],
  },

  greendale: {
    intro:
      'ADU in Greendale? Indiana rules and a hillside to build on. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Greendale sets its own zoning under Indiana code administration, confirmed first. The hillside is the physical constraint — steep lots mean expensive foundations and difficult equipment access to rear gardens. Where a property has a flatter area with room inside its setbacks it is worth assessing properly, and above the river the flood questions fall away.',
    ],
    localFaqs: [
      {
        q: 'Do the hillside lots work?',
        a: 'Where a property has a flatter area with room inside its setbacks, yes. Steep lots mean expensive foundations and difficult equipment access, which we assess before quoting.',
      },
      {
        q: 'Which rules apply?',
        a: 'Indiana code administration and Greendale’s own zoning — neither following Ohio practice, and both confirmed before design.',
      },
    ],
  },

  aurora: {
    intro:
      'ADU in Aurora? Indiana rules, a historic town, and riverfront ground. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'Three layers apply: Indiana code administration, Aurora’s own zoning, and on riverfront parcels flood elevation requirements affecting a new dwelling’s foundation and cost. The 19th-century downtown plots are frequently narrow, while properties set back on higher ground are a better prospect. All established before design rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'What applies here?',
        a: 'Indiana code administration, Aurora’s own zoning, and on riverfront parcels flood elevation requirements affecting the foundation and cost. All established before design.',
      },
      {
        q: 'Which properties are the better prospect?',
        a: 'Those set back on higher ground with room inside their setbacks. The 19th-century downtown plots are frequently narrow once setbacks apply.',
      },
    ],
  },
};
