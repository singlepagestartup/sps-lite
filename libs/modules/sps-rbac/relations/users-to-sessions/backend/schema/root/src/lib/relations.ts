import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Session } from "@sps/sps-rbac-models-session-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  user: one(User, {
    fields: [Table.userId],
    references: [User.id],
  }),

  session: one(Session, {
    fields: [Table.sessionId],
    references: [Session.id],
  }),
}));

export const populate = (params: any) => {
  return {
    user: true,

    session: true,
  } as const;
};
