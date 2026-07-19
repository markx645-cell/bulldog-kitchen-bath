// Three-image galleries for the ExpandingTriptych on each service page.
// The eight remodeling services use real completed-project photos from our own
// portfolio (content/projects.ts), cropped to portrait. The three new-build
// services use licensed stock, since we have no finished projects to show yet.

import type { TriptychImage } from '@/components/ExpandingTriptych';

export type Gallery = [TriptychImage, TriptychImage, TriptychImage];

export const serviceGalleries: Record<string, Gallery> = {
  'bathroom-remodel': [
    { src: '/assets/svc/bathroom-remodel-1.webp', alt: 'Tranquilly Open Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/bathroom-remodel-2.webp', alt: 'Glam + Elegance Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/bathroom-remodel-3.webp', alt: 'A Spa Oasis Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
  ],
  // Licensed stock — the portfolio photos previously used here came from
  // sb-* projects, which carry another firm's watermark. See note at the
  // bottom of this file.
  'walk-in-showers': [
    { src: '/assets/svc/walk-in-showers-1.webp', alt: 'Walk-in shower with frameless glass enclosure and full-height tile' },
    { src: '/assets/svc/walk-in-showers-2.webp', alt: 'Marble-clad walk-in shower with rainfall head and glass panel' },
    { src: '/assets/svc/walk-in-showers-3.webp', alt: 'Contemporary shower area with matte black fixtures and tiled surround' },
  ],
  'tub-shower-combos': [
    { src: '/assets/svc/tub-shower-combos-1.webp', alt: 'Double Take — completed bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/tub-shower-combos-2.webp', alt: 'Pure Bliss — completed bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/tub-shower-combos-3.webp', alt: 'Beautifully Sunkissed Mater Bath Remodel — completed bathroom remodel by Bulldog Remodel Group' },
  ],
  'walk-in-tubs': [
    { src: '/assets/svc/walk-in-tubs-1.webp', alt: 'Casual Comfort Franklin Primary and Guest Bathrooms — completed master bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/walk-in-tubs-2.webp', alt: 'Luxury Cabin Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/walk-in-tubs-3.webp', alt: 'Rustic Chic Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
  ],
  'bathroom-flooring': [
    { src: '/assets/svc/bathroom-flooring-1.webp', alt: 'Marble and Movement Master and Powder Bath Remodel — completed powder room remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/bathroom-flooring-2.webp', alt: 'Stunningly Spa Mater Bath Remodel — completed bathroom remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/bathroom-flooring-3.webp', alt: 'Classic Beauty Master Bath Remodel — completed master bathroom remodel by Bulldog Remodel Group' },
  ],
  'kitchens': [
    { src: '/assets/svc/kitchens-1.webp', alt: 'Bright & Airy Kitchen — completed kitchen remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/kitchens-2.webp', alt: 'Modern Kitchen Refresh — completed kitchen remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/kitchens-3.webp', alt: 'A Space of Their Own — completed kitchen remodel by Bulldog Remodel Group' },
  ],
  'kitchen-remodeling-older-homes': [
    { src: '/assets/svc/kitchen-remodeling-older-homes-1.webp', alt: 'Artful Vibe — completed kitchen remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/kitchen-remodeling-older-homes-2.webp', alt: 'The Beauty of Wood — completed kitchen remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/kitchen-remodeling-older-homes-3.webp', alt: 'Cheerful Sophistication — completed kitchen remodel by Bulldog Remodel Group' },
  ],
  'basement-remodel': [
    { src: '/assets/svc/basement-remodel-1.webp', alt: 'Large Scaled Basement Remodel — completed basement remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/basement-remodel-2.webp', alt: 'Rustic Sleek Basement Remodel — completed basement remodel by Bulldog Remodel Group' },
    { src: '/assets/svc/basement-remodel-3.webp', alt: 'Industrial Basement Remodel — completed basement remodel by Bulldog Remodel Group' },
  ],
  'accessory-dwelling-units': [
    { src: '/assets/service-adu-1.webp', alt: 'Detached backyard accessory dwelling unit with its own deck and private entrance' },
    { src: '/assets/service-adu-2.webp', alt: 'Open-plan ADU interior with living area and full kitchen' },
    { src: '/assets/service-adu-3.webp', alt: 'Compact ADU bathroom with walk-in shower, tiled walls and in-unit laundry' },
  ],
  'barndominiums': [
    { src: '/assets/service-barndominium-1.webp', alt: 'Barn-style home exterior with standing-seam metal roof and sliding barn doors' },
    { src: '/assets/service-barndominium-2.webp', alt: 'Open-plan barndominium interior with vaulted ceiling and exposed timber trusses' },
    { src: '/assets/service-barndominium-3.webp', alt: 'Modern farmhouse kitchen with exposed beam, custom cabinetry and professional range' },
  ],
  'custom-homes': [
    { src: '/assets/service-custom-home-1.webp', alt: 'Custom home exterior at dusk with stone entry, dormers and landscaped drive' },
    { src: '/assets/service-custom-home-2.webp', alt: 'Custom home living room with fireplace, built-in shelving and hardwood floors' },
    { src: '/assets/service-custom-home-3.webp', alt: 'Custom home kitchen with marble island, wood cabinetry and pendant lighting' },
  ],
};

// ---------------------------------------------------------------------------
// NOTE — third-party portfolio photos
//
// 110 of the 148 entries in content/projects.ts have `sb-` slugs and are
// Sebring Design Build projects, carried over from the production export. Their
// slugs name Illinois and Tennessee towns (Naperville, Wheaton, Brentwood TN,
// Franklin TN) while the site relabels them as Cincinnati suburbs, and at least
// some of the images carry a visible Sebring watermark.
//
// walk-in-showers has been switched to licensed stock for that reason. These
// galleries still draw on sb-* projects and should be reviewed:
//   bathroom-remodel, walk-in-tubs, bathroom-flooring, basement-remodel,
//   tub-shower-combos (third image only)
//
// Clean, non-sb sources are used for: kitchens, kitchen-remodeling-older-homes,
// and the first two tub-shower-combos images.
// ---------------------------------------------------------------------------
