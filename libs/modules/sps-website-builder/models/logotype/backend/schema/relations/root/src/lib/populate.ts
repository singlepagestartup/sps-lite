import { populate as logotypesToFiles } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-logotypes-to-files";
import { populate as navbarBlocksToLogotypes } from "@sps/sps-website-builder-models-logotype-backend-schema-relations-navbar-blocks-to-logotypes";

export const populate = { ...logotypesToFiles, ...navbarBlocksToLogotypes };
