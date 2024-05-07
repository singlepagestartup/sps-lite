import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as PagesToLayouts } from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { db } from "@sps/sps-db-provider";
import { en, faker } from "@faker-js/faker";
import { service } from "./index";
import { eq } from "drizzle-orm";

describe("find", () => {
  const createdEntities: Array<typeof Table.$inferSelect> = [];
  const relationEntities: Array<typeof Layout.$inferSelect> = [];

  beforeAll(async () => {
    const iterations = 3;
    for (let i = 0; i < iterations; i++) {
      const [createdEntity] = await db
        .insert(Table)
        .values({
          title: faker.lorem.word(),
          url: faker.internet.url(),
        })
        .returning();

      const [relationEntity] = await db
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

      createdEntities.push(createdEntity);
      relationEntities.push(relationEntity);
    }
  });

  afterAll(async () => {
    for (const createdEntity of createdEntities) {
      await db.delete(Table).where(eq(Table.id, createdEntity.id));
    }
    for (const relationEntity of relationEntities) {
      await db.delete(Layout).where(eq(Layout.id, relationEntity.id));
    }
  });

  it(`should return many entites with relations`, async () => {
    const entities = await service();

    for (const entity of entities) {
      if (createdEntities.find((c) => c.id === entity.id)) {
        expect(entity?.title).toBeDefined();
        expect(entity?.layouts).toBeDefined();
        expect(entity?.layouts?.length).toEqual(1);
      }
    }
  });
});
