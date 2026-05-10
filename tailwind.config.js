/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#2a1418',   // derived dark rose
        surface:       '#3d2228',   // derived mid rose
        border:        '#764248',   // burnt-rose
        accent:        '#ffadc6',   // baby-pink
        'accent-dim':  '#dda3b2',   // pink-mist
        violet:        '#dda3b2',   // pink-mist
        textprimary:   '#dfe2cf',   // eggshell
        textsecondary: '#e3c5bb',   // almond-silk
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


