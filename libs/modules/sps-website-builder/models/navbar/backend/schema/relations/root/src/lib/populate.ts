import { populate as widgets } from "@sps/sps-website-builder-models-navbar-backend-schema-relations-widgets";
import { populate as layouts } from "@sps/sps-website-builder-models-navbar-backend-schema-relations-layouts";
export const populate = { ...widgets, ...layouts };
