/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-dark': '#1e293b',
        'sidebar-light': '#f8fafc',
        'blue-primary': '#3b82f6',
        'blue-selected': '#dbeafe',
      },
    },
  },
  plugins: [],
}
