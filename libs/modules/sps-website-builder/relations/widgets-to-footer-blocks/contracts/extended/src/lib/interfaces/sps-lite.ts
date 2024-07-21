import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-footer-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";
import { IModel as IFooterBlock } from "@sps/sps-website-builder/models/footer-block/sdk/model";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  footerBlock: IFooterBlock;
}
