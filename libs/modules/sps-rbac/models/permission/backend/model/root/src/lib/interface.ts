import { Table } from "@sps/sps-rbac/models/permission/backend/schema/root";

export type SCHEMA = (typeof Table)["$inferInsert"];
