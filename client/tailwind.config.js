/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        blueGreen: '#224957',
        blueGreenDark: '#346E83',
        white: '#FFF',
        green: '#20DF7F',
        greenDark: '#19B366',
      },
      fontSize: {
        large: '48px',
      },
      height: {
        chatBody: '400px',
      }
    },
  },
  plugins: [],
}

