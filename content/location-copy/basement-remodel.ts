import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /basement-remodel/[location].
 *
 * Angle set is drawn from what only a below-grade project involves: water
 * management before any finishing, egress requirements for a legal bedroom,
 * ceiling height against ductwork and beams, radon testing before drywall,
 * sump and ejector pumps, insulating foundation walls correctly, and the
 * mechanical clearances that have to be preserved because the furnace, water
 * heater and panel usually live down there.
 *
 * Nothing here restates the kitchen or bathroom services.
 */
export const basementRemodelCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Basement remodel in Sedamsville? On a hillside, water arrives from uphill. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'A house cut into a slope has ground water moving toward it from above, and that is the first thing to establish — not the layout. Where the hill sheds toward the foundation, the answer is exterior grading and drainage rather than anything we can do inside. Finishing a basement that takes water is spending money twice, so we look at the outside of the house before drawing anything for the inside.',
    ],
    localFaqs: [
      {
        q: 'Why look outside before designing the basement?',
        a: 'Because on a hillside the water comes from uphill, and grading and drainage outside fix that in a way nothing inside can. Finishing over an active problem means doing it twice.',
      },
      {
        q: 'What if the basement has taken water before?',
        a: 'Then we solve that first and prove it stays dry through a wet season before finishing. We would rather delay the fun part than seal a problem behind drywall.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Basement remodel in Sayler Park? A bedroom down there needs a legal egress window. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'Calling a basement room a bedroom has a specific requirement behind it: an egress opening large enough to climb out of, at a height you can reach, with a window well sized so you can actually get up and out. Without it the room is a bonus room — which matters for safety first, and for how the space is described at resale second. We establish which you are building before design, not after.',
    ],
    localFaqs: [
      {
        q: 'Can we put a bedroom in the basement?',
        a: 'Only with a proper egress window — an opening large enough to climb out of, at a reachable height, with a window well you can get up out of. Without it, it is a bonus room.',
      },
      {
        q: 'How much does adding egress cost?',
        a: 'It means cutting the foundation wall, a window and a well with a ladder or steps. It is a real line item and it is the difference between a bedroom and a room you cannot call one.',
      },
    ],
  },

  riverside: {
    intro:
      'Basement remodel in Riverside? On this ground, we will tell you if the answer is no. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'This is the neighbourhood where we are most likely to advise against finishing at all. On low river bottomland with a high water table, some basements will never be reliably dry — and no amount of interior work changes that. Where that is the case we would rather say so and talk about what else the same budget could do upstairs than take money for something that will not last.',
    ],
    localFaqs: [
      {
        q: 'Can every basement be finished?',
        a: 'No. On low ground with a high water table, some cannot be made reliably dry — and we would rather say that than take money for work that will not last.',
      },
      {
        q: 'How do we know which ours is?',
        a: 'History, the water table, what the walls and floor show, and ideally observing it through a wet season. That evidence decides it rather than optimism.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Basement remodel in East Price Hill? In a two-family, the basement is shared infrastructure. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'In these buildings the basement usually holds the furnace, water heater, panel and laundry for both units — and everyone needs access to all of it. Finishing around that means preserving working clearances at every appliance and keeping the panel reachable, which is a requirement rather than a courtesy. It shapes the layout before anything else does.',
    ],
    localFaqs: [
      {
        q: 'Can we finish around the furnace and panel?',
        a: 'Yes, with the required working clearances preserved at every appliance and the panel kept reachable. That is a requirement rather than a preference, and it shapes the layout first.',
      },
      {
        q: 'What if the other unit needs access?',
        a: 'Then the route to shared laundry and mechanicals stays open by design. We work that out before drawing rather than discovering it at inspection.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Basement remodel in West Price Hill? Test for radon before you close the walls. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'Radon is a genuine consideration across this region, and a finished basement is precisely where people start spending hours a day. A test costs very little and takes a few days. Mitigation before finishing is straightforward — a sealed sump lid and a vent pipe routed while walls are open. Doing it after drywall means opening finished work, which is why we raise it at the start rather than as an afterthought.',
    ],
    localFaqs: [
      {
        q: 'Should we test for radon before finishing?',
        a: 'Yes — a test costs very little and a finished basement is where people spend hours a day. Mitigation before finishing is straightforward; afterwards it means opening finished work.',
      },
      {
        q: 'What does mitigation involve?',
        a: 'Typically a sealed sump lid and a vent pipe routed up and out, which is far easier while walls and ceilings are open. It is a modest cost at the right moment.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Basement remodel in Lower Price Hill? Ceiling height decides what is possible. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'Basements in 19th-century rowhouses were built as cellars, not rooms, and the height frequently is not there — and once ductwork, beams and a finished ceiling take their share, what is left can fall below what a habitable room requires. That measurement is the first thing we take, because it determines whether this is a finishing project or a conversation about something else entirely.',
    ],
    localFaqs: [
      {
        q: 'Is our basement tall enough to finish?',
        a: 'It is the first measurement we take. Ductwork, beams and a finished ceiling all take their share, and what is left has to meet the requirement for a habitable room.',
      },
      {
        q: 'Can the floor be lowered?',
        a: 'Underpinning or benching exists and it is a major structural project rather than part of a finishing job. We will tell you honestly what it involves before you consider it.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Basement remodel in Over-the-Rhine? In a converted building, the basement is rarely yours alone. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'In a converted building, below-grade space is frequently common property or holds building services even where a unit has use of it. Establishing what you actually own and what the association permits comes before design — and any work touching the building envelope, drainage or a shared mechanical room needs approval. We settle that first because it decides whether there is a project at all.',
    ],
    localFaqs: [
      {
        q: 'Can we finish the basement of our condo building?',
        a: 'It depends what you own and what the association permits — below-grade space is frequently common property or holds building services. We establish that before designing.',
      },
      {
        q: 'What needs board approval?',
        a: 'Anything touching the envelope, drainage or a shared mechanical room. We prepare what the board asks for rather than leaving it with you.',
      },
    ],
  },

  downtown: {
    intro:
      'Basement remodel in Downtown Cincinnati? Below-grade space here is usually building services. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'We should be straightforward: in towers and converted commercial buildings, below-grade areas are almost always plant rooms, parking or storage under building control rather than space a resident can finish. Where a downtown property genuinely has private lower-level space — some converted buildings do — we work on it like anywhere else. Where it does not, we will say so on the phone rather than after a visit.',
    ],
    localFaqs: [
      {
        q: 'Do downtown properties have finishable basements?',
        a: 'Rarely — below-grade space in towers and converted commercial buildings is usually plant, parking or storage under building control. Where a property genuinely has private lower-level space, we work on it.',
      },
      {
        q: 'What about a converted loft with a lower level?',
        a: 'Those exist and we do work on them. The first questions are what you own, what the board permits and how the space is ventilated.',
      },
    ],
  },

  'west-end': {
    intro:
      'Basement remodel in the West End? A bathroom below the sewer line needs a pump. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'Adding a bathroom to a basement is the change that most improves the space and the one with the biggest hidden variable: whether the drain can reach the sewer by gravity. Where it cannot, waste is lifted by a sealed ejector — a real cost, a pit cut into the slab, and a mechanical part that will need attention eventually. We measure that elevation on the first visit rather than assuming it.',
    ],
    localFaqs: [
      {
        q: 'Can we add a bathroom in the basement?',
        a: 'Usually, and the question is whether it drains to the sewer by gravity. Where it does not, a sealed ejector lifts the waste — a real cost with a pit cut into the slab.',
      },
      {
        q: 'How do you know which we have?',
        a: 'We measure the drain elevation against the sewer line on the first visit. It is a short check and it changes the price meaningfully.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Basement remodel in Mount Adams? A hillside lower level may already be a walkout. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'Houses built into this hill frequently have a lower level that is below grade at the front and at ground level at the back — which is a far better starting point than a true basement. Natural light, a door to outside, and egress that already exists change what the space can be and what it costs to finish. Establishing how much of the perimeter is genuinely below grade is the useful first measurement here.',
    ],
    localFaqs: [
      {
        q: 'Is a walkout easier to finish?',
        a: 'Considerably — natural light, a door to outside and existing egress all change what the space can be. The useful first measurement is how much of the perimeter is genuinely below grade.',
      },
      {
        q: 'Does a walkout still need moisture work?',
        a: 'Usually less, but the below-grade portion is still below grade. We assess the whole perimeter rather than assuming a walkout is dry throughout.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Basement remodel in Mount Auburn? A separate lower unit is a different project entirely. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Finishing a basement as extra living space for the household and creating a separate lettable unit down there are two different projects with different requirements — separate egress, fire separation, sometimes a second means of heat, and zoning that permits it. Owners here often start the conversation meaning the second while describing the first. We establish which before designing, because it changes everything.',
    ],
    localFaqs: [
      {
        q: 'Can the basement become a separate apartment?',
        a: 'Sometimes, and it is a different project from finishing living space — separate egress, fire separation, sometimes a second heat source, and zoning that permits it. We establish which you mean first.',
      },
      {
        q: 'What if zoning does not allow it?',
        a: 'Then it is finished as part of the house rather than a separate unit, and we will say so rather than building something that cannot be let legally.',
      },
    ],
  },

  clifton: {
    intro:
      'Basement remodel in Clifton? Insulating a stone foundation wall has rules. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Foundation walls in these houses are stone or early masonry, and they need to be able to dry inward. Fibreglass batts pressed against them — the most common mistake in a finished basement — trap moisture against a cold surface and produce exactly the mould people were trying to avoid. Rigid or closed-cell foam against the wall with framing held off it is the assembly that works, and it is not what a quick job does.',
    ],
    localFaqs: [
      {
        q: 'How should foundation walls be insulated?',
        a: 'Rigid or closed-cell foam against the wall with the framing held off it. Fibreglass batts pressed against masonry trap moisture on a cold surface and cause the mould people were avoiding.',
      },
      {
        q: 'Can we frame straight against the wall?',
        a: 'We would not. Holding the framing off the foundation lets the wall dry and keeps timber away from a damp cold surface, which is what makes the assembly last.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Basement remodel in Corryville? A basement bedroom for a tenant has hard requirements. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'Letting a basement room as a bedroom is where landlords get into genuine trouble. It needs proper egress, a ceiling height that meets the requirement, adequate heat and ventilation, and smoke detection tied into the house system. Without those it is not a bedroom regardless of what the listing says — and that is a liability question rather than a paperwork one. We build to the requirement or we tell you it cannot be one.',
    ],
    localFaqs: [
      {
        q: 'Can we let a basement room as a bedroom?',
        a: 'Only with proper egress, adequate ceiling height, heat, ventilation and interconnected smoke detection. Without those it is not a bedroom whatever the listing says, and that is a liability question.',
      },
      {
        q: 'What if it cannot meet the requirement?',
        a: 'Then it is finished as a living or study space rather than let as a bedroom. We will say so rather than build something that exposes you.',
      },
    ],
  },

  northside: {
    intro:
      'Basement remodel in Northside? Exposed ceilings are a real option down here. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'Where height is tight, painting the joists, ducts and pipes rather than boxing them in buys back several inches and suits the character people here tend to want. It also keeps everything above accessible for future work, which in a basement full of services is genuinely useful. The trade is sound — an open ceiling transmits footfall from above far more than a finished one.',
    ],
    localFaqs: [
      {
        q: 'Can we leave the ceiling exposed?',
        a: 'Yes, and it buys back several inches of height while keeping services accessible. The trade is sound — an open ceiling carries footfall from above far more than a finished one.',
      },
      {
        q: 'Does it still need anything done?',
        a: 'Cleaning, sealing and painting, plus tidying the wiring and pipework so it reads as deliberate rather than unfinished. That is most of the work in an exposed ceiling.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Basement remodel in College Hill? Ductwork is what eats the ceiling height. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'The main trunk duct usually runs across the middle of a basement at the lowest point in the room, and where it lands decides the layout. Sometimes it can be rerouted or reduced to a flat oval to buy height; sometimes it is boxed into a soffit that becomes a design feature rather than an apology. What does not work is discovering it after the layout is agreed, so we map the services first.',
    ],
    localFaqs: [
      {
        q: 'Can the ductwork be moved?',
        a: 'Sometimes rerouted or changed to a flat oval to buy height, sometimes boxed into a deliberate soffit. What matters is mapping it before the layout rather than after.',
      },
      {
        q: 'Will a soffit make the room feel low?',
        a: 'Handled well it defines a zone rather than reading as an obstruction. Handled as an afterthought it reads as exactly what it is.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Basement remodel in Walnut Hills? A century-old stone foundation needs assessing first. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Foundations of this age are stone or brick laid in lime mortar, and they behave differently from poured concrete — they breathe, they shed dust, and where mortar has eroded they need repointing before anything is built against them. That is masonry work rather than finishing work, and it belongs at the start. Building a wall in front of a foundation that needs attention just makes the eventual repair harder.',
    ],
    localFaqs: [
      {
        q: 'Does an old stone foundation need work first?',
        a: 'Where the mortar has eroded, yes — repointing comes before anything is built against it. Framing in front of a foundation that needs attention just makes the eventual repair harder.',
      },
      {
        q: 'Does stone need to breathe?',
        a: 'It needs to be able to dry inward, which is why the insulation assembly matters and why we do not seal these walls with the wrong materials.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Basement remodel in East Walnut Hills? The stairs are usually the first thing to fix. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'Basement stairs in houses of this era were built for a cellar — steep, narrow, sometimes with inconsistent risers and no proper handrail. If the space below is going to be used daily, those stairs are the thing people notice and the thing that has to meet requirements. Rebuilding them is frequently the single biggest improvement to how the finished basement actually feels.',
    ],
    localFaqs: [
      {
        q: 'Do the basement stairs need replacing?',
        a: 'Frequently. Cellar stairs are steep and narrow with inconsistent risers and often no proper handrail — and if the space is used daily they are what people notice most.',
      },
      {
        q: 'Is that a big job?',
        a: 'It depends on the headroom and the opening above. We assess it early because it can change the layout at the bottom of the run.',
      },
    ],
  },

  avondale: {
    intro:
      'Basement remodel in Avondale? An old panel in the basement has clearance requirements. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'The electrical panel is nearly always down here, and it needs clear working space in front and to the sides that cannot be built into a closet or blocked by a wall. Beyond that, a finished basement adds circuits — lighting, outlets, possibly a bathroom — and in houses of this age the panel frequently has no spare capacity. Both get established before the layout rather than at inspection.',
    ],
    localFaqs: [
      {
        q: 'Can we build a wall in front of the panel?',
        a: 'No — it needs clear working space in front and to the sides that cannot be enclosed or blocked. That requirement shapes the layout before anything else does.',
      },
      {
        q: 'Will the panel take the new circuits?',
        a: 'In a house of this age it frequently has no spare capacity, and a finished basement adds several. We check that before designing rather than at inspection.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Basement remodel in Hyde Park? Below-grade square footage is valued differently. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'Worth knowing before budgeting: finished below-grade space is generally not counted the same as above-grade square footage in an appraisal, and a walkout is usually treated more favourably than a full basement. That does not make it a poor investment — it makes it an investment in how you live rather than purely in valuation. We would rather you knew that going in than heard it from an appraiser afterwards.',
    ],
    localFaqs: [
      {
        q: 'Does a finished basement add to square footage?',
        a: 'Generally not on the same basis as above-grade space in an appraisal, and a walkout is usually treated more favourably than a full basement. It is worth knowing before budgeting.',
      },
      {
        q: 'Is it still worth doing?',
        a: 'As living space, frequently — it is the cheapest way to add usable room to a house. As a pure valuation play, it is a weaker argument and we will say so.',
      },
    ],
  },

  oakley: {
    intro:
      'Basement remodel in Oakley? Carpet straight onto a slab is a mistake. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'Concrete gives off moisture continuously, and anything laid tight against it that cannot dry — carpet and pad especially — holds that against the slab and eventually smells of it. What works is a vapour break: a subfloor panel system or an appropriate underlayment that lifts the finish off the concrete and lets it breathe. It costs more than glue-down and it is the difference between a floor that lasts and one that is lifted in four years.',
    ],
    localFaqs: [
      {
        q: 'Can we carpet straight onto the concrete?',
        a: 'We would not. Concrete gives off moisture continuously, and carpet and pad hold it against the slab until it smells. A subfloor panel system or vapour break lets it breathe.',
      },
      {
        q: 'What flooring suits a basement?',
        a: 'Luxury vinyl or engineered products rated for below grade, over a vapour break. Anything that cannot tolerate moisture from beneath is the wrong choice however good it looks.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Basement remodel in Mount Lookout? Steel columns are usually holding the house up. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'The columns down the middle of a basement carry the beam that carries the floor above, and they are almost never in a convenient place for a layout. Removing one means a longer beam sized to span the gap and new support at each end carried down to footings — real structural work with an engineer involved. Frequently the better answer is designing around them or wrapping them as a deliberate feature.',
    ],
    localFaqs: [
      {
        q: 'Can we remove the support columns?',
        a: 'Only with a longer beam sized to span the gap and new support carried down to footings — real structural work with an engineer involved. Frequently designing around them is the better answer.',
      },
      {
        q: 'Can they at least be hidden?',
        a: 'Wrapped and finished they read as deliberate rather than industrial, and that costs a fraction of moving them. It is what we recommend most often.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Basement remodel in Columbia-Tusculum? Near the river, prove it stays dry first. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'On lower ground near the river, the sequence matters more than anywhere: address the water, then observe the basement through a wet season, then finish. Skipping the middle step is how people end up with mould behind eighteen-month-old drywall. It is not the answer anyone wants — it delays the project — and it is the difference between finishing once and finishing twice.',
    ],
    localFaqs: [
      {
        q: 'Why wait through a wet season before finishing?',
        a: 'Because it is the only way to know the water problem is actually solved. Skipping that step is how people end up with mould behind eighteen-month-old drywall.',
      },
      {
        q: 'Can you do the waterproofing work too?',
        a: 'Interior drainage, sump work and sealing, yes. Where the answer is exterior excavation we will tell you that plainly rather than selling an interior fix that will not hold.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Basement remodel in Mount Washington? The sump pump becomes critical once it is finished. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'An unfinished basement flooding is an inconvenience. A finished one flooding is drywall, flooring, trim and contents. That raises the sump pump from a background appliance to the thing protecting the whole investment — which argues for a quality pump, a battery backup for the storm that takes the power with it, and a sealed lid that also helps with radon. All three are cheap relative to what they protect.',
    ],
    localFaqs: [
      {
        q: 'Do we need a battery backup on the sump?',
        a: 'Once the basement is finished, we would say yes — the storm that floods a basement is frequently the one that takes the power out. It is cheap relative to what it protects.',
      },
      {
        q: 'Does the sump need a sealed lid?',
        a: 'It helps with humidity and with radon, and it is straightforward while the work is happening. We fit one as a matter of course.',
      },
    ],
  },

  madisonville: {
    intro:
      'Basement remodel in Madisonville? Permits and inspection apply down here too. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'Finishing a basement is permitted work — framing, electrical, insulation and often plumbing, with inspection at rough-in before anything is closed. Unpermitted basement work is one of the most common things to surface at resale, and it can mean opening finished walls for an inspector years later. We file and schedule it as part of the job, which is worth more at sale than it costs now.',
    ],
    localFaqs: [
      {
        q: 'Does finishing a basement need a permit?',
        a: 'Yes — framing, electrical, insulation and often plumbing, with inspection at rough-in before anything is closed up. We file and schedule it as part of the job.',
      },
      {
        q: 'What if previous work was unpermitted?',
        a: 'It is one of the most common things to surface at resale. We will tell you what we find and what it would take to regularise it rather than building on top of it.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Basement remodel in Pleasant Ridge? Heating a basement is not just extending the ducts. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Adding a few registers off the existing trunk is the usual approach and it frequently disappoints — the furnace was sized for the house above, and pulling air downstairs can leave both the basement cool and an upstairs room worse than before. Where the load genuinely does not work, a separate zone or an independent unit for the basement is the honest answer. We do the arithmetic rather than adding vents and hoping.',
    ],
    localFaqs: [
      {
        q: 'Can we just extend the ducts downstairs?',
        a: 'Sometimes, but the furnace was sized for the house above — and pulling air down can leave the basement cool and an upstairs room worse. We do the load arithmetic rather than adding vents and hoping.',
      },
      {
        q: 'What if the system will not cover it?',
        a: 'A separate zone or an independent unit for the basement. It is a real cost and it appears on the quote rather than as a disappointment in January.',
      },
    ],
  },

  westwood: {
    intro:
      'Basement remodel in Westwood? Across this much housing, every basement is different. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Over this many decades we find everything below grade: stone foundations with dirt floors, early poured walls, block, and mid-century concrete in good order. Each has different moisture behaviour and different insulation requirements, and none can be judged from the street. That is why a basement quote here starts with an hour in the basement rather than a square-foot figure over the phone.',
    ],
    localFaqs: [
      {
        q: 'Can you quote a basement over the phone?',
        a: 'Not honestly. Stone with a dirt floor, early poured wall, block and mid-century concrete all behave differently for moisture and insulation, and none of it is visible from the street.',
      },
      {
        q: 'What do you look at first?',
        a: 'Moisture evidence, ceiling height, the foundation type, where the services run and the drain elevation. Those five decide most of what is possible.',
      },
    ],
  },

  norwood: {
    intro:
      'Basement remodel in Norwood? Norwood permits and inspects this work itself. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'Basement finishing is inspected at rough-in — framing, electrical and insulation exposed — before anything is covered. Here that runs through the City of Norwood rather than Cincinnati, whatever the postal address suggests. Getting that inspection scheduled into the programme rather than treated as an interruption is part of why the dates hold, and closing walls before it passes is how a job doubles.',
    ],
    localFaqs: [
      {
        q: 'When is a basement inspected?',
        a: 'At rough-in with framing, electrical and insulation exposed, before anything is covered. In Norwood that runs through the city itself rather than Cincinnati.',
      },
      {
        q: 'Does inspection slow things down?',
        a: 'It is scheduled into the programme rather than added to it. What causes real delay is closing walls before it passes and having to open them again.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Basement remodel in Blue Ash? Newer basements are the easiest to finish. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Basements in this housing generally have poured concrete walls in good condition, adequate ceiling height, a working sump and often a rough-in already stubbed for a bathroom. That removes most of the expensive unknowns — so the budget goes into the space itself rather than into making it habitable first. It is the most predictable basement work we do.',
    ],
    localFaqs: [
      {
        q: 'Is a newer basement cheaper to finish?',
        a: 'Usually — poured walls in good condition, adequate height, a working sump and often a bathroom rough-in already there. That removes most of the expensive unknowns.',
      },
      {
        q: 'How do we know if there is a rough-in?',
        a: 'Capped pipe stubs in the slab, usually in a corner or near the stack. It takes minutes to confirm and it substantially changes the cost of adding a bathroom.',
      },
    ],
  },

  montgomery: {
    intro:
      'Basement remodel in Montgomery? A home theatre or gym has specific requirements. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'Purpose-built rooms change the specification. A theatre wants isolated ceiling construction and dedicated circuits with conduit run before drywall. A gym wants a floor that takes dropped weight and structure that can carry it, plus more ventilation than a lounge. A wine room wants insulation and cooling designed as one system. All of them are cheap to plan and expensive to retrofit.',
    ],
    localFaqs: [
      {
        q: 'What does a home theatre need built in?',
        a: 'Isolated ceiling construction for sound, dedicated circuits and conduit run before drywall. All of it is cheap at framing stage and expensive to retrofit afterwards.',
      },
      {
        q: 'Can a basement floor take gym equipment?',
        a: 'A slab generally can, though the flooring has to be rated for dropped weight and the ventilation needs to suit. It is worth specifying rather than assuming.',
      },
    ],
  },

  madeira: {
    intro:
      'Basement remodel in Madeira? Here is how a basement project actually sequences. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Households stay in the house for this one, and the shape is worth knowing. Any moisture work first, then framing and mechanical rough-in, then inspection, then insulation and drywall, then flooring, trim and paint. Four to six weeks is typical. Unlike a kitchen, the rest of the house stays fully usable throughout — which makes it the least disruptive large project we do.',
    ],
    localFaqs: [
      {
        q: 'How long does a basement take?',
        a: 'Four to six weeks typically — moisture work, framing and rough-in, inspection, then insulation, drywall, flooring and trim. The rest of the house stays usable throughout.',
      },
      {
        q: 'Is it disruptive?',
        a: 'The least of any large project we do, since the work is contained below and the rest of the house carries on. Dust control at the stair is the main thing.',
      },
    ],
  },

  wyoming: {
    intro:
      'Basement remodel in Wyoming? A Victorian cellar may not want to be a room. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'Cellars in these houses were built for coal and storage — low, stone-walled, sometimes with dirt or rubble floors and rarely with the height a habitable room requires. Some can become genuinely good space; some cannot without underpinning, which is a structural project of a different order. We measure and assess honestly rather than assuming every basement is a finishing opportunity.',
    ],
    localFaqs: [
      {
        q: 'Can a Victorian cellar be finished?',
        a: 'Some can and some cannot without underpinning, which is a structural project of a different order. Height and floor condition decide it, and we measure rather than assume.',
      },
      {
        q: 'What is the alternative?',
        a: 'Improving it as excellent dry storage — sealed floor, proper lighting, dehumidification. That is genuinely valuable and it costs a fraction of finishing.',
      },
    ],
  },

  mariemont: {
    intro:
      'Basement remodel in Mariemont? The Landmark review is exterior — the basement is not. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Interior work below grade is yours to decide. The one place it intersects is an egress window, since cutting a new opening in a foundation wall and adding a window well changes the exterior — that is visible and worth raising early. Otherwise these 1920s basements are consistent from house to house, which means we usually know the height and the foundation type before arriving.',
    ],
    localFaqs: [
      {
        q: 'Does the historic designation affect the basement?',
        a: 'Interior work is yours. The one intersection is an egress window, since cutting a foundation opening and adding a well changes the exterior — worth raising early.',
      },
      {
        q: 'Are these basements consistent?',
        a: 'Largely, since the town was built as one scheme. We usually know the height and the foundation type before arriving.',
      },
    ],
  },

  cheviot: {
    intro:
      'Basement remodel in Cheviot? Doubling your living space is the cheapest way to do it. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'The houses here are modest and the lots are tight, which rules out extending outward. That makes the basement the only realistic way to add significant living space — and on a per-square-foot basis it is far cheaper than any addition, because the walls, floor and roof already exist. In this housing it is frequently the highest-value project available.',
    ],
    localFaqs: [
      {
        q: 'Is finishing a basement cheaper than an addition?',
        a: 'Considerably, per square foot — the walls, floor and roof already exist. On tight lots where extending outward is not an option, it is frequently the highest-value project available.',
      },
      {
        q: 'How much space does it actually add?',
        a: 'Usually a substantial share of the ground floor footprint, minus what mechanicals and stairs take. We measure the genuinely usable area rather than the gross.',
      },
    ],
  },

  covedale: {
    intro:
      'Basement remodel in Covedale? Plan for how the household changes. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Households here stay for decades, and a basement is the space that gets repurposed most — playroom, then teenage territory, then somewhere a parent lives, then storage again. Building it flexibly means a bathroom roughed in even if not fitted, egress in at least one room, and enough circuits for whatever comes next. Each is cheap now and awkward later.',
    ],
    localFaqs: [
      {
        q: 'How do we build a basement flexibly?',
        a: 'A bathroom roughed in even if not fitted now, egress in at least one room, and enough circuits for a future use. Each is cheap during the work and awkward afterwards.',
      },
      {
        q: 'Is roughing in a bathroom worth it if we do not need one?',
        a: 'Where the drain can reach, yes. Cutting a slab later costs several times what stubbing it now does, and it makes the space far more adaptable.',
      },
    ],
  },

  covington: {
    intro:
      'Basement remodel in Covington? Kentucky permitting, and rowhouse cellars that are tight. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Two things shape the work. Permitting and inspection run under Kentucky rules rather than Ohio, confirmed before scheduling. And rowhouse cellars are narrow, low and frequently share a party wall with the house next door — which limits both the layout and what can be done to that wall. We establish the height and the party-wall situation before designing.',
    ],
    localFaqs: [
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, and we confirm requirements before scheduling.',
      },
      {
        q: 'What about a shared party wall?',
        a: 'It limits what can be done to that wall and sometimes how it is insulated. We establish it before designing rather than discovering it mid-job.',
      },
    ],
  },

  newport: {
    intro:
      'Basement remodel in Newport? East Row cellars are low and close to the river. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'Two constraints stack here. These are 19th-century cellars with limited height, and the ground sits close enough to the river that moisture is a genuine variable rather than a formality. Both get established before anything is designed — and on some of these houses the honest recommendation is excellent dry storage rather than finished living space.',
    ],
    localFaqs: [
      {
        q: 'Can an East Row cellar be finished?',
        a: 'Some can. Height and moisture both have to be established first, and on some of these houses the honest recommendation is excellent dry storage rather than living space.',
      },
      {
        q: 'What does good storage involve?',
        a: 'A sealed floor, proper lighting, dehumidification and shelving off the walls. It costs a fraction of finishing and it solves the problem most of these houses actually have.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Basement remodel in Bellevue? Getting materials down a narrow stair is the first constraint. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Everything for a basement goes down a cellar stair that was built for coal, and full sheets of drywall and plywood frequently will not make the turn. That is worked around — smaller sheet sizes, cutting on site, sometimes a window opening as the route — but it has to be planned rather than discovered. Debris comes back up the same way, which is the slower half.',
    ],
    localFaqs: [
      {
        q: 'Can full sheets get down the basement stairs?',
        a: 'Frequently not on a cellar stair. It is worked around with smaller sheets, cutting on site, occasionally a window opening as the route — but it is planned rather than discovered.',
      },
      {
        q: 'Does that add cost?',
        a: 'Some labour, and it appears on the quote. Debris coming back up is the slower half of it.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Basement remodel in Fort Thomas? A dehumidifier is part of the design, not an appliance. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Even a dry basement runs more humid than the house above, and a finished one with soft furnishings will show that. A plug-in unit emptying into a bucket is what people resort to; a properly specified dehumidifier plumbed to the sump or a condensate drain, sized for the volume, is what actually solves it. Planning where it lives and where it drains belongs in the design rather than after the first summer.',
    ],
    localFaqs: [
      {
        q: 'Do we need a dehumidifier?',
        a: 'In a finished basement, almost always — even a dry one runs more humid than the house above. Plumbed to the sump or a condensate drain rather than emptying a bucket.',
      },
      {
        q: 'Where does it go?',
        a: 'Somewhere it can drain and be serviced, planned into the layout rather than added afterwards. It is a design decision, not an appliance purchase.',
      },
    ],
  },

  florence: {
    intro:
      'Basement remodel in Florence? Many of these already have a bathroom rough-in. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'Builders in this housing frequently stubbed a bathroom rough-in under the slab and capped it — drain, vent and sometimes supply, sitting there waiting. Homeowners often have no idea. Where it exists, adding a basement bathroom costs a fraction of cutting a slab from scratch. It takes minutes to confirm and it is the first thing we look for here.',
    ],
    localFaqs: [
      {
        q: 'How do we know if there is a rough-in?',
        a: 'Capped pipe stubs in the slab, usually in a corner or near the stack. Where it exists, a basement bathroom costs a fraction of cutting the slab from scratch.',
      },
      {
        q: 'What if there is not one?',
        a: 'Then it means saw-cutting and trenching the slab, plus an ejector if the drain sits below the sewer. Real work with a real cost, quoted honestly.',
      },
    ],
  },

  erlanger: {
    intro:
      'Basement remodel in Erlanger? Lighting is what makes a basement not feel like one. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'With little or no natural light, a basement lives or dies on the lighting plan — and a grid of recessed downlights on one switch is what makes a finished basement feel like a converted basement. Layers are what fix it: perimeter wall washing to make the walls recede, task lighting where it is needed, and lamps at low level. It costs little more and it is wired before the ceiling closes.',
    ],
    localFaqs: [
      {
        q: 'Why do finished basements feel like basements?',
        a: 'Usually the lighting — a grid of downlights on one switch. Layers fix it: perimeter wall washing to make the walls recede, task light where needed, and low-level lamps.',
      },
      {
        q: 'Can that be added later?',
        a: 'Wall washing and any recessed fitting is wired before the ceiling closes. Adding it afterwards means opening finished work, so it is a design-stage decision.',
      },
    ],
  },

  mason: {
    intro:
      'Basement remodel in Mason? Newer basements make this predictable. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'Poured walls in good condition, generous ceiling height, an egress window frequently already fitted, a working sump and often a bathroom rough-in. This is the housing where a basement project is mostly about design rather than remediation, and where the money goes into the finished space rather than into making the space viable. The variable worth checking is panel capacity for the added circuits.',
    ],
    localFaqs: [
      {
        q: 'Is a newer basement simpler?',
        a: 'Considerably — poured walls in good condition, good height, often an egress window and a bathroom rough-in already there. The money goes into the space rather than making it viable.',
      },
      {
        q: 'What still needs checking?',
        a: 'Panel capacity for the added circuits, and whether the HVAC can serve the extra volume. Both are known costs rather than unknowns.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Basement remodel in West Chester? An unfinished basement here is usually ready to go. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'Houses of this era were built with the basement intended to be finished eventually — height, egress and rough-ins are frequently already there. That makes it the single cheapest way to add substantial living space to these homes, and the project people put off longest because there is nothing wrong with the space as it is. The arithmetic is usually better than they expect.',
    ],
    localFaqs: [
      {
        q: 'Was our basement designed to be finished?',
        a: 'In this housing, frequently — height, egress and rough-ins are often already there because it was anticipated. That makes it the cheapest way to add substantial living space.',
      },
      {
        q: 'How much space would we gain?',
        a: 'Usually a large share of the ground floor footprint, minus mechanicals and stairs. We measure the genuinely usable area rather than quoting the gross.',
      },
    ],
  },

  pendleton: {
    intro:
      'Basement remodel in Pendleton? Below-grade space in a converted building is rarely private. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'In converted buildings the lower level usually holds building services, shared storage or parking, and is common property even where a unit has use of it. What you own and what the association permits are the first questions — and any work touching drainage, the envelope or a shared mechanical space needs approval. We settle that before designing because it frequently decides whether there is a project.',
    ],
    localFaqs: [
      {
        q: 'Can we finish the lower level of our building?',
        a: 'It depends what you own and what the association permits — below-grade space in converted buildings is usually common property or holds services. We establish that first.',
      },
      {
        q: 'Is ventilation an issue?',
        a: 'In a below-grade space in a converted building, frequently — and it is one of the things a board will ask about. We address it in the design rather than afterwards.',
      },
    ],
  },

  queensgate: {
    intro:
      'Basement remodel in Queensgate? Mostly a working district — here is the honest answer. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers and Queensgate is a working district more than a residential one. Where there is a residence — typically a live-work or converted space — we do the same work we do anywhere. Below-grade space in commercial buildings carries different requirements entirely, and we will say so on the phone rather than after a site visit.',
    ],
    localFaqs: [
      {
        q: 'Do you work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here.',
      },
      {
        q: 'Can you finish commercial below-grade space?',
        a: 'No. It carries different code and occupancy requirements, and we would rather say so than take on work outside what we do well.',
      },
    ],
  },

  cuf: {
    intro:
      'Basement remodel in CUF? A basement bedroom in a let carries real liability. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'The pressure to squeeze another bedroom into a student house is obvious, and a basement room without proper egress is the version that gets landlords into serious trouble. Egress, ceiling height, heat, ventilation and interconnected smoke detection are the requirements — not preferences. We build to them, or we tell you the room cannot be let as a bedroom.',
    ],
    localFaqs: [
      {
        q: 'Can we add a basement bedroom to a student let?',
        a: 'Only with proper egress, ceiling height, heat, ventilation and interconnected smoke detection. Those are requirements rather than preferences, and without them it cannot be let as a bedroom.',
      },
      {
        q: 'What if the basement will not meet them?',
        a: 'Then it is finished as shared living space instead. We will say so rather than build something that exposes you to real liability.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Basement remodel in Camp Washington? In the valley, the water table is the question. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'Low-lying valley ground means a higher water table, and that is the variable that decides whether a basement can be finished at all. Interior drainage and a good sump manage a lot of it; some basements it will not manage. We assess honestly, and where the answer is that it will never be reliably dry we say so rather than taking money for work that will fail.',
    ],
    localFaqs: [
      {
        q: 'Can a valley basement be finished?',
        a: 'Some can, with interior drainage and a good sump. Some cannot be made reliably dry, and where that is the case we say so rather than taking money for work that will fail.',
      },
      {
        q: 'How do we find out which?',
        a: 'History, evidence on the walls and floor, and ideally observation through a wet season. That evidence decides it rather than optimism.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Basement remodel in South Fairmount? A backwater valve belongs in the conversation. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'In a valley with this drainage history, the risk to a finished basement is not only ground water — it is the sewer backing up into the lowest fixture in the house, which is now in a finished room. Where a house has that history, a backwater valve is worth discussing before the drywall rather than after. It is a modest cost against what it protects.',
    ],
    localFaqs: [
      {
        q: 'Should we fit a backwater valve?',
        a: 'Where a house has any history of sewer backup, it is worth discussing before finishing. The lowest fixture is now in a finished room, which changes what a backup costs.',
      },
      {
        q: 'Is it included?',
        a: 'It is quoted separately and only where it is genuinely warranted. We would rather show it as a clear line you can decide on.',
      },
    ],
  },

  'east-end': {
    intro:
      'Basement remodel in the East End? On the riverfront, we will give you a straight answer. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'Squeezed between a hillside and the river, these properties get water from both directions — runoff from above and a high table below. Some of these basements should not be finished, and saying so costs us the job. Where a lower level is a walkout above the flood line it is a different and much better proposition, and we assess which you have rather than assuming.',
    ],
    localFaqs: [
      {
        q: 'Is it sensible to finish a basement here?',
        a: 'Sometimes not, and we will say so. These properties take water from the hillside above and a high table below — though a walkout above the flood line is a different proposition entirely.',
      },
      {
        q: 'What would you suggest instead?',
        a: 'Excellent dry storage with a sealed floor, dehumidification and shelving off the walls — or putting the same budget into the floors above.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Basement remodel in North Fairmount? A partial finish is a legitimate answer. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'Finishing the whole footprint is not the only option. Doing one good room — a den, an office, a play space — and leaving the mechanical end as clean, well-lit utility space costs a fraction and frequently delivers most of the benefit. In modest housing that is often the sensible project, and it leaves the rest available if circumstances change.',
    ],
    localFaqs: [
      {
        q: 'Do we have to finish the whole basement?',
        a: 'Not at all. One good room with the mechanical end left as clean, well-lit utility space costs a fraction and frequently delivers most of the benefit.',
      },
      {
        q: 'Can we finish the rest later?',
        a: 'Yes, and planning for it now — running circuits and leaving the framing logic sensible — makes that far cheaper when you get to it.',
      },
    ],
  },

  evanston: {
    intro:
      'Basement remodel in Evanston? Sound from above is the complaint people do not anticipate. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'A basement sits directly under the busiest floor of the house, and every footstep on the kitchen floor above lands in the ceiling of the room below. Where the space is going to be an office, a bedroom or a media room, insulation in the joist bays and resilient channel before the ceiling closes are what fix it. Neither can be added afterwards without taking the ceiling down again.',
    ],
    localFaqs: [
      {
        q: 'Will we hear footsteps from upstairs?',
        a: 'A basement sits under the busiest floor of the house, so yes unless it is addressed. Insulation in the joist bays and resilient channel before the ceiling closes are what fix it.',
      },
      {
        q: 'Can it be added later?',
        a: 'Only by taking the ceiling down again. It is one of the cheapest things to do during the work and one of the most expensive to retrofit.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Basement remodel in South Cumminsville? Interior drainage is the usual first fix. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Where water enters at the wall-floor joint — the most common route in valley housing — an interior perimeter drain cut into the slab edge, piped to a sump, manages it without excavating outside. It is disruptive, it is dusty, and it works. It is also the step that has to happen before any finishing, and pricing a finished basement without addressing it is how a job gets quoted twice.',
    ],
    localFaqs: [
      {
        q: 'What is an interior perimeter drain?',
        a: 'A channel cut into the slab edge at the wall-floor joint, piped to a sump. It manages the most common route water takes into valley basements without excavating outside.',
      },
      {
        q: 'Is that included in a finishing quote?',
        a: 'It is quoted separately and clearly, because it is a different scope. What we will not do is quote a finished basement while ignoring an active water problem.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Basement remodel in English Woods? Furnace and water heater clearances are not negotiable. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Gas appliances need clear space around them for service and for combustion air, and a wall built too close is both a code failure and a genuine safety issue. That means the mechanical area gets defined first and the rest of the layout works around it. Boxing a furnace into a tight closet to gain a few feet of room is the shortcut that fails inspection and should.',
    ],
    localFaqs: [
      {
        q: 'Can we build a wall close to the furnace?',
        a: 'No — gas appliances need clear space for service and for combustion air. The mechanical area gets defined first and the layout works around it.',
      },
      {
        q: 'Can the furnace be enclosed at all?',
        a: 'In a properly sized room with adequate combustion air and access, yes. What does not work is a tight closet built to gain a few feet of living space.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Basement remodel in North Avondale? These houses have basements worth the investment. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'Basements under houses this size are substantial — frequently with better height than smaller period homes, and enough footprint to hold several genuinely distinct rooms rather than one long space. That makes zoning the plan worthwhile: a media room that can be closed off, a guest suite with its own egress, storage that stays storage. Large basements planned as one open room tend to end up used as none of the things they could have been.',
    ],
    localFaqs: [
      {
        q: 'Should a large basement be one open space?',
        a: 'Rarely. Zoning it into rooms that can be closed off — a media room, a guest suite with egress, dedicated storage — gets far more use than one long undifferentiated space.',
      },
      {
        q: 'Is the height usually adequate in these houses?',
        a: 'Frequently better than in smaller period homes, though ductwork and beams still take their share. We measure at the lowest point rather than the best one.',
      },
    ],
  },

  millvale: {
    intro:
      'Basement remodel in Millvale? A small basement can still be one very good room. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'Where the footprint is small and the mechanicals take a share of it, the realistic outcome is one room rather than a suite — and one well-planned room is worth more than a cramped attempt at three. Deciding what that room is for before designing matters, because a home office, a play space and a guest room want different lighting, different storage and different acoustics.',
    ],
    localFaqs: [
      {
        q: 'Is a small basement worth finishing?',
        a: 'One well-planned room is worth more than a cramped attempt at three. What matters is deciding what that room is for first, since an office, a play space and a guest room want different things.',
      },
      {
        q: 'How much does the mechanical area take?',
        a: 'More than people expect once clearances are respected. We measure the genuinely usable area rather than the gross footprint.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Basement remodel in Paddock Hills? Plan the storage you are about to lose. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Every basement being finished is currently holding a household’s worth of things, and that has to go somewhere. Designing in proper storage — a dedicated room with shelving rather than whatever is left over — is what stops a finished basement filling back up within two years. It is the most commonly skipped part of a basement plan and the most commonly regretted.',
    ],
    localFaqs: [
      {
        q: 'Where does all our storage go?',
        a: 'Into a dedicated storage room designed in from the start rather than whatever space is left over. It is the most commonly skipped part of a basement plan and the most regretted.',
      },
      {
        q: 'How much should we allow?',
        a: 'More than you think — go and look at what is down there now. A finished basement that fills back up with boxes has not solved anything.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Basement remodel in Spring Grove Village? An old lateral matters more once there is a bathroom below. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'Adding a basement bathroom puts fixtures at the lowest point in the house, and if the lateral is partly blocked by roots that is where a backup surfaces first — now in a finished room. On streets with mature trees over old clay or cast-iron laterals, establishing the condition of that line before finishing is worth doing rather than discovering it afterwards.',
    ],
    localFaqs: [
      {
        q: 'Does a basement bathroom change the drain risk?',
        a: 'It puts fixtures at the lowest point in the house, so a partly blocked lateral surfaces there first — now in a finished room. On streets with mature trees, worth establishing first.',
      },
      {
        q: 'Can the line be checked?',
        a: 'A camera inspection settles it, and we will tell you plainly when the history warrants one rather than finishing over an unknown.',
      },
    ],
  },

  linwood: {
    intro:
      'Basement remodel in Linwood? Rim joists are where most of the heat escapes. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'The band of framing where the floor above meets the foundation is the single leakiest part of most basements, and it is accessible only while the ceiling is open. Sealing and insulating it with closed-cell foam makes more difference to comfort than insulating the walls does, and it is quick. Once the ceiling closes it is effectively gone, which is why it belongs in the scope from the start.',
    ],
    localFaqs: [
      {
        q: 'What is the rim joist and why does it matter?',
        a: 'The band of framing where the floor above meets the foundation — the leakiest part of most basements. Sealing and insulating it does more for comfort than insulating the walls.',
      },
      {
        q: 'Can it be done later?',
        a: 'Only while the ceiling is open. Once it closes it is effectively inaccessible, which is why it belongs in the scope from the start.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Basement remodel in Bond Hill? Leave access to everything you are covering. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'A finished basement covers the plumbing cleanouts, shutoff valves, the sump, ductwork dampers and any junction boxes that stay in service. Every one of those needs a route back — access panels planned into the ceiling and walls where they will be needed rather than wherever is convenient. It is invisible work that decides whether a future repair takes an hour or a demolition.',
    ],
    localFaqs: [
      {
        q: 'What needs access panels?',
        a: 'Plumbing cleanouts, shutoff valves, the sump, ductwork dampers and any junction boxes staying in service. Planned in where needed rather than wherever is convenient.',
      },
      {
        q: 'Do they look obvious?',
        a: 'Not when they are set out with the ceiling grid or the wall lines. It is a detail that only shows when it was left out.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Basement remodel in Villages of Roll Hill? Mostly apartments, so this goes through the owner. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'In a community of rented apartments, below-grade space is building property and any work is commissioned by the owner or management company. If you rent here, the route is your landlord and we are happy to speak to them. For owners, below-grade areas in multi-unit buildings carry requirements around egress, fire separation and mechanical access that make them a different conversation from a single-family basement.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can the basement be finished?',
        a: 'It has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'Is a multi-unit basement different?',
        a: 'Considerably — egress, fire separation and mechanical access requirements are stricter than in a single-family house. It is a different conversation.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Basement remodel in East Westwood? On a slope, water arrives from one side. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'Houses on a slope frequently have a wet wall and three dry ones — the uphill side taking everything the ground sheds toward it. That is useful, because it means the fix can be targeted rather than treating the whole perimeter. Establishing which wall is the problem, and whether it is best solved outside or in, is the first hour of work rather than a guess.',
    ],
    localFaqs: [
      {
        q: 'Why is only one wall wet?',
        a: 'On a slope the uphill side takes everything the ground sheds toward it. That is useful — the fix can be targeted rather than treating the whole perimeter.',
      },
      {
        q: 'Fix it inside or outside?',
        a: 'Outside where grading and drainage can redirect the water, inside where they cannot. We will tell you which your house needs rather than selling the one we prefer.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Basement remodel in Western Hills? Downspouts and grading fix more than sealant does. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'A surprising share of basement water problems are solved outside for very little money: downspouts discharging against the foundation instead of away from it, and grading that has settled to slope back toward the house over decades. Checking both before quoting interior drainage is honest practice — occasionally the whole problem is a length of downspout extension, and we would rather tell you that.',
    ],
    localFaqs: [
      {
        q: 'Can water problems be fixed cheaply?',
        a: 'Sometimes entirely — downspouts discharging against the foundation and grading that has settled toward the house are common and inexpensive to correct. We check those first.',
      },
      {
        q: 'Will you tell us if that is all it needs?',
        a: 'Yes, even though it is a fraction of the job. We would rather be right than sell interior drainage that was never necessary.',
      },
    ],
  },

  california: {
    intro:
      'Basement remodel in California? Near the river, we will often advise against it. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'On low riverside ground, a finished basement is a large amount of money sitting in the part of the house most exposed to water. Where a property has flooded before, finishing it is putting drywall, flooring and contents into the same room again. We would rather have that conversation honestly than take the work — and where a household still wants the space, we build it so it can be dried and salvaged rather than replaced.',
    ],
    localFaqs: [
      {
        q: 'Should we finish a basement on this ground?',
        a: 'Where the property has flooded before, we would usually advise against it — it is putting drywall, flooring and contents back in the same room. We will say so rather than take the work.',
      },
      {
        q: 'What if we want the space anyway?',
        a: 'Then we build it to be dried and salvaged rather than replaced — inorganic wall materials, a floor that tolerates water and services kept high. It is a different specification.',
      },
    ],
  },

  carthage: {
    intro:
      'Basement remodel in Carthage? Clean, dry and well-lit is a legitimate outcome. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Not every basement needs finishing to be worth improving. Sealing the floor, painting the walls, adding proper lighting, sorting the stairs and putting in real shelving turns an unpleasant space into a genuinely useful one for a small fraction of a finishing budget. In modest housing that is frequently the better recommendation, and it is one we make often.',
    ],
    localFaqs: [
      {
        q: 'Is there a cheaper option than finishing?',
        a: 'A sealed floor, painted walls, proper lighting, sorted stairs and real shelving turns an unpleasant space into a useful one for a fraction of the cost. We recommend it often.',
      },
      {
        q: 'Does that rule out finishing later?',
        a: 'Not at all — most of it carries over. It is a sensible first step rather than a dead end.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Basement remodel in Winton Hills? Three things decide whether a basement can be finished. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'Whether it stays dry, whether the ceiling height meets the requirement, and whether the mechanicals can be worked around while keeping their clearances. Those three settle it before budget or design enter the conversation. Any contractor who quotes a basement without establishing all three is quoting something they have not looked at properly.',
    ],
    localFaqs: [
      {
        q: 'What decides whether a basement can be finished?',
        a: 'Whether it stays dry, whether the height meets the requirement, and whether the mechanicals can be worked around with their clearances kept. Those three settle it before budget does.',
      },
      {
        q: 'How long does that assessment take?',
        a: 'About an hour on site. It is the difference between a quote you can rely on and a number that changes once work starts.',
      },
    ],
  },

  roselawn: {
    intro:
      'Basement remodel in Roselawn? Mid-century basements are usually straightforward. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'Poured or block walls in reasonable condition, a workable ceiling height, and a layout where the mechanicals sit together at one end rather than scattered — that combination makes these among the easier basements to plan. The usual work is moisture management if any is needed, then framing, and the usual upgrade is the electrical, since basements of this era were wired for a workbench and a washing machine.',
    ],
    localFaqs: [
      {
        q: 'Are mid-century basements easier to finish?',
        a: 'Generally — poured or block walls in reasonable condition, workable height and mechanicals grouped at one end rather than scattered. That makes the layout far easier to plan.',
      },
      {
        q: 'What usually needs upgrading?',
        a: 'The electrical. Basements of this era were wired for a workbench and a washing machine, not for finished rooms.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Basement remodel in Mount Airy? A split-level lower floor is not really a basement. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'The terrain produced a lot of split-levels, and their lower floor is typically only partly below grade with real windows and often a door to outside. That is a far better starting point than a full basement — more light, existing egress, less moisture exposure — and it usually finishes closer to the standard of the rest of the house. Worth knowing that it is a different and easier project.',
    ],
    localFaqs: [
      {
        q: 'Is a split-level lower floor easier to finish?',
        a: 'Considerably — only partly below grade, with real windows, often a door to outside and existing egress. It finishes closer to the standard of the rest of the house.',
      },
      {
        q: 'Does it still need moisture work?',
        a: 'Usually less, though the below-grade portion is still below grade. We assess the whole perimeter rather than assuming it is dry throughout.',
      },
    ],
  },

  hartwell: {
    intro:
      'Basement remodel in Hartwell? A Victorian cellar is a storage opportunity as often as a room. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'These cellars are low, stone-walled and were never intended as living space — and forcing a finished room into one produces a space nobody actually uses. Where the height genuinely is not there, the honest recommendation is a properly done utility space: sealed floor, dehumidification, good light and real storage. It costs a fraction and it solves the problem the household actually has.',
    ],
    localFaqs: [
      {
        q: 'Can a Victorian cellar become a living room?',
        a: 'Only where the height genuinely allows it. Forcing a finished room into a low cellar produces a space nobody uses, and we would rather say so.',
      },
      {
        q: 'What is the better use?',
        a: 'A properly done utility space — sealed floor, dehumidification, good light and real storage. It costs a fraction and solves the problem the household actually has.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Basement remodel in Kennedy Heights? Decide what the space is for before drawing it. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'A basement designed as generic finished space tends to become the room nobody chooses to be in. One designed for a specific purpose — a music room, a home office, somewhere teenagers actually want to be — gets the lighting, acoustics, storage and circuits that purpose needs. The programme is a more useful conversation than the finishes, and it costs nothing to have properly.',
    ],
    localFaqs: [
      {
        q: 'Why decide the purpose first?',
        a: 'Because generic finished space becomes the room nobody chooses to be in. A specific purpose drives the lighting, acoustics, storage and circuits — and those are hard to change later.',
      },
      {
        q: 'What if the use might change?',
        a: 'Then build for the first use and rough in for the second — an extra circuit, a capped drain, blocking in a wall. That flexibility is cheap now.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Basement remodel in St. Bernard? The village inspects this before walls close. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'Basement finishing is inspected at rough-in with framing, electrical and insulation exposed, and here that runs through the City of St. Bernard rather than Cincinnati. Scheduling it into the programme is straightforward; closing walls before it passes is how a basement job doubles in cost. We file and book it as part of the work.',
    ],
    localFaqs: [
      {
        q: 'Who inspects basement work here?',
        a: 'The City of St. Bernard — it is a separate municipality even though Cincinnati surrounds it entirely. We file and schedule the inspection as part of the job.',
      },
      {
        q: 'What happens if walls close before inspection?',
        a: 'They come back open. It is the most avoidable way for a basement project to double, and it is why the inspection is in the programme rather than an afterthought.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Basement remodel in Elmwood Place? In the valley, dry comes before finished. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Low valley ground and century-old foundations is the combination most likely to produce a basement that takes water. That does not rule out finishing, and it does mean the sequence is not negotiable: solve the water, observe it through a wet season, then finish. Anyone offering to skip the middle step is selling you a repeat of the job.',
    ],
    localFaqs: [
      {
        q: 'Why observe it through a wet season?',
        a: 'Because it is the only proof the water problem is actually solved. Anyone offering to skip that step is selling you a repeat of the job.',
      },
      {
        q: 'How long does that add?',
        a: 'It depends when in the year you start. We would rather be honest about the delay than have you finish over an unresolved problem.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Basement remodel in Delhi Hills? A walkout on this slope is the best case. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope frequently have a walkout lower level, which is the most favourable version of this project: natural light, a door to outside, egress already satisfied and far less moisture exposure than a full basement. It also makes a self-contained suite genuinely feasible, since a separate entrance already exists — worth knowing before designing it as one open room.',
    ],
    localFaqs: [
      {
        q: 'Is a walkout better to finish?',
        a: 'It is the most favourable version — natural light, a door to outside, egress already satisfied and far less moisture exposure. It also makes a self-contained suite genuinely feasible.',
      },
      {
        q: 'Could it be a separate suite?',
        a: 'With an existing entrance it is realistic. What it needs establishing is zoning, fire separation and heat, which we settle before designing.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Basement remodel in Golf Manor? The village permits and inspects this work. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Basement finishing is permitted work with a rough-in inspection before walls close, and here that runs through Golf Manor rather than the city your postal address suggests. We confirm and file before scheduling. The housing itself is straightforward mid-century — usually block or poured walls in reasonable condition with mechanicals grouped together.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit in Golf Manor?',
        a: 'The village, not the City of Cincinnati — which surprises people given the address. We confirm and file before scheduling.',
      },
      {
        q: 'What are these basements like?',
        a: 'Straightforward mid-century — usually block or poured walls in reasonable condition with the mechanicals grouped at one end, which makes the layout easier to plan.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Basement remodel in Fairfax? Test for radon before the walls go up. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'Radon enters through the slab and the wall-floor joint, and a finished basement is where people start spending real time. Testing costs very little and takes days. If mitigation is needed, running the vent pipe while ceilings and walls are open is straightforward — afterwards it means cutting into finished work or running pipe on the outside of the house. It is a small step at exactly the right moment.',
    ],
    localFaqs: [
      {
        q: 'When should radon testing happen?',
        a: 'Before finishing. Mitigation is straightforward while ceilings and walls are open, and afterwards it means cutting into finished work or running pipe up the outside of the house.',
      },
      {
        q: 'Does every basement need mitigation?',
        a: 'No — testing tells you. It is cheap enough that testing is worth doing regardless, particularly before you spend on finishing the space.',
      },
    ],
  },

  mack: {
    intro:
      'Basement remodel in Mack? This is the least disruptive big project we do. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'Unlike a kitchen or a bathroom, a basement takes nothing out of service — the household keeps cooking, washing and living normally throughout. What matters is dust control at the top of the stairs and a route in and out for materials. Four to six weeks with the rest of the house untouched is why families frequently choose this over a kitchen when both are on the list.',
    ],
    localFaqs: [
      {
        q: 'How disruptive is a basement project?',
        a: 'The least of any large job we do — nothing goes out of service and the household lives normally throughout. Dust control at the stair and a materials route are the main things.',
      },
      {
        q: 'How long does it take?',
        a: 'Four to six weeks typically, with the rest of the house untouched. That combination is why families often choose this over a kitchen when both are on the list.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Basement remodel in Monfort Heights? A second living space changes how a house works. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'These houses have one main living room, and in a household with teenagers that is a permanent negotiation. A finished basement is not extra square footage so much as a second place to be — which is why it is the project families here mention as having changed daily life most. It does not need to be elaborate to do that job; it needs to be somewhere people actually want to sit.',
    ],
    localFaqs: [
      {
        q: 'Is a finished basement worth it for a family?',
        a: 'It is a second place to be rather than just extra square footage, which in a house with one living room changes daily life. It does not need to be elaborate to do that.',
      },
      {
        q: 'What makes people actually use it?',
        a: 'Good lighting, warmth, somewhere comfortable to sit and a reason to go down — not the finish level. We design around that rather than around a materials list.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Basement remodel in Bridgetown? Ceiling choice affects both height and access. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Drywall gives the cleanest finish and the most height, and it seals everything above it away. A suspended grid keeps every pipe and junction reachable and costs several inches. Exposed and painted keeps the height and the access at the cost of sound. Which is right depends on how many services run above and how much height there is to give — and it is worth deciding deliberately.',
    ],
    localFaqs: [
      {
        q: 'Drywall or a suspended ceiling?',
        a: 'Drywall is cleanest and keeps the most height but seals everything above away. A grid keeps pipes and junctions reachable and costs several inches. It depends on your services and your height.',
      },
      {
        q: 'Can we mix them?',
        a: 'Frequently the best answer — drywall through the main space with a removable section over the valves and cleanouts. It is what we suggest most often.',
      },
    ],
  },

  finneytown: {
    intro:
      'Basement remodel in Finneytown? Here is the week-by-week programme. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth setting out plainly. Any moisture work first and proven. Then framing, electrical and plumbing rough-in, and any HVAC changes. Then inspection — nothing closes before it passes. Then insulation, drywall and taping. Then flooring, trim, doors and paint, with fixtures and finishes last. Four to six weeks with the household living normally throughout.',
    ],
    localFaqs: [
      {
        q: 'What is the week-by-week schedule?',
        a: 'Moisture work first, then framing and rough-in, then inspection, then insulation and drywall, then flooring, trim and paint. Four to six weeks with the household living normally.',
      },
      {
        q: 'Where does it usually slip?',
        a: 'Waiting on an inspection, or discovering a moisture problem partway. The first we schedule in; the second is why we assess properly before starting.',
      },
    ],
  },

  amberley: {
    intro:
      'Basement remodel in Amberley Village? A large basement wants zoning, not one big room. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'Basements under houses this size can run to a substantial footprint, and finished as one open space they tend to be underused. Zoning them — a media room that closes, a guest suite with its own egress and bathroom, a gym with the right floor, dedicated storage — produces something people use daily rather than a large empty room. Each zone has different requirements, which is why the plan matters more than the finishes.',
    ],
    localFaqs: [
      {
        q: 'Should a large basement be one open room?',
        a: 'Finished that way they tend to be underused. Zoning — a media room that closes, a guest suite with egress and a bathroom, a gym, real storage — produces something used daily.',
      },
      {
        q: 'Does a guest suite need its own egress?',
        a: 'For a bedroom, yes. That is a foundation opening and a window well, and it is worth designing in from the start rather than adding later.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Basement remodel in Arlington Heights? A little preparation makes the survey count. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'Since we travel to reach the valley villages, one visit should settle it. Clear access around the perimeter walls so we can see them, know where the sump and the cleanouts are, and be honest about any history of water — a damp patch every spring matters more than anything else we could be told. That is what decides whether this is a finishing project or a drainage one.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready?',
        a: 'Clear access around the perimeter walls, the location of the sump and cleanouts, and an honest account of any water history. That last one decides more than anything else.',
      },
      {
        q: 'Why does water history matter so much?',
        a: 'Because it separates a finishing project from a drainage project, and those are different scopes with different costs. A damp patch every spring is important information.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Basement remodel in North College Hill? Sound travels both directions down here. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'A basement is both under the busiest floor of the house and next to a neighbour’s foundation in closely built streets. Footfall from above lands in the ceiling below, and a media room or a music room down there carries further than people expect. Insulation in the joist bays and resilient channel handle the first; solid construction and sensible speaker placement handle the second. Both are decided before the ceiling closes.',
    ],
    localFaqs: [
      {
        q: 'Will we hear the house above?',
        a: 'Unless it is addressed, yes — footfall from the busiest floor lands in the ceiling below. Insulation in the joist bays and resilient channel before the ceiling closes fix it.',
      },
      {
        q: 'What about noise reaching the neighbours?',
        a: 'A media or music room carries further than people expect in closely built streets. Construction and speaker placement both matter, and both are design decisions.',
      },
    ],
  },

  newtown: {
    intro:
      'Basement remodel in Newtown? On river-bottom ground, be honest about the water table. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'A high water table is the one problem that interior work cannot always solve — where ground water sits close to the slab, hydrostatic pressure finds a way. Some of these basements manage with a good perimeter drain and sump; some do not. We assess rather than assume, and where the honest answer is that it will not stay reliably dry, we say so before anyone spends.',
    ],
    localFaqs: [
      {
        q: 'Can a high water table be managed?',
        a: 'Sometimes, with a perimeter drain and a good sump. Sometimes not — where ground water sits close to the slab, pressure finds a way. We assess rather than assume.',
      },
      {
        q: 'Will you tell us if it is not worth it?',
        a: 'Yes, before anyone spends. It costs us the job and it is more useful to you than an optimistic quote.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Basement remodel in Turpin Hills? A bathroom down there transforms the space. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'The difference between a finished basement people visit and one they use is usually a bathroom. Without one, nobody stays down there for long and it will never work as a guest space. It is the single highest-value addition to a basement plan, and whether it needs an ejector or drains by gravity is the measurement that decides what it costs.',
    ],
    localFaqs: [
      {
        q: 'Is a basement bathroom worth it?',
        a: 'It is the difference between a space people visit and one they use — and without one it will never work as a guest space. The highest-value addition to most basement plans.',
      },
      {
        q: 'What decides the cost?',
        a: 'Whether the drain reaches the sewer by gravity or needs a sealed ejector, and whether a rough-in already exists. We measure both on the first visit.',
      },
    ],
  },

  silverton: {
    intro:
      'Basement remodel in Silverton? Doors and trim are what stop it reading as a basement. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'The details that make finished basements feel like basements are usually the cheap ones: hollow flat doors, minimal trim, and a stair that was left as it was. Matching the door style and trim profile to the rest of the house costs very little across a basement and is most of what makes the space read as part of the home rather than an addition to it.',
    ],
    localFaqs: [
      {
        q: 'What makes a basement feel finished?',
        a: 'Doors and trim matching the rest of the house, and a stair that has been dealt with. Those cost little across a basement and are most of what makes it read as part of the home.',
      },
      {
        q: 'Is it worth matching the upstairs trim exactly?',
        a: 'Where the profile is still available, yes — it is a small cost and it does more than most finish upgrades. Where it is not, something sympathetic beats something generic.',
      },
    ],
  },

  lockland: {
    intro:
      'Basement remodel in Lockland? Old cellars and valley ground together need care. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'Two constraints compound here: 19th-century cellar construction with limited height, and low valley ground where moisture is a genuine variable. Either alone is workable. Together they mean the assessment is honest work rather than a formality, and on some of these houses the recommendation will be a good utility space rather than finished rooms.',
    ],
    localFaqs: [
      {
        q: 'Can these cellars be finished?',
        a: 'Some can. Height and moisture both have to be established first, and where they combine badly the honest recommendation is a good utility space rather than finished rooms.',
      },
      {
        q: 'What does a good utility space involve?',
        a: 'A sealed floor, dehumidification, proper lighting and real shelving off the walls. It costs a fraction of finishing and it solves the actual problem.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Basement remodel in Groesbeck? Spend an evening down there before you design it. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Plans drawn from a floor plan miss what the space actually feels like — where it is cold, where the noise from above is worst, how dark the far corner is, whether the stair arrives somewhere sensible. An hour down there paying attention tells you more about the layout than a drawing does, and it is free. We ask clients to do it before the design conversation rather than after.',
    ],
    localFaqs: [
      {
        q: 'How should we prepare for the design conversation?',
        a: 'Spend an hour down there paying attention — where it is cold, where noise from above is worst, how dark the far corner is, where the stair arrives. It tells you more than a drawing.',
      },
      {
        q: 'Does the stair position affect the layout?',
        a: 'Considerably — where it lands decides the circulation and frequently the whole plan. It is worth noticing before rather than working around it afterwards.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Basement remodel in Mount Healthy? Old houses hide their foundation behind stored things. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'In houses of this age the basement has usually held decades of storage against the walls, and what is behind those shelves is exactly what we need to see — efflorescence, spalling mortar, staining at the wall-floor joint, previous patch repairs. Clearing the perimeter before the survey turns a guess into an assessment. It is the single most useful thing a homeowner can do before we arrive.',
    ],
    localFaqs: [
      {
        q: 'Do we need to clear the basement first?',
        a: 'The perimeter walls at least. What is behind decades of stored things — staining, efflorescence, previous patches — is exactly what we need to see to assess it properly.',
      },
      {
        q: 'What does efflorescence mean?',
        a: 'The white mineral deposit on masonry is evidence water has moved through the wall. It does not always mean an active problem, but it is a question worth answering before finishing.',
      },
    ],
  },

  reading: {
    intro:
      'Basement remodel in Reading? The laundry usually has to stay accessible. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'The washer and dryer live down here, and a finished basement either designs a proper laundry room around them or leaves them stranded in what is now a hallway. Doing it properly means a defined room with drainage, a floor that tolerates a leak, ventilation for the dryer and enough space to actually fold something. Done as an afterthought it becomes the part of the basement nobody wants to look at.',
    ],
    localFaqs: [
      {
        q: 'What happens to the laundry?',
        a: 'It either gets a proper room designed around it — drainage, a floor that tolerates a leak, dryer ventilation and space to fold — or it ends up stranded in what is now a hallway.',
      },
      {
        q: 'Can the laundry move?',
        a: 'Within the basement, usually, though drainage and the dryer vent route both constrain it. Moving it upstairs is a different project entirely.',
      },
    ],
  },

  dent: {
    intro:
      'Basement remodel in Dent? Where the stair lands decides the whole layout. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'A stair arriving in the middle of a basement chops it into leftover corners; one arriving at an end leaves a usable run of space. Moving it is a real job involving the floor above, and it is occasionally worth it — but far more often the answer is designing the layout around where it lands rather than fighting it. Either way it is the first thing to look at, not the last.',
    ],
    localFaqs: [
      {
        q: 'Can the basement stairs be moved?',
        a: 'It is a real job involving the floor above and occasionally worth it. Far more often the answer is designing around where they land rather than fighting it.',
      },
      {
        q: 'Why does it matter so much?',
        a: 'A stair arriving mid-basement chops the space into leftover corners; one arriving at an end leaves a usable run. It shapes the plan more than any other fixed element.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Basement remodel in Deer Park? Stairs are the limit on who can use the space. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'A basement is only useful to people who can get down to it, and cellar stairs are steep. Where a household includes someone with limited mobility, that is worth confronting before spending — rebuilding the stair with a shallower rise, a proper handrail on both sides and better lighting makes the difference between a space that serves the whole household and one that serves part of it.',
    ],
    localFaqs: [
      {
        q: 'Can the stairs be made easier?',
        a: 'Frequently — a shallower rise, handrails on both sides and proper lighting. Where a household includes someone with limited mobility it is worth confronting before spending on the space below.',
      },
      {
        q: 'What if the opening will not allow it?',
        a: 'Then we will say so, because it limits who the finished space serves. That is worth knowing before the budget is committed.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Basement remodel in Terrace Park? Near the Little Miami, prove it dry first. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Proximity to the river makes moisture assessment a genuine step rather than a formality here, whatever the quality of the house above. The sequence does not change with budget: establish it stays dry, then finish. A well-appointed basement built over an unresolved water problem fails exactly as fast as a modest one, and costs considerably more to put right.',
    ],
    localFaqs: [
      {
        q: 'Does a higher budget change the sequence?',
        a: 'Not at all. A well-appointed basement over an unresolved water problem fails as fast as a modest one and costs far more to put right. Dry first, then finish.',
      },
      {
        q: 'How do you establish it is dry?',
        a: 'Evidence on the walls and floor, the history, the sump behaviour, and ideally observation through a wet season. That evidence decides it.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Basement remodel in Dry Run? Protect the finished space from the mechanicals in it. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'The water heater is now sitting next to a finished room, and when it eventually fails it will do so onto that floor. A drain pan piped to the sump, a leak sensor, and a floor level that falls away from the finished area are all cheap during the work. The washing machine deserves the same treatment. Neither is exotic and both are the difference between an inconvenience and a claim.',
    ],
    localFaqs: [
      {
        q: 'What protects the finished space from a water heater failure?',
        a: 'A drain pan piped to the sump, a leak sensor, and a floor that falls away from the finished area. All cheap during the work and awkward afterwards.',
      },
      {
        q: 'Should the washing machine get the same?',
        a: 'Yes — a pan and a sensor. Between them, the water heater and the washer account for most finished-basement water damage that is not ground water.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Basement remodel in White Oak? Ask what insulation is going on the walls. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Two assemblies dominate and only one is right. Rigid or closed-cell foam directly against the foundation, with framing held off it, keeps the timber away from a cold damp surface and controls condensation. Fibreglass batts stuffed between studs pressed against concrete traps moisture at exactly the point it condenses. The second is faster and cheaper and it is what a quick job does.',
    ],
    localFaqs: [
      {
        q: 'What insulation should go on foundation walls?',
        a: 'Rigid or closed-cell foam directly against the foundation with framing held off it. Fibreglass batts against concrete trap moisture where it condenses, which is what causes the problems.',
      },
      {
        q: 'How do we know what we are being quoted?',
        a: 'Ask specifically. It is invisible once drywall goes on and it is the difference between a wall that lasts and one that grows mould behind it.',
      },
    ],
  },

  forestville: {
    intro:
      'Basement remodel in Forestville? Rough in for what you might want later. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'The cheapest work in a basement is the work done while walls are open. A capped drain for a future wet bar, conduit to where a television will eventually go, an extra circuit, blocking in a wall for something to be mounted on, and a data run. Each costs very little now and each means not opening finished walls later. It is the part of the plan worth being generous with.',
    ],
    localFaqs: [
      {
        q: 'What should we rough in for later?',
        a: 'A capped drain for a future wet bar, conduit to where a television will go, a spare circuit, blocking for anything wall-mounted, and a data run. All cheap now and awkward later.',
      },
      {
        q: 'Is that over-engineering?',
        a: 'It is the least expensive part of the project and the part that ages best. We would rather include it than have you open finished walls in three years.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Basement remodel in Cherry Grove? A finished basement adds a lot of circuits. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Lighting, general outlets, a bathroom, possibly a wet bar and a media wall — a finished basement adds more circuits than people expect, and the panel is usually right there to show whether they will fit. Where it will not, a subpanel or an upgrade is a real cost that belongs on the quote. We check spare capacity at survey rather than discovering it at rough-in.',
    ],
    localFaqs: [
      {
        q: 'Will the panel take the new circuits?',
        a: 'A finished basement adds more than people expect — lighting, outlets, a bathroom, possibly a bar and a media wall. We check spare capacity at survey rather than at rough-in.',
      },
      {
        q: 'What if it will not?',
        a: 'A subpanel is frequently the sensible answer and it is conveniently close by. It appears as its own line rather than being absorbed.',
      },
    ],
  },

  kenwood: {
    intro:
      'Basement remodel in Kenwood? A guest suite down here needs egress and a bathroom. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'A basement guest suite is one of the better uses of the space and it has two non-negotiables: a proper egress window if it is to be a bedroom, and a bathroom so guests are not crossing the house at night. Add a door that closes the suite off from the rest of the basement and it works genuinely well. Without those it is a sofa in a rec room, which is a different thing.',
    ],
    localFaqs: [
      {
        q: 'What does a basement guest suite need?',
        a: 'A proper egress window if it is to be a bedroom, a bathroom so guests are not crossing the house at night, and a door closing it off from the rest of the basement.',
      },
      {
        q: 'Is it worth doing properly?',
        a: 'It is one of the better uses of a basement — but without egress and a bathroom it is a sofa in a rec room rather than a suite, and we would be straight about that.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Basement remodel in Lincoln Heights? The village permits it, and we quote to the house. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical points. It is its own municipality, so permits and the rough-in inspection come through Lincoln Heights rather than the county, confirmed before scheduling. And in modest housing on valley ground, the honest advice is frequently to spend on moisture control, lighting and one good room rather than finishing the whole footprint to a high standard.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits here?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'What is the sensible scope here?',
        a: 'Moisture control first, then lighting and one genuinely good room rather than finishing the whole footprint. That gets the most out of the budget in this housing.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Basement remodel in Dillonvale? Soffits can be design features or apologies. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Every basement has ductwork and pipes that have to be boxed in somewhere, and how those soffits are handled decides whether the ceiling looks planned or patched. Running them as continuous lines that define zones, aligning them with walls below, and setting lighting into them turns a constraint into structure. Boxing each obstruction individually produces a ceiling that reads as a series of apologies.',
    ],
    localFaqs: [
      {
        q: 'Can soffits look deliberate?',
        a: 'Yes — run as continuous lines that define zones, aligned with walls below and with lighting set into them. Boxing each obstruction individually is what reads as patched.',
      },
      {
        q: 'Do they cost height everywhere?',
        a: 'Only where they run, which is why the layout puts them over circulation rather than over where people sit. That is a planning decision.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Basement remodel in Woodlawn? Ask what goes between the framing and the wall. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'A basement wall assembly is invisible once drywall goes on, and it is where the difference between a wall that lasts and one that grows mould is decided. Continuous rigid foam against the foundation, framing held off it, no organic material touching concrete, and a bottom plate that is treated or isolated from the slab. Any of those missing is a problem that surfaces years later, and it is worth asking about specifically.',
    ],
    localFaqs: [
      {
        q: 'What should the wall assembly be?',
        a: 'Continuous rigid foam against the foundation, framing held off it, no organic material touching concrete, and a treated or isolated bottom plate. Any of those missing surfaces years later.',
      },
      {
        q: 'Can we see it before drywall?',
        a: 'Yes, and we would encourage it — it is also what the rough-in inspection covers. It is the part you are paying for and cannot inspect afterwards.',
      },
    ],
  },

  addyston: {
    intro:
      'Basement remodel in Addyston? If we find a structural problem, here is what happens. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'Century-old foundations on river ground occasionally show real problems — bowing walls, significant cracking, deteriorated mortar. Those are structural work rather than finishing, and they come before anything else or not at all. Our price is fixed because we assess the foundation before quoting, and where something genuinely concealed surfaces we show you the photograph and the options before continuing rather than pressing on.',
    ],
    localFaqs: [
      {
        q: 'What if the foundation has a problem?',
        a: 'Bowing, significant cracking or deteriorated mortar is structural work that comes before finishing or not at all. We assess the foundation before quoting rather than after.',
      },
      {
        q: 'Would you still take the job?',
        a: 'Only after the structural work is done, by us or by a specialist. Finishing over a foundation problem is not something we would put our name to.',
      },
    ],
  },

  greenhills: {
    intro:
      'Basement remodel in Greenhills? Built to one plan, so we know these basements. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because the town was built as a single scheme, the basements repeat — same construction, same height, same service positions. That is genuinely useful: we know what the ceiling height allows before arriving and what the realistic layouts are. The Landmark designation concerns the exterior, with an egress window the one detail that touches it and is worth raising early.',
    ],
    localFaqs: [
      {
        q: 'Do you know these basements already?',
        a: 'Yes — Greenhills was built as one scheme, so construction, height and service positions repeat. We know what the height allows before arriving.',
      },
      {
        q: 'Does the historic designation matter?',
        a: 'Interior work is yours. An egress window is the one detail that changes the exterior, so that is worth raising early.',
      },
    ],
  },

  northbrook: {
    intro:
      'Basement remodel in Northbrook? Dust control at the stair is what keeps the house clean. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'A basement job is weeks of framing, drywall sanding and cutting, and the stair is a direct chimney to the rest of the house. A sealed barrier with a zipped access at the top, negative air where the drywall stage warrants it, and protection on the stair itself go in on day one and stay maintained. Over four to six weeks, maintaining it is what separates a contained job from a house you clean afterwards.',
    ],
    localFaqs: [
      {
        q: 'How do you keep basement dust out of the house?',
        a: 'A sealed barrier with zipped access at the top of the stair, negative air during the drywall stage, and protection on the stair itself — maintained throughout rather than fitted once.',
      },
      {
        q: 'Is drywall sanding the worst of it?',
        a: 'By some distance. That is the stage where negative air earns its place, and it is when we would expect you to notice the containment working.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Basement remodel in Indian Hill? On a well and septic, both reach the basement. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Two things matter here that would not in town. A well pump and pressure tank frequently live in the basement and need clearance and service access preserved. And a basement bathroom adds load to a septic system whose capacity has to be confirmed — plus, where the drain sits below the tank inlet, an ejector. Both get established before design rather than at rough-in.',
    ],
    localFaqs: [
      {
        q: 'Does a well pump affect the basement layout?',
        a: 'It needs clearance and service access preserved like any other mechanical. We define the mechanical area first and work the layout around it.',
      },
      {
        q: 'Can we add a bathroom on septic?',
        a: 'Usually, with the system’s capacity confirmed first — and an ejector where the drain sits below the tank inlet. Both established before design rather than at rough-in.',
      },
    ],
  },

  evendale: {
    intro:
      'Basement remodel in Evendale? Everything gets tested before we call it done. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'Before handover we run the whole thing: every circuit and outlet tested, the sump cycled and its discharge confirmed to be running away from the house, any bathroom filled and drained with the ejector cycled, the HVAC balanced so the new rooms actually get air, and every access panel opened to confirm it works. That list takes an afternoon and it is the difference between finished and nearly finished.',
    ],
    localFaqs: [
      {
        q: 'What is checked before handover?',
        a: 'Every circuit and outlet, the sump cycled with its discharge confirmed running away from the house, any bathroom filled and drained with the ejector cycled, the HVAC balanced, and every access panel opened.',
      },
      {
        q: 'Why check the sump discharge?',
        a: 'Because a discharge that dumps beside the foundation returns the water you just pumped out. It is a common fault and it is exactly what a finished basement cannot tolerate.',
      },
    ],
  },

  glendale: {
    intro:
      'Basement remodel in Glendale? A Victorian cellar deserves an honest assessment. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Cellars under these houses were built for storage and service, with stone walls, limited height and floors that were never intended as a finished surface. Some can become genuinely good space. Some should be excellent dry storage with proper lighting and a sealed floor, which serves the house better than a cramped finished room would. We give the honest assessment rather than the optimistic one.',
    ],
    localFaqs: [
      {
        q: 'Can a Victorian cellar become finished space?',
        a: 'Some can. Height, floor condition and moisture decide it, and where they do not allow it, excellent dry storage serves the house better than a cramped finished room.',
      },
      {
        q: 'Does the historic designation restrict the work?',
        a: 'Interior work is yours to decide. An egress window would change the exterior, so that is the one element worth raising early.',
      },
    ],
  },

  sharonville: {
    intro:
      'Basement remodel in Sharonville? Decisions made up front are delays avoided. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'The list for a basement is long: layout and room uses, ceiling type, whether a bathroom goes in and where, egress if a bedroom is planned, lighting positions, flooring, door and trim style, and every rough-in for future use. All settled before framing starts — because once the walls are up, changing where a room divider goes means undoing inspected work.',
    ],
    localFaqs: [
      {
        q: 'What do we need to decide before framing?',
        a: 'Layout and room uses, ceiling type, whether and where a bathroom goes, egress if a bedroom is planned, lighting positions, flooring, door and trim style, and any future rough-ins.',
      },
      {
        q: 'What if we change our minds after framing?',
        a: 'Before inspection it is manageable. After walls are inspected and closed, moving a divider means undoing inspected work — which is why we settle it first.',
      },
    ],
  },

  northgate: {
    intro:
      'Basement remodel in Northgate? Sometimes the honest answer is a smaller scope. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'Where a household mainly wants somewhere for the children to be, a single well-finished room with good lighting and a decent floor achieves that for a fraction of finishing the whole footprint. We would rather quote what solves the problem than what fills the space — and the difference in cost between those two is frequently substantial.',
    ],
    localFaqs: [
      {
        q: 'Do we need to finish the whole basement?',
        a: 'Rarely. Where the need is somewhere for the children to be, one well-finished room with good lighting and a decent floor does it for a fraction of the whole footprint.',
      },
      {
        q: 'Will you quote the smaller scope?',
        a: 'Yes, and recommend it where it is the right answer. What solves the problem is more useful to you than what fills the space.',
      },
    ],
  },

  springdale: {
    intro:
      'Basement remodel in Springdale? A busy household needs a durable basement. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'A basement that serves as the children’s territory takes harder use than any room upstairs. Luxury vinyl rather than carpet, washable paint rather than flat, solid-core doors, and trim that survives being knocked into. It is not a glamorous specification and it is the one that still looks acceptable in five years, which in this housing is the point.',
    ],
    localFaqs: [
      {
        q: 'What specification suits a family basement?',
        a: 'Luxury vinyl rather than carpet, washable paint rather than flat, solid-core doors and trim that survives being knocked into. Not glamorous, and still acceptable in five years.',
      },
      {
        q: 'Is carpet a mistake in a basement?',
        a: 'Over a vapour break it can work, but it is unforgiving of any moisture event and it takes hard use badly. In a family basement we would steer you elsewhere.',
      },
    ],
  },

  miamitown: {
    intro:
      'Basement remodel in Miamitown? On river-bottom ground, the assessment comes first. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'Low ground beside a river is where we are most cautious about finishing at all. Some of these basements manage with a proper perimeter drain and a good sump; some will not stay dry whatever is done inside. We schedule the work as a block because of the distance, and we assess honestly before anyone commits — including saying no where that is the right answer.',
    ],
    localFaqs: [
      {
        q: 'Can a basement on river-bottom ground be finished?',
        a: 'Some can with a proper perimeter drain and a good sump. Some will not stay dry whatever is done inside, and we will say so before anyone commits.',
      },
      {
        q: 'Do you come out this far?',
        a: 'Yes, and we schedule it as a block because of the distance. The assessment visit comes first regardless.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Basement remodel in Forest Park? Most of this happens while you are upstairs. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'A basement is the one large project where the household genuinely carries on normally — nothing goes out of service, the work is contained below, and access is through one door. We work to agreed hours with a named project manager on site and the barrier maintained at the stair. You get photographs at each stage, particularly of the wall assembly and rough-in before they disappear behind drywall.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home?',
        a: 'Rarely — the work is contained below and nothing goes out of service. We work to agreed hours with a named project manager on site and the stair barrier maintained.',
      },
      {
        q: 'Why photographs?',
        a: 'So you can see the wall assembly and the rough-in before drywall covers them. Those are the parts you are paying for and cannot inspect afterwards.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Basement remodel in Pleasant Run? Think about where the pets and storage go. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'A basement currently absorbs everything a household has nowhere else for — the litter tray, the freezer, seasonal storage, the tool bench. Finishing it displaces all of that, and if the plan does not say where each goes they end up in the new room within a year. Designing a proper utility zone alongside the finished space is what stops that, and it is the part most often left out.',
    ],
    localFaqs: [
      {
        q: 'Where does everything currently in the basement go?',
        a: 'Into a designed utility zone alongside the finished space — the freezer, seasonal storage, the tool bench, the litter tray. Without that they end up in the new room within a year.',
      },
      {
        q: 'How much space should that take?',
        a: 'More than people allow. Go and look at what is down there now — that volume does not disappear because the basement got finished.',
      },
    ],
  },

  cleves: {
    intro:
      'Basement remodel in Cleves? If it has flooded, that changes the whole answer. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'A basement that has taken flood water is not a candidate for conventional finishing, and we would say so plainly. Where a household still wants usable space, it is built to be dried and salvaged — inorganic wall materials, a floor that tolerates immersion, services kept high and nothing that holds water. That is a genuinely different specification and it is the only honest one on this ground.',
    ],
    localFaqs: [
      {
        q: 'Our basement has flooded — can it be finished?',
        a: 'Not conventionally, and we would say so plainly. Where you still want usable space it is built to be dried and salvaged — inorganic materials, services kept high, nothing that holds water.',
      },
      {
        q: 'Is that much more expensive?',
        a: 'Different rather than dramatically more, and far cheaper than replacing a conventional finish after the next event.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Basement remodel in North Bend? A century-old foundation gets assessed before anything else. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Stone and early masonry foundations on riverside ground carry two questions at once: is the structure sound, and does it stay dry. Both are answered before anything is designed, because either can end the project. Where the foundation needs repointing or repair, that is masonry work that comes first — building a finished wall in front of it just makes the eventual repair worse.',
    ],
    localFaqs: [
      {
        q: 'What gets assessed first?',
        a: 'Whether the foundation is structurally sound and whether it stays dry. Either can end the project, so both are answered before anything is designed.',
      },
      {
        q: 'What if the masonry needs work?',
        a: 'It comes first. Building a finished wall in front of a foundation that needs repointing just makes the eventual repair worse and more expensive.',
      },
    ],
  },

  loveland: {
    intro:
      'Basement remodel in Loveland? A basement near the trail earns its keep as a mudroom. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'Where a household comes home muddy and there is a basement entrance, the most useful room down there may not be a lounge — it is a proper landing zone with a hard floor, a utility sink, bike storage and somewhere for wet gear to drain. Planned properly it keeps all of that out of the house entirely, which is worth more day to day than another sitting room.',
    ],
    localFaqs: [
      {
        q: 'What is the most useful basement room here?',
        a: 'Frequently a proper landing zone rather than a lounge — a hard floor, a utility sink, bike storage and somewhere wet gear can drain. It keeps all of that out of the house.',
      },
      {
        q: 'Does the low ground near the river matter?',
        a: 'It makes the moisture assessment a real step. We establish it before designing rather than treating it as a formality.',
      },
    ],
  },

  harrison: {
    intro:
      'Basement remodel in Harrison? On the state line, jurisdiction decides the inspection. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'Basement finishing is inspected at rough-in for framing, electrical and insulation — and sitting on a state boundary, whether that runs under Ohio or Indiana rules depends on which side the property is on. The processes differ. We confirm before a start date is agreed rather than when the inspector is due, and on the low ground near the Whitewater we assess moisture properly first.',
    ],
    localFaqs: [
      {
        q: 'Does the state line affect the inspection?',
        a: 'Yes — Ohio and Indiana run different processes, and basement work is inspected at rough-in. We confirm which applies before scheduling.',
      },
      {
        q: 'Does the Whitewater affect the basement?',
        a: 'On the low ground it makes moisture assessment a genuine step. We establish it before designing rather than as a formality.',
      },
    ],
  },

  ludlow: {
    intro:
      'Basement remodel in Ludlow? A 19th-century cellar may want to stay one. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'These are river-town cellars — low, stone-walled and close to the water. Some can be finished properly. On others the height alone rules it out before moisture is even considered, and the honest recommendation is a well-executed utility space instead. We measure and assess rather than assuming a basement is automatically a finishing opportunity.',
    ],
    localFaqs: [
      {
        q: 'Can these cellars be finished?',
        a: 'Some can. On others the height alone rules it out before moisture is even considered, and a well-executed utility space is the honest recommendation.',
      },
      {
        q: 'What height is needed?',
        a: 'Enough clear height for a habitable room after ductwork, beams and the finished floor and ceiling take their share. We measure at the lowest point, not the best one.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Basement remodel in Park Hills? On this hillside, some lower levels are walkouts. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Houses built into this hill frequently have a lower level below grade at the front and at ground level behind — which is a much better proposition than a full basement. Natural light, an existing door and satisfied egress change what the space can be. The uphill wall still takes the ground water, so that side gets the attention while the rest is comparatively straightforward.',
    ],
    localFaqs: [
      {
        q: 'Is a hillside lower level easier to finish?',
        a: 'Considerably where it is a walkout — natural light, an existing door and satisfied egress. The uphill wall still takes the ground water, so that side gets the attention.',
      },
      {
        q: 'Is getting materials down a problem?',
        a: 'A walkout usually makes it easier rather than harder, since there is often a door at grade. On a full basement with a narrow stair it is a real planning matter.',
      },
    ],
  },

  bromley: {
    intro:
      'Basement remodel in Bromley? On this ground, we will often say no. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Low ground beside the river with century-old foundations is the combination least suited to a finished basement, and we would rather say that than take the work. Where a household wants more usable space, the same budget frequently does more upstairs. Where a basement genuinely needs improving, dry storage done well solves the actual problem at a fraction of the cost.',
    ],
    localFaqs: [
      {
        q: 'Should we finish a basement here?',
        a: 'Frequently not, and we would rather say so. Low ground beside the river with century-old foundations is the combination least suited to it — the same budget often does more upstairs.',
      },
      {
        q: 'What can be done instead?',
        a: 'Dry storage done properly — a sealed floor, dehumidification, good lighting and shelving off the walls. It solves the actual problem at a fraction of the cost.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Basement remodel in Fort Wright? Up on the hilltop these are straightforward. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation removes the water-table questions that dominate work in the river villages below, and mid-century construction gives poured or block walls in reasonable condition with mechanicals grouped together. That combination makes these among the more predictable basements we finish. Kentucky permitting applies, with a rough-in inspection before walls close, which we confirm and schedule.',
    ],
    localFaqs: [
      {
        q: 'Are hilltop basements easier?',
        a: 'Considerably — the elevation avoids the water-table problems of the river villages, and mid-century construction gives sound walls with mechanicals grouped together.',
      },
      {
        q: 'Do you handle Kentucky permitting?',
        a: 'Yes, including the rough-in inspection before walls close. It runs under Kentucky rules rather than Ohio and we confirm requirements before scheduling.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Basement remodel in Fort Mitchell? Build it so it does not date in ten years. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Finished basements date faster than the rest of a house because they get built to whatever the fashion was — the home cinema with fixed seating, the elaborate bar, the themed room. Flexible, well-lit space with good flooring and neutral finishes serves a household through several uses. Put the personality in furniture and paint, which cost nothing to change.',
    ],
    localFaqs: [
      {
        q: 'What dates a finished basement fastest?',
        a: 'Purpose-built features — fixed cinema seating, an elaborate bar, a themed room. Flexible well-lit space with good flooring serves a household through several different uses.',
      },
      {
        q: 'Can we still have a bar?',
        a: 'Of course — just built so it can be removed or changed without rebuilding the room. That is a design decision rather than a restriction.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Basement remodel in Villa Hills? We do not frame over an unresolved wall. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There is a fast version of this job where framing goes straight up against whatever the foundation is doing — no assessment, no moisture work, no proper wall assembly. It is quicker and cheaper and it is how mould ends up behind two-year-old drywall. We assess the walls, deal with any water, and build an assembly that lets the foundation dry. That takes longer and it is what the warranty rests on.',
    ],
    localFaqs: [
      {
        q: 'Why not just frame and drywall it?',
        a: 'Because it seals whatever the foundation is doing behind a finished wall. Assessment, moisture work and an assembly that lets the wall dry are what stop mould appearing behind new drywall.',
      },
      {
        q: 'Is that reflected in the price?',
        a: 'Yes, and honestly. A cheaper quote for a basement is nearly always missing the moisture work or the wall assembly, and both are invisible once it is finished.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Basement remodel in Lakeside Park? Built properly, this outlasts everything above it. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'A basement built on a resolved moisture situation with a correct wall assembly should never need doing again — the finishes will date long before the construction fails. That is worth knowing when deciding what to spend, because the money that matters is in the parts nobody sees. Flooring and paint can be refreshed in fifteen years; the wall assembly behind them cannot.',
    ],
    localFaqs: [
      {
        q: 'How long should a finished basement last?',
        a: 'The construction should never need doing again where the moisture is resolved and the wall assembly is right. The finishes will date long before that fails.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Keep the sump serviced and its discharge clear, run the dehumidifier, and keep gutters and grading doing their job outside. That is genuinely most of it.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Basement remodel in Crescent Springs? Ask for the quote itemised. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'A basement quote as one figure hides the part that matters. Ours separates any moisture work, framing, electrical, plumbing, HVAC changes, insulation and the wall assembly, drywall, flooring, doors and trim, and permits. That is what lets you compare honestly — and in basements the gap between two numbers is nearly always the moisture work or the wall assembly, both invisible afterwards.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'Any moisture work, framing, electrical, plumbing, HVAC changes, insulation and the wall assembly, drywall, flooring, doors and trim, and permits — itemised.',
      },
      {
        q: 'How do we compare two quotes?',
        a: 'Line by line, and ask specifically about the moisture work and the wall assembly. That is nearly always where a lower number comes from, and both are invisible once finished.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Basement remodel in Crestview Hills? Spend on the invisible half. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'In most rooms the visible finishes are where money shows. In a basement it is the opposite — the moisture management, the wall assembly, the insulation at the rim joist and the ventilation are what decide whether the space is comfortable and lasts. Where budget is finite we would put it there and take a simpler finish, and say so plainly.',
    ],
    localFaqs: [
      {
        q: 'Where should a basement budget concentrate?',
        a: 'The invisible half — moisture management, the wall assembly, rim joist insulation and ventilation. Those decide whether the space is comfortable and lasts.',
      },
      {
        q: 'Can we upgrade finishes later?',
        a: 'Easily — flooring, paint and trim are all straightforward to change. The assembly behind them is not, which is why it comes first.',
      },
    ],
  },

  edgewood: {
    intro:
      'Basement remodel in Edgewood? A basement suite can keep family close. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Where a household needs space for a parent or an adult child, a basement suite is frequently the most affordable answer — but only where the stairs are manageable for the person who will use it. That is the honest first question, and it is one people skip. A suite at the bottom of a steep flight solves the space problem and creates a different one.',
    ],
    localFaqs: [
      {
        q: 'Can a parent live in a basement suite?',
        a: 'Only where the stairs are genuinely manageable for them. That is the first question and the one most often skipped — a suite at the bottom of a steep flight creates a different problem.',
      },
      {
        q: 'What does the suite need?',
        a: 'Egress if it includes a bedroom, its own bathroom, adequate heat and light, and a door closing it off from the rest of the basement.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Basement remodel in Taylor Mill? Winter is a good time for this one. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'A basement is entirely interior work and nothing in the house goes out of service, so winter suits it better than most projects — and availability is usually better in the quieter months. There is one genuine seasonal advantage: a wet spring is when a basement shows you what it actually does, so an assessment made then is worth more than one made in August.',
    ],
    localFaqs: [
      {
        q: 'Is winter a bad time for a basement?',
        a: 'No — it is entirely interior work with nothing going out of service, and availability is usually better in the quieter months.',
      },
      {
        q: 'When is the best time to assess it?',
        a: 'A wet spring, because that is when a basement shows what it actually does. An assessment then is worth more than one made in a dry August.',
      },
    ],
  },

  elsmere: {
    intro:
      'Basement remodel in Elsmere? Here is exactly when money changes hands. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Stated plainly. A deposit at signing covers materials and scheduling. Where moisture work is part of the scope it is quoted and invoiced separately, because it is a different job with a different outcome. A progress payment falls at rough-in inspection, and the balance on completion after the walkthrough. Nothing appears at the end that was not in the signed itemisation.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing, a progress payment at rough-in inspection, and the balance on completion after the walkthrough. Nothing appears at the end that was not in the itemisation.',
      },
      {
        q: 'Why is moisture work invoiced separately?',
        a: 'Because it is a different scope with a different outcome, and separating it means you can see exactly what it costs rather than having it buried in a finishing price.',
      },
    ],
  },

  independence: {
    intro:
      'Basement remodel in Independence? Here is what the warranty covers. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Our workmanship warranty covers how the basement was built — the framing, the wall assembly, the electrical and plumbing connections, the drywall and the finishes we installed. Where we carried out the moisture work, that is covered too. What it does not cover is a new water problem arising from something outside our scope, such as a failed gutter or changed grading. We set that out at the start rather than in year four.',
    ],
    localFaqs: [
      {
        q: 'What does the warranty cover?',
        a: 'How the basement was built — framing, wall assembly, electrical and plumbing connections, drywall and finishes. Where we did the moisture work, that is covered too.',
      },
      {
        q: 'What is not covered?',
        a: 'A new water problem from something outside our scope — a failed gutter, changed grading, a neighbouring property. We set that out at the start rather than in year four.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Basement remodel in Dayton? Late-1800s cellars and river ground together. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'These cellars were built as coal and storage space in the 1800s, on ground close to the river. Height is frequently marginal and moisture is a genuine variable rather than a formality. Both are established before anything else, and on a fair number of these houses the honest recommendation is dry storage done properly rather than finished rooms that will not hold.',
    ],
    localFaqs: [
      {
        q: 'Can a late-1800s cellar be finished?',
        a: 'Some can. Height is frequently marginal and moisture is a real variable this close to the river — both get established before anything is designed.',
      },
      {
        q: 'What if the answer is no?',
        a: 'Then dry storage done properly, which serves the house genuinely well and costs a fraction. We would rather recommend that than build something that will not hold.',
      },
    ],
  },

  southgate: {
    intro:
      'Basement remodel in Southgate? Three questions decide whether to proceed. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Before budget or design, three answers. Does it stay dry through a wet season? Is there enough clear height once ductwork and a finished ceiling take their share? And can the mechanicals be worked around with their clearances kept? Those settle whether there is a project. Everything after them is design, and everything before them is guesswork.',
    ],
    localFaqs: [
      {
        q: 'How do we know if our basement can be finished?',
        a: 'Does it stay dry through a wet season, is there enough clear height once ductwork and ceiling take their share, and can the mechanicals be worked around with clearances kept.',
      },
      {
        q: 'What if one of the three fails?',
        a: 'Moisture can usually be solved, height frequently cannot without underpinning, and mechanicals can be worked around. We will tell you honestly which you are facing.',
      },
    ],
  },

  wilder: {
    intro:
      'Basement remodel in Wilder? Keep the permit and the paperwork. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'Unpermitted basement work is one of the most common issues to surface at resale, and it can mean opening finished walls for an inspector years later. Keeping the permit records, the inspection sign-off and the itemised specification is worth real money at sale — a buyer seeing that the work was inspected and by whom removes a question that otherwise sits over the whole space.',
    ],
    localFaqs: [
      {
        q: 'Why does the permit paperwork matter?',
        a: 'Unpermitted basement work is one of the most common issues at resale, and it can mean opening finished walls for an inspector. The records remove a question that otherwise sits over the space.',
      },
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'It is tied to the installation rather than to you personally, and we provide documentation for a sale alongside the permit records.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Basement remodel in Highland Heights? A basement bedroom in a let is a liability question. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'The temptation to add a basement bedroom to a student let is obvious and the requirements are not optional: proper egress, adequate ceiling height, heat, ventilation and interconnected smoke detection. Without them it cannot be let as a bedroom regardless of what the listing says, and that is a liability exposure rather than a paperwork one. We build to the requirement or we tell you it cannot be one.',
    ],
    localFaqs: [
      {
        q: 'Can we add a basement bedroom to a let?',
        a: 'Only with proper egress, adequate height, heat, ventilation and interconnected smoke detection. Without them it cannot be let as a bedroom, and that is a liability question.',
      },
      {
        q: 'What if it cannot meet those?',
        a: 'Then it is finished as shared living space instead. We will say so rather than build something that exposes you.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Basement remodel in Cold Spring? Just bought the house? Assess it through a wet season first. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'New owners frequently want the basement done immediately, and the one thing worth waiting for is seeing how it behaves in the wet months. A basement that looks perfect in a dry August can tell a different story in March. Where the house is newer and the basement was built to be finished, that caution matters less — and we will say which situation you are in.',
    ],
    localFaqs: [
      {
        q: 'Should we finish the basement straight after buying?',
        a: 'Worth seeing how it behaves through a wet season first — a basement that looks perfect in August can tell a different story in March. In newer housing that caution matters less.',
      },
      {
        q: 'Can you assess it before we buy?',
        a: 'Yes, and it is worth doing. Knowing whether the basement is finishable changes what the house is worth to you.',
      },
    ],
  },

  alexandria: {
    intro:
      'Basement remodel in Alexandria? On a well and septic, both live in the plan. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'On the semi-rural properties here the basement usually holds the well pressure tank and sometimes the treatment equipment, all of which need clearance and service access preserved. And a basement bathroom adds load to a septic system whose capacity has to be confirmed — plus an ejector where the drain sits below the tank inlet. Both are established before the layout rather than at rough-in.',
    ],
    localFaqs: [
      {
        q: 'Does well equipment affect the layout?',
        a: 'The pressure tank and any treatment equipment need clearance and service access preserved, like any other mechanical. We define that area first and design around it.',
      },
      {
        q: 'Can we add a bathroom on septic?',
        a: 'Usually, with the system’s capacity confirmed first and an ejector where the drain sits below the tank inlet. Both established before the layout rather than at rough-in.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Basement remodel in Melbourne? One team, and an honest answer about the river. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'Two things. We do not subcontract, so the same installers work from framing through finish with one project manager — which on a job where the wall assembly is buried behind drywall means the person who built it is the one accountable for it. And on low riverside ground we assess before committing, including saying that some of these basements are better as dry storage.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes — our own installers with one project manager. On a job where the wall assembly ends up buried, whoever built it is the one accountable for it.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, scheduled as a block because of the distance. The assessment comes first, and on this ground it sometimes ends the conversation honestly.',
      },
    ],
  },

  hebron: {
    intro:
      'Basement remodel in Hebron? Many of these were built to be finished. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Newer subdivision houses here frequently have poured walls in good condition, good ceiling height, an egress window already in, and a bathroom rough-in capped in the slab. That combination makes this among the most straightforward basement work we do, and the cost lands well below what people expect because almost nothing has to be remediated first.',
    ],
    localFaqs: [
      {
        q: 'Was our basement designed to be finished?',
        a: 'In newer subdivision housing here, frequently — poured walls in good condition, good height, often an egress window and a bathroom rough-in already there.',
      },
      {
        q: 'How do we check for the rough-in?',
        a: 'Capped pipe stubs in the slab, usually in a corner or near the stack. It takes minutes and it substantially changes the cost of adding a bathroom.',
      },
    ],
  },

  burlington: {
    intro:
      'Basement remodel in Burlington? Egress and ceiling height are the code questions. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Two requirements govern whether a basement room can be what you want it to be: clear ceiling height for a habitable room, and a compliant egress opening for a bedroom. Both are checked at inspection and neither can be worked around afterwards. We establish them at survey so the design reflects what will actually pass rather than what looked good on a plan.',
    ],
    localFaqs: [
      {
        q: 'What does an egress window have to be?',
        a: 'An opening large enough to climb out of, at a reachable height, with a well you can get up out of. It is checked at inspection and it cannot be worked around afterwards.',
      },
      {
        q: 'What if the ceiling height is marginal?',
        a: 'Then the room cannot be habitable space regardless of how it is finished. We measure at the lowest point at survey rather than discovering it at inspection.',
      },
    ],
  },

  union: {
    intro:
      'Basement remodel in Union? These basements are usually ready to go. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'Housing built from the 1990s onward generally has everything a finishing project wants already in place — good height, sound poured walls, a working sump, frequently egress and a bathroom rough-in. It is the cheapest substantial living space these houses will ever gain, and the project most often deferred because nothing is wrong with the space as it stands.',
    ],
    localFaqs: [
      {
        q: 'Is this the cheapest way to add space?',
        a: 'By a clear margin in this housing — the walls, floor and roof exist and almost nothing needs remediating first. It is the most deferred project and usually the best value.',
      },
      {
        q: 'What still needs checking?',
        a: 'Panel capacity for the added circuits and whether the HVAC can serve the extra volume. Both are known costs rather than unknowns.',
      },
    ],
  },

  walton: {
    intro:
      'Basement remodel in Walton? On a well and septic, both reach into the basement. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'On rural properties out here the basement holds the pressure tank and any water treatment, and both need clearance and service access designed in rather than boxed away. A basement bathroom also needs the septic capacity confirmed. Neither is a barrier and both shape the layout, which is why we establish them before drawing rather than at rough-in.',
    ],
    localFaqs: [
      {
        q: 'Does well equipment limit the layout?',
        a: 'It needs clearance and service access preserved rather than boxed away. We define that area first and design the finished space around it.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, scheduled as a block because of the distance. The assessment visit comes first regardless.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Basement remodel in Mount Carmel? A ranch basement runs the full footprint. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'Single-storey plans mean the basement matches the whole house footprint rather than part of it, which is a substantial amount of space — frequently enough to genuinely double the living area. It also means more perimeter wall to insulate and more ceiling to deal with, so the arithmetic scales. Worth measuring the usable area properly rather than assuming the gross.',
    ],
    localFaqs: [
      {
        q: 'How much space does a ranch basement add?',
        a: 'It matches the whole house footprint rather than part of it, so frequently enough to double the living area. It also means more perimeter to insulate, so the cost scales too.',
      },
      {
        q: 'Should the whole thing be finished?',
        a: 'Not necessarily. A large footprint is where zoning and leaving a proper utility area pays off most, and it keeps the budget sensible.',
      },
    ],
  },

  summerside: {
    intro:
      'Basement remodel in Summerside? The lighting plan decides how it feels. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'With little natural light, a basement is entirely dependent on what is designed into the ceiling — and a uniform grid of downlights is what makes finished basements feel like basements. Washing the perimeter walls with light makes them recede, layering task and low-level light gives the room depth, and putting it all on dimmers lets the space change character. All wired before the ceiling closes.',
    ],
    localFaqs: [
      {
        q: 'How do we stop it feeling like a basement?',
        a: 'Lighting more than anything else — wash the perimeter walls so they recede, layer task and low-level light, and put it on dimmers. A uniform downlight grid is what makes them feel like basements.',
      },
      {
        q: 'Can lighting be changed later?',
        a: 'Recessed fittings and wall washing are wired before the ceiling closes. Adding them afterwards means opening finished work, so it is a design-stage decision.',
      },
    ],
  },

  withamsville: {
    intro:
      'Basement remodel in Withamsville? Finish part now and part later, sensibly. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Phasing a basement works better than phasing most projects, provided the first phase is planned with the second in mind — circuits run to where they will be needed, the framing logic sensible, and any moisture work done across the whole footprint rather than just the finished part. Done that way the second phase is straightforward. Done without planning, it means opening work you just paid for.',
    ],
    localFaqs: [
      {
        q: 'Can we finish it in stages?',
        a: 'Yes, and it works better than phasing most projects — provided circuits are run to where they will be needed and any moisture work covers the whole footprint rather than just phase one.',
      },
      {
        q: 'What has to be done across the whole basement?',
        a: 'Any moisture management, since water does not respect a partition. Doing it only under the finished part is how the second phase becomes a repair.',
      },
    ],
  },

  milford: {
    intro:
      'Basement remodel in Milford? Old foundations near the Little Miami need assessing. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'The older housing here combines 19th-century foundation construction with proximity to the river, which is the pairing that most warrants a proper assessment. Stone and early masonry behave differently from poured concrete and need to dry inward, and the ground conditions vary considerably between the old core and the newer development. We assess the specific house rather than the neighbourhood.',
    ],
    localFaqs: [
      {
        q: 'Do old foundations need different treatment?',
        a: 'Stone and early masonry need to dry inward, which changes the insulation assembly entirely. Sealing them with the wrong materials is what causes problems.',
      },
      {
        q: 'Is the whole area the same?',
        a: 'No — conditions vary considerably between the old core near the river and the newer development. We assess the specific house rather than the neighbourhood.',
      },
    ],
  },

  mulberry: {
    intro:
      'Basement remodel in Mulberry? On a fixed budget, moisture before finishes. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Where the budget will not cover everything, the split is not negotiable. Moisture management and a correct wall assembly come first, then one room finished properly, then the rest when funds allow. Spreading a limited budget across the whole footprint with a compromised assembly produces a basement that fails and has to be stripped. We would say so rather than take the larger scope.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget cover first?',
        a: 'Moisture management and a correct wall assembly, then one room finished properly. Spreading it thin across the whole footprint with a compromised assembly produces something that has to be stripped.',
      },
      {
        q: 'Will you quote the smaller scope?',
        a: 'Yes, and recommend it. Finishing less of a basement properly is always better than finishing all of it badly.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Basement remodel in Mount Repose? Build it so the next use is easy. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'A basement changes purpose more than any other space in a house — playroom becomes teenage territory becomes a guest suite becomes an office. Building for that means partitions that can move without touching services, circuits distributed rather than concentrated, and a bathroom roughed in even if not fitted. Each costs little now and each makes the next change straightforward.',
    ],
    localFaqs: [
      {
        q: 'How do we build for future changes?',
        a: 'Partitions that can move without touching services, circuits distributed rather than concentrated, and a bathroom roughed in even if not fitted now. Each costs little during the work.',
      },
      {
        q: 'Is a rough-in worth it if we do not want a bathroom?',
        a: 'Where the drain can reach, yes — cutting a slab later costs several times what stubbing it now does, and it makes the space far more adaptable.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Basement remodel in Day Heights? On a larger lot, the outside matters most. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'On larger properties the drainage picture extends well beyond the foundation — where the land slopes, where downspouts discharge, whether a swale exists and whether it still works. Frequently the most effective basement work happens outside the house entirely, and it costs a fraction of interior drainage. We look at the whole site before recommending anything below ground.',
    ],
    localFaqs: [
      {
        q: 'Can drainage be fixed outside?',
        a: 'On a larger lot, frequently — grading, downspout discharge and whether an existing swale still works. It costs a fraction of interior drainage and it addresses the cause.',
      },
      {
        q: 'Do you do that work?',
        a: 'Grading and downspout work, yes. Where a major site drainage scheme is needed we will tell you plainly rather than selling an interior fix that treats the symptom.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Basement remodel in New Richmond? A 19th-century riverfront cellar needs honesty. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'Century-old cellars on riverfront ground are the least promising combination for finishing — low height, stone construction and water close by. Some can be improved substantially as dry, well-lit storage, which serves these houses genuinely well. Where finished space is the goal, the honest question is usually whether the same budget does more upstairs.',
    ],
    localFaqs: [
      {
        q: 'Can a riverfront cellar be finished?',
        a: 'Rarely well. Low height, stone construction and water close by is the least promising combination, and we would rather say so than take the work.',
      },
      {
        q: 'What is worth doing instead?',
        a: 'Excellent dry storage — sealed floor, dehumidification, good lighting and shelving off the walls. Or putting the same budget into the floors above.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Basement remodel in Amelia? Debris comes back up the stairs, which is the slow part. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'Every scrap of what comes out of a basement — old panelling, damp carpet, whatever has accumulated for thirty years — has to travel up a stair by hand. It is the least visible labour in the job and a real part of the cost. It leaves with our crew as it is generated rather than accumulating in your drive, and where the volume warrants a skip we arrange placement in advance.',
    ],
    localFaqs: [
      {
        q: 'Who clears out the basement?',
        a: 'We remove construction debris and the old finishes. Personal belongings need clearing first — that is the one thing we would ask you to handle before we start.',
      },
      {
        q: 'Is there a skip outside for weeks?',
        a: 'Only where the volume warrants it, with placement arranged in advance. Most of it goes in our vehicles as it is generated.',
      },
    ],
  },

  batavia: {
    intro:
      'Basement remodel in Batavia? The East Fork sets the moisture question. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The village core sits on lower ground near the East Fork with older foundations; the newer development is on higher ground with modern poured walls. Those are genuinely different propositions, and which you have decides whether this is a straightforward finishing project or one that starts with drainage. We assess the specific property rather than the town.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which part of Batavia we are in?',
        a: 'Considerably — the village core sits lower with older foundations, the newer development higher with modern poured walls. Those are different propositions entirely.',
      },
      {
        q: 'How do you tell?',
        a: 'The foundation type, the evidence on the walls and floor, and the water history. An hour on site settles it.',
      },
    ],
  },

  owensville: {
    intro:
      'Basement remodel in Owensville? Clear the perimeter before the survey. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we travel to reach the eastern villages, one visit should settle it — and the single most useful preparation is clearing storage away from the perimeter walls so we can actually see them. Staining, efflorescence, previous patch repairs and the wall-floor joint are all hidden behind shelving in most basements, and they are exactly what the assessment depends on.',
    ],
    localFaqs: [
      {
        q: 'What should we do before you visit?',
        a: 'Clear storage away from the perimeter walls so we can see them. Staining, efflorescence and the wall-floor joint are what the assessment depends on and they are usually hidden.',
      },
      {
        q: 'What else is useful to know?',
        a: 'Any history of water, where the sump discharges, and whether the house is on septic. Those three shape the answer more than anything else.',
      },
    ],
  },

  goshen: {
    intro:
      'Basement remodel in Goshen? On a rural property the sump discharge matters. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'A sump that discharges a few feet from the foundation is returning the water it just removed, and on rural properties without a storm connection that is a common arrangement. Running the discharge properly away from the house — and to somewhere it will not simply run back — is frequently the cheapest and most effective basement work available. We check it before quoting anything interior.',
    ],
    localFaqs: [
      {
        q: 'Where should the sump discharge?',
        a: 'Well away from the foundation and to somewhere it will not run back. A discharge a few feet from the house is returning the water it just removed, which is common on rural properties.',
      },
      {
        q: 'Is that expensive to fix?',
        a: 'Frequently one of the cheapest and most effective things we do. We check it before quoting anything interior, because occasionally it is most of the problem.',
      },
    ],
  },

  moscow: {
    intro:
      'Basement remodel in Moscow? On this ground we usually recommend against it. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'A finished basement in a low riverside village puts a substantial amount of money in the most exposed part of the house. In most of these properties we would recommend spending it upstairs instead — and where a household wants the space regardless, building it to be dried and salvaged rather than replaced. That advice costs us the larger job and it is the right one.',
    ],
    localFaqs: [
      {
        q: 'Should we finish a basement here?',
        a: 'In most of these properties we would recommend spending upstairs instead — a finished basement puts a lot of money in the most exposed part of the house.',
      },
      {
        q: 'What if we want it anyway?',
        a: 'Then it is built to be dried and salvaged — inorganic materials, services high, nothing that holds water. A different specification and the only honest one here.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Basement remodel in Newtonsville? Here is what keeps a five-week job on programme. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the northeastern villages, we schedule this as an uninterrupted block. What keeps it there: the basement cleared of belongings before we start, a clear route down for materials, parking, and all decisions made before framing begins. The inspection is booked into the programme rather than treated as an interruption, and nothing closes before it passes.',
    ],
    localFaqs: [
      {
        q: 'What keeps the schedule on track?',
        a: 'The basement cleared before we start, a clear route down, parking, and all decisions made before framing. The inspection is booked into the programme rather than treated as an interruption.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, scheduled as an uninterrupted block rather than fitted around closer work. That is why the dates we write down hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Basement remodel in Williamsburg? A 19th-century core house needs the foundation assessed. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'Houses in the old core have stone or early masonry foundations on ground near the East Fork, which is the combination that most warrants a proper look before anything is planned. Height, structural condition and moisture all get established. The rural properties beyond the core vary widely and are assessed individually rather than assumed to match.',
    ],
    localFaqs: [
      {
        q: 'What gets checked in an old core house?',
        a: 'Ceiling height, the structural condition of the stone or early masonry, and moisture. All three before anything is planned, because any of them can end the project.',
      },
      {
        q: 'Are the rural properties different?',
        a: 'They vary widely, so we assess each individually rather than assuming they match the village core.',
      },
    ],
  },

  bethel: {
    intro:
      'Basement remodel in Bethel? Function before finish, on any budget. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'On a limited budget the order is clear. Moisture resolved. A correct wall assembly. Adequate lighting and heat. Only then finishes. That sequence produces a basement that works and lasts, and every step is compatible with modest materials. Reversing it — a good-looking room over an unresolved wall — is the version that has to be stripped out in four years.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget cover first?',
        a: 'Moisture resolved, a correct wall assembly, adequate lighting and heat. Then finishes. Every step is compatible with modest materials and the order is not negotiable.',
      },
      {
        q: 'How much should we spend here?',
        a: 'Enough to do the invisible half properly, and modest materials above it. That combination lasts; the reverse gets stripped out.',
      },
    ],
  },

  ross: {
    intro:
      'Basement remodel in Ross? Near the Great Miami, the water table is the question. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Proximity to the Great Miami makes the water table the variable that decides everything. Properties well back on higher ground are frequently straightforward; those on the bottomland frequently are not. It is a property-by-property question rather than a neighbourhood one, and it is answered by evidence and history rather than by assumption.',
    ],
    localFaqs: [
      {
        q: 'Does being near the river rule it out?',
        a: 'Not automatically — properties well back on higher ground are frequently straightforward. It is a property-by-property question answered by evidence and history rather than assumption.',
      },
      {
        q: 'What evidence do you look for?',
        a: 'Staining at the wall-floor joint, efflorescence, previous patch repairs, how the sump behaves, and what the household has seen over the years.',
      },
    ],
  },

  fairfield: {
    intro:
      'Basement remodel in Fairfield? Keep the dehumidifier serviced and it stays dry. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'A finished basement stays comfortable because of things that need occasional attention — the dehumidifier drain kept clear, the sump tested before spring, the discharge line checked for a blockage or a frozen section, and the gutters doing their job outside. None of it is demanding and all of it prevents the slow problems. We hand that list over rather than assuming it is obvious.',
    ],
    localFaqs: [
      {
        q: 'What maintenance does a finished basement need?',
        a: 'The dehumidifier drain kept clear, the sump tested before spring, the discharge checked for blockage or freezing, and gutters doing their job outside. None of it demanding.',
      },
      {
        q: 'How often should the sump be tested?',
        a: 'Before every wet season at minimum. Pour a bucket in and watch it cycle — it takes two minutes and it is the thing protecting everything down there.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Basement remodel in Beckett Ridge? No HOA approval needed for interior work. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'An interior basement is not an association’s concern — they govern what is visible from outside. The one intersection is an egress window, since cutting a foundation opening and adding a window well changes the exterior. Township permitting applies with a rough-in inspection, which we file. Otherwise this housing is predictable: poured walls, good height, frequently a rough-in already there.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval?',
        a: 'Not for interior work. The one intersection is an egress window, since a foundation opening and window well change the exterior — worth raising early.',
      },
      {
        q: 'Is this housing straightforward?',
        a: 'Predictable — poured walls in good condition, good height and frequently a bathroom rough-in already in the slab.',
      },
    ],
  },

  wetherington: {
    intro:
      'Basement remodel in Wetherington? A large basement wants zoning and a bathroom. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Basements under houses this size run to a substantial footprint, and the two decisions that matter most are zoning it into rooms that get used rather than one open space, and putting a proper bathroom in. Without a bathroom nobody stays down there for long; without zoning it becomes an under-used hall. Both are planning decisions rather than budget ones.',
    ],
    localFaqs: [
      {
        q: 'What matters most in a large basement?',
        a: 'Zoning it into rooms that get used rather than one open space, and a proper bathroom. Without the bathroom nobody stays down there; without zoning it becomes an under-used hall.',
      },
      {
        q: 'Is a wet bar worth it?',
        a: 'Where the space is genuinely used for entertaining, yes — and it needs a drain, which is easier decided now than added later.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Basement remodel in Hamilton? German Village foundations deserve a proper look. Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'The historic districts combine 19th-century stone foundations with proximity to the Great Miami — the pairing that most warrants assessment before anything is planned. Height, structural condition and moisture all get established, and where the foundation needs repointing that is masonry work coming first. Newer parts of the city are a different and usually simpler proposition.',
    ],
    localFaqs: [
      {
        q: 'What is assessed in a historic district house?',
        a: 'Ceiling height, the structural condition of the stone foundation, and moisture. Where the masonry needs repointing that comes first — building a wall in front of it makes the repair worse.',
      },
      {
        q: 'Is the whole city the same?',
        a: 'No. The historic districts near the river are a different proposition from the newer parts, and we assess the specific property.',
      },
    ],
  },

  millville: {
    intro:
      'Basement remodel in Millville? A rural property means checking outside first. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'On rural lots the drainage picture is the whole site rather than the foundation — where the land falls, where downspouts go, whether a swale exists, and where the sump discharges to. Frequently the most effective basement work is outside and costs a fraction of interior drainage. We look at the site before recommending anything below ground.',
    ],
    localFaqs: [
      {
        q: 'Should we look outside first?',
        a: 'On a rural lot, yes — where the land falls, downspout discharge, any swale, and where the sump goes. That work is frequently more effective and far cheaper than interior drainage.',
      },
      {
        q: 'Do you do the exterior work?',
        a: 'Grading and downspout work, yes. Where a major site drainage scheme is needed we say so plainly rather than selling an interior fix.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Basement remodel in New Miami? Mill-era cellars on river ground are marginal. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'Low riverside ground and mill-era cottage construction is a combination where finishing frequently is not the right answer. Height is usually limited and moisture is a genuine variable. Where a household wants the basement improved, a well-executed utility space with a sealed floor, dehumidification and proper lighting serves these houses better and costs a fraction.',
    ],
    localFaqs: [
      {
        q: 'Can these cellars be finished?',
        a: 'Frequently not well — limited height and real moisture exposure. We would rather recommend a properly executed utility space than build finished rooms that will not hold.',
      },
      {
        q: 'What does that involve?',
        a: 'A sealed floor, dehumidification, proper lighting and shelving off the walls. It serves these houses genuinely well at a fraction of the cost.',
      },
    ],
  },

  monroe: {
    intro:
      'Basement remodel in Monroe? Working from home? Only the first week is loud. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'The noisy stretch of a basement project is demolition and any concrete work at the start; framing, drywall and finishing are comparatively quiet, and all of it is a floor below you. Tell us at booking if you work from home and the loud portion is scheduled around your commitments. Monroe straddles two counties, so we confirm which jurisdiction permits and inspects before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Can we work from home during it?',
        a: 'Mostly — demolition and any concrete work at the start are loud, the rest comparatively quiet and a floor below you. Tell us at booking and the loud portion is scheduled around you.',
      },
      {
        q: 'Which county permits our job?',
        a: 'It depends which side of the line the property sits on, since Monroe straddles Butler and Warren. We confirm before scheduling.',
      },
    ],
  },

  landen: {
    intro:
      'Basement remodel in Landen? In an attached home, check what the basement shares. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, the basement may share a party wall, a drainage system or a common sump. That affects what can be done to the wall, how it is insulated, and occasionally whether association approval is needed. It is straightforward to establish and it is not something to discover once framing has started, so we check it at survey.',
    ],
    localFaqs: [
      {
        q: 'Does an attached home change the basement work?',
        a: 'It can — a shared party wall, drainage system or common sump all affect what can be done and how it is insulated. We establish it at survey rather than mid-job.',
      },
      {
        q: 'Would we need association approval?',
        a: 'For interior work usually not, but where drainage or a shared wall is involved it is worth checking. We confirm what your association requires.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Basement remodel in Loveland Park? Mid-century basements are usually straightforward. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Poured or block walls in reasonable condition, workable height and mechanicals grouped at one end make these among the easier basements to plan. The variable worth attention is proximity to the Little Miami on the lower-lying streets, where moisture assessment is a real step rather than a formality. The usual upgrade is electrical, since these were wired for a workbench.',
    ],
    localFaqs: [
      {
        q: 'Are these basements straightforward?',
        a: 'Generally — sound walls, workable height and mechanicals grouped together. On the lower-lying streets nearer the Little Miami, moisture assessment is a genuine step.',
      },
      {
        q: 'What usually needs upgrading?',
        a: 'The electrical. These basements were wired for a workbench and a washing machine, not for finished rooms.',
      },
    ],
  },

  maineville: {
    intro:
      'Basement remodel in Maineville? Build for the household you will have. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'A basement changes use more than any other room, and a growing town means growing households. Building for that means a bathroom roughed in, egress in at least one room so it can become a bedroom later, partitions that can move without touching services, and circuits distributed rather than concentrated. Each is inexpensive now and each saves opening finished walls later.',
    ],
    localFaqs: [
      {
        q: 'How do we build for future changes?',
        a: 'A bathroom roughed in, egress in at least one room so it can become a bedroom, partitions that can move without touching services, and circuits distributed rather than concentrated.',
      },
      {
        q: 'Is egress worth adding if we do not need a bedroom?',
        a: 'It is the single thing that most expands what the space can become later, and cutting a foundation opening afterwards is considerably more disruptive than doing it now.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Basement remodel in Pleasant Plain? Rural drainage is usually the real project. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'On rural properties without a storm connection, where the sump discharges and how the land falls around the house decide whether a basement stays dry — far more than anything done inside. Frequently the effective work is outside and costs a fraction. We schedule the job as a block because of the distance, and the site assessment comes first regardless.',
    ],
    localFaqs: [
      {
        q: 'Where should the sump discharge on a rural property?',
        a: 'Well away from the house and to somewhere it will not run back. Without a storm connection that is a design question, and getting it wrong returns the water you removed.',
      },
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it as an uninterrupted block. The site assessment comes first regardless of distance.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Basement remodel in South Lebanon? In a newer home, check the builder warranty. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'Plenty of homes here remain inside a builder warranty, and finishing a basement can affect what it covers — particularly anything touching the foundation, drainage or the sump. Worth reading before commissioning, and worth asking whether a moisture issue you are trying to solve is actually theirs to fix. The upside is that these basements are frequently built ready to finish.',
    ],
    localFaqs: [
      {
        q: 'Will finishing affect our builder warranty?',
        a: 'It can, particularly anything touching the foundation, drainage or the sump. Worth reading the terms first — and if there is a moisture defect, it may be theirs to fix.',
      },
      {
        q: 'Are newer basements ready to finish?',
        a: 'Frequently — poured walls, good height, a working sump and often egress and a rough-in already there. It makes for a predictable project.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Basement remodel in Lawrenceburg? Behind a levee is still low ground. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A levee protects against the river; it does not lower the water table underneath a basement. Ground water on this low ground is a separate question from flood protection, and it is the one that decides whether finishing is sensible. That is worth being clear about, because people reasonably assume the levee settles it. Indiana permitting applies, confirmed before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Does the levee mean the basement is safe to finish?',
        a: 'It protects against the river but does not lower the water table underneath. Ground water is a separate question and it is the one that decides whether finishing is sensible.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Permitting and the rough-in inspection run under Indiana rules rather than Ohio, which we confirm before a start date is agreed.',
      },
    ],
  },

  greendale: {
    intro:
      'Basement remodel in Greendale? On this hillside, many lower levels are walkouts. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Houses stepped into this hill frequently have a lower level at grade on one side — natural light, an existing door and egress already satisfied, which is a far better proposition than a full basement. The uphill wall still takes whatever the slope sheds toward it, so that side gets the attention while the rest is comparatively straightforward. Indiana permitting applies.',
    ],
    localFaqs: [
      {
        q: 'Is a walkout better to finish?',
        a: 'Considerably — natural light, an existing door and satisfied egress. The uphill wall still takes the ground water, so that side gets the attention.',
      },
      {
        q: 'Does Indiana permitting differ?',
        a: 'The process differs from Ohio and we confirm requirements before scheduling, including the rough-in inspection before walls close.',
      },
    ],
  },

  aurora: {
    intro:
      'Basement remodel in Aurora? Here is what we test before the final invoice. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'Before the balance is due we walk it with you: every circuit and outlet tested, the sump cycled with its discharge confirmed running well away from the house, any bathroom filled and drained with the ejector cycled, the HVAC balanced so the new rooms actually get air, every access panel opened, and the dehumidifier drain confirmed clear. Anything on that list gets put right before the invoice.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'Every circuit and outlet tested, the sump cycled with its discharge confirmed, any bathroom filled and drained with the ejector cycled, the HVAC balanced, access panels opened and the dehumidifier drain checked.',
      },
      {
        q: 'What if a problem appears later?',
        a: 'Tell us and we come back. Where we did the moisture work, that is covered too — which is why we quote it as part of the job rather than leaving it to someone else.',
      },
    ],
  },
};
