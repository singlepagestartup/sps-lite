import { comments, posts, users } from "./schema";
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
    await db.delete(comments);
    await db.delete(posts);
    await db.delete(users);

    await db.insert(users).values([
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
