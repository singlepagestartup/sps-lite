import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-ecommerce/relations/widgets-to-orders-list-blocks/backend/repository/database";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}
