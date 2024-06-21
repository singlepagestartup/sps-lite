import { sql } from "drizzle-orm";
import { db } from "./index";

export const drop = async () => {
  try {
    // console.log("Dropping database started...");
    // const query = sql<string>`SELECT table_name
    //   FROM information_schema.tables
    //   WHERE table_schema = 'public'
    //     AND table_type = 'BASE TABLE';
    // `;

    // const tables = await db.execute(query);

    // for (const table of tables) {
    //   const truncateQuery = sql.raw(
    //     `TRUNCATE TABLE ${table["table_name"]} CASCADE;`,
    //   );
    //   await db.execute(truncateQuery);

    //   const dropQuery = sql.raw(
    //     `DROP TABLE if exists ${table["table_name"]} CASCADE;`,
    //   );

    //   await db.execute(dropQuery);
    // }

    // const selectEnums = sql.raw(`SELECT * FROM pg_enum;`);
    // const enums = await db.execute(selectEnums);

    // for (const en of enums) {
    //   const dropEnumQuery = sql.raw(
    //     `DELETE FROM pg_enum WHERE oid='${en["oid"]}';`,
    //   );

    //   await db.execute(dropEnumQuery);
    // }

    // const selectUserTypes = sql<string>`SELECT * FROM pg_type WHERE typname ilike '%_variant';`;
    // const selectUserTypesResult = await db.execute(selectUserTypes);

    // for (const selectUserType of selectUserTypesResult) {
    //   const dropEnumQuery = sql.raw(
    //     `DELETE FROM pg_type WHERE oid='${selectUserType["oid"]}';`,
    //   );

    //   await db.execute(dropEnumQuery);
    // }

    // console.log("Dropping database passed successful");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
