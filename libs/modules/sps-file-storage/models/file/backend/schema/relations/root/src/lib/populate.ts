import { populate as widgetsToFiles } from "@sps/sps-file-storage-models-file-backend-schema-relations-widgets-to-files";

export const populate = (params: any) => {
  return {
    widgetsToFiles: widgetsToFiles(params),
  } as const;
};
