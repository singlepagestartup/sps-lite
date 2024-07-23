import "reflect-metadata";
import { Env, Hono } from "hono";
import { type IController } from "../../controllers";
import { type IExceptionFilter } from "../../filters";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
import { ParseQueryMiddleware } from "@sps/middlewares";
import { IConfiguration } from "../../configuration";

export interface IApp<
  ENV extends Env = {},
  SCHEMA extends Record<string, unknown> = {},
> {
  hono: Hono<ENV>;
  controller?: IController<SCHEMA>;
  exceptionFilter: IExceptionFilter;
  init: () => Promise<void>;
  useRoutes: () => void;
}

@injectable()
export class App<SCHEMA extends Record<string, unknown>>
  implements IApp<Env, SCHEMA>
{
  hono: Hono<Env>;
  controller: IController<SCHEMA>;
  exceptionFilter: IExceptionFilter;
  configuration: IConfiguration;

  constructor(
    @inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter,
    @inject(DI.IController) controller: IController<SCHEMA>,
    @inject(DI.IConfiguration) configuration: IConfiguration,
  ) {
    this.hono = new Hono<Env>();
    this.exceptionFilter = exceptionFilter;
    this.controller = controller;
    this.configuration = configuration;
  }

  public async init() {
    this.hono.onError(this.exceptionFilter.catch.bind(this.exceptionFilter));
    this.hono.use(new ParseQueryMiddleware().init());
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
