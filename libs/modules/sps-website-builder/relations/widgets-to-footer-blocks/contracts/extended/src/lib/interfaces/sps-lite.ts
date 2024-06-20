import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";
import { IModel as IFooterBlock } from "@sps/sps-website-builder/models/footer-block/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  footerBlock: IFooterBlock;
}
