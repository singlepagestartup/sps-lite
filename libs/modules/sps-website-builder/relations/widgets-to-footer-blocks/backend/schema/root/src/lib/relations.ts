import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as FooterBlock } from "@sps/sps-website-builder-models-footer-block-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
  }),
  footerBlock: one(FooterBlock, {
    fields: [Table.footerBlockId],
    references: [FooterBlock.id],
  }),
}));

export const populate = (params: any) => {
  return {
    widget: true,
    footerBlock: true,
  } as const;
};
