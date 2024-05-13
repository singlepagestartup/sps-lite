import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-contracts";
import { IModel as INavbarBlock } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IRelation extends IParentRelation {
  navbarBlock: INavbarBlock;
  button: IButton;
}
