import { relation as featuresToSpsFileStorageModuleFiles } from "@sps/sps-website-builder/models/feature/backend/schema/relations/features-to-sps-file-storage-module-files";
import { relation as featuresSectionBlocksToFeatures } from "@sps/sps-website-builder/models/feature/backend/schema/relations/features-section-blocks-to-features";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder/models/feature/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...featuresToSpsFileStorageModuleFiles(helpers),
    ...featuresSectionBlocksToFeatures(helpers),
  };
});
