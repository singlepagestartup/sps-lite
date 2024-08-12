import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/website-builder/relations/widgets-to-content-blocks/backend/repository/database";
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
          module: "website-builder",
          name: "widgets-to-content-blocks",
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
                      seed.module === "website-builder",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.widgetId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "contentBlockId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "content-block" &&
                      seed.type === "model" &&
                      seed.module === "website-builder",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.contentBlockId,
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
