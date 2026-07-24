// Video testimonials shown on the homepage.
//
// ⚠️ REAL PEOPLE ONLY. Each entry is a claim that a named homeowner appeared on
// camera and endorsed the business. Do NOT invent names, faces (thumbnails),
// quotes or videos — fabricated testimonials are the same integrity line as
// fake reviews.
//
// The entries below are OBVIOUS PLACEHOLDERS (dummy names + lorem text, no photo,
// no video) so the redesigned layout is visible for review while carrying
// nothing that could be mistaken for a real endorsement. A face with no
// `thumbnail` shows a person-icon frame; a testimonial with no `videoUrl` shows
// the video area as a placeholder.
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
  // Placeholders below — replace with real video testimonials before launch.
  {
    name: 'Placeholder Name',
    location: 'Community, ST',
    project: 'Service — placeholder',
    rating: 5,
    quote:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — dummy text, not a real testimonial. Replace before launch.',
  },
  {
    name: 'Placeholder Name',
    location: 'Community, ST',
    project: 'Service — placeholder',
    rating: 5,
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation. This quote exists only to preview the video-testimonial layout.',
  },
  {
    name: 'Placeholder Name',
    location: 'Community, ST',
    project: 'Service — placeholder',
    rating: 5,
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Placeholder copy for the testimonial pull-text.',
  },
  {
    name: 'Placeholder Name',
    location: 'Community, ST',
    project: 'Service — placeholder',
    rating: 5,
    quote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa. Dummy testimonial text for layout review only.',
  },
];
