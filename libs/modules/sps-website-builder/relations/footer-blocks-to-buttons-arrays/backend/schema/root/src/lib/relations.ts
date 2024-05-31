import { Table as FooterBlock } from "@sps/sps-website-builder-models-footer-block-backend-schema-table";

import { Table as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  footerBlock: one(FooterBlock, {
    fields: [Table.footerBlockId],
    references: [FooterBlock.id],
  }),

  buttonsArray: one(ButtonsArray, {
    fields: [Table.buttonsArrayId],
    references: [ButtonsArray.id],
  }),
}));

export const populate = (params: any) => {
  return {
    footerBlock: true,
    buttonsArray: true,
  } as const;
};
