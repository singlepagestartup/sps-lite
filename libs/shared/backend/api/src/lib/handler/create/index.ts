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
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    try {
      // const entity = await this.model.create({ data });

      return c.json(
        {
          data,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
