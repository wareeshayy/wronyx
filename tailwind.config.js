/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wronyx: {
          blue: '#00A3E0',
          navy: '#0A60A8',
          dark: '#1E2226',
          slate: '#282C31',
          gunmetal: '#5A626A',
          border: '#383E45',
          muted: '#A0A6AC',
        },
      },
      backgroundImage: {
        'wronyx-gradient': 'linear-gradient(135deg, #00A3E0 0%, #0A60A8 100%)',
      },
      boxShadow: {
        'blue-glow': '0 0 20px rgba(0, 163, 224, 0.4)',
        'blue-glow-hover': '0 0 30px rgba(0, 163, 224, 0.7)',
      },
    },
  },
  plugins: [],
}
