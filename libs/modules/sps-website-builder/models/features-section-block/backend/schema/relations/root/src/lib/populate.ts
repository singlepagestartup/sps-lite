import { populate as features } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-features";
import { populate as widgets } from "@sps/sps-website-builder-models-features-section-block-backend-schema-relations-widgets";
export const populate = { ...features, ...widgets };
