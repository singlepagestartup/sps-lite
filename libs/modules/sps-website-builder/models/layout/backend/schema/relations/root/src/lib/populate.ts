import { populate as layoutsToNavbars } from "@sps/sps-website-builder-models-layout-backend-schema-relations-layouts-to-navbars";
import { populate as layoutsToFooters } from "@sps/sps-website-builder-models-layout-backend-schema-relations-layouts-to-footers";
import { populate as pagesToLayouts } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages-to-layouts";

export const populate = {
  ...layoutsToNavbars,
  ...layoutsToFooters,
  ...pagesToLayouts,
};
