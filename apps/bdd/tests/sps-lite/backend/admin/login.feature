Feature: Admin can login to dashboard
  As admin, I want to be able to login to dashboard, so that I can manage my content

  Scenario: Admin can login to admin panel
    Given I am a guest user

    When I am on "__env.BACKEND_URL__/admin" page
    And I fill in the following details:
      | locator             | value                         | type     |
      | [name="email"]      | __env.STRAPI_ADMIN_LOGIN__    | text     |
      | [name="password"]   | __env.STRAPI_ADMIN_PASSWORD__ | text     |
      | [name="rememberMe"] | checked                       | checkbox |
    And I click "Login" button
    Then I can read "Welcome 👋" text
