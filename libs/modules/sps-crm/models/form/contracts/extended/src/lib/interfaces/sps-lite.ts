import type { IModel as IParentModel } from "@sps/sps-crm-models-form-contracts";
import type { IModel as IButton } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel as IInput } from "@sps/sps-crm-models-input-contracts";

export interface IModel extends IParentModel {
  button?: Omit<IButton, "__component">;
  inputs?: Omit<IInput, "__component">[];
}
