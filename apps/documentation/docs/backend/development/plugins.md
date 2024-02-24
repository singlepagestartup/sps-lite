---
sidebar_position: 8
---

# Plugin configuration

Since Single Page Startup uses Strapi, plugins [Strapi](https://docs.strapi.io/dev-docs/plugins-extension) are used and their configuration is done in the `./backend/config/plugins.js` file.

In this file, you can configure plugins for sending email messages `config.email.config`, configure the file upload plugin `config.upload.config`, as well as the [Users-Permissions](https://docs.strapi.io/dev-docs/plugins/users-permissions) plugin `config.users-permissions.config`.

## config.users-permissions.config

:::danger
This functionality is available in version sps and higher. This functionality is not available in sps-lite.
:::

This configuration object is responsible for how the Users Permissions plugin and additional functions provided by Single Page Startup will work.

The following parameters are used when configuring the authentication and authorization plugin:

- `appName` - the name of the application, which will be used in email templates
- `registerByEmailCode` - a parameter that determines whether users can register using only a code from an email without setting a password
- `authFactors` - an object that describes the steps for authenticating users

```javascript title="./backend/config/plugins.js"
const config = {
  [`users-permissions`]: {
    config: {
      appName: env("PROJECT_NAME", "Single Page Startup"),
      registerByEmailCode: false,
      authFactors: {
        factors: [
          { handler: "auth.callback" },
          // If all are required, but will be on one page
          // {
          //     handler: ['auth.phoneConfirmation', 'auth.emailConfirmation'],
          //     type: 'parallel',
          // },
          // If one is to be chosen in priority order
          // {
          //     handler: ['auth.emailConfirmation', 'auth.phoneConfirmation'],
          //     type: 'one',
          // },
          { handler: "user.checkOtp" },
        ],
      },
    },
  },
};
```

### config.users-permissions.config.authFactors

This object can describe several options for authenticating users.

If you need to make authentication where each subsequent step will be displayed only after passing the previous one, then the configuration object will look like this. In the example below, all 4 authentication steps are mandatory in case the user has the parameters `is_phone_confirmation_enabled`, `is_email_confirmation_enabled`, `is_otp_confirmation_enabled`. If any of the parameters is set to `null | false`, then this step will be skipped.

```javascript title="./backend/config/plugins.js"
const config = {
  [`users-permissions`]: {
    config: {
      appName: env("PROJECT_NAME", "Single Page Startup"),
      registerByEmailCode: false,
      authFactors: {
        factors: [
          { handler: "auth.callback" },
          { handler: "auth.phoneConfirmation" },
          { handler: "auth.emailConfirmation" },
          { handler: "user.checkOtp" },
        ],
      },
    },
  },
};
```

If authentication is required and there are 3 authentication steps, but the second step can be either `auth.emailConfirmation` or `auth.phoneConfirmation` (in order of priority), then the configuration will look like this.

```javascript title="./backend/config/plugins.js"
const config = {
  [`users-permissions`]: {
    config: {
      appName: env("PROJECT_NAME", "Single Page Startup"),
      registerByEmailCode: false,
      authFactors: {
        factors: [
          { handler: "auth.callback" },
          {
            handler: ["auth.emailConfirmation", "auth.phoneConfirmation"],
            type: "one",
          },
          { handler: "user.checkOtp" },
        ],
      },
    },
  },
};
```

If you need to perform authentication with 2-factor authentication, but the user must complete all additional authentication factors on one page, then the configuration file will look like this.

```javascript title="config.users-permissions.config.authFactors"
const config = {
  [`users-permissions`]: {
    config: {
      appName: env("PROJECT_NAME", "Single Page Startup"),
      registerByEmailCode: false,
      authFactors: {
        factors: [
          { handler: "auth.callback" },
          {
            handler: [
              "auth.emailConfirmation",
              "auth.phoneConfirmation",
              "user.checkOtp",
            ],
            type: "parallel",
          },
        ],
      },
    },
  },
};
```
