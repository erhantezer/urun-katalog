/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js','./pages/**/*.{html,js}',
    './components/**/*.{html,js}','./index.html','./public/index.html',],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {},
  },
  
}