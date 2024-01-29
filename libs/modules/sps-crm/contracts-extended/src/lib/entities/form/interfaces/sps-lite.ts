import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import type { IEntity as IParentEntity } from "@sps/sps-crm-contracts/lib/entities/form/interfaces";

export interface IEntity extends IParentEntity {
  button?: Omit<IButton, "__component">;
}
