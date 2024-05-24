import { relation as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-buttons-arrays";
import { relation as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-logotypes";

import { relation as widgetsToNavbarBlocks } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets-to-navbar-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...navbarBlocksToButtonsArrays(helpers),
    ...navbarBlocksToLogotypes(helpers),
    ...widgetsToNavbarBlocks(helpers),
  };
});
