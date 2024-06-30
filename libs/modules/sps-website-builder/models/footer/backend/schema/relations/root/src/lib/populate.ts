import { populate as footersToWidgets } from "@sps/sps-website-builder/models/footer/backend/schema/relations/footers-to-widgets";

export const populate = (params: any) => {
  return {
    footersToWidgets: footersToWidgets(params),
  } as const;
};
