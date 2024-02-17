import type { IModel as IParentModel } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as ILogotype } from "@sps/sps-website-builder-logotype-contracts";

export interface IModel extends IParentModel {
  logotypes?: ILogotype[] | null;
  buttons?: IButton[] | null;
}
