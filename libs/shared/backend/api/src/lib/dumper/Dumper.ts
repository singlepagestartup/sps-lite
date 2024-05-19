import fs from "fs/promises";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export class Dumper<S, T extends PgTableWithColumns<any>> {
  services: any;
  table: PgTableWithColumns<any>;
  seedsPath = `${__dirname}/../seed/seeds`;

  constructor({
    services,
    table,
    seedsPath,
  }: {
    services: S;
    table: T;
    seedsPath?: string;
  }) {
    this.services = services;
    this.table = table;

    if (seedsPath) {
      this.seedsPath = seedsPath;
    }
  }

  async init() {
    await this.clearFolder();
  }

  async clearFolder() {
    const seedFiles = await fs.readdir(this.seedsPath);

    const sanitizedFiles = seedFiles.filter((file) => file.endsWith(".json"));

    for (const sanitizedFile of sanitizedFiles) {
      await fs.unlink(`${this.seedsPath}/${sanitizedFile}`);
    }
  }

  async dump() {
    await this.init();

    const entities = await this.services.find();

    for (const entity of entities) {
      const fileContent = JSON.stringify(entity, null, 2);

      await fs.writeFile(`${this.seedsPath}/${entity.id}.json`, fileContent);
    }
  }
}
