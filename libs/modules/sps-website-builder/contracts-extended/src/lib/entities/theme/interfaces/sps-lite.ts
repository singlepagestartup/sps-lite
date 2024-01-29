import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/theme/interfaces";
import type { IComponent as IFont } from "@sps/sps-website-builder-contracts/lib/components/elements/font/interfaces";

export interface IEntity extends IParentEntity {
  fonts?: IFont[] | null;
}
