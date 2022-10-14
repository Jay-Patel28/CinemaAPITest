declare namespace Cypress {
  interface Chainable {
    setLastActor(alias: string): Chainable<Element>;
    getLastActor(): Chainable<Element>;
    tryLogin(username: string, password: string): Chainable<Element>;
    tryRegister(
      username: string,
      email: string,
      password: string
    ): Chainable<Element>;
    tryMockRegister(
      username: string,
      email: string,
      password: string
    ): Chainable<Element>;
  }
}

Cypress.Commands.add(
  "tryMockRegister",
  (username: string, email: string, password: string) => {
    cy.request({
      method: "POST",
      url: "/api/Authenticate/register",
      failOnStatusCode: false,
      body: {
        username: (Math.random() + 1).toString(36).substring(7),
        email: email,
        password: password,
      },
    }).as("registerResponse");
  }
);

Cypress.Commands.add(
  "tryRegister",
  (username: string, email: string, password: string) => {
    cy.request({
      method: "POST",
      url: "/api/Authenticate/register",
      failOnStatusCode: false,
      body: {
        username: (Math.random() + 1).toString(36).substring(7),
        email: email,
        password: password,
      },
    }).as("registerResponse");
  }
);

Cypress.Commands.add("setLastActor", (Id: string) => {
  cy.get("@addActor")
    .its("body")
    .its("actorId")
    .then((id) => {
      cy.writeFile(
        "cypress/fixtures/CreatedActorId.json",
        JSON.stringify({ actorId: id })
      );
    });
});

Cypress.Commands.add("getLastActor", () => {
  //   cy.readFile("cypress/fixtures/CreatedActorId.json", (err, data) => {
  //     if (err) {
  //       return console.error(err);
  //     }
  //   }).then((data) => {
  //     cy.fixture("CreatedActorId").then((actor) => {
  //       return actor.actorId;
  //     });
  //   });
});

Cypress.Commands.add("tryLogin", (username: string, password: string) => {
  cy.request({
    method: "POST",
    url: "/api/Authenticate/login",
    failOnStatusCode: false,
    body: {
      username: username,
      password: password,
    },
  }).as("loginResponse");
});
