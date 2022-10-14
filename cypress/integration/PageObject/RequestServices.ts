export class RequestServices {
  sendGet(endpoint_alias: string, returnAlias: string) {
    const alias = "@".concat(endpoint_alias);
    cy.get(alias).then((endpoint) => {
      cy.request("GET", endpoint).as(returnAlias);
    });
  }

  sendDelete(endpoint_alias: string, returnAlias: string) {
    const alias = "@".concat(endpoint_alias);
    cy.get(alias).then((endpoint) => {
      return cy.request("DELETE", endpoint.toString()).as(returnAlias);
    });
  }

  sendPost(
    endpoint_alias: string,
    bodyJsonFixtureName: string,
    returnAlias: string
  ) {
    const alias = "@".concat(endpoint_alias);
    cy.get(alias).then((endpoint) => {
      cy.fixture(bodyJsonFixtureName).then((data) => {
        cy.request("POST", endpoint.toString(), data).as(returnAlias);
      });
    });
  }
}
