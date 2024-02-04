import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/interfaces";
import type { IModel as IButton } from "@sps/sps-elements-contracts/lib/models/button/interfaces";
import type { IModel as ILogotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";

export interface IModel extends IParentModel {
  logotypes?: ILogotype[] | null;
  buttons?: IButton[] | null;
}
