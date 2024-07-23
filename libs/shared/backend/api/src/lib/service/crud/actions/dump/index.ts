import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { inject, injectable } from "inversify";
import { type IRepository } from "../../../../repository";
import { DI } from "../../../../di/constants";

@injectable()
export class Action<SCHEMA extends Record<string, unknown>> {
  repository: IRepository;

  constructor(@inject(DI.IRepository) repository: IRepository) {
    this.repository = repository;
  }

  async execute(props: {
    db: PostgresJsDatabase<any>;
    schemaName: keyof typeof props.db._.fullSchema;
    Table: PgTableWithColumns<any>;
    seedsPath?: string;
  }) {
    const result = await this.repository.dump();

    return result;
  }
}
