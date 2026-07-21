import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /custom-homes/[location].
 *
 * ⚠️ HARD RULE — NOTHING A BUYER COULD RELY ON AND LOSE MONEY.
 * This file must NEVER state:
 *   - a lot price, a cost per square foot, or any dollar figure,
 *   - a zoning figure — setback distance, minimum lot size, height limit,
 *     lot-coverage percentage,
 *   - a flood-zone designation or base flood elevation for any specific
 *     parcel ("much of the East End sits on river bottomland" is observable
 *     geography; "your lot is in Zone AE" is a determination we have not made),
 *   - a school rating or district boundary claim,
 *   - the boundary of a historic or overlay district.
 * Someone choosing a lot on the strength of one of those sentences could lose
 * a great deal. Where a figure matters, the page says who determines it.
 *
 * THE SPLIT WITH accessory-dwelling-units.ts — read before editing.
 *   ADU assumes the reader ALREADY OWNS the lot and is adding a second, small
 *   dwelling behind an existing house. Its angles are: whether an ADU is
 *   permitted at all, which authority governs, back-yard setbacks and
 *   coverage, getting equipment past an existing house, utility runs from that
 *   house, septic capacity for a second unit, garage and basement conversions.
 *   NONE of that belongs here.
 *
 *   CUSTOM HOMES is whole-lot, whole-house, and usually BEFORE PURCHASE.
 *   Its angles are: evaluating a candidate lot before you buy it, why a
 *   given vacant lot is still vacant, teardown-and-rebuild economics,
 *   soils and geotechnical work as a purchase condition, new construction
 *   under design review, massing and scale against an established street,
 *   deed restrictions and architectural review boards, utility extension
 *   distance, septic and well on unsewered ground, the building envelope and
 *   mechanical specification, allowances and change-order discipline, and
 *   construction financing.
 *
 * Facts used here (ZIP, county, parent city) come from content/locations.ts
 * and are cross-checked by script. Housing-era and terrain statements are
 * general and observable, never parcel-specific.
 */
