import { RequestServices } from "../PageObject/RequestServices";
import { ResponseVerifier } from "../PageObject/ResponseVerifier";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const responseVerifier = new ResponseVerifier();
const requestServices = new RequestServices();
let lastCreatedMovieId: string;

//#################  Given  #####################
Given("User set POST movie api endpoint", () => {
  cy.wrap("/movie").as("addMovie_endpoint");
});

Given("User have id of Movie which he created", () => {
  cy.wrap(`/movie/${lastCreatedMovieId}`).as("temp");
});

Given("User set GET all movies api endpoint", () => {
  cy.wrap("/movies").as("allMovies_endpoint");
});

//##################  When   ####################
When("User sends a POST HTTP request to Add Movie", () => {
  requestServices.sendPost("addMovie_endpoint", "addMovie", "add_Movie");
  cy.get("@add_Movie").then((response: any) => {
    lastCreatedMovieId = response.body.id;
  });
});

When("User sends a GET HTTP request to get Movie by id", () => {
  requestServices.sendGet("temp", "AddedMovieReq");
});

When("User sends a GET HTTP request for ALL Movies", () => {
  requestServices.sendGet("allMovies_endpoint", "allMovies");
});

When("User sends a DELETE HTTP request to delete Movie by id", () => {
  requestServices.sendDelete("temp", "deleteMovieReq");
});

// ##################  Then  ####################
Then(
  "User should get statusCode {int} in response after Post",
  (statusCode: number) => {
    responseVerifier.verifyStatusCode("@add_Movie", statusCode);
  }
);

Then("Recived Movie should have all added properties with true Values", () => {
  responseVerifier.shouldHaveAllPropertiesWithTrueValues(
    "@add_Movie",
    "addMovie"
  );
});

Then("Received array should have all properties in its objects", () => {
  responseVerifier.shouldHaveAllPropertiesInArray(
    "@allMovies",
    "MovieProperties"
  );
});

Then("User receives an array of Movies", () => {
  responseVerifier.shouldBeAnArray("@allMovies");
});

Then("Recived Movie should have all added properties", () => {
  responseVerifier.shouldHaveAllProperties("@AddedMovieReq", "addMovie");
});

Then(
  "User should get statusCode {int} in response {string}",
  (statusCode: number, alias: string) => {
    responseVerifier.verifyStatusCode(alias, statusCode);
  }
);
