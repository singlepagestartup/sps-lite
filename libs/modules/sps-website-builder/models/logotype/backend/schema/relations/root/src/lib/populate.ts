import { populate as widgetsToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-widgets-to-logotypes";
import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";

export const populate = {
  ...widgetsToLogotypes,
  ...navbarBlocksToLogotypes,
};
