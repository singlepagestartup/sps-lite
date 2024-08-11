import { app as widgetApp } from "@sps/sps-ecommerce/models/widget/backend/app/api";
import { app as productApp } from "@sps/sps-ecommerce/models/product/backend/app/api";
import { DefaultApp } from "@sps/shared-backend-api";

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
  }
}
