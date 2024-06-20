import { Table as Session } from "@sps/sps-rbac/models/session/backend/schema/table";

import { Table as Authentication } from "@sps/sps-rbac/models/authentication/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  session: one(Session, {
    fields: [Table.sessionId],
    references: [Session.id],
  }),

  authentication: one(Authentication, {
    fields: [Table.authenticationId],
    references: [Authentication.id],
  }),
}));

export const populate = (params: any) => {
  return {
    session: true,

    authentication: true,
  } as const;
};
