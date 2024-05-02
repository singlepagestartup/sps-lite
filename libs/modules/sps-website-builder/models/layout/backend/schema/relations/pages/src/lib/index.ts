import {
  Table,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations-pages-to-layouts";
import { transformManyToManyRelations } from "@sps/shared-backend-database-config";

const constantName = "PagesToLayouts";

const relationAliases = {
  [constantName]: {
    schemaKey: "page",
    toDataKey: "pages",
  },
};

export const relation = (helpers: any) => {
  return {
    [constantName]: helpers.many(Table),
  };
};

export const populate = {
  [constantName]: {
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
