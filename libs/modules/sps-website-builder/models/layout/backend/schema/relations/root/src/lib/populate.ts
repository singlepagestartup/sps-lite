import { populate as navbars } from "@sps/sps-website-builder-models-layout-backend-schema-relations-navbars";
import { populate as footers } from "@sps/sps-website-builder-models-layout-backend-schema-relations-footers";
import { populate as pages } from "@sps/sps-website-builder-models-layout-backend-schema-relations-pages";
export const populate = { ...navbars, ...footers, ...pages };
