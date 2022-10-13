import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User has valid registration endpoint", () => {
  cy.wrap("/api/Authenticate/register").as("registerEndpoint");
});

When(
  "User tries to register with {string} {string}, {string}, {string}",
  (valid: string, username: string, email: string, password: string) => {
    console.log('valid: ', valid);
    console.log('password: ', password);
    console.log('email: ', email);
    console.log('username: ', username);
    if (valid == "valid") {
      cy.tryMockRegister(username, email, password);
    } else {
      cy.tryRegister(username, email, password);
    }
  }
);

Then("User should be registered", () => {
  cy.get("@registerResponse").its("status").should("deep.equal", 200);
});

Then("User should not be registered", () => {
    cy.get("@registerResponse").its("status").should("not.equal", 200);
  });
