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
        // Bulldog brand palette — kitchen & bath edition
        crimson: {
          DEFAULT: '#C8102E', // Bulldog collar red
          600: '#A00C24',
          700: '#84091D',
        },
        // Warm brass — the premium kitchen/bath accent (fixtures, hardware)
        brass: {
          DEFAULT: '#B08D57',
          400: '#C4A876',
          600: '#8F6F3E',
        },
        ink: {
          DEFAULT: '#1A1A1A', // deep charcoal
          900: '#0C0C0C',
          800: '#1F1F22',
          700: '#2A2A2E',
        },
        steel: {
          DEFAULT: '#57575F',
          400: '#9C9CA5',
          300: '#D2D2D8',
          200: '#E6E6EA',
        },
        bone: '#FBFAF8', // warm off-white
        stone: '#F1EEE9', // warm section wash
      },
      fontFamily: {
        display: ['var(--font-display)', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(26,26,26,0.06)',
        lift: '0 12px 40px rgba(26,26,26,0.12)',
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
