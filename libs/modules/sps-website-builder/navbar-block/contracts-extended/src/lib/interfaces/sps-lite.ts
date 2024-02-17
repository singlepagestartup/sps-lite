import type { IModel as IParentModel } from "@sps/sps-website-builder-navbar-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as ILogotype } from "@sps/sps-website-builder-logotype-contracts";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: IButton[] | null;
  extraButtons: IButton[] | null;
}
