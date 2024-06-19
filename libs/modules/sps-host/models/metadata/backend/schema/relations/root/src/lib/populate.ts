import { populate as pagesToMetadata } from "@sps/sps-host-models-metadata-backend-schema-relations-pages-to-metadata";
export const populate = (params: any) => {
  return { pagesToMetadata: pagesToMetadata(params) } as const;
};
