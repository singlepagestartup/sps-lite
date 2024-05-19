import { services as modelServices } from "..";
import { Table } from "@sps/sps-website-builder-relations-hero-section-blocks-to-files-backend-schema";
import { Seeder as SpsSeeder } from "@sps/shared-backend-api";

export class Seeder extends SpsSeeder<typeof modelServices, typeof Table> {
  constructor() {
    super({
      services: modelServices,
      table: Table,
      seedsPath: __dirname + "/seeds",
    });
  }
}
