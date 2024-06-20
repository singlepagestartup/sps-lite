import { relation as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/models/widget/backend/schema/relations/widgets-to-authentication-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac/models/widget/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgetsToAuthenticationBlocks(helpers) };
});
