/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // --- Client palette, named by feeling rather than raw hue, so the
        // intent reads clearly wherever it's used in a class name. ---
        ink: {
          DEFAULT: '#263550', // deep slate blue — primary brand, headings, nav
          50: '#f2f4f7',
          100: '#dde3ec',
          400: '#4c5f80',
          600: '#324262',
          900: '#1b2438',
        },
        oxblood: {
          DEFAULT: '#4e0000', // accent — buttons, hover states, small details
          600: '#3d0000',
        },
        mist: {
          DEFAULT: '#a8bbd1', // soft blue-gray — backgrounds, borders, dividers
          50: '#eef2f6',
          100: '#dde5ee',
        },
        clay: {
          DEFAULT: '#372018', // warm dark clay brown — body text, secondary headings
        },
        ochre: {
          DEFAULT: '#a29244', // muted ochre — links, subtle highlights
          600: '#877a37',
        },
        // Derived neutral: the brief asks for a "warm, neutral background"
        // but the five supplied colors are all mid-to-dark. This is a very
        // light warm off-white pulled from the same family (a whisper of
        // the clay/ochre undertone) so it sits quietly behind everything
        // else rather than introducing an unrelated hue.
        paper: {
          DEFAULT: '#f7f4ee',
          dim: '#efe9de',
        },
      },
      fontFamily: {
        // Display/heading face: warm, slightly idiosyncratic serif with
        // real editorial weight — Fraunces, used with restraint.
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        // Body/utility face: quiet, highly legible sans.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        measure: '38rem', // comfortable reading line-length for body copy
      },
      transitionTimingFunction: {
        quiet: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
