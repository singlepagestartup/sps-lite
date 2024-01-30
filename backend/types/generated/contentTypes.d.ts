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

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: "strapi_releases";
  info: {
    singularName: "release";
    pluralName: "releases";
    displayName: "Release";
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
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      "plugin::content-releases.release",
      "oneToMany",
      "plugin::content-releases.release-action"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::content-releases.release",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::content-releases.release",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: "strapi_release_actions";
  info: {
    singularName: "release-action";
    pluralName: "release-actions";
    displayName: "Release Action";
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
    type: Attribute.Enumeration<["publish", "unpublish"]> & Attribute.Required;
    entry: Attribute.Relation<
      "plugin::content-releases.release-action",
      "morphToOne"
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      "plugin::content-releases.release-action",
      "manyToOne",
      "plugin::content-releases.release"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::content-releases.release-action",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::content-releases.release-action",
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
    form_requests: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToMany",
      "plugin::sps-crm.form-request"
    >;
    reviews: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToMany",
      "plugin::sps-crm.review"
    >;
    cart: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "plugin::sps-ecommerce.cart"
    >;
    orders: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToMany",
      "plugin::sps-ecommerce.order"
    >;
    subscriptions: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToMany",
      "plugin::sps-subscription.subscription"
    >;
    notifications: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToMany",
      "plugin::sps-notification.notification"
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

export interface PluginSpsBillingCurrency extends Schema.CollectionType {
  collectionName: "sps_billing_currencies";
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
    attributes: Attribute.Relation<
      "plugin::sps-billing.currency",
      "oneToMany",
      "plugin::sps-ecommerce.attribute"
    >;
    tiers: Attribute.Relation<
      "plugin::sps-billing.currency",
      "oneToMany",
      "plugin::sps-subscription.tier"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-billing.currency",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-billing.currency",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-billing.currency",
      "oneToMany",
      "plugin::sps-billing.currency"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsBillingInvoice extends Schema.CollectionType {
  collectionName: "sps_billing_invoices";
  info: {
    singularName: "invoice";
    pluralName: "invoices";
    displayName: "Invoice";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sign: Attribute.Text & Attribute.Private;
    status: Attribute.Enumeration<["new", "pending", "success", "failed"]> &
      Attribute.Required &
      Attribute.DefaultTo<"new">;
    provider: Attribute.Enumeration<["stripe", "zero_x_processing"]> &
      Attribute.Required &
      Attribute.DefaultTo<"stripe">;
    provider_data: Attribute.JSON & Attribute.Private;
    amount: Attribute.Float & Attribute.Required;
    currency: Attribute.String;
    payment_url: Attribute.Text;
    redirect_to: Attribute.String & Attribute.DefaultTo<"/">;
    chain: Attribute.Enumeration<["erc20"]> & Attribute.DefaultTo<"erc20">;
    orders: Attribute.Relation<
      "plugin::sps-billing.invoice",
      "oneToMany",
      "plugin::sps-ecommerce.order"
    >;
    subscription: Attribute.Relation<
      "plugin::sps-billing.invoice",
      "manyToOne",
      "plugin::sps-subscription.subscription"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-billing.invoice",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-billing.invoice",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsSubscriptionAttachment extends Schema.CollectionType {
  collectionName: "sps_subscription_attachments";
  info: {
    singularName: "attachment";
    pluralName: "attachments";
    displayName: "Attachment";
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
    tiers: Attribute.Relation<
      "plugin::sps-subscription.attachment",
      "manyToMany",
      "plugin::sps-subscription.tier"
    > &
      Attribute.Private;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-subscription.attachment",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-subscription.attachment",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-subscription.attachment",
      "oneToMany",
      "plugin::sps-subscription.attachment"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsSubscriptionAttribute extends Schema.CollectionType {
  collectionName: "sps_subscription_attributes";
  info: {
    singularName: "attribute";
    pluralName: "attributes";
    displayName: "Attribute";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    attribute_key: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "manyToOne",
      "plugin::sps-subscription.attribute-key"
    >;
    string: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    number: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    boolean: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    date: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    datetime: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    time: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    additional_media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currency: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "manyToOne",
      "plugin::sps-billing.currency"
    >;
    tiers: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "manyToMany",
      "plugin::sps-subscription.tier"
    >;
    subscriptions: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "manyToMany",
      "plugin::sps-subscription.subscription"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-subscription.attribute",
      "oneToMany",
      "plugin::sps-subscription.attribute"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsSubscriptionAttributeKey
  extends Schema.CollectionType {
  collectionName: "sps_subscription_attribute_keys";
  info: {
    singularName: "attribute-key";
    pluralName: "attribute-keys";
    displayName: "Attribute Key";
    description: "";
  };
  options: {
    draftAndPublish: false;
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
    attributes: Attribute.Relation<
      "plugin::sps-subscription.attribute-key",
      "oneToMany",
      "plugin::sps-subscription.attribute"
    >;
    type: Attribute.Enumeration<
      ["string", "number", "boolean", "date", "datetime", "time"]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<"string">;
    key: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    prefix: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    postfix: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_multiple: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    operator: Attribute.Enumeration<["min", "max", "equal"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<"equal">;
    inversed: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    not_to_clear: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-subscription.attribute-key",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-subscription.attribute-key",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-subscription.attribute-key",
      "oneToMany",
      "plugin::sps-subscription.attribute-key"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsSubscriptionSubscription
  extends Schema.CollectionType {
  collectionName: "sps_subscription_subscriptions";
  info: {
    singularName: "subscription";
    pluralName: "subscriptions";
    displayName: "Subscription";
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
    tier: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "manyToOne",
      "plugin::sps-subscription.tier"
    >;
    user: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "manyToOne",
      "plugin::users-permissions.user"
    >;
    status: Attribute.Enumeration<["new", "payment", "paid", "canceled"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"new">;
    invoices: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "oneToMany",
      "plugin::sps-billing.invoice"
    >;
    attributes: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "manyToMany",
      "plugin::sps-subscription.attribute"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-subscription.subscription",
      "oneToMany",
      "plugin::sps-subscription.subscription"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsSubscriptionTier extends Schema.CollectionType {
  collectionName: "sps_subscription_tiers";
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
    buttons: Attribute.Component<"elements.button", true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    attachments: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "manyToMany",
      "plugin::sps-subscription.attachment"
    > &
      Attribute.Private;
    subscriptions: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "oneToMany",
      "plugin::sps-subscription.subscription"
    >;
    attributes: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "manyToMany",
      "plugin::sps-subscription.attribute"
    >;
    currency: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "manyToOne",
      "plugin::sps-billing.currency"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-subscription.tier",
      "oneToMany",
      "plugin::sps-subscription.tier"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsEcommerceAttribute extends Schema.CollectionType {
  collectionName: "sps_ecommerce_attributes";
  info: {
    singularName: "attribute";
    pluralName: "attributes";
    displayName: "Attribute";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    attribute_key: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "manyToOne",
      "plugin::sps-ecommerce.attribute-key"
    >;
    string: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    number: Attribute.Float &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    boolean: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "manyToMany",
      "plugin::sps-ecommerce.product"
    >;
    date: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    datetime: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    time: Attribute.Time &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    additional_media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    currency: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "manyToOne",
      "plugin::sps-billing.currency"
    >;
    order_products: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "manyToMany",
      "plugin::sps-ecommerce.order-product"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-ecommerce.attribute",
      "oneToMany",
      "plugin::sps-ecommerce.attribute"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsEcommerceAttributeKey extends Schema.CollectionType {
  collectionName: "sps_ecommerce_attribute_keys";
  info: {
    singularName: "attribute-key";
    pluralName: "attribute-keys";
    displayName: "Attribute Key";
    description: "";
  };
  options: {
    draftAndPublish: false;
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
    attributes: Attribute.Relation<
      "plugin::sps-ecommerce.attribute-key",
      "oneToMany",
      "plugin::sps-ecommerce.attribute"
    >;
    type: Attribute.Enumeration<
      ["string", "number", "boolean", "date", "datetime", "time"]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<"string">;
    key: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    prefix: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    postfix: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_multiple: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    operator: Attribute.Enumeration<["min", "max", "equal"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<"equal">;
    inversed: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    not_to_clear: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.attribute-key",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.attribute-key",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-ecommerce.attribute-key",
      "oneToMany",
      "plugin::sps-ecommerce.attribute-key"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsEcommerceCart extends Schema.CollectionType {
  collectionName: "sps_ecommerce_carts";
  info: {
    singularName: "cart";
    pluralName: "carts";
    displayName: "Cart";
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
    user: Attribute.Relation<
      "plugin::sps-ecommerce.cart",
      "oneToOne",
      "plugin::users-permissions.user"
    >;
    orders: Attribute.Relation<
      "plugin::sps-ecommerce.cart",
      "oneToMany",
      "plugin::sps-ecommerce.order"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.cart",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.cart",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-ecommerce.cart",
      "oneToMany",
      "plugin::sps-ecommerce.cart"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsEcommerceOrder extends Schema.CollectionType {
  collectionName: "sps_ecommerce_orders";
  info: {
    singularName: "order";
    pluralName: "orders";
    displayName: "Order";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    user: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "manyToOne",
      "plugin::users-permissions.user"
    >;
    status: Attribute.Enumeration<
      [
        "cart",
        "payment",
        "new",
        "paid",
        "canceled",
        "confirmed",
        "shipping",
        "delivered",
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<"cart">;
    name: Attribute.String;
    surname: Attribute.String;
    patronymic: Attribute.String;
    phone: Attribute.String;
    comment: Attribute.Text;
    email: Attribute.Email;
    cart: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "manyToOne",
      "plugin::sps-ecommerce.cart"
    >;
    invoice: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "manyToOne",
      "plugin::sps-billing.invoice"
    >;
    order_products: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "oneToMany",
      "plugin::sps-ecommerce.order-product"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.order",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsEcommerceOrderProduct extends Schema.CollectionType {
  collectionName: "sps_ecommerce_orders_products";
  info: {
    singularName: "order-product";
    pluralName: "orders-products";
    displayName: "Order Product";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    order: Attribute.Relation<
      "plugin::sps-ecommerce.order-product",
      "manyToOne",
      "plugin::sps-ecommerce.order"
    >;
    product: Attribute.Relation<
      "plugin::sps-ecommerce.order-product",
      "manyToOne",
      "plugin::sps-ecommerce.product"
    >;
    attributes: Attribute.Relation<
      "plugin::sps-ecommerce.order-product",
      "manyToMany",
      "plugin::sps-ecommerce.attribute"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.order-product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.order-product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsEcommerceProduct extends Schema.CollectionType {
  collectionName: "sps_ecommerce_products";
  info: {
    singularName: "product";
    pluralName: "products";
    displayName: "Product";
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
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    attributes: Attribute.Relation<
      "plugin::sps-ecommerce.product",
      "manyToMany",
      "plugin::sps-ecommerce.attribute"
    >;
    full_description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    order_products: Attribute.Relation<
      "plugin::sps-ecommerce.product",
      "oneToMany",
      "plugin::sps-ecommerce.order-product"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-ecommerce.product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-ecommerce.product",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-ecommerce.product",
      "oneToMany",
      "plugin::sps-ecommerce.product"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsMigrateDumper extends Schema.CollectionType {
  collectionName: "sps_migrate_dumpers";
  info: {
    singularName: "dumper";
    pluralName: "dumpers";
    displayName: "Dumper";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-migrate.dumper",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-migrate.dumper",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsMigrateEntity extends Schema.CollectionType {
  collectionName: "sps_migrate_entites";
  info: {
    singularName: "entity";
    pluralName: "entities";
    displayName: "Entity";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-migrate.entity",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-migrate.entity",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsMigrateParameter extends Schema.CollectionType {
  collectionName: "sps_migrate_parameters";
  info: {
    singularName: "parameter";
    pluralName: "parameters";
    displayName: "Parameter";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-migrate.parameter",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-migrate.parameter",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsMigrateSeeder extends Schema.CollectionType {
  collectionName: "sps_migrate_seeders";
  info: {
    singularName: "seeder";
    pluralName: "seeders";
    displayName: "Seeder";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-migrate.seeder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-migrate.seeder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsCrmConfiguration extends Schema.SingleType {
  collectionName: "sps_crm_configurations";
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
      "plugin::sps-crm.configuration",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-crm.configuration",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsCrmForm extends Schema.CollectionType {
  collectionName: "sps_crm_forms";
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
    uid: Attribute.UID<"plugin::sps-crm.form", "title"> & Attribute.Required;
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
    createdBy: Attribute.Relation<
      "plugin::sps-crm.form",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-crm.form",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-crm.form",
      "oneToMany",
      "plugin::sps-crm.form"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsCrmFormRequest extends Schema.CollectionType {
  collectionName: "sps_crm_form_requests";
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
    user: Attribute.Relation<
      "plugin::sps-crm.form-request",
      "manyToOne",
      "plugin::users-permissions.user"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-crm.form-request",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-crm.form-request",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsCrmReview extends Schema.CollectionType {
  collectionName: "sps_crm_reviews";
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
      "plugin::sps-crm.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-crm.review",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsNotificationNotification
  extends Schema.CollectionType {
  collectionName: "sps_notification_notifications";
  info: {
    singularName: "notification";
    pluralName: "notifications";
    displayName: "Notification";
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
    subtitle: Attribute.RichText &
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
    json: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    html: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    user: Attribute.Relation<
      "plugin::sps-notification.notification",
      "manyToOne",
      "plugin::users-permissions.user"
    >;
    was_read: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-notification.notification",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-notification.notification",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-notification.notification",
      "oneToMany",
      "plugin::sps-notification.notification"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsNotificationTelegram extends Schema.CollectionType {
  collectionName: "sps_notification_telegrams";
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
      "plugin::sps-notification.telegram",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-notification.telegram",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsWebsiteBuilderComponent
  extends Schema.CollectionType {
  collectionName: "sps_wb_components";
  info: {
    singularName: "component";
    pluralName: "components";
    displayName: "Component";
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.component",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.component",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.component",
      "oneToMany",
      "plugin::sps-website-builder.component"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderFlyout extends Schema.CollectionType {
  collectionName: "sps_wb_flyouts";
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
          localized: true;
        };
      }>;
    uid: Attribute.UID<"plugin::sps-website-builder.flyout", "title"> &
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
      "plugin::sps-website-builder.flyout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.flyout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.flyout",
      "oneToMany",
      "plugin::sps-website-builder.flyout"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderFooter extends Schema.CollectionType {
  collectionName: "sps_wb_footers";
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
          localized: true;
        };
      }>;
    uid: Attribute.UID<"plugin::sps-website-builder.footer", "title"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
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
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.footer",
      "oneToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.footer",
      "oneToMany",
      "plugin::sps-website-builder.footer"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderLayout extends Schema.CollectionType {
  collectionName: "sps_wb_layouts";
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
          localized: true;
        };
      }>;
    uid: Attribute.UID<"plugin::sps-website-builder.layout", "title"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Attribute.Enumeration<["wide", "boxed"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"wide">;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    footer: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToOne",
      "plugin::sps-website-builder.footer"
    >;
    modals: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToMany",
      "plugin::sps-website-builder.modal"
    >;
    navbar: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToOne",
      "plugin::sps-website-builder.navbar"
    >;
    sidebar: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToOne",
      "plugin::sps-website-builder.sidebar"
    >;
    slide_overs: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToMany",
      "plugin::sps-website-builder.slide-over"
    >;
    topbar: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "manyToOne",
      "plugin::sps-website-builder.topbar"
    >;
    pages: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "oneToMany",
      "plugin::sps-website-builder.page"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.layout",
      "oneToMany",
      "plugin::sps-website-builder.layout"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderLoader extends Schema.SingleType {
  collectionName: "sps_wb_loaders";
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
      "plugin::sps-website-builder.loader",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.loader",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsWebsiteBuilderMetatag extends Schema.CollectionType {
  collectionName: "sps_wb_metatags";
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
      "plugin::sps-website-builder.metatag",
      "oneToMany",
      "plugin::sps-website-builder.page"
    >;
    is_default: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.metatag",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.metatag",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.metatag",
      "oneToMany",
      "plugin::sps-website-builder.metatag"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderModal extends Schema.CollectionType {
  collectionName: "sps_wb_modals";
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
    uid: Attribute.UID<"plugin::sps-website-builder.modal", "title"> &
      Attribute.Required;
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
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.modal",
      "manyToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.modal",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.modal",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.modal",
      "oneToMany",
      "plugin::sps-website-builder.modal"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderNavbar extends Schema.CollectionType {
  collectionName: "sps_wb_navbars";
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
          localized: true;
        };
      }>;
    uid: Attribute.UID<"plugin::sps-website-builder.navbar", "title"> &
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
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.navbar",
      "oneToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.navbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.navbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.navbar",
      "oneToMany",
      "plugin::sps-website-builder.navbar"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderPage extends Schema.CollectionType {
  collectionName: "sps_wb_pages";
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
        "page-blocks.tiers-list-block",
        "page-blocks.reviews-table-block",
        "page-blocks.slider-block",
        "elements.buttons-array",
        "elements.button",
        "page-blocks.reviews-list-block",
        "page-blocks.alert-block",
        "page-blocks.checkout-form-block",
        "page-blocks.products-list-block",
        "page-blocks.shopping-cart-block",
        "page-blocks.edit-subscription-block",
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layout: Attribute.Relation<
      "plugin::sps-website-builder.page",
      "manyToOne",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.page",
      "oneToMany",
      "plugin::sps-website-builder.page"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderRobot extends Schema.SingleType {
  collectionName: "sps_wb_robots";
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
      "plugin::sps-website-builder.robot",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.robot",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsWebsiteBuilderSidebar extends Schema.CollectionType {
  collectionName: "sps_wb_sidebars";
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
    uid: Attribute.UID<"plugin::sps-website-builder.sidebar", "title"> &
      Attribute.Required;
    page_blocks: Attribute.DynamicZone<
      [
        "page-blocks.hero-section-block",
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
    side: Attribute.Enumeration<["left", "right"]> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<"left">;
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.sidebar",
      "oneToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.sidebar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.sidebar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.sidebar",
      "oneToMany",
      "plugin::sps-website-builder.sidebar"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderSlideOver
  extends Schema.CollectionType {
  collectionName: "sps_wb_slide_overs";
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
    uid: Attribute.UID<"plugin::sps-website-builder.slide-over", "title"> &
      Attribute.Required;
    class_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    page_blocks: Attribute.DynamicZone<
      ["page-blocks.faqs-block", "page-blocks.shopping-cart-block"]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.slide-over",
      "manyToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.slide-over",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.slide-over",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.slide-over",
      "oneToMany",
      "plugin::sps-website-builder.slide-over"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderSlider extends Schema.CollectionType {
  collectionName: "sps_wb_sliders";
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
    uid: Attribute.UID<"plugin::sps-website-builder.slider", "title">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.slider",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.slider",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.slider",
      "oneToMany",
      "plugin::sps-website-builder.slider"
    >;
    locale: Attribute.String;
  };
}

export interface PluginSpsWebsiteBuilderTheme extends Schema.SingleType {
  collectionName: "sps_wb_themes";
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
      "plugin::sps-website-builder.theme",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.theme",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginSpsWebsiteBuilderTopbar extends Schema.CollectionType {
  collectionName: "sps_wb_topbars";
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
          localized: true;
        };
      }>;
    uid: Attribute.UID<"plugin::sps-website-builder.topbar", "title"> &
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
    layouts: Attribute.Relation<
      "plugin::sps-website-builder.topbar",
      "oneToMany",
      "plugin::sps-website-builder.layout"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::sps-website-builder.topbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::sps-website-builder.topbar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "plugin::sps-website-builder.topbar",
      "oneToMany",
      "plugin::sps-website-builder.topbar"
    >;
    locale: Attribute.String;
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
      "plugin::content-releases.release": PluginContentReleasesRelease;
      "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "plugin::sps-billing.currency": PluginSpsBillingCurrency;
      "plugin::sps-billing.invoice": PluginSpsBillingInvoice;
      "plugin::sps-subscription.attachment": PluginSpsSubscriptionAttachment;
      "plugin::sps-subscription.attribute": PluginSpsSubscriptionAttribute;
      "plugin::sps-subscription.attribute-key": PluginSpsSubscriptionAttributeKey;
      "plugin::sps-subscription.subscription": PluginSpsSubscriptionSubscription;
      "plugin::sps-subscription.tier": PluginSpsSubscriptionTier;
      "plugin::sps-ecommerce.attribute": PluginSpsEcommerceAttribute;
      "plugin::sps-ecommerce.attribute-key": PluginSpsEcommerceAttributeKey;
      "plugin::sps-ecommerce.cart": PluginSpsEcommerceCart;
      "plugin::sps-ecommerce.order": PluginSpsEcommerceOrder;
      "plugin::sps-ecommerce.order-product": PluginSpsEcommerceOrderProduct;
      "plugin::sps-ecommerce.product": PluginSpsEcommerceProduct;
      "plugin::sps-migrate.dumper": PluginSpsMigrateDumper;
      "plugin::sps-migrate.entity": PluginSpsMigrateEntity;
      "plugin::sps-migrate.parameter": PluginSpsMigrateParameter;
      "plugin::sps-migrate.seeder": PluginSpsMigrateSeeder;
      "plugin::sps-crm.configuration": PluginSpsCrmConfiguration;
      "plugin::sps-crm.form": PluginSpsCrmForm;
      "plugin::sps-crm.form-request": PluginSpsCrmFormRequest;
      "plugin::sps-crm.review": PluginSpsCrmReview;
      "plugin::sps-notification.notification": PluginSpsNotificationNotification;
      "plugin::sps-notification.telegram": PluginSpsNotificationTelegram;
      "plugin::sps-website-builder.component": PluginSpsWebsiteBuilderComponent;
      "plugin::sps-website-builder.flyout": PluginSpsWebsiteBuilderFlyout;
      "plugin::sps-website-builder.footer": PluginSpsWebsiteBuilderFooter;
      "plugin::sps-website-builder.layout": PluginSpsWebsiteBuilderLayout;
      "plugin::sps-website-builder.loader": PluginSpsWebsiteBuilderLoader;
      "plugin::sps-website-builder.metatag": PluginSpsWebsiteBuilderMetatag;
      "plugin::sps-website-builder.modal": PluginSpsWebsiteBuilderModal;
      "plugin::sps-website-builder.navbar": PluginSpsWebsiteBuilderNavbar;
      "plugin::sps-website-builder.page": PluginSpsWebsiteBuilderPage;
      "plugin::sps-website-builder.robot": PluginSpsWebsiteBuilderRobot;
      "plugin::sps-website-builder.sidebar": PluginSpsWebsiteBuilderSidebar;
      "plugin::sps-website-builder.slide-over": PluginSpsWebsiteBuilderSlideOver;
      "plugin::sps-website-builder.slider": PluginSpsWebsiteBuilderSlider;
      "plugin::sps-website-builder.theme": PluginSpsWebsiteBuilderTheme;
      "plugin::sps-website-builder.topbar": PluginSpsWebsiteBuilderTopbar;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::email-designer.email-template": PluginEmailDesignerEmailTemplate;
    }
  }
}
