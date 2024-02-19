import type { IModel as IParentModel } from "@sps/sps-crm-form-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-button-contracts";
import type { IModel as IInput } from "@sps/sps-crm-input-contracts";

export interface IModel extends IParentModel {
  button?: Omit<IButton, "__component">;
  inputs?: Omit<IInput, "__component">[];
}
