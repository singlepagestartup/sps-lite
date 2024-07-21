import "reflect-metadata";
import { injectable } from "inversify";
import { CRUDService } from "@sps/shared-backend-api";
import { Table } from "@sps/sps-website-builder/models/slider-block/backend/schema/table";

@injectable()
export class Service extends CRUDService<(typeof Table)["$inferSelect"]> {}
