import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/backend/schema/root";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {}
