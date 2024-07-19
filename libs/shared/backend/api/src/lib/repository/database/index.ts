import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { inject, injectable } from "inversify";
import { postgres } from "@sps/shared-backend-database-config";
import * as methods from "drizzle-orm";
import { FindServiceProps } from "../../services/interfaces";
import { queryBuilder } from "../../query-builder/filters";
import { DI } from "../../di/constants";
import { type IRepository } from "../interface";
import { type IConfiguration } from "../../configuration";

@injectable()
export class Database<T extends PgTableWithColumns<any>>
  implements IRepository
{
  db: PostgresJsDatabase<any>;
  schema: any;
  Table: T;

  constructor(@inject(DI.IConfiguration) config: IConfiguration) {
    this.schema = config.repository.schema;
    this.Table = config.repository.Table;
    this.db = drizzle(postgres, { schema: this.schema });
  }

  async find(props?: FindServiceProps): Promise<T["$inferSelect"][]> {
    const filters = queryBuilder({
      table: this.Table,
      filters: props?.params?.filters,
      queryFunctions: methods,
    });

    const record = await this.db
      .select(this.Table)
      .from(this.Table)
      .where(filters)
      .execute();

    return record;
  }

  async findByField(field: string, value: any): Promise<any> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const record = await this.db
      .select()
      .from(this.Table)
      .where(methods.eq(this.Table[field], value))
      .execute();

    return record;
  }

  async findFirstByField(field: string, value: any): Promise<any> {
    const [record] = await this.findByField(field, value);

    return record;
  }

  async insert(data: any): Promise<any> {
    const [record] = await this.db
      .insert(this.Table)
      .values(data)
      .returning()
      .execute();

    return record;
  }

  async deleteFirstByField(field: string, value: any): Promise<any> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const [record] = await this.findByField(field, value);

    const [result] = await this.db
      .delete(this.Table)
      .where(methods.eq(this.Table[field], record[field]))
      .returning()
      .execute();

    return result;
  }

  async updateFirstByField(field: string, value: any, data: any): Promise<any> {
    if (!this.Table[field]) {
      throw new Error(`Field ${field} does not exist on table ${this.Table}`);
    }

    const [record] = await this.findByField(field, value);

    const [result] = await this.db
      .update(this.Table)
      .set(data)
      .where(methods.eq(this.Table[field], record[field]))
      .returning()
      .execute();

    return result;
  }
}
