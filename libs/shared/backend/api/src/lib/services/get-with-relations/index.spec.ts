// import { drizzle } from "drizzle-orm/postgres-js";
// import { postgres } from "@sps/shared-backend-database-config";
// import * as schema from "@sps/sps-website-builder-backend-schema";
// import { faker } from "@faker-js/faker";
// import {
//   createTableRelationsHelpers,
//   eq,
//   extractTablesRelationalConfig,
// } from "drizzle-orm";
// import * as services from "../index";
// import {
//   config,
//   Relations,
//   populate,
// } from "@sps/sps-website-builder-models-page-backend-schema-relations";
// import {
//   Table,
//   model,
// } from "@sps/sps-website-builder-models-page-backend-schema-table";
// import { RelationalQueryBuilder } from "drizzle-orm/pg-core/query-builders/query";

// const db = drizzle(postgres, { schema });

// describe.skip("get-with-relations", () => {
//   let createdPage: typeof schema.SPSWBPage.$inferSelect;
//   let createdLayout: typeof schema.SPSWBLayout.$inferSelect;

//   beforeEach(async () => {
//     [createdPage] = await db
//       .insert(schema.SPSWBPage)
//       .values({
//         title: "Page created from test",
//         url: "/" + faker.lorem.slug(),
//       })
//       .returning();

//     [createdLayout] = await db
//       .insert(schema.SPSWBLayout)
//       .values({
//         title: faker.lorem.words(),
//       })
//       .returning();

//     await db
//       .insert(schema.SPSWBPagesToLayouts)
//       .values({
//         pageId: createdPage.id,
//         layoutId: createdLayout.id,
//       })
//       .returning();
//   });

//   afterEach(async () => {
//     await db
//       .delete(schema.SPSWBPage)
//       .where(eq(schema.SPSWBPage.id, createdPage.id));
//     await db
//       .delete(schema.SPSWBLayout)
//       .where(eq(schema.SPSWBLayout.id, createdLayout.id));
//   });

//   it(`by passing entity with existing relations get populated relations`, async () => {
//     const page = await db.query.SPSWBPage.findFirst({
//       where: eq(schema.SPSWBPage.id, createdPage.id),
//       with: {
//         SPSWBPagesToLayouts: {
//           with: {
//             layout: true,
//           },
//         },
//       },
//     });

//     const queryPageLayouts = page?.SPSWBPagesToLayouts.filter(
//       (r) => r.layout,
//     ).map((r) => r.layout);

//     // const pagePopulated1 = await db.query[tableName()].findFirst();
//     // const pagePopulated2 = await db.query[T].findFirst();
//     // const pagePopulated3 = await db.query[V].findFirst();
//     // const pagePopulated4 = await db.query.SPSWBPage.findFirst({
//     //   with: {
//     //     SPSWBPagesToLayouts: {
//     //       with: {
//     //         layout: true,
//     //       },
//     //     },
//     //   },
//     // });

//     const populatedPage = await services.getWithRelations({
//       schema,
//       db,
//       model: "SPSWBPage",
//       Table: Table,
//       config,
//     });

//     console.log(`🚀 ~ it.only ~ populatedPage:`, populatedPage);

//     expect(3002).toBe(2504);
//   });
// });
