import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { postgres } from "@sps/shared-backend-database-config";

const db = drizzle(postgres, {
  schema,
});

export const seed = async () => {
  try {
    console.log("Seeding database");
    // Delete all data

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
