import "reflect-metadata";
import { HTTPException } from "hono/http-exception";
import { Context } from "hono";
import { Next } from "hono/types";
import { injectable } from "inversify";
import { IDefaultService } from "../../service";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Placeholder, SQL } from "drizzle-orm";

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
  constructor(private service: IDefaultService<D, T, E>) {
    this.service = service;
  }

  async execute(c: C, next: Next) {
    const body = await c.req.parseBody();

    if (typeof body["data"] !== "string") {
      throw new HTTPException(400, {
        message: "Invalid data",
      });
    }

    const data = JSON.parse(body["data"]);

    try {
      const entity = await this.service.create({ data });

      return c.json(
        {
          data: entity,
        },
        201,
      );
    } catch (error: any) {
      throw new HTTPException(400, {
        message: error.message,
      });
    }
  }
}
