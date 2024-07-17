import "reflect-metadata";
import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";
export { type IRoute, type IController } from "./interface";
import { type IController, type IRoute } from "./interface";
import { inject, injectable } from "inversify";
import {
  FindHandler,
  FindByIdHandler,
  CreateHandler,
  UpdateHandler,
  DeleteHandler,
  DumpHandler,
} from "../../handler";
import { type IDefaultModel } from "../../model";
import { DI } from "../../di";

@injectable()
export class Controller implements IController {
  private _routes: IRoute[] = [];
  private _model: IDefaultModel;

  constructor(@inject(DI.IModel) model: IDefaultModel) {
    this._model = model;
    this.bindRoutes([
      {
        method: "GET",
        path: "/",
        handler: this.find,
      },
      {
        method: "GET",
        path: "/dump",
        handler: this.dump,
      },
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

  get routes() {
    return this._routes;
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
    const handler = new FindHandler<Context>(this._model);
    return handler.execute(c, next);
  }

  public async findById(c: Context, next: any): Promise<Response> {
    const handler = new FindByIdHandler<Context>(this._model);
    return handler.execute(c, next);
  }

  public async create(c: Context, next: any): Promise<Response> {
    const handler = new CreateHandler<any, Context>(this._model);
    return handler.execute(c, next);
  }

  public async update(c: Context, next: any): Promise<Response> {
    const handler = new UpdateHandler<any, Context>(this._model);
    return handler.execute(c, next);
  }

  public async delete(c: Context, next: any): Promise<Response> {
    const handler = new DeleteHandler<Context>(this._model);
    return handler.execute(c, next);
  }

  public async dump(c: Context, next: any): Promise<Response> {
    const handler = new DumpHandler<Context>(this._model);
    return handler.execute(c, next);
  }

  protected bindRoutes(routes: IRoute[]) {
    for (const route of routes) {
      const handler = route.handler.bind(this);
      this._routes.push({
        ...route,
        handler,
      });
    }
  }
}
