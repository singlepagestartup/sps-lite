import { DefaultApp } from "@sps/shared-backend-api";
import { app as widgetApp } from "@sps/ecommerce/models/widget/backend/app/api";
import { app as productApp } from "@sps/ecommerce/models/product/backend/app/api";
import { app as orderApp } from "@sps/ecommerce/models/order/backend/app/api";
import { app as attributeApp } from "@sps/ecommerce/models/attribute/backend/app/api";
import { app as attributeKeyApp } from "@sps/ecommerce/models/attribute-key/backend/app/api";
import { app as attributesToAttributeKeysApp } from "@sps/ecommerce/relations/attributes-to-attribute-keys/backend/app/api";
import { app as productsToAttributesApp } from "@sps/ecommerce/relations/products-to-attributes/backend/app/api";
import { app as ordersToProductsApp } from "@sps/ecommerce/relations/orders-to-products/backend/app/api";
import { app as ordersToBillingPaymentIntentsApp } from "@sps/ecommerce/relations/orders-to-billing-payment-intents/backend/app/api";

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
      route: "/orders",
      app: orderApp,
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
    this.apps.push({
      type: "relation",
      route: "/orders-to-products",
      app: ordersToProductsApp,
    });
    this.apps.push({
      type: "relation",
      route: "/orders-to-billing-payment-intents",
      app: ordersToBillingPaymentIntentsApp,
    });
  }
}
