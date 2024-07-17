import "reflect-metadata";
import { Context, Hono, Next } from "hono";
import { MiddlewaresGeneric } from "@sps/middlewares";
import { Controller } from "./controller";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";

@injectable()
export class App implements IDefaultApp<MiddlewaresGeneric> {
  app: Hono<MiddlewaresGeneric>;
  controller: Controller;
  exceptionFilter: IExceptionFilter;

  constructor(
    @inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter,
    @inject(DI.IController) controller: Controller,
  ) {
    this.app = new Hono<MiddlewaresGeneric>();
    this.exceptionFilter = exceptionFilter;
    this.controller = controller;
  }

  public async init() {
    this.useRoutes();
    this.app.use(async (c: Context, next: Next) => {
      const path = c.req.path;
      console.log("Middleware", path);
      // return c.json({ path, paths: this.app.routes });
      await next();
    });
    this.app.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    this.controller.routes.map((route) => {
      this.app.on(route.method, route.path, route.handler);
    });
  }
}
