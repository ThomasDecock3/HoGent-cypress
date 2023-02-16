const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://hogenttodoapp.s3-website-eu-west-1.amazonaws.com',
  },
})