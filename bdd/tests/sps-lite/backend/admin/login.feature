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

  Scenario: Admin can create product
    Given I am a dashboard admin user

    When I am on "__env.BACKEND_URL__/admin/content-manager/collectionType/api::product.product/" page
    And I click "Create new entry" button
    And I can read "Create an entry" text
    And I fill in the following details:
      | locator                               | value                                 | type            |
      | #title                                | __faker.commerce.productName__        | text            |
      | #score                                | 5                                     | text            |
      | __strapi.attribute.description__      | __faker.commerce.productDescription__ | strapi_richtext |
      | __strapi.attribute.full_description__ | __faker.lorem.paragraphs__            | strapi_richtext |
      | __strapi.attribute.media__            | ["1.jpg","2.jpg"]                     | strapi_file     |
      | __strapi.attribute.currency__         | USD                                   | strapi_combobox |
      | __strapi.attribute.product_variants__ | 10                                    | strapi_combobox |
    And I click "Save" button
    Then I can read "Success:" text

    When I click "Publish" button
    Then I can read "Editing published version" text
