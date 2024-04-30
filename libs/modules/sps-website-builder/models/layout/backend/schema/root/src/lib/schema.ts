import { Table } from "@sps/sps-website-builder-models-layout-backend-schema-table";
import { Relations } from "@sps/sps-website-builder-models-layout-backend-schema-relations";
export {
  populate,
  transformData,
} from "@sps/sps-website-builder-models-layout-backend-schema-relations";

export const name = "LayoutTable";
export const LayoutTable = Table;
export const LayoutRelations = Relations;
