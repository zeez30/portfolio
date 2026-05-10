/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#1b2021',   // carbon-black
        surface:       '#30343f',   // jet-black
        border:        '#89023e',   // dark-raspberry
        accent:        '#ea638c',   // blush-rose
        'accent-dim':  '#89023e',   // dark-raspberry
        violet:        '#89023e',   // dark-raspberry
        textprimary:   '#ffd9da',   // soft-blush
        textsecondary: '#c97a8a',   // derived muted rose
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


