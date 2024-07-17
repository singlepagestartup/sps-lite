import { Context } from "hono";
import { HTTPException } from "hono/http-exception";

export interface IFilter {
  catch: (
    error: Error | HTTPException,
    c: Context,
  ) => Response | Promise<Response>;
}
