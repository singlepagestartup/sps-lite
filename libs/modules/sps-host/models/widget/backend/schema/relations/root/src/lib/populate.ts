import { populate as widgetsToSpsWebsiteBuilderModuleWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-widgets-to-sps-website-builder-module-widgets";
import { populate as pagesToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-pages-to-widgets";
export const populate = (params: any) => {
  return {
    widgetsToSpsWebsiteBuilderModuleWidgets:
      widgetsToSpsWebsiteBuilderModuleWidgets(params),
    pagesToWidgets: pagesToWidgets(params),
  } as const;
};
