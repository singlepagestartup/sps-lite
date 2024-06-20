import { app as widgetsToFiles } from "@sps/sps-file-storage/relations/widgets-to-files/backend/app/root";
import { app as widget } from "@sps/sps-file-storage/models/widget/backend/app/root";
import { app as file } from "@sps/sps-file-storage/models/file/backend/app/root";
export const routes = {
  "/widgets-to-files": widgetsToFiles,
  "/widgets": widget,
  "/files": file,
};
