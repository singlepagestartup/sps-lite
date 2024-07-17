import { Context } from "hono";

export interface IController {
  widgets: (c: Context, next: any) => Response | Promise<Response>;
}
