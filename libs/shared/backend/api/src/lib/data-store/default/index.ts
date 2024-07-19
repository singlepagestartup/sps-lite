import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { inject, injectable } from "inversify";
import { DI } from "../../di/constants";
import { IDefaultDatabase } from "../../database";

export interface IDataStore<T extends PgTableWithColumns<any>, SCH> {
  store: IDefaultDatabase<SCH, T>;
  find: () => Promise<T["$inferSelect"][]>;
  findByField: (field: string, value: any) => Promise<T["$inferSelect"][]>;
  insert: (data: T["$inferInsert"]) => Promise<T["$inferSelect"]>;
  deleteFirstByField: (field: string, value: any) => Promise<T["$inferSelect"]>;
  updateFirstByField: (
    field: string,
    value: any,
    data: T["$inferInsert"],
  ) => Promise<T["$inferSelect"]>;
}

@injectable()
export class DataStore<T extends PgTableWithColumns<any>, SCH>
  implements IDataStore<T, SCH>
{
  store: IDefaultDatabase<SCH, T>;

  constructor(@inject(DI.IDatabase) db: IDefaultDatabase<SCH, T>) {
    this.store = db;
  }

  async find(): Promise<T["$inferSelect"][]> {
    const record = await this.store.find();

    return record;
  }

  async findByField(field: string, value: any): Promise<T["$inferSelect"][]> {
    const record = await this.store.findByField(field, value);

    return record;
  }

  async insert(data: T["$inferInsert"]): Promise<T["$inferSelect"]> {
    const record = await this.store.insert(data);

    return record;
  }

  async deleteFirstByField(
    field: string,
    value: any,
  ): Promise<T["$inferSelect"]> {
    const result = await this.store.deleteFirstByField(field, value);

    return result;
  }

  async updateFirstByField(
    field: string,
    value: any,
    data: T["$inferInsert"],
  ): Promise<T["$inferSelect"]> {
    const result = await this.store.updateFirstByField(field, value, data);

    return result;
  }
}
