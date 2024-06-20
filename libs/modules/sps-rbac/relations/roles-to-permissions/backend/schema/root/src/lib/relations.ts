import { Table as Role } from "@sps/sps-rbac/models/role/backend/schema/table";

import { Table as Permission } from "@sps/sps-rbac/models/permission/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  role: one(Role, {
    fields: [Table.roleId],
    references: [Role.id],
  }),

  permission: one(Permission, {
    fields: [Table.permissionId],
    references: [Permission.id],
  }),
}));

export const populate = (params: any) => {
  return {
    role: true,

    permission: true,
  } as const;
};
