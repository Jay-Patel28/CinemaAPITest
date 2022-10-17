Feature: Movies REST_API
    We want to check the reliability of our REST-API for movie entity.

  Scenario: User tries to Create a Movie and Receives a Movie with same values he/she entered
    Given User set POST movie api endpoint
    When User sends a POST HTTP request to Add Movie
    Then User should get statusCode 200 in response after Post
    And Recived Movie should have all added properties with true Values

  Scenario: User tries to get last created Movie using its id
    Given User have id of Movie which he created
    When User sends a GET HTTP request to get Movie by id
    Then User should get statusCode 200 in response "@AddedMovieReq"
    Then Recived Movie should have all added properties

  Scenario: User requests to get all moviess which have all properties of Movie
    Given User set GET all movies api endpoint
    When User sends a GET HTTP request for ALL Movies
    Then User should get statusCode 200 in response "@allMovies"
    And User receives an array of Movies
    And Received array should have all properties in its objects

  Scenario: User requests to Delete movie he/she created
    Given User have id of Movie which he created
    When User sends a DELETE HTTP request to delete Movie by id
    Then User should get statusCode 200 in response "@deleteMovieReq"
