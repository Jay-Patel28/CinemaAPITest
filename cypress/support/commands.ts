declare namespace Cypress {
  interface Chainable {
    setLastActor(alias: string): Chainable<Element>;
    getLastActor(): Chainable<Element>;
  }
}

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
