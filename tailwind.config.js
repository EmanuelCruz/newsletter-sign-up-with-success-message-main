/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "custom-grey": "hsl(231, 7%, 60%)",
        "custom-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        paragraph: "16px",
      },
      fontFamily: {
        primary: "roboto",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "@tailwindcss/forms"],
};
