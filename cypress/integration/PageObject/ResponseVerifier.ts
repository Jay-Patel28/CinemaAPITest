export class ResponseVerifier {
  verifyStatusCode(alias: string, statusCode: number) {
    cy.get(alias).its("status").should("eq", statusCode);
  }

  shouldBeAnArray(alias: string) {
    expect(Array.isArray(cy.get(alias).its("body")));
  }

  shouldHaveAllPropertiesInArray(alias: string, fixtureName: string) {
    cy.fixture(fixtureName).then((properties) => {
      Object.keys(properties).forEach((property) => {
        cy.get(alias).its("body").its(0).should("have.a.property", property);
      });
    });
  }

  shouldHaveAllProperties(alias: string, fixtureName: string) {
    cy.fixture(fixtureName).then((properties) => {
      Object.keys(properties).forEach((property) => {
        cy.get(alias).its("body").should("have.a.property", property);
      });
    });
  }

  shouldHaveAllPropertiesWithTrueValues(alias: string, fixtureName: string) {
    cy.fixture(fixtureName).then((properties) => {
      Object.keys(properties).forEach((property) => {
        cy.get(alias).its("body").should("have.a.property", property);
      });
    });
  }
}
