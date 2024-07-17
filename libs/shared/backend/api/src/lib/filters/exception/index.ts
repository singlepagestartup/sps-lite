import "reflect-metadata";
import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
export { type IFilter } from "./interface";
import { IFilter } from "./interface";
import { injectable } from "inversify";

@injectable()
export class Filter implements IFilter {
  constructor() {}

  catch(
    error: Error | HTTPException,
    c: Context,
  ): Response | Promise<Response> {
    console.log("exception filter", error.message);

    if (error instanceof HTTPException) {
      return c.json(
        {
          data: error.message,
        },
        error.status,
      );
    } else {
      return c.json(
        {
          data: error.message,
        },
        500,
      );
    }
  }
}
