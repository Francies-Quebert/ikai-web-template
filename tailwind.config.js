// tailwind.config.js
module.exports = {
  future: {},
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern":
          "url('https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1580/hellofresh_website/gb/cms/homepage/HF_App_web_landing_page_newbanners_desktop_2560x700.jpg')",
      }),

      fontFamily: {
        body: ["Roboto Slab"],
      },
    },
  },
  variants: {},
  plugins: ["gatsby-plugin-postcss"],
}
