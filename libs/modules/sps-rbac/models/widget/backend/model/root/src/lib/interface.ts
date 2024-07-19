import { Table } from "@sps/sps-rbac/models/widget/backend/schema/table";

export type SCHEMA = (typeof Table)["$inferInsert"];
