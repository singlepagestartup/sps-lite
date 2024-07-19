import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/identity/backend/schema/table";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}
