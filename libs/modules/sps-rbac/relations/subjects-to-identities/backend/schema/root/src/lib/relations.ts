import { Table as Subject } from "@sps/sps-rbac/models/subject/backend/schema/table";

import { Table as Identity } from "@sps/sps-rbac/models/identity/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  subject: one(Subject, {
    fields: [Table.subjectId],
    references: [Subject.id],
  }),

  identity: one(Identity, {
    fields: [Table.identityId],
    references: [Identity.id],
  }),
}));

export const populate = (params: any) => {
  return {
    subject: true,

    identity: true,
  } as const;
};
