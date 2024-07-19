import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { Placeholder, SQL } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { injectable } from "inversify";
import { IDefaultEntity } from "../../../../entity";

@injectable()
export class Action<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> {
  entity: IDefaultEntity<D, T, E>;

  constructor(entity: IDefaultEntity<D, T, E>) {
    this.entity = entity;
  }

  async execute() {
    const result = await this.entity.find();

    return result;
  }
}
