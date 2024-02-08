import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/interfaces";
import type { IModel as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";

export interface IModel extends IParentModel {
  logotype: ILogotype | null;
  buttons: IButton[] | null;
  additionalButtons: IButton[] | null;
  extraButtons: IButton[] | null;
}
