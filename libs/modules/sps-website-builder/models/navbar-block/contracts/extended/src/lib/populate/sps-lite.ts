import { populate as parentPopulate } from "@sps/sps-website-builder-models-navbar-block-contracts";

export const populate = {
  ...parentPopulate,
  navbarBlocksToButtonsArrays: {
    orderBy: { column: "orderIndex", method: "asc" },
  },
};
