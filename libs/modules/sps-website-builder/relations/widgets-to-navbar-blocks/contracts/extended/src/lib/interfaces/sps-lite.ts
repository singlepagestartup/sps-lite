import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/contracts/root";
import { IModel as IWidget } from "@sps/sps-website-builder/models/widget/contracts/root";
import { IModel as INavbarBlock } from "@sps/sps-website-builder/models/navbar-block/contracts/root";

export interface IRelation extends IParentRelation {
  widget: IWidget;
  navbarBlock: INavbarBlock;
}
