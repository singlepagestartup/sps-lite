import { relation as rolesToPermissions } from "@sps/sps-rbac/models/role/backend/schema/relations/roles-to-permissions";
import { relation as subjectsToRoles } from "@sps/sps-rbac/models/role/backend/schema/relations/subjects-to-roles";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac/models/role/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...rolesToPermissions(helpers), ...subjectsToRoles(helpers) };
});
