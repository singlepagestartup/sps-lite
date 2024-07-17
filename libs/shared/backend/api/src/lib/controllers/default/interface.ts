import { Context, Handler } from "hono";
import { BlankInput, HandlerResponse, RouterRoute } from "hono/types";
import { StatusCode } from "hono/utils/http-status";
import { createMiddleware } from "hono/factory";

export interface IRoute {
  path: string;
  handler: Handler<any, string, BlankInput, HandlerResponse<any>>;
  method: "GET" | "POST" | "DELETE" | "PATCH";
  middlewares?: ReturnType<typeof createMiddleware>[];
}

export interface IController {
  routes: RouterRoute[];
  ok: <T>(c: Context<any, any, any>, data: T) => Response | Promise<Response>;
  send: <T>(
    c: Context<any, any, any>,
    code: StatusCode,
    data: T,
  ) => Response | Promise<Response>;
  find: (c: Context, next: any) => Response | Promise<Response>;
  findById: (c: Context, next: any) => Response | Promise<Response>;
  create: (c: Context, next: any) => Response | Promise<Response>;
}
