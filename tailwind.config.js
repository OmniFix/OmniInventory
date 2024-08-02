/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      PoppinsRegular: ['Poppins-Regular'],
      PoppinsMedium: ['Poppins-Medium'],
      PoppinsSemiBold: ['Poppins-SemiBold'],
      PoppinsBold: ['Poppins-Bold'],
    },
    },
  },
  plugins: [],
}

