import { Table as Channel } from "@sps/sps-broadcast/models/channel/backend/schema/table";

import { Table as Message } from "@sps/sps-broadcast/models/message/backend/schema/table";

import { relations } from "drizzle-orm";
import { Table } from "./table";

export const Relations = relations(Table, ({ one }) => ({
  channel: one(Channel, {
    fields: [Table.channelId],
    references: [Channel.id],
  }),

  message: one(Message, {
    fields: [Table.messageId],
    references: [Message.id],
  }),
}));

export const populate = (params: any) => {
  return {
    channel: true,

    message: true,
  } as const;
};
