/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primaryLight: ["Light"],
        primaryBold: ["Bold"],
        fatFace: ["Fatface"], // Ensure the font name matches how it's defined in your project
        Barlow: ["Barlow"],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-gradient': {
          borderImage: 'linear-gradient(to bottom, #181818, #eee, #181818) 1 100%',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
