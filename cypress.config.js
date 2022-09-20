const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  projectId: "pe84vk",
  baseUrl: 'https://buger-eats-qa.vercel.app', 
  viewportWidth: 1440, 
  viewportWidth: 900, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
