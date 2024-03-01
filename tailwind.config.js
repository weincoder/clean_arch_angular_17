/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {

        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        principal: "64px",
      }
    },
  },
  plugins: [],
}

