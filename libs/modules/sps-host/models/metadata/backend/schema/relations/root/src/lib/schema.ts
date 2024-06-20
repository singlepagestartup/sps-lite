import { relation as pagesToMetadata } from "@sps/sps-host/models/metadata/backend/schema/relations/pages-to-metadata";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-host/models/metadata/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...pagesToMetadata(helpers) };
});
