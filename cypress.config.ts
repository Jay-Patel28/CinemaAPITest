import { defineConfig } from "cypress";
const cucumber = require("cypress-cucumber-preprocessor").default;

export default defineConfig({
  e2e: {
    baseUrl: "https://localhost:7114",
    setupNodeEvents(on) {
      const options = { 
        typescript : require.resolve('typescript'),
      }
      on("file:preprocessor", cucumber(options));
    },
    specPattern: "**/*.feature",
  },
});
