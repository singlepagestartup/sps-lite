import "reflect-metadata";
import { injectable } from "inversify";
import { DatabaseRepository } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/backend/schema/root";

@injectable()
export class Repository extends DatabaseRepository<typeof Table> {}
