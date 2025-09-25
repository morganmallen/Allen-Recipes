const { colors, semanticColors } = require('./src/config/colors.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add all the color palettes
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        neutral: colors.neutral,
        
        // Add semantic colors for direct access
        ...semanticColors,
      },
    },
  },
  plugins: [],
}


