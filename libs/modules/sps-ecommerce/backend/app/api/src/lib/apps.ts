import { DefaultApp } from "@sps/shared-backend-api";
import { app as widgetApp } from "@sps/sps-ecommerce/models/widget/backend/app/api";
import { app as productApp } from "@sps/sps-ecommerce/models/product/backend/app/api";
import { app as productsListBlockApp } from "@sps/sps-ecommerce/models/products-list-block/backend/app/api";
import { app as ordersListBlockApp } from "@sps/sps-ecommerce/models/orders-list-block/backend/app/api";
import { app as productOverviewBlockApp } from "@sps/sps-ecommerce/models/product-overview-block/backend/app/api";
import { app as orderApp } from "@sps/sps-ecommerce/models/order/backend/app/api";
import { app as attributeApp } from "@sps/sps-ecommerce/models/attribute/backend/app/api";
import { app as attributeKeyApp } from "@sps/sps-ecommerce/models/attribute-key/backend/app/api";
import { app as attributesToAttributeKeysApp } from "@sps/sps-ecommerce/relations/attributes-to-attribute-keys/backend/app/api";
import { app as productsToAttributesApp } from "@sps/sps-ecommerce/relations/products-to-attributes/backend/app/api";
import { app as ordersToProductsApp } from "@sps/sps-ecommerce/relations/orders-to-products/backend/app/api";
import { app as widgetsToProductOverviewBlocksApp } from "@sps/sps-ecommerce/relations/widgets-to-product-overview-blocks/backend/app/api";
import { app as widgetsToProductsListBlocksApp } from "@sps/sps-ecommerce/relations/widgets-to-products-list-blocks/backend/app/api";
import { app as widgetsToOrdersListBlocksApp } from "@sps/sps-ecommerce/relations/widgets-to-orders-list-blocks/backend/app/api";

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
      type: "model",
      route: "/products-list-blocks",
      app: productsListBlockApp,
    });
    this.apps.push({
      type: "model",
      route: "/orders-list-blocks",
      app: ordersListBlockApp,
    });
    this.apps.push({
      type: "model",
      route: "/product-overview-blocks",
      app: productOverviewBlockApp,
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
      route: "/widgets-to-product-overview-blocks",
      app: widgetsToProductOverviewBlocksApp,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-products-list-blocks",
      app: widgetsToProductsListBlocksApp,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-orders-list-blocks",
      app: widgetsToOrdersListBlocksApp,
    });
  }
}
