import type { IModel as IButton } from "@sps/sps-elements-contracts/lib/models/button/interfaces";
import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/form/interfaces";
import type { IModel as IInput } from "@sps/sps-crm-contracts/lib/models/input/interfaces";

export interface IModel extends IParentModel {
  button?: Omit<IButton, "__component">;
  inputs?: Omit<IInput, "__component">[];
}
