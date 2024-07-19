import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/identity/backend/schema/table";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {}
