import { populate as widgetsToExternalModules } from "@sps/sps-host-models-widget-backend-schema-relations-widgets-to-external-modules";
import { populate as pagesToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-pages-to-widgets";
export const populate = (params: any) => {
  return {
    widgetsToExternalModules: widgetsToExternalModules(params),
    pagesToWidgets: pagesToWidgets(params),
  } as const;
};
