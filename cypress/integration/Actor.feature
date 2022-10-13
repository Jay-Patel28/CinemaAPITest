Feature: Actors REST-API
    We want to check the reliability of our REST-API for actors entity.

  Scenario: User tries to Create an Actors
    Given User set POST actor api endpoint
    When User sends a POST HTTP request to Add Actor
    Then User should get statusCode 200 in response after Post
    And Recived Actor should have all added properties with true Values

  Scenario: User tries to get last created Actor using its id
    Given User have id of Actor which he created
    When User sends a GET HTTP request to get Actor by id
    Then User should get statusCode 200 in response
    Then Recived Actor should have all added properties with true Value

  Scenario: User requests to get all actors
    Given User set GET all actors api endpoint
    When User sends a GET HTTP request for ALL Actor
    Then User should get statusCode 200 in response
    And User receives an array of actors
    And Received array should have all properties in its objects
