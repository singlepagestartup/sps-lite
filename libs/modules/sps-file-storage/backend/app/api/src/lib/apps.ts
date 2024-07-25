import { app as file } from "@sps/sps-file-storage/models/file/backend/app/api";
import { app as widget } from "@sps/sps-file-storage/models/widget/backend/app/api";
import { app as widgetsToFiles } from "@sps/sps-file-storage/relations/widgets-to-files/backend/app/api";
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
      route: "/files",
      app: file,
    });
    this.apps.push({
      type: "model",
      route: "/widgets",
      app: widget,
    });
    this.apps.push({
      type: "relation",
      route: "/widgets-to-files",
      app: widgetsToFiles,
    });
  }
}
