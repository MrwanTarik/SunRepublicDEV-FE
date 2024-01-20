/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        webinar: "url('/src/assets/images/webinar-bg.png)",
        circlur: "url('/src/assets/images/circlur-bg.png')",
        sunRepublic: "url('/src/assets/images/sun-republic-img.png')",
        footer: "url('/src/assets/images/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
