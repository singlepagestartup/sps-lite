import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-footer-blocks-to-logotypes-contracts";
import { IModel as IFooterBlock } from "@sps/sps-website-builder-models-footer-block-contracts";

import { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IRelation extends IParentRelation {
  footerBlock: IFooterBlock;

  logotype: ILogotype;
}
