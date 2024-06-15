import { relation as metadataToSpsFileStorageModuleFiles } from "@sps/sps-website-builder-models-metadata-backend-schema-relations-metadata-to-sps-file-storage-module-files";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-metadata-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...metadataToSpsFileStorageModuleFiles(helpers) };
});
