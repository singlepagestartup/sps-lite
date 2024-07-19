import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { type IDefaultService } from "../../service";
import { inject, injectable } from "inversify";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Placeholder, SQL } from "drizzle-orm";
import { DI } from "../../di/constants";

@injectable()
export class Handler<
  C extends Context,
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> {
  service: IDefaultService<D, T, E>;

  constructor(@inject(DI.IService) service: IDefaultService<D, T, E>) {
    this.service = service;
  }

  async execute(c: C, next: Next) {
    try {
      // const entity = await this.service.dump();

      return c.json({
        data: "ok",
      });
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
