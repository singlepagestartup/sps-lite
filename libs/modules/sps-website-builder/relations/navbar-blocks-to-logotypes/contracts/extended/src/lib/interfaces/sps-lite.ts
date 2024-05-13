import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-contracts";
import { IModel as INavbar } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IRelation extends IParentRelation {
  navbarBlock: INavbar;
  logotype: ILogotype;
}
