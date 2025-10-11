/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React dosyalarını taraması için
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Facebook tarzı font
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Opsiyonel: Google Fonts Roboto
      },
      keyframes: {
        bounceUp: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        bounceUp: "bounceUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
}