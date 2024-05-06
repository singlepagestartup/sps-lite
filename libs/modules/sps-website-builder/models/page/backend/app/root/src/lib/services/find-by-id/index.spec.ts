import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as PagesToLayouts } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";

describe.only("find-by-id", () => {
  let createdEntity;
  let relationEntity;

  beforeAll(async () => {
    [createdEntity] = await db
      .insert(Table)
      .values({
        title: faker.lorem.word(),
        url: faker.internet.url(),
      })
      .returning();

    [relationEntity] = await db
      .insert(Layout)
      .values({
        title: faker.lorem.word(),
      })
      .returning();

    await db
      .insert(PagesToLayouts)
      .values({
        pageId: createdEntity.id,
        layoutId: relationEntity.id,
      })
      .returning();
  });

  it(`should return entity with relations`, async () => {
    const entity = await service({
      id: createdEntity.id,
    });

    expect(entity?.title).toBeDefined();
  });
});
