import { services as modelServices } from "..";
import { Table } from "@sps/sps-rbac/relations/sessions-to-authentications/backend/schema/root";
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
