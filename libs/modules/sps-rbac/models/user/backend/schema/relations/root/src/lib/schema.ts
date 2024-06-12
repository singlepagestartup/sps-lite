import { relation as usersToSessions } from "@sps/sps-rbac-models-user-backend-schema-relations-users-to-sessions";
import { relation as usersToRoles } from "@sps/sps-rbac-models-user-backend-schema-relations-users-to-roles";
import { relation as usersToIdentities } from "@sps/sps-rbac-models-user-backend-schema-relations-users-to-identities";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-user-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...usersToSessions(helpers),
    ...usersToRoles(helpers),
    ...usersToIdentities(helpers),
  };
});
