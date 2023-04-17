---
sidebar_position: 5
---

# Автоматическая установка прав доступа

:::tip Зачем?
По умолчанию данные права проставляются вручную на каждой запускаемой машине, так как данная информация записывается в базу данных.
:::

В Strapi имеется функционал [разделения прав доступа к моделям](https://docs.strapi.io/user-docs/users-roles-permissions).

Для упрощения работы с данным плагином в Single Page Startup есть фукнция, которая проставляет необходимые права доступа к моделям при запуске приложения. Данная функция запускается в файле `./backend/src/index.js`.

```javascript title="./backend/src/index.js"
'use strict';
const strapiUtils = require('@rogwild/strapi-utils');
...

module.exports = {
    register(/*{ strapi }*/) {},

    async bootstrap({ strapi }) {
        ...
        await strapiUtils.utils.setPermissions();

        ...
    },
};
```

Данная функция проставляет параметры, описанные в файле `./backend/config/permissions.js`. Ключи в объекте `spsLitePublicActions` соответствуют моделям, массив строк соответствует названию хердлеров, указанных в контроллере модели.

```javascript title="./backend/config/permissions.js"
const spsLitePublicActions = {
  "api::modal.modal": ["find"],
  "api::slider.slider": ["find"],
  "api::theme.theme": ["find"],
  "api::form.form": ["find"],
  "api::form-request.form-request": ["create"],
  "api::review.review": ["find"],
  "api::tier.tier": ["find"],
  "api::currency.currency": ["find"],
  "api::slide-over.slide-over": ["find"],
  "api::sidebar.sidebar": ["find"],
  "api::topbar.topbar": ["find"],
  "api::navbar.navbar": ["find"],
  "api::footer.footer": ["find"],
  "api::layout.layout": ["find"],
  "api::metatag.metatag": ["find"],
  "api::page.page": ["find", "findOne"],
};

module.exports = () => ({
  authenticated: {
    role: 1,
    actions: {
      ...spsLitePublicActions,
      "plugin::content-type-builder.components": [],
      "plugin::content-type-builder.content-types": [],
      "plugin::email.email": [],
      "plugin::i18n.locales": [],
      "plugin::users-permissions.auth": [],
      "plugin::users-permissions.user": [],
      "plugin::users-permissions.role": [],
      "plugin::users-permissions.permission": [],
      "plugin::upload.content-api": [],
    },
  },
  public: {
    role: 2,
    actions: {
      ...spsLitePublicActions,
      "plugin::content-type-builder.components": [],
      "plugin::content-type-builder.content-types": [],
      "plugin::email.email": [],
      "plugin::upload.content-api": [],
      "plugin::i18n.locales": [],
      "plugin::users-permissions.auth": [],
      "plugin::users-permissions.user": [],
      "plugin::users-permissions.role": [],
      "plugin::users-permissions.permissiosn": [],
    },
  },
});
```
