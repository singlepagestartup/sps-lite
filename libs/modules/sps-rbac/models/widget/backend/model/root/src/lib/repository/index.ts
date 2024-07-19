import "reflect-metadata";
import { Placeholder, SQL } from "drizzle-orm";
import { injectable } from "inversify";
import { PgTableWithColumns } from "drizzle-orm/pg-core";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { DefaultRepository } from "@sps/shared-backend-api";

@injectable()
export class Repository<
  D extends PostgresJsDatabase<any>,
  T extends PgTableWithColumns<any>,
> extends DefaultRepository<D, T> {}
