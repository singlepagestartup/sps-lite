---
sidebar_position: 5
---

# Automatic users-permissions setup

By default, these rights are manually assigned on each running machine, as this information is recorded in the database.

Strapi has a functionality for [separating access rights to models](https://docs.strapi.io/user-docs/users-roles-permissions).

To simplify working with this plugin, Single Page Startup has a function that sets the necessary access rights to models when the application starts up. This function is launched in the file `./backend/src/index.js`.

```javascript title="./backend/src/index.js"
'use strict';
...
const setPermissions = require("./utils/bootstrap/set-permissions");

module.exports = {
    async bootstrap({ strapi }) {
      ...
      await setPermissions();

      ...
    },
};
```

This function sets the parameters described in the file `./backend/config/permissions.js`. The keys in the `spsLitePublicActions` object correspond to the models, and an array of strings corresponds to the names of the handlers specified in the model controller.

```javascript title="./backend/config/permissions.js"
const spsLitePublicActions = {
  "api::modal.modal": ["find", "findOne"],
  "api::slider.slider": ["find", "findOne"],
  "api::theme.theme": ["find"],
  "api::robot.robot": ["find"],
  "api::form.form": ["find", "findOne"],
  "api::form-request.form-request": ["create"],
  "api::review.review": ["find", "findOne"],
  "api::tier.tier": ["find", "findOne"],
  "api::currency.currency": ["find", "findOne"],
  "api::slide-over.slide-over": ["find", "findOne"],
  "api::sidebar.sidebar": ["find", "findOne"],
  "api::topbar.topbar": ["find", "findOne"],
  "api::navbar.navbar": ["find", "findOne"],
  "api::footer.footer": ["find", "findOne"],
  "api::layout.layout": ["find", "findOne"],
  "api::metatag.metatag": ["find", "findOne"],
  "api::flyout.flyout": ["find", "findOne"],
  "api::page.page": ["find", "findOne"],
  "plugin::users-permissions.auth": [],
  "plugin::users-permissions.user": [],
  "plugin::users-permissions.role": [],
  "plugin::i18n.locales": ["listLocales"],
  "plugin::email.email": [],
  "plugin::users-permissions.permissions": [],
  "plugin::upload.content-api": [],
  "plugin::content-type-builder.components": [],
  "plugin::content-type-builder.content-types": [],
};

const spsLiteAuthenticatedActions = {
  ...spsLitePublicActions,
};

module.exports = () => ({
  authenticated: {
    role: 1,
    actions: {
      ...spsLiteAuthenticatedActions,
    },
  },
  public: {
    role: 2,
    actions: {
      ...spsLitePublicActions,
    },
  },
});
```
