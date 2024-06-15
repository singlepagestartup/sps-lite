import { IRelation as ILogotypesToSpsFileStorageWidgets } from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-module-widgets-contracts";
import { IRelation as IFooterBlocksToLogotypes } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-contracts";

import type { IModel as IParentModel } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IModel extends IParentModel {
  logotypesToSpsFileStorageWidgets: ILogotypesToSpsFileStorageWidgets[];
  footerBlocksToLogotypes: IFooterBlocksToLogotypes[];
}
