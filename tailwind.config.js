/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          "slide-in-right": {
            "0%": {
              transform: "translate(100%, -50%) scale(0.5)",
              opacity: "0",
            },
            "100%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: "1",
            },
          },
          "slide-in-left": {
            "0%": {
              transform: "translate(-100%, -50%) scale(0.5)",
              opacity: "0",
            },
            "100%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: "1",
            },
          },
        },
        animation: {
          "slide-in-right": "slide-in-right 0.7s ease-out forwards",
          "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        },
      },
    },
    plugins: [],
  };
  