/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
          ming: ['Noto Serif TC', 'serif'],
        },
      },
    },
    plugins: [],
}