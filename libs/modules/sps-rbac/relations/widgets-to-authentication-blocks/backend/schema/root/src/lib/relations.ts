import { Table as Widget } from "@sps/sps-rbac/models/widget/backend/schema/table";

import { Table as AuthenticationBlock } from "@sps/sps-rbac/models/authentication-block/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),

  authenticationBlock: one(AuthenticationBlock, {
    fields: [Table.authenticationBlockId],
    references: [AuthenticationBlock.id],
  }),
}));

export const populate = (params: any) => {
  return {
    widget: true,

    authenticationBlock: true,
  } as const;
};
