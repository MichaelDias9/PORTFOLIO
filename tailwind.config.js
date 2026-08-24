/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121210',
        paper: '#EDE8DD',
        ink: '#15140f',
        cream: '#EDE8DD',
        muted: '#c9c4b8',
        blueprint: '#3A6EA5',
        redline: '#D8542A',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        serif: ['Fraunces', 'ui-serif', 'serif'],
      },
    },
  },
  plugins: [],
}
