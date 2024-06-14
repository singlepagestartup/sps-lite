import { relation as subjectsToSessions } from "@sps/sps-rbac-models-session-backend-schema-relations-subjects-to-sessions";
import { relation as sessionsToAuthentications } from "@sps/sps-rbac-models-session-backend-schema-relations-sessions-to-authentications";

import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-session-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return {
    ...subjectsToSessions(helpers),
    ...sessionsToAuthentications(helpers),
  };
});
