import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";
import { eq } from "drizzle-orm";

describe("delete", () => {
  let pageEntity: typeof Table.$inferSelect;

  beforeAll(async () => {
    [pageEntity] = await db
      .insert(Table)
      .values({
        title: faker.lorem.word(),
        url: faker.internet.url(),
      })
      .returning();
  });

  afterAll(async () => {});

  it(`should delete entity by id`, async () => {
    const [existingEntityBeforeDelete] = await db
      .select()
      .from(Table)
      .where(eq(Table.id, pageEntity.id));

    const updatedEntity = await service({
      id: pageEntity.id,
    });

    const [existingEntityAfterDelete] = await db
      .select()
      .from(Table)
      .where(eq(Table.id, pageEntity.id));

    expect(existingEntityAfterDelete).not.toBeDefined();
  });
});
