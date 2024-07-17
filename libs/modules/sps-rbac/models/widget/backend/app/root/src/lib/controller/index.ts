import "reflect-metadata";
import { DefaultController, DI } from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { createMiddleware } from "hono/factory";
import { Model } from "@sps/sps-rbac/models/widget/backend/model/root";

@injectable()
export class Controller extends DefaultController {
  constructor(@inject(DI.IModel) model: Model) {
    super(model);
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
        middlewares: [
          createMiddleware(async (c, next) => {
            console.log("Find | Route Middleware");
            await next();
          }),
        ],
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
        middlewares: [
          createMiddleware(async (c, next) => {
            console.log("Find by id | Route Middleware");
            await next();
          }),
        ],
      },
      {
        method: "GET",
        path: "/dump",
        handler: this.dump,
      },
      {
        method: "POST",
        path: "/",
        handler: this.create,
      },
      {
        method: "PATCH",
        path: "/:uuid",
        handler: this.update,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
    ]);
  }
}
