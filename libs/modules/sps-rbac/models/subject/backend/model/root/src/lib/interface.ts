import { Table } from "@sps/sps-rbac/models/subject/backend/schema/table";

export type SCHEMA = (typeof Table)["$inferInsert"];
