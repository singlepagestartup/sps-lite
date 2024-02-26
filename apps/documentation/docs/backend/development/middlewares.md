---
sidebar_position: 7
---

# Middlewares configuration

Due to the fact that Single Page Startup uses Strapi, it is possible to configure file uploads to [S3](https://docs.strapi.io/dev-docs/providers) compatible storage. To do this, you need to add a provider and corresponding parameters to the configuration file `./backend/config/middlewares.js`.

For standardization of configuration files, an environment variable parameter has been added responsible for setting `AWS_S3_URL`. Therefore, when configuring S3-compatible cloud, it is not necessary to modify the `./backend/config/middlewares.js` file, it is enough to add environment variables to the `./backend/.env` file.

```javascript title="./backend/config/middlewares.js"
module.exports = ({ env }) => {
  const security = env("AWS_S3_ACCESS_KEY_ID")
    ? {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              "script-src": ["'self'", "editor.unlayer.com"],
              "frame-src": ["'self'", "editor.unlayer.com"],
              "img-src": [
                "'self'",
                "blob:",
                "data:",
                env("AWS_S3_URL", "*.selcdn.ru"),
              ],
              "connect-src": ["'self'", "https:"],
              "media-src": [
                "'self'",
                "blob:",
                "data:",
                env("AWS_S3_URL", "*.selcdn.ru"),
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      }
    : {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            directives: {
              "script-src": ["'self'", "editor.unlayer.com"],
              "frame-src": ["'self'", "editor.unlayer.com"],
              "img-src": [
                "'self'",
                "data:",
                "cdn.jsdelivr.net",
                "strapi.io",
                "s3.amazonaws.com",
              ],
            },
          },
        },
      };

  return [
    "strapi::errors",
    security,
    {
      name: "strapi::cors",
      config: {
        headers: [
          "Content-Type",
          "Authorization",
          "Origin",
          "Accept",
          "Next-Auth-Factor-Key",
        ],
      },
    },
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    {
      name: "strapi::body",
      config: {
        formLimit: "256mb",
        jsonLimit: "256mb",
        textLimit: "256mb",
        formidable: {
          maxFileSize: 200 * 1024 * 1024,
        },
      },
    },
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
  ];
};
```

Below is an example file for configuring [Selectel's S3 cloud](https://selectel.ru/services/cloud/storage).

```txt title="./backend/.env"
...

AWS_S3_URL=*.selcdn.ru
AWS_S3_ACCESS_KEY_ID=111111_singlepagestartup
AWS_S3_ACCESS_SECRET=<SECRET_PASSWORD>
AWS_S3_BUCKET=721111
AWS_S3_REGION=ru-1
AWS_S3_ENDPOINT=https://selcdn.ru/singlepagestartup-main
```
