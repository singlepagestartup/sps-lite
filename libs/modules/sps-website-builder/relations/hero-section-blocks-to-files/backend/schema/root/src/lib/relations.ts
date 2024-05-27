import { Table as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  heroSectionBlock: one(HeroSectionBlock, {
    fields: [Table.heroSectionBlockId],
    references: [HeroSectionBlock.id],
  }),
}));

export const populate = (params: any) => {
  return {
    heroSectionBlock: true,
  } as const;
};
