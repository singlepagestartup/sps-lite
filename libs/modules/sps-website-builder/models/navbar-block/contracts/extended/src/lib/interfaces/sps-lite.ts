import type { IModel as IParentModel } from "@sps/sps-website-builder-models-navbar-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";
import { IRelation as INavbarBlockToButton } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-contracts";
import { IRelation as INavbarBlockToLogotype } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-contracts";
import { IRelation as IWidgetsToNavbarBlocks } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: IButton[] | null;
  extraButtons: IButton[] | null;
  navbarBlocksToButtons: INavbarBlockToButton[];
  navbarBlocksToLogotypes: INavbarBlockToLogotype[];
  widgetsToNavbarBlocks: IWidgetsToNavbarBlocks[];
}
