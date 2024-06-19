import { populate as pagesToWidgets } from "@sps/sps-host-models-widget-backend-schema-relations-pages-to-widgets";
export const populate = (params: any) => {
  return {
    pagesToWidgets: pagesToWidgets(params),
  } as const;
};
