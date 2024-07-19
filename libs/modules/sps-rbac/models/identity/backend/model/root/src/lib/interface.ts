import { Table } from "@sps/sps-rbac/models/identity/backend/schema/table";

export type SCHEMA = (typeof Table)["$inferInsert"];
