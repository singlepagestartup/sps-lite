import { Table as HeroSectionBlock } from "@sps/sps-website-builder-models-hero-section-block-backend-schema-table";
import { Table as Button } from "@sps/sps-website-builder-models-button-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  heroSectionBlock: one(HeroSectionBlock, {
    fields: [Table.heroSectionBlockId],
    references: [HeroSectionBlock.id],
  }),
  button: one(Button, {
    fields: [Table.buttonId],
    references: [Button.id],
  }),
}));

export const populate = {
  heroSectionBlock: true as const,
  button: true as const,
};
