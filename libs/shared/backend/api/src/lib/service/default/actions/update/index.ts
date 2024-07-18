import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { Placeholder, SQL } from "drizzle-orm";
import { injectable } from "inversify";
import { type IDefaultRepository } from "../../../../repository";

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

  async execute(props: { id: string; data: any }) {
    const result = await this.repository.updateById(props);

    return result;
  }
}
