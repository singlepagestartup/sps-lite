import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/sps-ecommerce/relations/widgets-to-product-overview-blocks/backend/repository/database";
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
          module: "sps-ecommerce",
          name: "widgets-to-product-overview-blocks",
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
                      seed.module === "sps-ecommerce",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.widgetId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "productOverviewBlockId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "product-overview-block" &&
                      seed.type === "model" &&
                      seed.module === "sps-ecommerce",
                  )
                  ?.seeds?.filter(
                    (seed) =>
                      seed.dump.id === data.entity.dump.productOverviewBlockId,
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
