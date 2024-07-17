import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { type IDefaultModel } from "../../model";
import { injectable } from "inversify";

@injectable()
export class Handler<T extends Context> {
  constructor(private model: IDefaultModel) {
    this.model = model;
  }

  async execute(c: T, next: Next) {
    try {
      const uuid = c.req.param("uuid");

      if (!uuid) {
        throw new HTTPException(400, {
          message: "Invalid id",
        });
      }

      return c.json({
        data: "ok",
      });
      // const data = await this.model.findById({ id: uuid });

      // if (!data || !Object.keys(data).length) {
      //   return c.json(
      //     {
      //       message: "Not found",
      //     },
      //     404,
      //   );
      // }

      // return c.json({
      //   data,
      // });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
