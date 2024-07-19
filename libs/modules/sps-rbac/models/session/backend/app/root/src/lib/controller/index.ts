import "reflect-metadata";
import {
  DefaultController,
  DI,
  type IDefaultService,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";

@injectable()
export class Controller<
  SCHEMA extends Record<string, unknown>,
> extends DefaultController<SCHEMA> {
  constructor(@inject(DI.IService) service: IDefaultService<SCHEMA>) {
    super(service);
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/init",
        handler: this.init,
      },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
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

  public async init(c: Context, next: any): Promise<Response> {
    try {
      return c.json({
        ok: true,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
