import { app as layoutsToWidgets } from "@sps/sps-host/relations/layouts-to-widgets/backend/app/root";
import { app as widgetsToExternalModules } from "@sps/sps-host/relations/widgets-to-external-modules/backend/app/root";
import { app as pagesToWidgets } from "@sps/sps-host/relations/pages-to-widgets/backend/app/root";
import { app as pagesToMetadata } from "@sps/sps-host/relations/pages-to-metadata/backend/app/root";
import { app as pagesToLayouts } from "@sps/sps-host/relations/pages-to-layouts/backend/app/root";
import { app as metadata } from "@sps/sps-host/models/metadata/backend/app/root";
import { app as layout } from "@sps/sps-host/models/layout/backend/app/root";
import { app as page } from "@sps/sps-host/models/page/backend/app/root";
import { app as widget } from "@sps/sps-host/models/widget/backend/app/root";
export const routes = {
  "/layouts-to-widgets": layoutsToWidgets,
  "/widgets-to-external-modules": widgetsToExternalModules,
  "/pages-to-widgets": pagesToWidgets,
  "/pages-to-metadata": pagesToMetadata,
  "/pages-to-layouts": pagesToLayouts,
  "/metadata": metadata,
  "/layouts": layout,
  "/pages": page,
  "/widgets": widget,
};
