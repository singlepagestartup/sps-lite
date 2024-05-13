import { populate as heroSectionBlocks } from "@sps/sps-website-builder-models-button-backend-schema-relations-hero-section-blocks";
import { populate as navbarBlocks } from "@sps/sps-website-builder-models-button-backend-schema-relations-navbar-blocks";
export const populate = { ...heroSectionBlocks, ...navbarBlocks };
