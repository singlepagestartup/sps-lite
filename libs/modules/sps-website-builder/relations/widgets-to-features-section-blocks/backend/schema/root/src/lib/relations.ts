import { Table as Widget } from "@sps/sps-website-builder-models-widget-backend-schema-table";
import { Table as FeaturesSectionBlock } from "@sps/sps-website-builder-models-features-section-block-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  widget: one(Widget, {
    fields: [Table.widgetId],
    references: [Widget.id],
    relationName: "widget",
  }),
  featuresSectionBlock: one(FeaturesSectionBlock, {
    fields: [Table.featuresSectionBlockId],
    references: [FeaturesSectionBlock.id],
    relationName: "featuresSectionBlock",
  }),
}));

export const populate = {
  widget: true as const,
  featuresSectionBlock: true as const,
};
