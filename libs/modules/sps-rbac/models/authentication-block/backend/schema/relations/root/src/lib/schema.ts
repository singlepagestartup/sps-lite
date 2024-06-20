import { relation as widgetsToAuthenticationBlocks } from "@sps/sps-rbac/models/authentication-block/backend/schema/relations/widgets-to-authentication-blocks";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac/models/authentication-block/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...widgetsToAuthenticationBlocks(helpers) };
});
