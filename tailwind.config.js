/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      height: {
        section: '660px'
      },
      fontSize: {
        small: '10px'
      },
      backgroundImage: {
        app: 'linear-gradient(142deg, rgba(116,130,170,1) 0%, rgba(179,205,208,1) 35%, rgba(232,181,190,1) 100%);',
        main: 'linear-gradient(180deg, rgba(207,224,234,1) 0%, rgba(233,229,235,1) 35%, rgba(246,223,234,1) 100%);'
      },
    },
    fontFamily: {
      SCDream4: ["SCDream4"]
    }
  },
  plugins: [],
}

