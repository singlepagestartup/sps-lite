import type { IEntity as IParentEntity } from "@sps/sps-subscription-contracts/lib/entities/tier/interfaces";
import type { IComponent as IButton } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";

export interface IEntity extends IParentEntity {
  buttons?: IButton[] | null;
}
