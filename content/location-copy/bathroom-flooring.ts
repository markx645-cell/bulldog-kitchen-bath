import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /bathroom-flooring/[location].
 *
 * Fifth bathroom service over the same 170 places, and the one closest to what
 * the other four already say — so the angle set is built strictly from what is
 * UNDER a floor and what happens at its edges: joist deflection, asbestos in
 * pre-1980 sheet vinyl and mastic, toilet flange height after a build-up, door
 * undercuts and thresholds, uncoupling membranes, slip ratings, heated mat
 * layout, and the layers previous owners left in place.
 *
 * Waterproofing assemblies, drain positions, tub removal and enclosure design
 * belong to the other four services and are deliberately left there.
 */
export const bathroomFlooringCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Bathroom flooring in Sedamsville? Tile is only as good as the joists under it. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'Tile does not crack because the tile failed — it cracks because the floor beneath it moved. Houses of this age were framed to standards that predate tile as a bathroom floor, and a century of plumbers notching joists for waste and supply has not helped. Before we quote a tile floor we look at the span, the depth and what has been cut out of it, because a floor that deflects underfoot will crack grout within a year no matter how well the tile is set.',
    ],
    localFaqs: [
      {
        q: 'Why does tile crack in an old house?',
        a: 'Because the floor beneath it flexes, not because the tile is poor. Joists notched by decades of plumbing work are the usual cause, and it is why we look under the floor before quoting.',
      },
      {
        q: 'Can a springy floor be fixed?',
        a: 'Usually — sistering joists or adding blocking from below where there is access. It is straightforward work and it goes in the quote rather than being discovered later.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Bathroom flooring in Sayler Park? Pre-1980 sheet vinyl and black mastic want testing first. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'In houses that have been here this long, the bathroom floor has usually been redone at least twice, and what sits underneath can include old sheet vinyl or nine-inch tiles bedded in black mastic. Materials of that era may contain asbestos, which is harmless undisturbed and a genuine problem when someone starts scraping. We do not guess: where the age and appearance suggest it, we recommend testing before anything is lifted.',
    ],
    localFaqs: [
      {
        q: 'Could our old bathroom floor contain asbestos?',
        a: 'It is possible in sheet vinyl, nine-inch tiles and black mastic from before about 1980. It is harmless undisturbed and a real problem once disturbed, so we recommend testing rather than guessing.',
      },
      {
        q: 'What happens if a test comes back positive?',
        a: 'It goes to a licensed abatement contractor before we start — that is not work we do, and we will say so rather than quietly scraping it up.',
      },
    ],
  },

  riverside: {
    intro:
      'Bathroom flooring in Riverside? A new floor raises the level, and the toilet flange has to follow. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'Here is the mistake that shows up in more bathrooms than any other: a new floor goes down over the old one, the toilet is refitted onto a flange now sitting below the finished surface, and the wax seal never quite closes. It weeps for months before anyone notices. A flange has to sit at or just above the finished floor, which means either extending it or taking the old layers out — decided before the floor goes down, not after.',
    ],
    localFaqs: [
      {
        q: 'What happens to the toilet when the floor is raised?',
        a: 'The flange has to be extended so it sits at or just above the new surface. Left low, the wax seal never fully closes and it weeps quietly for months. It is the most common fault we find.',
      },
      {
        q: 'Does the toilet have to come out?',
        a: 'Yes, for any floor that runs under it — which is the right way to do it. A floor cut around a toilet is a repair rather than an installation.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Bathroom flooring in East Price Hill? Upstairs over another unit, the floor is their ceiling. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'In a two-family, a bathroom floor is somebody else’s ceiling — and a floor that only stops water inside the shower leaves everywhere else unprotected. Extending a bonded membrane across the whole floor and up the wall base turns the room into a shallow tray, so an overflowing basin or a failed supply connection is a mopping job rather than a claim. It is a modest addition while the floor is open and impossible afterwards.',
    ],
    localFaqs: [
      {
        q: 'Should the whole bathroom floor be waterproofed?',
        a: 'Over another unit, we would say yes. A membrane across the whole floor and up the wall base makes an overflow a mopping job rather than damage to the ceiling below.',
      },
      {
        q: 'Does that add much cost?',
        a: 'A modest amount while the floor is already open, and it cannot be added later without lifting everything again.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Bathroom flooring in West Price Hill? Slip resistance is a real number, not a marketing word. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'Tile is rated for wet slip resistance, and the figure is published — but polished porcelain and honed stone that look superb in a showroom frequently sit below what a bathroom floor should have. In a neighbourhood where people stay in their houses for decades, that is worth caring about more than the finish. We tell you the rating of what you are choosing rather than letting the showroom sample decide it.',
    ],
    localFaqs: [
      {
        q: 'Is there a way to know if a tile is slippery?',
        a: 'Yes — wet slip resistance is a published figure for most tiles, and we will tell you what the one you like actually scores rather than guessing from how it looks.',
      },
      {
        q: 'Does slip-resistant tile look worse?',
        a: 'Not any more. Textured porcelains have come a long way, and the finishes to avoid are the highly polished ones rather than anything with character.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Bathroom flooring in Lower Price Hill? An original mosaic floor under the vinyl is worth finding. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'A surprising number of bathrooms in these rowhouses still have their original hexagonal or mosaic tile hidden beneath later coverings — laid over rather than removed, because it was easier. Where it survives sound, it is worth more than anything we would put down in its place. We lift a corner on the site visit before assuming the floor comes up, because that decision cannot be undone once the demolition starts.',
    ],
    localFaqs: [
      {
        q: 'Could there be an original floor under ours?',
        a: 'In houses of this era here, often — hexagonal or mosaic tile laid over and forgotten. We lift a corner on the site visit rather than assuming, because it is not a decision you can reverse.',
      },
      {
        q: 'Can an original floor be restored?',
        a: 'Frequently, where it is sound and the losses are localised. It takes patience and it produces something you cannot buy.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Bathroom flooring in Over-the-Rhine? In a condo the floor build-up affects the door and the neighbours. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'Two constraints in a converted building. Any floor build-up has to clear the door swing, and in a condo you cannot simply plane the bottom off a fire-rated door. And most associations require approval for floor assemblies over a shared structure, particularly where sound transmission is written into the rules. We check the door clearance and the board’s requirements before specifying a thickness.',
    ],
    localFaqs: [
      {
        q: 'Will a new floor stop the door closing?',
        a: 'It can — every millimetre of build-up eats door clearance. We measure it before choosing an assembly, because in a condo you cannot always just trim the door.',
      },
      {
        q: 'Do we need board approval?',
        a: 'Frequently, particularly where sound transmission between units is written into the rules. We check what your association requires before specifying.',
      },
    ],
  },

  downtown: {
    intro:
      'Bathroom flooring in Downtown Cincinnati? Over a concrete slab the rules are different. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'A tile floor over a concrete deck has none of the deflection worries of a wood-framed house — but it has its own. Concrete moves seasonally and cracks, and a rigid tile bed bonded straight to it will telegraph every one of those cracks upward. An uncoupling membrane between slab and tile absorbs that movement. It is invisible, it is where a cheap quote saves money, and on a slab it is not optional.',
    ],
    localFaqs: [
      {
        q: 'Is tiling over concrete simpler?',
        a: 'No deflection worries, but concrete cracks as it moves — and tile bonded straight to it telegraphs those cracks. An uncoupling membrane between the two absorbs the movement.',
      },
      {
        q: 'Is that membrane really necessary?',
        a: 'Over a slab, yes. It is invisible once finished, which is exactly why it is the thing a cheaper quote leaves out.',
      },
    ],
  },

  'west-end': {
    intro:
      'Bathroom flooring in the West End? Every layer left down raises the floor another inch. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'Lift the vinyl in a house that has changed hands a few times and there is often sheet flooring over hardboard over the original boards — each renovation adding rather than removing. That is why the bathroom door catches, the threshold is a step, and the toilet sits low. Taking it back to structure is the honest start: it recovers the height, it lets us see the subfloor, and it means the new floor is bonded to something known.',
    ],
    localFaqs: [
      {
        q: 'Why is our bathroom floor higher than the hallway?',
        a: 'Layers. Each renovation added a covering over the last rather than removing it. Taking the floor back to structure usually recovers an inch or more.',
      },
      {
        q: 'Does everything have to come out?',
        a: 'For a floor we will warrant, yes — it has to be bonded to a known, sound substrate. It is also the only way to see what condition the subfloor is in.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Bathroom flooring in Mount Adams? Large-format tile needs a flat floor to sit on. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'Large tiles are the current preference and they are the least forgiving choice on a nineteenth-century floor. A big rigid tile cannot follow a surface that undulates, so any dip shows as a lipped edge between tiles — and in a house that has settled for a century, undulation is a given. The floor gets brought flat with a levelling compound first, or the format gets smaller. We will tell you which your floor needs before you choose the tile.',
    ],
    localFaqs: [
      {
        q: 'Can we use large-format tile in an old house?',
        a: 'Often, but the floor has to be brought flat first — a large rigid tile cannot follow an undulating surface, and any dip shows as a lipped edge. We check with a straightedge before you choose.',
      },
      {
        q: 'What if the floor cannot be levelled enough?',
        a: 'A smaller format follows minor variation far better. We would rather recommend that than fit something that will look wrong at every joint.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Bathroom flooring in Mount Auburn? In a rental, the floor takes more abuse than anything else. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Where a bathroom serves a tenancy, the floor is the component that decides how often you are back in the room. Porcelain rather than soft stone, epoxy grout rather than cement, and a fully bonded substrate rather than a floated one — none of them the cheapest option, all of them cheaper across five tenancies than replacing a floor that stained, cracked or lifted at the edges.',
    ],
    localFaqs: [
      {
        q: 'What flooring holds up in a rental?',
        a: 'Porcelain rather than soft stone, epoxy grout rather than cement, and a properly bonded substrate. The saving shows by about the third tenancy.',
      },
      {
        q: 'Is luxury vinyl a reasonable choice?',
        a: 'A good one is, and it is quicker and cheaper to fit. The honest tradeoff is that it is less repairable and it does not last as long under heavy use.',
      },
    ],
  },

  clifton: {
    intro:
      'Bathroom flooring in Clifton? A heated floor is the upgrade people mention a year later. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Tile over a suspended floor in a large old house is genuinely cold, and an electric mat goes in during a job the floor is already open for — so the cost is the mat, a thermostat and an afternoon rather than a project of its own. The detail that matters is layout: the mat cannot be cut to fit, so it has to be planned around the toilet, the vanity and anything else fixed before a single cable goes down.',
    ],
    localFaqs: [
      {
        q: 'Is underfloor heating worth it?',
        a: 'It is the upgrade clients mention most a year later, and since the floor is open anyway the added cost is modest. It also dries the floor faster after a shower.',
      },
      {
        q: 'Can the mat be cut to fit around fixtures?',
        a: 'The cable cannot be cut — the mat is laid out around fixed items instead, which is why the layout is planned before anything goes down.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Bathroom flooring in Corryville? Near campus, the work has to fit a turnover window. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'Property here runs on an academic calendar, and flooring has a constraint most trades do not: adhesives and grout need curing time before the room is used. A tile floor is not walkable the moment the last tile is set. Where the window between leases is genuinely tight, a quality luxury vinyl goes down and is usable the same day — and we will tell you when that is the sensible trade rather than pushing tile into a schedule it does not fit.',
    ],
    localFaqs: [
      {
        q: 'How soon can the floor be used?',
        a: 'Tile needs curing time before it is walked on and grouted — usually a day or two. Luxury vinyl is usable the same day, which is why it often suits a tight turnover better.',
      },
      {
        q: 'Can several units be done together?',
        a: 'Yes, and it is cheaper per unit — one mobilisation, one delivery, and a single specification so future repairs use the same materials.',
      },
    ],
  },

  northside: {
    intro:
      'Bathroom flooring in Northside? Where the cuts land is what makes a floor look right. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'Two floors can use identical tile and look completely different, and the difference is setting out. Starting from a wall and working across leaves a sliver at the far side and awkward cuts at the doorway — the one place everyone looks. Setting out from the threshold, or centring on the room, puts full tiles where they are seen and the cuts where they are not. It costs nothing but the planning most jobs skip.',
    ],
    localFaqs: [
      {
        q: 'Why do some tiled floors look better with the same tile?',
        a: 'Setting out — deciding where the cuts fall so full tiles land at the doorway and the awkward ones go where nobody looks. It is planning rather than material.',
      },
      {
        q: 'Can we see the layout first?',
        a: 'Yes. We dry-lay and mark the setting out before anything is fixed, so you can see where the cuts land while it can still change.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Bathroom flooring in College Hill? Natural stone in a bathroom needs sealing and re-sealing. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'Marble and limestone look superb in the big early-1900s bathrooms here and they are porous — they stain from shampoo and cosmetics, they etch from anything acidic, and they need sealing on installation and periodically afterwards. Porcelain that convincingly imitates stone does none of that. Where someone genuinely wants real stone we will fit it properly and tell them what it asks for; where they want the look without the upkeep, we will say so.',
    ],
    localFaqs: [
      {
        q: 'Is natural stone a good bathroom floor?',
        a: 'It is beautiful and it is porous — it stains, it etches from anything acidic, and it needs sealing on installation and periodically after. Porcelain imitating stone avoids all of that.',
      },
      {
        q: 'How often does stone need resealing?',
        a: 'Depending on the stone and the traffic, every year or two. If nobody will do it, we would steer you to porcelain rather than watch it mark.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Bathroom flooring in Walnut Hills? Subdivided houses mean somebody lives below the floor. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'In a house divided into apartments, a bathroom floor is a ceiling for the unit below — and the original structure was never built with that separation in mind. Beyond waterproofing, that raises sound: a rigid tile floor transmits footfall considerably more than what it replaces. An acoustic uncoupling layer addresses both at once, and it is worth specifying deliberately in a building where the person below will notice.',
    ],
    localFaqs: [
      {
        q: 'Will a tile floor be noisy for the unit below?',
        a: 'More than carpet or vinyl, yes. An acoustic uncoupling layer under the tile handles both sound and crack isolation, and it is worth specifying in a subdivided house.',
      },
      {
        q: 'Should the whole floor be waterproofed?',
        a: 'Over another unit we would say yes — a membrane across the whole floor makes an overflow a mopping job rather than damage to their ceiling.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Bathroom flooring in East Walnut Hills? How the floor meets original trim is the detail that shows. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'In a house with original baseboards and door casings, the junction where a new floor meets them is where care is visible. Running tile up to an undercut casing looks deliberate; butting it against the face and filling the gap with caulk does not. Where the baseboard is original and worth keeping, we undercut and slide the floor beneath rather than removing it — slower, and the reason the room still looks like the house.',
    ],
    localFaqs: [
      {
        q: 'Do the baseboards have to come off?',
        a: 'Not where they are original and worth keeping. We undercut the door casings and run the floor beneath rather than butting up and caulking. It is slower and it looks right.',
      },
      {
        q: 'How do you protect the rest of the house?',
        a: 'A planned route with hard floor protection and a sealed dust barrier at the door. Floor removal is the dustiest part of any bathroom job, so containment matters here.',
      },
    ],
  },

  avondale: {
    intro:
      'Bathroom flooring in Avondale? Nine-inch tiles and black adhesive suggest testing first. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'In housing of this age that has been let for decades, floors accumulate layers — and older sheet vinyl, nine-inch tiles and the black cutback adhesive under them can contain asbestos. It is stable while it stays put and a genuine hazard once someone attacks it with a scraper. We identify the risk on the site visit and recommend testing rather than proceeding on assumption, because that decision affects everyone in the building.',
    ],
    localFaqs: [
      {
        q: 'How do we know if the old floor is safe to remove?',
        a: 'Age and appearance give a strong indication — pre-1980 sheet vinyl, nine-inch tiles and black cutback adhesive are the ones to test. We recommend testing rather than assuming.',
      },
      {
        q: 'Can you remove it if it tests positive?',
        a: 'No. That goes to a licensed abatement contractor before we start, and we will say so rather than quietly scraping it up.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Bathroom flooring in Hyde Park? At this level, the substrate is where the money should go. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'An expensive floor laid on a poor substrate fails exactly as fast as a cheap one — sooner, if it is large-format stone that cannot tolerate movement. Reinforcing the joists where needed, bringing the surface genuinely flat, and installing an uncoupling membrane costs a fraction of the tile and decides whether that tile is still perfect in fifteen years. It is where we would spend before upgrading the material.',
    ],
    localFaqs: [
      {
        q: 'Where does the money actually matter in a floor?',
        a: 'The substrate — joist stiffness, a genuinely flat surface and an uncoupling membrane. Expensive tile on a poor base fails as fast as cheap tile, and often sooner.',
      },
      {
        q: 'Is a levelling compound always needed?',
        a: 'Not always, but large-format tile and stone demand a flatter plane than most old floors offer. We check with a straightedge and tell you what yours needs.',
      },
    ],
  },

  oakley: {
    intro:
      'Bathroom flooring in Oakley? A bungalow bathroom is small, and the tile size should reflect that. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'Received wisdom says small tiles suit small rooms and it is broadly backwards — a grid of small tiles in a compact bathroom reads busy and adds grout to clean. The genuine constraint here is different: these floors have settled, and a large tile needs a flat plane. So the answer is usually a medium format on a properly levelled floor rather than either extreme, and we work that out with a straightedge rather than a rule of thumb.',
    ],
    localFaqs: [
      {
        q: 'Do small tiles suit a small bathroom?',
        a: 'Usually the opposite — small tiles read busy and add grout lines. The real constraint is flatness, since larger tiles need a level plane. A medium format on a levelled floor is often the answer.',
      },
      {
        q: 'How do you decide?',
        a: 'With a straightedge across the existing floor. How far it is out decides what format will lay flat without lipping.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Bathroom flooring in Mount Lookout? An upstairs bathroom floor needs stiffness, not just strength. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'A floor can be perfectly strong and still be wrong for tile. What tile needs is stiffness — a limit on how much the floor deflects between joists under load — and stone needs roughly twice as much as ceramic. Long spans in older houses frequently meet the strength requirement and miss the stiffness one, which is why the floor feels fine underfoot and the grout cracks anyway. We check the span before agreeing a material.',
    ],
    localFaqs: [
      {
        q: 'The floor feels solid — why would tile crack?',
        a: 'Strength and stiffness are different things. Tile needs a limit on deflection between joists, and stone needs about twice what ceramic does. A floor can feel fine and still exceed it.',
      },
      {
        q: 'Can it be stiffened?',
        a: 'Usually — sistering joists or adding blocking from below where there is access. It is straightforward and it belongs in the quote rather than being found later.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Bathroom flooring in Columbia-Tusculum? A period-appropriate floor is a sourcing exercise. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'Owners who have restored a house properly usually want a floor that could always have been there, and that is achievable — hexagonal mosaic in the right size, a period border, unglazed porcelain rather than a modern sheen. But those are ordered rather than picked off a shelf, and lead times are real. Identifying them at design stage is what keeps the project on schedule instead of stalling at the end.',
    ],
    localFaqs: [
      {
        q: 'Can we get a genuinely period-looking floor?',
        a: 'Yes — hexagonal mosaic in the correct size, a period border, an unglazed finish rather than a modern sheen. It is a sourcing exercise with real lead times, so we start it early.',
      },
      {
        q: 'Is period tile harder to lay?',
        a: 'Small-format mosaic takes longer and the setting out matters more, particularly with a border. It is worth the extra time in a house like this.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Bathroom flooring in Mount Washington? Over an unheated space, insulate before you tile. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'A bathroom over a crawl space, a porch or an unheated garage has a genuinely cold floor, and tile makes that worse because it conducts. Insulating between the joists from below costs relatively little and does more for comfort than any surface choice — and it is worth doing before a heated mat rather than instead of one, since heating an uninsulated floor mostly warms the crawl space.',
    ],
    localFaqs: [
      {
        q: 'Why is our bathroom floor so cold?',
        a: 'Usually an uninsulated space beneath — a crawl space, porch or unheated garage — and tile conducts that cold. Insulating between the joists from below does more than any surface choice.',
      },
      {
        q: 'Should we insulate as well as heat the floor?',
        a: 'Yes, and in that order. Heating an uninsulated floor mostly warms the space underneath, which is expensive and ineffective.',
      },
    ],
  },

  madisonville: {
    intro:
      'Bathroom flooring in Madisonville? Luxury vinyl is a legitimate choice and we will say when. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'Modern luxury vinyl plank is not the sheet flooring people remember — it is genuinely waterproof, warmer underfoot than tile, forgiving of a floor that is not perfectly flat, and considerably cheaper. Its honest limits are that it is less repairable, it will not carry the resale weight of tile in a nicer house, and a poor product looks poor quickly. In a rental or a budget-conscious refresh it is frequently the right answer, and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Is luxury vinyl a downgrade from tile?',
        a: 'Different rather than worse. It is waterproof, warmer underfoot, forgiving of an uneven floor and cheaper. It is less repairable and carries less weight at resale — which is the honest tradeoff.',
      },
      {
        q: 'When would you recommend it?',
        a: 'Rentals, tight budgets, quick turnarounds and floors that would need expensive levelling for tile. We will tell you when tile is worth the extra and when it is not.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Bathroom flooring in Pleasant Ridge? Grout colour ages differently to grout quality. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Two separate decisions get conflated. Colour is aesthetic — and a very light grout on a bathroom floor will show every mark within a year, particularly at the door and in front of the basin. Type is technical: cement grout is porous and wants sealing periodically, epoxy resists staining almost entirely and costs more to buy and to lay. Choosing a mid-tone in epoxy solves both problems, and it is what we specify in most floors here.',
    ],
    localFaqs: [
      {
        q: 'What grout colour should we choose?',
        a: 'A mid-tone, almost always. Very light grout on a floor shows every mark within a year, particularly at the door and by the basin, and very dark shows dust and residue.',
      },
      {
        q: 'Is epoxy grout worth the extra?',
        a: 'On a bathroom floor, usually. It resists staining almost entirely and does not need resealing, which is most of what makes a tiled floor look tired.',
      },
    ],
  },

  westwood: {
    intro:
      'Bathroom flooring in Westwood? Across this much housing, no two subfloors are alike. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Over this many decades of building we find everything: original board subfloors with gaps, early plywood, particleboard that swelled the first time it got wet, and mid-century underlayment nailed over the lot. Each needs a different approach, and none can be judged from the surface. That is why a floor quote here starts with lifting a corner rather than measuring the room — the material above is the cheap part of the decision.',
    ],
    localFaqs: [
      {
        q: 'Why does the subfloor matter so much?',
        a: 'Because it decides what can go on top. Board subfloors with gaps, early plywood and swollen particleboard each need a different approach, and none of it is visible from the surface.',
      },
      {
        q: 'Do you always lift a corner?',
        a: 'Yes, with your agreement. It is the only honest way to give a fixed price rather than a number padded with contingency.',
      },
    ],
  },

  norwood: {
    intro:
      'Bathroom flooring in Norwood? The threshold is where two floors have to agree. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'Where a new bathroom floor meets the hallway is a detail that gets improvised far too often, and it is the one place in the room people trip. The finished heights rarely match, so the transition either steps or ramps — and which it does should be a decision rather than whatever the strip that was in the van allows. Where the hall floor is original hardwood, the junction matters aesthetically too.',
    ],
    localFaqs: [
      {
        q: 'How is the threshold handled?',
        a: 'As a designed detail rather than whatever strip is to hand. The heights rarely match, so it either steps or ramps — and that should be a decision, not an accident.',
      },
      {
        q: 'What if the hall is original hardwood?',
        a: 'Then the junction matters aesthetically as well as physically. We plan where it falls and how the two meet before the floor goes down.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Bathroom flooring in Blue Ash? Doing the floor when the fixtures are out costs far less. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'A floor laid around a toilet and a vanity is a compromise: the tile stops at the fixtures, the cuts are visible, and when either is replaced later there is bare subfloor underneath. Done with the fixtures out, the floor runs wall to wall and everything sits on top of it. If a vanity or toilet is likely to change within a few years, doing the floor at the same time costs far less than doing them separately.',
    ],
    localFaqs: [
      {
        q: 'Can the floor be laid without removing the toilet and vanity?',
        a: 'It can, and it is a compromise — visible cuts and bare subfloor left underneath. Done with them out, the floor runs wall to wall and everything sits on top of it.',
      },
      {
        q: 'Should we replace the vanity at the same time?',
        a: 'If you are likely to want it within a couple of years, yes. Doing both together costs considerably less than doing them a year apart, and we will quote both.',
      },
    ],
  },

  montgomery: {
    intro:
      'Bathroom flooring in Montgomery? Large-format stone asks the most of a floor. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'At this end of the market people choose large-format marble and porcelain, and those are the least forgiving materials there are. They need roughly twice the floor stiffness ceramic does, a genuinely flat plane, an uncoupling membrane and a setting bed troweled to a tolerance most floors never see. All achievable — and the preparation is a substantial share of the cost, which is worth knowing before the tile is chosen rather than after.',
    ],
    localFaqs: [
      {
        q: 'What does large-format stone need?',
        a: 'About twice the floor stiffness ceramic needs, a genuinely flat plane, an uncoupling membrane and a carefully troweled bed. The preparation is a substantial share of the cost.',
      },
      {
        q: 'Is porcelain that imitates stone a fair substitute?',
        a: 'Technically superior in a bathroom — no sealing, no etching, no staining. Whether it satisfies you is a matter of taste, and we will show you both honestly.',
      },
    ],
  },

  madeira: {
    intro:
      'Bathroom flooring in Madeira? Here is how the days actually run. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Households here usually stay in the house, so the shape of the job matters. Day one is protection, fixture removal and taking the old floor back to structure — the dusty, noisy part. Day two is substrate preparation and any levelling, which needs curing time. Day three is setting the tile, and grouting follows after it has set. The bathroom is out of use for most of that, which is the part worth planning around.',
    ],
    localFaqs: [
      {
        q: 'How long is the bathroom out of use?',
        a: 'Typically the best part of three days for a tiled floor — removal, substrate preparation with curing time, then setting and grouting. Luxury vinyl is considerably quicker.',
      },
      {
        q: 'Can we stay in the house?',
        a: 'Yes. The work is contained behind a dust barrier, and only the bathroom is out of use. We give you the schedule before starting.',
      },
    ],
  },

  wyoming: {
    intro:
      'Bathroom flooring in Wyoming? An original tile floor may be worth restoring rather than replacing. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'The bathrooms in these houses frequently have original hexagonal or square mosaic floors laid on a mortar bed, and those beds are more robust than anything installed today. Where the losses are localised, patching with salvaged or matched tile and regrouting produces something no new floor can replicate. It takes patience and it is not always possible — but it is worth assessing properly before the decision is made to lift it.',
    ],
    localFaqs: [
      {
        q: 'Can an original mosaic floor be restored?',
        a: 'Frequently, where the losses are localised and the mortar bed is sound. Patching with matched tile and regrouting produces something that cannot be bought new.',
      },
      {
        q: 'When is replacement the better answer?',
        a: 'When the bed has failed or the losses are widespread. We assess it properly and tell you which rather than defaulting to the bigger job.',
      },
    ],
  },

  mariemont: {
    intro:
      'Bathroom flooring in Mariemont? The Landmark status governs outside — the floor is yours. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Owners here ask whether they are allowed to change a bathroom floor, and the answer is yes — the review that comes with the designation concerns what is visible from outside. What the 1920s construction genuinely affects is beneath: original board subfloors with gaps between them, which need an overlay before tile rather than being tiled directly, and a floor structure worth checking against the tile you have in mind.',
    ],
    localFaqs: [
      {
        q: 'Does the historic designation affect our bathroom floor?',
        a: 'No — the review concerns what is visible from outside. Interior work is yours to decide.',
      },
      {
        q: 'What is under a 1920s Mariemont bathroom floor?',
        a: 'Usually original boards with gaps between them, which need an overlay before tile rather than being tiled directly. We check the structure against the tile you want.',
      },
    ],
  },

  cheviot: {
    intro:
      'Bathroom flooring in Cheviot? A well-laid basic floor beats a fancy one laid badly. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'On this housing the top of the range does not make sense, and we will say so. A mid-priced porcelain on a properly prepared substrate with epoxy grout will outlast expensive stone laid on a floor that flexes — and it costs a fraction. The money that matters is invisible: the subfloor, the flatness, the membrane. That is the same figure whichever tile goes on top of it.',
    ],
    localFaqs: [
      {
        q: 'How much should we spend on a bathroom floor?',
        a: 'Usually the middle of the range on the tile and properly on the preparation. Mid-priced porcelain on a sound substrate outlasts expensive stone on a floor that flexes.',
      },
      {
        q: 'Where does the money actually go?',
        a: 'The subfloor work, the levelling and the uncoupling membrane — none of which shows. That is the same cost whichever tile sits on top.',
      },
    ],
  },

  covedale: {
    intro:
      'Bathroom flooring in Covedale? Plan the floor around the person who will use it longest. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'In a neighbourhood where households stay for decades, the floor is worth choosing for the long run rather than the current moment. A genuinely slip-resistant surface, a level threshold rather than a step, and a floor that will still be sound in twenty years all cost the same to specify now and cannot be retrofitted. None of it looks specialised — it just reads as a well-built room.',
    ],
    localFaqs: [
      {
        q: 'What makes a floor suit us long term?',
        a: 'Genuine slip resistance, a level threshold rather than a step, and a substrate built to last. All cost the same to specify now and none of it looks specialised.',
      },
      {
        q: 'Is a level threshold difficult?',
        a: 'It depends on the height difference and the door. Where it can be done it is worth doing, and where it cannot we will say so rather than promising it.',
      },
    ],
  },

  covington: {
    intro:
      'Bathroom flooring in Covington? Kentucky permitting, and rowhouse floors that have moved. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Two things shape the work here. Permitting and inspection run under Kentucky rules rather than Ohio, which we confirm before scheduling. And rowhouses of this age have settled unevenly, so a bathroom floor is rarely flat or square — which decides tile format, how the setting out is planned, and how much levelling is in the price. We measure rather than assume.',
    ],
    localFaqs: [
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, and we confirm the requirements before scheduling.',
      },
      {
        q: 'Are these old floors level?',
        a: 'Rarely. A century of settlement means most need levelling before tile, and how far out they are decides the format that will lay flat.',
      },
    ],
  },

  newport: {
    intro:
      'Bathroom flooring in Newport? An East Row bathroom is often the smallest room in a tall house. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'These bathrooms were carved out of larger rooms or landings long after the house was built, which leaves floors that are small, rarely square, and sometimes framed differently from the rest of the storey. That last part matters: a retrofitted floor can have shallower joists or an unusual span, and it is worth establishing before a heavy tile floor goes down rather than assuming the house is consistent.',
    ],
    localFaqs: [
      {
        q: 'Is a retrofitted bathroom floor different?',
        a: 'It can be — shallower joists or an unusual span, because the room was carved out later. Worth establishing before a heavy tile floor goes down rather than assuming consistency.',
      },
      {
        q: 'Do out-of-square rooms cause problems?',
        a: 'They make setting out matter more, since a tile grid will show the taper against a wall. We plan where that falls rather than discovering it at the last row.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Bathroom flooring in Bellevue? Under the vinyl there may be a mortar-bed floor. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Bathrooms in these houses often have their original tile set in a thick mortar bed — a construction more robust than anything laid today, and considerably heavier. Removing it is a real job rather than a scrape, and it changes the floor height substantially once gone. Both facts belong in the quote from the start, and both are reasons to establish whether the original floor is worth keeping before committing to lifting it.',
    ],
    localFaqs: [
      {
        q: 'What is under our old bathroom floor?',
        a: 'In houses of this age, frequently original tile in a thick mortar bed — more robust than anything laid today and considerably heavier to remove. It changes both the cost and the finished height.',
      },
      {
        q: 'Is it worth keeping?',
        a: 'Sometimes genuinely, where it is sound. We assess that before committing to removing it, because it cannot be put back.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Bathroom flooring in Fort Thomas? Hard water marks a stone floor faster than a tiled one. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Where water is hard, the drips that land on a bathroom floor leave mineral deposit — and on a polished stone or a light unsealed grout that becomes a visible film. Porcelain and epoxy grout shrug it off; marble and cement grout do not. It is a small factor and it is the sort of thing nobody mentions until someone is scrubbing a floor that looked perfect in a showroom.',
    ],
    localFaqs: [
      {
        q: 'Does hard water affect a bathroom floor?',
        a: 'It leaves mineral film where drips land, and that shows most on polished stone and light cement grout. Porcelain and epoxy grout largely shrug it off.',
      },
      {
        q: 'Can it be cleaned off?',
        a: 'From porcelain, easily. From stone it needs care, because the acidic descalers that remove it are exactly what etches the surface.',
      },
    ],
  },

  florence: {
    intro:
      'Bathroom flooring in Florence? Builder-grade vinyl over particleboard is a common find. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'A great many homes here were built with sheet vinyl over a particleboard underlayment, and particleboard has one behaviour that matters: it swells irreversibly the first time it gets wet and never recovers. Around a toilet or a tub edge that has weeped, it is often crumbling by the time anyone lifts the vinyl. It has to come out rather than be tiled over, and that is far better established at quotation than at demolition.',
    ],
    localFaqs: [
      {
        q: 'What is particleboard underlayment and why does it matter?',
        a: 'It is a common builder-grade layer under sheet vinyl, and it swells irreversibly once wet. Around a toilet or tub edge it is often crumbling, and it has to come out rather than be tiled over.',
      },
      {
        q: 'How do you know before lifting the floor?',
        a: 'Soft spots underfoot and staining around fixtures are the tell. We lift a corner to confirm rather than pricing on a guess.',
      },
    ],
  },

  erlanger: {
    intro:
      'Bathroom flooring in Erlanger? A heated floor needs its thermostat probe placed properly. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Underfloor heating fails in one predictable way: the temperature probe ends up in the wrong place. Sitting too close to a heating cable it reads high and the floor never warms; sitting under a vanity or in a doorway it reads cold and the system overruns. It goes midway between two cable runs, in a conduit so it can be replaced without lifting tile. That last part is the detail almost nobody includes.',
    ],
    localFaqs: [
      {
        q: 'Why do some heated floors never feel warm?',
        a: 'Usually the thermostat probe is in the wrong place — too close to a cable reads high and the floor never warms. It belongs midway between two runs.',
      },
      {
        q: 'What if the probe fails later?',
        a: 'If it was installed in a conduit, it pulls out and a new one goes in. Without one, it means lifting tile — which is why we fit the conduit as standard.',
      },
    ],
  },

  mason: {
    intro:
      'Bathroom flooring in Mason? Newer houses make this predictable, which keeps it affordable. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'This is the easiest housing we work in. Floor structure is modern and engineered to known standards, subfloor is plywood or OSB rather than boards or particleboard, and there is rarely more than one covering to remove. That removes most of the unknowns that add cost elsewhere — so more of the budget goes into the tile and the finish rather than into preparing a floor to accept it.',
    ],
    localFaqs: [
      {
        q: 'Is a newer house simpler to floor?',
        a: 'Considerably. Modern floor structure, plywood or OSB subfloor and usually only one covering to remove — which takes most of the unknowns and most of the preparation cost out.',
      },
      {
        q: 'Do these floors still need levelling?',
        a: 'Less often, though large-format tile is unforgiving enough that we still check with a straightedge rather than assuming.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Bathroom flooring in West Chester? Replacing a builder floor is the cheapest visible upgrade there is. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'The sheet vinyl or basic tile that came with these houses is usually sound and always dates the room — which is exactly why people put off replacing it. Of everything in a bathroom, the floor gives the largest visible change for the smallest outlay, and in this housing there is rarely anything wrong underneath to fix first. It is the change we recommend most often here.',
    ],
    localFaqs: [
      {
        q: 'Is it worth replacing a floor that is not damaged?',
        a: 'It is the largest visible change for the smallest outlay in a bathroom, and in this housing there is rarely anything underneath to fix first. That combination is why we recommend it most often here.',
      },
      {
        q: 'Will it look odd against a dated vanity?',
        a: 'Sometimes, and we will say so honestly at the site visit rather than after. Where it would, doing both together is often a modest addition.',
      },
    ],
  },

  pendleton: {
    intro:
      'Bathroom flooring in Pendleton? A loft floor and a heavy tile floor need checking together. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'Loft conversions sit on heavy timber specified for warehouse loading, which sounds reassuring for a tile floor — and the decking between beams, plus whatever was done during conversion, is less predictable. Deflection over a long span is what cracks tile, and it is worth establishing rather than assuming the structure is generous. Most buildings here will also want to see what is proposed before it goes in.',
    ],
    localFaqs: [
      {
        q: 'Can a converted loft floor take tile?',
        a: 'Usually, though the decking between the original beams and any conversion alterations are less predictable than the beams themselves. Deflection over a long span is what cracks tile.',
      },
      {
        q: 'Do we need board approval?',
        a: 'In most converted buildings here, yes — particularly where sound transmission between units is written into the rules. We check what your association requires.',
      },
    ],
  },

  queensgate: {
    intro:
      'Bathroom flooring in Queensgate? Mostly a working district — the honest answer. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers, and Queensgate is a working district more than a residential one — so we set the expectation plainly. Where there is a residence here, typically a live-work or converted space, we do the same work we do anywhere: the same fixed price, the same in-house installers, the same warranty. Commercial flooring carries requirements we are not set up for, and we say so on the phone rather than after a visit.',
    ],
    localFaqs: [
      {
        q: 'Do you actually work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here.',
      },
      {
        q: 'Can you do commercial flooring?',
        a: 'No. Commercial work carries slip and durability requirements we are not set up for, and we would rather say so than take it on.',
      },
    ],
  },

  cuf: {
    intro:
      'Bathroom flooring in CUF? In a shared house the floor takes the most abuse in the building. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'A bathroom floor shared by four or five people never fully dries, gets no maintenance, and is the component landlords replace most often. What survives is porcelain rather than soft stone, epoxy grout rather than cement, and a floor bonded to a sound substrate rather than laid over whatever was there. Each costs more once and considerably less across a decade of tenancies.',
    ],
    localFaqs: [
      {
        q: 'What flooring survives a shared student house?',
        a: 'Porcelain rather than soft stone, epoxy grout rather than cement, and a properly bonded substrate. Each costs more once and far less across a decade of tenancies.',
      },
      {
        q: 'Can several units be done together?',
        a: 'Yes, and it is cheaper per unit. A single specification across the building also means any future repair uses materials you already have.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Bathroom flooring in Camp Washington? Old board subfloors need an overlay before tile. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The cottages here have original plank subfloors, and individual boards move independently with humidity — which is exactly what a rigid tile floor cannot tolerate. Tiling directly onto boards is a guaranteed crack. They need an overlay of plywood or cement board that ties the boards together into one plane first. It is an unglamorous layer, it adds height that has to be planned for, and it is not optional.',
    ],
    localFaqs: [
      {
        q: 'Can tile go straight onto old floorboards?',
        a: 'No — individual boards move independently with humidity, and rigid tile cannot tolerate that. They need an overlay tying them into one plane first.',
      },
      {
        q: 'Does that raise the floor?',
        a: 'Yes, which is why the door clearance and the toilet flange are planned around it rather than dealt with afterwards.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Bathroom flooring in South Fairmount? On low ground, moisture can come from underneath. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'Most bathroom flooring problems come from above. On low valley ground with a ground-floor bathroom over a slab or a damp crawl space, they can come from below — vapour moving up through concrete will lift adhesives and can push a vinyl floor loose over years. Where that is a possibility, the floor gets a vapour-tolerant assembly rather than a standard one, and it is worth checking before choosing a covering.',
    ],
    localFaqs: [
      {
        q: 'Can moisture come up through the floor?',
        a: 'Through a slab or over a damp crawl space, yes — vapour moving upward lifts adhesives and can loosen a floor over years. On low ground it is worth checking before choosing a covering.',
      },
      {
        q: 'What is different about the installation then?',
        a: 'A vapour-tolerant assembly rather than a standard one, and sometimes addressing the crawl space itself. We will tell you which applies.',
      },
    ],
  },

  'east-end': {
    intro:
      'Bathroom flooring in the East End? A rear addition floor is usually the lightest in the house. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'In these cottages the bathroom is nearly always a later addition on the back, framed lighter than the original house and sometimes on a shallower foundation. Tile is unforgiving of deflection, so that is exactly the structure worth checking before committing to it — and where the floor cannot be stiffened enough, luxury vinyl is the honest answer rather than tile that will crack.',
    ],
    localFaqs: [
      {
        q: 'Can a rear addition take a tile floor?',
        a: 'Often, with the structure checked and frequently stiffened first. These additions were framed lighter than the main house, and tile is unforgiving of deflection.',
      },
      {
        q: 'What if it cannot be stiffened enough?',
        a: 'Then luxury vinyl is the honest answer — it tolerates movement that would crack tile. We would rather recommend that than fit something destined to fail.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Bathroom flooring in North Fairmount? Sheet vinyl done well is not a compromise. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'Modern sheet vinyl gets dismissed and it should not be. In one continuous piece with heat-welded seams it is the most genuinely waterproof floor available — no joints at all, which is more than tile with grout can claim. It is warmer underfoot, far cheaper, and forgiving of a floor that is not perfectly flat. In a lot of houses here it is the sensible choice and the money is better spent on the subfloor beneath it.',
    ],
    localFaqs: [
      {
        q: 'Is sheet vinyl a poor choice?',
        a: 'Not at all. Laid in one piece with welded seams it is more genuinely waterproof than tile with grout, warmer underfoot and far cheaper. In many houses here it is the sensible option.',
      },
      {
        q: 'Where should the money go instead?',
        a: 'The subfloor. A sound, flat base under an inexpensive covering outlasts an expensive covering over a poor one.',
      },
    ],
  },

  evanston: {
    intro:
      'Bathroom flooring in Evanston? A floor that runs under the vanity is the one that lasts. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'Cutting a floor around a vanity saves an hour and costs you later — the tile stops at the cabinet, so when that vanity is replaced with anything a different size, there is bare subfloor showing. Running the floor wall to wall with the fixtures out means every future change is straightforward. In a rental where fittings get replaced on a cycle, that is worth more than the hour it saves.',
    ],
    localFaqs: [
      {
        q: 'Should the floor run under the vanity?',
        a: 'Yes — otherwise replacing that vanity later with anything a different size leaves bare subfloor showing. In a rental where fittings change on a cycle, it matters more still.',
      },
      {
        q: 'Does that add much to the job?',
        a: 'An hour or two for removal and refit, and it is the difference between a floor you can build on and one you have to work around.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Bathroom flooring in South Cumminsville? Over a slab, moisture testing comes before adhesive. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Where a ground-floor bathroom sits on a concrete slab, vapour moving up through that slab is what lifts adhesive and loosens floors over years — and older slabs frequently have no vapour barrier under them at all. It is testable rather than guessable, and where the reading is high the answer is a moisture-tolerant assembly rather than hoping. That is cheaper than laying a floor twice.',
    ],
    localFaqs: [
      {
        q: 'Can a concrete slab cause a floor to fail?',
        a: 'Vapour moving up through it lifts adhesive over years, and older slabs often have no barrier beneath. It is testable rather than guessable, and worth testing on a ground-floor bathroom.',
      },
      {
        q: 'What if the reading is high?',
        a: 'A moisture-tolerant assembly rather than a standard one — a membrane or a floating floor. It costs more than hoping and far less than laying it twice.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Bathroom flooring in English Woods? Slip resistance matters more than any other property. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Of everything a bathroom floor does, not being slippery when wet is the one that matters most and gets the least attention. Wet slip resistance is a published figure, and plenty of attractive tiles fall below what a bathroom should have — polished porcelain especially. A textured surface, a smaller format with more grout lines, or a matt finish all help, and none of them has to look institutional.',
    ],
    localFaqs: [
      {
        q: 'How do we know a floor will not be slippery?',
        a: 'Wet slip resistance is a published figure for most tiles, and we will tell you what the one you like actually scores. Polished porcelain is the finish that most often falls short.',
      },
      {
        q: 'Does a safer floor have to look worse?',
        a: 'No. Textured porcelains have come a long way, and a smaller format with more grout lines helps too. It is the highly polished finishes to avoid, not character.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Bathroom flooring in North Avondale? A big bathroom shows setting-out mistakes plainly. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'In a small bathroom a slightly off layout hides. In one of the large ones here it does not — a grid running out of square against a wall is visible across the whole floor, and a border or feature pattern makes every alignment decision permanent. These floors are worth dry-laying and marking out fully before a single tile is fixed, which takes an extra half day and is the difference between good work and merely competent work.',
    ],
    localFaqs: [
      {
        q: 'Does room size change how the floor is laid out?',
        a: 'Considerably. In a large room a grid running out of square is visible across the whole floor, and a border makes every alignment permanent. We dry-lay and mark out fully first.',
      },
      {
        q: 'Can we have a border or pattern?',
        a: 'In a room this size, yes — and it suits the period. It has to be set out completely before anything is fixed, which is an extra half day well spent.',
      },
    ],
  },

  millvale: {
    intro:
      'Bathroom flooring in Millvale? In a tiny bathroom the door clearance decides the build-up. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'In a compact bathroom every constraint is tighter, and the one that catches people is the door. A tile assembly — overlay, membrane, setting bed, tile — can add the best part of an inch, and an inward-opening door with little clearance will not survive that. Either the door gets undercut, or a thinner assembly is chosen. Deciding which before the floor goes down is straightforward; discovering it afterwards is not.',
    ],
    localFaqs: [
      {
        q: 'Will a new floor stop the door opening?',
        a: 'A full tile assembly can add close to an inch, which an inward-opening door may not clear. We measure the gap before choosing the assembly rather than after.',
      },
      {
        q: 'What are the options if clearance is tight?',
        a: 'Undercutting the door, or a thinner assembly — luxury vinyl over a thin underlayment adds very little. We will show you both.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Bathroom flooring in Paddock Hills? A mid-century floor may be worth keeping. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Mid-century bathrooms used colour and geometric pattern with a confidence that has come back around, and an original floor in sound condition is something you cannot buy new. Where the tile is intact and only the grout has aged, regrouting produces a floor with genuine character for a fraction of replacement. We assess that honestly rather than assuming everything old should go.',
    ],
    localFaqs: [
      {
        q: 'Is an original mid-century floor worth keeping?',
        a: 'Where the tile is sound and only the grout has aged, frequently — regrouting gives you a floor with real character for a fraction of replacement, and that pattern cannot be bought new.',
      },
      {
        q: 'Can old grout be replaced without damaging the tile?',
        a: 'Usually, with the right tools and patience. It is slower than laying new and it is often the better outcome.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Bathroom flooring in Spring Grove Village? Curing time is not optional and cannot be rushed. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'The single most common cause of a tiled floor failing early is somebody walking on it too soon. Thinset needs time to cure before grouting, grout needs time before the room is used, and both slow down in a cold or damp house. A crew under schedule pressure grouts early and the bond never fully develops. We schedule the curing time rather than compressing it, which is part of why a tile floor is a three-day job.',
    ],
    localFaqs: [
      {
        q: 'Why does a tile floor take three days?',
        a: 'Because thinset has to cure before grouting and grout before use, and both slow down in a cold or damp house. Compressing that is the most common cause of early failure.',
      },
      {
        q: 'Can it be sped up?',
        a: 'Rapid-set products exist and we use them where a schedule genuinely requires it. What we will not do is grout over thinset that has not set.',
      },
    ],
  },

  linwood: {
    intro:
      'Bathroom flooring in Linwood? Where the floor meets the wall is a joint, not a fill. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'The perimeter of a tiled floor has to be able to move — the floor expands and contracts, the walls do not do so in step, and a rigid grouted joint at the edge is where cracking starts. That gap gets filled with a flexible sealant and covered by the baseboard, not packed with grout. It is invisible when done and it is one of the more common reasons a floor cracks in a straight line near a wall.',
    ],
    localFaqs: [
      {
        q: 'Why is there a gap at the edge of a tiled floor?',
        a: 'Because the floor moves and the walls do not move with it. That perimeter gap takes flexible sealant and hides behind the baseboard — grouted rigidly, it is where cracking starts.',
      },
      {
        q: 'Would we ever see it?',
        a: 'No — it sits under the baseboard. It is one of those details that only shows when it was left out.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Bathroom flooring in Bond Hill? Keep a few spare tiles from the same batch. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'Tile is produced in batches, and colour varies between them enough to notice. A cracked tile in year six is a twenty-minute repair if there are spares from the original batch and a visible patch if there are not — because the same product number will no longer match. We leave the offcuts and a few full tiles with you, labelled, and it is worth putting them somewhere you will find them.',
    ],
    localFaqs: [
      {
        q: 'Should we keep spare tiles?',
        a: 'Yes, and a few full ones rather than just offcuts. Tile colour varies between production batches, so the same product number in year six will not match. We leave them labelled.',
      },
      {
        q: 'Can a single cracked tile be replaced?',
        a: 'Cleanly, where you have matching spares — it is a short job. Without them it is a visible patch, which is the whole reason for keeping them.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Bathroom flooring in Villages of Roll Hill? Mostly apartments, so this goes through the owner. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'Being straight about this: in a community of rented apartments, flooring is commissioned by the owner or management company rather than the resident. If you rent here and the bathroom floor needs work, the route is your landlord — and we are happy to speak to them. For owners, a single durable specification across a building is both cheaper per unit and far simpler when a repair is needed years later.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can I have the floor replaced?',
        a: 'It has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'We manage the building — can units be done together?',
        a: 'Yes, and it is cheaper per unit. A single specification also means a repair years later uses materials you already hold.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Bathroom flooring in East Westwood? Sometimes only the damaged section needs replacing. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'Where a floor has failed in one area — soft subfloor at the toilet, a section lifted by a past leak — the honest question is whether the whole floor needs to go. Sometimes the subfloor can be cut back to sound material and patched, with the covering replaced only over that zone. It is a genuine option on sheet vinyl and rarely satisfying on tile, and we will tell you which situation you are in.',
    ],
    localFaqs: [
      {
        q: 'Can just the damaged part of a floor be replaced?',
        a: 'The subfloor can be cut back to sound material and patched. Whether the covering can be patched invisibly depends — sheet vinyl rarely, tile only where you have matching spares.',
      },
      {
        q: 'When is a full replacement the right call?',
        a: 'When the damage is widespread, when there are no matching materials, or when the patch would be more visible than a new floor. We will say which honestly.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Bathroom flooring in Western Hills? A soft spot at the toilet is the usual reason people call. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'A floor that gives underfoot near the toilet is almost always a wax seal that failed years ago, quietly wetting the subfloor every flush. By the time it is felt, the plywood beneath has delaminated and sometimes the joist ends have gone too. It is a repair rather than a disaster — but it has to be cut back to sound material, and pricing a new floor without checking for it is how a fixed quote stops being fixed.',
    ],
    localFaqs: [
      {
        q: 'The floor feels soft near the toilet — what is that?',
        a: 'Almost always a wax seal that failed years ago, wetting the subfloor every flush. By the time it is felt the plywood has delaminated and sometimes the joist ends too.',
      },
      {
        q: 'How much has to come out?',
        a: 'Back to sound material, which is usually a manageable area. We check for it before quoting rather than finding it once the floor is up.',
      },
    ],
  },

  california: {
    intro:
      'Bathroom flooring in California? On low ground, build the floor to be dried out. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'In a house that has taken water before, the useful question is not whether a floor is waterproof but whether it can be dried and salvaged. Tile over a bonded membrane on a cement-based substrate can be dried and reused; a floating floor over a wood underlayment usually cannot. That distinction costs nothing to consider at specification and decides whether a future event is a clean-up or a replacement.',
    ],
    localFaqs: [
      {
        q: 'What flooring survives if the house takes water?',
        a: 'Tile over a bonded membrane on a cement-based substrate can generally be dried and salvaged. Floating floors over wood underlayment usually cannot, whatever the surface claims.',
      },
      {
        q: 'Is that worth the extra?',
        a: 'On ground with a history, we think so — it is the difference between a clean-up and a replacement. We will lay out the cost either way.',
      },
    ],
  },

  carthage: {
    intro:
      'Bathroom flooring in Carthage? Replacing the floor alone is a real project, not a compromise. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Where a bathroom is dated but sound, the floor on its own changes the room more than its cost suggests — it is the largest continuous surface in there and the one that shows age first. Nothing else has to be touched, the plumbing stays where it is, and the job is short. Where a household wants the biggest visible improvement for the smallest outlay, this is frequently our recommendation over a full remodel.',
    ],
    localFaqs: [
      {
        q: 'Is replacing just the floor worthwhile?',
        a: 'It is the largest continuous surface in the room and the one that shows age first, so it changes the space more than the cost suggests. Nothing else has to be touched.',
      },
      {
        q: 'Will it show up the rest of the room?',
        a: 'Sometimes, and we will say so at the site visit rather than after. Where it would, doing the vanity at the same time is often a modest addition.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Bathroom flooring in Winton Hills? Three things decide whether a floor lasts. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'A floor lasts or fails on the subfloor being sound and stiff, the surface being genuinely flat, and the assembly being able to absorb movement. None of those is the covering. Get all three right with mid-priced porcelain and you have a floor for twenty years; get them wrong under expensive stone and you have cracks in two. It is worth asking any contractor about those specifically, because they are invisible afterwards.',
    ],
    localFaqs: [
      {
        q: 'What decides how long a bathroom floor lasts?',
        a: 'A sound, stiff subfloor, a genuinely flat surface and an assembly that can absorb movement. None of those is the covering, and all three are invisible once finished.',
      },
      {
        q: 'How do we compare quotes?',
        a: 'Ask about those three specifically — subfloor work, levelling and whether an uncoupling membrane is included. That is usually where a lower number comes from.',
      },
    ],
  },

  roselawn: {
    intro:
      'Bathroom flooring in Roselawn? Mid-century plywood is the easiest subfloor we find. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'Houses of this era generally have a plywood subfloor rather than individual boards, which makes them considerably simpler to floor than the older neighbourhoods — plywood is already one plane, so there is no overlay needed to tie boards together. Where it has stayed dry it usually needs nothing but cleaning and priming. That takes a whole layer of cost and height out of the job.',
    ],
    localFaqs: [
      {
        q: 'Is a mid-century subfloor easier to work with?',
        a: 'Considerably. Plywood is already one plane, so there is no overlay needed to tie individual boards together — which removes a layer of both cost and height.',
      },
      {
        q: 'Does it still need checking?',
        a: 'Yes, particularly around the toilet and tub where past leaks delaminate it. But where it has stayed dry it usually needs only cleaning and priming.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Bathroom flooring in Mount Airy? A split-level bathroom has a shallow floor to work with. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'The terrain produced a lot of split-levels, and a split-level bathroom sits on a half-storey where the floor void is shallow and the joists sometimes span differently from the main floors. For flooring that matters twice: less room to build up the assembly before the door catches, and a span worth confirming before committing to heavy tile. Both get checked rather than assumed.',
    ],
    localFaqs: [
      {
        q: 'Does a split-level affect the floor?',
        a: 'It can — the void is shallow, so there is less room to build up before the door catches, and the joist span sometimes differs from the main floors. Both get checked.',
      },
      {
        q: 'What if the assembly cannot be that thick?',
        a: 'A thinner build-up or luxury vinyl solves it. We would rather choose the right assembly than force tile into a space that will not take it.',
      },
    ],
  },

  hartwell: {
    intro:
      'Bathroom flooring in Hartwell? Around a clawfoot, the floor is fully exposed. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'A freestanding tub has no apron, which means the floor beneath and around it is visible, walked on wet, and doing work a floor under a built-in tub never has to do. It has to be finished continuously beneath the tub rather than stopped at the feet, it wants genuine slip resistance where people step out, and the sealing at the perimeter matters more because water reaches it. Those are design decisions rather than afterthoughts.',
    ],
    localFaqs: [
      {
        q: 'Does the floor run under a clawfoot tub?',
        a: 'It should — finished continuously beneath rather than stopped at the feet. The floor around a freestanding tub is visible, walked on wet, and doing work a floor under a built-in never has to.',
      },
      {
        q: 'Does that mean moving the tub?',
        a: 'Yes, and it is worth it. A floor cut around tub feet looks like exactly what it is.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Bathroom flooring in Kennedy Heights? Match the floor to the house, not the current trend. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'A very contemporary large-format grey floor in a Victorian bathroom reads as an imposition, and it will read as dated far sooner than something that suits the house. Hexagonal mosaic, small square tile, a simple border — those have looked right in these rooms for a century and will keep doing so. It is not about being reverent; it is that period-appropriate choices in an old house age better than fashionable ones.',
    ],
    localFaqs: [
      {
        q: 'Does a period house need a period floor?',
        a: 'Not strictly, but choices that suit the house age better than fashionable ones. Hexagonal mosaic and small square tile have looked right in these rooms for a century.',
      },
      {
        q: 'Can we do something modern?',
        a: 'Of course, and we will tell you honestly how we think it will sit in the room. That is a conversation worth having before the tile is ordered.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Bathroom flooring in St. Bernard? The village inspects, and floors are part of it. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'A flooring job on its own often needs no permit, but the moment the toilet is pulled and reset — which any proper floor requires — the plumbing has been disturbed, and whether that is inspectable depends on the jurisdiction. Here that is the City of St. Bernard rather than Cincinnati, whatever the postal address suggests. We confirm what is required before scheduling rather than assuming.',
    ],
    localFaqs: [
      {
        q: 'Does a floor replacement need a permit?',
        a: 'Often not on its own, but resetting the toilet means the plumbing has been disturbed and requirements vary by jurisdiction. We confirm before scheduling.',
      },
      {
        q: 'Who issues permits here?',
        a: 'The City of St. Bernard — it is a separate municipality even though Cincinnati surrounds it entirely.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Bathroom flooring in Elmwood Place? A small floor is a short job and a modest cost. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Bathrooms in these houses are small, and for flooring that is genuinely good news — material cost scales with area, so a quality tile that would be expensive across a large room is affordable across this one. The labour is dominated by the preparation rather than the laying. It means the sensible advice here is to buy a better covering than you would elsewhere, because the difference in total cost is small.',
    ],
    localFaqs: [
      {
        q: 'Is a small bathroom cheaper to floor?',
        a: 'Materially, yes — cost scales with area. The labour is dominated by preparation rather than laying, which means a better tile costs surprisingly little more overall.',
      },
      {
        q: 'So should we buy a better tile?',
        a: 'In a room this size, usually. The difference in total cost is small enough that it is worth going up a grade.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Bathroom flooring in Delhi Hills? A lower-level bathroom sits on concrete. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope frequently have a lower-level bathroom on a slab, and that is a different job from an upstairs one: no deflection worries, but slab moisture to test for and an uncoupling membrane needed because concrete cracks as it moves. It also runs colder than a floor over a heated space, which makes a heated mat worth more here than almost anywhere else in the house.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level bathroom floor different?',
        a: 'Yes — no deflection worries on a slab, but slab moisture to test for and an uncoupling membrane needed because concrete cracks as it moves.',
      },
      {
        q: 'Is a heated floor worth it downstairs?',
        a: 'More than almost anywhere else. A slab runs colder than a floor over a heated space, and tile conducts that straight to your feet.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Bathroom flooring in Golf Manor? The village permits work here, not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Being an incorporated village entirely surrounded by the city catches people out on any permitted work, and resetting a toilet as part of a floor replacement can bring the job into scope depending on requirements. That runs through Golf Manor rather than the city your postal address suggests, and we confirm it before scheduling. The housing itself is straightforward mid-century plywood subfloor.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm requirements before scheduling.',
      },
      {
        q: 'What is under a typical floor here?',
        a: 'Usually plywood subfloor, which is the easiest case — already one plane, so no overlay needed to tie boards together.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Bathroom flooring in Fairfax? Tiling over an existing tile floor is rarely a good idea. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'It is technically possible and it is usually the wrong call. You inherit whatever is wrong with the floor underneath, you add the best part of an inch to the height, and if the old tile ever debonds it takes the new one with it. The exception is a sound, well-bonded floor where the height genuinely works — and we will tell you when that is the case rather than defaulting to the easier job.',
    ],
    localFaqs: [
      {
        q: 'Can we tile over the existing tile?',
        a: 'Technically yes and usually unwise — you inherit whatever is wrong underneath, add close to an inch of height, and if the old tile debonds it takes the new with it.',
      },
      {
        q: 'When would you agree to it?',
        a: 'Where the existing floor is genuinely sound and well bonded and the height works out. It is a real option occasionally, not a default.',
      },
    ],
  },

  mack: {
    intro:
      'Bathroom flooring in Mack? With one bathroom, the schedule matters more than the tile. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'A tiled floor takes the bathroom out of use for the best part of three days because curing time cannot be compressed. In a house with one bathroom that is a genuine consideration, and it is the main reason we ask about it before recommending a material — a quality luxury vinyl is down and usable the same day. Neither is the right answer universally; which suits depends on your household rather than on the product.',
    ],
    localFaqs: [
      {
        q: 'How long is the bathroom unusable?',
        a: 'The best part of three days for tile, because curing time cannot be compressed. Luxury vinyl is usable the same day, which matters a great deal in a one-bathroom house.',
      },
      {
        q: 'Can the toilet be refitted overnight?',
        a: 'Sometimes, depending on where the setting has got to. We will tell you honestly rather than promising it and then not managing it.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Bathroom flooring in Monfort Heights? Upstairs over a living room, the whole floor should be sealed. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Most of these houses put the bathroom on the second floor over living space, and a floor that only resists water inside the shower leaves the rest unprotected — which is where an overflowing basin, a failed supply line or a leaking toilet actually happens. A bonded membrane across the whole floor and up the wall base turns those into a mopping job. It is modest while the floor is open and impossible later.',
    ],
    localFaqs: [
      {
        q: 'Should the whole bathroom floor be waterproofed?',
        a: 'Over a living room, we would say yes. Most water incidents are an overflowing basin or a failing supply line rather than the shower, and those happen outside the waterproofed zone.',
      },
      {
        q: 'How much does that add?',
        a: 'A modest amount while the floor is already open, and it cannot be added later without lifting everything again.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Bathroom flooring in Bridgetown? How much cleaning you sign up for is a choice. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Grout is where tiled floors earn their reputation for upkeep, and how much you live with is decided at specification. A larger format means fewer joints. Epoxy grout resists staining and needs no resealing. A mid-tone hides marks that a very light one shows within a year. Each step costs a little more once and saves a recurring job for two decades — worth deciding before the tile is chosen rather than at the first deep clean.',
    ],
    localFaqs: [
      {
        q: 'How do we get a floor that needs less cleaning?',
        a: 'Fewer joints and better grout — a larger format, epoxy grout that resists staining and needs no resealing, and a mid-tone that hides marks a light colour shows.',
      },
      {
        q: 'Does epoxy grout look different?',
        a: 'Slightly, and most people cannot tell. What they do notice is that it still looks the same in five years.',
      },
    ],
  },

  finneytown: {
    intro:
      'Bathroom flooring in Finneytown? Here is what actually happens across the three days. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth setting out plainly. Day one: protection, dust barrier, toilet and vanity out, old floor back to structure, subfloor assessed. Day two: repairs, overlay or levelling as needed, and curing time. Day three: membrane, setting the tile, then grout once it has set, and fixtures back with a new wax seal and the flange corrected for the new height. We give you that schedule before we start rather than as it unfolds.',
    ],
    localFaqs: [
      {
        q: 'What happens on each day?',
        a: 'Day one is protection, fixture removal and taking the floor back to structure. Day two is repairs, levelling and curing. Day three is the membrane, tiling, grouting and refitting fixtures with a corrected flange.',
      },
      {
        q: 'Is the toilet refitted the same day?',
        a: 'Once the floor has set enough to take it, yes — with a new wax seal and the flange corrected for the new height. That last part is what most jobs get wrong.',
      },
    ],
  },

  amberley: {
    intro:
      'Bathroom flooring in Amberley Village? A large floor is where radiant heat pays off. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'In a small bathroom a heated mat is a pleasant extra. In a large primary bathroom it is the only thing that makes a big expanse of tile comfortable — and at that size it can genuinely serve as the room’s primary heat rather than a supplement. That changes the specification: full coverage rather than a strip by the vanity, correct output for the area, and a thermostat with a floor probe and a room sensor.',
    ],
    localFaqs: [
      {
        q: 'Can underfloor heating heat the whole bathroom?',
        a: 'In a large room with full coverage and the right output, frequently yes — rather than just taking the chill off. That is a different specification from a mat by the vanity.',
      },
      {
        q: 'Does full coverage cost much more?',
        a: 'The mat scales with area, but the labour barely changes since the floor is open anyway. It is usually worth doing properly rather than partially.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Bathroom flooring in Arlington Heights? A little preparation makes the visit worth more. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Since we travel to reach the valley villages, it helps to make the visit count. Clearing the bathroom and any access below it lets us assess the subfloor the same day. A rough build date matters, since it decides whether asbestos testing should be recommended. And if there is any soft spot underfoot or history of a leak, saying so up front means we look in the right place rather than needing a second trip.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the visit?',
        a: 'Access to the bathroom and below it, a rough build date, and any history of leaks or soft spots. That is usually enough for a fixed price the same day.',
      },
      {
        q: 'Will you lift part of the floor?',
        a: 'A corner, with your agreement. It is the only honest way to price a floor rather than padding the number with contingency.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Bathroom flooring in North College Hill? A tile floor is louder for whoever is below. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'Swapping vinyl or carpet for tile makes a bathroom noticeably noisier in the room beneath — hard surfaces transmit footfall in a way soft ones do not, and in a bathroom used early in the morning that is felt. An acoustic uncoupling layer under the tile addresses both sound and crack isolation at once, which makes it worth specifying rather than treating as an optional extra.',
    ],
    localFaqs: [
      {
        q: 'Will a tile floor be noisy downstairs?',
        a: 'Noticeably more than vinyl or carpet — hard surfaces transmit footfall. An acoustic uncoupling layer handles both that and crack isolation at once.',
      },
      {
        q: 'Is that worth the extra?',
        a: 'Where a bedroom sits below the bathroom, we think so. It is doing two jobs for one cost.',
      },
    ],
  },

  newtown: {
    intro:
      'Bathroom flooring in Newtown? Over a crawl space, insulate before you tile. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'A bathroom over a crawl space has the coldest floor in the house, and tile makes it colder still. The crawl is also where moisture comes from on low river ground. Insulating between the joists and addressing the crawl’s ground cover are both accessible from below and both do more for that floor than any surface choice — and they are far easier before the new floor goes down.',
    ],
    localFaqs: [
      {
        q: 'Why is a floor over a crawl space so cold?',
        a: 'Nothing insulates it and tile conducts. Insulating between the joists from below does more than any surface choice, and on low ground it is worth addressing the crawl’s moisture too.',
      },
      {
        q: 'Can that be done afterwards?',
        a: 'From below, yes — but it is far easier alongside the floor work, when we are already looking at the structure.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Bathroom flooring in Turpin Hills? Continuing the floor into the closet is cheap while you are there. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Where a bathroom opens onto a linen closet or a small dressing area, running the same floor through both is a modest addition while the material is on site and the crew is there — and it makes the space read as larger than stopping at a threshold does. It is one of the few things in a bathroom that costs very little and cannot sensibly be done later.',
    ],
    localFaqs: [
      {
        q: 'Should the floor continue into the closet?',
        a: 'Where they adjoin, it is a modest addition while the material is on site — and a continuous floor makes the space read larger than stopping at a threshold.',
      },
      {
        q: 'Can it be added later?',
        a: 'Not sensibly. Matching a batch years later is difficult, and you would end up with a visible line anyway.',
      },
    ],
  },

  silverton: {
    intro:
      'Bathroom flooring in Silverton? The baseboard is part of the floor detail. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'How a floor meets the wall decides how finished the room looks, and there are three honest options: a tiled skirting for a fully wipeable perimeter, the existing timber baseboard refitted over the new floor, or new baseboard scribed to it. What does not work is leaving the old baseboard in place and butting the floor against it with a bead of caulk — which is what happens when the detail is not decided in advance.',
    ],
    localFaqs: [
      {
        q: 'What happens at the baseboard?',
        a: 'Either a tiled skirting, the existing baseboard refitted over the new floor, or new baseboard scribed to it. What we avoid is butting the floor against old baseboard and caulking the gap.',
      },
      {
        q: 'Is a tiled skirting worth it?',
        a: 'In a bathroom it gives a fully wipeable perimeter with no timber to swell. It suits some rooms and not others, and we will show you both.',
      },
    ],
  },

  lockland: {
    intro:
      'Bathroom flooring in Lockland? Three floors under one is common in these cottages. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'These bathrooms have typically been redone twice with each covering laid over the last — vinyl over hardboard over the original boards. That is why the door catches and the toilet sits low, and it is also why the age of the deepest layer matters: nine-inch tiles or black mastic near the bottom of that stack put asbestos testing on the table before anything is disturbed.',
    ],
    localFaqs: [
      {
        q: 'Why is our floor so much higher than the hall?',
        a: 'Layers — each renovation added a covering rather than removing one. Taking it back to structure usually recovers an inch or more and fixes the door catching.',
      },
      {
        q: 'Should the oldest layer be tested?',
        a: 'Where it is pre-1980 sheet vinyl, nine-inch tile or black mastic, we recommend testing before it is disturbed rather than proceeding on assumption.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Bathroom flooring in Groesbeck? See a sample on the actual floor before deciding. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Tile looks different under showroom lighting than it does in a north-facing bathroom with one window and a mirror light. Grey reads blue, warm beige reads yellow, and a subtle texture disappears entirely. A sample left on the actual floor for a day or two, seen in morning and evening light, settles it — and it is a free step that prevents the most expensive kind of regret, since the floor cannot be swapped once it is down.',
    ],
    localFaqs: [
      {
        q: 'Can we see a sample in the room first?',
        a: 'Yes, and we would insist on it. Tile reads completely differently under a showroom light than in a small bathroom with one window — leave it down for a day and look at it morning and evening.',
      },
      {
        q: 'How much does light change it?',
        a: 'More than people expect. Greys go blue, warm tones go yellow, and fine texture disappears. It is the cheapest step in the whole project.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Bathroom flooring in Mount Healthy? A ground-floor bathroom may be on joists or on slab. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'Older houses here often had a bathroom added on the ground floor at some point, and how that floor is built varies — sometimes it is the original joisted floor, sometimes a slab poured into what was a porch or service room. Those are entirely different jobs: one needs deflection checked, the other needs moisture tested and an uncoupling membrane. We establish which you have before quoting rather than assuming.',
    ],
    localFaqs: [
      {
        q: 'How do we know what our bathroom floor is built on?',
        a: 'It varies in houses of this age — sometimes original joists, sometimes a slab poured into a former porch. They are different jobs, so we establish which before quoting.',
      },
      {
        q: 'Which is easier?',
        a: 'Neither, particularly. Joists need deflection checked; a slab needs moisture testing and an uncoupling membrane. Both are routine once identified.',
      },
    ],
  },

  reading: {
    intro:
      'Bathroom flooring in Reading? A washing machine in the bathroom changes the specification. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'Where the laundry shares the bathroom — common in these houses — the floor is carrying a machine that vibrates, occasionally leaks, and weighs a great deal when full. That argues for a stiffer floor than tile alone requires, a fully waterproofed surface rather than a shower-only zone, and ideally a pan or a floor drain. It is a genuinely different brief from a bathroom floor and worth flagging at the site visit.',
    ],
    localFaqs: [
      {
        q: 'Does a washing machine in the bathroom change things?',
        a: 'Considerably — it vibrates, occasionally leaks and weighs a lot when full. That argues for a stiffer floor, a fully waterproofed surface rather than a shower-only zone, and ideally a pan.',
      },
      {
        q: 'Will vibration crack the tile?',
        a: 'It can, over a floor that already flexes. Stiffening it and using an uncoupling membrane handles that, which is why it is worth mentioning early.',
      },
    ],
  },

  dent: {
    intro:
      'Bathroom flooring in Dent? Order more tile than the room measures. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Ordering exactly the square footage is a false economy. Cuts produce waste, a diagonal or patterned layout produces considerably more, tiles break in handling, and you want spares from the same batch for a future repair. Ten per cent over is the usual allowance and fifteen for a diagonal layout. Running short mid-job means waiting on a delivery that may be from a different batch — which is visible.',
    ],
    localFaqs: [
      {
        q: 'How much extra tile should be ordered?',
        a: 'Around ten per cent over the area, or fifteen for a diagonal or patterned layout — plus a few spares from the same batch for future repairs.',
      },
      {
        q: 'What if we run short?',
        a: 'A second order may come from a different production batch, and the colour difference shows. That is exactly what the allowance prevents.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Bathroom flooring in Deer Park? For a walker or a wheelchair, the threshold has to go. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Where someone uses a walker or a chair, the raised strip at the bathroom door is a genuine obstacle and the floor build-up is what creates it. Planning the assembly so the finished heights match on both sides removes it entirely — which is far easier to design in than to correct afterwards. Slip resistance matters more here too, and a smaller format with more grout lines gives better grip than a large polished tile.',
    ],
    localFaqs: [
      {
        q: 'Can the threshold be made level?',
        a: 'Frequently, by planning the assembly so the finished heights match on both sides. It is far easier designed in than corrected later, and it removes a real obstacle for a walker or chair.',
      },
      {
        q: 'What floor suits someone unsteady?',
        a: 'Genuine slip resistance, and often a smaller format — more grout lines give better grip than a large polished tile. It does not have to look institutional.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Bathroom flooring in Terrace Park? Heated floors are the upgrade people rate highest. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Of everything we install, electric underfloor heating is what clients mention most a year later — and a floor replacement is the only sensible moment to fit it, since the mat goes down as part of an assembly that is already being built. The cost is the mat, a thermostat and an afternoon. Retrofitting it later means lifting a floor that is otherwise perfectly good.',
    ],
    localFaqs: [
      {
        q: 'Is underfloor heating worth it?',
        a: 'It is the upgrade clients mention most a year later, and a floor replacement is the only sensible moment to fit it. The added cost is the mat, a thermostat and an afternoon.',
      },
      {
        q: 'Is it expensive to run?',
        a: 'For a bathroom-sized area on a timer, no. We set it on a thermostat rather than leaving it running continuously.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Bathroom flooring in Dry Run? A floor drain is worth considering over a finished basement. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Where a bathroom sits above finished space, the useful question is what happens to water that escapes — a supply line, an overflowing basin, a toilet. A fully waterproofed floor contains it; a floor drain gives it somewhere to go. The drain is not always practical, but where it is, it converts a ceiling repair into a mopping job. Worth raising at design stage rather than after the event.',
    ],
    localFaqs: [
      {
        q: 'Is a floor drain worth having in a bathroom?',
        a: 'Where the bathroom is over finished space and it can be plumbed, it converts a ceiling repair into a mopping job. It is not always practical, but it is worth asking about.',
      },
      {
        q: 'What if a drain is not possible?',
        a: 'Then a fully waterproofed floor with the membrane taken up the wall base does most of the same job — it contains the water rather than draining it.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Bathroom flooring in White Oak? Ask what the tile is rated for, not just how it looks. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Tile carries published ratings that showrooms rarely lead with — a wear rating that says whether it belongs on a floor at all, a water absorption figure separating porcelain from ceramic, and a wet slip figure. Plenty of attractive tile is rated for walls only, and it will wear visibly within a year on a bathroom floor. We check the ratings on whatever you like before it is ordered.',
    ],
    localFaqs: [
      {
        q: 'Is any tile suitable for a bathroom floor?',
        a: 'No — some is rated for walls only and wears visibly within a year underfoot. There are published ratings for wear, water absorption and wet slip, and we check them before ordering.',
      },
      {
        q: 'Is porcelain always better than ceramic?',
        a: 'Denser and less absorbent, which matters in a bathroom. Good ceramic is fine on a floor if it is rated for it — the rating matters more than the category name.',
      },
    ],
  },

  forestville: {
    intro:
      'Bathroom flooring in Forestville? Doing the floor with the rest of the room saves real money. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'The floor is the layer everything else sits on, which makes the sequence matter. Done alongside a new vanity, toilet or tub, it runs wall to wall with fixtures set on top of it and everything is mobilised once. Done separately afterwards, it means removing fixtures that were just installed. If more than the floor is likely within a couple of years, doing it together is meaningfully cheaper.',
    ],
    localFaqs: [
      {
        q: 'Should the floor be done with the rest of the bathroom?',
        a: 'If more than the floor is likely within a couple of years, yes — it goes in wall to wall with fixtures on top of it, and everything is mobilised once rather than twice.',
      },
      {
        q: 'What if the budget only covers the floor?',
        a: 'Then do the floor properly and run it wall to wall with the fixtures out. That way a future vanity or toilet change is straightforward rather than exposing bare subfloor.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Bathroom flooring in Cherry Grove? A heated mat needs its own protected circuit. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Underfloor heating is an electrical installation as much as a flooring one — it wants a dedicated GFCI-protected circuit back to the panel rather than a spur off the bathroom lighting. In houses of this age the panel is frequently at capacity, which is a real cost that belongs on the quote rather than appearing as a surprise. We check spare capacity before anyone commits to a heated floor.',
    ],
    localFaqs: [
      {
        q: 'Does a heated floor need special wiring?',
        a: 'A dedicated GFCI-protected circuit back to the panel rather than a spur off the lighting. In houses of this age the panel is frequently full, so we check capacity before you commit.',
      },
      {
        q: 'What if the panel is full?',
        a: 'It is upgraded, and that appears as its own line on the quote rather than being absorbed or quietly skipped.',
      },
    ],
  },

  kenwood: {
    intro:
      'Bathroom flooring in Kenwood? In a large suite, one floor should run throughout. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Large primary bathrooms often have zones — a wet area, a vanity run, sometimes a separate toilet compartment or a dressing area. Running one continuous floor through all of them makes the suite read as a single generous space; changing material at each threshold chops it up and adds junctions that collect dirt. It is a design decision worth making deliberately rather than defaulting to a change at every door.',
    ],
    localFaqs: [
      {
        q: 'Should the floor change between zones?',
        a: 'Usually not. One continuous floor makes a large suite read as a single space, while a change at every threshold chops it up and adds junctions that collect dirt.',
      },
      {
        q: 'What about the shower floor?',
        a: 'That is the genuine exception — it needs falls and a smaller format for grip. Using the same tile family in a different format keeps it coherent.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Bathroom flooring in Lincoln Heights? The village permits work here, and we quote to the house. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical points. It is its own municipality, so any permitting comes through Lincoln Heights rather than the county, and we confirm that before scheduling. And the housing is modest, so the sensible specification is a mid-priced porcelain on a properly prepared subfloor rather than expensive material on an unprepared one. The preparation is where the money should go, and it costs the same either way.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits here?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'How much should we spend?',
        a: 'Mid-priced porcelain on a properly prepared subfloor. The preparation is what decides how long it lasts, and it costs the same whichever tile goes on top.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Bathroom flooring in Dillonvale? Which direction the tile runs changes how the room reads. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'In a narrow bathroom, running a rectangular tile across the short dimension makes the room feel wider; running it lengthways emphasises the corridor. With a plank format the effect is stronger still. It costs nothing to decide and it is permanent, which is why we discuss it before setting out rather than defaulting to whatever direction the doorway suggests.',
    ],
    localFaqs: [
      {
        q: 'Does the direction of the tile matter?',
        a: 'In a narrow room, considerably. Running rectangular tile across the short dimension makes it feel wider; lengthways emphasises the corridor. With plank formats the effect is stronger.',
      },
      {
        q: 'Can we see it before it is fixed?',
        a: 'Yes — we dry-lay and mark the setting out so you can see the direction and where the cuts land while it can still change.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Bathroom flooring in Woodlawn? Ask which membrane is going under the tile. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'There are two different products people call membranes and they do different jobs. An uncoupling membrane absorbs movement between substrate and tile so cracks below do not telegraph up. A waterproofing membrane stops water reaching the structure. Some sheets do both; many quotes include neither. It is worth asking specifically which is in yours, because both are invisible the moment the tile goes down.',
    ],
    localFaqs: [
      {
        q: 'What is the difference between the membranes?',
        a: 'An uncoupling membrane absorbs movement so cracks below do not telegraph through the tile. A waterproofing membrane keeps water out of the structure. Some products do both; many quotes include neither.',
      },
      {
        q: 'Do we need both?',
        a: 'On a bathroom floor we would specify a sheet that does both. It is invisible once tiled, which is exactly why it is what a cheaper quote leaves out.',
      },
    ],
  },

  addyston: {
    intro:
      'Bathroom flooring in Addyston? If the subfloor is rotten, here is how the price behaves. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'In century-old houses on low ground the honest question is what happens when the floor comes up and something underneath is gone. Our price is fixed, and it holds because we lift a corner and look underneath before quoting — most of what becomes a surprise elsewhere is simply something nobody checked. Where genuinely concealed damage exists beyond what any inspection would find, we show you the photograph, the cost and the options before continuing.',
    ],
    localFaqs: [
      {
        q: 'What if the subfloor turns out to be rotten?',
        a: 'We stop, photograph it and show you the cost and options before continuing. Most of what becomes a surprise elsewhere is found at our site visit, because we lift a corner before quoting.',
      },
      {
        q: 'So the fixed price can change?',
        a: 'It holds for everything reasonably establishable beforehand, which is nearly all of it. Genuinely concealed damage is the exception, and we say so plainly rather than promising what nobody can.',
      },
    ],
  },

  greenhills: {
    intro:
      'Bathroom flooring in Greenhills? Built to one plan, so we know these floors already. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because Greenhills was built as a single scheme, the bathrooms repeat from home to home and so does what is under them — original board subfloors of a known construction, laid out to a standard. That is genuinely useful: we know the overlay these need before tile, roughly what height it adds, and how that lands against the door. The Landmark designation concerns the exterior, so the floor is yours to choose.',
    ],
    localFaqs: [
      {
        q: 'Do you know these floors already?',
        a: 'Yes — Greenhills was built as one scheme, so the bathrooms and their subfloors repeat. We know the overlay these need before tile and roughly what height it adds.',
      },
      {
        q: 'Does the historic designation limit our choice?',
        a: 'No — the review concerns what is visible from outside. The floor is yours to decide.',
      },
    ],
  },

  northbrook: {
    intro:
      'Bathroom flooring in Northbrook? Removing the old floor is the dusty part — containment matters. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Of everything in a bathroom job, lifting an old floor generates the most dust — old adhesive, mortar, board and whatever has accumulated beneath. Without a sealed barrier at the door and floor protection along the route, that ends up through the house. It is not a difficult step and it is the one that decides whether you spend the following weekend cleaning. We put it in before anything is lifted.',
    ],
    localFaqs: [
      {
        q: 'How dusty is removing an old floor?',
        a: 'It is the dustiest part of any bathroom job — old adhesive, mortar and board. A sealed barrier at the door and protection along the route is what keeps it out of the rest of the house.',
      },
      {
        q: 'Is that included?',
        a: 'Always. It is not an extra we would quote separately, and it goes in before anything is lifted.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Bathroom flooring in Indian Hill? On a well, water chemistry marks stone and grout. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Where a house is on a private well, iron and manganese in the water leave marking that no cleaning routine fully removes — and light cement grout and porous natural stone are exactly what shows it. Porcelain with epoxy grout resists it almost entirely. Where treatment is not happening, we would specify around the water you have rather than the floor you saw in a showroom.',
    ],
    localFaqs: [
      {
        q: 'Will well water stain a new floor?',
        a: 'Iron and manganese mark light cement grout and porous stone in particular. Porcelain with epoxy grout resists it almost entirely, which is what we would specify without treatment.',
      },
      {
        q: 'Would a softener solve it?',
        a: 'It helps throughout the house, but iron and manganese usually need specific treatment rather than softening alone. We will give you a straight view rather than selling equipment.',
      },
    ],
  },

  evendale: {
    intro:
      'Bathroom flooring in Evendale? Flatness gets checked with a straightedge, not by eye. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'Large-format tile has a flatness tolerance, and floors that look perfectly level to the eye routinely miss it. We check with a long straightedge across several directions before agreeing a format — a dip of a few millimetres over the length of a tile is invisible on bare subfloor and glaringly obvious as a lipped edge afterwards. It is a ten-minute check that decides whether the finished floor looks right.',
    ],
    localFaqs: [
      {
        q: 'How do you know if a floor is flat enough?',
        a: 'A long straightedge across several directions. A dip of a few millimetres is invisible on bare subfloor and glaringly obvious as a lipped tile edge afterwards.',
      },
      {
        q: 'What if it is out?',
        a: 'A self-levelling compound brings it true, or a smaller format tolerates it. We will tell you which your floor needs before you choose the tile.',
      },
    ],
  },

  glendale: {
    intro:
      'Bathroom flooring in Glendale? A period-correct floor takes sourcing and lead time. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Owners here frequently want a floor that could always have been there, and it is achievable — unglazed hexagonal mosaic in the correct size, a period border, the right grout width and colour. Those are ordered rather than picked off a shelf, and small-format work with a border takes considerably longer to set out and lay. Knowing both at design stage is what keeps the project on schedule instead of stalling at the end.',
    ],
    localFaqs: [
      {
        q: 'Can we get a genuinely period floor?',
        a: 'Yes — unglazed hexagonal mosaic in the correct size, a period border and the right grout width. It is a sourcing exercise with real lead times, so we start it early.',
      },
      {
        q: 'Does it take longer to lay?',
        a: 'Considerably, particularly with a border. Small-format work and the setting out it needs are where the extra time goes, and it is worth it in a house like this.',
      },
    ],
  },

  sharonville: {
    intro:
      'Bathroom flooring in Sharonville? Every decision made up front is a delay that never happens. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'The list for a floor is shorter than a full remodel and it still catches people out: tile or vinyl, format and direction, grout type and colour, threshold detail, baseboard treatment, whether heating goes in, and whether fixtures are being replaced at the same time. All of it settled before demolition, with materials on site — which is what makes a fixed price and a three-day schedule possible.',
    ],
    localFaqs: [
      {
        q: 'What do we need to decide before you start?',
        a: 'Tile or vinyl, format and direction, grout type and colour, the threshold detail, the baseboard treatment, whether heating goes in, and whether any fixtures change at the same time.',
      },
      {
        q: 'What if we change our minds mid-job?',
        a: 'Before materials are ordered it is straightforward. Once the tile is on site and the floor is up, a change means waiting on a delivery with the bathroom out of use.',
      },
    ],
  },

  northgate: {
    intro:
      'Bathroom flooring in Northgate? Sometimes the floor is the whole job, sometimes it is not. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'A floor on its own is a focused, affordable project and it is genuinely the right answer where the rest of the room is sound. But where the vanity is failing, the tub surround is cracked and the ventilation was never adequate, doing it piecemeal costs more in total than doing the room once — and a new floor makes everything around it look worse. We will tell you which situation you are in, including when the honest answer is the larger job.',
    ],
    localFaqs: [
      {
        q: 'Should we do the floor or the whole bathroom?',
        a: 'The floor, if the rest of the room is sound. If the vanity, surround and ventilation all need work, doing it once is cheaper — and a new floor tends to show up everything around it.',
      },
      {
        q: 'Can we stage it?',
        a: 'Yes, and floor first is usually the right order since everything else sits on it. We will just be clear about what staging costs compared with doing it together.',
      },
    ],
  },

  springdale: {
    intro:
      'Bathroom flooring in Springdale? A busy family bathroom floor needs specifying for it. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'A bathroom serving several people never fully dries, takes constant traffic and gets very little maintenance. That points to a hard-wearing porcelain rather than soft stone, epoxy grout in a mid-tone, and genuine slip resistance for wet feet in a hurry. It is not a glamorous specification and it is the one that still looks acceptable in ten years, which is the point.',
    ],
    localFaqs: [
      {
        q: 'What floor suits a busy family bathroom?',
        a: 'Hard-wearing porcelain rather than soft stone, epoxy grout in a mid-tone, and genuine slip resistance. It is not glamorous and it still looks acceptable in ten years.',
      },
      {
        q: 'Is a light-coloured floor a mistake?',
        a: 'A very light grout is, in a busy bathroom — it shows every mark within a year. A light tile with a mid-tone grout works far better than both being pale.',
      },
    ],
  },

  miamitown: {
    intro:
      'Bathroom flooring in Miamitown? A long run out here, so we schedule it as a block. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'This is one of the further corners of our area and a tiled floor is a three-day job with curing time between stages — so we schedule it as an uninterrupted block rather than squeezing it between closer work. The housing adds its own check: on low river-bottom ground the subfloor under an older bathroom wants establishing properly, and a crawl space beneath is worth looking at for moisture while we are there.',
    ],
    localFaqs: [
      {
        q: 'Do you come out as far as Miamitown?',
        a: 'Yes, and we schedule it as a block because a tiled floor is a three-day job with curing time between stages. That is why the dates we write down hold.',
      },
      {
        q: 'Does the low ground matter for a floor?',
        a: 'It makes the subfloor and any crawl space beneath worth establishing properly — moisture from below is what loosens a floor over years.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Bathroom flooring in Forest Park? Most of this happens while you are at work. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Flooring is a job that suits an empty house — the room is out of use anyway, the dust is contained behind a barrier, and there is nothing to decide once the material is chosen. We work to an agreed arrival time with a key or lockbox arrangement, a named project manager on site, and the house locked before we leave. You get photographs at the end of each day so you can see the subfloor before it disappears.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home?',
        a: 'Not usually. We arrange access, work to an agreed time and lock up before leaving, with a named project manager on site and photographs at the end of each day.',
      },
      {
        q: 'Why photographs?',
        a: 'So you can see the subfloor and the membrane before they are covered. Those are the parts you are paying for and cannot inspect afterwards.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Bathroom flooring in Pleasant Run? If a dog uses the room, the floor takes more. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'Where a bathroom is also where the dog gets washed or the water bowl lives, the floor is dealing with claws, standing water and grit — none of which a soft stone or a thin vinyl handles well. Porcelain with a genuine wear rating and epoxy grout is the answer, and a slightly textured surface gives an animal grip too. It costs nothing extra to specify if we know before the tile is chosen.',
    ],
    localFaqs: [
      {
        q: 'Does a dog change the flooring choice?',
        a: 'Yes — claws, standing water and grit are hard on soft stone and thin vinyl. Porcelain with a real wear rating and epoxy grout handles it, and a light texture gives the animal grip.',
      },
      {
        q: 'Do claws scratch tile?',
        a: 'Not properly rated porcelain. They will mark soft stone and some vinyls, which is why it is worth mentioning before the material is chosen.',
      },
    ],
  },

  cleves: {
    intro:
      'Bathroom flooring in Cleves? If the house has flooded, the subfloor comes out. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'A subfloor that has been submerged does not recover — plywood delaminates, particleboard swells irreversibly, and whatever was between the layers stays damp long after the surface looks dry. Laying a new floor over it seals the problem in. The honest sequence is to take it back to joists, assess and remediate what is there, let it dry, then rebuild. That is not the cheap answer and it is the only one that lasts.',
    ],
    localFaqs: [
      {
        q: 'Can a flooded subfloor be salvaged?',
        a: 'Rarely. Plywood delaminates and particleboard swells irreversibly, and the layers stay damp long after the surface looks dry. Laying over it seals the problem in.',
      },
      {
        q: 'Is remediation part of the job?',
        a: 'Mould and mildew remediation within the bathroom is. Where flood damage extends beyond it, that is a bigger conversation and we will be straight about it.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Bathroom flooring in North Bend? A century-old house has settled, and tile does not bend. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Houses of this age have moved, and a bathroom floor that looks fine to the eye can be out by half an inch across its width and dip in the middle. Tile cannot follow that — the result is lipped edges and cracked grout within a year. Bringing it true with a self-levelling compound is a straightforward step that adds a day of curing and prevents the most common failure in an old-house floor.',
    ],
    localFaqs: [
      {
        q: 'Does an old floor need levelling before tile?',
        a: 'Frequently. A century of settlement leaves floors out by half an inch or more, and tile cannot follow that — you get lipped edges and cracked grout within a year.',
      },
      {
        q: 'How much does levelling add?',
        a: 'The compound and a day of curing. It is a modest cost against relaying a floor that failed.',
      },
    ],
  },

  loveland: {
    intro:
      'Bathroom flooring in Loveland? If the trail ends at your back door, spec the floor for grit. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'Grit tracked in from a trail is abrasive, and it is what wears a soft floor finish and works into grout joints. A hard-wearing porcelain with epoxy grout handles it where a soft stone or a thin vinyl will show traffic patterns within a couple of years. A slightly textured surface also holds up better than a polished one under that kind of use — and it is safer wet, which matters in the same room.',
    ],
    localFaqs: [
      {
        q: 'Does tracked-in grit damage a floor?',
        a: 'It is abrasive and it works into grout joints. Hard-wearing porcelain with epoxy grout handles it; soft stone and thin vinyl show traffic patterns within a couple of years.',
      },
      {
        q: 'Is a textured floor harder to clean?',
        a: 'Slightly, and it wears far better and is safer wet. In a household that comes home muddy it is the sensible trade.',
      },
    ],
  },

  harrison: {
    intro:
      'Bathroom flooring in Harrison? On the state line, jurisdiction is the first question. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'Where a floor job includes pulling and resetting the toilet, requirements vary by jurisdiction — and sitting on a state boundary, whether that is Ohio or Indiana depends on which side the property is on. It is a short conversation and it belongs before scheduling rather than when an inspection is booked. Otherwise these are ordinary floors: mixed housing ages with mixed subfloors, established at the site visit.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the state line we are on?',
        a: 'For any permitting, yes — Ohio and Indiana run different processes. We confirm which applies before scheduling rather than when an inspection is due.',
      },
      {
        q: 'Do you work on the Indiana side?',
        a: 'Yes. It is a different jurisdiction rather than a different job.',
      },
    ],
  },

  ludlow: {
    intro:
      'Bathroom flooring in Ludlow? Lift a corner before you decide to replace. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'A surprising number of bathrooms here still have original hexagonal or mosaic tile under later coverings — laid over rather than removed because it was easier. Where it survives sound on its mortar bed, it is worth more than anything we would put down. That is a decision you cannot reverse once demolition starts, so we lift a corner on the site visit and look before anyone commits.',
    ],
    localFaqs: [
      {
        q: 'Could there be an original floor under ours?',
        a: 'In houses of this era here, often — hexagonal or mosaic tile on a mortar bed, laid over and forgotten. We lift a corner before anyone commits, because it is not reversible.',
      },
      {
        q: 'Can it be restored?',
        a: 'Frequently, where losses are localised and the bed is sound. Patching with matched tile and regrouting gives you something that cannot be bought new.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Bathroom flooring in Park Hills? Getting materials up a hillside house takes planning. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Tile is heavy — a bathroom floor is several hundred pounds of material — and in a tall house built into a hillside it has to come up a stair from a street where parking is limited. The debris comes back down the same way. It is a planning matter rather than an obstacle, but it is why we walk the route at the site visit and book access rather than improvising on the morning.',
    ],
    localFaqs: [
      {
        q: 'Is getting materials in a problem on these streets?',
        a: 'It is a planning matter — a bathroom floor is several hundred pounds of tile up a stair from limited parking, and the debris comes back down the same way. We walk the route at survey.',
      },
      {
        q: 'Does that add cost?',
        a: 'A modest amount in labour on a tall house with difficult access, and it appears on the quote rather than as a surprise.',
      },
    ],
  },

  bromley: {
    intro:
      'Bathroom flooring in Bromley? On low ground, moisture from below is the real risk. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Bathroom floors here face a problem most do not: vapour and damp coming up from a crawl space or slab on ground that sits close to the water table. That will loosen adhesives and lift a floor over years regardless of how well the surface is sealed. Where it is a factor, the assembly changes — a vapour-tolerant build-up, and often addressing the crawl space itself before the floor goes down.',
    ],
    localFaqs: [
      {
        q: 'Can damp come up through the floor here?',
        a: 'On ground this low, yes — vapour from a crawl space or slab loosens adhesives over years regardless of how well the surface is sealed. It is worth testing before choosing a covering.',
      },
      {
        q: 'What is done differently?',
        a: 'A vapour-tolerant assembly, and frequently addressing the crawl space ground cover first. That second part does more than anything at floor level.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Bathroom flooring in Fort Wright? On the hilltop, a lower-level floor is straightforward. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation removes the damp-from-below questions that shape work in the river villages, so a lower-level bathroom floor here is usually a conventional slab job — moisture tested as a matter of course, an uncoupling membrane because concrete moves, and a heated mat worth considering since a slab runs cold. Upstairs bathrooms are ordinary mid-century plywood subfloor, which is the easiest case we work with.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level floor different up here?',
        a: 'Simpler than in the river villages — the elevation avoids the damp-from-below issues. It is still a slab, so moisture testing and an uncoupling membrane apply.',
      },
      {
        q: 'Is a heated floor worth it downstairs?',
        a: 'A slab runs colder than a floor over heated space, and tile conducts that. It is where a heated mat earns its cost most.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Bathroom flooring in Fort Mitchell? Choose a floor you will still like in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Floor tile moves in cycles more visibly than almost anything else in a house, and a bathroom floor is not something you redo when the fashion turns. Very strongly patterned tile and whatever colour is current will date fastest. Simple formats in neutral tones with character in the texture rather than the pattern have looked right for decades. We will give you our honest view rather than whatever is selling this year.',
    ],
    localFaqs: [
      {
        q: 'Which floors date fastest?',
        a: 'Strongly patterned tile and whatever colour is current. Simple formats in neutral tones with character in the texture rather than the pattern have looked right for decades.',
      },
      {
        q: 'Is patterned tile a mistake?',
        a: 'Not if you genuinely love it — just know it is a stronger commitment than a plain floor, because it is the element you will notice most in ten years.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Bathroom flooring in Villa Hills? We do not float a new floor over a failing one. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There is a quick version of this job where a floating floor goes straight over whatever is there — no removal, no fixture pulling, done in a morning. It is cheap and it inherits every problem underneath, including a soft subfloor and a toilet flange left below the new level. We take the old floor back to structure and look at what we find. That takes longer, costs more, and is a different product.',
    ],
    localFaqs: [
      {
        q: 'Why not float a new floor over the old one?',
        a: 'Because it inherits everything underneath — a soft subfloor, past leak damage, and a toilet flange left below the new surface. It is quick and cheap and it is not what we do.',
      },
      {
        q: 'Is it ever acceptable?',
        a: 'Where the existing floor is genuinely sound, well bonded and the height works, it can be. It is a real option occasionally rather than a default.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Bathroom flooring in Lakeside Park? A properly built floor should outlast two bathrooms. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'A tiled floor on a sound, stiff, flat substrate with an uncoupling membrane should give thirty years or more — considerably longer than the vanity, the fixtures or the paint. That is worth knowing when deciding what to spend, because the floor is the one element of a bathroom you should expect to keep through the next remodel rather than replace with it.',
    ],
    localFaqs: [
      {
        q: 'How long should a tiled floor last?',
        a: 'Thirty years or more on a sound, stiff, flat substrate with an uncoupling membrane — considerably longer than the vanity or the fixtures above it.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Very little. Keep cement grout sealed if that is what you have; epoxy needs nothing. Wipe up standing water and it looks after itself.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Bathroom flooring in Crescent Springs? Ask for the quote itemised — ours is. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'A single square-foot price hides most of what matters. Ours separates removal and disposal, fixture removal and refitting, subfloor repair, overlay or levelling, the membrane, the tile, setting and grouting, the threshold and baseboard detail, and any heating. That is what lets you compare quotes honestly — and in flooring, the gap between two numbers is nearly always the preparation, not the tile.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'Removal and disposal, fixture removal and refitting, subfloor repair, levelling, the membrane, the tile, setting and grouting, the threshold and baseboard detail, and any heating — itemised.',
      },
      {
        q: 'How do we compare two quotes?',
        a: 'Line by line. Ask specifically about subfloor repair, levelling and whether a membrane is included — that is nearly always where a lower number comes from.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Bathroom flooring in Crestview Hills? A guest bathroom does not need the primary specification. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'It is worth spending deliberately between bathrooms. A floor used twice a month by visitors does not need the same tile, the same heating or the same wear rating as one a household crosses ten times a day — and spending equally usually means underspending on the one that matters. What should not vary is the subfloor preparation, because a floor failing in a guest bathroom costs exactly as much to put right.',
    ],
    localFaqs: [
      {
        q: 'Should the guest bathroom match the main one?',
        a: 'Not necessarily. Save on tile grade and heating in a room used twice a month and put it into the bathroom you cross ten times a day. The subfloor preparation should be identical.',
      },
      {
        q: 'Does a cheaper tile mean a shorter life?',
        a: 'Not where the savings are in grade rather than preparation. A modest tile on a sound substrate outlasts an expensive one on a poor base.',
      },
    ],
  },

  edgewood: {
    intro:
      'Bathroom flooring in Edgewood? A level threshold matters more than the tile choice. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Where somebody in the household is unsteady, uses a walker, or is coming home after surgery, the raised strip at the bathroom door is a genuine hazard — and it is created by the floor build-up rather than being inherent. Planning the assembly so the finished heights match on both sides removes it. Combined with real slip resistance, that is a floor that quietly does its job, and neither element looks like an adaptation.',
    ],
    localFaqs: [
      {
        q: 'Can the doorway be made level?',
        a: 'Frequently, by planning the assembly so finished heights match on both sides. It is created by the build-up rather than being inherent, and it is far easier designed in than corrected.',
      },
      {
        q: 'Can you work to a discharge date?',
        a: 'Often, though a tiled floor needs three days with curing time. If the date is tight, luxury vinyl is down and usable the same day, and we will say when that is the sensible trade.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Bathroom flooring in Taylor Mill? Cold weather slows curing — plan for it. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'Flooring is interior work, so weather is largely irrelevant with one genuine exception: thinset, levelling compound and grout all cure more slowly in a cold room. In an unheated bathroom in January that can add a day. Keeping the heating on through the job is not fussiness — it is what lets the schedule hold and the bond develop properly. Otherwise the quieter months mean better availability and firmer dates.',
    ],
    localFaqs: [
      {
        q: 'Does cold weather affect the work?',
        a: 'It slows curing — thinset, levelling compound and grout all take longer in a cold room, which can add a day. Keeping the heating on through the job is what lets the schedule hold.',
      },
      {
        q: 'Should we wait until spring?',
        a: 'No need. Availability is usually better in the quieter months, and the only requirement is a warm room while things cure.',
      },
    ],
  },

  elsmere: {
    intro:
      'Bathroom flooring in Elsmere? Here is when money changes hands. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Stated plainly. A deposit at signing covers ordering the material — which matters with tile, since a specific batch is reserved for your job. The balance falls due on completion after the final walkthrough. We do not ask for the full amount up front and nothing appears at the end that was not in the signed itemisation, including any subfloor repair we identified at the site visit.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing to order the material and reserve the batch, and the balance on completion after the walkthrough. Nothing is added at the end that was not in the signed itemisation.',
      },
      {
        q: 'Why does the batch matter?',
        a: 'Tile colour varies between production batches. Reserving one means the whole floor matches and your spares match too.',
      },
    ],
  },

  independence: {
    intro:
      'Bathroom flooring in Independence? Here is what the warranty covers and what it does not. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Our workmanship warranty covers how the floor was built — the subfloor preparation, the membrane, the setting bed, the tile installation and the grouting. Cracked grout from a floor that flexes is ours. What it does not cover is damage from a leak elsewhere, from movement in the house structure beyond the bathroom, or from someone dropping something heavy on it. We would rather set that out now than argue about it in year six.',
    ],
    localFaqs: [
      {
        q: 'What does the workmanship warranty cover?',
        a: 'How the floor was built — subfloor preparation, membrane, setting bed, installation and grouting. Cracked grout from a floor that flexes is ours to put right.',
      },
      {
        q: 'What is not covered?',
        a: 'Damage from a leak elsewhere in the house, structural movement beyond the bathroom, or impact damage. We set that out plainly at the start.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Bathroom flooring in Dayton? Old doors have very little clearance to give. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'The doors in these houses are frequently original, often a non-standard size, and fitted with very little gap beneath. A tile assembly adding the best part of an inch will bind — and trimming an original panelled door is not something to do lightly, because the bottom rail has a proportion that matters. Either the assembly gets thinner or the door comes off and is trimmed carefully. We settle that before the floor goes down.',
    ],
    localFaqs: [
      {
        q: 'Will a new floor stop an original door closing?',
        a: 'It can — these doors often have very little clearance beneath. Trimming an original panelled door is not something to do lightly, so we settle the assembly thickness first.',
      },
      {
        q: 'What are the alternatives?',
        a: 'A thinner build-up, or luxury vinyl over a thin underlayment which adds very little. We would rather change the assembly than cut an original door.',
      },
    ],
  },

  southgate: {
    intro:
      'Bathroom flooring in Southgate? Three questions decide tile or vinyl. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Rather than a preference, three practical questions. Can the floor structure take tile without work, or would stiffening add real cost? Can the bathroom be out of use for three days? And is this a long-term home or a property you may sell within a few years? Tile wins on longevity and resale; vinyl wins on cost, speed and tolerance of an imperfect floor. The answers usually point clearly one way.',
    ],
    localFaqs: [
      {
        q: 'How do we choose between tile and vinyl?',
        a: 'Whether the floor structure takes tile without expensive stiffening, whether the bathroom can be out of use three days, and whether this is a long-term home. Those three usually settle it.',
      },
      {
        q: 'Does vinyl hurt resale?',
        a: 'Less than it used to, and a good product looks convincing. Tile still carries more weight with buyers in a nicer house, which is the honest position.',
      },
    ],
  },

  wilder: {
    intro:
      'Bathroom flooring in Wilder? Keep the paperwork and the spare tiles together. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'Two things are worth keeping after we leave. The spare tiles from the reserved batch, which are what make a future repair invisible rather than a patch. And the itemised specification, which tells a buyer or a future contractor exactly what is under the floor. Neither takes any space and both are worth something later — the tiles especially, since they cannot be replaced once the batch is gone.',
    ],
    localFaqs: [
      {
        q: 'What should we keep after the job?',
        a: 'The spare tiles from the reserved batch and the itemised specification. The tiles make a future repair invisible; the specification tells a buyer or contractor what is under the floor.',
      },
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'It is tied to the installation rather than to you personally, and we provide documentation for a sale.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Bathroom flooring in Highland Heights? In a shared house the floor is the first thing to fail. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'A bathroom floor used by four or five people never dries and gets no maintenance, and that is what kills a soft finish. Porcelain with a real wear rating, epoxy grout in a mid-tone that hides marks, and a fully bonded substrate rather than something floated over the old floor. Each is more expensive once and considerably cheaper across a decade of tenancies than replacing a floor every few years.',
    ],
    localFaqs: [
      {
        q: 'What survives a shared student bathroom?',
        a: 'Porcelain with a real wear rating, epoxy grout in a mid-tone, and a properly bonded substrate. Each costs more once and far less across a decade of tenancies.',
      },
      {
        q: 'Is vinyl a reasonable choice for a let?',
        a: 'A good sheet vinyl in one piece is genuinely practical — no joints and quick to replace. The tradeoff is it will need replacing sooner than tile.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Bathroom flooring in Cold Spring? Just bought the house? The floor is easiest done empty. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'Flooring benefits more than most jobs from an empty house. Nothing to protect, nobody working around a bathroom that is out of use for three days, and no living with the dust from lifting an old floor. In a growing area plenty of people here have just closed, and the window between closing and moving is the easiest this job will ever be.',
    ],
    localFaqs: [
      {
        q: 'Should we do the floor before moving in?',
        a: 'If there is a gap between closing and moving, yes. Nothing to protect, nobody working around a bathroom out of use for three days, and no living with the dust.',
      },
      {
        q: 'How quickly can it be scheduled?',
        a: 'Usually within a few weeks depending on the material. Tell us the dates early and we will be honest about what fits.',
      },
    ],
  },

  alexandria: {
    intro:
      'Bathroom flooring in Alexandria? On a well, mineral content marks light grout. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'On the semi-rural properties around the town, private wells frequently carry iron and manganese — and where drips land on a bathroom floor, that leaves marking that light cement grout holds permanently. It is a small consideration and it decides between a floor that stays looking new and one that discolours in the traffic areas. Epoxy grout in a mid-tone solves it without any change to the tile.',
    ],
    localFaqs: [
      {
        q: 'Will well water mark the grout?',
        a: 'Iron and manganese leave marking that light cement grout holds permanently. Epoxy grout in a mid-tone solves it without changing the tile at all.',
      },
      {
        q: 'Does it affect the tile too?',
        a: 'Porous natural stone, yes. Porcelain shrugs it off, which is what we would specify on an untreated well.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Bathroom flooring in Melbourne? The same crew from lifting the old floor to the last grout joint. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'In a village this small you hear about it if a contractor sends different people each day. We do not subcontract: whoever lifts the old floor and assesses the subfloor is the one who prepares it, sets the tile and grouts it. On a job where the invisible layers decide the outcome, that continuity is why the person who covered the substrate is the one accountable for it.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes — our own installers throughout. On a job where invisible layers decide the outcome, whoever covered the substrate is the one accountable for it.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we schedule it as a block rather than promising a date we would have to move.',
      },
    ],
  },

  hebron: {
    intro:
      'Bathroom flooring in Hebron? A lower-level bathroom on slab is a different job. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Where a bathroom sits on a basement slab rather than a framed floor, the concerns swap over entirely. No deflection to worry about, but slab moisture to test for, an uncoupling membrane because concrete cracks as it moves, and a floor that runs genuinely cold. It is a straightforward job once identified — and identifying it before quoting is the point, because the two are priced differently.',
    ],
    localFaqs: [
      {
        q: 'Is a slab floor easier or harder?',
        a: 'Different. No deflection to worry about, but slab moisture to test for and an uncoupling membrane needed because concrete cracks as it moves.',
      },
      {
        q: 'Why does a slab floor feel so cold?',
        a: 'Nothing warm beneath it, and tile conducts. It is where a heated mat earns its cost most, and the mat goes down as part of the same assembly.',
      },
    ],
  },

  burlington: {
    intro:
      'Bathroom flooring in Burlington? The floor build-up affects toilet clearances too. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Raising a floor changes more than the door. The toilet sits higher, which alters the clearance above it and can matter under a sloped ceiling or a low window. Vanity toe-kick heights change. And where a new floor abuts a shower curb or a tub apron, those relationships shift too. None of it is difficult — it just has to be drawn rather than discovered once the tile is down.',
    ],
    localFaqs: [
      {
        q: 'What else does raising the floor affect?',
        a: 'The toilet sits higher, vanity toe-kick heights change, and the relationship to a shower curb or tub apron shifts. None of it is difficult, it just has to be drawn beforehand.',
      },
      {
        q: 'Does the toilet still fit properly?',
        a: 'Yes, with the flange extended to the new height. That extension is the step most often skipped and the one that causes slow leaks.',
      },
    ],
  },

  union: {
    intro:
      'Bathroom flooring in Union? The builder floor is sound and it dates the room. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'The sheet vinyl or basic ceramic that came with these houses is usually in perfectly serviceable condition, which is exactly why people leave it — and it is the single element most likely to date the room. The good news is that the subfloor beneath is modern, flat and sound, so almost nothing has to be spent on preparation. That makes this the cheapest floor replacement we do relative to the change it produces.',
    ],
    localFaqs: [
      {
        q: 'Is it worth replacing a floor that is not damaged?',
        a: 'It is the element most likely to date the room, and in this housing the subfloor beneath needs almost nothing spent on it. That combination makes it excellent value.',
      },
      {
        q: 'Will the subfloor need work?',
        a: 'Rarely in a house of this age — modern, flat and sound. We still check around the toilet, where past leaks show up.',
      },
    ],
  },

  walton: {
    intro:
      'Bathroom flooring in Walton? Softened water is kinder to grout than hard. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'Many of the rural properties out here run a softener, and for a floor that is a genuine advantage — hard water leaves mineral film where drips land, and softened water largely does not. Where a house is on untreated hard well water we would push toward epoxy grout in a mid-tone and away from porous stone, because that is what shows it. It is a small factor and it is the sort of thing that decides how a floor looks in five years.',
    ],
    localFaqs: [
      {
        q: 'Does softened water help a tiled floor?',
        a: 'It does — hard water leaves mineral film where drips land, and softened water largely does not. On untreated hard water we would push toward epoxy grout and away from porous stone.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, and we schedule it as a block because a tiled floor is a three-day job with curing between stages.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Bathroom flooring in Mount Carmel? Ranch plans put the bathroom on a single level — that simplifies things. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'The single-storey plans common here mean the bathroom floor is not somebody’s ceiling, which removes both the sound question and much of the urgency around whole-floor waterproofing. It also usually means a crawl space beneath rather than living space — which is accessible, so the joists can be inspected and stiffened from below without opening the floor from above.',
    ],
    localFaqs: [
      {
        q: 'Is a single-storey house simpler for flooring?',
        a: 'In some ways — the floor is not somebody’s ceiling, and a crawl space beneath means the joists can be inspected and stiffened from below without opening the floor from above.',
      },
      {
        q: 'Is whole-floor waterproofing still worth it?',
        a: 'Less urgent than over living space, but it still protects the subfloor from an overflow. We will give you the honest cost-benefit rather than specifying it automatically.',
      },
    ],
  },

  summerside: {
    intro:
      'Bathroom flooring in Summerside? Bigger tiles in a small room, not smaller. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Instinct says small room, small tile, and it is backwards. A grid of small tiles in a compact bathroom reads busy and multiplies the grout you have to keep clean, while a larger format gives fewer lines and makes the floor read as more continuous. The genuine limit is flatness — a large tile needs a flat plane — which is a preparation question rather than a reason to go smaller.',
    ],
    localFaqs: [
      {
        q: 'Should a small bathroom have small tiles?',
        a: 'Usually the opposite. A larger format means fewer grout lines and a floor that reads as more continuous. The limit is flatness, which is a preparation question rather than a reason to go smaller.',
      },
      {
        q: 'Is there a format that is too large?',
        a: 'In a very small room, yes — you end up with mostly cut tiles and no full ones visible. We work out where that line falls for your room.',
      },
    ],
  },

  withamsville: {
    intro:
      'Bathroom flooring in Withamsville? Keeping the vanity means the floor stops at it. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Where a vanity is staying, the floor can be laid around it — cheaper and quicker, and it leaves a visible cut line plus bare subfloor if that vanity is ever replaced with a different size. Removing and refitting it costs an hour or two and means the floor runs wall to wall. Where the vanity is likely to change within a few years, the second option pays for itself immediately.',
    ],
    localFaqs: [
      {
        q: 'Does the vanity have to come out?',
        a: 'Not necessarily, and there is a real tradeoff. Laid around it is cheaper; running the floor wall to wall costs an hour or two and means a future vanity change is straightforward.',
      },
      {
        q: 'Which do you recommend?',
        a: 'Removing it, where the vanity is likely to change within a few years. Where it is new and staying, laying around it is a reasonable saving.',
      },
    ],
  },

  milford: {
    intro:
      'Bathroom flooring in Milford? A 19th-century floor is rarely level or square. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'Two things are true in almost every one of these bathrooms: the floor has settled out of level, and the walls are not square to each other. The first is a preparation cost. The second is a setting-out problem — a tile grid will show a taper against a wall, and where that taper falls is a decision. Planning both before a tile is fixed is the difference between a floor that looks intentional and one that looks approximate.',
    ],
    localFaqs: [
      {
        q: 'What if the walls are not square?',
        a: 'A tile grid will show a taper somewhere, and where that falls is a decision rather than an accident. We set out to put it where it is least visible.',
      },
      {
        q: 'Does the floor need levelling too?',
        a: 'Almost always in a house this age. A century of settlement leaves floors out by enough that large tile would lip at the joints.',
      },
    ],
  },

  mulberry: {
    intro:
      'Bathroom flooring in Mulberry? Spend on preparation before you spend on tile. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Where a budget is fixed, the split matters more than the total. A modest porcelain on a subfloor that was repaired, levelled and membraned properly will still be perfect in twenty years. An expensive tile on a floor that flexes will crack in two. If the money will not stretch to both, the preparation is not the half to economise on — and we will say so even though the tile is the visible part.',
    ],
    localFaqs: [
      {
        q: 'Where should a fixed budget go?',
        a: 'Preparation first. A modest porcelain over a properly repaired, levelled and membraned subfloor outlasts an expensive tile over a floor that flexes.',
      },
      {
        q: 'Is a cheaper tile obviously cheaper?',
        a: 'Less than people expect, particularly in a mid-tone with a texture. The difference between a good floor and a poor one is nearly always underneath.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Bathroom flooring in Mount Repose? Buy a tile that will still be available. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Discontinued lines are a real problem in flooring. A cracked tile in year eight is a twenty-minute repair with matching spares and a permanent visible patch without them — and clearance tile, however good the price, is by definition the end of a line. That is a reason to buy from a current range and to keep spares from the reserved batch, and it is worth knowing before a deal looks too good to pass up.',
    ],
    localFaqs: [
      {
        q: 'Does it matter if a tile is being discontinued?',
        a: 'It does for repairs. Clearance tile is by definition the end of a line, so if one cracks in year eight there is no match. Buy from a current range and keep spares.',
      },
      {
        q: 'How many spares should we keep?',
        a: 'A few full tiles from the same batch rather than just offcuts. Colour varies between production runs, so the same product number later will not match.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Bathroom flooring in Day Heights? On a semi-rural property the crawl space matters. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Larger properties here frequently sit over crawl spaces, and a crawl with no ground cover pushes moisture up into the floor structure continuously. That will loosen adhesives and cup a wood subfloor over years no matter what goes on top. Where we find it, addressing the crawl is worth more than anything we could do at floor level — and it is far easier while the floor is up and the structure is visible.',
    ],
    localFaqs: [
      {
        q: 'Can a crawl space affect the bathroom floor?',
        a: 'Considerably. A crawl with no ground cover pushes moisture up continuously, loosening adhesives and cupping a wood subfloor whatever goes on top.',
      },
      {
        q: 'Should that be fixed first?',
        a: 'It is worth more than anything done at floor level, and it is easiest while the floor is up and the structure is visible.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Bathroom flooring in New Richmond? A tall room can carry a bolder floor. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'These high-ceilinged rooms have a proportion that a modern eight-foot bathroom does not, and they carry a patterned or bordered floor far better — a strong encaustic-style pattern that would overwhelm a small modern room reads as appropriate here. It is one of the few places where the period argues for more rather than less, and it is worth considering before defaulting to something plain.',
    ],
    localFaqs: [
      {
        q: 'Can we use a patterned floor?',
        a: 'A tall period room carries pattern far better than a modern eight-foot bathroom does. It is one of the few places where the period argues for more rather than less.',
      },
      {
        q: 'Is pattern harder to lay?',
        a: 'The setting out takes considerably longer, particularly with a border — everything has to be planned before a tile is fixed. It is worth the extra time in a room like this.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Bathroom flooring in Amelia? Ask what happens to the old floor and the debris. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'Lifting a bathroom floor produces more waste than people expect — old tile, mortar bed, board and adhesive add up to several hundred pounds from a small room. It leaves with our crew on the day, in the price, rather than sitting in your drive waiting on a hauler. Where a mortar bed is involved the volume is greater again, which is one reason we establish what is under there before quoting.',
    ],
    localFaqs: [
      {
        q: 'Who removes the old floor?',
        a: 'We do, on the day, and it is in the price. A small bathroom floor is several hundred pounds of tile, mortar and board, and it leaves in our vehicles rather than sitting in your drive.',
      },
      {
        q: 'Is a skip needed?',
        a: 'Rarely on a single bathroom. Where a thick mortar bed is involved the volume is greater, and we would arrange placement in advance if so.',
      },
    ],
  },

  batavia: {
    intro:
      'Bathroom flooring in Batavia? A slip-resistant floor does not have to look institutional. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'People resist textured tile because they picture something municipal, and that is a decade out of date. Modern textured porcelains carry genuine wet slip ratings while reading as stone, concrete or timber — the grip is in the surface micro-texture rather than a visible pattern. Where somebody in the household is unsteady, that combination matters, and there is no longer a real tradeoff between safe and good-looking.',
    ],
    localFaqs: [
      {
        q: 'Does a slip-resistant floor look clinical?',
        a: 'Not any more. Modern textured porcelains carry real wet slip ratings while reading as stone, concrete or timber — the grip is in the micro-texture rather than a visible pattern.',
      },
      {
        q: 'How do we know it is actually slip resistant?',
        a: 'It is a published figure. We will tell you what the tile you like scores rather than relying on how it feels dry in a showroom.',
      },
    ],
  },

  owensville: {
    intro:
      'Bathroom flooring in Owensville? A little preparation makes the site visit count. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we travel to reach the eastern villages, it helps to make one visit do the work of two. Access to the bathroom and to whatever is below it lets us assess the subfloor properly. A rough build date decides whether asbestos testing should be recommended before anything is lifted. And any history of leaks or soft spots tells us where to look rather than requiring a second trip.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready?',
        a: 'Access to the bathroom and below it, a rough build date, and any history of leaks or soft spots. That is usually enough for a fixed price the same day.',
      },
      {
        q: 'Why does the build date matter?',
        a: 'Pre-1980 sheet vinyl, nine-inch tile and black mastic are the materials we would recommend testing before disturbing. The date tells us whether that conversation applies.',
      },
    ],
  },

  goshen: {
    intro:
      'Bathroom flooring in Goshen? On a rural property, mud and grit are the real wear. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'A bathroom on a working property takes a different kind of abuse from a suburban one — grit tracked in from a yard is abrasive and works into grout joints, and boots and equipment are harder on a surface than bare feet. Porcelain with a high wear rating and epoxy grout handles it. A soft stone or a thin vinyl will show traffic patterns within a couple of years, whatever it cost.',
    ],
    localFaqs: [
      {
        q: 'What holds up to mud and grit?',
        a: 'Porcelain with a high wear rating and epoxy grout. Grit is abrasive and works into joints, and soft stone or thin vinyl will show traffic patterns within a couple of years.',
      },
      {
        q: 'Is a mudroom floor the same specification?',
        a: 'Similar principles and usually a tougher one still. If you are doing both, it is worth doing them together while the material is on site.',
      },
    ],
  },

  moscow: {
    intro:
      'Bathroom flooring in Moscow? On low ground, choose a floor that can be dried out. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'In a village this close to the water, the useful question is not whether a floor resists water but whether it survives being submerged. Tile on a cement-based substrate can be dried and reused. A floating floor over wood underlayment generally cannot, whatever the surface claims. That distinction costs nothing to consider and decides whether a future event is a clean-up or a full replacement.',
    ],
    localFaqs: [
      {
        q: 'What flooring survives if water gets in?',
        a: 'Tile on a cement-based substrate can generally be dried and salvaged. Floating floors over wood underlayment usually cannot, whatever the surface is made of.',
      },
      {
        q: 'Is that worth paying for?',
        a: 'On ground with a history, we think so. It is the difference between a clean-up and a replacement, and we will lay out the cost either way.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Bathroom flooring in Newtonsville? Here is what makes the three days run. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the northeastern villages, a lost day is expensive for both of us. What keeps it on schedule: the bathroom cleared, a route from the door kept clear for materials and debris, parking within reach, and the heating left on so the levelling compound and thinset cure on time. That last one is the item people do not expect and the one that most often adds a day.',
    ],
    localFaqs: [
      {
        q: 'What do we need to do before you start?',
        a: 'Clear the bathroom, keep a route from the door clear for materials and debris, make parking available — and leave the heating on, because cold rooms slow curing and add a day.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, and we schedule it as an uninterrupted block rather than fitting it around closer work. That is why the dates we write down hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Bathroom flooring in Williamsburg? An addition floor is often framed lighter than the house. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'In these 19th-century houses the bathroom is nearly always a later addition, and additions were framed to whatever standard and budget applied at the time — frequently lighter than the original house and sometimes with longer spans. Tile is unforgiving of deflection, so that is exactly the structure worth establishing rather than assuming the house is consistent throughout.',
    ],
    localFaqs: [
      {
        q: 'Is an addition floor different from the rest of the house?',
        a: 'Often — framed lighter, sometimes with longer spans, and to whatever standard applied when it was built. Tile is unforgiving of deflection, so it is worth establishing rather than assuming.',
      },
      {
        q: 'What if it will not take tile?',
        a: 'Stiffening from below usually solves it. Where it cannot, luxury vinyl tolerates movement that would crack tile, and we would recommend that honestly.',
      },
    ],
  },

  bethel: {
    intro:
      'Bathroom flooring in Bethel? Safety and substrate before finish, every time. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'On a limited budget the order is clear to us even where a showroom would sell it differently. A sound, repaired subfloor. A level threshold rather than a step. A genuinely slip-resistant surface. Epoxy grout that will not stain. Those come first, and they are compatible with an inexpensive tile. The premium material comes after all of them, and frequently not at all.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget cover first?',
        a: 'A sound, repaired subfloor, a level threshold, genuine slip resistance and epoxy grout. All of those are compatible with an inexpensive tile, and they matter more than the tile does.',
      },
      {
        q: 'How much should we spend here?',
        a: 'Usually the middle of the range on material and properly on preparation. That combination lasts longest for the money in this housing.',
      },
    ],
  },

  ross: {
    intro:
      'Bathroom flooring in Ross? Hard well water shows on light grout first. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Where a property is on untreated hard well water, iron and mineral content mark a bathroom floor where drips land — and light cement grout holds it permanently, whatever it is cleaned with. Epoxy grout in a mid-tone resists it almost entirely and needs no sealing. It is a small specification change that decides whether the floor looks the same in five years as it did on the first day.',
    ],
    localFaqs: [
      {
        q: 'Will hard water mark the floor?',
        a: 'Light cement grout holds mineral marking permanently where drips land. Epoxy grout in a mid-tone resists it almost entirely and needs no sealing.',
      },
      {
        q: 'Should we avoid stone?',
        a: 'On untreated well water, yes — porous stone marks and the acidic cleaners that remove it are what etch the surface. Porcelain avoids the whole problem.',
      },
    ],
  },

  fairfield: {
    intro:
      'Bathroom flooring in Fairfield? The wrong cleaner will damage grout faster than use will. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Most floors that look tired were cleaned into that state. Acidic bathroom cleaners dissolve cement grout over time and etch natural stone. Bleach discolours some grouts permanently. Abrasive creams dull a polished finish and take the sheen off vinyl. A neutral pH cleaner and a microfibre mop is the whole routine — and it is what keeps a floor looking new far longer than any product marketed for the job.',
    ],
    localFaqs: [
      {
        q: 'How should a bathroom floor be cleaned?',
        a: 'A neutral pH cleaner and a microfibre mop. Acidic bathroom cleaners dissolve cement grout and etch stone, bleach discolours grout, and abrasives dull the finish.',
      },
      {
        q: 'What about limescale on the floor?',
        a: 'Prevent it by drying rather than attacking it — the descalers that remove it are exactly what damages grout and stone. On porcelain with epoxy grout it is far less of an issue.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Bathroom flooring in Beckett Ridge? No HOA approval needed for an interior floor. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'People in planned communities reasonably ask about permission, and an interior bathroom floor is not an association’s concern — that governs what is visible from outside. Practically, this housing is straightforward: modern subfloor, sound structure, usually one covering to remove. The preparation cost is low, which means more of the budget goes into the tile than in older neighbourhoods.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval?',
        a: 'No — an association governs what is visible from outside. An interior bathroom floor is yours to decide.',
      },
      {
        q: 'Is this housing simpler to work in?',
        a: 'Considerably. Modern subfloor, sound structure and usually one covering to remove, which takes most of the preparation cost out.',
      },
    ],
  },

  wetherington: {
    intro:
      'Bathroom flooring in Wetherington? A large suite is where full-coverage heating pays off. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'In a large primary bathroom, a big expanse of tile is genuinely cold and a partial heating mat by the vanity only moves the problem. Full coverage with the correct output can serve as the room’s primary heat rather than a supplement — which changes the specification and the electrical requirement. It is worth doing properly or not at all, because a half-covered floor is the version people find disappointing.',
    ],
    localFaqs: [
      {
        q: 'Should heating cover the whole floor?',
        a: 'In a large bathroom, yes. A partial mat by the vanity only moves the cold elsewhere, and full coverage with the right output can serve as the room’s primary heat.',
      },
      {
        q: 'Does that need more electrical work?',
        a: 'A dedicated GFCI-protected circuit sized for the area. We check the panel has capacity before you commit to the coverage.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Bathroom flooring in Hamilton? A mortar-bed floor is a bigger removal than it looks. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Bathrooms in the historic districts often have original tile set in a thick mortar bed over wire lath — a construction more durable than anything laid today and considerably heavier to remove. It is a genuine demolition rather than a scrape, it produces real volume, and it drops the floor level substantially once gone. All three belong in the quote from the start, which is why we establish what is under there before pricing.',
    ],
    localFaqs: [
      {
        q: 'What is under an original bathroom floor here?',
        a: 'Frequently tile in a thick mortar bed over wire lath — more durable than anything laid today and a real demolition to remove, with substantial volume and a big drop in level afterwards.',
      },
      {
        q: 'Is it worth keeping?',
        a: 'Sometimes genuinely, where it is sound. We assess that before committing to removing it, because it cannot be put back.',
      },
    ],
  },

  millville: {
    intro:
      'Bathroom flooring in Millville? Tile is ordered by batch, so order early. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'The scheduling constraint on a floor is rarely our diary — it is the material. Tile comes from production batches, and a specific line in the quantity you need may take weeks to arrive from a distributor. Ordering early also means the whole floor and your spares come from one batch, which is what makes a future repair invisible. We give you the realistic lead time rather than the optimistic one.',
    ],
    localFaqs: [
      {
        q: 'How far ahead should we order?',
        a: 'Earlier than feels necessary. A specific line in the quantity you need can take weeks from a distributor, and ordering early keeps the whole floor and your spares in one batch.',
      },
      {
        q: 'Is anything available quicker?',
        a: 'Stocked ranges and luxury vinyl move much faster. If timing matters more than a specific tile, we will show you what is available now.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Bathroom flooring in New Miami? Above a kitchen, the whole floor should be sealed. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'In these compact houses the bathroom sits directly over the kitchen more often than not, and most water incidents are not the shower — they are an overflowing basin, a failed supply connection or a leaking toilet, all of which happen outside a shower-only waterproofed zone. A bonded membrane across the whole floor and up the wall base is what stops those becoming a kitchen ceiling. It is modest while the floor is open and impossible after.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is above the kitchen — what protects it?',
        a: 'A bonded membrane across the whole floor and up the wall base. Most incidents are an overflowing basin or a failed supply line, which happen outside any shower-only waterproofing.',
      },
      {
        q: 'Is there already damage below?',
        a: 'Where there is a ceiling stain, we open the floor and check the subfloor and joists before quoting so that condition is in the fixed price.',
      },
    ],
  },

  monroe: {
    intro:
      'Bathroom flooring in Monroe? The loud part is short and can be scheduled. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Across three days the genuinely noisy stretch is the first morning — lifting old tile or a mortar bed with a breaker. Everything after is quiet work. If you are on calls from home, tell us at booking and that hour lands where it suits you. Monroe straddles two counties, so where permitting applies we also confirm which jurisdiction issues it before scheduling.',
    ],
    localFaqs: [
      {
        q: 'How loud is it, and for how long?',
        a: 'The first morning is genuinely loud — lifting old tile or a mortar bed. Everything after is quiet. Tell us if you work from home and that hour lands where it suits you.',
      },
      {
        q: 'Which county handles permitting?',
        a: 'It depends which side of the line your property sits on, since Monroe straddles Butler and Warren. We confirm before scheduling.',
      },
    ],
  },

  landen: {
    intro:
      'Bathroom flooring in Landen? Tile over a shared wall carries sound to the neighbours. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, replacing carpet or vinyl with tile makes footfall in the bathroom noticeably more audible next door and below — hard surfaces transmit impact in a way soft ones do not. An acoustic uncoupling layer handles that alongside crack isolation, doing two jobs for one cost. In an attached home we would specify it rather than treating it as an optional upgrade.',
    ],
    localFaqs: [
      {
        q: 'Will a tile floor be audible next door?',
        a: 'More than carpet or vinyl — hard surfaces transmit footfall. An acoustic uncoupling layer handles that alongside crack isolation, which is two jobs for one cost.',
      },
      {
        q: 'Are there rules about this?',
        a: 'Some associations write sound transmission into their requirements for attached homes. We check what yours says before specifying.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Bathroom flooring in Loveland Park? Under the vinyl there is often particleboard. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Sheet vinyl in this housing was frequently laid over a particleboard underlayment, and particleboard swells irreversibly once wet — around a toilet or a tub edge that has weeped, it is usually crumbling by the time anyone lifts the covering. It has to come out rather than be tiled over, and finding that at quotation rather than at demolition is the difference between a fixed price and a revised one.',
    ],
    localFaqs: [
      {
        q: 'What is particleboard underlayment?',
        a: 'A common builder-grade layer under sheet vinyl that swells irreversibly once wet. Around a toilet or tub edge it is often crumbling, and it has to come out rather than be tiled over.',
      },
      {
        q: 'How do you find it before lifting the floor?',
        a: 'Soft spots underfoot and staining near fixtures are the tell. We lift a corner to confirm rather than pricing on a guess.',
      },
    ],
  },

  maineville: {
    intro:
      'Bathroom flooring in Maineville? Choose a floor for the household you will have. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'A floor outlasts almost everything else in a bathroom, which means it should suit the household in a decade rather than today. Genuine slip resistance matters when there are small children and again when there are not. A mid-tone grout survives a busy family bathroom where a pale one will not. And a level threshold serves a stroller now and a walker later. None of it costs more; it just has to be chosen deliberately.',
    ],
    localFaqs: [
      {
        q: 'What should we plan for long term?',
        a: 'Genuine slip resistance, mid-tone grout that survives a busy family bathroom, and a level threshold — which serves a stroller now and a walker later. None of it costs more.',
      },
      {
        q: 'Will a floor really last that long?',
        a: 'Tile on a sound substrate outlasts the vanity, the fixtures and several repaints. It is the element you keep through the next remodel rather than replace with it.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Bathroom flooring in Pleasant Plain? With one bathroom, three days is the real question. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'A tiled floor takes the bathroom out of use for the best part of three days because curing cannot be compressed, and out here there is nowhere else to go. That is why we ask about it before recommending a material — luxury vinyl is down and usable the same day. Where tile is the right answer, we schedule it as an uninterrupted block and sequence so the toilet goes back as early as the setting allows.',
    ],
    localFaqs: [
      {
        q: 'We have one bathroom — how long is it unusable?',
        a: 'The best part of three days for tile, because curing cannot be compressed. Luxury vinyl is usable the same day, which is why we ask before recommending a material.',
      },
      {
        q: 'Can the toilet go back sooner?',
        a: 'We sequence to refit it as early as the setting allows, and we will tell you honestly when that is rather than promising an evening we cannot hit.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Bathroom flooring in South Lebanon? In a newer home, check the builder warranty first. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'With this much new construction, plenty of homes here are still inside their builder warranty, and altering a floor assembly or disturbing plumbing can affect what it covers. Worth reading before commissioning work — and worth asking whether a problem you are trying to fix is actually theirs. The upside is that these floors are the easiest we work with: modern subfloor, flat, sound, one covering to remove.',
    ],
    localFaqs: [
      {
        q: 'Will new flooring affect our builder warranty?',
        a: 'It can, where the work touches the floor assembly or plumbing. Worth reading the terms first — and if there is a defect, it may be theirs to fix rather than yours to pay for.',
      },
      {
        q: 'Are newer floors easier to work with?',
        a: 'The easiest we see. Modern subfloor, flat, sound and usually one covering to remove, which takes most of the preparation cost out.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Bathroom flooring in Lawrenceburg? Above a business, the floor is their ceiling. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A good deal of downtown housing sits above ground-floor commercial space, and a bathroom floor over an occupied business is not somewhere to specify a shower-only waterproofed zone. A bonded membrane across the whole floor and up the wall base means an overflow is a mopping job rather than a claim and a closed shop. Indiana permitting applies where the work is inspectable, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Our apartment is above a shop — what is different?',
        a: 'A bonded membrane across the whole floor and up the wall base rather than a shower-only zone. Over an occupied business that is the job rather than an upgrade.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Where the work is inspectable it runs under Indiana rules rather than Ohio, which we confirm before scheduling.',
      },
    ],
  },

  greendale: {
    intro:
      'Bathroom flooring in Greendale? A hillside house may have a slab bathroom below and joists above. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Houses stepped into this hillside frequently have bathrooms on more than one level and built completely differently — a slab-on-grade lower one and a framed upper one. Those are separate jobs with separate concerns: moisture testing and an uncoupling membrane below, deflection and an overlay above. Where both are being done, they are quoted as two rather than averaged into one square-foot price.',
    ],
    localFaqs: [
      {
        q: 'Are our two bathrooms the same job?',
        a: 'Frequently not in a hillside house — a slab-on-grade lower one and a framed upper one have entirely different concerns. We quote them separately rather than averaging.',
      },
      {
        q: 'Is the lower one harder?',
        a: 'Different rather than harder. Moisture testing and an uncoupling membrane replace the deflection and overlay questions of an upper floor.',
      },
    ],
  },

  aurora: {
    intro:
      'Bathroom flooring in Aurora? Here is what we check before asking for the balance. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'Before the balance is due we walk it with you: every tile checked for lipping and hollow sound, the grout inspected across the whole floor, the perimeter joint confirmed as flexible sealant rather than grout, the threshold checked, the toilet tested for movement and the flange confirmed at the right height, and any heating run through its cycle. Anything you are not happy with is put right before the invoice rather than after.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'Every tile checked for lipping and hollow sound, the grout inspected, the perimeter joint confirmed as flexible sealant, the threshold checked, the toilet tested for movement and any heating run through its cycle.',
      },
      {
        q: 'What if a problem appears months later?',
        a: 'Tell us and we come back. Cracked grout from a floor that flexes is ours to put right — that is exactly what the workmanship warranty is for.',
      },
    ],
  },
};
