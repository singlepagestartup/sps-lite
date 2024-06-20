import { Table as FeaturesSectionBlock } from "@sps/sps-website-builder/models/features-section-block/backend/schema/table";
import { Table as Feature } from "@sps/sps-website-builder/models/feature/backend/schema/table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  featuresSectionBlock: one(FeaturesSectionBlock, {
    fields: [Table.featuresSectionBlockId],
    references: [FeaturesSectionBlock.id],
  }),
  feature: one(Feature, {
    fields: [Table.featureId],
    references: [Feature.id],
  }),
}));

export const populate = (params: any) => {
  return {
    featuresSectionBlock: true,
    feature: true,
  } as const;
};
