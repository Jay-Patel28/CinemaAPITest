Feature: Actors REST-API
    We want to check the reliability of our REST-API for actors entity.

  Scenario: User tries to Create an Actor and Receives an Actor with same values he/she entered
    Given User set POST actor api endpoint
    When User sends a POST HTTP request to Add Actor
    Then User should get statusCode 200 in response after Post
    And Recived Actor should have all added properties with true Values

  Scenario: User tries to get last created Actor using its id
    Given User have id of Actor which he created
    When User sends a GET HTTP request to get Actor by id
    Then User should get statusCode 200 in response "@AddedActorReq"
    Then Recived Actor should have all added properties

  Scenario: User requests to get all actors which have all properties of Actor
    Given User set GET all actors api endpoint
    When User sends a GET HTTP request for ALL Actors
    Then User should get statusCode 200 in response "@allActors"
    And User receives an array of actors
    And Received array should have all properties in its objects

  Scenario: User requests to Delete actor he/she created
    Given User have id of Actor which he created
    When User sends a DELETE HTTP request to get Actor by id
    Then User should get statusCode 200 in response "@deleteActorReq"
