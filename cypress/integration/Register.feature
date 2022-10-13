Feature: Register REST-API

  @focus
  Scenario Outline: User should be registered when typed valid credentials
    Given User has valid registration endpoint
    When User tries to register with "valid" <username>, <email>, <password>
    Then User should be registered

    Examples: 
      | username |  | email             |  | password       |
      | "Jay3"   |  | "valid@email.com" |  | "Jay@28101998" |

  Scenario Outline: User should not be registered when typed invalid credentials
    Given User has valid registration endpoint
    When User tries to register with "invalid" <username>, <email>, <password>
    Then User should not be registered

    Examples: 
      | username |  | email         |  | password  |
      | "RANDOM" |  | "inemail.com" |  | "INVALID" |

  Scenario Outline: User should not be registered when he/she tries to Register with a username which already exist
    Given User has valid registration endpoint
    When User tries to register with "invalid" <username>, <email>, <password>
    Then User should not be registered

    Examples: 
      | username |  | email         |  | password  |
      | "Jay"    |  | "inemail.com" |  | "INVALID" |
