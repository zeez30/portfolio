/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#dfe2cf',   // eggshell
        surface:       '#e3c5bb',   // almond-silk
        border:        '#dda3b2',   // pink-mist
        accent:        '#764248',   // burnt-rose
        'accent-dim':  '#a05a62',   // derived mid rose
        violet:        '#dda3b2',   // pink-mist
        textprimary:   '#1e0f12',   // near-black rose
        textsecondary: '#8b5a62',   // muted rose
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


