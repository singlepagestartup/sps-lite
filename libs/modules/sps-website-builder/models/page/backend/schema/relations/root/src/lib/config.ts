import { config as footers } from "@sps/sps-website-builder-models-page-backend-schema-relations-footers";
import { config as navbars } from "@sps/sps-website-builder-models-page-backend-schema-relations-navbars";
import { config as widgets } from "@sps/sps-website-builder-models-page-backend-schema-relations-widgets";
import { config as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
export const config = {
  [footers.name]: footers,
  [navbars.name]: navbars,
  [widgets.name]: widgets,
  [layouts.name]: layouts,
};
