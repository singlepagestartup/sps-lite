import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/navbar/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/interfaces";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IEntityExtended {}
