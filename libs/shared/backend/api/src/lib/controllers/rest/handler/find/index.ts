import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { inject, injectable } from "inversify";
import { DI } from "../../../../di/constants";
import { type IService } from "../../../../service";

@injectable()
export class Handler<
  C extends Context,
  SCHEMA extends Record<string, unknown>,
> {
  constructor(@inject(DI.IService) private service: IService<SCHEMA>) {}

  async execute(c: C, next: Next): Promise<Response> {
    try {
      const data = await this.service.find();

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
