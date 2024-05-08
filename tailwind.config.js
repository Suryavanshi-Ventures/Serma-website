/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C42C2D",
        primaryBlue: "#03989E",
        secondary: "#03989E",
        gray: "#9B9A9A",
        "light-black": "#333333",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        "2xl": "1512px",
        "3xl": "1728px",
        "4xl": "2560px",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-fast": "pulse 0.6s linear infinite",
        "fade-down": "fadeDown 0.4s ease-in",
        fade: "fade 0.3s ease-in",
        "flip-down": "flip-down 500ms ease-out",
        "fade-right": "fade-right 0.3s ease-in-out",
        "fade-left": "fade-left 0.3s ease-in-out",
      },

      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "flip-down": {
          "0%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
