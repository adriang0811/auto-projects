module.exports = {
  e2e: {
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config) // run old config
    },
  },
};
