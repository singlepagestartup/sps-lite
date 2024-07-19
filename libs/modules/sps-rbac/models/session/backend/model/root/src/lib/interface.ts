import { Table } from "@sps/sps-rbac/models/session/backend/schema/root";

export type SCHEMA = (typeof Table)["$inferInsert"];
