import { app as notification } from "@sps/notification/models/notification/backend/app/api";
import { app as widget } from "@sps/notification/models/widget/backend/app/api";
import { app as topic } from "@sps/notification/models/topic/backend/app/api";
import { app as template } from "@sps/notification/models/template/backend/app/api";
import { app as topicsToNotifications } from "@sps/notification/relations/topics-to-notifications/backend/app/api";
import { app as notificationsToTemplates } from "@sps/notification/relations/notifications-to-templates/backend/app/api";
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
    this.apps.push({
      type: "model",
      route: "/topics",
      app: topic,
    });
    this.apps.push({
      type: "relation",
      route: "/topics-to-notifications",
      app: topicsToNotifications,
    });
    this.apps.push({
      type: "model",
      route: "/templates",
      app: template,
    });
    this.apps.push({
      type: "relation",
      route: "/notifications-to-templates",
      app: notificationsToTemplates,
    });
  }
}
