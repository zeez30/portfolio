/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#0a070e',   // midnight_violet 100
        surface:       '#140e1b',   // midnight_violet 200
        border:        '#271b36',   // midnight_violet 400
        accent:        '#0afbff',   // stormy_teal 700
        'accent-dim':  '#006466',   // stormy_teal 500
        violet:        '#c346c3',   // deep_purple 700
        textprimary:   '#f0f4f8',
        textsecondary: '#b2f5fa',   // dark_teal 900 — light teal readable on purple-dark bg
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}


