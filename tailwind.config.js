module.exports = {
  purge: {
    content: [
      './src/**/*.html', 
      './src/**/*.js', 
      './src/assets/styles/styles.css' // Including the styles.css for purging
    ], 
    options: {
      safelist: [], // Specific classes you want to keep regardless of being used or unused
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Here you can extend the default configuration
      // Example: backgroundColor: { 'primary': '#333' }
    },
  },
  variants: {
    extend: {
      // Here you can define variant-specific styles
      // Example: backgroundColor: ['active'],
    },
  },
  plugins: [], // Add plugins here
}
