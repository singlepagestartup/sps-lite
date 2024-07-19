import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { type IDefaultService } from "../../service";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";

@injectable()
export class Handler<
  C extends Context,
  SCHEMA extends Record<string, unknown>,
> {
  constructor(@inject(DI.IService) private service: IDefaultService<SCHEMA>) {}

  async execute(c: C, next: Next) {
    try {
      const uuid = c.req.param("uuid");

      if (!uuid) {
        throw new HTTPException(400, {
          message: "Invalid id",
        });
      }

      const data = await this.service.findById({ id: uuid });

      if (!data || !Object.keys(data).length) {
        return c.json(
          {
            message: "Not found",
          },
          404,
        );
      }

      return c.json({
        data,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
