import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { type IDefaultModel } from "../../model";
import { injectable } from "inversify";

@injectable()
export class Handler<C extends Context> {
  constructor(private model: IDefaultModel) {
    this.model = model;
  }

  async execute(c: C, next: Next) {
    try {
      const entity = await this.model.dump();

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
