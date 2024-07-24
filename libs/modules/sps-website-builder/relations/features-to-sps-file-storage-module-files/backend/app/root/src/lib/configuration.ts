import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
  selectSchema,
} from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/backend/schema/root";
import { injectable } from "inversify";

@injectable()
export class Configuration extends ParentConfiguration {
  constructor() {
    super({
      repository: {
        type: "database",
        schema: schema,
        Table: Table,
        insertSchema,
        selectSchema,
        dump: {
          type: "json",
          directory: `${__dirname}/data`,
        },
        seed: {
          module: "sps-website-builder",
          name: "features-to-sps-file-storage-module-files",
          type: "relation",
          transformers: [
            {
              field: "featureId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "feature" &&
                      seed.type === "model" &&
                      seed.module === "sps-website-builder",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.featureId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "spsFileStorageModuleFileId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "file" &&
                      seed.type === "model" &&
                      seed.module === "sps-file-storage",
                  )
                  ?.seeds?.filter(
                    (seed) =>
                      seed.dump.id ===
                      data.entity.dump.spsFileStorageModuleFileId,
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
