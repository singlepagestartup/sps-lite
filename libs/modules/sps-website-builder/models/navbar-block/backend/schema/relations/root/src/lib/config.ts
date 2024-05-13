import { config as logotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-logotypes";
import { config as buttons } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-buttons";
import { config as widgets } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets";
export const config = {
  [logotypes.name]: logotypes,
  [buttons.name]: buttons,
  [widgets.name]: widgets,
};
