import { relation as rolesToPermissions } from "@sps/sps-rbac/models/permission/backend/schema/relations/roles-to-permissions";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac/models/permission/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...rolesToPermissions(helpers) };
});
