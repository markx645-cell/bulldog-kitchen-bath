import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /walk-in-tubs/[location].
 *
 * Fourth service over the same 170 places, so the angle set is deliberately
 * built from what only a walk-in tub involves: you sit inside it while it
 * fills and again while it drains, the door seal is the whole product, it
 * holds far more water than a standard tub, it weighs a great deal when full,
 * it will not tilt through a doorway, and the jets and heaters need their own
 * circuits. Plus the honest conversations — insurance rarely pays, it narrows
 * the buyer pool, and sometimes a level-entry shower is the better answer.
 *
 * Nothing that would restate bathroom-remodel, walk-in-showers or
 * tub-shower-combos belongs here.
 */
export const walkInTubsCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Walk-in tub in Sedamsville? Full of water it weighs far more than the tub it replaces. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'A walk-in tub is deeper than a standard one and holds substantially more water — and that load sits on an upstairs floor in a house whose joists have been notched by a century of plumbers. It is not usually a problem, but it is genuinely worth establishing rather than assuming. We look at what is carrying the bathroom before we specify a model, and where the structure needs reinforcing we say so at quotation rather than after.',
    ],
    localFaqs: [
      {
        q: 'Is our floor strong enough for a walk-in tub?',
        a: 'Usually, but it deserves checking in a house this age — a walk-in holds considerably more water than the tub it replaces. We look at the joists under the bathroom before specifying a model.',
      },
      {
        q: 'What if it needs reinforcing?',
        a: 'It is straightforward work while the floor is open, and it goes in the quote up front. What we will not do is set several hundred extra pounds on a floor without looking at it.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Walk-in tub in Sayler Park? These village-era bathrooms are small, and the door has to open somewhere. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'The constraint people do not anticipate is the door. An inward-swinging door saves floor space but narrows the opening you step through; an outward-swinging one gives a genuinely wide entry but needs clear floor in front of it, which a seven-foot bathroom may not have. That single choice decides whether the tub is usable in a small room, and it has to be made before anything is ordered.',
    ],
    localFaqs: [
      {
        q: 'Should the door swing in or out?',
        a: 'Outward gives a much wider opening and is easier to step through, but it needs clear floor in front. Inward saves space and narrows the entry. In a small bathroom that choice decides whether the tub works at all.',
      },
      {
        q: 'Will a walk-in tub even fit our bathroom?',
        a: 'Often, because they are made in shorter footprints than people expect. We measure the room and the door swing together rather than the alcove alone.',
      },
    ],
  },

  riverside: {
    intro:
      'Walk-in tub in Riverside? You sit in it while it fills and again while it drains — that is the whole design question. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'This is the part nobody explains before the sale. You open the door, step in, close it, and then the tub fills around you — and at the end you have to wait for it to drain before you can open the door and get out. Both are minutes spent sitting there, and if the supply is a corroded old line or the drain is slow, those minutes multiply. We measure the fill and drain rates your house can actually deliver before recommending a model.',
    ],
    localFaqs: [
      {
        q: 'How long do you sit waiting for it to fill and drain?',
        a: 'It depends entirely on your supply and drain. A few minutes each way with good flow and a fast-drain valve; considerably longer on a corroded old line. We measure both before recommending anything.',
      },
      {
        q: 'Can that wait be shortened?',
        a: 'Yes — a larger supply run to the tub, a fast-drain valve, and a heated seat so the wait is comfortable. All specified up front rather than discovered afterwards.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Walk-in tub in East Price Hill? In a two-family, the shared supply decides how fast it fills. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'Where two households draw from one original service line, a walk-in tub is the most demanding fixture in the building — it wants a large volume of hot water quickly, and it wants it while somebody upstairs may be running a shower. That is worth establishing before purchase rather than after. In many of these buildings the fix is a dedicated larger run to the bathroom, which is inexpensive while the wall is open.',
    ],
    localFaqs: [
      {
        q: 'Will a walk-in tub fill properly in a two-family?',
        a: 'It depends on the shared supply. A walk-in wants a lot of hot water quickly, so we measure the flow — and where it is marginal, a dedicated larger run to the bathroom usually solves it.',
      },
      {
        q: 'Will the other unit notice?',
        a: 'They may, while it fills. Knowing that in advance is better than finding out, and it is another reason we size the supply rather than assuming.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Walk-in tub in West Price Hill? Set against moving house, it is a modest sum for staying put. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'This is a neighbourhood where households stay for decades, and the bathroom is very often the thing that finally forces a move nobody wanted. Weighed against the cost of relocating — or of care — a walk-in tub is a small figure for keeping someone in a house they know, on a street they know. That is the honest argument for it, and it is a better one than anything about hydrotherapy.',
    ],
    localFaqs: [
      {
        q: 'Is a walk-in tub worth the cost?',
        a: 'Measured against moving house or paying for care, it is a modest sum — and that is the real argument for it. We would rather make that case plainly than sell you on features.',
      },
      {
        q: 'Does insurance or Medicare cover it?',
        a: 'Usually not. Standard Medicare does not treat a walk-in tub as durable medical equipment, and most insurers decline it. Anyone who tells you otherwise is guessing — check with your own plan before you budget around it.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Walk-in tub in Lower Price Hill? It will not tilt through a rowhouse door — we measure the route first. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'A walk-in tub is tall, rigid and cannot be angled the way a standard tub can — the door assembly and the high walls mean it comes in essentially upright or not at all. In a deep, narrow rowhouse with a turned stair, that is the first question rather than the last. We measure the whole route at survey: front door, hall width, stair turn, landing, bathroom door. Where a full-size unit will not make it, shorter models often will.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub get up a narrow rowhouse stair?',
        a: 'Often, but it has to be measured first — it will not tilt or angle the way a standard tub does. We check the whole route at survey rather than on delivery day.',
      },
      {
        q: 'What if it will not fit?',
        a: 'Shorter and narrower models exist and frequently solve it. Where nothing will make the turn, we say so before you have paid for anything.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Walk-in tub in Over-the-Rhine? The jets and heater need their own circuits, and the board needs to approve. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'A walk-in tub with air or water jets and a heated seat is an appliance as much as a fixture, and it needs dedicated GFCI-protected circuits back to the panel. In a converted building that means both an electrical route and association approval, since the work touches shared services. We establish what the panel can take and what the board requires before anything is ordered.',
    ],
    localFaqs: [
      {
        q: 'Does a walk-in tub need special electrical work?',
        a: 'With jets or a heated seat, yes — dedicated GFCI-protected circuits back to the panel. In an older converted building the panel’s capacity is the first thing we check.',
      },
      {
        q: 'Do we need association approval?',
        a: 'In most converted buildings here, yes — the work touches shared services and the waterproofing. We prepare what the board asks for and schedule to their access rules.',
      },
    ],
  },

  downtown: {
    intro:
      'Walk-in tub in Downtown Cincinnati? Getting it into a tower is the hardest part of the job. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'Of everything we install, a walk-in tub is the most awkward item to move — tall, rigid, heavy and unable to be laid flat without risking the door assembly. In a high-rise that means a booked dock, a freight elevator with the height to take it upright, and a corridor route measured in advance. We confirm the elevator’s internal height with building management before the order goes in, because that single dimension has stopped deliveries before.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub fit in a freight elevator?',
        a: 'Usually, but the internal height is the dimension that matters and it has to be confirmed rather than assumed. We check it with building management before ordering.',
      },
      {
        q: 'Can it be laid flat to fit?',
        a: 'We avoid it. The door and seal assembly is the whole product and it does not benefit from being loaded on its face. Where height is tight, a shorter model is the safer answer.',
      },
    ],
  },

  'west-end': {
    intro:
      'Walk-in tub in the West End? Sometimes a level-entry shower is the better answer, and we will say so. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'A walk-in tub is right for someone who wants to bathe and cannot manage a tub wall. It is not automatically right for someone who mainly showers, or who uses a walker, or who would struggle to sit and rise from a low seat. For those situations a level-entry shower with a bench is cheaper, quicker and often genuinely better. We ask how the person actually washes before recommending either — it is the question that decides the whole job.',
    ],
    localFaqs: [
      {
        q: 'Walk-in tub or level-entry shower?',
        a: 'A tub if bathing matters and the tub wall is the barrier. A level-entry shower if the person mainly showers, uses a walker, or finds sitting and rising difficult. We ask how they actually wash before recommending either.',
      },
      {
        q: 'Which is cheaper?',
        a: 'Usually the shower, and it is quicker to install. We will tell you that even when the tub is the larger contract.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Walk-in tub in Mount Adams? Steep streets, narrow stairs, and a fixture that will not bend. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'The hill compounds every access problem this product has. Parking within reach of the door is limited, the houses are tall and narrow, and a walk-in tub cannot be tilted around a stair turn the way a standard tub can. We walk the full route on the site visit and confirm it against the specific model’s dimensions before ordering — which is why we hold the dates we give rather than discovering a problem on delivery morning.',
    ],
    localFaqs: [
      {
        q: 'Can you get a walk-in tub into a Mount Adams townhouse?',
        a: 'Often, with the route measured against the specific model first. Stair width and the landing turn decide it, and a walk-in will not angle through the way a standard tub does.',
      },
      {
        q: 'Is delivery access a real problem here?',
        a: 'It is a planning problem rather than a barrier. We book parking and a delivery window in advance because improvising on the hill does not work.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Walk-in tub in Mount Auburn? In a subdivided house, think about who else uses the bathroom. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'A walk-in tub suits the person it was bought for and is genuinely awkward for everyone else — the high walls make it poor for showering standing up, and the door seal means it cannot be left part-filled. Where a bathroom serves more than one person, or where a unit may be let to someone else later, that matters. A second bathroom, or a shower elsewhere in the house, changes the calculation entirely.',
    ],
    localFaqs: [
      {
        q: 'Can other people still use the bathroom normally?',
        a: 'They can, but a walk-in tub is awkward to shower in standing up because of the high walls. Where a bathroom serves several people, that is worth weighing before committing.',
      },
      {
        q: 'Does it affect letting the property later?',
        a: 'It narrows the pool. A walk-in tub is a strong feature for the right tenant or buyer and a drawback for others — we would rather say that plainly.',
      },
    ],
  },

  clifton: {
    intro:
      'Walk-in tub in Clifton? These big Victorian bathrooms leave room for a carer to stand. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Where somebody is being helped rather than bathing alone, the space beside the tub matters as much as the tub. A carer needs somewhere to stand at the door side without reaching across, room for a transfer chair or a walker to be parked, and a floor that is safe when wet. Bathrooms in these houses are frequently generous enough to plan all of that properly — which is a real advantage and worth using rather than defaulting to the tub in the existing alcove.',
    ],
    localFaqs: [
      {
        q: 'How much space is needed beside the tub?',
        a: 'Enough for someone to stand at the door side without reaching across, and to park a walker or transfer chair. In a bathroom this size we can plan that properly rather than squeezing the tub into the old alcove.',
      },
      {
        q: 'Does the flooring need to change too?',
        a: 'Often it should. A genuinely slip-resistant floor matters more here than anywhere, and it is far cheaper done alongside the tub than afterwards.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Walk-in tub in Corryville? Near the hospitals, we are often called after a diagnosis rather than before. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'A lot of the enquiries we take near the uptown hospitals come with a deadline attached — a diagnosis, a surgery date, someone coming home. That changes what matters. Walk-in tubs are frequently made to order and lead times are real, so the first thing we do is tell you honestly whether the date is achievable, and what the quicker alternatives are if it is not. A level-entry shower can often be done in a fraction of the time.',
    ],
    localFaqs: [
      {
        q: 'How quickly can a walk-in tub be installed?',
        a: 'Longer than people hope — many are made to order, so the lead time is weeks rather than days. If you have a fixed date, tell us at the first call and we will be honest about whether it works.',
      },
      {
        q: 'What if we need something sooner?',
        a: 'A level-entry shower with a bench and grab bars is quicker and often genuinely better for someone using a walker. We will say so rather than selling you the slower option.',
      },
    ],
  },

  northside: {
    intro:
      'Walk-in tub in Northside? It does not have to look like a hospital fitting. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The reason people put off a walk-in tub is rarely the function — it is that they picture a clinical white box announcing something about the person using it. That is a specification problem rather than an inevitability. The surround can be tiled to match the rest of the room, the fittings can be a finish you actually chose, and the grab bars can be the same metal as the tap. It still does everything it needs to do.',
    ],
    localFaqs: [
      {
        q: 'Do walk-in tubs have to look clinical?',
        a: 'No. The surround can be tiled to match the room, the fittings can be a finish you chose, and the bars can match the tap. The function is unchanged.',
      },
      {
        q: 'Can it be tiled in rather than left as a plastic box?',
        a: 'Yes, with an access panel designed in so the pump and valves stay reachable. That last part is what gets forgotten when someone tiles one in.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Walk-in tub in College Hill? The seat height decides whether someone can actually rise from it. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'Walk-in tubs are sold on getting in. Getting up is the harder problem, and it is decided by the seat height, which varies more between models than anyone expects. A seat too low is exactly as much of a barrier as a tub wall was — worse, because you are wet. We would rather have the person sit on something of the same height before choosing a model than have them discover it after installation.',
    ],
    localFaqs: [
      {
        q: 'Which seat height is right?',
        a: 'The one the person can rise from unaided while wet. It varies between models more than people expect, so we compare against a seat of the same height before choosing rather than after.',
      },
      {
        q: 'Do grab bars help with standing up?',
        a: 'Considerably, when they are placed for that specific movement rather than generically. We position them for how the person actually rises.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Walk-in tub in Walnut Hills? The door seal is the entire product — everything else is trim. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Every walk-in tub is a bathtub with a hole cut in it, and the door seal is what stands between that and your floor. It is the one component where the difference between a good unit and a cheap one is unarguable — gasket quality, latch mechanism, how squarely the door sits after a thousand cycles. In an upstairs bathroom over original plaster and joinery, that is not somewhere to save money, and we will not quote a unit we would not put in our own house.',
    ],
    localFaqs: [
      {
        q: 'What happens if the door seal fails?',
        a: 'Water on the bathroom floor while someone is sitting in a tub they cannot leave until it drains. It is the reason the seal and latch are the components we will not economise on.',
      },
      {
        q: 'How long does a seal last?',
        a: 'Years, on a quality unit, and it is a replaceable part rather than a whole-tub failure. Cheap gaskets and flimsy latches are what turn it into a real problem.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Walk-in tub in East Walnut Hills? Plan how the pump gets serviced before it is tiled in. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'A walk-in tub with jets has a pump, a blower and a control board, and all of them will need attention at some point in the next fifteen years. How that goes was decided at installation. A removable access panel — set out with the tiling so it is invisible — turns a service call into an hour. A unit tiled solidly in means breaking finished work to reach a part that costs very little.',
    ],
    localFaqs: [
      {
        q: 'How is the pump reached if it fails?',
        a: 'Through a removable access panel designed in at installation and set out with the tiling so it is invisible. Without one, a service call starts by breaking finished tile.',
      },
      {
        q: 'How do you protect the rest of the house during installation?',
        a: 'A planned route with hard floor protection and a sealed dust barrier. In houses with original floors and joinery that setup is part of the job rather than an extra.',
      },
    ],
  },

  avondale: {
    intro:
      'Walk-in tub in Avondale? An old galvanised supply will not fill it in any reasonable time. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'A walk-in tub asks more of a supply line than any other fixture in the house — a large volume, quickly, while somebody sits waiting inside it. Century-old galvanised pipe has corroded inward to a fraction of its original bore, and on a line like that the fill time becomes genuinely unpleasant. Replacing the run serving the bathroom while the wall is open is inexpensive and it is the difference between a tub someone uses and one they avoid.',
    ],
    localFaqs: [
      {
        q: 'Will an old house fill a walk-in tub fast enough?',
        a: 'Not on corroded galvanised pipe. Since you sit inside while it fills, that wait matters more than with any other fixture — so we measure the flow before recommending a model.',
      },
      {
        q: 'Does the whole house need repiping?',
        a: 'Usually not. Replacing the run that serves the bathroom while the wall is open solves it, and we will say plainly if the rest genuinely needs doing.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Walk-in tub in Hyde Park? A deep soaking model can outrun a standard water heater in one fill. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'Walk-in tubs hold substantially more water than the tubs they replace, and the deeper soaking models more again. A standard tank can be emptied by a single fill — which means the last of the water arriving cool while somebody is already sitting in it. We total the tub’s volume against the heater’s capacity before specifying, and where the numbers do not work we say so. Sometimes that means a different model, sometimes a larger or on-demand heater.',
    ],
    localFaqs: [
      {
        q: 'Will our water heater fill a walk-in tub?',
        a: 'It has to be checked. A walk-in holds far more than a standard tub, and a single fill can empty a standard tank — leaving the last of it cool while someone sits waiting.',
      },
      {
        q: 'What if it will not?',
        a: 'Either a smaller-volume model, or the heater is upgraded as part of the project. We price both rather than installing something that will disappoint.',
      },
    ],
  },

  oakley: {
    intro:
      'Walk-in tub in Oakley? A heated seat is not a luxury — it is what makes the wait bearable. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'Because you sit in the tub while it fills and again while it drains, you spend several minutes wet and not submerged. In an unheated bungalow bathroom in February that is genuinely cold, and it is the single most common complaint from people who bought a walk-in tub without one. A heated seat and backrest cost relatively little and change whether the tub gets used in winter at all.',
    ],
    localFaqs: [
      {
        q: 'Is a heated seat worth the extra?',
        a: 'In an older house, yes. You sit wet and not submerged for several minutes at each end of the bath, and in winter that is cold enough to put people off using the tub entirely.',
      },
      {
        q: 'What else makes the wait shorter?',
        a: 'A fast-drain valve and an adequately sized supply run. Together they take minutes off both ends, which matters more than any other feature.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Walk-in tub in Mount Lookout? On an upper floor, the filled weight is a structural question. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'A walk-in tub full of water and a person concentrates a substantial load on a small area of an upper floor — noticeably more than the tub it replaces, because the volume is greater. Whether that matters depends on joist size, span and direction, and on what a century of plumbing alterations has already removed. We look under the floor before specifying rather than after, and where reinforcement is needed it appears on the quote.',
    ],
    localFaqs: [
      {
        q: 'Is the floor a real concern upstairs?',
        a: 'Worth establishing rather than assuming. A walk-in holds more water than the tub it replaces, and older joists have often been notched by previous plumbing work.',
      },
      {
        q: 'How do you check?',
        a: 'From below where there is access, or by opening a small area of floor. It is a short job and it is the only way to price the work honestly.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Walk-in tub in Columbia-Tusculum? It can be built into a period bathroom without dominating it. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'People who have restored a house carefully are reasonably reluctant to put a large moulded appliance in the middle of it. The way through is treating the tub as joinery: a tiled or panelled surround detailed to the room, fittings in a period-appropriate finish, and the bulk broken up rather than left as a single white mass. It costs more than dropping the unit in as supplied, and in a house like this it is usually worth it.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub suit a Victorian bathroom?',
        a: 'Yes, treated as joinery rather than an appliance — a panelled or tiled surround, period-appropriate fittings, and the bulk broken up. It costs more than dropping the unit in as supplied.',
      },
      {
        q: 'Does the riverside ground affect the installation?',
        a: 'It makes the floor structure worth checking before setting a filled walk-in tub on it, particularly in an older house on lower ground.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Walk-in tub in Mount Washington? A bath uses far more hot water than a shower — plan for that. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'A household switching from showers to daily baths in a walk-in tub is making a real change to its hot water demand, and in a house with one ageing tank that shows up quickly. It is worth knowing before rather than after — sometimes it means a larger heater, sometimes it just means the bath happens at a different time of day. We would rather set that expectation than have the tub blamed for it.',
    ],
    localFaqs: [
      {
        q: 'Will daily baths strain our hot water?',
        a: 'They can, particularly on an older tank. It is worth planning for — sometimes with a larger heater, sometimes just by shifting when the bath happens.',
      },
      {
        q: 'Does the extractor need upgrading too?',
        a: 'Usually. A filled tub puts steady moisture into the room, and the original fan in this housing was undersized for it.',
      },
    ],
  },

  madisonville: {
    intro:
      'Walk-in tub in Madisonville? Be clear-eyed about what it does to resale. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'In a neighbourhood where people are weighing the house as an asset, this deserves saying plainly: a walk-in tub is a strong feature for a specific buyer and a drawback for many others, particularly younger families who want a normal tub. If the house has two bathrooms, putting the walk-in in one and leaving the other conventional removes the problem entirely. If it has one, it is a real tradeoff and we would rather you weighed it now.',
    ],
    localFaqs: [
      {
        q: 'Will a walk-in tub hurt resale?',
        a: 'It narrows the buyer pool, particularly with younger families. Where a house has two bathrooms, putting it in one and keeping the other conventional avoids the question entirely.',
      },
      {
        q: 'Can it be removed later?',
        a: 'Yes, and replaced with a standard tub — but it is a full bathroom job again rather than a swap. Better to think about which bathroom it goes in now.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Walk-in tub in Pleasant Ridge? A scald in a tub you cannot quickly leave is the risk worth engineering out. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'In an ordinary bath you can stand up. In a walk-in tub you cannot leave until it drains, which makes water temperature a genuine safety matter rather than a comfort one. A thermostatic valve with a hard limit stop holds the setting regardless of what happens elsewhere in the house — and in a two-family, where a neighbour drawing cold can swing the mix, it is not optional. We fit one as standard rather than as an upgrade.',
    ],
    localFaqs: [
      {
        q: 'Why does the valve matter more on a walk-in tub?',
        a: 'Because you cannot stand up and step out — the tub has to drain first. A thermostatic valve with a limit stop holds temperature regardless of what is drawn elsewhere in the building.',
      },
      {
        q: 'Is that included or an upgrade?',
        a: 'Standard on our installations. It is not a feature we would leave out to make a number look better.',
      },
    ],
  },

  westwood: {
    intro:
      'Walk-in tub in Westwood? Soaker, air jets or water jets — they are genuinely different products. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Across this much housing we fit all three, and the difference matters. A plain soaker is simplest, cheapest and has nothing to service. Air jets blow warm air through the water — gentler, and the system self-purges after use. Water jets recirculate bathwater through pipework, which is the most vigorous and the one that genuinely needs its cleaning cycle run. Choosing on price alone is how people end up with a system they do not maintain.',
    ],
    localFaqs: [
      {
        q: 'Soaker, air jets or water jets?',
        a: 'A soaker if you want simplicity and nothing to service. Air jets for a gentler massage that self-purges. Water jets for the most vigorous, accepting that the pipework needs its cleaning cycle run.',
      },
      {
        q: 'Do water jets get dirty inside?',
        a: 'They can if the cleaning cycle is never run, because they recirculate bathwater through pipework. It is manageable — but if nobody will do it, air jets or a plain soaker is the honest recommendation.',
      },
    ],
  },

  norwood: {
    intro:
      'Walk-in tub in Norwood? Norwood issues its own permits, and this job needs one. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'This is a permitted job in almost every case — the plumbing is altered and, with jets or a heated seat, dedicated circuits are added. Both need inspection, and here that runs through the City of Norwood rather than Cincinnati, whatever the postal address suggests. We confirm the authority and file before scheduling, because a finished installation waiting on the wrong inspector helps nobody.',
    ],
    localFaqs: [
      {
        q: 'Does a walk-in tub need a permit?',
        a: 'Almost always — the plumbing is altered and dedicated electrical circuits are usually added. Both are inspected, and in Norwood that runs through the city itself rather than Cincinnati.',
      },
      {
        q: 'Do you handle the filing?',
        a: 'Yes, as part of the job. We confirm the authority before scheduling rather than assuming.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Walk-in tub in Blue Ash? The garden tub nobody uses is the natural place for it. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'The subdivision housing here came with a large corner garden tub that has been used a handful of times in thirty years, and it is frequently the ideal position for a walk-in. The footprint is generous, the drainage is already in that zone, and there is usually room beside it for someone to help. Better still, the hall bath keeps a conventional tub — which answers the resale question before it is asked.',
    ],
    localFaqs: [
      {
        q: 'Can the garden tub be replaced with a walk-in?',
        a: 'It is often the ideal position — generous footprint, drainage already in that zone, and room beside it for someone to assist. The hall bath then keeps a conventional tub.',
      },
      {
        q: 'Does that solve the resale concern?',
        a: 'Largely. A house with a walk-in in the primary suite and a normal tub in the hall bath suits far more buyers than one with only a walk-in.',
      },
    ],
  },

  montgomery: {
    intro:
      'Walk-in tub in Montgomery? A larger tub needs a bigger heater — plan them together. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'At this end of the market people choose the deeper, wider models with full hydrotherapy — and those hold a great deal of water. A single fill can exceed what a conventional tank stores, which means the last of the bath arriving cool. The answer is usually to plan the tub and the water heater as one project rather than discovering the shortfall afterwards. Sometimes that is a larger tank; sometimes an on-demand unit sized to the tub.',
    ],
    localFaqs: [
      {
        q: 'Do we need a bigger water heater?',
        a: 'For the larger hydrotherapy models, frequently yes — a single fill can exceed a conventional tank. We total the volume against your capacity before specifying and price both together.',
      },
      {
        q: 'Is an on-demand heater a better answer?',
        a: 'Sometimes, if it is sized for the flow the tub wants. It is not automatically better, and we will give you the honest comparison rather than the bigger sale.',
      },
    ],
  },

  madeira: {
    intro:
      'Walk-in tub in Madeira? Here is what the installation day actually looks like. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Households here usually stay in the house while we work, so it is worth knowing the shape of it. This is not a one-day job like a standard tub swap: the old tub comes out, the floor and framing are checked and prepared, the new unit is set and levelled precisely, plumbing and dedicated circuits are run, and the surround is built. Two to three days on site is typical, and the water is off for part of that rather than all of it.',
    ],
    localFaqs: [
      {
        q: 'How long does a walk-in tub installation take?',
        a: 'Typically two to three days on site — longer than a standard tub swap, because the unit has to be set and levelled precisely and dedicated circuits are usually run.',
      },
      {
        q: 'Can we stay in the house?',
        a: 'Almost always. The work is contained behind a dust barrier and the water is off for part of the time rather than throughout. We give you the shut-off windows in advance.',
      },
    ],
  },

  wyoming: {
    intro:
      'Walk-in tub in Wyoming? In these big Victorians the radiator is often exactly where the tub wants to go. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'Houses of this era are heated by cast-iron radiators fed from below, and in a bathroom the radiator has a habit of occupying the one wall that would otherwise take a walk-in tub and its door swing. Moving it is possible but it is a heating alteration on a century-old system, not just a plumbing one. We settle that early, because the answer reshapes the whole layout — and a bathroom this size usually has more than one workable option.',
    ],
    localFaqs: [
      {
        q: 'Can the radiator be moved to make room?',
        a: 'Sometimes, but it is a heating alteration on a century-old system rather than a plumbing one. We assess it early because the answer changes which layouts are available.',
      },
      {
        q: 'What heats the room instead?',
        a: 'Usually a slimmer panel elsewhere or underfloor heating under the new floor. Underfloor is the neater answer in a bathroom and it frees the wall entirely.',
      },
    ],
  },

  mariemont: {
    intro:
      'Walk-in tub in Mariemont? The Landmark status governs the exterior — the bathroom is yours. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Owners here reasonably ask whether they are allowed to install something like this, and the answer is yes — the review that comes with the designation concerns what is visible from outside. What the 1920s construction does affect is practical: compact original bathrooms where the door swing has to be planned carefully, and floor structure worth checking before a filled walk-in tub sits on it.',
    ],
    localFaqs: [
      {
        q: 'Does Mariemont’s historic status prevent a walk-in tub?',
        a: 'No — the review concerns what is visible from outside the house. Interior work is yours to decide.',
      },
      {
        q: 'Will one fit a 1920s Mariemont bathroom?',
        a: 'Often, using a shorter model and planning the door swing carefully. These rooms are compact, so we measure the swing and the clear floor together.',
      },
    ],
  },

  cheviot: {
    intro:
      'Walk-in tub in Cheviot? A plain soaker fitted properly beats a jetted one fitted badly. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'On this housing the top of the range rarely makes sense, and we will say so. A well-made soaker with a good door seal, a thermostatic valve, a fast-drain and a heated seat does everything that matters — and it costs considerably less than the same tub with hydrotherapy nobody ends up using. Money is better spent on the seal, the valve and the supply than on jets.',
    ],
    localFaqs: [
      {
        q: 'Do we need the jets?',
        a: 'Only if they will genuinely be used. A good soaker with a solid door seal, a thermostatic valve, fast-drain and a heated seat covers everything that matters day to day.',
      },
      {
        q: 'Where should the money go instead?',
        a: 'The door seal and latch, the valve, and an adequately sized supply run. Those decide whether the tub is safe and pleasant; jets do not.',
      },
    ],
  },

  covedale: {
    intro:
      'Walk-in tub in Covedale? A second bathroom changes the whole calculation. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'The single most useful thing a household can have before installing a walk-in tub is somewhere else to wash. It removes the pressure of a two-to-three day install, it means the rest of the family is not working around a tub that suits one person, and it protects resale. Where a house has a half bath with space and drain access, adding a shower to it before the walk-in goes in is frequently the better first move.',
    ],
    localFaqs: [
      {
        q: 'Should we add a second bathroom first?',
        a: 'Where there is a half bath with space and drain access, often yes. It removes the pressure during installation, suits the rest of the household, and protects resale.',
      },
      {
        q: 'Can both be done together?',
        a: 'Yes, and it is cheaper than two separate projects — one mobilisation, one permit process. We will price it both ways.',
      },
    ],
  },

  covington: {
    intro:
      'Walk-in tub in Covington? Kentucky permitting, and a rowhouse bathroom that decides the model. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Two things shape the job here. Permitting and inspection run under Kentucky rules rather than Ohio, which we confirm before a start date is agreed. And MainStrasse and Licking Riverside bathrooms are narrow, later insertions into deep houses — which usually means a shorter model with an inward-opening door, chosen against the room rather than from a brochure.',
    ],
    localFaqs: [
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, and we confirm the requirements before scheduling.',
      },
      {
        q: 'Will one fit a narrow rowhouse bathroom?',
        a: 'Often, with a shorter model and the door swing planned against the actual floor space. We measure the swing and the clearance together rather than the alcove alone.',
      },
    ],
  },

  newport: {
    intro:
      'Walk-in tub in Newport? East Row bathrooms are often on the third floor — that is the first question. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'East Row houses are tall and narrow, and the bathroom is frequently two or three floors up a turned stair. That matters twice over for this product: the tub has to get up there without tilting, and the person it is for has to get up there too. Where the stairs are already the barrier, a walk-in tub upstairs solves the wrong problem — and relocating a bathroom to the ground floor is the conversation worth having instead.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub go up to a third-floor bathroom?',
        a: 'Sometimes, with the stair measured against the specific model. But if the stairs are already difficult for the person, a tub at the top of them solves the wrong problem.',
      },
      {
        q: 'What is the alternative?',
        a: 'A bathroom on the ground floor, where the layout allows. It is a bigger project and frequently the right one — we will tell you that rather than selling the tub.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Walk-in tub in Bellevue? The old tub is built into the wall, and the new one is taller. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'In houses of this age the tub went in before the walls were finished, with plaster and tile built down over its rim. A walk-in tub is considerably taller, so the wall has to be cut back further than a like-for-like swap would need — and in a house where what is above that line is original, where the cut lands is a decision rather than an accident. We plan it before starting so the new surround meets it deliberately.',
    ],
    localFaqs: [
      {
        q: 'Why is more wall removed than for a normal tub?',
        a: 'A walk-in is much taller, so the surround has to run higher — and in these houses the old wall was finished down over the tub rim. We plan where that cut lands rather than discovering it.',
      },
      {
        q: 'Will the original wall above survive?',
        a: 'Where it is sound, yes, with the cut planned and the new surround detailed to meet it. Some making-good at the edges is normal in a house this age and it is in the quote.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Walk-in tub in Fort Thomas? Hard water and hydrotherapy pipework do not mix well. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Where water is hard, scale builds inside jetted pipework the same way it does in a kettle — and unlike a kettle, you cannot see it. Over years that narrows the jets and reduces flow, and the cleaning cycle becomes essential rather than optional. It is a genuine argument for an air-jet system over water jets, or for a plain soaker, and it is worth weighing before choosing rather than afterwards.',
    ],
    localFaqs: [
      {
        q: 'Does hard water affect a jetted tub?',
        a: 'Yes — scale builds inside pipework you cannot see, narrowing jets over time. It makes running the cleaning cycle essential, and it is a real argument for air jets or a plain soaker.',
      },
      {
        q: 'Would a softener help?',
        a: 'It would, throughout the house. We will give you a straight view on whether it is worth it rather than selling equipment.',
      },
    ],
  },

  florence: {
    intro:
      'Walk-in tub in Florence? A one-piece surround has to come out in pieces first. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'A great many homes here have a one-piece moulded tub-and-surround, installed before the walls were finished and physically larger than the doorway. It cannot leave whole, so removal means cutting it into sections in place — routine work, but it generates real debris and it takes longer than pulling out a freestanding tub. It is in the quote from the start rather than raised on the day.',
    ],
    localFaqs: [
      {
        q: 'How does a one-piece tub and surround come out?',
        a: 'Cut into sections in place, because it was installed before the walls were and will not fit back through the door. Routine, but it takes longer than removing a standard tub.',
      },
      {
        q: 'Is there a lot of mess?',
        a: 'Not with the dust barrier and floor protection in first, which is standard for us. The debris is bulky rather than fine and it leaves the same day.',
      },
    ],
  },

  erlanger: {
    intro:
      'Walk-in tub in Erlanger? A fast-drain valve is the upgrade people notice most. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Of every option on a walk-in tub, the one that changes daily use most is the drain. A standard gravity drain on an older waste line can leave someone sitting several minutes waiting to open the door, wet and cooling. A fast-drain valve paired with an adequately sized waste run cuts that substantially. It is not glamorous and it matters more than the jets.',
    ],
    localFaqs: [
      {
        q: 'Is a fast-drain worth the extra?',
        a: 'It is the option that changes daily use most. Waiting several minutes to open the door while wet and cooling is what puts people off using the tub — a fast-drain cuts that substantially.',
      },
      {
        q: 'Does the waste line matter too?',
        a: 'Considerably. A fast-drain valve on an undersized or partly blocked waste run does not achieve much, so we check the line rather than just fitting the valve.',
      },
    ],
  },

  mason: {
    intro:
      'Walk-in tub in Mason? Newer houses make this straightforward — and that keeps the cost down. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'This is the easiest housing we install into. The floor structure is modern and predictable, the supply lines are copper or PEX in serviceable condition, and the panel usually has capacity for the dedicated circuits without an upgrade. That removes most of the unknowns that add cost elsewhere, so more of the budget goes into the tub itself and the surround rather than into preparing the house to take it.',
    ],
    localFaqs: [
      {
        q: 'Is installation simpler in a newer house?',
        a: 'Considerably. Modern floor structure, serviceable supply lines and a panel with capacity for the dedicated circuits remove most of the unknowns that add cost in older housing.',
      },
      {
        q: 'Will the panel take the extra circuits?',
        a: 'Usually in a house of this age, but we check rather than assume — jets and a heated seat both want dedicated GFCI protection.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Walk-in tub in West Chester? Planning ahead costs far less than reacting to a fall. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'Most of the walk-in tubs we install are bought after something happened. The ones bought before are cheaper, less rushed, and get the model chosen properly rather than whatever has the shortest lead time. If someone in the house is heading that way, doing it while there is no deadline means comparing seat heights, planning the door swing, and getting the water heater right — none of which is possible in a fortnight.',
    ],
    localFaqs: [
      {
        q: 'Is it worth installing one before it is needed?',
        a: 'Considerably. Without a deadline you can compare seat heights, plan the door swing and sort the water heater properly — none of which is possible when it is urgent.',
      },
      {
        q: 'What if we are not sure yet?',
        a: 'Then blocking behind the tile for future grab bars, and a floor with real slip resistance, cost very little now and keep the options open.',
      },
    ],
  },

  pendleton: {
    intro:
      'Walk-in tub in Pendleton? A loft floor and a filled walk-in tub deserve a look first. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'Loft conversions here sit on heavy timber specified for warehouse loading, which sounds reassuring — but the decking between beams, and the alterations made during conversion, are less predictable. A filled walk-in tub is a concentrated live load in one corner of a room. We establish what is actually under the bathroom before setting one there, and the building will usually want to see that too.',
    ],
    localFaqs: [
      {
        q: 'Can a converted loft floor take a walk-in tub?',
        a: 'Often, but it is worth establishing rather than assuming — the original beams are heavy, the decking and conversion alterations less predictable. The building will usually want that confirmed too.',
      },
      {
        q: 'Do we need board approval?',
        a: 'In most converted buildings here, yes — the work touches shared services, the waterproofing and often the electrical supply. We prepare what the board asks for.',
      },
    ],
  },

  queensgate: {
    intro:
      'Walk-in tub in Queensgate? Mostly a working district — here is the honest answer. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers, and Queensgate is a working district more than a residential one — so we would rather set the expectation plainly. Where there is a residence here, typically a live-work or converted space, we do the same work we do anywhere: the same fixed price, the same in-house installers, the same warranty. For a commercial or care facility we are not the right firm, and we will say so on the phone.',
    ],
    localFaqs: [
      {
        q: 'Do you actually work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here.',
      },
      {
        q: 'Can you fit walk-in tubs in a care facility?',
        a: 'No. We are residential remodelers, and commercial installations carry requirements we are not set up for. We would rather say so than take the work.',
      },
    ],
  },

  cuf: {
    intro:
      'Walk-in tub in CUF? In a subdivided house, one bathroom cannot suit everybody. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'Most of the housing here serves tenants who want a shower, so a walk-in tub is the wrong fixture for the majority of these units — and we would say so rather than take the order. Where it makes sense is an owner-occupied unit, or a building where one accessible unit is a deliberate letting decision. That is a real strategy; installing them broadly here is not.',
    ],
    localFaqs: [
      {
        q: 'Do walk-in tubs suit rental units?',
        a: 'Rarely near campus, where tenants want a shower. Where it makes sense is an owner-occupied unit or one accessible unit as a deliberate letting decision — not across a building.',
      },
      {
        q: 'What would you fit in a rental instead?',
        a: 'A level-entry shower with blocking for grab bars. It suits far more tenants and costs less.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Walk-in tub in Camp Washington? Low ceilings and a tall tub need checking together. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The upper floors of these cottages have low ceilings, and a walk-in tub is a tall object that has to be tipped upright to get through a door and then stood in position. Where the ceiling is under about seven feet, or the bathroom sits under a roof slope, that manoeuvre needs checking against the actual model before it is ordered. It is a dimension nobody thinks to measure until it is a problem on the landing.',
    ],
    localFaqs: [
      {
        q: 'Can a tall walk-in tub fit under a low ceiling?',
        a: 'It usually stands fine — the difficulty is tipping it upright through a doorway in a low room. We check that clearance against the specific model before ordering.',
      },
      {
        q: 'What about a bathroom under a roof slope?',
        a: 'Workable, but the standing height at the door side has to be planned. We measure where the person will actually step in rather than at the middle of the room.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Walk-in tub in South Fairmount? It empties a large volume at once — the line has to take it. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'A walk-in tub holds more water than a standard one and, with a fast-drain, releases it faster. That surge is what finds a partly blocked lateral or an undersized waste run — and here it matters more than usual, because someone is sitting inside waiting for it to clear. In a valley with this drainage history we would rather establish the condition of the line before installing than be called back after the first bath.',
    ],
    localFaqs: [
      {
        q: 'Could a walk-in tub overwhelm our drain?',
        a: 'It will not cause a problem, but it will reveal one — it releases more water faster than a standard tub. Where there is any history of slow drains, the lateral is worth checking first.',
      },
      {
        q: 'Why does that matter more with this tub?',
        a: 'Because you sit inside waiting for it to drain before the door will open. A slow line is not just an inconvenience here.',
      },
    ],
  },

  'east-end': {
    intro:
      'Walk-in tub in the East End? In a river cottage the bathroom is usually a light rear addition. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'In the older cottages the bathroom is nearly always a later addition tacked onto the back, built lighter than the original house and sometimes on a shallower foundation. A walk-in tub full of water is exactly the load that finds the limits of that construction. Before one goes into a room like that, the floor structure gets checked properly and frequently stiffened — and where it cannot be, we say so.',
    ],
    localFaqs: [
      {
        q: 'Can a rear addition take a walk-in tub?',
        a: 'Often, with the floor checked and frequently stiffened first. These additions were built lighter than the main house, and a filled walk-in is a substantial concentrated load.',
      },
      {
        q: 'What if the structure will not take it?',
        a: 'We will tell you honestly, including when the right answer is a level-entry shower instead — far lighter and often better suited to the person anyway.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Walk-in tub in North Fairmount? We will tell you the price range before you sit through a demonstration. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'This is a product sold badly by a lot of firms — long in-home presentations, pressure to sign the same evening, and prices that only appear at the end. We would rather give you a range on the phone and let you decide whether to have us out at all. The number depends on the model, whether the floor needs work and whether the supply and panel can take it, and we will say which of those apply to your house before quoting.',
    ],
    localFaqs: [
      {
        q: 'Will we get a price without a long sales visit?',
        a: 'Yes. We will give you a realistic range on the phone and explain what would move it. There is no presentation and no same-evening discount.',
      },
      {
        q: 'What actually changes the price?',
        a: 'The model, whether the floor needs reinforcing, whether the supply run and electrical panel can take it, and the surround. We identify which apply at the site visit.',
      },
    ],
  },

  evanston: {
    intro:
      'Walk-in tub in Evanston? Where the bars go depends on how the person actually moves. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'Grab bars fitted to a standard layout are decoration. Bars that work are placed for the specific movements this person makes — the hand they lead with stepping through the door, where they reach to lower themselves onto the seat, what they push against to rise. That means watching, or at least asking, before drilling. It costs nothing extra and it is the difference between a bar that gets used and one that gets ignored.',
    ],
    localFaqs: [
      {
        q: 'Where should the grab bars go?',
        a: 'Placed for how this person actually moves — which hand leads through the door, where they reach to sit, what they push against to stand. Standard placements are guesswork.',
      },
      {
        q: 'Can bars be added later?',
        a: 'Only safely where blocking went in behind the surround first. We fit blocking whether or not the bars go up on day one.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Walk-in tub in South Cumminsville? On a slab, the drain position is set in concrete. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Where a bathroom sits on a ground-floor slab, the existing waste and trap are cast into it — and a walk-in tub rarely has its outlet in the same place as the tub coming out. Where it does not line up, that means saw-cutting, trenching and repouring. It is routine work with a real cost, and it belongs in the quote from the start. We match the outlet position against the existing waste before ordering wherever we can.',
    ],
    localFaqs: [
      {
        q: 'What if our bathroom is on a concrete slab?',
        a: 'Then the existing waste is cast into it. Where the new tub’s outlet does not line up, it means saw-cutting and repouring — routine but not free, and it goes in the quote up front.',
      },
      {
        q: 'Can that be avoided?',
        a: 'Sometimes, by choosing a model whose outlet matches the existing position. It is worth checking before falling for a particular tub.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Walk-in tub in English Woods? A bar screwed into tile alone will pull out. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Stepping through a walk-in tub door is the least stable moment in the whole bathroom — one foot over a threshold, wet, with something to grip being the difference. A bar fixed into tile and board will let go under exactly that load. One that works is anchored into blocking set between the studs before the surround closed, rated for a genuine fall rather than a steadying hand.',
    ],
    localFaqs: [
      {
        q: 'How are grab bars fixed properly?',
        a: 'Into solid blocking set between the studs before the surround goes on, and rated for a real fall. Fixed into board alone they pull out at exactly the moment they were needed.',
      },
      {
        q: 'Is the tub’s own built-in bar enough?',
        a: 'It helps for getting in, but it is rarely positioned for standing up from the seat. We plan additional blocking for where it is actually wanted.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Walk-in tub in North Avondale? These houses often have a spare bathroom worth converting instead. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'Houses this size frequently have a bathroom nobody uses — a back-stair or third-floor room closed off for years. Converting one of those into the accessible bathroom is often better than adapting the main one: it leaves the household’s primary bathroom conventional, it protects resale, and there is usually more floor area to plan a proper door swing and space for a carer. The question is whether it is on a floor the person can reach.',
    ],
    localFaqs: [
      {
        q: 'Should we convert a spare bathroom instead of the main one?',
        a: 'Frequently yes — it leaves the household’s main bathroom conventional, protects resale, and there is usually more room to plan the door swing properly. The test is whether the person can reach that floor.',
      },
      {
        q: 'What condition will the old plumbing be in?',
        a: 'Variable after years out of service, and that is the first thing to establish. We look before pricing rather than assuming either way.',
      },
    ],
  },

  millvale: {
    intro:
      'Walk-in tub in Millvale? In a very small bathroom the door swing decides everything. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'When a bathroom is genuinely tight, the constraint is not the tub footprint but the arc its door needs and the room to stand while it opens. An outward-swinging door can collide with a basin or the room door itself; an inward one narrows the opening someone has to step through. Sometimes the answer is moving the basin or changing the room door to a slider — small changes that make the tub workable where it otherwise would not be.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is tiny — is a walk-in tub possible?',
        a: 'Often, once the door swing and standing space are planned rather than just the footprint. Moving the basin or changing the room door to a slider frequently makes it work.',
      },
      {
        q: 'Which door swing suits a small room?',
        a: 'Usually inward, since outward needs clear floor in front. The tradeoff is a narrower opening, which we weigh against how the person actually gets in.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Walk-in tub in Paddock Hills? Ask what happens in ten years, not just at installation. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'A walk-in tub is a mechanical product with a door seal, a pump, a blower and a control board, and the honest question is whether parts will exist and someone will come out when one fails. That points toward established manufacturers with real parts support rather than whatever carries the best margin — and toward an access panel so the service call is an hour. We fit what we can still get parts for.',
    ],
    localFaqs: [
      {
        q: 'What happens when something fails in ten years?',
        a: 'It depends entirely on whether parts still exist. We fit established manufacturers with genuine parts support, and design in an access panel so a repair is an hour rather than a demolition.',
      },
      {
        q: 'Who services it?',
        a: 'We come back for our own installations, and the manufacturer warranty covers the unit itself. We register that for you rather than leaving it in a drawer.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Walk-in tub in Spring Grove Village? Mature trees, old laterals, and a tub that empties fast. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'Streets shaded by mature trees have mature root systems, and old clay or cast-iron laterals are what those roots find. A walk-in tub releases a large volume quickly, which is exactly what exposes a partly blocked line — and here that is worse than usual, because the door will not open until it clears. Where a house has any history of slow drains we establish the cause before installing.',
    ],
    localFaqs: [
      {
        q: 'Our drains are slow — does that matter more here?',
        a: 'Yes. With a walk-in tub the door will not open until it drains, so a slow line is not just an inconvenience. We would rather investigate before installing than be called back.',
      },
      {
        q: 'Do you check the drain line?',
        a: 'We look at the symptoms and tell you plainly when a camera inspection is warranted, rather than installing onto a known problem.',
      },
    ],
  },

  linwood: {
    intro:
      'Walk-in tub in Linwood? A cold outside wall behind the tub makes the wait worse. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'Because you sit wet in a walk-in tub while it fills and drains, the temperature of the surfaces around you matters more than in an ordinary bathroom. An uninsulated exterior wall behind the tub is a cold surface radiating at someone who is already waiting. Insulating that cavity properly while the wall is open is a modest addition and it makes a real difference to whether the tub is pleasant in January.',
    ],
    localFaqs: [
      {
        q: 'Should we insulate behind the tub?',
        a: 'On an exterior wall, yes. You sit wet for several minutes at each end of the bath, and a cold wall behind you is felt. It is inexpensive while the wall is open.',
      },
      {
        q: 'What else helps in winter?',
        a: 'A heated seat and backrest, and a properly sized extractor so the room is not damp and chilled. Both are specified at design stage.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Walk-in tub in Bond Hill? Check the panel before you choose a model with jets. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'A walk-in tub with a pump, a blower and a heated seat wants dedicated GFCI-protected circuits, and in houses of this age the panel is frequently already full. That is not a reason to abandon the tub — but it is a real cost that has to appear in the quote rather than as a surprise, and it can point toward a simpler model. We check the panel’s spare capacity on the site visit before anyone chooses a specification.',
    ],
    localFaqs: [
      {
        q: 'Will our electrical panel take it?',
        a: 'In a house of this age it is worth checking — jets, blower and a heated seat all want dedicated GFCI circuits, and older panels are frequently full. We check capacity before you choose a model.',
      },
      {
        q: 'What if it will not?',
        a: 'Either the panel is upgraded, which is a real cost we show separately, or a simpler soaker model avoids the problem. We will lay out both.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Walk-in tub in Villages of Roll Hill? Mostly apartments, so this goes through the owner. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'Being straight about this: in a community of rented apartments, a walk-in tub is commissioned by the owner or management company rather than the resident. If you rent here and need an accessible bathroom, the route is your landlord — and we are happy to speak to them directly. Where a building wants one or two genuinely accessible units, that is a sensible strategy and we will help plan which units suit it.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can I have a walk-in tub fitted?',
        a: 'It has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'We manage the building — is it worth having accessible units?',
        a: 'One or two, planned deliberately, is a sensible strategy. Fitting them across a building is not, and we would say so.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Walk-in tub in East Westwood? Consider whether a shower seat solves it for a fraction of the cost. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'Not everyone struggling with a bathroom needs a walk-in tub. Where the person mainly showers and the difficulty is standing rather than the tub wall, a fold-down seat with a hand shower and properly anchored bars solves it for a small fraction of the cost. We would rather fit that and be right than sell a tub and be wrong. Where bathing genuinely matters and the wall is the barrier, the tub is the answer.',
    ],
    localFaqs: [
      {
        q: 'Would a shower seat be enough?',
        a: 'Where the person mainly showers and the difficulty is standing rather than the tub wall, frequently yes — a fold-down seat, hand shower and anchored bars cost a fraction of a walk-in tub.',
      },
      {
        q: 'How do we know which we need?',
        a: 'Whether bathing matters to them, and whether the tub wall is the actual barrier. We ask before recommending, and we will point you to the cheaper option when it is the right one.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Walk-in tub in Western Hills? A light inside the tub area matters more than you would think. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Bathrooms of this era were lit by a single ceiling fitting positioned for someone standing at the basin — which leaves the tub, and the threshold you step over, in shadow. For a fixture where the risky moment is stepping through a door with wet feet, that is worth fixing. A wet-rated fitting over the tub area, on a switch reachable before you get in, is a small addition while the ceiling is open.',
    ],
    localFaqs: [
      {
        q: 'Does the lighting need changing?',
        a: 'Usually. The original fitting lights the basin, leaving the threshold you step over in shadow — which matters for a fixture where the risky moment is stepping through a door.',
      },
      {
        q: 'Does the whole bathroom need rewiring?',
        a: 'Rarely for a light, though jets and a heated seat want their own circuits. We check what the existing circuit can take before adding anything.',
      },
    ],
  },

  california: {
    intro:
      'Walk-in tub in California? On low ground, waterproof the whole floor, not just the surround. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'Standard practice waterproofs the surround above the tub and stops there. In a house that has taken water before, extending a bonded membrane across the whole bathroom floor is worth the modest extra — and it matters more with a walk-in tub than any other fixture, because a door seal is a mechanical part that will eventually need replacing and the floor is what catches the consequence.',
    ],
    localFaqs: [
      {
        q: 'Why waterproof beyond the tub surround?',
        a: 'Because a walk-in tub has a door seal — a mechanical part that eventually wears. A floor built as a sealed tray means a seal problem is an inconvenience rather than a structural one.',
      },
      {
        q: 'Does that protect against flooding?',
        a: 'Not against a river — nothing in a bathroom does. It makes the room far easier to dry out and far less likely to need structural repair.',
      },
    ],
  },

  carthage: {
    intro:
      'Walk-in tub in Carthage? A basic model done properly does everything that matters. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'The features that make a walk-in tub safe and usable are unglamorous: a reliable door seal, a thermostatic valve, a fast-drain, a heated seat and bars anchored into real blocking. None of those is the expensive part of a catalogue. Hydrotherapy, chromotherapy lighting and remote controls are, and they are the things people stop using after a month. We would rather build the first list properly.',
    ],
    localFaqs: [
      {
        q: 'Which features actually matter?',
        a: 'The door seal, a thermostatic valve, a fast-drain, a heated seat and properly anchored bars. Those are what make it safe and usable — and none is the expensive part of a catalogue.',
      },
      {
        q: 'What is not worth paying for?',
        a: 'In most houses, chromotherapy lighting and elaborate remote controls. They are the features people stop using after a month.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Walk-in tub in Winton Hills? Ask what happens if the door seal ever leaks. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'Every walk-in tub depends on one gasket, and any honest firm will tell you it is a wear part rather than a permanent one. What matters is whether it is a replaceable component with parts available, whether the floor beneath is built to handle a leak, and whether someone will come out. We fit units where the seal is serviceable, waterproof the floor properly, and stand behind the installation.',
    ],
    localFaqs: [
      {
        q: 'What if the door seal leaks?',
        a: 'It is a wear part, and on a good unit it is replaceable with parts available. We build the floor to handle it and we come back for our own installations.',
      },
      {
        q: 'How long before it needs replacing?',
        a: 'Years on a quality unit with reasonable use. Cheap gaskets and flimsy latches are what turn a routine part into a real problem.',
      },
    ],
  },

  roselawn: {
    intro:
      'Walk-in tub in Roselawn? The old steel tub lifts out easily — that keeps this affordable. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'The tub coming out in most of these houses is pressed steel rather than cast iron, which means it lifts out whole with two people and no cutting. That takes real labour out of a job that is otherwise more involved than a standard replacement — and it is one reason walk-in tub installations in mid-century housing come in lower than in the older neighbourhoods where a cast-iron tub has to be broken up first.',
    ],
    localFaqs: [
      {
        q: 'Is our old tub cast iron or steel?',
        a: 'In most mid-century houses here it is pressed steel — much lighter and removable whole. That takes real labour out of the job compared with breaking up cast iron.',
      },
      {
        q: 'Does that lower the cost?',
        a: 'Noticeably, on the removal side. The rest of a walk-in installation is unchanged, since the unit still has to be set and levelled precisely.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Walk-in tub in Mount Airy? A split-level bathroom sits on a shallow floor. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'The terrain produced a lot of split-levels here, and a split-level puts the bathroom on a half-storey with a shallow floor void and a less direct run to the stack. A walk-in tub often needs its waste in a different position from the tub coming out, and there is limited depth to route it. We match the outlet to the existing position where we can, because doing so avoids the problem entirely.',
    ],
    localFaqs: [
      {
        q: 'Does a split-level complicate the drain?',
        a: 'It can — the floor void on a half-storey is shallow, so there is limited depth to route a new trap. We match the tub’s outlet to the existing waste position wherever possible.',
      },
      {
        q: 'What if no model matches?',
        a: 'Then it means opening more floor, which we would price honestly rather than discovering mid-job.',
      },
    ],
  },

  hartwell: {
    intro:
      'Walk-in tub in Hartwell? The original clawfoot is not a candidate for adaptation. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'People occasionally ask whether a door can be cut into an existing clawfoot, and the answer is no — the whole product is engineered around a sealed door in a moulded shell, and a retrofitted opening in cast iron will not hold. What can happen is the clawfoot moving to another position if the room allows, with a proper walk-in tub installed where the plumbing already runs. In a bathroom this size that is often achievable.',
    ],
    localFaqs: [
      {
        q: 'Can a door be cut into our existing tub?',
        a: 'No. The seal is engineered into a moulded shell, and a retrofitted opening in cast iron will not hold. Anyone offering that is selling you a leak.',
      },
      {
        q: 'Can we keep the clawfoot somewhere?',
        a: 'Where the room allows, yes — the clawfoot moves and the walk-in goes where the plumbing already runs. In a bathroom this size it is frequently achievable.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Walk-in tub in Kennedy Heights? Everything you need has to be reachable from the seat. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'Once the door is closed the person is committed until the tub drains, which makes reach a design requirement rather than a convenience. Soap, a hand shower, the drain control, a towel and ideally a phone all need to be within arm’s length of the seat. A recess at seated height and a hand shower on a long hose cost very little and are the difference between a tub someone uses confidently and one they are wary of.',
    ],
    localFaqs: [
      {
        q: 'What needs to be within reach of the seat?',
        a: 'Soap, a hand shower, the drain control, a towel and ideally a phone. Once the door is closed the person stays until it drains, so reach is a requirement rather than a nicety.',
      },
      {
        q: 'Where should the recess go?',
        a: 'At seated height on the wall the person faces, sized for what they actually use. It has to be framed before the surround goes on.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Walk-in tub in St. Bernard? Move the waste and the vent has to follow. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'Where a walk-in tub’s outlet sits in a different position from the tub coming out, the trap needs a vent within a set distance — or draining water siphons it dry and the room starts smelling of the sewer weeks later. In tight early-1900s houses the existing vent is frequently not where the new position needs it. It is invisible work, it is not optional, and it is inspected. St. Bernard issues its own permits, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Why does venting matter if the drain moves?',
        a: 'Without a vent within the permitted distance, draining water siphons the trap dry and sewer gas comes back into the room. It shows up weeks later if it is skipped.',
      },
      {
        q: 'Who issues the permit here?',
        a: 'The City of St. Bernard — it is a separate municipality even though Cincinnati surrounds it. We confirm and file before scheduling.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Walk-in tub in Elmwood Place? Same position, right model, no reconfiguration. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Where a bathroom layout already works, choosing a walk-in tub that fits the existing footprint and matches the existing waste position keeps this from becoming a full remodel. No walls move, no drain relocates, no venting changes. In small houses that is usually the sensible project — and it is why we measure the alcove and the outlet before showing anyone a catalogue.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub go in the existing footprint?',
        a: 'Frequently, since they are made in a range of sizes. Matching the existing waste position too keeps it from becoming a full remodel.',
      },
      {
        q: 'Is that a cheaper job?',
        a: 'Considerably, because nothing structural or below-floor moves. The tub itself costs what it costs; everything around it is minimised.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Walk-in tub in Delhi Hills? A walkout lower level can make a genuinely accessible bathroom. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope often have a walkout lower level, and where stairs are becoming difficult that changes the whole conversation: a bathroom on the entry level rather than up a flight. There is usually more floor area to plan a door swing and space for a carer than in the original upstairs bathroom. What decides it is whether the waste reaches the sewer by gravity, which we measure on the first visit.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level bathroom a better place for a walk-in tub?',
        a: 'Where stairs are becoming difficult, frequently yes — a walkout level puts it on the entry floor, usually with more room to plan the door swing and space for a carer.',
      },
      {
        q: 'Will it drain, or does it need a pump?',
        a: 'That depends where the house sits on the hill. We measure the drain elevation on the first visit — and a walk-in tub discharges a large volume, so any ejector has to be sized for it.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Walk-in tub in Golf Manor? The village permits this, not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Being an incorporated village entirely surrounded by the city catches people out, and this is firmly a permitted job — the plumbing is altered and dedicated circuits are usually added, both of which are inspected. That runs through Golf Manor rather than the city your postal address suggests. On the compact lots, delivery access for a bulky, non-tiltable tub also gets arranged in advance.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm the authority and file before scheduling.',
      },
      {
        q: 'Is delivery access a problem on these lots?',
        a: 'It is a planning matter rather than a barrier. A walk-in tub will not tilt through a tight turn, so we measure the route and book access in advance.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Walk-in tub in Fairfax? The threshold is still a step — usually three to seven inches. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'Marketing implies you walk straight in, and that is not quite true — every walk-in tub has a threshold, typically somewhere between three and seven inches depending on the model. That is far less than a tub wall, but it is not zero, and for someone with very limited mobility the difference between a three-inch and a six-inch step is decisive. We measure what the person can actually manage before choosing, rather than assuming any walk-in solves it.',
    ],
    localFaqs: [
      {
        q: 'Is a walk-in tub really step-free?',
        a: 'No — there is a threshold, typically three to seven inches depending on the model. Far less than a tub wall, but not zero, and the difference between three and six inches matters for some people.',
      },
      {
        q: 'Which model has the lowest threshold?',
        a: 'They vary, and the lowest is not automatically best — it usually trades against water depth. We match it to what the person can actually step over.',
      },
    ],
  },

  mack: {
    intro:
      'Walk-in tub in Mack? A household of showerers plus one bather needs planning. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'Where a walk-in tub goes into the only full bathroom of a house where everyone else showers, it creates a daily friction nobody anticipated — the high walls make showering over it awkward, and the tub is not usable in a hurry. The workable answers are a second bathroom, a shower over the tub with a proper handheld and a wall-mounted seat, or accepting a compromise deliberately. We would rather raise it before installation.',
    ],
    localFaqs: [
      {
        q: 'Can others still shower if we fit a walk-in tub?',
        a: 'It is awkward — the high walls make showering over one uncomfortable. Where it is the only bathroom, that is worth planning around rather than discovering.',
      },
      {
        q: 'What are the options?',
        a: 'A second bathroom, a proper handheld and seat arrangement over the tub, or accepting the compromise with eyes open. We will lay out all three.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Walk-in tub in Monfort Heights? Upstairs over a living room, the seal and the floor both matter. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Most of these houses put the bathroom on the second floor above a living room, and a walk-in tub concentrates both risks that position carries: a large volume of water, and a door seal that is a wear part. That is why the floor beneath gets a full bonded membrane rather than a waterproofed corner, and why we will not fit a unit whose seal we cannot get parts for. Over a finished ceiling, neither is a place to economise.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is above the living room — is that a concern?',
        a: 'It raises the stakes on two things: a full bonded waterproof membrane under the whole floor, and a door seal that is a serviceable, replaceable part. Neither is where we would economise.',
      },
      {
        q: 'What if there is already a stain below?',
        a: 'We open it up and check the joists and subfloor before quoting, so that condition is in the fixed price rather than discovered later.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Walk-in tub in Bridgetown? How much cleaning it needs is decided when you choose the system. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'A plain soaker wipes down like any tub. Air jets self-purge after use with a short blower cycle. Water jets recirculate bathwater through pipework and need their cleaning cycle run regularly, or the system holds residue you cannot see. That is a real maintenance commitment, and if nobody in the house will do it, the honest recommendation is air jets or a soaker rather than the more impressive option.',
    ],
    localFaqs: [
      {
        q: 'How much maintenance does a walk-in tub need?',
        a: 'A soaker, almost none. Air jets self-purge after use. Water jets need their cleaning cycle run regularly, and if nobody will do that, we would recommend against them.',
      },
      {
        q: 'Is the door seal maintenance too?',
        a: 'Only wiping it dry and keeping it clear of soap residue. That is genuinely most of what extends its life.',
      },
    ],
  },

  finneytown: {
    intro:
      'Walk-in tub in Finneytown? Two to three days on site, and the lead time is longer. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth being straight about the timeline, because it is not the one-day job a standard tub swap is. The unit is frequently made to order, which is weeks rather than days. On site it is typically two to three days: removal, floor preparation, setting and levelling the tub precisely, running plumbing and dedicated circuits, then the surround. We give both figures at quotation rather than only the second.',
    ],
    localFaqs: [
      {
        q: 'How long from order to finished?',
        a: 'Usually a few weeks — most units are made to order — plus two to three days on site. We give you both figures rather than only the installation time.',
      },
      {
        q: 'Are we without a bathroom for all of it?',
        a: 'Not entirely. The water is off for parts of each day rather than throughout, and we give you the shut-off windows in advance.',
      },
    ],
  },

  amberley: {
    intro:
      'Walk-in tub in Amberley Village? In a bathroom this size, a wet room may suit better. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'Where a primary bathroom is genuinely large, the most capable accessible arrangement is often not a walk-in tub at all — it is a wet room with a level-entry shower, a bench, a hand shower and room for a carer or a chair to come right in. It is completely step-free, which a walk-in tub is not, and it works for someone who cannot manage sitting and rising. Where bathing specifically matters, the tub still wins, and both can coexist here.',
    ],
    localFaqs: [
      {
        q: 'Walk-in tub or a wet room?',
        a: 'A wet room is completely step-free and takes a chair or a carer, which a walk-in tub cannot. A tub wins where bathing specifically matters. In a bathroom this size, both can coexist.',
      },
      {
        q: 'Can we have both?',
        a: 'Where the room and the budget allow, yes — and it is frequently the best outcome available in a house this size.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Walk-in tub in Arlington Heights? A little preparation makes the site visit worth more. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Since we travel to reach the valley villages, it is worth making the visit count. Clearing access to the bathroom and to whatever is below it lets us check the floor and waste the same day. Knowing your main shutoff and roughly when the house was built helps. Most usefully: have the person the tub is for present, so we can look at seat height and door swing against how they actually move rather than in the abstract.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the site visit?',
        a: 'Access to the bathroom and below it, the main shutoff, a rough build date — and ideally the person the tub is for, so we can check seat height and door swing against how they actually move.',
      },
      {
        q: 'Will you need to open anything?',
        a: 'A small area, with your agreement, and often a look at the floor from below. It is the only honest way to price a fixed-cost job.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Walk-in tub in North College Hill? A pump running through a shared wall is audible. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'In closely built houses with bathrooms backing onto bedrooms, a jetted walk-in tub adds a noise nobody considered — the pump or blower running for the length of a bath, through a wall someone may be sleeping behind. Isolating the pump on its mounts and insulating the pipe run handles most of it, and both are cheap while the wall is open. Where the bathroom shares a wall with a bedroom, an air system is also quieter than water jets.',
    ],
    localFaqs: [
      {
        q: 'Are jetted tubs noisy?',
        a: 'The pump or blower runs for the length of the bath, which carries through a shared wall. Isolating the pump and insulating the pipe run handles most of it, and air systems are quieter than water jets.',
      },
      {
        q: 'Can that be done afterwards?',
        a: 'Not easily — it means opening the surround again. It is one of the things worth deciding before the wall closes.',
      },
    ],
  },

  newtown: {
    intro:
      'Walk-in tub in Newtown? Over a crawl space, the waste and the floor are both reachable. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'A lot of these houses sit over a crawl space, which for this job is genuinely the best case. The waste can be repositioned from underneath without cutting a slab or lifting the bathroom floor, and — more importantly for a walk-in tub — the joists can be inspected and reinforced from below where the filled weight needs it. What the crawl demands is a proper look at moisture and joist condition first, on ground this low.',
    ],
    localFaqs: [
      {
        q: 'Is a crawl space better for this work?',
        a: 'Considerably. The waste can be repositioned from underneath, and the joists can be inspected and reinforced from below — which matters more for a walk-in tub than for a standard one.',
      },
      {
        q: 'What do you check down there?',
        a: 'Moisture, ventilation and joist condition under the bathroom. On low river ground those decide whether the floor will carry a filled walk-in tub without work.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Walk-in tub in Turpin Hills? The closet next door may be the space you need. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Where a bathroom is too tight for a walk-in tub’s door swing and standing space, the answer is often a wall away rather than a smaller tub. A linen closet or the corner of an adjoining wardrobe can usually be absorbed, and because the waste generally stays put the cost is far lower than the extra space suggests. We look at what is on the other side of every wall before concluding a room cannot take one.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is too small — are there options?',
        a: 'Often, by absorbing an adjoining closet rather than shrinking the tub. Since the waste usually stays put, the cost is much lower than the space gained suggests.',
      },
      {
        q: 'Is losing the closet worth it?',
        a: 'That depends where else the storage goes, and we will work through it rather than assuming. Sometimes the honest answer is that the closet is worth more.',
      },
    ],
  },

  silverton: {
    intro:
      'Walk-in tub in Silverton? The surround has to run higher than a normal tub’s. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'A walk-in tub is tall, so the waterproofed surround behind it has to run higher than the one it replaces — and where a shower is used over it, higher again. Stopping the tile at the old line leaves an exposed painted band exactly where water and steam collect. Running it properly costs a little more and removes the vulnerable strip entirely, which in a room used daily for baths matters more than it would elsewhere.',
    ],
    localFaqs: [
      {
        q: 'How high should the surround go?',
        a: 'Higher than the old tub’s line, because the tub itself is taller — and to full shower height where a shower is used over it. Stopping at the old line leaves an exposed band where water collects.',
      },
      {
        q: 'What if the budget will not stretch?',
        a: 'The area above wants a proper moisture-resistant paint system rather than ordinary emulsion. It is a real difference and we specify it rather than leaving it to chance.',
      },
    ],
  },

  lockland: {
    intro:
      'Walk-in tub in Lockland? There are usually three floors under the one you can see. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The bathroom in a worker cottage has typically been redone twice, each covering laid over the last. That matters more here than for a standard tub: a walk-in has to sit dead level on a solid, known substrate, and layers of vinyl over hardboard over original boards are neither. Taking the floor back to structure is the right start — and it lets us see what is carrying the room before several hundred pounds of filled tub goes on it.',
    ],
    localFaqs: [
      {
        q: 'Does the old flooring have to come out?',
        a: 'For a walk-in tub, yes. It has to sit dead level on a solid known substrate, and layered coverings are neither. It also lets us see what is carrying the room.',
      },
      {
        q: 'Why does level matter so much?',
        a: 'Because the door seal is engineered to close against a square frame. A tub set on an uneven floor puts the door out of true, which is where seal problems start.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Walk-in tub in Groesbeck? Sit in one before you buy it — seat depth varies enormously. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Brochure dimensions do not tell you whether a tub is comfortable to sit in for twenty minutes. Seat depth, backrest angle and where the water line falls on your body vary a great deal between models, and someone shorter can find the water reaches their chest while someone taller finds it at their waist. Wherever it can be arranged, sitting in the actual model beats any specification sheet — and we would rather you did that than take our word.',
    ],
    localFaqs: [
      {
        q: 'Can we try one before buying?',
        a: 'Wherever it can be arranged, yes — and we would encourage it. Seat depth and where the water line falls vary a lot between models, and no specification sheet tells you that.',
      },
      {
        q: 'Does height affect which model suits?',
        a: 'Considerably. A tub that submerges a shorter person to the chest may only reach a taller person’s waist. It is one of the main reasons to sit in one.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Walk-in tub in Mount Healthy? If the only bathroom is upstairs, that is the real problem. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'In older houses here the full bathroom is frequently upstairs with only a half bath below. Where stairs are already difficult, fitting a walk-in tub at the top of them addresses the smaller barrier and leaves the larger one — and we would say so rather than take the order. Adding a full bathroom on the ground floor, where the half bath and its plumbing already exist, is often the better project even though it is the bigger one.',
    ],
    localFaqs: [
      {
        q: 'Should we put a walk-in tub in the upstairs bathroom?',
        a: 'Only if the stairs are manageable. Where they are already the barrier, a tub at the top of them solves the smaller problem — and we will say so rather than sell it.',
      },
      {
        q: 'Can the downstairs half bath become a full one?',
        a: 'Frequently, since the drain and supply already exist. It is a bigger project than a tub swap and often the right one.',
      },
    ],
  },

  reading: {
    intro:
      'Walk-in tub in Reading? If the laundry shares the waste line, that matters here. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'In a lot of these houses the bathroom waste and the laundry discharge join the same run, and both release large volumes quickly. With a standard tub that is an occasional gurgle. With a walk-in tub it is somebody sitting behind a door that will not open while a washing machine dumps into the same line. Establishing the arrangement before installation is worth doing, and upsizing the shared section is usually straightforward.',
    ],
    localFaqs: [
      {
        q: 'Does a shared laundry waste line matter?',
        a: 'More than with a normal tub — the door will not open until the tub drains, so a line backing up because the washer is discharging is not just a gurgle. We check the arrangement first.',
      },
      {
        q: 'Can it be fixed?',
        a: 'Usually, by upsizing or re-venting the shared section. We quote it separately so you can see exactly what it is.',
      },
    ],
  },

  dent: {
    intro:
      'Walk-in tub in Dent? The controls should be reachable before you get in, not just after. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'A detail most installations get wrong: where the fill control sits. Placed conventionally at the tap end, you have to be inside and seated to start the water — which means sitting in an empty cold tub waiting. Placed so it can be reached from outside, or duplicated with a second control near the door, you can start the fill and step in as it warms. It costs almost nothing at rough-in and it changes the experience completely.',
    ],
    localFaqs: [
      {
        q: 'Can the tub be filled before getting in?',
        a: 'Only partly — the door has to be shut for it to hold water. But a control reachable from outside, or a second one near the door, means the water is running as you settle rather than after.',
      },
      {
        q: 'Where should the controls go?',
        a: 'Within reach from the seat for temperature and drain, and where possible a fill control reachable near the door. Both decided at rough-in rather than afterwards.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Walk-in tub in Deer Park? For a wheelchair user, this is usually the wrong product. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'A walk-in tub requires stepping over a threshold and lowering onto a seat, then rising from it wet. For someone using a wheelchair, or who cannot bear weight to transfer, neither is realistic — and the honest answer is a level-entry wet room with a transfer bench and space for a chair to come in. We would rather lose the sale than install a tub the person cannot use, which happens more often than it should in this trade.',
    ],
    localFaqs: [
      {
        q: 'Is a walk-in tub suitable for a wheelchair user?',
        a: 'Usually not. It requires stepping over a threshold and rising from a seat while wet. A level-entry wet room with a transfer bench is the right answer, and we will say so.',
      },
      {
        q: 'What if bathing specifically matters to them?',
        a: 'There are transfer-based bathing solutions, but they are a different product category. We will point you toward the right specialist rather than approximating with a walk-in tub.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Walk-in tub in Terrace Park? A heated floor matters more here than anywhere. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'You step out of a walk-in tub wet and, having sat waiting for it to drain, already cooled — onto whatever the floor is. Electric underfloor heating goes down during a job the floor is already open for, so the cost is the mat, a thermostat and an afternoon, and it makes the end of the bath considerably more comfortable. It also dries the floor faster, which is a real safety point for a slip-resistant surface.',
    ],
    localFaqs: [
      {
        q: 'Is underfloor heating worth it here?',
        a: 'More than in an ordinary bathroom. You step out already cooled from waiting for the tub to drain, and a warm floor changes that considerably. It also dries the floor faster.',
      },
      {
        q: 'Is it expensive to run?',
        a: 'For a bathroom-sized area on a timer, no. We set it on a thermostat rather than leaving it running.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Walk-in tub in Dry Run? Fit an accessible shutoff while the wall is open. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'If a door seal ever weeps, the person who notices is sitting in the tub and cannot get out. Whoever comes to help should not then be hunting for the main in a dark basement. Accessible isolation valves for the bathroom, fitted while the wall is open, cost very little and turn that into a ten-second action — and where the bathroom is over a finished basement, a leak sensor is worth the small addition too.',
    ],
    localFaqs: [
      {
        q: 'Can we get a shutoff just for the bathroom?',
        a: 'Yes, and fitted while the wall is open it is inexpensive. With a walk-in tub it matters more than usual — if a seal weeps, the person in it cannot get out to deal with it.',
      },
      {
        q: 'Are leak sensors worth it?',
        a: 'Over a finished basement, we think so. They are cheap and they catch the slow problem rather than the dramatic one.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Walk-in tub in White Oak? Ask what the actual usable water depth is. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Walk-in tubs are advertised on overall height, which is not the number that matters. Usable water depth is set by where the door seal tops out, and it varies considerably — some models submerge you to the shoulders seated, others reach the waist. If a proper soak is the whole reason for buying one, that is the specification to ask about, and it is not always the one on the front of the brochure.',
    ],
    localFaqs: [
      {
        q: 'How deep is the water actually?',
        a: 'Set by where the door seal tops out, not by the tub’s overall height. It varies a lot between models — some submerge you to the shoulders seated, others to the waist.',
      },
      {
        q: 'Which should we prioritise?',
        a: 'If a proper soak is the reason for buying, water depth. If getting in and out safely is, threshold height and seat height. They trade against each other and we will explain how.',
      },
    ],
  },

  forestville: {
    intro:
      'Walk-in tub in Forestville? Plan it before it is urgent and you get a better tub. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Almost every walk-in tub we install is bought after an event — a fall, a diagnosis, a discharge date. Bought that way, the model is whatever has the shortest lead time and the specification is whatever fits the week available. Bought before, you can compare seat heights, sit in one, plan the door swing, sort the water heater and choose on merit. It is the same money and a materially better outcome.',
    ],
    localFaqs: [
      {
        q: 'Should we install one before it is needed?',
        a: 'It produces a materially better result for the same money — you can compare seat heights, sit in one, plan the door swing and sort the water heater instead of taking whatever has the shortest lead time.',
      },
      {
        q: 'What if we are not ready to commit?',
        a: 'Blocking behind the tile for future bars and a genuinely slip-resistant floor cost very little now and keep every option open.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Walk-in tub in Cherry Grove? The electrical side is where corners get cut quietly. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'A walk-in tub with a pump, blower and heated seat is a substantial electrical addition, and it wants dedicated GFCI-protected circuits rather than a spur off whatever is nearest. Sharing an existing bathroom circuit is the shortcut nobody sees and the one that matters most for a fixture somebody sits inside. We check the panel’s capacity and run proper circuits, and where the panel needs work it appears as its own line.',
    ],
    localFaqs: [
      {
        q: 'Does it need its own circuits?',
        a: 'Yes — a pump, blower and heated seat all want dedicated GFCI-protected circuits rather than a spur off the existing bathroom supply. For a fixture someone sits inside, that is not negotiable.',
      },
      {
        q: 'What if the panel is full?',
        a: 'It is upgraded, and that appears as its own line on the quote rather than being absorbed or skipped.',
      },
    ],
  },

  kenwood: {
    intro:
      'Walk-in tub in Kenwood? In a large suite, put it where a carer can stand. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Where the primary suite is generous, the advantage is not a bigger tub — it is the space around it. Room on the door side for someone to assist without reaching across, somewhere to park a walker or transfer chair, and a clear path from the bedroom that does not turn a tight corner. Planning those first and fitting the tub to them produces a far better result than putting the tub in the old alcove and working around it.',
    ],
    localFaqs: [
      {
        q: 'What should a larger bathroom prioritise?',
        a: 'The space around the tub rather than the tub itself — room on the door side for someone to assist, space for a walker or chair, and a clear path from the bedroom.',
      },
      {
        q: 'Should the tub go where the old one was?',
        a: 'Not necessarily. In a large suite there is usually a better position, and moving the plumbing costs less than living with a poor one.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Walk-in tub in Lincoln Heights? The village permits it, and we quote to the house. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical things. It is its own municipality, so permits and inspections come through Lincoln Heights rather than the county, and we confirm that before scheduling. And the housing is modest, which means a well-built soaker with a reliable door seal, a thermostatic valve, a fast-drain and a heated seat is the right specification — not the top of a catalogue. We will say so rather than quoting upward.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits here?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm its requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'How much should we spend?',
        a: 'A well-built soaker with a reliable seal, thermostatic valve, fast-drain and heated seat covers everything that matters. Hydrotherapy is where the price climbs and it is not what makes the tub safe.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Walk-in tub in Dillonvale? The surround has to come apart again one day — plan for it. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'A walk-in tub has more serviceable parts than any other bathroom fixture: a door seal, a pump, a blower, a control board and a drain valve. All of them are behind the surround. Designing a removable access panel into the tiling at the outset — set out so it reads as part of the pattern rather than a hatch — is what keeps a future repair to an hour. It is a decision made when the tile is set out, not afterwards.',
    ],
    localFaqs: [
      {
        q: 'How is the tub serviced once it is tiled in?',
        a: 'Through a removable panel designed into the tiling at the outset and set out so it reads as part of the pattern. Without one, a repair starts by breaking finished tile.',
      },
      {
        q: 'How big does the access need to be?',
        a: 'Enough to reach the pump, blower and drain valve — which we size against the specific model rather than fitting a standard hatch.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Walk-in tub in Woodlawn? Ask what is behind the surround before it goes on. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'The wall behind a walk-in tub gets wet daily, and what is behind the tile decides whether that matters. A bonded membrane, a liquid-applied system or sealed foam board will last decades. Ordinary greenboard behind tile — still common because it is cheap — tolerates damp rather than excluding water. With a fixture this expensive, it is worth asking any contractor which of the four you are being quoted, because you cannot inspect it afterwards.',
    ],
    localFaqs: [
      {
        q: 'What goes behind the tile?',
        a: 'A bonded membrane, a liquid-applied system or sealed foam board. What we do not do is rely on greenboard, which tolerates damp rather than excluding water.',
      },
      {
        q: 'Can we see it before it is covered?',
        a: 'Yes, and we would encourage it. It is the part of the job you are paying for and cannot inspect once the surround is on.',
      },
    ],
  },

  addyston: {
    intro:
      'Walk-in tub in Addyston? If we open a wall and find rot, here is what happens. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'In century-old houses on low ground, the honest question is what happens when something unexpected turns up — and with a walk-in tub it matters more, because the floor has to carry more weight than before. Our price is fixed, and it holds because we open a wall and look under the floor before quoting. Where genuinely concealed damage exists that no inspection would have found, we show you the photograph, the cost and the options before touching it.',
    ],
    localFaqs: [
      {
        q: 'What if you find rot or a weak floor?',
        a: 'We stop, photograph it, and show you the cost and options before doing anything. Most of what becomes a surprise elsewhere is found at our site visit, because we look under the floor before quoting.',
      },
      {
        q: 'So the fixed price is not always fixed?',
        a: 'It holds for everything reasonably establishable beforehand, which is nearly all of it. Genuinely concealed structural damage is the exception, and we say so plainly rather than promising what nobody can.',
      },
    ],
  },

  greenhills: {
    intro:
      'Walk-in tub in Greenhills? The town was built to a plan, so we know these bathrooms. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because Greenhills was built as a single scheme, its original bathrooms repeat from home to home — compact, efficient and laid out to a standard. That is genuinely useful here: we know which walk-in models fit, how the door swing works against the room door, and where the stack runs. The Landmark designation concerns the exterior, so the bathroom is entirely yours to decide.',
    ],
    localFaqs: [
      {
        q: 'Will a walk-in tub fit these original bathrooms?',
        a: 'In most of the standard layouts here, yes — we have solved the room before. It usually means a shorter model with the door swing planned against the room door.',
      },
      {
        q: 'Does the historic designation restrict us?',
        a: 'No — the review concerns what is visible from outside. Interior work is yours to decide.',
      },
    ],
  },

  northbrook: {
    intro:
      'Walk-in tub in Northbrook? Doing the floor at the same time costs far less than later. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'The floor is already coming up for a walk-in tub — to check the structure, to run the waste, sometimes to reinforce. That makes it far and away the cheapest moment to put down a genuinely slip-resistant surface and, if you want it, underfloor heating. Doing the floor separately a year later means opening around a fixed tub, which is awkward, and paying mobilisation twice. We price it both ways so the difference is visible.',
    ],
    localFaqs: [
      {
        q: 'Should we do the floor at the same time?',
        a: 'It is far cheaper, because the floor is already up for the structure check and the waste. Doing it later means working around a fixed tub and paying mobilisation twice.',
      },
      {
        q: 'What flooring suits a walk-in tub?',
        a: 'Something with a genuine slip rating rather than a polished finish — you step out wet onto it. That matters more here than in an ordinary bathroom.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Walk-in tub in Indian Hill? On a private well, the water will stain the tub. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Where a house runs on a well, a walk-in tub shows the water chemistry faster than any other fixture — it holds standing water against a large surface for the length of a soak, every day. Iron leaves orange marking, manganese black, and neither is a cleaning problem. On a jetted model it also builds inside pipework you cannot see. Treatment is worth settling before the tub is chosen rather than after.',
    ],
    localFaqs: [
      {
        q: 'Will well water mark a new walk-in tub?',
        a: 'Without treatment, yes — it holds standing water against a large surface daily, so iron and manganese show quickly. On a jetted model it also builds inside the pipework.',
      },
      {
        q: 'Does the septic system cope with a walk-in tub?',
        a: 'It sends a larger volume in surges than a standard tub, so capacity is worth confirming at design stage rather than assuming.',
      },
    ],
  },

  evendale: {
    intro:
      'Walk-in tub in Evendale? The door seal gets tested before we leave. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'The one thing a walk-in tub must do is hold water with the door shut, and that gets proven before we hand it over — filled to above the seal line, held, and the door and its frame watched from outside. It sounds obvious and it is not universal practice. If it holds, we finish. If it does not, it is adjusted then rather than discovered by somebody sitting in it a week later.',
    ],
    localFaqs: [
      {
        q: 'How do you know the door seals properly?',
        a: 'It is filled above the seal line and held before we hand it over, with the door and frame watched from outside. If anything moves, it is adjusted then rather than found by someone sitting in it later.',
      },
      {
        q: 'Do you test the jets too?',
        a: 'Yes, and the drain timing, the thermostatic valve through its range and the heated seat. You see all of it working at the walkthrough.',
      },
    ],
  },

  glendale: {
    intro:
      'Walk-in tub in Glendale? It can be built in so it does not announce itself. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Owners here are reasonably reluctant to put a large moulded appliance into a carefully kept house, and the way through is joinery. A panelled surround detailed to the room, period-appropriate fittings, and the bulk broken up so it reads as built-in cabinetry rather than a medical product. It costs more than dropping the unit in as supplied, and it is what makes the difference in a house like this.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub be made to suit a period house?',
        a: 'Yes, treated as joinery — a panelled surround detailed to the room, period-appropriate fittings and the bulk broken up. It costs more than fitting the unit as supplied.',
      },
      {
        q: 'Does that make servicing harder?',
        a: 'Not if the access panel is designed into the panelling from the start, which is exactly what gets forgotten when someone boxes one in.',
      },
    ],
  },

  sharonville: {
    intro:
      'Walk-in tub in Sharonville? Every choice made before we start is a change order avoided. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'Most change orders are decisions that were never actually made. For this job the list is long: model and size, door swing and hand, seat height, threshold height, soaker or air or water jets, heated seat, fast-drain, valve and trim, grab bar positions, surround finish, access panel, flooring and ventilation. All of it is settled and written down before demolition, and the tub is on site before anything is removed.',
    ],
    localFaqs: [
      {
        q: 'What do we need to decide, and when?',
        a: 'Model and size, door swing and hand, seat and threshold height, jet system, heated seat, fast-drain, valve and trim, bar positions, surround finish, access panel, flooring and ventilation — all before demolition.',
      },
      {
        q: 'What if we change our minds afterwards?',
        a: 'Before the tub is ordered, straightforward. After a made-to-order unit is in production, it costs real money — which is why we settle it properly at the start.',
      },
    ],
  },

  northgate: {
    intro:
      'Walk-in tub in Northgate? Sometimes the tub is the whole job, sometimes it is not the right one. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'A walk-in tub in an otherwise sound bathroom is a focused project. But where the floor is failing, the vanity is going, the lighting was never adequate and the door is too narrow for a walker, doing it piecemeal costs more in total than doing the room once — and an accessible bathroom is more than the tub in it. We will tell you which situation you are in, including when the honest answer is the larger job.',
    ],
    localFaqs: [
      {
        q: 'Do we need a full bathroom remodel or just the tub?',
        a: 'The tub, if the rest of the room is sound. If the floor, lighting and door width all need attention, doing it once is cheaper — and an accessible bathroom is more than the tub in it.',
      },
      {
        q: 'Is the doorway width an issue?',
        a: 'Frequently overlooked. A walker or wheelchair needs a wider opening than many older bathroom doors give, and widening it is far cheaper alongside the rest of the work.',
      },
    ],
  },

  springdale: {
    intro:
      'Walk-in tub in Springdale? One bathroom, three generations — the tub suits one of them. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'A walk-in tub is the least shareable fixture in a bathroom. It suits the person it was bought for and is genuinely awkward for children, for anyone in a hurry, and for showering standing up. In a multigenerational household with one full bathroom, that is worth confronting before installation — the answer is usually a second bathroom or a shower elsewhere, and it changes the budget conversation entirely.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub work as the only bathroom?',
        a: 'It can, but it suits one person and is awkward for everyone else — particularly children and anyone showering standing up. In a multigenerational household that is worth confronting first.',
      },
      {
        q: 'What is the usual answer?',
        a: 'A second bathroom or a shower elsewhere in the house. It changes the budget, and we would rather raise it than have you discover it.',
      },
    ],
  },

  miamitown: {
    intro:
      'Walk-in tub in Miamitown? A long run out here, so we are honest about scheduling. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'This is one of the further corners of our area, and a walk-in tub is a two-to-three day job rather than a single visit — so we schedule it as a block rather than squeezing it between closer work. The housing adds its own check: on low river-bottom ground the floor structure under an older bathroom wants establishing properly before several hundred pounds of filled tub sits on it.',
    ],
    localFaqs: [
      {
        q: 'Do you come out as far as Miamitown?',
        a: 'Yes, and we schedule it as a block because it is a two-to-three day job at distance. That is why the dates we put in writing hold.',
      },
      {
        q: 'Does the low ground affect it?',
        a: 'It makes the floor structure worth establishing properly before a filled walk-in tub goes on it, particularly in an older house.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Walk-in tub in Forest Park? Someone should be home for this one. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'For most jobs we are happy to work while a household is out. This is the exception: the person the tub is for should be there at least once during the install, because seat position, bar heights and control placement are best confirmed against them rather than a drawing. Ten minutes at the right moment is the difference between bars that get used and bars that get ignored.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home?',
        a: 'For most of it, no. But the person the tub is for should be there at least once, so bar heights and control positions are set against them rather than a drawing.',
      },
      {
        q: 'Who is actually in our house?',
        a: 'Our own installers — we do not subcontract. That is the same reason we can back the work with a lifetime workmanship warranty.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Walk-in tub in Pleasant Run? Think about how a carer gets to the door side. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'The layout question people miss is which side the door hinges. A carer needs to stand at the opening — not reach across the tub — and if the door hinges toward a wall or a fixture, that position does not exist. Most models are available in both hands, and choosing correctly costs nothing. Choosing wrongly is not fixable afterwards, which is why we work it out on the site visit rather than from a catalogue.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side the door hinges?',
        a: 'Considerably. Someone assisting needs to stand at the opening rather than reach across, and if the door hinges toward a wall that position does not exist. Most models come in both hands.',
      },
      {
        q: 'Can it be changed later?',
        a: 'No — it is fixed when the unit is ordered. It is one of the decisions we settle on the site visit rather than from a brochure.',
      },
    ],
  },

  cleves: {
    intro:
      'Walk-in tub in Cleves? If the house has flooded, the wall comes open first. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'In a house that has taken water, the wall behind a tub can look sound and still hold saturated insulation and mould. Building a new waterproof surround over that seals the problem in — and with a walk-in tub, which is a substantial permanent installation, that is a mistake you live with for a long time. Open it, assess it, remediate, let it dry, then build. That order is not negotiable.',
    ],
    localFaqs: [
      {
        q: 'Our house flooded — can we still fit a walk-in tub?',
        a: 'Yes, but the wall comes open and gets assessed first. Building a permanent installation over saturated insulation or mould seals the problem in rather than fixing it.',
      },
      {
        q: 'Is remediation included?',
        a: 'Mould and mildew remediation is part of a proper installation. Where flood damage extends beyond the bathroom, that is a bigger conversation and we will be straight about it.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Walk-in tub in North Bend? A century-old house has settled, and this tub must sit level. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Houses of this age have moved, and a bathroom floor that looks fine can be out half an inch across its width. With a standard tub that is a cosmetic issue. With a walk-in it is the whole product: the door seal is engineered to close against a square frame, and a tub set out of level puts it permanently out of true. The substrate gets checked with a level and brought true before the unit goes in.',
    ],
    localFaqs: [
      {
        q: 'Why does level matter more for a walk-in tub?',
        a: 'Because the door seal closes against a square frame. Set the tub out of level and the door is permanently out of true — which is where seal problems begin.',
      },
      {
        q: 'How is an old floor brought true?',
        a: 'Self-levelling compound over a sound substrate, checked with a level before the tub is set. It adds a few hours and it prevents the most common cause of early failure.',
      },
    ],
  },

  loveland: {
    intro:
      'Walk-in tub in Loveland? A grab bar by the door is worth more than a jet package. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'If a budget has to be cut somewhere, cut the hydrotherapy before you cut the safety fittings. A rated bar anchored into blocking at the door, a genuinely slip-resistant floor, a thermostatic valve and a heated seat cost a fraction of a jet package and do far more for whether the tub is used safely every day. We will build that specification and tell you plainly what we left out.',
    ],
    localFaqs: [
      {
        q: 'What should we cut if the budget is tight?',
        a: 'Hydrotherapy before safety fittings. A rated bar in real blocking, a slip-resistant floor, a thermostatic valve and a heated seat matter far more day to day than jets do.',
      },
      {
        q: 'Will a simpler tub still feel like a proper bath?',
        a: 'Yes — depth and a heated seat are what make a soak comfortable, not the jets. We will show you the difference honestly.',
      },
    ],
  },

  harrison: {
    intro:
      'Walk-in tub in Harrison? On the state line, which side you are on decides the permit. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'This is a permitted job — plumbing altered, dedicated circuits added, both inspected. Sitting on a state boundary, whether that runs under Ohio or Indiana rules depends on which side the property is on, and the two processes are not the same. We confirm it before a start date is agreed rather than discovering it when an inspector is booked.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the line we are on?',
        a: 'For permitting and inspection, yes — Ohio and Indiana run different processes, and this job is inspected for both plumbing and electrical. We confirm before scheduling.',
      },
      {
        q: 'Do you work on the Indiana side?',
        a: 'Yes. It is a different jurisdiction rather than a different job, and we handle the filing either way.',
      },
    ],
  },

  ludlow: {
    intro:
      'Walk-in tub in Ludlow? An original tiled floor may be worth building around. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'A surprising number of bathrooms here still have an original hexagonal or mosaic floor under later coverings. With a walk-in tub there is a genuine tension: the tub must sit dead level on a sound substrate, and a century-old tile floor is neither guaranteed. Sometimes it can be retained with the tub set to it; sometimes the honest answer is that the floor has to come up. We lift a corner and tell you which before you decide.',
    ],
    localFaqs: [
      {
        q: 'Could there be an original floor under our vinyl?',
        a: 'Often, in houses of this era here. We lift a corner on the site visit before assuming anything.',
      },
      {
        q: 'Can a walk-in tub sit on an original tile floor?',
        a: 'Sometimes, where it is sound and level. But the tub must sit dead level for the door to seal, so occasionally the honest answer is that the floor has to come up. We will tell you which.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Walk-in tub in Park Hills? Several floors from the heater, the fill wait gets long. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Houses built into this hillside are tall rather than wide, and the bathroom is often several floors from a water heater in the lowest level. That run holds cooled water that has to be drawn off before hot arrives — and with a walk-in tub you are sitting inside waiting for it. A recirculation loop fitted while the walls are open removes that entirely, and it costs a fraction of what it would as a standalone retrofit.',
    ],
    localFaqs: [
      {
        q: 'Why does the fill take so long to run hot?',
        a: 'Distance from the heater in a tall house — the run holds cooled water that has to be drawn off first. With a walk-in tub you sit inside waiting for it, which is why we raise it.',
      },
      {
        q: 'Can that be fixed?',
        a: 'A recirculation loop solves it, and fitting one while the walls are open costs a fraction of a standalone retrofit.',
      },
    ],
  },

  bromley: {
    intro:
      'Walk-in tub in Bromley? On low ground, think hard before putting one downstairs. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'A lower-level bathroom here drains through a sealed ejector, and a walk-in tub releases a large volume at once — which is exactly what a marginal pump arrangement struggles with. Worse, if the pump fails the door will not open until the water goes somewhere. On ground like this we would generally steer you to the main floor, and where a lower-level installation is genuinely needed, the ejector is sized for the tub specifically.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub go in a lower-level bathroom here?',
        a: 'We would generally steer you to the main floor. A walk-in releases a large volume at once, and if the ejector struggles the door will not open until it clears.',
      },
      {
        q: 'What if there is no choice?',
        a: 'Then the ejector is sized for the tub specifically rather than to a standard, and we would want backup power on it. We will price that properly rather than glossing over it.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Walk-in tub in Fort Wright? Up on the hilltop, a lower-level installation is conventional. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation removes the water-table questions that dominate work in the river villages below, so a lower-level bathroom here is usually a conventional job — and where stairs are becoming difficult, a walk-in tub on the entry level is a genuinely good outcome. What still gets measured is the drain elevation, because a house stepped into a grade can sit closer to the sewer than expected, and any ejector has to be sized for the tub’s discharge.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level walk-in tub practical here?',
        a: 'Usually yes — the hilltop avoids the water-table problems of the river villages. We measure the drain elevation, and where a pump is needed it is sized for the tub’s discharge rather than to a standard.',
      },
      {
        q: 'Is the entry level a better place for it?',
        a: 'Where stairs are becoming difficult, frequently — it puts the accessible bathroom on the floor the person can reach.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Walk-in tub in Fort Mitchell? Choose bars and trim you will not want to change. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Grab bars, valve trim and the tub’s own fittings are all visible, all permanent, and all easy to get wrong by chasing a finish that is current. Chrome and brushed nickel have looked right for decades. More importantly, bars come in finishes that match trim rather than announcing themselves as medical equipment — which is a large part of whether someone is comfortable having them in their bathroom at all.',
    ],
    localFaqs: [
      {
        q: 'Do grab bars have to look institutional?',
        a: 'No. Rated bars come in the same finishes as valve trim, and some double as shelves or towel rails. That is a large part of whether people are comfortable having them.',
      },
      {
        q: 'Which finish lasts best?',
        a: 'Chrome and brushed nickel have stayed right for decades and hide water spotting well. Matt black and unlacquered brass are handsome and show marks more.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Walk-in tub in Villa Hills? Nobody can cut a door into your existing tub. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There are firms offering to cut an opening into an existing tub and fit a seal — cheaper, quicker, done in a day. We do not, because the whole engineering of a walk-in tub is a door in a moulded shell designed around it, and a retrofitted opening in steel or cast iron relies on a bonded joint holding back standing water for years. It is a leak waiting to happen in a room you cannot easily protect. We take the old tub out and fit a purpose-built unit.',
    ],
    localFaqs: [
      {
        q: 'Can you cut a door into our existing tub?',
        a: 'We will not. The engineering of a walk-in tub is a door in a shell designed around it — a retrofitted opening relies on a bonded joint holding back standing water for years, and that is a leak waiting to happen.',
      },
      {
        q: 'Is a conversion ever acceptable?',
        a: 'It is cheaper and it is not something we would put in a client’s house. We would rather explain why and lose the job than fit one.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Walk-in tub in Lakeside Park? Expect fifteen to twenty years, with a seal change along the way. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'A quality walk-in tub installed properly should give fifteen to twenty years of daily use, with the door seal replaced somewhere in that span and possibly a pump toward the end. That is a realistic expectation rather than a sales figure, and it is why we fit units with genuine parts support and design in access from the start. A tub with no available seal in year eight is a very expensive problem.',
    ],
    localFaqs: [
      {
        q: 'How long should a walk-in tub last?',
        a: 'Fifteen to twenty years of daily use on a quality unit, with the door seal replaced somewhere in that span. That is realistic rather than a sales figure.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Wipe the seal dry and keep it free of soap residue, run the cleaning cycle if it has water jets, and keep the drain clear. That is genuinely most of it.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Walk-in tub in Crescent Springs? Ask for the price itemised — ours is. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'This is a product where a single headline number hides a great deal. Ours breaks out the tub itself, removal and disposal, floor preparation or reinforcement, plumbing, electrical work, the surround, grab bars, flooring and ventilation, with labour against each. That is what lets you compare quotes honestly — and in this trade, the gap between two numbers is frequently the electrical work or the floor preparation being quietly left out.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'The tub, removal and disposal, floor preparation, plumbing, electrical work, the surround, grab bars, flooring and ventilation — itemised, with labour against each.',
      },
      {
        q: 'How do we compare two quotes?',
        a: 'Line by line. Ask specifically whether floor reinforcement and dedicated electrical circuits are included — that is usually where a cheaper number comes from.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Walk-in tub in Crestview Hills? Put it in the bathroom the person actually uses. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'The obvious place for a walk-in tub is the biggest bathroom, and it is frequently the wrong one. What matters is which bathroom is nearest to where the person sleeps, on a floor they can reach, with a route that does not turn a tight corner in the night. A smaller room close by beats a larger one down a hall, and it is worth walking that route before deciding.',
    ],
    localFaqs: [
      {
        q: 'Which bathroom should it go in?',
        a: 'The one nearest where the person sleeps, on a floor they can reach — not automatically the largest. Walk the route at night before deciding; it usually settles the question.',
      },
      {
        q: 'What if that room is small?',
        a: 'Shorter models and a planned door swing solve most small rooms. Proximity is worth more than floor area here.',
      },
    ],
  },

  edgewood: {
    intro:
      'Walk-in tub in Edgewood? If there is a discharge date, tell us at the first call. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Near the hospital a great many of our enquiries carry a date — someone coming home and needing a bathroom that works. The honest constraint is lead time: most walk-in tubs are made to order and that is weeks, not days. If the date is tight, a level-entry shower with a bench, bars and a handheld can frequently be done far sooner and may suit the person better anyway. We will say which applies rather than taking the order.',
    ],
    localFaqs: [
      {
        q: 'Can you meet a discharge date?',
        a: 'Sometimes, but most walk-in tubs are made to order and that is weeks rather than days. Tell us the date at the first call and we will be honest about whether it works.',
      },
      {
        q: 'What can be done faster?',
        a: 'A level-entry shower with a bench, anchored bars and a handheld — quicker to install and frequently better for someone using a walker.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Walk-in tub in Taylor Mill? Winter is a fine time to do this. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'The work is entirely interior, so weather is irrelevant to the installation — and the quieter months mean better availability and firmer dates. There is one genuine seasonal point: leave the heating on so the room stays warm while adhesives and grout cure. And if the tub is going in because winter is when someone struggles most, doing it before the cold rather than during it is worth the earlier order.',
    ],
    localFaqs: [
      {
        q: 'Should we wait until spring?',
        a: 'No need — the work is interior and availability is usually better in the quieter months. Just leave the heating on while adhesives and grout cure.',
      },
      {
        q: 'Is the bathroom out of use throughout?',
        a: 'Not entirely. Over the two to three days the water is off for parts of each day rather than continuously, and we give you those windows in advance.',
      },
    ],
  },

  elsmere: {
    intro:
      'Walk-in tub in Elsmere? Here is exactly when money changes hands. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Worth stating plainly, because this is a product sold with pressure by some firms. A deposit at signing orders the tub — which is genuine, since most are made to order. The balance falls due on completion, after the final walkthrough. We do not ask for the full amount up front, we do not offer a discount that expires that evening, and nothing appears at the end that was not in the signed itemisation.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing to order the tub, and the balance on completion after the final walkthrough. Nothing is added at the end that was not in the signed itemisation.',
      },
      {
        q: 'Is there a discount for signing today?',
        a: 'No. Same-evening pricing pressure is a sales tactic and we do not use it — the price is the price whenever you decide.',
      },
    ],
  },

  independence: {
    intro:
      'Walk-in tub in Independence? Here is what the warranty covers and what it does not. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Two warranties apply and they are different things. Ours covers how the installation was built — the setting and levelling, the plumbing and electrical connections, the surround and the waterproofing. The manufacturer’s covers the tub, the door seal, the pump and the control board, and those terms vary considerably between makers. We register it for you and we will tell you what it actually says before you buy rather than afterwards.',
    ],
    localFaqs: [
      {
        q: 'What does your warranty cover?',
        a: 'How the installation was built — the setting and levelling, the plumbing and electrical connections, the surround and waterproofing. The tub, seal, pump and board are the manufacturer’s.',
      },
      {
        q: 'Are manufacturer warranties all the same?',
        a: 'Not remotely — coverage on the seal and the pump varies a lot. We will tell you what a given unit’s terms actually say before you buy rather than after.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Walk-in tub in Dayton? Shallow old walls, a deep valve and a tall tub. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Two things collide in houses this old. Modern thermostatic valve bodies are deeper than what they replace, and the shallow stud walls here sometimes cannot take one without furring the wall out. And a walk-in tub is taller, so the surround runs higher than the old tile line. Both change where the finished wall sits, which matters where original trim meets it. We check both against the specific model before ordering.',
    ],
    localFaqs: [
      {
        q: 'Will a modern valve fit our old walls?',
        a: 'Usually, but sometimes only by furring the wall out slightly. We measure the wall depth against the specific valve before ordering rather than after.',
      },
      {
        q: 'Does the taller tub change the wall too?',
        a: 'Yes — the surround has to run higher than the old tile line. Where original trim meets it, we plan that junction rather than discovering it.',
      },
    ],
  },

  southgate: {
    intro:
      'Walk-in tub in Southgate? Four questions decide whether this is the right product. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Rather than a sales conversation, four questions. Does the person want to bathe, or do they mainly shower? Can they step over a threshold of three to seven inches? Can they lower onto a seat and rise from it wet? And is there another bathroom in the house? Those answers point clearly to a walk-in tub, a level-entry shower, or something else entirely — and we would rather work through them than demonstrate a product.',
    ],
    localFaqs: [
      {
        q: 'How do we know a walk-in tub is right?',
        a: 'Whether they want to bathe rather than shower, whether they can step over a three to seven inch threshold, whether they can rise from a seat wet, and whether there is another bathroom. Those four answers settle it.',
      },
      {
        q: 'What if the answers point elsewhere?',
        a: 'Then we recommend elsewhere — usually a level-entry shower. We would rather be right than make the larger sale.',
      },
    ],
  },

  wilder: {
    intro:
      'Walk-in tub in Wilder? If you sell, the warranty and paperwork follow the house. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'People installing accessibility work reasonably ask what happens if the house is sold — often sooner than expected, because circumstances change. Our workmanship warranty is tied to the installation rather than to you personally, and the manufacturer registration transfers on most units. Keep both with the itemised specification: a buyer seeing exactly what was installed and by whom is a genuine part of what the work is worth.',
    ],
    localFaqs: [
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'Ours is tied to the installation rather than to you personally, and most manufacturer registrations transfer too. We provide the documentation for a sale.',
      },
      {
        q: 'Do you work on the residential side here?',
        a: 'Yes — residential remodeling is all we do. Wilder is better known for its commercial base, but the neighborhoods here are ordinary housing.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Walk-in tub in Highland Heights? Honestly, this is rarely the right product for a rental. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'A walk-in tub in a student let is the wrong fixture: tenants want a shower, the maintenance falls to the landlord, and the seal is a wear part in a bathroom nobody will wipe down. We would say so rather than take the order. Where it makes sense here is an owner-occupied home, or a landlord deliberately creating one accessible unit — which is a legitimate strategy worth planning properly.',
    ],
    localFaqs: [
      {
        q: 'Does a walk-in tub suit a rental?',
        a: 'Rarely near campus. Tenants want a shower, the maintenance falls to you, and the seal is a wear part nobody will look after. We would say so rather than take the order.',
      },
      {
        q: 'What would suit better?',
        a: 'A level-entry shower with blocking for grab bars — it suits far more tenants, costs less and needs almost no maintenance.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Walk-in tub in Cold Spring? Just bought the house? Do it before you move in. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'A two-to-three day installation is dramatically easier in an empty house — no furniture to protect, no household working around a bathroom that is out of use, no living with the dust. In a growing area plenty of people here have just closed, and where a walk-in tub is part of the plan for a parent moving in or a long-term stay, the window between closing and moving is the best time it will ever be.',
    ],
    localFaqs: [
      {
        q: 'Should we do it before moving in?',
        a: 'If there is a gap between closing and moving, yes. A two-to-three day install is far easier in an empty house, and lead time on the tub often fits that window anyway.',
      },
      {
        q: 'How soon should we order?',
        a: 'As early as you can — most units are made to order, so the lead time is the constraint rather than our schedule.',
      },
    ],
  },

  alexandria: {
    intro:
      'Walk-in tub in Alexandria? On a well, filling one is a real test of the system. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'A walk-in tub draws sustained volume rather than the intermittent demand a shower makes, and on a private well that is exactly what exposes an undersized pressure tank or a pump cycling too often. Since the person is sitting inside waiting, a slow or surging fill is not a minor annoyance. We check the tank settings and pump capacity before recommending a model, and on semi-rural properties the septic system’s capacity too.',
    ],
    localFaqs: [
      {
        q: 'Will our well fill a walk-in tub properly?',
        a: 'It depends on the pump and pressure tank rather than the tub. Sustained volume is a different demand from a shower, and with someone sitting inside waiting, a slow fill matters.',
      },
      {
        q: 'Does it strain a septic system?',
        a: 'It sends a larger volume in surges than a standard tub, so capacity is worth confirming at design stage rather than assuming.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Walk-in tub in Melbourne? The same installers from removal to final test. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'In a village this small you will hear about it if a contractor turns up with a different crew each day. We do not subcontract: the people who take the old tub out are the ones who level the new one, make the connections and run the seal test, with one project manager over the job. On a product where the door seal depends on the tub being set true, that continuity is not a nicety.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes. Our own installers throughout, with one project manager. On a product where the seal depends on the tub being set true, whoever levelled it is the one accountable for it.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we are honest about scheduling rather than promising a date we would have to move.',
      },
    ],
  },

  hebron: {
    intro:
      'Walk-in tub in Hebron? Your basement may already be roughed in for a bathroom. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Builders in this housing frequently roughed in a lower-level bathroom and capped it — a drain stub, a vent and sometimes supply sitting under the slab. Where that exists and stairs are becoming difficult, an accessible bathroom with a walk-in tub on the entry level is dramatically cheaper than starting from nothing. It takes minutes to check on a site visit and it is the first thing we look for here.',
    ],
    localFaqs: [
      {
        q: 'How do we know if the basement is roughed in?',
        a: 'Look for capped pipe stubs in the slab, often in a corner or under a stair. If they are there, an accessible lower-level bathroom becomes far more affordable.',
      },
      {
        q: 'Is a lower level a good place for a walk-in tub?',
        a: 'Where it is a walkout or the person can reach it easily, yes. If getting downstairs is already hard, it solves the wrong problem — and we will say so.',
      },
    ],
  },

  burlington: {
    intro:
      'Walk-in tub in Burlington? The room still has to meet its clearances. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'A walk-in tub with an outward-swinging door consumes floor space that the rest of the bathroom may need. There is a required clear width around a toilet and clearance in front of it, and a door cannot swing into a fixture — the tub’s door included. Getting that wrong fails inspection on a permitted job, and it is entirely avoidable by drawing the whole room and both door swings together rather than the tub alone.',
    ],
    localFaqs: [
      {
        q: 'Will the tub door swing clash with anything?',
        a: 'It can — with the room door, the toilet clearance or the basin. We draw the whole room and both swings together rather than the tub alone.',
      },
      {
        q: 'Would an inspector pick that up?',
        a: 'On a permitted job, yes. It is one of the more common reasons work fails, and it is entirely avoidable at design stage.',
      },
    ],
  },

  union: {
    intro:
      'Walk-in tub in Union? The unused garden tub is the obvious place for it. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'The primary suites in this housing came with a large garden tub that has been used a handful of times, and it is frequently the ideal spot for a walk-in: generous footprint, drainage already there, and usually room beside it for someone to assist. Better still, the hall bath keeps a conventional tub — which answers the resale question and keeps the rest of the household comfortable at the same time.',
    ],
    localFaqs: [
      {
        q: 'Can the garden tub be replaced with a walk-in?',
        a: 'It is frequently the ideal position — generous footprint, drainage already in that zone, and usually room beside it to assist. The hall bath then keeps a conventional tub.',
      },
      {
        q: 'Does that solve the resale concern?',
        a: 'Largely. A house with a walk-in in the primary suite and a normal tub in the hall bath suits far more buyers than one with only a walk-in.',
      },
    ],
  },

  walton: {
    intro:
      'Walk-in tub in Walton? On softened water, a jetted system stays cleaner. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'Many of the rural properties here run a softener, and for a jetted walk-in tub that is a genuine advantage — scale is what narrows jets and builds inside pipework over years, and softened water largely removes it. Where a house is on hard well water without treatment, we would steer you toward air jets or a plain soaker rather than a system that will silt up invisibly.',
    ],
    localFaqs: [
      {
        q: 'Does water hardness affect a jetted tub?',
        a: 'Considerably. Scale narrows jets and builds inside pipework you cannot see. On softened water that largely goes away; on hard well water we would steer you to air jets or a soaker.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, it is the southern edge of our area. We schedule it as a block because it is a multi-day job at distance.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Walk-in tub in Mount Carmel? An interior bathroom must vent through the roof. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'The ranch plans here often put the bathroom in the middle of the house with no exterior wall, and the shortcut is to duct the extractor into the loft. With a walk-in tub that matters more than usual: a full tub of hot water sitting for a long soak puts sustained moisture into the room, far more than a shower does. Ducted into a roof space, that condenses on the underside of the deck. A proper roof or soffit termination is the only real answer.',
    ],
    localFaqs: [
      {
        q: 'Where does the extractor vent if there is no outside wall?',
        a: 'Through the roof or to a soffit termination. A full tub of hot water puts sustained moisture into the room, and ducting that into a loft just relocates the problem.',
      },
      {
        q: 'Does a walk-in tub need more ventilation than a shower?',
        a: 'It puts moisture in more steadily over a longer period. We size the fan for the room and the use rather than to a builder default.',
      },
    ],
  },

  summerside: {
    intro:
      'Walk-in tub in Summerside? A slip-resistant floor matters more than the tile pattern. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'The floor immediately outside a walk-in tub is where someone steps out wet, already cooled from waiting for it to drain, and possibly unsteady. That surface needs a genuine slip rating rather than a polished finish — which rules out a good deal of what looks best in a showroom. It is the one place we will push back on an aesthetic choice, and it costs nothing extra to get right at specification.',
    ],
    localFaqs: [
      {
        q: 'What flooring should go outside the tub?',
        a: 'Something with a genuine slip rating rather than a polished finish. It is where someone steps out wet and possibly unsteady, and it is the one place we will push back on looks.',
      },
      {
        q: 'Does textured flooring look poor?',
        a: 'Not remotely — there are textured porcelains that look excellent. The finishes to avoid are the highly polished ones, and there is plenty of choice beyond them.',
      },
    ],
  },

  withamsville: {
    intro:
      'Walk-in tub in Withamsville? Keeping the existing floor is possible but needs checking. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Retaining a sound bathroom floor saves real money, but a walk-in tub sets a harder condition than a standard one: it has to sit dead level on a solid substrate for the door to seal correctly. Where the existing floor is level, sound and well bonded, keeping it is fine. Where it has any movement or has been laid over previous coverings, it comes up. We check with a level and by lifting a corner rather than judging from the surface.',
    ],
    localFaqs: [
      {
        q: 'Can we keep the existing floor?',
        a: 'Where it is level, sound and well bonded, yes. A walk-in tub has to sit dead level for the door to seal, so we check with a level and lift a corner rather than judging from the surface.',
      },
      {
        q: 'What if it has been laid over old flooring?',
        a: 'Then it usually comes up. Layered coverings are not a substrate we would set this tub on.',
      },
    ],
  },

  milford: {
    intro:
      'Walk-in tub in Milford? In a 19th-century house, the junction is where care shows. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'A walk-in tub is a large modern object meeting walls that are neither flat nor square, and it is taller than what it replaces so it meets more of them. That junction is where inexperienced work shows — a bead of silicone bridging a visible gap, or a surround edge running out of line. Done properly the substrate is packed out to meet the plaster and the transition is a deliberate detail rather than a fill.',
    ],
    localFaqs: [
      {
        q: 'How do you handle the join between the tub surround and old plaster?',
        a: 'By planning it rather than caulking it — the substrate packed out to meet the wall and a deliberate trim or reveal at the transition. It is where inexperienced work shows.',
      },
      {
        q: 'Will the old plaster survive?',
        a: 'Largely, with care. Some making-good at the edges is normal in a house this age, and it is in the quote rather than raised afterwards.',
      },
    ],
  },

  mulberry: {
    intro:
      'Walk-in tub in Mulberry? On a fixed budget, the tub is where the money should go. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Where the budget will not stretch to everything, spreading it thin produces the worst outcome — a cheap tub with a poor seal, a bit of tile and a vanity that still does not match. Our advice is to buy the tub and the installation properly, including the floor preparation and the electrics, and leave the vanity, the floor finish and the decoration for another year. The tub is the part that has to be right first time.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget prioritise?',
        a: 'The tub and the installation — including floor preparation and proper electrics. Vanity, floor finish and decoration can wait. The tub is the part that has to be right first time.',
      },
      {
        q: 'Is it more expensive to do it in stages?',
        a: 'Somewhat, because of repeat mobilisation. Far less expensive than a poorly specified tub that has to come out.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Walk-in tub in Mount Repose? Buy a brand whose parts will still exist. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'This is the single most important thing about choosing a walk-in tub and the one nobody asks about. The door seal, the pump and the control board will all need attention within the life of the tub, and if the manufacturer has gone or discontinued the line, the answer is replacing the whole unit. We fit established makers with genuine parts support, and we will tell you which brands we would not put in a client’s house.',
    ],
    localFaqs: [
      {
        q: 'Does the brand matter?',
        a: 'More than any feature. The seal, pump and control board all need attention within the tub’s life, and if the maker has gone the answer is replacing the whole unit.',
      },
      {
        q: 'How do we check?',
        a: 'Ask how long the line has been in production and whether seals and pumps are stocked as spares. We will tell you plainly which units we would not fit.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Walk-in tub in Day Heights? On septic, the drain run has to avoid the field. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'A walk-in tub discharges a large volume at once, so on a septic system both the capacity and the run matter. The new waste has to reach the existing line without disturbing the tank or the drain field, and on larger semi-rural lots owners frequently do not know precisely where those sit. Locating them before anything is dug is quick and it avoids the one genuinely expensive mistake here.',
    ],
    localFaqs: [
      {
        q: 'Does a walk-in tub affect our septic system?',
        a: 'It sends a larger volume in surges, so capacity is worth confirming. The waste run also has to reach the line without disturbing the tank or the field.',
      },
      {
        q: 'Do you need to know where the drain field is?',
        a: 'Yes, and many owners of larger lots do not. Locating it first is quick and avoids the one mistake here that is genuinely expensive to put right.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Walk-in tub in New Richmond? A tall room takes the tub’s bulk better than a small one. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'One genuine advantage of these high-ceilinged rooms: a walk-in tub is tall, and in a nine or ten foot room it does not dominate the way it does under a modern eight-foot ceiling. That gives more freedom in how the surround is finished — the bulk can be broken up with a panelled skirt and the tile line set to a proportion that suits the room rather than running to the ceiling by default.',
    ],
    localFaqs: [
      {
        q: 'Will a walk-in tub dominate a period bathroom?',
        a: 'Less in a room with nine or ten foot ceilings than under a modern eight-foot one. The height gives freedom to break the bulk up with a panelled surround and a considered tile line.',
      },
      {
        q: 'How high should the tile run?',
        a: 'To full height in the wet zone, and to a line that suits the room’s proportions elsewhere — rather than to the ceiling by default, which can read as clinical in a period room.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Walk-in tub in Amelia? Ask what the fill and drain times actually are. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'These are the two numbers that decide whether a walk-in tub gets used, and they are the two nobody quotes. Fill time depends on the supply line and the spout; drain time on the valve and the waste run. Together they are minutes spent sitting there at each end of every bath. We measure both at your house and tell you the real figures rather than a manufacturer’s best case.',
    ],
    localFaqs: [
      {
        q: 'How long does filling and draining take?',
        a: 'It depends on your supply and waste rather than the tub, and it is the number that decides whether it gets used. We measure both at your house rather than quoting a best case.',
      },
      {
        q: 'Can those times be improved?',
        a: 'Yes — a larger supply run to the tub and a fast-drain valve on an adequately sized waste. Both are specified up front rather than discovered.',
      },
    ],
  },

  batavia: {
    intro:
      'Walk-in tub in Batavia? Bars that match the trim are the ones people accept. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The most common reason a bathroom is unsafe is that somebody refused the grab bars — because they picture institutional stainless tube and what it says about them. That is a specification problem. Rated bars come in the same finishes as valve trim, and some function as shelves or towel rails. The blocking has to go in either way, so the sensible route is prepare the wall and choose a bar that does not announce itself.',
    ],
    localFaqs: [
      {
        q: 'Do grab bars have to look medical?',
        a: 'No — rated bars come in the same finishes as valve trim, and some double as shelves or towel rails. That is frequently the difference between bars being fitted and being refused.',
      },
      {
        q: 'What if they will not have bars at all?',
        a: 'Fit the blocking anyway. The wall is then ready whenever they change their mind, and it costs almost nothing while the surround is open.',
      },
    ],
  },

  owensville: {
    intro:
      'Walk-in tub in Owensville? Have the person who will use it at the site visit. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we travel to reach the eastern villages, it is worth making the visit count — and the single most useful thing is having the person the tub is for present. Seat height, threshold height, door hand and bar positions are all decided against how they actually move, and none of it can be judged from a floor plan. Ten minutes of watching settles questions that would otherwise be guesses.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the site visit?',
        a: 'Access to the bathroom and below it, the main shutoff, a rough build date, and ideally the person the tub is for — seat height, door hand and bar positions are all decided against how they move.',
      },
      {
        q: 'Will you need to open anything?',
        a: 'A small area and a look at the floor from below, with your agreement. It is the only honest way to price a fixed-cost job.',
      },
    ],
  },

  goshen: {
    intro:
      'Walk-in tub in Goshen? On a rural property, getting the tub to the house comes first. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'A walk-in tub is a large rigid crate that has to reach the bathroom, and on a rural property the first obstacle is often the drive rather than the door — a long gravel approach, a soft verge after rain, or a turning circle that will not take a delivery vehicle. We check the approach on the site visit alongside the interior route, because a tub that cannot be delivered on the day costs everybody a week.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in tub be delivered to a rural property?',
        a: 'Usually, but the approach gets checked alongside the interior route — a long gravel drive, a soft verge or a tight turning circle are all real obstacles on delivery day.',
      },
      {
        q: 'What about septic capacity?',
        a: 'Worth confirming, since a walk-in sends a larger volume in surges than a standard tub. We establish it at design stage.',
      },
    ],
  },

  moscow: {
    intro:
      'Walk-in tub in Moscow? For staying in the house, this is a modest sum. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'In a small village where people have often been in the same house for decades, the honest framing is not about hydrotherapy or resale — it is that the bathroom is frequently the thing that finally forces a move. Set against relocating, or against care, a walk-in tub is a small figure for staying somewhere you know, near people you know. That is the argument, and we would rather make it plainly than dress it up.',
    ],
    localFaqs: [
      {
        q: 'Is it worth it at our age?',
        a: 'Measured against moving house or paying for care, it is a modest sum — and that is the real argument. We would rather put it that way than sell you on features.',
      },
      {
        q: 'Does insurance cover any of it?',
        a: 'Usually not. Standard Medicare does not treat a walk-in tub as durable medical equipment and most insurers decline. Check your own plan rather than relying on anyone’s assurance.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Walk-in tub in Newtonsville? Here is what we need from you on the days we are there. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the northeastern villages and this is a two-to-three day job, a lost morning is expensive for both of us. What makes it run: the bathroom cleared, a route from the door wide enough for a crated tub, parking within reach, pets elsewhere, access to the shutoff, and somewhere the crate can be unpacked. That is the whole list, and with it in place the schedule holds.',
    ],
    localFaqs: [
      {
        q: 'What do we need to do before the install?',
        a: 'Clear the bathroom, keep a route from the door wide enough for a crated tub, make parking available, keep pets elsewhere, and give us access to the shutoff and somewhere to unpack.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, and we schedule it as a block rather than fitting it around closer work. That is why the dates we put in writing hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Walk-in tub in Williamsburg? A cold exterior wall behind the tub is felt from inside. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'In 19th-century houses the bathroom is frequently an addition on an exterior wall with little insulation. That matters more with a walk-in tub than any other fixture, because you sit against that wall wet, waiting, twice per bath. Insulating the cavity properly while the wall is open is inexpensive and it is the difference between a tub that gets used in January and one that does not.',
    ],
    localFaqs: [
      {
        q: 'Should we insulate behind the tub?',
        a: 'On an exterior wall in a house this age, definitely. You sit against it wet for several minutes at each end of the bath, and a cold wall is felt.',
      },
      {
        q: 'What else helps in winter?',
        a: 'A heated seat and backrest, and a properly sized extractor so the room is not left damp and chilled. Both decided at design stage.',
      },
    ],
  },

  bethel: {
    intro:
      'Walk-in tub in Bethel? Safety fittings before hydrotherapy, every time. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Where someone is living alone in an older house on a limited budget, the order is clear to us even when a showroom would sell it differently. A reliable door seal, a thermostatic valve with a limit stop, a fast-drain, a heated seat, a rated bar in real blocking and a slip-resistant floor. Those come first. Jets, lighting packages and remote controls come after, and frequently not at all.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget cover?',
        a: 'A reliable seal, a thermostatic valve with a limit stop, a fast-drain, a heated seat, a rated bar in real blocking and a slip-resistant floor. Those are what make it safe and usable.',
      },
      {
        q: 'Are jets worth having?',
        a: 'Only if they will genuinely be used and maintained. In most houses here we would put that money into the floor and the fittings instead.',
      },
    ],
  },

  ross: {
    intro:
      'Walk-in tub in Ross? Hard well water and jetted pipework are a poor combination. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Where a property is on hard well water without treatment, scale builds inside jetted pipework you cannot see, narrowing the jets over years and holding residue. That is a real argument for an air system, which purges itself, or a plain soaker with nothing internal at all. It is also an argument for treatment — but if the softener is not happening, we would specify around the water you actually have.',
    ],
    localFaqs: [
      {
        q: 'Does hard water rule out a jetted tub?',
        a: 'Not rule out, but it makes water jets a poor choice without treatment — scale builds inside pipework you cannot see. Air jets purge themselves and a soaker has nothing internal.',
      },
      {
        q: 'Should we soften the water first?',
        a: 'It would help throughout the house. If it is not happening, we specify around the water you actually have rather than the water we wish you had.',
      },
    ],
  },

  fairfield: {
    intro:
      'Walk-in tub in Fairfield? The wrong cleaner will ruin the seal and the surface. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'People finish a new tub and reach for whatever is strongest, and with a walk-in that costs more than usual. Abrasives dull the acrylic permanently. Bleach and solvent cleaners degrade the door gasket — the one component the whole product depends on. A mild detergent, a soft cloth and wiping the seal dry after use is genuinely the whole maintenance routine, and it is what gets the tub to fifteen years.',
    ],
    localFaqs: [
      {
        q: 'How should a walk-in tub be cleaned?',
        a: 'Mild detergent and a soft cloth, and wipe the door seal dry after use. Avoid abrasives, which dull acrylic permanently, and bleach or solvents, which degrade the gasket.',
      },
      {
        q: 'How do we keep the seal in good condition?',
        a: 'Keep it clean of soap residue and dry it after use. That is genuinely most of what determines whether it lasts years or needs early replacement.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Walk-in tub in Beckett Ridge? The HOA governs the outside — the bathroom is yours. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'People in planned communities reasonably ask whether they need permission, and for an interior bathroom the answer is no — an association concerns itself with what is visible from outside. Township permitting does apply, since the plumbing is altered and dedicated circuits are added, and we file that. The housing here is otherwise straightforward: modern floor structure and a panel that usually has capacity.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval?',
        a: 'No — an association concerns itself with what is visible from outside. Township permitting does apply for the plumbing and electrical work, and we file that.',
      },
      {
        q: 'Is installation simpler in a house of this era?',
        a: 'Considerably. Modern floor structure and a panel with spare capacity remove most of the unknowns that add cost in older housing.',
      },
    ],
  },

  wetherington: {
    intro:
      'Walk-in tub in Wetherington? In a suite this size, consider a wet room alongside. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Where a primary suite is genuinely large, the best accessible outcome is usually both: a walk-in tub for someone who wants to bathe, and a level-entry shower with a bench for the days when sitting and rising is harder, or for anyone else in the house. That combination covers what neither does alone, and a suite of this size can frequently take it without moving walls.',
    ],
    localFaqs: [
      {
        q: 'Should we have both a walk-in tub and a level-entry shower?',
        a: 'In a suite this size, frequently the best outcome. The tub for bathing, the shower for days when sitting and rising is harder — and for everyone else in the house.',
      },
      {
        q: 'Does that need walls moved?',
        a: 'Often not in a room this size. We draw it against the existing footprint first and only suggest moving anything if the layout genuinely requires it.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Walk-in tub in Hamilton? Century-old supply pipe will not fill one properly. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Galvanised pipe in these houses has corroded inward to a fraction of its original bore, and a walk-in tub is the fixture that exposes it most plainly — because someone sits inside waiting for it. Replacing the run serving the bathroom back to the nearest accessible junction is the sensible scope: it fixes the fill without becoming a whole-house repipe. We show you what we found and let you decide.',
    ],
    localFaqs: [
      {
        q: 'Will an old house fill a walk-in tub fast enough?',
        a: 'Not on corroded galvanised pipe. Since someone sits inside waiting, that matters more than with any other fixture — so we measure the flow before recommending a model.',
      },
      {
        q: 'How much pipe gets replaced?',
        a: 'Normally back to the nearest accessible junction, which fixes the fill without becoming a whole-house repipe. We show you what we found rather than deciding for you.',
      },
    ],
  },

  millville: {
    intro:
      'Walk-in tub in Millville? Lead time is weeks — order earlier than feels necessary. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'The constraint on this job is almost never our schedule — it is the tub. Most walk-in models are made to order, and a particular size, door hand or configuration is weeks rather than days. Where somebody needs the bathroom working by a date, ordering early is the only thing that helps. We give you the realistic lead time at quotation rather than the one that closes the sale.',
    ],
    localFaqs: [
      {
        q: 'How far ahead should we order?',
        a: 'Earlier than feels necessary. Most walk-in tubs are made to order and a specific size or door hand is weeks, not days. Our schedule is rarely the constraint.',
      },
      {
        q: 'Is anything available quicker?',
        a: 'Some standard sizes are stocked, and we will tell you which. If speed matters more than an exact specification, that is the route.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Walk-in tub in New Miami? Above a kitchen, the seal and the floor both matter twice over. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'In these compact houses the bathroom sits directly over the kitchen more often than not, and a walk-in tub concentrates both risks: a large volume of water and a door seal that is a wear part. That is why the whole floor gets a bonded membrane rather than a waterproofed corner, and why we fit units whose seal is a serviceable, available part. Over a kitchen ceiling, neither is where to save money.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is above the kitchen — what protects it?',
        a: 'A bonded membrane across the whole floor rather than a waterproofed corner, and a unit whose door seal is a serviceable, available part. Over a kitchen, neither is where to economise.',
      },
      {
        q: 'What if the floor already shows a stain below?',
        a: 'We open it and check the joists and subfloor before quoting — particularly important here, since the new tub weighs more when full.',
      },
    ],
  },

  monroe: {
    intro:
      'Walk-in tub in Monroe? Working from home? The noisy part is short and schedulable. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Over two to three days the genuinely loud stretch is short — removing the old tub and surround, and any floor preparation. The rest is plumbing, electrical and finishing work that is no louder than a conversation. If you are on calls from home, tell us at booking and we will front-load the noise into a morning. Monroe straddles two counties, so we also confirm which jurisdiction issues the permit before scheduling.',
    ],
    localFaqs: [
      {
        q: 'How disruptive is it over two to three days?',
        a: 'The loud stretch is short — removal and floor preparation. The rest is quiet work. Tell us if you work from home and we will front-load the noise into a morning.',
      },
      {
        q: 'Which county issues our permit?',
        a: 'It depends which side of the line the property sits on, since Monroe straddles Butler and Warren. We confirm before scheduling.',
      },
    ],
  },

  landen: {
    intro:
      'Walk-in tub in Landen? In an attached home, the pump is heard next door. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, a jetted walk-in tub adds a noise that runs for the length of a bath through a shared wall — and baths often happen at the ends of the day. Isolating the pump on its mounts and insulating the pipe run handle most of it, and an air system is quieter than water jets. All of it is cheap while the wall is open and impossible afterwards.',
    ],
    localFaqs: [
      {
        q: 'Will the neighbours hear the pump?',
        a: 'Through a shared wall, potentially — and it runs for the length of the bath. Isolating the pump and insulating the pipe run handle most of it, and air systems are quieter than water jets.',
      },
      {
        q: 'Can we alter plumbing on a shared wall?',
        a: 'It depends whether the stack serves both homes, which we establish before designing rather than assuming.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Walk-in tub in Loveland Park? The old sliding door frame leaves holes that need proper repair. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Almost every tub in this housing has a framed sliding glass door screwed and sealed through the tile into the substrate. Those penetrations have to be properly made good rather than filled — and with a walk-in tub the surround runs higher than the old one, so more of that old wall is exposed and dealt with rather than covered. It is unglamorous and it is where water gets into a wall if it is skipped.',
    ],
    localFaqs: [
      {
        q: 'What happens to the holes from the old door frame?',
        a: 'They are properly made good rather than filled and covered. With a walk-in the surround runs higher, so more of the old wall is exposed and dealt with rather than hidden.',
      },
      {
        q: 'Can any of the old tile be kept?',
        a: 'Sometimes at the edges, but the surround has to run higher than before — so in practice most of it comes out. We will show you where the line falls.',
      },
    ],
  },

  maineville: {
    intro:
      'Walk-in tub in Maineville? Fit it while there is no deadline and you choose better. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'Most walk-in tubs are bought under pressure, and it shows in the result — whatever model has the shortest lead time, fitted in the week available. Bought ahead of need, you can sit in one, compare seat heights, plan the door hand, sort the water heater and choose on merit. Same money, materially better outcome, and it is worth doing when someone in the household is heading that way rather than when they arrive.',
    ],
    localFaqs: [
      {
        q: 'Is it worth fitting one before it is needed?',
        a: 'It produces a better result for the same money — you can sit in one, compare seat heights and sort the water heater rather than taking whatever has the shortest lead time.',
      },
      {
        q: 'What if we are not ready to decide?',
        a: 'Blocking behind the tile and a slip-resistant floor cost very little now and keep every option open for later.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Walk-in tub in Pleasant Plain? If it is the only bathroom, that changes the plan. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Out here a bathroom out of action for two to three days is a genuine problem, because there is nowhere else to go. So on a single-bathroom house we do not start until the tub and every component is on site and checked, we sequence to keep the toilet usable where possible, and we schedule it as a block. Where a half bath exists, planning around it is part of the job rather than an afterthought.',
    ],
    localFaqs: [
      {
        q: 'We only have one bathroom — how do you manage that?',
        a: 'We do not start until the tub and every component is on site, we sequence to keep the toilet usable where possible, and we schedule it as an uninterrupted block.',
      },
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it deliberately rather than squeezing it in. That honesty about distance is why the dates we write down hold.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Walk-in tub in South Lebanon? In a newer home, check the builder warranty first. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'With this much new construction, plenty of homes here are still inside their builder warranty — and altering plumbing, adding circuits or modifying floor structure can affect what it covers. Worth reading before commissioning work. The good news is that newer houses make this an easy installation: predictable floor structure, serviceable supply lines, and a panel that usually has capacity for the dedicated circuits.',
    ],
    localFaqs: [
      {
        q: 'Will this affect our builder warranty?',
        a: 'It can, where the work touches plumbing, electrical or floor structure. Worth reading the terms before commissioning anything.',
      },
      {
        q: 'Is a newer house easier to work in?',
        a: 'Considerably. Predictable floor structure, serviceable supply lines and a panel with capacity remove most of the unknowns that add cost in older housing.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Walk-in tub in Lawrenceburg? Above a business, the seal is somebody else’s livelihood. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A good deal of downtown housing sits above ground-floor commercial space, and a walk-in tub holds more water than anything else in the building. Over an occupied business that means a full bonded membrane across the whole floor, a unit whose seal is serviceable, and a seal test before handover — not as extras but as the job. Indiana permitting applies, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Our apartment is above a shop — what extra care is taken?',
        a: 'A bonded membrane across the whole floor, a unit whose door seal is a serviceable part, and a fill-and-hold test before handover. Over a business, those are the job rather than extras.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Permitting and inspection run under Indiana rules rather than Ohio, which we confirm before a start date is agreed.',
      },
    ],
  },

  greendale: {
    intro:
      'Walk-in tub in Greendale? If it drains by pump, ask about a power cut. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Where a house is stepped into this hillside, a lower-level bathroom may drain through a sealed ejector — and with a walk-in tub that is a more serious dependency than usual, because the door will not open until the water goes somewhere. If the tub is going in downstairs on a pump, battery backup is worth deciding at the same time rather than after the first outage.',
    ],
    localFaqs: [
      {
        q: 'What if the power fails while someone is in the tub?',
        a: 'If it drains through an ejector, the water has nowhere to go and the door will not open. That is exactly why we raise battery backup at the design stage rather than afterwards.',
      },
      {
        q: 'Will our lower level need a pump?',
        a: 'It depends where the house sits on the hill. We measure the drain elevation on the first visit rather than assuming.',
      },
    ],
  },

  aurora: {
    intro:
      'Walk-in tub in Aurora? Here is what we test before asking for the balance. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'The handover on this job matters more than on any other we do. Before the balance is due we fill the tub above the seal line and hold it, watching the door and frame from outside. We run the drain and time it. We test the thermostatic valve through its range and confirm the limit stop. We run the jets and the heated seat, check every bar for movement, and walk the person through using it themselves — because the point is that they can, unaided.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'The tub is filled above the seal line and held, the drain timed, the valve tested through its range with the limit stop confirmed, the jets and seat run, and every bar checked. Then we walk the person through using it themselves.',
      },
      {
        q: 'What if something shows up later?',
        a: 'Tell us and we come back. The workmanship warranty exists for what does not reveal itself on day one, and the manufacturer covers the unit — we register that for you.',
      },
    ],
  },
};
