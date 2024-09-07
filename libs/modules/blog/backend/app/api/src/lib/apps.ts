import { app as widgetApp } from "@sps/blog/models/widget/backend/app/api";
import { app as articleApp } from "@sps/blog/models/article/backend/app/api";
import { app as categoryApp } from "@sps/blog/models/category/backend/app/api";
import { app as categoriesToArticlesApp } from "@sps/blog/relations/categories-to-articles/backend/app/api";
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
      route: "/articles",
      app: articleApp,
    });
    this.apps.push({
      type: "model",
      route: "/categories",
      app: categoryApp,
    });
    this.apps.push({
      type: "relation",
      route: "/categories-to-articles",
      app: categoriesToArticlesApp,
    });
  }
}
