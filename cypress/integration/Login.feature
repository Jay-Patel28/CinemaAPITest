Feature: Login REST-API

  @automated
  Scenario Outline: User should be logged in when typed valid credentials
    Given User has valid login endpoint
    When User tries to login with <username> and <password>
    Then User should be logged in

    Examples: 
      | username |  | password       |
      | "Jay"    |  | "Jay@28101998" |

  Scenario Outline: User should not be logged in when typed invalid credentials
    Given User has valid login endpoint
    When User tries to login with <username> and <password>
    Then User should not be logged in

    Examples: 
      | username |  | password      |
      | "Not"    |  | "IamNotValid" |
