export class ResponseVerifier {
  verifyStatusCode(alias: string, statusCode: number) {
    cy.get(alias).its("status").should("eq", statusCode);
  }

  shouldBeAnArray(alias: string) {
    expect(Array.isArray(cy.get(alias).its("body")));
  }

  shouldHaveAllProperties(alias: string, fixtureName: string) {
    cy.fixture(fixtureName).then((properties) => {
      console.log("properties: ", properties);

      // for (const [key, value] of Object.entries(properties)) {
      //   console.log(key, value);
      // }

      Array.from(properties).forEach((property) => {
        cy.get(alias).its("body").its(0).should("have.a.property", property);
        //   console.log('property: ', property);
      });
    });
  }

  shouldHaveAllPropertiesWithTrueValues(alias: string, fixtureName: string) {
    cy.fixture(fixtureName).then((properties) => {
      Array.from(properties).forEach((property) => {
        cy.get(alias).its("body").should("have.a.property", property);
        //   console.log('property: ', property);
      });
    });
  }
}
