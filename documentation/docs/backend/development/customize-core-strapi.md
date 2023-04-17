---
sidebar_position: 6
---

# Уменьшение вложенности

:::tip Зачем?
Для упрощения навигации по данным на фронтенде
:::

По умолчанию API ответы, отправляемые Strapi возвращаются в формате:

```json
{
    "data: {
        ...,
        "another_model": {
            "data": {
                ...,
                "next_another_model": {
                    "data": {
                        ...,
                    }
                }
            }
        }
    },
    "meta": {
        ...
    }
}
```

Для приведения вложенности типа `data.another_model.data.next_another_model.data` к типу `data.another_model.next_another_model` используется фукнция `customizeCoreStrapi`, которая запускается вместе с запуском приложения.

```javascript title="./backend/src/index.js"
...
const strapiUtils = require('@rogwild/strapi-utils');
...

module.exports = {
    register(/*{ strapi }*/) {},

    async bootstrap({ strapi }) {
        await strapiUtils.utils.customizeCoreStrapi({ strapi });

        ...
    },
};

```

В результате запуска данной функции API ответы от сервера приводятся к виду:

```json
{
    "data: {
        ...,
        "another_model": {
            ...,
             "next_another_model": {
                ...,
            }
        }
    },
    "meta": {
        ...
    }
}
```
