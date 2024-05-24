import { populate as widgetsToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-widgets-to-slides";
import { populate as slidersToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-sliders-to-slides";

export const populate = { ...widgetsToSlides, ...slidersToSlides };
