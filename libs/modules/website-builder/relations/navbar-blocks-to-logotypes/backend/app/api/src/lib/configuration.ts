import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/website-builder/relations/navbar-blocks-to-logotypes/backend/repository/database";
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
          name: "navbar-blocks-to-logotypes",
          type: "relation",
          transformers: [
            {
              field: "navbarBlockId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "navbar-block" &&
                      seed.type === "model" &&
                      seed.module === "website-builder",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.navbarBlockId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "logotypeId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "logotype" &&
                      seed.type === "model" &&
                      seed.module === "website-builder",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.logotypeId,
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
