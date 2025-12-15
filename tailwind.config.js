/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#1a1b26', // Lighter, blue-grey tinted dark
        'deep-space': '#0f172a', // Slate-900 like, rich dark blue instead of void black
        'neon-blue': '#38bdf8', // Slightly softer neon
        'neon-pink': '#f472b6', // Softer pink
        'gold-accent': '#fbbf24',
        'surface': '#1e293b', // New surface color for cards
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
