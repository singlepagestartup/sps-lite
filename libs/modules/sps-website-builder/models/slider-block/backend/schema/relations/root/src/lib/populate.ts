import { populate as sliderBlocksToSliders } from "@sps/sps-website-builder-models-slider-block-backend-schema-relations-slider-blocks-to-sliders";
import { populate as widgets } from "@sps/sps-website-builder-models-slider-block-backend-schema-relations-widgets";
export const populate = { ...sliderBlocksToSliders, ...widgets };
