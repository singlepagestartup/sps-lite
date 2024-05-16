import { relation as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-logotypes";
import { relation as navbarBlocksToButtons } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-buttons";
import { relation as widgets } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...navbarBlocksToLogotypes(helpers),
    ...navbarBlocksToButtons(helpers),
    ...widgets(helpers),
  };
});
