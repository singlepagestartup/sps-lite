import { app as channel } from "@sps/broadcast/models/channel/backend/app/api";
import { app as message } from "@sps/broadcast/models/message/backend/app/api";
import { app as channelsToMessages } from "@sps/broadcast/relations/channels-to-messages/backend/app/api";

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
      route: "/channels",
      app: channel,
    });
    this.apps.push({
      type: "model",
      route: "/messages",
      app: message,
    });
    this.apps.push({
      type: "relation",
      route: "/channels-to-messages",
      app: channelsToMessages,
    });
  }
}
