import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /barndominiums/[location].
 *
 * ⚠️ WHY THIS FILE ONLY HAS 27 ENTRIES, NOT 170.
 * A barndominium is a post-frame or steel-framed building on acreage. It is
 * not a realistic proposition in a dense city neighborhood on a 40-foot lot,
 * nor in a built-out platted suburb with architectural covenants. Publishing
 * "Barndominium Builders in Over-the-Rhine" would promise something that
 * cannot be delivered there, so those pages deliberately do not exist.
 * The content gate in generateStaticParams handles this: a page appears only
 * where an entry exists here. DO NOT pad this file to cover more communities
 * without checking that acreage and rural character genuinely support one.
 *
 * ⚠️ HARD RULE — WHAT THIS FILE MUST NEVER SAY.
 *   - That a barndominium IS permitted in any named jurisdiction. Whether a
 *     township, village, city or county allows post-frame residential
 *     construction — and whether it applies appearance or exterior-materials
 *     standards that affect metal cladding — varies and changes. These pages
 *     say we confirm it with the authority; they never assert the answer.
 *   - Any dollar figure, cost per square foot, or the claim that a
 *     barndominium is cheaper than a conventional house. The shell can be
 *     cost-effective; the finished interior costs what finishes cost.
 *   - Any financing rate, lending term, or promise about appraisal outcomes.
 *     Comparable-sales scarcity is a real factor and is described as a
 *     question to raise with a lender, never as a predicted result.
 *   - A zoning figure, a flood-zone designation, or a septic approval. Those
 *     are determinations made by an authority, a surveyor or a soil test.
 *
 * THE SPLIT WITH custom-homes.ts — read before editing.
 *   CUSTOM HOMES covers evaluating and buying a lot, teardown arithmetic,
 *   soils as a purchase condition, design review, covenants and architectural
 *   review boards, and jurisdiction boundaries. Those angles are spoken for.
 *   BARNDOMINIUMS is about this building type on this land: exterior-materials
 *   standards, the level pad a wide footprint needs, access for long trusses
 *   and posts, well and septic on unsewered ground, propane and electric
 *   service distance, lending and appraisal comparables, and living beside
 *   working agricultural land.
 *   The hub page owns the product education — what post-frame is, insulation
 *   and condensation, a shop under the same roof. Do not repeat it here.
 *
 * Facts used here (ZIP, county) come from content/locations.ts and are
 * cross-checked by script.
 */
