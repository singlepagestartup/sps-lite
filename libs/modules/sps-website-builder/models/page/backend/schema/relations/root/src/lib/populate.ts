import { populate as pagesToWidgets } from "@sps/sps-website-builder-models-page-backend-schema-relations-pages-to-widgets";
import { populate as pagesToLayouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-pages-to-layouts";
export const populate = (params: any) => {
  return {
    pagesToWidgets: pagesToWidgets(params),
    pagesToLayouts: pagesToLayouts(params),
  } as const;
};
