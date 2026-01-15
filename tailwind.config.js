/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salmon: '#FF6B6B',
        'off-white': '#F9FAFB', // Using a standard off-white/gray-50 equivalent
      }
    },
  },
  plugins: [],
}
