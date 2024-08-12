import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/website-builder/relations/content-blocks-to-file-storage-module-widgets/backend/repository/database";
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
          name: "content-blocks-to-file-storage-module-widgets",
          type: "relation",
          transformers: [
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
            {
              field: "spsFileStorageModuleWidgetId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "widget" &&
                      seed.type === "model" &&
                      seed.module === "file-storage",
                  )
                  ?.seeds?.filter(
                    (seed) =>
                      seed.dump.id ===
                      data.entity.dump.spsFileStorageModuleWidgetId,
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
