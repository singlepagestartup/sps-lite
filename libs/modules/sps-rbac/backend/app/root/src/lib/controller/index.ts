import "reflect-metadata";
import { Context, Next } from "hono";
import { DefaultController } from "@sps/shared-backend-api";
import { injectable } from "inversify";
import { IController } from "./interface";
import { app as widgetsApp } from "@sps/sps-rbac/models/widget/backend/app/root";

@injectable()
export class Controller {
  constructor() {}

  async widgets(c: Context, next: Next) {
    console.log(`🚀 ~ widgets ~ c.req.url:`, c.req.url);

    return widgetsApp.hono.fetch(c.req as unknown as Request);
  }
}
