import { DefaultEntity, DI, IDefaultRepository } from "@sps/shared-backend-api";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { inject } from "inversify";

export class Entity<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
  DTO extends T["$inferInsert"],
> extends DefaultEntity<D, T, DTO> {
  title?: string;
  className?: string;

  constructor(@inject(DI.IRepository) private r: IDefaultRepository<D, T>) {
    super(r);
  }
}
