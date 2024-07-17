import "reflect-metadata";
import { Context } from "hono";
import { StatusCode } from "hono/utils/http-status";
export { type IRoute, type IController } from "./interface";
import { IController, IRoute } from "./interface";
import { injectable } from "inversify";
import { FindHandler, FindByIdHandler, CreateHandler } from "../../handler";
import { type IDefaultModel } from "../../model";

@injectable()
export class Controller implements IController {
  private _routes: IRoute[] = [];
  private _model: IDefaultModel;

  constructor(model: IDefaultModel) {
    this._model = model;
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
