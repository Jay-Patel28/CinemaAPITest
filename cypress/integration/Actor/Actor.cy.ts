import { property } from "cypress/types/lodash";
import { RequestServices } from "../PageObject/RequestServices";
import { ResponseVerifier } from "../PageObject/ResponseVerifier";

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const responseVerifier = new ResponseVerifier();
const requestServices = new RequestServices();
const ALL_ACTORS_ENDPOINT = "allActors_endpoint";
const ALL_ACTORS_ALIAS = "allActors";
const ALL_ACTORS = "@allActors";

const ADD_ACTOR_ENDPOINT = "addActor_endpoint";
const ADD_ACTOR_ALIAS = "addActor";
const ADDED_ACTOR = "@addActor";

//#################  Given  #####################
Given("User set GET all actors api endpoint", () => {
  cy.wrap("/actors").as(ALL_ACTORS_ENDPOINT);
});

Given("User set POST actor api endpoint", () => {
  cy.wrap("/actor").as(ADD_ACTOR_ENDPOINT);
});

//##################  When   ####################
When("User sends a GET HTTP request for ALL Actors", () => {
  requestServices.sendGet(ALL_ACTORS_ENDPOINT, ALL_ACTORS_ALIAS);
});

When("User sends a POST HTTP request to Add Actor", () => {
  requestServices.sendPost(
    ADD_ACTOR_ENDPOINT,
    ADD_ACTOR_ALIAS,
    ADD_ACTOR_ALIAS
  );
  cy.setLastActor(ADDED_ACTOR);
});

Given("User have id of Actor which he created", () => {
  cy.fixture("CreatedActorId").then((data) => {
    cy.wrap(data.actorId).as(ADD_ACTOR_ALIAS);
  });
});

When("User sends a GET HTTP request to get Actor by id", () => {
  requestServices.sendGet(
    `actor/${cy.get(ADDED_ACTOR).toString()}`,
    ALL_ACTORS_ALIAS
  );
});

// ##################  Then  ####################
Then("User should get statusCode {int} in response", (statusCode: number) => {
  responseVerifier.verifyStatusCode(ALL_ACTORS, statusCode);
});

Then(
  "User should get statusCode {int} in response after Post",
  (statusCode: number) => {
    responseVerifier.verifyStatusCode(ADDED_ACTOR, statusCode);
  }
);

Then("User receives an array of actors", () => {
  responseVerifier.shouldBeAnArray(ALL_ACTORS);
});

Then("Received array should have all properties in its objects", () => {
  responseVerifier.shouldHaveAllProperties(ALL_ACTORS, "ActorProperties");
});

Then("Recived Actor should have all added properties with true Values", () => {
  responseVerifier.shouldHaveAllProperties(ADDED_ACTOR, "ActorProperties");
});