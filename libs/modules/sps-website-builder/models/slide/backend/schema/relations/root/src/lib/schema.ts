import { relation as slidesToButtonsArrays } from "@sps/sps-website-builder-models-slide-backend-schema-relations-slides-to-buttons-arrays";
import { relation as slidesToSpsFileStorageWidgets } from "@sps/sps-website-builder-models-slide-backend-schema-relations-slides-to-sps-file-storage-module-widgets";
import { relation as slidersToSlides } from "@sps/sps-website-builder-models-slide-backend-schema-relations-sliders-to-slides";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder-models-slide-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...slidesToButtonsArrays(helpers),
    ...slidesToSpsFileStorageWidgets(helpers),
    ...slidersToSlides(helpers),
  };
});
