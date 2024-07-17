import "reflect-metadata";
import { Hono } from "hono";
import { routes } from "./routes";
import { app as widgetsApp } from "@sps/sps-rbac/models/widget/backend/app/root";
import { MiddlewaresGeneric } from "@sps/middlewares";
import {
  DI,
  type IDefaultApp,
  type IExceptionFilter,
} from "@sps/shared-backend-api";
import { inject, injectable } from "inversify";

@injectable()
export class App implements IDefaultApp<MiddlewaresGeneric> {
  app: Hono<MiddlewaresGeneric>;
  exceptionFilter: IExceptionFilter;

  constructor(@inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter) {
    this.app = new Hono<MiddlewaresGeneric>();
    this.exceptionFilter = exceptionFilter;
  }

  public async init() {
    this.useRoutes();
    this.app.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  useRoutes() {
    // for (const route in routes) {
    //   this.app.route(route, routes[route as keyof typeof routes]);
    // }
    this.app.mount("/widgets", widgetsApp.app.fetch);
  }
}
