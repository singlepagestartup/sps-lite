import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { inject, injectable } from "inversify";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Placeholder, SQL } from "drizzle-orm";
import { type IService } from "../../../../service";
import { DI } from "../../../../di/constants";

@injectable()
export class Handler<
  C extends Context,
  SCHEMA extends Record<string, unknown>,
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> {
  service: IService<SCHEMA>;

  constructor(@inject(DI.IService) service: IService<SCHEMA>) {
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
