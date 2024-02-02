import type { IModel as IParentModel } from "@sps/sps-subscription-contracts/lib/models/attribute-key/interfaces";
import type { IModel as IAttribute } from "@sps/sps-subscription-contracts/lib/models/attribute/interfaces";

export interface IModel extends IParentModel {
  attributes?: IAttribute[] | null;
}
