import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/tier/interfaces";
import type { IModel as IAttribute } from "@sps/sps-subscription-contracts/lib/models/attribute/interfaces";
import type { IModel as IButton } from "@sps/sps-elements-contracts/lib/models/button/interfaces";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  buttons?: IButton[] | null;
}
