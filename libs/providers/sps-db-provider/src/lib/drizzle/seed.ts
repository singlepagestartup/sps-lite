import { CommentTable, PostTable, UserTable } from "./schema";
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
    await db.delete(CommentTable);
    await db.delete(PostTable);
    await db.delete(UserTable);

    await db.insert(UserTable).values([
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
      },
    ]);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
