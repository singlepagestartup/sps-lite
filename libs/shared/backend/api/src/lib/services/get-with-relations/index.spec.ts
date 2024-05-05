import { drizzle } from "drizzle-orm/postgres-js";
import { postgres } from "@sps/shared-backend-database-config";
import * as schema from "@sps/sps-website-builder-backend-schema";
import { faker } from "@faker-js/faker";
import {
  createTableRelationsHelpers,
  eq,
  extractTablesRelationalConfig,
} from "drizzle-orm";
import * as services from "../index";
import {
  config,
  Relations,
} from "@sps/sps-website-builder-models-page-backend-schema-relations";
import {
  Table,
  schemaName,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { RelationalQueryBuilder } from "drizzle-orm/pg-core/query-builders/query";

const db = drizzle(postgres, { schema });

describe("get-with-relations", () => {
  let createdPage: typeof schema.SPSWBPage.$inferSelect;
  let createdLayout: typeof schema.SPSWBLayout.$inferSelect;

  beforeEach(async () => {
    [createdPage] = await db
      .insert(schema.SPSWBPage)
      .values({
        title: "Page created from test",
        url: "/" + faker.lorem.slug(),
      })
      .returning();

    [createdLayout] = await db
      .insert(schema.SPSWBLayout)
      .values({
        title: faker.lorem.words(),
      })
      .returning();

    await db
      .insert(schema.SPSWBPagesToLayouts)
      .values({
        pageId: createdPage.id,
        layoutId: createdLayout.id,
      })
      .returning();
  });

  afterEach(async () => {
    await db
      .delete(schema.SPSWBPage)
      .where(eq(schema.SPSWBPage.id, createdPage.id));
    await db
      .delete(schema.SPSWBLayout)
      .where(eq(schema.SPSWBLayout.id, createdLayout.id));
  });

  it.only(`by passing entity with existing relations get populated relations`, async () => {
    const page = await db.query.SPSWBPage.findFirst({
      where: eq(schema.SPSWBPage.id, createdPage.id),
      with: {
        SPSWBPagesToLayouts: {
          with: {
            layout: true,
          },
        },
      },
    });

    const queryPageLayouts = page?.SPSWBPagesToLayouts.filter(
      (r) => r.layout,
    ).map((r) => r.layout);

    console.log(`🚀 ~ it.only ~ queryPageLayouts:`, queryPageLayouts);

    const tableName = (): keyof typeof schema => {
      // if (Math.random() > 0.5) {
      //   return "SPSWBPageTable2";
      // }

      return "SPSWBPage";
    };

    const T = tableName();
    const V = "SPSWBPage";

    const pagePopulated1 = await db.query[tableName()].findFirst();
    const pagePopulated2 = await db.query[T].findFirst();
    const pagePopulated3 = await db.query[V].findFirst();
    const pagePopulated4 = await db.query[schemaName].findFirst({
      with: {
        SPSWBPagesToLayouts: {
          with: {
            layout: true,
          },
        },
      },
    });

    pagePopulated4?.SPSWBPagesToLayouts[0].layout;

    // pagePopulated

    // const plainPageEntity = await db.query.SPSWBPageTable.findFirst({
    //   where: eq(schema.SPSWBPageTable.id, createdPage.id),
    // });

    // expect(plainPageEntity).toBeDefined();

    // if (!plainPageEntity) {
    //   throw new Error("plainPageEntity is undefined");
    // }

    // expect(plainPageEntity["layouts"]).not.toBeDefined();

    // const relationsHelper = createTableRelationsHelpers(Table);
    // console.log(`🚀 ~ it.only ~ relationsHelper:`, relationsHelper);
    // const tablesRelationalConfig = extractTablesRelationalConfig(schema);
    // const tableNamesMap = Object.keys(schema).reduce(
    //   (acc, key) => {
    //     acc[key] = key;
    //     return acc;
    //   },
    //   {} as Record<string, string>,
    // );
    // const configHelpers = createTableRelationsHelpers(schema.SPSWBPageTable);
    // const tableConfig = extractTablesRelationalConfig(schema, configHelpers);

    // const relationalQuery = new RelationalQueryBuilder(
    //   db,
    //   schema,
    //   tableNamesMap,
    //   Table,
    // );

    // const pageWithStringifiedTableName = await db.query[
    //   "SPSWBPageTable"
    // ].findFirst({
    //   where: eq(schema.SPSWBPageTable.id, createdPage.id),
    //   with: {
    //     PagesToLayouts: {
    //       with: {
    //         layout: true,
    //       },
    //     },
    //   },
    // });

    // const populatedPage = await services.getWithRelations({
    //   db,
    //   Table: schema.SPSWBPageTable,
    //   config: pageConfig,
    //   entity: plainPageEntity,
    // });

    // populatedPage.layouts;

    // console.log(`🚀 ~ it.only ~ populatedPage:`, populatedPage);
    // expect(queryPageLayouts?.length).toEqual(populatedPage.layouts?.length);

    // console.log(`🚀 ~ it.only ~ plainPageEntity:`, plainPageEntity);

    // const entity = await console.log(`🚀 ~ it.only ~ page:`, page);

    expect(3002).toBe(2504);
  });
});
