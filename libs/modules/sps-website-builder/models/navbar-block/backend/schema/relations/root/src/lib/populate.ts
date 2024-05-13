import { populate as logotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-logotypes";
import { populate as buttons } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-buttons";
import { populate as widgets } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets";
export const populate = { ...logotypes, ...buttons, ...widgets };
