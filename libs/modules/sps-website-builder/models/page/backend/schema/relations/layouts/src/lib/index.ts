import {
  PagesToLayoutsTable,
  name as pagesToLayoutsName,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { transformManyToManyRelations } from "@sps/shared-backend-database-config";
import { TableRelationsHelpers } from "drizzle-orm";

const name = "layouts";
const type = "many";

export const relationAliases = {
  [pagesToLayoutsName]: {
    schemaKey: "layout",
    toDataKey: name,
  },
};

export const relation = <TTableName extends string>(
  helpers: TableRelationsHelpers<TTableName>,
) => {
  return {
    [pagesToLayoutsName]: helpers.many(PagesToLayoutsTable),
  };
};

export const populate = {
  [pagesToLayoutsName]: {
    with: pagesToLayoutsPopulate,
  },
};

export function transformData({ data }: any) {
  const transformedData = transformManyToManyRelations({
    data,
    relationAliases,
  });

  return transformedData;
}

export const config = {
  name,
  type,
  table: PagesToLayoutsTable,
  populate: pagesToLayoutsPopulate,
  schemaKey: "layout",
};
