import { relation as subjectsToSessions } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-sessions";
import { relation as subjectsToIdentities } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-identities";
import { relation as subjectsToRoles } from "@sps/sps-rbac-models-subject-backend-schema-relations-subjects-to-roles";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-subject-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...subjectsToSessions(helpers),
    ...subjectsToIdentities(helpers),
    ...subjectsToRoles(helpers),
  };
});
