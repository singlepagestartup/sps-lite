---
sidebar_position: 1
---

# Models

Version `sps` includes all `sps-lite` models, as well as models that add the logic for authorization, authentication, and models related to blog functionality.

## Collection Type

### Article

Модель статьи блога.

![Article model](./img/strapi-ct-article.png)

### Attribute

Attribute model for creating article parameters, such as reading time.

![Attribute model](./img/strapi-ct-attribute.png)

### Attribute Key

Attribute key model, in case of creating a read time attribute, is `read-time`. This model is needed to normalize data and can later be used for filter builders on the frontend.

![Attribute Key model](./img/strapi-ct-attribute-key.png)

### Category

Category model.

![Category model](./img/strapi-ct-category.png)

### User

Advanced user model

![User model](./img/strapi-ct-user.png)

## Components

### Page-blocks

#### Articles list block

Block with article cards

![Articles List Block](./img/strapi-c-articles-list-block.png)

#### Auth Block

Authentication and user authorization block

![Auth Block](./img/strapi-c-pb-auth-block.png)

#### Categories List Block

Category cards block

![Category Previews Block](./img/strapi-c-categories-list-block.png)

#### Category Overview Block

![Category Overview Block](./img/strapi-c-category-overview-block.png)

#### Change Password Block

![Change Password Block](./img/strapi-c-change-password-block.png)

#### Check Otp Form Block

![Check Otp Form Block](./img/strapi-c-check-otp-form-block.png)

#### Markdown Block

Content zone for the `Article` model

![Markdown Block](./img/strapi-c-markdown-block.png)

#### Otp Settings Block

![Otp Settings Block](./img/strapi-c-otp-settings-block.png)

#### Profile Settings Block

![Profile Settings Block](./img/strapi-c-profile-settings-block.png)
