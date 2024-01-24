module.exports = {
  e2e: {
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message)
          return null
        }
      })
      ELECTRON_ENABLE_LOGGING=true
      // return require('./cypress/plugins/index.js')(on, config) // run old config
    },

    env:{
      Weather: ''
    }
  },
};
