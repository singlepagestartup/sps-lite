import { services as modelServices } from "..";
import { Table } from "@sps/sps-host-relations-layouts-to-widgets-backend-schema";
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
