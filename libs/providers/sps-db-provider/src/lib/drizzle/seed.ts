import * as schema from "./schema";
import { db } from "./index";

export const seed = async () => {
  try {
    console.log("Seeding database started...");
    const pages = await db.query.SPSWBPage.findMany();

    console.log("Seeding database finished successfully");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
