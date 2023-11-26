Feature: Guest can see public pages content

    Scenario: Guest can see the heading
        Given I'm a guest user
        When I am on the "/" page
        Then text "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate" should be shown