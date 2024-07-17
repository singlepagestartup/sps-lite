import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { type IDefaultModel } from "../../model";
import { injectable } from "inversify";

@injectable()
export class Handler<
  D,
  C extends Context<{
    Variables: {
      parsedBody: D;
    };
  }>,
> {
  constructor(private model: IDefaultModel) {
    this.model = model;
  }

  async execute(c: C, next: Next) {
    try {
      const uuid = c.req.param("uuid");
      const body = await c.req.parseBody();

      if (!uuid) {
        return c.json(
          {
            message: "Invalid id",
          },
          {
            status: 400,
          },
        );
      }

      if (typeof body["data"] !== "string") {
        return c.json(
          {
            message: "Invalid body",
          },
          {
            status: 400,
          },
        );
      }

      const data = JSON.parse(body["data"]);

      const entity = await this.model.update({ id: uuid, data });

      return c.json({
        data: entity,
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
