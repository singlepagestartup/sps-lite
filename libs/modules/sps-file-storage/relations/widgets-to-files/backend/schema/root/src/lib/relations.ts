import { Table as Widget } from "@sps/sps-file-storage/models/widget/backend/schema/table";

import { Table as File } from "@sps/sps-file-storage/models/file/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),

  file: one(File, {
    fields: [Table.fileId],
    references: [File.id],
  }),
}));

export const populate = (params: any) => {
  return {
    widget: true as const,
    file: true as const,
  };
};
