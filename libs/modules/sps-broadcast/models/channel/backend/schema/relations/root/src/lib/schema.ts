import { relation as channelsToMessages } from "@sps/sps-broadcast/models/channel/backend/schema/relations/channels-to-messages";
import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-broadcast/models/channel/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return { ...channelsToMessages(helpers) };
});
