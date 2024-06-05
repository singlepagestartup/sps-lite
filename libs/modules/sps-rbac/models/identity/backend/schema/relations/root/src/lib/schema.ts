import { relation as usersToIdentities } from "@sps/sps-rbac-models-identity-backend-schema-relations-users-to-identities";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-identity-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...usersToIdentities(helpers) };
});
