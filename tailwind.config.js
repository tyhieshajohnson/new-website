/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        general: ["General Sans", "sans-serif"],
        "atlassian-sans-latin": ["atlassian-sans-latin", "sans-serif"],
        "denton-extra-bold": ["denton-extra-bold", "sans-serif"],
        "denton-extra-bold-2": ["denton-extra-bold-2", "sans-serif"],
        "gilroy-regular": ["gilroy-regular", "sans-serif"],
        "gilroy-regular-2": ["gilroy-regular-2", "sans-serif"],
        "gilroy-medium": ["gilroy-medium", "sans-serif"],
        "gilroy-medium-2": ["gilroy-medium-2", "sans-serif"],
        "gilroy-bold": ["gilroy-bold", "sans-serif"],
        "gilroy-bold-2": ["gilroy-bold-2", "sans-serif"],
        "gilroy-semi-bold": ["gilroy-semi-bold", "sans-serif"],
      },
      colors: {
        black: {
          default: "#000000",
          50: "#0A0A0A",
          100: "#1A1A1A",
          200: "#2A2A2A",
          300: "#3A3A3A",
        },
        white: {
          default: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
        },
        gray: {
          default: "#808080",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          custom-gray: "rgba(209, 213, 219, 0.5)",
        },
      },
    },
  },
  plugins: [],
};