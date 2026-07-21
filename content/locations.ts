// Location data for programmatic service × neighborhood pages.
//
// FACTS ONLY. Every field here is verifiable — ZIP, county, parent city,
// adjacency. Nothing in this file is marketing copy.
//
// The per-service narrative lives in content/location-copy/<service>.ts, one
// file per service, keyed by these slugs. A location page is only generated
// where that copy exists (see generateStaticParams in each [location] route),
// so adding a neighborhood here does NOT publish a thin page — it makes the
// neighborhood available to write for.
//
// 170 communities across the Greater Cincinnati service area
// (Hamilton, Clermont, Butler, Warren OH · Kenton, Campbell, Boone KY ·
// Dearborn IN). Facts sourced from the researched Cincinnati service-area
// dataset. Only add a neighborhood here if the ZIP and county are confirmed.

export type Adjacent = { name: string; slug: string };

export type Location = {
  slug: string;
  neighborhood: string;
  /** Parent city for a neighborhood (e.g. Hyde Park → Cincinnati). Omit for
   *  standalone municipalities so the H1 reads "Madeira, OH", not
   *  "Madeira, Madeira, OH". */
  city?: string;
  state: string;
  zip?: string;
  county: string;
  /** Explicit neighbours for the internal-link mesh. Where absent, getNearby
   *  falls back to same-county communities. */
  adjacent?: Adjacent[];
};

