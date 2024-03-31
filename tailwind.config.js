/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // 'sm': '640px',
      md: "768px",
      md: "815px",
      // 'lg': '1024px',
      // 'xl': '1280px',
      // '2xl': '1536px',
    },
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
      keyframes: {
        flow: {
          "0%": { transform: "translate(-1000px,0) rotate(90deg)", opacity: 0 },
          "100%": {
            transform: "translate(0,0) rotate(0deg)",
            opacity: 1,
          },
        },
        fade_translate: {
          "0%": { transform: "translate(100px,0)", opacity: 0 },
          "100%": {
            transform: "translate(0,0)",
            opacity: 1,
          },
        },
      },
      animation: {
        flow: "flow 2s linear infinite",
        fade_translate: "fade_translate 0.3s linear",
      },
    },
  },
  plugins: [],
};
