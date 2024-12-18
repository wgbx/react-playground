import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      })
    }),
  ],
}
