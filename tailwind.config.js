/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4f2ec8',
          indigo: '#2f2a8a',
          gold: '#e8d790',
          beige: '#f2efe0',
        },
      },
    },
  },
  plugins: [],
}
