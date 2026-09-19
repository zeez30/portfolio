/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:            '#111110',   // near-black
        surface:       '#181817',   // slightly lifted panel
        border:        '#333331',   // quiet gray
        accent:        '#f0efe9',   // off-white ink
        'accent-dim':  '#2a2a28',
        violet:        '#2a2a28',
        textprimary:   '#f0efe9',   // off-white ink
        textsecondary: '#aaa9a2',   // readable secondary ink
      },
      fontFamily: {
        editorial: ['"Libre Baskerville"', 'Georgia', 'serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
        display: ['"Courier Prime"', 'monospace'],
        body:    ['"Courier Prime"', 'monospace'],
        mono:    ['"Courier Prime"', 'monospace'],
      },
    },
  },
  plugins: [],
}


