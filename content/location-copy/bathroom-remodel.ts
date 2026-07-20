import type { LocationServiceCopy } from '@/components/LocationServicePage';

// Full-bathroom-remodel copy, written per neighborhood.
//
// Cohort 1 — the twelve areas where the housing stock genuinely changes what a
// bathroom remodel involves. Each entry names real, checkable specifics: ZIP,
// the era the housing was built, the landmark or street it's organised around,
// and what that means for the bath. Nothing here is a find-and-replace of a
// place name.
//
// A page is only generated for slugs present in this file — see
// generateStaticParams in app/bathroom-remodel/[location]/page.tsx. To add a
// neighborhood, write it properly here first.

export const bathroomRemodelCopy: Record<string, LocationServiceCopy> = {
  'hyde-park': {
    intro:
      'Planning a bathroom remodel in Hyde Park? The big early-1900s homes around the Square were built with one full bath upstairs and not much else — we reconfigure them into the primary suites they should have been. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is built around Hyde Park Square, and its streets are lined with large early-1900s houses — Tudors, colonials and brick foursquares on deep, tree-shaded lots. They are generous houses by any measure, but their bathrooms are not: a home of that era typically got one full bath on the bedroom floor, often carved out of what had been a closet or a back hallway.',
      'That gap between the size of the house and the size of the bath is the whole job here. There is usually square footage to take — an oversized landing, a linen closet, a back bedroom — and the work is doing it without wrecking what makes the house worth living in. Plaster walls, original trim profiles and cast-iron stacks all need handling rather than demolishing, and on lots this mature the drain lines running out to the street are as old as the house.',
    ],
    commonIntro:
      'In Hyde Park’s large early-1900s homes, the bathroom projects we are asked for most often are:',
    localFaqs: [
      {
        q: 'Can you add a primary bathroom to a Hyde Park home that only has one upstairs bath?',
        a: 'Usually, yes. In the Tudors and foursquares around Hyde Park Square there is almost always space to take from — a deep landing, a linen closet, or a small fourth bedroom. We map the existing plumbing stack first, because working near it is what keeps the cost sensible, then design the suite around what the house will actually give up.',
      },
      {
        q: 'Will a remodel damage the original trim and plaster in my Hyde Park house?',
        a: 'Not if it is planned for. We survey the original millwork before demo, protect or remove-and-reinstate what stays, and match profiles where new trim meets old. Plaster gets cut back to a sound edge rather than torn out wholesale.',
      },
    ],
  },

  oakley: {
    intro:
      'Bathroom remodel in Oakley? The early-1900s bungalows off Madison Road were built with a single small bath, and it usually has not changed since. We gut them back to the studs and rebuild properly. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) runs out from Oakley Square along Madison Road, and much of its housing is early-1900s bungalows and brick homes, with newer infill mixed through. The bungalow footprint is the defining constraint: one bath, usually around five by eight feet, sitting between two bedrooms with a window on the exterior wall.',
      'Almost every Oakley bath we open up has the same history — a 1970s or 1980s surface-level update laid over original plumbing that was never touched. Behind the tile there is commonly galvanised supply, a cast-iron drain, and a subfloor that has been quietly wet around the tub for years. That is why we price these as full gut jobs rather than refits: what is behind the wall determines the result far more than what goes on it.',
    ],
    commonIntro:
      'In Oakley’s early-1900s bungalows, the bathroom work we take on most often is:',
    localFaqs: [
      {
        q: 'My Oakley bungalow only has one bathroom — can you remodel it without leaving us without a bath?',
        a: 'That is the usual situation here, and it is the reason we plan the schedule before demo day rather than during. Materials are ordered and staged first so the room is only out of service for the days it is genuinely being worked on, and we give you the dates in writing up front.',
      },
      {
        q: 'Is it worth reconfiguring a small Oakley bathroom or just replacing the fixtures?',
        a: 'It depends what is behind the wall. If the plumbing is original galvanised and the subfloor has taken water, replacing fixtures is money spent on top of a problem. We will tell you which situation you are in after we open one wall, before you commit to the larger scope.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Bathroom remodel in Mount Lookout? The hilltop streets near Ault Park mix early-1900s homes with larger later houses — and both tend to hide dated baths behind good bones. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) sits on the hill around Mount Lookout Square, running out toward Ault Park on quiet, steep streets. The housing is a genuine mix: early-1900s homes near the square, and larger houses further out where the lots open up.',
      'The hillside is the practical complication. Homes stepped into a grade often have the main bath on a half-level, or a lower-level bath sitting below the sewer line, which changes what is possible and what it costs. We check the drain elevations before drawing anything, because on these streets that single measurement decides whether a new lower-level bath is a straightforward addition or needs an ejector system.',
    ],
    commonIntro:
      'Across Mount Lookout’s hillside homes, the bathroom projects we handle most are:',
    localFaqs: [
      {
        q: 'Can I add a bathroom in the lower level of my Mount Lookout home?',
        a: 'Often, but the hillside grade decides the method. If the drain sits below the sewer line — common on these streets — you need a sealed ejector system rather than a gravity drain. We check the elevation first and price the correct approach rather than discovering it mid-project.',
      },
      {
        q: 'Do you work on the older homes near Mount Lookout Square?',
        a: 'Regularly. The early-1900s houses near the square typically have plaster walls, original trim and cast-iron waste stacks, all of which we plan around rather than rip out by default.',
      },
    ],
  },

  mariemont: {
    intro:
      'Bathroom remodel in Mariemont? The 1920s Tudor Revival homes in this National Historic Landmark village need interiors updated without touching the character they are protected for. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) was laid out in the 1920s as a planned garden community and is now a National Historic Landmark, known for Tudor Revival architecture around its village square. That designation matters practically: exterior alterations are reviewed, so anything that changes a window, a roofline or a wall from the outside needs to be settled before it is designed, not after.',
      'Inside, the story is a century of wear on original plumbing. Mariemont baths were built for 1920s fixtures and 1920s expectations — small footprints, one bath serving several bedrooms, and supply lines that have been in the wall since the village was built. The work here is bringing the function up to date while leaving the envelope and the character alone, which is a different discipline from a straightforward gut.',
    ],
    commonIntro:
      'In Mariemont’s 1920s Tudor Revival homes, the bathroom work we are called for is usually:',
    localFaqs: [
      {
        q: 'Does a bathroom remodel in Mariemont need historic review?',
        a: 'Interior work generally does not, but anything visible from outside can — a new or resized window, a vent penetration on a visible elevation, an exterior wall change. We establish what your specific project touches before design starts, so nothing gets drawn that cannot be built.',
      },
      {
        q: 'Can you keep the original character of a Mariemont bathroom while modernising it?',
        a: 'Yes, and it is usually the right call in a village like this. We keep or replicate what carries the period — trim profiles, door hardware, tile pattern and scale — while everything behind the wall gets replaced. The room reads as original and performs as new.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Bathroom remodel in Terrace Park? The village’s established early-1900s homes sit on low ground near the Little Miami, which shapes both what we build and how we waterproof it. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is a small affluent village on the east side, close to the Little Miami River, with established early-1900s homes on tree-lined streets. The houses have generous rooms and good bones, and — as with most housing of that age — bathrooms that were an afterthought when they were built.',
      'The river proximity is the detail that changes the specification. On low ground near the Little Miami, lower-level and ground-floor bathrooms have a moisture context that a hilltop house does not, so waterproofing here is not the standard package. We specify the substrate, the membrane and the drainage for the conditions the room is actually in, which matters far more in Terrace Park than the tile that goes over it.',
    ],
    commonIntro:
      'In Terrace Park’s established homes near the river, the bathroom projects we see most are:',
    localFaqs: [
      {
        q: 'Does being near the Little Miami affect a bathroom remodel in Terrace Park?',
        a: 'For lower-level and ground-floor baths, yes. The moisture context on low ground near the river means we specify the waterproofing membrane, substrate and drainage for those conditions rather than defaulting to a standard build-up. Upper-floor baths are unaffected.',
      },
      {
        q: 'Can you work around the original character of a Terrace Park home?',
        a: 'Yes. These are established houses with trim and detail worth keeping, and we survey and protect what stays before any demolition begins.',
      },
    ],
  },

  madeira: {
    intro:
      'Bathroom remodel in Madeira? The mid-century homes here are hitting the age where the original bath — pink tile, steel tub, one small vanity — finally has to go. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city of largely mid-century single-family homes on quiet, tree-lined streets. Those houses were well built, but their bathrooms are now sixty or seventy years old and were designed to a standard nobody would choose today: a compact hall bath, a steel tub, wall-hung sink or narrow vanity, and coloured ceramic tile run half-height around the room.',
      'Mid-century construction does make the work more predictable than a pre-war house. Framing is dimensional and regular, the layouts repeat street to street, and the plumbing runs are usually accessible. That means Madeira baths are often good candidates for a genuine reconfiguration — moving a wall to steal from an adjacent closet or hallway — rather than a fixture-for-fixture swap inside the same footprint.',
    ],
    commonIntro:
      'In Madeira’s mid-century homes, the bathroom work we are asked for most often is:',
    localFaqs: [
      {
        q: 'Is my 1950s Madeira bathroom worth gutting or should I just replace fixtures?',
        a: 'At that age it is usually worth the full gut. Behind sixty-year-old tile there is commonly a mortar bed, original supply lines and a subfloor that has taken water around the tub. Replacing fixtures leaves all of that in place and you pay for the room twice.',
      },
      {
        q: 'Can you make a small Madeira hall bath bigger?',
        a: 'Frequently, yes. Mid-century layouts here tend to have a hall linen closet or a corner of an adjacent bedroom that can be taken. Because the framing is regular and the plumbing accessible, moving that wall is far less disruptive than it would be in a pre-war house.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Bathroom remodel in Indian Hill? Large homes on multi-acre lots bring their own considerations — long service runs, private wells and septic, and primary suites built to a different scale. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an east-side village of large properties, many set well back from the road on multi-acre, wooded lots. The bathrooms here are a different brief from the rest of our service area: primary suites at real scale, secondary baths for each bedroom, and finishes specified to match the rest of the house rather than to a budget package.',
      'The practical constraints come from the properties themselves. Long service runs mean plumbing and hot-water delivery need designing rather than assuming — a primary suite at the far end of a large house has real distance from the water heater. Some homes here run on private wells and septic, which affects fixture selection, water treatment and what additional load the system can take. We establish all of that before specifying anything.',
    ],
    commonIntro:
      'In Indian Hill’s larger homes, the bathroom work we are engaged for is usually:',
    localFaqs: [
      {
        q: 'We are on a private well and septic in Indian Hill — does that limit a bathroom addition?',
        a: 'It shapes it rather than blocks it. Adding fixtures adds load to the septic system, so we confirm its capacity before designing. On well water, we also look at treatment, because water chemistry affects both fixture finish life and what valves we would specify.',
      },
      {
        q: 'Our primary suite is a long way from the water heater — can that be fixed in a remodel?',
        a: 'Yes, and it is worth solving while the walls are open. Depending on the layout we would look at a recirculation loop or a dedicated point-of-use unit for that end of the house. Either is far cheaper to install during the remodel than afterwards.',
      },
    ],
  },

  wyoming: {
    intro:
      'Bathroom remodel in Wyoming? The grand Victorians and early-1900s homes here have interiors worth protecting — and bathrooms that were never designed for how anyone lives now. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic suburb north of the city, known for its grand Victorian and early-1900s houses on established, tree-shaded streets. These are large, detailed homes — high ceilings, deep trim, original stairs and floors — and the bathrooms are frequently the one room where none of that quality was ever applied.',
      'Victorian-era houses typically had bathrooms added rather than planned, often squeezed into a former dressing room or a corner of a landing after the house was built. That history shows up as awkward door swings, radiators in impossible positions, and plumbing routed wherever it could be got to at the time. Reworking those rooms means dealing with the accumulated improvisation of a century, which is slower than a modern house but is where the real gain is.',
    ],
    commonIntro:
      'In Wyoming’s Victorian and early-1900s homes, the bathroom projects we take on most are:',
    localFaqs: [
      {
        q: 'How do you protect original woodwork during a bathroom remodel in a Wyoming home?',
        a: 'We survey the millwork before demo and decide piece by piece what stays in place protected, what is removed and reinstated, and what needs matching new. Access routes through the house get floor protection and dust barriers, because in a house like this the damage risk is as much in the hallway as the bathroom.',
      },
      {
        q: 'Can a radiator stay in a Wyoming bathroom that is being reconfigured?',
        a: 'Often it can, and in a period house keeping it is usually the better look. Where it genuinely blocks the layout we can relocate it or move to an alternative heat source, but that is a decision we would make with you at design rather than on site.',
      },
    ],
  },

  montgomery: {
    intro:
      'Bathroom remodel in Montgomery? The housing here spans 19th-century buildings in the historic district to decades-old subdivisions — and the two need completely different approaches. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings, surrounded by neighbourhoods of established and newer homes. That range is unusually wide for one city, and it means there is no standard Montgomery bathroom remodel.',
      'In the historic core, the work is careful: century-old structures with original detail, plaster, and plumbing that was retrofitted long after the building went up. In the surrounding subdivisions it is a different exercise — homes from the 1970s through the 1990s with builder-grade baths that have simply reached the end of their service life, where the framing is predictable and the opportunity is in reconfiguring the layout rather than preserving anything.',
    ],
    commonIntro:
      'Across Montgomery’s historic and suburban homes alike, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Is a remodel in Montgomery’s historic district different from one in the subdivisions?',
        a: 'Substantially. In the historic core we plan around original structure and detail, and confirm what any exterior-facing change requires before design. In the newer subdivisions the framing is regular and the constraint is layout rather than preservation, so more of the budget goes into reconfiguration and finishes.',
      },
      {
        q: 'Our Montgomery home is from the 1980s — is the bathroom worth gutting?',
        a: 'Usually yes. Baths from that era are typically at the end of their service life: original valves, a fibreglass surround, and a vanity built to a builder budget. The framing is sound, which makes them straightforward to reconfigure properly rather than resurface.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Bathroom remodel in Blue Ash? Even the newer housing here is decades old now, and the original builder-grade baths are the first thing owners want gone. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a northeast-side city with established mid-century neighbourhoods alongside newer subdivisions and a large commercial corridor. The point people miss about Blue Ash is that the "newer" housing is not new any more — subdivisions built through the 1980s and 1990s are now thirty to forty years old, and their bathrooms show it.',
      'That produces a specific and very common brief: a primary bath with a corner garden tub nobody has used in a decade, a separate shower with a failing pan, a long double vanity in a dated finish, and a compartmentalised toilet. The framing and plumbing are typically in good order, so nearly the whole budget goes into layout and finish — usually reclaiming the tub footprint for a proper walk-in shower.',
    ],
    commonIntro:
      'In Blue Ash’s established and later-built homes, the bathroom projects we are asked for most are:',
    localFaqs: [
      {
        q: 'Can you replace the corner garden tub in our Blue Ash primary bath with a bigger shower?',
        a: 'That is one of the most common projects we do here. The tub deck usually occupies the best corner of the room, and reclaiming it typically yields a walk-in shower far larger than the original — often without moving a single wall, since the drain and supply are already in that zone.',
      },
      {
        q: 'Our Blue Ash house is from the 1990s — is the plumbing likely to need replacing?',
        a: 'Often not wholesale, which keeps the cost down. Homes of that era are usually on copper or early PEX in serviceable condition. We inspect and replace what is at end of life rather than repiping by default, and tell you which you are looking at before quoting.',
      },
    ],
  },

  glendale: {
    intro:
      'Bathroom remodel in Glendale? One of the country’s earliest planned railroad suburbs and a National Historic Landmark — the Victorians here need work done with a light touch. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the earliest planned railroad suburbs in the country, now a National Historic Landmark, known for preserved Victorian homes on winding, tree-lined streets. As in Mariemont, the landmark status means exterior-visible changes carry review, and that has to be established before anything is designed.',
      'The 19th-century houses themselves are the other constraint, in the best sense. Bathrooms in these homes were almost always inserted after the fact, into rooms never intended for plumbing, which is why layouts are awkward and supply lines take strange routes. Reworking them well means accepting that the house sets the terms — the gain comes from making a difficult room work properly, not from imposing a standard layout on it.',
    ],
    commonIntro:
      'In Glendale’s preserved Victorian homes, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Does Glendale’s historic landmark status affect a bathroom remodel?',
        a: 'Interior work generally proceeds normally, but anything that reads from the outside — a window change, a vent on a visible elevation — can require review. We identify what your project touches at the outset so the design stays within what is approvable.',
      },
      {
        q: 'The bathroom in our Glendale Victorian is in an odd spot — can it be moved?',
        a: 'Sometimes, though in these houses the existing waste stack usually makes staying close to it far more sensible than relocating. We map what is there first, then show you what moving would genuinely cost against what reworking the current space would achieve.',
      },
    ],
  },

  kenwood: {
    intro:
      'Bathroom remodel in Kenwood? Mid-century homes and newer larger houses sit side by side here, and each brings a different bathroom problem. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses. The two housing types sit close together, and the bathroom brief is quite different depending on which one you are in.',
      'In the mid-century houses it is the familiar problem of a compact original hall bath, sound framing, and an obvious opportunity to take space from an adjoining closet. In the larger later-built homes it is the opposite — plenty of square footage, but laid out to a 1990s idea of a primary suite, with a garden tub taking the best of the room and a shower that was never big enough. Both are good projects; they are simply not the same one.',
    ],
    commonIntro:
      'Across Kenwood’s mid-century and later-built homes, the bathroom work we are asked for is:',
    localFaqs: [
      {
        q: 'How fast can you get to Kenwood?',
        a: 'Kenwood sits centrally in our service area between Blue Ash, Madeira and Montgomery, so scheduling here is straightforward. We will give you firm dates in writing once the design and selections are settled.',
      },
      {
        q: 'Our Kenwood primary bath is large but badly laid out — is that a full gut?',
        a: 'Not necessarily. Where the room already has the square footage, a lot can be achieved by reworking the zones — usually reclaiming a garden-tub deck for a proper shower — without touching every wall. We will show you both options priced side by side.',
      },
    ],
  },

  // ---------- Cohort 2 · Cincinnati west side, riverfront and basin ----------

  sedamsville: {
    intro:
      'Bathroom remodel in Sedamsville? The hillside houses above River Road were built before indoor bathrooms were standard, so the one you have was almost certainly carved in later. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) is one of Cincinnati’s historic riverside neighborhoods, on the west side between Riverside and Sayler Park, with most of its housing climbing the hillside above River Road and dating to the late 1800s and early 1900s. Houses of that age were not designed around a bathroom — plumbing arrived later, and the room was fitted into whatever space could be spared.',
      'That history is what you are remodeling. The bath is usually undersized and oddly placed, sitting on a floor structure that was never engineered for a tile bed or a filled tub, and served by supply lines added decades after the house was framed. The hillside adds a practical wrinkle too: on these streets material access can mean carrying everything up from the road, which is worth planning for rather than discovering on day one.',
    ],
    commonIntro:
      'In Sedamsville’s late-1800s hillside homes, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can the floor in an old Sedamsville house take a tiled bathroom?',
        a: 'Often it needs work first, and we check before quoting tile. Houses of this era were framed for lighter loads, so we assess joist spacing and deflection and add sistering or a proper subfloor build-up where needed. Tile laid over a floor that flexes will crack, no matter how good the installation.',
      },
      {
        q: 'Is access a problem for the hillside streets above River Road?',
        a: 'It is something we plan for rather than a barrier. We check the approach before scheduling and stage materials accordingly, which is part of why we settle logistics before demo day rather than during.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Bathroom remodel in Sayler Park? The Victorian and early-1900s frame houses of the old Home City village have good bones and dated baths — and the floodplain shapes how we build the ones downstairs. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — until it was annexed in the early 1900s, and it still reads that way: tree-lined streets and rows of Victorian and early-1900s frame houses.',
      'Two things shape a bathroom project here. The frame houses carry period detail worth keeping — trim, doors, stair joinery — so the work is as much protection as construction. And the riverfront sits in the Ohio River floodplain, so any ground-floor or lower-level bath needs its waterproofing, substrate and drainage specified for that context rather than to a standard build-up.',
    ],
    commonIntro:
      'In Sayler Park’s century-old frame houses near the river, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Does the floodplain affect a bathroom remodel in Sayler Park?',
        a: 'For ground-floor and lower-level baths, yes. We specify the membrane, substrate and drainage for a floodplain context rather than defaulting to a standard build-up. Upper-floor bathrooms are unaffected by it.',
      },
      {
        q: 'Can you keep the period character of a Sayler Park frame house?',
        a: 'Yes, and it is usually worth it here. We survey the trim and joinery before demo, protect or reinstate what stays, and match profiles where new meets old.',
      },
    ],
  },

  riverside: {
    intro:
      'Bathroom remodel in Riverside? On the low ground along River Road, drain elevation decides what is possible downstairs — so we check it before we design anything. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. With Sedamsville it forms one of the oldest riverfront communities on the west side.',
      'Because so many homes here sit on low Ohio River bottomland, the elevation of the sewer connection is the first thing we establish. A lower-level bathroom below that line needs a sealed ejector system rather than a gravity drain, and the surrounding groundwater conditions change the waterproofing specification too. Getting that settled up front is the difference between a fixed price and a mid-project surprise.',
    ],
    commonIntro:
      'On Riverside’s low riverfront lots, the bathroom projects we are asked for most are:',
    localFaqs: [
      {
        q: 'Can I put a bathroom in the lower level of my Riverside home?',
        a: 'Usually, but the method depends on elevation. On this low ground the drain often sits below the sewer line, which means a sealed ejector system. We measure that first and price the right approach rather than assuming a gravity drain.',
      },
      {
        q: 'Is groundwater a problem for a downstairs bathroom here?',
        a: 'It is a design input rather than a blocker. On River Road bottomland we specify waterproofing and drainage for the actual conditions, which is a different build-up from an upper-floor bath.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Bathroom remodel in East Price Hill? The dense early-1900s homes and two-families around Warsaw Avenue often need a second bath more than a bigger one. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once served. The streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together on tight lots.',
      'Two-family and multi-unit buildings are the defining feature, and they change the brief. Each unit needs its own bath, party walls limit where plumbing can run, and a stack serving more than one dwelling has to be worked on with the whole building in mind rather than one apartment. On tight lots, material access and skip placement need arranging in advance.',
    ],
    commonIntro:
      'In East Price Hill’s dense early-1900s homes and two-families, the bathroom work we do most is:',
    localFaqs: [
      {
        q: 'Can you remodel a bathroom in a two-family in East Price Hill without disrupting the other unit?',
        a: 'Yes, and it is most of what we do around Warsaw Avenue. We map the shared stack first so we know what serves both units, schedule any work affecting it for a defined window, and give the other unit notice in advance rather than on the day.',
      },
      {
        q: 'Can a second bathroom be added to an East Price Hill home?',
        a: 'Often, yes. In these houses the practical constraint is getting drainage to a stack, so we look for space adjacent to existing plumbing first — a back bedroom corner or an oversized landing usually gives it up more cheaply than a room on the far side of the house.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Bathroom remodel in West Price Hill? The 1920s-to-1950s houses out along Glenway Avenue have regular framing and dated baths — a good combination for reconfiguring properly. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans newer than the river neighborhoods — largely 1920s through 1950s single-family homes — though "newer" here still means a bathroom that is many decades old.',
      'That era is genuinely easier to work with. Framing is dimensional and regular, layouts repeat street to street, and the plumbing runs are usually accessible from a basement below. It makes West Price Hill baths good candidates for real reconfiguration — moving a wall to take from a hall closet or an adjacent bedroom — rather than a swap of fixtures inside the same tight footprint.',
    ],
    commonIntro:
      'In West Price Hill’s 1920s-to-1950s homes, the bathroom projects we handle most are:',
    localFaqs: [
      {
        q: 'Can my small West Price Hill hall bath be made bigger?',
        a: 'Frequently. Houses of this era along Glenway usually have a hall linen closet or a corner of a neighbouring bedroom that can be taken, and because the framing is regular and the plumbing reachable from the basement, moving that wall is far less disruptive than in a pre-war house.',
      },
      {
        q: 'Will the original plumbing need replacing in a 1940s house here?',
        a: 'Usually the sections serving the bathroom do, and that is the right time to do it. We open one wall first to see what is actually there before quoting, so the scope is based on your house rather than an assumption about its age.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Bathroom remodel in Lower Price Hill? The 19th-century Italianate rowhouses here are narrow, tall and party-walled — which changes where a bathroom can go. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'A rowhouse of that age sets hard limits. The footprint is narrow, party walls are masonry and shared, and there is usually one plumbing stack serving the full height of the building — so a bathroom generally has to stay near it or accept the cost of a new run. The low valley position also matters for anything at basement level, where the surrounding water table drives the waterproofing specification.',
    ],
    commonIntro:
      'In Lower Price Hill’s 19th-century Italianate rowhouses, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can a bathroom be moved in a Lower Price Hill rowhouse?',
        a: 'Sometimes, but it is rarely the cheapest gain. With one stack serving the full height and masonry party walls either side, staying near the existing plumbing usually buys you a better room for the money. We will price both so the comparison is real rather than assumed.',
      },
      {
        q: 'Are these brick rowhouses difficult to work in?',
        a: 'They need the right approach rather than being difficult. Masonry party walls do not take chasing the way stud walls do, so we plan service routes around them and use furring where needed instead of cutting into shared structure.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Bathroom remodel in Over-the-Rhine? Historic Italianate buildings, many now condos, mean the building and its association shape the job as much as the room does. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. A great deal of it is now apartments and condominiums.',
      'That changes the project in two concrete ways. Buildings in the historic district have review requirements for anything affecting the exterior, and a condo association typically has its own rules on work hours, service shutoffs and insurance before anything starts. Inside, a shared stack serving several units means a shutoff affects your neighbours, so scheduling is a building matter rather than just yours.',
    ],
    commonIntro:
      'In Over-the-Rhine’s 19th-century buildings and condo conversions, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'What do I need from my OTR condo association before a bathroom remodel?',
        a: 'Usually approval of the scope, evidence of insurance, agreed work hours, and notice for any water shutoff affecting other units. We will tell you exactly what your building is likely to ask for and work to those rules — it is far easier to agree before demo than to negotiate mid-project.',
      },
      {
        q: 'Does the historic district restrict what I can do inside?',
        a: 'Interior work is generally not restricted, but anything altering the exterior — including a new vent penetration on a visible elevation — can require review. We identify what your project touches at the outset.',
      },
    ],
  },

  downtown: {
    intro:
      'Bathroom remodel in Downtown Cincinnati? In a tower or a converted loft, building logistics decide the schedule as much as the work itself. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. The plumbing ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential.',
      'The building, not the bathroom, sets the constraints here. Service elevators need booking, material delivery has to be scheduled, work hours are usually fixed by the association, and in a stacked tower your riser is shared with the units above and below. We settle all of that with building management before the first day rather than negotiating it while a crew waits.',
    ],
    commonIntro:
      'In Downtown’s towers and loft conversions, the bathroom work we are asked for most is:',
    localFaqs: [
      {
        q: 'Can you work in a Downtown high-rise with building restrictions?',
        a: 'Regularly. We handle the certificates of insurance, book the service elevator, agree the work window with management, and schedule any riser shutoff with notice to the affected units. That coordination is part of the job, not an extra.',
      },
      {
        q: 'Can a bathroom be relocated in a Downtown condo?',
        a: 'It depends on the riser. In a stacked building the drainage is largely fixed by where the stack runs, so moving a bathroom far from it is often not practical. We check the building drawings before designing anything.',
      },
    ],
  },

  'west-end': {
    intro:
      'Bathroom remodel in the West End? Historic Italianate rowhouses sit alongside mid-century homes here, and the two need different approaches entirely. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in.',
      'Which of those you own decides the project. In a 19th-century rowhouse the constraints are masonry party walls and a single shared stack, and the work is careful. In the mid-century housing the framing is regular and the opportunity is layout — taking a closet, moving a wall. The low ground near the Mill Creek basin is the one thing common to both: anything at lower level needs its waterproofing specified for that context.',
    ],
    commonIntro:
      'Across the West End’s rowhouses and mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Our West End home is a historic rowhouse — can the bathroom layout change?',
        a: 'Within limits. The existing stack and the masonry party walls set the boundaries, so we map both before drawing. Usually the better result comes from reworking the space around the existing plumbing rather than relocating it.',
      },
      {
        q: 'Does the Mill Creek basin affect a lower-level bathroom here?',
        a: 'It affects the specification. On low ground we build the waterproofing and drainage for those conditions rather than to a standard detail. Upper floors are unaffected.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Bathroom remodel in Mount Adams? On the hill above Eden Park, the narrow streets and steep grades shape the job before the first tile is chosen. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes. It is one of the most distinctive addresses in the city and one of the more demanding to work in.',
      'Access is the first practical issue: narrow streets and limited parking mean material delivery and waste removal need arranging in advance rather than assumed. The houses themselves are tall and narrow, frequently three or four floors with the bathroom stacked over a single stack, and many share party walls with the next property. All of that is manageable — it just needs settling before a crew arrives, not on the day.',
    ],
    commonIntro:
      'In Mount Adams’ 19th-century hilltop rowhouses and townhomes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is access a problem for a bathroom remodel in Mount Adams?',
        a: 'It needs planning, which we do before scheduling. We check the street approach and parking, arrange delivery windows and waste removal in advance, and size the crew to what the property can actually take. It is one of the reasons we lock logistics before demo day.',
      },
      {
        q: 'Can a bathroom be added on an upper floor of a Mount Adams townhome?',
        a: 'Often, and staying close to the existing stack is what keeps it sensible. In a tall narrow house the drainage route is the main constraint, so we map it first and design the room around what the building will give.',
      },
    ],
  },

  // ---------- Cohort 3 · Uptown, the hilltops and the near east ----------

  'mount-auburn': {
    intro:
      'Bathroom remodel in Mount Auburn? Grand 19th-century homes above downtown, many long since divided into apartments — which decides what the job actually is. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions. A great many of those houses were subdivided into apartments decades ago.',
      'Whether yours was subdivided is the first question, because it changes everything downstream. In a house still whole, you are working with generous Victorian rooms and original detail worth protecting. In a converted building you are working around a stack shared with other units, walls added long after the house was built, and plumbing routed to suit that conversion rather than the original plan.',
    ],
    commonIntro:
      'In Mount Auburn’s 19th-century homes and converted apartments, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Mount Auburn house was divided into apartments — can the bathrooms be reworked?',
        a: 'Yes, and it is common work here. We map what the conversion actually did — which walls are original, where the shared stack runs, what serves more than one unit — before designing. That survey is what keeps the scope accurate in a building that has been altered more than once.',
      },
      {
        q: 'Can original detail be kept in a Mount Auburn Victorian?',
        a: 'Where it survives, yes. We survey the trim, doors and plaster before demo and decide piece by piece what is protected in place, removed and reinstated, or matched new.',
      },
    ],
  },

  clifton: {
    intro:
      'Bathroom remodel in Clifton? The big Victorians around the Gaslight District have the space for a proper primary bath — it is usually just in the wrong shape. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and its large Victorian and early-1900s homes on tree-lined streets.',
      'These are big houses with generous upper floors, and that is the opportunity — there is usually a dressing room, a box room or an oversized landing that can become a real primary suite. The constraint is that the plumbing was added to a house not designed for it, so the existing stack rarely sits where you would want it. Mapping that first is what decides whether the suite goes where you imagined or somewhere better.',
    ],
    commonIntro:
      'In Clifton’s large Victorian and early-1900s homes, the bathroom projects we handle most are:',
    localFaqs: [
      {
        q: 'Can we add a primary suite to a Clifton Victorian?',
        a: 'Usually there is space for it — a dressing room, box room or wide landing. What decides the cost is distance from the existing stack, so we map the plumbing before drawing the layout rather than after.',
      },
      {
        q: 'Do you work on rental properties near campus?',
        a: 'Yes. For rentals we plan around tenancy dates and work to a defined window, and the fixed-price contract means the number does not move once the schedule is set.',
      },
    ],
  },

  corryville: {
    intro:
      'Bathroom remodel in Corryville? Dense early-1900s housing around Short Vine, much of it rental — where durability matters more than fashion. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'A lot of the bathroom work here is on rental property, and that changes what makes sense to specify. Heavy, repeated use rewards durable surfaces, solid-brass valve bodies and a floor that will take punishment, over finishes that look good for one tenancy. Buildings sharing walls and stacks also mean a shutoff affects neighbours, so scheduling is a building-wide matter rather than a private one.',
    ],
    commonIntro:
      'In Corryville’s dense early-1900s housing and rentals, the bathroom work we do most is:',
    localFaqs: [
      {
        q: 'Can you turn a rental bathroom around between tenancies in Corryville?',
        a: 'That is most of what we do here. Because we stage all materials before demo, the on-site window is short and predictable — we will give you firm dates before you commit to a tenancy gap.',
      },
      {
        q: 'What should I specify for a student rental bathroom?',
        a: 'Durability over fashion. Porcelain rather than soft stone, solid valve bodies, a properly waterproofed floor and an extractor that actually moves air. It costs slightly more up front and far less across five tenancies.',
      },
    ],
  },

  northside: {
    intro:
      'Bathroom remodel in Northside? Late-1800s and early-1900s homes along Hamilton Avenue, with the Mill Creek valley shaping anything at lower level. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The housing age is the main story — original layouts with one small bath, plumbing added long after the house was framed, and floors that need checking before tile. The valley position matters for anything downstairs: on the low ground toward Mill Creek, a lower-level bathroom needs its waterproofing and drainage specified for those conditions rather than to a standard detail.',
    ],
    commonIntro:
      'In Northside’s late-1800s and early-1900s homes, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can I add a bathroom in the basement of a Northside home?',
        a: 'Often, though the low ground toward Mill Creek shapes how. We check the drain elevation against the sewer line and specify waterproofing for the actual conditions — that assessment comes before any design.',
      },
      {
        q: 'Is the floor in an old Northside house strong enough for tile?',
        a: 'We check rather than assume. Houses of this era were framed for lighter loads, so we assess the joists and build up the subfloor where needed. Tile over a flexing floor cracks regardless of how well it is laid.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Bathroom remodel in College Hill? A mix of large early-1900s homes and mid-century houses along Hamilton Avenue — two different projects on the same street. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with large early-1900s homes, mid-century houses and a revitalising business district.',
      'The two housing types want different things. The early-1900s houses are generous but have their bathrooms in awkward, retrofitted places, so the gain is in reconfiguring — often taking a box room or landing for a proper primary bath. The mid-century houses have regular framing and accessible plumbing, where a compact hall bath can be genuinely enlarged by moving one wall into a closet.',
    ],
    commonIntro:
      'Across College Hill’s early-1900s and mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Which is easier to remodel — the older or the mid-century homes in College Hill?',
        a: 'Mid-century, usually. Regular framing and reachable plumbing make moving a wall straightforward. The early-1900s houses offer more space to work with but need more care around plaster, original trim and retrofitted plumbing runs.',
      },
      {
        q: 'Can a small hall bath here be enlarged?',
        a: 'Frequently. In the mid-century houses there is normally a linen closet or a corner of an adjacent bedroom to take, and because the plumbing is accessible from below, moving that wall is not a major undertaking.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Bathroom remodel in Walnut Hills? Grand 19th-century homes and apartment buildings around Peebles Corner, many subdivided — so the building shapes the brief. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Much of the original housing has been split into units.',
      'In a subdivided building the shared stack sets the boundaries — where a bathroom can go, and whose water gets shut off when it is worked on. In the houses still whole, you have Victorian proportions and original detail, and the job is inserting a modern bathroom into rooms that never anticipated one. Both are good work; they simply need different planning.',
    ],
    commonIntro:
      'In Walnut Hills’ 19th-century homes and apartment buildings, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Walnut Hills building has several units — how is a shutoff handled?',
        a: 'With notice and a defined window. We map which line serves which unit before starting, agree the timing with the building, and let the affected neighbours know in advance rather than on the day.',
      },
      {
        q: 'Can period detail be kept in a Walnut Hills Victorian?',
        a: 'Where it has survived, yes — and it is usually worth it. We survey the trim and plaster before demolition and protect, reinstate or match as appropriate.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Bathroom remodel in East Walnut Hills? Stately early-1900s homes around Woodburn Avenue and DeSales Corner, with original detail worth working around. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'These are substantial houses whose bathrooms have not kept pace with the rest of them. Typically there is one full bath serving a floor of large bedrooms, fitted into a space that was spare rather than chosen, with plaster walls and original millwork on every side of it. The work is finding the square footage — a box room, a deep landing, an oversized closet — and taking it without damaging what makes the house worth the money.',
    ],
    commonIntro:
      'In East Walnut Hills’ stately early-1900s homes, the bathroom projects we are asked for most are:',
    localFaqs: [
      {
        q: 'Can we add a second bathroom to an East Walnut Hills home?',
        a: 'Usually there is space — these houses tend to have a box room or generous landing that can give it up. The deciding factor is how far that space sits from the existing stack, which we map before designing.',
      },
      {
        q: 'How do you protect original millwork during the work?',
        a: 'We survey it first and decide piece by piece what is protected in place, removed and reinstated, or matched new. Access routes get floor protection and dust barriers too — in a house like this the risk is as much in the hallway as the bathroom.',
      },
    ],
  },

  avondale: {
    intro:
      'Bathroom remodel in Avondale? Historic early-1900s homes and apartment buildings in the uptown core near the hospitals and the Zoo. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A significant share of the housing is rental.',
      'That mix produces two distinct briefs. For owner-occupied houses the work is the familiar one: an early-1900s home with an undersized retrofitted bath and space nearby that can be taken. For rental property, durability and a predictable schedule matter more than finish fashion, and any shared stack means a shutoff has to be planned around other tenants.',
    ],
    commonIntro:
      'In Avondale’s early-1900s homes and apartment buildings, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Do you work on rental property in Avondale?',
        a: 'Regularly. We plan around tenancy dates, stage materials before demo so the on-site window is short, and specify finishes that hold up to repeated turnover rather than looking good for one tenancy.',
      },
      {
        q: 'Is it worth reconfiguring a small Avondale bathroom?',
        a: 'It depends what is next to it. Where there is a closet or a corner of an adjoining room to take, moving one wall usually transforms the space for far less than relocating the plumbing. We will show you both priced.',
      },
    ],
  },

  norwood: {
    intro:
      'Bathroom remodel in Norwood? A dense grid of early-1900s homes and brick two-families from its streetcar and factory days — compact baths, tight lots. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'The two-family building is the signature here, and it shapes the work: each unit needs its own bath, party walls constrain where plumbing can run, and a stack serving both dwellings has to be treated as a building-wide matter. Lots are small and streets are tight, so material delivery and waste removal are things we arrange in advance rather than assume.',
    ],
    commonIntro:
      'In Norwood’s early-1900s homes and brick two-families, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can you remodel one unit of a Norwood two-family without disturbing the other?',
        a: 'Yes — it is routine work here. We map the shared stack first, confine any work affecting it to an agreed window, and give the other unit notice ahead of time.',
      },
      {
        q: 'Our Norwood house has one small bathroom — can a second be added?',
        a: 'Often, and the practical answer is to put it near the existing stack. A back bedroom corner or an upstairs landing usually gives up the space more cheaply than a room on the far side of the house.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Bathroom remodel in Pleasant Ridge? Early-1900s homes and classic Cincinnati brick two-families along Montgomery Road, most with their original bathroom footprint. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Most bathrooms here are still working to their original footprint — a compact room between bedrooms, one window, a tub against the outside wall. The good news is that these houses usually have something adjacent worth taking: a linen closet, a rear landing, or in a two-family the awkward space where the units meet. Where the building is a two-family, the shared stack sets the terms for what can move.',
    ],
    commonIntro:
      'In Pleasant Ridge’s early-1900s homes and brick two-families, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Can a Pleasant Ridge bathroom be enlarged without an addition?',
        a: 'Usually. There is normally a linen closet or landing adjacent that can be absorbed, which is far cheaper than building out. We measure what is genuinely available before suggesting anything structural.',
      },
      {
        q: 'Does a two-family here complicate the work?',
        a: 'It needs coordinating rather than complicating. We identify what the shared stack serves, agree a window for anything affecting both units, and notify the other tenant in advance.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Bathroom remodel in Mount Washington? Settled early-1900s through mid-century homes along Beechmont Avenue, where the original bath has usually never been touched. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'That range means the right approach depends on which end of it your house sits at. The earlier homes have retrofitted bathrooms in awkward positions and need care around plaster and original trim. The mid-century houses have regular framing and plumbing reachable from the basement, which makes them straightforward to reconfigure — usually by taking a hall closet to widen a cramped bath.',
    ],
    commonIntro:
      'In Mount Washington’s early-1900s and mid-century homes, the bathroom projects we see most are:',
    localFaqs: [
      {
        q: 'How do I know whether my Mount Washington bathroom needs a full gut?',
        a: 'We open one wall and look. If the supply lines are original and the subfloor has taken water around the tub, a surface update is money spent on top of a problem. You get that answer before committing to the larger scope.',
      },
      {
        q: 'Can a cramped hall bath here be widened?',
        a: 'In the mid-century houses, usually yes — there is normally a linen closet adjacent, and the plumbing is accessible from below, so moving that wall is a modest job rather than a major one.',
      },
    ],
  },

  // ---------- Cohort 4 · East river neighborhoods, west side, Northern Kentucky ----------

  'columbia-tusculum': {
    intro:
      'Bathroom remodel in Columbia-Tusculum? Cincinnati’s oldest neighborhood, and its restored Painted Ladies need work that respects what previous owners spent years putting right. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, best known for its colourful "Painted Ladies" — restored Victorian homes on the east side near the Ohio River.',
      'Many of these houses have already been through a restoration, which changes the brief: you are working alongside someone else’s careful work rather than starting from a neglected shell. Victorian bathrooms were inserted after the fact into rooms not designed for them, so the layouts are awkward, and the low riverside ground means anything at basement level needs its waterproofing specified for those conditions.',
    ],
    commonIntro:
      'In Columbia-Tusculum’s restored Victorians, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can you work on a restored Victorian in Columbia-Tusculum without undoing the restoration?',
        a: 'That is the main skill required here. We survey what has already been restored before touching anything, protect it through the work, and match new trim and detail to what is there. The bathroom should look like it belongs to the rest of the restoration, not like a modern insert.',
      },
      {
        q: 'Is the riverside location an issue for a basement bathroom?',
        a: 'For lower-level work, yes. On low ground near the river we specify waterproofing and drainage for those conditions rather than to a standard detail, and check the drain elevation against the sewer line before designing.',
      },
    ],
  },

  madisonville: {
    intro:
      'Bathroom remodel in Madisonville? Early-1900s homes along Madison Road with newer infill between them — and original bathrooms in most of the older stock. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'The older houses still carry their original bathroom footprint — a compact room off the bedroom hallway, one window, a tub against the outside wall — and plumbing added long after the house was framed. The reinvestment in the neighbourhood is worth noting practically: work here is often part of a wider renovation, so we plan the bathroom around the sequence of everything else rather than in isolation.',
    ],
    commonIntro:
      'In Madisonville’s early-1900s homes, the bathroom projects we handle most are:',
    localFaqs: [
      {
        q: 'We are renovating our whole Madisonville house — can the bathroom fit into that sequence?',
        a: 'Yes, and it is better done that way. Where the bathroom sits in the order matters — plumbing and electrical rough-in want to happen before floors and decoration elsewhere. We will sequence it around the rest of your programme rather than treating it as a standalone job.',
      },
      {
        q: 'Is the plumbing in an early-1900s Madisonville home likely to need replacing?',
        a: 'The sections serving the bathroom usually do, and while the wall is open is the right moment. We open up and assess before quoting, so the scope reflects your house rather than an assumption.',
      },
    ],
  },

  westwood: {
    intro:
      'Bathroom remodel in Westwood? Cincinnati’s largest neighborhood spans everything from historic homes near the Town Hall to mid-century streets — and the right approach differs across it. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'The spread matters more here than in a small neighbourhood. A historic house near the Town Hall needs care around plaster and original trim, with a retrofitted bathroom in an awkward spot. A mid-century house a mile away has regular framing, plumbing reachable from the basement and an obvious closet to take. We survey which you have before quoting anything.',
    ],
    commonIntro:
      'Across Westwood’s historic and mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Does it matter which part of Westwood my house is in?',
        a: 'It matters for scope, not for whether we can help. The historic homes near the Town Hall take more care and more time around original fabric; the mid-century streets are more straightforward to reconfigure. We tell you which category you are in after the site visit.',
      },
      {
        q: 'Can a small Westwood bathroom be enlarged?',
        a: 'Usually. In the mid-century houses there is normally a linen closet or bedroom corner available and the plumbing is accessible from below. In the older homes it depends on where the retrofitted stack runs, which we map first.',
      },
    ],
  },

  cheviot: {
    intro:
      'Bathroom remodel in Cheviot? A tight grid of early-1900s homes and brick two-families along Harrison Avenue — compact rooms, shared walls, small lots. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'Density defines the work. Two-families need a bath per unit and share a stack that has to be treated as building-wide. Lots are small and streets tight, so skip placement and material delivery are arranged in advance. And the rooms themselves are compact, which means the gain usually comes from a smarter layout rather than more square footage.',
    ],
    commonIntro:
      'In Cheviot’s early-1900s homes and brick two-families, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a compact Cheviot bathroom be made to work better without getting bigger?',
        a: 'Frequently, yes. Swapping a tub for a well-designed walk-in shower, moving the door swing, and choosing a vanity sized to the room can transform how a small bath functions without moving a wall. We will show you what the existing footprint can actually deliver.',
      },
      {
        q: 'How do you handle the tight streets and small lots here?',
        a: 'By planning them. We check access before scheduling, arrange delivery windows and waste removal ahead of the start date, and size the crew to what the property can take.',
      },
    ],
  },

  covedale: {
    intro:
      'Bathroom remodel in Covedale? Settled early-1900s through mid-century homes near Green Township, where the original bath has usually served long enough. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighbourhoods of early-1900s through mid-century single-family homes.',
      'These are stable, well-kept houses whose bathrooms are simply the room that never got updated. In the mid-century stock the framing is regular and the plumbing reachable from below, so a genuine reconfiguration is realistic — taking a linen closet, moving a wall, replacing a steel tub with a proper shower. In the earlier houses the retrofitted plumbing takes more mapping first.',
    ],
    commonIntro:
      'In Covedale’s early-1900s and mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Is a 1950s Covedale bathroom worth gutting?',
        a: 'At that age, usually yes. Behind the tile there is commonly a mortar bed, original supply lines and a subfloor that has taken water around the tub. Replacing fixtures alone leaves all of that in place.',
      },
      {
        q: 'Can we replace the tub with a walk-in shower?',
        a: 'Almost always, and it is the most common request we get in houses of this era. The drain and supply are already in that zone, so it is usually achievable without moving a wall.',
      },
    ],
  },

  covington: {
    intro:
      'Bathroom remodel in Covington? MainStrasse and Licking Riverside are full of 19th-century rowhouses — historic districts where the exterior is protected and the interior is yours. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'In a designated historic district, exterior-visible changes carry review — a window alteration or a vent penetration on a street elevation needs settling before design, not after. Inside, the rowhouse form sets the constraints: a narrow footprint, masonry party walls that do not take chasing, and usually a single stack serving the full height of the building. The low ground near the Ohio and Licking rivers shapes anything at basement level.',
    ],
    commonIntro:
      'In Covington’s 19th-century rowhouses and historic districts, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does Covington’s historic district affect a bathroom remodel?',
        a: 'Interior work generally proceeds normally, but anything visible from the street — a window change, an exterior vent — can require review. We establish what your project touches at the outset so nothing is designed that cannot be built.',
      },
      {
        q: 'Can plumbing be run through the party wall in a MainStrasse rowhouse?',
        a: 'Not through it — those are shared masonry walls. We route services around them or fur out where needed, which is why mapping the existing stack before design matters so much in a rowhouse.',
      },
    ],
  },

  newport: {
    intro:
      'Bathroom remodel in Newport? The East Row is one of Kentucky’s largest Victorian historic districts, and its houses need a careful hand. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'Hundreds of 19th-century houses in the East Row means both an opportunity and a constraint. These homes have proportions and detail worth keeping, and bathrooms that were inserted into them long after they were built. Historic district status means exterior-visible work carries review, and the low riverfront ground affects the specification for anything at lower level.',
    ],
    commonIntro:
      'In Newport’s East Row Victorians, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Is a bathroom remodel in the East Row subject to historic review?',
        a: 'Interior work generally is not, but exterior-visible changes can be. We identify what your specific project touches before design begins so the scheme stays within what is approvable.',
      },
      {
        q: 'Can a Victorian bathroom in Newport be modernised without losing its character?',
        a: 'Yes, and in the East Row it is usually the right approach. We keep or replicate the period elements — trim profiles, tile scale, hardware — while everything behind the wall is replaced.',
      },
    ],
  },

  bellevue: {
    intro:
      'Bathroom remodel in Bellevue? Well-preserved late-1800s homes on tight streets off Fairfield Avenue, most with their original bathroom footprint. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'The housing is unusually intact for its age, which is exactly why the work needs care — original trim, doors and stair joinery are often still there. The houses are narrow and deep on small lots, so bathrooms are compact and the plumbing was added into whatever space allowed it. Tight streets also mean access and waste removal are arranged in advance.',
    ],
    commonIntro:
      'In Bellevue’s well-preserved late-1800s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you protect original detail in a Bellevue home?',
        a: 'We survey it before demolition and decide piece by piece what is protected in place, removed and reinstated, or matched new. Access routes get floor protection and dust barriers as well.',
      },
      {
        q: 'Is a bathroom in a narrow Bellevue house limited to its current spot?',
        a: 'Usually near it, yes. In a narrow deep house the existing stack is the main constraint, and staying close to it typically buys a better room than relocating would. We price both so you can compare.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Bathroom remodel in Fort Thomas? Stately early-1900s homes on the tree-lined streets above the river, most with generous rooms and undersized baths. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'The pattern here is familiar from Cincinnati’s better east-side neighbourhoods: large, well-built houses whose bathrooms never matched the scale of the rest. There is usually space to take — a box room, a wide landing, a fourth bedroom — and the work is doing it without disturbing plaster, original millwork and the proportions that make these houses what they are.',
    ],
    commonIntro:
      'In Fort Thomas’ stately early-1900s homes, the bathroom projects we are asked for most are:',
    localFaqs: [
      {
        q: 'Can we add a primary suite to a Fort Thomas home with only one upstairs bath?',
        a: 'Usually there is space for it. These houses typically have a box room, wide landing or small fourth bedroom that can be absorbed. What decides the cost is how far that space sits from the existing stack, which we map before designing.',
      },
      {
        q: 'Will original woodwork survive the work?',
        a: 'If it is planned for. We survey the millwork before demo, protect or reinstate what stays, and match profiles where new meets old.',
      },
    ],
  },

  florence: {
    intro:
      'Bathroom remodel in Florence? Mid-century neighborhoods and newer subdivisions around the Mall area — and both are now old enough to need the bathroom done properly. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighbourhoods and newer subdivisions around the Florence Mall area.',
      'The newer subdivisions produce the most common brief we see: a primary bath from the 1990s or 2000s with a corner garden tub nobody uses, a separate shower too small to be pleasant, and a long vanity in a dated finish. The framing and plumbing are typically sound, so almost the whole budget goes into layout and finish — usually reclaiming the tub deck for a proper walk-in shower.',
    ],
    commonIntro:
      'Across Florence’s mid-century and later-built homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Can the garden tub in our Florence primary bath become a bigger shower?',
        a: 'That is one of the most common projects we do. The tub deck usually occupies the best corner of the room, and reclaiming it typically yields a walk-in shower far larger than the original — often without moving a wall, since the drain and supply are already there.',
      },
      {
        q: 'Our Florence house is from the 2000s — will the plumbing need replacing?',
        a: 'Generally not wholesale, which keeps the cost down. Homes of that age are usually on copper or PEX in serviceable condition. We inspect and replace what is at end of life rather than repiping by default.',
      },
    ],
  },

  erlanger: {
    intro:
      'Bathroom remodel in Erlanger? Settled mid-century neighborhoods near the airport, where the original bath has done sixty years of service. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighbourhoods and a mix of older and newer homes.',
      'The mid-century stock is the bulk of it, and it is straightforward to work with: dimensional framing, layouts that repeat street to street, and plumbing runs accessible from a basement below. That makes Erlanger baths good candidates for a genuine reconfiguration — taking a hall closet to widen the room, or replacing a steel tub and mortar-bed tile with a properly waterproofed walk-in shower.',
    ],
    commonIntro:
      'In Erlanger’s mid-century homes, the bathroom work we take on most is:',
    localFaqs: [
      {
        q: 'Can my small Erlanger hall bath be widened?',
        a: 'Usually. Houses of this era normally have a linen closet or bedroom corner adjacent, and because the framing is regular and the plumbing reachable from the basement, moving that wall is a modest job.',
      },
      {
        q: 'What is behind the tile in a 1960s bathroom here?',
        a: 'Typically a mortar bed over wire lath, original supply lines and a subfloor that has taken water around the tub. That is why we price these as full gut jobs — what is behind the wall determines the result more than what goes on it.',
      },
    ],
  },

  mason: {
    intro:
      'Bathroom remodel in Mason? Subdivisions built from the 1990s onward near Kings Island, where the primary bath is dated rather than worn out. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, made up largely of subdivisions built from the 1990s onward alongside an older town centre.',
      'In the subdivisions the structure is sound and the problem is design. A 1990s primary bath typically gives its best corner to a garden tub, puts the shower in a cramped alcove, and runs a long double vanity in a finish that has aged badly. Because framing and plumbing are in good order, the budget goes almost entirely into layout and finish rather than repair — which is a good position to remodel from.',
    ],
    commonIntro:
      'In Mason’s later-built subdivisions and older town centre, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Is a 1990s Mason primary bath worth remodeling if nothing is broken?',
        a: 'That is the usual situation here, and it makes for an efficient project. With the framing and plumbing sound, nearly the whole budget goes into the parts you actually see and use rather than into repair.',
      },
      {
        q: 'Can we lose the garden tub and gain a proper shower?',
        a: 'Yes, and it is the most requested change in Mason. The tub deck is normally in the best part of the room and the plumbing is already in that zone, so the swap is usually achievable without moving walls.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Bathroom remodel in West Chester? Subdivisions along the I-75 corridor built from the 1990s on — sound houses with bathrooms that have simply dated. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'These houses are now thirty years old, which is exactly the point where the original bathroom starts to look its age while everything behind it remains serviceable. The typical project is a primary suite reconfiguration — reclaiming a garden-tub deck for a walk-in shower, replacing a builder-grade vanity, and updating the compartmentalised toilet arrangement that was standard in that era.',
    ],
    commonIntro:
      'In West Chester’s 1990s-onward subdivisions, the bathroom projects we handle most are:',
    localFaqs: [
      {
        q: 'Our West Chester house is from the 1990s — what usually needs doing in the bathroom?',
        a: 'Layout and finish rather than repair. The framing and plumbing are typically sound, so the work is reclaiming the garden-tub corner for a proper shower, replacing the vanity and surfaces, and improving lighting and ventilation.',
      },
      {
        q: 'Will we need to repipe?',
        a: 'Usually not. Homes of this era are generally on copper or early PEX in serviceable condition. We inspect and replace what is genuinely at end of life rather than repiping as a default.',
      },
    ],
  },

  // ---------- Cohort 5 · Inner-city neighborhoods, Mill Creek valley, riverfront ----------

  queensgate: {
    intro:
      'Bathroom remodel in Queensgate? It’s a working district more than a residential one — but for the live-work conversions and the handful of homes here, the job is real. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings. It is not a residential neighbourhood in the way the West End or Lower Price Hill next door are, and we would rather say so than pretend otherwise.',
      'Where we do work here it is usually a converted or live-work space in an older building — which brings the constraints of the building rather than of a house. Concrete floors and masonry walls mean drainage has to be planned around what already exists rather than chased into a stud wall, freight access and work hours are often set by the building, and the low ground near the Mill Creek matters for anything at or below grade. If you own one of the residential properties here, all of that is workable; it simply needs establishing before design.',
    ],
    commonIntro:
      'In Queensgate’s converted and live-work spaces, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Do you actually work in Queensgate?',
        a: 'Yes, though it is not a busy area for us — there is very little housing. Where we are called it is normally a converted or live-work space in an older building. If you are looking at a property in one of the residential neighbourhoods nearby, West End, Lower Price Hill and Camp Washington are all within our regular patch.',
      },
      {
        q: 'What is different about a bathroom in a converted Queensgate building?',
        a: 'The structure. Concrete slabs and masonry walls mean drainage cannot simply be chased in — it has to be routed around what exists, sometimes with a raised floor or a sealed ejector where the drain sits below the sewer line. We establish all of that before designing rather than discovering it mid-project.',
      },
    ],
  },

  pendleton: {
    intro:
      'Bathroom remodel in Pendleton? Restored Italianate buildings and converted lofts in a small historic arts district — where the building sets the rules. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos.',
      'Almost everything here is a conversion, which shapes the work more than the room does. A condo association usually sets work hours, insurance requirements and notice for shutoffs, and a stack serving several units means your schedule is a building matter. Historic-district status also means anything altering the exterior — including a vent on a visible elevation — needs settling before design.',
    ],
    commonIntro:
      'In Pendleton’s converted 19th-century buildings, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'What will my Pendleton condo association need before work starts?',
        a: 'Typically scope approval, certificates of insurance, agreed work hours and advance notice for any shutoff affecting other units. We will tell you what your building is likely to ask for and work to those rules — far easier agreed before demo than negotiated during.',
      },
      {
        q: 'Can a bathroom be relocated in a Pendleton loft conversion?',
        a: 'It depends on the stack. Conversions usually route drainage to a small number of fixed points, so moving far from one is often impractical. We check what the conversion actually did before designing.',
      },
    ],
  },

  cuf: {
    intro:
      'Bathroom remodel in CUF? Clifton Heights, University Heights and Fairview are dense, hilly and largely rental — so durability and turnaround decide the specification. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighbourhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'Most of the bathroom work here is on rental property, and that changes what is worth specifying. Repeated heavy use rewards porcelain over soft stone, solid valve bodies, a properly waterproofed floor and an extractor that actually moves air — none of which is the cheapest option, and all of which cost less across five tenancies. Subdivided houses also share stacks, so a shutoff is a building-wide matter.',
    ],
    commonIntro:
      'In CUF’s converted 19th- and early-1900s houses, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Can you turn a CUF rental bathroom around between tenancies?',
        a: 'That is most of what we do up here. Because materials are staged before demo, the on-site window is short and predictable — we give you firm dates before you commit to a gap between tenancies.',
      },
      {
        q: 'What holds up best in a student rental bathroom?',
        a: 'Porcelain tile rather than soft stone, solid-brass valve bodies, a fully waterproofed floor, and a properly ducted extractor. It costs a little more up front and far less over repeated turnovers.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Bathroom remodel in Camp Washington? Old worker housing in the Mill Creek valley, where the low ground shapes anything at basement level. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighbourhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The worker cottages here are small, plainly built and old, which means bathrooms squeezed into whatever space allowed them and floors framed for lighter loads than a tiled bathroom imposes. The valley position is the other factor: on this low ground, anything at basement level needs its drain elevation checked against the sewer line and its waterproofing specified for the conditions.',
    ],
    commonIntro:
      'In Camp Washington’s older worker housing, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can the floor in an old Camp Washington cottage take tile?',
        a: 'We check before quoting it. Houses of this type were framed light, so we assess joist spacing and deflection and build up the subfloor where needed. Tile over a flexing floor cracks however well it is laid.',
      },
      {
        q: 'Does the Mill Creek valley affect a basement bathroom here?',
        a: 'Yes. On low valley ground we check the drain elevation against the sewer line first — below it you need a sealed ejector rather than a gravity drain — and specify waterproofing for the actual conditions.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Bathroom remodel in South Fairmount? The Lick Run valley has a long flooding history, and it shows in how we build anything on the lower floors. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'That history is the practical context. Even with the Greenway in place, a low valley setting means ground-floor and basement bathrooms deserve a moisture-aware specification rather than a standard build-up, and the drain elevation relative to the sewer decides whether a lower-level bath is straightforward or needs an ejector. The housing itself is older, so plumbing serving the bathroom is usually due for replacement while the wall is open.',
    ],
    commonIntro:
      'In South Fairmount’s older valley housing, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Has the Lick Run Greenway changed what is possible for a basement bathroom here?',
        a: 'It has improved the stormwater picture, but we still design for the valley rather than assume. We check the drain elevation and specify waterproofing and drainage for the actual conditions on your street.',
      },
      {
        q: 'Is it worth gutting an old bathroom in South Fairmount?',
        a: 'Usually, because the plumbing behind it is the same age as the house. We open one wall and show you what is there before you commit to the wider scope.',
      },
    ],
  },

  'east-end': {
    intro:
      'Bathroom remodel in the East End? River cottages and newer condos squeezed between Columbia Parkway and the Ohio — narrow sites, and the river close by. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighbourhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River.',
      'The strip is genuinely narrow, so access and material staging need arranging in advance rather than assumed. The older river cottages are small and were built long before bathrooms were planned into a house, while the newer condos come with association rules and shared stacks. And on ground this close to the river, lower-level work needs its waterproofing and drain elevation established before design.',
    ],
    commonIntro:
      'In the East End’s river cottages and condos, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does being right on the river affect a bathroom remodel in the East End?',
        a: 'For anything at ground or lower level, yes. We check drain elevation against the sewer line and specify waterproofing for riverside conditions rather than to a standard detail. Upper floors are unaffected.',
      },
      {
        q: 'Is access difficult along Eastern Avenue?',
        a: 'It needs planning. The strip is narrow with limited parking, so we confirm the approach and arrange delivery and waste removal before scheduling rather than on the day.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Bathroom remodel in North Fairmount? Early-1900s homes on the hillside above the Mill Creek valley, most with their original bathroom footprint. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighbourhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'Houses of that age were not designed around a bathroom, so the room was fitted in later — usually compact, oddly placed, and sitting on framing never intended to carry a tile bed and a filled tub. The hillside adds a practical note: on stepped streets, material access is worth checking before scheduling rather than discovering on day one.',
    ],
    commonIntro:
      'In North Fairmount’s early-1900s hillside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will the floor in my North Fairmount home take a tiled bathroom?',
        a: 'We assess it before quoting tile. Framing from this era was sized for lighter loads, so we check joist spacing and deflection and build the subfloor up where needed.',
      },
      {
        q: 'Can a small original bathroom here be enlarged?',
        a: 'Often, by taking an adjoining closet or a corner of a bedroom. What decides the cost is how far that puts you from the existing stack, which we map before designing.',
      },
    ],
  },

  evanston: {
    intro:
      'Bathroom remodel in Evanston? Early-1900s homes and apartment buildings beside Xavier, part owner-occupied and part student housing. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighbourhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'That split produces two different briefs on the same street. In an owner-occupied house the work is the familiar one — an early-1900s home with a retrofitted bath and space nearby worth taking. In student housing, durability and a predictable turnaround between tenancies matter more than finish fashion, and any shared stack means shutoffs are planned around other tenants.',
    ],
    commonIntro:
      'In Evanston’s early-1900s homes and rentals, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Do you work on rental property near Xavier?',
        a: 'Regularly. We plan around tenancy dates, stage materials before demo so the on-site window is short, and specify finishes built for repeated turnover.',
      },
      {
        q: 'Can an Evanston bathroom be reconfigured rather than just refitted?',
        a: 'Usually there is a closet or bedroom corner adjacent that can be taken. We map the existing stack first, because staying near it is what keeps a reconfiguration sensible.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Bathroom remodel in South Cumminsville? Older homes in the Mill Creek valley, where low ground shapes anything below the main floor. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighbourhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'The housing is older and modest, which usually means a compact bathroom fitted in long after the house was built, on framing that needs checking before tile goes down. The valley position matters for anything at basement level: we establish the drain elevation relative to the sewer and specify waterproofing for low ground rather than to a standard detail.',
    ],
    commonIntro:
      'In South Cumminsville’s older valley homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can I add a bathroom in the basement here?',
        a: 'Often, but the valley setting decides the method. If the drain sits below the sewer line you need a sealed ejector rather than a gravity drain. We check that elevation before designing anything.',
      },
      {
        q: 'Is a full gut necessary in an older home here?',
        a: 'It depends what is behind the wall. We open one section and show you the condition of the supply lines and subfloor before you commit to the larger scope.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Bathroom remodel in English Woods? A quiet hilltop above the Mill Creek valley, with older homes and recent redevelopment side by side. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighbourhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'That mix decides the approach. In the older houses the bathroom is typically original in footprint and served by plumbing added long after the house was framed, so the floor and supply lines both want checking. In the newer redeveloped stock the structure is sound and the work is layout and finish rather than repair — a much more efficient project.',
    ],
    commonIntro:
      'Across English Woods’ older and redeveloped homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Our English Woods home is one of the newer builds — is a remodel worth it?',
        a: 'If the structure and plumbing are sound, it is an efficient project: nearly the whole budget goes into layout and finish rather than repair. We confirm the condition on the site visit.',
      },
      {
        q: 'How do I know whether my older home needs a full gut?',
        a: 'We open one wall and look at the supply lines and subfloor. You get that answer before committing to the wider scope.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Bathroom remodel in North Avondale? Grand early-1900s homes on large tree-shaded lots near Rockdale Avenue — generous houses with undersized baths. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighbourhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'These are substantial houses, and as usual for the era the bathrooms never matched them: one full bath on the bedroom floor, fitted into space that was spare rather than chosen. The opportunity is that houses this size almost always have something adjacent worth taking — a box room, a wide landing, a dressing room — and the work is doing it without disturbing the plaster, millwork and proportions that make the house what it is.',
    ],
    commonIntro:
      'In North Avondale’s grand early-1900s homes, the bathroom projects we are asked for most are:',
    localFaqs: [
      {
        q: 'Can we add a primary suite to a North Avondale home?',
        a: 'Usually there is space — a box room, dressing room or generous landing. What decides the cost is how far that space sits from the existing stack, so we map the plumbing before drawing a layout.',
      },
      {
        q: 'How is original woodwork protected during the work?',
        a: 'We survey it before demolition and decide piece by piece what is protected in place, removed and reinstated, or matched new. Access routes get floor protection and dust barriers too.',
      },
    ],
  },

  millvale: {
    intro:
      'Bathroom remodel in Millvale? A compact residential pocket in the Mill Creek valley, where the low ground matters for anything downstairs. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighbourhood in the Mill Creek valley, a compact, largely residential community.',
      'The housing is modest and older, so bathrooms are small, original in position, and served by plumbing that has been in the wall a long time. As across the valley, anything at basement level needs the drain elevation checked against the sewer line and waterproofing specified for low ground before it is designed.',
    ],
    commonIntro:
      'In Millvale’s older valley homes, the bathroom work we take on is usually:',
    localFaqs: [
      {
        q: 'Can a compact Millvale bathroom be made to work better?',
        a: 'Usually yes, without moving a wall. Swapping a tub for a well-planned walk-in shower, changing the door swing and sizing the vanity to the room transforms how a small bath functions.',
      },
      {
        q: 'Does the valley location affect a downstairs bathroom?',
        a: 'It affects the specification. We check drain elevation against the sewer line and build the waterproofing for low-ground conditions rather than to a standard detail.',
      },
    ],
  },

  // ---------- Cohort 6 · North side, west side hills, surrounded villages ----------

  'paddock-hills': {
    intro:
      'Bathroom remodel in Paddock Hills? A small, well-kept pocket near Paddock Road where early- and mid-1900s homes are hitting the age where the original bath has to go. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'The two eras want different things. The earlier houses have retrofitted baths in awkward positions with plaster and original trim to work around. The mid-century ones have regular framing and plumbing reachable from a basement, which makes a genuine reconfiguration realistic — taking a hall closet, moving a wall, replacing a steel tub with a properly waterproofed shower.',
    ],
    commonIntro:
      'In Paddock Hills’ early- and mid-1900s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a small Paddock Hills hall bath be enlarged?',
        a: 'In the mid-century houses usually yes — there is normally a linen closet adjacent and the plumbing is reachable from below, so moving that wall is a modest job rather than a major one.',
      },
      {
        q: 'How do I know if my home needs a full gut?',
        a: 'We open one wall and look at the supply lines and subfloor. You get that answer before committing to the wider scope.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Bathroom remodel in Spring Grove Village? Older homes in the Mill Creek valley beside the historic cemetery and arboretum, where low ground shapes anything downstairs. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum — one of the largest cemeteries in the country — with a mix of older homes and industry.',
      'The housing is older and modest, so bathrooms are typically compact, original in position, and served by plumbing added long after the house was framed. The valley position is the practical constraint: on this low ground we check the drain elevation against the sewer line and specify waterproofing for the conditions before designing anything below the main floor.',
    ],
    commonIntro:
      'In Spring Grove Village’s older valley homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Can I add a basement bathroom in Spring Grove Village?',
        a: 'Often, but the valley setting decides the method. Where the drain sits below the sewer line you need a sealed ejector rather than a gravity drain — we measure that first.',
      },
      {
        q: 'Is the plumbing in an older home here likely to need replacing?',
        a: 'The sections serving the bathroom usually do, and while the wall is open is the right moment. We assess before quoting rather than assuming from the age of the house.',
      },
    ],
  },

  linwood: {
    intro:
      'Bathroom remodel in Linwood? A small east-side neighborhood on the river bottoms near Lunken, where the low ground matters as much as the housing. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighbourhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'The bottomland position is the first thing we establish. On ground this low the sewer elevation decides whether a lower-level bathroom is a straightforward gravity drain or needs a sealed ejector, and the waterproofing wants specifying for riverside conditions rather than a standard build-up. The older homes here also carry plumbing that has been in the wall a long time.',
    ],
    commonIntro:
      'In Linwood’s older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does the river bottom position affect a bathroom remodel in Linwood?',
        a: 'For anything at or below ground level, yes. We check the drain elevation against the sewer line and specify waterproofing for the actual conditions. Upper-floor bathrooms are unaffected.',
      },
      {
        q: 'Can a small Linwood bathroom be reconfigured?',
        a: 'Usually there is a closet or bedroom corner worth taking. We map the existing stack first, because staying near it is what keeps the cost sensible.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Bathroom remodel in Bond Hill? Established early-1900s and mid-century homes along Reading Road, most still working to their original bathroom footprint. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighbourhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'The mid-century stock is the easier of the two to improve: dimensional framing, layouts that repeat street to street, and plumbing runs accessible from a basement below. That makes a real reconfiguration realistic rather than a fixture swap — taking a hall closet to widen the room, or replacing a steel tub and mortar-bed tile with a properly waterproofed walk-in shower.',
    ],
    commonIntro:
      'In Bond Hill’s early-1900s and mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'What is behind the tile in a 1950s Bond Hill bathroom?',
        a: 'Typically a mortar bed over wire lath, original supply lines and a subfloor that has taken water around the tub. That is why we price these as full gut jobs — what is behind the wall determines the result more than what goes on it.',
      },
      {
        q: 'Can the tub be replaced with a walk-in shower?',
        a: 'Almost always. The drain and supply are already in that zone, so it is usually achievable without moving a wall.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Bathroom remodel in Villages of Roll Hill? Largely multi-unit housing on the hilltop above the Mill Creek valley, where the building shapes the job. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'In multi-unit housing the stack is the governing constraint. A bathroom generally has to stay near it, a shutoff affects neighbouring units, and any work needs agreeing with the building before it is scheduled rather than during. Where we work here it is usually a unit refit — durable surfaces, a properly waterproofed floor and ventilation that actually moves air.',
    ],
    commonIntro:
      'In Roll Hill’s multi-unit housing, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a bathroom be remodeled in a multi-unit building here?',
        a: 'Yes, with the building’s agreement. We map which line serves which unit, confine anything affecting the shared stack to a defined window, and give the affected neighbours notice in advance.',
      },
      {
        q: 'What holds up best in a unit that turns over regularly?',
        a: 'Porcelain rather than soft stone, solid valve bodies, a fully waterproofed floor and a properly ducted extractor. Slightly more up front, considerably less across repeated turnovers.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Bathroom remodel in East Westwood? Early- and mid-1900s homes on the slopes down toward the Mill Creek valley. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighbourhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'The slope is worth planning for. On stepped streets, material access and waste removal are things we confirm before scheduling, and homes cut into a grade often have a lower level sitting close to or below the sewer line — which decides whether a downstairs bathroom is a gravity drain or needs an ejector. The mid-century houses above are more straightforward, with regular framing and reachable plumbing.',
    ],
    commonIntro:
      'In East Westwood’s hillside homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Can I put a bathroom in the lower level of my East Westwood home?',
        a: 'Often, but the grade decides the method. We check the drain elevation against the sewer line before designing — below it you need a sealed ejector rather than a gravity drain.',
      },
      {
        q: 'Is access a problem on the hillside streets?',
        a: 'It needs checking rather than being a barrier. We confirm the approach and arrange delivery and waste removal before the start date.',
      },
    ],
  },

  'western-hills': {
    intro:
      'Bathroom remodel in Western Hills? Established early-1900s through mid-century homes around Glenway Avenue, where the original bath has served long enough. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighbourhoods of early-1900s through mid-century single-family homes.',
      'That range means the right approach depends where in it your house sits. The earlier homes need care around plaster and retrofitted plumbing runs. The mid-century houses — the bulk of the area — have regular framing and accessible plumbing, which makes them good candidates for genuine reconfiguration rather than a fixture-for-fixture swap inside a cramped footprint.',
    ],
    commonIntro:
      'In Western Hills’ established homes, the bathroom work we take on most is:',
    localFaqs: [
      {
        q: 'Can my small Western Hills hall bath be widened?',
        a: 'Usually. Houses of this era normally have a linen closet or bedroom corner adjacent, and because the plumbing is reachable from the basement, moving that wall is a modest job.',
      },
      {
        q: 'Is a 1950s bathroom here worth gutting?',
        a: 'At that age, generally yes. Behind the tile there is commonly a mortar bed, original supply lines and a subfloor that has taken water. Replacing fixtures alone leaves all of that in place.',
      },
    ],
  },

  california: {
    intro:
      'Bathroom remodel in California? Cincinnati’s far-east riverfront along Kellogg Avenue, on low ground beside the Ohio — which shapes anything downstairs. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighbourhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'The riverside position is the governing fact for anything at or below grade. We establish the drain elevation against the sewer line before design, because below it a lower-level bathroom needs a sealed ejector, and the waterproofing gets specified for riverside conditions rather than a standard detail. Upper-floor bathrooms in the older homes here are the more familiar job — compact, original, and due for a proper gut.',
    ],
    commonIntro:
      'In California’s riverfront homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Does being on the river affect a bathroom remodel here?',
        a: 'For ground-floor and lower-level work, yes. We check drain elevation and specify waterproofing and drainage for riverside conditions. Upper floors are unaffected.',
      },
      {
        q: 'Can an older California home take a modern bathroom layout?',
        a: 'Usually, within what the existing stack allows. We map the plumbing first and design around it, which is what keeps a reconfiguration affordable.',
      },
    ],
  },

  carthage: {
    intro:
      'Bathroom remodel in Carthage? A former village along Vine Street with older early-1900s homes, most with their original bathroom footprint. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighbourhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Houses of that age were not planned around a bathroom, so the room was fitted in afterwards — compact, awkwardly placed, and sitting on framing sized for lighter loads than a tile bed and filled tub impose. We check the floor before quoting tile, and map the retrofitted stack before proposing any change of layout.',
    ],
    commonIntro:
      'In Carthage’s early-1900s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will the floor in my Carthage home take tile?',
        a: 'We assess it before quoting. Framing from this era was sized for lighter loads, so we check joist spacing and deflection and build the subfloor up where needed.',
      },
      {
        q: 'Can the bathroom be moved to a better spot?',
        a: 'Sometimes, though staying near the existing stack usually buys a better room for the money. We price both so the comparison is real.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Bathroom remodel in Winton Hills? A mix of residential and multi-unit housing near Winton Road, where the building type decides the brief. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighbourhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'In the multi-unit buildings the shared stack governs — a bathroom stays near it, and a shutoff is a building matter needing notice and an agreed window. In the single-family housing the work is the familiar older-home job: a compact original bath, plumbing due for replacement while the wall is open, and a floor worth checking before tile.',
    ],
    commonIntro:
      'Across Winton Hills’ single-family and multi-unit housing, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Can you work on a unit in a multi-unit building here?',
        a: 'Yes. We map what the shared stack serves, agree a window for anything affecting it, and notify the other units in advance rather than on the day.',
      },
      {
        q: 'Is a full gut needed in an older single-family home here?',
        a: 'It depends what is behind the wall. We open one section and show you the condition of the supply lines and subfloor before you commit.',
      },
    ],
  },

  roselawn: {
    intro:
      'Bathroom remodel in Roselawn? Settled mid-century homes and apartments along Reading Road, where the original bath is now sixty-odd years old. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighbourhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'The mid-century houses are straightforward to work with — dimensional framing, repeating layouts, plumbing reachable from below — which makes a real reconfiguration realistic. Behind sixty-year-old tile there is usually a mortar bed, original supply lines and a subfloor that has taken water around the tub, so these are full gut jobs rather than refits.',
    ],
    commonIntro:
      'In Roselawn’s mid-century homes and apartments, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a compact Roselawn hall bath be enlarged?',
        a: 'Frequently. There is normally a linen closet or bedroom corner adjacent, and because the framing is regular and the plumbing accessible, moving that wall is not a major undertaking.',
      },
      {
        q: 'Do you work on apartment units here?',
        a: 'Yes. In a shared building we map the stack first, agree a shutoff window with the building, and give the affected units notice in advance.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Bathroom remodel in Mount Airy? Mid-century homes on hilly, wooded streets beside Mount Airy Forest — sound houses with dated baths. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighbourhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'Mid-century construction makes the work predictable: regular framing, layouts that repeat, and plumbing reachable from a basement. The hilly streets are the practical note — homes cut into a grade often have a lower level near or below the sewer line, so we check that elevation before proposing a downstairs bathroom.',
    ],
    commonIntro:
      'In Mount Airy’s mid-century hillside homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Can I add a bathroom in the lower level of my Mount Airy home?',
        a: 'Often, though the grade decides the method. We check the drain elevation against the sewer line first — below it a sealed ejector is needed rather than a gravity drain.',
      },
      {
        q: 'Is the original 1960s bathroom worth gutting?',
        a: 'Usually. Behind the tile there is commonly a mortar bed, original supply lines and a subfloor that has taken water. A surface update leaves all of that in place.',
      },
    ],
  },

  hartwell: {
    intro:
      'Bathroom remodel in Hartwell? A former streetcar suburb of Victorian and early-1900s homes, with period detail worth working around. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighbourhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Victorian houses had bathrooms added rather than planned, usually squeezed into a former dressing room or a corner of a landing well after the house was built. That shows up as awkward door swings, radiators in difficult positions and plumbing routed wherever it could be got to. Reworking those rooms means dealing with a century of improvisation — slower than a modern house, and where the real gain is.',
    ],
    commonIntro:
      'In Hartwell’s Victorian and early-1900s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you protect original woodwork in a Hartwell home?',
        a: 'We survey the millwork before demo and decide piece by piece what stays protected in place, what is removed and reinstated, and what is matched new. Access routes get floor protection and dust barriers too.',
      },
      {
        q: 'Can a radiator stay in a reconfigured bathroom?',
        a: 'Often, and in a period house keeping it usually looks better. Where it genuinely blocks the layout we can relocate it, but that is a decision made at design rather than on site.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Bathroom remodel in Kennedy Heights? A hilltop that began as a Victorian resort community, with large early-1900s homes and undersized baths. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighbourhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'These are generous houses whose bathrooms never matched their scale — typically one full bath serving a floor of large bedrooms, fitted into space that was spare rather than chosen. The opportunity is that houses this size usually have something adjacent worth taking: a box room, a deep landing, an oversized closet. The work is doing it without disturbing the plaster and millwork that give the house its character.',
    ],
    commonIntro:
      'In Kennedy Heights’ large early-1900s homes, the bathroom projects we are asked for are:',
    localFaqs: [
      {
        q: 'Can we add a second bathroom to a Kennedy Heights home?',
        a: 'Usually there is space — a box room or generous landing that can give it up. What decides the cost is how far that sits from the existing stack, which we map before designing.',
      },
      {
        q: 'Will the original detail survive the work?',
        a: 'If it is planned for. We survey the trim and plaster before demolition and protect, reinstate or match as appropriate.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Bathroom remodel in St. Bernard? A dense grid of early-1900s homes built around Ivorydale, on tight valley lots. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'Density and age define the work. Lots are small and streets tight, so material delivery and waste removal are arranged in advance. The houses are close-set and often narrow, with compact bathrooms fitted in long after the framing went up — which usually means checking the floor before tile and mapping a retrofitted stack before changing any layout.',
    ],
    commonIntro:
      'In St. Bernard’s dense early-1900s housing, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you manage access on St. Bernard’s tight streets?',
        a: 'By planning it. We check the approach and parking before scheduling and arrange delivery windows and waste removal ahead of the start date.',
      },
      {
        q: 'Can a narrow St. Bernard bathroom be made to work better?',
        a: 'Usually, without moving a wall. Swapping a tub for a well-planned walk-in shower, changing the door swing and sizing the vanity properly transforms how a small room functions.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Bathroom remodel in Elmwood Place? A tiny, densely built village in the Mill Creek valley, where low ground and tight lots both matter. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Two things shape the work. The valley position means anything at basement level needs its drain elevation checked against the sewer and its waterproofing specified for low ground. And the houses sit very close together on small lots, so access, skip placement and delivery are settled before the start date rather than on the day.',
    ],
    commonIntro:
      'In Elmwood Place’s closely spaced early-1900s homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Does the Mill Creek valley affect a basement bathroom in Elmwood Place?',
        a: 'Yes. We check the drain elevation against the sewer line first — below it a sealed ejector is required — and specify waterproofing for low-ground conditions.',
      },
      {
        q: 'Are the tight lots here a problem for the work?',
        a: 'They need planning rather than being a barrier. We confirm access and arrange delivery and waste removal in advance.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Bathroom remodel in Delhi Hills? Established mid-century homes on the hilly streets above the Ohio, in an area with deep greenhouse-growing roots. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'The bluff above the river is what makes Delhi Hills different to work in. Houses here are stepped into a grade that changes street by street, so the depth of the lower floor relative to the sewer line varies from one address to the next — and that single measurement decides whether a lower-level bathroom drains by gravity or needs an ejector. It is a real difference in cost, and it cannot be judged from a photograph or a floor plan. We take the elevation on the first visit, every time, before anything downstairs is drawn.',
    ],
    commonIntro:
      'In Delhi Hills’ mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why does the lower-level bathroom cost vary so much on these streets?',
        a: 'Because the houses sit at different depths on the bluff. Where the drain is above the sewer line it runs by gravity; where it is not, it needs a sealed ejector. We measure rather than assume, so the quote reflects your house.',
      },
      {
        q: 'Does the hillside affect anything besides drainage?',
        a: 'It puts more demand on the basement drainage in heavy rain, which belongs in the waterproofing specification rather than being treated as a separate problem from the bathroom.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Bathroom remodel in Golf Manor? A compact grid of modest mid-century homes, where a smarter layout beats extra square footage. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Golf Manor is its own incorporated village even though Cincinnati wraps entirely around it, which means the permitting authority for your project is the village rather than the city your postal address might suggest. We confirm that before scheduling, because a permit filed with the wrong authority is how a finished bathroom sits waiting on an inspection. The compact lots matter too: narrow drives and close-set houses mean skip placement and delivery windows get arranged in advance rather than sorted out on the morning of demolition.',
    ],
    commonIntro:
      'In Golf Manor’s modest mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Who issues the permit for work in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm the authority and its requirements before scheduling so inspections are booked correctly.',
      },
      {
        q: 'Is there room to work on these narrow lots?',
        a: 'Yes, with planning. We check the drive and street access on the site visit and book deliveries and waste removal into set windows rather than improvising around the neighbours.',
      },
    ],
  },

  fairfax: {
    intro:
      'Bathroom remodel in Fairfax? A small village along Wooster Pike beside Mariemont, with established early- and mid-1900s homes. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'Unlike its neighbour, Fairfax carries no historic-landmark constraints, so there is more freedom here than a few streets away in Mariemont. The houses themselves follow the familiar pattern: compact original bathrooms, plumbing added after the framing, and in the mid-century stock a regular structure that makes reconfiguration realistic.',
    ],
    commonIntro:
      'In Fairfax’s established homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Does Fairfax have the same historic restrictions as Mariemont?',
        a: 'No. Mariemont’s National Historic Landmark status brings review for exterior-visible changes; Fairfax does not carry that, so there is more latitude here — worth knowing if you have looked at both.',
      },
      {
        q: 'Can a small Fairfax bathroom be enlarged?',
        a: 'Often, by taking an adjoining closet or bedroom corner. We map the existing stack first, since staying near it keeps the cost sensible.',
      },
    ],
  },

  mack: {
    intro:
      'Bathroom remodel in Mack? Green Township streets of mid-century and newer homes, where the bathroom has dated rather than failed. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighbourhoods of mid-century and newer single-family homes.',
      'A good number of houses on these streets run on one full bathroom, and that changes the planning more than the specification does. When the only bath in the house is the one being gutted, the question every family asks is how long they are without it — so we stage every material and fixture before demolition starts and give you the on-site window in writing, typically 2–5 days rather than the open-ended stretch people brace for. Where a half bath exists, we sequence the work so it stays usable throughout.',
    ],
    commonIntro:
      'In Mack’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'We only have one bathroom — how long will we be without it?',
        a: 'Typically 2–5 days on site, and you get that window in writing before you commit. It is short because everything is ordered, delivered and staged before demolition begins rather than as the job goes.',
      },
      {
        q: 'Can you work around a half bath?',
        a: 'Yes, and we plan the sequence around it so it stays usable for the duration. Where there is no second bathroom at all, we tell you the honest timeline rather than a comfortable one.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Bathroom remodel in Monfort Heights? A settled Green Township suburb of mid-century homes, most with their original bath still in place. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Most of these houses put the family bathroom on the second floor, directly over a living room or kitchen ceiling, and that is where the real risk sits. A shower pan or a wall that leaks slowly does not announce itself in the bathroom — it announces itself downstairs, months later, in a stained ceiling and a joist that has been wet the whole time. So the waterproofing is where we spend the care: a bonded membrane taken properly up the walls, seams and corners detailed, and the pan tested before a single tile is set.',
    ],
    commonIntro:
      'In Monfort Heights’ mid-century homes, the bathroom work we handle most is:',
    localFaqs: [
      {
        q: 'Our upstairs bathroom is over the living room — how do you protect it?',
        a: 'With a bonded waterproofing membrane carried up the walls and detailed at every seam and corner, and a pan that is flood-tested before tiling. That test is the step most often skipped, and it is the one that catches a problem while it is still cheap.',
      },
      {
        q: 'We have a stain on the ceiling below — what does that mean?',
        a: 'Usually a failed pan or wall waterproofing that has been leaking slowly for some time. We open it up and look at the subfloor and joists before quoting, because that condition has to be in the fixed price rather than added later.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Bathroom remodel in Bridgetown? Established Green Township neighborhoods of mid-century and newer homes on the west side. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighbourhoods of mid-century and newer homes.',
      'Plenty of houses on these streets have two bathrooms that both need doing, and how you sequence them decides what the whole thing costs. Done together, the design, permitting and material orders happen once and the crew is mobilised once — genuinely cheaper per room than two separate projects a year apart. Done in turn, you keep a working bathroom throughout, which some households need more than they need the saving. There is no universally right answer, so we price both and let you choose on facts rather than on which one we would rather sell.',
    ],
    commonIntro:
      'In Bridgetown’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Should we do both bathrooms at once or one at a time?',
        a: 'Together is cheaper per room — one design process, one permit, one mobilisation. One at a time means you always have a working bathroom. We quote both so the choice is yours on real numbers.',
      },
      {
        q: 'Which bathroom should we do first if we split it?',
        a: 'Usually the one the household actually uses daily rather than the larger one. We will say so even when the primary suite is the bigger contract.',
      },
    ],
  },

  // ---------- Cohort 7 · Mill Creek valley villages, north-side cities, east-side townships ----------

  finneytown: {
    intro:
      'Bathroom remodel in Finneytown? Springfield Township ranches and split-levels where the original bath was built for a family of four sharing one room. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes built when the suburb went up in one push after the war.',
      'That single-era development is unusual and it helps: houses on the same street were built to a handful of plans, so we often know what is behind the wall before we open it. What they share is a hall bath sized for a 1950s family — one room, one sink, a steel tub — serving three or four bedrooms. The most valuable change here is rarely a bigger room; it is a second bath carved from a bedroom corner or an oversized hall, which is what the layout was never given.',
    ],
    commonIntro:
      'In Finneytown’s mid-century Springfield Township homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a second bathroom be added to a Finneytown ranch?',
        a: 'Frequently, and it is usually worth more than enlarging the existing one. These plans often have a bedroom corner or an oversized hall that can take a three-quarter bath, and with the plumbing reachable from the basement, getting drainage there is straightforward.',
      },
      {
        q: 'Do you know the house types in Finneytown already?',
        a: 'Broadly, yes. The area was built in a short window to a small number of plans, so we usually recognise the layout on the site visit — which makes the estimate more accurate from the start.',
      },
    ],
  },

  amberley: {
    intro:
      'Bathroom remodel in Amberley Village? Large homes on big wooded lots, where a primary suite is a genuine room rather than a squeezed-in afterthought. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets, many set well back from the road.',
      'The scale changes the brief. A primary suite here is designed rather than retrofitted — a genuine wet room, a double vanity that two people can use at once, sometimes a separate water closet — and the finish level is specified to match the rest of a substantial house. Distance is the practical issue: a suite at the far end of a large house has real separation from the water heater, which is worth solving with a recirculation loop while the walls are open rather than living with afterwards.',
    ],
    commonIntro:
      'In Amberley Village’s large homes, the bathroom work we are engaged for is:',
    localFaqs: [
      {
        q: 'Our Amberley primary suite is a long way from the water heater — can that be fixed?',
        a: 'Yes, and during the remodel is much the cheapest time. Depending on the layout we would look at a recirculation loop or a dedicated unit serving that end of the house. Retrofitting either later means opening finished walls again.',
      },
      {
        q: 'Can a bathroom be built to match the rest of the house?',
        a: 'That is the usual expectation here. Our in-house designer specifies tile, stone, cabinetry and hardware to sit with the existing joinery and finishes rather than to a package, and you see it in 3D before anything is ordered.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Bathroom remodel in Arlington Heights? A compact valley village of older homes, where what is under the floor matters before anything goes on top of it. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes on modest lots.',
      'Small older houses in a valley bring two specific checks before we quote. The floor structure, because framing of this age and span was never sized for a mortar bed and a filled tub — we assess deflection and build up the subfloor where it is needed. And the drain elevation relative to the sewer, because on valley ground a lower-level bathroom is either a straightforward gravity drain or a sealed ejector, and that single measurement changes the price.',
    ],
    commonIntro:
      'In Arlington Heights’ compact older homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will the floor in my Arlington Heights home take tile?',
        a: 'We check rather than assume. Framing of this age was sized for lighter loads, so we assess joist span and deflection and build the subfloor up where needed. Tile over a flexing floor cracks regardless of the installation.',
      },
      {
        q: 'What decides whether I can have a basement bathroom?',
        a: 'The drain elevation against the sewer line. Below it you need a sealed ejector rather than gravity drainage. We measure it on the site visit so the quote reflects the real method.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Bathroom remodel in North College Hill? A dense grid of early- and mid-1900s homes on narrow lots, where the neighbours are close enough to matter. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes on narrow lots.',
      'Density is the working constraint. Houses sit close enough that a skip needs a planned position and deliveries a planned time, and on the narrower lots there is often no side access at all — everything comes through the front of the house, which changes how we protect the route in and how we sequence the work. Inside, the bathrooms are compact and the gain usually comes from a better layout rather than more floor area.',
    ],
    commonIntro:
      'In North College Hill’s densely built homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'There is no side access at our North College Hill house — is that a problem?',
        a: 'It is common here and we plan for it. Everything comes through the front, so we protect the route in with floor covering and dust barriers and stage materials to suit. It affects sequencing, not feasibility.',
      },
      {
        q: 'Can a compact bathroom here be made to work better?',
        a: 'Usually, without moving a wall. A well-planned walk-in shower in place of the tub, a changed door swing and a vanity sized to the room make more difference than most people expect.',
      },
    ],
  },

  newtown: {
    intro:
      'Bathroom remodel in Newtown? A small village on Little Miami river-bottom ground, where the water table decides what is possible downstairs. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'River-bottom ground is a different proposition from a hillside lot. The water table sits high enough that a lower-level bathroom needs both its drain elevation checked against the sewer and its waterproofing built for sustained moisture rather than the occasional spill — a bonded membrane and a sealed substrate, not a standard build-up. Upstairs, the older houses follow the familiar pattern of a compact retrofitted bath on framing worth checking.',
    ],
    commonIntro:
      'In Newtown’s older river-bottom homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can I put a bathroom downstairs in a Newtown house?',
        a: 'Often, but the ground decides how. On river-bottom land we check the drain elevation against the sewer — below it means a sealed ejector — and build the waterproofing for a high water table rather than to a standard detail.',
      },
      {
        q: 'Is upstairs work affected by the low ground?',
        a: 'No. Upper-floor bathrooms here are a normal remodel: the usual checks on floor structure and the age of the plumbing serving the room.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Bathroom remodel in Turpin Hills? Anderson Township homes from the 1960s through the 1990s, where the era decides whether it is a gut or a refit. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighbourhoods of mid-century and newer homes.',
      'The spread of build dates here is wide enough that two houses a street apart need different projects. A 1960s bath is a full gut — mortar-bed tile, original supply lines, a subfloor that has usually taken water. A 1990s primary suite needs no repair at all, and the work is reclaiming a garden-tub deck for a proper shower. We establish which you have on the site visit rather than pricing from the postcode.',
    ],
    commonIntro:
      'In Turpin Hills’ mid-century and later homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'How do I know whether my Turpin Hills bathroom is a gut or a refit?',
        a: 'The build date is a good first indicator and we confirm it by opening one wall. Original supply lines and a soft subfloor mean a gut; sound structure means the budget goes into layout and finish instead. You get that answer before committing.',
      },
      {
        q: 'Can the garden tub in our 1990s primary bath become a shower?',
        a: 'Yes, and it is the most requested change in houses of that era. The tub deck usually holds the best corner of the room and the plumbing is already in that zone.',
      },
    ],
  },

  silverton: {
    intro:
      'Bathroom remodel in Silverton? A small city on Montgomery Road with early- and mid-1900s homes, sitting between Kenwood and Deer Park. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'Silverton’s housing is modest by the standards of the east side around it, and that shapes what is worth doing. These are not houses where a five-figure primary suite returns its cost — the value is in a well-built hall bath that works properly and lasts: a correctly waterproofed shower, a floor that does not flex, ventilation that actually clears the room. We would rather specify that honestly than sell a scope the house will not carry.',
    ],
    commonIntro:
      'In Silverton’s early- and mid-1900s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'What is worth spending on in a Silverton bathroom?',
        a: 'The parts you cannot see later — waterproofing, floor structure and ventilation — then finishes that suit the house. We will tell you plainly where extra money returns value here and where it does not.',
      },
      {
        q: 'Can a small Silverton bathroom be enlarged?',
        a: 'Often by taking an adjoining closet, though whether it is worth it depends on the house. We will price both the reconfiguration and a straight rebuild in the existing footprint so you can compare.',
      },
    ],
  },

  lockland: {
    intro:
      'Bathroom remodel in Lockland? Closely spaced mill-era worker housing in the Mill Creek valley, small and old in equal measure. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'Worker housing was built small, plain and fast, and it shows in the bathrooms — usually a room carved out of something else long after the house went up, on framing never intended to carry it. Combined with the valley ground, that gives two checks before any quote: floor structure before tile, and drain elevation before anything at basement level. The tight spacing between houses also means access and skip placement are arranged in advance.',
    ],
    commonIntro:
      'In Lockland’s mill-era worker housing, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is an old Lockland house strong enough for a tiled bathroom?',
        a: 'Often it needs work first, which we establish before quoting. We assess the joists and build the subfloor up where needed rather than laying tile onto a floor that will flex and crack it.',
      },
      {
        q: 'Can these small bathrooms be made genuinely better?',
        a: 'Yes, and usually inside the existing footprint. A properly built walk-in shower in place of a cramped tub, better lighting and real ventilation transform how the room works without needing more space.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Bathroom remodel in Groesbeck? Colerain Township ranches and split-levels, where the split-level layout puts the bath in an awkward half-landing. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes, with split-levels well represented among them.',
      'The split-level is the local quirk worth knowing. It puts the main bath on a half-landing between floors, which means the drainage run and the joist direction are both different from a conventional two-storey house — and it is why a layout that would be simple elsewhere sometimes is not here. We check which level the stack actually serves before proposing to move anything.',
    ],
    commonIntro:
      'In Groesbeck’s mid-century ranches and split-levels, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Groesbeck house is a split-level — does that complicate the bathroom?',
        a: 'It changes the plumbing geometry rather than complicating it. The half-landing position means the drainage run and joist direction differ from a conventional house, so we map what the stack serves before designing rather than assuming.',
      },
      {
        q: 'Can a mid-century hall bath here be widened?',
        a: 'Usually there is a linen closet adjacent worth taking, though on a split-level we confirm the framing direction first — it decides how straightforward moving that wall really is.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Bathroom remodel in Mount Healthy? A historic small city with a genuine old town centre, and housing that spans a century around it. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes around it.',
      'The older housing near the centre is the more demanding work: plaster walls, original trim, and bathrooms fitted in decades after the house was framed. Further out, the mid-century streets are regular and reachable, where taking a hall closet to widen a cramped bath is a modest job. Knowing which you have changes both the price and the time on site, so we establish it before quoting.',
    ],
    commonIntro:
      'In Mount Healthy’s older and mid-century homes, the bathroom work we handle is:',
    localFaqs: [
      {
        q: 'Is a remodel near the old town centre different from one further out?',
        a: 'Yes, meaningfully. The older houses near the centre need care around plaster, original trim and retrofitted plumbing, which takes longer. The mid-century streets further out are more straightforward to reconfigure.',
      },
      {
        q: 'Can original detail be kept?',
        a: 'Where it has survived, yes. We survey the trim before demolition and protect, reinstate or match it rather than removing by default.',
      },
    ],
  },

  reading: {
    intro:
      'Bathroom remodel in Reading? A Mill Creek valley city with a settled mix of older and mid-century homes — and low ground under the older half. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'The valley floor and the higher ground behave differently, and it is worth knowing which you are on. Down in the valley, a lower-level bathroom needs its drain elevation checked against the sewer and its waterproofing specified for the conditions. On the higher streets that constraint disappears and the job becomes a conventional mid-century remodel — regular framing, accessible plumbing, and a linen closet usually available to widen a cramped bath.',
    ],
    commonIntro:
      'In Reading’s valley and hillside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does it matter which part of Reading I am in?',
        a: 'For anything below the main floor, yes. On the valley floor we check drain elevation and build waterproofing for low ground; on the higher streets that is not a factor. We confirm it on the site visit.',
      },
      {
        q: 'Can a mid-century bath here be enlarged?',
        a: 'Usually. There is normally a linen closet or bedroom corner adjacent, and with plumbing reachable from below, moving that wall is a modest job.',
      },
    ],
  },

  // ---------- Cohort 8 · Anderson & Sycamore Township, Green Township, valley villages ----------

  greenhills: {
    intro:
      'Bathroom remodel in Greenhills? A 1930s New Deal Greenbelt town and National Historic Landmark district — the most constrained housing we work on, and among the most rewarding. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Nothing else in our service area is quite like it. The town was designed as a single composition, so the cottages and townhomes were built to standard plans with deliberately compact, efficient bathrooms — and the landmark designation means anything altering the exterior is reviewed. What that leaves is interior work of real precision: modernising a 1930s bathroom inside a footprint that cannot grow outward, keeping the character of a nationally significant piece of planning while making the room genuinely usable.',
    ],
    commonIntro:
      'In Greenhills’ 1930s Greenbelt cottages and townhomes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does Greenhills’ National Historic Landmark status affect a bathroom remodel?',
        a: 'Interior work generally proceeds, but anything visible from outside — a window change, a new vent penetration on a visible elevation — can require review. We establish exactly what your project touches before design so nothing is drawn that cannot be approved.',
      },
      {
        q: 'Can a 1930s Greenhills bathroom be modernised without losing its character?',
        a: 'Yes, and in a landmark district it is the right approach. We keep the scale and proportion the original design intended, replicate period elements like tile size and trim profile, and replace everything behind the wall. The room reads as original and performs as new.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Bathroom remodel in Lincoln Heights? A historic community with modest older homes, where honest scope matters more than an upsell. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'The housing here is small and long-standing, and the honest advice usually is not the largest scope. What returns real value is a properly built room: waterproofing that holds, a floor that does not flex under tile, ventilation that actually clears moisture, and plumbing replaced while the wall is open. The valley ground adds the usual check on drain elevation before anything at basement level. We will tell you plainly where money is worth spending here and where it is not.',
    ],
    commonIntro:
      'In Lincoln Heights’ older valley homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'What is genuinely worth spending on in a Lincoln Heights bathroom?',
        a: 'The parts you cannot redo later — waterproofing, floor structure, plumbing and ventilation. Finishes can be modest and still look right. We would rather build one room properly than sell a scope the house does not need.',
      },
      {
        q: 'Does the valley ground affect a downstairs bathroom?',
        a: 'Yes. We check the drain elevation against the sewer line before designing — below it a sealed ejector is needed — and specify waterproofing for low ground.',
      },
    ],
  },

  addyston: {
    intro:
      'Bathroom remodel in Addyston? An old mill village right on the Ohio, where century-old worker homes sit close together on low ground. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'Two things travel together here. The houses are century-old worker cottages — small, plainly framed, with bathrooms fitted in long after they were built — so floor structure gets checked before any tile is quoted. And the village sits right on the river, which means anything at or below grade needs the drain elevation established against the sewer and waterproofing built for riverside conditions rather than a standard detail. Addyston is also at the far western edge of our area, so we confirm scheduling honestly rather than promising same-week.',
    ],
    commonIntro:
      'In Addyston’s century-old mill-village homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you cover Addyston, out at the western edge?',
        a: 'Yes, though it is a longer run for us than the inner west side, so we are straight about scheduling rather than promising a date we would struggle to hold. Once a job is booked, the written schedule stands.',
      },
      {
        q: 'Does the river position affect the work?',
        a: 'For ground-floor and lower-level bathrooms, yes. We check drain elevation and specify waterproofing for riverside conditions. Upper floors are a conventional remodel.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Bathroom remodel in Woodlawn? A valley village where residential streets sit alongside industrial corridors, and the ground under the house matters. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'The residential streets here are older and modest, with compact bathrooms retrofitted into houses that predate them. As across the valley floor, the deciding measurement for anything below the main floor is the drain elevation against the sewer line — it separates a straightforward gravity drain from a sealed ejector, and it changes the price enough that we take it on the first visit rather than at design.',
    ],
    commonIntro:
      'In Woodlawn’s older valley homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'What decides whether I can have a basement bathroom in Woodlawn?',
        a: 'The drain elevation relative to the sewer line. Above it, a conventional gravity drain works. Below it, you need a sealed ejector system. We measure it on the site visit so the quote reflects the real method.',
      },
      {
        q: 'Is the older housing here worth a full gut?',
        a: 'Usually the plumbing serving the bathroom is due, and while the wall is open is the moment. We open one section and show you before you commit to the wider scope.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Bathroom remodel in Deer Park? A small settled city of mid-century homes on quiet streets, sitting right between Silverton and Blue Ash. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Deer Park houses are typically modest in footprint but sit in an east-side location that holds its value, which makes a well-built bathroom a sound investment here in a way it is not everywhere. The houses are small enough that a full primary suite rarely fits, so most of the work is a hall bath done properly — a real walk-in shower where a steel tub was, a vanity sized to the room, and everything behind the wall replaced.',
    ],
    commonIntro:
      'In Deer Park’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a bathroom remodel a good investment in Deer Park?',
        a: 'Generally yes. The location holds its value and the houses are modest enough that a well-built bathroom is a meaningful share of what a buyer notices. We would still steer you toward doing one room properly rather than two cheaply.',
      },
      {
        q: 'Can a primary suite be added to a Deer Park house?',
        a: 'Rarely without an addition — the footprints are small. What usually works better is reconfiguring the hall bath properly and, where the plan allows, adding a three-quarter bath elsewhere.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Bathroom remodel in Dillonvale? Sycamore Township mid-century homes minutes from Kenwood, where the plumbing is now the age it fails. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighbourhoods of mid-century homes.',
      'These houses were built in the same wave as much of the surrounding township, which means predictable framing and plumbing reachable from a basement — the conditions that make a real reconfiguration affordable rather than theoretical. Behind sixty-year-old tile there is almost always a mortar bed, original supply lines and a subfloor that has taken water at the tub, so these are gut jobs by nature, not refits.',
    ],
    commonIntro:
      'In Dillonvale’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why is a mid-century bathroom always a full gut?',
        a: 'Because of what is behind the surface. Tile of that era sits on a mortar bed over wire lath, the supply lines are original, and the subfloor around the tub has usually taken water. Replacing fixtures over that leaves every real problem in place.',
      },
      {
        q: 'Can the hall bath be widened?',
        a: 'Usually. These plans normally include a linen closet or bedroom corner that can be taken, and with the plumbing accessible from below, moving that wall is a modest job.',
      },
    ],
  },

  forestville: {
    intro:
      'Bathroom remodel in Forestville? Anderson Township neighborhoods spanning several decades of building, so the right project depends on your build date. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighbourhoods of mid-century and newer homes.',
      'Anderson Township grew over a long stretch, and Forestville shows it — houses from the 1960s sit near houses from the 1990s. That single fact decides the project: the older ones are gut jobs with mortar-bed tile and original supply lines, the newer ones need no repair at all and the budget goes entirely into reclaiming a garden-tub deck and updating finishes. We price from the house, not the area.',
    ],
    commonIntro:
      'In Forestville’s mid-century and later homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Two houses on our Forestville street got very different quotes — why?',
        a: 'Almost always build date. A 1960s bathroom is a full gut down to a mortar bed and original supply lines; a 1990s one needs no repair, so the same money buys far more visible finish. We establish which yours is by opening a wall, not by guessing.',
      },
      {
        q: 'Can the garden tub become a walk-in shower?',
        a: 'Yes, and it is the most requested change in the newer houses here. The tub deck holds the best corner and the plumbing is already in that zone.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Bathroom remodel in Cherry Grove? Anderson Township housing where the compartmentalised 1980s primary bath is the thing people most want gone. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighbourhoods of mid-century and newer single-family homes.',
      'A lot of Cherry Grove’s housing dates from the era of the compartmentalised primary bath — the toilet shut into its own narrow closet, a separate cramped shower, and a long vanity running down one wall. It is the layout people find hardest to live with and the one that responds best to reworking, because the square footage is already there. Removing the compartment wall alone usually transforms how the room feels without touching the plumbing.',
    ],
    commonIntro:
      'In Cherry Grove’s mid-century and later homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can the separate toilet compartment be opened up?',
        a: 'Usually yes, and it is often the single most effective change in a bathroom of this era. The wall is rarely structural and the toilet stays where it is, so you gain the light and space without moving any plumbing.',
      },
      {
        q: 'Is our 1980s primary bath worth a full remodel?',
        a: 'If the structure is sound, it is an efficient project — nearly all of the budget goes into layout and finish rather than repair. We confirm the condition on the site visit.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Bathroom remodel in Dry Run? Anderson Township homes on larger, wooded lots — bigger houses, and bathrooms with room to work with. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighbourhoods of mid-century and newer single-family homes on generally larger, wooded lots.',
      'The lot sizes here tend to mean bigger houses than elsewhere in the township, and that shows in the bathrooms — primary suites with genuine square footage that has simply been allocated badly. A garden tub taking the best corner, a shower too small to be pleasant, and a vanity run longer than it is useful. There is usually no need to move a wall; the gain comes from redistributing space the room already has.',
    ],
    commonIntro:
      'In Dry Run’s larger suburban homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Dry Run primary bath is big but does not work — is that a full gut?',
        a: 'Often not. Where the square footage is already there, reworking the zones — usually reclaiming the tub deck for a proper shower — achieves most of it without touching every wall. We will show you that option priced against a full gut.',
      },
      {
        q: 'Can we add a second sink and more storage?',
        a: 'In rooms this size, almost always. The constraint is normally the vanity wall length and the position of the existing supply, both of which we check before designing.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Bathroom remodel in White Oak? Green Township homes spanning the 1960s to the 1990s, where the age of the house sets the scope. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'White Oak developed over several decades, which means neighbouring streets can need entirely different work. The earlier houses are conventional gut jobs, valuable mainly because their regular framing makes taking a closet straightforward. The later ones are structurally sound, so the money goes into the visible room — and that difference is worth establishing before you set a budget rather than after.',
    ],
    commonIntro:
      'In White Oak’s mid-century and later homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do I set a budget for a White Oak bathroom before knowing the scope?',
        a: 'Start with the build date, then confirm it. We open one wall on the site visit and tell you whether you are looking at a gut or a refit — that single answer moves the number more than any finish choice will.',
      },
      {
        q: 'Can a cramped hall bath here be widened?',
        a: 'In the earlier houses usually yes, since the framing is regular and there is normally a linen closet adjacent. In the newer ones the room is generally already large enough and the issue is layout.',
      },
    ],
  },

  dent: {
    intro:
      'Bathroom remodel in Dent? A Green Township community out toward the western edge, with mid-century and newer homes on generous lots. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighbourhoods of mid-century and newer homes, set further out than the township’s inner suburbs.',
      'The outer position tends to mean larger lots and, in the newer housing, larger bathrooms than closer in — which changes the opportunity. Rather than fighting for square footage, the work here is usually about spending the space better: a walk-in shower that earns its footprint, storage designed rather than bought, and lighting that actually works for the way a bathroom gets used morning and evening.',
    ],
    commonIntro:
      'In Dent’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Dent bathroom is a decent size — what is worth changing?',
        a: 'Usually the distribution rather than the dimensions. Reclaiming a tub deck for a proper shower, designing storage into the room instead of adding a cabinet, and layering the lighting make more difference than square footage does.',
      },
      {
        q: 'Do you come out this far west regularly?',
        a: 'Yes, Dent and the wider Green Township area are well within our patch. We will give you firm dates in writing once design and selections are settled.',
      },
    ],
  },

  // ---------- Cohort 9 · North-side cities, Colerain Township, the far-west river villages ----------

  loveland: {
    intro:
      'Bathroom remodel in Loveland? A historic downtown on the Little Miami, where the older homes near the river need a different build from the newer ones up the hill. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes around it.',
      'Loveland genuinely splits in two for our purposes. The older houses near the river and the downtown carry period detail worth protecting and sit on ground where a lower-level bathroom needs its drain elevation checked and its waterproofing built for river conditions. The newer subdivisions further out have none of those constraints — sound structure, regular framing, and a primary bath where the work is reclaiming a garden-tub deck. Same city, two different quotes.',
    ],
    commonIntro:
      'In Loveland’s historic downtown homes and newer subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a remodel near Loveland’s downtown different from one in the newer subdivisions?',
        a: 'Substantially. Near the river we plan around period detail and check drain elevation for anything below the main floor. In the newer neighbourhoods the structure is sound and the budget goes into layout and finish instead.',
      },
      {
        q: 'Does the Little Miami affect a basement bathroom?',
        a: 'On the lower ground near the river, yes. We check the drain elevation against the sewer line and specify waterproofing for those conditions rather than to a standard detail.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Bathroom remodel in Forest Park? A 1960s planned community, which means whole streets built to the same handful of plans. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighbourhoods of mid-century single-family homes.',
      'Being a planned community is genuinely useful to a remodeler. Houses went up in a short window to a limited set of plans, so we usually recognise the layout on arrival and know where the stack runs before opening anything — which makes the estimate tighter from the start. What those plans share is a compact hall bath serving several bedrooms and, in many of them, a second half-bath that can be extended into a full one where the drainage already exists.',
    ],
    commonIntro:
      'In Forest Park’s 1960s planned-community homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can our Forest Park half-bath be made into a full bathroom?',
        a: 'Frequently, and it is the best value move in these plans. The drainage and supply are already there, so adding a shower is far cheaper than creating a bathroom from nothing. We check the available floor area and the stack size first.',
      },
      {
        q: 'Do you already know the Forest Park house types?',
        a: 'Broadly, yes. The city was built in a short window to a small number of plans, so we usually recognise the layout on the site visit — which makes the quote more accurate and the schedule more reliable.',
      },
    ],
  },

  sharonville: {
    intro:
      'Bathroom remodel in Sharonville? Established residential streets near Sharon Woods, in a city that is also a major commercial hub. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighbourhoods, the convention centre and industrial corridors.',
      'We work on the residential side of that mix. The housing is mostly mid-century and now at the age where a bathroom is a full gut by nature — mortar-bed tile, original supply lines, a subfloor that has taken water at the tub. The compensation is that framing from this era is regular and the plumbing is reachable from a basement, so once the room is open, changing the layout properly costs far less than it would in an older house.',
    ],
    commonIntro:
      'In Sharonville’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why is a mid-century Sharonville bathroom always a gut?',
        a: 'Because of the build-up behind the surface. Tile of that era sits on a mortar bed over wire lath, the supply lines are original, and the subfloor around the tub has usually taken water. Working over that leaves every real problem in place.',
      },
      {
        q: 'Is it more expensive to change the layout than keep it?',
        a: 'Less than people expect in houses of this era. The framing is regular and the plumbing is reachable from below, so moving a wall to take a linen closet is a modest addition once the room is already open.',
      },
    ],
  },

  springdale: {
    intro:
      'Bathroom remodel in Springdale? Established mid-century neighborhoods behind the Tri-County retail corridor. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighbourhoods alongside a large commercial and retail base.',
      'The residential streets here are settled and consistent, built in the same period and to similar scale. That means the same brief repeats: a hall bath sized for the 1950s or 60s, one sink, a steel tub, and a linen closet next door that is usually the answer to a room that feels too small. Because the plumbing runs are accessible from below, taking that closet is a modest job rather than a structural one.',
    ],
    commonIntro:
      'In Springdale’s mid-century neighborhoods, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can the linen closet next to our Springdale bathroom be absorbed?',
        a: 'Usually, and it is the standard fix here. It typically buys enough width for a proper double vanity or a larger shower, and with the plumbing reachable from the basement, moving that wall is straightforward.',
      },
      {
        q: 'Where do we store what was in the closet?',
        a: 'Into the bathroom, designed in. A vanity with real drawers and a recessed tall unit usually holds more than the closet did, which is part of why the trade is worth making.',
      },
    ],
  },

  evendale: {
    intro:
      'Bathroom remodel in Evendale? Established residential streets in a village better known for GE Aerospace than its housing. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighbourhoods.',
      'The residential side of Evendale is smaller and quieter than its industrial profile suggests, and the housing is well-kept mid-century stock on generous lots. Those larger plots matter: unlike the tighter north-side grids, there is often room to consider a modest addition where a bathroom genuinely cannot be found inside the existing footprint — an option we would rather price honestly against a reconfiguration than dismiss.',
    ],
    commonIntro:
      'In Evendale’s established mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Could we add on rather than reconfigure in Evendale?',
        a: 'The lot sizes here sometimes make that realistic, which is not true everywhere on the north side. It is a bigger project than a reconfiguration and we will price both honestly so you can see whether the extra genuinely buys you the room you want.',
      },
      {
        q: 'Is a mid-century Evendale bathroom a gut job?',
        a: 'Usually. Behind the tile there is normally a mortar bed, original supply lines and a subfloor that has taken water at the tub — all of which want replacing while the room is open.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Bathroom remodel in Pleasant Run? Springfield Township neighborhoods of mid-century and newer homes, where the build date sets the scope. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighbourhoods of mid-century and newer homes.',
      'The spread of build dates is what matters when you set a budget. An older house here is a genuine gut — everything behind the tile replaced — while a newer one needs no repair at all and the same money buys considerably more of what you actually see. We open one wall on the site visit and tell you which of those two projects you are looking at before you commit to a number.',
    ],
    commonIntro:
      'In Pleasant Run’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do we know what to budget before you have opened anything?',
        a: 'Start from the build date, then confirm it on the site visit. That single answer — gut or refit — changes the number more than any tile or vanity choice will, so we establish it before quoting rather than after.',
      },
      {
        q: 'Can a cramped hall bath here be widened?',
        a: 'In the older houses usually yes, by taking an adjoining linen closet. In the newer ones the room is often already large enough and the issue is how the space is laid out.',
      },
    ],
  },

  northbrook: {
    intro:
      'Bathroom remodel in Northbrook? Colerain Township mid-century homes where the basement below makes the plumbing work straightforward. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'The full basements under most of these houses are the practical advantage. Supply and waste runs are reachable from below, which means replacing the plumbing serving a bathroom does not require opening ceilings elsewhere, and relocating a fixture within the room is a genuinely modest job. It is why a reconfiguration here costs a fraction of the same change in a pre-war house on a crawl space.',
    ],
    commonIntro:
      'In Northbrook’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why is moving a fixture cheaper in a Northbrook house?',
        a: 'The full basement. Waste and supply runs are accessible from underneath, so we work from below rather than opening ceilings in the rooms downstairs. That is the single biggest cost difference between houses of this era and older ones.',
      },
      {
        q: 'Does the original plumbing need replacing?',
        a: 'The sections serving the bathroom usually do at this age, and with basement access it is a straightforward part of the job rather than a major addition to it.',
      },
    ],
  },

  northgate: {
    intro:
      'Bathroom remodel in Northgate? Colerain Township housing around the mall corridor, mid-century through to considerably newer. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighbourhoods of mid-century and newer homes.',
      'Development here happened in waves rather than one push, so streets a short distance apart can be twenty years apart in build date. In practice that means the same question every time: gut or refit. The older houses need everything behind the tile replaced; the newer ones are sound and the work is reclaiming a badly used primary bath. We check rather than assume, because the difference is most of the budget.',
    ],
    commonIntro:
      'In Northgate’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our neighbour’s remodel cost far more than our quote — why?',
        a: 'Almost always the build date. An older house needs the plumbing, substrate and often the subfloor replaced before a single tile goes down. A newer one needs none of that, so the same budget buys much more finish.',
      },
      {
        q: 'Can the garden tub become a shower?',
        a: 'In the newer houses, yes, and it is the most requested change. The tub deck usually holds the best corner of the room and the plumbing is already in that zone.',
      },
    ],
  },

  miamitown: {
    intro:
      'Bathroom remodel in Miamitown? A small far-west community on Great Miami river-bottom ground, where the water table drives the specification. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'River-bottom land changes what a bathroom below the main floor requires. The water table sits high enough that waterproofing has to be built for sustained moisture — a bonded membrane over a sealed substrate — and the drain elevation against the sewer decides whether you need an ejector rather than a gravity run. Upstairs, these are older houses with compact retrofitted baths and framing worth checking before tile.',
    ],
    commonIntro:
      'In Miamitown’s older river-bottom homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can I have a bathroom on the lower floor in Miamitown?',
        a: 'Often, but the ground dictates how. We check the drain elevation against the sewer line — below it means a sealed ejector — and build the waterproofing for a high water table rather than to a standard detail.',
      },
      {
        q: 'Do you work this far west?',
        a: 'Yes, though Miamitown is a longer run than the inner west side, so we are straight about scheduling rather than promising a date we would struggle to hold.',
      },
    ],
  },

  cleves: {
    intro:
      'Bathroom remodel in Cleves? A far-west village where the Great Miami meets the Ohio, with older homes on ground that floods. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'Sitting at a river confluence is the defining fact, and it deserves a direct answer rather than a soft one: on ground with a genuine flood history, we will often advise against putting a bathroom in a basement at all, and put the money into doing the upstairs room properly instead. Where a lower-level bath is the only option, it needs a sealed ejector, a bonded membrane and drainage designed for the conditions.',
    ],
    commonIntro:
      'In Cleves’ older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Should we put a bathroom in the basement in Cleves?',
        a: 'Often we would say no, and we would rather tell you that than take the work. On ground with a real flood history the money usually goes further doing the main-floor bathroom properly. Where a lower-level bath is genuinely needed, we build it for the conditions.',
      },
      {
        q: 'Does the flood risk affect an upstairs bathroom?',
        a: 'No. Upper-floor work here is a conventional remodel — the usual checks on floor structure and the age of the plumbing serving the room.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Bathroom remodel in North Bend? A historic Ohio River village with older homes on low riverside ground. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'The village is small and old, and the houses reflect it: modest footprints with bathrooms fitted in long after the framing went up, usually on joists never sized for a mortar bed and a filled tub. The riverside position adds the familiar constraint below the main floor, where drain elevation and waterproofing both have to be established before a design rather than assumed from a standard detail.',
    ],
    commonIntro:
      'In North Bend’s older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will the floor in an older North Bend house take tile?',
        a: 'We check before quoting it. Framing of this age and span was sized for lighter loads, so we assess deflection and build the subfloor up where needed rather than laying tile onto something that will flex.',
      },
      {
        q: 'Does the riverside position limit what we can do?',
        a: 'Only below the main floor, where we check drain elevation and specify waterproofing for the conditions. Upstairs is a conventional remodel.',
      },
    ],
  },

  // ---------- Cohort 10 · Northern Kentucky river towns and the Kenton County hilltops ----------

  ludlow: {
    intro:
      'Bathroom remodel in Ludlow? A Northern Kentucky river town whose Victorian and early-1900s houses are unusually well preserved — which is the point and the constraint. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'How intact the housing is matters more here than its age. Original trim, doors, stair joinery and plaster survive in a lot of Ludlow houses, so the job is as much protection as construction — surveying what is there before demo and deciding piece by piece what stays, what is removed and reinstated, and what is matched new. The riverfront position adds the usual check on drain elevation before anything below the main floor.',
    ],
    commonIntro:
      'In Ludlow’s well-preserved Victorian and early-1900s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you avoid damaging original detail in a Ludlow house?',
        a: 'By surveying it before anything is touched and protecting the route in, not just the room. Access corridors get floor protection and dust barriers, because in a house with intact original fabric the risk is as much in the hallway as the bathroom.',
      },
      {
        q: 'Can a Victorian bathroom here be modernised without looking modern?',
        a: 'Yes, and it is usually the right call in a street like this. We keep the scale and proportion, replicate period elements like tile size and trim profile, and replace everything behind the wall.',
      },
    ],
  },

  bromley: {
    intro:
      'Bathroom remodel in Bromley? A small river village beside Ludlow, on low ground right against the Ohio. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Bromley sits lower and closer to the water than its neighbour, and that single difference changes the advice. Where Ludlow’s hillside streets are a conventional older-home remodel, a good deal of Bromley is on ground where we would question a basement bathroom before designing one — and where a lower-level bath is genuinely wanted, it needs a sealed ejector and waterproofing built for sustained moisture rather than a standard build-up.',
    ],
    commonIntro:
      'In Bromley’s older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a basement bathroom sensible in Bromley?',
        a: 'Often we would advise putting the money into the main-floor bathroom instead, and we would rather say so than sell the larger job. Where a lower-level bath is genuinely needed we build it for the conditions — sealed ejector, bonded membrane, drainage designed for the ground.',
      },
      {
        q: 'Are the older homes here worth a full gut?',
        a: 'Usually the plumbing serving the bathroom is due, and while the wall is open is the moment. We open one section and show you what is there before you commit.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Bathroom remodel in Park Hills? Early-1900s homes on steep, tree-lined streets beside Devou Park, where the grade shapes access and drainage alike. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'The gradient here is genuinely steep, and it affects the work twice over. Material delivery and waste removal need arranging in advance because parking and turning space are limited on these streets. And houses stepped into a hillside often put the lower level close to or below the sewer line, which decides whether a downstairs bathroom is a straightforward gravity drain or needs a sealed ejector — a measurement we take before design, not during.',
    ],
    commonIntro:
      'In Park Hills’ early-1900s hillside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is access a problem on Park Hills’ steep streets?',
        a: 'It needs planning rather than being a barrier. We check the approach, parking and turning space before scheduling, and arrange delivery windows and waste removal ahead of the start date.',
      },
      {
        q: 'Can I add a bathroom on the lower level?',
        a: 'Often, though the hillside decides the method. We check the drain elevation against the sewer line first — below it a sealed ejector is required rather than a gravity drain.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Bathroom remodel in Fort Wright? Hilltop Kenton County neighborhoods above the river, mid-century through newer. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighbourhoods of mid-century and newer homes.',
      'Being up on the hilltop removes the flood and water-table questions that shape work down in the river towns — which simplifies things considerably. What remains is the ordinary but important question of build date: an older house here is a full gut with everything behind the tile replaced, a newer one is structurally sound and the budget goes into the visible room instead.',
    ],
    commonIntro:
      'In Fort Wright’s hilltop homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does being on the hilltop make a basement bathroom easier here?',
        a: 'Generally yes. Up above the river you avoid the high water table and flood-risk questions that shape the work in Bromley or Ludlow, so a lower-level bath is usually a conventional job — we still check the drain elevation before designing.',
      },
      {
        q: 'How do I know whether mine is a gut or a refit?',
        a: 'We open one wall on the site visit. Original supply lines and a soft subfloor mean a gut; sound structure means the money goes into layout and finish.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Bathroom remodel in Fort Mitchell? An established Dixie Highway city where historic and mid-century homes sit on the same settled streets. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'That mix is unusually close together here, and it decides the project entirely. The historic houses need care around plaster, original trim and plumbing retrofitted long after the framing — slower work with more protection. The mid-century houses have regular framing and reachable plumbing, where taking a linen closet to widen a cramped bath is a modest job. Establishing which you have is the first thing we do.',
    ],
    commonIntro:
      'In Fort Mitchell’s historic and mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Fort Mitchell house is one of the older ones — does that cost more?',
        a: 'Generally yes, and it is worth knowing why. Plaster, original trim and retrofitted plumbing all take more care and more time than the regular framing of a mid-century house. The result is better, but the hours are real and we quote them honestly.',
      },
      {
        q: 'Can a mid-century bath here be widened?',
        a: 'Usually. There is normally a linen closet adjacent and the plumbing is reachable from below, so moving that wall is a modest job rather than a major one.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Bathroom remodel in Villa Hills? A hilltop residential city above the river, largely mid-century and newer homes on generous lots. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'Villa Hills is almost entirely residential, and the housing runs larger than the older Kenton County river towns below it. In the newer stock that means primary bathrooms with real square footage that has been allocated to a garden tub nobody uses — so the work is redistribution rather than expansion. The hilltop position also means the drainage questions that complicate the river towns simply do not arise.',
    ],
    commonIntro:
      'In Villa Hills’ mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Villa Hills primary bath is large but badly used — is that a gut?',
        a: 'Often not. Where the square footage already exists, reworking the zones — usually reclaiming the tub deck for a proper shower — achieves most of it without touching every wall. We will price that against a full gut so you can compare.',
      },
      {
        q: 'Any drainage complications up here?',
        a: 'Far fewer than in the river towns below. The hilltop position avoids the water-table and flood questions, so a lower-level bathroom is usually a conventional job.',
      },
    ],
  },

  'lakeside-park': {
    intro:
      'Bathroom remodel in Lakeside Park? A small settled city of mid-century homes on quiet streets, where one bathroom often serves the whole house. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'These are modest, well-built houses, and a good number of them still run on a single full bathroom for the whole family — which makes the schedule as important as the specification. It is the reason we stage every material before demo day rather than ordering as we go: with one bathroom in the house, the difference between a room being out of use for four days and three weeks is the entire experience of the project.',
    ],
    commonIntro:
      'In Lakeside Park’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'We only have one bathroom — how long will we be without it?',
        a: 'Most full remodels are on site 2–5 days, and we give you those dates in writing before starting. Everything is ordered and staged before demo begins, which is what keeps the room out of use for days rather than weeks waiting on a vanity.',
      },
      {
        q: 'Can a second bathroom be added?',
        a: 'Sometimes, where the plan allows a three-quarter bath near the existing stack. It is worth pricing alongside the main remodel, because doing both while the plumbing is open costs far less than returning later.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Bathroom remodel in Crescent Springs? Suburban Kenton County neighborhoods of mid-century and newer homes. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighbourhoods of mid-century and newer homes.',
      'The housing here follows the familiar suburban pattern, so the honest differentiator is not the building type but what we do about it. Because so many Kenton County houses of this era share layouts, we can usually tell you on the first visit what is behind the wall and what the room will take — which means the fixed price we quote is based on knowing rather than padding for the unknown.',
    ],
    commonIntro:
      'In Crescent Springs’ mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How can you fix the price before opening the walls?',
        a: 'By opening one on the site visit rather than guessing. We look at the supply lines and subfloor before quoting, so the number reflects your house — that is what lets us hold it rather than pricing in a contingency you end up paying for.',
      },
      {
        q: 'Can a cramped hall bath be widened?',
        a: 'In the mid-century houses usually yes, by taking an adjoining linen closet. The framing is regular and the plumbing reachable from below.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Bathroom remodel in Crestview Hills? Residential streets alongside the university and mall corridor, mid-century through newer. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighbourhoods alongside a commercial corridor.',
      'We work on the residential side. The housing spans mid-century to considerably newer, and as elsewhere in Kenton County the build date sets the scope — an older house is a gut, a newer one a refit where the money goes into the visible room. Where Crestview Hills differs slightly is that a number of homes here are held as rentals near the university, which makes durability and a predictable turnaround worth specifying for.',
    ],
    commonIntro:
      'In Crestview Hills’ mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you work on rental property near Thomas More?',
        a: 'Yes. For rentals we plan around tenancy dates, stage materials before demo so the on-site window is short, and specify finishes built for repeated turnover rather than for one tenancy.',
      },
      {
        q: 'Is a newer Crestview Hills bathroom worth remodeling if nothing is broken?',
        a: 'It makes for an efficient project. With the structure and plumbing sound, nearly all of the budget goes into what you see and use rather than into repair.',
      },
    ],
  },

  edgewood: {
    intro:
      'Bathroom remodel in Edgewood? A residential Kenton County city where accessible bathing comes up more often than most places. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighbourhoods of mid-century and newer homes.',
      'Edgewood raises accessibility more than most of our service area — partly the settled, long-tenure housing, partly the healthcare community here. That means curbless walk-in showers, blocking set in the walls for grab bars whether or not they go in now, comfort-height fixtures and doorways sized to work later. All of it is far cheaper to build in during a remodel than to retrofit, and none of it needs to look clinical.',
    ],
    commonIntro:
      'In Edgewood’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a bathroom be made accessible without looking like a hospital?',
        a: 'Yes, and it is most of what accessible design has become. A curbless shower, a bench, comfort-height fixtures and a well-placed rail read as a well-designed bathroom, not a clinical one. The key is deciding at design stage rather than adding later.',
      },
      {
        q: 'Should we add grab-bar blocking even if we do not want bars now?',
        a: 'We would recommend it. Adding plywood blocking behind the tile costs very little while the wall is open and means a rail can be fitted properly into structure at any point in the future rather than into plasterboard.',
      },
    ],
  },

  harrison: {
    intro:
      'Bathroom remodel in Harrison? A far-west city on the Indiana line, with an older downtown and newer subdivisions growing around it. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'Harrison is genuinely two markets. The older downtown housing is a conventional period remodel — retrofitted bathrooms, floors worth checking, and low ground near the Whitewater that shapes anything below the main floor. The newer subdivisions on the edges are sound houses where the work is layout and finish. Harrison is also the far western limit of our service area, so we are straightforward about scheduling rather than promising dates we would have to move.',
    ],
    commonIntro:
      'In Harrison’s older downtown and newer subdivision homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you cover Harrison, right out on the state line?',
        a: 'Yes, and it is the far western edge of our area. We are honest about scheduling because of the distance rather than promising a date we would struggle to hold — once a job is booked, the written schedule stands.',
      },
      {
        q: 'Does the Whitewater River affect work near downtown?',
        a: 'For anything below the main floor on the low ground, yes. We check the drain elevation against the sewer line and specify waterproofing for the conditions. The newer subdivisions on higher ground are unaffected.',
      },
    ],
  },

  // ---------- Cohort 11 · Campbell & Boone County, southern NKY, east-side townships ----------

  'dayton-ky': {
    intro:
      'Bathroom remodel in Dayton? Tight riverside streets of well-preserved late-1800s homes beside Bellevue — preservation and access in equal measure. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Two constraints run together here. The housing is unusually intact for its age, so original trim, doors and stair joinery survive and the work is as much protection as construction. And the streets are narrow with limited parking, which means skip placement, deliveries and waste removal are arranged before the start date rather than negotiated on the morning. Anything below the main floor also needs its drain elevation checked against the sewer.',
    ],
    commonIntro:
      'In Dayton’s preserved late-1800s riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you work on these narrow Dayton streets?',
        a: 'By planning access before scheduling. We check the approach and parking, book delivery windows and arrange waste removal in advance, and size the crew to what the street can take.',
      },
      {
        q: 'Can original detail be kept in a Dayton house?',
        a: 'Where it survives, yes — and it usually has here. We survey the trim and joinery before demo and decide piece by piece what is protected in place, removed and reinstated, or matched new.',
      },
    ],
  },

  melbourne: {
    intro:
      'Bathroom remodel in Melbourne? A small river village east of Newport, on low ground where the basement question deserves a straight answer. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'The village is tiny and sits right against the water, which shapes the honest advice as much as the specification. On ground like this we will often steer you away from a basement bathroom and toward doing the main-floor room properly — better use of the same money. Where a lower-level bath is genuinely needed it wants a sealed ejector and waterproofing built for sustained moisture, not a standard build-up.',
    ],
    commonIntro:
      'In Melbourne’s older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a basement bathroom worth doing in Melbourne?',
        a: 'Often not, and we would rather say so. On low riverside ground the same budget usually goes further doing the main-floor bathroom properly. Where a lower-level bath is genuinely needed, we build it for the conditions.',
      },
      {
        q: 'Do you come out to Melbourne?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we are straight about scheduling rather than promising a date we would have to move.',
      },
    ],
  },

  southgate: {
    intro:
      'Bathroom remodel in Southgate? A small Campbell County city between Newport and Fort Thomas, with settled mid-century housing. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighbourhoods of mid-century homes.',
      'Southgate sits above the river towns but below the larger Fort Thomas houses, and its housing reflects that — solid mid-century homes of modest footprint. Practically that means a full gut by nature, since mortar-bed tile and original supply lines sit behind the surface, but a straightforward one: regular framing and plumbing reachable from a basement make changing the layout affordable once the room is already open.',
    ],
    commonIntro:
      'In Southgate’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is the layout worth changing while the bathroom is open?',
        a: 'In houses of this era, usually — it costs far less than people expect. The framing is regular and the plumbing reachable from below, so taking a linen closet to widen the room is a modest addition once demolition has happened anyway.',
      },
      {
        q: 'What is behind the tile in a Southgate bathroom?',
        a: 'Typically a mortar bed over wire lath, original supply lines and a subfloor that has taken water around the tub. That is why these are gut jobs rather than refits.',
      },
    ],
  },

  wilder: {
    intro:
      'Bathroom remodel in Wilder? Residential streets along the Licking River corridor, in a city with a large commercial base. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighbourhoods.',
      'We work on the residential side, which is smaller than Wilder’s commercial profile suggests. The housing is largely mid-century and the work follows that era — everything behind the tile replaced, with the compensation that regular framing makes a reconfiguration cheap once the room is open. The Licking corridor position means anything below the main floor gets its drain elevation checked before design.',
    ],
    commonIntro:
      'In Wilder’s mid-century residential streets, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you take on residential work in Wilder?',
        a: 'Yes — residential remodeling is all we do. Wilder is better known for its commercial base, but the neighbourhoods here are ordinary mid-century housing and we work on them regularly.',
      },
      {
        q: 'Does the Licking River affect a lower-level bathroom?',
        a: 'On the lower ground near the corridor, yes. We check the drain elevation against the sewer line and specify waterproofing for the conditions rather than to a standard detail.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Bathroom remodel in Highland Heights? Home to NKU, so a good share of the housing turns over every year — and that changes the specification. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighbourhoods and student housing.',
      'Where a bathroom serves a tenancy rather than a family, the right specification changes. Porcelain rather than soft stone, solid-brass valve bodies, a fully waterproofed floor and an extractor genuinely sized for the room — none of them the cheapest choice, all of them cheaper across five turnovers than replacing what failed. Owner-occupied houses here are the ordinary mid-century job.',
    ],
    commonIntro:
      'In Highland Heights’ family homes and student rentals, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can you fit a rental bathroom into the gap between tenancies?',
        a: 'That is much of what we do near campus. Materials are staged before demo so the on-site window is short and predictable, and we give you firm dates before you commit to a gap.',
      },
      {
        q: 'What actually survives student use?',
        a: 'Porcelain over soft stone, solid valve bodies rather than plastic cartridges, a properly waterproofed floor, and an extractor that clears the room. The savings show up by the third turnover.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Bathroom remodel in Cold Spring? A growing US-27 corridor city where established streets and new subdivisions need different work. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighbourhoods and newer subdivisions.',
      'Growth along the corridor means build dates spread across decades, and that decides the scope more than anything else. An established house is a gut, with the plumbing and substrate replaced before a tile is laid. A newer subdivision house needs no repair at all, so the same money buys considerably more of the visible room. We open one wall on the site visit rather than pricing from the street.',
    ],
    commonIntro:
      'In Cold Spring’s established and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why do quotes vary so much between houses in Cold Spring?',
        a: 'Build date, almost always. An older house needs plumbing, substrate and often subfloor replaced before finishing begins. A newer one needs none of that, so the same budget goes into what you see.',
      },
      {
        q: 'Can the garden tub become a bigger shower?',
        a: 'In the newer subdivisions, yes — it is the most requested change. The tub deck usually holds the best corner and the plumbing is already in that zone.',
      },
    ],
  },

  alexandria: {
    intro:
      'Bathroom remodel in Alexandria? The Campbell County seat, where semi-rural properties on well and septic need checking before fixtures are chosen. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'The semi-rural properties are what set Alexandria apart from the suburbs north of it. Adding or enlarging a bathroom adds load to a septic system, so its capacity has to be confirmed before design rather than discovered afterwards. On well water, the chemistry also matters — it affects fixture finish life and which valves are worth specifying. Neither is a barrier; both need establishing early.',
    ],
    commonIntro:
      'Across Alexandria’s historic core, subdivisions and semi-rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'We are on septic in Alexandria — can we still add a bathroom?',
        a: 'Usually, but the system’s capacity has to be confirmed first, because additional fixtures add load. We establish that before designing rather than finding out at inspection.',
      },
      {
        q: 'Does well water affect what we should install?',
        a: 'It can. Water chemistry affects both how long fixture finishes last and which valves make sense. Where you are on a well, we factor treatment into the conversation before specifying.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Bathroom remodel in Taylor Mill? A hilltop Kenton County city south of Covington, largely mid-century and newer homes. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'The hilltop position removes the water-table questions that dominate work in the river towns below, so a lower-level bathroom here is usually a conventional job. What remains is the grade itself: houses stepped into a slope sometimes put the lower floor close to the sewer line, so we still take that elevation on the first visit rather than assuming it from the address.',
    ],
    commonIntro:
      'In Taylor Mill’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a basement bathroom simpler up here than down by the river?',
        a: 'Generally yes. The hilltop avoids the high water table and flood questions that shape work in Bromley or Ludlow. We still check the drain elevation, because houses stepped into a grade can sit closer to the sewer line than expected.',
      },
      {
        q: 'How do I know whether mine is a gut or a refit?',
        a: 'We open one wall on the site visit. Original supply lines and a soft subfloor mean a gut; sound structure means the budget goes into layout and finish.',
      },
    ],
  },

  elsmere: {
    intro:
      'Bathroom remodel in Elsmere? A Dixie Highway city near Erlanger where older and mid-century housing sit side by side. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'The older housing is the more demanding of the two — plaster, original trim and a bathroom retrofitted into a house that predates it, which takes more care and more hours. The mid-century stock is regular and reachable, where taking a linen closet to widen a cramped bath is a modest job. Since both sit on the same streets here, we establish which you have before quoting rather than pricing from the area.',
    ],
    commonIntro:
      'In Elsmere’s older and mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why would an older Elsmere house cost more to remodel?',
        a: 'Plaster, original trim and retrofitted plumbing all take more care and more hours than the regular framing of a mid-century house. The result is worth it, but the time is real and we quote it honestly rather than discovering it later.',
      },
      {
        q: 'Can a cramped hall bath be widened?',
        a: 'In the mid-century houses usually yes, by absorbing an adjoining linen closet. In the older ones it depends where the retrofitted stack runs, which we map first.',
      },
    ],
  },

  independence: {
    intro:
      'Bathroom remodel in Independence? The Kenton County seat, with a historic core ringed by fast-growing newer subdivisions. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Rapid growth means the newer subdivisions dominate by volume, and they produce an efficient kind of project: structure and plumbing sound, so the entire budget goes into layout and finish rather than repair. The historic core is a different job — older houses with retrofitted bathrooms and floors worth checking before tile. Which you own decides not just the price but how long we are in the house.',
    ],
    commonIntro:
      'In Independence’s historic core and newer subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our Independence house is a newer build — is a remodel still worthwhile?',
        a: 'It makes for an efficient project. With structure and plumbing sound, nearly all of the budget goes into what you see and use, and we are in the house for less time.',
      },
      {
        q: 'Is work in the historic core different?',
        a: 'Yes. Older houses need care around plaster and original trim, the floor structure wants checking before tile, and the retrofitted plumbing has to be mapped before any layout change.',
      },
    ],
  },

  hebron: {
    intro:
      'Bathroom remodel in Hebron? Boone County subdivisions and semi-rural properties near CVG, where well and septic change the brief. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'The semi-rural properties are the distinctive part. Where a house runs on a well and septic system, adding bathroom fixtures adds load that has to be confirmed against the system’s capacity before design, and well-water chemistry influences both fixture finish life and valve choice. In the subdivisions none of that applies and the work is straightforward layout and finish.',
    ],
    commonIntro:
      'Across Hebron’s subdivisions and semi-rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'We are on well and septic in Hebron — does that limit a bathroom project?',
        a: 'It shapes it rather than blocks it. We confirm the septic system’s capacity before adding fixtures, and look at water treatment where you are on a well, since chemistry affects finish life and which valves are worth fitting.',
      },
      {
        q: 'Is a subdivision bathroom here a simpler job?',
        a: 'Usually. On municipal services with sound structure and plumbing, the work is layout and finish rather than repair — which is both cheaper and faster.',
      },
    ],
  },

  burlington: {
    intro:
      'Bathroom remodel in Burlington? The Boone County seat, where a historic courthouse core meets fast-growing subdivisions. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Those two halves want opposite things. Around the courthouse the houses are older, with bathrooms fitted in long after construction and floors that want checking before a tile bed goes down. In the subdivisions the structure is sound and the work is redistribution — reclaiming a garden-tub deck, replacing a builder-grade vanity, fixing lighting that was an afterthought. We establish which on the site visit.',
    ],
    commonIntro:
      'In Burlington’s historic core and newer subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does an older house near the Burlington courthouse cost more?',
        a: 'Generally yes, because more of the budget goes into what you will never see — floor structure, plumbing, substrate. In a newer subdivision house none of that is needed, so the same money buys more finish.',
      },
      {
        q: 'Can the garden tub be replaced with a shower?',
        a: 'In the subdivision housing, yes, and it is the most common request. The tub deck usually holds the best corner and the drainage is already in that zone.',
      },
    ],
  },

  union: {
    intro:
      'Bathroom remodel in Union? Almost entirely 1990s-onward subdivisions — which makes this the most predictable market we work in. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'Union is unusual in having very little older housing, and that makes the work here consistent in a way most of our area is not. Structure and plumbing are almost always sound, so we are rarely quoting repair — the budget goes into the visible room, and the brief repeats: a primary bath giving its best corner to a garden tub, a shower too small to enjoy, and a long vanity in a finish that has dated.',
    ],
    commonIntro:
      'In Union’s 1990s-onward subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a Union bathroom worth remodeling if nothing is wrong with it?',
        a: 'That is the usual situation here and it makes for an efficient project. With nothing to repair, essentially the whole budget goes into layout and finish — the parts you use every day.',
      },
      {
        q: 'Will we need to repipe?',
        a: 'Almost never in houses of this age. They are generally on copper or PEX in serviceable condition. We inspect and replace what is genuinely at end of life rather than repiping by default.',
      },
    ],
  },

  walton: {
    intro:
      'Bathroom remodel in Walton? The southern edge of the Boone County metro, mixing a historic core, new subdivisions and rural properties. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'Walton covers all three of our usual conditions in one town: older housing needing structural and plumbing work, newer subdivisions needing none, and rural properties on wells and septic where capacity and water chemistry both matter before specifying. It is also the southern limit of our service area, so we are honest about scheduling rather than promising dates we would have to move.',
    ],
    commonIntro:
      'Across Walton’s core, subdivisions and rural properties, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, it is the southern edge of our area. We are straightforward about scheduling because of the distance rather than promising a date we would struggle to hold — once booked, the written schedule stands.',
      },
      {
        q: 'We are on septic outside town — does that affect a bathroom addition?',
        a: 'It needs confirming first. Extra fixtures add load, so we check the system’s capacity before design, and consider water treatment where you are on a well.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Bathroom remodel in Mount Carmel? Union Township neighborhoods near the I-275 corridor, mid-century through newer. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighbourhoods of mid-century and newer homes.',
      'The housing spans enough years that the build date decides everything about the project. Where Mount Carmel is useful is that it sits close enough to our east-side work that scheduling is straightforward — a practical point that matters more than people expect, because a crew that can reach you easily is a crew that finishes on the dates in the contract.',
    ],
    commonIntro:
      'In Mount Carmel’s mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How quickly can you schedule work in Mount Carmel?',
        a: 'It sits centrally to our east-side work, so scheduling is straightforward. We give you firm dates in writing once design and selections are settled, and the staging of materials before demo is what lets us hold them.',
      },
      {
        q: 'Is my mid-century bathroom a gut?',
        a: 'Usually. Behind tile of that era there is normally a mortar bed, original supply lines and a subfloor that has taken water around the tub.',
      },
    ],
  },

  summerside: {
    intro:
      'Bathroom remodel in Summerside? Suburban Union Township neighborhoods in western Clermont County. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighbourhoods of mid-century and newer homes.',
      'Clermont County housing of this type is consistent enough that we can usually tell you what is behind the wall before opening it — and we still open one, because a fixed price is only honest if it is based on the actual house. That is the difference between a quote you can rely on and one padded with contingency you end up paying for whether or not it is needed.',
    ],
    commonIntro:
      'In Summerside’s suburban mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How can the price be fixed before demolition?',
        a: 'Because we open a wall on the site visit instead of guessing. Knowing the condition of the supply lines and subfloor is what lets us commit to a number rather than adding a contingency you pay for regardless.',
      },
      {
        q: 'Can the layout change or only the finishes?',
        a: 'In houses of this era the framing is regular and the plumbing reachable from below, so changing the layout is genuinely affordable once the room is open. We price both so you can compare.',
      },
    ],
  },

  // ---------- Cohort 12 · Western Clermont County ----------

  withamsville: {
    intro:
      'Bathroom remodel in Withamsville? Ohio Pike corridor housing, mid-century through newer, with the commercial strip running alongside. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'The corridor makes Withamsville convenient to reach, which matters more to a remodel than it sounds — access decides how tightly we can schedule deliveries and how reliably the dates in your contract hold. The housing itself is ordinary suburban stock, so the real question is age: mid-century houses need everything behind the tile replaced, newer ones need none of it and put the whole budget into the visible room.',
    ],
    commonIntro:
      'In Withamsville’s suburban mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will the Ohio Pike traffic complicate a project here?',
        a: 'Not materially. Deliveries are booked into set windows and staged before demolition begins, so the corridor works in our favour rather than against us.',
      },
      {
        q: 'How do you decide whether ours is a gut?',
        a: 'By opening one wall on the site visit. Original supply lines and a soft subfloor around the tub mean a gut; sound structure means the budget goes into layout and finish instead.',
      },
    ],
  },

  milford: {
    intro:
      'Bathroom remodel in Milford? A preserved 19th-century Main Street district on the Little Miami — restraint and elevation both matter here. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'The district housing is genuinely old, which changes the brief in two directions at once. Bathrooms were fitted into these houses long after they were built, so the plumbing has to be mapped before any layout is drawn, and the floor structure checked before a tile bed is laid. And because the character is what people bought here for, we advise on where a contemporary detail belongs and where it will look imposed. Anything on the low ground near the river gets its drain elevation confirmed first.',
    ],
    commonIntro:
      'In Milford’s 19th-century district and surrounding older homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will a modern bathroom look wrong in a Milford period house?',
        a: 'It can, and we will say so before you commit. Proportion, tile scale and fixture profile do most of the work — a room can be entirely modern in function and still sit correctly in a 19th-century house.',
      },
      {
        q: 'Does being near the Little Miami affect a lower-level bath?',
        a: 'On the low ground, yes. We check the drain elevation against the sewer line and specify waterproofing for the actual conditions before designing anything below the main floor.',
      },
    ],
  },

  mulberry: {
    intro:
      'Bathroom remodel in Mulberry? Milford-area suburban housing where reconfiguring the room is cheaper than most owners assume. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighbourhoods of mid-century and newer homes.',
      'Because the framing in this housing is regular and the plumbing reachable from below, the layout is not fixed the way people treat it. Absorbing a linen closet to widen a cramped hall bath, or moving a door so the vanity gets a proper wall, adds far less than expected once demolition has happened anyway. We price the room as-is and reconfigured so you can see the difference rather than guess at it.',
    ],
    commonIntro:
      'In Mulberry’s suburban mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How much more does moving walls cost?',
        a: 'Less than most people assume in houses of this type. The framing is regular and the plumbing reachable, so once the room is open the additional work is modest. We quote both versions.',
      },
      {
        q: 'Is the hall bath worth doing before the primary?',
        a: 'Often, if it is the one the family actually uses. We will give you the honest order rather than steering you to the bigger job first.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Bathroom remodel in Mount Repose? A settled Clermont community where planning for the next twenty years is worth doing now. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighbourhoods of mid-century and newer homes.',
      'This is a settled area where people stay, and that changes what a good bathroom looks like. A curbless entry, blocking behind the tile for grab bars fitted later, and a comfort-height toilet cost very little while the walls are open and a great deal to retrofit afterwards. None of it has to look clinical — done at design stage it simply reads as a well-built room.',
    ],
    commonIntro:
      'In Mount Repose’s settled suburban homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can we plan for accessibility without it looking institutional?',
        a: 'Yes — that is the point of doing it at design stage. A curbless shower, a wider door and concealed blocking behind the tile read as a well-built bathroom, not an adapted one.',
      },
      {
        q: 'Is it worth adding blocking we may never use?',
        a: 'It costs very little while the walls are open, and retrofitting it later means opening finished tile. We recommend it in most houses here.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Bathroom remodel in Day Heights? Suburban and semi-rural Clermont homes — the long pipe runs are the detail worth getting right. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Larger lots mean larger houses, and larger houses mean longer runs between the water heater and the far bathroom. The result is the wait for hot water that owners often assume is a fixture problem, when it is a distance problem — solved properly with a recirculation loop while the walls are open, not with a bigger showerhead. On semi-rural properties we also confirm septic capacity before adding fixtures.',
    ],
    commonIntro:
      'In Day Heights’ suburban and semi-rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why does hot water take so long to reach our bathroom?',
        a: 'Usually distance rather than the fixture. In a larger house the run from the heater is long, and a recirculation loop fitted while the walls are open fixes it properly.',
      },
      {
        q: 'We are on septic — does that limit what we can add?',
        a: 'It needs confirming rather than assuming. Extra fixtures add load, so we check the system’s capacity at design stage instead of discovering it at inspection.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Bathroom remodel in New Richmond? A historic Ohio River village of 19th-century riverfront homes, with real heritage worth protecting. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'Houses of this age and history deserve a contractor who slows down. Original trim, doors and stair joinery survive in many of them, and the first job is deciding piece by piece what is protected in place, what comes out and goes back, and what has to be matched new. The riverfront position adds the second question: anything below the main floor gets its drain elevation checked against the sewer before it is designed, not after.',
    ],
    commonIntro:
      'In New Richmond’s 19th-century riverfront homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can original detail be kept in a New Richmond house?',
        a: 'Usually more than owners expect. We survey the trim and joinery before demolition and decide item by item what is protected, reinstated or matched — rather than stripping the room and rebuilding it generically.',
      },
      {
        q: 'Is a basement bathroom sensible this close to the river?',
        a: 'Often not, and we would rather tell you that up front. On low riverside ground the same budget usually goes further doing the main-floor bathroom properly.',
      },
    ],
  },

  amelia: {
    intro:
      'Bathroom remodel in Amelia? Established Ohio Pike corridor neighbourhoods where mid-century bathrooms are due a full gut. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighbourhoods of mid-century and newer homes.',
      'The mid-century bathrooms here are at the end of a long life rather than merely dated. Behind the tile there is normally a mortar bed over wire lath, original supply lines, and a subfloor that has taken water around the tub for decades. That is why we quote a gut rather than a resurface — putting new tile over a failing substrate buys a few years and costs the whole job again.',
    ],
    commonIntro:
      'In Amelia’s established mid-century and newer homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Could we just retile over what is there?',
        a: 'We would not recommend it in a house of this age. New tile over a substrate that has been taking water fails again, and by then it has to come out along with everything you paid for.',
      },
      {
        q: 'Does the subfloor always need replacing?',
        a: 'Not always, but it needs checking. Around a tub in a mid-century house it is frequently soft, and that is exactly what a fixed price has to account for before demolition rather than after.',
      },
    ],
  },

  batavia: {
    intro:
      'Bathroom remodel in Batavia? The Clermont County seat on the East Fork, mixing a historic village core with newer development. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'Those two halves need opposite work. In the village core the houses are old, the bathrooms were retrofitted, and the floor structure and plumbing want establishing before any layout is drawn. In the newer development none of that applies and the budget goes almost entirely into finish and layout. The low ground along the East Fork adds a drain-elevation check for anything below the main floor.',
    ],
    commonIntro:
      'In Batavia’s historic core and newer development, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why is a village-core house more expensive to remodel?',
        a: 'Because more of the budget goes into what you will never see — floor structure, retrofitted plumbing, substrate. In the newer development none of that is needed, so the same money buys more of the visible room.',
      },
      {
        q: 'Does the East Fork affect a lower-level bathroom?',
        a: 'On the low ground, yes. We take the drain elevation against the sewer line on the first visit and specify waterproofing for the actual conditions.',
      },
    ],
  },

  owensville: {
    intro:
      'Bathroom remodel in Owensville? A small eastern Clermont village with a historic core and rural properties around it. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Owensville sits toward the eastern edge of where we work, so we are straight about scheduling rather than promising a date we would have to move — once a start date is in writing, it stands. The work splits between older village houses, where retrofitted plumbing and floor structure are the first questions, and rural properties where septic capacity has to be confirmed before fixtures are added.',
    ],
    commonIntro:
      'In Owensville’s village core and surrounding rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you take on work out in Owensville?',
        a: 'Yes. It is toward the eastern edge of our area, so we are honest about scheduling rather than committing to a date we would struggle to hold. Once booked, the written schedule stands.',
      },
      {
        q: 'Our property is on septic — does that change anything?',
        a: 'It needs checking before design. Adding bathroom fixtures adds load, so we confirm the system’s capacity first rather than discovering the problem at inspection.',
      },
    ],
  },

  goshen: {
    intro:
      'Bathroom remodel in Goshen? Northern Clermont township housing on larger lots, where adding a second bath is often the real question. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'On larger lots the houses are often bigger than their bathroom count, and the most valuable project here is frequently adding a bath rather than improving the one you have. That is a bigger conversation — where the drain can reach, whether the septic system can carry the extra load, and whether the space taken is worth more as a bathroom than as what it is now. We work through all three before quoting.',
    ],
    commonIntro:
      'In Goshen’s suburban and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can we add a bathroom rather than remodel the existing one?',
        a: 'Often, and in a house with more bedrooms than baths it is usually the better return. The limits are where the drain can reach and what the septic system can carry — both established before we quote.',
      },
      {
        q: 'Where is the best place to add one?',
        a: 'Close to an existing stack, almost always. Every foot away adds cost, so we look at the plumbing before the floor plan rather than the other way round.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont villages & Butler County ----------

  moscow: {
    intro:
      'Bathroom remodel in Moscow? A small Ohio River village on low ground, where the honest advice sometimes costs us the bigger job. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'Moscow is small and sits right against the water, and that shapes the recommendation more than the specification. A lower-level bathroom on ground like this needs a sealed ejector and waterproofing built for sustained moisture, which is real money — and in most of these houses the same budget does more good spent on the main-floor bathroom instead. We will tell you that even though it is the smaller contract.',
    ],
    commonIntro:
      'In Moscow’s older riverside homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Should we finish a bathroom in the basement here?',
        a: 'Usually not, and we would rather say so before you spend. On low riverside ground the same money generally does more in the main-floor bathroom. Where a lower-level bath is genuinely needed, we build it for the conditions.',
      },
      {
        q: 'Do you work this far down the river?',
        a: 'Yes, though it is a longer run than our Clermont work closer in, so we are realistic about start dates rather than promising one we would have to move.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Bathroom remodel in Newtonsville? A small rural village at the northeastern edge of our area, with older homes and rural properties. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'This is the far edge of where we work, and being honest about that matters more than winning the job. We schedule Newtonsville deliberately rather than squeezing it in, because a crew stretched too thin is how written start dates start slipping. The work itself is older village housing where retrofitted plumbing and floor structure are the first questions, and rural properties where septic capacity has to be confirmed before fixtures are added.',
    ],
    commonIntro:
      'In Newtonsville’s older village and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Will you actually come out to Newtonsville?',
        a: 'Yes, and we schedule it deliberately rather than fitting it around closer work. That is why the dates in our contract hold — we do not book more than we can reach.',
      },
      {
        q: 'What comes first on an older village house?',
        a: 'Establishing what is behind the wall. Retrofitted plumbing and the floor structure decide both the price and the layout, so we open a wall on the site visit rather than quoting from the outside.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Bathroom remodel in Williamsburg? A 19th-century village core on the East Fork, with rural homes beyond it. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'The village core is genuinely old, which means the bathroom you are remodeling was fitted into a house that was not built with one. The retrofitted stack rarely sits where a modern layout wants it, so the plumbing gets mapped before anything is drawn — that single step decides whether a reconfiguration is a modest change or the most expensive part of the job. On the low ground near the East Fork we also check drain elevation before designing below the main floor.',
    ],
    commonIntro:
      'In Williamsburg’s 19th-century core and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can the layout be changed in a 19th-century Williamsburg house?',
        a: 'Sometimes easily, sometimes not — it depends entirely on where the retrofitted stack runs. We map the plumbing before drawing anything, because that is what decides the cost.',
      },
      {
        q: 'Is the floor strong enough for tile?',
        a: 'It needs checking in a house this age, particularly around an old tub. Where it is not, we say so before quoting rather than adding it as a change order.',
      },
    ],
  },

  bethel: {
    intro:
      'Bathroom remodel in Bethel? A historic southeastern Clermont village where we will tell you what a bathroom is actually worth here. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Bethel is a place where the top of our budget range does not always make sense, and we would rather say that than sell it. A well-built middle-tier bathroom — sound waterproofing, a proper extractor, porcelain rather than soft stone, solid valve bodies — outlives a showier one and suits the housing here. Where the money genuinely should go is the parts nobody sees, because those are what decide whether the room lasts twenty years or five.',
    ],
    commonIntro:
      'In Bethel’s 19th-century core and small-town homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How much should we spend on a bathroom in Bethel?',
        a: 'Usually less than the top of our range, and we will say so. A properly built middle-tier bathroom suits the housing here and lasts longer than a showier one built on a weaker substrate.',
      },
      {
        q: 'Where is the money best spent?',
        a: 'On what you never see — waterproofing, substrate, valve bodies and a genuinely sized extractor. Those decide whether the room lasts, and they are the hardest things to add later.',
      },
    ],
  },

  ross: {
    intro:
      'Bathroom remodel in Ross? Southwestern Butler County along the Great Miami, mixing small-town and rural homes. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Three conditions overlap here and each changes the quote. Older small-town houses need plumbing and floor structure established before design. Rural properties on septic need capacity confirmed before fixtures are added. And the low ground along the Great Miami means anything below the main floor gets its drain elevation checked against the sewer first. We work through which of the three apply to your house on the site visit.',
    ],
    commonIntro:
      'In Ross’s small-town and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why does the quote depend so much on which part of Ross we are in?',
        a: 'Because the conditions differ. An older house near the river, a rural property on septic, and a newer home on municipal services are three genuinely different jobs, and we price the one you actually have.',
      },
      {
        q: 'Does the Great Miami affect basement work?',
        a: 'On the low ground, yes. We check the drain elevation against the sewer line and specify waterproofing for the real conditions rather than to a standard detail.',
      },
    ],
  },

  fairfield: {
    intro:
      'Bathroom remodel in Fairfield? A large Butler County city where mid-century neighbourhoods and newer subdivisions sit side by side. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighbourhoods alongside newer subdivisions and a busy commercial corridor.',
      'Fairfield is big enough that quotes from the same street can differ by half, and it is almost always build date rather than finish choice. The mid-century neighbourhoods produce gut jobs — mortar-bed tile, original supply lines, a subfloor that has taken water for decades. The newer subdivisions produce redistribution jobs, where nothing needs repair and the whole budget goes into layout and finish.',
    ],
    commonIntro:
      'In Fairfield’s mid-century neighbourhoods and newer subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why did our neighbour pay so much less?',
        a: 'Usually build date rather than choices. An older house needs plumbing, substrate and often subfloor replaced before finishing begins; a newer one needs none of it, so the same budget buys a very different-looking room.',
      },
      {
        q: 'How long will you be in the house?',
        a: 'Most full bathroom remodels are on site 2–5 days, because materials are staged before demolition. The longer part of the process is design, selections and lead times.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Bathroom remodel in Beckett Ridge? A planned West Chester community of 1980s-onward homes, now hitting the age where the finishes date the house. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'Housing of this vintage rarely has anything wrong with it — the structure and plumbing are sound — but the bathrooms carry the era plainly: an oversized garden tub taking the best corner, a shower too small to use comfortably, a long vanity in a dated finish, and lighting placed as an afterthought. Every one of those is a redistribution problem rather than a repair problem, which is why this is efficient work and why nearly all the budget lands where you can see it.',
    ],
    commonIntro:
      'In Beckett Ridge’s 1980s-onward homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can the garden tub become a proper shower?',
        a: 'Yes, and it is the most requested change in this housing. The tub deck usually holds the best corner in the room and the drainage is already in that zone, so it is a natural conversion.',
      },
      {
        q: 'Do these houses need repiping?',
        a: 'Rarely. Homes of this age are generally on copper or PEX in serviceable condition. We inspect and replace what is genuinely at end of life rather than repiping by default.',
      },
    ],
  },

  wetherington: {
    intro:
      'Bathroom remodel in Wetherington? An upscale West Chester community of larger 1980s–90s homes, where the primary suite is the project. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Larger houses change the brief. The primary suite here is usually generous enough to reorganise properly rather than merely refinish — a genuinely large shower where the garden tub was, a double vanity with real storage, and separated wet and dry zones. Scale also brings its own detail: longer runs from the water heater mean a recirculation loop is worth fitting while the walls are open, and a bigger room needs an extractor sized for it rather than a builder default.',
    ],
    commonIntro:
      'In Wetherington’s larger 1980s and 90s homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Should we keep the garden tub in a primary suite this size?',
        a: 'Only if you use it. In most houses here the space is worth more as a large shower with a bench and proper glass, and we will tell you honestly which way the room works better.',
      },
      {
        q: 'Why does hot water take so long to arrive?',
        a: 'Distance, in a house this size. A recirculation loop fitted while the walls are open solves it properly — it is far cheaper now than as a retrofit.',
      },
    ],
  },

  hamilton: {
    intro:
      'Bathroom remodel in Hamilton? German Village and Dayton Lane hold some of the finest historic housing in the region — it deserves careful work. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'In the historic districts the bathroom is a later addition to a house built without one, and the original fabric around it is frequently intact — trim, doors, stair joinery, plaster. The work is therefore as much protection as construction: we survey before demolition and decide piece by piece what is protected in place, removed and reinstated, or matched new. The low ground near the Great Miami adds a drain-elevation check for anything below the main floor.',
    ],
    commonIntro:
      'In Hamilton’s historic districts and surrounding homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can period character survive a full remodel in German Village or Dayton Lane?',
        a: 'Yes, and more of it than owners expect. We survey the trim and joinery before demolition and decide item by item what stays, what is reinstated and what is matched — rather than stripping and rebuilding generically.',
      },
      {
        q: 'What is behind the walls in a house this old?',
        a: 'Often galvanised or cast-iron plumbing at the end of its life, plaster over lath, and a floor structure worth checking before tile. We establish all of it before quoting so the price can be fixed.',
      },
    ],
  },

  millville: {
    intro:
      'Bathroom remodel in Millville? A small Butler County village west of Hamilton, with older homes and rural properties around it. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'Small villages are where the difference between a real contractor and a passing crew shows most, because there is no volume to hide behind. The older houses here need their plumbing and floor structure established before anything is drawn, and rural properties need septic capacity confirmed before fixtures are added. Both are checks we do at the site visit, which is what lets the price be fixed rather than estimated.',
    ],
    commonIntro:
      'In Millville’s older village and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you work in villages this small?',
        a: 'Yes. Our own installers do the work from demolition through final trim with a project manager overseeing it, so the size of the town does not change who turns up or what the job looks like.',
      },
      {
        q: 'How is the price fixed before demolition?',
        a: 'Because we open a wall and check the plumbing, subfloor and — on rural properties — septic capacity first. Knowing the actual condition is what lets us commit to a number rather than pad it.',
      },
    ],
  },

  // ---------- Cohort 14 · Warren County & southeastern Indiana ----------

  'new-miami': {
    intro:
      'Bathroom remodel in New Miami? An old mill village on the Great Miami with closely spaced homes — access and honest budgeting both count. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'Two practical things follow from that. Houses built close together leave little room for skips and deliveries, so access is arranged before the start date rather than improvised on the morning. And the housing is modest, which means the top of our budget range rarely makes sense here — a well-built middle-tier bathroom with sound waterproofing and a proper extractor is the right call, and we will say so rather than quote upward.',
    ],
    commonIntro:
      'In New Miami’s closely spaced mill-era homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'There is barely room for a skip on our street — is that a problem?',
        a: 'Not if it is planned. We check the approach and parking on the site visit, book delivery windows and arrange waste removal in advance rather than working it out on the day.',
      },
      {
        q: 'How much is sensible to spend here?',
        a: 'Usually the middle of our range rather than the top, and we will tell you that. The money is better in waterproofing, substrate and ventilation than in finishes the house will not carry.',
      },
    ],
  },

  monroe: {
    intro:
      'Bathroom remodel in Monroe? A fast-growing I-75 corridor city where new subdivisions and an older town core need different work. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Rapid growth means most of the housing is recent, and recent housing makes for efficient projects: nothing behind the wall needs repair, so almost the whole budget goes into layout and finish. The older town core is the opposite — retrofitted plumbing, floor structure worth checking, and more hours in the parts nobody sees. Straddling two counties, we confirm which jurisdiction your permit falls under before scheduling.',
    ],
    commonIntro:
      'In Monroe’s newer subdivisions and older town core, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Does it matter which county our Monroe house sits in?',
        a: 'For permitting, yes — Monroe straddles Butler and Warren. We confirm the jurisdiction before scheduling so inspections are booked correctly rather than delaying the finish.',
      },
      {
        q: 'Our house is only a few years old — is a remodel premature?',
        a: 'Not if the layout is the problem rather than the condition. Builder-grade bathrooms are often laid out for cost rather than use, and fixing that is where the value is.',
      },
    ],
  },

  landen: {
    intro:
      'Bathroom remodel in Landen? A planned Warren County community of 1970s and 80s homes, now well past the age their bathrooms were designed for. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Because Landen was built in a relatively narrow window, the bathrooms repeat — and so do their limitations. Hall baths of that era are small, with a tub-shower in an alcove, a single vanity and an extractor that was never sized for the room. The good news is that the framing is regular and the plumbing reachable, so absorbing a linen closet to widen the room is genuinely affordable once demolition has happened anyway.',
    ],
    commonIntro:
      'In Landen’s 1970s and 80s planned housing, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can a small Landen hall bath be made bigger?',
        a: 'Usually, by absorbing an adjoining linen closet or hallway depth. The framing here is regular and the plumbing reachable, so it costs far less than people expect once the room is open.',
      },
      {
        q: 'Is the ventilation worth upgrading?',
        a: 'In this housing, always. The original extractors were undersized, which is why the paint and grout have suffered. A properly sized unit ducted outside is one of the cheapest things that makes the room last.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Bathroom remodel in Loveland Park? Established mid-century neighbourhoods just north of Loveland, near the Little Miami. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighbourhoods of mid-century homes.',
      'Mid-century bathrooms here are at the end of their service life rather than merely dated — a mortar bed over wire lath, original supply lines, and a subfloor that has been taking water around the tub for decades. That makes a gut the honest scope. The compensation is that houses of this era have regular framing and plumbing reachable from a basement, so improving the layout while the room is open is cheap relative to the rest of the job.',
    ],
    commonIntro:
      'In Loveland Park’s mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Is a resurface an option instead of a gut?',
        a: 'Not one we would recommend in this housing. New tile over a substrate that has been absorbing water fails again, and then the whole job has to be paid for twice.',
      },
      {
        q: 'Does being near the Little Miami affect basement work?',
        a: 'On the lower ground, yes. We check the drain elevation against the sewer line before designing anything below the main floor.',
      },
    ],
  },

  maineville: {
    intro:
      'Bathroom remodel in Maineville? A growing southern Warren town with a small historic core, new subdivisions and rural properties. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'All three conditions we deal with turn up inside one small town here, and they price completely differently. The historic core means retrofitted plumbing and floor structure to establish first. The newer subdivisions need no repair at all, so the money goes into the visible room. Rural properties need septic capacity confirmed before fixtures are added. We settle which you have on the site visit rather than quoting from the address.',
    ],
    commonIntro:
      'Across Maineville’s historic core, subdivisions and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Why do Maineville quotes vary so widely?',
        a: 'Because the town holds three different kinds of house. An older core property, a newer subdivision home and a rural property on septic are genuinely different jobs, and we price the one you own.',
      },
      {
        q: 'What does the site visit involve?',
        a: 'Opening a wall, checking the subfloor and plumbing, and — where relevant — confirming septic capacity. That is what lets the contract price be fixed rather than estimated.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Bathroom remodel in Pleasant Plain? A small southeastern Warren village at the edge of our area, with older and rural homes. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'This is one of the further corners of our service area, and we schedule it deliberately rather than fitting it around closer work — overbooking is how written start dates start slipping, and the dates in our contract are the point. The housing is older village stock and rural properties, so the first visit establishes plumbing condition, floor structure and, where the house is on septic, whether the system can carry additional fixtures.',
    ],
    commonIntro:
      'In Pleasant Plain’s older village and rural homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it deliberately rather than squeezing it in. That honesty about distance is exactly why the start date we put in writing holds.',
      },
      {
        q: 'We are on a well and septic — what should we know?',
        a: 'Septic capacity has to be confirmed before adding fixtures, and well-water chemistry affects both fixture finish life and which valves are worth specifying. We cover both at design stage.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Bathroom remodel in South Lebanon? A historic core on the Little Miami with fast-expanding subdivisions around it. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'The expansion means most bathroom projects here are in recent housing, where nothing behind the wall needs repair and the work is redistribution: reclaiming a garden-tub deck, replacing a builder-grade vanity, fixing lighting placed as an afterthought. The historic core is a different job entirely, with retrofitted plumbing to map and floor structure to check — and on the low ground near the Little Miami, a drain elevation to confirm before anything goes below the main floor.',
    ],
    commonIntro:
      'In South Lebanon’s historic core and newer subdivisions, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Our subdivision house is new — what is actually worth changing?',
        a: 'The layout, usually. Builder bathrooms are planned for cost rather than daily use, so the garden tub takes the best corner and the shower is too small. Redistributing that space is where the value sits.',
      },
      {
        q: 'Does the Little Miami affect work in the older part of town?',
        a: 'On the low ground, yes. We take the drain elevation against the sewer line on the first visit and specify waterproofing for the actual conditions.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Bathroom remodel in Lawrenceburg? A 19th-century Indiana river downtown behind the levee — different state, same fixed price. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'Two things distinguish work here. It is Indiana, so permitting and inspection run through a different jurisdiction than our Ohio and Kentucky projects — we confirm the requirements before scheduling rather than discovering them mid-job. And the downtown housing is genuinely 19th-century, which means bathrooms retrofitted into houses built without them, original fabric worth protecting, and plumbing that has to be mapped before any layout is drawn.',
    ],
    commonIntro:
      'In Lawrenceburg’s 19th-century downtown and surrounding homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Do you work across the state line in Indiana?',
        a: 'Yes. Permitting and inspection run through a different jurisdiction than our Ohio work, so we confirm the requirements before scheduling — it is a planning step, not an obstacle.',
      },
      {
        q: 'What should we expect in a 19th-century downtown house?',
        a: 'A bathroom retrofitted long after the house was built, aging plumbing behind the wall, and original trim worth protecting. All three are established on the site visit so the price can be fixed.',
      },
    ],
  },

  greendale: {
    intro:
      'Bathroom remodel in Greendale? Hillside Dearborn County housing above the Ohio, where the grade shapes every lower-level decision. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Building into a hillside means the lower floor sits at a different depth on every street, and sometimes on every house. That single fact decides whether a lower-level bathroom drains by gravity or needs an ejector — a real difference in cost that cannot be judged from the address. We take the drain elevation on the first visit. Being in Indiana, permitting also runs through a different jurisdiction than our Ohio work, which we confirm before scheduling.',
    ],
    commonIntro:
      'In Greendale’s hillside older and mid-century homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'Can we put a bathroom in our lower level?',
        a: 'Usually, but how it drains depends on where your house sits on the hill. We measure the drain elevation against the sewer line on the first visit rather than assuming it — it is the difference between gravity drainage and an ejector.',
      },
      {
        q: 'Does the hillside affect anything else?',
        a: 'It puts more demand on basement drainage in heavy rain, which is worth accounting for in the waterproofing spec rather than treating as separate from the bathroom.',
      },
    ],
  },

  aurora: {
    intro:
      'Bathroom remodel in Aurora? A 19th-century Ohio River town in Dearborn County, home to Hillforest — heritage worth working carefully around. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'A town that has looked after housing like this deserves careful work rather than fast work. Original trim, doors and joinery survive in many of these houses, so the first task is a survey before demolition and a decision, piece by piece, on what is protected in place, reinstated, or matched new. The riverfront ground adds a drain-elevation check before anything is designed below the main floor, and Indiana permitting is confirmed before scheduling.',
    ],
    commonIntro:
      'In Aurora’s 19th-century riverfront homes, the bathroom work we take on is:',
    localFaqs: [
      {
        q: 'How do you protect period detail during a full remodel?',
        a: 'By surveying it before demolition rather than after. Trim, doors and joinery are catalogued and each piece is either protected in place, removed and reinstated, or matched new — decided with you, not on the fly.',
      },
      {
        q: 'Is a lower-level bathroom sensible on the Aurora riverfront?',
        a: 'Often not, and we would rather say so up front. On low riverside ground the same budget usually does more in the main-floor bathroom. Where one is genuinely needed, we build it for the conditions.',
      },
    ],
  },
};
