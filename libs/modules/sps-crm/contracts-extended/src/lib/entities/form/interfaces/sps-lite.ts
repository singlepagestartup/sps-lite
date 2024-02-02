import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IEntity as IParentEntity } from "@sps/sps-crm-contracts/lib/entities/form/interfaces";
import type { IComponent as IInput } from "@sps/sps-crm-contracts/lib/components/elements/input/interfaces";

export interface IEntity extends IParentEntity {
  button?: Omit<IButton, "__component">;
  inputs?: Omit<IInput, "__component">[];
}
