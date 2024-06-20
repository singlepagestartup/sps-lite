import { Table as FooterBlock } from "@sps/sps-website-builder/models/footer-block/backend/schema/table";

import { Table as Logotype } from "@sps/sps-website-builder/models/logotype/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  footerBlock: one(FooterBlock, {
    fields: [Table.footerBlockId],
    references: [FooterBlock.id],
  }),

  logotype: one(Logotype, {
    fields: [Table.logotypeId],
    references: [Logotype.id],
  }),
}));

export const populate = (params: any) => {
  return {
    footerBlock: true,
    logotype: true,
  } as const;
};
