/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'isa-color': 'rgb(0, 210, 212)',
        'primary-color': 'rgb(119, 0, 255)',
        'secondary-color': 'rgb(184, 79, 251)',
        'primary-color-60': 'rgb(119, 0, 255, 0.6)',
        'primary-color-30': 'rgb(119, 0, 255, 0.3)',
        'primary-color-15': 'rgb(119, 0, 255, 0.15)',
        'tertiary-color': 'rgb(255, 4, 189)',
        'tertiary-color-60': 'rgba(255, 4, 149, 0.6)',
        'tertiary-color-30': 'rgba(255, 4, 149, 0.3)',
        'tertiary-color-15': 'rgba(255, 4, 149, 0.15)',
        'positive-color': '#afe3c0',
        'negative-color': '#ff5462',
        'warning-color': '#ffd500',
        'info-color': '#919191',
        'positive-color-dark': '#18794e',
        'negative-color-dark': '#d64550',
        'warning-color-dark': '#c5a400',
        'info-color-dark': '#67697c',
      },
    },
  },
  plugins: [],
}