---
sidebar_position: 1
---

# Модели

Версия `sps` включает в себя все модели `sps-lite`, а также модели, добавляющие логику работы Авторизации, аутентификации и модели связанные с функционалом блога.

## Collection Type

### Article

Модель статьи блога.

![Article model](./img/strapi-ct-article.png)

### Attribute

Модель атрибута для создания параметров статьи, например времени прочтения.

![Attribute model](./img/strapi-ct-attribute.png)

### Attribute Key

Модель ключа атрибута, в случае создания атрибута времени прочтения это "время прочтения".

![Attribute Key model](./img/strapi-ct-attribute-key.png)

### Category

Модель категории.

![Category model](./img/strapi-ct-category.png)

### User

Расширинная модель пользователя

![User model](./img/strapi-ct-user.png)

## Components

### Page-blocks

#### Auth Block

Блок аутентификации и авторизации пользователя

![Auth Block](./img/strapi-c-pb-auth-block.png)

#### Blog Section Block

Блок секции с блогом

![Blog Section Block](./img/strapi-c-blog-section-block.png)

#### Category Overview Block

![Category Overview Block](./img/strapi-c-category-overview-block.png)

#### Category Previews Block

![Category Previews Block](./img/strapi-c-category-previews-block.png)

#### Change Password Block

![Change Password Block](./img/strapi-c-change-password-block.png)

#### Check Otp Form Block

![Check Otp Form Block](./img/strapi-c-check-otp-form-block.png)

#### Content Section Block

Контент зона для модели [Article](/docs/backend/what-exists/sps#article)

![Content Section Block](./img/strapi-c-content-section-block.png)

#### Otp Settings Block

![Otp Settings Block](./img/strapi-c-otp-settings-block.png)

#### Profile Settings Block

![Profile Settings Block](./img/strapi-c-profile-settings-block.png)
