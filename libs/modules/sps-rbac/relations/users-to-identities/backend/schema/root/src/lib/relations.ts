import { Table as User } from "@sps/sps-rbac-models-user-backend-schema-table";

import { Table as Identity } from "@sps/sps-rbac-models-identity-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  user: one(User, {
    fields: [Table.userId],
    references: [User.id],
  }),

  identity: one(Identity, {
    fields: [Table.identityId],
    references: [Identity.id],
  }),
}));

export const populate = (params: any) => {
  return {
    user: true,

    identity: true,
  } as const;
};
