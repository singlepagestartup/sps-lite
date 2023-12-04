Feature: Clients can get page data by RestAPI

  Scenario: Client can get page data for specific url parameter
    Given I am RestAPI client

    When I request "GET" "/api/pages/get-by-url?url=/"
    Then I recieve JSON data with field "data.url" equals "/"

  Scenario: Client request layout by specific url
    Given I am RestAPI client

    When I request "GET" "/api/layouts/by-page-url?url=/"
    Then I recieve JSON data with field "data.variant" having type "string"

  @skip
  Scenario: Client page with model reference
    Given I am RestAPI client

    When I request "GET" "/api/pages/get-by-url?url=/currencies/1"
    Then I recieve JSON data with field "data.url" having type "string"
