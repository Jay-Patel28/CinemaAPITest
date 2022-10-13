export class RequestServices {
  sendGet(endpoint_alias: string, returnAlias: string) {
    const alias = "@".concat(endpoint_alias);
    cy.get(alias).then((endpoint) => {
      cy.request("GET", endpoint).as(returnAlias);
    });
  }

  sendPost(
    endpoint_alias: string,
    bodyJsonFixtureName: string,
    returnAlias: string
  ) {
    const alias = "@".concat(endpoint_alias);
    cy.get(alias).then((endpoint) => {
      cy.request("POST", endpoint.toString(), {
        fixture: bodyJsonFixtureName,
      }).as(returnAlias);
    });
  }
}
