import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";

import { Table as Logotype } from "@sps/sps-website-builder-models-logotype-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),

  logotype: one(Logotype, {
    fields: [Table.logotypeId],
    references: [Logotype.id],
  }),
}));

export const populate = (params: any) => {
  return {
    widget: true,
    logotype: true,
  } as const;
};
