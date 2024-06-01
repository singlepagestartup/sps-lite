import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Role } from "@sps/sps-rbac-models-role-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  user: one(User, {
    fields: [Table.userId],
    references: [User.id],
  }),

  role: one(Role, {
    fields: [Table.roleId],
    references: [Role.id],
  }),
}));

export const populate = (params: any) => {
  return {
    user: true,

    role: true,
  } as const;
};
