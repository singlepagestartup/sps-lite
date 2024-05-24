import { IRelation as IFooterBlocksToLogotypes } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-contracts";
import { IRelation as IWidgetsToLogotypes } from "@sps/sps-website-builder-relations-widgets-to-logotypes-contracts";
import type { IModel as IParentModel } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IModel extends IParentModel {
  footerBlocksToLogotypes: IFooterBlocksToLogotypes[];
  widgetsToLogotypes: IWidgetsToLogotypes[];
}
