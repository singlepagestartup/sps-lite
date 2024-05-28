import { populate as slidersToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-sliders-to-slides";

export const populate = (params: any) => {
  return {
    slidersToSlides: slidersToSlides(params),
  } as const;
};
