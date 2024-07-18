import "reflect-metadata";
import { DefaultController, DI } from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { Model } from "@sps/sps-rbac/models/identity/backend/model/root";

@injectable()
export class Controller extends DefaultController {
  model: Model;

  constructor(@inject(DI.IModel) model: Model) {
    super(model);
    this.model = model;
    this.bindRoutes([]);
  }
}
