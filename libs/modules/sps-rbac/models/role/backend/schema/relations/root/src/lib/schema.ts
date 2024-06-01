import { relation as usersToRoles } from "@sps/sps-rbac-models-role-backend-schema-relations-users-to-roles";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-role-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...usersToRoles(helpers) };
});
