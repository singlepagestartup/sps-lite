import { relation as buttonsArraysToButtons } from "@sps/sps-website-builder/models/button/backend/schema/relations/buttons-arrays-to-buttons";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-website-builder/models/button/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...buttonsArraysToButtons(helpers) };
});
