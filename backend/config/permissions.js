const spsLitePublicActions = {
  "api::modal.modal": ["find", "findOne"],
  "api::slider.slider": ["find", "findOne"],
  "api::theme.theme": ["find"],
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
  "api::flyout-menu.flyout-menu": ["find", "findOne"],
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
