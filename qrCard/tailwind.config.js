/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Outfit"],
      },
      fontSize: {
        my: "25px",
        second: "15px",
        ok: "18px",
        new: "28px",
        neww:"17px"
      },
      screens: {
        mdd: "1228px",
      },
    },
  },
  plugins: [],
};
