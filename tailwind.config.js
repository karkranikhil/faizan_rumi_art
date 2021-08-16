module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'title-img': "url('/img/title-line@2x.png')",
        'portfolio-bg':"url('/img/portfolio-bg.jpeg')",
        'faizan-img':"url('/img/faizan.jpeg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