export const customHomesCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Building new in Sedamsville? Get the soils report before you buy the lot, not after. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) climbs the west-side hillside above River Road between Riverside and Sayler Park, and most of what stands there went up in the late 1800s and early 1900s, when houses were set into the slope by hand.',
      'On ground like this the lot decides the house, and the geotechnical report decides the lot. What the soil will carry, how deep competent bearing sits, and whether the cut needs engineered retaining are questions worth answering while you can still walk away from the purchase. We would rather review a candidate parcel with you before there is a contract on it than design a house for ground that will not take one economically.',
    ],
    localFaqs: [
      {
        q: 'Should I get soils tested before buying a hillside lot here?',
        a: 'Yes, and ideally as a condition of the purchase. Foundation design on this terrain follows the soils report, and it is the single largest swing in what a build costs.',
      },
      {
        q: 'Will you look at a lot before I own it?',
        a: 'That is the conversation we prefer to have. Once you own a difficult parcel your options narrow considerably.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Building new in Sayler Park? A village character worth designing to. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, an independent village called Home City until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses running down toward the Ohio.',
      'A new house on a street with that much intact character is a design problem before it is a construction one. Roof pitch, porch depth, window proportion and how the front sits relative to its neighbors are what make a new build read as belonging rather than as an intrusion. We design to the street, not from a plan book, and where a review body has a view on the elevations we would rather hear it at the drawing stage.',
    ],
    localFaqs: [
      {
        q: 'Can a new house fit a street this old?',
        a: 'It can, and it comes down to proportion — roof pitch, porch depth, window rhythm and how the facade lines up with its neighbors. Those get designed deliberately rather than inherited from a stock plan.',
      },
      {
        q: 'Do we have to build in a traditional style?',
        a: 'Not necessarily. We build traditional, transitional and modern. What matters is scale and materials against the street, which is a design conversation we have early.',
      },
    ],
  },

  riverside: {
    intro:
      'Building new in Riverside? On river bottomland, elevation drives the whole design. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, hillside on one side and the Ohio on the other, with much of its ground low and flat.',
      'Where a lot sits relative to flood elevation changes the foundation, the first-floor height, the driveway and what it costs to insure for the life of the house. Those are determinations made by the floodplain administrator and a surveyor, not by us and not by a listing — so on low ground we get them established before a purchase closes. On some parcels the answer makes the build uneconomic, and that is worth knowing early.',
    ],
    localFaqs: [
      {
        q: 'Can we build new on low ground near the river?',
        a: 'Often yes, but the required elevation drives the foundation, the first-floor height and the insurance. Those get determined by the floodplain administrator and a surveyor before you commit.',
      },
      {
        q: 'Could the flood requirements make it not worth it?',
        a: 'On some parcels, yes — the foundation cost stops being proportionate to the house. We would rather establish that before you buy than after.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Building new in East Price Hill? Plenty of lots — the question is why they are empty. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the hilltop above the basin west of the viaducts, a dense grid of late-1800s and early-1900s housing with long views east over the city and a scattering of parcels where houses once stood.',
      'A vacant lot in a fully built neighborhood always has a reason behind it, and finding that reason is the first job. Sometimes it is simply a demolition and the ground is fine. Sometimes there is an old foundation or cistern to remove, a sewer lateral of unknown condition, or a grade that made the original house a difficult one. We establish which of those you are dealing with before you buy, because the answer is the difference between a straightforward build and an expensive one.',
    ],
    localFaqs: [
      {
        q: 'There are empty lots here — are they cheap to build on?',
        a: 'Sometimes. A lot is usually vacant for a reason: an old foundation or cistern still in the ground, an unknown sewer lateral, or an awkward grade. We find out which before you buy.',
      },
      {
        q: 'What happens to the old foundation if a house was demolished?',
        a: 'It depends what was left behind. Some demolitions are backfilled properly and some are not, and removing what remains is a real line item rather than a rounding error.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Building new in West Price Hill? A big neighborhood with room to build. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is one of Cincinnati’s largest neighborhoods by area, running west from the Price Hill hilltop toward Covedale in a mix of early-1900s frame houses and post-war brick, on gentler ground than the streets nearer the viaducts.',
      'Gentler ground and a wider range of parcel sizes make this one of the more workable places on the west side to build new. What still needs settling before purchase is the practical set: where the utilities actually run and what it costs to reach them, how a driveway meets the street on a sloping approach, and whether the lot is wide enough for the plan you have in mind once the required side clearances are applied.',
    ],
    localFaqs: [
      {
        q: 'Is it easier to build here than on the steeper hillsides?',
        a: 'Generally, yes. The ground is gentler and parcels vary more in size, so foundations tend to be more predictable and the cost less site-driven.',
      },
      {
        q: 'What decides whether my plan fits the lot?',
        a: 'The buildable area left once the required clearances are applied, which the jurisdiction sets. We check that against your plan before you buy rather than after.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Building new in Lower Price Hill? A small, tight, industrial-edged basin neighborhood. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is a compact neighborhood on the flat below the hill, wedged between the Mill Creek, the river and the rail and industrial corridor, with 19th-century brick housing on a tight street grid.',
      'Building new on a basin lot this size is largely a logistics problem. Narrow streets, no side yard to stage from, and neighbors on both party lines mean deliveries, excavation spoil and any lifting have to be planned rather than improvised. Ground with an industrial history also deserves an environmental look before purchase — what was previously on a parcel is a reasonable question here, and a cheap one to answer early.',
    ],
    localFaqs: [
      {
        q: 'Can you build on a narrow basin lot with no side access?',
        a: 'Yes, but it is a logistics job — deliveries, spoil removal and lifting get planned in advance because there is nowhere to improvise on site.',
      },
      {
        q: 'Should I check what was on the lot before?',
        a: 'On ground near the industrial and rail corridor, yes. An environmental review before purchase is inexpensive relative to what it can uncover.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Building new in Over-the-Rhine? Infill here goes through design review. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest concentrations of 19th-century Italianate architecture in the country, built at three and four storeys on a dense street wall, and the surviving gaps in that wall are where new construction happens.',
      'New building in a neighborhood of this character is reviewed on how it sits in the street wall — height, cornice line, window proportion, materials and how the ground floor meets the pavement. Which parcels are subject to that review and what it requires is determined by the city and its review body, so we establish it in writing before design begins. Between party walls the construction is its own discipline too: underpinning, shoring and protecting the buildings either side are part of the job, not an afterthought.',
    ],
    localFaqs: [
      {
        q: 'Can you build new in Over-the-Rhine?',
        a: 'On the gap sites, yes. Whether a parcel falls under design review and what that review requires is determined by the city, and we confirm it in writing before anyone pays for drawings.',
      },
      {
        q: 'What is different about building between two existing buildings?',
        a: 'Protecting them. Underpinning, shoring and surveying the neighbouring structures before and during the work are part of the scope on a party-wall site.',
      },
    ],
  },

  downtown: {
    intro:
      'Building new Downtown? Rare ground, and a different kind of project. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) is the central business district between the river and Central Parkway, where the building stock is commercial and multi-storey and detached single-family ground effectively does not come up.',
      'We will say plainly that a ground-up single-family house is not really a Downtown project — the parcels are commercial, and what people are usually asking about here is a residential conversion or a fit-out within an existing building. That is work we do, and it is a different conversation from a custom home. If you are looking to build new and want to stay close to the centre, the basin edges and the near hillsides are where the ground actually exists.',
    ],
    localFaqs: [
      {
        q: 'Can I build a house Downtown?',
        a: 'Realistically, no — the parcels are commercial and multi-storey. Most Downtown enquiries are really conversions or fit-outs inside an existing building, which is different work.',
      },
      {
        q: 'Where should I look instead if I want to be central?',
        a: 'The basin edges and near hillsides — Over-the-Rhine, Pendleton, Mount Auburn, the West End — are where buildable ground actually comes up.',
      },
    ],
  },

  'west-end': {
    intro:
      'Building new in the West End? Vacant ground exists here — check its history. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) lies between Central Parkway and the Mill Creek industrial corridor, a neighborhood whose 19th-century fabric was heavily cleared through the 20th century, leaving a mix of surviving blocks, mid-century housing and open parcels.',
      'Where ground was cleared decades ago, the useful questions are what was demolished, whether it was backfilled to a standard anyone recorded, and what utilities were capped and left. A parcel that looks like a clean grassed lot can carry an old foundation, a filled basement or an abandoned lateral. Those are all solvable, but they are costs, and they belong in the purchase decision rather than in a change order at excavation.',
    ],
    localFaqs: [
      {
        q: 'What should I check on a long-vacant West End lot?',
        a: 'What was demolished, how it was backfilled and what utilities were capped and abandoned. A clean-looking grassed lot can still hold an old foundation or a filled basement.',
      },
      {
        q: 'Does that show up on a survey?',
        a: 'Not always. It usually takes a look at records plus some physical investigation, which is worth doing while you can still renegotiate or walk away.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Building new on Mount Adams? Steep, tight and worth doing properly. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) sits on the bluff directly above the basin, a hillside neighborhood of narrow streets and closely packed 19th-century and later houses turned toward the river and the city.',
      'Two things govern building here, and both start before purchase. The slope decides the structure — bearing depth, retaining and how a house steps down a grade this steep are engineering questions with real cost attached. Access decides the schedule — streets this narrow limit what can reach a site and when, so deliveries, concrete and any lifting get sequenced in advance. A view lot is worth having; it is also the most site-driven kind of build there is.',
    ],
    localFaqs: [
      {
        q: 'What makes a Mount Adams build expensive?',
        a: 'The site, more than the house. Bearing depth, retaining and stepping the structure down a steep grade are engineered solutions, and narrow-street access limits how efficiently anything reaches the lot.',
      },
      {
        q: 'Is the view worth the site cost?',
        a: 'That is your call, but it should be an informed one. We price the site work honestly before you commit rather than discovering it at excavation.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Building new in Mount Auburn? One of the city’s oldest hilltops. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is Cincinnati’s first hilltop suburb, rising directly north of the basin, with substantial 19th-century houses on steep, winding streets and long views back over Downtown.',
      'Ground with that much history behind it tends to carry history underground too — earlier foundations, filled cisterns, old retaining walls holding a terrace that someone cut a century ago. A retaining structure of unknown age on a parcel you are buying is a real liability, because if it fails it is yours. We look at what is holding the ground up as part of reviewing a lot here, alongside the usual bearing and access questions.',
    ],
    localFaqs: [
      {
        q: 'What is the risk with old retaining walls on a lot?',
        a: 'If one is holding your terrace up and it fails, it is your problem and an expensive one. Age and condition are worth assessing before you buy, not after.',
      },
      {
        q: 'Do old cisterns and foundations turn up here?',
        a: 'On ground built and rebuilt since the 1800s, regularly. They are removable, but they are a cost and they belong in the purchase decision.',
      },
    ],
  },

  clifton: {
    intro:
      'Building new in Clifton? A neighborhood of set-pieces, and a high design bar. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is known for its 19th-century estate houses along Clifton and Lafayette Avenues and the Gaslight district around Ludlow, a neighborhood of mature trees, generous setbacks and unusually varied architecture.',
      'Buildable ground here is scarce and almost always comes as a subdivision of a larger parcel or a teardown, and either way the new house is going to be looked at closely. Mature trees are the other real constraint: a specimen tree’s root zone limits where you can excavate and stage, and losing one changes a street that people chose to live on. Both belong in the design from the beginning rather than being discovered by an arborist mid-build.',
    ],
    localFaqs: [
      {
        q: 'Is there anywhere left to build in Clifton?',
        a: 'Rarely as open ground. It is usually a subdivision of a larger parcel or a teardown, and both draw more scrutiny than a build on open land.',
      },
      {
        q: 'How do the mature trees affect the build?',
        a: 'A specimen tree’s root zone limits where you can excavate and stage, so it shapes the siting. We would rather design around one than lose it.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Building new in Corryville? Know what the ground is really worth here. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits immediately around the University of Cincinnati and the Uptown hospital campuses, and its housing reflects that — older frame and brick houses, much of it long since converted to student and staff rental.',
      'The honest issue here is not whether you can build but what the ground competes with. Parcels near the campuses are valued for what a multi-unit rental would earn on them, which sets a floor under land prices that a single-family build has to clear. If you want to be this close to Uptown it is worth knowing that going in — and worth confirming what the zoning actually permits, since a parcel priced as multi-family ground is not always zoned for the house you have in mind.',
    ],
    localFaqs: [
      {
        q: 'Why is land near the university expensive?',
        a: 'It is priced against what a multi-unit rental would earn on it rather than against what a single house is worth. That sets a floor a custom build has to clear.',
      },
      {
        q: 'Can I build a single-family house here?',
        a: 'Where the zoning permits it, yes. Worth confirming early, because ground priced as multi-family is not always zoned for what you want to build.',
      },
    ],
  },

  northside: {
    intro:
      'Building new in Northside? Genuine infill ground, and a street that will notice. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) runs along Hamilton Avenue north-west of the Mill Creek valley, a mixed neighborhood of late-1800s and early-1900s frame housing with an independent streak and a scattering of gap sites through its residential blocks.',
      'This is one of the more realistic places in the city to build new, because the gaps genuinely exist. What they ask of a design is that it engage the street the way its neighbors do — porch to the pavement, a front door you can see, a scale that sits alongside a two-storey frame house rather than over it. A new build that turns its back on the street gets noticed here, and it is an easy thing to get right at the drawing stage.',
    ],
    localFaqs: [
      {
        q: 'Are there really buildable lots in Northside?',
        a: 'Yes, more than in most established city neighborhoods. They are worth checking for old foundations and abandoned laterals before purchase.',
      },
      {
        q: 'What makes a new house fit in here?',
        a: 'Engaging the street the way its neighbors do — porch to the pavement, a visible front door, and a scale that sits alongside its neighbors rather than above them.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Building new in College Hill? Bigger parcels than most of the city. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) sits on the north-western ridge, a neighborhood that grew around 19th-century institutions and estates and still has generous lot sizes, mature trees and pockets of substantial older housing along Hamilton Avenue and Belmont.',
      'Larger parcels mean buildable ground here more often comes from a subdivision than from a gap site — a different transaction, with its own approvals, survey work and timetable. Whether a parcel can be split, and on what terms, is determined by the city rather than by the seller. That is worth establishing before you agree a price on the assumption that it can be.',
    ],
    localFaqs: [
      {
        q: 'Can I split a large lot and build on part of it?',
        a: 'Sometimes, and it is the city that determines it rather than the seller. Establish it before agreeing a price that assumes the split is possible.',
      },
      {
        q: 'How much does a lot split add to the schedule?',
        a: 'It is a separate approval with its own survey work and timetable, so it belongs in the programme rather than being discovered inside it.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Building new in Walnut Hills? Decide early: restore or rebuild. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a 19th-century hilltop neighborhood of substantial brick and stone houses on the ridge east of the basin, with grand surviving blocks alongside ground cleared during the last century.',
      'The recurring question here is whether an existing house is worth saving or whether the value is really in the land. That is a genuine assessment rather than a sales position — structure, roof, envelope and what the interior would take, weighed against what a new build on the same ground would cost. We are content to reach either conclusion. What we will not do is call a sound house a teardown because rebuilding is the larger contract.',
    ],
    localFaqs: [
      {
        q: 'Should I restore the old house or tear it down?',
        a: 'It depends on the structure, roof and envelope weighed against what a new build on the same ground would cost. We assess it properly and are content either way.',
      },
      {
        q: 'Would you ever tell me not to rebuild?',
        a: 'Yes, if the existing house is sound and worth saving. Calling a good house a teardown because it makes a bigger contract is not how we work.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Building new in East Walnut Hills? Ravine lots need engineering, not optimism. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) holds some of the city’s most substantial older houses around Madison Road and Grandin, on a ridge that drops away sharply into wooded ravines toward the east and south.',
      'A lot that backs onto a ravine sells on the view and builds on the engineering. How far the buildable ground extends before the grade turns, what the slope is doing over time and whether the rear needs structural support are geotechnical questions with real answers. A parcel here can be well worth it, but the usable footprint is often smaller than the deed suggests — which is worth knowing before you design a house to fill it.',
    ],
    localFaqs: [
      {
        q: 'Can I build close to the ravine edge?',
        a: 'That is a geotechnical question, and the buildable ground is often smaller than the parcel looks. Establish it before designing a house sized to the deed.',
      },
      {
        q: 'Are the wooded slopes stable?',
        a: 'It varies parcel by parcel and it gets assessed rather than assumed. Where the grade falls away sharply, that assessment belongs in the purchase decision.',
      },
    ],
  },

  avondale: {
    intro:
      'Building new in Avondale? Look at what surrounds the parcel. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits between the Uptown hospital and university campuses and Reading Road, with grand late-1800s and early-1900s houses on the northern streets and a good deal of ground cleared over the last century.',
      'Vacant parcels are genuinely available here, and what is worth checking is not only the lot but its surroundings. What sits either side, what the zoning permits on the neighbouring ground, and whether an institutional expansion is planned nearby all affect what a new house is worth in ten years. Those are fair questions to ask before buying, and the answers are on the public record rather than in a listing.',
    ],
    localFaqs: [
      {
        q: 'What should I check before buying a vacant lot here?',
        a: 'What the zoning permits on the parcels either side, and whether any institutional expansion is planned nearby. Both are on the public record and both affect long-term value.',
      },
      {
        q: 'Is it worth building new in Avondale?',
        a: 'On the right parcel it can be, and the northern streets have real architectural quality. The surroundings matter as much as the lot itself.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Building new in Hyde Park? Almost always a teardown — get the arithmetic straight. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is one of Cincinnati’s most established east-side neighborhoods, built largely between the 1890s and the 1930s around Hyde Park Square, with mature streets and very little undeveloped ground left.',
      'Building new here means buying a house in order to remove it, which changes the arithmetic entirely. You are paying for a property you will demolish, plus the demolition, plus utility disconnection and reconnection, plus the new house — and the land is the largest single number in that stack. It works where the location is genuinely worth it and the existing house genuinely is not. We put those figures side by side before you commit, because the teardown route only makes sense when the total is visible.',
    ],
    localFaqs: [
      {
        q: 'Is a teardown and rebuild worth it in Hyde Park?',
        a: 'It can be where the location is right and the existing house genuinely is not worth saving. The land is the biggest number in the stack, so the full arithmetic needs to be on the table first.',
      },
      {
        q: 'What costs get forgotten on a teardown?',
        a: 'The demolition itself, utility disconnection and reconnection, and any review required before the existing house can come down.',
      },
    ],
  },

  oakley: {
    intro:
      'Building new in Oakley? Narrow lots, and some ground with an industrial past. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) grew as a working neighborhood around the factories along the rail corridor, and its residential blocks are largely early-1900s houses on narrow lots, with the former industrial edges now redeveloping.',
      'Two different builds happen here. On the residential grid it is an infill or a teardown on a narrow lot, where the binding constraint is the width left once side clearances are applied and whether the plan you like actually fits it. Nearer the old industrial and rail edges the question is what the ground was previously used for — an environmental review before purchase is a reasonable precaution there, and an inexpensive one relative to what it can find.',
    ],
    localFaqs: [
      {
        q: 'Will my plan fit an Oakley lot?',
        a: 'On the narrow residential lots width is the binding constraint once the required side clearances are applied. We check the plan against the actual buildable width before you buy.',
      },
      {
        q: 'Should I worry about the old factory ground?',
        a: 'Near the former industrial and rail edges it is worth an environmental review before purchase — cheap relative to what it can uncover.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Building new in Mount Lookout? Scale is what the street will judge. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) sits on the ridge above the river on the east side, a settled neighborhood around Mount Lookout Square with tree-lined streets and housing running from early-1900s frame to mid-century brick.',
      'New building here is nearly always a replacement on an existing lot, and the design question that matters most is scale. A house built out to the full permitted envelope on a street of smaller older homes reads as out of place however good the detailing is. Getting the massing right — how the ridge line sits against its neighbors, where the bulk goes, how the front elevation is broken up — is the difference between a new house that settles into a street and one that argues with it.',
    ],
    localFaqs: [
      {
        q: 'Can I build to the maximum the lot allows?',
        a: 'Usually you can, and it is worth asking whether you should. On a street of smaller older houses, massing is what makes a new build read as belonging.',
      },
      {
        q: 'How do you handle the scale question?',
        a: 'By designing the massing deliberately — where the bulk sits, how the ridge line relates to the neighbors, how the front elevation breaks up. It is a drawing-stage decision.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Building new in Columbia-Tusculum? The city’s oldest ground, and low in places. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest settled neighborhood, known for the brightly painted Victorian houses on its hillside and for the flatter ground below running toward the river.',
      'The neighborhood splits in two for building purposes. On the hillside the constraints are slope, access and designing something that can stand next to houses people stop to photograph. On the lower ground toward the river, elevation relative to flood requirements governs the foundation, the first-floor height and the insurance — a determination made by the floodplain administrator and a surveyor, and one worth having before a purchase closes rather than at permit review.',
    ],
    localFaqs: [
      {
        q: 'Does the flood question apply to the whole neighborhood?',
        a: 'No — it is the lower ground toward the river where elevation governs the design. The hillside parcels are a slope and access question instead.',
      },
      {
        q: 'Can a new house sit alongside the painted Victorians?',
        a: 'Yes, with proportion and materials handled deliberately. It is a street people look at, which is a reason to design carefully rather than a reason not to build.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Building new in Mount Washington? Real buildable ground on the east side. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) occupies the hilltop at the eastern edge of the city above the river, with much of its housing built post-war on larger and more regular lots than the older neighborhoods closer in.',
      'This is one of the more straightforward places inside the city limits to build new. Lots are generally wider and flatter, foundations are more predictable, and getting equipment to a site is rarely the problem it is on the near hillsides — so more of the budget goes into the house rather than into the ground. What still needs settling before purchase is ordinary: where the sewer and water actually run, what reaching them costs, and whether the buildable area once clearances are applied matches the house you want.',
    ],
    localFaqs: [
      {
        q: 'Is it easier to build here than closer in?',
        a: 'Generally yes. Wider, flatter lots and straightforward equipment access mean more of the budget goes into the house instead of the site.',
      },
      {
        q: 'What still needs checking before I buy?',
        a: 'Where the sewer and water actually run and what reaching them costs from your parcel, plus the buildable area left once the required clearances are applied.',
      },
    ],
  },

  madisonville: {
    intro:
      'Building new in Madisonville? Infill ground, and plenty of it. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood with its own historic centre around Madison Road and Whetsel, long established and seeing steady new residential investment alongside its older frame and brick housing.',
      'Gap sites are more available here than in most settled east-side neighborhoods, which makes this one of the more practical places to build new rather than buy and demolish. On a parcel where a house previously stood, the sewer lateral is the item most often overlooked — its age, its condition, and whether it is even where the records say it is. Finding out at excavation is worse and more expensive than finding out before the purchase closes.',
    ],
    localFaqs: [
      {
        q: 'Why build here rather than buy and tear down?',
        a: 'Because gap sites genuinely exist in Madisonville, and building on open ground avoids paying for a house you intend to remove.',
      },
      {
        q: 'What gets missed on a lot where a house once stood?',
        a: 'The sewer lateral — its age, condition and actual location. Far cheaper to establish before the purchase than at excavation.',
      },
    ],
  },

  'pleasant-ridge': {
    intro:
      'Building new in Pleasant Ridge? A bungalow street sets the scale. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a north-east-side neighborhood built largely between the 1910s and the 1930s, with a notably consistent streetscape of bungalows and small colonials on regular, fairly narrow lots.',
      'That consistency is the thing to design with. On a street where the houses share a setback, a porch line and roughly a storey and a half, a new build that ignores all three is conspicuous no matter how well it is finished. The lots are also narrower than they look once side clearances are applied, so the realistic footprint often points toward building up rather than out — a decision worth making deliberately at the drawing stage rather than discovering late.',
    ],
    localFaqs: [
      {
        q: 'Will a two-storey house look wrong on a bungalow street?',
        a: 'Not if the massing is handled. Setback, porch line and how the bulk is broken up matter more than storey count, and all three are design-stage decisions.',
      },
      {
        q: 'How wide are the lots really?',
        a: 'Narrower than they appear once the required side clearances are applied, which often points a design upward rather than outward. We check that against your plan first.',
      },
    ],
  },

  westwood: {
    intro:
      'Building new in Westwood? The city’s biggest neighborhood, and its most varied. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is Cincinnati’s largest neighborhood by population, running across the west side with everything from 19th-century estate houses near Harrison Avenue to dense early-1900s blocks and post-war subdivisions.',
      'That variety means there is no single Westwood answer — a parcel near the older estate streets is a completely different proposition from a gap site on a dense block or ground carved out of a larger holding. What stays consistent is that the parcel decides the project, so the first piece of work is the same either way: what the ground will take, what it is zoned for, where the utilities run, and whether what you want to build actually fits once the rules are applied.',
    ],
    localFaqs: [
      {
        q: 'What kind of lots come up in Westwood?',
        a: 'All kinds — ground near the older estate streets, gap sites on the dense blocks, and parcels split out of larger holdings. They are genuinely different projects.',
      },
      {
        q: 'Where do we start?',
        a: 'With the specific parcel: what it will take structurally, what it is zoned for, where the utilities run, and whether your plan fits once the rules are applied.',
      },
    ],
  },

  // ---------- Cohort 3 · Independent Hamilton County cities, NKY river cities & the growth corridor ----------

  norwood: {
    intro:
      'Building new in Norwood? Its own city, with its own rules. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is a separate city entirely surrounded by Cincinnati, built out densely in the early 1900s around what was then a major industrial employer, with tight lots on a regular grid.',
      'Being an independent municipality is the practical fact here: Norwood sets its own zoning and issues its own permits, so nothing about a Cincinnati approval carries across the boundary. Open ground is scarce, which makes most new building a replacement on an existing lot. On parcels near the old industrial corridor, what the ground was previously used for is a reasonable question to settle before a purchase closes.',
    ],
    localFaqs: [
      {
        q: 'Does Cincinnati zoning apply in Norwood?',
        a: 'No. Norwood is its own city with its own zoning and its own building department, even though Cincinnati surrounds it. We confirm requirements with Norwood directly.',
      },
      {
        q: 'Is there open ground to build on?',
        a: 'Very little. Most new building here is a replacement on an existing lot, so the purchase and the demolition are part of the arithmetic.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Building new in Blue Ash? Mature suburb, generous lots, its own city hall. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is an independent city in north-eastern Hamilton County with a substantial commercial and corporate base, and residential streets built largely post-war on generous, well-treed lots.',
      'Lot sizes here are the advantage — there is usually room to place a house properly rather than squeezing it between clearances, and the ground is generally straightforward to build on. Blue Ash runs its own zoning and permitting, so requirements are confirmed with the city rather than the county. Where a parcel comes with mature trees worth keeping, siting the house around the significant ones is a design decision we would rather make early than lose by default.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permits in Blue Ash?',
        a: 'The city does. Blue Ash sets its own zoning and runs its own permitting, so requirements get confirmed with the city rather than assumed from county practice.',
      },
      {
        q: 'Are the lots big enough to site a house properly?',
        a: 'Generally yes — that is the real advantage here. There is usually room to place the house well rather than fit it between minimum clearances.',
      },
    ],
  },

  montgomery: {
    intro:
      'Building new in Montgomery? A city that takes its architecture seriously. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an independent city in north-eastern Hamilton County that grew from a 19th-century village, and it has kept the character of its old centre while developing substantial residential streets around it.',
      'Montgomery is more attentive to how buildings look than most municipalities in the county, and where its historic-area standards apply they can shape elevations, materials and detailing in real ways. What those standards require for a specific parcel is determined by the city, so we establish it in writing before design begins rather than presenting drawings and finding out. Handled in that order it is a straightforward process; handled backwards it is an expensive redesign.',
    ],
    localFaqs: [
      {
        q: 'Will the city have a view on how my house looks?',
        a: 'Quite possibly. Montgomery pays closer attention to elevations, materials and detailing than most, and where its historic-area standards apply they carry real weight.',
      },
      {
        q: 'How do we avoid a redesign?',
        a: 'By confirming what applies to your specific parcel in writing before design begins rather than after drawings are paid for.',
      },
    ],
  },

  madeira: {
    intro:
      'Building new in Madeira? A strong teardown market — and a watchful one. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is a small independent city on the east side, largely built out with mid-century ranches and capes on regular lots, and long popular enough that turnover tends to mean replacement rather than vacancy.',
      'Replacing a modest post-war house with a larger new one is common here, and it is exactly the situation where scale needs handling with care. A house that fills its permitted envelope beside a single-storey ranch changes the street, and neighbors notice. Madeira sets its own zoning and permits, so the limits come from the city — but staying inside them is the floor, not the goal. The design work is in making the new house sit comfortably where it lands.',
    ],
    localFaqs: [
      {
        q: 'Can I replace a ranch with a much larger house?',
        a: 'Within the city limits on size, generally yes. Whether it sits well beside single-storey neighbors is a separate design question, and worth taking seriously.',
      },
      {
        q: 'Who sets the rules here?',
        a: 'Madeira does — it is its own city with its own zoning and permitting, so county practice is not the reference point.',
      },
    ],
  },

  wyoming: {
    intro:
      'Building new in Wyoming? Architecture and tree canopy both matter here. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is an independent city north of Cincinnati known for its 19th-century and early-1900s houses, its mature street tree canopy and an unusually strong sense of architectural continuity.',
      'Two things shape a new build here beyond the ordinary rules. The first is design: on streets with this much intact period architecture, proportion, materials and roof form carry weight, and where the city has standards that apply they are worth establishing before drawings. The second is the canopy — mature trees are part of why people live here, and a specimen tree’s root zone genuinely constrains where you can excavate and stage. Both are easier to design around than to fix afterwards.',
    ],
    localFaqs: [
      {
        q: 'Does Wyoming have design standards for new houses?',
        a: 'Where they apply they carry real weight, and what applies to a specific parcel is determined by the city. We establish it in writing before design begins.',
      },
      {
        q: 'Can we keep the mature trees?',
        a: 'Usually, with the siting planned around the significant ones. A specimen tree’s root zone limits where you can excavate and stage, so it shapes the design early.',
      },
    ],
  },

  mariemont: {
    intro:
      'Building new in Mariemont? A planned village with genuine design control. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned garden village laid out in the 1920s to a single coherent design, with Tudor and English-village architecture arranged around a central square, and it has protected that character deliberately ever since.',
      'This is the most design-controlled place we build in, and rightly so — the whole point of Mariemont is that it was designed as one thing. What is permitted on a specific parcel, and what the elevations and materials have to do, is determined by the village and its review process. We treat that as the starting point rather than an obstacle: establish what is required, design to it, then build. Approaching a village like this with a stock plan is not a realistic route.',
    ],
    localFaqs: [
      {
        q: 'Can you build a new house in Mariemont?',
        a: 'Where a parcel allows it, yes, and the design process is led by what the village requires. That gets established in writing before any drawings are paid for.',
      },
      {
        q: 'Could we build something modern here?',
        a: 'That is the village’s decision rather than ours. Mariemont was laid out as a single coherent design and it protects that, so the review process is the place that question gets answered.',
      },
    ],
  },

  cheviot: {
    intro:
      'Building new in Cheviot? Its own small city, and tightly built. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a compact independent city on the west side, surrounded by Cincinnati and Green Township, built out early in the 20th century on a tight grid of modest frame and brick houses.',
      'Cheviot issues its own permits and sets its own zoning, which is the first thing to establish since it is easy to assume Cincinnati rules apply on a street that looks continuous with Westwood. Open ground is genuinely scarce, so building new usually means buying an existing house to replace. On lots this size the buildable width once clearances are applied is the constraint that most often reshapes a plan, and it is worth checking before the purchase rather than after.',
    ],
    localFaqs: [
      {
        q: 'Is Cheviot part of Cincinnati?',
        a: 'No. It is its own city with its own zoning and permitting, even though the streets run continuously into Cincinnati neighborhoods.',
      },
      {
        q: 'What usually limits the design here?',
        a: 'Buildable width once the required side clearances are applied. On lots this size that is what most often reshapes a plan, so we check it before you buy.',
      },
    ],
  },

  covedale: {
    intro:
      'Building new in Covedale? Solid 1920s-to-1940s ground on the west side. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) sits on the west side beyond Price Hill toward Green Township, developed largely between the 1920s and the 1940s with brick and frame houses on regular lots and gentler ground than the hillsides nearer the river.',
      'The terrain here is more forgiving than most of the west side, which makes foundations more predictable and keeps more of the budget in the house. The item worth checking before purchase is which authority you are actually dealing with: the area sits near a jurisdictional boundary, and whether a specific parcel is governed by the city or the township determines the zoning, the permitting and who you talk to. We confirm that for the address rather than the neighborhood name.',
    ],
    localFaqs: [
      {
        q: 'Who governs building in Covedale?',
        a: 'It depends on the specific parcel — the area sits near a jurisdictional boundary. We confirm which authority applies to your address rather than assuming from the neighborhood name.',
      },
      {
        q: 'Is the ground easier to build on here?',
        a: 'Generally, yes. It is gentler than the hillsides nearer the river, so foundations are more predictable and more of the budget goes into the house.',
      },
    ],
  },

  covington: {
    intro:
      'Building new in Covington? Kentucky code, and a very old riverfront city. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) is the largest city in Kenton County, sitting across the Ohio from downtown Cincinnati, with a 19th-century core of brick rowhouses and townhouses and several distinct historic neighborhoods near the river and the Licking.',
      'Building here means building in Kentucky, and that is more than a formality: the applicable building code, the permitting authority and the inspection regime are all Kentucky’s, not Ohio’s. Financing and appraisal can differ across the river too. On top of that, Covington has genuine historic areas where new construction is reviewed on how it meets the street. Which of those apply to a specific parcel is determined by the city, and we establish it before design.',
    ],
    localFaqs: [
      {
        q: 'Is building in Kentucky different from Ohio?',
        a: 'Yes — different code, different permitting authority and different inspections, and financing and appraisal can differ too. We work on both sides of the river regularly.',
      },
      {
        q: 'Will new construction be design-reviewed?',
        a: 'In Covington’s historic areas it can be, and how a new building meets the street matters. What applies to your parcel is determined by the city, established before design.',
      },
    ],
  },

  newport: {
    intro:
      'Building new in Newport? River city ground, Kentucky rules. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) sits at the confluence of the Licking and the Ohio in Campbell County, a dense old river city of 19th-century housing with the redeveloped riverfront on one side and established residential streets climbing away from it.',
      'Two things govern here. Newport is in Kentucky, so the code, the permits and the inspections are Kentucky’s and nothing about an Ohio approval transfers. And on the lower ground near two rivers, elevation relative to flood requirements shapes the foundation, the first-floor height and the long-term insurance cost — determined by the floodplain administrator and a surveyor rather than by a listing, and worth having before a purchase closes.',
    ],
    localFaqs: [
      {
        q: 'Does the flood question affect all of Newport?',
        a: 'No, it depends where the parcel sits. On the lower ground near the rivers it drives the foundation and the insurance, and that gets determined before you commit.',
      },
      {
        q: 'Do you build in Kentucky as well as Ohio?',
        a: 'Regularly. Kentucky has its own code, permitting and inspections, which we handle as part of the same contract.',
      },
    ],
  },

  bellevue: {
    intro:
      'Building new in Bellevue? A small river city on narrow lots. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Campbell County river city just east of Newport, known for its walkable Fairfield Avenue centre and closely spaced 19th-century and early-1900s houses on narrow lots running back from the river.',
      'Lot width is the defining constraint here — many parcels are narrow enough that the buildable footprint once side clearances are applied is considerably less than the deed dimensions suggest, and that reshapes plans more often than anything else. Access for construction is tight for the same reason. And on the lower ground toward the river, elevation requirements govern the foundation. All three are worth establishing before a purchase rather than at design.',
    ],
    localFaqs: [
      {
        q: 'Are the lots wide enough to build on?',
        a: 'Often narrower than the deed suggests once the required side clearances are applied. We check the real buildable footprint against your plan before you buy.',
      },
      {
        q: 'Is access a problem on these streets?',
        a: 'It needs planning. Narrow lots and narrow streets mean deliveries, excavation spoil and lifting get sequenced rather than improvised.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Building new in Fort Thomas? A hilltop city where teardowns are common. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) sits on the Campbell County ridge above the Ohio, an established city with tree-lined streets, substantial older houses and long views over the river valley.',
      'Most new building here is a replacement rather than a build on open ground, so the project starts with a property purchase and a demolition before it starts with a house. The ridge topography is the other factor: parcels that fall away toward the river offer the views people want and bring the engineering that goes with them — bearing depth, retaining and how the structure steps down. Worth pricing honestly before you buy rather than at excavation.',
    ],
    localFaqs: [
      {
        q: 'Is a teardown normal in Fort Thomas?',
        a: 'It is the usual route, since open ground is scarce. That means the property purchase and demolition are part of the budget before the house is.',
      },
      {
        q: 'Do the view lots cost more to build on?',
        a: 'Typically, yes. Where the ground falls away toward the river, bearing depth, retaining and stepping the structure down are real engineered costs.',
      },
    ],
  },

  florence: {
    intro:
      'Building new in Florence? Boone County, and genuine open ground. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is Boone County’s largest city, a fast-grown community south of the river with substantial post-war and recent residential development and more open and developable ground than anywhere on the Ohio side of the region.',
      'This is one of the easier places in the region to build a custom home, because you are not usually competing with an existing house for the ground. What replaces the teardown question is the subdivision question: much of the available land sits within platted developments carrying their own covenants and architectural requirements, which can be stricter than the county’s zoning. Those are private agreements, and they need reading before you buy rather than after.',
    ],
    localFaqs: [
      {
        q: 'Is there open land to build on in Florence?',
        a: 'More than most of the region. You are generally buying a lot rather than buying a house in order to remove it.',
      },
      {
        q: 'What are the covenants people miss?',
        a: 'Subdivision architectural requirements, which are private agreements separate from county zoning and are sometimes stricter. Read them before you buy the lot.',
      },
    ],
  },

  erlanger: {
    intro:
      'Building new in Erlanger? Check the airport question early. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is a Kenton County city west of Covington, a settled community of mid-century and later housing lying close to the Cincinnati/Northern Kentucky International Airport.',
      'Proximity to a major airport is a genuine planning factor rather than a detail, and how it affects a specific parcel — whether any overlay or additional requirement applies to it — is determined by the county and the airport authority rather than inferred from a map. We establish that for the address before design. Beyond it this is straightforward ground to build on, with Kentucky code and Kenton County permitting governing the work.',
    ],
    localFaqs: [
      {
        q: 'Does being near the airport affect what I can build?',
        a: 'It can, and how it affects a specific parcel is determined by the county and the airport authority. We establish that for your address before design rather than inferring it.',
      },
      {
        q: 'Is the ground itself difficult here?',
        a: 'Generally not. Away from the airport question this is straightforward building ground, under Kentucky code and Kenton County permitting.',
      },
    ],
  },

  mason: {
    intro:
      'Building new in Mason? Warren County, and mostly subdivision ground. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a substantial city in Warren County, well north-east of Cincinnati, grown rapidly over recent decades with large planned residential developments on generally level, workable ground.',
      'Two facts govern here and both differ from Hamilton County: Mason is its own city, and it is in Warren County, so neither the zoning nor the county administration matches anything to the south. Physically the ground is favourable — level lots, good access, predictable foundations. The constraint people underestimate is the subdivision covenant, a private agreement that can restrict elevations, materials, size and siting more tightly than the city’s own zoning does.',
    ],
    localFaqs: [
      {
        q: 'Which authority governs building in Mason?',
        a: 'The City of Mason, in Warren County — both differ from Hamilton County practice. We confirm requirements with the city before design.',
      },
      {
        q: 'What can the subdivision covenants restrict?',
        a: 'Elevations, materials, size and siting, sometimes more tightly than the city’s zoning. They are private agreements, so they need reading before you buy.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Building new in West Chester? Butler County ground, and plenty of it. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large township in Butler County along the I-75 corridor north of Cincinnati, one of the region’s major growth areas, with extensive recent residential development on broadly level ground.',
      'This is township ground in Butler County, so the zoning and the administration are different from a Hamilton County city on both counts. The land itself is among the more straightforward in the region to build on — level, well served by utilities, with good access for equipment. As in most of the growth corridor, the binding constraints are more often the private ones: subdivision covenants and architectural review committees that can be considerably more prescriptive than township zoning.',
    ],
    localFaqs: [
      {
        q: 'Is West Chester a city?',
        a: 'It is a township in Butler County, so both the zoning framework and the county administration differ from a Hamilton County city.',
      },
      {
        q: 'What is the real constraint on design here?',
        a: 'Usually the subdivision covenants and any architectural review committee rather than township zoning. Those are private agreements and are often the stricter of the two.',
      },
    ],
  },

  // ---------- Cohort 4 · Basin edges, Mill Creek valley & the near east ----------

  pendleton: {
    intro:
      'Building new in Pendleton? A small historic district, built wall to wall. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a compact neighborhood on the eastern edge of Over-the-Rhine, a few blocks of 19th-century Italianate buildings standing shoulder to shoulder on a tight street grid.',
      'Any new building here is infill into a continuous street wall, which makes it two projects at once. There is the design question — how a new facade meets its neighbors on height, cornice, window rhythm and materials — and there is the construction question of working safely between two standing buildings, which means surveying them first, then underpinning and shoring as the excavation requires. Where design review applies to a parcel is determined by the city, and we establish it before drawings.',
    ],
    localFaqs: [
      {
        q: 'Is there room to build in Pendleton?',
        a: 'Only on the gap sites, and they are infill into a continuous street wall. That is a design review question and a party-wall construction question at the same time.',
      },
      {
        q: 'How do you protect the buildings either side?',
        a: 'Survey them before work starts, then underpin and shore as the excavation requires, with monitoring through the build. It is scoped work, not a contingency.',
      },
    ],
  },

  queensgate: {
    intro:
      'Building new in Queensgate? Honestly, this is not residential ground. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is Cincinnati’s industrial and distribution district west of Downtown, dominated by warehousing, rail infrastructure and commercial premises rather than housing.',
      'We would rather say plainly that a custom home is not a Queensgate project. The land here is zoned and used for industry and logistics, and the handful of residential parcels that exist sit in an environment built around freight. If you are drawn to the west side of the basin, the residential ground is in the neighborhoods around it — the West End, Lower Price Hill and the hillsides above — and we are happy to talk through what is realistic there.',
    ],
    localFaqs: [
      {
        q: 'Can I build a house in Queensgate?',
        a: 'Realistically, no. It is an industrial and distribution district, and the land is zoned and used accordingly.',
      },
      {
        q: 'Where should I look nearby instead?',
        a: 'The West End, Lower Price Hill and the hillsides above the basin all have genuine residential ground, and we can talk through what each would involve.',
      },
    ],
  },

  cuf: {
    intro:
      'Building new in CUF? Steep streets, and a rental-driven land market. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview on the hillsides immediately west and south of the University of Cincinnati, with dense older housing and some of the steepest residential streets in the city.',
      'Both of the defining factors here work against a straightforward custom build. The topography is severe enough on the Fairview side that foundations, retaining and site access dominate the cost, and the land market is set by what student and staff rental will pay rather than by single-family values. Neither rules a build out, but together they mean the honest first step is checking whether the numbers work before anyone designs anything.',
    ],
    localFaqs: [
      {
        q: 'Why is it hard to build a single-family home here?',
        a: 'Two reasons compounding: severe topography on the steeper streets, and land priced against rental returns rather than single-family values. Worth testing the numbers before designing.',
      },
      {
        q: 'How steep is too steep?',
        a: 'It is not a slope figure, it is what the foundation and retaining cost once engineered. On the steepest streets that can exceed the value of the finished house.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Building new in Camp Washington? Industrial ground with a residential pocket. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) sits in the Mill Creek valley north-west of the basin, historically one of the city’s major industrial districts, with a surviving pocket of older workers’ housing among the works and warehouses.',
      'Where residential parcels do exist here they sit close to current and former industrial use, and that makes an environmental review before purchase a sensible precaution rather than an over-cautious one. What a site was previously used for is a matter of record in many cases, and finding out costs very little compared with what it can uncover. Whether a specific parcel permits a new house at all is a zoning question we settle first.',
    ],
    localFaqs: [
      {
        q: 'Can you build a house in Camp Washington?',
        a: 'On the residential parcels that exist, subject to zoning — which we confirm for the specific address first, since much of the neighborhood is industrial.',
      },
      {
        q: 'Is an environmental review necessary?',
        a: 'On ground this close to current and former industry, we would treat it as a normal precaution before purchase rather than an unusual one.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Building new in South Fairmount? Valley ground, and water is the theme. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) runs along the Lick Run valley west of the basin, a narrow corridor between the hillsides that has seen substantial public investment in daylighting the valley’s stormwater and reshaping the ground along it.',
      'Valley floor and valley sides behave differently and the distinction matters before you buy. On the flat, how a parcel drains and how it relates to the reshaped watercourse is the governing question, and it is one for the city and a civil engineer rather than a listing. On the sides it reverts to the usual hillside problems of bearing, retaining and access. Establishing which of the two you are actually buying is the first piece of work.',
    ],
    localFaqs: [
      {
        q: 'Does the stormwater work affect building here?',
        a: 'On the valley floor it is the governing question — how the parcel drains and how it relates to the watercourse. That is settled with the city and a civil engineer before purchase.',
      },
      {
        q: 'Is the hillside ground different?',
        a: 'Yes, and it reverts to the usual slope questions: bearing depth, retaining and how equipment reaches the site.',
      },
    ],
  },

  'east-end': {
    intro:
      'Building new in the East End? A river view, and a flood elevation to design around. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a long, narrow neighborhood running east along Kellogg Avenue between the Ohio River and the hillside, with much of its ground low and directly on the riverfront.',
      'The river is the whole proposition here and the whole constraint. Where a parcel sits relative to required flood elevation drives the foundation type, how high the first floor has to be, how the driveway and entry work, and what insuring the house costs for as long as you own it. Those are determinations made by the floodplain administrator and a surveyor. On a riverfront lot they are the difference between a good buy and an expensive lesson, so we get them before a purchase closes.',
    ],
    localFaqs: [
      {
        q: 'Can you build on a riverfront lot here?',
        a: 'Often yes, designed to the required elevation — which drives the foundation, the first-floor height, the entry and the insurance. Those get determined before you commit.',
      },
      {
        q: 'What does elevating a house do to the design?',
        a: 'It changes the foundation, how you approach the front door and how the parking works. Handled at design it looks deliberate; handled late it looks like a workaround.',
      },
    ],
  },

  'north-fairmount': {
    intro:
      'Building new in North Fairmount? Steep ground with real gaps in it. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) sits on the hillside above the Mill Creek valley west of the basin, a small neighborhood of older frame housing on steep streets, with a number of parcels where houses once stood.',
      'Vacant hillside ground combines the two questions that most often catch people out, and both belong before a purchase. What is under the surface — an earlier foundation, a filled basement, an abandoned lateral — and what the slope will actually carry, which is a geotechnical answer rather than an estimate. Ground that is inexpensive to buy here is not automatically inexpensive to build on, and the gap between those two figures is worth measuring first.',
    ],
    localFaqs: [
      {
        q: 'Is cheap hillside land a good buy?',
        a: 'Only once you know what is under it and what the slope will carry. Inexpensive to buy and inexpensive to build on are different things, and the gap can be large.',
      },
      {
        q: 'What is likely buried on a vacant lot here?',
        a: 'An earlier foundation, a filled basement or an abandoned sewer lateral. All removable, all real costs, and all better found before you own the parcel.',
      },
    ],
  },

  evanston: {
    intro:
      'Building new in Evanston? Infill ground beside a university. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) lies on the east side around Xavier University, an older neighborhood of late-1800s and early-1900s housing with a scattering of gap sites through its residential blocks.',
      'Buildable parcels genuinely come up here, which puts Evanston among the more practical city neighborhoods for new construction. The point worth attending to is what the surrounding zoning permits, since a university edge means parcels nearby may allow something quite different from a single house. What can be built beside you affects the long-run value of what you build, and it is on the public record rather than in a listing.',
    ],
    localFaqs: [
      {
        q: 'Are there buildable lots in Evanston?',
        a: 'Yes, gap sites come up through the residential blocks, which makes it one of the more practical city neighborhoods for a new build.',
      },
      {
        q: 'Does being near the university matter?',
        a: 'It is worth checking what the zoning permits on the parcels around yours, because near a university edge that can differ from single-family. It is on the public record.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Building new in South Cumminsville? Mill Creek ground — check the history. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) sits in the Mill Creek valley north-west of the basin, a small neighborhood bounded by rail and industrial land with older housing and a number of cleared parcels.',
      'Ground bounded by rail corridors and industry deserves an environmental look before purchase, and here that is the first thing rather than an afterthought. Alongside it, the valley floor raises drainage and how a parcel sits relative to the creek — a civil engineering question with a real answer. Both are inexpensive to establish relative to what they can reveal, and both are far better known before a purchase closes than after.',
    ],
    localFaqs: [
      {
        q: 'What should I check before buying here?',
        a: 'The site’s previous use, given the rail and industrial boundaries, and how the parcel drains relative to the creek. Both are cheap to establish and expensive to discover late.',
      },
      {
        q: 'Is valley floor ground harder to build on?',
        a: 'It can be — drainage and how the ground sits relative to the creek govern the design, which is a civil engineering question rather than a guess.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Building new in English Woods? Large cleared ground on a hilltop. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) occupies a hilltop above the Mill Creek valley on the west side, a neighborhood substantially cleared of its earlier large-scale housing, leaving open ground with long views.',
      'Ground cleared at scale is a different proposition from a single gap site. The useful questions are what infrastructure was left in place when the previous housing came down — streets, mains, laterals — and what condition it is in, because existing services can be an asset or a liability depending on their age and how they were abandoned. That, plus what the current zoning permits, is where a realistic conversation about building here starts.',
    ],
    localFaqs: [
      {
        q: 'Is the old infrastructure still usable?',
        a: 'Sometimes, and it depends on age and how it was abandoned when the previous housing came down. It is worth establishing rather than assuming either way.',
      },
      {
        q: 'What can be built there now?',
        a: 'That is a current zoning question for the specific parcel, and it is the first thing to settle before anything else is worth discussing.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Building new in North Avondale? Grand streets, and a high bar. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is known for substantial late-1800s and early-1900s houses on broad, tree-lined streets with generous lots — some of the most architecturally ambitious residential fabric in the city.',
      'Ground here almost always comes from a subdivision of a larger parcel or a replacement, and either way the new house has a lot to live up to. On streets built at this scale, a modest or generic elevation is conspicuous in a way it would not be elsewhere. That argues for spending properly on design, and for treating the mature trees on a large lot as part of the asset rather than as an obstacle to the footprint.',
    ],
    localFaqs: [
      {
        q: 'Where does buildable ground come from here?',
        a: 'Usually a subdivision of a larger parcel or a replacement of an existing house. Both need establishing with the city before you agree a price.',
      },
      {
        q: 'Does the design need to match the older houses?',
        a: 'It needs to hold its own on the street. That is about scale, proportion and materials rather than copying a period, and it is worth investing in at the drawing stage.',
      },
    ],
  },

  millvale: {
    intro:
      'Building new in Millvale? Very limited private ground here. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small neighborhood in the Mill Creek valley on the west side, developed largely around planned housing rather than as a market of individual parcels.',
      'We will be straightforward: this is not a neighborhood where private buildable lots come up in any number, so a custom home here is an unusual proposition rather than a routine one. If a specific parcel has come your way we are glad to look at what it would involve — zoning, services, ground conditions — but we would not want to suggest there is a supply of ground to choose from when there is not.',
    ],
    localFaqs: [
      {
        q: 'Are there lots for sale in Millvale?',
        a: 'Rarely. The neighborhood developed around planned housing rather than as a market of individual parcels, so private buildable ground is unusual here.',
      },
      {
        q: 'I have found a parcel — will you look at it?',
        a: 'Gladly. Zoning, services and ground conditions for that specific address are the place to start.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Building new in Paddock Hills? A small enclave where every lot is visible. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, quiet residential neighborhood on the north side tucked between larger ones, with mid-century houses on curving streets and a settled, self-contained feel.',
      'In a neighborhood this small, a new house is a noticeable proportion of the street rather than one among hundreds, so how it sits matters more than usual. Buildable ground is scarce and generally means replacing an existing house. The design questions worth taking seriously are the ones about scale and roof form against mid-century neighbors — the sort of thing that is easy to resolve on paper and impossible to fix afterwards.',
    ],
    localFaqs: [
      {
        q: 'Is there room to build in Paddock Hills?',
        a: 'Very little open ground — new building generally means replacing an existing house, so the purchase is part of the project.',
      },
      {
        q: 'Does the design matter more in a small neighborhood?',
        a: 'It is more visible. On a short street a new house is a real proportion of what people see, so scale and roof form against mid-century neighbors are worth resolving carefully.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Building new in Spring Grove Village? Valley ground beside rail and industry. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) lies along the Mill Creek valley on the north side near Spring Grove Cemetery, with older housing set among rail corridors and long-established industrial and commercial premises.',
      'Two checks come before anything else on ground like this. What the parcel was previously used for, given how much industry has operated in this valley — an environmental review is a normal precaution here. And what the neighbouring zoning permits, because a residential parcel adjoining industrial ground can see that ground change use in ways that affect what you have built. Both are matters of record and both belong in the purchase decision.',
    ],
    localFaqs: [
      {
        q: 'Is industrial history a concern on these parcels?',
        a: 'It is worth reviewing before purchase given how much industry has operated in this valley. The check is inexpensive relative to what it can find.',
      },
      {
        q: 'Should I care what is zoned next door?',
        a: 'Yes. Adjoining industrial or commercial ground can change use, and that affects what your house is worth later. It is on the public record.',
      },
    ],
  },

  linwood: {
    intro:
      'Building new in Linwood? Small, low, and hemmed in. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smallest neighborhoods, sitting low on the east side near the confluence of the Little Miami and the Ohio, hemmed in by rail lines, Kellogg Avenue and the hillside.',
      'Low ground near two rivers puts elevation at the centre of any new build, and that determination sits with the floodplain administrator and a surveyor rather than with a listing. It governs the foundation, the first-floor height and the insurance for the life of the house. Add rail on one side and limited access on the other, and the honest position is that the site drives this project far more than the floor plan does.',
    ],
    localFaqs: [
      {
        q: 'What governs a new build in Linwood?',
        a: 'Required flood elevation, mostly — it drives the foundation, the first-floor height and the long-term insurance. That gets determined before you commit to a parcel.',
      },
      {
        q: 'Do the rail lines affect anything?',
        a: 'They constrain access and they are worth understanding for noise and vibration before you buy, since neither is something a design fixes cheaply afterwards.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Building new in Bond Hill? Regular lots, and gaps that are actually available. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood developed substantially in the mid-20th century, with post-war houses on regular, reasonably wide lots and level-to-gentle ground.',
      'For building new, the combination here is a good one: predictable lot geometry, straightforward ground and gap sites that genuinely come available. That means fewer of the expensive surprises that hillside and basin parcels bring, and a build where more of the money goes into the house. The checks that remain are the ordinary ones — the condition and location of any existing lateral, and whether your plan fits the buildable width once clearances are applied.',
    ],
    localFaqs: [
      {
        q: 'Is Bond Hill straightforward to build in?',
        a: 'Comparatively, yes. Regular lots, gentle ground and available gap sites mean fewer site surprises and more of the budget in the house.',
      },
      {
        q: 'What still needs checking?',
        a: 'Any existing sewer lateral — age, condition and true location — and whether your plan fits the buildable width once the required clearances are applied.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Building new in Villages of Roll Hill? Not really individual-lot ground. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) sits on a hilltop above the Mill Creek valley on the west side, a neighborhood built around large-scale planned housing rather than a grid of individually owned parcels.',
      'As with the other planned-housing neighborhoods in the valley, we would rather be straight about it: individual buildable lots are not really a feature of this area, so a custom home here is an unusual case rather than a normal one. If you have identified a specific parcel we will look at it properly — zoning, services and what the hilltop ground will carry — but we would not want to imply a supply of lots that does not exist.',
    ],
    localFaqs: [
      {
        q: 'Can I buy a lot and build here?',
        a: 'It is unusual. The area was built around large-scale planned housing rather than individually owned parcels, so buildable lots rarely come up.',
      },
      {
        q: 'Where nearby would be more realistic?',
        a: 'The west-side hilltops and Westwood have genuine parcels, and we can talk through what each would involve for the house you have in mind.',
      },
    ],
  },

  // ---------- Cohort 5 · West-side hilltops, north-side villages & the independent municipalities ----------

  'east-westwood': {
    intro:
      'Building new in East Westwood? A small pocket with steep edges. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a compact west-side neighborhood between Westwood proper and the Mill Creek valley, with early-1900s housing on streets that flatten across the top and fall away sharply at the edges.',
      'Where a parcel sits within that small area changes the project completely. On the level ground the build is straightforward and the budget goes into the house. On the falling edges it becomes a bearing, retaining and access problem, and the site can take a substantial share of the money before anything is above ground. Two lots a few streets apart can differ by a great deal, which is why the assessment is of the parcel rather than the neighborhood.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which street the lot is on?',
        a: 'Considerably. Level ground here builds economically; the falling edges turn into a bearing and retaining exercise. Two lots a few streets apart can differ substantially.',
      },
      {
        q: 'How do I know which I am buying?',
        a: 'A walk of the parcel and a look at the grade tells you a lot, and soils work tells you the rest. Both before purchase, ideally as a condition of it.',
      },
    ],
  },

  'western-hills': {
    intro:
      'Building new in Western Hills? Confirm which jurisdiction your parcel is in. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the broad name for the established west-side area along the ridge around Glenway and Werk, with 1920s-to-1940s brick and frame housing on generally regular lots.',
      'The name covers more ground than any single jurisdiction, which is the practical trap here: parcels people describe as Western Hills can fall under the city, Green Township or one of the small independent cities nearby, and each sets its own zoning and permitting. We confirm which authority governs the specific address before anything else, because assuming the wrong one wastes weeks and occasionally money. Beyond that the ridge ground is relatively forgiving to build on.',
    ],
    localFaqs: [
      {
        q: 'Which authority governs a Western Hills parcel?',
        a: 'It depends on the address — the name spans the city, Green Township and nearby independent cities. We confirm it for the specific parcel before design.',
      },
      {
        q: 'Is the ground here difficult?',
        a: 'Along the ridge it is relatively forgiving, with regular lots and predictable foundations. It gets harder as you move toward the edges and the ground falls away.',
      },
    ],
  },

  california: {
    intro:
      'Building new in California? Wooded riverfront ground at the city’s edge. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far south-eastern neighborhood on the Ohio River, a semi-rural pocket of wooded ground and larger parcels that feels a long way from the rest of the city.',
      'Larger, wooded riverside parcels bring their own set of questions before purchase. How far services actually run and what extending them costs, since frontage this far out is not a given. What the tree cover means for siting, access and clearing. And where the ground sits relative to required flood elevation on the low parts, which drives the foundation and the insurance. None of that is discouraging — it is simply the work that belongs before a purchase rather than after.',
    ],
    localFaqs: [
      {
        q: 'Are services available on the larger parcels here?',
        a: 'Not always at the frontage, and extending them is a real cost. We establish how far they run and what reaching them involves before you commit.',
      },
      {
        q: 'Does the flood question apply?',
        a: 'On the low ground near the river, yes — it governs the foundation and the insurance, and it is determined by the floodplain administrator and a surveyor.',
      },
    ],
  },

  carthage: {
    intro:
      'Building new in Carthage? A small old village on tight ground. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a small north-side neighborhood that began as an independent village along the Mill Creek corridor, with modest older housing on narrow lots and rail and commercial land close by.',
      'Narrow lots are the practical constraint: once the required side clearances are applied, the buildable width on a typical parcel here often rules out plans that would sit comfortably elsewhere, and it is much better to find that out before you buy than during design. The proximity of rail and commercial ground is worth a look too, both for what it means to live beside and for what the neighbouring zoning would permit in future.',
    ],
    localFaqs: [
      {
        q: 'Will a standard plan fit a Carthage lot?',
        a: 'Often not without changes. The buildable width once clearances are applied is narrower than people expect, so we check it against your plan before purchase.',
      },
      {
        q: 'Does the rail corridor matter?',
        a: 'Worth understanding before you buy, both for noise and for what the neighbouring zoning permits later. Neither is something a design fixes cheaply afterwards.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Building new in Winton Hills? An industrial neighbour is the main factor. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) sits on the north side above the Mill Creek valley, combining planned residential housing with a substantial industrial and business park within the same neighborhood boundary.',
      'Living beside a working industrial park is a real consideration rather than a technicality, and it deserves an honest look before a purchase — what operates there, at what hours, and what the zoning would permit if an occupier changed. Individually owned buildable parcels are also limited here, given how much of the residential ground was planned rather than platted for sale. If you have found one we will assess it properly.',
    ],
    localFaqs: [
      {
        q: 'What should I weigh before buying here?',
        a: 'What operates in the adjoining business park, at what hours, and what the zoning would permit if an occupier changed. All of it is on the public record.',
      },
      {
        q: 'Are there many lots available?',
        a: 'Not many. Much of the residential ground was planned rather than platted for individual sale, so buildable parcels are limited.',
      },
    ],
  },

  roselawn: {
    intro:
      'Building new in Roselawn? Regular lots, and a mixed corridor. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood developed largely mid-century, with houses on regular lots on the residential streets and a mix of commercial and institutional uses along the Reading Road corridor.',
      'The residential ground here is genuinely workable — level, regular and predictable to build on, with fewer of the site surprises that the hillsides bring. What is worth checking on a specific parcel is how close it sits to the corridor and what the zoning permits between you and it. A house one street back from a commercial frontage is a different long-term proposition from one directly on it, and the difference is visible on the zoning map.',
    ],
    localFaqs: [
      {
        q: 'Is the ground straightforward here?',
        a: 'Generally yes — level, regular lots that are predictable to build on, so the budget goes into the house rather than the site.',
      },
      {
        q: 'Does proximity to the corridor matter?',
        a: 'It does for long-term value. What the zoning permits between your parcel and the commercial frontage is worth checking before you buy.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Building new in Mount Airy? Wooded ground, and trees that shape the design. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) occupies high ground on the north-west side around Mount Airy Forest, one of the largest urban forests in the country, with wooded parcels and rolling terrain through much of the neighborhood.',
      'Heavily treed ground changes a build in ways that are easy to underestimate. Root zones limit where you can excavate and stage, clearing is a real line item, and access for equipment through a wooded parcel needs planning rather than assuming. The trees are also the reason to be here, so the productive approach is to survey what is worth keeping and site the house around it — a design decision that is straightforward early and impossible to reverse once the clearing is done.',
    ],
    localFaqs: [
      {
        q: 'How do mature trees affect the build?',
        a: 'Root zones limit where you can excavate and stage, clearing is a real cost, and equipment access through a wooded parcel needs planning. All of it is manageable if it is designed for.',
      },
      {
        q: 'Can we keep the best trees?',
        a: 'Usually, by surveying what is worth keeping and siting the house around it. That is an early decision and not a reversible one.',
      },
    ],
  },

  hartwell: {
    intro:
      'Building new in Hartwell? A former village with a real streetscape. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) began as an independent village north of the city and kept the feel of one, with late-1800s and early-1900s houses on a compact grid and a coherent, well-preserved streetscape.',
      'A street that has held its character this well sets a bar for anything new on it. Setback, porch line, roof pitch and the rhythm of the front elevation are what make a new house read as part of the row rather than dropped into it, and those cost nothing extra to get right if they are decided at the drawing stage. The lots are compact, so the buildable width once clearances are applied is worth checking against your plan early.',
    ],
    localFaqs: [
      {
        q: 'What makes a new house sit well in Hartwell?',
        a: 'Matching the street on setback, porch line and roof pitch. None of that costs more if it is decided at the drawing stage rather than corrected later.',
      },
      {
        q: 'Are the lots big enough?',
        a: 'They are compact, so the buildable width once the required clearances are applied is the thing to check against your plan before you buy.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Building new in Kennedy Heights? Rolling ground and a strong local character. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) sits on the north-east side on rolling ground, with a varied older housing stock, an active arts presence and streets that rise and fall noticeably across the neighborhood.',
      'Terrain is the practical variable here — parcels range from comfortably level to genuinely sloping within a short distance, and that difference shows up in the foundation before it shows up anywhere else. A walkout or a stepped foundation can be an asset if it is designed deliberately, and an unwelcome cost if it is discovered. Establishing the grade and what the ground will carry before purchase is what keeps that decision yours.',
    ],
    localFaqs: [
      {
        q: 'Is the ground level here?',
        a: 'It varies within a short distance — some parcels are comfortably level and others genuinely slope. The foundation is where that difference shows up first.',
      },
      {
        q: 'Is a sloping lot a bad thing?',
        a: 'Not at all, if it is designed for. A walkout can be a real asset. It is only a problem when it is discovered rather than planned.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Building new in St. Bernard? Its own city, with industry at the edge. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is an independent city entirely surrounded by Cincinnati, built compactly in the early 1900s beside the long-established industrial works in the Mill Creek valley.',
      'Two things follow from that. St. Bernard sets its own zoning and issues its own permits, so a Cincinnati approval means nothing here and the requirements come from the city itself. And on parcels near the industrial edge, both the site’s own history and what the neighbouring zoning permits are worth establishing before a purchase — the first because of what may be in the ground, the second because of what could operate beside you later.',
    ],
    localFaqs: [
      {
        q: 'Is St. Bernard governed by Cincinnati?',
        a: 'No. It is its own city with its own zoning and building department, despite being entirely surrounded by Cincinnati.',
      },
      {
        q: 'Does the industrial history matter?',
        a: 'Near the valley edge, yes — both what may be in the ground and what the neighbouring zoning would permit later. Both are worth settling before purchase.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Building new in Elmwood Place? A tiny village on very small lots. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a small independent village north of Cincinnati in the Mill Creek valley, densely built in the late 1800s and early 1900s on notably small lots.',
      'Lot size is the governing fact. On parcels this small the buildable footprint once the required clearances are applied is often considerably less than people expect, and it reshapes plans more often than any other single factor. The village sets its own zoning and permitting, so those clearances come from Elmwood Place rather than from county or city practice — which is exactly why we confirm them for the address before a plan is drawn.',
    ],
    localFaqs: [
      {
        q: 'Are the lots really that small?',
        a: 'Small enough that the buildable footprint after clearances often surprises people. It is the first thing we check against your plan.',
      },
      {
        q: 'Who sets the rules here?',
        a: 'The village does. Elmwood Place has its own zoning and permitting, so neither city nor county practice is the reference point.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Building new in Delhi Hills? Township ground on the west-side slopes. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits on the west side above the Ohio in Delhi Township, historically a greenhouse and nursery area, with a mix of mid-century and later housing on ground that rolls and falls toward the river.',
      'This is township ground, so the zoning and permitting come from Delhi Township rather than from the city — the first thing to confirm for a specific address. Physically, parcels here range from comfortably level to steeply falling, and the ones with the river views are generally the ones with the engineering. Bearing depth, retaining and how a house steps down a grade are real costs, and they are worth quantifying while you can still choose a different lot.',
    ],
    localFaqs: [
      {
        q: 'Who governs building in Delhi Hills?',
        a: 'Delhi Township, not the City of Cincinnati. We confirm zoning and permitting requirements with the township for the specific address.',
      },
      {
        q: 'Do the view lots cost more?',
        a: 'Usually. The parcels with the river views tend to be the ones that fall away, and bearing depth, retaining and stepping the structure down are real engineered costs.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Building new in Golf Manor? Its own village, and very little spare ground. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small independent village surrounded by Cincinnati on the north-east side, developed largely in the early and mid-20th century on a compact grid of modest houses.',
      'Golf Manor runs its own zoning and permitting, which is easy to overlook on streets that read as continuous with the city around them — and getting that wrong at the outset costs time rather than money, but it costs time you did not need to spend. Open ground is scarce, so building new usually means acquiring an existing house to replace, and on lots this compact the buildable width is what most often reshapes a plan.',
    ],
    localFaqs: [
      {
        q: 'Is Golf Manor part of Cincinnati?',
        a: 'No, it is its own village with its own zoning and permitting, even though Cincinnati surrounds it and the streets run continuously.',
      },
      {
        q: 'Is there open land here?',
        a: 'Very little. New building usually means buying an existing house to replace, which puts the purchase and demolition into the budget.',
      },
    ],
  },

  fairfax: {
    intro:
      'Building new in Fairfax? A small village beside a working corridor. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small independent village on the east side between Mariemont and the Red Bank corridor, with modest mid-century housing and commercial and light industrial land close at hand.',
      'The village sets its own zoning and permits, which is the first thing to confirm rather than assume from a neighbouring jurisdiction. The other worthwhile check is the parcel’s relationship to the working corridor — how close it sits, what operates there and what the zoning between would permit in future. On a small village’s residential streets that is what most affects both daily life and long-term value.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits in Fairfax?',
        a: 'The village does. It sets its own zoning and permitting, so neighbouring jurisdictions are not the reference point.',
      },
      {
        q: 'How much does the nearby commercial land matter?',
        a: 'Worth checking how close the parcel sits, what operates there and what the zoning between would permit later. It affects both living there and resale.',
      },
    ],
  },

  mack: {
    intro:
      'Building new in Mack? Post-war subdivisions with room in them. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an unincorporated community in Green Township on the west side, developed substantially in the post-war decades with houses on regular, comfortably sized lots.',
      'This is township ground, so Green Township and Hamilton County govern rather than the city. The practical opportunity here is the lot geometry — parcels are generous enough that a house can be sited properly rather than fitted between minimum clearances, and some of the larger original lots may support a split. Whether a specific parcel can be divided is determined by the township and the county, and it is worth establishing before paying a price that assumes it.',
    ],
    localFaqs: [
      {
        q: 'Can a larger lot here be split?',
        a: 'Sometimes, and it is the township and county that determine it. Establish it before agreeing a price that assumes the split is possible.',
      },
      {
        q: 'Who governs building in Mack?',
        a: 'Green Township and Hamilton County. It is unincorporated, so city rules do not apply.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Building new in Monfort Heights? Room to build, and services to check. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is an unincorporated Green Township community on the north-west side, developed from the mid-20th century onward with generous lots and pockets of open and wooded ground remaining.',
      'The advantage here is space — there is genuinely more room than in most of the county, and parcels large enough to site a house well rather than squeeze it in. The corresponding check is services: on the more open parcels, how far the sewer and water mains actually run and what extending them to your frontage costs can be a significant number, and it is not something a listing tells you. That gets established before a purchase, not after.',
    ],
    localFaqs: [
      {
        q: 'Is there open ground left in Monfort Heights?',
        a: 'More than most of the county, including some larger and wooded parcels. That is the real attraction of building here.',
      },
      {
        q: 'What is the catch on the more open lots?',
        a: 'How far the sewer and water mains run and what extending them to your frontage costs. That can be a significant figure and it belongs in the purchase decision.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Building new in Bridgetown? Established subdivisions, and their private rules. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is an unincorporated Green Township community on the west side, built out largely through the post-war decades in platted residential subdivisions on regular lots.',
      'Where ground was developed as platted subdivisions, the recorded covenants can outlive the developer by decades and still bind what you build — elevations, materials, minimum sizes, outbuildings and siting. Those are private agreements enforceable separately from township zoning, and they are frequently the stricter of the two. Reading them before you buy is straightforward; discovering one after you have designed a house to township rules is not.',
    ],
    localFaqs: [
      {
        q: 'Do old subdivision covenants still apply?',
        a: 'Often yes, decades after the developer has gone. They bind elevations, materials, sizes and siting, and they are enforceable separately from township zoning.',
      },
      {
        q: 'Where do I find them?',
        a: 'They are recorded against the property. Reading them before purchase is simple; discovering one after designing to township rules is expensive.',
      },
    ],
  },

  // ---------- Cohort 6 · Springfield, Colerain & Anderson Townships, north-side cities & east villages ----------

  finneytown: {
    intro:
      'Building new in Finneytown? Township ground, mature and wooded. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is an unincorporated Springfield Township community north of the city, developed largely in the 1950s and 1960s across rolling, well-treed ground.',
      'Springfield Township and Hamilton County govern here rather than any city, which is the first thing to establish for an address. The subdivisions have matured to the point where the tree cover is a genuine asset and a genuine constraint at once — root zones limit where you can excavate and stage, and the trees are much of why the streets look the way they do. Siting the house around the significant ones is a decision worth making at the drawing stage.',
    ],
    localFaqs: [
      {
        q: 'Who governs building in Finneytown?',
        a: 'Springfield Township and Hamilton County — it is unincorporated, so no city zoning applies. We confirm requirements for the specific address.',
      },
      {
        q: 'How much do the mature trees constrain a build?',
        a: 'Root zones limit excavation and staging, so they shape the siting. Designed around early they are an asset; discovered late they are a cost.',
      },
    ],
  },

  amberley: {
    intro:
      'Building new in Amberley Village? Large wooded lots, and the village’s own standards. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an independent village on the north-east side known for unusually large, heavily wooded residential parcels and a deliberately low-density, green character.',
      'Lot sizes here are generous enough that siting genuinely becomes a design opportunity rather than an exercise in fitting between clearances — where the house faces, how the drive approaches, which trees frame it. The village sets its own zoning, permitting and engineering requirements, and those come from Amberley rather than from county practice. On parcels this wooded, a tree survey ahead of design is worth its cost several times over.',
    ],
    localFaqs: [
      {
        q: 'Are the lots really that large?',
        a: 'Generous by county standards, which makes siting a design opportunity — orientation, approach and which trees frame the house all become real choices.',
      },
      {
        q: 'Who sets the requirements?',
        a: 'The village. Amberley has its own zoning, permitting and engineering standards, so county practice is not the reference point.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Building new in Arlington Heights? A very small village, tightly bounded. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is one of Hamilton County’s smallest villages, a compact residential pocket in the Mill Creek corridor bounded closely by highway, rail and industrial land.',
      'A village this small has correspondingly little buildable ground, so a new house here is usually a replacement on an existing lot rather than a build on open land. The village runs its own zoning and permitting despite its size, which is worth confirming rather than assuming. And given how closely the transport and industrial land presses in, what sits around a parcel is worth understanding properly before a purchase.',
    ],
    localFaqs: [
      {
        q: 'Is there anywhere to build in Arlington Heights?',
        a: 'Rarely on open ground — it is a small, tightly bounded village, so new building generally means replacing an existing house.',
      },
      {
        q: 'Does the village do its own permitting?',
        a: 'Yes, despite its size it sets its own zoning and permitting. Worth confirming for the address rather than assuming county practice.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Building new in North College Hill? Its own city, compactly built. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is an independent city on the north-west side, developed densely through the first half of the 20th century with modest houses on small, regular lots.',
      'The city sets its own zoning and issues its own permits, which is easy to miss on streets that run continuously into the neighboring Cincinnati and township ground. With very little open land, new building here usually means acquiring a house to replace, and on lots this compact the arithmetic needs care — the purchase and demolition come before the house, and the buildable width after clearances decides what plan is realistic.',
    ],
    localFaqs: [
      {
        q: 'Is North College Hill part of Cincinnati?',
        a: 'No, it is its own city with its own zoning and building department, though the streets run continuously into the city and township ground nearby.',
      },
      {
        q: 'What limits the plan on these lots?',
        a: 'Buildable width once the required clearances are applied. On compact lots that is what most often reshapes a design, so we check it before you buy.',
      },
    ],
  },

  newtown: {
    intro:
      'Building new in Newtown? A village on the Little Miami valley. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small independent village on the east side near the Little Miami River, with a village core, generally larger parcels and a more rural feel than the townships around it.',
      'Two things shape a build here. The village sets its own zoning and permitting, which differs from the surrounding township ground and needs confirming for the address. And proximity to the Little Miami valley makes elevation and drainage live questions on the lower parcels — determinations for the floodplain administrator and a surveyor rather than assumptions, and ones that govern the foundation and the insurance for as long as you own the house.',
    ],
    localFaqs: [
      {
        q: 'Does the village or the township govern?',
        a: 'Newtown is its own village with its own zoning and permitting, which differs from the surrounding township ground. We confirm it for the address.',
      },
      {
        q: 'Does the river affect the lower parcels?',
        a: 'On ground near the valley, elevation and drainage govern the foundation and the insurance. Those get determined before a purchase closes.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Building new in Turpin Hills? Big wooded parcels with ravines in them. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is an unincorporated Anderson Township community on the east side, characterised by larger, well-treed residential parcels on ground cut by wooded ravines.',
      'Parcels here are generous, and the acreage figure on a deed can still overstate what you can build on. Where a ravine cuts through, the usable ground stops well before the property line, and how far it extends is a geotechnical and topographic question rather than a visual one. Establishing the genuine buildable envelope before purchase is what stops a house being designed for land that turns out not to be available.',
    ],
    localFaqs: [
      {
        q: 'Does the acreage on the deed reflect what I can build on?',
        a: 'Often not, where a ravine cuts through the parcel. The usable ground stops well before the boundary, and that gets surveyed rather than eyeballed.',
      },
      {
        q: 'Who governs building here?',
        a: 'Anderson Township and Hamilton County — it is unincorporated, so there is no village or city zoning to satisfy.',
      },
    ],
  },

  silverton: {
    intro:
      'Building new in Silverton? A small city with modest, regular lots. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a compact independent city on the north-east side, developed largely in the first half of the 20th century with modest houses on regular lots along a straightforward street grid.',
      'The city runs its own zoning and permitting, which is the first thing to confirm on streets that read as continuous with the neighbouring communities. Ground is regular and generally easy to build on, so the site rarely eats the budget the way it can on the hillsides. Where new building happens it is usually a replacement, and the scale question against modest neighbours is worth handling deliberately at the drawing stage.',
    ],
    localFaqs: [
      {
        q: 'Who permits a build in Silverton?',
        a: 'The city does — it sets its own zoning and permitting despite how continuous the streets look with neighbouring communities.',
      },
      {
        q: 'Is the ground straightforward?',
        a: 'Generally yes. Regular lots and predictable foundations mean the site takes less of the budget than it does on the hillsides.',
      },
    ],
  },

  lockland: {
    intro:
      'Building new in Lockland? An old canal and mill town, low in the valley. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a small independent city in the Mill Creek valley that grew as a canal and milling town, with compact older housing set among long-established industrial premises.',
      'On ground with this much industrial history, what a parcel was previously used for is a first-order question rather than a formality, and an environmental review before purchase is a normal precaution. The valley floor also raises drainage and how the ground sits relative to the creek. The city sets its own zoning and permitting, so all of it gets confirmed with Lockland rather than assumed from elsewhere in the county.',
    ],
    localFaqs: [
      {
        q: 'Should I review the site history here?',
        a: 'On valley ground with this much industrial past, we would treat it as a normal step before purchase rather than an unusual one.',
      },
      {
        q: 'Is drainage a factor?',
        a: 'On the valley floor, yes — how the parcel sits relative to the creek governs the design, and that is a civil engineering answer.',
      },
    ],
  },

  groesbeck: {
    intro:
      'Building new in Groesbeck? Colerain Township, and plenty of platted ground. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is an unincorporated Colerain Township community on the north-west side, built out substantially in the post-war decades across platted residential subdivisions on regular lots.',
      'Colerain Township and Hamilton County govern here. The land itself is among the more forgiving in the county — level to gently rolling, well served, and predictable to build on, which keeps the budget in the house. The item most often missed is the recorded subdivision covenant: a private agreement that can outlast the developer by decades and restrict elevations, materials and siting more tightly than township zoning does.',
    ],
    localFaqs: [
      {
        q: 'Is Groesbeck easy ground to build on?',
        a: 'Comparatively, yes — level to gently rolling, well served and predictable, so more of the budget goes into the house rather than the site.',
      },
      {
        q: 'What do people overlook here?',
        a: 'The recorded subdivision covenants, which bind elevations, materials and siting separately from township zoning and are often stricter.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Building new in Mount Healthy? A small city with a genuine old core. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a small independent city on the north-west side that grew as a 19th-century village, and it retains an older core of period buildings alongside later residential streets.',
      'The city sets its own zoning and permitting, which is the practical starting point for any address here. Where a parcel sits near the older core, how a new house meets the street — setback, proportion, roof form — matters more than it would on the later subdivisions, and it is worth designing for deliberately. Away from the core the lots are more regular and the build more straightforward.',
    ],
    localFaqs: [
      {
        q: 'Does it matter where in Mount Healthy the lot is?',
        a: 'It does. Near the older village core, how a new house meets the street matters more; on the later residential streets the lots are more regular and simpler to build on.',
      },
      {
        q: 'Who issues the permits?',
        a: 'The city. Mount Healthy sets its own zoning and permitting rather than following county practice.',
      },
    ],
  },

  reading: {
    intro:
      'Building new in Reading? An established city on tight valley ground. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a long-established independent city in the Mill Creek corridor north of Cincinnati, with a compact older residential fabric and commercial and industrial land close alongside.',
      'The city runs its own zoning and permitting, and that is the first thing to settle for an address. Lots on the older streets are compact, so buildable width after clearances is the constraint that most often reshapes a plan. Where a parcel sits near the commercial or industrial ground, what the neighbouring zoning permits is worth checking — it bears on both living there and on what the house is worth later.',
    ],
    localFaqs: [
      {
        q: 'What usually limits a design in Reading?',
        a: 'Buildable width on the compact older lots, once the required clearances are applied. We check that against your plan before you buy.',
      },
      {
        q: 'Should I look at the neighbouring zoning?',
        a: 'Yes, particularly near the commercial and industrial ground. What can operate beside you affects both daily life and resale.',
      },
    ],
  },

  dent: {
    intro:
      'Building new in Dent? An old crossroads with irregular parcels. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is an unincorporated Green Township community on the west side that grew around an old crossroads, with a mix of older properties on irregular parcels and later subdivision housing around them.',
      'Ground that developed piecemeal over a long period tends to carry the traces of it. Older parcels here can have irregular boundaries, private drives serving more than one property, and disused wells or septic components from before mains service reached the area. None of that prevents a build, but each is worth identifying on a title and a survey before purchase rather than encountering at excavation.',
    ],
    localFaqs: [
      {
        q: 'What turns up on the older parcels here?',
        a: 'Irregular boundaries, shared private drives, and disused wells or septic components predating mains service. All manageable, all better found on a survey than at excavation.',
      },
      {
        q: 'Who governs building in Dent?',
        a: 'Green Township and Hamilton County. It is unincorporated, so there is no city or village zoning involved.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Building new in Deer Park? A compact city where replacement is the norm. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small independent city on the north-east side, built out largely between the 1920s and the 1950s with modest houses on regular, fairly compact lots.',
      'With effectively no open ground, building new here means buying a house in order to replace it, so the purchase and demolition sit at the front of the budget. The city sets its own zoning and permitting. On a street of consistent post-war houses, the scale of what replaces one is what neighbours notice, and it is far easier to resolve that on paper than to soften a finished house that overwhelms its neighbours.',
    ],
    localFaqs: [
      {
        q: 'Is there open land in Deer Park?',
        a: 'Effectively none, so new building means acquiring a house to replace. The purchase and demolition come before the house in the budget.',
      },
      {
        q: 'How large can I build?',
        a: 'Within the city’s limits, and the more useful question is how the massing sits against consistent post-war neighbours. That is a drawing-stage decision.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Building new in Terrace Park? A village of big trees and a river valley. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is a small independent village on the east side beside the Little Miami River, known for its mature tree canopy, generous lots and a strongly protected residential character.',
      'The canopy and the river are the two facts that shape a build. Significant trees genuinely constrain where you can excavate and stage, and in a village that values them a tree survey belongs at the start of design rather than at clearing. On the lower ground toward the Little Miami, elevation and drainage govern the foundation and the insurance, and those are determinations for the floodplain administrator and a surveyor. The village sets its own zoning and permitting throughout.',
    ],
    localFaqs: [
      {
        q: 'How protected are the trees here?',
        a: 'They are much of the village’s character, and significant ones constrain excavation and staging regardless. A tree survey belongs at the start of design.',
      },
      {
        q: 'Does the Little Miami affect the lower parcels?',
        a: 'On ground near the valley, elevation and drainage govern the foundation and the insurance. Both get determined before a purchase closes.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Building new in Dry Run? Newer subdivisions with private rules. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is an unincorporated Anderson Township community on the east side, developed more recently than much of the county with contemporary subdivisions on comfortable lots.',
      'Where ground was platted relatively recently, the covenants and any architectural review committee tend to be both current and actively enforced — which makes them the binding constraint on design far more often than township zoning is. Elevations, materials, minimum sizes, outbuildings and even landscaping can be governed. They are private agreements recorded against the property, and reading them before you buy is the difference between designing once and designing twice.',
    ],
    localFaqs: [
      {
        q: 'Is there an architectural review committee here?',
        a: 'In the newer subdivisions, frequently, and it is usually active. Where one exists it constrains design more than township zoning does.',
      },
      {
        q: 'What can the covenants control?',
        a: 'Elevations, materials, minimum sizes, outbuildings and sometimes landscaping. They are recorded against the property and worth reading before purchase.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Building new in White Oak? Township ground beside a busy corridor. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is an unincorporated Colerain Township community on the north-west side, with post-war residential streets set back from a substantial commercial corridor along Cheviot and Blue Rock.',
      'The residential ground here is straightforward to build on — regular lots, gentle terrain, good services. The variable worth attending to is how close a specific parcel sits to the commercial corridor and what the zoning permits between the two. A house a few streets back is a materially different long-term proposition from one on the edge of it, and that difference is legible on the zoning map before you buy rather than afterwards.',
    ],
    localFaqs: [
      {
        q: 'Is the ground good to build on here?',
        a: 'Generally yes — regular lots, gentle terrain and good services, so the site takes a modest share of the budget.',
      },
      {
        q: 'How much does the corridor matter?',
        a: 'It depends how close the parcel is and what the zoning permits between. That is legible on the zoning map, and worth checking before you buy.',
      },
    ],
  },

  forestville: {
    intro:
      'Building new in Forestville? Anderson Township, and services to confirm. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is an unincorporated Anderson Township community on the east side, developed from the mid-20th century onward on generally comfortable lots with a mix of subdivision eras.',
      'Anderson Township and Hamilton County govern here. Because the area developed over several decades rather than all at once, service provision is not uniform across it — where the sewer runs, what capacity is available and what a connection costs from a specific frontage can vary between parcels that look similar. That is worth establishing for the address before purchase rather than assuming from a neighbouring street.',
    ],
    localFaqs: [
      {
        q: 'Are services consistent across Forestville?',
        a: 'Not necessarily — the area developed over several decades, so sewer availability and connection costs can differ between parcels that look alike.',
      },
      {
        q: 'How do I find out for a specific lot?',
        a: 'It gets confirmed with the township and the sewer authority for that address. We do that before a purchase rather than after.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Building new in Cherry Grove? Established subdivisions, and the occasional split. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is an unincorporated Anderson Township community on the east side, built out substantially in the post-war decades with houses on regular, reasonably generous lots.',
      'With the area largely built out, new building here comes either from replacing an existing house or from dividing one of the larger original parcels. Whether a split is possible is determined by the township and the county rather than by the seller, and it depends on frontage, access and services as much as on area. Establishing that before agreeing a price is what keeps a lot-split purchase from becoming an expensive assumption.',
    ],
    localFaqs: [
      {
        q: 'Can I divide a larger lot here?',
        a: 'Sometimes, and it turns on frontage, access and services as much as area. The township and county determine it, not the seller.',
      },
      {
        q: 'What if the split is refused?',
        a: 'That is precisely why it gets established before you agree a price rather than after. A purchase built on that assumption is an expensive one to unwind.',
      },
    ],
  },

  // ---------- Cohort 7 · Sycamore & Colerain Townships, the planned villages & the far west ----------

  kenwood: {
    intro:
      'Building new in Kenwood? Unincorporated, so the county governs. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an unincorporated Sycamore Township community on the north-east side, with established residential streets sitting close to one of the region’s largest concentrations of retail and offices.',
      'There is no city hall here — Sycamore Township and Hamilton County set the zoning and issue the permits, which surprises people who assume a place this well known must be its own municipality. The other thing worth checking for a specific parcel is its relationship to the commercial ground: how close it sits, and what the zoning permits between. On the residential streets themselves the ground is level and straightforward to build on.',
    ],
    localFaqs: [
      {
        q: 'Is Kenwood its own city?',
        a: 'No. It is unincorporated, so Sycamore Township and Hamilton County govern the zoning and the permits.',
      },
      {
        q: 'Does the nearby retail affect a residential parcel?',
        a: 'It depends on proximity and on what the zoning permits between. Worth reading off the zoning map before you buy rather than after.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Building new in Lincoln Heights? Its own village, with its own history. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is an independent village in the Mill Creek corridor north of Cincinnati, notable as one of the first self-governing Black communities incorporated in the northern United States, with residential streets bounded closely by industrial and transport land.',
      'The village sets its own zoning and issues its own permits, so requirements come from Lincoln Heights rather than from the county or a neighbouring city. Given how closely the industrial and rail ground presses against the residential streets, both the previous use of a specific parcel and what the neighbouring zoning permits are worth establishing before a purchase — the first for what may be in the ground, the second for what could operate alongside later.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits in Lincoln Heights?',
        a: 'The village does. It sets its own zoning and permitting, so county or neighbouring-city practice is not the reference point.',
      },
      {
        q: 'What should I check about the surrounding land?',
        a: 'What a parcel was previously used for, and what the zoning permits on the industrial and transport ground nearby. Both are on the public record.',
      },
    ],
  },

  dillonvale: {
    intro:
      'Building new in Dillonvale? Compact township ground on the north-east side. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a small unincorporated Sycamore Township community on the north-east side, developed largely in the mid-20th century with modest houses on regular, compact lots.',
      'Sycamore Township and Hamilton County govern, so there is no village or city process to satisfy. The ground is level and predictable, which keeps site costs modest and puts more of the budget into the house. On lots of this size the practical question is whether your plan fits the buildable width once the required clearances are applied, and that is worth confirming against the specific parcel before a purchase rather than during design.',
    ],
    localFaqs: [
      {
        q: 'Who governs a build in Dillonvale?',
        a: 'Sycamore Township and Hamilton County — it is unincorporated, so there is no separate village or city process.',
      },
      {
        q: 'Will a larger plan fit?',
        a: 'It depends on the buildable width after the required clearances, which is the usual constraint on compact lots. We check it against the parcel first.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Building new in Woodlawn? A village with a large working district in it. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is an independent village north of Cincinnati that combines established residential streets with a substantial industrial and distribution district within the same boundary.',
      'The village runs its own zoning and permitting, which is where any address here starts. Because residential and working land sit close together, the relationship between a specific parcel and the distribution district is worth understanding properly before a purchase — what operates there, the traffic patterns that come with logistics, and what the zoning between would permit. Those are practical, checkable questions rather than reasons not to build.',
    ],
    localFaqs: [
      {
        q: 'Who sets the rules in Woodlawn?',
        a: 'The village. It has its own zoning and permitting, separate from the county and from neighbouring municipalities.',
      },
      {
        q: 'How close is the industrial district?',
        a: 'It varies by parcel, and it is worth checking what operates there and what traffic comes with it before you buy. All of it is on the public record.',
      },
    ],
  },

  addyston: {
    intro:
      'Building new in Addyston? A small river village with a working neighbour. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small independent village on the Ohio River at the western edge of Hamilton County, with a compact residential core and substantial industrial premises alongside it.',
      'Three checks come before a purchase here. The village’s own zoning and permitting, since it governs rather than the county. What operates on the neighbouring industrial ground and what the zoning would permit there in future. And on the low ground near the river, elevation relative to flood requirements, which governs the foundation, the first-floor height and the insurance for the life of the house.',
    ],
    localFaqs: [
      {
        q: 'Does the flood question apply in Addyston?',
        a: 'On the lower ground near the river, yes — it governs the foundation, the first-floor height and the insurance. A surveyor and the floodplain administrator determine it.',
      },
      {
        q: 'Should the industrial neighbour concern me?',
        a: 'It is worth understanding what operates there and what the zoning would permit later. Both are checkable before you commit.',
      },
    ],
  },

  greenhills: {
    intro:
      'Building new in Greenhills? A planned New Deal town, protected as one. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is an independent village north-west of Cincinnati, built in the 1930s as one of only three federally planned Greenbelt towns in the United States, laid out as a single coherent design around shared green space.',
      'A village conceived and built as one piece protects that coherence, and rightly so. What is permitted on a specific parcel, and what a new building has to do on siting, scale and materials, is determined by the village and its review process rather than inferred from surrounding practice. We establish that in writing before design begins. Approaching a place with this much intentional planning behind it using a stock plan is not a realistic route.',
    ],
    localFaqs: [
      {
        q: 'Can you build new in Greenhills?',
        a: 'Where a parcel permits it, and the village’s review process leads the design. That gets established in writing before drawings are paid for.',
      },
      {
        q: 'Why is it more controlled than other villages?',
        a: 'It was built in the 1930s as a single planned Greenbelt town, one of only three in the country, and the village protects that coherence deliberately.',
      },
    ],
  },

  northbrook: {
    intro:
      'Building new in Northbrook? Colerain Township, platted and predictable. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is an unincorporated Colerain Township community on the north-west side, developed through the post-war decades in platted subdivisions on regular lots and gently rolling ground.',
      'Colerain Township and Hamilton County govern. The ground is among the more straightforward in the county, so foundations are predictable and the site takes a modest share of the budget. As across the township’s platted areas, the recorded subdivision covenants are the constraint people most often miss — private agreements binding elevations, materials and siting, enforceable independently of township zoning and frequently stricter than it.',
    ],
    localFaqs: [
      {
        q: 'Is the ground predictable here?',
        a: 'Generally yes — gently rolling, well served, platted subdivisions. Foundations are predictable and site costs stay modest.',
      },
      {
        q: 'Do the covenants still bind?',
        a: 'Usually, and they are enforceable separately from township zoning. Read them before you buy rather than after designing to township rules.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Building new in Indian Hill? Acreage, and the village’s own standards. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an independent village on the east side defined by large residential parcels, extensive tree cover, bridle trails and a deliberately rural, low-density character.',
      'Parcels measured in acres change the nature of the work. Siting becomes a genuine design exercise — approach, orientation, which stands of trees the house sits within. Long private drives, how far services run to a building site well back from the road, and whether a parcel is on mains or on private water and waste are all real cost items rather than details. The village sets its own zoning, permitting and engineering standards, and those govern throughout.',
    ],
    localFaqs: [
      {
        q: 'What changes when the lot is acreage?',
        a: 'Siting becomes a real design exercise, and the drive, the distance services must run and whether the parcel is on mains or private systems all become significant costs.',
      },
      {
        q: 'Who sets the requirements?',
        a: 'The village. Indian Hill has its own zoning, permitting and engineering standards, and they govern rather than county practice.',
      },
    ],
  },

  evendale: {
    intro:
      'Building new in Evendale? A village built around a major employer. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is an independent village north of Cincinnati whose area is dominated by a large industrial and aviation manufacturing presence, with a comparatively small residential component alongside it.',
      'Residential parcels are limited here simply because most of the village’s land is industrial, so building new is an unusual proposition rather than a routine one. Where a residential parcel does exist, the village sets its own zoning and permitting and its requirements govern. What sits around the parcel, and what the zoning permits there, is worth establishing carefully given how the village is composed.',
    ],
    localFaqs: [
      {
        q: 'Are there residential lots in Evendale?',
        a: 'A limited number — most of the village’s land is industrial. A custom home here is an unusual case rather than a routine one.',
      },
      {
        q: 'Who governs the permits?',
        a: 'The village sets its own zoning and permitting, and its requirements govern for any residential parcel within it.',
      },
    ],
  },

  glendale: {
    intro:
      'Building new in Glendale? A planned railroad suburb from the 1850s. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is an independent village north of Cincinnati laid out in the 1850s as one of the country’s earliest planned railroad suburbs, with curving streets, mature trees and a substantial body of 19th-century architecture.',
      'A village with this much intact period fabric takes new construction seriously, and what applies to a specific parcel — on siting, scale, materials and detailing — is determined by the village and its review process. That comes first, in writing, before design. The mature canopy is the second real constraint: significant trees limit where you can excavate and stage, and in Glendale they are part of what the place is.',
    ],
    localFaqs: [
      {
        q: 'Will a new house be reviewed?',
        a: 'In a village with this much 19th-century fabric, expect the design to be led by what the village requires. That gets established in writing before drawings.',
      },
      {
        q: 'How much do the trees constrain the build?',
        a: 'Significant ones limit excavation and staging, so they shape the siting. A tree survey belongs at the start of design here.',
      },
    ],
  },

  sharonville: {
    intro:
      'Building new in Sharonville? A city that crosses a county line. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is an independent city north of Cincinnati that extends across the Hamilton and Butler county boundary, combining established residential streets with substantial industrial and convention-related land.',
      'A city spanning two counties means the county administration for a specific address is a question with an actual answer, not a formality — and it affects records, some approvals and who you deal with alongside the city. Sharonville’s own zoning and permitting apply throughout. We confirm both the city requirements and which county the parcel sits in before design, because getting the second one wrong wastes time nobody planned for.',
    ],
    localFaqs: [
      {
        q: 'Which county is Sharonville in?',
        a: 'It spans Hamilton and Butler, so it depends on the parcel. We confirm which county a specific address sits in as well as the city requirements.',
      },
      {
        q: 'Does the county actually matter?',
        a: 'For records and some approvals, yes. The city zoning applies throughout, but knowing the county saves time at the administrative stage.',
      },
    ],
  },

  northgate: {
    intro:
      'Building new in Northgate? Township ground beside a retail corridor. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is an unincorporated Colerain Township community on the north-west side, with post-war residential subdivisions set around a long-established retail and commercial corridor.',
      'Colerain Township and Hamilton County govern. The residential ground is level and straightforward, so the build is predictable and the money goes into the house rather than the site. The variable is how a specific parcel relates to the commercial corridor — distance, access routes and what the zoning permits in between. That relationship affects daily life and long-run value, and it is readable before you buy.',
    ],
    localFaqs: [
      {
        q: 'Is the ground easy to build on?',
        a: 'Generally yes — level, well served post-war subdivisions, so foundations are predictable and site costs modest.',
      },
      {
        q: 'How much does the retail corridor matter?',
        a: 'It depends on distance, access routes and the zoning in between. All checkable on the zoning map before a purchase.',
      },
    ],
  },

  springdale: {
    intro:
      'Building new in Springdale? An established city, largely built out. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is an independent city north of Cincinnati combining post-war residential neighborhoods with a significant commercial and retail base along its main corridors.',
      'The city sets its own zoning and permitting, and that governs rather than township or county practice. With the residential areas substantially built out, new building generally means replacing an existing house, so the purchase and demolition belong at the front of the budget. The ground itself is level and predictable, which keeps site costs low and makes the arithmetic largely about the land rather than the excavation.',
    ],
    localFaqs: [
      {
        q: 'Is there open ground in Springdale?',
        a: 'Not much — the residential areas are largely built out, so new building usually means acquiring a house to replace.',
      },
      {
        q: 'Is the site work expensive here?',
        a: 'Generally not. The ground is level and predictable, so the cost sits in the land and the house rather than in the excavation.',
      },
    ],
  },

  miamitown: {
    intro:
      'Building new in Miamitown? River valley ground on the county’s west edge. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small unincorporated Whitewater Township community on the Great Miami River at the western edge of Hamilton County, with an old village core and rural ground around it.',
      'Proximity to the Great Miami puts elevation and drainage at the centre of any build on the lower ground — determinations for the floodplain administrator and a surveyor, governing the foundation, the first-floor height and the insurance. Away from the valley floor, the questions become the rural ones: how far mains services run, what extending them costs, and whether a parcel is on private water and waste. Whitewater Township and Hamilton County govern throughout.',
    ],
    localFaqs: [
      {
        q: 'Does the river affect the whole area?',
        a: 'Mainly the lower ground, where elevation and drainage govern the foundation and the insurance. Higher parcels raise service questions instead.',
      },
      {
        q: 'Are all parcels on mains services?',
        a: 'Not necessarily this far west. How far the mains run and what reaching them costs is worth establishing for the address before you buy.',
      },
    ],
  },

  'forest-park': {
    intro:
      'Building new in Forest Park? A planned city with planned rules. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is an independent city north of Cincinnati developed from the 1950s onward as a planned community, laid out in coherent phases with substantial green space and consistent residential subdivisions.',
      'Ground developed as a planned community tends to carry both city zoning and recorded subdivision covenants, and the two are separate instruments. The covenants are private, they can bind elevations, materials, sizes and siting, and they are frequently more prescriptive than the city’s zoning is. Reading them alongside the city requirements before a purchase is the way to avoid designing a house that satisfies one and not the other.',
    ],
    localFaqs: [
      {
        q: 'Are there two sets of rules here?',
        a: 'Often — the city’s zoning and the recorded subdivision covenants. They are separate instruments and the covenants are frequently the stricter of the two.',
      },
      {
        q: 'When should I read the covenants?',
        a: 'Before you buy the lot. Designing to city zoning alone and discovering a covenant afterwards means designing twice.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Building new in Pleasant Run? Small township ground on the north side. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a small unincorporated community on the north side near Forest Park, with residential streets on gently rolling ground and a modest overall footprint.',
      'The township and Hamilton County govern here rather than a city, which is the first thing to confirm for an address given how closely the area reads with the incorporated ground next to it. Buildable parcels are limited by the size of the community itself, so opportunities tend to come from replacement or from dividing a larger original lot — and whether a split is possible turns on frontage, access and services as much as on area.',
    ],
    localFaqs: [
      {
        q: 'Is Pleasant Run part of Forest Park?',
        a: 'No, it is unincorporated, so the township and Hamilton County govern rather than the neighbouring city. Worth confirming for the specific address.',
      },
      {
        q: 'Where does buildable ground come from?',
        a: 'Mostly replacement, or dividing a larger original lot. A split turns on frontage, access and services as much as on area.',
      },
    ],
  },

  cleves: {
    intro:
      'Building new in Cleves? A village on the Great Miami, near the confluence. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a small independent village at the western edge of Hamilton County near where the Great Miami meets the Ohio, with a compact village core and more open ground around it.',
      'The village sets its own zoning and permitting, which governs for any address within it. On the lower ground near the rivers, elevation and drainage determine the foundation, the first-floor height and the insurance, and those are matters for the floodplain administrator and a surveyor rather than assumptions. On the higher and more open parcels the practical question shifts to how far mains services run and what reaching them costs.',
    ],
    localFaqs: [
      {
        q: 'Is flood elevation a factor in Cleves?',
        a: 'On the lower ground near the rivers it governs the foundation and the insurance. It gets determined before a purchase closes.',
      },
      {
        q: 'Are the outer parcels on mains services?',
        a: 'Not always. How far the mains run and what extending them costs is worth establishing for the address before you commit.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Building new in North Bend? Steep ground above the Ohio. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a small historic village on the Ohio River at the far west of Hamilton County, where the ground rises sharply from the riverbank to wooded high ground behind.',
      'The village is small enough that the terrain, rather than the rules, tends to decide a project. Parcels on the low ground raise elevation and drainage questions that govern the foundation and the insurance. Parcels on the rise raise bearing, retaining and access questions instead, and the ones with the best views are usually the ones with the most engineering. The village sets its own zoning and permitting for both.',
    ],
    localFaqs: [
      {
        q: 'Low ground or high ground — which is easier?',
        a: 'Neither is automatic. Low parcels raise flood elevation and drainage; high parcels raise bearing, retaining and access. The lots with the best views usually carry the most engineering.',
      },
      {
        q: 'Who governs building here?',
        a: 'The village sets its own zoning and permitting, and its requirements apply throughout North Bend.',
      },
    ],
  },

  loveland: {
    intro:
      'Building new in Loveland? Establish which county your parcel is in. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is an independent city on the Little Miami River north-east of Cincinnati, and unusually it extends across more than one county boundary, with a walkable historic core beside the river and the bike trail.',
      'That county question is the practical one. The city’s zoning and permitting apply throughout, but which county a specific parcel sits in affects records and some approvals, and it is worth settling before rather than during. The other factor is the Little Miami: on ground near the valley, elevation and drainage govern the foundation and the insurance, and those are determinations for a surveyor and the floodplain administrator.',
    ],
    localFaqs: [
      {
        q: 'Which county is a Loveland address in?',
        a: 'It depends on the parcel — the city extends across more than one county line. The city zoning applies throughout, but the county affects records and some approvals.',
      },
      {
        q: 'Does the river affect building here?',
        a: 'On ground near the Little Miami valley, elevation and drainage govern the foundation and the insurance. Both get determined before purchase.',
      },
    ],
  },

  harrison: {
    intro:
      'Building new in Harrison? The state line runs through the city. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) sits at the far western edge of Hamilton County directly on the Ohio–Indiana state line, an established city with a historic core and considerable newer development around it.',
      'A state line is the most consequential boundary a build can sit near, because it changes the building code, the permitting authority, the inspection regime and often the financing and appraisal. Which side of it a parcel falls on is therefore the first question here rather than a detail, and it is not always obvious from an address. We settle that before anything else, then work to whichever set of requirements actually applies.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the state line my lot is on?',
        a: 'Considerably. It changes the building code, the permitting authority, the inspections and often the financing. It is the first thing we establish.',
      },
      {
        q: 'Can you build on both sides?',
        a: 'Yes. We work in Ohio, Kentucky and Indiana, and we handle the applicable code and permitting as part of the same contract.',
      },
    ],
  },

  // ---------- Cohort 8 · Kenton County, Kentucky ----------

  ludlow: {
    intro:
      'Building new in Ludlow? Low river ground on very tight lots. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a small Kenton County city on the Ohio River west of Covington, densely built in the 19th and early 20th centuries on a compact grid running back from the river.',
      'Two constraints define a build here and both are physical. Lot width is narrow enough on many parcels that the buildable footprint after the required clearances is well short of what the deed dimensions imply, which reshapes plans more often than anything else. And on the lower ground, elevation relative to flood requirements governs the foundation, the first-floor height and the insurance. Both are worth establishing before a purchase rather than during design.',
    ],
    localFaqs: [
      {
        q: 'Are the lots wide enough to build on?',
        a: 'Often narrower in practice than the deed suggests once the required clearances are applied. We check the real buildable footprint against your plan first.',
      },
      {
        q: 'Does flood elevation apply here?',
        a: 'On the lower ground near the river it governs the foundation, the first-floor height and the insurance, determined by a surveyor and the floodplain administrator.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Building new in Park Hills? Wooded hillside, and the slope decides. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a small Kenton County city on the wooded hillside above Covington, with curving streets following the contours and substantial tree cover throughout.',
      'A city laid out along contours is a city where the grade governs. Bearing depth, retaining where the cut requires it, and how a house steps down a slope are engineered answers with real figures attached, and they are established from a soils report rather than estimated from a walk-round. The tree cover compounds it — root zones limit where you can excavate and stage, and clearing changes the character people moved here for.',
    ],
    localFaqs: [
      {
        q: 'How much does the slope add to a build here?',
        a: 'It depends on the parcel and it comes from a soils report rather than a guess. Bearing depth, retaining and stepping the structure down are the cost drivers.',
      },
      {
        q: 'Do the trees limit the design?',
        a: 'They limit where you can excavate and stage, so they shape the siting. Worth surveying at the start of design rather than at clearing.',
      },
    ],
  },

  bromley: {
    intro:
      'Building new in Bromley? A very small river city, low to the water. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is one of the smallest cities in Kenton County, a compact riverside community west of Ludlow sitting on low ground close to the Ohio.',
      'Being both small and low sets the terms. There is very little buildable ground, so a new house here is usually a replacement rather than a build on open land. And on ground this close to the river, elevation relative to flood requirements is the first question rather than a late one — it drives the foundation type, the first-floor height, how the entry and parking work, and what the house costs to insure for as long as you own it.',
    ],
    localFaqs: [
      {
        q: 'Is there land to build on in Bromley?',
        a: 'Very little. New building generally means replacing an existing house, so the purchase sits at the front of the budget.',
      },
      {
        q: 'What does the flood requirement change?',
        a: 'The foundation, the first-floor height, how you approach the front door and the insurance. Designed for early it reads as deliberate rather than as a workaround.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Building new in Fort Wright? Ridge ground with long views. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a Kenton County city on the ridge above the Ohio and Licking valleys, with established residential streets and parcels that command long views where the ground falls away.',
      'The views and the engineering arrive together. A parcel on the edge of the ridge offers what people come here for and asks for bearing depth, retaining and a structure designed to step down rather than sit flat. Those costs are quantifiable from a soils report before you commit, which is the point of getting one early. Parcels back from the edge build far more conventionally, and the difference between the two is worth understanding before choosing.',
    ],
    localFaqs: [
      {
        q: 'Are the view lots more expensive to build on?',
        a: 'Typically, yes. Edge-of-ridge parcels need bearing depth, retaining and a stepped structure, and those are quantifiable from a soils report before you commit.',
      },
      {
        q: 'Is it cheaper to build back from the edge?',
        a: 'Usually considerably. Those parcels build conventionally, so more of the budget goes into the house rather than into the ground.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Building new in Fort Mitchell? Mature streets, so scale is the question. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city with mature, well-treed residential streets and a housing stock built across much of the 20th century.',
      'With little open ground, new building here generally means acquiring a house to replace, which puts the purchase and demolition ahead of the house in the budget. On streets this settled the design question that matters is scale — how the massing of a new house sits against established neighbours, where the bulk goes, how the front elevation breaks up. Getting that right costs nothing extra at the drawing stage and cannot be fixed once it is built.',
    ],
    localFaqs: [
      {
        q: 'Is a teardown the usual route here?',
        a: 'Generally, since open ground is scarce. That means the property purchase and demolition come before the house in the budget.',
      },
      {
        q: 'How big can I build?',
        a: 'Within the city’s limits, though the more useful question is how the massing sits against established neighbours. That is resolved on paper, not afterwards.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Building new in Villa Hills? Bluff lots, big views, private rules. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a Kenton County city on the bluff above the Ohio River west of Covington, developed comparatively recently with larger residential parcels and substantial river views from the escarpment.',
      'Because much of the city was platted as modern subdivisions, the recorded covenants and any architectural review committee tend to be current and actively enforced — and they constrain elevations, materials, size and siting more tightly than city zoning does. On the bluff parcels there is a second layer: how close to the escarpment is buildable is a geotechnical question, and the usable ground can stop well short of the boundary.',
    ],
    localFaqs: [
      {
        q: 'Is there an architectural review committee?',
        a: 'In the modern subdivisions, commonly, and it is usually active. Where one exists it constrains design more than city zoning does.',
      },
      {
        q: 'How close to the bluff edge can I build?',
        a: 'That is a geotechnical question, and the buildable ground can stop well short of the property line. It gets surveyed before you design to the boundary.',
      },
    ],
  },

  'lakeside-park': {
    intro:
      'Building new in Lakeside Park? A small city with almost no spare ground. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a compact Kenton County city adjoining Fort Mitchell, residential throughout and effectively built out, with mature streets and established lots.',
      'A city this size and this fully developed offers essentially no open land, so building new means buying a house in order to replace it. The city sets its own zoning and permitting, and those requirements come from Lakeside Park rather than from a neighbouring city whose streets run continuously into it. Buildable footprint after clearances is the other check, since the established lots are more modest than they appear.',
    ],
    localFaqs: [
      {
        q: 'Is there open land in Lakeside Park?',
        a: 'Effectively none. New building means acquiring an existing house to replace, so the purchase is the largest early number.',
      },
      {
        q: 'Do neighbouring cities’ rules apply?',
        a: 'No. Lakeside Park sets its own zoning and permitting, even where the streets run continuously into the city next door.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Building new in Crescent Springs? Some ground still left here. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a Kenton County city that has grown steadily in recent decades, mixing established residential streets with more recent development and some remaining undeveloped ground.',
      'That remaining ground is the opportunity, and services are the thing to check on it. Where a parcel sits relative to existing sewer and water, what capacity is available and what a connection actually costs from that frontage can vary considerably between parcels that look similar from the road. Those are answers the city and the sanitation district give for a specific address, and they belong in the purchase decision rather than the design phase.',
    ],
    localFaqs: [
      {
        q: 'Is there still land to build on here?',
        a: 'Some, which makes it more workable than the fully built-out cities nearby. Services are the thing to verify on it.',
      },
      {
        q: 'Why do services vary between similar parcels?',
        a: 'Because the area developed in stages. Where the mains run and what a connection costs from a given frontage differs, and the city and sanitation district confirm it per address.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Building new in Crestview Hills? Small city, commercial neighbours. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a small Kenton County city combining residential streets with a substantial retail, office and medical presence along its main corridors.',
      'For a residential parcel the useful check is its relationship to that commercial ground — distance, the access routes traffic actually uses, and what the zoning permits between the two. In a city this compact those relationships are close by definition, and they bear on both living there and on resale. The city sets its own zoning and permitting, and open residential ground is limited, so replacement is the more common route.',
    ],
    localFaqs: [
      {
        q: 'How close is the commercial ground?',
        a: 'Close, in a city this compact. Distance, traffic routes and what the zoning permits in between are worth checking for the specific parcel.',
      },
      {
        q: 'Is there land available?',
        a: 'Limited, so building new more often means replacing an existing house than building on open ground.',
      },
    ],
  },

  edgewood: {
    intro:
      'Building new in Edgewood? Generous lots, and covenants to read. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a Kenton County city that is predominantly residential, developed largely in the later 20th century with comfortable lot sizes and consistent subdivision streets.',
      'Lot sizes here give room to site a house properly rather than fit it between minimum clearances, which is a real advantage at the design stage. The counterweight is that ground platted as modern subdivisions usually carries recorded covenants, and those are private agreements binding elevations, materials, minimum sizes and outbuildings independently of city zoning. They are frequently the stricter instrument, and they are worth reading before the lot is bought.',
    ],
    localFaqs: [
      {
        q: 'Are the lots big enough to site a house well?',
        a: 'Generally yes, which is a genuine advantage — the design can place the house properly rather than squeeze it between minimum clearances.',
      },
      {
        q: 'What do the covenants usually restrict?',
        a: 'Elevations, materials, minimum sizes and outbuildings. They bind separately from city zoning and are often the stricter of the two.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Building new in Taylor Mill? Rolling ground above the Licking. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a Kenton County city on the rolling ground east of Covington above the Licking River valley, with residential development spread across noticeably varied terrain.',
      'Terrain is the variable that matters here, and it changes over short distances. Parcels range from comfortably level to genuinely sloping, and the foundation is where that shows up first — a walkout designed deliberately is an asset, while a grade discovered late is a cost. Establishing the fall across a parcel and what the ground will carry before purchase is what keeps that a design choice rather than a surprise.',
    ],
    localFaqs: [
      {
        q: 'How much does the ground vary here?',
        a: 'Considerably, over short distances. Some parcels are comfortably level and others genuinely slope, and the foundation is where the difference appears.',
      },
      {
        q: 'Is a sloping lot a problem?',
        a: 'Not when it is designed for — a walkout can be a real asset. It becomes a problem only when the grade is discovered rather than planned.',
      },
    ],
  },

  elsmere: {
    intro:
      'Building new in Elsmere? Compact lots, and a built-out grid. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is a Kenton County city west of Covington, developed through the 20th century with modest housing on compact lots and little undeveloped ground remaining.',
      'On lots of this size the buildable footprint once the required clearances are applied is the constraint that decides which plans are realistic, and it is consistently smaller than people expect from the deed dimensions. With open ground scarce, new building usually means replacing an existing house, so the purchase and demolition come first in the budget. The city sets its own zoning and permitting for both.',
    ],
    localFaqs: [
      {
        q: 'Will a standard plan fit here?',
        a: 'Often only with changes. The buildable footprint after clearances is consistently smaller than the deed dimensions suggest, so we check it early.',
      },
      {
        q: 'Is there open ground?',
        a: 'Little of it, so building new generally means acquiring a house to replace. That puts the purchase and demolition at the front of the budget.',
      },
    ],
  },

  independence: {
    intro:
      'Building new in Independence? Genuine open ground in Kenton County. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is a Kenton County city in the more open southern part of the county, one of the region’s growth areas, with substantial recent development and land still available around it.',
      'This is among the more realistic places in Northern Kentucky to buy a lot rather than buy a house to remove. What replaces the teardown question is a services question: on the outer parcels, how far sewer and water actually run, what extending them costs from that frontage, and whether a parcel relies on private water or waste systems instead. Those answers come from the city and the sanitation district for a specific address, and they belong before a purchase.',
    ],
    localFaqs: [
      {
        q: 'Can I actually buy a lot here?',
        a: 'More readily than in most of the county — this is a growth area with land still available, so you are usually buying ground rather than a house to remove.',
      },
      {
        q: 'What about sewer on the outer parcels?',
        a: 'It varies. How far the mains run, what a connection costs and whether a parcel needs private systems all get confirmed for the address before purchase.',
      },
    ],
  },

  // ---------- Cohort 9 · Campbell & Boone Counties, Kentucky ----------

  'dayton-ky': {
    intro:
      'Building new in Dayton? A narrow river city, low to the water. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a small Campbell County city on the Ohio River east of Bellevue, densely built in the 19th and early 20th centuries on a compact grid running back from the riverfront.',
      'The two governing facts are lot width and elevation. Parcels on this grid are narrow enough that the buildable footprint after the required clearances is often well short of the deed dimensions, which decides what plans are realistic before anything else does. And on the lower ground, required flood elevation drives the foundation, the first-floor height and the insurance for as long as you own the house — a determination for a surveyor and the floodplain administrator.',
    ],
    localFaqs: [
      {
        q: 'How narrow are the lots here?',
        a: 'Narrow enough that the buildable footprint after clearances is often well short of the deed dimensions. That is the first thing we check against your plan.',
      },
      {
        q: 'Does flood elevation apply across the city?',
        a: 'It depends on where the parcel sits. On the lower ground it governs the foundation, the first-floor height and the insurance.',
      },
    ],
  },

  southgate: {
    intro:
      'Building new in Southgate? Hillside ground above the river cities. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city on the rising ground behind Newport, residential throughout, with streets that climb away from the river valley.',
      'Terrain does most of the work here. Parcels that sit on the rise ask for bearing depth, retaining where the cut requires it, and a structure designed to step with the grade rather than sit flat on it — costs that come from a soils report rather than from an estimate. The city is small and largely built out, so ground usually comes by replacement, which puts the purchase alongside the site work at the front of the budget.',
    ],
    localFaqs: [
      {
        q: 'Is the ground difficult in Southgate?',
        a: 'It rises away from the river valley, so bearing depth and retaining matter on the steeper parcels. A soils report gives the real figures before you commit.',
      },
      {
        q: 'Is there open land?',
        a: 'Not much — the city is small and largely built out, so building new usually means replacing an existing house.',
      },
    ],
  },

  wilder: {
    intro:
      'Building new in Wilder? Licking valley ground, and commercial neighbours. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River valley south of Newport, combining residential streets with substantial commercial and light industrial land.',
      'On the valley floor, how a parcel sits relative to the river governs drainage and elevation, and those determine the foundation and the insurance rather than merely influencing them. The second check is the parcel’s relationship to the commercial ground — how close, what operates there, and what the zoning permits between. Both questions have documented answers, and both are considerably cheaper to ask before a purchase closes.',
    ],
    localFaqs: [
      {
        q: 'Does the Licking valley affect building here?',
        a: 'On the valley floor it governs drainage and elevation, which in turn determine the foundation and the insurance. Those get established before purchase.',
      },
      {
        q: 'How much does the commercial land matter?',
        a: 'Worth checking what operates there and what the zoning permits between it and your parcel. It bears on both living there and resale.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Building new in Highland Heights? A university city that is still growing. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city built around Northern Kentucky University, with established residential streets and continued development on the ground around the campus.',
      'A university at the centre shapes the land market in a specific way: parcels near the campus can be valued and zoned for student housing rather than for single-family use, which affects both what you can build and what you will pay. Checking the zoning on your parcel and the ones adjoining it is worth doing before a purchase. Away from the campus edge the residential ground is straightforward and predictable to build on.',
    ],
    localFaqs: [
      {
        q: 'Does the university affect what I can build?',
        a: 'Near the campus, parcels can be zoned and priced for student housing rather than single-family use. Worth checking your parcel and the adjoining ones before buying.',
      },
      {
        q: 'Is the ground itself difficult?',
        a: 'Away from the campus edge it is straightforward — established residential streets on predictable ground.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Building new in Cold Spring? A growth corridor with land in it. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a Campbell County city along the US-27 corridor south of the river cities, one of the county’s steadier growth areas, with recent residential development and land remaining around it.',
      'Because you are more often buying ground than buying a house to remove, the decisive checks are about the parcel itself. Where the sewer and water mains actually run, what capacity is available, and what a connection costs from that frontage differ between parcels that look alike from the road. The city and the sanitation district answer that for a specific address, and the answer belongs in the purchase rather than the design.',
    ],
    localFaqs: [
      {
        q: 'Is there land available in Cold Spring?',
        a: 'Yes, more than in the built-out river cities. You are generally buying a lot rather than a house you intend to remove.',
      },
      {
        q: 'Why check services parcel by parcel?',
        a: 'Because the area developed in stages, so mains routes, capacity and connection costs vary between parcels that look similar from the road.',
      },
    ],
  },

  alexandria: {
    intro:
      'Building new in Alexandria? Acreage, and private systems to plan for. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is a Campbell County city in the more rural southern part of the county, with a small historic centre and open, rolling farmland and larger parcels around it.',
      'On genuinely rural ground the site questions change character entirely. Whether a parcel is served by mains water and sewer or needs a private well and an on-site waste system is the largest single variable, and where a septic system is required its feasibility depends on soil conditions established by testing rather than assumed. Add the length of a drive to a house set back from the road, and the site can carry real cost before the foundation starts.',
    ],
    localFaqs: [
      {
        q: 'Will I need a well and septic system?',
        a: 'On the more rural parcels, often. Whether a septic system is feasible depends on soil testing rather than assumption, and that belongs before purchase.',
      },
      {
        q: 'What else costs money on a rural lot?',
        a: 'The drive, if the house sits well back from the road, and running power and services to it. Both are real figures rather than details.',
      },
    ],
  },

  melbourne: {
    intro:
      'Building new in Melbourne? A tiny river village, genuinely rural. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a very small Campbell County city on the Ohio River south-east of the main river cities, with a handful of streets and open rural ground around it.',
      'Somewhere this small and this rural, almost everything about a build is site-specific rather than governed by process. What services reach the parcel and what extending them costs, whether private water and waste systems are required and whether the soil supports them, how a drive reaches the building position, and on the low ground near the river what elevation requirements do to the foundation. All of it is establishable before a purchase, and all of it should be.',
    ],
    localFaqs: [
      {
        q: 'Are mains services available in Melbourne?',
        a: 'Not everywhere. What reaches a specific parcel and what extending it costs is the first thing to establish, along with whether private systems are needed.',
      },
      {
        q: 'Does the river matter here?',
        a: 'On the low ground near it, elevation requirements govern the foundation and the insurance, determined by a surveyor and the floodplain administrator.',
      },
    ],
  },

  hebron: {
    intro:
      'Building new in Hebron? Growth ground beside a logistics hub. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is an unincorporated Boone County community west of the airport, an area that has seen substantial distribution and logistics development alongside its residential ground.',
      'Boone County governs here rather than a city. The check worth making carefully is what surrounds a residential parcel and what the zoning would permit there, because logistics development changes an area’s traffic patterns and operating hours in ways that are difficult to reverse and easy to underestimate from a single visit. That is a matter of public record, and reading it before a purchase is straightforward.',
    ],
    localFaqs: [
      {
        q: 'Who governs building in Hebron?',
        a: 'Boone County — it is unincorporated, so there is no city zoning to satisfy.',
      },
      {
        q: 'Should the logistics development concern me?',
        a: 'It is worth checking what the zoning permits around your parcel. Distribution use changes traffic patterns and operating hours, and that is hard to reverse.',
      },
    ],
  },

  burlington: {
    intro:
      'Building new in Burlington? Boone County’s centre, with room around it. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is an unincorporated Boone County community at the administrative centre of the county, with a historic core and considerable open and developing ground around it.',
      'Boone County sets the zoning and issues the permits, and being at the county’s administrative centre tends to make that a comparatively direct process. Land is genuinely available, so the practical work is on the parcel: where mains services run and what reaching them costs, whether private water or waste systems are needed further out, and what the ground itself will carry. Those get answered for the specific address before a purchase.',
    ],
    localFaqs: [
      {
        q: 'Is land available around Burlington?',
        a: 'Yes, there is genuine open and developing ground, so buying a lot rather than a house to remove is the normal route.',
      },
      {
        q: 'Are all parcels on mains services?',
        a: 'Not the outer ones. Where the mains run, what extending them costs and whether private systems are needed is confirmed per address before purchase.',
      },
    ],
  },

  union: {
    intro:
      'Building new in Union? Subdivision country, and covenants rule. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is a Boone County city in the southern part of the county that has grown quickly in recent decades, developed largely as planned residential subdivisions on comfortable lots.',
      'Where nearly all the ground was platted recently, the recorded covenants and the architectural review committee are usually current, active and considerably more prescriptive than city zoning — governing elevations, materials, minimum sizes, outbuildings and sometimes landscaping. For a custom home that is the binding constraint, and it is a private agreement rather than a public rule. It should be read before the lot is bought, not after a design exists.',
    ],
    localFaqs: [
      {
        q: 'Can I build the house I want in a Union subdivision?',
        a: 'Within what the covenants and any architectural review committee permit, which is usually more prescriptive than city zoning. Read them before buying the lot.',
      },
      {
        q: 'Are the committees actually active here?',
        a: 'In recently platted subdivisions, generally yes. Treat the covenants as the governing document for design rather than as a formality.',
      },
    ],
  },

  walton: {
    intro:
      'Building new in Walton? Rural southern Boone County ground. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a city in southern Boone County near the I-75 corridor, with a small historic centre and open, rolling rural ground extending around it.',
      'Out here the parcel does most of the deciding. Whether mains water and sewer reach it or a private well and on-site waste system are required is the largest cost variable, and septic feasibility rests on soil testing rather than on what a neighbouring property has. The length of the drive, the distance services must be run, and what the ground will carry all follow from the specific site — which is why the assessment happens before the purchase.',
    ],
    localFaqs: [
      {
        q: 'Do I need well and septic here?',
        a: 'On many rural parcels, yes. Septic feasibility comes from soil testing on that parcel rather than from what a neighbouring property has.',
      },
      {
        q: 'What drives the site cost on rural land?',
        a: 'The drive, the distance services must run and what the ground will carry. All three come from the specific site rather than from the area.',
      },
    ],
  },

  // ---------- Cohort 10 · Clermont County, Ohio ----------

  'mount-carmel': {
    intro:
      'Building new in Mount Carmel? Unincorporated, so confirm who governs. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is an unincorporated community in Union Township, Clermont County, east of Cincinnati, with residential development spread across gently rolling ground.',
      'There is no village hall here — Union Township and Clermont County set the zoning and issue the permits, and Clermont’s administration is a different one from Hamilton’s in both process and timing. That is the first thing to establish for an address rather than assumed from experience elsewhere in the region. The ground itself is generally workable, so once the jurisdiction is settled the build tends to be predictable.',
    ],
    localFaqs: [
      {
        q: 'Which authority governs a Mount Carmel address?',
        a: 'Union Township and Clermont County — it is unincorporated. Clermont’s process and timing differ from Hamilton County’s, so we confirm it up front.',
      },
      {
        q: 'Is the ground straightforward?',
        a: 'Generally yes, gently rolling and predictable, so once the jurisdiction question is settled the build is fairly conventional.',
      },
    ],
  },

  summerside: {
    intro:
      'Building new in Summerside? Platted subdivisions with private rules. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is an unincorporated Union Township community in Clermont County, developed substantially in recent decades as platted residential subdivisions on comfortable lots.',
      'Where ground was platted as subdivisions, the recorded covenants sit alongside township zoning as a separate and often stricter instrument — binding elevations, materials, minimum sizes, outbuildings and siting. For a custom home they are usually the real constraint on design. They are recorded against the property and readable before a purchase, which is considerably better than discovering one after a house has been drawn to township rules.',
    ],
    localFaqs: [
      {
        q: 'What actually limits my design here?',
        a: 'Usually the recorded subdivision covenants rather than township zoning. They bind elevations, materials, sizes and siting, and they are often stricter.',
      },
      {
        q: 'When should I read them?',
        a: 'Before buying the lot. Designing to township rules and finding a covenant afterwards means paying for the design twice.',
      },
    ],
  },

  withamsville: {
    intro:
      'Building new in Withamsville? Residential ground beside a busy corridor. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is an unincorporated Union Township community in Clermont County, with residential streets set around the substantial commercial corridor along State Route 125.',
      'The residential ground here builds straightforwardly — gently rolling, well served, predictable foundations. The variable worth attending to for a specific parcel is its relationship to the corridor: how close it sits, which routes traffic uses to reach it, and what the zoning permits on the ground between. Those details separate parcels that look similar in a listing, and they bear on both daily life and long-term value.',
    ],
    localFaqs: [
      {
        q: 'Is the ground good to build on?',
        a: 'Generally yes — gently rolling, well served and predictable, so the site takes a modest share of the budget.',
      },
      {
        q: 'How much does the corridor matter?',
        a: 'Enough to check. Distance, the routes traffic uses and what the zoning permits in between distinguish parcels that look alike in a listing.',
      },
    ],
  },

  milford: {
    intro:
      'Building new in Milford? A city on a county line and a river. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is an independent city on the Little Miami River east of Cincinnati, with a walkable historic centre and a boundary that extends across a county line.',
      'Two boundary questions come first. The city’s own zoning and permitting apply throughout, but which county a specific parcel sits in affects records and some approvals, and that is worth settling before rather than during. The second is the river: on ground near the Little Miami valley, elevation and drainage govern the foundation, the first-floor height and the insurance, determined by a surveyor and the floodplain administrator rather than estimated.',
    ],
    localFaqs: [
      {
        q: 'Which county is a Milford parcel in?',
        a: 'It depends on the parcel — the city extends across a county line. The city zoning applies throughout, but the county affects records and some approvals.',
      },
      {
        q: 'Does the Little Miami affect the design?',
        a: 'On ground near the valley, elevation and drainage govern the foundation and the insurance. Both get determined before a purchase closes.',
      },
    ],
  },

  mulberry: {
    intro:
      'Building new in Mulberry? Rolling Miami Township ground. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is an unincorporated Miami Township community in Clermont County near Milford, set on noticeably rolling ground with a mix of older properties and later residential development.',
      'Grade is the variable here and it changes over short distances. The fall across a parcel determines whether the foundation is conventional, stepped or a walkout, and that is the single largest swing in what the site costs before anything is above ground. Establishing the topography and what the ground will carry before purchase turns that into a design decision — a walkout designed deliberately is an asset rather than an overrun.',
    ],
    localFaqs: [
      {
        q: 'How much does the rolling ground matter?',
        a: 'It decides whether the foundation is conventional, stepped or a walkout, which is the largest single swing in site cost before anything is above ground.',
      },
      {
        q: 'Can a slope work in my favour?',
        a: 'Often, if it is designed for — a walkout lower level can be a genuine asset. It only hurts when it is discovered rather than planned.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Building new in Mount Repose? Check services parcel by parcel. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is an unincorporated Miami Township community in Clermont County, developed over several decades with a mix of subdivision eras across its residential streets.',
      'Because the area filled in gradually rather than all at once, service provision is not uniform across it. Where the sewer runs, what capacity is available, what a connection costs from a given frontage, and whether an older parcel still relies on a private system can differ between properties a street apart. Those answers come from the township and the county for a specific address, and they belong in the purchase decision.',
    ],
    localFaqs: [
      {
        q: 'Are all parcels here on public sewer?',
        a: 'Not necessarily. The area developed over several decades, so some older parcels may still rely on private systems. It is confirmed per address.',
      },
      {
        q: 'Why does that matter before I buy?',
        a: 'Because a connection cost, or the need for an on-site system, can be a significant figure that a listing will not tell you.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Building new in Day Heights? A small community with occasional splits. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a small unincorporated Miami Township community in Clermont County, with a modest residential footprint on gently rolling ground east of Milford.',
      'In a community this size the available ground tends to come from dividing a larger original parcel rather than from open land coming to market. Whether a split is possible turns on frontage, access and services as much as on area, and it is determined by the township and the county rather than by the seller. Establishing that before agreeing a price is what keeps a lot-split purchase from resting on an assumption.',
    ],
    localFaqs: [
      {
        q: 'Where does buildable ground come from here?',
        a: 'Usually dividing a larger original parcel. Whether that is possible turns on frontage, access and services, and the township and county decide it.',
      },
      {
        q: 'Can I rely on the seller’s view of a split?',
        a: 'No — it is the township and county that determine it. Establish it in writing before agreeing a price that depends on it.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Building new in New Richmond? A river village where elevation leads. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a village on the Ohio River in southern Clermont County, with a historic riverfront core on low ground and higher land rising behind it.',
      'The village divides sharply for building purposes. Down by the river, required flood elevation is the governing fact — it drives the foundation, the first-floor height, how the entry and parking work, and the insurance for as long as the house stands. On the higher ground behind, those questions fall away and are replaced by ordinary grade and services checks. Knowing which of the two a parcel is before you buy is the whole thing.',
    ],
    localFaqs: [
      {
        q: 'Is the whole village in the floodplain?',
        a: 'No — the low riverfront ground and the higher land behind are different propositions. Which one a parcel is on decides the design and the cost.',
      },
      {
        q: 'What does building to elevation involve?',
        a: 'A foundation and first-floor height set by the requirement, with the entry and parking designed around it. Planned early it looks deliberate rather than improvised.',
      },
    ],
  },

  amelia: {
    intro:
      'Building new in Amelia? Confirm which authority governs the address. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) sits in Clermont County east of Cincinnati along the State Route 125 corridor, an established community on gently rolling ground with residential development around a long-standing centre.',
      'Local government arrangements in this part of Clermont County have changed in recent years, so which authority actually issues the zoning approval and the permit for a given address is a question we settle in writing at the outset rather than assume from an older reference or a neighbouring property. Once that is established the ground itself is workable and the build fairly conventional, with the usual service and grade checks on the specific parcel.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits for an Amelia address?',
        a: 'Local government arrangements here have changed in recent years, so we confirm the current authority in writing for the specific address rather than assuming.',
      },
      {
        q: 'Does that delay a project?',
        a: 'Not if it is done first. It is a short piece of work at the outset and it avoids submitting to the wrong office later.',
      },
    ],
  },

  batavia: {
    intro:
      'Building new in Batavia? The county seat, with the East Fork nearby. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, a village on the East Fork of the Little Miami with a historic centre and township and rural ground extending around it.',
      'Being at the county’s administrative centre tends to make the process direct, but the first practical question is whether a parcel sits inside the village or in the surrounding township, because that decides which zoning applies and who issues the permit. The second is the East Fork: on ground near the valley, elevation and drainage govern the foundation and the insurance, and both are determinations rather than estimates.',
    ],
    localFaqs: [
      {
        q: 'Village or township — does it matter?',
        a: 'It decides which zoning applies and who issues the permit. We establish which side of the boundary a parcel falls on before anything else.',
      },
      {
        q: 'Does the East Fork affect building?',
        a: 'On ground near the valley, elevation and drainage govern the foundation and the insurance. Both are determined by a surveyor and the floodplain administrator.',
      },
    ],
  },

  owensville: {
    intro:
      'Building new in Owensville? A small village with rural ground around it. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in central Clermont County along the State Route 276 and US-50 area, with a compact centre and open agricultural ground surrounding it.',
      'The distinction that decides a project here is whether a parcel is inside the village or on the rural township ground beyond it. Inside, you are generally on mains services with village zoning applying. Outside, the questions become private water and on-site waste, soil testing to establish whether a septic system is feasible, and the cost of a drive and service runs to a building position set back from the road.',
    ],
    localFaqs: [
      {
        q: 'Is the parcel in the village or outside it?',
        a: 'That decides almost everything — village zoning and mains services inside, private systems and soil testing on the rural ground beyond.',
      },
      {
        q: 'How do I know if septic is feasible?',
        a: 'Soil testing on that parcel, not on a neighbouring one. It is inexpensive relative to what it settles, and it belongs before purchase.',
      },
    ],
  },

  goshen: {
    intro:
      'Building new in Goshen? Rural township ground with acreage. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is an unincorporated community in Goshen Township, northern Clermont County, with a small centre and open, rolling agricultural land across much of the township.',
      'On acreage the site does most of the deciding. Whether mains water and sewer reach a parcel or private systems are required is the largest cost variable, and septic feasibility rests on soil testing for that specific ground. Beyond it come the drive, the distance power and services must be run, and how equipment reaches a building position well back from the road. None of it is difficult, but all of it belongs before a purchase.',
    ],
    localFaqs: [
      {
        q: 'What drives the cost on a rural parcel?',
        a: 'Whether mains services reach it or private systems are needed, plus the drive and the distance services must run. Those are real figures rather than details.',
      },
      {
        q: 'Is a septic system always possible?',
        a: 'Not always — it depends on soil conditions established by testing on that parcel. That is worth doing before you commit to the land.',
      },
    ],
  },

  moscow: {
    intro:
      'Building new in Moscow? A very small river village on low ground. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small village on the Ohio River in southern Clermont County, a compact riverside settlement with rural ground extending behind it.',
      'Small and low is the combination that shapes any build here. On the riverside ground, required flood elevation governs the foundation, the first-floor height and the insurance, and that determination comes first rather than late. Because the village is small, service provision and access to a specific parcel are worth confirming individually rather than inferring, and on the ground behind the village the rural questions of private systems and service runs apply.',
    ],
    localFaqs: [
      {
        q: 'Can you build on the riverside ground?',
        a: 'Designed to the required elevation, often yes — and that elevation drives the foundation, the first-floor height and the insurance. It comes first.',
      },
      {
        q: 'Are services available everywhere here?',
        a: 'Worth confirming per parcel rather than assuming, and on the rural ground behind the village private systems may be needed.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Building new in Newtonsville? A tiny village in open country. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a very small village in north-eastern Clermont County, a handful of streets surrounded by open agricultural ground.',
      'Somewhere this small, the useful work is entirely parcel-specific. Whether an address sits inside the village or on the township ground outside it decides the zoning and the permitting. What services reach it decides whether you are connecting to mains or installing a well and an on-site waste system, with soil testing settling whether the latter is feasible. Both questions are quick to answer and both belong before a purchase rather than after.',
    ],
    localFaqs: [
      {
        q: 'Inside the village or outside — what changes?',
        a: 'The zoning, the permitting authority and usually whether mains services are available. It is the first thing to establish for an address.',
      },
      {
        q: 'What if there is no mains sewer?',
        a: 'Then an on-site system is needed, and whether one is feasible comes from soil testing on that parcel rather than from a neighbouring property.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Building new in Williamsburg? A historic village on the East Fork. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a village in eastern Clermont County on the East Fork of the Little Miami, with an early historic core and rural township ground extending around it.',
      'Two boundaries matter before design. Whether a parcel is inside the village or in the township beyond decides the zoning and who issues the permit. And where ground sits relative to the East Fork valley, elevation and drainage govern the foundation and the insurance rather than merely influencing them. On the higher rural ground, private water and waste systems and the cost of service runs become the practical variables instead.',
    ],
    localFaqs: [
      {
        q: 'Does the East Fork affect the buildable ground?',
        a: 'Near the valley it governs elevation and drainage, which determine the foundation and the insurance. That is established before purchase.',
      },
      {
        q: 'Is village ground different from township ground?',
        a: 'Yes — different zoning, different permitting authority, and usually a different answer on mains services.',
      },
    ],
  },

  bethel: {
    intro:
      'Building new in Bethel? Southern Clermont, and genuinely rural. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a village in southern Clermont County with a compact historic centre and extensive open farmland across the surrounding township ground.',
      'This is one of the more genuinely rural parts of the service area, which makes it one of the better places to build a house on real acreage — and one where the site work needs the most careful pricing. Private water and on-site waste are common outside the village, with septic feasibility established by soil testing. The drive, the service runs and how equipment reaches a building position set back from the road are all real figures rather than contingencies.',
    ],
    localFaqs: [
      {
        q: 'Can I build on acreage here?',
        a: 'Yes, this is one of the more genuinely rural parts of our area. The site work simply needs pricing carefully rather than assuming.',
      },
      {
        q: 'What should I settle before buying land?',
        a: 'Whether mains services reach it, whether a septic system is feasible on soil testing, and what the drive and service runs will cost.',
      },
    ],
  },

  // ---------- Cohort 11 · Butler & Warren County, Ohio, and southeastern Indiana ----------

  ross: {
    intro:
      'Building new in Ross? Rural Butler County ground on the Great Miami. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is an unincorporated community in Ross Township, western Butler County, set in open agricultural country along the Great Miami River valley.',
      'Two sets of questions apply depending on where a parcel sits. On the valley ground near the Great Miami, elevation and drainage govern the foundation and the insurance, determined by a surveyor and the floodplain administrator. On the farmland above it, the rural checks take over — whether mains services reach the parcel, whether a septic system is feasible on soil testing, and what the drive and service runs will cost.',
    ],
    localFaqs: [
      {
        q: 'Does the Great Miami affect building here?',
        a: 'On the valley ground it governs elevation and drainage, which determine the foundation and the insurance. The higher farmland raises service questions instead.',
      },
      {
        q: 'Who governs a Ross address?',
        a: 'Ross Township and Butler County — it is unincorporated, so Butler’s process applies rather than Hamilton County’s.',
      },
    ],
  },

  fairfield: {
    intro:
      'Building new in Fairfield? An established Butler County city. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a substantial independent city in Butler County north of Cincinnati, developed largely through the later 20th century with consistent residential subdivisions on level, workable ground.',
      'The city sets its own zoning and permitting, under Butler County administration rather than Hamilton’s. Physically this is easy ground — level lots, good services, predictable foundations, so the site takes a modest share of the budget. With the residential areas substantially built out, new building tends to mean either replacing an existing house or working within a platted subdivision whose recorded covenants govern design alongside the city’s rules.',
    ],
    localFaqs: [
      {
        q: 'Is Fairfield straightforward to build in?',
        a: 'Physically, yes — level ground, good services and predictable foundations. Most of the budget goes into the house rather than the site.',
      },
      {
        q: 'Are there covenants to consider?',
        a: 'In the platted subdivisions, usually. They govern design alongside the city’s zoning and are frequently the stricter instrument.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Building new in Beckett Ridge? The association decides the design. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a large planned residential community in West Chester Township, Butler County, developed around a golf course with consistent architectural standards across its neighborhoods.',
      'In a community planned and built to a single standard, the homeowners’ association and its architectural review process are the governing authority on design — more so than township zoning, which tends to be the looser of the two. Elevations, materials, roof pitches, colours, minimum sizes and siting can all be specified. Those requirements are obtainable in writing before you buy a lot, and doing so is what prevents a design being approved by the township and refused by the association.',
    ],
    localFaqs: [
      {
        q: 'Who has the final say on my design?',
        a: 'In practice the association’s architectural review, which is usually more prescriptive than township zoning on elevations, materials, roof pitch and siting.',
      },
      {
        q: 'Can I see the standards before buying?',
        a: 'Yes, and you should. Obtaining them in writing first prevents a design that satisfies the township and fails the association.',
      },
    ],
  },

  wetherington: {
    intro:
      'Building new in Wetherington? Tight standards, and controlled site access. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is a planned residential community in West Chester Township, Butler County, developed to a consistent and closely maintained standard with a controlled-access layout.',
      'Alongside the usual architectural requirements — which here are among the more prescriptive in the region — a controlled-access community adds a practical dimension most sites do not have. Construction traffic, deliveries, working hours and where materials may be stored are typically governed by the association as well, and those rules shape the programme rather than just the paperwork. We establish both the design standards and the site-access requirements before pricing a build here.',
    ],
    localFaqs: [
      {
        q: 'Do the rules cover construction as well as design?',
        a: 'Usually — deliveries, working hours and material storage are commonly governed alongside elevations and materials, and they affect the programme.',
      },
      {
        q: 'Does that make a build harder?',
        a: 'It makes it more planned. Once the access and design requirements are known up front they are straightforward to work within.',
      },
    ],
  },

  hamilton: {
    intro:
      'Building new in Hamilton? A county seat with a river running through it. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, a substantial city built on both banks of the Great Miami River, with a 19th-century core, historic residential streets and considerable variety in its housing stock.',
      'The river is the defining physical fact — on ground near it, elevation and drainage govern the foundation, the first-floor height and the insurance, determined by a surveyor and the floodplain administrator. On the older residential streets there is a second consideration: where a parcel falls within an area the city treats as historically significant, how a new house meets the street may be reviewed. Both get established before design rather than at permit.',
    ],
    localFaqs: [
      {
        q: 'Does the Great Miami affect much of the city?',
        a: 'It affects the ground near it, where elevation and drainage govern the foundation and the insurance. Which parcels those are gets determined, not assumed.',
      },
      {
        q: 'Will a new house be design-reviewed?',
        a: 'It can be, where a parcel falls in an area the city treats as historically significant. We establish what applies before design begins.',
      },
    ],
  },

  millville: {
    intro:
      'Building new in Millville? A tiny village in open Butler County country. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a very small village in western Butler County, a compact settlement surrounded by open agricultural ground.',
      'With a village this small, whether a parcel sits inside its boundary or on the township land around it decides the zoning and the permitting authority, and that is the first thing to establish. On the rural ground the practical variables follow: whether mains water and sewer reach the parcel, whether an on-site waste system is feasible on soil testing, and what a drive and service runs cost to a building position set back from the road.',
    ],
    localFaqs: [
      {
        q: 'Village or township ground?',
        a: 'It decides the zoning and who issues the permit, and it is the first thing we confirm for a specific address.',
      },
      {
        q: 'What does rural ground add to the cost?',
        a: 'Private water and waste where mains do not reach, plus the drive and service runs. All quantifiable before you buy.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Building new in New Miami? A small village with an industrial past. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village in Butler County just north of Hamilton along the Great Miami, a compact community shaped by the heavy industry that historically operated in the valley.',
      'Ground with that history behind it warrants an environmental review before purchase as a normal step rather than an unusual precaution — what a parcel was previously used for is often a matter of record, and establishing it costs little relative to what it can uncover. Alongside that, proximity to the Great Miami raises elevation and drainage on the lower ground, which govern the foundation and the insurance.',
    ],
    localFaqs: [
      {
        q: 'Is the industrial history a real concern?',
        a: 'Enough to review before purchase. What a parcel was previously used for is often on record, and checking is inexpensive relative to what it can find.',
      },
      {
        q: 'Does the river affect the village?',
        a: 'On the lower ground, elevation and drainage govern the foundation and the insurance. Those get determined rather than estimated.',
      },
    ],
  },

  monroe: {
    intro:
      'Building new in Monroe? A city that crosses a county line. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is an independent city along the I-75 corridor north of Cincinnati whose boundary extends across the Butler and Warren county line, and which has grown substantially in recent decades.',
      'The city’s zoning and permitting apply throughout, but which county a specific parcel sits in affects records and some approvals, so that is worth settling before rather than during a project. Land is genuinely available along this corridor, which makes buying a lot rather than a house the normal route — and on the newer platted ground the recorded covenants usually govern design more tightly than city zoning does.',
    ],
    localFaqs: [
      {
        q: 'Which county is a Monroe address in?',
        a: 'It depends on the parcel — the city extends across the Butler and Warren line. City zoning applies throughout, but the county affects records and some approvals.',
      },
      {
        q: 'Is there land available?',
        a: 'Yes, more than in the built-out areas closer to the city, so you are generally buying a lot rather than a house to remove.',
      },
    ],
  },

  landen: {
    intro:
      'Building new in Landen? Planned Warren County subdivisions. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is an unincorporated community in Deerfield Township, Warren County, developed as planned residential subdivisions around shared open space and amenities.',
      'Where a community was planned and built as one, the recorded covenants and any homeowners’ association tend to be the operative constraint on a custom design — elevations, materials, minimum sizes, outbuildings and siting — rather than township zoning, which is generally the looser instrument. Deerfield Township and Warren County handle the zoning and permitting, and Warren’s administration differs from Hamilton County’s in process and timing.',
    ],
    localFaqs: [
      {
        q: 'What governs the design here?',
        a: 'Usually the recorded covenants and the association rather than township zoning, which tends to be the looser of the two.',
      },
      {
        q: 'Who issues the permit?',
        a: 'Deerfield Township and Warren County. Warren’s process and timing differ from Hamilton County’s, so we confirm requirements directly.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Building new in Loveland Park? Not the same jurisdiction as Loveland. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is an unincorporated community in Warren County adjoining the city of Loveland, with established residential streets on generally level ground.',
      'The name causes genuine confusion, and it has practical consequences: this is unincorporated Warren County ground, so the township and the county govern rather than the City of Loveland, and the city’s zoning and permitting do not apply. Establishing that for a specific address at the outset avoids approaching the wrong office. Once settled, the ground itself is straightforward and the build fairly conventional.',
    ],
    localFaqs: [
      {
        q: 'Is Loveland Park part of Loveland?',
        a: 'No. It is unincorporated Warren County ground, so the township and county govern and the city’s zoning does not apply, despite the shared name.',
      },
      {
        q: 'Does that change anything practical?',
        a: 'It changes who you apply to and whose rules apply. Establishing it at the outset avoids submitting to the wrong office.',
      },
    ],
  },

  maineville: {
    intro:
      'Building new in Maineville? A growing village near the Little Miami. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a village in Warren County north-east of Cincinnati, with a small historic centre and considerable recent residential development on the ground around it.',
      'Whether a parcel sits inside the village or on the surrounding township land decides the zoning and the permitting authority, and with an area developing this quickly that boundary is worth confirming rather than assuming. On ground near the Little Miami valley, elevation and drainage govern the foundation and the insurance. On the newly platted ground, recorded covenants are typically the binding constraint on design.',
    ],
    localFaqs: [
      {
        q: 'Village or township — which applies?',
        a: 'It decides the zoning and the permitting authority. In a fast-developing area that boundary is worth confirming for the specific address.',
      },
      {
        q: 'What limits the design on new subdivision ground?',
        a: 'Usually the recorded covenants rather than the zoning. They bind elevations, materials and siting, and they are readable before you buy.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Building new in Pleasant Plain? A small village in open country. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in eastern Warren County, a compact settlement surrounded by open agricultural ground.',
      'The work here is almost entirely parcel-specific. Whether an address is inside the village or on township land decides the zoning and the permit. What services reach it decides whether you connect to mains or install a well and an on-site waste system, and whether the latter is feasible comes from soil testing on that ground rather than from a neighbouring property. Both are quick to establish and both belong before a purchase.',
    ],
    localFaqs: [
      {
        q: 'Are mains services available?',
        a: 'It depends on the parcel. What reaches a specific address, and whether private systems are needed instead, is the first thing to confirm.',
      },
      {
        q: 'How is septic feasibility determined?',
        a: 'By soil testing on that parcel. A neighbouring property having one is not evidence that yours can, so the test comes before the purchase.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Building new in South Lebanon? A village growing along the Little Miami. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a village in Warren County on the Little Miami River, with a historic centre and substantial recent residential growth on the ground around it.',
      'The river and the growth set the two agendas. On ground near the Little Miami valley, elevation and drainage govern the foundation, the first-floor height and the insurance — determinations rather than estimates. On the newer platted ground away from the valley, the recorded covenants and any architectural review are typically what constrain a custom design, more tightly than village or township zoning does.',
    ],
    localFaqs: [
      {
        q: 'Does the Little Miami affect the buildable ground?',
        a: 'Near the valley it governs elevation and drainage, which determine the foundation and the insurance. That is settled before a purchase closes.',
      },
      {
        q: 'What about the newer subdivisions?',
        a: 'There the recorded covenants and any architectural review are usually the binding constraint on design rather than the zoning.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Building new in Lawrenceburg? Indiana code, and a river town. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a Dearborn County city on the Ohio River in south-eastern Indiana, a historic river town on low ground with hills rising behind it.',
      'Building here means building in Indiana, which is a different state with its own building code, its own permitting authority and its own inspection regime — nothing about an Ohio or Kentucky approval carries across. On the low ground near the river, elevation and drainage govern the foundation and the insurance. On the rising ground behind the town, bearing and access questions replace them. We work in all three states and handle the applicable process as part of one contract.',
    ],
    localFaqs: [
      {
        q: 'Is building in Indiana different?',
        a: 'Yes — its own code, permitting authority and inspections. An Ohio or Kentucky approval carries nothing across the line.',
      },
      {
        q: 'Low ground or the hills behind?',
        a: 'They are different projects. Low ground raises elevation and drainage; the rising ground raises bearing, retaining and access instead.',
      },
    ],
  },

  greendale: {
    intro:
      'Building new in Greendale? Indiana rules on rising ground. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County town in south-eastern Indiana adjoining Lawrenceburg, set largely on the higher ground rising away from the Ohio River valley.',
      'Sitting mostly above the valley floor changes the emphasis: rather than elevation requirements, the governing questions here are what the slope will carry, how deep competent bearing sits, and whether a cut needs engineered retaining — answers that come from a soils report rather than from a walk-round. Indiana’s building code and permitting apply, and the town sets its own zoning, so both get confirmed for the address before design.',
    ],
    localFaqs: [
      {
        q: 'Is the flood question relevant in Greendale?',
        a: 'Less so than on the valley floor, since much of the town sits on higher ground. Slope, bearing and retaining are the governing questions instead.',
      },
      {
        q: 'Which code applies?',
        a: 'Indiana’s, with the town’s own zoning alongside it. Both get confirmed for the specific address before design begins.',
      },
    ],
  },

  aurora: {
    intro:
      'Building new in Aurora? A historic Indiana river town on the hills. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a Dearborn County city on the Ohio River in south-eastern Indiana, a 19th-century river town with a notable architectural legacy and streets climbing the hillside above the waterfront.',
      'Three things shape a build. Indiana’s code and permitting apply, together with the city’s own zoning. The hillside streets raise bearing, retaining and access questions that come from a soils report rather than an estimate. And in a town with this much surviving period architecture, how a new house meets an established street — proportion, roof form, materials — is worth designing for deliberately rather than importing from a stock plan.',
    ],
    localFaqs: [
      {
        q: 'What governs a build in Aurora?',
        a: 'Indiana’s building code and permitting, alongside the city’s own zoning. Both get confirmed for the address before design.',
      },
      {
        q: 'Does the older architecture affect a new design?',
        a: 'It sets a bar worth designing to. Proportion, roof form and materials are what make a new house sit well on a street with this much period fabric.',
      },
    ],
  },
};
