import { relation as sessionsToAuthentications } from "@sps/sps-rbac-models-session-backend-schema-relations-sessions-to-authentications";
import { relation as usersToSessions } from "@sps/sps-rbac-models-session-backend-schema-relations-users-to-sessions";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-rbac-models-session-backend-schema-table";

export const Relations = relations(Table, (helpers) => {
  return { ...sessionsToAuthentications(helpers), ...usersToSessions(helpers) };
});
