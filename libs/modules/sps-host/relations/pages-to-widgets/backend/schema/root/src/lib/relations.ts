import { Table as Page } from "@sps/sps-host-models-page-backend-schema-table";

import { Table as Widget } from "@sps/sps-host-models-widget-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  page: one(Page, {
    fields: [Table.pageId],
    references: [Page.id],
  }),

  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
}));

export const populate = (params: any) => {
  return {
    page: true,

    widget: true,
  } as const;
};
