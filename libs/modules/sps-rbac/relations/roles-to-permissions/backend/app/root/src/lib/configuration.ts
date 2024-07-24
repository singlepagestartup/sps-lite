import { Configuration as ParentConfiguration } from "@sps/shared-backend-api";
import { schema } from "@sps/sps-rbac/backend/db/root";
import {
  Table,
  insertSchema,
  selectSchema,
  dataDirectory,
} from "@sps/sps-rbac/relations/roles-to-permissions/backend/repository/database";
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
          active: true,
          type: "json",
          directory: dataDirectory,
        },
        seed: {
          active: true,
          module: "sps-rbac",
          name: "roles-to-permissions",
          type: "relation",
          transformers: [
            {
              field: "roleId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "role" &&
                      seed.type === "model" &&
                      seed.module === "sps-rbac",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.roleId,
                  );

                return relationEntites?.[0].new.id;
              },
            },
            {
              field: "permissionId",
              transform: (data) => {
                const relationEntites = data.seeds
                  .find(
                    (seed) =>
                      seed.name === "permission" &&
                      seed.type === "model" &&
                      seed.module === "sps-rbac",
                  )
                  ?.seeds?.filter(
                    (seed) => seed.dump.id === data.entity.dump.permissionId,
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
