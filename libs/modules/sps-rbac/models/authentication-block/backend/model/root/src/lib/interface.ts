import { Table } from "@sps/sps-rbac/models/authentication-block/backend/schema/root";

export type SCHEMA = (typeof Table)["$inferInsert"];
