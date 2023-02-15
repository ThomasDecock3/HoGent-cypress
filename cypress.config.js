const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com/',
  },
});
