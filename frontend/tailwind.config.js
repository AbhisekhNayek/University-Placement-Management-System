/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",  ],
  theme: {
    extend: {
      screens: {
        'Lxl': '1350px',
        'Lmd': '960px',
        'Lmd1': '970px',
        'xsm': '420px',
        'lsm': '530px',
        'BtstrpLg': '992px',
        'Cxl': '1230px',
        '3xl': '1600px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        mooli: ['Mooli', 'sans-serif'],
        mavenPro: ['Maven Pro', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
        mPlusp: ['M PLUS 1p'],
        jaldi: ['Jaldi', 'sans-serif'],
        k2d: ['K2D', 'sans-serif']
      },
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
}
