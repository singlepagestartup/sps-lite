import * as schema from "./schema";
import { db } from "./index";

export const seed = async () => {
  try {
    console.log("Seeding database started...");

    console.log("Seeding database finished successfully");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
