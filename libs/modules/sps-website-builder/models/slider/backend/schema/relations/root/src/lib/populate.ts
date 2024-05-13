import { populate as slides } from "@sps/sps-website-builder-models-slider-backend-schema-relations-slides";
import { populate as sliderBlocks } from "@sps/sps-website-builder-models-slider-backend-schema-relations-slider-blocks";
export const populate = { ...slides, ...sliderBlocks };