export const barndominiumCopy: Record<string, LocationServiceCopy> = {
  // ---------- Clermont County, Ohio ----------

  batavia: {
    intro:
      'Barndominium near Batavia? Village or township changes the answer. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, a village on the East Fork of the Little Miami with township and farm ground extending around it.',
      'The first thing we establish is which side of the village boundary a parcel sits on, because the village and the surrounding township are separate authorities with separate rules — and for this building type that matters more than usual, since some jurisdictions apply exterior-materials or appearance standards that bear directly on metal cladding. We get that in writing before design. On ground near the East Fork, elevation and drainage govern the slab and the pad as well.',
    ],
    localFaqs: [
      {
        q: 'Does it matter if my land is in the village or the township?',
        a: 'It decides which authority governs and which rules apply. For a barndominium that can extend to exterior-materials standards, so we confirm it in writing first.',
      },
      {
        q: 'Does the East Fork affect the build?',
        a: 'On ground near the valley, elevation and drainage govern the slab and how the pad is built up. Those are determined by a surveyor and the floodplain administrator.',
      },
    ],
  },

  owensville: {
    intro:
      'Barndominium near Owensville? Splitting a building lot off farmland. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in central Clermont County surrounded by open agricultural ground along the US-50 and State Route 276 area.',
      'A good deal of the land here comes out of larger farm parcels, and dividing one to create a building lot is its own approval with its own survey work and timetable — determined by the township and the county rather than by the seller. Frontage, legal access and how services reach the new parcel all bear on whether a split is granted. That belongs before you agree a price, not after.',
    ],
    localFaqs: [
      {
        q: 'Can I split a building lot off a farm parcel?',
        a: 'Sometimes, and it turns on frontage, legal access and services as much as acreage. The township and county decide it, not the seller.',
      },
      {
        q: 'How long does a split take?',
        a: 'It is a separate approval with its own survey work and timetable, so it belongs in the programme from the start rather than discovered inside it.',
      },
    ],
  },

  goshen: {
    intro:
      'Barndominium in Goshen? Level ground and a soil test come first. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is an unincorporated community in Goshen Township, northern Clermont County, with open rolling farmland across much of the township.',
      'A barndominium has a wide, largely single-storey footprint, so it wants more level ground than a compact two-storey house does — and on rolling land that can mean real cut and fill before the slab is poured. The other early item is waste: away from mains sewer an on-site system is likely, and whether one is feasible comes from soil testing on that specific parcel rather than from a neighbouring property having one.',
    ],
    localFaqs: [
      {
        q: 'Does the footprint need more level ground?',
        a: 'Generally yes. A wide, largely single-storey building wants a larger level pad, and on rolling land that can mean meaningful cut and fill before the slab.',
      },
      {
        q: 'How do I know a septic system will work?',
        a: 'Soil testing on that parcel. A neighbour having one is not evidence yours will pass, so the test belongs before you buy the land.',
      },
    ],
  },

  moscow: {
    intro:
      'Barndominium near Moscow? Low river ground sets the slab. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small village on the Ohio River in southern Clermont County, with rural ground extending behind the riverside settlement.',
      'On the low ground near the river, required elevation governs how the pad is built up and how the slab is designed, and it carries through to what the finished building costs to insure. That determination comes from a surveyor and the floodplain administrator rather than from a listing. On the rural ground behind, the questions shift to what services reach the parcel and whether private water and waste systems are needed.',
    ],
    localFaqs: [
      {
        q: 'Can a barndominium be built on low river ground?',
        a: 'Where the required elevation can be met, which governs how the pad is built up and how the slab is designed. That is determined before you commit to the land.',
      },
      {
        q: 'Are services available on the rural parcels?',
        a: 'Not everywhere. What reaches a specific parcel, and whether private water and waste are needed, is worth confirming before purchase.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Barndominium near Newtonsville? Genuinely rural, so check the utilities. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a very small village in north-eastern Clermont County surrounded by open agricultural country.',
      'This far out the services do a lot of the deciding. How far three-phase or adequate single-phase electric service runs and what extending it costs, whether the parcel is on a public water line or needs a well, and whether natural gas is available or the building will run on propane are all real figures rather than details. Each is answerable before a purchase, and each can move a budget more than a finish selection ever will.',
    ],
    localFaqs: [
      {
        q: 'What if there is no gas line?',
        a: 'Then the building runs on propane, with a tank and its siting planned in. It is workable and normal out here, but it belongs in the design and the budget early.',
      },
      {
        q: 'How far does electric service reach?',
        a: 'It varies by parcel, and extending it is a real cost. We establish the distance and the utility’s requirements before you commit to the land.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Barndominium near Williamsburg? Terrain and jurisdiction both matter. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a village in eastern Clermont County on the East Fork of the Little Miami, with rural township ground extending around it.',
      'Two things get settled before design. Whether a parcel sits inside the village or in the township decides which authority governs and which rules apply — including any standard bearing on exterior materials. And the ground itself rolls enough here that where the level pad goes is a design decision rather than a given, with cut and fill priced honestly rather than left as a contingency.',
    ],
    localFaqs: [
      {
        q: 'Village or township — what changes?',
        a: 'The governing authority and the applicable rules, which for this building type can include exterior-materials standards. We confirm it in writing first.',
      },
      {
        q: 'Where does the building actually sit on a rolling parcel?',
        a: 'That is a siting decision we make with you, balancing the level pad, the drive and the drainage. The cut and fill gets priced rather than assumed.',
      },
    ],
  },

  bethel: {
    intro:
      'Barndominium near Bethel? Real acreage, and working farms next door. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a village in southern Clermont County with extensive open farmland across the surrounding township ground.',
      'This is some of the best land in our area for this kind of building, and it is worth going in clear-eyed about what surrounds it. Neighbouring ground in active agricultural use brings equipment at unsociable hours, seasonal odours and spraying, and that is normal rather than a nuisance to be resolved later. Knowing what is farmed around a parcel, and what the zoning permits there, is a fair question before buying.',
    ],
    localFaqs: [
      {
        q: 'What is it like living beside working farmland?',
        a: 'Equipment at early hours, seasonal odours and spraying are all normal. It is worth knowing what is farmed around a parcel before you buy rather than after.',
      },
      {
        q: 'Is there genuinely land available here?',
        a: 'Yes, this is among the more genuinely rural parts of our service area, which is why a barndominium is a realistic proposition on it.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Barndominium near New Richmond? The pad decides where it sits. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a village on the Ohio River in southern Clermont County, with low riverfront ground and higher land rising behind it.',
      'Which of those two a parcel is on changes the project entirely. On the low ground, required elevation governs how the pad is built up and how the slab is designed. On the rising ground behind, the constraint becomes finding enough level area for a wide footprint without disproportionate cut and fill. We walk the parcel and establish which problem you are actually buying before any design work starts.',
    ],
    localFaqs: [
      {
        q: 'Is the low ground or the high ground better?',
        a: 'Neither automatically. Low ground raises elevation and slab design; the rising ground raises how much level area a wide footprint can get without heavy cut and fill.',
      },
      {
        q: 'Will you look at the land before I buy it?',
        a: 'That is the conversation we prefer. Once you own a parcel that will not take the building economically, your options narrow considerably.',
      },
    ],
  },

  // ---------- Hamilton County, Ohio ----------

  harrison: {
    intro:
      'Barndominium near Harrison? The state line changes the rulebook. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) sits at the far western edge of Hamilton County directly on the Ohio–Indiana state line, with rural ground extending on both sides of it.',
      'A state line is the most consequential boundary a build can sit near. It changes the applicable building code, the permitting authority, the inspection regime, and frequently the financing and appraisal too. Which side a parcel falls on is not always obvious from an address, so it is the first thing we establish — and only then do we confirm how that jurisdiction treats post-frame residential construction.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the state line the land is on?',
        a: 'Considerably. It changes the building code, the permitting authority, the inspections and often the financing. It is the first thing we settle.',
      },
      {
        q: 'Do you build in Indiana as well as Ohio?',
        a: 'Yes, and in Kentucky. We handle the applicable code and permitting for whichever jurisdiction the parcel sits in, under the same contract.',
      },
    ],
  },

  miamitown: {
    intro:
      'Barndominium near Miamitown? Great Miami valley ground. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small unincorporated Whitewater Township community on the Great Miami River at the western edge of Hamilton County, with rural ground around it.',
      'Whitewater Township and Hamilton County govern here rather than a village, which is the first thing to confirm for a specific address. On the valley ground the river drives the design — required elevation governs how the pad is built up and how the slab is detailed, and it follows through to the insurance. Away from the valley the questions become the ordinary rural ones of service distance and private water and waste.',
    ],
    localFaqs: [
      {
        q: 'Who governs building in Miamitown?',
        a: 'Whitewater Township and Hamilton County — it is unincorporated, so there is no village authority involved.',
      },
      {
        q: 'How does the river affect a barndominium?',
        a: 'On valley ground, required elevation governs how the pad is built up and how the slab is designed, and it carries through to the insurance.',
      },
    ],
  },

  cleves: {
    intro:
      'Barndominium near Cleves? Village ground or township ground. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a small village at the western edge of Hamilton County near where the Great Miami meets the Ohio, with more open ground beyond its compact core.',
      'The village and the surrounding township are separate authorities, and for this building type that distinction is worth settling early — the rules that bear on exterior materials and on accessory or agricultural-style structures are not necessarily the same either side of the line. On the lower ground near the rivers, elevation governs the pad and the slab, and on the outer parcels service distance becomes the practical variable.',
    ],
    localFaqs: [
      {
        q: 'Are the rules the same inside and outside the village?',
        a: 'Not necessarily, and for a metal-clad residence that difference can matter. We establish which authority governs the address and what it requires before design.',
      },
      {
        q: 'What about services on the outer parcels?',
        a: 'How far the mains run and what reaching them costs varies. That gets confirmed for the specific address before you commit.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Barndominium near North Bend? Level ground is the scarce part. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a small historic village on the Ohio River at the far west of Hamilton County, where the ground rises sharply from the riverbank to wooded high ground behind.',
      'On terrain this steep the binding constraint is simply finding enough level area. A barndominium’s footprint is wide and largely single-storey, so it needs a bigger flat pad than a compact two-storey house — and on a falling parcel that means either substantial cut and fill or siting the building somewhere less convenient than you first pictured. That is a question worth answering on the land before it is answered by an excavator.',
    ],
    localFaqs: [
      {
        q: 'Can this building type work on steep ground?',
        a: 'It can, but it needs a larger level pad than a two-storey house, so either the cut and fill grows or the siting moves. We work that out on the parcel first.',
      },
      {
        q: 'Is cut and fill expensive?',
        a: 'It can be a significant figure on a falling parcel. We price it honestly before you commit rather than treating it as a contingency.',
      },
    ],
  },

  // ---------- Warren County, Ohio ----------

  maineville: {
    intro:
      'Barndominium near Maineville? Check the standards where it is developing. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a village in Warren County north-east of Cincinnati, with a small historic centre and considerable recent residential development on the ground around it.',
      'Where rural land sits close to newer platted subdivisions, two separate rulebooks can apply within a short distance — the village or township on one hand, and recorded covenants on the other. Covenants in particular can restrict exterior materials in ways that bear directly on a metal-clad building, and they are private agreements enforceable independently of zoning. Reading them, and confirming the authority’s position, both belong before a land purchase.',
    ],
    localFaqs: [
      {
        q: 'Could covenants stop a barndominium?',
        a: 'They can restrict exterior materials, and they bind independently of zoning. Where a parcel carries recorded covenants, read them before buying the land.',
      },
      {
        q: 'Village or township?',
        a: 'It decides the governing authority and the applicable rules. In a fast-developing area that boundary is worth confirming for the specific address.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Barndominium near Pleasant Plain? Access for the delivery matters. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in eastern Warren County surrounded by open agricultural ground.',
      'Post-frame construction arrives in long components — trusses and columns that need a vehicle able to reach the building position and room to turn and set down once it does. On a rural parcel with a narrow lane, a tight field entrance or a soft approach, that is a genuine constraint on the programme rather than a detail. We look at the access route as part of assessing a parcel, because a delivery that cannot reach the pad stops everything behind it.',
    ],
    localFaqs: [
      {
        q: 'Can the materials actually reach my land?',
        a: 'That is worth checking. Long trusses and columns need a route in, room to turn and somewhere to set down. A narrow lane or soft entrance is a real constraint.',
      },
      {
        q: 'What if access is difficult?',
        a: 'It is usually solvable with a temporary stone approach or a staging area, but it is a cost and a programme item, so it belongs in the assessment rather than the surprise column.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Barndominium near South Lebanon? River valley and rapid growth. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a village in Warren County on the Little Miami River, with a historic centre and substantial recent development on the ground around it.',
      'On ground near the Little Miami valley, elevation and drainage govern how the pad is built up and how the slab is designed, determined by a surveyor and the floodplain administrator. Away from the valley, the growth is the thing to check — whether a parcel carries recorded covenants from newer platting, and what the village or township requires, since either can bear on exterior materials for a building of this type.',
    ],
    localFaqs: [
      {
        q: 'Does the Little Miami affect the design?',
        a: 'Near the valley, elevation and drainage govern the pad and the slab. Those get determined rather than estimated, before you commit to the land.',
      },
      {
        q: 'Do the newer subdivisions affect nearby rural parcels?',
        a: 'Only where a parcel itself carries recorded covenants. Where it does, they can restrict exterior materials independently of zoning, so they are worth reading first.',
      },
    ],
  },

  // ---------- Butler County, Ohio ----------

  ross: {
    intro:
      'Barndominium in Ross? Great Miami valley farmland. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is an unincorporated community in Ross Township, western Butler County, set in open agricultural country along the Great Miami River valley.',
      'Ross Township and Butler County govern, and Butler’s administration differs from Hamilton County’s in both process and timing. On the valley ground near the Great Miami, elevation and drainage drive how the pad is built up and how the slab is detailed. On the farmland above, the practical variables are the usual rural set — service distance, whether private water and waste are needed, and where a level pad can sit.',
    ],
    localFaqs: [
      {
        q: 'Who governs a Ross address?',
        a: 'Ross Township and Butler County. It is unincorporated, and Butler’s process and timing differ from Hamilton County’s.',
      },
      {
        q: 'Is the valley ground buildable?',
        a: 'Often, designed to the required elevation, which governs the pad and the slab. That is a determination rather than an assumption.',
      },
    ],
  },

  millville: {
    intro:
      'Barndominium near Millville? Village line, then farmland. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a very small village in western Butler County surrounded by open agricultural ground.',
      'With a village this compact, most of the land that suits this building type is on the township ground beyond it — which means the first question is which authority governs the specific address, since the village and the township are separate and their requirements need not match. Beyond that it is rural building: service distance, private water and waste subject to soil testing, and where the level pad sits on a working parcel.',
    ],
    localFaqs: [
      {
        q: 'Is the land I am looking at in the village?',
        a: 'Often not — most parcels that suit this building type sit on township ground. Either way we confirm the governing authority for the address first.',
      },
      {
        q: 'What decides the septic system?',
        a: 'Soil testing on that parcel. It determines feasibility and design, and it belongs before the land purchase rather than after.',
      },
    ],
  },

  // ---------- Boone County, Kentucky ----------

  hebron: {
    intro:
      'Barndominium near Hebron? Boone County rules, and busy neighbours. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is an unincorporated Boone County community west of the airport, an area combining rural ground with substantial distribution and logistics development.',
      'Boone County governs here rather than a city, and Kentucky’s building code and permitting apply rather than Ohio’s — nothing about an approval across the river carries over. The other thing worth establishing is what surrounds a rural parcel and what the zoning would permit there, since logistics development changes traffic patterns and operating hours in ways that are difficult to reverse once they arrive.',
    ],
    localFaqs: [
      {
        q: 'Is building in Kentucky different?',
        a: 'Yes — its own code, permitting authority and inspections. An Ohio approval carries nothing across the river.',
      },
      {
        q: 'Should the nearby distribution development concern me?',
        a: 'It is worth checking what the zoning permits around a parcel. Traffic patterns and operating hours change with that kind of use, and it is on the public record.',
      },
    ],
  },

  burlington: {
    intro:
      'Barndominium near Burlington? Land available, lenders to brief. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is an unincorporated Boone County community at the administrative centre of the county, with a historic core and considerable open ground around it.',
      'Land is genuinely available here, which makes this a realistic place to build one. The item worth raising early is financing: a barndominium is a less common property type, so there can be fewer directly comparable sales for a valuer to work from, and lenders differ in how they treat it. That is a question to put to your lender at the outset rather than late in the process — not a reason not to build, but a conversation better had early.',
    ],
    localFaqs: [
      {
        q: 'Is a barndominium harder to finance?',
        a: 'It can be a less familiar property type for some lenders, and comparable sales can be scarcer for a valuer. Worth raising with your lender at the outset.',
      },
      {
        q: 'Does that affect what you build?',
        a: 'Not the construction, but it can affect timing and how the project is structured, which is why we would rather you had that conversation early.',
      },
    ],
  },

  walton: {
    intro:
      'Barndominium near Walton? Rural south Boone County ground. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a city in southern Boone County near the I-75 corridor, with a small historic centre and open rolling rural ground extending around it.',
      'Out here the parcel does most of the deciding, and the biggest single variable is services: whether mains water and sewer reach it or a well and an on-site waste system are required, with septic feasibility resting on soil testing for that specific ground. Add the length of the drive and how far electric service must be extended, and the site can carry real cost before the slab is poured. All of it is establishable before a purchase.',
    ],
    localFaqs: [
      {
        q: 'Will I need a well and septic system?',
        a: 'On many rural parcels here, yes. Whether a septic system is feasible comes from soil testing on that parcel rather than from a neighbouring property.',
      },
      {
        q: 'What else drives the site cost?',
        a: 'The drive and the distance electric service has to be extended. Both are real figures and both are worth knowing before you buy the land.',
      },
    ],
  },

  // ---------- Campbell County, Kentucky ----------

  alexandria: {
    intro:
      'Barndominium near Alexandria? Acreage, and a soil test first. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is a city in the more rural southern part of Campbell County, with a small historic centre and open rolling farmland around it.',
      'This is realistic ground for the building type, and the early work is the rural set. Whether the parcel is served by mains water and sewer or needs a well and an on-site system is the largest cost variable, and septic feasibility comes from soil testing rather than assumption. On rolling farmland, where a wide footprint can sit level without disproportionate cut and fill is the other question worth settling on the land itself.',
    ],
    localFaqs: [
      {
        q: 'How much level ground do I need?',
        a: 'More than a two-storey house of the same floor area, because the footprint is wider. On rolling land that is a siting decision worth making before purchase.',
      },
      {
        q: 'Is septic always possible?',
        a: 'No — it depends on soil conditions established by testing on that parcel, which is why the test belongs before you commit to the land.',
      },
    ],
  },

  melbourne: {
    intro:
      'Barndominium near Melbourne? Small, rural, and check the utilities. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a very small Campbell County city on the Ohio River south-east of the main river cities, with open rural ground around it.',
      'Somewhere this small, almost everything is parcel-specific rather than governed by a general answer. What services actually reach a given piece of land, whether a well and on-site waste system are required, how far electric service has to be extended, and on the low ground near the river what required elevation does to the pad and the slab. Each is quick to establish, and each belongs before a purchase rather than after.',
    ],
    localFaqs: [
      {
        q: 'Are mains services available here?',
        a: 'Not everywhere. What reaches a specific parcel, and whether private systems are needed instead, is the first thing to confirm.',
      },
      {
        q: 'Does the river affect the land?',
        a: 'On the low ground near it, required elevation governs how the pad is built up and how the slab is designed, determined by a surveyor.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Barndominium near Cold Spring? Growth corridor, so confirm the standards. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a Campbell County city along the US-27 corridor south of the river cities, a steady growth area with recent development and land remaining around it.',
      'Where rural parcels sit close to newer residential development, the standards that apply become the thing to check rather than assume. A city in a growth phase may have views on exterior materials and on how a building of this type presents to a road, and any recorded covenants on a parcel bind separately from that. Both get established in writing before design, which is straightforward when it is done first.',
    ],
    localFaqs: [
      {
        q: 'Will the city have a view on how it looks?',
        a: 'It may, particularly on exterior materials and how the building presents to a road. We establish the position in writing before design rather than after.',
      },
      {
        q: 'Do covenants apply out here?',
        a: 'Only where a parcel carries them, and they bind separately from city rules. Where they exist they are worth reading before you buy.',
      },
    ],
  },

  // ---------- Kenton County, Kentucky ----------

  independence: {
    intro:
      'Barndominium near Independence? Open ground in Kenton County. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is a city in the more open southern part of Kenton County, one of the region’s growth areas, with land still available around it.',
      'This is among the more realistic places in Northern Kentucky to buy land for one, since you are generally buying ground rather than a house to remove. Because the area is growing, the two checks worth making are what the city requires — including anything bearing on exterior materials for this building type — and, on the outer parcels, how far sewer and water actually run and what a connection costs from that frontage.',
    ],
    localFaqs: [
      {
        q: 'Can I actually buy land here?',
        a: 'More readily than in most of the county — this is a growth area with land still available, so you are usually buying ground rather than an existing house.',
      },
      {
        q: 'What does the city need to confirm?',
        a: 'Whether it permits this construction type and anything it applies on exterior materials. We get that in writing before design begins.',
      },
    ],
  },

  // ---------- Dearborn County, Indiana ----------

  lawrenceburg: {
    intro:
      'Barndominium near Lawrenceburg? Indiana code, and low ground. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a Dearborn County city on the Ohio River in south-eastern Indiana, a historic river town on low ground with rural county land behind it.',
      'Building here means building in Indiana — its own building code, its own permitting authority and its own inspections, with nothing carrying across from an Ohio or Kentucky approval. On the low ground near the river, required elevation governs how the pad is built up and how the slab is designed. The rural county land behind the town is where the acreage for this kind of building genuinely is.',
    ],
    localFaqs: [
      {
        q: 'Is Indiana different to build in?',
        a: 'Yes — its own code, permitting authority and inspection regime. An Ohio or Kentucky approval carries nothing across the state line.',
      },
      {
        q: 'Where is the land for one of these?',
        a: 'Generally on the rural county ground behind the town rather than in it. We are happy to look at a parcel before you buy.',
      },
    ],
  },

  greendale: {
    intro:
      'Barndominium near Greendale? Indiana rules on rising ground. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County town in south-eastern Indiana adjoining Lawrenceburg, set largely on the higher ground rising away from the Ohio River valley.',
      'Sitting above the valley shifts the emphasis away from flood elevation and onto the pad. A wide, largely single-storey footprint needs a larger level area than a compact house, and on ground that rises this steadily that means either meaningful cut and fill or a siting compromise. Indiana’s code and permitting apply, and the town sets its own requirements, so both get confirmed for the address before design.',
    ],
    localFaqs: [
      {
        q: 'Is flood elevation a factor in Greendale?',
        a: 'Less so than on the valley floor, since much of the town sits higher. Finding enough level ground for a wide footprint is the more likely constraint.',
      },
      {
        q: 'Which rules apply?',
        a: 'Indiana’s code and permitting, alongside the town’s own requirements. Both get confirmed for the specific address before design.',
      },
    ],
  },

  aurora: {
    intro:
      'Barndominium near Aurora? Rural Indiana county land. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a Dearborn County city on the Ohio River in south-eastern Indiana, a historic river town with open rural county ground extending behind it.',
      'The acreage that suits this building type is generally on the county ground rather than in the town, which makes the governing authority the first thing to establish — the city and the county are separate, and Indiana’s code applies to both. Out on the rural parcels the familiar set follows: service distance, private water and waste subject to soil testing, and where a wide footprint can sit level.',
    ],
    localFaqs: [
      {
        q: 'City or county ground?',
        a: 'The acreage is generally in the county rather than the town, and they are separate authorities. We confirm which governs the address before design.',
      },
      {
        q: 'What should I settle before buying land?',
        a: 'How far services reach, whether a septic system is feasible on soil testing, and whether the parcel offers a level pad for a wide footprint.',
      },
    ],
  },
};
