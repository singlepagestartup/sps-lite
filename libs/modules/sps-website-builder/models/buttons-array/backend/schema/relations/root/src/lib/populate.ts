import { populate as buttonsArraysToButtons } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-buttons-arrays-to-buttons";
import { populate as heroSectionBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-hero-section-blocks-to-buttons-arrays";
import { populate as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-models-buttons-array-backend-schema-relations-navbar-blocks-to-buttons-arrays";
export const populate = {
  ...buttonsArraysToButtons,
  ...heroSectionBlocksToButtonsArrays,
  ...navbarBlocksToButtonsArrays,
};
