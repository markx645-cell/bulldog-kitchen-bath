// Video testimonials shown on the homepage carousel.
//
// ⚠️ REAL PEOPLE ONLY. Each entry is a claim that a named homeowner appeared on
// camera and endorsed the business. Do NOT invent names, faces (thumbnails), or
// videos — fabricated testimonials are the same integrity line as fake reviews.
//
// The entries below are PLACEHOLDERS with no name, no photo and no video, so the
// carousel design is visible for review while carrying nothing false. A tile
// with no `thumbnail` renders the branded placeholder frame (see Photo.tsx), and
// with no `videoUrl` the play button is inert.
//
// To go live, replace each placeholder with a real testimonial:
//   - name:      first name + community, e.g. "Mike, Fort Thomas, KY"
//   - thumbnail: a poster image dropped in /public/assets, e.g. "/assets/testimonials/mike.webp"
//   - videoUrl:  the video's embed URL (YouTube/Vimeo) or an .mp4 in /public
// Delete any placeholders you don't fill. If the array is emptied entirely, the
// homepage section removes itself (the component returns null).

export type Testimonial = {
  /** First name + community. Real customer only. */
  name?: string;
  /** Poster image in /public. Omit to show the branded placeholder frame. */
  thumbnail?: string;
  /** Embed URL (YouTube/Vimeo) or an .mp4 path. Omit to leave the tile inert. */
  videoUrl?: string;
  /** Accessible description of the poster image. */
  alt?: string;
};

// Placeholders — replace with real testimonials before launch.
export const testimonials: Testimonial[] = [
  { alt: 'Video testimonial placeholder' },
  { alt: 'Video testimonial placeholder' },
  { alt: 'Video testimonial placeholder' },
  { alt: 'Video testimonial placeholder' },
  { alt: 'Video testimonial placeholder' },
  { alt: 'Video testimonial placeholder' },
];
