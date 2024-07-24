import "reflect-metadata";
import { drizzle } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";
// import config from "./Config";
import { DatabaseRepositoryMigrate } from "@sps/shared-backend-api";

export const db = drizzle(postgres, { schema: drizzleSchema });
export const schema = drizzleSchema;

const migrate = new DatabaseRepositoryMigrate();
// const config = migrate.config();
// console.log(`🚀 ~ migrate:`, config);

// export default config

// export default config;
