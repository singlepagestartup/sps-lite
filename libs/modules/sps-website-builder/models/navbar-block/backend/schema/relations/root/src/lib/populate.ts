import { populate as navbarBlocksToButtonsArrays } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-buttons-arrays";
import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-navbar-blocks-to-logotypes";

import { populate as widgetsToNavbarBlocks } from "@sps/sps-website-builder-models-navbar-block-backend-schema-relations-widgets-to-navbar-blocks";
export const populate = (params: any) => {
  return {
    navbarBlocksToButtonsArrays: navbarBlocksToButtonsArrays(params),
    navbarBlocksToLogotypes: navbarBlocksToLogotypes(params),
    widgetsToNavbarBlocks: widgetsToNavbarBlocks(params),
  } as const;
};
