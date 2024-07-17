import "reflect-metadata";
import { Context } from "hono";
import { RouterRoute } from "hono/types";
import { StatusCode } from "hono/utils/http-status";
export { type IRoute, type IController } from "./interface";
import { IController, IRoute } from "./interface";
import { injectable } from "inversify";

@injectable()
export class Controller implements IController {
  private _routes: RouterRoute[] = [];

  constructor() {}

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
