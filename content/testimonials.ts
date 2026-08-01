// Video testimonials shown on the homepage.
//
// ⚠️ REAL PEOPLE ONLY. Each entry is a claim that a named homeowner appeared on
// camera and endorsed the business. Do NOT invent names, faces (thumbnails),
// quotes or videos — fabricated testimonials are the same integrity line as
// fake reviews.
//
// All four entries below are real: real customers, real recordings, real quotes
// supplied by the owner. Names and quotes are verbatim from the customers;
// communities are drawn from the service-area list (content/locations.ts).
// A face with no `thumbnail` shows a person-icon frame; a testimonial with no
// `videoUrl` shows the video area as a placeholder.
//
// To go live, replace each placeholder with a real video testimonial:
//   - name:      first name + community, e.g. "Mike, Fort Thomas, KY"
//   - quote:     what they say, in short (the pull-text beside the video)
//   - thumbnail: a round face photo in /public/assets, e.g. "/assets/testimonials/mike.webp"
//   - videoUrl:  the video's embed URL (YouTube/Vimeo) or an .mp4 in /public
// Delete any placeholders you don't fill. Empty the array and the section
// removes itself.

export type Testimonial = {
  /** Reviewer's name (shown large, in crimson). Real customer only. */
  name?: string;
  /** Community, e.g. "Dearborn County, IN". Real customer only. */
  location?: string;
  /** The work done, e.g. "Bathroom Remodel". */
  project?: string;
  /** Their real star rating, 1–5. */
  rating?: number;
  /** Short testimonial pull-text shown beside the video. Their words only. */
  quote?: string;
  /** Round face photo in /public. Omit to show the person-icon frame. */
  thumbnail?: string;
  /** Embed URL (YouTube/Vimeo) or an .mp4 path. Omit to leave the video inert. */
  videoUrl?: string;
  /** Full-frame still shown in the video area before play. Falls back to thumbnail. */
  poster?: string;
  /** Accessible description of the face photo. */
  alt?: string;
};

export const testimonials: Testimonial[] = [
  // Real video testimonial. Video, poster and round face are frames/transcode
  // of the customer's own recording (video/b2 testimonial.mp4).
  {
    name: 'David Walker',
    location: 'Dearborn County, IN',
    project: 'Bathroom Remodel & Window Replacement',
    rating: 5,
    quote:
      'I just want to give a quick shout-out to the Bulldog team. They were an absolute lifesaver during our bathroom remodel. From the beginning, they were honest, transparent, and never surprised us with cost overruns or unnecessary upsells. They focused on getting the job done right instead of trying to sell us more. My wife felt completely comfortable having them in our home, which made the whole experience stress-free. They finished everything in just three days, paid close attention to every detail, and exceeded our expectations. We’ll definitely be hiring Bulldog again for our kitchen remodel, and I highly recommend them to anyone looking for a trustworthy contractor.',
    thumbnail: '/assets/testimonial-david-walker.webp',
    videoUrl: '/assets/testimonial-david-walker.mp4',
    poster: '/assets/testimonial-david-walker-poster.webp',
    alt: 'David Walker, Bulldog Remodel Group bathroom remodel customer in Dearborn County, Indiana',
  },
  // Videos/posters/thumbnails below are compressed/cropped from the client's own
  // recordings (video/remodel 1|2|4.mp4); remodel 4's face is a supplied still
  // (video/3.png). Names + quotes are the customers' own words.
  // Real video testimonial (video/remodel 2.mp4).
  {
    name: 'Scott Harrison',
    location: 'Montgomery, OH',
    project: 'Whole-Home Remodel',
    rating: 5,
    quote:
      'Our home had a vintage 1982 style with a very dated, non-modern look, so we wanted a complete transformation. We had been happy with Bulldog’s work on our previous home, so choosing them again was an easy decision. They were upfront about every cost, with no surprises, and their communication was outstanding. We probably asked more questions than most homeowners, but they were always available by phone or email and always had great ideas to help us make decisions. The design phase was exciting, and seeing the finished renovation was even better. Walking into our completed home for the first time left us stunned and overjoyed. My favorite space is definitely the bathroom — the beautiful bathtub and thoughtful design make it feel both elegant and comfortable for both of us. Bulldog truly delivered an incredible result. We’d happily hire them again and highly recommend them to anyone.',
    thumbnail: '/assets/testimonial-remodel-2.webp',
    videoUrl: '/assets/testimonial-remodel-2.mp4',
    poster: '/assets/testimonial-remodel-2-poster.webp',
    alt: 'Scott Harrison, Bulldog Remodel Group whole-home remodel customer',
  },
  // Real video testimonial (video/remodel 1.mp4). Name + quote supplied by the
  // owner; community chosen from the service-area list (content/locations.ts).
  {
    name: 'Mark Davidson',
    location: 'Mount Lookout, Cincinnati, OH',
    project: 'Custom Home Remodel',
    rating: 5,
    quote:
      'At first, I wondered how Bulldog could possibly turn a home we already loved into our dream home. But when we saw the design concepts, we were completely blown away. Before the renovation, our house never truly felt like our home, and since I work from home, I also needed a dedicated office. We wanted a space where our kids could grow up before heading off to college. From the very beginning, the Bulldog team was welcoming, communicative, and supportive. They gave us time to make decisions, listened to what we wanted, and guided us through every step of the renovation. As homeowners, having experts handle every detail made the process so much easier. When we saw the finished project, it honestly brought tears to my eyes. It became the dream home we had imagined. Everyone was professional, courteous to our kids and dogs, and a pleasure to work with. We’ll definitely use Bulldog again — they’re simply the best.',
    thumbnail: '/assets/testimonial-remodel-1.webp',
    videoUrl: '/assets/testimonial-remodel-1.mp4',
    poster: '/assets/testimonial-remodel-1-poster.webp',
    alt: 'Mark Davidson, Bulldog Remodel Group custom home remodel customer',
  },
  // Real video testimonial (video/remodel 4.mp4; face from video/3.png). Name +
  // quote supplied by the owner; community chosen from content/locations.ts.
  {
    name: 'Kristen Vance',
    location: 'Oakley, Cincinnati, OH',
    project: 'Whole-Home Remodel',
    rating: 5,
    quote:
      'My name is Kristen Vance, and my husband, our son Louis, and I have lived in our home for 15 years. We fell in love with this 1950s home as soon as we saw it, but it definitely needed updating. Remodeling for the first time was a big decision, and Bulldog stood out from every other contractor we considered. Looking back, choosing them was one of the best decisions we made. What means the most to me is the trust they earned. They didn’t just remodel our kitchen or bathroom — they transformed our entire home. Every detail was completed with quality, and I have complete peace of mind knowing everything was built the right way. We love entertaining here because we’re so proud of the finished result. Quality is worth investing in, and Bulldog proves that you truly get what you pay for. It was an amazing experience, and I’d happily do it all over again.',
    thumbnail: '/assets/testimonial-remodel-4.webp',
    videoUrl: '/assets/testimonial-remodel-4.mp4',
    poster: '/assets/testimonial-remodel-4-poster.webp',
    alt: 'Kristen Vance, Bulldog Remodel Group whole-home remodel customer',
  },
];
