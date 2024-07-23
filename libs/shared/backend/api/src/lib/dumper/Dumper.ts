import fs from "fs/promises";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

export class Dumper<S, T extends PgTableWithColumns<any>> {
  services: any;
  table: PgTableWithColumns<any>;
  seedsPath = `${__dirname}/../seed/seeds`;
  skip: boolean;

  constructor(props: {
    services: S;
    table: T;
    seedsPath?: string;
    skip?: boolean;
  }) {
    this.services = props.services;
    this.table = props.table;
    this.skip = props.skip || false;

    if (props.seedsPath) {
      this.seedsPath = props.seedsPath;
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
    if (this.skip) {
      return;
    }

    await this.init();

    const entities = await this.services.find();

    for (const entity of entities) {
      const fileContent = JSON.stringify(entity, null, 2);

      await fs.writeFile(`${this.seedsPath}/${entity.id}.json`, fileContent);
    }
  }
}
