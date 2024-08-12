import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/crm/relations/widgets-to-request-blocks/backend/repository/database";
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
          module: "crm",
          name: "widgets-to-request-blocks",
          type: "relation",
          transformers: [
            {
              field: "widgetId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "widget" &&
                      seed.type === "model" &&
                      seed.module === "crm",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.widgetId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "requestBlockId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "request-block" &&
                      seed.type === "model" &&
                      seed.module === "crm",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.requestBlockId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
          ],
        },
      },
    });
  }
}
