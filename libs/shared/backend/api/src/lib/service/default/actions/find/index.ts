import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { IDefaultRepository } from "../../../../repository";
import { Placeholder, SQL } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { injectable } from "inversify";

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
  repository: IDefaultRepository<D, T, E>;

  constructor(repository: IDefaultRepository<D, T, E>) {
    this.repository = repository;
  }

  async execute() {
    const result = await this.repository.find();

    return result;
  }
}
