import "reflect-metadata";
import { Context, Hono, Next } from "hono";
import { MiddlewaresGeneric } from "@sps/middlewares";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";
import { app as widgetsApp } from "@sps/sps-rbac/models/widget/backend/app/root";

@injectable()
export class App implements IDefaultApp<MiddlewaresGeneric> {
  hono: Hono<MiddlewaresGeneric>;
  exceptionFilter: IExceptionFilter;

  constructor(@inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter) {
    this.hono = new Hono<MiddlewaresGeneric>();
    this.exceptionFilter = exceptionFilter;
  }

  public async init() {
    this.hono.use(async (c: Context, next: Next) => {
      const path = c.req.path;
      console.log("RBAC Middleware", path);
      await next();
    });
    this.useRoutes();
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    this.hono.mount("/widgets", widgetsApp.hono.fetch);
    // this.controller2.routes.map((route) => {
    //   this.app.on(route.method, route.path, route.handler);
    // });
  }
}
