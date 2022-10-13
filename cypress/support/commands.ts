declare namespace Cypress {
  interface Chainable {
    setLastActor(alias: string): Chainable<Element>;
    getLastActor(): Chainable<Element>;
  }
}

Cypress.Commands.add("setLastActor", (alias: string) => {
  const id = cy.get(alias).its("body").its("actorId").toString();
  console.log("id: ", id);

  cy.writeFile(
    "cypress/fixtures/CreatedActorId.json",
    JSON.stringify({ actorId: id })
  );
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
