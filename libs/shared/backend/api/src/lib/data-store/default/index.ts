import { eq } from "drizzle-orm";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { injectable } from "inversify";
import { ZodObject } from "zod";

export interface IDataStore<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
> {
  db: D;
  schemaName: D["_"]["tableNamesMap"][keyof D["_"]["tableNamesMap"]];
  insertSchema: ZodObject<any, any>;
  // schemaName: keyof ExtractTablesWithRelations<T>;
  Table: T;
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
export class DataStore<
  T extends PgTableWithColumns<any>,
  D extends PostgresJsDatabase<any>,
> implements IDataStore<D, T>
{
  db: D;
  schemaName: IDataStore<D, T>["schemaName"];
  Table: IDataStore<D, T>["Table"];
  insertSchema: IDataStore<D, T>["insertSchema"];

  constructor(
    db: D,
    schemaName: IDataStore<D, T>["schemaName"],
    Table: IDataStore<D, T>["Table"],
    insertSchema: IDataStore<D, T>["insertSchema"],
  ) {
    this.db = db;
    this.Table = Table;
    this.schemaName = schemaName;
    this.insertSchema = insertSchema;
  }

  async find(): Promise<T["$inferSelect"][]> {
    // const result = await this.db.query[this.schemaName].findMany();
    const record = await this.db.select(this.Table).from(this.Table).execute();

    return record;
  }

  async findByField(field: string, value: any): Promise<T["$inferSelect"][]> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const record = await this.db
      .select()
      .from(this.Table)
      .where(eq(this.Table[field], value))
      .execute();

    return record;
  }

  async insert(data: T["$inferInsert"]): Promise<T["$inferSelect"]> {
    const plainData = this.insertSchema.parse(data);

    const [record] = await this.db
      .insert(this.Table)
      .values(data)
      .returning()
      .execute();

    return record;
  }

  async deleteFirstByField(
    field: string,
    value: any,
  ): Promise<T["$inferSelect"]> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const [record] = await this.findByField(field, value);

    const [result] = await this.db
      .delete(this.Table)
      .where(eq(this.Table[field], record[field]))
      .returning()
      .execute();

    return result;
  }

  async updateFirstByField(
    field: string,
    value: any,
    data: T["$inferInsert"],
  ): Promise<T["$inferSelect"]> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const [record] = await this.findByField(field, value);

    const [result] = await this.db
      .update(this.Table)
      .set(data)
      .where(eq(this.Table[field], record[field]))
      .returning()
      .execute();

    return result;
  }
}
