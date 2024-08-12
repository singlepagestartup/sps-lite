import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/website-builder/models/footer-block/backend/repository/database";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {}
