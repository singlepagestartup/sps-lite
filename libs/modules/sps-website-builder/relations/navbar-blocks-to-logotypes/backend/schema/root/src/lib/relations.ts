import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";
import { Table as Logotype } from "@sps/sps-website-builder-models-logotype-backend-schema-table";
import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  navbarBlock: one(NavbarBlock, {
    fields: [Table.navbarBlockId],
    references: [NavbarBlock.id],
  }),
  logotype: one(Logotype, {
    fields: [Table.logotypeId],
    references: [Logotype.id],
  }),
}));

export const populate = {
  navbarBlock: true as const,
  logotype: true as const,
};
