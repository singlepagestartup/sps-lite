import { DefaultApp } from "@sps/shared-backend-api";
import { app as widgetApp } from "@sps/crm/models/widget/backend/app/api";
import { app as customerApp } from "@sps/crm/models/customer/backend/app/api";

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
      route: "/customers",
      app: customerApp,
    });
  }
}
