import { relations } from "drizzle-orm";
import { Table } from "@sps/sps-broadcast/models/message/backend/schema/table";

export const Relations = relations(Table, (helpers) => {
  return {};
});
