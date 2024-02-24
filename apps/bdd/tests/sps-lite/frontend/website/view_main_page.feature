Feature: Guest can see public pages content

  Scenario: Guest can see the heading
    Given I am a guest user

    When I am on "/" page
    Then I can read "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate" text
