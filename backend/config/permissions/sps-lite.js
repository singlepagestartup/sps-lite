const public = {
  "plugin::sps-website-builder.modal": ["find", "findOne"],
  "plugin::sps-website-builder.slider": ["find", "findOne"],
  "plugin::sps-website-builder.theme": ["find"],
  "plugin::sps-website-builder.robot": ["find"],
  "plugin::sps-crm.form": ["find", "findOne"],
  "plugin::sps-crm.form-request": ["create"],
  "plugin::sps-crm.review": ["find", "findOne"],
  "plugin::sps-billing.tier": ["find", "findOne"],
  "plugin::sps-billing.currency": ["find", "findOne"],
  "plugin::sps-website-builder.slide-over": ["find", "findOne"],
  "plugin::sps-website-builder.sidebar": ["find", "findOne"],
  "plugin::sps-website-builder.topbar": ["find", "findOne"],
  "plugin::sps-website-builder.navbar": ["find", "findOne"],
  "plugin::sps-website-builder.footer": ["find", "findOne"],
  "plugin::sps-website-builder.layout": ["find", "findOne", "findByPageUrl"],
  "plugin::sps-website-builder.metatag": ["find", "findOne"],
  "plugin::sps-website-builder.flyout": ["find", "findOne"],
  "plugin::sps-website-builder.page": [
    "find",
    "findOne",
    "getByUrl",
    "getUrls",
  ],
  "plugin::sps-website-builder.loader": ["find"],
  "plugin::sps-notification.telegram": ["webhook"],
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

const authenticated = {
  ...public,
};

module.exports = {
  authenticated,
  public,
};
