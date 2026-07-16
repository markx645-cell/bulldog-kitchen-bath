import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Three-colour palette (Cristiana Couceiro reference):
        // cream #efe6d5 · sage #9dbeb7 · vermilion #e73213
        vermilion: {
          DEFAULT: '#e73213', // primary accent / CTA
          600: '#c4270d',
          700: '#9d1e09',
        },
        sage: {
          DEFAULT: '#9dbeb7', // secondary accent — sings on dark
          400: '#b9d2cd', // lighter, for dark backgrounds
          600: '#6f9a91', // darker, for legibility on cream
          900: '#33514c',
        },
        cream: {
          DEFAULT: '#efe6d5', // page background
          50: '#f7f2e7', // lifted card surface
          200: '#e3d7bf', // section wash
        },
        // Near-black, as the poster uses for its figures. Kept for text and
        // dark sections so the three brand colours stay legible.
        ink: {
          DEFAULT: '#16181a',
          900: '#0d0f10',
          800: '#1f2225',
          700: '#2c3033',
        },
        // Warm neutrals tuned to sit on cream rather than white.
        steel: {
          DEFAULT: '#5b5850',
          400: '#98938a',
          300: '#cec7b8',
          200: '#ded6c4',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(22,24,26,0.06), 0 8px 24px rgba(22,24,26,0.06)',
        lift: '0 12px 40px rgba(22,24,26,0.14)',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
