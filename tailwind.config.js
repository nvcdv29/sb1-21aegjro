/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        'image': '0.5rem', // custom image border radius
      },
      height: {
        'gallery-sm': '200px',
        'gallery-md': '250px',
        'gallery-lg': '300px',
      },
      maxHeight: {
        'gallery': '50vh',
      }
    },
  },
  plugins: [],
};