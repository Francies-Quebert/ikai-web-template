// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily :{
        body: ["Roboto Slab"]
      }
    },
  },
  variants: {},
  plugins: ['gatsby-plugin-postcss'],
}
