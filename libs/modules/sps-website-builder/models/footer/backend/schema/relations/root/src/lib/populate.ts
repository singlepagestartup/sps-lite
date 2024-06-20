import { populate as footersToWidgets } from "@sps/sps-website-builder/models/footer/backend/schema/relations/footers-to-widgets";
import { populate as layoutsToFooters } from "@sps/sps-website-builder/models/footer/backend/schema/relations/layouts-to-footers";

export const populate = (params: any) => {
  return {
    footersToWidgets: footersToWidgets(params),
    layoutsToFooters: layoutsToFooters(params),
  } as const;
};
