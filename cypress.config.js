const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;
const AllureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      AllureWriter(on, config);
            return config;
    },

    baseUrl: "https://www.phptravels.net/login",

    watchForFileChanges: true,

    defaultCommandTimeout: 10000,

    responseTimeout: 30000,

    specPattern: "cypress/e2e/**/*.*",

    excludeSpecPattern: [
      "cypress/e2e/login_page/*.*",
      "cypress/e2e/sign_up_page/*.*",
    ],
  },
});