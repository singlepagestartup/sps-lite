import {
  Table,
  VariantEnumTable,
} from "@sps/sps-website-builder-models-slide-backend-schema-table";
import { Relations } from "@sps/sps-website-builder-models-slide-backend-schema-relations";
export {
  populate,
  transformData,
} from "@sps/sps-website-builder-models-slide-backend-schema-relations";

export const name = "SlideTable";
export const SlideTable = Table;
export const SlideVariantEnumTable = VariantEnumTable;
export const SlideRelations = Relations;
