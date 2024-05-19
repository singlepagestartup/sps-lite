import { services as modelServices } from "./services";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema";
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
