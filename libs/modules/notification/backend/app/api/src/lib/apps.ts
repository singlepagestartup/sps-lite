import { app as notification } from "@sps/notification/models/notification/backend/app/api";
import { app as widget } from "@sps/notification/models/widget/backend/app/api";
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
      route: "/notifications",
      app: notification,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
  }
}
