import "reflect-metadata";
import { Env, Hono } from "hono";
import { type IDefaultController } from "../../controllers";
import { type IExceptionFilter } from "../../filters";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Placeholder, SQL } from "drizzle-orm";

export interface IApp<
  ENV extends Env,
  PGDB extends PostgresJsDatabase<any>,
  PGTB extends PgTableWithColumns<any>,
  ENT extends {
    [Key in keyof PGTB["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | PGTB["$inferInsert"][Key];
  },
> {
  hono: Hono<ENV>;
  controller?: IDefaultController<PGDB, PGTB, ENT>;
  exceptionFilter: IExceptionFilter;
  init: () => Promise<void>;
  useRoutes: () => void;
}

@injectable()
export class App<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> implements IApp<Env, D, T, E>
{
  hono: Hono<Env>;
  controller: IDefaultController<D, T, E>;
  exceptionFilter: IExceptionFilter;

  constructor(
    @inject(DI.IExceptionFilter) exceptionFilter: IExceptionFilter,
    @inject(DI.IController) controller: IDefaultController<D, T, E>,
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
