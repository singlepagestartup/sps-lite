import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/sdk/model";
import { IModel as INavbarBlock } from "@sps/sps-website-builder/models/navbar-block/sdk/model";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  navbarBlock: INavbarBlock;
}
