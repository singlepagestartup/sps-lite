import type { IModel as IParentModel } from "@sps/sps-subscription-models-tier-contracts";
import type { IModel as IAttribute } from "@sps/sps-subscription-models-attribute-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
  buttons?: IButton[] | null;
}
