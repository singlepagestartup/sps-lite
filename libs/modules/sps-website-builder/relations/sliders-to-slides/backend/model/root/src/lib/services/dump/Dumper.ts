import { services as modelServices } from "..";
import { Table } from "@sps/sps-website-builder-relations-sliders-to-slides-backend-schema";
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
