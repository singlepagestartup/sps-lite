import { model as layoutsToWidgets } from "@sps/sps-host-relations-layouts-to-widgets-backend-model";
import { model as widgetsToExternalModules } from "@sps/sps-host-relations-widgets-to-external-modules-backend-model";
import { model as pagesToWidgets } from "@sps/sps-host-relations-pages-to-widgets-backend-model";
import { model as pagesToMetadata } from "@sps/sps-host-relations-pages-to-metadata-backend-model";
import { model as pagesToLayouts } from "@sps/sps-host-relations-pages-to-layouts-backend-model";
import { model as metadata } from "@sps/sps-host-models-metadata-backend-model";
import { model as layout } from "@sps/sps-host-models-layout-backend-model";
import { model as page } from "@sps/sps-host-models-page-backend-model";
import { model as widget } from "@sps/sps-host-models-widget-backend-model";
export const models = {
  layoutsToWidgets,
  widgetsToExternalModules,
  pagesToWidgets,
  pagesToMetadata,
  pagesToLayouts,
  metadata,
  layout,
  page,
  widget,
};
