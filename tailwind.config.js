const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const MyTheme = {
  colors: {
    // ... your color definitions
    green: {
      DEFAULT: '#3BA676',
      // ... other green shades
    },
    blue: {
      DEFAULT: '#0096FF',
      // ... other blue shades
    },
    red: {
      DEFAULT: '#FF6464',
      // ... other red shades
    },
  },
};

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      colors: {
        primary: MyTheme.colors.green,
        // if want to change primary color to blue
        // primary: MyTheme.colors.blue,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        red: MyTheme.colors.red,
        slate: colors.slate,
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
