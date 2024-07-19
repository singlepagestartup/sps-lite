import { Context, Handler } from "hono";
import { createMiddleware } from "hono/factory";
import { BlankInput, HandlerResponse } from "hono/types";
import { IService } from "../service";
import { StatusCode } from "hono/utils/http-status";

export interface IRoute {
  path: string;
  handler: Handler<any, string, BlankInput, HandlerResponse<any>>;
  method: "GET" | "POST" | "DELETE" | "PATCH";
  middlewares?: ReturnType<typeof createMiddleware>[];
}

export interface IController<DTO extends Record<string, unknown>> {
  service: IService<DTO>;
  routes: IRoute[];
  ok: (c: Context<any, any, any>, data: DTO) => Response | Promise<Response>;
  send: (
    c: Context<any, any, any>,
    code: StatusCode,
    data: DTO,
  ) => Response | Promise<Response>;
  find: (c: Context, next: any) => Response | Promise<Response>;
  findById: (c: Context, next: any) => Response | Promise<Response>;
  create: (c: Context, next: any) => Response | Promise<Response>;
  update: (c: Context, next: any) => Response | Promise<Response>;
  delete: (c: Context, next: any) => Response | Promise<Response>;
}
