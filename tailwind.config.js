export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-950': '#0a0e1a',
        'navy-900': '#0f1420',
        'navy-800': '#1a1f2e',
        'navy-700': '#252b3d',
        'gold': '#d4af37',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
