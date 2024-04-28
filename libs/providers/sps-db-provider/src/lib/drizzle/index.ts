import { drizzle } from "drizzle-orm/postgres-js";
import * as drizzleSchema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";

export { migrate } from "./migrate";
export { seed } from "./seed";
export const db = drizzle(postgres, { schema: drizzleSchema });
export const schema = drizzleSchema;
