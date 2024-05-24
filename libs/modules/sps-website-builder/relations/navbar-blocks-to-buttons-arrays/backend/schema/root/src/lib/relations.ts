import { Table as NavbarBlock } from "@sps/sps-website-builder-models-navbar-block-backend-schema-table";

import { Table as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  navbarBlock: one(NavbarBlock, {
    fields: [Table.navbarBlockId],
    references: [NavbarBlock.id],
  }),

  buttonsArray: one(ButtonsArray, {
    fields: [Table.buttonsArrayId],
    references: [ButtonsArray.id],
  }),
}));

export const populate = {
  navbarBlock: true as const,

  buttonsArray: true as const,
};
