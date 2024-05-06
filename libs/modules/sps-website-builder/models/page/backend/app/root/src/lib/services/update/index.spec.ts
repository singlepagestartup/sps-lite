import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Table as Layout } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";

describe("update", () => {
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
  });

  it(`should change entity by id`, async () => {
    const newTitle = faker.lorem.word(10);

    const updatedEntity = await service({
      id: createdEntity.id,
      data: {
        title: newTitle,
      },
    });

    expect(updatedEntity.title).toBe(newTitle);
  });

  it(`should add relation entity by id`, async () => {
    const updatedEntity = await service({
      id: createdEntity.id,
      data: {
        layouts: [
          {
            id: relationEntity.id,
          },
        ],
      },
    });

    // expect(updatedEntity.layouts?.length).toBeGreaterThan(0);
  });
});
