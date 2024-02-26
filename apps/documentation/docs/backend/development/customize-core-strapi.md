---
sidebar_position: 6
---

# Reducing nesting

By default, the API responses sent by Strapi are returned in a format with a high level of nested child models, with all model data being placed in the `data` object.

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

Function `customizeCoreStrapi` is used to simplify nested structures such as `data.another_model.data.next_another_model.data` to `data.another_model.next_another_model`. This function runs when the application starts.

```javascript title="./backend/src/index.js"
"use strict";
...
const customizeCoreStrapi = require("./utils/bootstrap/customize-core-strapi");

module.exports = {
    async bootstrap({ strapi }) {
        customizeCoreStrapi({ strapi });

        ...
    },
};
```

As a result of running this API function, server responses are formatted as follows:

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
