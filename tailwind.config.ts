export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f8ff",        // Changed to match your light theme
        surface: "#ffffff",          // Changed for light theme cards
        text: "#1a1a1a",             // Dark text for light theme
        muted: "#6b7280",            // Adjusted muted color
        accent: "#4B0082",           // Changed to indigo/purple from your design
        border: "#e5e7eb",          // Lighter border for light theme
        primary: "#4B0082",         // Added primary color
        secondary: "#6b21a8",       // Added secondary shade
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0,0,0,0.1)",
        accent: "0 0 15px rgba(75, 0, 130, 0.3)",
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};