export const locations: Location[] = [
  {
    slug: 'sedamsville',
    neighborhood: 'Sedamsville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
      { name: 'Sayler Park', slug: 'sayler-park' },
    ],
  },
  {
    slug: 'sayler-park',
    neighborhood: 'Sayler Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45233',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'riverside',
    neighborhood: 'Riverside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Sedamsville', slug: 'sedamsville' },
      { name: 'Sayler Park', slug: 'sayler-park' },
    ],
  },
  {
    slug: 'east-price-hill',
    neighborhood: 'East Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45205',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'west-price-hill',
    neighborhood: 'West Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45238',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
    ],
  },
  {
    slug: 'lower-price-hill',
    neighborhood: 'Lower Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'over-the-rhine',
    neighborhood: 'Over-the-Rhine',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'West End', slug: 'west-end' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'downtown',
    neighborhood: 'Downtown',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'West End', slug: 'west-end' },
    ],
  },
  {
    slug: 'west-end',
    neighborhood: 'West End',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45203',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'mount-adams',
    neighborhood: 'Mount Adams',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'mount-auburn',
    neighborhood: 'Mount Auburn',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'clifton',
    neighborhood: 'Clifton',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45220',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Northside', slug: 'northside' },
      { name: 'College Hill', slug: 'college-hill' },
    ],
  },
  {
    slug: 'corryville',
    neighborhood: 'Corryville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'northside',
    neighborhood: 'Northside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45223',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'College Hill', slug: 'college-hill' },
    ],
  },
  {
    slug: 'college-hill',
    neighborhood: 'College Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45224',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Northside', slug: 'northside' },
      { name: 'Clifton', slug: 'clifton' },
    ],
  },
  {
    slug: 'walnut-hills',
    neighborhood: 'Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'east-walnut-hills',
    neighborhood: 'East Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Walnut Hills', slug: 'walnut-hills' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Mount Adams', slug: 'mount-adams' },
    ],
  },
  {
    slug: 'avondale',
    neighborhood: 'Avondale',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45229',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'hyde-park',
    neighborhood: 'Hyde Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45208',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
    ],
  },
  {
    slug: 'oakley',
    neighborhood: 'Oakley',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45209',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Norwood', slug: 'norwood' },
    ],
  },
  {
    slug: 'mount-lookout',
    neighborhood: 'Mount Lookout',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Columbia-Tusculum', slug: 'columbia-tusculum' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'columbia-tusculum',
    neighborhood: 'Columbia-Tusculum',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'mount-washington',
    neighborhood: 'Mount Washington',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45230',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Columbia-Tusculum', slug: 'columbia-tusculum' },
      { name: 'Mount Lookout', slug: 'mount-lookout' },
    ],
  },
  {
    slug: 'madisonville',
    neighborhood: 'Madisonville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45227',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
      { name: 'Mariemont', slug: 'mariemont' },
    ],
  },
  {
    slug: 'pleasant-ridge',
    neighborhood: 'Pleasant Ridge',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45213',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Norwood', slug: 'norwood' },
    ],
  },
  {
    slug: 'westwood',
    neighborhood: 'Westwood',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45211',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Cheviot', slug: 'cheviot' },
      { name: 'Covedale', slug: 'covedale' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
    ],
  },
  {
    slug: 'norwood',
    neighborhood: 'Norwood',
    state: 'OH',
    zip: '45212',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
    ],
  },
  {
    slug: 'blue-ash',
    neighborhood: 'Blue Ash',
    state: 'OH',
    zip: '45242',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Montgomery', slug: 'montgomery' },
      { name: 'Madeira', slug: 'madeira' },
    ],
  },
  {
    slug: 'montgomery',
    neighborhood: 'Montgomery',
    state: 'OH',
    zip: '45242',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Blue Ash', slug: 'blue-ash' },
      { name: 'Madeira', slug: 'madeira' },
    ],
  },
  {
    slug: 'madeira',
    neighborhood: 'Madeira',
    state: 'OH',
    zip: '45243',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Montgomery', slug: 'montgomery' },
      { name: 'Madisonville', slug: 'madisonville' },
    ],
  },
  {
    slug: 'wyoming',
    neighborhood: 'Wyoming',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'College Hill', slug: 'college-hill' },
      { name: 'Montgomery', slug: 'montgomery' },
    ],
  },
  {
    slug: 'mariemont',
    neighborhood: 'Mariemont',
    state: 'OH',
    zip: '45227',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'cheviot',
    neighborhood: 'Cheviot',
    state: 'OH',
    zip: '45211',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Covedale', slug: 'covedale' },
    ],
  },
  {
    slug: 'covedale',
    neighborhood: 'Covedale',
    state: 'OH',
    zip: '45238',
    county: 'Hamilton County, OH',
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'Cheviot', slug: 'cheviot' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
    ],
  },
  {
    slug: 'covington',
    neighborhood: 'Covington',
    state: 'KY',
    zip: '41011',
    county: 'Kenton County, KY',
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Bellevue', slug: 'bellevue' },
    ],
  },
  {
    slug: 'newport',
    neighborhood: 'Newport',
    state: 'KY',
    zip: '41071',
    county: 'Campbell County, KY',
    adjacent: [
      { name: 'Covington', slug: 'covington' },
      { name: 'Bellevue', slug: 'bellevue' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
    ],
  },
  {
    slug: 'bellevue',
    neighborhood: 'Bellevue',
    state: 'KY',
    zip: '41073',
    county: 'Campbell County, KY',
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
      { name: 'Covington', slug: 'covington' },
    ],
  },
  {
    slug: 'fort-thomas',
    neighborhood: 'Fort Thomas',
    state: 'KY',
    zip: '41075',
    county: 'Campbell County, KY',
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Bellevue', slug: 'bellevue' },
    ],
  },
  {
    slug: 'florence',
    neighborhood: 'Florence',
    state: 'KY',
    zip: '41042',
    county: 'Boone County, KY',
    adjacent: [
      { name: 'Erlanger', slug: 'erlanger' },
    ],
  },
  {
    slug: 'erlanger',
    neighborhood: 'Erlanger',
    state: 'KY',
    zip: '41018',
    county: 'Kenton County, KY',
    adjacent: [
      { name: 'Florence', slug: 'florence' },
    ],
  },
  {
    slug: 'mason',
    neighborhood: 'Mason',
    state: 'OH',
    zip: '45040',
    county: 'Warren County, OH',
    adjacent: [
      { name: 'West Chester', slug: 'west-chester' },
    ],
  },
  {
    slug: 'west-chester',
    neighborhood: 'West Chester',
    state: 'OH',
    zip: '45069',
    county: 'Butler County, OH',
    adjacent: [
      { name: 'Mason', slug: 'mason' },
    ],
  },
  {
    slug: 'pendleton',
    neighborhood: 'Pendleton',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'queensgate',
    neighborhood: 'Queensgate',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45203',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'cuf',
    neighborhood: 'CUF (Clifton Heights, University Heights & Fairview)',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'camp-washington',
    neighborhood: 'Camp Washington',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'south-fairmount',
    neighborhood: 'South Fairmount',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45205',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'east-end',
    neighborhood: 'East End',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'north-fairmount',
    neighborhood: 'North Fairmount',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'evanston',
    neighborhood: 'Evanston',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45207',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'south-cumminsville',
    neighborhood: 'South Cumminsville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'english-woods',
    neighborhood: 'English Woods',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'north-avondale',
    neighborhood: 'North Avondale',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45229',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'millvale',
    neighborhood: 'Millvale',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'paddock-hills',
    neighborhood: 'Paddock Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45229',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'spring-grove-village',
    neighborhood: 'Spring Grove Village',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45232',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'linwood',
    neighborhood: 'Linwood',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'bond-hill',
    neighborhood: 'Bond Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45237',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'villages-of-roll-hill',
    neighborhood: 'Villages of Roll Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45225',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'east-westwood',
    neighborhood: 'East Westwood',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45211',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'western-hills',
    neighborhood: 'Western Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45211',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'california',
    neighborhood: 'California',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45230',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'carthage',
    neighborhood: 'Carthage',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'winton-hills',
    neighborhood: 'Winton Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45232',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'roselawn',
    neighborhood: 'Roselawn',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45237',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'mount-airy',
    neighborhood: 'Mount Airy',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45239',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'hartwell',
    neighborhood: 'Hartwell',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'kennedy-heights',
    neighborhood: 'Kennedy Heights',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45213',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'st-bernard',
    neighborhood: 'St. Bernard',
    state: 'OH',
    zip: '45217',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'elmwood-place',
    neighborhood: 'Elmwood Place',
    state: 'OH',
    zip: '45216',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'delhi-hills',
    neighborhood: 'Delhi Hills',
    state: 'OH',
    zip: '45233',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'golf-manor',
    neighborhood: 'Golf Manor',
    state: 'OH',
    zip: '45237',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'fairfax',
    neighborhood: 'Fairfax',
    state: 'OH',
    zip: '45227',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'mack',
    neighborhood: 'Mack',
    state: 'OH',
    zip: '45248',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'monfort-heights',
    neighborhood: 'Monfort Heights',
    state: 'OH',
    zip: '45247',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'bridgetown',
    neighborhood: 'Bridgetown',
    state: 'OH',
    zip: '45248',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'finneytown',
    neighborhood: 'Finneytown',
    state: 'OH',
    zip: '45231',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'amberley',
    neighborhood: 'Amberley',
    state: 'OH',
    zip: '45237',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'arlington-heights',
    neighborhood: 'Arlington Heights',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'north-college-hill',
    neighborhood: 'North College Hill',
    state: 'OH',
    zip: '45239',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'newtown',
    neighborhood: 'Newtown',
    state: 'OH',
    zip: '45244',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'turpin-hills',
    neighborhood: 'Turpin Hills',
    state: 'OH',
    zip: '45244',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'silverton',
    neighborhood: 'Silverton',
    state: 'OH',
    zip: '45236',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'lockland',
    neighborhood: 'Lockland',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'groesbeck',
    neighborhood: 'Groesbeck',
    state: 'OH',
    zip: '45239',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'mount-healthy',
    neighborhood: 'Mount Healthy',
    state: 'OH',
    zip: '45231',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'reading',
    neighborhood: 'Reading',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'dent',
    neighborhood: 'Dent',
    state: 'OH',
    zip: '45247',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'deer-park',
    neighborhood: 'Deer Park',
    state: 'OH',
    zip: '45236',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'terrace-park',
    neighborhood: 'Terrace Park',
    state: 'OH',
    zip: '45174',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'dry-run',
    neighborhood: 'Dry Run',
    state: 'OH',
    zip: '45244',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'white-oak',
    neighborhood: 'White Oak',
    state: 'OH',
    zip: '45247',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'forestville',
    neighborhood: 'Forestville',
    state: 'OH',
    zip: '45230',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'cherry-grove',
    neighborhood: 'Cherry Grove',
    state: 'OH',
    zip: '45230',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'kenwood',
    neighborhood: 'Kenwood',
    state: 'OH',
    zip: '45236',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'lincoln-heights',
    neighborhood: 'Lincoln Heights',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'dillonvale',
    neighborhood: 'Dillonvale',
    state: 'OH',
    zip: '45236',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'woodlawn',
    neighborhood: 'Woodlawn',
    state: 'OH',
    zip: '45215',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'addyston',
    neighborhood: 'Addyston',
    state: 'OH',
    zip: '45001',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'greenhills',
    neighborhood: 'Greenhills',
    state: 'OH',
    zip: '45218',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'northbrook',
    neighborhood: 'Northbrook',
    state: 'OH',
    zip: '45251',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'indian-hill',
    neighborhood: 'Indian Hill',
    state: 'OH',
    zip: '45243',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'evendale',
    neighborhood: 'Evendale',
    state: 'OH',
    zip: '45241',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'glendale',
    neighborhood: 'Glendale',
    state: 'OH',
    zip: '45246',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'sharonville',
    neighborhood: 'Sharonville',
    state: 'OH',
    zip: '45241',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'northgate',
    neighborhood: 'Northgate',
    state: 'OH',
    zip: '45251',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'springdale',
    neighborhood: 'Springdale',
    state: 'OH',
    zip: '45246',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'miamitown',
    neighborhood: 'Miamitown',
    state: 'OH',
    zip: '45041',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'forest-park',
    neighborhood: 'Forest Park',
    state: 'OH',
    zip: '45240',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'pleasant-run',
    neighborhood: 'Pleasant Run',
    state: 'OH',
    zip: '45240',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'cleves',
    neighborhood: 'Cleves',
    state: 'OH',
    zip: '45002',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'north-bend',
    neighborhood: 'North Bend',
    state: 'OH',
    zip: '45052',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'loveland',
    neighborhood: 'Loveland',
    state: 'OH',
    zip: '45140',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'harrison',
    neighborhood: 'Harrison',
    state: 'OH',
    zip: '45030',
    county: 'Hamilton County, OH',
  },
  {
    slug: 'ludlow',
    neighborhood: 'Ludlow',
    state: 'KY',
    zip: '41016',
    county: 'Kenton County, KY',
  },
  {
    slug: 'park-hills',
    neighborhood: 'Park Hills',
    state: 'KY',
    zip: '41011',
    county: 'Kenton County, KY',
  },
  {
    slug: 'bromley',
    neighborhood: 'Bromley',
    state: 'KY',
    zip: '41016',
    county: 'Kenton County, KY',
  },
  {
    slug: 'fort-wright',
    neighborhood: 'Fort Wright',
    state: 'KY',
    zip: '41011',
    county: 'Kenton County, KY',
  },
  {
    slug: 'fort-mitchell',
    neighborhood: 'Fort Mitchell',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'villa-hills',
    neighborhood: 'Villa Hills',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'lakeside-park',
    neighborhood: 'Lakeside Park',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'crescent-springs',
    neighborhood: 'Crescent Springs',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'crestview-hills',
    neighborhood: 'Crestview Hills',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'edgewood',
    neighborhood: 'Edgewood',
    state: 'KY',
    zip: '41017',
    county: 'Kenton County, KY',
  },
  {
    slug: 'taylor-mill',
    neighborhood: 'Taylor Mill',
    state: 'KY',
    zip: '41015',
    county: 'Kenton County, KY',
  },
  {
    slug: 'elsmere',
    neighborhood: 'Elsmere',
    state: 'KY',
    zip: '41018',
    county: 'Kenton County, KY',
  },
  {
    slug: 'independence',
    neighborhood: 'Independence',
    state: 'KY',
    zip: '41051',
    county: 'Kenton County, KY',
  },
  {
    // Standalone city, not a neighborhood of anywhere — no `city`, or placeName
    // would render "Dayton, Dayton, KY".
    slug: 'dayton-ky',
    neighborhood: 'Dayton',
    state: 'KY',
    zip: '41074',
    county: 'Campbell County, KY',
  },
  {
    slug: 'southgate',
    neighborhood: 'Southgate',
    state: 'KY',
    zip: '41071',
    county: 'Campbell County, KY',
  },
  {
    slug: 'wilder',
    neighborhood: 'Wilder',
    state: 'KY',
    zip: '41076',
    county: 'Campbell County, KY',
  },
  {
    slug: 'highland-heights',
    neighborhood: 'Highland Heights',
    state: 'KY',
    zip: '41076',
    county: 'Campbell County, KY',
  },
  {
    slug: 'cold-spring',
    neighborhood: 'Cold Spring',
    state: 'KY',
    zip: '41076',
    county: 'Campbell County, KY',
  },
  {
    slug: 'alexandria',
    neighborhood: 'Alexandria',
    state: 'KY',
    zip: '41001',
    county: 'Campbell County, KY',
  },
  {
    slug: 'melbourne',
    neighborhood: 'Melbourne',
    state: 'KY',
    zip: '41059',
    county: 'Campbell County, KY',
  },
  {
    slug: 'hebron',
    neighborhood: 'Hebron',
    state: 'KY',
    zip: '41048',
    county: 'Boone County, KY',
  },
  {
    slug: 'burlington',
    neighborhood: 'Burlington',
    state: 'KY',
    zip: '41005',
    county: 'Boone County, KY',
  },
  {
    slug: 'union',
    neighborhood: 'Union',
    state: 'KY',
    zip: '41091',
    county: 'Boone County, KY',
  },
  {
    slug: 'walton',
    neighborhood: 'Walton',
    state: 'KY',
    zip: '41094',
    county: 'Boone County, KY',
  },
  {
    slug: 'mount-carmel',
    neighborhood: 'Mount Carmel',
    state: 'OH',
    zip: '45244',
    county: 'Clermont County, OH',
  },
  {
    slug: 'summerside',
    neighborhood: 'Summerside',
    state: 'OH',
    zip: '45245',
    county: 'Clermont County, OH',
  },
  {
    slug: 'withamsville',
    neighborhood: 'Withamsville',
    state: 'OH',
    zip: '45245',
    county: 'Clermont County, OH',
  },
  {
    slug: 'milford',
    neighborhood: 'Milford',
    state: 'OH',
    zip: '45150',
    county: 'Clermont County, OH',
  },
  {
    slug: 'mulberry',
    neighborhood: 'Mulberry',
    state: 'OH',
    zip: '45150',
    county: 'Clermont County, OH',
  },
  {
    slug: 'mount-repose',
    neighborhood: 'Mount Repose',
    state: 'OH',
    zip: '45150',
    county: 'Clermont County, OH',
  },
  {
    slug: 'day-heights',
    neighborhood: 'Day Heights',
    state: 'OH',
    zip: '45150',
    county: 'Clermont County, OH',
  },
  {
    slug: 'new-richmond',
    neighborhood: 'New Richmond',
    state: 'OH',
    zip: '45157',
    county: 'Clermont County, OH',
  },
  {
    slug: 'amelia',
    neighborhood: 'Amelia',
    state: 'OH',
    zip: '45102',
    county: 'Clermont County, OH',
  },
  {
    slug: 'batavia',
    neighborhood: 'Batavia',
    state: 'OH',
    zip: '45103',
    county: 'Clermont County, OH',
  },
  {
    slug: 'owensville',
    neighborhood: 'Owensville',
    state: 'OH',
    zip: '45160',
    county: 'Clermont County, OH',
  },
  {
    slug: 'goshen',
    neighborhood: 'Goshen',
    state: 'OH',
    zip: '45122',
    county: 'Clermont County, OH',
  },
  {
    slug: 'moscow',
    neighborhood: 'Moscow',
    state: 'OH',
    zip: '45153',
    county: 'Clermont County, OH',
  },
  {
    slug: 'newtonsville',
    neighborhood: 'Newtonsville',
    state: 'OH',
    zip: '45158',
    county: 'Clermont County, OH',
  },
  {
    slug: 'williamsburg',
    neighborhood: 'Williamsburg',
    state: 'OH',
    zip: '45176',
    county: 'Clermont County, OH',
  },
  {
    slug: 'bethel',
    neighborhood: 'Bethel',
    state: 'OH',
    zip: '45106',
    county: 'Clermont County, OH',
  },
  {
    slug: 'ross',
    neighborhood: 'Ross',
    state: 'OH',
    zip: '45061',
    county: 'Butler County, OH',
  },
  {
    slug: 'fairfield',
    neighborhood: 'Fairfield',
    state: 'OH',
    zip: '45014',
    county: 'Butler County, OH',
  },
  {
    slug: 'beckett-ridge',
    neighborhood: 'Beckett Ridge',
    state: 'OH',
    zip: '45069',
    county: 'Butler County, OH',
  },
  {
    slug: 'wetherington',
    neighborhood: 'Wetherington',
    state: 'OH',
    zip: '45069',
    county: 'Butler County, OH',
  },
  {
    slug: 'hamilton',
    neighborhood: 'Hamilton',
    state: 'OH',
    zip: '45011',
    county: 'Butler County, OH',
  },
  {
    slug: 'millville',
    neighborhood: 'Millville',
    state: 'OH',
    zip: '45013',
    county: 'Butler County, OH',
  },
  {
    slug: 'new-miami',
    neighborhood: 'New Miami',
    state: 'OH',
    zip: '45011',
    county: 'Butler County, OH',
  },
  {
    slug: 'monroe',
    neighborhood: 'Monroe',
    state: 'OH',
    zip: '45050',
    county: 'Butler County, OH',
  },
  {
    slug: 'landen',
    neighborhood: 'Landen',
    state: 'OH',
    zip: '45040',
    county: 'Warren County, OH',
  },
  {
    slug: 'loveland-park',
    neighborhood: 'Loveland Park',
    state: 'OH',
    zip: '45140',
    county: 'Warren County, OH',
  },
  {
    slug: 'maineville',
    neighborhood: 'Maineville',
    state: 'OH',
    zip: '45039',
    county: 'Warren County, OH',
  },
  {
    slug: 'pleasant-plain',
    neighborhood: 'Pleasant Plain',
    state: 'OH',
    zip: '45162',
    county: 'Warren County, OH',
  },
  {
    slug: 'south-lebanon',
    neighborhood: 'South Lebanon',
    state: 'OH',
    zip: '45065',
    county: 'Warren County, OH',
  },
  {
    slug: 'lawrenceburg',
    neighborhood: 'Lawrenceburg',
    state: 'IN',
    zip: '47025',
    county: 'Dearborn County, IN',
  },
  {
    slug: 'greendale',
    neighborhood: 'Greendale',
    state: 'IN',
    zip: '47025',
    county: 'Dearborn County, IN',
  },
  {
    slug: 'aurora',
    neighborhood: 'Aurora',
    state: 'IN',
    zip: '47001',
    county: 'Dearborn County, IN',
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/**
 * Neighbouring areas for the link mesh, filtered to those that actually have a
 * published page for this service. Falls back to same-county communities when
 * no explicit adjacency is set.
 */
export function getNearby(loc: Location, publishedSlugs: string[], max = 3): Adjacent[] {
  const published = new Set(publishedSlugs);
  const explicit = (loc.adjacent ?? []).filter((a) => published.has(a.slug));
  if (explicit.length >= max) return explicit.slice(0, max);

  const seen = new Set([loc.slug, ...explicit.map((a) => a.slug)]);
  const sameCounty = locations
    .filter((l) => !seen.has(l.slug) && l.county === loc.county && published.has(l.slug))
    .map((l) => ({ name: l.neighborhood, slug: l.slug }));

  return [...explicit, ...sameCounty].slice(0, max);
}

export type LocationGroup = { label: string; locations: Location[] };

/**
 * Display order for the grouped "areas we serve" list — city first, then
 * counties by how much of our work sits in each. Any group not named here falls
 * to the end in alphabetical order rather than being dropped.
 */
const groupOrder = [
  'Cincinnati Neighborhoods',
  'Hamilton County, OH',
  'Clermont County, OH',
  'Butler County, OH',
  'Warren County, OH',
  'Kenton County, KY',
  'Campbell County, KY',
  'Boone County, KY',
  'Dearborn County, IN',
];

/**
 * Groups locations for display: Cincinnati's own neighborhoods first, then
 * everything else by county.
 *
 * The split matters because it matches how people describe where they live —
 * someone in Hyde Park looks for "Cincinnati", not "Hamilton County", while
 * someone in Madeira or Milford looks for the county. Grouping by county alone
 * would bury 52 city neighborhoods in a 114-item Hamilton County list.
 */
export function groupLocations(locs: Location[]): LocationGroup[] {
  const map = new Map<string, Location[]>();
  for (const l of locs) {
    const label = l.city === 'Cincinnati' ? 'Cincinnati Neighborhoods' : l.county;
    const bucket = map.get(label);
    if (bucket) bucket.push(l);
    else map.set(label, [l]);
  }

  const rank = (label: string) => {
    const i = groupOrder.indexOf(label);
    return i === -1 ? groupOrder.length : i;
  };

  return [...map.entries()]
    .map(([label, locations]) => ({ label, locations }))
    .sort((a, b) => rank(a.label) - rank(b.label) || a.label.localeCompare(b.label));
}

/** "Hyde Park, Cincinnati, OH" or "Madeira, OH" */
export function placeName(loc: Location): string {
  return loc.city
    ? `${loc.neighborhood}, ${loc.city}, ${loc.state}`
    : `${loc.neighborhood}, ${loc.state}`;
}
