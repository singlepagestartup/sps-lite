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
> {
  find: () => Promise<T["$inferSelect"][]>;
  create: (data: T["$inferInsert"]) => Promise<T["$inferSelect"]>;
  findById: (props: { id: string }) => Promise<T["$inferSelect"] | null>;
  delete: (props: { id: string }) => Promise<T["$inferSelect"]>;
  updateById: (props: {
    id: string;
    data: T["$inferInsert"];
  }) => Promise<T["$inferSelect"] | null>;
}

@injectable()
export class Repository<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
> implements IRepository<D, T>
{
  constructor(
    @inject(DI.IDataStore) private dataStore: IDefaultDataStore<T, D>,
  ) {}

  async create(entity: T["$inferInsert"]): Promise<T["$inferSelect"]> {
    const result = await this.dataStore.insert(entity);

    return result;
  }

  async find(): Promise<T["$inferSelect"][]> {
    const result = await this.dataStore.find();

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
    data: T["$inferInsert"];
  }): Promise<T["$inferSelect"] | null> {
    const result = await this.dataStore.updateFirstByField(
      "id",
      props.id,
      props.data,
    );

    return result;
  }
}
