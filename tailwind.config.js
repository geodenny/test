/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      
colors: {
        // Brand Colors
        brand: {
          DEFAULT: '#0CA6A6',     // Main brand color (teal)
          dark: '#058B8B',        // Darker shade for active elements
        },

        // Background Colors
        background: {
          DEFAULT: '#FFFFFF',      // Main background
          light: '#F5F5F5',        // Light card/widget background
          medium: '#D9D9D9',       // Medium tone for borders/icons
        },

        // Text and UI Colors
        muted: '#4F4F4F',          // Inactive text, labels

        // Accent Colors
        accent: {
          yellow: '#FFD700',       // Highlights (e.g. bar chart)
          blue: '#E5F9FF',         // Light background (e.g. chart)
          softBlue: '#ADD8E6',     // Soft blue for calendar or light UI
          green: '#34C759',        // Success indicators
          red: '#FF6B6B',          // Error/alert colors
          lavender: '#EDE7F6',     // Accent background (e.g. cards)
        },
      },
    },
  },
  plugins: [],
}