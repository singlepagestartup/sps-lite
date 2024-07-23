import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder/models/widget/backend/schema/table";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {
  async dump() {
    const dumpResult = await this.controller.service.dump();

    return dumpResult;
  }
}
