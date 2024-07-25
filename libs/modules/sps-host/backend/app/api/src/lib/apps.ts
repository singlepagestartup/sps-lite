import { app as layout } from "@sps/sps-host/models/layout/backend/app/api";
import { app as metadata } from "@sps/sps-host/models/metadata/backend/app/api";
import { app as page } from "@sps/sps-host/models/page/backend/app/api";
import { app as widget } from "@sps/sps-host/models/widget/backend/app/api";
import { app as layoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/backend/app/api";
import { app as pagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/backend/app/api";
import { app as pagesToMetadata } from "@sps/sps-host/relations/pages-to-metadata/backend/app/api";
import { app as pagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/backend/app/api";
import { app as widgetsToExternalModules } from "@sps/sps-host/relations/widgets-to-external-widgets/backend/app/api";
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
      route: "/layouts",
      app: layout,
    });
    this.apps.push({
      type: "model",
      route: "/metadata",
      app: metadata,
    });
    this.apps.push({
      type: "model",
      route: "/pages",
      app: page,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
    this.apps.push({
      type: "relation",
      route: "/layouts-to-widgets",
      app: layoutsToWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/pages-to-layouts",
      app: pagesToLayouts,
    });
    this.apps.push({
      type: "relation",
      route: "/pages-to-metadata",
      app: pagesToMetadata,
    });
    this.apps.push({
      type: "relation",
      route: "/pages-to-widgets",
      app: pagesToWidgets,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-external-widgets",
      app: widgetsToExternalModules,
    });
  }
}
