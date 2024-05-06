import { populate as slides } from "@sps/sps-website-builder-models-page-backend-schema-relations-slides";
import { populate as layouts } from "@sps/sps-website-builder-models-page-backend-schema-relations-layouts";

export const populate = { ...slides, ...layouts };
