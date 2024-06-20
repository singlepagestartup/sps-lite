import { services as modelServices } from "..";
import { Table } from "@sps/sps-third-parties/models/widget/backend/schema/root";
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
