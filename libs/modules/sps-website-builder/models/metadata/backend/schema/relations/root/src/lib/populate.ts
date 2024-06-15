import { populate as metadataToSpsFileStorageModuleFiles } from "@sps/sps-website-builder-models-metadata-backend-schema-relations-metadata-to-sps-file-storage-module-files";
export const populate = (params: any) => {
  return {
    metadataToSpsFileStorageModuleFiles:
      metadataToSpsFileStorageModuleFiles(params),
  } as const;
};
