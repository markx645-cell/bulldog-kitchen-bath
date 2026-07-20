import type { LocationServiceCopy } from '@/components/LocationServicePage';

/**
 * Per-neighborhood copy for /walk-in-showers/[location].
 *
 * Written from a deliberately different angle to
 * content/location-copy/bathroom-remodel.ts. Both services cover the same 170
 * neighborhoods, so restating the same housing-era observations would put two
 * near-identical pages on the same site for the same place. These entries lead
 * on what is specific to a shower: converting a tub nobody uses, getting a
 * cast-iron tub out of a tight house, where the drain has to move, accessibility
 * and staying in the home, and what a one-day install means in a house with one
 * bathroom.
 *
 * Nothing here is templated. If it can't be written specifically for the place,
 * it doesn't get published — generateStaticParams is gated on this file.
 */
export const walkInShowersCopy: Record<string, LocationServiceCopy> = {
  // ---------- Cohort 1 · West-side riverfront, Price Hill, basin & near hilltops ----------

  sedamsville: {
    intro:
      'Walk-in shower in Sedamsville? Getting a cast-iron tub out of a hillside house is half the job — and we plan it before we quote. Call (513) 657-3750.',
    relevance: [
      'Sedamsville (ZIP 45204) sits on the west-side hillside above River Road between Riverside and Sayler Park, with much of its housing climbing the slope and dating to the late 1800s and early 1900s.',
      'The bathrooms in these houses are usually upstairs, reached by a narrow original staircase with a turn in it — and the tub you want replaced is very likely cast iron, weighing several hundred pounds. Getting it out is a genuine planning question rather than an afterthought, and where the stair will not take it whole, the tub is cut down in place and removed in sections. We establish which on the site visit, because that decision belongs in the price rather than in a conversation on the morning of the install.',
    ],
    localFaqs: [
      {
        q: 'How do you get an old cast-iron tub down these stairs?',
        a: 'Usually by cutting it down in place and removing it in pieces, which is safer for the tub, the stair and the plaster than trying to carry it whole. We look at the stair on the site visit and price the method we will actually use.',
      },
      {
        q: 'Will the walls and trim survive the removal?',
        a: 'They should, and protecting them is part of the work rather than an extra. In a house of this age the original trim and plaster around a stair are worth more than the time it takes to shield them properly.',
      },
    ],
  },

  'sayler-park': {
    intro:
      'Walk-in shower in Sayler Park? In these village-era frame houses the original bathroom is small — a shower is what makes it usable. Call (513) 657-3750.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood along the Ohio River, its own village — Home City — until annexation in the early 1900s, with tree-lined streets of Victorian and early-1900s frame houses.',
      'Bathrooms in houses of this vintage were fitted into whatever space was left over, and they are small. A standard tub eats five feet of a room that may only be seven feet long, and most of that length is used for a few inches of standing water. Replacing it with a properly designed shower gives back floor area you can actually stand and turn in — which in a room this size is the difference between cramped and comfortable, without moving a single wall.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is tiny — will a shower really help?',
        a: 'It usually helps more than anything else you could do short of moving a wall. A shower can be built shorter than a tub while still being comfortable, and the floor area that frees up is what makes a small room workable.',
      },
      {
        q: 'Should we keep a tub somewhere in the house?',
        a: 'If it is your only bathroom and you have young children or plan to sell soon, we will usually say keep one. We would rather tell you that than sell you a conversion you regret.',
      },
    ],
  },

  riverside: {
    intro:
      'Walk-in shower in Riverside? On this low river ground the drain position decides the job — we measure it before quoting. Call (513) 657-3750.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip along River Road and US-50 between Sedamsville and Sayler Park, with the hillside on one side and the Ohio River on the other, and much of its housing on low bottomland.',
      'A tub drain and a shower drain do not sit in the same place, so a conversion nearly always means moving the waste connection — and on low ground the fall available between that drain and the sewer is limited to begin with. Get it wrong and you have a shower that drains slowly for the rest of its life. We take the measurement before the design rather than discovering the constraint once the floor is open.',
    ],
    localFaqs: [
      {
        q: 'Does the drain have to move when a tub becomes a shower?',
        a: 'Almost always, because a tub drains at one end and a shower drains from the centre or a linear channel. How far it moves and how much fall is available is what we measure first.',
      },
      {
        q: 'Will a shower drain properly on ground this low?',
        a: 'Yes, when the fall is confirmed at design stage. Where it is genuinely tight we will tell you and specify accordingly rather than building something that will always drain slowly.',
      },
    ],
  },

  'east-price-hill': {
    intro:
      'Walk-in shower in East Price Hill? In a two-family with shared walls, a one-day install is worth more than it sounds. Call (513) 657-3750.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats around Warsaw Avenue and the Incline District, densely built with early-1900s two- and three-story frame homes and brick two-families on tight lots.',
      'In a building where someone else lives on the other side of the wall or the floor, the length of the disruption matters as much as the result. Most of our shower installs are done in a single day, which means one day of noise and one day of a shut-off riser rather than a week of both. Where the bathroom sits over another unit, the waterproofing is also not negotiable — a slow leak here becomes someone else’s ceiling.',
    ],
    localFaqs: [
      {
        q: 'We are in a two-family — how long is the water off?',
        a: 'Typically part of a single day. Most installs here are completed start to finish in one day because everything is staged before we begin, so the shut-off window is short and we can tell your neighbour when it is.',
      },
      {
        q: 'Our bathroom is above the downstairs unit — what protects them?',
        a: 'A bonded waterproofing membrane carried up the walls and detailed at the seams, and a pan tested before tiling. Over an occupied unit that testing step is the one that matters most.',
      },
    ],
  },

  'west-price-hill': {
    intro:
      'Walk-in shower in West Price Hill? People stay in these houses — so we build the shower for the next twenty years, not the next five. Call (513) 657-3750.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes.',
      'This is a neighbourhood where households stay put, and stepping over a tub wall is the thing that eventually forces people out of a house they had no wish to leave. A low or curbless entry, blocking behind the tile so grab bars can be added whenever they are wanted, a built-in bench and a handheld on a slide bar cost very little while the wall is open — and none of it has to look like a hospital fitting. Done at design stage it simply reads as a well-built shower.',
    ],
    localFaqs: [
      {
        q: 'Can we make the shower accessible without it looking clinical?',
        a: 'Yes, and that is the whole point of deciding it now. A curbless entry, a built-in bench and concealed blocking read as a good shower, not an adapted one. Grab bars can then be added later wherever they are actually needed.',
      },
      {
        q: 'Is blocking worth adding if we do not need bars yet?',
        a: 'It costs very little while the wall is open and a great deal afterwards, because retrofitting means opening finished tile. In this housing we recommend it almost every time.',
      },
    ],
  },

  'lower-price-hill': {
    intro:
      'Walk-in shower in Lower Price Hill? In an 1800s rowhouse bathroom, how the shower is enclosed decides whether the room works. Call (513) 657-3750.',
    relevance: [
      'Lower Price Hill (ZIP 45204) sits at the foot of Price Hill in the Mill Creek valley, holding one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses.',
      'A rowhouse is deep and narrow, and the bathroom carved out of it later is usually narrower still. In a room that shape the enclosure is the decision that matters: a framed door swinging into the floor space can make the room unusable, while a fixed glass panel with a walk-in return keeps the sightline open and takes no floor at all. We work that out with you at design stage, because it is far more consequential here than the choice of tile.',
    ],
    localFaqs: [
      {
        q: 'Door or open glass panel in a narrow rowhouse bathroom?',
        a: 'In most rooms this shape, a fixed panel with a walk-in return. A hinged door needs floor space to swing into, and that is exactly what a narrow room does not have.',
      },
      {
        q: 'Will an open shower let water out into the room?',
        a: 'Not when the panel length and the floor falls are set correctly for the room — that is the design work. Where a room genuinely cannot take an open return, we will tell you and specify a door instead.',
      },
    ],
  },

  'over-the-rhine': {
    intro:
      'Walk-in shower in Over-the-Rhine? In a converted building the approvals and the stack matter as much as the design. Call (513) 657-3750.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country, block after block of 1850s–1880s brick buildings around Vine Street and Findlay Market, many now converted to condominiums and apartments.',
      'In a converted building the work starts before the tools do. Most associations require approval for anything touching a common stack or a waterproofing assembly, and building access, elevator use and water shut-off windows are all scheduled rather than assumed. We handle that paperwork and those bookings as part of the job — it is the difference between an install that happens on the promised day and one that gets turned away at the door.',
    ],
    localFaqs: [
      {
        q: 'Do we need condo association approval for a shower?',
        a: 'In most OTR buildings, yes — anything touching a shared stack or the waterproofing assembly usually needs sign-off. We prepare what the board asks for and schedule around their access and shut-off rules.',
      },
      {
        q: 'Can you work with a shared stack?',
        a: 'Yes, and it is why the shut-off window gets booked in advance. Where a shared riser has to be isolated we agree the timing with the building first so the whole line is not down unexpectedly.',
      },
    ],
  },

  downtown: {
    intro:
      'Walk-in shower in Downtown Cincinnati? In a tower, logistics decide the schedule — loading dock, elevator, shut-off window. Call (513) 657-3750.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condominiums and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.',
      'A high-rise install is a logistics exercise before it is a construction one. Materials come through a loading dock in a booked window, up a protected freight elevator, and the riser serving your line is isolated at a time the building will agree to — often outside normal hours. None of that is difficult, but all of it has to be arranged in advance. It is also why the one-day install matters more here than almost anywhere: one booking, not five.',
    ],
    localFaqs: [
      {
        q: 'How do you handle building access in a downtown tower?',
        a: 'By arranging it before the start date — dock window, certificate of insurance, freight elevator booking and an agreed shut-off time. We deal with building management directly rather than leaving it to you.',
      },
      {
        q: 'Can the work be done outside business hours?',
        a: 'Where the building requires it, yes. Many downtown buildings restrict noisy work and riser shut-offs to set hours, and we schedule to those rules rather than against them.',
      },
    ],
  },

  'west-end': {
    intro:
      'Walk-in shower in the West End? What the conversion costs depends on the tub you have now — we look before quoting. Call (513) 657-3750.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, holding historic Italianate rowhouses and brick homes alongside mid-century housing and newer development.',
      'That range means the tub coming out could be an 1890s cast-iron on feet, a 1950s steel alcove unit or a 1990s acrylic surround — and each is a different removal, a different substrate behind it and a different drain arrangement underneath. It is why a quote given over the phone for this neighbourhood is a guess. We look at what is actually there, and the number we give you afterwards is the number you pay.',
    ],
    localFaqs: [
      {
        q: 'Why can you not quote a shower conversion over the phone?',
        a: 'Because in the West End the house next door can be sixty years older. What the tub is made of, what is behind it and where the drain sits all change the work — and a fixed price has to be based on the real thing.',
      },
      {
        q: 'What is behind an old tub surround?',
        a: 'Often a mortar bed over wire lath in the older houses, sometimes a failed board in the newer ones, and frequently a subfloor that has taken water at the tub edge. We check before pricing, not after.',
      },
    ],
  },

  'mount-adams': {
    intro:
      'Walk-in shower in Mount Adams? Steep streets and narrow houses make access the first question, not the last. Call (513) 657-3750.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for steep grades, narrow streets and tightly packed 19th-century rowhouses and townhomes.',
      'On the hill, parking a van within reach of the door is a real constraint, and the houses are tall and narrow with stairs to match. A shower base and glass panel have to come up those stairs and an old cast-iron tub has to come down them. We walk the approach on the site visit and plan the route, the parking and the delivery window before we commit to a date — which is why we hold the dates we give.',
    ],
    localFaqs: [
      {
        q: 'Can you even get materials into a Mount Adams townhouse?',
        a: 'Yes, with planning. We walk the approach and the stair on the site visit, then book parking and a delivery window to match. It is the step that gets skipped by crews who do not work the hill regularly.',
      },
      {
        q: 'Will the old tub fit back down the stairs?',
        a: 'Frequently not in one piece, so it gets cut down and removed in sections. That is normal here and it is in the quote rather than sprung on you.',
      },
    ],
  },

  'mount-auburn': {
    intro:
      'Walk-in shower in Mount Auburn? In a subdivided Victorian, the spec has to survive tenants as well as time. Call (513) 657-3750.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Where a shower serves a tenancy rather than a household, the right specification changes. Solid-brass valve bodies rather than plastic cartridges, a fully bonded waterproofing assembly, porcelain rather than soft stone, and a fixed glass panel instead of a track that collects grime — none of them the cheapest option, all of them cheaper across five tenancies than replacing what failed. And a one-day install fits the gap between tenants without losing a month of rent.',
    ],
    localFaqs: [
      {
        q: 'Can the install fit between tenancies?',
        a: 'That is much of what we do here. Materials are staged before we start so the on-site window is short and predictable, and you get firm dates before you commit to a turnover gap.',
      },
      {
        q: 'What actually lasts in a rental shower?',
        a: 'A bonded waterproofing assembly, solid valve bodies, porcelain surfaces and a fixed panel rather than sliding tracks. The saving shows up by about the third tenancy.',
      },
    ],
  },

  clifton: {
    intro:
      'Walk-in shower in Clifton? These Gaslight-era houses have bathrooms big enough for a genuinely generous shower. Call (513) 657-3750.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for the Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Unlike most of the older housing we work in, the bathrooms in these big Victorians are frequently generous — and that changes what is worth doing. There is often room for a shower with a proper bench, a niche that is not an afterthought, two outlets, and glass long enough to walk in without a door. The design question here is restraint rather than fit: getting something that reads as belonging in a period house rather than imported from a hotel.',
    ],
    localFaqs: [
      {
        q: 'Will a large modern shower look wrong in a Clifton Victorian?',
        a: 'It can, and we will say so before you commit. Tile scale, fixture profile and metal finish do most of the work — a shower can be entirely modern in function and still sit correctly in a period house.',
      },
      {
        q: 'Is there room for a double shower in these houses?',
        a: 'More often than in most of our area, yes. Where the original bathroom is large we will show you what the room can genuinely take rather than defaulting to a standard alcove.',
      },
    ],
  },

  // ---------- Cohort 2 · Uptown, east-side hilltops & Madison Road corridor ----------

  corryville: {
    intro:
      'Walk-in shower in Corryville? Near campus the install has to land in the gap between leases — we schedule to that. Call (513) 657-3750.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments and student rentals.',
      'Property here runs on an academic calendar, and the usable window for work is the short stretch between one lease ending and the next beginning. That is a hard deadline rather than a preference, so we order and stage everything in advance and give you the on-site date in writing before you commit to a turnover. A one-day install is what makes the window realistic in the first place.',
    ],
    localFaqs: [
      {
        q: 'Can you install between leases in August?',
        a: 'That is the busiest window we work here, so book it early. Materials are staged ahead of the date, which is what lets a one-day install fit a turnover gap reliably.',
      },
      {
        q: 'Can several units be done at once?',
        a: 'Yes, and it is usually cheaper per unit — one mobilisation, one delivery, one permit process where required. Tell us the whole building and we will sequence it.',
      },
    ],
  },

  northside: {
    intro:
      'Walk-in shower in Northside? A neighborhood with this much character deserves better than an off-the-shelf surround. Call (513) 657-3750.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'People here tend not to want the standard white acrylic box, and they do not have to have it. The same one-day install can be done in a tile system with a considered colour, a matt black or unlacquered brass valve, a linear drain and a fixed glass panel — none of which adds a week to the schedule. The constraint in these houses is the size of the room, not the ambition of the design, and we will show you what actually fits before you fall for something that does not.',
    ],
    localFaqs: [
      {
        q: 'Do we have to have a plain white shower?',
        a: 'Not at all. Tile, colour, drain style and fixture finish are all open, and none of them changes the install time. What limits the design here is the size of the room, which we measure before showing you options.',
      },
      {
        q: 'Can you match something we have seen elsewhere?',
        a: 'Usually, or get honestly close. Bring the picture to the site visit and we will tell you which parts of it your room can carry and which parts it cannot.',
      },
    ],
  },

  'college-hill': {
    intro:
      'Walk-in shower in College Hill? A big 1910s bathroom and a 1955 alcove are two different conversions. Call (513) 657-3750.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, mixing large early-1900s homes with mid-century houses and a revitalising business district.',
      'Those two housing eras produce genuinely different jobs. In the big early-1900s houses the bathroom is often large enough that the shower can go somewhere new entirely, which means a real design conversation about where it best sits. In the mid-century houses the tub is in a five-foot alcove between three walls, and the conversion is a precise fit into that opening. Same service, different work — and the site visit is where we establish which one you are asking for.',
    ],
    localFaqs: [
      {
        q: 'Does a shower have to go where the tub was?',
        a: 'In a mid-century alcove, effectively yes — the opening defines it. In the larger early-1900s houses there is often a genuine choice, and moving it can make the whole room work better.',
      },
      {
        q: 'What fits in a standard five-foot alcove?',
        a: 'More than people expect: a full base, a bench, a niche and a fixed glass panel all fit a 60-inch opening. The gain over a tub is floor space and a step you are not climbing over.',
      },
    ],
  },

  'walnut-hills': {
    intro:
      'Walk-in shower in Walnut Hills? If you have an original clawfoot tub, we will tell you honestly whether to keep it. Call (513) 657-3750.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'A lot of these houses still have their original cast-iron clawfoot tub, and it is worth pausing before it goes. A tub like that is part of what makes the house what it is, it can be refinished, and in a large bathroom there is frequently room for both it and a proper walk-in shower. Where the room genuinely only takes one, we will say so — but we would rather have that conversation than remove something irreplaceable by default.',
    ],
    localFaqs: [
      {
        q: 'Should we keep the original clawfoot tub?',
        a: 'If the room can take both, usually yes — it is original to the house and can be refinished. Where there is only space for one fixture we will give you a straight recommendation based on how you actually live.',
      },
      {
        q: 'Can a walk-in shower and a clawfoot share a bathroom?',
        a: 'In the larger houses here, often. It needs the plumbing mapped and the layout drawn properly, but it is one of the better outcomes available in a period house this size.',
      },
    ],
  },

  'east-walnut-hills': {
    intro:
      'Walk-in shower in East Walnut Hills? The original woodwork on the way to the bathroom is part of what we are protecting. Call (513) 657-3750.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings and tree-lined streets.',
      'In a house like this the bathroom is at the end of a route that runs across original floors, past original stair joinery and under original plaster — and demolition debris and a cast-iron tub have to travel back along it. Floor protection, a dust barrier at the door and a planned removal route are not extras here, they are the reason the rest of the house looks the same at the end of the day as it did at the start.',
    ],
    localFaqs: [
      {
        q: 'How do you protect the rest of the house during an install?',
        a: 'A planned route with hard floor protection, a sealed dust barrier at the bathroom door and covered handrails. In houses with original floors and joinery, that setup is part of the job rather than an add-on.',
      },
      {
        q: 'How much dust does a shower install make?',
        a: 'Less than a full remodel, but tile and substrate removal still generates it. Contained properly it stays in the bathroom, which is the whole point of doing the barrier first.',
      },
    ],
  },

  avondale: {
    intro:
      'Walk-in shower in Avondale? If the pressure is poor, a new showerhead will not fix it — the supply line will. Call (513) 657-3750.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'Poor shower pressure in housing this old is usually not the fixture. Galvanised supply pipe corrodes inward over decades until the bore is a fraction of what it was, so a beautiful new valve gets fed by a pipe with the effective diameter of a straw. Replacing the run serving the bathroom while the wall is already open is inexpensive; discovering the problem after the tile is finished is not. We check the supply before specifying, not after.',
    ],
    localFaqs: [
      {
        q: 'Will a new shower fix our weak water pressure?',
        a: 'Only if the supply pipe is the problem and gets replaced too. In houses this age the galvanised line has usually closed up with corrosion, and no showerhead compensates for that.',
      },
      {
        q: 'Is repiping the whole house necessary?',
        a: 'Usually not. Replacing the run that serves the bathroom while the wall is open solves the shower, and we will tell you plainly if the rest genuinely needs doing rather than selling you the bigger job.',
      },
    ],
  },

  'hyde-park': {
    intro:
      'Walk-in shower in Hyde Park? At this level the detailing is what separates a good shower from an expensive one. Call (513) 657-3750.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s Tudors, colonials and brick foursquares on established, tree-shaded streets.',
      'When the budget is not the constraint, the difference between a good shower and an expensive one is detailing. Mitred tile edges instead of trim strips, a niche set out to full tiles so it has no awkward cuts, a linear drain aligned to the tile grid, and glass with the right hardware and a genuine seal. None of it announces itself, all of it is what you notice every day for twenty years — and it is where we would rather you spent than on a larger fixture list.',
    ],
    localFaqs: [
      {
        q: 'Where does the money actually show in a high-end shower?',
        a: 'In the edges and the setting out — mitred corners, a niche that lands on full tiles, a drain aligned to the grid, properly sealed glass. Those are what read as quality, far more than the number of fixtures.',
      },
      {
        q: 'Is a steam shower worth it in a house like this?',
        a: 'Only if you will use it. It needs a sealed ceiling, a vapour-tight enclosure and a generator with somewhere to live, so we will be honest about the commitment before you sign up to it.',
      },
    ],
  },

  oakley: {
    intro:
      'Walk-in shower in Oakley? Half these bungalows have a window in the tub wall — that is the detail to get right. Call (513) 657-3750.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'Bungalow bathrooms of this era very often have a window set in the wall above the tub, and converting to a shower puts that window inside a wet enclosure. It has to be dealt with deliberately: waterproofed into the assembly with a tiled, sloped sill, or fitted with an obscured glazed unit, or in some cases reduced and relocated. Ignoring it is how a beautiful new shower rots a window frame within a few winters.',
    ],
    localFaqs: [
      {
        q: 'There is a window in our tub wall — can we still have a shower?',
        a: 'Yes, but the window has to be built into the waterproofing rather than worked around. Usually that means a tiled sloped sill and a suitable glazed unit, so it sheds water instead of holding it.',
      },
      {
        q: 'Can the window be removed instead?',
        a: 'Sometimes, though it is the more expensive route and it costs the room its daylight. We price both so you can weigh it properly.',
      },
    ],
  },

  'mount-lookout': {
    intro:
      'Walk-in shower in Mount Lookout? Whether a curbless entry is possible comes down to which way your joists run. Call (513) 657-3750.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, mixing early-1900s homes with larger houses on quiet, hilly streets.',
      'A curbless shower needs the floor inside the enclosure to sit lower than the floor outside it, and on an upper storey that depth has to come from the joist bay. Whether it can is decided by which direction the joists run relative to the drain and how deep they are — a genuinely structural question, not a finish one. We look under the floor before promising a curbless entry, because it is far better to know now than to redesign the room halfway through.',
    ],
    localFaqs: [
      {
        q: 'Can we have a curbless shower upstairs?',
        a: 'Sometimes. It depends on joist direction and depth, since the recess has to come out of the floor structure. We check that before designing rather than promising it and rowing back.',
      },
      {
        q: 'What if the structure will not allow it?',
        a: 'A low-profile base with a very shallow threshold gets most of the benefit and is achievable in nearly any house. We will show you the difference rather than just saying no.',
      },
    ],
  },

  'columbia-tusculum': {
    intro:
      'Walk-in shower in Columbia-Tusculum? In a restored Painted Lady, the shower should be the one modern thing that does not fight the house. Call (513) 657-3750.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colourful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'People restore houses here properly, and a bathroom is usually the one room where modern function has to win outright. The craft is making that intervention sit quietly: a shower can be entirely contemporary in how it works while reading as though it belongs, through tile scale, fixture profile and metal finish rather than through pastiche. On the lower riverside ground we also confirm the drain fall before designing, because that constraint does not care how good the house looks.',
    ],
    localFaqs: [
      {
        q: 'How do you keep a modern shower from looking wrong in a Victorian?',
        a: 'Through proportion rather than imitation — tile scale, fixture profile and finish. Reproduction fittings are one route but not the only one, and we would rather show you both than assume.',
      },
      {
        q: 'Does the riverside ground affect the shower drain?',
        a: 'On the lower ground it can. We confirm the available fall between the new drain position and the sewer before the design is settled.',
      },
    ],
  },

  'mount-washington': {
    intro:
      'Walk-in shower in Mount Washington? A shower puts far more moisture into a room than a tub did — the fan has to keep up. Call (513) 657-3750.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'This is the thing most tub-to-shower conversions get wrong. A tub full of still water evaporates slowly; a shower running hot for ten minutes fills the room with vapour, and the original extractor in a house of this era was undersized for a tub, let alone this. If it is not upgraded, the new shower quietly ruins the paint, the grout and eventually the window frames. We size the fan to the room and duct it outside as part of the job rather than as an upsell.',
    ],
    localFaqs: [
      {
        q: 'Does the extractor really need replacing?',
        a: 'In this housing, almost always. The original was undersized for a tub and a shower produces far more vapour. It is a small part of the cost and it is what stops the room deteriorating.',
      },
      {
        q: 'Where does the fan vent to?',
        a: 'Outside, always — through the wall or the roof. Venting into a loft space just moves the moisture problem somewhere you cannot see it.',
      },
    ],
  },

  madisonville: {
    intro:
      'Walk-in shower in Madisonville? If you might sell in a few years, keeping one tub in the house is the smarter call. Call (513) 657-3750.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'Reinvestment means people here are weighing what a change does to the house as an asset, not only how it feels to use. A walk-in shower is an easy improvement to argue for — but converting the only tub in a family home can narrow the buyer pool when you come to sell. Where a house has two bathrooms our usual advice is to convert one and leave the other, and where it has one we will tell you honestly what the tradeoff is before you decide.',
    ],
    localFaqs: [
      {
        q: 'Will converting our tub hurt resale?',
        a: 'It can if it leaves the house with no tub at all, particularly for buyers with young children. With two bathrooms, converting one and keeping the other avoids the question entirely.',
      },
      {
        q: 'Which bathroom should we convert first?',
        a: 'Usually the one you use daily rather than the larger one. We will say so even when the bigger room is the bigger contract.',
      },
    ],
  },

  // ---------- Cohort 3 · Montgomery Road corridor, north suburbs, west-side cities & NKY river ----------

  'pleasant-ridge': {
    intro:
      'Walk-in shower in Pleasant Ridge? If the water scalds when someone flushes, that is the valve — and it is fixable now. Call (513) 657-3750.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'In houses of this age the shower is usually still fed by an original two-handle valve with no pressure balancing, which is why the temperature lurches when a toilet is flushed or a tap opens elsewhere. Swapping to a pressure-balancing or thermostatic valve while the wall is open costs very little and is the single change people notice most afterwards. In a two-family, where several fixtures share one supply, it matters more still.',
    ],
    localFaqs: [
      {
        q: 'Why does our shower run cold when someone flushes?',
        a: 'Because the original valve has no pressure balancing — it cannot compensate when cold is drawn off elsewhere. A modern balancing or thermostatic valve fixes it, and fitting one while the wall is open is inexpensive.',
      },
      {
        q: 'Is a thermostatic valve worth the extra over a balancing one?',
        a: 'In a two-family or a busy household, usually yes — it holds a set temperature rather than just preventing scalds. In a quiet single-family, a good balancing valve is often enough, and we will say so.',
      },
    ],
  },

  westwood: {
    intro:
      'Walk-in shower in Westwood? Half these tub alcoves are not a standard 60 inches — which decides base or custom. Call (513) 657-3750.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Over that many decades of building, tub openings were not standardised the way they are now. Plenty of alcoves here measure something other than the 60 inches a stock base is made for — a few inches short, or an awkward 66. That single measurement decides whether the shower is a stock base dropped in or a tiled pan built to the opening, and the two are not the same price. We measure the alcove on the site visit rather than assuming it.',
    ],
    localFaqs: [
      {
        q: 'What if our tub opening is not a standard size?',
        a: 'Then it is a tiled pan built to the actual opening rather than a stock base. It costs more than a drop-in but it fits properly, and knowing which you need before quoting is the point of measuring first.',
      },
      {
        q: 'Can the opening be adjusted to fit a stock base?',
        a: 'Sometimes, by furring out a wall a few inches. Where that is the cheaper route we will show you both options with the numbers.',
      },
    ],
  },

  norwood: {
    intro:
      'Walk-in shower in Norwood? Norwood is its own city, so the permit comes from Norwood — not Cincinnati. Call (513) 657-3750.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'Being a separate municipality inside Cincinnati catches people out. Plumbing and building permits for work here are issued by Norwood, not by the city whose postal address surrounds you, and the inspection is booked through Norwood too. We confirm the authority and its requirements before scheduling, because a finished shower waiting on the wrong inspector is a delay nobody needs.',
    ],
    localFaqs: [
      {
        q: 'Who issues the permit for a shower in Norwood?',
        a: 'The City of Norwood. It is a separate municipality even though Cincinnati surrounds it entirely, and we file and schedule accordingly.',
      },
      {
        q: 'Does a shower conversion need a permit at all?',
        a: 'Where the plumbing is altered — and moving a drain from tub to shower position counts — generally yes. We handle the filing rather than leaving it with you.',
      },
    ],
  },

  'blue-ash': {
    intro:
      'Walk-in shower in Blue Ash? The garden tub nobody has used since 1994 is the best space in the room. Call (513) 657-3750.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'The subdivision housing here came with a primary bathroom built around a large corner garden tub, and in most of these homes it has been used a handful of times in thirty years while taking the best corner and the best window in the room. Converting that deck into a proper walk-in shower is the highest-value change available in this housing: the drainage is already in that zone, the space is generous, and what you gain is something used twice a day rather than twice a decade.',
    ],
    localFaqs: [
      {
        q: 'Can the corner garden tub become a shower?',
        a: 'Yes, and in this housing it is the change we are asked for most. The tub deck usually holds the best corner and the drainage is already there, so it is a natural conversion rather than a fight.',
      },
      {
        q: 'Will we regret losing the tub?',
        a: 'Rarely, if there is another one in the house — which in these homes there usually is. Where the garden tub is the only tub, we will raise that before you commit.',
      },
    ],
  },

  montgomery: {
    intro:
      'Walk-in shower in Montgomery? A rain head plus body sprays can outrun your water heater — we check the flow first. Call (513) 657-3750.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'Ambitious shower specifications run into a limit people rarely think about: total flow. A large rain head, a hand shower and a set of body sprays running together can demand more hot water than the existing heater and supply line can actually deliver, and the result is a beautiful shower that goes lukewarm after four minutes. We add up the demand against what the house can supply before specifying, and where it does not add up we say so — sometimes that means a different shower, sometimes a different heater.',
    ],
    localFaqs: [
      {
        q: 'Can we have body sprays and a rain head together?',
        a: 'Often, but not always. We total the flow demand and check it against your heater capacity and supply line size first, because the alternative is discovering the shortfall after everything is tiled.',
      },
      {
        q: 'What if our water heater cannot keep up?',
        a: 'Either the shower is specified to what the house can deliver, or the heater is upgraded as part of the project. We price both rather than quietly installing something that will disappoint you.',
      },
    ],
  },

  madeira: {
    intro:
      'Walk-in shower in Madeira? Here is what a one-day install actually looks like, hour by hour. Call (513) 657-3750.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Most households here stay in the house while we work, so it is worth knowing how the day runs. Floor protection and the dust barrier go in first, the old tub and surround come out by late morning, the substrate and waterproofing go in through the middle of the day, and the base, walls, valve and glass are set in the afternoon. Water is off for part of it, not all of it, and the room is usable again the same evening in the majority of installs.',
    ],
    localFaqs: [
      {
        q: 'Can we stay in the house during the install?',
        a: 'Almost always. The work is contained behind a dust barrier and the water is off for part of the day rather than all of it. We tell you the shut-off window in advance so you can plan around it.',
      },
      {
        q: 'Can we use the shower that evening?',
        a: 'In most installs, yes — though where a tiled pan and grout are involved there is a curing period first. We are clear about which applies to your job before we start.',
      },
    ],
  },

  wyoming: {
    intro:
      'Walk-in shower in Wyoming? In these Victorians the cast-iron radiator is usually exactly where the shower wants to go. Call (513) 657-3750.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'Houses of this era are heated by cast-iron radiators fed from below, and in a bathroom the radiator has a habit of sitting on the one wall that would otherwise take a generous shower. Moving it is possible but it is a heating job as well as a plumbing one — the pipe runs come off a system that is a century old and does not always take kindly to being altered. We work out early whether the radiator moves, stays, or gets replaced with a slimmer panel or underfloor heat, because the answer reshapes the whole layout.',
    ],
    localFaqs: [
      {
        q: 'Can the radiator be moved to make room for the shower?',
        a: 'Sometimes, but it is a heating alteration on a century-old system, not just a plumbing one. We assess it early because the answer changes what layouts are even available.',
      },
      {
        q: 'What replaces it if it goes?',
        a: 'Usually a slimmer panel elsewhere in the room or underfloor heating under the new floor. Underfloor is the neater answer in a bathroom and it frees the wall entirely.',
      },
    ],
  },

  mariemont: {
    intro:
      'Walk-in shower in Mariemont? The Landmark status governs the outside — your bathroom is yours. Call (513) 657-3750.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Owners here often assume the Landmark designation restricts what they can do inside, and it is worth being clear: the review that comes with it concerns what is visible from outside — elevations, materials, windows. A bathroom is interior, so the shower design is genuinely open. What the 1920s construction does affect is the fabric behind the tile: plaster over lath and original supply lines that want checking before the new work goes in.',
    ],
    localFaqs: [
      {
        q: 'Does Mariemont’s historic status limit our shower design?',
        a: 'No — the review concerns what is visible from outside the house. Interior work like a bathroom is yours to decide. Where a project touches a window or an elevation, that is a different conversation and we will flag it.',
      },
      {
        q: 'What should we expect behind the tile in a 1920s Mariemont house?',
        a: 'Plaster over lath, original supply lines, and often a subfloor that has taken water at the tub edge. We open it up on the site visit so the price accounts for what is really there.',
      },
    ],
  },

  cheviot: {
    intro:
      'Walk-in shower in Cheviot? Plenty of these houses have an old basement shower worth doing properly. Call (513) 657-3750.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'A lot of west-side houses of this vintage came with a rudimentary basement shower and toilet — open drain, painted block wall, no enclosure to speak of. Rebuilt properly it becomes genuinely useful: a real waterproofed enclosure, a sealed floor, and a second full shower that takes pressure off the one upstairs. The question we settle first is drainage, because whether that basement drain sits above or below the sewer line decides the method.',
    ],
    localFaqs: [
      {
        q: 'Is the old basement shower worth rebuilding?',
        a: 'Frequently yes. Done properly it gives you a second usable shower and takes pressure off the bathroom upstairs, which in a busy household is worth more than a cosmetic upgrade.',
      },
      {
        q: 'Will it drain, or does it need a pump?',
        a: 'That depends on where the existing drain sits relative to the sewer line, which we measure on the first visit. Gravity where possible, a sealed ejector where not.',
      },
    ],
  },

  covedale: {
    intro:
      'Walk-in shower in Covedale? Adding a shower to a half bath turns it into a full one — often the best move in the house. Call (513) 657-3750.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Many of these houses have a half bath sitting unused for most of the day while the whole household queues for one full bathroom. Where there is space and the drain can be reached, adding a compact shower turns that half bath into a second full one — which changes weekday mornings more than any amount of work on the existing bathroom would. The limits are floor area and drain access, and both are settled at the site visit before anything is promised.',
    ],
    localFaqs: [
      {
        q: 'Can a shower be added to our half bath?',
        a: 'Often, where there is floor area for a compact enclosure and the drain can be reached without a major excavation. It is one of the highest-value changes available in this housing.',
      },
      {
        q: 'How small can a usable shower be?',
        a: 'Smaller than most people think, but there is a point below which it stops being pleasant to use. We will tell you where your room falls rather than squeezing something in that you will resent.',
      },
    ],
  },

  covington: {
    intro:
      'Walk-in shower in Covington? Kentucky side means Kentucky permitting — we handle that before scheduling. Call (513) 657-3750.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Working across the river means a different jurisdiction: permits, inspection and licensing here run under Kentucky rules rather than Ohio ones, and we confirm the requirements before a start date is agreed rather than mid-job. The housing adds its own constraint — MainStrasse and Licking Riverside rowhouses are narrow and deep, so the bathroom is usually a tight, later insertion where the enclosure design matters more than the fixture list.',
    ],
    localFaqs: [
      {
        q: 'Do you work on the Kentucky side?',
        a: 'Regularly. Permitting and inspection run under Kentucky rules rather than Ohio, so we confirm the requirements up front — it is a planning step rather than an obstacle.',
      },
      {
        q: 'Our rowhouse bathroom is very narrow — what fits?',
        a: 'Usually a fixed glass panel with a walk-in return rather than a hinged door, since a door needs floor space to swing into. We measure and show you what the room genuinely takes.',
      },
    ],
  },

  newport: {
    intro:
      'Walk-in shower in Newport? East Row bathrooms are often on the third floor — pressure at that height is the question. Call (513) 657-3750.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'East Row houses are tall and narrow, and the bathroom is frequently on the second or third floor at the end of a long vertical run of original pipe. Height costs pressure, and a corroded galvanised riser costs more of it — which is why a new shower in one of these houses can disappoint if only the fixture is replaced. We check the static pressure and the condition of the riser before specifying a head, so what gets installed will actually perform at that height.',
    ],
    localFaqs: [
      {
        q: 'Will a third-floor shower have enough pressure?',
        a: 'It can, but it has to be checked rather than assumed. Height costs pressure and an old corroded riser costs more, so we measure before choosing a head rather than after.',
      },
      {
        q: 'What if the pressure is genuinely too low?',
        a: 'Replacing the riser serving the bathroom usually solves it. Where it does not, a pump is an option and we will tell you plainly which your house needs.',
      },
    ],
  },

  // ---------- Cohort 4 · NKY cities, north suburbs, basin & riverfront ----------

  bellevue: {
    intro:
      'Walk-in shower in Bellevue? In a bathroom this size, changing the door buys more space than changing the fixtures. Call (513) 657-3750.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Bathrooms in these houses are small and the door swings inward, which quietly consumes a rectangle of floor you can never use for anything else. Changing that door to a pocket or a slider frequently gains more usable room than any amount of rearranging the fixtures — and in a house of this age it can be done without disturbing the original casing on the landing side. It is the first thing we look at here, before anything else in the layout.',
    ],
    localFaqs: [
      {
        q: 'Can we fit a pocket door in a house this old?',
        a: 'Often, provided the wall it slides into is not carrying services or structure — which we check on the site visit. Where it cannot, a surface slider gets most of the same benefit.',
      },
      {
        q: 'Will it damage the original door casing?',
        a: 'It should not. The casing on the landing side can usually be retained and reused, which matters in a house where that trim is original.',
      },
    ],
  },

  'fort-thomas': {
    intro:
      'Walk-in shower in Fort Thomas? If your glass spots within a week, that is the water — and it is worth solving first. Call (513) 657-3750.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Nothing dates a new shower faster than mineral deposit on the glass and the fittings. Where water is hard, an untreated enclosure spots within days and etches permanently within a couple of years, so it is worth deciding up front how to handle it: a factory-applied protective coating on the glass, fixture finishes that tolerate mineral better than others, and in some houses treatment at the supply. We would rather raise it before you buy the glass than after you are cleaning it every week.',
    ],
    localFaqs: [
      {
        q: 'Why does shower glass go cloudy so quickly?',
        a: 'Mineral in the water deposits on the surface and, left long enough, etches it permanently. A factory-applied coating helps considerably, and cleaning habit does the rest.',
      },
      {
        q: 'Is a water softener worth it for a shower?',
        a: 'It depends on your water and how much else in the house is affected. We will give you a straight view rather than selling equipment — sometimes coated glass and the right fixture finish are enough.',
      },
    ],
  },

  florence: {
    intro:
      'Walk-in shower in Florence? A one-piece fiberglass unit does not come out through the door — it comes out in pieces. Call (513) 657-3750.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'A great many homes here were built with a one-piece moulded tub-and-surround unit, installed before the walls were finished and physically larger than the doorway it now sits behind. It cannot be taken out whole, so removal means cutting it into sections in place — routine work, but it produces dust and debris that a crew unprepared for it will spread through the house. We plan the cut and the containment before the day rather than improvising it.',
    ],
    localFaqs: [
      {
        q: 'How do you remove a one-piece tub and surround?',
        a: 'By cutting it into sections in place, because it was installed before the walls were and will not fit back through the door. It is routine, but it needs containment planned in advance.',
      },
      {
        q: 'Is there a mess left behind?',
        a: 'Not if the dust barrier and floor protection go in first, which is standard for us. The debris is bulky rather than fine, and it leaves the same day.',
      },
    ],
  },

  erlanger: {
    intro:
      'Walk-in shower in Erlanger? The tile you choose for the floor is a safety decision, not just a look. Call (513) 657-3750.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'A shower floor has to do two things a bathroom floor does not: shed water toward the drain, and stay grippy when wet and soapy. That rules out the large-format polished tile people often want, because a big rigid tile cannot follow the falls and a polished surface is genuinely slippery underfoot. Small-format tile with more grout lines, or a textured porcelain with a proper slip rating, is what belongs on the floor — and the walls can still be whatever you like.',
    ],
    localFaqs: [
      {
        q: 'Can we use the same large tile on the shower floor as the walls?',
        a: 'Usually not, and it is worth understanding why. A large rigid tile cannot follow the falls to the drain, and a polished finish is slippery when wet. Small-format or textured porcelain goes on the floor; the walls can match whatever you like.',
      },
      {
        q: 'Does a textured floor collect dirt?',
        a: 'A little more than polished, but a properly sealed grout and a decent fall mean it dries quickly. The safety difference is worth the small tradeoff, especially in a household planning to stay.',
      },
    ],
  },

  mason: {
    intro:
      'Walk-in shower in Mason? If the primary bath sits over the garage, the pipes in that wall need thinking about. Call (513) 657-3750.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town centre.',
      'A common layout in this housing puts the primary bathroom on the second floor above an unheated garage, with the shower valve in an outside wall. That is the coldest position in the house, and it is where supply lines freeze in a hard winter. While the wall is open for a shower conversion is exactly the moment to move those runs to the warm side or insulate them properly — it costs very little then and it is the kind of thing nobody thinks about until the January it bursts.',
    ],
    localFaqs: [
      {
        q: 'Should we worry about pipes in an outside wall?',
        a: 'Over an unheated garage, yes. It is the coldest spot in the house and a common freeze point. While the wall is open we can reroute or insulate the runs cheaply.',
      },
      {
        q: 'Does that add much to the job?',
        a: 'Very little, because the wall is already open and the crew is already there. Doing it later means opening finished tile, which is what makes it expensive.',
      },
    ],
  },

  'west-chester': {
    intro:
      'Walk-in shower in West Chester? Going from builder-grade fiberglass to tile and glass is the upgrade people notice most. Call (513) 657-3750.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'Most of these houses already have a walk-in shower — a moulded fiberglass pan with a framed plastic door, chosen by a builder to a cost. Nothing is wrong with it, which is exactly why people put off replacing it, but the difference between that and a tiled enclosure with a proper base, a niche and frameless glass is the single most visible change available in this housing. It is also cleaner to live with, because there is no framed track collecting grime.',
    ],
    localFaqs: [
      {
        q: 'Is it worth replacing a shower that still works?',
        a: 'If the builder unit is sound, that is a genuine choice rather than a repair. What you gain is appearance and ease of cleaning — a tiled enclosure with frameless glass has no track to collect grime.',
      },
      {
        q: 'Does the pan have to be tiled, or can it be a base?',
        a: 'Either. A quality solid base is quicker and slightly cheaper; a tiled pan gives you a continuous floor and more design freedom. We price both.',
      },
    ],
  },

  pendleton: {
    intro:
      'Walk-in shower in Pendleton? In an open loft, containing the steam matters as much as containing the water. Call (513) 657-3750.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condominiums.',
      'Loft conversions here often put the bathroom in a partially open plan, under high ceilings, next to exposed brick and timber — and a shower in that setting pushes vapour into the whole volume rather than a small closed room. Extraction has to be sized for the space it actually shares air with, and the enclosure detailed so moisture does not reach untreated brick or beams. It is a genuinely different problem from a conventional bathroom, and it is solvable, but not by a standard fan.',
    ],
    localFaqs: [
      {
        q: 'Will shower steam damage exposed brick and beams?',
        a: 'It can over time if extraction is undersized and the enclosure is open. We size the fan to the volume the bathroom actually shares air with, rather than to the footprint of the room.',
      },
      {
        q: 'Do we need approval from the building?',
        a: 'In most converted buildings here, yes — anything touching a shared stack or the waterproofing usually needs sign-off. We prepare what the board asks for and work to their access rules.',
      },
    ],
  },

  queensgate: {
    intro:
      'Walk-in shower in Queensgate? It is mostly a working district, so here is an honest answer about what we do here. Call (513) 657-3750.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown near the rail yards and the Mill Creek, made up of warehouses, offices and light-industrial buildings.',
      'We are residential remodelers, and Queensgate is a working district more than a residential one — so we would rather set the expectation plainly than pretend otherwise. Where there is a residence here, typically a live-work or converted space, we do the same work we do anywhere: the same fixed price, the same in-house installers, the same warranty. If you are looking for a shower in a commercial facility, we are not the right firm and we will tell you that on the phone rather than after a site visit.',
    ],
    localFaqs: [
      {
        q: 'Do you actually work in Queensgate?',
        a: 'Where there is a residence, yes — usually a live-work or converted space. It is a working district rather than a residential one, so there is simply less of that here than elsewhere.',
      },
      {
        q: 'Can you do showers in a commercial building?',
        a: 'No. We are residential remodelers and we would rather say so up front than take on work outside what we are set up to do well.',
      },
    ],
  },

  cuf: {
    intro:
      'Walk-in shower in CUF? With several units in one building, standardising the spec pays for itself. Call (513) 657-3750.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'Where one owner holds several units in a building, doing the showers as a programme rather than one at a time changes the economics. One mobilisation, one delivery, one permit process, and — the part that keeps paying — a single specification across every unit, so valve cartridges, glass hardware and trim are interchangeable and a repair years later is a part off the shelf rather than a search. We will sequence a building around tenancy dates.',
    ],
    localFaqs: [
      {
        q: 'Can you do several units in one building?',
        a: 'Yes, and it is usually cheaper per unit. One mobilisation and one delivery, sequenced around your tenancy dates rather than ours.',
      },
      {
        q: 'Why standardise the specification across units?',
        a: 'Because maintenance gets much simpler. Identical valves and hardware mean a spare part fits every unit, instead of tracking down what was fitted where three years ago.',
      },
    ],
  },

  'camp-washington': {
    intro:
      'Walk-in shower in Camp Washington? In these worker cottages the ceiling height decides where the head goes. Call (513) 657-3750.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The upper floors of these cottages have low ceilings, and in a bathroom tucked under a roof slope the height can be tighter still. That decides the shower more than the floor plan does: a ceiling-mounted rain head needs headroom that simply is not there, so the answer is usually a wall-mounted head set carefully, or a slide bar that lets each person set their own. We measure the height at the shower position before showing you fittings that will not fit.',
    ],
    localFaqs: [
      {
        q: 'Can we have a rain head with a low ceiling?',
        a: 'Often not a ceiling-mounted one — it needs height the room does not have. A wall-mounted head on an extended arm gets close to the same feel without the headroom problem.',
      },
      {
        q: 'What about a bathroom under a roof slope?',
        a: 'It is workable, but the standing position has to be planned around the slope. We measure the clear height where you will actually stand rather than at the middle of the room.',
      },
    ],
  },

  'south-fairmount': {
    intro:
      'Walk-in shower in South Fairmount? A new shower drain is a new low point — worth knowing what it connects to. Call (513) 657-3750.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'A shower sits lower than a tub and drains through a wider, shallower path, which makes it the first fixture to show a problem if the line it connects to has a history of surcharging. In a valley with this drainage history that is worth establishing before the work rather than after the first heavy storm. We look at where the line runs and what protection is already on it, and say plainly whether a backwater valve belongs in the scope.',
    ],
    localFaqs: [
      {
        q: 'Could a new shower back up in heavy rain?',
        a: 'Only if the line it connects to surcharges — which in this valley is worth checking rather than assuming. We look at the existing protection and tell you whether a backwater valve is warranted.',
      },
      {
        q: 'Is that included or extra?',
        a: 'It is quoted separately and only where it is genuinely needed. We would rather show it as a clear line you can decide on than fold it into every price.',
      },
    ],
  },

  'east-end': {
    intro:
      'Walk-in shower in the East End? In a river cottage the bathroom is usually a rear addition — check the floor first. Call (513) 657-3750.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue below Columbia Parkway, with historic river cottages and newer condominiums squeezed between the hillside and the Ohio River.',
      'In the older cottages the bathroom is nearly always a later addition tacked onto the back, built lighter than the original house and sometimes on a shallower foundation. Before a tiled pan and a glass panel go into a room like that, the floor structure has to be checked and frequently stiffened — tile and glass are unforgiving of deflection in a way a plastic surround never was. It is a straightforward step, but skipping it is how new grout cracks within a year.',
    ],
    localFaqs: [
      {
        q: 'Does the floor need work before tiling a shower?',
        a: 'In a rear addition of this type, often yes. Tile and glass are unforgiving of movement, so we check deflection and stiffen the structure where needed before anything goes down.',
      },
      {
        q: 'What if the addition is on a poor foundation?',
        a: 'We will tell you honestly, including when the right answer is a solid base and a lighter enclosure rather than a heavy tiled pan.',
      },
    ],
  },

  // ---------- Cohort 5 · Mill Creek valley, west-side hillsides & north-side pockets ----------

  'north-fairmount': {
    intro:
      'Walk-in shower in North Fairmount? Sometimes the one-day acrylic system genuinely is the right answer. Call (513) 657-3750.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'We build tiled showers and we build acrylic systems, and we would rather steer you to the right one than the dearer one. In a house of this size and value, a well-installed acrylic base and wall system over sound waterproofing is often the better call — it goes in faster, costs meaningfully less, and there is no grout to maintain. The money that matters here is what goes behind it: the waterproofing, the valve and the substrate. That is the part we will not cut either way.',
    ],
    localFaqs: [
      {
        q: 'Is an acrylic system worse than tile?',
        a: 'Different rather than worse. Tile offers more design freedom; a quality acrylic system installs faster, costs less and has no grout to maintain. In a lot of houses here it is the sensible choice and we will say so.',
      },
      {
        q: 'Where should the money actually go?',
        a: 'Behind the surface — waterproofing, the valve and a sound substrate. Those decide whether the shower lasts, and they cost the same whichever finish you choose.',
      },
    ],
  },

  evanston: {
    intro:
      'Walk-in shower in Evanston? One shower, several people, different heights — the slide bar solves it. Call (513) 657-3750.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'A fixed showerhead is set at one height for a household of people who are not one height, and in a house where a single bathroom serves everyone that is a daily irritation nobody thinks to mention. A hand shower on a slide bar solves it for a small part of the budget, and it makes cleaning the enclosure and washing a child or a dog dramatically easier. Where the room allows it we will usually specify both a fixed head and a hand shower on a diverter.',
    ],
    localFaqs: [
      {
        q: 'Fixed head or hand shower?',
        a: 'Both, where the budget and the valve allow. A fixed head for everyday use and a hand shower on a slide bar for everyone who is not the height the fixed head was set for — plus cleaning, children and pets.',
      },
      {
        q: 'Does that need a special valve?',
        a: 'It needs a diverter, which is decided at the valve stage rather than added later. It is one of the reasons we settle the fittings before the wall closes up.',
      },
    ],
  },

  'south-cumminsville': {
    intro:
      'Walk-in shower in South Cumminsville? If the bathroom is on a slab, moving the drain means cutting concrete. Call (513) 657-3750.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'Where a bathroom sits on a ground-floor slab rather than over a crawl space or basement, relocating the waste from tub position to shower position means saw-cutting the concrete, trenching to the new position and repouring. It is entirely routine and we do it regularly, but it is real work with real cost and it belongs in the quote from the beginning. Establishing whether your bathroom is on a slab is one of the first things we check on the site visit.',
    ],
    localFaqs: [
      {
        q: 'What if our bathroom floor is concrete?',
        a: 'Then moving the drain means saw-cutting, trenching and repouring the slab. It is routine work but it is not free, so we identify it before quoting rather than raising it once the floor is open.',
      },
      {
        q: 'Can the drain stay where it is to avoid that?',
        a: 'Sometimes, if a linear drain or a base with an offset waste can reach the existing position. Where that works it saves real money, and it is worth checking before assuming a cut.',
      },
    ],
  },

  'english-woods': {
    intro:
      'Walk-in shower in English Woods? A grab bar is only as good as what it is screwed into. Call (513) 657-3750.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'A grab bar fixed into tile and board will pull out under the load it was bought for — which is the moment it was meant to prevent. A bar that works is anchored into solid blocking installed between the studs before the wall closed, rated to take a genuine fall rather than a steadying hand. That blocking costs almost nothing at the right moment and cannot be added afterwards without removing finished tile, which is why we put it in whether or not bars go up on day one.',
    ],
    localFaqs: [
      {
        q: 'Can grab bars be added to a finished shower later?',
        a: 'Only safely where blocking was installed behind the tile first. Fixed into board alone they can pull out under load, which defeats the purpose entirely.',
      },
      {
        q: 'Should we fit bars now or just the blocking?',
        a: 'Blocking always, bars when you want them. That way the wall is ready and you are not committing to the look before you need it.',
      },
    ],
  },

  'north-avondale': {
    intro:
      'Walk-in shower in North Avondale? Many of these houses have a disused upper-floor bath worth bringing back. Call (513) 657-3750.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'Houses of this size were built with more bathrooms than are currently in use — a third-floor or back-stair bath that has been closed off for years, sometimes decades. Bringing one back with a proper shower is often better value than reworking the main bathroom again, because the plumbing route already exists and the room is doing nothing. The first question is the condition of what is behind the wall after years out of service, which we establish before quoting.',
    ],
    localFaqs: [
      {
        q: 'Is it worth reopening a disused upstairs bathroom?',
        a: 'Frequently, yes. The room and the plumbing route already exist, so you gain a whole bathroom for less than a major rework of the main one.',
      },
      {
        q: 'What condition will the old plumbing be in?',
        a: 'Variable, and that is the thing to establish first. Lines out of service for years may be corroded or partly disconnected, so we look before pricing rather than assuming either way.',
      },
    ],
  },

  millvale: {
    intro:
      'Walk-in shower in Millvale? In the smallest bathrooms, the shape of the enclosure matters more than its size. Call (513) 657-3750.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'When a bathroom is genuinely tight, a rectangular enclosure in the obvious position can block the door or leave no room at the basin. A neo-angle unit cutting across a corner, or a quadrant with a curved front, frees the diagonal — which is exactly the floor space a small room needs to feel usable. It is a geometry problem rather than a budget one, and it is worth ten minutes with a tape measure before anyone talks about tile.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is very small — what shape enclosure works?',
        a: 'Often a corner unit rather than a rectangle. Cutting across the corner frees the diagonal, which is the floor space that makes a small room usable. We measure and show you the options.',
      },
      {
        q: 'Is a corner shower less comfortable?',
        a: 'A well-designed one is not, though it is a genuine tradeoff against a rectangular enclosure. In a room this size the alternative is usually a shower you cannot get past to reach the basin.',
      },
    ],
  },

  'paddock-hills': {
    intro:
      'Walk-in shower in Paddock Hills? A mid-century bathroom is worth designing to, not just modernising. Call (513) 657-3750.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Mid-century bathrooms have a real character — geometric tile, colour used with confidence, slim fittings — and the default remodel erases all of it for something beige. That is a choice rather than a necessity. A shower can be entirely modern in its waterproofing, valve and glass while the visible surfaces pick up the geometry and palette the house was built with. Where the original tile is sound and only the tub area needs replacing, we will tell you that too.',
    ],
    localFaqs: [
      {
        q: 'Can we keep the mid-century look and still have a modern shower?',
        a: 'Yes, and it usually looks better than replacing everything with something generic. Waterproofing, valve and glass are modern; the tile and fittings can follow the house.',
      },
      {
        q: 'Can original tile be kept if only the tub goes?',
        a: 'Sometimes, where it is sound and the transition can be detailed cleanly. We will show you honestly where the join would land before you decide.',
      },
    ],
  },

  'spring-grove-village': {
    intro:
      'Walk-in shower in Spring Grove Village? With mature trees over old laterals, drainage deserves a check first. Call (513) 657-3750.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest in the country, with a mix of older homes and industry.',
      'Streets shaded by mature trees have mature root systems, and old clay or cast-iron laterals are exactly what those roots find. A shower drains a large volume quickly through a shallow trap, so it is the fixture that shows a partly blocked lateral first — usually as water standing around your feet in a brand-new enclosure. Where a house has a history of slow drains we would rather establish the cause before installing than be called back afterwards.',
    ],
    localFaqs: [
      {
        q: 'Our drains are slow — will a new shower make it worse?',
        a: 'It will make it more obvious, because a shower moves a lot of water quickly. If there is a history of slow drains, the lateral is worth investigating before the new work rather than after.',
      },
      {
        q: 'Do you check the drain line as part of the job?',
        a: 'We look at the symptoms and tell you plainly when a camera inspection is warranted. We would rather flag it up front than install a shower onto a problem.',
      },
    ],
  },

  linwood: {
    intro:
      'Walk-in shower in Linwood? A niche in the wrong wall is a cold spot and a condensation problem. Call (513) 657-3750.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'A recessed niche has to go somewhere, and the obvious wall is often an outside one — which is the one place it should not be. Cutting a recess into an exterior wall removes insulation depth and creates a cold surface inside a wet enclosure, so it collects condensation and, over enough winters, worse. The right home for a niche is an interior partition, positioned in a stud bay that carries no services. We plan that at design stage rather than cutting where it happens to be convenient.',
    ],
    localFaqs: [
      {
        q: 'Can the shower niche go in any wall?',
        a: 'It should go in an interior wall wherever possible. An exterior wall loses insulation depth at the recess and becomes a cold, condensation-prone surface inside the shower.',
      },
      {
        q: 'What if only the outside wall is available?',
        a: 'It can be done with the insulation and vapour detailing rebuilt properly at the recess — but it is a considered decision with a cost, not a default. We will explain the tradeoff.',
      },
    ],
  },

  'bond-hill': {
    intro:
      'Walk-in shower in Bond Hill? Think about how the valve gets serviced before the wall closes. Call (513) 657-3750.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'Every shower valve eventually needs a cartridge, and how that job goes was decided years earlier when the wall was closed. A valve set at a sensible depth with its trim removable from the front is a twenty-minute repair; one buried too deep or with no rear access can mean opening finished tile. It costs nothing to get right at rough-in and it is invisible afterwards, which is precisely why it gets skipped. We set the depth properly and note what is behind it.',
    ],
    localFaqs: [
      {
        q: 'Will the shower valve be serviceable later?',
        a: 'Yes — we set it to the correct depth so the cartridge can be changed from the front without disturbing tile. It costs nothing at the right moment and saves a great deal later.',
      },
      {
        q: 'Do we need an access panel behind the shower?',
        a: 'Not usually with a properly set modern valve. Where the layout genuinely warrants one we will suggest it rather than leaving you without a route in.',
      },
    ],
  },

  'villages-of-roll-hill': {
    intro:
      'Walk-in shower in Villages of Roll Hill? Mostly apartments here, so we work with owners and managers. Call (513) 657-3750.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'Being straight about this: in a community of rented apartments, the person who commissions a shower is the owner or the management company rather than the resident. If you rent here and your shower needs work, the route is your landlord — and we are happy to talk to them directly. For owners, doing units as a programme with one specification across the building is both cheaper per unit and far easier to maintain afterwards.',
    ],
    localFaqs: [
      {
        q: 'I rent here — can I have a shower installed?',
        a: 'The work has to be commissioned by whoever owns the property. Put us in touch with your landlord or management company and we will take it from there.',
      },
      {
        q: 'We manage several units — can they be done together?',
        a: 'Yes, and it is the sensible way to do it. One mobilisation, one specification across every unit, and interchangeable parts when something needs servicing years later.',
      },
    ],
  },

  'east-westwood': {
    intro:
      'Walk-in shower in East Westwood? A bench is excellent in the right room and a mistake in the wrong one. Call (513) 657-3750.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'A built-in bench is one of the most requested features and one of the easiest to regret. In a generous enclosure it is genuinely useful — for shaving, for sitting, for anyone who will need it later. In a five-foot alcove it takes a third of the floor and leaves you standing against the opposite wall. Where a room is tight we will suggest a fold-down seat instead, which gives the same function on the days you want it and disappears on the days you do not.',
    ],
    localFaqs: [
      {
        q: 'Should we have a built-in bench?',
        a: 'In a generous enclosure, yes. In a standard five-foot alcove it consumes a lot of the floor, and a fold-down seat usually serves better. We will tell you which your room is.',
      },
      {
        q: 'Is a fold-down seat sturdy enough?',
        a: 'A properly rated one anchored into blocking is, and that blocking has to go in before the wall closes. It is the same principle as grab bars.',
      },
    ],
  },

  // ---------- Cohort 6 · West-side hills, north-side villages & river east ----------

  'western-hills': {
    intro:
      'Walk-in shower in Western Hills? Put a proper light in the enclosure — most of these bathrooms have none. Call (513) 657-3750.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Bathrooms of this era were lit by a single fitting in the middle of the ceiling, which means the shower — the one place you need to see what you are doing — sits in its own shadow. A wet-rated recessed light over the enclosure changes the room more than most people expect, and once the ceiling is open for the extractor it is a small addition. Glass rather than a curtain compounds the gain, because the light then reaches the rest of the room too.',
    ],
    localFaqs: [
      {
        q: 'Can we add a light inside the shower?',
        a: 'Yes — a wet-rated recessed fitting over the enclosure. Since the ceiling is usually open anyway for the extractor, it is a small addition that changes how the room feels considerably.',
      },
      {
        q: 'Does the whole bathroom need rewiring?',
        a: 'Rarely. Usually the existing circuit takes the additional fitting, and we will tell you plainly if yours is the exception rather than assuming the bigger job.',
      },
    ],
  },

  california: {
    intro:
      'Walk-in shower in California? On this ground it is worth waterproofing the whole floor, not just the shower. Call (513) 657-3750.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'Standard practice waterproofs the shower enclosure and stops at its edge, which is fine in most houses. In homes that have taken water before, extending a bonded membrane across the entire bathroom floor and up the wall base is worth the modest extra — it turns the room into a tray rather than a floor with a waterproof corner. It will not stop a river, but it is the difference between drying out a room and replacing its structure.',
    ],
    localFaqs: [
      {
        q: 'Why waterproof beyond the shower itself?',
        a: 'Because in a house that has taken water before, the value is in the whole floor being a sealed tray rather than just the enclosure. It is a modest addition while the floor is open and impossible to add later.',
      },
      {
        q: 'Does that protect against flooding?',
        a: 'Not against a river — nothing in a bathroom does. What it does is make the room far easier to dry out and far less likely to need structural repair afterwards.',
      },
    ],
  },

  carthage: {
    intro:
      'Walk-in shower in Carthage? Sometimes a curtain is genuinely the better answer than glass — here is when. Call (513) 657-3750.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'Glass is what everyone pictures, but it is not automatically right. In a small room a fixed panel narrows the entry, glass costs a meaningful share of a modest budget, and it needs squeegeeing to stay looking good. A well-hung curtain on a decent rail costs a fraction, opens the full width, and can be replaced on a whim. Where a household would rather put the money into the waterproofing and the valve, we will say so — the shower behind it is identical either way.',
    ],
    localFaqs: [
      {
        q: 'Is a curtain a downgrade?',
        a: 'Not necessarily. It costs far less, opens the full width and needs no maintenance. In a small room on a modest budget it is frequently the better call, and the shower behind it is built to the same standard.',
      },
      {
        q: 'Can glass be added later?',
        a: 'Yes, if the enclosure is built with that in mind — which we will do if you think you may want it. That way the option stays open without paying for it now.',
      },
    ],
  },

  'winton-hills': {
    intro:
      'Walk-in shower in Winton Hills? Acrylic, solid surface or a tiled pan — the base is the decision that lasts. Call (513) 657-3750.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'The base takes every gallon and every footstep, so it is the component worth understanding. A quality acrylic base is warm underfoot, quick to fit and easy to clean. A solid-surface base is heavier, more rigid and harder to damage. A tiled pan gives a continuous floor and total design freedom, but it depends entirely on the waterproofing beneath it and on being built to correct falls. All three are legitimate — what matters is that it is chosen deliberately rather than by default.',
    ],
    localFaqs: [
      {
        q: 'Which shower base is best?',
        a: 'It depends on the room and the budget. Acrylic is warm and economical, solid surface is more robust, a tiled pan is the most flexible but relies wholly on the waterproofing under it. We will recommend for your room rather than by default.',
      },
      {
        q: 'Do tiled pans leak more often?',
        a: 'Only when the waterproofing beneath them is done poorly, which is where the failures come from. Built correctly and flood-tested, a tiled pan lasts as long as anything else.',
      },
    ],
  },

  roselawn: {
    intro:
      'Walk-in shower in Roselawn? A mid-century steel tub comes out easily — which keeps the conversion affordable. Call (513) 657-3750.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'The tub in most of these houses is pressed steel with a porcelain coat, not cast iron — a fraction of the weight and straightforward to lift out whole. That matters to the price. Where an older house needs a cast-iron tub cut down and carried out in sections, a mid-century steel unit is a two-person job with no cutting, which takes real cost and real disruption out of the day. It is one of the reasons conversions in this housing are among the most affordable we do.',
    ],
    localFaqs: [
      {
        q: 'Is our tub cast iron or steel?',
        a: 'In most mid-century houses here it is pressed steel — much lighter and removable whole. A magnet sticks to both, but the weight and the sound when tapped tell us apart quickly on the site visit.',
      },
      {
        q: 'Does that make the job cheaper?',
        a: 'Yes, noticeably. No cutting, no sectional removal and less protection needed on the route out, which all comes off the labour rather than the materials.',
      },
    ],
  },

  'mount-airy': {
    intro:
      'Walk-in shower in Mount Airy? In a split-level, the bathroom sits on a half-storey — which complicates the drain. Call (513) 657-3750.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'The hilly terrain produced a lot of split-level houses here, and a split-level puts the bathroom on a half-storey with a shallow floor void and no straightforward run down to the main stack. Moving a drain from tub position to shower position in that void is a tighter problem than in a conventional two-storey, and occasionally it decides where the shower can go. We look at the void depth and the stack route before drawing a layout rather than after.',
    ],
    localFaqs: [
      {
        q: 'Does a split-level make a shower conversion harder?',
        a: 'It can. The floor void on a half-storey is shallow and the run to the stack is less direct, which limits how far a drain can move. We check that before designing rather than promising a layout we cannot build.',
      },
      {
        q: 'What if the drain cannot move far enough?',
        a: 'A linear drain or an offset waste often reaches where a conventional centre drain cannot. Where nothing works, we tell you before you have paid for a design.',
      },
    ],
  },

  hartwell: {
    intro:
      'Walk-in shower in Hartwell? A shower ring over a clawfoot rarely works — here is the honest alternative. Call (513) 657-3750.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Owners of these houses often try the compromise first: a shower riser and a hoop curtain over the original clawfoot. It looks charming and it leaks — the curtain clings, the water finds the gap between curtain and tub rim, and the floor around a freestanding tub was never waterproofed. If you want a real shower, it wants a real enclosure. Where the room is big enough, the honest answer is to keep the clawfoot for baths and build the shower properly alongside it.',
    ],
    localFaqs: [
      {
        q: 'Can we just add a shower ring to our clawfoot tub?',
        a: 'You can, but it tends to leak — the curtain clings inward and water escapes at the rim, onto a floor never built to be wet. We would rather tell you that than fit one and be called back.',
      },
      {
        q: 'What is the alternative in a period bathroom?',
        a: 'Where the room allows, keep the clawfoot for baths and build a proper enclosed shower alongside. Where it does not, converting the tub position into a correctly waterproofed shower is the sound option.',
      },
    ],
  },

  'kennedy-heights': {
    intro:
      'Walk-in shower in Kennedy Heights? Decide where the shampoo goes before the tile goes on — not after. Call (513) 657-3750.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts centre and large early-1900s homes.',
      'The detail that quietly ruins good showers is storage. Bottles end up on the floor or on a suction rack that falls off, because nobody decided at design stage where they belong. A recessed niche sized to what you actually own — tall bottles included — set at the right height and on the right wall, is a small piece of planning that removes a daily irritation for twenty years. It has to be framed before the wall closes, which is why it is a design decision rather than a later one.',
    ],
    localFaqs: [
      {
        q: 'How big should a shower niche be?',
        a: 'Sized to what you actually use, including the tallest bottle. We would rather ask that question at design stage than fit a standard recess your shampoo does not stand up in.',
      },
      {
        q: 'One large niche or two small ones?',
        a: 'In a shared shower, two at different heights usually works better than one. It is free to decide now and impossible to change once the tile is on.',
      },
    ],
  },

  'st-bernard': {
    intro:
      'Walk-in shower in St. Bernard? Move a shower drain and the vent has to follow — that is what keeps traps sealed. Call (513) 657-3750.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'Relocating a drain is only half the plumbing. Every trap needs a vent within a set distance, or draining water siphons the trap dry and the room starts smelling of the sewer — a fault that shows up weeks later and gets blamed on everything except the cause. In tight early-1900s houses the existing vent is often not where a new shower position needs it, so a wet vent or a new tie-in is part of the job. It is invisible work, and it is not optional.',
    ],
    localFaqs: [
      {
        q: 'Why does the vent matter when moving a drain?',
        a: 'Because without one within the permitted distance, draining water siphons the trap dry and sewer gas comes back into the room. It is invisible work that shows up weeks later if skipped.',
      },
      {
        q: 'Does that mean opening more walls?',
        a: 'Sometimes a little more, and we would rather show you that on the quote than surprise you with it. Often a wet vent arrangement solves it without additional opening.',
      },
    ],
  },

  'elmwood-place': {
    intro:
      'Walk-in shower in Elmwood Place? Sometimes the right job is a like-for-like replacement done properly. Call (513) 657-3750.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'Not every shower needs reimagining. Where a layout already works, replacing what is there in the same position — new waterproofing, new substrate, new valve, new surfaces — costs considerably less than moving anything, because no drain moves and no wall does. In small houses that is frequently the sensible project, and we will recommend it rather than talking you into a reconfiguration that buys very little.',
    ],
    localFaqs: [
      {
        q: 'Can we just replace what is there?',
        a: 'Often, and it is usually the better value. Keeping the drain and the walls where they are removes the most expensive parts of the job while still giving you a completely new shower.',
      },
      {
        q: 'Is that a cheaper job or a lesser one?',
        a: 'Cheaper, not lesser. What goes behind the surface — waterproofing, substrate, valve — is exactly the same. You are simply not paying to move plumbing that was already in the right place.',
      },
    ],
  },

  'delhi-hills': {
    intro:
      'Walk-in shower in Delhi Hills? A walkout lower level is the easiest place in the house to gain a second shower. Call (513) 657-3750.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing — with established mid-century homes on hilly streets.',
      'Houses stepped into this slope frequently have a walkout lower level with a half bath already in it, and that is the cheapest second shower available to you. The drain and the supply are already there, the ceiling height is usually adequate, and the walkout means the room has a window. Whether it drains by gravity or needs an ejector depends on where your house sits on the hill, which we measure on the first visit.',
    ],
    localFaqs: [
      {
        q: 'Can the lower-level half bath take a shower?',
        a: 'Frequently yes, and it is the most economical way to add one. Drain and supply already exist; what we confirm first is whether the drain sits above the sewer line or needs an ejector.',
      },
      {
        q: 'Will a lower-level shower feel like a basement?',
        a: 'Less so in a walkout, which usually has a window and proper height. With a decent extractor and lighting it reads as an ordinary bathroom.',
      },
    ],
  },

  'golf-manor': {
    intro:
      'Walk-in shower in Golf Manor? If water ends up on the floor every time, the glass is too short. Call (513) 657-3750.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'The most common complaint about walk-in showers is a wet bathroom floor, and it is nearly always a design fault rather than a user one. A fixed panel too short for the enclosure, a threshold with no upstand, or floor falls set toward the opening instead of the drain will all put water where you do not want it. Getting panel length, threshold detail and falls right is what separates a walk-in that works from one you end up mopping around — and it costs nothing extra to do correctly.',
    ],
    localFaqs: [
      {
        q: 'Will a walk-in shower leave water on the floor?',
        a: 'Not when the panel length, threshold and floor falls are designed together. Where water escapes it is almost always one of those three, and it costs nothing extra to get right at the outset.',
      },
      {
        q: 'Is a door safer than an open walk-in?',
        a: 'In a very small room, sometimes. We will tell you honestly when your enclosure is too tight for an open return rather than building one you will fight with.',
      },
    ],
  },

  // ---------- Cohort 7 · Green Township, north-side villages & east-side townships ----------

  fairfax: {
    intro:
      'Walk-in shower in Fairfax? A cracked fiberglass surround cannot really be patched — here is why. Call (513) 657-3750.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'A hairline crack in a moulded surround is usually a symptom rather than the problem. Those units flex where they are unsupported, and once one crack appears the movement that caused it has not gone anywhere — so a repair kit buys a season and the crack returns beside the patch. Worse, water has generally been passing through it for a while, which means the substrate behind wants checking. We would rather open it and tell you what is really going on than sell you a patch twice.',
    ],
    localFaqs: [
      {
        q: 'Can a cracked shower surround be repaired?',
        a: 'Temporarily. The crack comes from flex in an unsupported panel, and a patch does not remove the flex — so it reappears beside the repair. By then water has usually reached the substrate.',
      },
      {
        q: 'How do we know if water got behind it?',
        a: 'Soft spots, staining at the base, or a floor that gives underfoot near the surround. We open a small area on the site visit rather than guessing from the surface.',
      },
    ],
  },

  mack: {
    intro:
      'Walk-in shower in Mack? If the third shower of the morning runs cold, that is recovery rate — not the shower. Call (513) 657-3750.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'A family running showers back to back is asking a question about the water heater rather than the shower, and it is worth answering before the work rather than after. What matters is the first-hour rating — how much hot water the heater can actually deliver in an hour, not the tank size on the label. A new shower with a higher flow rate can tip a marginal heater over the edge, so we check the numbers and tell you if the shower you want needs the heater dealt with too.',
    ],
    localFaqs: [
      {
        q: 'Will a new shower use more hot water?',
        a: 'It can, depending on the head you choose. If your heater is already marginal for back-to-back showers, we would rather show you the numbers up front than have you discover it on the first school morning.',
      },
      {
        q: 'Do we need a bigger water heater?',
        a: 'Not always — sometimes a lower-flow head or a different sequence solves it. We would rather size the shower to the house than sell you equipment you do not need.',
      },
    ],
  },

  'monfort-heights': {
    intro:
      'Walk-in shower in Monfort Heights? Cheap glass and good glass look identical on day one. Call (513) 657-3750.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'The difference between an inexpensive enclosure and a good one is not visible in a showroom, but it shows within two years. Glass thickness determines whether a panel feels solid or flexes when the door closes. Hinge and clamp quality decides whether it still shuts squarely after a thousand uses. And the seal detail is what stops the drip that appears at the bottom corner. None of it is exotic, all of it is where a low price is usually coming from, and we will show you what you are choosing between.',
    ],
    localFaqs: [
      {
        q: 'Is thicker shower glass worth the money?',
        a: 'Generally yes for a door or a long panel — it flexes less and the hardware holds alignment better over time. On a short fixed panel the difference matters much less, and we will say so.',
      },
      {
        q: 'Why does an enclosure start dripping after a year?',
        a: 'Usually hinge wear letting the door drop slightly out of square, or a seal that was never right. Both come back to hardware quality rather than the glass itself.',
      },
    ],
  },

  bridgetown: {
    intro:
      'Walk-in shower in Bridgetown? How much cleaning you sign up for is decided at the design stage. Call (513) 657-3750.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Grout is where showers get their reputation for maintenance, and how much of it you live with is a choice. Large-format tile means fewer joints; epoxy grout resists staining far better than cement-based; and a solid surround panel has effectively none at all. Each step costs a little more up front and saves a recurring job for twenty years. We would rather have that conversation before the tile is chosen than hear about it at the first annual clean.',
    ],
    localFaqs: [
      {
        q: 'How do we get a shower that needs less cleaning?',
        a: 'Fewer joints and better grout. Large-format tile reduces the joint count, epoxy grout resists staining, and a solid panel system removes grout almost entirely. Each costs a little more and saves a recurring chore.',
      },
      {
        q: 'Does grout need resealing?',
        a: 'Cement-based grout does, periodically. Epoxy does not in the same way, which is much of what you are paying for.',
      },
    ],
  },

  finneytown: {
    intro:
      'Walk-in shower in Finneytown? Frameless glass is measured after the tiling — so it is two visits, not one. Call (513) 657-3750.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Worth being straight about the timeline. A one-day install is genuinely one day where a stock base and a standard enclosure are used. But frameless glass is templated against the finished tile — nobody can cut it accurately beforehand — so it is fabricated afterwards and fitted on a second visit a week or two later. In between you have a working shower with a temporary curtain. We say that at quotation stage rather than letting you expect glass on day one.',
    ],
    localFaqs: [
      {
        q: 'Is it really a one-day install?',
        a: 'With a stock base and standard enclosure, yes. With custom frameless glass, the glass is templated against the finished tile and fitted on a second visit — usually a week or two later. We tell you which yours is before you sign.',
      },
      {
        q: 'Can we use the shower while we wait for the glass?',
        a: 'Yes, with a temporary curtain. The waterproofing and plumbing are complete; only the enclosure is outstanding.',
      },
    ],
  },

  amberley: {
    intro:
      'Walk-in shower in Amberley Village? At this size the room can become a wet room rather than a shower in a box. Call (513) 657-3750.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'Where a primary bathroom is genuinely large, the most interesting option is not a bigger enclosure but no enclosure at all — a wet room, where the entire floor is waterproofed and falls to a drain, and the shower zone is defined by a single glass screen or nothing. It reads as far more generous than a boxed shower and it is completely step-free. It demands more of the waterproofing and the falls than a conventional build, which is exactly why it is worth doing properly or not at all.',
    ],
    localFaqs: [
      {
        q: 'What is a wet room?',
        a: 'A bathroom where the whole floor is waterproofed and falls to a drain, so the shower needs no tray and no enclosure beyond a screen. It suits a large room and it is completely step-free.',
      },
      {
        q: 'Does a wet room mean everything gets wet?',
        a: 'Not when the falls and the screen are designed properly — the water goes where it is directed. Getting that wrong is the failure mode, which is why it is a design-led job rather than a fixture choice.',
      },
    ],
  },

  'arlington-heights': {
    intro:
      'Walk-in shower in Arlington Heights? The old tub leaves with us the same day — that is included. Call (513) 657-3750.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'A small practical point people ask about more than they expect to: the old tub, the surround and the debris go with our crew on the day, in the price. On tight village streets there is nowhere to leave a cast-iron tub sitting for a week, and we would not ask you to arrange a hauler after the fact. Metal fixtures go for scrap rather than landfill where we can, which costs you nothing either way.',
    ],
    localFaqs: [
      {
        q: 'Who gets rid of the old tub?',
        a: 'We do, on the same day, and it is in the price. There is rarely anywhere to store it on streets this tight, so leaving it for you to deal with is not an option we would offer.',
      },
      {
        q: 'Is there a skip outside for days?',
        a: 'Not usually on a job this size — debris leaves in our vehicles the day it comes out. Where a skip is genuinely needed we arrange the placement in advance.',
      },
    ],
  },

  'north-college-hill': {
    intro:
      'Walk-in shower in North College Hill? If the pipes bang when the shower shuts off, that is fixable now. Call (513) 657-3750.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'In closely built houses with bathrooms backing onto bedrooms, plumbing noise is a real quality-of-life issue. The bang when a modern shower valve closes quickly is water hammer, and it is solved with arrestors fitted at the valve — a small part, fitted while the wall is open, that cannot easily be added later. Insulating the pipe run in a shared wall is the other half of it. Both are cheap at this moment and impossible afterwards without opening tile.',
    ],
    localFaqs: [
      {
        q: 'Why do the pipes bang when the shower turns off?',
        a: 'Water hammer — the moving column of water stopping abruptly. Arrestors at the valve absorb it, and fitting them while the wall is open costs very little.',
      },
      {
        q: 'Can you make the plumbing quieter through a shared wall?',
        a: 'To a degree, yes — insulating the pipe run and isolating it from the framing both help. It is worth doing when the bathroom backs onto a bedroom.',
      },
    ],
  },

  newtown: {
    intro:
      'Walk-in shower in Newtown? Over a crawl space, the drain work happens from underneath — which is good news. Call (513) 657-3750.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'A lot of these houses sit over a crawl space rather than a basement or a slab, and for a shower conversion that is genuinely the easiest case. The drain can be relocated from below without cutting concrete or opening the floor from above, which keeps both the cost and the disruption down. What the crawl does demand is a proper look at what is under there first — moisture, insulation and the condition of the joists all matter on ground this low.',
    ],
    localFaqs: [
      {
        q: 'Is a crawl space better or worse for moving a drain?',
        a: 'Better, generally. The work happens from underneath rather than cutting the floor or a slab, which keeps cost and disruption down.',
      },
      {
        q: 'What do you check in the crawl space?',
        a: 'Moisture, ventilation and the condition of the joists under the bathroom. On low river ground those tell us whether the floor is sound enough for a tiled pan before we quote one.',
      },
    ],
  },

  'turpin-hills': {
    intro:
      'Walk-in shower in Turpin Hills? The closet next to the shower is usually the cheapest square footage you own. Call (513) 657-3750.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Where a primary bathroom already has a shower that is simply too small, the answer is often a wall away rather than a fixture away. A linen closet or the corner of an adjoining wardrobe backing onto the enclosure can usually be absorbed, turning a cramped 32-inch corner into something you can genuinely use — and because the drain stays put, it costs far less than the extra space suggests. We look at what is on the other side of every wall before assuming the footprint is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can our existing shower be made bigger?',
        a: 'Often, by absorbing an adjoining closet rather than moving plumbing. Since the drain usually stays where it is, the cost is much lower than people expect for the space gained.',
      },
      {
        q: 'Is losing the linen closet worth it?',
        a: 'That depends on where else the storage can go, and we will work through it with you rather than assuming. Sometimes the honest answer is that the closet is worth more than the extra foot of shower.',
      },
    ],
  },

  silverton: {
    intro:
      'Walk-in shower in Silverton? Tile to the ceiling or stop short — it changes more than the look. Call (513) 657-3750.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'Stopping the tile at showerhead height is the cheaper detail and it leaves a painted band above that takes the full force of the steam — which is where the peeling and the mould appear first. Running tile to the ceiling costs a little more, removes that vulnerable band entirely and makes a small room read as taller. Where a budget genuinely will not stretch, the compromise is a moisture-resistant paint system rather than ordinary emulsion, and we will tell you which we are giving you.',
    ],
    localFaqs: [
      {
        q: 'Should the tile go all the way to the ceiling?',
        a: 'Where the budget allows, yes. The painted band above showerhead height takes the most steam and is where problems start. Full-height tile removes it and makes the room feel taller.',
      },
      {
        q: 'What if we cannot stretch to full-height tile?',
        a: 'Then the band above wants a proper moisture-resistant paint system rather than ordinary emulsion. It is a real difference and we will specify it rather than leaving it to chance.',
      },
    ],
  },

  lockland: {
    intro:
      'Walk-in shower in Lockland? In these cottages there are usually three floors under the one you can see. Call (513) 657-3750.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The bathroom in a worker cottage was added decades after the house was built and has typically been redone twice since, each layer laid straight over the last. Lift the vinyl and there is often sheet flooring over hardboard over the original boards — and every layer raises the floor, which is why the door catches and the threshold is a step. Taking it back to the structure is the right start for a shower, and it usually gives back an inch or two of height into the bargain.',
    ],
    localFaqs: [
      {
        q: 'Why is our bathroom floor higher than the hallway?',
        a: 'Layers. Each renovation added a covering over the last rather than removing it. Taking the floor back to the structure before a shower goes in usually recovers that height.',
      },
      {
        q: 'Does all of that have to come out?',
        a: 'For a shower, yes — a waterproof assembly has to start from a sound, known substrate. It is also the only way to see the condition of what is underneath before committing to a price.',
      },
    ],
  },

  // ---------- Cohort 8 · Colerain & Green Township, Anderson Township, north-side cities ----------

  groesbeck: {
    intro:
      'Walk-in shower in Groesbeck? The head and valve should be set to your household, not to a code minimum. Call (513) 657-3750.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Shower heads in this housing were roughed in at a height that suited an average adult of the 1950s, which is why plenty of people here duck slightly to rinse their hair. Rough-in height is set once, before the wall closes, and it is free to get right at that moment — so we ask who uses the shower and set the head and the valve to them. It is a small question that nobody asks and it changes how the shower feels every single day.',
    ],
    localFaqs: [
      {
        q: 'Can the shower head be set higher?',
        a: 'Yes, and it costs nothing if it is decided before the wall closes. We ask who uses the shower and set the rough-in height accordingly rather than defaulting to the standard.',
      },
      {
        q: 'What if people in the house are very different heights?',
        a: 'A fixed head set for the tallest plus a hand shower on a slide bar covers everyone. It is the most practical answer to a shared bathroom.',
      },
    ],
  },

  'mount-healthy': {
    intro:
      'Walk-in shower in Mount Healthy? If your only bathroom is downstairs off the kitchen, there may be a better place for it. Call (513) 657-3750.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town centre and streets of early-1900s and mid-century homes.',
      'Older houses here often had their first bathroom carved out of a ground-floor service room — off the kitchen, or under the stairs — because that is where the plumbing already ran. It works, but it means walking downstairs at night and a bathroom nobody wants adjoining a kitchen. Where there is a suitable upstairs room and the stack can be reached, relocating is worth pricing alongside simply improving what is there. We will show you both rather than assuming the existing position is fixed.',
    ],
    localFaqs: [
      {
        q: 'Can the bathroom be moved upstairs?',
        a: 'Sometimes, where a suitable room exists and the stack can be reached without major work. It is a bigger project than a shower conversion, so we price both and let you compare properly.',
      },
      {
        q: 'Is it worth keeping the downstairs bathroom too?',
        a: 'Usually yes, even reduced to a half bath. Two bathrooms in a house this size is worth more than one better-placed one.',
      },
    ],
  },

  reading: {
    intro:
      'Walk-in shower in Reading? If the shower gurgles when the washer drains, they share a line. Call (513) 657-3750.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'In a lot of these houses the bathroom waste and the laundry discharge join the same run, and a washing machine dumps water far faster than a bathroom fixture ever does. If the shower gurgles or backs up when the machine drains, the line is undersized or partly blocked — and a new shower with a wider, shallower trap will show that fault more, not less. It is much better established before the install than blamed on the new work afterwards.',
    ],
    localFaqs: [
      {
        q: 'Our shower gurgles when the washer runs — why?',
        a: 'They are almost certainly sharing a waste line that cannot take the washer’s discharge rate. A new shower will make it more obvious rather than less, so it is worth sorting first.',
      },
      {
        q: 'Can that be fixed as part of the shower job?',
        a: 'Often, by upsizing or re-venting the shared section while things are open. We will quote it separately so you can see exactly what it is.',
      },
    ],
  },

  dent: {
    intro:
      'Walk-in shower in Dent? Put the valve where you can reach it without standing in the cold water. Call (513) 657-3750.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'A detail that separates a considered shower from a standard one: where the control sits. Put the valve directly under the head, as most builders do, and you reach through the cold spray every morning while it warms up. Set it on the entry side, offset from the head, and you can start the water from outside the enclosure and step in when it is ready. It costs nothing to position properly at rough-in and it is the kind of thing people notice for years without knowing why.',
    ],
    localFaqs: [
      {
        q: 'Where should the shower control go?',
        a: 'On the entry side, offset from the head, so you can turn it on and let it warm without standing in it. It costs nothing to place properly at rough-in.',
      },
      {
        q: 'Can the valve be moved in an existing shower?',
        a: 'Only by opening the wall, which is why a conversion is the moment to fix it. During a replacement it is essentially free to relocate.',
      },
    ],
  },

  'deer-park': {
    intro:
      'Walk-in shower in Deer Park? A genuine roll-in shower has dimensions — it is not just a low step. Call (513) 657-3750.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'When a shower has to work for a wheelchair or a walker, "accessible" stops being a style and becomes a set of measurements: a genuinely level entry, an enclosure deep enough to turn in, clear floor space outside it, a fold-down seat with the transfer side clear, and controls reachable from seated height. Not every mid-century bathroom can take all of that, and we would rather map it honestly against your room than promise something that technically fits and practically does not.',
    ],
    localFaqs: [
      {
        q: 'Can our bathroom take a proper roll-in shower?',
        a: 'It depends on the room, and it deserves a straight answer rather than an optimistic one. We measure the enclosure, the turning space and the approach against what is actually needed and tell you where your room falls short.',
      },
      {
        q: 'What if the room is too small?',
        a: 'Sometimes absorbing an adjoining closet makes it work. Where it genuinely cannot, we will say so — that is more useful to you than a shower that does not do the job.',
      },
    ],
  },

  'terrace-park': {
    intro:
      'Walk-in shower in Terrace Park? A warm floor is the upgrade people rate highest afterwards. Call (513) 657-3750.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'Of everything we install, electric underfloor heating is the item clients mention most a year later. Tile is cold underfoot in an old house with a suspended floor, and the mat goes down under it during a job the floor is already open for — so the cost is the mat, a thermostat and an afternoon rather than a project of its own. It also dries the floor faster after a shower, which quietly helps everything else in the room last.',
    ],
    localFaqs: [
      {
        q: 'Is underfloor heating worth it in a bathroom?',
        a: 'It is the upgrade people rate most highly afterwards, and since the floor is open anyway during a shower job the added cost is modest. It also dries the floor faster, which helps the room generally.',
      },
      {
        q: 'Is it expensive to run?',
        a: 'For a bathroom-sized area on a timer, no — it is a small load for a few hours a day. We set it up on a thermostat rather than leaving it running.',
      },
    ],
  },

  'dry-run': {
    intro:
      'Walk-in shower in Dry Run? Put a shutoff where you can actually reach it before the wall closes. Call (513) 657-3750.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'In most houses here, stopping a leak in the bathroom means finding the main in the basement — in the dark, while water runs. Fitting accessible isolation valves for the bathroom while the wall is open is a small part that turns that into a ten-second job, and it makes every future repair simpler and cheaper. Where a bathroom sits above a finished basement, we would go further and suggest a leak sensor, because the damage below is what actually costs.',
    ],
    localFaqs: [
      {
        q: 'Can we get a shutoff just for the bathroom?',
        a: 'Yes, and fitting isolation valves while the wall is open is inexpensive. It turns a frantic trip to the basement into a ten-second job and makes future repairs cheaper.',
      },
      {
        q: 'Are leak sensors worth fitting?',
        a: 'Where the bathroom sits over a finished basement, we think so. The shower itself is unlikely to fail, but a supply connection anywhere in the room is what damages the space below.',
      },
    ],
  },

  'white-oak': {
    intro:
      'Walk-in shower in White Oak? A shower head’s spec sheet and how it actually feels are two different things. Call (513) 657-3750.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Heads are sold on flow rate and face diameter, and neither tells you much. A large rain head at low flow feels gentle to some people and feeble to others; a compact head with well-designed jets can feel stronger at the same rate. What actually matters is the pressure available in your house and what you want from it, which is why we would rather talk through how you shower than hand you a catalogue. Where possible, try one before it is plumbed in permanently.',
    ],
    localFaqs: [
      {
        q: 'Does a bigger shower head mean a better shower?',
        a: 'Not necessarily. A large rain head spreads the same flow over more area, which feels gentler — lovely for some people, disappointing for others. What you want from it matters more than the diameter.',
      },
      {
        q: 'Can we have both a rain head and a stronger one?',
        a: 'Yes, on a diverter, which is decided at valve stage. It is the most reliable way to keep everyone in the house happy.',
      },
    ],
  },

  forestville: {
    intro:
      'Walk-in shower in Forestville? Where curbless is not possible, a low curb gets most of the benefit. Call (513) 657-3750.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Fully curbless entry depends on the floor structure allowing a recess, and in plenty of these houses it does not. That is not the end of the conversation. A low-profile base with a threshold of an inch or so, set flush with a wide entry and no door to swing, gives most of the practical benefit — easy to step over, easy to get a walker or a cleaning brush across — without the structural work. We show you the difference honestly rather than treating curbless as the only good answer.',
    ],
    localFaqs: [
      {
        q: 'Is a low curb nearly as good as curbless?',
        a: 'For most households, close. A one-inch threshold with a wide, door-free entry is easy to step over and far simpler to build than a recessed floor. For genuine wheelchair access it is not equivalent, and we will say so.',
      },
      {
        q: 'Why can we not always have curbless?',
        a: 'Because the shower floor has to sit below the surrounding floor, and that depth has to come from the structure. Whether it can depends on joist direction and depth, which we check first.',
      },
    ],
  },

  'cherry-grove': {
    intro:
      'Walk-in shower in Cherry Grove? The electrical side of a bathroom is where corners get cut quietly. Call (513) 657-3750.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'A shower job usually touches the electrics — a wet-rated light over the enclosure, an extractor sized to the room, sometimes underfloor heating — and all of it has to be on properly protected circuits with GFCI where required. In houses of this age the bathroom circuit is frequently older than the requirement, and quietly adding load to it is exactly the sort of shortcut nobody sees. We check what the circuit is and what it can take, and put right what needs it rather than hoping.',
    ],
    localFaqs: [
      {
        q: 'Does a shower install involve electrical work?',
        a: 'Usually — the extractor, a wet-rated light, sometimes underfloor heating. All of it needs appropriate protection, and in houses of this age the existing bathroom circuit is worth checking before load is added.',
      },
      {
        q: 'Will the whole bathroom need rewiring?',
        a: 'Rarely. Usually it is a matter of confirming the circuit and its protection. Where something genuinely needs upgrading we show it as a line on the quote rather than absorbing it silently.',
      },
    ],
  },

  kenwood: {
    intro:
      'Walk-in shower in Kenwood? A two-person shower needs two sets of controls to actually work. Call (513) 657-3750.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Larger primary suites here often have room for a shower two people can genuinely use, but simply making the enclosure bigger does not achieve it. What makes it work is two heads on separate valves, so one person is not adjusting the temperature the other is standing under, positioned so neither is in the other’s spray or in the traffic path to the door. That is a plumbing decision made at rough-in, not a fixture chosen at the end.',
    ],
    localFaqs: [
      {
        q: 'What makes a shower genuinely usable by two people?',
        a: 'Separate valves rather than one, heads positioned so nobody is in the other’s spray, and an entry that does not run through either zone. Size alone does not do it.',
      },
      {
        q: 'Does that need a bigger supply?',
        a: 'Often yes — two heads running together roughly doubles demand. We check the supply and heater capacity before specifying rather than after.',
      },
    ],
  },

  'lincoln-heights': {
    intro:
      'Walk-in shower in Lincoln Heights? Lincoln Heights issues its own permits — and we quote to the house, not the postcode. Call (513) 657-3750.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'Two practical things follow from that history. It is its own municipality, so permits and inspections for work here come through Lincoln Heights rather than the county or a neighbouring city, and we confirm that before scheduling. And the housing is modest, which means the top of our range rarely makes sense — a well-built middle-tier shower with sound waterproofing, a good valve and a properly sized extractor is the right call here, and we will say so rather than quoting upward.',
    ],
    localFaqs: [
      {
        q: 'Who issues permits for work in Lincoln Heights?',
        a: 'The village itself. It has been self-governing since its founding, and we confirm its requirements before scheduling rather than assuming a county process.',
      },
      {
        q: 'How much should we spend on a shower here?',
        a: 'Usually the middle of our range rather than the top. The money that matters is behind the surface — waterproofing, valve, ventilation — and that costs the same whichever finish you pick.',
      },
    ],
  },

  // ---------- Cohort 9 · Sycamore & Colerain Township, north-side villages, far west ----------

  dillonvale: {
    intro:
      'Walk-in shower in Dillonvale? Where the tile cuts land is decided before the first tile goes on. Call (513) 657-3750.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Two showers can use identical tile and look completely different, and the reason is setting out. Starting from a corner and working across leaves a sliver of a cut tile at the far end and a niche that lands mid-tile. Setting out from the centre, or from the most visible edge, puts the awkward cuts where nobody looks and lets the niche and the shelf land on full tiles. It costs nothing but the half hour of planning that most jobs skip, and it is most of what people mean when they say tiling looks well done.',
    ],
    localFaqs: [
      {
        q: 'Why do some tiled showers look better with the same tile?',
        a: 'Setting out. Deciding where the cuts fall, so the visible edges get full tiles and the niche lands cleanly, is a planning step rather than a material one — and it is the difference people notice without being able to name.',
      },
      {
        q: 'Can we see the layout before you start?',
        a: 'Yes. We mark out the setting out and the niche position before any tile is fixed, so you can see where things land while it can still be changed.',
      },
    ],
  },

  woodlawn: {
    intro:
      'Walk-in shower in Woodlawn? Ask what waterproofing system is going in — the answer tells you a lot. Call (513) 657-3750.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'There are three honest ways to waterproof a shower and one dishonest one. A bonded sheet membrane, a liquid-applied membrane built up to the right thickness, or foam backer board with sealed seams will all last decades when installed properly. Cement board with nothing over it — still common, still cheap — is not waterproofing; it is a substrate that tolerates getting wet, which is not the same thing. It is worth asking any contractor which of the four you are being quoted.',
    ],
    localFaqs: [
      {
        q: 'What waterproofing do you use behind the tile?',
        a: 'A bonded sheet membrane, a liquid-applied membrane at proper thickness, or sealed foam board depending on the job. What we do not do is rely on cement board alone, which tolerates water rather than excluding it.',
      },
      {
        q: 'Can we see it before it gets tiled over?',
        a: 'Yes, and we would encourage it. The pan is flood-tested before tiling and you are welcome to look at the assembly while it is still visible.',
      },
    ],
  },

  addyston: {
    intro:
      'Walk-in shower in Addyston? If we open a wall and find rot, here is exactly what happens to the price. Call (513) 657-3750.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'In century-old houses on low ground, the honest question is what happens when something unexpected turns up. Our price is fixed, and that holds because we open a wall on the site visit rather than quoting blind — most of what people call a surprise is simply something nobody looked for. Where genuine concealed damage exists that no inspection could have found, we show you the photograph, the cost and the options before touching it. What we will not do is discover leverage halfway through a job.',
    ],
    localFaqs: [
      {
        q: 'What if you find rot once the wall is open?',
        a: 'We stop, photograph it, and show you the cost and the options before doing anything. Most of what becomes a surprise elsewhere is found at our site visit instead, because we open a wall before quoting.',
      },
      {
        q: 'So the fixed price is not always fixed?',
        a: 'It holds for everything we could reasonably establish beforehand, which is nearly all of it. Genuinely concealed structural damage is the one exception, and we would rather state that plainly than promise something no one can.',
      },
    ],
  },

  greenhills: {
    intro:
      'Walk-in shower in Greenhills? The town was built to a plan, so the same bathroom repeats — and so do the answers. Call (513) 657-3750.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Because Greenhills was designed and built as a single scheme, its original bathrooms are near-identical from one home to the next — compact, efficient and laid out to a standard. That is genuinely useful: we have solved this room before, and we know what fits, where the stack runs and which layouts work in it. The Landmark designation concerns the exterior, so the bathroom itself is open — what the 1930s construction affects is the fabric behind the tile.',
    ],
    localFaqs: [
      {
        q: 'Does the historic district restrict our bathroom?',
        a: 'No — the designation concerns what is visible from outside. Interior work like a shower is yours to decide. Anything touching a window or an elevation is a different conversation and we will flag it.',
      },
      {
        q: 'Do these original bathrooms have room for a walk-in shower?',
        a: 'Yes, in most of the standard layouts here — we have done the room before. The tub position usually converts cleanly, and the compact footprint suits a well-designed shower better than it ever suited a tub.',
      },
    ],
  },

  northbrook: {
    intro:
      'Walk-in shower in Northbrook? Doing the vanity at the same time costs far less than doing it later. Call (513) 657-3750.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'A new shower has a habit of making everything else in the room look tired, and the vanity is usually next. Doing both together is meaningfully cheaper than doing them a year apart — the floor is already up, the crew is already there, the plumbing is already isolated and the room only has to be disrupted once. We will price the shower on its own and the shower with the vanity, so you can see the difference rather than discover it when you come back to it.',
    ],
    localFaqs: [
      {
        q: 'Should we do the vanity at the same time?',
        a: 'If you are likely to want it within a couple of years, yes — it costs considerably less alongside the shower than as a separate job later. We quote both so you can compare properly.',
      },
      {
        q: 'Does that make it a full remodel?',
        a: 'Not necessarily. Shower plus vanity and floor is still a focused job, well short of a down-to-the-studs remodel. We will tell you which one you are actually asking for.',
      },
    ],
  },

  'indian-hill': {
    intro:
      'Walk-in shower in Indian Hill? On a private well, the water itself shapes what we should install. Call (513) 657-3750.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Where a house runs on a private well, water chemistry stops being an abstraction. Iron leaves orange staining on a new base and in the grout within months, manganese leaves black, and neither is a cleaning problem — it is a treatment problem that no fixture choice solves. On the drainage side, adding a shower adds load to a septic system whose capacity has to be confirmed rather than assumed. Both are established before we specify anything, because both change what belongs in the room.',
    ],
    localFaqs: [
      {
        q: 'Our well water stains everything — will a new shower be the same?',
        a: 'Without treatment, yes. Iron and manganese stain a new base and grout within months regardless of what the surfaces are made of. We would rather raise treatment before you buy finishes than after.',
      },
      {
        q: 'Does adding a shower affect our septic system?',
        a: 'It adds load, so the system’s capacity is worth confirming at design stage. On a large property that is usually straightforward, but it should be checked rather than assumed.',
      },
    ],
  },

  evendale: {
    intro:
      'Walk-in shower in Evendale? The pan gets flood-tested before a single tile goes on it. Call (513) 657-3750.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'A shower pan is the one part of the job that cannot be inspected once it is finished, so it gets tested before it is covered. The drain is plugged, the pan is filled and left standing for a period, and the level is checked against where it started. If it holds, the tile goes on. If it does not, it is found now — when it costs an afternoon rather than a ceiling. It is a straightforward step, it is not universal practice, and it is worth asking any contractor whether they do it.',
    ],
    localFaqs: [
      {
        q: 'How do you know the pan does not leak?',
        a: 'Because it is filled and left standing before tiling, with the level checked. If it holds, we tile. If not, we find it at the point it costs an afternoon rather than a ceiling.',
      },
      {
        q: 'Does that add time to the job?',
        a: 'A few hours, and it is built into the schedule rather than added to it. On a multi-day tiled build it costs nothing in overall duration.',
      },
    ],
  },

  glendale: {
    intro:
      'Walk-in shower in Glendale? If you want it to look original, the materials have to be sourced, not just chosen. Call (513) 657-3750.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Owners here often want a shower that looks as though it could always have been there, and that is achievable, but it is a sourcing exercise rather than a selection from a standard range. Hexagonal floor tile in the right size, subway with the correct bevel and joint, exposed valve work in an appropriate finish, and a curtain rather than a frameless panel where the room asks for it. Those items have lead times, and knowing that early is what keeps the project on schedule.',
    ],
    localFaqs: [
      {
        q: 'Can a new shower look period-appropriate?',
        a: 'Yes, with the right materials — hexagonal floor tile, correctly proportioned subway, exposed valve work in a suitable finish. It is a sourcing exercise rather than a standard selection, so we start it early.',
      },
      {
        q: 'Do period-style materials take longer to get?',
        a: 'Often, yes. We identify those items at design stage and order them first, so the lead time runs alongside everything else rather than holding up the install.',
      },
    ],
  },

  sharonville: {
    intro:
      'Walk-in shower in Sharonville? Every choice made before we start is a change order that never happens. Call (513) 657-3750.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention centre and industrial corridors.',
      'Most change orders in this trade are not surprises — they are decisions that were never actually made. Tile, grout colour, base type, valve and trim finish, glass configuration, niche size and position, fan and light: all of it is settled and written down before demolition, and everything is on site before the first tool comes out. That is precisely what makes a fixed price and a one-day install possible, and it is why we push on selections earlier than clients sometimes expect.',
    ],
    localFaqs: [
      {
        q: 'What do we need to choose, and when?',
        a: 'Tile and grout, base type, valve and trim finish, glass configuration, niche size and position, fan and light — all before demolition. We walk you through it in one session rather than drip-feeding decisions.',
      },
      {
        q: 'What if we change our minds after signing?',
        a: 'Before materials are ordered, usually straightforward. After they arrive, it costs real money — which is exactly why we settle selections properly at the start.',
      },
    ],
  },

  northgate: {
    intro:
      'Walk-in shower in Northgate? Sometimes the shower is the whole job — and sometimes it is not the right one. Call (513) 657-3750.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'A shower conversion is a focused, affordable project and it is genuinely the right answer in most of these houses. But where the floor is failing, the vanity is going, the layout does not work and the ventilation was never adequate, doing it piecemeal costs more in total than doing the room once. We will tell you which situation you are in, including when the honest recommendation is the larger job we would otherwise be quoting a fraction of.',
    ],
    localFaqs: [
      {
        q: 'Should we do a shower or a full bathroom remodel?',
        a: 'If the shower is the problem and the rest of the room is sound, a conversion. If the floor, vanity, layout and ventilation all need work, doing it once is cheaper than four visits. We give you that view straight.',
      },
      {
        q: 'Can the shower be done now and the rest later?',
        a: 'Yes, and sometimes that is right for budget reasons. We will just be clear about what doing it in stages costs compared with doing it together.',
      },
    ],
  },

  springdale: {
    intro:
      'Walk-in shower in Springdale? One bathroom, three generations, three different needs — that is a design problem. Call (513) 657-3750.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'Where a household spans grandparents, parents and children, a single bathroom has to work for someone who needs a seat and a grab bar, someone who wants a strong shower in six minutes, and someone who needs a tub. That is not solved by one specification — it is solved by a fold-down seat rather than a fixed bench, a hand shower alongside a fixed head, blocking behind the tile everywhere it might be wanted, and a low threshold rather than a high one. All decided at design stage, all invisible afterwards.',
    ],
    localFaqs: [
      {
        q: 'Can one shower work for a multigenerational household?',
        a: 'Yes, with the right details — a fold-down seat, a hand shower on a slide bar alongside a fixed head, concealed blocking and a low threshold. None of it looks specialised and all of it has to be decided before the wall closes.',
      },
      {
        q: 'What if someone needs a tub?',
        a: 'Then we would look hard at keeping one somewhere in the house before converting the only one. That advice costs us the bigger job sometimes, and we give it anyway.',
      },
    ],
  },

  miamitown: {
    intro:
      'Walk-in shower in Miamitown? It is a long run out here, so we are straight about scheduling. Call (513) 657-3750.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'This is one of the further corners of our area, and we schedule it deliberately rather than squeezing it between closer work — overbooking is exactly how written start dates start slipping. The housing adds its own checks: on low river-bottom ground the fall between a relocated shower drain and the sewer is limited, and the floor structure under an older bathroom wants looking at before a tiled pan goes down.',
    ],
    localFaqs: [
      {
        q: 'Do you come out as far as Miamitown?',
        a: 'Yes, and we schedule it deliberately because of the distance rather than promising a date we would have to move. Once it is in writing, it stands.',
      },
      {
        q: 'Does the river bottom ground affect the shower?',
        a: 'It limits the fall available to a relocated drain, which we measure before designing. The floor structure is worth checking too before committing to a heavy tiled pan.',
      },
    ],
  },

  // ---------- Cohort 10 · North-side planned communities, far west river villages & NKY hills ----------

  'forest-park': {
    intro:
      'Walk-in shower in Forest Park? Most of our installs happen while people are at work — here is how that works. Call (513) 657-3750.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Nobody wants to take a day of leave to watch a bathroom get built. In most of these houses we work while the household is out: an agreed arrival time, a key or lockbox arrangement, a named project manager who is on site rather than a rotating crew, and the house locked and the protection removed before we leave. You get a photograph of the finished work the same day. It is a small thing that decides whether a one-day install actually costs you a day.',
    ],
    localFaqs: [
      {
        q: 'Do we need to be home for the install?',
        a: 'Not usually. We arrange access, work to an agreed arrival time and lock up before leaving, with a named project manager on site throughout. You get photographs of the finished work the same day.',
      },
      {
        q: 'Who is actually in our house?',
        a: 'Our own installers — we do not subcontract. That is the same reason we can back the work with a lifetime workmanship warranty.',
      },
    ],
  },

  'pleasant-run': {
    intro:
      'Walk-in shower in Pleasant Run? If the dog gets washed in it, that changes the specification. Call (513) 657-3750.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'A shower that doubles as where the dog gets rinsed off has a different brief from one that does not. A low threshold matters more, because a wet dog will not step over a curb. A hand shower on a long hose is essential rather than optional. And the drain wants a proper hair-catching cover, because dog coat blocks a shower trap far faster than anything human. None of it costs much, all of it has to be decided before the wall closes.',
    ],
    localFaqs: [
      {
        q: 'Can a walk-in shower work for washing dogs?',
        a: 'Yes, with a low threshold, a long hand shower hose and a decent hair-catching drain cover. Tell us at design stage — the threshold height in particular cannot be changed later.',
      },
      {
        q: 'Will the drain block up?',
        a: 'Far less with the right cover and an accessible trap. We specify one that can actually be cleared without tools rather than a flush grille that looks neat and traps everything.',
      },
    ],
  },

  cleves: {
    intro:
      'Walk-in shower in Cleves? If the house has taken water before, what is in the wall cavity comes first. Call (513) 657-3750.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'In a house that has been flooded, a bathroom wall can look sound and still hold saturated insulation and mould behind it. Building a new waterproof assembly straight over that seals the problem in rather than solving it. So the sequence here is: open it, assess it, remediate what is there, let it dry, and only then start the new work. It is the reason mould and mildew remediation is part of what we do rather than something we discover and hand back to you.',
    ],
    localFaqs: [
      {
        q: 'Our house flooded — can you still fit a shower?',
        a: 'Yes, but the wall cavity gets opened and assessed first. Building a waterproof assembly over saturated insulation or mould seals the problem in instead of fixing it.',
      },
      {
        q: 'Is remediation extra?',
        a: 'Mould and mildew remediation is part of what a proper install includes. Where flood damage goes beyond the bathroom, that is a bigger conversation and we will be straight about it.',
      },
    ],
  },

  'north-bend': {
    intro:
      'Walk-in shower in North Bend? A century-old house has settled — and a shower base needs a level floor. Call (513) 657-3750.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Houses of this age have moved, and a bathroom floor that looks fine can be out by half an inch across its width. A shower base set on that will rock, stress its joints and eventually leak; a tiled pan will not hold its falls. So the substrate gets checked with a level and, where needed, brought true with a self-levelling compound before anything goes down. It is an unglamorous step that adds a few hours and prevents the most common cause of a base failing early.',
    ],
    localFaqs: [
      {
        q: 'Does the floor need levelling first?',
        a: 'In a house this old, frequently. A base set on an uneven floor rocks and eventually leaks, and a tiled pan cannot hold correct falls. We check with a level and bring it true before anything is fitted.',
      },
      {
        q: 'Does that add much cost?',
        a: 'A modest amount — compound and a few hours. It is far cheaper than the base failing in three years, and we would rather it appeared on the quote than as a problem later.',
      },
    ],
  },

  loveland: {
    intro:
      'Walk-in shower in Loveland? If the bike trail ends at your back door, spec the shower for grit. Call (513) 657-3750.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'A household that comes home muddy from the trail asks more of a shower than a household that does not. A hand shower on a long hose to rinse legs and kit, a floor tile with a genuine slip rating rather than a polished one, an accessible trap that can be cleared of grit without tools, and a bench worth sitting on to get boots off. The house may be historic; the shower can still be built for how you actually use it.',
    ],
    localFaqs: [
      {
        q: 'What makes a shower better for rinsing off outdoors gear?',
        a: 'A long hand-shower hose, a floor with real slip resistance, and a trap you can clear of grit without tools. Grit is what wears a finish and blocks a drain, and it is easy to design around.',
      },
      {
        q: 'Does the riverside location affect the work?',
        a: 'On the low ground near the Little Miami it can. We check the fall available to a relocated drain and the floor structure before committing to a design.',
      },
    ],
  },

  harrison: {
    intro:
      'Walk-in shower in Harrison? On the state line, the first question is which side your house is actually on. Call (513) 657-3750.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'Sitting on a state boundary makes jurisdiction the first practical question rather than an afterthought. Whether permitting and inspection run under Ohio or Indiana rules depends on which side of the line the property sits, and the two are not the same process. We confirm it before a start date is agreed. On the low ground near the Whitewater, the fall available to a relocated shower drain is the second thing we check.',
    ],
    localFaqs: [
      {
        q: 'Does it matter which side of the state line we are on?',
        a: 'For permitting and inspection, yes — Ohio and Indiana run different processes. We confirm which applies before scheduling rather than discovering it partway through.',
      },
      {
        q: 'Do you work on the Indiana side?',
        a: 'Yes. It is a different jurisdiction rather than a different job, and we handle the filing either way.',
      },
    ],
  },

  ludlow: {
    intro:
      'Walk-in shower in Ludlow? If you have an original tiled floor, it may be worth building around rather than over. Call (513) 657-3750.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'A surprising number of bathrooms here still have their original hexagonal or mosaic floor under later coverings, and where it survives intact it is worth more than anything we would put down in its place. Building a new shower while retaining it is possible — the enclosure footprint is set to the existing tile, the new waterproofing is detailed to meet it, and the join is deliberate rather than apologetic. We look for it before assuming the floor comes up.',
    ],
    localFaqs: [
      {
        q: 'Could there be an original floor under our vinyl?',
        a: 'In houses of this era here, often — hexagonal or mosaic tile laid over and forgotten. We lift a corner on the site visit before assuming the whole floor comes out.',
      },
      {
        q: 'Can a new shower work with an original floor?',
        a: 'Yes, with the enclosure set to the existing tile and the waterproofing detailed to meet it. It takes more care than replacing everything, and in a house like this it is usually worth it.',
      },
    ],
  },

  'park-hills': {
    intro:
      'Walk-in shower in Park Hills? If hot water takes a minute to arrive, that is distance — and it is solvable. Call (513) 657-3750.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'Houses built into this hillside are tall rather than wide, and the bathroom is often several floors from a water heater sitting in the lowest level. That distance is why the shower runs cold for the first minute and why a good deal of water goes down the drain waiting. A recirculation loop fitted while the walls are open fixes it properly and costs a fraction of what it would as a standalone retrofit — which makes a shower conversion exactly the right moment.',
    ],
    localFaqs: [
      {
        q: 'Why does hot water take so long to reach our shower?',
        a: 'Distance from the heater, which in a tall hillside house is considerable. A recirculation loop solves it, and fitting one while the walls are open is far cheaper than doing it later.',
      },
      {
        q: 'Is that expensive to add?',
        a: 'Modest during a conversion, because the access already exists. As a standalone job afterwards it costs several times as much, which is why we raise it now.',
      },
    ],
  },

  bromley: {
    intro:
      'Walk-in shower in Bromley? On ground this low, we will often tell you not to put one downstairs. Call (513) 657-3750.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'A basement shower here needs a sealed ejector, waterproofing specified for sustained moisture and an honest view of what happens when the river is high — which together cost real money for a room that may not stay dry. In most of these houses the same budget does considerably more good spent on the main-floor bathroom instead. We will say that even though it is the smaller job, and where a lower-level shower is genuinely needed we build it for the conditions rather than to a standard detail.',
    ],
    localFaqs: [
      {
        q: 'Should we put a shower in the basement?',
        a: 'On ground this low, usually not — and we would rather say so before you spend. The same money generally does more in the main-floor bathroom.',
      },
      {
        q: 'What if we genuinely need a second shower downstairs?',
        a: 'Then it is built for the conditions: a sealed ejector, waterproofing specified for sustained moisture, and a frank conversation about high water first.',
      },
    ],
  },

  'fort-wright': {
    intro:
      'Walk-in shower in Fort Wright? Up on the hilltop, a lower-level shower is usually a straightforward job. Call (513) 657-3750.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'The elevation here removes the water-table questions that dominate work in the river villages below, so adding a shower to a lower level is generally conventional rather than specialised. What still needs checking is the drain elevation itself: houses stepped into a grade can put a lower floor closer to the sewer line than expected, and that decides gravity drainage versus an ejector. We measure it on the first visit rather than assuming the hilltop settles it.',
    ],
    localFaqs: [
      {
        q: 'Is a lower-level shower easier up here than by the river?',
        a: 'Generally yes — the elevation avoids the high water table and flood questions that shape work in Bromley or Ludlow. We still measure the drain elevation, because a stepped house can sit closer to the sewer than expected.',
      },
      {
        q: 'Will it need a pump?',
        a: 'Often not on the hilltop. Where the measurement says otherwise, a sealed ejector is straightforward and we price it clearly rather than folding it in.',
      },
    ],
  },

  'fort-mitchell': {
    intro:
      'Walk-in shower in Fort Mitchell? Choose a trim finish you will still like in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'Fixture finishes move in cycles, and a shower is not something you redo when the fashion turns. Polished chrome and a good brushed nickel have looked right for decades and will keep doing so. Matt black and unlacquered brass are genuinely handsome and are having a moment — which is fine if you love them, worth thinking about if you are choosing them because everything else does. We will give you our honest view rather than whatever is current, and we will tell you which finishes show water spots.',
    ],
    localFaqs: [
      {
        q: 'Which shower finish dates fastest?',
        a: 'Whatever is most fashionable at the time. Chrome and brushed nickel have stayed right for decades; matt black and unlacquered brass are excellent if you genuinely love them rather than following them.',
      },
      {
        q: 'Do some finishes show water marks more?',
        a: 'Yes — polished chrome and matt black both show spotting readily, brushed finishes hide it best. Worth knowing before you choose rather than after.',
      },
    ],
  },

  'villa-hills': {
    intro:
      'Walk-in shower in Villa Hills? We do not fit liners over an existing shower — and here is why. Call (513) 657-3750.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'There is a whole industry built on fitting an acrylic liner over an existing tub or shower in a day without removing anything. It is fast and it is cheap, and it leaves whatever was failing underneath exactly where it was — including a wet substrate and any mould already in the cavity. We take the old assembly out, look at what is behind it and build back from a sound base. That takes longer and costs more, and it is the difference between a new shower and a new surface on an old problem.',
    ],
    localFaqs: [
      {
        q: 'Why not just fit a liner over the old shower?',
        a: 'Because it covers the substrate rather than replacing it. Anything wet or mouldy in the cavity stays there, sealed in. We remove the old assembly, inspect what is behind it and rebuild from sound material.',
      },
      {
        q: 'Does that mean a longer job?',
        a: 'A little, and a higher price. What you get is a shower where everything behind the surface is new and known, rather than a finish laid over an unknown.',
      },
    ],
  },

  // ---------- Cohort 11 · Kenton & Campbell County cities ----------

  'lakeside-park': {
    intro:
      'Walk-in shower in Lakeside Park? A properly built shower should outlast the next two kitchens. Call (513) 657-3750.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'A shower built correctly — sound substrate, a bonded waterproof assembly, a flood-tested pan, a quality valve — should give you twenty to thirty years without drama. What shortens that is almost never the tile: it is a waterproofing shortcut, an undersized extractor letting moisture sit, or a cheap valve failing early behind a finished wall. Since those are the invisible items, they are also the ones a low quote is usually saving money on, and they are worth asking about specifically.',
    ],
    localFaqs: [
      {
        q: 'How long should a new shower last?',
        a: 'Two to three decades where the waterproofing, ventilation and valve are right. What ends a shower early is nearly always one of those three rather than the visible surfaces.',
      },
      {
        q: 'What maintenance does it need?',
        a: 'Very little — keep the grout sealed if it is cement-based, run the fan long enough after showering, and check the silicone at the joints once a year. That is genuinely most of it.',
      },
    ],
  },

  'crescent-springs': {
    intro:
      'Walk-in shower in Crescent Springs? Ask what a fixed price actually covers — ours is itemised. Call (513) 657-3750.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'A single headline number tells you nothing about what is in it. Ours breaks out demolition and disposal, substrate and waterproofing, the base or pan, plumbing and valve, tile or wall system, glass, ventilation and electrics, and the labour against each. That itemisation is what lets you compare two quotes honestly and see where a cheaper one is actually cheaper — usually the waterproofing assembly or the valve, occasionally the removal of the old unit being left to you.',
    ],
    localFaqs: [
      {
        q: 'What is included in the price?',
        a: 'Demolition and disposal, substrate and waterproofing, base or pan, plumbing and valve, wall finish, glass, ventilation and any electrical work — itemised, so you can see what each part costs.',
      },
      {
        q: 'How do we compare two quotes fairly?',
        a: 'Line by line rather than on the total. Ask specifically about the waterproofing system, the valve brand and whether removal and disposal are included — that is usually where a lower number comes from.',
      },
    ],
  },

  'crestview-hills': {
    intro:
      'Walk-in shower in Crestview Hills? A guest bathroom does not need the same specification as your own. Call (513) 657-3750.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'It is worth being deliberate about where the money goes between bathrooms. A shower used twice a week by visitors does not need the same valve, the same glass or the same heated floor as the one you stand in every morning — and spending equally on both usually means underspending on the one that matters. What should not vary between them is the waterproofing, because a leak in a guest bathroom does exactly as much damage as a leak anywhere else.',
    ],
    localFaqs: [
      {
        q: 'Should the guest shower match the primary one?',
        a: 'Not necessarily. Save on glass, heated floors and premium fittings in a room used twice a week, and put that into the shower you use daily. The waterproofing should be identical in both.',
      },
      {
        q: 'Does a cheaper spec mean a shorter life?',
        a: 'Not if the savings come from finishes rather than the assembly behind them. A simpler shower built properly lasts as long as an expensive one.',
      },
    ],
  },

  edgewood: {
    intro:
      'Walk-in shower in Edgewood? Sometimes the shower is needed before a discharge date — we can work to that. Call (513) 657-3750.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'A good number of the calls we take here are prompted by something specific: a surgery scheduled, a parent coming home, a household that suddenly needs a bathroom someone can use safely and soon. That changes what matters — a hard date, a low or level entry, a fold-down seat, blocking for bars placed where they will actually be gripped. Tell us the deadline at the first conversation and we will tell you honestly whether we can meet it rather than finding out later.',
    ],
    localFaqs: [
      {
        q: 'Can you work to a hospital discharge date?',
        a: 'Often, if we know at the first conversation. Materials are staged in advance and a one-day install helps, but lead times on glass and custom items are real — we will tell you straight whether the date is achievable.',
      },
      {
        q: 'What makes a shower safe for someone recovering?',
        a: 'A level or low entry, a fold-down seat with clear transfer space, a hand shower reachable from seated, blocking behind the tile where bars will go, and a floor with genuine slip resistance.',
      },
    ],
  },

  'taylor-mill': {
    intro:
      'Walk-in shower in Taylor Mill? Winter or summer makes very little difference to this job. Call (513) 657-3750.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'People often wait for spring, and for a shower there is no real reason to. The work is entirely interior, the water is off for part of a day rather than days, and nothing about tiling or waterproofing cares what the weather is doing. If anything the quieter months mean better availability and firmer dates. The only genuine seasonal factor is that a bathroom being worked on in deep winter wants the heating left on so the room stays above freezing overnight while adhesives cure.',
    ],
    localFaqs: [
      {
        q: 'Should we wait until spring?',
        a: 'No need. The work is interior and unaffected by weather, and availability is usually better in the quieter months. Just leave the heating on so the room stays warm while adhesives cure.',
      },
      {
        q: 'Is the house cold while you work?',
        a: 'Not meaningfully — the work is contained to one room behind a dust barrier, and the water rather than the heating is what goes off for part of the day.',
      },
    ],
  },

  elsmere: {
    intro:
      'Walk-in shower in Elsmere? Here is exactly when money changes hands on our jobs. Call (513) 657-3750.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'Worth stating plainly, because it is what people are too polite to ask. A deposit is taken at signing to order and stage materials — that is what makes a fixed price and a short install window possible. The balance falls due on completion, after the final walkthrough, not before. We do not ask for the full amount up front and we do not add anything at the end that was not in the signed itemisation. If a contractor wants everything in advance, that is worth asking about.',
    ],
    localFaqs: [
      {
        q: 'How does payment work?',
        a: 'A deposit at signing, which orders and stages the materials, and the balance on completion after the final walkthrough. Nothing is added at the end that was not in the signed itemisation.',
      },
      {
        q: 'Why is a deposit needed at all?',
        a: 'Because everything is ordered and on site before demolition starts — that is precisely what makes a fixed price and a short install possible.',
      },
    ],
  },

  independence: {
    intro:
      'Walk-in shower in Independence? A lifetime workmanship warranty — here is what that actually means. Call (513) 657-3750.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'A warranty is only as clear as its boundaries, so: our lifetime workmanship warranty covers how the shower was built — the waterproofing, the substrate, the setting, the plumbing connections we made. Manufactured items carry their own manufacturer warranty, which we register and help you claim on. What it does not cover is damage from something else in the house, or from a later alteration by someone other than us. We would rather set that out now than have it be a surprise in year six.',
    ],
    localFaqs: [
      {
        q: 'What does the workmanship warranty cover?',
        a: 'How the shower was built — waterproofing, substrate, setting and the connections we made. Fixtures and glass carry their manufacturer warranty, which we register for you.',
      },
      {
        q: 'What is not covered?',
        a: 'Damage caused by something else in the house, or by later alterations made by someone else. We would rather be clear about that at the start than argue about it later.',
      },
    ],
  },

  'dayton-ky': {
    intro:
      'Walk-in shower in Dayton? A modern valve body needs more wall depth than these old studs give. Call (513) 657-3750.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'A detail that catches people out in houses this old: modern thermostatic and pressure-balancing valve bodies are deeper than the ones they replace, and the shallow stud walls in a late-1800s house sometimes cannot take them without furring the wall out an inch or two. That is entirely manageable — but it changes the finished wall line, which matters where original trim meets it. We check the wall depth against the chosen valve before the order goes in rather than after.',
    ],
    localFaqs: [
      {
        q: 'Will a modern shower valve fit our old walls?',
        a: 'Usually, but not always without furring the wall out slightly, because modern valve bodies are deeper. We measure the wall against the specific valve before ordering.',
      },
      {
        q: 'Does furring the wall affect the original trim?',
        a: 'It can change where the finished surface meets existing casing, which is why we raise it early. There are usually valve options that avoid it, and we will show you those first.',
      },
    ],
  },

  southgate: {
    intro:
      'Walk-in shower in Southgate? Walk-in or keep the tub-shower — here is how to actually decide. Call (513) 657-3750.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'The decision comes down to four questions rather than taste. Is this the only bathroom in the house? Does anyone in the household bathe rather than shower, now or soon? Are there young children? And are you likely to sell within five years? Two or more yes answers and we will usually recommend keeping a tub-shower here and converting elsewhere. All no, and a walk-in is straightforwardly the better room. We would rather work through that than assume you want what we are selling.',
    ],
    localFaqs: [
      {
        q: 'How do we decide between a walk-in and a tub-shower?',
        a: 'Whether it is the only bathroom, whether anyone bathes, whether there are young children, and whether you may sell soon. Two or more yes answers usually points to keeping a tub somewhere.',
      },
      {
        q: 'Can we have both in one bathroom?',
        a: 'Only where the room is genuinely large enough, which most mid-century bathrooms here are not. We will measure rather than guess.',
      },
    ],
  },

  wilder: {
    intro:
      'Walk-in shower in Wilder? If you sell the house, the warranty question is worth knowing now. Call (513) 657-3750.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'People improving a house they may not stay in forever ask a sensible question: does any of this follow the property? Our workmanship warranty is tied to the installation rather than to you personally, and we will provide the documentation for a sale — which is worth having in a file with the itemised specification and the manufacturer registrations. A buyer being able to see exactly what was installed and by whom is a small but real part of what the work is worth.',
    ],
    localFaqs: [
      {
        q: 'Does the warranty transfer if we sell?',
        a: 'It is tied to the installation rather than to you personally, and we provide documentation for a sale. Keep it with the itemised specification and the manufacturer registrations.',
      },
      {
        q: 'Do you work on the residential side here?',
        a: 'Yes — residential remodeling is all we do. Wilder is better known for its commercial base, but the neighborhoods here are ordinary housing and we work on them regularly.',
      },
    ],
  },

  'highland-heights': {
    intro:
      'Walk-in shower in Highland Heights? In a shared student house, the fan needs to run whether anyone remembers or not. Call (513) 657-3750.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'A bathroom used by four or five people in sequence every morning never gets a chance to dry out, and nobody in a shared house is going to run the fan for twenty minutes after their own shower. The answer is to take it out of their hands: a humidistat-controlled extractor that starts when moisture rises and runs until it drops, or a simple timer overrun on the light switch. It costs very little and it is the difference between a bathroom that stays sound and one that is repainted every year.',
    ],
    localFaqs: [
      {
        q: 'How do you stop a shared bathroom staying damp?',
        a: 'A humidistat-controlled extractor that runs on moisture rather than on someone remembering, or a timer overrun on the light. In a house with several tenants it is the single most useful thing you can fit.',
      },
      {
        q: 'What else survives heavy shared use?',
        a: 'Solid valve bodies, porcelain rather than soft stone, and a fixed glass panel rather than a sliding track that collects grime. The saving shows by about the third year.',
      },
    ],
  },

  'cold-spring': {
    intro:
      'Walk-in shower in Cold Spring? Just bought the house? Doing the shower before you move in is far easier. Call (513) 657-3750.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'An empty house is the best possible condition to work in, and a growing area means plenty of people here have just closed on one. No furniture to protect, no household to work around, no water shut-off to schedule around anyone, and no living with the dust. If there is a gap between closing and moving, it is worth asking us to look at the bathroom during it — the same job is simpler, quicker and less disruptive than it will ever be again.',
    ],
    localFaqs: [
      {
        q: 'Should we do the shower before moving in?',
        a: 'If there is a gap between closing and moving, yes. An empty house means no protection, no scheduling around a household and no living through it — the same job at its easiest.',
      },
      {
        q: 'How quickly can you get to us after closing?',
        a: 'It depends on the season and on whether custom glass is involved. Tell us the dates early and we will be honest about what fits rather than promising to hit a moving day we might miss.',
      },
    ],
  },

  alexandria: {
    intro:
      'Walk-in shower in Alexandria? On a well, the pressure tank settings shape the shower more than the head does. Call (513) 657-3750.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'Where a house runs on a private well, the shower experience is governed by the pump and pressure tank rather than by the fixture. A tank with a wide cut-in and cut-out range gives a shower that surges and fades as the pump cycles, and no valve fully hides it — though a pressure-balancing one helps. Checking those settings and the tank’s condition before choosing a head is worth doing, and on the semi-rural properties here it is the first thing we look at.',
    ],
    localFaqs: [
      {
        q: 'Why does our shower pressure rise and fall?',
        a: 'On a well, that is usually the pump cycling between the tank’s cut-in and cut-out pressures. Checking those settings and the tank’s charge often improves the shower more than any fixture would.',
      },
      {
        q: 'Does a shower add much load to a septic system?',
        a: 'It adds some, so the system’s capacity is worth confirming at design stage rather than assuming — particularly on the semi-rural properties around the town.',
      },
    ],
  },

  // ---------- Cohort 12 · Boone County, Union Township & the Milford area ----------

  melbourne: {
    intro:
      'Walk-in shower in Melbourne? Same installers from first cut to final seal — not a different crew each day. Call (513) 657-3750.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'In a village this small you will hear about it if a contractor turns up with a different face every morning. We do not subcontract: the installers who take the old tub out are the ones who set the base, tile the walls and seal the joints, with one project manager over the job. It matters more than it sounds, because the person waterproofing the pan is the person who will answer for it — and that is also why the workmanship warranty can be what it is.',
    ],
    localFaqs: [
      {
        q: 'Will the same people do the whole job?',
        a: 'Yes. We use our own installers rather than subcontractors, with one project manager over the work, so whoever waterproofs the pan is accountable for it.',
      },
      {
        q: 'Do you come out this far along the river?',
        a: 'Yes, though it is a longer run than the Newport and Bellevue river towns, so we are honest about scheduling rather than promising a date we would have to move.',
      },
    ],
  },

  hebron: {
    intro:
      'Walk-in shower in Hebron? Your basement may already have the plumbing stubbed in for one. Call (513) 657-3750.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport, with a mix of newer subdivisions and established semi-rural homes.',
      'Builders in this housing frequently roughed in a lower-level bathroom and then capped it — a drain stub, a vent and sometimes supply lines sitting under the slab, waiting. Homeowners often have no idea it is there. If it is, adding a proper shower downstairs is dramatically cheaper than starting from nothing, because the expensive part is already done. It takes about ten minutes to establish on a site visit and it is the first thing we look for in these houses.',
    ],
    localFaqs: [
      {
        q: 'How do we know if the basement is roughed in for a bathroom?',
        a: 'Look for capped pipe stubs in the slab, often in a corner or under a stair. It takes minutes to confirm, and if it is there the cost of a lower-level shower drops considerably.',
      },
      {
        q: 'What if there is no rough-in?',
        a: 'Then it means cutting and trenching the slab, which is real work with a real cost. We would rather quote that accurately than let it come as a surprise.',
      },
    ],
  },

  burlington: {
    intro:
      'Walk-in shower in Burlington? A bigger shower still has to leave legal clearance at the toilet. Call (513) 657-3750.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'People sketch a larger shower and forget that the rest of the room has minimums. There is a required clear width around a toilet and a required clearance in front of it, and a door cannot swing into a fixture. Push an enclosure out by eight inches and one of those can quietly fail — which an inspector will pick up even if you would not have. We draw the whole room to the clearances rather than the shower in isolation, so what we quote is what will actually pass.',
    ],
    localFaqs: [
      {
        q: 'How big can we make the shower?',
        a: 'Until the rest of the room stops meeting its clearances — the clear space around and in front of the toilet, and the door swing. We draw the whole room rather than just the enclosure.',
      },
      {
        q: 'Would an inspector really pick that up?',
        a: 'On a permitted job, yes. It is one of the more common reasons work fails inspection, and it is entirely avoidable at design stage.',
      },
    ],
  },

  union: {
    intro:
      'Walk-in shower in Union? Combining the garden tub and the tiny corner shower gives you one good one. Call (513) 657-3750.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'The primary bathroom in this housing usually has two things nobody is happy with: a large garden tub used a handful of times a year and a cramped corner shower with a fiberglass pan and a plastic door. Taken together they occupy a substantial footprint and neither is good. Combining the two zones into a single generous shower — bench, niche, proper glass — is the highest-value change available in these houses, and the drainage for both is already in that part of the room.',
    ],
    localFaqs: [
      {
        q: 'Can the garden tub and corner shower become one big shower?',
        a: 'Yes, and in this housing it is the change we recommend most. Both zones already have drainage, and combining them gives you a shower worth using instead of two compromises.',
      },
      {
        q: 'Will removing the only tub upstairs hurt resale?',
        a: 'Where there is another tub in the house, rarely. Where the garden tub is the only one, we will raise it before you commit rather than after.',
      },
    ],
  },

  walton: {
    intro:
      'Walk-in shower in Walton? If you are on softened water, the shower will feel different — that is normal. Call (513) 657-3750.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'A lot of the rural and semi-rural properties out here run a water softener, and it changes the shower rather than just the kettle. Soap lathers far more readily and rinses less quickly, so the water feels slippery — which people occasionally mistake for a plumbing fault in a brand-new shower. The upside is real: no scale on the glass or the head, and grout that stays clean far longer. It is worth knowing which you have before you judge the shower.',
    ],
    localFaqs: [
      {
        q: 'Why does the water feel slippery in the shower?',
        a: 'If the house is on a softener, that is the softened water rather than a fault — soap rinses more slowly. The trade is no scale on the glass or the head, which most people prefer once they know what it is.',
      },
      {
        q: 'Do you come out as far as Walton?',
        a: 'Yes, it is the southern edge of our area. We schedule it deliberately because of the distance rather than promising a date we would struggle to hold.',
      },
    ],
  },

  'mount-carmel': {
    intro:
      'Walk-in shower in Mount Carmel? An interior bathroom has to vent through the roof — that is not optional. Call (513) 657-3750.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'A lot of the ranch plans here put the bathroom in the middle of the house with no exterior wall to vent through, and the shortcut in that situation is to duct the extractor into the loft space and stop. That does not remove moisture from the house, it relocates it into the roof structure where it condenses on the underside of the deck. A proper roof or soffit termination is the only real answer, and where the existing fan discharges into the loft we will tell you.',
    ],
    localFaqs: [
      {
        q: 'Where does the extractor vent if there is no outside wall?',
        a: 'Through the roof or to a soffit termination. Ducting into the loft space does not remove the moisture from the house — it condenses in the roof structure instead.',
      },
      {
        q: 'How do we know where ours currently goes?',
        a: 'We check it on the site visit. Finding a fan discharging into the loft is common enough that we look for it as a matter of course.',
      },
    ],
  },

  summerside: {
    intro:
      'Walk-in shower in Summerside? In a compact enclosure, big tiles usually beat small ones. Call (513) 657-3750.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Instinct says small tiles suit a small shower, and it is generally backwards. A grid of small tiles in a compact enclosure reads as busy and full of joints, while large-format tile on the walls gives fewer lines and makes the space feel calmer and bigger. The floor is the exception, where smaller formats are needed to follow the falls. That combination — large on the walls, small or textured on the floor — is what we specify in most rooms this size.',
    ],
    localFaqs: [
      {
        q: 'Do small tiles suit a small shower?',
        a: 'Usually the opposite. Large-format wall tile means fewer joints and a calmer, larger-feeling space. The floor still wants a smaller or textured format to follow the falls to the drain.',
      },
      {
        q: 'Does large tile work on curved or uneven walls?',
        a: 'Less well — it needs a flat plane. Where a wall is out we either bring it true first or use a smaller format, and we will tell you which before you choose.',
      },
    ],
  },

  withamsville: {
    intro:
      'Walk-in shower in Withamsville? Replacing the shower but keeping the floor? Look at where they meet. Call (513) 657-3750.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Keeping an existing bathroom floor while replacing the shower is entirely reasonable and it saves real money — but the junction between old floor and new base is where it either looks deliberate or looks patched. It has to be planned: the base or pan sized to land on a sound line, the threshold detailed properly, and a realistic view of whether the old floor tile can be cut into without damaging it. Sometimes the honest answer is that the floor should go too, and we will say so.',
    ],
    localFaqs: [
      {
        q: 'Can we keep the existing floor?',
        a: 'Often, and it saves money. What matters is the junction where the new base meets it — that has to be planned rather than improvised, and old tile does not always cut cleanly.',
      },
      {
        q: 'When should the floor be replaced too?',
        a: 'When it is failing, when the junction cannot be made to look deliberate, or when the level has to change for a low threshold. We will give you a straight view rather than defaulting to the bigger job.',
      },
    ],
  },

  milford: {
    intro:
      'Walk-in shower in Milford? Where new tile meets original plaster is the detail that gives a job away. Call (513) 657-3750.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'In a 19th-century house the shower wall is a new, flat, waterproofed plane meeting old plaster that is neither flat nor square. That junction is where inexperienced work shows: a bead of silicone bridging a visible gap, or a tile edge running out of line against a wall that wanders. Done properly the transition is planned — the substrate packed out to meet the plaster, a deliberate reveal or trim where the two meet, and the tile set to the eye rather than to a level that the room does not share.',
    ],
    localFaqs: [
      {
        q: 'How do you handle the join between new tile and old plaster?',
        a: 'By planning it rather than caulking it. The substrate is packed out to meet the wall, the transition gets a deliberate trim or reveal, and the tile is set to look right in a room that is not square.',
      },
      {
        q: 'Will the old plaster survive the work?',
        a: 'Largely, with care. Some making-good at the edges is normal in a house this age, and we allow for it in the quote rather than raising it afterwards.',
      },
    ],
  },

  mulberry: {
    intro:
      'Walk-in shower in Mulberry? On a fixed budget, one thing done properly beats three done cheaply. Call (513) 657-3750.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'When the budget will not cover everything the room needs, the temptation is to spread it thin — a bit of tile, a new vanity, a cheaper shower. That usually produces a room where nothing is properly finished and the shower fails first. Our advice here is nearly always to do the shower fully, to the standard it should be, and leave the vanity and the floor for next year. A half-built shower is the one item in a bathroom that costs you twice.',
    ],
    localFaqs: [
      {
        q: 'We cannot afford the whole room — what should we do first?',
        a: 'The shower, done properly. Waterproofing, substrate and valve are the items that cost you twice if they are compromised, whereas a dated vanity simply looks dated until you replace it.',
      },
      {
        q: 'Is it more expensive to do it in stages?',
        a: 'Somewhat, because of repeat mobilisation. But it is far cheaper than a shower that has to be rebuilt, and we would rather you spread the work than the standard.',
      },
    ],
  },

  'mount-repose': {
    intro:
      'Walk-in shower in Mount Repose? Specify a valve whose parts will still exist in fifteen years. Call (513) 657-3750.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'The valve is buried in the wall, so it is the one component you cannot change your mind about. What matters is not just how it performs on day one but whether its cartridge will still be available a decade later — which is why we fit valves from manufacturers with long production runs and genuine parts support, rather than whatever is cheapest at the counter. In a settled area where people stay in their houses, that is worth more than a fashionable trim.',
    ],
    localFaqs: [
      {
        q: 'Does the shower valve brand matter?',
        a: 'More than the trim does. The body is in the wall permanently, so what counts is whether cartridges will still be available in ten or fifteen years. We fit manufacturers with real parts support.',
      },
      {
        q: 'Can we choose the trim separately from the valve?',
        a: 'Yes, and that is the sensible way round — a solid valve body in the wall, with the visible trim chosen to taste and changeable later.',
      },
    ],
  },

  'day-heights': {
    intro:
      'Walk-in shower in Day Heights? On septic, where a new drain line runs matters as much as the load. Call (513) 657-3750.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Adding or moving a shower drain on a property with a septic system is not only a question of capacity. The new run has to reach the existing line without disturbing the tank or the drain field, and on larger semi-rural lots people often do not know precisely where those sit. Establishing that before anything is dug or cut is straightforward and it avoids the genuinely expensive mistake — which is finding the field with a trench.',
    ],
    localFaqs: [
      {
        q: 'Does a new drain run affect our septic system?',
        a: 'It can, if it is routed near the tank or the drain field. We establish where those are before any cutting or trenching rather than after.',
      },
      {
        q: 'Do you need to know where the drain field is?',
        a: 'Yes, and many owners of larger lots do not. Locating it first is quick and avoids the one mistake here that is genuinely expensive to put right.',
      },
    ],
  },

  'new-richmond': {
    intro:
      'Walk-in shower in New Richmond? In a tall 19th-century room, tile height is a proportion decision. Call (513) 657-3750.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'These rooms have height that modern bathrooms do not, and running tile the full nine or ten feet to the ceiling can read as clinical rather than generous. A considered horizontal line — tile to a height that relates to the door head or a picture rail, with a proper moisture-resistant finish above — usually sits far better in a room of this period. It is a proportion judgement rather than a technical one, and it is worth making deliberately instead of defaulting either way.',
    ],
    localFaqs: [
      {
        q: 'Should tile run to the ceiling in a tall old room?',
        a: 'Not always. In a nine or ten foot room, stopping at a line that relates to the door head often looks far better, with a moisture-resistant finish above. It is a proportion decision worth making deliberately.',
      },
      {
        q: 'Is a lower tile line a problem for moisture?',
        a: 'Not where the enclosure itself is tiled to full height and the wall above is properly finished. The area at risk is inside the shower, not the far side of the room.',
      },
    ],
  },

  // ---------- Cohort 13 · Eastern Clermont, Butler County & West Chester ----------

  amelia: {
    intro:
      'Walk-in shower in Amelia? There is a legal limit on shower flow — and it is not the reason yours feels weak. Call (513) 657-3750.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'Every shower head sold has a maximum flow rate set by regulation, and people occasionally ask us to remove the restrictor to get a stronger shower. We will not, and it would not help anyway: where a shower feels weak in this housing it is nearly always corroded supply pipe or a partly blocked head, not the restrictor. A well-engineered head at the legal rate outperforms a poor one running unrestricted, which is where the money is better spent.',
    ],
    localFaqs: [
      {
        q: 'Can you remove the flow restrictor for more pressure?',
        a: 'No — it is there by regulation, and it is rarely the actual problem. Weak flow in this housing usually means corroded supply pipe or a limed-up head, both of which we can genuinely fix.',
      },
      {
        q: 'Are low-flow heads worse?',
        a: 'A good one is not. Modern heads shape and accelerate the water rather than simply letting more through, and the difference between a well-designed head and a cheap one is considerable at the same rate.',
      },
    ],
  },

  batavia: {
    intro:
      'Walk-in shower in Batavia? Grab bars no longer have to look like hospital fittings. Call (513) 657-3750.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The reason people refuse grab bars is that they picture stainless steel institutional tube. That is no longer what is available. A properly rated bar can be a matching finish to your valve trim, a corner shelf that takes weight, or a towel rail engineered to be gripped — none of which announces itself as a safety fitting. Since the blocking has to go in before the wall closes either way, the sensible move is to prepare for them and choose the visible product whenever you want it.',
    ],
    localFaqs: [
      {
        q: 'Do grab bars have to look clinical?',
        a: 'Not any more. Rated bars come in the same finishes as valve trim, and some double as shelves or towel rails. The requirement is that they are properly rated and anchored, not that they look medical.',
      },
      {
        q: 'Can a normal towel rail take weight?',
        a: 'No — an ordinary rail will pull out. If you want something that doubles as a grab bar it has to be a rated product anchored into blocking, and we will specify one.',
      },
    ],
  },

  owensville: {
    intro:
      'Walk-in shower in Owensville? A few minutes of preparation makes the site visit far more useful. Call (513) 657-3750.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Since we come a distance to reach the eastern villages, it is worth making the visit count. Clearing access to the bathroom and to any basement or crawl space below it lets us check the drain and the structure the same day. Knowing where your main shutoff is, and roughly when the house was built, helps. And if the property is on a well or septic, saying so in advance means we arrive knowing what to look at rather than needing a second trip.',
    ],
    localFaqs: [
      {
        q: 'What should we have ready for the site visit?',
        a: 'Access to the bathroom and to whatever is below it, the location of your main shutoff, a rough build date, and whether you are on well or septic. That is usually enough for us to quote a fixed price the same day.',
      },
      {
        q: 'Will you need to open a wall?',
        a: 'A small area, yes, with your agreement. It is the only honest way to price a fixed-cost job rather than padding it with contingency.',
      },
    ],
  },

  goshen: {
    intro:
      'Walk-in shower in Goshen? On a rural property, a utility-room shower earns its keep fast. Call (513) 657-3750.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'On a working rural property the most useful shower in the house is often not in a bathroom at all. A simple, robust shower in a utility or mudroom — near where boots, animals and mud come in — keeps all of that out of the house entirely. It wants a low threshold, a hand shower on a long hose, a hard-wearing floor and a drain that clears grit, and it does not want expensive finishes. The limits are drain access and whether the septic system can take the extra load.',
    ],
    localFaqs: [
      {
        q: 'Can a shower go in the utility room?',
        a: 'Often, and on a rural property it is frequently the most useful shower in the house. It needs drain access and septic capacity confirmed, and it should be specified for hard use rather than for looks.',
      },
      {
        q: 'Does it need to be a full bathroom?',
        a: 'Not necessarily. A shower and a drain in a utility space is a legitimate arrangement, though adding a toilet changes both the plumbing and the permitting — we will explain which you are asking for.',
      },
    ],
  },

  moscow: {
    intro:
      'Walk-in shower in Moscow? Not sure you will stay? A shower is one of the few improvements that pays either way. Call (513) 657-3750.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'In a small village where people are sometimes weighing whether to stay, it is fair to ask what an improvement is worth if you leave. A shower is unusual in that it works out either way: if you stay, you use it twice a day for twenty years, and if you sell, a sound modern shower is one of the first things a buyer looks at in an older house. What does not pay back is over-specifying it — which on this housing we would steer you away from regardless.',
    ],
    localFaqs: [
      {
        q: 'Is a new shower worth it if we might move?',
        a: 'More than most improvements. You use it daily while you are here, and a sound modern shower is among the first things a buyer assesses in an older house. Just do not over-specify it.',
      },
      {
        q: 'Should we finish a shower in the basement?',
        a: 'On ground this low, usually not — we would rather say so before you spend. The same money generally does more in the main-floor bathroom.',
      },
    ],
  },

  newtonsville: {
    intro:
      'Walk-in shower in Newtonsville? Here is what we need from you on install day. Call (513) 657-3750.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Because we travel to reach the far northeastern villages, a lost morning is expensive for both of us — so it is worth knowing what makes the day run. The bathroom cleared of everything portable, a clear route from the door to it, somewhere to park a van within reach, pets somewhere else for the day, and access to the water shutoff. That is genuinely the whole list, and with it in place a one-day install is a one-day install.',
    ],
    localFaqs: [
      {
        q: 'What do we need to do before install day?',
        a: 'Clear the bathroom of anything portable, keep the route from the door clear, make parking available near the house, keep pets elsewhere for the day, and make sure we can reach the water shutoff.',
      },
      {
        q: 'Will you actually come out this far?',
        a: 'Yes, and we schedule it deliberately rather than fitting it around closer work. That is exactly why the dates we put in writing hold.',
      },
    ],
  },

  williamsburg: {
    intro:
      'Walk-in shower in Williamsburg? A shower on an uninsulated exterior wall is a cold, damp wall. Call (513) 657-3750.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'In 19th-century houses the bathroom was frequently added on an exterior wall with little or no insulation in it, and tiling over that creates a permanently cold surface inside a wet room. Warm vapour condenses on it, the grout stays damp and the wall never fully dries. The fix is not more waterproofing — it is insulating the cavity properly and detailing the vapour control while the wall is open, which is a modest addition at exactly the moment it is possible.',
    ],
    localFaqs: [
      {
        q: 'Should we insulate behind the shower?',
        a: 'On an exterior wall in a house this age, yes. Without it the tiled surface stays cold, vapour condenses on it and the wall never properly dries. It is inexpensive while the wall is open.',
      },
      {
        q: 'Is that not what the waterproofing is for?',
        a: 'No — waterproofing keeps liquid water out of the structure. Condensation forms on the warm side, and only insulation and vapour detailing address that.',
      },
    ],
  },

  bethel: {
    intro:
      'Walk-in shower in Bethel? On a modest budget, safety features come before finishes. Call (513) 657-3750.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Where someone is living alone in an older house and the budget is limited, the priority order is clear to us even when it is not to a showroom. A low threshold, a floor with genuine slip resistance, blocking and a rated bar, a hand shower reachable from seated, and a properly sized extractor come first. Tile choice, glass and heated floors come after. We would rather build a plain shower that is safe than a handsome one that is not.',
    ],
    localFaqs: [
      {
        q: 'What should a limited budget go on first?',
        a: 'A low threshold, a genuinely slip-resistant floor, blocking with a rated bar, a hand shower reachable from seated, and proper ventilation. Finishes come after those, not before.',
      },
      {
        q: 'How much should we spend on a shower here?',
        a: 'Usually the middle of our range rather than the top. The money that matters is behind the surface and in the safety details, and neither depends on an expensive finish.',
      },
    ],
  },

  ross: {
    intro:
      'Walk-in shower in Ross? On hard well water, the shower head needs to be one you can descale. Call (513) 657-3750.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Where water is hard, scale builds inside the head and across its face until the spray pattern breaks up and half the jets fire sideways. Some heads are designed for that — rubber nozzles you can rub clean, a face that unscrews for soaking. Others are sealed units that simply degrade until they are replaced. On rural properties here that difference matters far more than the finish does, and it is the sort of thing nobody mentions in a showroom.',
    ],
    localFaqs: [
      {
        q: 'Why does our shower spray sideways?',
        a: 'Scale in the head. On hard water it builds until the jets misfire. A head with rubber nozzles or a removable face can be cleaned; a sealed one simply has to be replaced.',
      },
      {
        q: 'Would a softener solve it?',
        a: 'It would help throughout the house, but it is a bigger decision. We will give you a straight view on whether it is worth it for you rather than selling equipment.',
      },
    ],
  },

  fairfield: {
    intro:
      'Walk-in shower in Fairfield? The cleaner under your sink may be shortening your shower’s life. Call (513) 657-3750.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Most people finish a new shower and then clean it with whatever is strongest, which is where the damage starts. Abrasive creams dull acrylic and etch polished chrome. Acidic limescale removers attack cement grout and natural stone. Bleach degrades silicone joints until they discolour and lift. A mild detergent, a soft cloth and a squeegee after use will keep a shower looking new for years — and we would rather tell you that than replace a finish you scoured off.',
    ],
    localFaqs: [
      {
        q: 'What should we clean a new shower with?',
        a: 'A mild detergent and a soft cloth, plus a squeegee after use. Avoid abrasive creams on acrylic, acidic descalers on cement grout or stone, and bleach on silicone joints.',
      },
      {
        q: 'How do we deal with limescale then?',
        a: 'Mostly by preventing it — squeegee the glass and dry the fittings. Where descaler is genuinely needed, we will tell you which surfaces in your shower can take it and which cannot.',
      },
    ],
  },

  'beckett-ridge': {
    intro:
      'Walk-in shower in Beckett Ridge? The HOA governs the outside — the bathroom is entirely yours. Call (513) 657-3750.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'In a planned community people sometimes assume approvals are needed for everything, and it is worth being clear: a homeowners association concerns itself with what is visible from outside — elevations, roofing, landscaping. An interior bathroom is not its business, so the shower design is entirely open. What does still apply is township permitting where plumbing is altered, which we file and schedule as part of the job.',
    ],
    localFaqs: [
      {
        q: 'Do we need HOA approval for a bathroom?',
        a: 'No — an association concerns itself with what is visible from outside. Interior work is yours to decide. Township permitting still applies where plumbing is altered, and we handle that.',
      },
      {
        q: 'What is worth changing in a house of this era?',
        a: 'Usually the garden tub, which takes the best corner and gets used rarely, and the builder shower pan with its framed plastic door. Combining them into one good shower is the change we recommend most here.',
      },
    ],
  },

  wetherington: {
    intro:
      'Walk-in shower in Wetherington? Lighting inside the enclosure is what makes a large shower feel finished. Call (513) 657-3750.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'In a generous enclosure, a single ceiling downlight leaves the far end grey and the niche in shadow — which is why large showers often photograph better than they feel. Wet-rated downlights spaced to the enclosure, and a discreet LED strip washing the niche, cost very little alongside a project of this scale and change the room entirely. Both have to be wired before the substrate closes, so it is a decision for design stage rather than the end.',
    ],
    localFaqs: [
      {
        q: 'Can we light the inside of the shower properly?',
        a: 'Yes — wet-rated downlights spaced to the enclosure, and an LED strip in the niche if you want it. Both need wiring before the substrate closes, so they are design-stage decisions.',
      },
      {
        q: 'Is LED strip lighting in a wet area reliable?',
        a: 'Where a properly rated product and driver are used and the detailing is right, yes. We would rather specify a good one than fit a domestic strip that fails in two years.',
      },
    ],
  },

  // ---------- Cohort 14 · Butler & Warren County, southeastern Indiana ----------

  hamilton: {
    intro:
      'Walk-in shower in Hamilton? When we open a galvanised wall, how far back do we replace? Call (513) 657-3750.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Open a wall in one of these houses and you will usually find galvanised supply pipe at the end of its life. The honest question is where to stop. Replacing only the visible foot leaves the corroded run feeding it, so the pressure problem stays; replacing the whole house is a different project altogether. Our normal recommendation is back to the nearest accessible junction — which fixes the shower properly without turning it into a repipe. We show you what we found and let you decide.',
    ],
    localFaqs: [
      {
        q: 'How much of the old pipe gets replaced?',
        a: 'Normally back to the nearest accessible junction, which solves the shower without becoming a whole-house repipe. Replacing only the visible section leaves the restriction in place.',
      },
      {
        q: 'Will we need to repipe the whole house eventually?',
        a: 'In a house of this age, probably at some point. We will tell you honestly what we saw rather than either alarming you or pretending the rest is fine.',
      },
    ],
  },

  millville: {
    intro:
      'Walk-in shower in Millville? How far ahead should you book? Usually further than people expect. Call (513) 657-3750.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'The install itself is short, which misleads people about the timeline. From first visit to finished shower is typically a few weeks, and most of that is neither design nor building — it is material lead times, and glass in particular. Spring and early summer are the busiest stretch. If there is a date you are working toward, tell us at the first conversation and we will be honest about whether it is achievable rather than booking you in and disappointing you.',
    ],
    localFaqs: [
      {
        q: 'How far ahead do we need to book?',
        a: 'Usually a few weeks, and longer in spring and early summer. The install is short but material lead times — especially custom glass — set the real timeline.',
      },
      {
        q: 'Can anything be done sooner?',
        a: 'A stock base and a standard enclosure move much faster than custom glass and specialist tile. If speed matters more than specification, we will show you the quicker route.',
      },
    ],
  },

  'new-miami': {
    intro:
      'Walk-in shower in New Miami? A bathroom directly over the kitchen changes what a small leak costs. Call (513) 657-3750.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'In these compact houses the bathroom sits directly above the kitchen more often than not, and that is the worst place for a slow leak. It does not announce itself in the bathroom — it appears as a stain on a kitchen ceiling months later, by which point the joists have been wet the whole time and the cabinets below may have gone. It is why the waterproofing here is not the place to save money, and why we flood-test the pan before a single tile goes on it.',
    ],
    localFaqs: [
      {
        q: 'Our bathroom is above the kitchen — what protects it?',
        a: 'A bonded waterproofing assembly carried up the walls and detailed at every seam, and a pan filled and tested before tiling. Over a kitchen, that test is the step that matters most.',
      },
      {
        q: 'There is already a stain on the kitchen ceiling — what does that mean?',
        a: 'Usually a failed pan or wall waterproofing that has been leaking slowly for a while. We open it up and check the joists and subfloor before quoting, so that condition is in the fixed price.',
      },
    ],
  },

  monroe: {
    intro:
      'Walk-in shower in Monroe? Working from home? Tell us — we can schedule the noisy part. Call (513) 657-3750.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'A shower install is not loud all day, but the noisy stretch is genuinely noisy: removing an old surround and cutting out substrate is an hour or two of real racket. If you are on calls from home, tell us at booking and we will front-load that work into the morning or schedule it around a meeting. It costs us nothing to plan and it is the difference between a job you can work through and one you cannot.',
    ],
    localFaqs: [
      {
        q: 'How loud is the work, and for how long?',
        a: 'The demolition and substrate removal is genuinely noisy for an hour or two; the rest of the day is not. Tell us if you are working from home and we will schedule that stretch around you.',
      },
      {
        q: 'Which county issues our permit?',
        a: 'It depends which side of the line your property sits on, since Monroe straddles Butler and Warren. We confirm the jurisdiction before scheduling so inspections are booked correctly.',
      },
    ],
  },

  landen: {
    intro:
      'Walk-in shower in Landen? In an attached home, the shared wall carries the stack — and the sound. Call (513) 657-3750.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Where homes are attached, the wall between you and your neighbour frequently carries the plumbing stack for both. That affects two things: what can be altered on that wall without involving them, and how much noise travels once a new valve is fitted. Water hammer arrestors and insulating the pipe run are worth doing here for the sake of both households. Where a stack is genuinely shared, we establish that before design rather than on the day.',
    ],
    localFaqs: [
      {
        q: 'Can we alter plumbing on a shared wall?',
        a: 'It depends whether the stack serves both homes, which we establish before designing. Where it is shared, isolating it needs coordinating rather than assuming.',
      },
      {
        q: 'Will the neighbours hear the new shower?',
        a: 'Less than they hear the old one, if arrestors are fitted and the pipe run is insulated and isolated from the framing. Both are cheap while the wall is open.',
      },
    ],
  },

  'loveland-park': {
    intro:
      'Walk-in shower in Loveland Park? Those old sliding door tracks leave holes that have to be dealt with. Call (513) 657-3750.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Almost every tub in this housing has a framed sliding glass door, and those frames are screwed and sealed through the tile into the substrate. Removing them leaves a line of penetrations along the tub deck and up the jambs — every one of them a route for water into the wall if it is simply filled and forgotten. Where the surrounding tile is being kept, those holes get properly made good rather than caulked over, and that is worth asking about specifically.',
    ],
    localFaqs: [
      {
        q: 'What happens to the holes left by the old door frame?',
        a: 'They get properly made good, not filled with silicone and tiled over. Every one of those penetrations goes through the tile into the substrate, and left unsealed they let water into the wall.',
      },
      {
        q: 'Can we keep the surrounding tile?',
        a: 'Sometimes, where it is sound and the colour is liveable. We will show you honestly what the repair line will look like before you decide.',
      },
    ],
  },

  maineville: {
    intro:
      'Walk-in shower in Maineville? Build for the household you will have in ten years, not the one you have now. Call (513) 657-3750.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'A growing town means growing households, and the bathroom that suits a family with a toddler is not the one that suits the same family with two teenagers. That argues for decisions that stay right: a shower rather than a tub in the second bathroom, a hand shower alongside a fixed head, storage sized for more people than currently use it, and an extractor rated for back-to-back use. None of it costs much now; all of it is expensive to change later.',
    ],
    localFaqs: [
      {
        q: 'What should we plan for as the family grows?',
        a: 'A hand shower alongside a fixed head, storage sized generously, and ventilation rated for back-to-back showers. Those keep working as the household changes, and none of them is easy to add later.',
      },
      {
        q: 'Should we keep a tub for young children?',
        a: 'If it is the only one in the house, usually yes for a few more years. We will say so rather than converting it and having you miss it.',
      },
    ],
  },

  'pleasant-plain': {
    intro:
      'Walk-in shower in Pleasant Plain? If it is your only bathroom, we do not start what we cannot finish. Call (513) 657-3750.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Out here, a bathroom out of action is not a minor inconvenience — there is nowhere else to go. So we do not open a single-bathroom job until every component is on site and checked, and we schedule it as a block rather than fitting it around closer work. That is the practical reason we are careful about start dates in the outer villages: a crew stretched thin is how a household ends up without a shower for a week.',
    ],
    localFaqs: [
      {
        q: 'We only have one bathroom — how long will we be without it?',
        a: 'Typically part of a single day, and you get that window in writing. We do not begin until every component is on site, precisely so a delay cannot leave you without it.',
      },
      {
        q: 'Are we too far out for you?',
        a: 'No, but we schedule it deliberately rather than squeezing it in. That honesty about distance is why the start date we put in writing holds.',
      },
    ],
  },

  'south-lebanon': {
    intro:
      'Walk-in shower in South Lebanon? In a new-build still under builder warranty, check before you change anything. Call (513) 657-3750.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'With this much new construction, plenty of homes here are still inside their builder warranty period — and altering plumbing or a waterproofing assembly can affect what that warranty covers. It is worth reading before commissioning work, and worth asking the builder whether a defect you are trying to fix is actually theirs to put right. We would rather you got a shower pan replaced under warranty than paid us to do it.',
    ],
    localFaqs: [
      {
        q: 'Will remodeling affect our builder warranty?',
        a: 'It can, where the work touches plumbing or a waterproofing assembly. Check the terms before commissioning anything — and if the problem is a defect, it may be the builder’s to fix rather than yours to pay for.',
      },
      {
        q: 'Our new shower already leaks — what should we do?',
        a: 'Speak to the builder first. If it is a defect within warranty, that is their responsibility. We will happily tell you what we think is wrong without charging you to find out.',
      },
    ],
  },

  lawrenceburg: {
    intro:
      'Walk-in shower in Lawrenceburg? Above a business, a leak is someone else’s livelihood. Call (513) 657-3750.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'A good deal of downtown housing here sits above ground-floor commercial space, and that raises the stakes on a bathroom considerably. A slow leak does not just damage a ceiling, it can close a business for a week. So over occupied commercial space we treat the waterproofing as the whole job: a full bonded assembly, a flood-tested pan, and shut-off arrangements agreed with the tenant below in advance. Indiana permitting applies here too, which we confirm before scheduling.',
    ],
    localFaqs: [
      {
        q: 'Our apartment is above a shop — what extra care is taken?',
        a: 'A full bonded waterproofing assembly, a pan filled and tested before tiling, and water shut-off timing agreed with the business below. Over commercial space that testing step is non-negotiable.',
      },
      {
        q: 'Do you work in Indiana?',
        a: 'Yes. Permitting and inspection run under Indiana rules rather than Ohio, which we confirm before a start date is agreed.',
      },
    ],
  },

  greendale: {
    intro:
      'Walk-in shower in Greendale? If the shower drains by pump, ask what happens in a power cut. Call (513) 657-3750.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Where a house is stepped into this hillside, a lower-level shower sometimes sits below the sewer line and drains through a sealed ejector — which is a pump, and a pump needs electricity. That is fine until the storm that causes the outage is also the one filling your basement. If a lower-level shower is going in on a pump here, it is worth deciding at the same time whether it gets battery backup, because retrofitting it afterwards means going back into the same pit.',
    ],
    localFaqs: [
      {
        q: 'Does a pumped shower drain still work in a power cut?',
        a: 'Not without backup. If the lower level drains through an ejector, it is worth deciding on battery backup at the same time — retrofitting means opening the same pit again.',
      },
      {
        q: 'Will our lower level need a pump at all?',
        a: 'It depends where the house sits on the hill. We measure the drain elevation against the sewer line on the first visit rather than assuming either way.',
      },
    ],
  },

  aurora: {
    intro:
      'Walk-in shower in Aurora? Here is exactly what we check at the final walkthrough before asking for payment. Call (513) 657-3750.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'The last hour of a job matters as much as the first. Before we ask for the balance we walk it with you: the shower run for long enough to check drainage and that nothing weeps, every silicone joint inspected, the glass checked for square and seal, the valve tested through its range, the extractor confirmed as pulling, and the rest of the house checked for anything we touched on the way in. Anything on that list you are not happy with gets put right before the invoice, not after.',
    ],
    localFaqs: [
      {
        q: 'What happens at the final walkthrough?',
        a: 'We run the shower long enough to confirm drainage and check for weeping, inspect every joint, check the glass for square and seal, test the valve, confirm the extractor pulls, and check the route through the house. Anything you are unhappy with is put right before the invoice.',
      },
      {
        q: 'What if something shows up a month later?',
        a: 'Tell us and we come back. The workmanship warranty exists precisely for the things that do not reveal themselves on day one.',
      },
    ],
  },
};
