export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '300': '300px',
        '1280': '1280px',
      },
      width: {
        '180': '180px',
        '200': '200px',
        '300': '300px',
        '1280': '1280px',
      },
      height: {
          '300': '300px',
      },
      maxHeight: {
          '450': '450px',
      }
    },
  },
  plugins: [],
}
