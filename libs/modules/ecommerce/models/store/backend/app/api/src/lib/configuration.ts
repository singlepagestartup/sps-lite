import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/ecommerce/models/store/backend/repository/database";
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
          name: "store",
          type: "model",
          filters: [
            {
              column: "slug",
              method: "eq",
              value: (data) => {
                return data.entity.dump.slug;
              },
            },
          ],
        },
      },
    });
  }
}