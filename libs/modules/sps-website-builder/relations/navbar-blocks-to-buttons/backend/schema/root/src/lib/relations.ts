import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";
import { Table as Button } from "@sps/sps-website-builder-models-button-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  navbarBlock: one(NavbarBlock, {
    fields: [Table.navbarBlockId],
    references: [NavbarBlock.id],
  }),
  button: one(Button, {
    fields: [Table.buttonId],
    references: [Button.id],
  }),
}));

export const populate = {
  navbarBlock: true as const,
  button: true as const,
};
