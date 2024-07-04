const { defineConfig } = require("cypress");

module.exports = defineConfig({
 reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents: (on, config) => {
      allureCypress(on, {
        resultsDir: "./allure-results",
      });

      return config;
    },

    //specPattern :"**/*.feature",

    baseUrl:'https://opensource-demo.orangehrmlive.com',
    defaultCommandTimeout:7000,
    pageLoadTimeout:8000,
    viewportWidth:1000,
    viewportHeight:660,
    retries:{runMode:1},
    video: true,
    env:{
      username:"Admin",
      password: "admin123"
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    return require('./cypress/plugins/index.js')(on, config)
     
    require('cypress-mochawesome-reporter/plugin')(on);
    
      
      
    },
  },
});
