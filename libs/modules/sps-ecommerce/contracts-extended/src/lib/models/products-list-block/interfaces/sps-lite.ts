import type { IModel as IParentModel } from "@sps/sps-ecommerce-contracts/lib/models/products-list-block/interfaces";
import type { IModel as IButton } from "@sps/sps-elements-contracts/lib/models/button/interfaces";

export interface IModel extends IParentModel {
  buttons?: IButton[] | null;
}
