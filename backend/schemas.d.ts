import {
    CollectionTypeSchema,
    StringAttribute,
    RequiredAttribute,
    SetMinMaxLength,
    JSONAttribute,
    DefaultTo,
    RelationAttribute,
    DateTimeAttribute,
    PrivateAttribute,
    EmailAttribute,
    UniqueAttribute,
    PasswordAttribute,
    BooleanAttribute,
    EnumerationAttribute,
    IntegerAttribute,
    SetMinMax,
    SetPluginOptions,
    UIDAttribute,
    RichTextAttribute,
    MediaAttribute,
    DecimalAttribute,
    ComponentAttribute,
    TextAttribute,
    ComponentSchema,
} from '@strapi/strapi';

export interface AdminPermission extends CollectionTypeSchema {
    info: {
        name: 'Permission';
        description: '';
        singularName: 'permission';
        pluralName: 'permissions';
        displayName: 'Permission';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: StringAttribute &
            RequiredAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        subject: StringAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        properties: JSONAttribute & DefaultTo<{}>;
        conditions: JSONAttribute & DefaultTo<[]>;
        role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface AdminUser extends CollectionTypeSchema {
    info: {
        name: 'User';
        description: '';
        singularName: 'user';
        pluralName: 'users';
        displayName: 'User';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        firstname: StringAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        lastname: StringAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        username: StringAttribute;
        email: EmailAttribute &
            RequiredAttribute &
            PrivateAttribute &
            UniqueAttribute &
            SetMinMaxLength<{
                minLength: 6;
            }>;
        password: PasswordAttribute &
            PrivateAttribute &
            SetMinMaxLength<{
                minLength: 6;
            }>;
        resetPasswordToken: StringAttribute & PrivateAttribute;
        registrationToken: StringAttribute & PrivateAttribute;
        isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
        roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> & PrivateAttribute;
        blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
        preferedLanguage: StringAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface AdminRole extends CollectionTypeSchema {
    info: {
        name: 'Role';
        description: '';
        singularName: 'role';
        pluralName: 'roles';
        displayName: 'Role';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute &
            RequiredAttribute &
            UniqueAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        code: StringAttribute &
            RequiredAttribute &
            UniqueAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        description: StringAttribute;
        users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>;
        permissions: RelationAttribute<'admin::role', 'oneToMany', 'admin::permission'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface AdminApiToken extends CollectionTypeSchema {
    info: {
        name: 'Api Token';
        singularName: 'api-token';
        pluralName: 'api-tokens';
        displayName: 'Api Token';
        description: '';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute &
            RequiredAttribute &
            UniqueAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        description: StringAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }> &
            DefaultTo<''>;
        type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
            RequiredAttribute &
            DefaultTo<'read-only'>;
        accessKey: StringAttribute &
            RequiredAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        lastUsedAt: DateTimeAttribute;
        permissions: RelationAttribute<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>;
        expiresAt: DateTimeAttribute;
        lifespan: IntegerAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
    info: {
        name: 'API Token Permission';
        description: '';
        singularName: 'api-token-permission';
        pluralName: 'api-token-permissions';
        displayName: 'API Token Permission';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: StringAttribute &
            RequiredAttribute &
            SetMinMaxLength<{
                minLength: 1;
            }>;
        token: RelationAttribute<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface ApiAttributeAttribute extends CollectionTypeSchema {
    info: {
        singularName: 'attribute';
        pluralName: 'attributes';
        displayName: 'Attribute';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    attributes: {
        key: RelationAttribute<'api::attribute.attribute', 'oneToOne', 'api::attribute-key.attribute-key'>;
        string: StringAttribute;
        number: IntegerAttribute &
            SetMinMax<{
                min: 0;
            }>;
        boolean: BooleanAttribute;
        products: RelationAttribute<'api::attribute.attribute', 'manyToMany', 'api::product.product'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'api::attribute.attribute', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'api::attribute.attribute', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface ApiAttributeKeyAttributeKey extends CollectionTypeSchema {
    info: {
        singularName: 'attribute-key';
        pluralName: 'attribute-keys';
        displayName: 'Attribute Key';
        description: '';
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
        title: StringAttribute &
            RequiredAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        key: UIDAttribute<'api::attribute-key.attribute-key', 'title'> &
            RequiredAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }> &
            SetMinMaxLength<{
                minLength: 2;
                maxLength: 32;
            }>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'api::attribute-key.attribute-key', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'api::attribute-key.attribute-key', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        localizations: RelationAttribute<
            'api::attribute-key.attribute-key',
            'oneToMany',
            'api::attribute-key.attribute-key'
        >;
        locale: StringAttribute;
    };
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
    info: {
        singularName: 'category';
        pluralName: 'categories';
        displayName: 'Category';
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
        products: RelationAttribute<'api::category.category', 'oneToMany', 'api::product.product'>;
        title: StringAttribute &
            RequiredAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        uid: UIDAttribute<'api::category.category', 'title'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        publishedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> & PrivateAttribute;
        localizations: RelationAttribute<'api::category.category', 'oneToMany', 'api::category.category'>;
        locale: StringAttribute;
    };
}

export interface ApiProductProduct extends CollectionTypeSchema {
    info: {
        singularName: 'product';
        pluralName: 'products';
        displayName: 'Product';
        description: '';
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
        title: StringAttribute &
            RequiredAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        uid: UIDAttribute<'api::product.product', 'title'>;
        price: IntegerAttribute &
            RequiredAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }> &
            SetMinMax<{
                min: 0;
            }>;
        description: RichTextAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        media: MediaAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }>;
        rating: IntegerAttribute &
            SetPluginOptions<{
                i18n: {
                    localized: true;
                };
            }> &
            SetMinMax<{
                min: 0;
            }>;
        category: RelationAttribute<'api::product.product', 'manyToOne', 'api::category.category'>;
        attributes: RelationAttribute<'api::product.product', 'manyToMany', 'api::attribute.attribute'>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        publishedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'api::product.product', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'api::product.product', 'oneToOne', 'admin::user'> & PrivateAttribute;
        localizations: RelationAttribute<'api::product.product', 'oneToMany', 'api::product.product'>;
        locale: StringAttribute;
    };
}

export interface PluginUploadFile extends CollectionTypeSchema {
    info: {
        singularName: 'file';
        pluralName: 'files';
        displayName: 'File';
        description: '';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute & RequiredAttribute;
        alternativeText: StringAttribute;
        caption: StringAttribute;
        width: IntegerAttribute;
        height: IntegerAttribute;
        formats: JSONAttribute;
        hash: StringAttribute & RequiredAttribute;
        ext: StringAttribute;
        mime: StringAttribute & RequiredAttribute;
        size: DecimalAttribute & RequiredAttribute;
        url: StringAttribute & RequiredAttribute;
        previewUrl: StringAttribute;
        provider: StringAttribute & RequiredAttribute;
        provider_metadata: JSONAttribute;
        related: RelationAttribute<'plugin::upload.file', 'morphToMany'>;
        folder: RelationAttribute<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
            PrivateAttribute;
        folderPath: StringAttribute &
            RequiredAttribute &
            PrivateAttribute &
            SetMinMax<{
                min: 1;
            }>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
    info: {
        singularName: 'folder';
        pluralName: 'folders';
        displayName: 'Folder';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute &
            RequiredAttribute &
            SetMinMax<{
                min: 1;
            }>;
        pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
        parent: RelationAttribute<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>;
        children: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>;
        files: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>;
        path: StringAttribute &
            RequiredAttribute &
            SetMinMax<{
                min: 1;
            }>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface PluginI18NLocale extends CollectionTypeSchema {
    info: {
        singularName: 'locale';
        pluralName: 'locales';
        collectionName: 'locales';
        displayName: 'Locale';
        description: '';
    };
    options: {
        draftAndPublish: false;
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute &
            SetMinMax<{
                min: 1;
                max: 50;
            }>;
        code: StringAttribute & UniqueAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & PrivateAttribute;
    };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
    info: {
        name: 'permission';
        description: '';
        singularName: 'permission';
        pluralName: 'permissions';
        displayName: 'Permission';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        action: StringAttribute & RequiredAttribute;
        role: RelationAttribute<
            'plugin::users-permissions.permission',
            'manyToOne',
            'plugin::users-permissions.role'
        >;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
    info: {
        name: 'role';
        description: '';
        singularName: 'role';
        pluralName: 'roles';
        displayName: 'Role';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        name: StringAttribute &
            RequiredAttribute &
            SetMinMaxLength<{
                minLength: 3;
            }>;
        description: StringAttribute;
        type: StringAttribute & UniqueAttribute;
        permissions: RelationAttribute<
            'plugin::users-permissions.role',
            'oneToMany',
            'plugin::users-permissions.permission'
        >;
        users: RelationAttribute<
            'plugin::users-permissions.role',
            'oneToMany',
            'plugin::users-permissions.user'
        >;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
    info: {
        name: 'user';
        description: '';
        singularName: 'user';
        pluralName: 'users';
        displayName: 'User';
    };
    options: {
        draftAndPublish: false;
        timestamps: true;
    };
    attributes: {
        username: StringAttribute &
            RequiredAttribute &
            UniqueAttribute &
            SetMinMaxLength<{
                minLength: 3;
            }>;
        email: EmailAttribute &
            RequiredAttribute &
            SetMinMaxLength<{
                minLength: 6;
            }>;
        provider: StringAttribute;
        password: PasswordAttribute &
            PrivateAttribute &
            SetMinMaxLength<{
                minLength: 6;
            }>;
        resetPasswordToken: StringAttribute & PrivateAttribute;
        confirmationToken: StringAttribute & PrivateAttribute;
        confirmed: BooleanAttribute & DefaultTo<false>;
        blocked: BooleanAttribute & DefaultTo<false>;
        role: RelationAttribute<
            'plugin::users-permissions.user',
            'manyToOne',
            'plugin::users-permissions.role'
        >;
        cart: ComponentAttribute<'user.cart-product', true>;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface PluginEmailDesignerEmailTemplate extends CollectionTypeSchema {
    info: {
        singularName: 'email-template';
        pluralName: 'email-templates';
        displayName: 'Email-template';
        name: 'email-template';
    };
    options: {
        draftAndPublish: false;
        timestamps: true;
        increments: true;
        comment: '';
    };
    pluginOptions: {
        'content-manager': {
            visible: false;
        };
        'content-type-builder': {
            visible: false;
        };
    };
    attributes: {
        templateReferenceId: IntegerAttribute & UniqueAttribute;
        design: JSONAttribute;
        name: StringAttribute;
        subject: StringAttribute;
        bodyHtml: TextAttribute;
        bodyText: TextAttribute;
        enabled: BooleanAttribute & DefaultTo<true>;
        tags: JSONAttribute;
        createdAt: DateTimeAttribute;
        updatedAt: DateTimeAttribute;
        createdBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
        updatedBy: RelationAttribute<'plugin::email-designer.email-template', 'oneToOne', 'admin::user'> &
            PrivateAttribute;
    };
}

export interface UserCartProduct extends ComponentSchema {
    info: {
        displayName: 'Cart Product';
        icon: 'shopping-cart';
    };
    attributes: {
        product: RelationAttribute<'user.cart-product', 'oneToOne', 'api::product.product'>;
        count: IntegerAttribute &
            SetMinMax<{
                min: 1;
            }> &
            DefaultTo<1>;
    };
}

declare global {
    namespace Strapi {
        interface Schemas {
            'admin::permission': AdminPermission;
            'admin::user': AdminUser;
            'admin::role': AdminRole;
            'admin::api-token': AdminApiToken;
            'admin::api-token-permission': AdminApiTokenPermission;
            'api::attribute.attribute': ApiAttributeAttribute;
            'api::attribute-key.attribute-key': ApiAttributeKeyAttributeKey;
            'api::category.category': ApiCategoryCategory;
            'api::product.product': ApiProductProduct;
            'plugin::upload.file': PluginUploadFile;
            'plugin::upload.folder': PluginUploadFolder;
            'plugin::i18n.locale': PluginI18NLocale;
            'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
            'plugin::users-permissions.role': PluginUsersPermissionsRole;
            'plugin::users-permissions.user': PluginUsersPermissionsUser;
            'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate;
            'user.cart-product': UserCartProduct;
        }
    }
}
