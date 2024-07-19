import { Table } from "@sps/sps-rbac/models/role/backend/schema/table";

export type SCHEMA = (typeof Table)["$inferInsert"];
