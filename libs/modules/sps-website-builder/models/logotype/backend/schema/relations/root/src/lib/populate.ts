import { populate as logotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-logotypes-to-sps-file-storage-module-widgets";
import { populate as footerBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-footer-blocks-to-logotypes";

import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";

export const populate = (params: any) => {
  return {
    logotypesToSpsFileStorageWidgets: logotypesToSpsFileStorageWidgets(params),
    footerBlocksToLogotypes: footerBlocksToLogotypes(params),
    navbarBlocksToLogotypes: navbarBlocksToLogotypes(params),
  } as const;
};
