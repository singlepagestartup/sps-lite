import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/slide-over/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/populate";

export interface IModel extends IEntity {}
export interface IModelExtended extends IEntityExtended {}

export const tag = "SlideOver";
export const route = "slide-overs";
export const populate = modelPopulate;
