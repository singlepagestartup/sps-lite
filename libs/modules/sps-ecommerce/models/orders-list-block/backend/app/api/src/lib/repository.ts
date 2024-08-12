import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-ecommerce/models/orders-list-block/backend/repository/database";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}
