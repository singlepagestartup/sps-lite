import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/logotypes-cloud-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/logotypes-cloud-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "LogotypesCloudBlock";
export const route = "components/page-blocks.logotypes-cloud-block";
export const populate = modelPopulate;
