import { populate as pagesToWidgets } from "@sps/sps-host-models-page-backend-schema-relations-pages-to-widgets";
import { populate as pagesToMetadata } from "@sps/sps-host-models-page-backend-schema-relations-pages-to-metadata";
import { populate as pagesToLayouts } from "@sps/sps-host-models-page-backend-schema-relations-pages-to-layouts";
export const populate = (params: any) => {
  return {
    pagesToWidgets: pagesToWidgets(params),
    pagesToMetadata: pagesToMetadata(params),
    pagesToLayouts: pagesToLayouts(params),
  } as const;
};
