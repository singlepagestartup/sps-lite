---
sidebar_position: 8
---

# Настройка плагинов

:::danger
Данный функционал присутствует в версии `sps` и выше. В `sps-lite` данный функционал отстуствует.
:::

Так как Single Page Startup использует Strapi, используются плагины [Strapi](https://docs.strapi.io/dev-docs/plugins-extension) и их настройка происходит в файле `./backend/config/plugins.js`.

В этом файле можно настроить плагины для отправки писем электронной почты `config.email.config`, настроить плагин загрузки файлов `config.upload.config`, а также плагин [Users-Permissions](https://docs.strapi.io/dev-docs/plugins/users-permissions) `config.users-permissions.config`.

## config.users-permissions.config

Данный объект конфигурации отвечает за то, как будет работать Users Permissions плагин и дополнительные функции, предоставляемые Single Page Startup.

```javascript title="./backend/config/plugins.js"
const config = {
  [`users-permissions`]: {
    config: {
      appName: env("APP_NAME", "Single Page Startup"),
      registerByEmailCode: false,
      authFactors: {
        factors: [
          { handler: "auth.callback" },
          // // Если все обязательные, но будут на одной странице
          // {
          //     handler: ['auth.phoneConfirmation', 'auth.emailConfirmation'],
          //     type: 'parallel',
          // },
          // Если один на выбор в порядке приоритета
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

- appName - название приложения, будет использоваться в шаблонах писем
- registerByEmailCode - параметр, отвечающий за то, можно ли регистрироваться пользователям используя только код с почты, без установки пароля
- authFactors - объект, описывающий шаги аутентификации пользователей

### config.users-permissions.config.authFactors

Данный объект может описывать несколько вариантов работы шагов аутентификации пользователей.

Если требуется сделать аутентификацию, где каждый последующий шаг будет отображаться только после прохождения предыдущего, тогда объект конфигурации будет выглядеть следующим образом. В примере ниже все 4 шага аутентификации обязательные, в случае если у пользователя проставлены параметры `is_phone_confirmation_enabled`, `is_email_confirmation_enabled`, `is_otp_confirmation_enabled`. Если какой-то из параметров проставлен в значение `null | false`, тогда данный шаг будет пропущен.

```javascript title="config.users-permissions.config.authFactors"
{
    factors: [
        { handler: "auth.callback" },
        { handler: "auth.phoneConfirmation" },
        { handler: "auth.emailConfirmation" },
        { handler: "user.checkOtp" },
    ],
}
```

Если требуется сделать аутентификацию, где есть 3 шага аутентификации, но второй шаг может быть одним из нескольких, в данном случае `auth.emailConfirmation` или `auth.phoneConfirmation` (в порядке приоритета). Тогда конфигурация будет выглядеть следующим образом.

```javascript title="config.users-permissions.config.authFactors"
{
    factors: [
        { handler: "auth.callback" },
        {
            handler: ["auth.emailConfirmation", "auth.phoneConfirmation"],
            type: "one",
        },
        { handler: "user.checkOtp" },
    ],
}
```

Если требуется сделать аутентификацию, где есть 2 шага аутентификации, но при этом пользователь должен пройти все дополнительные факторы аутентификации на одной странице, тогда файл конфигурации будет выглядеть следующим образом.

```javascript title="config.users-permissions.config.authFactors"
{
    factors: [
        { handler: "auth.callback" },
        {
            handler: ["auth.emailConfirmation", "auth.phoneConfirmation", "user.checkOtp"],
            type: "parallel",
        },
    ],
}
```
