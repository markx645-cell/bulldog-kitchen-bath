// Featured projects — extracted from the production export.
// 148 projects, 1043 photos.
// loc/type/description come from the projects index; photos from each project route.

export type ProjectPhoto = { src: string; alt: string };
export type Project = {
  slug: string;
  title: string;
  /** e.g. "Covington, KY". Empty when the true location isn't known. */
  loc: string;
  /** e.g. "Complete Kitchen Remodel" — drives the category filter */
  type: string;
  description: string;
  photos: ProjectPhoto[];
  /** Only 3 of the 148 pages carry these extra blocks. */
  keyFeatures?: { k: string; v: string }[];
  designInsight?: { heading: string; paragraphs: string[] };
  projectDetails?: { k: string; v: string }[];
};

export const projects: Project[] = [
  {
    "slug": "mid-century-makeover",
    "title": "Memorable Mid-Century Makeover",
    "loc": "Covington, KY",
    "type": "Complete Kitchen Remodel",
    "description": "This mid-century kitchen makeover pairs warm walnut and black cabinetry with crisp modern lines. A fluted black range hood trimmed in brass sits above a quartzite backsplash and a leaded glass window.",
    "photos": [
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor54.webp",
        "alt": "Mid-century kitchen with fluted black range hood and quartzite backsplash"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42-Exmoor60.webp",
        "alt": "Walnut and black cabinetry with brass accents"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor55.webp",
        "alt": "Bar nook with arched feature and floating shelves"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor57.webp",
        "alt": "Kitchen island with quartzite countertop"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor56.webp",
        "alt": "Glass-front display cabinetry detail"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor58.webp",
        "alt": "Range wall with fluted hood and brass sconces"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor59.webp",
        "alt": "Kitchen prep area with leaded glass window"
      },
      {
        "src": "/assets/projects/mid-century/photos/kitchen_42_Exmoor_Before.webp",
        "alt": "Original kitchen, before remodel"
      },
      {
        "src": "/assets/projects/mid-century/render-1.webp",
        "alt": "Concept rendering: sink wall with leaded glass window and walnut cabinetry"
      },
      {
        "src": "/assets/projects/mid-century/render-2.webp",
        "alt": "Concept rendering: black fluted range hood with brass sconces"
      },
      {
        "src": "/assets/projects/mid-century/render-3.webp",
        "alt": "Concept rendering: walnut tall cabinetry with arched bar nook"
      },
      {
        "src": "/assets/projects/mid-century/render-4.webp",
        "alt": "Concept rendering: black painted island with waterfall quartzite"
      },
      {
        "src": "/assets/projects/mid-century/render-5.webp",
        "alt": "Concept rendering: wide kitchen view with pendants and arched feature"
      }
    ],
    "keyFeatures": [
      {
        "k": "Custom Fluted Range Hood",
        "v": "Matte-black painted finish with brass accent detail anchoring the cooking wall."
      },
      {
        "k": "Custom-Built Arch Feature",
        "v": "Defines the bar area with floating walnut shelves and integrated LED downlighting."
      },
      {
        "k": "Contemporary Cabinetry",
        "v": "Grain-matched natural walnut paired with matte-black painted frameless cabinetry."
      },
      {
        "k": "Quartzite Countertops",
        "v": "‘Taj Mahal’ quartzite with full-height backsplash and ledge detail on the range wall."
      },
      {
        "k": "Original Leaded Glass",
        "v": "Period-appropriate window preserved as a focal point at the prep sink."
      }
    ],
    "projectDetails": [
      {
        "k": "Kitchen Cabinets",
        "v": "Bulldog Tru-Fit Custom Cabinetry; frameless construction in natural walnut and matte-black painted finish; slab doors and drawer heads with edge-mounted finger pulls."
      },
      {
        "k": "Countertop",
        "v": "‘Taj Mahal’ Quartzite with full-height backsplash."
      },
      {
        "k": "Range Hood",
        "v": "Bulldog Tru-Fit Custom Cabinetry in fluted matte black with brass band."
      },
      {
        "k": "Flooring",
        "v": "Refinished maple hardwood in a diagonal parquet layout with clear finish."
      },
      {
        "k": "Lighting",
        "v": "Brass globe sconces and oversized cone pendants with dimmer scenes."
      }
    ],
    "designInsight": {
      "heading": "Mid-century roots, modern muscle.",
      "paragraphs": [
        "This kitchen blends clean-lined mid-century design with modern materials and functionality. Slab-front cabinetry and minimal detailing complement the home’s 1960s architecture, while matte black and brass accents introduce contrast and visual interest.",
        "We incorporated the original leaded-glass window into the design, creating a natural focal point. Glass-front cabinets display the homeowners’ favorite pieces, while integrated appliance garages keep countertops clean and uncluttered. The custom-built arch over the bar area adds architectural character and defines a secondary focal point within the space."
      ]
    }
  },
  {
    "slug": "cheery-cherry",
    "title": "Cheery Cherry",
    "loc": "Montgomery, OH",
    "type": "Kitchen Remodel + Wall Removal",
    "description": "Warm cherry Shaker cabinetry, a paneled refrigerator and a built-in window bench bring this cheerful kitchen to life. White herringbone tile, white quartz counters and gold pendants over a narrow island keep it bright.",
    "photos": [
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_7_02-Ember.webp",
        "alt": "Cherry kitchen with built-in bench, island and herringbone backsplash"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_2_14-Ember.webp",
        "alt": "Cherry cabinetry with white quartz counters and gold pendants"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_6_05-Ember.webp",
        "alt": "Narrow island with seating and honey bronze hardware"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_1_15-Ember.webp",
        "alt": "Paneled refrigerator integrated into cherry cabinetry"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_0_17-Ember.webp",
        "alt": "Built-in bench seating beside a large window"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_5_09-Ember.webp",
        "alt": "Range wall with herringbone subway tile backsplash"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_4_07-Ember.webp",
        "alt": "Mixed metal accents, gold lighting and stainless fixtures"
      },
      {
        "src": "/assets/projects/cheery-cherry/kitchen_44_3_11-Ember.webp",
        "alt": "Open layout connecting kitchen to adjacent living spaces"
      }
    ],
    "keyFeatures": [
      {
        "k": "Rich Cherry Cabinetry",
        "v": "Custom shaker doors in a warm ‘Cobblestone’ stain that adds depth and character throughout."
      },
      {
        "k": "Paneled Refrigerator & Appliance Garages",
        "v": "Maintain a clean, cohesive look while maximizing storage and reducing countertop clutter."
      },
      {
        "k": "Mixed Metal Accents",
        "v": "Gold lighting, honey bronze hardware and stainless steel fixtures add contrast and visual interest."
      },
      {
        "k": "Narrow Island with Seating",
        "v": "Provides additional workspace and casual seating without overwhelming the space."
      },
      {
        "k": "Built-In Bench",
        "v": "A cozy seating area by a large window invites family and friends to relax and enjoy a quiet moment."
      }
    ],
    "projectDetails": [
      {
        "k": "Kitchen Cabinets",
        "v": "Custom cherry wood with ‘Cobblestone’ stain in a classic Shaker door style."
      },
      {
        "k": "Countertop",
        "v": "ENVI ‘French Lace’ Quartz."
      },
      {
        "k": "Backsplash",
        "v": "Gloss white Soho ‘Canvas’ subway tile in a herringbone pattern."
      },
      {
        "k": "Hardware",
        "v": "Honey bronze pulls and knobs throughout."
      },
      {
        "k": "Lighting",
        "v": "Brushed gold pendants over the island and recessed cans on dimmers."
      }
    ],
    "designInsight": {
      "heading": "Warm, welcoming and wide open.",
      "paragraphs": [
        "This Cincinnati kitchen remodel was designed to feel warm and welcoming while opening up the space for a brighter, more airy flow. Removing walls created a layout that feels open and connected to adjacent living areas.",
        "Cherry cabinetry brings natural warmth, balanced by lighter finishes that keep the space feeling fresh and timeless. Every detail was carefully considered to make life easier and more enjoyable in this kitchen, from paneled appliances and hidden storage to the built-in bench that makes the kitchen both practical and inviting for everyday use."
      ]
    }
  },
  {
    "slug": "organic-elegance",
    "title": "Organic Elegance",
    "loc": "Fort Thomas, KY",
    "type": "Award-Winning New-Build Kitchen",
    "description": "Natural stone, plaster and quiet, organic textures shape this award-winning new-build kitchen. A plaster range hood meets a stone backsplash, and a quartzite island seats six.",
    "photos": [
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_10_63-Earhart-edit.webp",
        "alt": "Award-winning organic kitchen with plaster range hood and natural stone backsplash"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_5_72-Earhart.webp",
        "alt": "Expansive island in cherry stained Chestnut with quartzite top"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_7_70-Earhart.webp",
        "alt": "Painted perimeter cabinetry with inset Shaker doors"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_8_69-Earhart.webp",
        "alt": "Plaster range hood and natural stone full-height backsplash"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_4_73-Earhart.webp",
        "alt": "Walk-in pantry with double oven and organized storage"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_6_71-Earhart.webp",
        "alt": "Coordinating fireplace wall with hidden flanking storage"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_3_76-Earhart.webp",
        "alt": "Open kitchen connected to family room with hardwood flooring"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_1_80-Earhart.webp",
        "alt": "Detail of beaded inset cabinetry and brass hardware"
      },
      {
        "src": "/assets/projects/organic-elegance/kitchen_43_2_61-Earhart.webp",
        "alt": "Large windows flooding the kitchen with natural light"
      }
    ],
    "keyFeatures": [
      {
        "k": "Natural Stone Backsplash",
        "v": "Adds organic texture and complements the neutral color palette."
      },
      {
        "k": "Plaster Range Hood",
        "v": "Introduces warmth and subtle rustic character anchoring the cooking wall."
      },
      {
        "k": "Expansive Kitchen Island",
        "v": "Generous storage, ample workspace and comfortable seating, ideal for meal prep, casual dining, entertaining and homework alike."
      },
      {
        "k": "Walk-In Pantry with Double Oven",
        "v": "Keeps storage organized and moves baking and roasting out of the main kitchen workflow."
      },
      {
        "k": "Coordinating Fireplace Wall",
        "v": "Hidden storage flanks the stone hearth, tying the kitchen and living space together."
      }
    ],
    "projectDetails": [
      {
        "k": "Kitchen Cabinets",
        "v": "Inset cabinetry with a beaded frame; raised-panel Shaker door style; perimeter painted ‘Heron Plume’ with ‘Black Brushed Vintage’ glaze; island in cherry wood stained ‘Chestnut.’"
      },
      {
        "k": "Countertop",
        "v": "‘Taj Mahal’ Quartzite throughout perimeter and island."
      },
      {
        "k": "Backsplash",
        "v": "Full-height natural stone slab on the range wall."
      },
      {
        "k": "Range Hood",
        "v": "Hand-troweled plaster custom hood with subtle organic texture."
      },
      {
        "k": "Flooring",
        "v": "Wide-plank hardwood unifying kitchen, family room and pantry."
      }
    ],
    "designInsight": {
      "heading": "Inspired by the landscape outside the window.",
      "paragraphs": [
        "Set in a quiet Cincinnati setting, this kitchen draws inspiration from the surrounding landscape, blending natural materials with clean, modern design. Light wood cabinetry strikes a thoughtful balance between function, warmth and understated elegance, anchoring the space while letting the natural materials take center stage.",
        "Integrated appliances keep the space streamlined, while recessed lighting and large windows flood it with natural and ambient light. Hardwood flooring grounds the design and connects the kitchen to the surrounding living areas, resulting in a space that feels cohesive, comfortable and inspired by its natural setting."
      ]
    }
  },
  {
    "slug": "making-a-statement",
    "title": "Making a Statement",
    "loc": "Deer Park, OH",
    "type": "Kitchen + Bath Remodel",
    "description": "Removing a built-in pantry unlocked a smarter layout with more storage and a better workflow. Soft white raised-panel cabinets frame a bold green patterned tile backsplash, and a cherry-stained island sits under brass lantern pendants.",
    "photos": [
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_19-3T3A3182-1280x854.webp",
        "alt": "Making a Statement, photo 1"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_17-3T3A3176-scaled.webp",
        "alt": "Making a Statement, photo 2"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_22-3T3A3197-scaled.webp",
        "alt": "Making a Statement, photo 3"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_24-3T3A3206-scaled.webp",
        "alt": "Making a Statement, photo 4"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_20-3T3A3188-scaled.webp",
        "alt": "Making a Statement, photo 5"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_21-3T3A3194-scaled.webp",
        "alt": "Making a Statement, photo 6"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_23-3T3A3200-scaled.webp",
        "alt": "Making a Statement, photo 7"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_25-3T3A3215-scaled.webp",
        "alt": "Making a Statement, photo 8"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_27-3T3A3227-scaled.webp",
        "alt": "Making a Statement, photo 9"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_14-3T3A3158-scaled.webp",
        "alt": "Making a Statement, photo 10"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_01-3T3A3128-scaled.webp",
        "alt": "Making a Statement, photo 11"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_06-3T3A3104-scaled.webp",
        "alt": "Making a Statement, photo 12"
      },
      {
        "src": "/assets/projects/making-a-statement/bath_32_09-3T3A3137-scaled.webp",
        "alt": "Making a Statement, photo 13"
      },
      {
        "src": "/assets/projects/making-a-statement/bath_32_10-3T3A3143-scaled.webp",
        "alt": "Making a Statement, photo 14"
      },
      {
        "src": "/assets/projects/making-a-statement/bath_32_11-3T3A3146-scaled.webp",
        "alt": "Making a Statement, photo 15"
      },
      {
        "src": "/assets/projects/making-a-statement/bath_32_12-3T3A3152-scaled.webp",
        "alt": "Making a Statement, photo 16"
      },
      {
        "src": "/assets/projects/making-a-statement/kitchen_32_04-3T3A3119-scaled.webp",
        "alt": "Making a Statement, photo 17"
      }
    ]
  },
  {
    "slug": "formal-attire",
    "title": "Formal Attire",
    "loc": "Sycamore Township, OH",
    "type": "Kitchen Remodel",
    "description": "A refined, dressed-up kitchen with white uppers, black base cabinetry and brass pulls. A sculpted black range hood, polished marble-look counters and elevated millwork complete the look.",
    "photos": [
      {
        "src": "/assets/projects/formal-attire/kitchen_34_07-3T3A2942-1280x854.webp",
        "alt": "Formal Attire, photo 1"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_01-3T3A2930-scaled.webp",
        "alt": "Formal Attire, photo 2"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_11-3T3A2966-scaled.webp",
        "alt": "Formal Attire, photo 3"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_02-3T3A2927-scaled.webp",
        "alt": "Formal Attire, photo 4"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_06-3T3A2963-scaled.webp",
        "alt": "Formal Attire, photo 5"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_09-3T3A2951-scaled.webp",
        "alt": "Formal Attire, photo 6"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_10-3T3A2960-scaled.webp",
        "alt": "Formal Attire, photo 7"
      },
      {
        "src": "/assets/projects/formal-attire/kitchen_34_12-3T3A2975-scaled.webp",
        "alt": "Formal Attire, photo 8"
      }
    ]
  },
  {
    "slug": "comforts-of-home",
    "title": "Comforts of Home",
    "loc": "Blue Ash, OH",
    "type": "Kitchen Remodel",
    "description": "A welcoming, family-first kitchen built for long dinners and easy mornings, with white Shaker cabinetry and an island that seats five.",
    "photos": [
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_13-DSC03699-1280x854.webp",
        "alt": "Comforts of Home, photo 1"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_11-DSC03693-scaled.webp",
        "alt": "Comforts of Home, photo 2"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_07-DSC03690-scaled.webp",
        "alt": "Comforts of Home, photo 3"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_08-DSC03678-scaled.webp",
        "alt": "Comforts of Home, photo 4"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_01-DSC03657-scaled.webp",
        "alt": "Comforts of Home, photo 5"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_06-DSC03681-scaled.webp",
        "alt": "Comforts of Home, photo 6"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_15-DSC03717-scaled.webp",
        "alt": "Comforts of Home, photo 7"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_14-DSC03666-scaled.webp",
        "alt": "Comforts of Home, photo 8"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_04-DSC03684-scaled.webp",
        "alt": "Comforts of Home, photo 9"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_05-DSC03705-scaled.webp",
        "alt": "Comforts of Home, photo 10"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_02-DSC03687-scaled.webp",
        "alt": "Comforts of Home, photo 11"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_09-DSC03660-scaled.webp",
        "alt": "Comforts of Home, photo 12"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_10-DSC03663-scaled.webp",
        "alt": "Comforts of Home, photo 13"
      },
      {
        "src": "/assets/projects/comforts-of-home/kitchen_31_18-DSC03720-scaled.webp",
        "alt": "Comforts of Home, photo 14"
      }
    ]
  },
  {
    "slug": "beauty-of-wood",
    "title": "The Beauty of Wood",
    "loc": "Loveland, OH",
    "type": "Kitchen Remodel",
    "description": "Rich, natural wood cabinetry takes center stage in this serene kitchen. A black island topped in veined white quartz and a wood-banded black hood add contrast.",
    "photos": [
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_01-19701-MeadowbrookSexton1-1280x854.webp",
        "alt": "The Beauty of Wood, photo 1"
      },
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_02-19701-MeadowbrookSexton2-scaled.webp",
        "alt": "The Beauty of Wood, photo 2"
      },
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_04-19701-MeadowbrookSexton4-scaled.webp",
        "alt": "The Beauty of Wood, photo 3"
      },
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_05-19701-MeadowbrookSexton5-scaled.webp",
        "alt": "The Beauty of Wood, photo 4"
      },
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_06-19701-MeadowbrookSexton6-scaled.webp",
        "alt": "The Beauty of Wood, photo 5"
      },
      {
        "src": "/assets/projects/beauty-of-wood/kitchen_40_10-19701-MeadowbrookSexton10-scaled.webp",
        "alt": "The Beauty of Wood, photo 6"
      }
    ]
  },
  {
    "slug": "pure-bliss",
    "title": "Pure Bliss",
    "loc": "Crestview Hills, KY",
    "type": "Bathroom Remodel",
    "description": "A spa-inspired bathroom with floor-to-ceiling tile, a freestanding tub and warm brass accents. A herringbone tile wall frames the wood double vanity, beside a large glass walk-in shower.",
    "photos": [
      {
        "src": "/assets/projects/pure-bliss/bath_39_19-DSC03726-1280x854.webp",
        "alt": "Pure Bliss, photo 1"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_21-DSC03732-scaled.webp",
        "alt": "Pure Bliss, photo 2"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_28-DSC03744-scaled.webp",
        "alt": "Pure Bliss, photo 3"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_24-DSC03753-scaled.webp",
        "alt": "Pure Bliss, photo 4"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_23-DSC03735-scaled.webp",
        "alt": "Pure Bliss, photo 5"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_25-DSC03738-scaled.webp",
        "alt": "Pure Bliss, photo 6"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_27-DSC03756-scaled.webp",
        "alt": "Pure Bliss, photo 7"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_29-DSC03759-scaled.webp",
        "alt": "Pure Bliss, photo 8"
      },
      {
        "src": "/assets/projects/pure-bliss/bath_39_30-DSC03762-scaled.webp",
        "alt": "Pure Bliss, photo 9"
      }
    ]
  },
  {
    "slug": "singing-the-blues",
    "title": "Singing the Blues!",
    "loc": "Union, KY",
    "type": "Kitchen Remodel",
    "description": "A bold navy-and-white kitchen with a spacious island, built-in beverage fridge and deep storage. A wood range hood stands out against white subway tile, beside the new mudroom.",
    "photos": [
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_18-11952-DeerCreekMills8-1280x854.webp",
        "alt": "Singing the Blues!, photo 1"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_11-11952-DeerCreekMills1-scaled.webp",
        "alt": "Singing the Blues!, photo 2"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_13-11952-DeerCreekMills3-scaled.webp",
        "alt": "Singing the Blues!, photo 3"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_14-11952-DeerCreekMills4-scaled.webp",
        "alt": "Singing the Blues!, photo 4"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_15-11952-DeerCreekMills5-scaled.webp",
        "alt": "Singing the Blues!, photo 5"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_17-11952-DeerCreekMills7-scaled.webp",
        "alt": "Singing the Blues!, photo 6"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_19-11952-DeerCreekMills9-scaled.webp",
        "alt": "Singing the Blues!, photo 7"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_20-11952-DeerCreekMills10-scaled.webp",
        "alt": "Singing the Blues!, photo 8"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_21-11952-DeerCreekMills11-scaled.webp",
        "alt": "Singing the Blues!, photo 9"
      },
      {
        "src": "/assets/projects/singing-the-blues/kitchen_41_16-11952-DeerCreekMills6-scaled.webp",
        "alt": "Singing the Blues!, photo 10"
      }
    ]
  },
  {
    "slug": "kitchen-character",
    "title": "A Kitchen With Character",
    "loc": "Clifton, OH",
    "type": "Kitchen Remodel",
    "description": "Custom greige cabinetry with brass pulls, a matching wood hood and a herringbone tile backsplash give this kitchen real personality. A slate blue island adds calm color.",
    "photos": [
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_3-1280x854.webp",
        "alt": "A Kitchen With Character, photo 1"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_2-scaled.webp",
        "alt": "A Kitchen With Character, photo 2"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_9-scaled.webp",
        "alt": "A Kitchen With Character, photo 3"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_11-scaled.webp",
        "alt": "A Kitchen With Character, photo 4"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_4-scaled.webp",
        "alt": "A Kitchen With Character, photo 5"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_8-scaled.webp",
        "alt": "A Kitchen With Character, photo 6"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_5-scaled.webp",
        "alt": "A Kitchen With Character, photo 7"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_6-scaled.webp",
        "alt": "A Kitchen With Character, photo 8"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_12-scaled.webp",
        "alt": "A Kitchen With Character, photo 9"
      },
      {
        "src": "/assets/projects/kitchen-character/kitchen_30_13-scaled.webp",
        "alt": "A Kitchen With Character, photo 10"
      }
    ]
  },
  {
    "slug": "current-classic",
    "title": "Current Classic",
    "loc": "Oakley, OH",
    "type": "Kitchen Remodel",
    "description": "Transitional cabinetry, calm stone and handsome hardware make a classic that feels right now. Warm wood base cabinets pair with white uppers, herringbone tile and glass globe pendants.",
    "photos": [
      {
        "src": "/assets/projects/current-classic/kitchen_35_06-46133-AmerburyPlymouth-6-1280x854.webp",
        "alt": "Current Classic, photo 1"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_01-46133-AmerburyPlymouth-1-scaled.webp",
        "alt": "Current Classic, photo 2"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_02-46133-AmerburyPlymouth-2-scaled.webp",
        "alt": "Current Classic, photo 3"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_10-46133-AmerburyPlymouth-10-scaled.webp",
        "alt": "Current Classic, photo 4"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_03-46133-AmerburyPlymouth-3-scaled.webp",
        "alt": "Current Classic, photo 5"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_04-46133-AmerburyPlymouth-4-scaled.webp",
        "alt": "Current Classic, photo 6"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_05-46133-AmerburyPlymouth-5-scaled.webp",
        "alt": "Current Classic, photo 7"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_07-46133-AmerburyPlymouth-7-scaled.webp",
        "alt": "Current Classic, photo 8"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_08-46133-AmerburyPlymouth-8-scaled.webp",
        "alt": "Current Classic, photo 9"
      },
      {
        "src": "/assets/projects/current-classic/kitchen_35_11-46133-AmerburyPlymouth-11-scaled.webp",
        "alt": "Current Classic, photo 10"
      }
    ]
  },
  {
    "slug": "sleek-simplicity",
    "title": "Sleek Simplicity",
    "loc": "Lawrenceburg, IN",
    "type": "Kitchen Remodel",
    "description": "A minimalist kitchen with clean slab cabinetry and integrated appliances. Pale wood uppers contrast with dark woodgrain lowers, and white quartz tops the U-shaped layout.",
    "photos": [
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_25-5732TanglewoodAnnArbor-3-1280x854.webp",
        "alt": "Sleek Simplicity, photo 1"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_24-5732TanglewoodAnnArbor-2-scaled.webp",
        "alt": "Sleek Simplicity, photo 2"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_28-5732TanglewoodAnnArbor-6-scaled.webp",
        "alt": "Sleek Simplicity, photo 3"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_27-5732TanglewoodAnnArbor-5-scaled.webp",
        "alt": "Sleek Simplicity, photo 4"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_23-5732TanglewoodAnnArbor-1-scaled.webp",
        "alt": "Sleek Simplicity, photo 5"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_29-5732TanglewoodAnnArbor-7-scaled.webp",
        "alt": "Sleek Simplicity, photo 6"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_30-5732TanglewoodAnnArbor-8-scaled.webp",
        "alt": "Sleek Simplicity, photo 7"
      },
      {
        "src": "/assets/projects/sleek-simplicity/kitchen_37_26-5732TanglewoodAnnArbor-4-scaled.webp",
        "alt": "Sleek Simplicity, photo 8"
      }
    ]
  },
  {
    "slug": "colonial-revival",
    "title": "Colonial Revival",
    "loc": "Wyoming, OH",
    "type": "Kitchen Remodel",
    "description": "A faithful update that honors the home's colonial roots with refined cabinetry and timeless finishes. White Shaker uppers top espresso base cabinets, with a blush scalloped tile backsplash and a gold faucet.",
    "photos": [
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_18-7292HilsboroCanton-6-1280x854.webp",
        "alt": "Colonial Revival, photo 1"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_13-7292HilsboroCanton-1-scaled.webp",
        "alt": "Colonial Revival, photo 2"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_14-7292HilsboroCanton-2-scaled.webp",
        "alt": "Colonial Revival, photo 3"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_22-7292HilsboroCanton-10-scaled.webp",
        "alt": "Colonial Revival, photo 4"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_17-7292HilsboroCanton-5-scaled.webp",
        "alt": "Colonial Revival, photo 5"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_16-7292HilsboroCanton-4-scaled.webp",
        "alt": "Colonial Revival, photo 6"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_15-7292HilsboroCanton-3-scaled.webp",
        "alt": "Colonial Revival, photo 7"
      },
      {
        "src": "/assets/projects/colonial-revival/kitchen_36_20-7292HilsboroCanton-8-scaled.webp",
        "alt": "Colonial Revival, photo 8"
      }
    ]
  },
  {
    "slug": "master-and-more",
    "title": "Master and More!",
    "loc": "Newport, KY",
    "type": "Bath + Closet Suite",
    "description": "A primary suite remodel pairing a serene bath with an organized walk-in closet. A freestanding tub, a subway-tiled walk-in shower and an espresso double vanity with linen towers complete it.",
    "photos": [
      {
        "src": "/assets/projects/master-and-more/bath_38_25-48177-ParkLaneStark4-1280x854.webp",
        "alt": "Master and More!, photo 1"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_23-48177-ParkLaneStark2-scaled.webp",
        "alt": "Master and More!, photo 2"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_22-48177-ParkLaneStark1-scaled.webp",
        "alt": "Master and More!, photo 3"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_24-48177-ParkLaneStark3-scaled.webp",
        "alt": "Master and More!, photo 4"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_26-48177-ParkLaneStark5-scaled.webp",
        "alt": "Master and More!, photo 5"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_27-48177-ParkLaneStark6-scaled.webp",
        "alt": "Master and More!, photo 6"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_28-48177-ParkLaneStark7-scaled.webp",
        "alt": "Master and More!, photo 7"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_29-48177-ParkLaneStark8-scaled.webp",
        "alt": "Master and More!, photo 8"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_31-48177-ParkLaneStark10-scaled.webp",
        "alt": "Master and More!, photo 9"
      },
      {
        "src": "/assets/projects/master-and-more/bath_38_30-48177-ParkLaneStark9-scaled.webp",
        "alt": "Master and More!, photo 10"
      }
    ]
  },
  {
    "slug": "full-house",
    "title": "Full House",
    "loc": "Amberley Village, OH",
    "type": "Kitchen Remodel",
    "description": "A full first-floor transformation with an open layout, dual islands and seamless finishes. A black bell-shaped hood, patterned accent tile and woven rattan pendants define the kitchen.",
    "photos": [
      {
        "src": "/assets/projects/full-house/kitchen_33_07-3T3A3032-1280x854.webp",
        "alt": "Full House, photo 1"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_16-3T3A3071-scaled.webp",
        "alt": "Full House, photo 2"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_13-3T3A3059-scaled.webp",
        "alt": "Full House, photo 3"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_15-3T3A3065-scaled.webp",
        "alt": "Full House, photo 4"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_10-3T3A3047-scaled.webp",
        "alt": "Full House, photo 5"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_04-3T3A3011-scaled.webp",
        "alt": "Full House, photo 6"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_18-3T3A3077-scaled.webp",
        "alt": "Full House, photo 7"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_19-3T3A3080-scaled.webp",
        "alt": "Full House, photo 8"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_21-3T3A3086-scaled.webp",
        "alt": "Full House, photo 9"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_23-3T3A2990-scaled.webp",
        "alt": "Full House, photo 10"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_20-3T3A3083-powder-room-scaled.webp",
        "alt": "Full House, photo 11"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_02-3T3A2999-scaled.webp",
        "alt": "Full House, photo 12"
      },
      {
        "src": "/assets/projects/full-house/kitchen_33_08-3T3A3038-scaled.webp",
        "alt": "Full House, photo 13"
      }
    ]
  },
  {
    "slug": "fresh-refresh",
    "title": "Fresh Refresh",
    "loc": "Milford, OH",
    "type": "Kitchen Remodel",
    "description": "A cohesive refresh of the kitchen, mudroom and laundry: same footprint, brand-new feel. White Shaker cabinetry, stainless double wall ovens and a gray glass tile backsplash lead the update.",
    "photos": [
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_10.Kitchen-1280x845.webp",
        "alt": "Fresh Refresh, photo 1"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_12.Kitchen.webp",
        "alt": "Fresh Refresh, photo 2"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_15.Kitchen.webp",
        "alt": "Fresh Refresh, photo 3"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_8.Kitchen-edit.webp",
        "alt": "Fresh Refresh, photo 4"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_11.Kitchen.webp",
        "alt": "Fresh Refresh, photo 5"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_13.Kitchen.webp",
        "alt": "Fresh Refresh, photo 6"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_14.Kitchen.webp",
        "alt": "Fresh Refresh, photo 7"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_16.Kitchen.webp",
        "alt": "Fresh Refresh, photo 8"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_7.Mudroom.webp",
        "alt": "Fresh Refresh, photo 9"
      },
      {
        "src": "/assets/projects/fresh-refresh/kitchen_21_2.Laundry.webp",
        "alt": "Fresh Refresh, photo 10"
      }
    ]
  },
  {
    "slug": "secret-storage",
    "title": "Secret Storage",
    "loc": "Villa Hills, KY",
    "type": "Kitchen Remodel",
    "description": "Hidden pantries, appliance garages and clever pull-outs keep this kitchen clutter-free. Black cabinetry with brass hardware frames a natural wood range hood and a curved window seat.",
    "photos": [
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-11-1280x845.webp",
        "alt": "Secret Storage, photo 1"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-2.webp",
        "alt": "Secret Storage, photo 2"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-8.webp",
        "alt": "Secret Storage, photo 3"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-9.webp",
        "alt": "Secret Storage, photo 4"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-10.webp",
        "alt": "Secret Storage, photo 5"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-13.webp",
        "alt": "Secret Storage, photo 6"
      },
      {
        "src": "/assets/projects/secret-storage/kitchen_22_Hunting-Valley-14.webp",
        "alt": "Secret Storage, photo 7"
      }
    ]
  },
  {
    "slug": "personal-style",
    "title": "Personal Style",
    "loc": "Edgewood, KY",
    "type": "Kitchen Remodel",
    "description": "A kitchen with a strong point of view: confident color, custom cabinetry and curated finishes. A metal range hood, copper farmhouse sink and wood-topped island stand out against white cabinetry.",
    "photos": [
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac2-1280x845.webp",
        "alt": "Personal Style, photo 1"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac3.webp",
        "alt": "Personal Style, photo 2"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac4.webp",
        "alt": "Personal Style, photo 3"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac13.webp",
        "alt": "Personal Style, photo 4"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac18.webp",
        "alt": "Personal Style, photo 5"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac19.webp",
        "alt": "Personal Style, photo 6"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac15.webp",
        "alt": "Personal Style, photo 7"
      },
      {
        "src": "/assets/projects/personal-style/kitchen_23_Tepeyac-24.webp",
        "alt": "Personal Style, photo 8"
      }
    ]
  },
  {
    "slug": "simply-gorgeous",
    "title": "Simply…Gorgeous!",
    "loc": "Florence, KY",
    "type": "Kitchen Remodel",
    "description": "Light cabinetry, clean surfaces and warm accents come together in this simply gorgeous everyday kitchen. A navy hood and navy island with white quartz anchor the room, with cognac leather stools.",
    "photos": [
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare2-1280x845.webp",
        "alt": "Simply…Gorgeous!, photo 1"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare3.webp",
        "alt": "Simply…Gorgeous!, photo 2"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare4.webp",
        "alt": "Simply…Gorgeous!, photo 3"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare5.webp",
        "alt": "Simply…Gorgeous!, photo 4"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare7.webp",
        "alt": "Simply…Gorgeous!, photo 5"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare8.webp",
        "alt": "Simply…Gorgeous!, photo 6"
      },
      {
        "src": "/assets/projects/simply-gorgeous/kitchen_24_CoventrySquare.webp",
        "alt": "Simply…Gorgeous!, photo 7"
      }
    ]
  },
  {
    "slug": "clean-lines",
    "title": "Clean Lines",
    "loc": "Madeira, OH",
    "type": "Kitchen Remodel",
    "description": "A streamlined modern kitchen with crisp lines, integrated storage and an effortless flow. Wood-grain slab uppers sit above matte black lowers, with a white box hood.",
    "photos": [
      {
        "src": "/assets/projects/clean-lines/kitchen-15-6-Valentine-1280x845.webp",
        "alt": "Clean Lines, photo 1"
      },
      {
        "src": "/assets/projects/clean-lines/kitchen-15-4Valentine.webp",
        "alt": "Clean Lines, photo 2"
      },
      {
        "src": "/assets/projects/clean-lines/kitchen-15-1-Valentine.webp",
        "alt": "Clean Lines, photo 3"
      },
      {
        "src": "/assets/projects/clean-lines/kitchen-15-2-Valentine.webp",
        "alt": "Clean Lines, photo 4"
      },
      {
        "src": "/assets/projects/clean-lines/kitchen-15-3-Valentine.webp",
        "alt": "Clean Lines, photo 5"
      },
      {
        "src": "/assets/projects/clean-lines/kitchen-15-5-Valentine.webp",
        "alt": "Clean Lines, photo 6"
      }
    ]
  },
  {
    "slug": "simply-blessed",
    "title": "Simply Blessed",
    "loc": "Park Hills, KY",
    "type": "Kitchen Remodel",
    "description": "A graceful, family-focused kitchen with white Shaker cabinetry and a coordinating laundry refresh. Stainless double wall ovens, a pantry tower and open shelving keep everything handy.",
    "photos": [
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_Kitchen5-1280x845.webp",
        "alt": "Simply Blessed, photo 1"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_Kitchen.Edit2_.webp",
        "alt": "Simply Blessed, photo 2"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_Kitchen3.webp",
        "alt": "Simply Blessed, photo 3"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_21_8.Kitchen-edit.webp",
        "alt": "Simply Blessed, photo 4"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_10Kitchen.webp",
        "alt": "Simply Blessed, photo 5"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_Laundry15.webp",
        "alt": "Simply Blessed, photo 6"
      },
      {
        "src": "/assets/projects/simply-blessed/kitchen_26_Laundry17.webp",
        "alt": "Simply Blessed, photo 7"
      }
    ]
  },
  {
    "slug": "double-take",
    "title": "Double Take",
    "loc": "Mt. Lookout, OH",
    "type": "Bathroom Remodel",
    "description": "Two bathrooms reimagined with luxe tile, custom vanities and spa-level details. The primary bath pairs a white double vanity and storage tower with a marble-look tiled tub.",
    "photos": [
      {
        "src": "/assets/projects/double-take/bath_4_MasterBathroom1-1280x845.webp",
        "alt": "Double Take, photo 1"
      },
      {
        "src": "/assets/projects/double-take/bath_4_MasterBathroom9.webp",
        "alt": "Double Take, photo 2"
      },
      {
        "src": "/assets/projects/double-take/bath_4_MasterBathroom3.webp",
        "alt": "Double Take, photo 3"
      },
      {
        "src": "/assets/projects/double-take/bath_4_Bathroom2_11.webp",
        "alt": "Double Take, photo 4"
      },
      {
        "src": "/assets/projects/double-take/bath_4_Bathroom2_14.webp",
        "alt": "Double Take, photo 5"
      }
    ]
  },
  {
    "slug": "dressed-to-the-nines",
    "title": "Dressed to the Nines",
    "loc": "Terrace Park, OH",
    "type": "Kitchen Remodel",
    "description": "A jewel-box kitchen with statement lighting, decorative trim and integrated appliances. Black cabinetry with brass pulls, heavily veined quartz and a brass-banded hood make it shine.",
    "photos": [
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen4-1280x845.webp",
        "alt": "Dressed to the Nines, photo 1"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen2.webp",
        "alt": "Dressed to the Nines, photo 2"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen5.webp",
        "alt": "Dressed to the Nines, photo 3"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen1.webp",
        "alt": "Dressed to the Nines, photo 4"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen3.webp",
        "alt": "Dressed to the Nines, photo 5"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen6.webp",
        "alt": "Dressed to the Nines, photo 6"
      },
      {
        "src": "/assets/projects/dressed-to-the-nines/kitchen-14-ChurchKitchen7.webp",
        "alt": "Dressed to the Nines, photo 7"
      }
    ]
  },
  {
    "slug": "green-with-envy",
    "title": "Green With Envy",
    "loc": "Kenwood, OH",
    "type": "Kitchen Remodel",
    "description": "A confident kitchen where shimmering green tile climbs the range wall to the ceiling. Crisp white Shaker cabinetry, white quartz and warm oak floors balance it.",
    "photos": [
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-5-House1-1280x845.webp",
        "alt": "Green With Envy, photo 1"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-1-House1.webp",
        "alt": "Green With Envy, photo 2"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-3-House1.webp",
        "alt": "Green With Envy, photo 3"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-4-House1.webp",
        "alt": "Green With Envy, photo 4"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-6-House1.webp",
        "alt": "Green With Envy, photo 5"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-2-House1.webp",
        "alt": "Green With Envy, photo 6"
      },
      {
        "src": "/assets/projects/green-with-envy/kitchen-16-7-House1.webp",
        "alt": "Green With Envy, photo 7"
      }
    ]
  },
  {
    "slug": "cheerful-sophistication",
    "title": "Cheerful Sophistication",
    "loc": "Anderson Township, OH",
    "type": "Kitchen Remodel",
    "description": "A bright, polished kitchen that balances classic millwork with playful personality. White Shaker cabinets, dark quartz counters, a hexagon tile inset and a red-knobbed range bring charm.",
    "photos": [
      {
        "src": "/assets/projects/cheerful-sophistication/kitchen_29_Kitchen9-1280x845.webp",
        "alt": "Cheerful Sophistication, photo 1"
      },
      {
        "src": "/assets/projects/cheerful-sophistication/kitchen_29_Kitchen5.webp",
        "alt": "Cheerful Sophistication, photo 2"
      },
      {
        "src": "/assets/projects/cheerful-sophistication/kitchen_29_Kitchen7.webp",
        "alt": "Cheerful Sophistication, photo 3"
      },
      {
        "src": "/assets/projects/cheerful-sophistication/kitchen_29_Kitchen6.webp",
        "alt": "Cheerful Sophistication, photo 4"
      },
      {
        "src": "/assets/projects/cheerful-sophistication/kitchen_29_Kitchen8.webp",
        "alt": "Cheerful Sophistication, photo 5"
      }
    ]
  },
  {
    "slug": "artful-vibe",
    "title": "Artful Vibe",
    "loc": "West Chester, OH",
    "type": "Kitchen Remodel",
    "description": "An expressive kitchen remodel mixing bold materials and gallery-style detailing for a one-of-a-kind look. Textured gray slab cabinetry, a charcoal tile backsplash and exposed black steel beams set the tone.",
    "photos": [
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church5-1280x845.webp",
        "alt": "Artful Vibe, photo 1"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church7.webp",
        "alt": "Artful Vibe, photo 2"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church11.webp",
        "alt": "Artful Vibe, photo 3"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church12.webp",
        "alt": "Artful Vibe, photo 4"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church13.webp",
        "alt": "Artful Vibe, photo 5"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church4.webp",
        "alt": "Artful Vibe, photo 6"
      },
      {
        "src": "/assets/projects/artful-vibe/kitchen_25_Church14.webp",
        "alt": "Artful Vibe, photo 7"
      }
    ]
  },
  {
    "slug": "a-space-of-their-own",
    "title": "A Space of Their Own",
    "loc": "Mason, OH",
    "type": "Kitchen Remodel",
    "description": "A custom kitchen tailored to how this family really lives, with soft neutral tones, smart storage and a layout that finally works. White Shaker cabinetry climbs the vaulted ceiling, and a generous white island seats guests beside large windows.",
    "photos": [
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst3-1280x845.webp",
        "alt": "A Space of Their Own, photo 1"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst7.webp",
        "alt": "A Space of Their Own, photo 2"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst9.webp",
        "alt": "A Space of Their Own, photo 3"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst10.webp",
        "alt": "A Space of Their Own, photo 4"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst11.webp",
        "alt": "A Space of Their Own, photo 5"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst12.webp",
        "alt": "A Space of Their Own, photo 6"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst26.webp",
        "alt": "A Space of Their Own, photo 7"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst21.webp",
        "alt": "A Space of Their Own, photo 8"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst15.webp",
        "alt": "A Space of Their Own, photo 9"
      },
      {
        "src": "/assets/projects/a-space-of-their-own/kitchen_28_Lyonhurst14.webp",
        "alt": "A Space of Their Own, photo 10"
      }
    ]
  },
  {
    "slug": "family-gatherings",
    "title": "Family Gatherings",
    "loc": "Glendale, OH",
    "type": "Kitchen Remodel",
    "description": "Designed for the whole crew: open sightlines, durable surfaces and seating built around the cook. A dark-stained island with a gold-veined top sits under bronze lantern pendants.",
    "photos": [
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen1-1280x845.webp",
        "alt": "Family Gatherings, photo 1"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen2.webp",
        "alt": "Family Gatherings, photo 2"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen3.webp",
        "alt": "Family Gatherings, photo 3"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen4.webp",
        "alt": "Family Gatherings, photo 4"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen5.webp",
        "alt": "Family Gatherings, photo 5"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen6.webp",
        "alt": "Family Gatherings, photo 6"
      },
      {
        "src": "/assets/projects/family-gatherings/kitchen_27_D.Kitchen7.webp",
        "alt": "Family Gatherings, photo 7"
      }
    ]
  },
  {
    "slug": "inspiring-update",
    "title": "Inspiring Update",
    "loc": "Symmes Township, OH",
    "type": "Kitchen Remodel",
    "description": "A thoughtful update that opens up the space and modernizes every fixed surface. White Shaker cabinetry, ceiling-high subway tile and a long island with turned legs complete it.",
    "photos": [
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen6-1280x845.webp",
        "alt": "Inspiring Update, photo 1"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen3.webp",
        "alt": "Inspiring Update, photo 2"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen5.webp",
        "alt": "Inspiring Update, photo 3"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen4.webp",
        "alt": "Inspiring Update, photo 4"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen7.webp",
        "alt": "Inspiring Update, photo 5"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen2.webp",
        "alt": "Inspiring Update, photo 6"
      },
      {
        "src": "/assets/projects/inspiring-update/kitchen-17-Kitchen1.webp",
        "alt": "Inspiring Update, photo 7"
      }
    ]
  },
  {
    "slug": "tiled-retreat",
    "title": "Tiled Retreat",
    "loc": "Mt. Adams, OH",
    "type": "Bathroom Remodel",
    "description": "A bathroom remodel anchored by floor-to-ceiling tile, a walk-in shower with a tiled bench and a calm, spa-like palette. Gray stone-look tile with a mosaic band surrounds a freestanding oval soaking tub.",
    "photos": [
      {
        "src": "/assets/projects/tiled-retreat/bath-3-16-Eaton-1280x845.webp",
        "alt": "Tiled Retreat, photo 1"
      },
      {
        "src": "/assets/projects/tiled-retreat/bath-3-14-Eaton.webp",
        "alt": "Tiled Retreat, photo 2"
      },
      {
        "src": "/assets/projects/tiled-retreat/bath-3-17-Eaton.webp",
        "alt": "Tiled Retreat, photo 3"
      },
      {
        "src": "/assets/projects/tiled-retreat/bath-3-18-Eaton.webp",
        "alt": "Tiled Retreat, photo 4"
      },
      {
        "src": "/assets/projects/tiled-retreat/bath-3-15-Eaton.webp",
        "alt": "Tiled Retreat, photo 5"
      }
    ]
  },
  {
    "slug": "expansive-island",
    "title": "Expansive Island",
    "loc": "Mariemont, OH",
    "type": "Kitchen Remodel",
    "description": "An oversized island anchors this open-plan kitchen, perfect for gathering, prepping and serving. Its gray-stained base and flowing granite top hold a double sink and seating.",
    "photos": [
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-6-1280x845.webp",
        "alt": "Expansive Island, photo 1"
      },
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-2.webp",
        "alt": "Expansive Island, photo 2"
      },
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-3.webp",
        "alt": "Expansive Island, photo 3"
      },
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-1.webp",
        "alt": "Expansive Island, photo 4"
      },
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-4.webp",
        "alt": "Expansive Island, photo 5"
      },
      {
        "src": "/assets/projects/expansive-island/kitchen-18-Kitchen4-5.webp",
        "alt": "Expansive Island, photo 6"
      }
    ]
  },
  {
    "slug": "white-woods",
    "title": "White & Woods",
    "loc": "Columbia Tusculum, OH",
    "type": "Kitchen Remodel",
    "description": "A serene white-and-wood kitchen pairing painted Shaker cabinetry and brass pulls with warm accents. A dark-stained island sits under gold geometric pendants.",
    "photos": [
      {
        "src": "/assets/projects/white-woods/kitchen-20-7-OakKnoll-1280x845.webp",
        "alt": "White & Woods, photo 1"
      },
      {
        "src": "/assets/projects/white-woods/kitchen-20-10-OakKnoll.webp",
        "alt": "White & Woods, photo 2"
      },
      {
        "src": "/assets/projects/white-woods/kitchen-20-8-OakKnoll.webp",
        "alt": "White & Woods, photo 3"
      },
      {
        "src": "/assets/projects/white-woods/kitchen-20-11-OakKnoll.webp",
        "alt": "White & Woods, photo 4"
      },
      {
        "src": "/assets/projects/white-woods/kitchen-20-12-OakKnoll.webp",
        "alt": "White & Woods, photo 5"
      },
      {
        "src": "/assets/projects/white-woods/kitchen-20-9-OakKnoll.webp",
        "alt": "White & Woods, photo 6"
      }
    ]
  },
  {
    "slug": "stunning-cellar",
    "title": "Stunning Cellar",
    "loc": "Aurora, IN",
    "type": "Wine Cellar",
    "description": "A stone-walled wine cellar with dark wood cabinetry, lit wine racks, glass-front display cases and a crystal chandelier. It opens to an old-world kitchen with timber beams, cream cabinetry and a granite bar.",
    "photos": [
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00218B1B8466.webp",
        "alt": "Stunning Cellar, photo 1"
      },
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00038B1B8281-1280x845.webp",
        "alt": "Stunning Cellar, photo 2"
      },
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00058B1B8294.webp",
        "alt": "Stunning Cellar, photo 3"
      },
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00078B1B8304.webp",
        "alt": "Stunning Cellar, photo 4"
      },
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00148B1B8384.webp",
        "alt": "Stunning Cellar, photo 5"
      },
      {
        "src": "/assets/projects/stunning-cellar/kitchen-19-00098B1B8313.webp",
        "alt": "Stunning Cellar, photo 6"
      }
    ]
  },
  {
    "slug": "kitchen-10",
    "title": "Kitchen Retreat",
    "loc": "Liberty Township, OH",
    "type": "Kitchen Remodel",
    "description": "A kitchen remodel featuring crisp white painted cabinetry, durable quartz counters and a furniture-style island with custom detailing. The island's white top is swept with warm gold veining over a dark base, framed by beige subway tile.",
    "photos": [
      {
        "src": "/assets/projects/kitchen-10/Kitchen_10_8B1B7831-1080x713.webp",
        "alt": "Kitchen Retreat, photo 1"
      },
      {
        "src": "/assets/projects/kitchen-10/Kitchen_10_8B1B7732.webp",
        "alt": "Kitchen Retreat, photo 2"
      },
      {
        "src": "/assets/projects/kitchen-10/Kitchen_10_8B1B7777.webp",
        "alt": "Kitchen Retreat, photo 3"
      },
      {
        "src": "/assets/projects/kitchen-10/Kitchen_10_8B1B7814.webp",
        "alt": "Kitchen Retreat, photo 4"
      },
      {
        "src": "/assets/projects/kitchen-10/Kitchen_10_8B1B7763.webp",
        "alt": "Kitchen Retreat, photo 5"
      }
    ]
  },
  {
    "slug": "1217",
    "title": "Bright & Airy Kitchen",
    "loc": "Hyde Park, OH",
    "type": "Kitchen Remodel",
    "description": "Two-tone Shaker cabinetry, warm wood-grain tile and a bright, airy footprint redefine this everyday kitchen. Weathered plank-look tile wraps the peninsula, and an espresso island contrasts with white cabinets.",
    "photos": [
      {
        "src": "/assets/projects/1217/Kitchen_7_Q0A7591-1-1080x713.webp",
        "alt": "Bright & Airy Kitchen, photo 1"
      },
      {
        "src": "/assets/projects/1217/kitchen_7_Q0A7650-1.webp",
        "alt": "Bright & Airy Kitchen, photo 2"
      },
      {
        "src": "/assets/projects/1217/kitchen_7_110Q0A7601-1.webp",
        "alt": "Bright & Airy Kitchen, photo 3"
      },
      {
        "src": "/assets/projects/1217/kitchen_7_Q0A7583-1.webp",
        "alt": "Bright & Airy Kitchen, photo 4"
      },
      {
        "src": "/assets/projects/1217/kitchen_7_Q0A7626-1.webp",
        "alt": "Bright & Airy Kitchen, photo 5"
      }
    ]
  },
  {
    "slug": "kitchen-4",
    "title": "Classic Kitchen Update",
    "loc": "Pleasant Ridge, OH",
    "type": "Kitchen Remodel",
    "description": "A dramatic kitchen transformation with a custom range hood, decorative corbels and detailed island cabinetry. Glazed cream cabinets, granite counters and a diamond-accent tile backsplash complete it.",
    "photos": [
      {
        "src": "/assets/projects/kitchen-4/kitchen_4_38T3A7220-1080x713.webp",
        "alt": "Classic Kitchen Update, photo 1"
      },
      {
        "src": "/assets/projects/kitchen-4/kitchen_4_48T3A7227.webp",
        "alt": "Classic Kitchen Update, photo 2"
      },
      {
        "src": "/assets/projects/kitchen-4/kitchen_4_28T3A7212.webp",
        "alt": "Classic Kitchen Update, photo 3"
      },
      {
        "src": "/assets/projects/kitchen-4/kitchen_4_18T3A7160.webp",
        "alt": "Classic Kitchen Update, photo 4"
      },
      {
        "src": "/assets/projects/kitchen-4/kitchen_4_78T3A7260.webp",
        "alt": "Classic Kitchen Update, photo 5"
      }
    ]
  },
  {
    "slug": "kitchen-2",
    "title": "Refined Kitchen Remodel",
    "loc": "Norwood, OH",
    "type": "Kitchen Remodel",
    "description": "A timeless kitchen remodel with a white furniture-style island, oak flooring, subway-tile backsplash and industrial pendant lighting. Warm stained cabinetry and a matching wood range hood surround a farmhouse sink.",
    "photos": [
      {
        "src": "/assets/projects/kitchen-2/kitchen_2_8T3A2963-1080x713.webp",
        "alt": "Refined Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/kitchen-2/kitchen_2_8T3A2978.webp",
        "alt": "Refined Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/kitchen-2/kitchen_2_8T3A2998.webp",
        "alt": "Refined Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/kitchen-2/kitchen_2_8T3A3052.webp",
        "alt": "Refined Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/kitchen-2/kitchen_2_8T3A2984.webp",
        "alt": "Refined Kitchen Remodel, photo 5"
      }
    ]
  },
  {
    "slug": "1250",
    "title": "Modern Kitchen Refresh",
    "loc": "Indian Hill, OH",
    "type": "Kitchen Remodel",
    "description": "This galley-style kitchen was reworked around a generous island, white painted shaker cabinets and quartzite counters, with a white herringbone tile backsplash and black dome pendants over the island.",
    "photos": [
      {
        "src": "/assets/projects/1250/kitchen_9_48T3A4693-1080x713.webp",
        "alt": "Modern Kitchen Refresh, photo 1"
      },
      {
        "src": "/assets/projects/1250/kitchen_9_28T3A4624.webp",
        "alt": "Modern Kitchen Refresh, photo 2"
      },
      {
        "src": "/assets/projects/1250/kitchen_9_18T3A4607.webp",
        "alt": "Modern Kitchen Refresh, photo 3"
      },
      {
        "src": "/assets/projects/1250/kitchen_9_88T3A4737.webp",
        "alt": "Modern Kitchen Refresh, photo 4"
      },
      {
        "src": "/assets/projects/1250/kitchen_9_68T3A4705.webp",
        "alt": "Modern Kitchen Refresh, photo 5"
      }
    ]
  },
  {
    "slug": "dark-luxe-powder-room-remodel",
    "title": "Dark Luxe Powder Room Remodel",
    "loc": "",
    "type": "Powder Room Remodel",
    "description": "Bulldog Remodel Group gave this powder room a refined, dramatic feel with a floating stone vanity, statement lighting and rich finishes. Deep charcoal paneled walls surround a black fluted vessel sink, while a gold-trimmed mirror sits between glass sconces beneath a white sculptural pendant.",
    "photos": [
      {
        "src": "/assets/projects/dark-luxe-powder-room-remodel/img-00.webp",
        "alt": "Dark Luxe Powder Room Remodel, photo 1"
      },
      {
        "src": "/assets/projects/dark-luxe-powder-room-remodel/img-01.webp",
        "alt": "Dark Luxe Powder Room Remodel, photo 2"
      },
      {
        "src": "/assets/projects/dark-luxe-powder-room-remodel/img-02.webp",
        "alt": "Dark Luxe Powder Room Remodel, photo 3"
      },
      {
        "src": "/assets/projects/dark-luxe-powder-room-remodel/img-03.webp",
        "alt": "Dark Luxe Powder Room Remodel, photo 4"
      },
      {
        "src": "/assets/projects/dark-luxe-powder-room-remodel/img-04.webp",
        "alt": "Dark Luxe Powder Room Remodel, photo 5"
      }
    ]
  },
  {
    "slug": "modern-made-beautiful-whole-home-remodel",
    "title": "Modern Made Beautiful Whole Home Remodel",
    "loc": "",
    "type": "Whole-Home Remodel",
    "description": "Throughout this remodel, Bulldog Remodel Group merges modern simplicity with livable comfort, including a slate gray fireplace wall with vertical wood slats and a wood mantel.",
    "photos": [
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-00.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-01.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-02.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-03.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-04.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-05.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-06.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-made-beautiful-whole-home-remodel/img-07.webp",
        "alt": "Modern Made Beautiful Whole Home Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "traditional-elegance-bathroom-remodel",
    "title": "Traditional Elegance Bathroom Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "Combining modern comfort with timeless style, Bulldog Remodel Group turned this dated bathroom into a bright, sophisticated retreat. A walnut vanity with brass pulls and a white stone top sits beneath tall framed mirrors. Paneled walls, brass sconces and a patterned marble mosaic floor finish the room.",
    "photos": [
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-00.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 1"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-01.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 2"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-02.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 3"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-03.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 4"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-04.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 5"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-05.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 6"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-06.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 7"
      },
      {
        "src": "/assets/projects/traditional-elegance-bathroom-remodel/img-07.webp",
        "alt": "Traditional Elegance Bathroom Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "rich-in-color-and-texture-whole-home-remodel",
    "title": "Rich in Color and Texture Whole Home Remodel",
    "loc": "",
    "type": "Whole-Home Remodel",
    "description": "This home shows the care our team brings to every project, layering color and texture room to room. A whitewashed brick arch opens into a kitchen with deep green cabinetry, a black patterned tile wall and a brass chandelier.",
    "photos": [
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-00.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 1"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-01.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 2"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-02.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 3"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-03.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 4"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-04.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 5"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-05.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 6"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-06.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 7"
      },
      {
        "src": "/assets/projects/rich-in-color-and-texture-whole-home-remodel/img-07.webp",
        "alt": "Rich in Color and Texture Whole Home Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "polished-glam-bathroom-remodel",
    "title": "Polished Glam Bathroom Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "With this remodel, Bulldog Remodel Group turned a dated bathroom into a polished, glamorous space. Yellow walls and speckled granite gave way to a soft gray shaker vanity with a white top, a frameless glass shower with marble-look tile, brass lighting and a patterned tile floor.",
    "photos": [
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-00.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 1"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-01.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 2"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-02.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 3"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-03.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 4"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-04.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 5"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-05.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 6"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-06.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 7"
      },
      {
        "src": "/assets/projects/polished-glam-bathroom-remodel/img-07.webp",
        "alt": "Polished Glam Bathroom Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "soft-green-and-pattern-floor-primary-bathroom",
    "title": "Soft Green & Pattern Floor Primary Bathroom",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Take a look at how Bulldog Remodel Group turned this primary bathroom into a classic, comfortable retreat. A soft green double vanity with brass hardware includes a center makeup station beneath a tall window. Arched wood-framed mirrors sit between brass sconces with white shades, and a checkered marble floor adds pattern underfoot.",
    "photos": [
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-00.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 1"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-01.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 2"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-02.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 3"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-03.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 4"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-04.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 5"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-05.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 6"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-06.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 7"
      },
      {
        "src": "/assets/projects/soft-green-and-pattern-floor-primary-bathroom/img-07.webp",
        "alt": "Soft Green & Pattern Floor Primary Bathroom, photo 8"
      }
    ]
  },
  {
    "slug": "casual-comfort-primary-and-guest-bathrooms",
    "title": "Casual Comfort Primary and Guest Bathrooms",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Our team updated both the primary and guest bathrooms, including an arched white marble shower with a frameless glass door, brass hardware and a built-in bench.",
    "photos": [
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-00.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 1"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-01.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 2"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-02.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 3"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-03.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 4"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-04.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 5"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-05.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 6"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-06.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 7"
      },
      {
        "src": "/assets/projects/casual-comfort-primary-and-guest-bathrooms/img-07.webp",
        "alt": "Casual Comfort Primary and Guest Bathrooms, photo 8"
      }
    ]
  },
  {
    "slug": "modern-vintage-blend-whole-house-remodel",
    "title": "Modern Vintage Blend Whole House Remodel",
    "loc": "",
    "type": "Whole-Home Remodel",
    "description": "This whole-house remodel blends modern lines with vintage character. A brick archway frames a waterfall island with a light wood base and tall black cabinets in the kitchen design, while the bath pairs marble-look tile with bronze shower fixtures.",
    "photos": [
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-00.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-01.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-02.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-03.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-04.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-05.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-06.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-vintage-blend-whole-house-remodel/img-07.webp",
        "alt": "Modern Vintage Blend Whole House Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "polished-beauty-hall-bath-remodel",
    "title": "Polished Beauty Hall Bath Remodel",
    "loc": "",
    "type": "Guest Bath Remodel",
    "description": "Bulldog Remodel Group's Polished Beauty Hall Bath Remodel shows the move from dated to delightful. White cabinetry and a built-in makeup desk sit under gray countertops, while a charcoal accent wall frames a large mirror with polished chrome sconces.",
    "photos": [
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-00.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-01.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-02.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-03.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-04.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-05.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-06.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/polished-beauty-hall-bath-remodel/img-07.webp",
        "alt": "Polished Beauty Hall Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "a-luxurious-retreat-whole-home-remodel",
    "title": "A Luxurious Retreat Whole Home Remodel",
    "loc": "",
    "type": "Whole-Home Remodel",
    "description": "At Bulldog Remodel Group, we created a retreat where modern luxury and comfort come together, shown here in the Luxurious Retreat master bath. Glossy handmade-look tile wraps a frameless glass shower with a built-in niche and brass hardware, and a freestanding tub sits beneath a frosted window.",
    "photos": [
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-00.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 1"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-01.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 2"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-02.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 3"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-03.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 4"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-04.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 5"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-05.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 6"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-06.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 7"
      },
      {
        "src": "/assets/projects/a-luxurious-retreat-whole-home-remodel/img-07.webp",
        "alt": "A Luxurious Retreat Whole Home Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "contemporary-chic-master-bath-remodel",
    "title": "Contemporary Chic Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group presents a contemporary master bath that turns a conventional space into an elegant retreat. A large glass shower with a frosted band faces a freestanding oval tub and floor-mounted chrome filler, joined by a marble-wrapped floating vanity and a round modern chandelier.",
    "photos": [
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-00.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-01.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-02.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-03.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-04.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-05.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-06.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/contemporary-chic-master-bath-remodel/img-07.webp",
        "alt": "Contemporary Chic Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "sleek-tranquility-kitchen-and-bathroom-remodel",
    "title": "Sleek Tranquility Kitchen and Bathroom Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "This kitchen and bath remodel brings function and style together in a calm, clean palette. White shaker cabinets with dark pulls line the kitchen, and a large island seats four under black dome pendants. A built-in buffet with glass-front cabinets and open shelving adds display space over warm hardwood floors.",
    "photos": [
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-00.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 1"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-01.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 2"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-02.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 3"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-03.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 4"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-04.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 5"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-05.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 6"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-06.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 7"
      },
      {
        "src": "/assets/projects/sleek-tranquility-kitchen-and-bathroom-remodel/img-07.webp",
        "alt": "Sleek Tranquility Kitchen and Bathroom Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "open-concept-living-master-bath-remodel",
    "title": "Open Concept Living Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group reworked this cramped, dated master bath into a spacious, modern layout. The old corner jetted tub and framed shower gave way to a curbless walk-in shower with a single glass panel and linear drain, gray stone-look tile and a freestanding tub beneath the windows.",
    "photos": [
      {
        "src": "/assets/projects/open-concept-living-master-bath-remodel/img-00.webp",
        "alt": "Open Concept Living Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/open-concept-living-master-bath-remodel/img-01.webp",
        "alt": "Open Concept Living Master Bath Remodel, photo 2"
      }
    ]
  },
  {
    "slug": "elegant-with-a-twist-master-bath-remodel",
    "title": "Elegant with a Twist Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Elegant with a Twist Master Bath Remodel turns a traditional space into a modern sanctuary. A wood double vanity with white stone counters sits beneath brass mirrors and sconces, set against soft blue patterned wallpaper.",
    "photos": [
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-00.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-01.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-02.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-03.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-04.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-05.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-06.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/elegant-with-a-twist-master-bath-remodel/img-07.webp",
        "alt": "Elegant with a Twist Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "the-gift-of-a-wood-accent-master-bath-remodel",
    "title": "The Gift of a Wood Accent Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group brings warmth to this modern master bath with wood accents. In the walk-in shower, a fluted wood-look tile column frames a matte black rain head and handheld sprayer, set against light wood-grain wall tile and dark hexagon floors.",
    "photos": [
      {
        "src": "/assets/projects/the-gift-of-a-wood-accent-master-bath-remodel/img-00.webp",
        "alt": "The Gift of a Wood Accent Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/the-gift-of-a-wood-accent-master-bath-remodel/img-01.webp",
        "alt": "The Gift of a Wood Accent Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/the-gift-of-a-wood-accent-master-bath-remodel/img-02.webp",
        "alt": "The Gift of a Wood Accent Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/the-gift-of-a-wood-accent-master-bath-remodel/img-03.webp",
        "alt": "The Gift of a Wood Accent Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/the-gift-of-a-wood-accent-master-bath-remodel/img-04.webp",
        "alt": "The Gift of a Wood Accent Master Bath Remodel, photo 5"
      }
    ]
  },
  {
    "slug": "traditionally-clean-powder-and-master-bath-remodel",
    "title": "Traditionally Clean Powder and Master Bath Remodel",
    "loc": "",
    "type": "Powder Room Remodel",
    "description": "Bulldog Remodel Group's Traditionally Clean Powder and Master Bath Remodel combines classic style with modern function. The master bath pairs a dark wood vanity with a glass shower and brass fixtures, while the powder room adds botanical wallpaper.",
    "photos": [
      {
        "src": "/assets/projects/traditionally-clean-powder-and-master-bath-remodel/img-00.webp",
        "alt": "Traditionally Clean Powder and Master Bath Remodel, photo 1"
      }
    ]
  },
  {
    "slug": "simply-clean-master-and-hall-bath-remodel",
    "title": "Simply Clean Master and Hall Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Simply Clean Master and Hall Bath Remodel focuses on everyday practicality. A white shaker vanity, round black-framed mirror and matte black fixtures pair with a subway tile glass shower.",
    "photos": [
      {
        "src": "/assets/projects/simply-clean-master-and-hall-bath-remodel/img-00.webp",
        "alt": "Simply Clean Master and Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/simply-clean-master-and-hall-bath-remodel/img-01.webp",
        "alt": "Simply Clean Master and Hall Bath Remodel, photo 2"
      }
    ]
  },
  {
    "slug": "creatively-charming-hall-and-powder-bath-remodel",
    "title": "Creatively Charming Hall and Powder Bath Remodel",
    "loc": "",
    "type": "Powder Room Remodel",
    "description": "Bulldog Remodel Group's Creatively Charming Hall and Powder Bath Remodel shows how thoughtful updates modernize a home. A skylight brightens a marble-look glass shower with stacked niches, and a warm wood double vanity sits beneath black and brass sconces.",
    "photos": [
      {
        "src": "/assets/projects/creatively-charming-hall-and-powder-bath-remodel/img-00.webp",
        "alt": "Creatively Charming Hall and Powder Bath Remodel, photo 1"
      }
    ]
  },
  {
    "slug": "the-love-of-brass-hall-bath-remodel",
    "title": "The Love of Brass Hall Bath Remodel",
    "loc": "",
    "type": "Guest Bath Remodel",
    "description": "This fun black, white and gold bath pairs gold herringbone wallpaper with white wainscoting, a white stone console sink on a brass frame and a black-framed hexagon mirror.",
    "photos": [
      {
        "src": "/assets/projects/the-love-of-brass-hall-bath-remodel/img-00.webp",
        "alt": "The Love of Brass Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/the-love-of-brass-hall-bath-remodel/img-01.webp",
        "alt": "The Love of Brass Hall Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/the-love-of-brass-hall-bath-remodel/img-02.webp",
        "alt": "The Love of Brass Hall Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/the-love-of-brass-hall-bath-remodel/img-03.webp",
        "alt": "The Love of Brass Hall Bath Remodel, photo 4"
      }
    ]
  },
  {
    "slug": "classic-beauty-master-bath-remodel",
    "title": "Classic Beauty Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Classic Beauty Master Bath Remodel shows a striking move from dated to polished. A gray double vanity with a makeup station faces a tall glass-front linen cabinet and window seat.",
    "photos": [
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-00.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-01.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-02.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-03.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-04.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-05.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-06.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/classic-beauty-master-bath-remodel/img-07.webp",
        "alt": "Classic Beauty Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "rustic-with-a-touch-of-glam-master-and-hall-bath-remodel",
    "title": "Rustic with a Touch of Glam Master and Hall Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group blends rustic warmth with understated glamour in these bath remodels. Gray wood-look tile wraps a paneled tub and a glass shower, accented by matte black fixtures and a crystal chandelier.",
    "photos": [
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-00.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-01.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-02.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-03.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-04.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-05.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-06.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/rustic-with-a-touch-of-glam-master-and-hall-bath-remodel/img-07.webp",
        "alt": "Rustic with a Touch of Glam Master and Hall Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "retro-glam-hall-bath-remodel",
    "title": "Retro Glam Hall Bath Remodel",
    "loc": "",
    "type": "Guest Bath Remodel",
    "description": "Bulldog Remodel Group's Retro Glam Hall Bath Remodel mixes classic style with glamorous accents to turn a basic bathroom into a statement space. Deep navy walls set off a gold framed mirror, brass sconces and a brass faucet, while white wainscoting, a white vanity and a marble-look glass shower keep it bright.",
    "photos": [
      {
        "src": "/assets/projects/retro-glam-hall-bath-remodel/img-00.webp",
        "alt": "Retro Glam Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/retro-glam-hall-bath-remodel/img-01.webp",
        "alt": "Retro Glam Hall Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/retro-glam-hall-bath-remodel/img-02.webp",
        "alt": "Retro Glam Hall Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/retro-glam-hall-bath-remodel/img-03.webp",
        "alt": "Retro Glam Hall Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/retro-glam-hall-bath-remodel/img-04.webp",
        "alt": "Retro Glam Hall Bath Remodel, photo 5"
      }
    ]
  },
  {
    "slug": "marble-and-movement-master-and-powder-bath-remodel",
    "title": "Marble and Movement Master and Powder Bath Remodel",
    "loc": "",
    "type": "Powder Room Remodel",
    "description": "Bulldog Remodel Group brings a luxurious feel to this Marble and Movement master and powder bath remodel. Boldly veined marble-look tile wraps a glass shower with two niches beside a white double vanity.",
    "photos": [
      {
        "src": "/assets/projects/marble-and-movement-master-and-powder-bath-remodel/img-00.webp",
        "alt": "Marble and Movement Master and Powder Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/marble-and-movement-master-and-powder-bath-remodel/img-01.webp",
        "alt": "Marble and Movement Master and Powder Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/marble-and-movement-master-and-powder-bath-remodel/img-02.webp",
        "alt": "Marble and Movement Master and Powder Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/marble-and-movement-master-and-powder-bath-remodel/img-03.webp",
        "alt": "Marble and Movement Master and Powder Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/marble-and-movement-master-and-powder-bath-remodel/img-04.webp",
        "alt": "Marble and Movement Master and Powder Bath Remodel, photo 5"
      }
    ]
  },
  {
    "slug": "rustic-chic-master-bath-remodel",
    "title": "Rustic Chic Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Rustic Chic Master Bath Remodel brings natural warmth to a contemporary layout. A wood double vanity with brass pulls sits beneath black sconces, beside built-in open shelving, a wood-paneled tub surround and white herringbone floors.",
    "photos": [
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-00.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-01.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-02.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-03.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-04.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-05.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-06.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/rustic-chic-master-bath-remodel/img-07.webp",
        "alt": "Rustic Chic Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "luxury-cabin-master-bath-remodel",
    "title": "Luxury Cabin Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Our latest project turns a classic cabin bathroom into a retreat where rustic meets luxury. Walnut cabinetry with two vessel sinks, lighted mirrors and a makeup desk pairs with gray stone counters and a freestanding tub beside an arched window.",
    "photos": [
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-00.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-01.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-02.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-03.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-04.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-05.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-06.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/luxury-cabin-master-bath-remodel/img-07.webp",
        "alt": "Luxury Cabin Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "love-through-detail-master-bath-remodel",
    "title": "Love through Detail Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Love through Detail Master Bath Remodel reflects attention to design. A wood plank ceiling and antler chandelier bring cabin warmth, while a wood double vanity, brass mirrors and a freestanding tub sit on a star-patterned tile floor.",
    "photos": [
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-00.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-01.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-02.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-03.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-04.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-05.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-06.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/love-through-detail-master-bath-remodel/img-07.webp",
        "alt": "Love through Detail Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "dreamy-details-master-bath-remodel",
    "title": "Dreamy Details Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group's Dreamy Details Master Bath Remodel shows how much small choices matter. A wide glass shower with white subway tile and a long patterned niche pairs with matte black fixtures, a white double vanity and charcoal herringbone floor tile.",
    "photos": [
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-00.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-01.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-02.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-03.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-04.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/dreamy-details-master-bath-remodel/img-05.webp",
        "alt": "Dreamy Details Master Bath Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "calming-tones-master-bath-remodel",
    "title": "Calming Tones Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group transformed an outdated bathroom into a restful space with the Calming Tones Master Bath Remodel. Soft greige walls and a dark shaker double vanity set a quiet tone beside a subway tile shower with a river stone floor.",
    "photos": [
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-00.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-01.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-02.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-03.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-04.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/calming-tones-master-bath-remodel/img-05.webp",
        "alt": "Calming Tones Master Bath Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "naturally-inviting-master-bath-remodel",
    "title": "Naturally Inviting Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Function and elegance come together in this master bath remodel, where a skylight brightens a freestanding tub, a glass shower and a double vanity.",
    "photos": [
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-00.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-01.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-02.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-03.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-04.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-05.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-06.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/naturally-inviting-master-bath-remodel/img-07.webp",
        "alt": "Naturally Inviting Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "tranquilly-open-master-bath-remodel",
    "title": "Tranquilly Open Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "This Tranquilly Open Master Bath Remodel brings spacious elegance, with a curbless shower and two black rain heads sharing a wet room with a soaking tub.",
    "photos": [
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-00.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-01.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-02.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-03.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-04.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-05.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-06.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/tranquilly-open-master-bath-remodel/img-07.webp",
        "alt": "Tranquilly Open Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "warm-inviting-hall-bath-remodel",
    "title": "Warm Inviting Hall Bath Remodel",
    "loc": "",
    "type": "Guest Bath Remodel",
    "description": "Bulldog Remodel Group takes this hall bathroom from ordinary to inviting. A dark wood double vanity sits under a carved frame mirror, beside a marble-look glass shower and warm wood-look floors.",
    "photos": [
      {
        "src": "/assets/projects/warm-inviting-hall-bath-remodel/img-00.webp",
        "alt": "Warm Inviting Hall Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/warm-inviting-hall-bath-remodel/img-01.webp",
        "alt": "Warm Inviting Hall Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/warm-inviting-hall-bath-remodel/img-02.webp",
        "alt": "Warm Inviting Hall Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/warm-inviting-hall-bath-remodel/img-03.webp",
        "alt": "Warm Inviting Hall Bath Remodel, photo 4"
      }
    ]
  },
  {
    "slug": "masculine-sleek-master-bath-remodel",
    "title": "Masculine Sleek Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "This Bulldog Remodel Group master bath has a sleek, masculine look. A navy shaker vanity with chrome pulls anchors one wall, while a corner glass shower pairs white subway tile with a glass mosaic stripe.",
    "photos": [
      {
        "src": "/assets/projects/masculine-sleek-master-bath-remodel/img-00.webp",
        "alt": "Masculine Sleek Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/masculine-sleek-master-bath-remodel/img-01.webp",
        "alt": "Masculine Sleek Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/masculine-sleek-master-bath-remodel/img-02.webp",
        "alt": "Masculine Sleek Master Bath Remodel, photo 3"
      }
    ]
  },
  {
    "slug": "stunningly-spa-master-bath-remodel",
    "title": "Stunningly Spa Master Bath Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "Bulldog Remodel Group turned a plain bathroom into a calm, spa-like retreat, with a skylit walk-in shower in gray textured tile, built-in wood shelves and a teak bench.",
    "photos": [
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-00.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-01.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-02.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-03.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-04.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-05.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/stunningly-spa-master-bath-remodel/img-06.webp",
        "alt": "Stunningly Spa Master Bath Remodel, photo 7"
      }
    ]
  },
  {
    "slug": "rustic-living-master-bath-remodel",
    "title": "Rustic Living Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group brings rustic warmth to an outdated master bath. Under a skylight, a freestanding soaking tub rests against a dark plank tile half wall, backed by a walk-in shower with stacked niches and a white quartz double vanity.",
    "photos": [
      {
        "src": "/assets/projects/rustic-living-master-bath-remodel/img-00.webp",
        "alt": "Rustic Living Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/rustic-living-master-bath-remodel/img-01.webp",
        "alt": "Rustic Living Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/rustic-living-master-bath-remodel/img-02.webp",
        "alt": "Rustic Living Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/rustic-living-master-bath-remodel/img-03.webp",
        "alt": "Rustic Living Master Bath Remodel, photo 4"
      }
    ]
  },
  {
    "slug": "classically-charming-master-bath-remodel",
    "title": "Classically Charming Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group turns an outdated space into a classically charming master bath where timeless style meets modern function. A long white double vanity with shaded sconces faces a two-person arabesque tile shower and a freestanding tub over marble herringbone floors.",
    "photos": [
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-00.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-01.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-02.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-03.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-04.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/classically-charming-master-bath-remodel/img-05.webp",
        "alt": "Classically Charming Master Bath Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "seamlessly-sharp-master-bath-remodel",
    "title": "Seamlessly Sharp Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "This Bulldog Remodel Group master bath was rebuilt around sharp, minimalist design. White marble-look slabs line the wall behind a floating dark wood vanity, while charcoal tile frames a deep soaking tub and a glass corner shower beneath a skylight.",
    "photos": [
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-00.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-01.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-02.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-03.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-04.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/seamlessly-sharp-master-bath-remodel/img-05.webp",
        "alt": "Seamlessly Sharp Master Bath Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "warm-welcoming-master-bath-remodel",
    "title": "Warm Welcoming Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "This master bath from Bulldog Remodel Group blends warmth and welcome in one calm space. A freestanding soaking tub sits beneath a wall of soft stone-look tile, with two recessed niches lined in taupe mosaic.",
    "photos": [
      {
        "src": "/assets/projects/warm-welcoming-master-bath-remodel/img-00.webp",
        "alt": "Warm Welcoming Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/warm-welcoming-master-bath-remodel/img-01.webp",
        "alt": "Warm Welcoming Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/warm-welcoming-master-bath-remodel/img-02.webp",
        "alt": "Warm Welcoming Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/warm-welcoming-master-bath-remodel/img-03.webp",
        "alt": "Warm Welcoming Master Bath Remodel, photo 4"
      }
    ]
  },
  {
    "slug": "elegant-touches-master-bath-remodel",
    "title": "Elegant Touches Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group reimagines relaxation in this master bath, where a skylight brightens gray subway tile, a freestanding tub and a gray double vanity.",
    "photos": [
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-00.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-01.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-02.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-03.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-04.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-05.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-06.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/elegant-touches-master-bath-remodel/img-07.webp",
        "alt": "Elegant Touches Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "lovingly-warm-master-bath-remodel",
    "title": "Lovingly Warm Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group gives this master bath a lovingly warm feel. Rich brown cabinetry with a tall linen tower lines a long white-topped vanity, joined by a frameless glass shower and wood-look tile.",
    "photos": [
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-00.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-01.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-02.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-03.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-04.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-05.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-06.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/lovingly-warm-master-bath-remodel/img-07.webp",
        "alt": "Lovingly Warm Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "strikingly-tasteful-master-bath-remodel",
    "title": "Strikingly Tasteful Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "In this master bath, Bulldog Remodel Group pairs striking finishes with tasteful restraint. Skylights brighten a gray shaker double vanity with white counters and black pulls, a glass shower wrapped in white marble-look tile, a freestanding tub and wood-look plank floors.",
    "photos": [
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-00.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-01.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-02.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-03.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-04.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-05.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-06.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/strikingly-tasteful-master-bath-remodel/img-07.webp",
        "alt": "Strikingly Tasteful Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "warm-welcomings-basement-bath-remodel",
    "title": "Warm Welcomings Basement Bath Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "Bulldog Remodel Group's Warm Welcomings basement bath turns a simple necessity into a cozy corner of the home. Cocoa walls surround a dark wood vanity with a cream sink top and chrome faucet, finished by a beaded silver-framed mirror and light tile floors.",
    "photos": [
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-00.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-01.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-02.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-03.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-04.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/warm-welcomings-basement-bath-remodel/img-05.webp",
        "alt": "Warm Welcomings Basement Bath Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "glam-elegance-master-bath-remodel",
    "title": "Glam + Elegance Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "Bulldog Remodel Group turned a standard bath into a blend of glamour and elegance. A frameless glass shower in gray marble tile offers a rain head, body sprays and a linear drain. Nearby, a white furniture-style vanity with diamond-detailed doors sits beneath a bright skylight and an oval leaded glass window.",
    "photos": [
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-00.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-01.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-02.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-03.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-04.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-05.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-06.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/glam-elegance-master-bath-remodel/img-07.webp",
        "alt": "Glam + Elegance Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "a-spa-oasis-master-bath-remodel",
    "title": "A Spa Oasis Master Bath Remodel",
    "loc": "",
    "type": "Master Bathroom Remodel",
    "description": "At Bulldog Remodel Group, we believe your bathroom should be a calm sanctuary. This bright master bath has a skylight, a white double vanity and a glass shower lined in white subway tile with a built-in niche.",
    "photos": [
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-00.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-01.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-02.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-03.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-04.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-05.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-06.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/a-spa-oasis-master-bath-remodel/img-07.webp",
        "alt": "A Spa Oasis Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "beautifully-sunkissed-master-bath-remodel",
    "title": "Beautifully Sunkissed Master Bath Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "Bulldog Remodel Group reinvents the master bath with a remodel that soaks up natural light. A wide frameless glass shower in soft gray linear tile features a high transom window, a full-length bench, a rain head and a handheld wand.",
    "photos": [
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-00.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 1"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-01.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 2"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-02.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 3"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-03.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 4"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-04.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 5"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-05.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 6"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-06.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 7"
      },
      {
        "src": "/assets/projects/beautifully-sunkissed-master-bath-remodel/img-07.webp",
        "alt": "Beautifully Sunkissed Master Bath Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "simplistic-beauty-basement-remodel",
    "title": "Simplistic Beauty Basement Remodel",
    "loc": "",
    "type": "Bathroom Remodel",
    "description": "Built on minimalist design and functional elegance, Bulldog Remodel Group's Simplistic Beauty basement bath proves that less can be more. A bronze-framed glass shower shows off white subway tile with contrasting grout. A white pedestal sink with a bronze faucet sits under a reclaimed wood mirror with iron corner brackets.",
    "photos": [
      {
        "src": "/assets/projects/simplistic-beauty-basement-remodel/img-00.webp",
        "alt": "Simplistic Beauty Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/simplistic-beauty-basement-remodel/img-01.webp",
        "alt": "Simplistic Beauty Basement Remodel, photo 2"
      },
      {
        "src": "/assets/projects/simplistic-beauty-basement-remodel/img-02.webp",
        "alt": "Simplistic Beauty Basement Remodel, photo 3"
      }
    ]
  },
  {
    "slug": "powdered-blue-laundry-room-remodel",
    "title": "Powdered Blue Laundry Room Remodel",
    "loc": "",
    "type": "Laundry Room Remodel",
    "description": "Bulldog Remodel Group's Powdered Blue laundry room makes a hard-working space feel polished. Soft blue shaker cabinets with brass pulls frame a stacked washer and dryer, beside a white quartz counter, stainless sink and white picket tile.",
    "photos": [
      {
        "src": "/assets/projects/powdered-blue-laundry-room-remodel/img-00.webp",
        "alt": "Powdered Blue Laundry Room Remodel, photo 1"
      }
    ]
  },
  {
    "slug": "traditionally-colored-laundry-and-mudroom-remodel",
    "title": "Traditionally Colored Laundry and Mudroom Remodel",
    "loc": "",
    "type": "Laundry & Mudroom Remodel",
    "description": "Bulldog Remodel Group delivers again with this laundry and mudroom. Classic white shaker cabinets with long brass pulls wrap a front-load washer and dryer, beside a warm wood-tone folding counter.",
    "photos": [
      {
        "src": "/assets/projects/traditionally-colored-laundry-and-mudroom-remodel/img-00.webp",
        "alt": "Traditionally Colored Laundry and Mudroom Remodel, photo 1"
      }
    ]
  },
  {
    "slug": "beauty-in-the-detail-mudroom-and-laundry-room-remodel",
    "title": "Beauty in the Detail Mudroom and Laundry Room Remodel",
    "loc": "",
    "type": "Laundry & Mudroom Remodel",
    "description": "Function and fine craftsmanship meet in Bulldog Remodel Group's Beauty in the Detail mudroom and laundry room. A white built-in locker wall offers hooks, a bench and basket cubbies, while white cabinets rise over the washer and dryer and black and white patterned tile covers the floor.",
    "photos": [
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-00.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 1"
      },
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-01.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 2"
      },
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-02.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 3"
      },
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-03.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 4"
      },
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-04.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 5"
      },
      {
        "src": "/assets/projects/beauty-in-the-detail-mudroom-and-laundry-room-remodel/img-05.webp",
        "alt": "Beauty in the Detail Mudroom and Laundry Room Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "sleek-and-clean-mudroom-and-laundry-room-remodel",
    "title": "Sleek and Clean Mudroom and Laundry Room Remodel",
    "loc": "",
    "type": "Laundry & Mudroom Remodel",
    "description": "Turning a mudroom and laundry space into something modern takes careful design, and Bulldog Remodel Group struck a fine balance of function and finish here. A long run of white lockers with hooks, a quartz bench and deep drawers lines one wall. Tall pantry cabinets lead to the washer and dryer and a sink counter over gray tile floors.",
    "photos": [
      {
        "src": "/assets/projects/sleek-and-clean-mudroom-and-laundry-room-remodel/img-00.webp",
        "alt": "Sleek and Clean Mudroom and Laundry Room Remodel, photo 1"
      }
    ]
  },
  {
    "slug": "two-toned-touches-laundry-room-remodel",
    "title": "Two Toned Touches Laundry Room Remodel",
    "loc": "",
    "type": "Laundry Room Remodel",
    "description": "Functional design gets an elegant twist in Bulldog Remodel Group's Two-Toned Touches laundry room. White upper cabinets sit above deep charcoal base cabinets, a white quartz counter and an undermount sink with a matte black faucet.",
    "photos": [
      {
        "src": "/assets/projects/two-toned-touches-laundry-room-remodel/img-00.webp",
        "alt": "Two Toned Touches Laundry Room Remodel, photo 1"
      },
      {
        "src": "/assets/projects/two-toned-touches-laundry-room-remodel/img-01.webp",
        "alt": "Two Toned Touches Laundry Room Remodel, photo 2"
      },
      {
        "src": "/assets/projects/two-toned-touches-laundry-room-remodel/img-02.webp",
        "alt": "Two Toned Touches Laundry Room Remodel, photo 3"
      }
    ]
  },
  {
    "slug": "clean-country-laundry-and-mudroom-remodel",
    "title": "Clean Country Laundry and Mudroom Remodel",
    "loc": "",
    "type": "Laundry & Mudroom Remodel",
    "description": "Bulldog Remodel Group's Clean Country laundry and mudroom shows the beauty and simplicity of modern design. White shaker cabinets with dark pulls frame a small sink station and a tall pantry cabinet. Across the room, a built-in locker wall with iron hooks, a warm wood bench and open shoe cubbies keeps the entry organized above large stone-look tile.",
    "photos": [
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-00.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 1"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-01.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 2"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-02.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 3"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-03.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 4"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-04.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 5"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-05.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 6"
      },
      {
        "src": "/assets/projects/clean-country-laundry-and-mudroom-remodel/img-06.webp",
        "alt": "Clean Country Laundry and Mudroom Remodel, photo 7"
      }
    ]
  },
  {
    "slug": "crisp-and-clean-laundry-and-mudroom-remodel",
    "title": "Crisp and Clean Laundry and Mudroom Remodel",
    "loc": "",
    "type": "Laundry & Mudroom Remodel",
    "description": "At Bulldog Remodel Group, we believe the most hard-working rooms in a home deserve as much design attention as the rest of it, and the Crisp and Clean laundry and mudroom puts that belief into practice. A white locker nook with hooks, storage bins and a marble-look bench greets the family at the door. White shaker cabinets rise above a front-load washer and dryer topped with a matching counter, with a hanging rod nearby and warm hardwood floors underfoot.",
    "photos": [
      {
        "src": "/assets/projects/crisp-and-clean-laundry-and-mudroom-remodel/img-00.webp",
        "alt": "Crisp and Clean Laundry and Mudroom Remodel, photo 1"
      },
      {
        "src": "/assets/projects/crisp-and-clean-laundry-and-mudroom-remodel/img-01.webp",
        "alt": "Crisp and Clean Laundry and Mudroom Remodel, photo 2"
      },
      {
        "src": "/assets/projects/crisp-and-clean-laundry-and-mudroom-remodel/img-02.webp",
        "alt": "Crisp and Clean Laundry and Mudroom Remodel, photo 3"
      }
    ]
  },
  {
    "slug": "elevated-living-basement-remodel",
    "title": "Elevated Living Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "This finished basement centers on a custom media wall with green shaker built-ins, a dark fluted stone TV surround and arched shelving lit by brass sconces.",
    "photos": [
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-00.webp",
        "alt": "Elevated Living Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-02.webp",
        "alt": "Elevated Living Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-03.webp",
        "alt": "Elevated Living Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-04.webp",
        "alt": "Elevated Living Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-05.webp",
        "alt": "Elevated Living Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-06.webp",
        "alt": "Elevated Living Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/elevated-living-basement-remodel/img-07.webp",
        "alt": "Elevated Living Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "refined-classic-basement-remodel",
    "title": "Refined Classic Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group reimagined an underused basement as a model of classic refinement. Soft gray walls and light wood-look floors connect a lounge, a dining area and a wet bar with black cabinets, floating shelves, a tile backsplash and counter seating.",
    "photos": [
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-00.webp",
        "alt": "Refined Classic Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-02.webp",
        "alt": "Refined Classic Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-03.webp",
        "alt": "Refined Classic Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-04.webp",
        "alt": "Refined Classic Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-05.webp",
        "alt": "Refined Classic Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-06.webp",
        "alt": "Refined Classic Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/refined-classic-basement-remodel/img-07.webp",
        "alt": "Refined Classic Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "play-with-color-basement-remodel",
    "title": "Play with Color Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "With this basement remodel, Bulldog Remodel Group shows how color and light can change a space. A stacked stone fireplace with a wood mantel sits between white built-in shelves, while a wall of large windows pours in daylight.",
    "photos": [
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-00.webp",
        "alt": "Play with Color Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-02.webp",
        "alt": "Play with Color Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-03.webp",
        "alt": "Play with Color Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-04.webp",
        "alt": "Play with Color Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-05.webp",
        "alt": "Play with Color Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-06.webp",
        "alt": "Play with Color Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/play-with-color-basement-remodel/img-07.webp",
        "alt": "Play with Color Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "sleek-amenities-basement-remodel",
    "title": "Sleek Amenities Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Sleek Amenities remodel turns an ordinary basement into the center of home entertainment. A wet bar with light gray shaker cabinets, a navy subway tile backsplash and a beverage cooler sits beside a billiards area and a TV lounge.",
    "photos": [
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-00.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-02.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-03.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-04.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-05.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-06.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/sleek-amenities-basement-remodel/img-07.webp",
        "alt": "Sleek Amenities Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "cozy-comfort-basement-remodel",
    "title": "Cozy Comfort Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group redefines comfort with this basement remodel. Plush gray carpet fills an open lounge with a wall-mounted TV, and dark sliding barn doors open to a home gym.",
    "photos": [
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-00.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-02.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-03.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-04.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-05.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-06.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/cozy-comfort-basement-remodel/img-07.webp",
        "alt": "Cozy Comfort Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "luxury-garage-remodel",
    "title": "Luxury Garage Remodel Pictures",
    "loc": "",
    "type": "Garage Remodel",
    "description": "This luxury garage from Bulldog Remodel Group gives every vehicle a proper home. Three bays sit beneath board-and-batten dormers, and inside, blue car lifts double the parking beside gray wall cabinets.",
    "photos": [
      {
        "src": "/assets/projects/luxury-garage-remodel/img-00.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 1"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-02.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 3"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-03.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 4"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-04.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 5"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-05.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 6"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-06.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 7"
      },
      {
        "src": "/assets/projects/luxury-garage-remodel/img-07.webp",
        "alt": "Luxury Garage Remodel Pictures, photo 8"
      }
    ]
  },
  {
    "slug": "creatively-crafted-basement-remodel",
    "title": "Creatively Crafted Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "In this basement by Bulldog Remodel Group, rustic charm meets modern function. Dark stained barn doors slide open to reveal a bar nook with white shaker cabinets, a beverage fridge and gray subway tile.",
    "photos": [
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-00.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-02.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-03.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-04.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-05.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-06.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/creatively-crafted-basement-remodel/img-07.webp",
        "alt": "Creatively Crafted Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "exquisitely-unique-basement-remodel",
    "title": "Exquisitely Unique Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Exquisitely Unique remodel gives this lower level a fresh identity. Glass doors open to a deep teal wine wall with X-shaped bottle bins, flanked by wood-grain cabinets and charcoal tile.",
    "photos": [
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-00.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-02.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-03.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-04.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-05.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-06.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/exquisitely-unique-basement-remodel/img-07.webp",
        "alt": "Exquisitely Unique Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "basement-turned-brilliant-basement-remodel",
    "title": "Basement turned Brilliant Basement Remodel Pictures",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group transformed a neglected basement into a sleek kitchen. Dark shaker cabinets frame a white arabesque tile backsplash and stainless appliances, and a long quartz-topped peninsula seats four on gray upholstered stools.",
    "photos": [
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-00.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 1"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-02.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 2"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-03.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 3"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-04.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 4"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-05.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 5"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-06.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 6"
      },
      {
        "src": "/assets/projects/basement-turned-brilliant-basement-remodel/img-07.webp",
        "alt": "Basement turned Brilliant Basement Remodel Pictures, photo 7"
      }
    ]
  },
  {
    "slug": "refined-beauty-basement-remodel",
    "title": "Refined Beauty Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Introducing the Refined Beauty basement remodel by Bulldog Remodel Group, a clear example of intentional design. A gray island with a white marble-look top sits beneath three globe pendants and a tray ceiling, beside white glass-front cabinets and dark wood-look floors.",
    "photos": [
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-00.webp",
        "alt": "Refined Beauty Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-02.webp",
        "alt": "Refined Beauty Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-03.webp",
        "alt": "Refined Beauty Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-04.webp",
        "alt": "Refined Beauty Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-05.webp",
        "alt": "Refined Beauty Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-06.webp",
        "alt": "Refined Beauty Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/refined-beauty-basement-remodel/img-07.webp",
        "alt": "Refined Beauty Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "textured-accented-basement-remodel",
    "title": "Textured Accented Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Textured Accented basement remodel shows how much texture can change a space. A stone fireplace wall with a white mantel and a built-in log nook takes center stage, set off by plush gray carpet and a tray ceiling.",
    "photos": [
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-00.webp",
        "alt": "Textured Accented Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-02.webp",
        "alt": "Textured Accented Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-03.webp",
        "alt": "Textured Accented Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-04.webp",
        "alt": "Textured Accented Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-05.webp",
        "alt": "Textured Accented Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-06.webp",
        "alt": "Textured Accented Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/textured-accented-basement-remodel/img-07.webp",
        "alt": "Textured Accented Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "large-scaled-basement-remodel",
    "title": "Large Scaled Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Large Scaled basement remodel reshapes what basement living can be. An open plan holds a full kitchen with warm wood cabinets, a granite peninsula with seating and glass pendants, with wood-look floors flowing to a dining area.",
    "photos": [
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-00.webp",
        "alt": "Large Scaled Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-02.webp",
        "alt": "Large Scaled Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-03.webp",
        "alt": "Large Scaled Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-04.webp",
        "alt": "Large Scaled Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-05.webp",
        "alt": "Large Scaled Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-06.webp",
        "alt": "Large Scaled Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/large-scaled-basement-remodel/img-07.webp",
        "alt": "Large Scaled Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "clean-lined-basement-remodel",
    "title": "Clean Lined Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "A basement remodel can turn an underused area into a space that is both useful and inviting. Here, soft gray carpet and a charcoal accent wall frame the media area, while a white column opens to a bar nook with white shaker cabinets.",
    "photos": [
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-00.webp",
        "alt": "Clean Lined Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-02.webp",
        "alt": "Clean Lined Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-03.webp",
        "alt": "Clean Lined Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-04.webp",
        "alt": "Clean Lined Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-05.webp",
        "alt": "Clean Lined Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-06.webp",
        "alt": "Clean Lined Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/clean-lined-basement-remodel/img-07.webp",
        "alt": "Clean Lined Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "elevated-basement-bonus-rooms",
    "title": "Elevated Basement Bonus Rooms",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Elevated Basement Bonus Rooms project shows what custom craftsmanship can do for a plain lower level, turning it into a polished home gym for someone who loves fitness and the finer things in life. A full wall of mirrors makes the room feel larger, while light wood-look flooring and recessed lights keep it bright. Cardio machines and a weight rack fill the space, and a wall of frameless glass doors opens to a carpeted lounge beyond.",
    "photos": [
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-00.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 1"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-02.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 3"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-03.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 4"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-04.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 5"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-05.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 6"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-06.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 7"
      },
      {
        "src": "/assets/projects/elevated-basement-bonus-rooms/img-07.webp",
        "alt": "Elevated Basement Bonus Rooms, photo 8"
      }
    ]
  },
  {
    "slug": "masculine-masterpiece-basement-remodel",
    "title": "Masculine Masterpiece Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "This basement remodel by Bulldog Remodel Group pairs refined taste with practical function. A white kitchen with orb chandeliers and a gray subway tile backsplash serves a long counter with bar stools, while hardwood floors lead to a billiards area and a carpeted family lounge.",
    "photos": [
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-00.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-02.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-03.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-04.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-05.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-06.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/masculine-masterpiece-basement-remodel/img-07.webp",
        "alt": "Masculine Masterpiece Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "specialty-sauna-basement-remodel",
    "title": "Specialty Sauna Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group brings true home relaxation to this basement. A glass-paneled wood door opens to a cedar-lined sauna with slatted loungers, next to a frameless glass shower with a tiled bench.",
    "photos": [
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-00.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-02.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 2"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-03.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-04.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-05.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-06.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/specialty-sauna-basement-remodel/img-07.webp",
        "alt": "Specialty Sauna Basement Remodel, photo 7"
      }
    ]
  },
  {
    "slug": "rustic-sleek-basement-remodel",
    "title": "Rustic Sleek Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Rustic Sleek basement remodel blends rustic warmth with contemporary style. Stacked stone walls and a linear fireplace pair with rich wood columns and a long bar lined with high-back stools under pendant lights. Warm hardwood floors lead to a billiards table set beneath a classic hanging fixture.",
    "photos": [
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-00.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-02.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-03.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-04.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-05.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-06.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/rustic-sleek-basement-remodel/img-07.webp",
        "alt": "Rustic Sleek Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "luxury-game-point-basement-remodel",
    "title": "Luxury Game Point Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Welcome to the Luxury Game Point basement remodel, where Bulldog Remodel Group built a space that is as functional as it is fun. Warm beige walls and soft carpet hold a billiards table, a wall-mounted cue rack, ping pong and foosball, all framed by recessed lights and white wainscoting.",
    "photos": [
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-00.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-02.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-03.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-04.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-05.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-06.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/luxury-game-point-basement-remodel/img-07.webp",
        "alt": "Luxury Game Point Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "industrial-basement-remodel",
    "title": "Industrial Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Industrial basement remodel blends raw industrial character with contemporary comfort. A wet bar with cherry glass-front cabinets, a stone backsplash and lit open shelving overlooks a lounge with a leather sectional and a wall-mounted TV.",
    "photos": [
      {
        "src": "/assets/projects/industrial-basement-remodel/img-00.webp",
        "alt": "Industrial Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-02.webp",
        "alt": "Industrial Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-03.webp",
        "alt": "Industrial Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-04.webp",
        "alt": "Industrial Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-05.webp",
        "alt": "Industrial Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-06.webp",
        "alt": "Industrial Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/industrial-basement-remodel/img-07.webp",
        "alt": "Industrial Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "detailed-beauty-basement-remodel",
    "title": "Detailed Beauty Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "The Detailed Beauty basement remodel showcases Bulldog Remodel Group's skill at crafting refined living spaces from the ground up. A carved wood coffered ceiling rises over a dark wood media wall with arched shelving and rope columns. Matching built-in bookcases flank a cream stone fireplace, with paneled wainscoting adding classic detail.",
    "photos": [
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-00.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-02.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-03.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-04.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-05.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-06.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/detailed-beauty-basement-remodel/img-07.webp",
        "alt": "Detailed Beauty Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "modern-luxury-basement-remodel",
    "title": "Modern Luxury Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group's Modern Luxury remodel turns an unfinished basement into a comfortable, stylish retreat. Dark hardwood floors run through a wide open plan with white columns and recessed lights. A sleek bar with wood-grain flat-panel cabinets, lit floating shelves and a gray tile backsplash sits beneath high windows, ready for entertaining.",
    "photos": [
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-00.webp",
        "alt": "Modern Luxury Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-02.webp",
        "alt": "Modern Luxury Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-03.webp",
        "alt": "Modern Luxury Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-04.webp",
        "alt": "Modern Luxury Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-05.webp",
        "alt": "Modern Luxury Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-06.webp",
        "alt": "Modern Luxury Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-luxury-basement-remodel/img-07.webp",
        "alt": "Modern Luxury Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "treasured-theater-basement-remodel",
    "title": "Treasured Theater Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "This basement theater is built for movie night. Tiered leather recliners face a projection screen, while paneled walls, candle-style sconces, a lighted tray ceiling and patterned carpet create a classic cinema feel.",
    "photos": [
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-00.webp",
        "alt": "Treasured Theater Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-02.webp",
        "alt": "Treasured Theater Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-03.webp",
        "alt": "Treasured Theater Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-04.webp",
        "alt": "Treasured Theater Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-05.webp",
        "alt": "Treasured Theater Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-06.webp",
        "alt": "Treasured Theater Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/treasured-theater-basement-remodel/img-07.webp",
        "alt": "Treasured Theater Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "transport-through-time-basement-remodel",
    "title": "Transport Through Time Basement Remodel",
    "loc": "",
    "type": "Basement Remodel",
    "description": "Bulldog Remodel Group took this basement back in time with an Old World design. Stone archways, a domed ceiling with a wrought iron chandelier and terra cotta style tile set the tone, while a media room pairs a stone fireplace with dark built-in cabinetry.",
    "photos": [
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-00.webp",
        "alt": "Transport Through Time Basement Remodel, photo 1"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-02.webp",
        "alt": "Transport Through Time Basement Remodel, photo 3"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-03.webp",
        "alt": "Transport Through Time Basement Remodel, photo 4"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-04.webp",
        "alt": "Transport Through Time Basement Remodel, photo 5"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-05.webp",
        "alt": "Transport Through Time Basement Remodel, photo 6"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-06.webp",
        "alt": "Transport Through Time Basement Remodel, photo 7"
      },
      {
        "src": "/assets/projects/transport-through-time-basement-remodel/img-07.webp",
        "alt": "Transport Through Time Basement Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "refined-contrast-kitchen-remodel",
    "title": "Refined Contrast Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Open, warm and highly functional, this kitchen fits its homeowners' lifestyle. Dark stained cabinetry and a tiered marble-look island with seating for five contrast with white perimeter cabinets and glass lantern pendants.",
    "photos": [
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-00.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-01.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-02.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-03.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-04.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-05.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-06.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/refined-contrast-kitchen-remodel/img-07.webp",
        "alt": "Refined Contrast Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "warm-heritage-kitchen-remodel",
    "title": "Warm Heritage Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This kitchen feels open, warm and highly functional, tailored to the homeowners' lifestyle. Oak cabinetry with brass hardware frames the wall ovens, and the white island ends in a rounded dining table.",
    "photos": [
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-00.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-01.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-02.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-03.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-04.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-05.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-06.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/warm-heritage-kitchen-remodel/img-07.webp",
        "alt": "Warm Heritage Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "golden-elegance-kitchen-remodel",
    "title": "Golden Elegance Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Brighter and more functional, this kitchen reflects the client's style and eases everyday use. A brass hood and white cabinetry surround a veined stone waterfall island with light oak paneling.",
    "photos": [
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-00.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-01.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-02.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-03.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-04.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-05.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-06.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/golden-elegance-kitchen-remodel/img-07.webp",
        "alt": "Golden Elegance Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "refined-warmth-kitchen-remodel",
    "title": "Refined Warmth Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group transformed this once-outdated kitchen into a sophisticated, timeless space that blends luxury and warmth with modern function. Soft white cabinetry surrounds a walnut island with wine storage, while brass lantern pendants, a pot filler and a coffered ceiling add classic detail.",
    "photos": [
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-00.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-01.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-02.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-03.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-04.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-05.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-06.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/refined-warmth-kitchen-remodel/img-07.webp",
        "alt": "Refined Warmth Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "casual-comfort-kitchen-remodel",
    "title": "Casual Comfort Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Our team turned a dull kitchen into a sophisticated, elegant space that still feels relaxed. White shaker cabinetry mixes with light oak accents and a wood hood, and a large island with woven counter stools sits beneath iron lantern pendants.",
    "photos": [
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-00.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-01.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-02.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-03.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-04.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-05.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-06.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/casual-comfort-kitchen-remodel/img-07.webp",
        "alt": "Casual Comfort Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "opulent-elegance-kitchen-remodel",
    "title": "Opulent Elegance Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This kitchen remodel reflects collaboration, creativity and expertise. A dark stained island with a white stone top sits beneath glass and brass pendants, framed by white cabinetry and a diamond tile backsplash.",
    "photos": [
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-00.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-01.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-02.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-03.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-04.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-05.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-06.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/opulent-elegance-kitchen-remodel/img-07.webp",
        "alt": "Opulent Elegance Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "coastal-calm-kitchen-remodel",
    "title": "Coastal Calm Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "From outdated to outstanding, this aging kitchen was rejuvenated with a focus on elegance and function. Navy lower cabinets and a navy island contrast with white uppers and quartz counters, while a herringbone backsplash rises behind a professional-style range. A glass globe pendant and warm hardwood floors keep it calm.",
    "photos": [
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-00.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-01.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-02.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-03.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-04.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-05.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-06.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/coastal-calm-kitchen-remodel/img-07.webp",
        "alt": "Coastal Calm Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "noir-gold-kitchen-remodel",
    "title": "Noir Gold Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This noir gold kitchen shows what a remodel should be, a balanced blend of form and function. A black range hood trimmed in gold bands sits above a cooktop with brass knobs, flanked by white shaker cabinets with gold pulls. A long island topped in boldly veined quartz runs beneath gold geometric lanterns.",
    "photos": [
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-00.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-01.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-02.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-03.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-04.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-05.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-06.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/noir-gold-kitchen-remodel/img-07.webp",
        "alt": "Noir Gold Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "modern-farmhouse-charm-kitchen-remodel",
    "title": "Modern Farmhouse Charm Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This bright, neutral kitchen pairs white inset cabinetry with a white oak island, floating shelves and ceiling beams. Brass hardware and brass-trimmed pendants carry the warm accents, while glass doors flanking the range bring in daylight.",
    "photos": [
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-00.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-01.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-02.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-03.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-04.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-05.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-06.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-farmhouse-charm-kitchen-remodel/img-07.webp",
        "alt": "Modern Farmhouse Charm Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "blue-serenity-kitchen-remodel",
    "title": "Blue Serenity Kitchen Remodel Photos",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This kitchen pairs soft blue lower cabinets and a paneled blue island with crisp white uppers. Gold accents shine in the dome pendants, globe sconces and pulls, set against a white hexagon tile backsplash.",
    "photos": [
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-00.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 1"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-01.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 2"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-02.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 3"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-03.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 4"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-04.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 5"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-05.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 6"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-06.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 7"
      },
      {
        "src": "/assets/projects/blue-serenity-kitchen-remodel/img-07.webp",
        "alt": "Blue Serenity Kitchen Remodel Photos, photo 8"
      }
    ]
  },
  {
    "slug": "tasteful-earthiness-kitchen-remodel",
    "title": "Tasteful Earthiness Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This earthy toned kitchen remodel features a zellige clay backsplash, soft white cabinetry and touches of walnut cabinetry throughout. A metal range hood and glass pendants complete the kitchen, and rich hardwood floors lead to sliding patio doors.",
    "photos": [
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-00.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-01.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-02.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-03.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-04.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-05.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-06.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/tasteful-earthiness-kitchen-remodel/img-07.webp",
        "alt": "Tasteful Earthiness Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "luxe-sophistication-kitchen-remodel",
    "title": "Luxe Sophistication Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This elegant kitchen remodel centers on a large island with a thick marble-look top, surrounded by floor-to-ceiling gray cabinetry with brass hardware, a tapered hood and walnut floating shelves.",
    "photos": [
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-00.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-01.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-02.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-03.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-04.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-05.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-06.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/luxe-sophistication-kitchen-remodel/img-07.webp",
        "alt": "Luxe Sophistication Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "balanced-neutrals-kitchen-remodel",
    "title": "Balanced Neutrals Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Neutral tones with a touch of blue give this kitchen a calm look and plenty of space for cooking and entertaining. A blue-gray peninsula with gold pulls and veined quartz offers seating beneath black dome pendants.",
    "photos": [
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-00.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-01.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-02.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-03.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-04.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-05.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-06.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/balanced-neutrals-kitchen-remodel/img-07.webp",
        "alt": "Balanced Neutrals Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "modern-rustic-homestead-kitchen-remodel",
    "title": "Modern Rustic Homestead Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This modern rustic homestead kitchen features an open layout, sleek appliances and modern lighting. A black island faces warm wood cabinetry and a riveted black hood, with exposed beams and glass pendants overhead.",
    "photos": [
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-00.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-01.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-02.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-03.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-04.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-05.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-06.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-rustic-homestead-kitchen-remodel/img-07.webp",
        "alt": "Modern Rustic Homestead Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "cool-contrast-kitchen-remodel",
    "title": "Cool Contrast Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "A traditional kitchen became a modern study in contrasting tones and textures. Crisp white shaker cabinets and glossy subway tile line the perimeter, while charcoal cabinetry wraps the wall ovens and island, finished with matte black hardware.",
    "photos": [
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-00.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-01.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-02.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-03.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-04.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-05.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-06.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/cool-contrast-kitchen-remodel/img-07.webp",
        "alt": "Cool Contrast Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "sapphire-elegance-kitchen-remodel",
    "title": "Sapphire Elegance Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Sapphire blue tones bring serene, contemporary elegance to this Bulldog Remodel Group kitchen. Deep blue cabinetry frames the refrigerator and wraps the island, balanced by white shaker uppers, quartz counters and a subway tile backsplash with a blue accent.",
    "photos": [
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-00.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-01.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-02.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-03.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-04.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-05.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-06.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/sapphire-elegance-kitchen-remodel/img-07.webp",
        "alt": "Sapphire Elegance Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "forest-retreat-galley-kitchen-remodel",
    "title": "Forest Retreat Galley Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group turned a dated galley kitchen into a forest-inspired retreat. Deep green shaker cabinetry holds a built-in microwave and wall oven, while white leaf-pattern tile and wood floating shelves keep the space light.",
    "photos": [
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-00.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-01.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-02.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-03.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-04.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-05.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-06.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/forest-retreat-galley-kitchen-remodel/img-07.webp",
        "alt": "Forest Retreat Galley Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "farmhouse-haven-kitchen-remodel",
    "title": "Farmhouse Haven Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Starting from an empty frame, Bulldog Remodel Group built this farmhouse haven. A shiplap hood with a warm wood band rises above white shaker cabinetry, and a dark island with veined quartz sits under orb chandeliers.",
    "photos": [
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-00.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-01.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-02.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-03.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-04.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-05.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-06.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/farmhouse-haven-kitchen-remodel/img-07.webp",
        "alt": "Farmhouse Haven Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "clean-and-transitional-kitchen-remodel",
    "title": "Clean & Transitional Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group took this kitchen from outdated to outstanding with a clean, transitional design. White shaker cabinetry with matte black pulls surrounds a herringbone tile backsplash and professional range, while a soft blue island with a diamond panel detail sits beneath seeded glass pendants.",
    "photos": [
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-00.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-01.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-02.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-03.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-04.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-05.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-06.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/clean-and-transitional-kitchen-remodel/img-07.webp",
        "alt": "Clean &amp; Transitional Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "traditional-radiance-kitchen-remodel",
    "title": "Traditional Radiance Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group gave this classic kitchen a warm, traditional glow. White cabinetry with lighted glass-front uppers pairs with a charcoal pantry wall and dark island, while a gold lantern chandelier hangs over the dining table.",
    "photos": [
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-00.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-01.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-02.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-03.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-04.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-05.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-06.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/traditional-radiance-kitchen-remodel/img-07.webp",
        "alt": "Traditional Radiance Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "metropolitan-vibes-kitchen-remodel",
    "title": "Metropolitan Vibes Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group turned a classic kitchen into a sleek, metropolitan hub of style and substance. Gray shaker cabinetry and subway tile pair with a curved wood hood, while a cobalt blue island sits beneath brass globe pendants.",
    "photos": [
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-00.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-01.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-02.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-03.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-04.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-05.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-06.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/metropolitan-vibes-kitchen-remodel/img-07.webp",
        "alt": "Metropolitan Vibes Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "tranquil-traditional-kitchen-remodel",
    "title": "Tranquil Traditional Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Craftsmanship from Bulldog Remodel Group turned this classic kitchen into a tranquil, traditional space. Slate blue lower cabinets and a shiplap-paneled island contrast with white uppers, glass-front display cabinets and a patterned tile backsplash, finished with matte black hardware and dark hardwood floors.",
    "photos": [
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-00.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-01.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-02.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-03.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-04.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-05.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-06.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/tranquil-traditional-kitchen-remodel/img-07.webp",
        "alt": "Tranquil Traditional Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "warm-welcome-kitchen-remodel",
    "title": "Warm Welcome Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Comfort meets contemporary design in this Warm Welcome Kitchen Remodel by Bulldog Remodel Group. Sage green uppers sit above warm wood lower cabinets, a tall wood cabinet wall houses the refrigerator and ovens, and a white waterfall island anchors the room.",
    "photos": [
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-00.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-01.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-02.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-03.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-04.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-05.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-06.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/warm-welcome-kitchen-remodel/img-07.webp",
        "alt": "Warm Welcome Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "touches-of-calm-kitchen-remodel",
    "title": "Touches of Calm Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Once cramped, this kitchen is now a tranquil space thanks to Bulldog Remodel Group. White shaker cabinetry with brass pulls wraps a U-shaped layout, with soft blue subway tile, quartz counters and warm hardwood floors.",
    "photos": [
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-00.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-01.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-02.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-03.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-04.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-05.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-06.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/touches-of-calm-kitchen-remodel/img-07.webp",
        "alt": "Touches of Calm Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "blue-fashioned-kitchen-remodel",
    "title": "Blue Fashioned Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Touches of blue give this kitchen a mix of classic charm and contemporary flair. A long navy island with a white quartz top and seating for four sits beneath three navy dome pendants with brass caps. White shaker cabinetry, a stainless hood and a textured tile backsplash line the back wall.",
    "photos": [
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-00.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-01.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-02.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-03.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-04.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-05.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-06.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/blue-fashioned-kitchen-remodel/img-07.webp",
        "alt": "Blue Fashioned Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "elegantly-tasteful-kitchen-remodel",
    "title": "Elegantly Tasteful Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group transformed this dated kitchen into an elegant space. White and sage gray cabinetry frame a soft gray island, with a white arched hood, glass pendants and a drum chandelier over the table.",
    "photos": [
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-00.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-01.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-02.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-03.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-04.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-05.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-06.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/elegantly-tasteful-kitchen-remodel/img-07.webp",
        "alt": "Elegantly Tasteful Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "traditionally-fresh-kitchen-remodel",
    "title": "Traditionally Fresh Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group revived this classic kitchen with a fresh, modern take on tradition. A white apron front sink sits under a black-framed window, with white subway tile to the ceiling, shaker cabinets and dark quartz counters.",
    "photos": [
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-00.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-01.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-02.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-03.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-04.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/traditionally-fresh-kitchen-remodel/img-05.webp",
        "alt": "Traditionally Fresh Kitchen Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "refreshingly-white-kitchen-remodel",
    "title": "Refreshingly White Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group transformed an ordinary kitchen into a refreshing white sanctuary. White shaker cabinetry and a white hood frame an arabesque tile backsplash and professional range, while a curved island with veined quartz sits beneath iron lantern pendants.",
    "photos": [
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-00.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-01.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-02.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-03.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-04.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/refreshingly-white-kitchen-remodel/img-05.webp",
        "alt": "Refreshingly White Kitchen Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "sophisticated-elegance-kitchen-remodel",
    "title": "Sophisticated Elegance Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group turned a vibrant but outdated kitchen into a sleek, sophisticated space. White shaker cabinetry houses side-by-side wall ovens, and a large quartz island holds two cooktops beneath a flush ceiling hood.",
    "photos": [
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-00.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-01.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-02.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-03.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-04.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-05.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-06.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/sophisticated-elegance-kitchen-remodel/img-07.webp",
        "alt": "Sophisticated Elegance Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "cozy-cottage-kitchen-remodel",
    "title": "Cozy Cottage Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group turned a traditional kitchen into a cottage-inspired space full of warmth and modern function. White cabinetry, a light gray island, a farmhouse sink, an arabesque tile backsplash and drum shade pendants complete the look.",
    "photos": [
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-00.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-01.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-02.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-03.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-04.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-05.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-06.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/cozy-cottage-kitchen-remodel/img-07.webp",
        "alt": "Cozy Cottage Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "formal-classic-kitchen-remodel",
    "title": "Formal Classic Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group breathed new life into a dated space, turning a traditional dining area into a kitchen with formal, classic elegance. White shaker cabinetry houses stacked wall ovens, and a long veined quartz island with a smooth cooktop seats the whole family beneath glass pendants.",
    "photos": [
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-00.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-01.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-02.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-03.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-04.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-05.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-06.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/formal-classic-kitchen-remodel/img-07.webp",
        "alt": "Formal Classic Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "elegantly-espresso-kitchen-remodel",
    "title": "Elegantly Espresso Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group's Elegantly Espresso Kitchen Remodel exemplifies sophistication, pairing a dark espresso island with crisp white shaker cabinetry and quartz.",
    "photos": [
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-00.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-01.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-02.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-03.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-04.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-05.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-06.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/elegantly-espresso-kitchen-remodel/img-07.webp",
        "alt": "Elegantly Espresso Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "modern-gloss-kitchen-remodel",
    "title": "Modern Gloss Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group's Modern Gloss Kitchen Remodel pairs sleek style with everyday function. Glossy espresso wood-grain cabinetry with square pulls surrounds an island cooktop beneath a suspended stainless hood.",
    "photos": [
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-00.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-01.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-02.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-03.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-04.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-gloss-kitchen-remodel/img-05.webp",
        "alt": "Modern Gloss Kitchen Remodel, photo 6"
      }
    ]
  },
  {
    "slug": "modernly-white-kitchen-remodel",
    "title": "Modernly White Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "Bulldog Remodel Group's Modernly White Kitchen Remodel turns a conventional space into a minimalist dream. White shaker cabinetry with glass-front uppers pairs with speckled white granite, clear glass pendants and stainless appliances.",
    "photos": [
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-00.webp",
        "alt": "Modernly White Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-01.webp",
        "alt": "Modernly White Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-02.webp",
        "alt": "Modernly White Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-03.webp",
        "alt": "Modernly White Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-04.webp",
        "alt": "Modernly White Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-05.webp",
        "alt": "Modernly White Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-06.webp",
        "alt": "Modernly White Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modernly-white-kitchen-remodel/img-07.webp",
        "alt": "Modernly White Kitchen Remodel, photo 8"
      }
    ]
  },
  {
    "slug": "modern-movement-kitchen-remodel",
    "title": "Modern Movement Kitchen Remodel",
    "loc": "",
    "type": "Kitchen Remodel",
    "description": "This modern kitchen remodel blends warm wood tones with crisp finishes for an inviting, family-friendly space. White shaker cabinetry with display nooks surrounds a dark island topped in veined quartz, set on rich hardwood floors.",
    "photos": [
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-00.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 1"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-01.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 2"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-02.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 3"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-03.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 4"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-04.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 5"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-05.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 6"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-06.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 7"
      },
      {
        "src": "/assets/projects/modern-movement-kitchen-remodel/img-07.webp",
        "alt": "Modern Movement Kitchen Remodel, photo 8"
      }
    ]
  }
];

export const projectBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);

/** Mirrors the export's categoryOf(). */
export function categoryOf(type: string): 'kitchen' | 'bath' | 'basement' | 'laundry' | 'other' {
  const t = type.toLowerCase();
  if (t.includes('basement')) return 'basement';
  if (t.includes('laundry') || t.includes('mudroom')) return 'laundry';
  if (t.includes('bath') || t.includes('powder')) return 'bath';
  if (t.includes('kitchen')) return 'kitchen';
  return 'other';
}
