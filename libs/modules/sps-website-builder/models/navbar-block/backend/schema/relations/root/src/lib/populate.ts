import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-logotypes";
import { populate as navbarBlocksToButtons } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-buttons";
import { populate as widgets } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets";
export const populate = {
  ...navbarBlocksToLogotypes,
  ...navbarBlocksToButtons,
  ...widgets,
};
