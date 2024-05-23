import { app as widgetsToFiles } from "@sps/sps-file-storage-relations-widgets-to-files-backend-app";
import { app as widget } from "@sps/sps-file-storage-models-widget-backend-app";
import { app as file } from "@sps/sps-file-storage-models-file-backend-app";
export const routes = {
  "/widgets-to-files": widgetsToFiles,
  "/widgets": widget,
  "/files": file,
};
