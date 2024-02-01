import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/footer/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IEntityExtended {}
