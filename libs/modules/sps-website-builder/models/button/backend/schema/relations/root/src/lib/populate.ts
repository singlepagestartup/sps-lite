import { populate as heroSectionBlocksToButtons } from "@sps/sps-website-builder-models-button-backend-schema-relations-hero-section-blocks-to-buttons";
import { populate as navbarBlocksToButtons } from "@sps/sps-website-builder-models-button-backend-schema-relations-navbar-blocks-to-buttons";
export const populate = {
  ...heroSectionBlocksToButtons,
  ...navbarBlocksToButtons,
};
