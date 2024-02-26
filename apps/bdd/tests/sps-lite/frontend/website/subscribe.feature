Feature: Guest can subscribe for tier

  Scenario: Guest can subscribe for tier
    Given I am a guest user

    When I am on "/tiers/2/subscribe" page
    Then I fill in the following details:
      | locator | value                    | type |
      | #email  | rogwild.design@gmail.com | text |
    And I click "Buy" button
    Then I can read "$99.00" text
    And I fill in the following details:
      | locator      | value               | type |
      | #email       | tester@example.com  | text |
      | #cardNumber  | 4242 4242 4242 4242 | text |
      | #cardExpiry  | 0344                | text |
      | #cardCvc     | 344                 | text |
      | #billingName | BDD Tester          | text |
    And I click "Pay" button
    Then I can read "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate" text
