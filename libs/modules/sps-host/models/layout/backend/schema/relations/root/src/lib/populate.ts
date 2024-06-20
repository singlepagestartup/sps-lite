import { populate as layoutsToWidgets } from "@sps/sps-host-models-layout-backend-schema-relations-layouts-to-widgets";
import { populate as pagesToLayouts } from "@sps/sps-host-models-layout-backend-schema-relations-pages-to-layouts";
export const populate = (params: any) => {
  return {
    layoutsToWidgets: layoutsToWidgets(params),
    pagesToLayouts: pagesToLayouts(params),
  } as const;
};
