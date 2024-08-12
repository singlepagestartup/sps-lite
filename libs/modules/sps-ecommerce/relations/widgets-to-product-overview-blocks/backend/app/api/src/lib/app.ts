import "reflect-metadata";
import { injectable } from "inversify";
import { DefaultApp } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-ecommerce/relations/widgets-to-product-overview-blocks/backend/repository/database";

@injectable()
export class App extends DefaultApp<(typeof Table)["$inferSelect"]> {}
