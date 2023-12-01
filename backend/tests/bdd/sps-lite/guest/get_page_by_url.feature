Feature: Clients can get page data by RestAPI
    
    Scenario: Client can get page data for specific url parameter
        Given I am RestAPI client
        When I request "GET" "/api/pages/get-by-url?url=/"
        Then I recieve JSON data with field "data.url" equals "/"
