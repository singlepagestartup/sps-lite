import "reflect-metadata";
import { Env, Hono } from "hono";
import { IApp } from "./interface";
import { type IDefaultController } from "../../controllers";
import { type IExceptionFilter } from "../../filters";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
export { type IApp } from "./interface";

@injectable()
export class App implements IApp<Env> {
  hono: Hono<Env>;
  controller: IDefaultController;
  exceptionFilter: IExceptionFilter;

  constructor(
    @inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter,
    @inject(DI.IController) controller: IDefaultController,
  ) {
    this.hono = new Hono<Env>();
    this.exceptionFilter = exceptionFilter;
    this.controller = controller;
  }

  public async init() {
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
    this.useRoutes();
  }

  useRoutes() {
    this.controller.routes.map((route) => {
      if (route.middlewares) {
        route.middlewares.forEach((middleware) => {
          this.hono.use(route.path, middleware);
        });
      }

      this.hono.on(route.method, route.path, route.handler);
    });
  }
}
