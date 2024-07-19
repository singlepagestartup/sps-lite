import "reflect-metadata";
import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";
import { inject, injectable } from "inversify";
import {
  FindHandler,
  FindByIdHandler,
  CreateHandler,
  UpdateHandler,
  DeleteHandler,
} from "../../handler";
import { type IDefaultService } from "../../service";
import { DI } from "../../di/constants";
import { BlankInput, Handler, HandlerResponse } from "hono/types";
import { createMiddleware } from "hono/factory";

export interface IRoute {
  path: string;
  handler: Handler<any, string, BlankInput, HandlerResponse<any>>;
  method: "GET" | "POST" | "DELETE" | "PATCH";
  middlewares?: ReturnType<typeof createMiddleware>[];
}

export interface IController<SCHEMA extends Record<string, unknown>> {
  service: IDefaultService<SCHEMA>;
  routes: IRoute[];
  ok: <T>(c: Context<any, any, any>, data: T) => Response | Promise<Response>;
  send: <T>(
    c: Context<any, any, any>,
    code: StatusCode,
    data: T,
  ) => Response | Promise<Response>;
  find: (c: Context, next: any) => Response | Promise<Response>;
  findById: (c: Context, next: any) => Response | Promise<Response>;
  create: (c: Context, next: any) => Response | Promise<Response>;
  update: (c: Context, next: any) => Response | Promise<Response>;
  delete: (c: Context, next: any) => Response | Promise<Response>;
}

@injectable()
export class Controller<SCHEMA extends Record<string, unknown>>
  implements IController<SCHEMA>
{
  routes: IRoute[] = [];
  service: IDefaultService<SCHEMA>;

  constructor(@inject(DI.IService) service: IDefaultService<SCHEMA>) {
    this.service = service;
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      // {
      //   method: "GET",
      //   path: "/dump",
      //   handler: this.dump,
      // },
      {
        method: "GET",
        path: "/:uuid",
        handler: this.findById,
      },
      {
        method: "POST",
        path: "/",
        handler: this.create,
      },
      {
        method: "PATCH",
        path: "/:uuid",
        handler: this.update,
      },
      {
        method: "DELETE",
        path: "/:uuid",
        handler: this.delete,
      },
    ]);
  }

  public send<T>(
    c: Context<any, any, any>,
    code: StatusCode,
    data: T,
  ): Response | Promise<Response> {
    return c.json(
      {
        data,
      },
      code,
    );
  }

  public ok<T>(
    c: Context<any, any, any>,
    data: T,
  ): Response | Promise<Response> {
    return this.send(c, 200, data);
  }

  public async find(c: Context, next: any): Promise<Response> {
    const handler = new FindHandler<Context, SCHEMA>(this.service);
    return handler.execute(c, next);
  }

  public async findById(c: Context, next: any): Promise<Response> {
    const handler = new FindByIdHandler<Context, SCHEMA>(this.service);
    return handler.execute(c, next);
  }

  public async create(c: Context, next: any): Promise<Response> {
    const handler = new CreateHandler<Context, SCHEMA>(this.service);
    return handler.execute(c, next);
  }

  public async update(c: Context, next: any): Promise<Response> {
    const handler = new UpdateHandler<Context, SCHEMA>(this.service);
    return handler.execute(c, next);
  }

  public async delete(c: Context, next: any): Promise<Response> {
    const handler = new DeleteHandler<Context, SCHEMA>(this.service);
    return handler.execute(c, next);
  }

  // public async dump(c: Context, next: any): Promise<Response> {
  //   const handler = new DumpHandler<Context>(this._service);
  //   return handler.execute(c, next);
  // }

  protected bindRoutes(routes: IRoute[]) {
    this.routes = [];

    for (const route of routes) {
      const handler = route.handler.bind(this);
      this.routes.push({
        ...route,
        handler,
      });
    }
  }
}
