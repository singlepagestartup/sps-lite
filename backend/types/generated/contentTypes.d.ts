import type { Schema, Attribute } from "@strapi/strapi";

export interface AdminPermission extends Schema.CollectionType {
  collectionName: "admin_permissions";
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: "admin_users";
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: "admin_roles";
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
    permissions: Attribute.Relation<
      "admin::role",
      "oneToMany",
      "admin::permission"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: "strapi_api_tokens";
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    type: Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Attribute.Required &
      Attribute.DefaultTo<"read-only">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      "admin::api-token",
      "oneToMany",
      "admin::api-token-permission"
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_api_token_permissions";
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      "admin::api-token-permission",
      "manyToOne",
      "admin::api-token"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: "strapi_transfer_tokens";
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      "admin::transfer-token",
      "oneToMany",
      "admin::transfer-token-permission"
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      "admin::transfer-token-permission",
      "manyToOne",
      "admin::transfer-token"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: "files";
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
    folder: Attribute.Relation<
      "plugin::upload.file",
      "manyToOne",
      "plugin::upload.folder"
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: "upload_folders";
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      "plugin::upload.folder",
      "manyToOne",
      "plugin::upload.folder"
    >;
    children: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.folder"
    >;
    files: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.file"
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: "i18n_locale";
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: "up_permissions";
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      "plugin::users-permissions.permission",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: "up_roles";
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.user"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: "up_users";
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      "plugin::users-permissions.user",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginEmailDesignerEmailTemplate
  extends Schema.CollectionType {
  collectionName: "email_templates";
  info: {
    singularName: "email-template";
    pluralName: "email-templates";
    displayName: "Email-template";
    name: "email-template";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
    increments: true;
    comment: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    templateReferenceId: Attribute.Integer & Attribute.Unique;
    design: Attribute.JSON;
    name: Attribute.String;
    subject: Attribute.String;
    bodyHtml: Attribute.Text;
    bodyText: Attribute.Text;
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    tags: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::email-designer.email-template",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::email-designer.email-template",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiConfigurationConfiguration extends Schema.SingleType {
  collectionName: "configurations";
  info: {
    singularName: "configuration";
    pluralName: "configurations";
    displayName: "Configuration";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    configs: Attribute.Component<"functions.config", true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::configuration.configuration",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::configuration.configuration",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: "currencies";
  info: {
    singularName: "currency";
    pluralName: "currencies";
    displayName: "Currency";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    unicode: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    is_default: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tiers: Attribute.Relation<
      "api::currency.currency",
      "oneToMany",
      "api::tier.tier"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::currency.currency",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::currency.currency",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::currency.currency",
      "oneToMany",
      "api::currency.currency"
    >;
    locale: Attribute.String;
  };
}

export interface ApiFlyoutFlyout extends Schema.CollectionType {
  collectionName: "flyouts";
  info: {
    singularName: "flyout";
    pluralName: "flyouts";
    displayName: "Flyout";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"simple">;
    page_blocks: Attribute.DynamicZone<
      [
        "elements.buttons-array",
        "elements.button",
        "page-blocks.hero-section-block",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    uid: Attribute.UID<"api::flyout.flyout", "title"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::flyout.flyout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::flyout.flyout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::flyout.flyout",
      "oneToMany",
      "api::flyout.flyout"
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.CollectionType {
  collectionName: "footers";
  info: {
    singularName: "footer";
    pluralName: "footers";
    displayName: "Footer";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    uid: Attribute.UID<"api::footer.footer", "title"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::footer.footer",
      "oneToMany",
      "api::layout.layout"
    >;
    page_blocks: Attribute.DynamicZone<["page-blocks.footer-block"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["boxed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"boxed">;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::footer.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::footer.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::footer.footer",
      "oneToMany",
      "api::footer.footer"
    >;
    locale: Attribute.String;
  };
}

export interface ApiFormForm extends Schema.CollectionType {
  collectionName: "forms";
  info: {
    singularName: "form";
    pluralName: "forms";
    displayName: "Form";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    inputs: Attribute.Component<"elements.input", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    class_name: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    additional_attributes: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"simple">;
    button: Attribute.Component<"elements.button"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    form_requests: Attribute.Relation<
      "api::form.form",
      "oneToMany",
      "api::form-request.form-request"
    >;
    uid: Attribute.UID<"api::form.form", "title"> & Attribute.Required;
    side_effects: Attribute.Component<"functions.form-side-effect", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::form.form", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"api::form.form", "oneToOne", "admin::user"> &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::form.form",
      "oneToMany",
      "api::form.form"
    >;
    locale: Attribute.String;
  };
}

export interface ApiFormRequestFormRequest extends Schema.CollectionType {
  collectionName: "form_requests";
  info: {
    singularName: "form-request";
    pluralName: "form-requests";
    displayName: "Form Request";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    inputs: Attribute.Component<"elements.request-input", true>;
    files: Attribute.Media;
    form: Attribute.Relation<
      "api::form-request.form-request",
      "manyToOne",
      "api::form.form"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::form-request.form-request",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::form-request.form-request",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiLayoutLayout extends Schema.CollectionType {
  collectionName: "layouts";
  info: {
    singularName: "layout";
    pluralName: "layouts";
    displayName: "Layout";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    uid: Attribute.UID<"api::layout.layout", "title"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sidebar: Attribute.Relation<
      "api::layout.layout",
      "manyToOne",
      "api::sidebar.sidebar"
    >;
    variant: Attribute.Enumeration<["wide", "boxed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"wide">;
    topbar: Attribute.Relation<
      "api::layout.layout",
      "manyToOne",
      "api::topbar.topbar"
    >;
    footer: Attribute.Relation<
      "api::layout.layout",
      "manyToOne",
      "api::footer.footer"
    >;
    slide_overs: Attribute.Relation<
      "api::layout.layout",
      "manyToMany",
      "api::slide-over.slide-over"
    >;
    modals: Attribute.Relation<
      "api::layout.layout",
      "manyToMany",
      "api::modal.modal"
    >;
    navbar: Attribute.Relation<
      "api::layout.layout",
      "manyToOne",
      "api::navbar.navbar"
    >;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pages: Attribute.Relation<
      "api::layout.layout",
      "oneToMany",
      "api::page.page"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::layout.layout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::layout.layout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::layout.layout",
      "oneToMany",
      "api::layout.layout"
    >;
    locale: Attribute.String;
  };
}

export interface ApiLoaderLoader extends Schema.SingleType {
  collectionName: "loaders";
  info: {
    singularName: "loader";
    pluralName: "loaders";
    displayName: "Loader";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.DefaultTo<"simple">;
    media: Attribute.Media;
    additional_media: Attribute.Media;
    class_name: Attribute.String;
    anchor: Attribute.String;
    title: Attribute.RichText;
    subtitle: Attribute.RichText;
    description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::loader.loader",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::loader.loader",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiMetatagMetatag extends Schema.CollectionType {
  collectionName: "metatags";
  info: {
    singularName: "metatag";
    pluralName: "metatags";
    displayName: "Metatag";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    script: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    gtm_key: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    favicon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pages: Attribute.Relation<
      "api::metatag.metatag",
      "oneToMany",
      "api::page.page"
    >;
    is_default: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::metatag.metatag",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::metatag.metatag",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::metatag.metatag",
      "oneToMany",
      "api::metatag.metatag"
    >;
    locale: Attribute.String;
  };
}

export interface ApiModalModal extends Schema.CollectionType {
  collectionName: "modals";
  info: {
    singularName: "modal";
    pluralName: "modals";
    displayName: "Modal";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    uid: Attribute.UID<"api::modal.modal", "title"> & Attribute.Required;
    page_blocks: Attribute.DynamicZone<
      [
        "page-blocks.hero-section-block",
        "page-blocks.header-section-block",
        "page-blocks.faqs-block",
        "page-blocks.slider-block",
        "page-blocks.alert-block",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dialog_panel_class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["simple"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"simple">;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::modal.modal",
      "manyToMany",
      "api::layout.layout"
    >;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::modal.modal",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::modal.modal",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::modal.modal",
      "oneToMany",
      "api::modal.modal"
    >;
    locale: Attribute.String;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: "navbars";
  info: {
    singularName: "navbar";
    pluralName: "navbars";
    displayName: "Navbar";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    uid: Attribute.UID<"api::navbar.navbar", "title"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    page_blocks: Attribute.DynamicZone<["page-blocks.navbar-block"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["boxed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"boxed">;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::navbar.navbar",
      "oneToMany",
      "api::layout.layout"
    >;
    position: Attribute.Enumeration<["fixed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"fixed">;
    side: Attribute.Enumeration<["top"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"top">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::navbar.navbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::navbar.navbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::navbar.navbar",
      "oneToMany",
      "api::navbar.navbar"
    >;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: "pages";
  info: {
    singularName: "page";
    pluralName: "pages";
    displayName: "Page";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    layout: Attribute.Relation<
      "api::page.page",
      "manyToOne",
      "api::layout.layout"
    >;
    page_blocks: Attribute.DynamicZone<
      [
        "page-blocks.hero-section-block",
        "page-blocks.incentives-block",
        "page-blocks.header-section-block",
        "page-blocks.contact-section-block",
        "page-blocks.cta-section-block",
        "page-blocks.faqs-block",
        "page-blocks.features-section-block",
        "page-blocks.logotypes-cloud-block",
        "page-blocks.not-found-block",
        "page-blocks.pricing-block",
        "page-blocks.reviews-table-block",
        "page-blocks.slider-block",
        "elements.buttons-array",
        "elements.button",
        "page-blocks.reviews-list-block",
        "page-blocks.alert-block",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metatag: Attribute.Relation<
      "api::page.page",
      "manyToOne",
      "api::metatag.metatag"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::page.page",
      "oneToMany",
      "api::page.page"
    >;
    locale: Attribute.String;
  };
}

export interface ApiReviewReview extends Schema.CollectionType {
  collectionName: "reviews";
  info: {
    singularName: "review";
    pluralName: "reviews";
    displayName: "Review";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.RichText;
    title: Attribute.RichText;
    description: Attribute.RichText;
    subtitle: Attribute.RichText;
    rating: Attribute.Integer;
    media: Attribute.Media;
    additional_media: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::review.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiRobotRobot extends Schema.SingleType {
  collectionName: "robots";
  info: {
    singularName: "robot";
    pluralName: "robots";
    displayName: "Robot";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    robots: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::robot.robot",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::robot.robot",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiSidebarSidebar extends Schema.CollectionType {
  collectionName: "sidebars";
  info: {
    singularName: "sidebar";
    pluralName: "sidebars";
    displayName: "Sidebar";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    variant: Attribute.Enumeration<["one-quarter"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"one-quarter">;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    uid: Attribute.UID<"api::sidebar.sidebar", "title"> & Attribute.Required;
    page_blocks: Attribute.DynamicZone<
      [
        "page-blocks.hero-section-block",
        "page-blocks.header-section-block",
        "elements.button",
        "elements.buttons-array",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::sidebar.sidebar",
      "oneToMany",
      "api::layout.layout"
    >;
    side: Attribute.Enumeration<["left", "right"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"left">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::sidebar.sidebar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::sidebar.sidebar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::sidebar.sidebar",
      "oneToMany",
      "api::sidebar.sidebar"
    >;
    locale: Attribute.String;
  };
}

export interface ApiSlideOverSlideOver extends Schema.CollectionType {
  collectionName: "slide_overs";
  info: {
    singularName: "slide-over";
    pluralName: "slide-overs";
    displayName: "Slide Over";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    variant: Attribute.Enumeration<["right-side-half-width"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"right-side-half-width">;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    uid: Attribute.UID<"api::slide-over.slide-over", "title"> &
      Attribute.Required;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    page_blocks: Attribute.DynamicZone<["page-blocks.faqs-block"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::slide-over.slide-over",
      "manyToMany",
      "api::layout.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::slide-over.slide-over",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::slide-over.slide-over",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::slide-over.slide-over",
      "oneToMany",
      "api::slide-over.slide-over"
    >;
    locale: Attribute.String;
  };
}

export interface ApiSliderSlider extends Schema.CollectionType {
  collectionName: "sliders";
  info: {
    singularName: "slider";
    pluralName: "sliders";
    displayName: "Slider";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    variant: Attribute.Enumeration<["fade-with-previews"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"fade-with-previews">;
    slides: Attribute.Component<"elements.slide", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    show_backdrop: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    show_full_screen: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    show_previews: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aspect_ratio_class_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"aspect-h-1 aspect-w-1 xl:aspect-w-15 xl:aspect-h-10">;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    uid: Attribute.UID<"api::slider.slider", "title">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::slider.slider",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::slider.slider",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::slider.slider",
      "oneToMany",
      "api::slider.slider"
    >;
    locale: Attribute.String;
  };
}

export interface ApiTelegramTelegram extends Schema.CollectionType {
  collectionName: "telegrams";
  info: {
    singularName: "telegram";
    pluralName: "telegrams";
    displayName: "Telegram";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::telegram.telegram",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::telegram.telegram",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiThemeTheme extends Schema.SingleType {
  collectionName: "themes";
  info: {
    singularName: "theme";
    pluralName: "themes";
    displayName: "Theme";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    theme: Attribute.JSON;
    fonts: Attribute.Component<"elements.font", true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::theme.theme",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::theme.theme",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiTierTier extends Schema.CollectionType {
  collectionName: "tiers";
  info: {
    singularName: "tier";
    pluralName: "tiers";
    displayName: "Tier";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    price: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currency: Attribute.Relation<
      "api::tier.tier",
      "manyToOne",
      "api::currency.currency"
    >;
    type: Attribute.Enumeration<["one-time", "regularly"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    period: Attribute.Integer &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    features: Attribute.Component<"elements.feature", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    old_price: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    buttons: Attribute.Component<"elements.button", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::tier.tier", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"api::tier.tier", "oneToOne", "admin::user"> &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::tier.tier",
      "oneToMany",
      "api::tier.tier"
    >;
    locale: Attribute.String;
  };
}

export interface ApiTopbarTopbar extends Schema.CollectionType {
  collectionName: "topbars";
  info: {
    singularName: "topbar";
    pluralName: "topbars";
    displayName: "Topbar";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    uid: Attribute.UID<"api::topbar.topbar", "title"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["boxed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"boxed">;
    page_blocks: Attribute.DynamicZone<["elements.button"]> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "api::topbar.topbar",
      "oneToMany",
      "api::layout.layout"
    >;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    position: Attribute.Enumeration<["fixed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"fixed">;
    side: Attribute.Enumeration<["top"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"top">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::topbar.topbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::topbar.topbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::topbar.topbar",
      "oneToMany",
      "api::topbar.topbar"
    >;
    locale: Attribute.String;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface ContentTypes {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "plugin::email-designer.email-template": PluginEmailDesignerEmailTemplate;
      "api::configuration.configuration": ApiConfigurationConfiguration;
      "api::currency.currency": ApiCurrencyCurrency;
      "api::flyout.flyout": ApiFlyoutFlyout;
      "api::footer.footer": ApiFooterFooter;
      "api::form.form": ApiFormForm;
      "api::form-request.form-request": ApiFormRequestFormRequest;
      "api::layout.layout": ApiLayoutLayout;
      "api::loader.loader": ApiLoaderLoader;
      "api::metatag.metatag": ApiMetatagMetatag;
      "api::modal.modal": ApiModalModal;
      "api::navbar.navbar": ApiNavbarNavbar;
      "api::page.page": ApiPagePage;
      "api::review.review": ApiReviewReview;
      "api::robot.robot": ApiRobotRobot;
      "api::sidebar.sidebar": ApiSidebarSidebar;
      "api::slide-over.slide-over": ApiSlideOverSlideOver;
      "api::slider.slider": ApiSliderSlider;
      "api::telegram.telegram": ApiTelegramTelegram;
      "api::theme.theme": ApiThemeTheme;
      "api::tier.tier": ApiTierTier;
      "api::topbar.topbar": ApiTopbarTopbar;
    }
  }
}
