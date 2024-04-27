import { drizzle } from "drizzle-orm/postgres-js";
import { DATABASE_OPTIONS } from "../utils/envs";
import postgres from "postgres";
import * as schema from "./schema";

export const pg = postgres(DATABASE_OPTIONS);
export const db = drizzle(pg, { schema });
