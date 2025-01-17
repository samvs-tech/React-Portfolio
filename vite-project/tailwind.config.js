/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 15"', "sans-serif"],
        kavivanar: ["Kavivanar", "cursive"],
        mono: ['"Major Mono Display"', "monospace"],
        sometype: ['"Sometype Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

