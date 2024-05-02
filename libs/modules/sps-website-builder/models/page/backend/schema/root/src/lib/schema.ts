import {
  Table,
  VariantEnumTable,
} from "@sps/sps-website-builder-models-page-backend-schema-table";
import { Relations } from "@sps/sps-website-builder-models-page-backend-schema-relations";
export {
  populate,
  transformData,
  config,
} from "@sps/sps-website-builder-models-page-backend-schema-relations";

export const name = "Page";
export const PageTable = Table;
export const PageVariantEnumTable = VariantEnumTable;
export const PageRelations = Relations;
