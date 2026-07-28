/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B1017",
          900: "#10161F",
          800: "#161F2C",
          700: "#1E2A3A",
          600: "#2A3540",
          500: "#3A4756",
        },
        mist: {
          400: "#7C8798",
          300: "#9AA5B4",
          100: "#E8ECF1",
        },
        sync: {
          DEFAULT: "#3DD9B3",
          dim: "#276E5B",
        },
        amber: {
          DEFAULT: "#F2B84B",
          dim: "#8C6A2A",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
