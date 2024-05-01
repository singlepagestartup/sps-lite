import {
  PagesToLayoutsTable,
  name as pagesToLayoutsName,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { transformManyToManyRelations } from "@sps/shared-backend-database-config";

const relationAliases = {
  [pagesToLayoutsName]: {
    schemaKey: "page",
    toDataKey: "pages",
  },
};

export const relation = (helpers: any) => {
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
