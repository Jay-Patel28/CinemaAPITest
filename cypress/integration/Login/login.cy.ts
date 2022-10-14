import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//#################  Given  #####################
Given("User has valid login endpoint", () => {
  cy.wrap("/api/Authenticate/login").as("loginEndpoint");
});

//##################  When   ####################
When(
  "User tries to login with {string} and {string}",
  (username: string, password: string) => {
    cy.tryLogin(username, password);
  }
);

// ##################  Then  ####################
Then("User should be logged in", () => {
  cy.get("@loginResponse").its("status").should("deep.equal", 200);
});

Then("User should not be logged in", () => {
  cy.get("@loginResponse").its("status").should("not.equal", 200);
});
