import { populate as navbarsToWidgets } from "@sps/sps-website-builder/models/navbar/backend/schema/relations/navbars-to-widgets";

export const populate = (params: any) => {
  return {
    navbarsToWidgets: navbarsToWidgets(params),
  } as const;
};
