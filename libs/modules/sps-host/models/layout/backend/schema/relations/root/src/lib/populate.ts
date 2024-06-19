import { populate as pagesToLayouts } from "@sps/sps-host-models-layout-backend-schema-relations-pages-to-layouts";
export const populate = (params: any) => {
  return { pagesToLayouts: pagesToLayouts(params) } as const;
};
