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
        // Brand palette, converted from the production export's OKLCH tokens.
        // brand-red #d01d21 · ink #110c09 · background #fafaf9 · cream #f6f5f1
        crimson: {
          DEFAULT: '#d01d21', // --brand-red (the export also maps --gold to this)
          600: '#b01216',
          700: '#8c0d10',
        },
        ink: {
          DEFAULT: '#110c09', // --foreground / --ink / --primary
          900: '#080604',
          800: '#1d1611',
          700: '#2b221b',
        },
        bone: '#fafaf9', // --background
        cream: '#f6f5f1', // --cream
      },
      fontFamily: {
        // Production stack: Anton (display) · Oswald (condensed) · Inter (body)
        display: ['var(--font-display)', 'Anton', 'Oswald', 'Impact', 'sans-serif'],
        // The export calls this "serif", but it maps to Oswald — a condensed sans.
        serif: ['var(--font-condensed)', 'Oswald', 'Inter', 'system-ui', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'Oswald', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(17,12,9,0.06), 0 8px 24px rgba(17,12,9,0.06)',
        lift: '0 12px 40px rgba(17,12,9,0.14)',
        elegant: '0 20px 60px -20px rgba(17,12,9,0.35)',
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
