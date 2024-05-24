import { Table as ButtonsArray } from "@sps/sps-website-builder-models-buttons-array-backend-schema-table";

import { Table as Button } from "@sps/sps-website-builder-models-button-backend-schema-table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  buttonsArray: one(ButtonsArray, {
    fields: [Table.buttonsArrayId],
    references: [ButtonsArray.id],
  }),

  button: one(Button, {
    fields: [Table.buttonId],
    references: [Button.id],
  }),
}));

export const populate = {
  buttonsArray: true as const,

  button: true as const,
};
