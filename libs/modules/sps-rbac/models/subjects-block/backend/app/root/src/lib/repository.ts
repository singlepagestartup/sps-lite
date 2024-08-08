import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/models/subjects-block/backend/repository/database";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}