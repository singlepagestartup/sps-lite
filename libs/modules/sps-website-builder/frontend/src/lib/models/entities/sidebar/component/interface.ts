import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/sidebar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/sidebar/interfaces";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IEntityExtended {}
