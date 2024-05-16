import type { IModel as IParentModel } from "@sps/sps-website-builder-models-logotype-contracts";
import { IRelation as ILogotypeToFile } from "@sps/sps-website-builder-relations-logotypes-to-files-contracts";

export interface IModel extends IParentModel {
  logotypesToFiles: ILogotypeToFile[];
}
