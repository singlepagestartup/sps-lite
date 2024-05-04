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
  config as pageConfig,
  Relations,
} from "@sps/sps-website-builder-models-page-backend-schema-relations";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { RelationalQueryBuilder } from "drizzle-orm/pg-core/query-builders/query";

const db = drizzle(postgres, { schema });

describe("get-with-relations", () => {
  let createdPage: typeof schema.PageTable.$inferSelect;
  let createdLayout: typeof schema.LayoutTable.$inferSelect;

  beforeEach(async () => {
    [createdPage] = await db
      .insert(schema.PageTable)
      .values({
        title: "Page created from test",
        url: "/" + faker.lorem.slug(),
      })
      .returning();

    [createdLayout] = await db
      .insert(schema.LayoutTable)
      .values({
        title: faker.lorem.words(),
      })
      .returning();

    await db
      .insert(schema.PagesToLayoutsTable)
      .values({
        pageId: createdPage.id,
        layoutId: createdLayout.id,
      })
      .returning();
  });

  afterEach(async () => {
    await db
      .delete(schema.PageTable)
      .where(eq(schema.PageTable.id, createdPage.id));
    await db
      .delete(schema.LayoutTable)
      .where(eq(schema.LayoutTable.id, createdLayout.id));
  });

  it.only(`by passing entity with existing relations get populated relations`, async () => {
    const page = await db.query.PageTable.findFirst({
      where: eq(schema.PageTable.id, createdPage.id),
      with: {
        PagesToLayouts: {
          with: {
            layout: true,
          },
        },
      },
    });

    const queryPageLayouts = page?.PagesToLayouts.filter((r) => r.layout).map(
      (r) => r.layout,
    );

    const plainPageEntity = await db.query.PageTable.findFirst({
      where: eq(schema.PageTable.id, createdPage.id),
    });

    expect(plainPageEntity).toBeDefined();

    if (!plainPageEntity) {
      throw new Error("plainPageEntity is undefined");
    }

    expect(plainPageEntity["layouts"]).not.toBeDefined();

    const relationsHelper = createTableRelationsHelpers(Table);
    // console.log(`🚀 ~ it.only ~ relationsHelper:`, relationsHelper);
    // const tablesRelationalConfig = extractTablesRelationalConfig(schema);
    const tableNamesMap = Object.keys(schema).reduce(
      (acc, key) => {
        acc[key] = key;
        return acc;
      },
      {} as Record<string, string>,
    );
    // const configHelpers = createTableRelationsHelpers(schema.PageTable);
    // const tableConfig = extractTablesRelationalConfig(schema, configHelpers);

    // const relationalQuery = new RelationalQueryBuilder(
    //   db,
    //   schema,
    //   tableNamesMap,
    //   Table,
    // );

    // const pageWithStringifiedTableName = await db.query[
    //   "SpsWebsiteBuilderPageTable"
    // ].findFirst({
    //   where: eq(schema.PageTable.id, createdPage.id),
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
    //   Table: schema.PageTable,
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
