import { Table as Layout } from "@sps/sps-host-models-layout-backend-schema-table";

import { Table as Widget } from "@sps/sps-host-models-widget-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  layout: one(Layout, {
    fields: [Table.layoutId],
    references: [Layout.id],
  }),

  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
}));

export const populate = (params: any) => {
  return {
    layout: true,

    widget: true,
  } as const;
};
