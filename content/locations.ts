// Service-area cities for programmatic location pages.
// Route: /kitchen-bath-remodeling/[slug]

export type Location = {
  slug: string;
  city: string; // e.g. "Hyde Park"
  state: 'OH' | 'KY';
  region: string;
  // A sentence of real local character used in the page intro.
  character: string;
  // Common home styles we remodel there.
  homeStyles: string;
};

export const locations: Location[] = [
  { slug: 'hyde-park', city: 'Hyde Park', state: 'OH', region: 'Cincinnati', character: 'Hyde Park’s tree-lined streets are full of classic center-hall colonials, Tudors, and stately foursquares around the Square and Ault Park.', homeStyles: 'historic colonials, Tudors, and foursquares' },
  { slug: 'oakley', city: 'Oakley', state: 'OH', region: 'Cincinnati', character: 'Oakley pairs walkable, updated bungalows near the Square with a wave of young families renovating older homes.', homeStyles: 'bungalows and updated pre-war homes' },
  { slug: 'mount-lookout', city: 'Mt. Lookout', state: 'OH', region: 'Cincinnati', character: 'Mt. Lookout’s hillside homes and Tudors near the Square reward thoughtful remodels that respect original character.', homeStyles: 'Tudors and hillside colonials' },
  { slug: 'mariemont', city: 'Mariemont', state: 'OH', region: 'Cincinnati', character: 'Mariemont’s planned English-village architecture means remodels here call for a careful, character-first hand.', homeStyles: 'English-village and Tudor Revival homes' },
  { slug: 'terrace-park', city: 'Terrace Park', state: 'OH', region: 'Cincinnati', character: 'Terrace Park’s established homes along the Little Miami blend historic charm with room to grow.', homeStyles: 'historic and mid-century homes' },
  { slug: 'madeira', city: 'Madeira', state: 'OH', region: 'Cincinnati', character: 'Madeira families are steadily updating ranches and colonials in one of the area’s most sought-after school districts.', homeStyles: 'ranches and traditional colonials' },
  { slug: 'indian-hill', city: 'Indian Hill', state: 'OH', region: 'Cincinnati', character: 'Indian Hill’s estate homes on wooded acreage call for high-end, fully custom kitchen and bath work.', homeStyles: 'estate and custom-built homes' },
  { slug: 'montgomery', city: 'Montgomery', state: 'OH', region: 'Cincinnati', character: 'Montgomery blends a historic downtown with newer executive homes, and both are prime for design-led remodels.', homeStyles: 'historic and executive homes' },
  { slug: 'blue-ash', city: 'Blue Ash', state: 'OH', region: 'Cincinnati', character: 'Blue Ash’s mid-century ranches and split-levels are ideal candidates for open-concept kitchen renovations.', homeStyles: 'mid-century ranches and split-levels' },
  { slug: 'sharonville', city: 'Sharonville', state: 'OH', region: 'Cincinnati', character: 'Sharonville’s established neighborhoods mix ranches and two-stories that are ready for updated kitchens and baths.', homeStyles: 'ranches and two-story homes' },
  { slug: 'wyoming', city: 'Wyoming', state: 'OH', region: 'Cincinnati', character: 'Wyoming’s grand Victorians and century homes are some of the most rewarding — and demanding — remodels in the area.', homeStyles: 'Victorians and century homes' },
  { slug: 'norwood', city: 'Norwood', state: 'OH', region: 'Cincinnati', character: 'Norwood’s dense streets of early-1900s homes are being renovated block by block by a new generation.', homeStyles: 'early-1900s homes and bungalows' },
  { slug: 'anderson-township', city: 'Anderson Township', state: 'OH', region: 'Cincinnati', character: 'Anderson Township’s spacious colonials and ranches give families room for open kitchens and spa baths.', homeStyles: 'colonials and ranches' },
  { slug: 'milford', city: 'Milford', state: 'OH', region: 'Clermont County', character: 'Milford blends a historic Main Street with newer subdivisions, both full of homes ready to modernize.', homeStyles: 'historic and newer suburban homes' },
  { slug: 'loveland', city: 'Loveland', state: 'OH', region: 'Warren County', character: 'Loveland’s mix of charming older homes and newer builds near the bike trail keeps our designers busy.', homeStyles: 'older cottages and newer builds' },
  { slug: 'mason', city: 'Mason', state: 'OH', region: 'Warren County', character: 'Mason’s newer executive homes and busy family households are perfect for functional, high-end kitchen remodels.', homeStyles: 'newer executive and family homes' },
  { slug: 'west-chester', city: 'West Chester', state: 'OH', region: 'Butler County', character: 'West Chester’s large suburban homes give families the space for open-concept kitchens and primary-suite baths.', homeStyles: 'suburban two-stories and ranches' },
  { slug: 'liberty-township', city: 'Liberty Township', state: 'OH', region: 'Butler County', character: 'Liberty Township’s newer neighborhoods are full of homes ready for personalized kitchen and bath upgrades.', homeStyles: 'newer suburban homes' },
  { slug: 'fairfield', city: 'Fairfield', state: 'OH', region: 'Butler County', character: 'Fairfield’s established ranches and two-stories are classic candidates for smart, budget-conscious remodels.', homeStyles: 'ranches and two-story homes' },
  { slug: 'hamilton', city: 'Hamilton', state: 'OH', region: 'Butler County', character: 'Hamilton’s historic districts and older housing stock are seeing a real remodeling renaissance.', homeStyles: 'historic and early-1900s homes' },
  { slug: 'lebanon', city: 'Lebanon', state: 'OH', region: 'Warren County', character: 'Lebanon’s historic homes and newer developments both benefit from design-led kitchen and bath work.', homeStyles: 'historic and newer homes' },
  { slug: 'springboro', city: 'Springboro', state: 'OH', region: 'Warren County', character: 'Springboro’s newer family homes are ideal for open kitchens, mudrooms, and spa-style bathrooms.', homeStyles: 'newer family homes' },
  { slug: 'crestview-hills', city: 'Crestview Hills', state: 'KY', region: 'Northern Kentucky', character: 'Crestview Hills’ established homes near the town center are steadily being modernized inside and out.', homeStyles: 'ranches and colonials' },
  { slug: 'fort-mitchell', city: 'Fort Mitchell', state: 'KY', region: 'Northern Kentucky', character: 'Fort Mitchell’s charming older homes and tree-lined streets reward remodels that honor their character.', homeStyles: 'Tudors and traditional homes' },
  { slug: 'edgewood', city: 'Edgewood', state: 'KY', region: 'Northern Kentucky', character: 'Edgewood’s well-kept family neighborhoods are full of homes primed for kitchen and bath updates.', homeStyles: 'ranches and two-story homes' },
  { slug: 'florence', city: 'Florence', state: 'KY', region: 'Northern Kentucky', character: 'Florence’s broad mix of suburban homes gives families lots of room for functional remodels.', homeStyles: 'suburban ranches and two-stories' },
  { slug: 'union', city: 'Union', state: 'KY', region: 'Northern Kentucky', character: 'Union’s fast-growing newer subdivisions are perfect for personalized, high-end kitchen and bath builds.', homeStyles: 'newer executive homes' },
  { slug: 'fort-thomas', city: 'Fort Thomas', state: 'KY', region: 'Northern Kentucky', character: 'Fort Thomas’ historic homes with river views are among Northern Kentucky’s most character-rich remodels.', homeStyles: 'historic and century homes' },
  { slug: 'erlanger', city: 'Erlanger', state: 'KY', region: 'Northern Kentucky', character: 'Erlanger’s established, family-friendly streets are full of homes ready for updated kitchens and baths.', homeStyles: 'ranches and cape cods' },
  { slug: 'villa-hills', city: 'Villa Hills', state: 'KY', region: 'Northern Kentucky', character: 'Villa Hills’ quiet, upscale neighborhoods call for polished, design-led kitchen and bath remodels.', homeStyles: 'colonials and executive homes' },
];

export const locationBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));
