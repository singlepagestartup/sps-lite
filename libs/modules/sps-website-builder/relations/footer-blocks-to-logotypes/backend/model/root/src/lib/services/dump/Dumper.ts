import { services as modelServices } from "..";
import { Table } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/backend/schema/root";
import { Dumper as SpsDumper } from "@sps/shared-backend-api";

export class Dumper extends SpsDumper<typeof modelServices, typeof Table> {
  constructor() {
    super({
      services: modelServices,
      table: Table,
      seedsPath: __dirname + "/../seed/seeds",
    });
  }
}
