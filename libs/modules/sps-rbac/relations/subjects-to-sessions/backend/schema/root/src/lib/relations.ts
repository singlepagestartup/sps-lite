import { Table as Subject } from "@sps/sps-rbac-models-subject-backend-schema-table";

import { Table as Session } from "@sps/sps-rbac-models-session-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  subject: one(Subject, {
    fields: [Table.subjectId],
    references: [Subject.id],
  }),

  session: one(Session, {
    fields: [Table.sessionId],
    references: [Session.id],
  }),
}));

export const populate = (params: any) => {
  return {
    subject: true,

    session: true,
  } as const;
};
