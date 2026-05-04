import type { Config } from 'tailwindcss';

/**
 * Keys Time Charters — design tokens
 * Coastal palette inspired by flats water, mangroves, and bleached sand.
 * Keep this list lean; it's easier to design when choices are constrained.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep ocean — primary brand
        ink: {
          DEFAULT: '#0b2238',
          50: '#f3f6f9',
          100: '#dde6ee',
          200: '#b6c8d8',
          300: '#85a3bb',
          400: '#557d9c',
          500: '#345e80',
          600: '#1f4361',
          700: '#163149',
          800: '#0f2335',
          900: '#0b2238',
        },
        // Flats water — accent
        flats: {
          DEFAULT: '#5da9a1',
          50: '#f1f8f7',
          100: '#daede9',
          200: '#b6dcd5',
          300: '#8cc6bd',
          400: '#5da9a1',
          500: '#3f8d85',
          600: '#306f6a',
          700: '#285855',
          800: '#214644',
          900: '#1c3938',
        },
        // Mangrove green
        mangrove: {
          DEFAULT: '#2e4f3a',
          500: '#3a6249',
          700: '#243d2d',
        },
        // Warm sand neutral
        sand: {
          50: '#faf8f3',
          100: '#f3eee2',
          200: '#e6dcc4',
          300: '#d2c096',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 34, 56, 0.06), 0 8px 24px -12px rgba(11, 34, 56, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, rgba(11,34,56,0.55) 0%, rgba(11,34,56,0.35) 45%, rgba(11,34,56,0.85) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
