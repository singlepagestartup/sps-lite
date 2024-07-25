import { app as telegram } from "@sps/sps-third-parties/models/telegram/backend/app/api";
import { app as telegramMessage } from "@sps/sps-third-parties/models/telegram-message/backend/app/api";
import { app as widget } from "@sps/sps-third-parties/models/widget/backend/app/api";
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
      route: "/telegrams",
      app: telegram,
    });
    this.apps.push({
      type: "model",
      route: "/telegram-messages",
      app: telegramMessage,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
  }
}
