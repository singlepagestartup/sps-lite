import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-rbac/relations/subjects-to-roles/backend/schema/root";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}
