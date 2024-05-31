import { populate as navbarsToWidgets } from "@sps/sps-website-builder-models-navbar-backend-schema-relations-navbars-to-widgets";

import { populate as layoutsToNavbars } from "@sps/sps-website-builder-models-navbar-backend-schema-relations-layouts-to-navbars";

export const populate = (params: any) => {
  return {
    navbarsToWidgets: navbarsToWidgets(params),
    layoutsToNavbars: layoutsToNavbars(params),
  } as const;
};
