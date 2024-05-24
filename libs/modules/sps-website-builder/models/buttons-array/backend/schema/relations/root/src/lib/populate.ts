import { populate as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-hero-section-blocks-to-buttons-arrays";
import { populate as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-navbar-blocks-to-buttons-arrays";
export const populate = {
  ...heroSectionBlocksToButtonsArrays,
  ...navbarBlocksToButtonsArrays,
};
