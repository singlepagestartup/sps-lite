import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-footer-blocks-contracts";
import { IModel as IWidget } from "@sps/sps-website-builder-models-widget-contracts";
import { IModel as IFooterBlock } from "@sps/sps-website-builder-models-footer-block-contracts";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  footerBlock: IFooterBlock;
}
