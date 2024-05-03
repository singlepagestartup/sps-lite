import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import {
  Table,
  config,
  Relations,
} from "@sps/sps-website-builder-models-page-backend-schema";
import { modelFactories, services } from "@sps/shared-backend-api";
import { SQL, eq } from "drizzle-orm";

const db = drizzle(postgres, { schema });

export const model = modelFactories.crudModelFactory({
  db,
  Table,
  config,
});

// const getPopulated = async () => {
//   const filter: SQL<unknown> = eq(Table["title"], "Attached to layout page");

//   const modelPopulated = await services.find({
//     db,
//     Table,
//     config,
//     filter,
//   });

//   console.log(`🚀 ~ getPopulated ~ modelPopulated:`, modelPopulated);

//   // const queryRes = await db.query.PageTable.findFirst({
//   //   with: {
//   //     PagesToLayouts: {
//   //       with: {
//   //         layout: true,
//   //       },
//   //     },
//   //   },
//   // });

//   // const configTable = config.layouts.table;

//   const firstRes = modelPopulated[0];
//   // const s = firstRes.layouts;

//   // if (firstRes.relation === "2344") {
//   //
//   // }

//   console.log(`🚀 ~ getPopulated ~ firstRes:`, firstRes);

//   // const filter = eq(schema.PageTable.title, "Attached to layout page");

//   // const filteredRes = await db.select().from(schema.PageTable).where(filter);
//   // filteredRes[0].title

//   // modelPopulated[0]
//   return modelPopulated;
// };

// (async () => {
//   await getPopulated();
// })();
