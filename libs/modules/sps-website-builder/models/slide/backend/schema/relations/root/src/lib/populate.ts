import { populate as slidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-models-slide-backend-schema-relations-slides-to-sps-file-storage-widgets";
import { populate as slidersToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-sliders-to-slides";

export const populate = (params: any) => {
  return {
    slidesToSpsFileStorageWidgets: slidesToSpsFileStorageWidgets(params),
    slidersToSlides: slidersToSlides(params),
  } as const;
};
