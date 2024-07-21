import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/contracts/root";
import { IModel as IFooterBlock } from "@sps/sps-website-builder/models/footer-block/sdk/model";
import { IModel as ILogotype } from "@sps/sps-website-builder/models/logotype/sdk/model";

export interface IRelation extends IParentRelation {
  footerBlock: IFooterBlock;

  logotype: ILogotype;
}
