import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as PagesToLayouts } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";
import { eq } from "drizzle-orm";

describe("find-by-id", () => {
  let createdEntity: typeof Table.$inferSelect;
  let relationEntity: typeof Layout.$inferSelect;

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

  afterAll(async () => {
    await db.delete(Table).where(eq(Table.id, createdEntity.id));
    await db.delete(Layout).where(eq(Layout.id, relationEntity.id));
  });

  it(`should return entity with relations`, async () => {
    const entity = await service({
      id: createdEntity.id,
    });

    expect(entity?.title).toBeDefined();
    expect(entity?.layouts).toBeDefined();
    expect(entity?.layouts?.length).toBeGreaterThan(0);
  });
});
