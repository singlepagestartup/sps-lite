import type { IModel as IParentModel } from "@sps/sps-subscription-attribute-key-contracts";
import type { IModel as IAttribute } from "@sps/sps-subscription-attribute-contracts";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
}
