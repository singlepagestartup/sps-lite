import { services as modelServices } from "..";
import { Table } from "@sps/sps-website-builder/relations/navbar-blocks-to-buttons-arrays/backend/schema/root";
import { Seeder as SpsSeeder } from "@sps/shared-backend-api";
import { config } from "../../config";

export class Seeder extends SpsSeeder<typeof modelServices, typeof Table> {
  constructor() {
    super({
      services: modelServices,
      table: Table,
      seedsPath: __dirname + "/seeds",
      type: "relation",
      config,
    });
  }
}
