import { relation as logotypesToFiles } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-logotypes-to-files";
import { relation as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...logotypesToFiles(helpers), ...navbarBlocksToLogotypes(helpers) };
});
