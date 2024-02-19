import type { IModel as IParentModel } from "@sps/sps-subscription-tier-contracts";
import type { IModel as IAttribute } from "@sps/sps-subscription-attribute-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  buttons?: IButton[] | null;
}
