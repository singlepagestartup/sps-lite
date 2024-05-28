import { populate as footerBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-footer-blocks-to-logotypes";

import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";

export const populate = (params: any) => {
  return {
    footerBlocksToLogotypes: footerBlocksToLogotypes(params),
    navbarBlocksToLogotypes: navbarBlocksToLogotypes(params),
  } as const;
};
