import { Table as Subject } from "@sps/sps-rbac-models-subject-backend-schema-table";

import { Table as Role } from "@sps/sps-rbac-models-role-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  subject: one(Subject, {
    fields: [Table.subjectId],
    references: [Subject.id],
  }),

  role: one(Role, {
    fields: [Table.roleId],
    references: [Role.id],
  }),
}));

export const populate = (params: any) => {
  return {
    subject: true,

    role: true,
  } as const;
};
