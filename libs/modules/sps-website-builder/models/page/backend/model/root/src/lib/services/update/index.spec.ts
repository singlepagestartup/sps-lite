import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Table as Slide } from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { Table as SlidesToPages } from "@sps/sps-website-builder-backend-schema-relations-slides-to-pages";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";
import { eq } from "drizzle-orm";

describe("update", () => {
  let pageEntity: typeof Table.$inferSelect;
  let layoutEntity: typeof Layout.$inferSelect;
  let slideEntity: typeof Slide.$inferSelect;

  beforeAll(async () => {
    [pageEntity] = await db
      .insert(Table)
      .values({
        title: faker.lorem.word(),
        url: faker.internet.url(),
      })
      .returning();

    [layoutEntity] = await db
      .insert(Layout)
      .values({
        title: faker.lorem.word(),
      })
      .returning();

    [slideEntity] = await db
      .insert(Slide)
      .values({
        title: faker.lorem.word(),
      })
      .returning();

    await db
      .insert(SlidesToPages)
      .values({
        pageId: pageEntity.id,
        slideId: slideEntity.id,
      })
      .returning();
  });

  afterAll(async () => {
    await db.delete(Table).where(eq(Table.id, pageEntity.id));
    await db.delete(Layout).where(eq(Layout.id, layoutEntity.id));
    await db.delete(Slide).where(eq(Slide.id, slideEntity.id));
  });

  it(`should change entity by id`, async () => {
    const newTitle = faker.lorem.word(10);

    const updatedEntity = await service({
      id: pageEntity.id,
      data: {
        title: newTitle,
      },
    });

    expect(updatedEntity.title).toBe(newTitle);
  });

  it(`should add relation entity by id`, async () => {
    const newTitle = faker.lorem.word(10);

    const updatedEntity = await service({
      id: pageEntity.id,
      data: {
        title: newTitle,
        layouts: [
          {
            id: layoutEntity.id,
          },
        ],
        slides: [],
      },
    });

    expect(updatedEntity.title).toBe(newTitle);
    expect(updatedEntity.layouts?.length).toEqual(1);
    expect(updatedEntity.slides?.length).toEqual(0);
  });
});
