import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-module-widgets-contracts";
import { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IRelation extends IParentRelation {
  logotype: ILogotype;
}
