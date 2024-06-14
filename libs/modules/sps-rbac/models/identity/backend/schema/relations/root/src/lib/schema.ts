import { relation as subjectsToIdentities } from "@sps/sps-rbac-models-identity-backend-schema-relations-subjects-to-identities";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-identity-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...subjectsToIdentities(helpers) };
});
