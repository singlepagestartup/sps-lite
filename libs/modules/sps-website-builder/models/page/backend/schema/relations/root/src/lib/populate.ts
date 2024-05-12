import { populate as footers } from "@sps/sps-website-builder-models-page-backend-schema-relations-footers";
import { populate as navbars } from "@sps/sps-website-builder-models-page-backend-schema-relations-navbars";
import { populate as widgets } from "@sps/sps-website-builder-models-page-backend-schema-relations-widgets";
import { populate as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";
export const populate = { ...footers, ...navbars, ...widgets, ...layouts };
