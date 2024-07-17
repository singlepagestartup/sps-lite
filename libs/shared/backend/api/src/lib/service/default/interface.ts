import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export interface IService {
  find: (
    db: PostgresJsDatabase<any>,
    schemaName: keyof typeof db._.fullSchema,
  ) => Promise<any>;
}
