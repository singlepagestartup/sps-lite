import { config as navbars } from "@sps/sps-website-builder-models-layout-backend-schema-relations-navbars";
import { config as footers } from "@sps/sps-website-builder-models-layout-backend-schema-relations-footers";
import { config as pages } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";
export const config = {
  [navbars.name]: navbars,
  [footers.name]: footers,
  [pages.name]: pages,
};
