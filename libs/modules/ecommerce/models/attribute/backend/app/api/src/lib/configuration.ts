import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/ecommerce/models/attribute/backend/repository/database";
import { injectable } from "inversify";

@injectable()
export class Configuration extends ParentConfiguration {
  constructor() {
    super({
      repository: {
        type: "database",
        Table: Table,
        insertSchema,
        selectSchema,
        dump: {
          active: true,
          type: "json",
          directory: dataDirectory,
        },
        seed: {
          active: true,
          module: "ecommerce",
          name: "attribute",
          type: "model",
        },
      },
    });
  }
}
