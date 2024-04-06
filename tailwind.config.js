/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/styles/tailwind.css",
  ],
  theme: {
  },
  base: "/testCarousel/",
  plugins: [require("flowbite/plugin")],
};