/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#000',
        'secondary-color': '#37003C',
        'secondary-darker': '#300134'

      },
    },
  },
  plugins: [],
}

