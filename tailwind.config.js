/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "K-ASCENT": "#31ffa6",
        "K-GREY-DARK": "#1f1f1f",
        "K-GREY-LIGHT": "#5f5f5f",
        "K-BLACK": "#252525",
      },
      // keyframes: {
      //   wiggle: {
      //     "0%": { transform: "translate(0,0) rotate(0deg)" },
      //     // "10%": { transform: "translate(150px,0) rotate(0deg)"},
      //     "50%": { transform: "translate(500px,500px) rotate(-45deg)" },
      //     "100%": {
      //       transform: "translate(500px,500px) rotate(-45deg)",
      //     },
      //   },
      // },
      // animation: {
      //   wiggle: "wiggle 1s linear infinite",
      // },
    },
  },
  plugins: [],
};
