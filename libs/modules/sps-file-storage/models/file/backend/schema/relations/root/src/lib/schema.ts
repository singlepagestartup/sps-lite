import { relation as widgetsToFiles } from "@sps/sps-file-storage/models/file/backend/schema/relations/widgets-to-files";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-file-storage/models/file/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgetsToFiles(helpers) };
});
