import { DefaultApp } from "@sps/shared-backend-api";
import { app as widgetApp } from "@sps/sps-ecommerce/models/widget/backend/app/api";
import { app as productApp } from "@sps/sps-ecommerce/models/product/backend/app/api";
import { app as attributeApp } from "@sps/sps-ecommerce/models/attribute/backend/app/api";
import { app as attributeKeyApp } from "@sps/sps-ecommerce/models/attribute-key/backend/app/api";
import { app as attributesToAttributeKeysApp } from "@sps/sps-ecommerce/relations/attributes-to-attribute-keys/backend/app/api";
import { app as productsToAttributesApp } from "@sps/sps-ecommerce/relations/products-to-attributes/backend/app/api";

export class Apps {
  apps: { type: "model" | "relation"; route: string; app: DefaultApp<any> }[] =
    [];

  constructor() {
    this.bindApps();
  }

  bindApps() {
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widgetApp,
    });
    this.apps.push({
      type: "model",
      route: "/products",
      app: productApp,
    });
    this.apps.push({
      type: "model",
      route: "/attributes",
      app: attributeApp,
    });
    this.apps.push({
      type: "model",
      route: "/attribute-keys",
      app: attributeKeyApp,
    });
    this.apps.push({
      type: "relation",
      route: "/attributes-to-attribute-keys",
      app: attributesToAttributeKeysApp,
    });
    this.apps.push({
      type: "relation",
      route: "/products-to-attributes",
      app: productsToAttributesApp,
    });
  }
}
