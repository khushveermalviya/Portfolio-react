/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#6d28d9',
        'custom-body': '#ffe4e6',
        'custom-text': '#0891b2',
      }
    },
  },
  plugins: [],
}

