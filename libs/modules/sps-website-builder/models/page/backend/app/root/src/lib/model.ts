import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import * as modelSchema from "@sps/sps-website-builder-models-page-backend-schema";
// import { modelFactories } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { handlers, modelFactories } from "@sps/shared-backend-api";

export const db = drizzle(postgres, { schema });
export const modelName = modelSchema.name;
// export const Table = schema[`${modelName}Table`];
export const Relations = schema[`${modelName}Relations`];
export const populate = modelSchema.populate;
export const transformData = modelSchema.transformData;

// export const model = modelFactories.crudModelFactory({
//   db,
//   modelName,
//   Table,
//   Relations,
//   config: modelSchema.config,
//   populate,
//   transformData,
// });

// Context<Env, "/", BlankInput>
import { Context } from "hono";

export const model = {
  async find<T extends Context>(c: T) {
    const data = await handlers.find<typeof schema, typeof db, typeof Table>({
      db,
      Table,
    });

    // const data = await db.query[Table].findMany({ with: populate });
    // const data = await db.select().from(Table);
    console.log(`🚀 ~ data:`, data);

    return c.json({
      data: data,
    });
    // return handlers.find({
    //   db,
    // });
  },
};
