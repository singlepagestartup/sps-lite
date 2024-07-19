import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { injectable } from "inversify";
import { postgres } from "@sps/shared-backend-database-config";
import { eq } from "drizzle-orm";

export interface IDatabase<
  SCHEMA,
  PGSCHEMA,
  T extends PgTableWithColumns<any>,
> {
  db: PostgresJsDatabase<any>;
  schema: PGSCHEMA;
  Table: T;
  find: () => Promise<SCHEMA[]>;
  findFirstByField: (field: string, value: any) => Promise<T["$inferSelect"]>;
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
export class Database<
  SCHEMA extends Record<string, unknown>,
  PGSCHEMA extends Record<string, unknown>,
  T extends PgTableWithColumns<any>,
> implements IDatabase<SCHEMA, PGSCHEMA, T>
{
  db: PostgresJsDatabase<any>;
  schema: PGSCHEMA;
  Table: T;

  constructor(schema: PGSCHEMA, Table: T) {
    this.schema = schema;
    this.Table = Table;
    this.db = drizzle(postgres, { schema: this.schema });
  }

  async find(): Promise<SCHEMA[]> {
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

  async findFirstByField(
    field: string,
    value: any,
  ): Promise<T["$inferSelect"]> {
    const [record] = await this.findByField(field, value);

    return record;
  }

  async insert(data: T["$inferInsert"]): Promise<T["$inferSelect"]> {
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
