import { relation as logotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-logotypes-to-sps-file-storage-module-widgets";
import { relation as footerBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-footer-blocks-to-logotypes";

import { relation as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...logotypesToSpsFileStorageWidgets(helpers),
    ...footerBlocksToLogotypes(helpers),
    ...navbarBlocksToLogotypes(helpers),
  };
});
