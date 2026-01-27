/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a2b6f",  // Custom primary color
        secondary: "#80c5fc",  // Custom secondary color
        dark: "#0f172a",  // Custom dark color
        light: "#f8fafc",  // Custom light color
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",  // Fade-in animation
        "slide-up": "slideUp 0.5s ease-out",  // Slide-up animation
        "slide-down": "slideDown 0.5s ease-out",  // Slide-down animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {  // Changed 'slideup' to 'slideUp' to match animation name
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
