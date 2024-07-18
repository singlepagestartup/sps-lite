import "reflect-metadata";
import { eq, Placeholder, SQL } from "drizzle-orm";
import { inject, injectable } from "inversify";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DI } from "../../di/constants";
import { type IDefaultDataStore } from "../../data-store";

export interface IRepository<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> {
  find: () => Promise<T["$inferSelect"][]>;
  create: (data: E) => Promise<T["$inferSelect"]>;
  findById: (props: { id: string }) => Promise<T["$inferSelect"] | null>;
  delete: (props: { id: string }) => Promise<T["$inferSelect"]>;
  updateById: (props: {
    id: string;
    data: any;
  }) => Promise<T["$inferSelect"] | null>;
}

@injectable()
export class Repository<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  E extends {
    [Key in keyof T["$inferInsert"]]:
      | SQL<unknown>
      | Placeholder<string, any>
      | T["$inferInsert"][Key];
  },
> implements IRepository<D, T, E>
{
  dataStore: IDefaultDataStore<D, T>;

  constructor(@inject(DI.IDataStore) dataStore: IDefaultDataStore<D, T>) {
    this.dataStore = dataStore;
  }

  async create(data: E) {
    const result = await this.dataStore.insert(data);

    return result;
  }

  async find(): Promise<T["$inferSelect"][]> {
    // const result =
    //   await this.dataStore.db.query[this.dataStore.schemaName].findMany();
    const result = await this.dataStore.db
      .select()
      .from(this.dataStore.Table)
      .execute();

    return result;
  }

  async findById(props: { id: string }): Promise<T["$inferSelect"] | null> {
    const [result] = await this.dataStore.findByField("id", props.id);

    if (!result) {
      return null;
    }

    return result;
  }

  async delete(props: { id: string }) {
    const result = await this.dataStore.deleteFirstByField("id", props.id);

    return result;
  }

  async updateById(props: {
    id: string;
    data: any;
  }): Promise<T["$inferSelect"] | null> {
    const result = await this.dataStore.updateFirstByField(
      "id",
      props.id,
      props.data,
    );

    return result;
  }
}
