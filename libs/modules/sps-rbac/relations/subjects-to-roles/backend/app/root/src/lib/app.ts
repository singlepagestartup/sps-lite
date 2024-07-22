import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/relations/subjects-to-roles/backend/schema/root";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {}
