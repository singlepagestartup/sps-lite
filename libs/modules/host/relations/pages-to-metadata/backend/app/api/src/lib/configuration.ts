import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/host/relations/pages-to-metadata/backend/repository/database";
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
          module: "host",
          name: "pages-to-metadata",
          type: "relation",
          transformers: [
            {
              field: "pageId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "page" &&
                      seed.type === "model" &&
                      seed.module === "host",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.pageId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "metadataId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "metadata" &&
                      seed.type === "model" &&
                      seed.module === "host",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.metadataId,
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
