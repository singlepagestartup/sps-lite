import "reflect-metadata";
import { Context, Hono, Next } from "hono";
import { MiddlewaresGeneric, middlewares } from "@sps/middlewares";
import { Controller } from "./controller";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";

@injectable()
export class App implements IDefaultApp<MiddlewaresGeneric> {
  hono: Hono<MiddlewaresGeneric>;
  controller: Controller;
  exceptionFilter: IExceptionFilter;

  constructor(
    @inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter,
    @inject(DI.IController) controller: Controller,
  ) {
    this.hono = new Hono<MiddlewaresGeneric>();
    this.exceptionFilter = exceptionFilter;
    this.controller = controller;
  }

  public async init() {
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
    this.hono.use(async (c: Context, next: Next) => {
      const path = c.req.path;
      console.log("Widgets Middleware", path);
      await next();
    });
    this.hono.use(middlewares.parseBody());
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
