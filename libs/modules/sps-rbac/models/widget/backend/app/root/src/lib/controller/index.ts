import "reflect-metadata";
import { Context, Next } from "hono";
import { DefaultController } from "@sps/shared-backend-api";
import { handler as findHandler } from "./handlers/find";
import { handler as findByIdHandler } from "./handlers/find-by-id";
import { injectable } from "inversify";
import { IController } from "./interface";

@injectable()
export class Controller extends DefaultController implements IController {
  constructor() {
    super();
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
      },
    ]);
  }

  async find(c: Context, next: Next) {
    return findHandler(c, next);
  }

  async findById(c: Context, next: Next) {
    return findByIdHandler(c, next);
  }
}
