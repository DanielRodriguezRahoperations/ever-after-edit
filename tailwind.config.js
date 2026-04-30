/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          secondary: '#F3EEE8',
        },
        accent: {
          DEFAULT: '#C6A98C',
          dark: '#A78A6D',
        },
        ink: {
          DEFAULT: '#181818',
          secondary: '#6B6763',
        },
        border: '#E6DED5',
      },
      fontFamily: {
        heading: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        body: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        section: '7rem',
        'section-sm': '5rem',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
