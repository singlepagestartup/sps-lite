import type { IModel as IParentModel } from "@sps/sps-website-builder-models-navbar-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as ILogotype } from "@sps/sps-website-builder-models-logotype-contracts";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: IButton[] | null;
  extraButtons: IButton[] | null;
}
