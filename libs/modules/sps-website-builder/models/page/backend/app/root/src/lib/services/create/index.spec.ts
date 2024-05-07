import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import { db } from "@sps/sps-db-provider";
import { faker } from "@faker-js/faker";
import { service } from "./index";

describe("create", () => {
  beforeAll(async () => {});

  afterAll(async () => {});

  it(`should create new entity`, async () => {
    const startPageEntites = await db.select().from(Table);

    const newTitle = faker.lorem.word(10);
    const url = faker.internet.url();

    const updatedEntity = await service({
      data: {
        title: newTitle,
        url,
      },
    });

    const notExistsInStartEntites = startPageEntites.find(
      (entity) => entity.id === updatedEntity.id,
    );

    const endPageEntites = await db.select().from(Table);

    const existsInEndEntites = endPageEntites.find(
      (entity) => entity.id === updatedEntity.id,
    );

    expect(updatedEntity.title).toBe(newTitle);
    expect(notExistsInStartEntites).not.toBeDefined();
    expect(existsInEndEntites).toBeDefined();
  });
});
