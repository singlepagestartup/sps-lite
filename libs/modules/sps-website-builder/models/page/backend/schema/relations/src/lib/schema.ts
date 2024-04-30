import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-page-backend-schema-table";
import {
  PagesToLayoutsTable,
  pagesToLayoutsName,
  populate as pagesToLayoutsPopulate,
} from "@sps/sps-website-builder-backend-schema-relations";

const relationAliases = {
  [pagesToLayoutsName]: {
    toDataKey: "layouts",
    schemaKey: "layout",
  },
};

export const Relations = relations(Table, (helpers) => {
  return {
    [pagesToLayoutsName]: helpers.many(PagesToLayoutsTable),
  };
});

export const populate = {
  [pagesToLayoutsName]: {
    with: pagesToLayoutsPopulate,
  },
};

export const transformData = ({ data }: { data: any }) => {
  const transformedData = {};

  Object.entries(data).forEach(([key, value]) => {
    if (relationAliases[key]) {
      const relationConfig = relationAliases[key];
      const toAddKey = relationConfig.toDataKey;
      const toAddData = data[key].map(
        (item: any) => item[relationConfig.schemaKey],
      );
      transformedData[toAddKey] = toAddData;

      return;
    }

    transformedData[key] = value;
  });

  return transformedData;
};
