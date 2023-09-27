import tailwindForms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../index.html',
    './**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6499E9',
        'secondary': '#9EDDFF',
      },
      fontFamily: {
        'sans': ['Roboto, sans-serif'],
        'mono': ['Roboto Mono, monospace']
      }
    },
  },
  plugins: [tailwindForms],
}

