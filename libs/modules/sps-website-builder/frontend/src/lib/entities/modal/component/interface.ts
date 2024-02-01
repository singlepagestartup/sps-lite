import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/flyout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/flyout/interfaces";
import { ReactNode } from "react";

export interface IComponentProps extends IEntity {
  showSkeletons?: boolean;
  children: ReactNode;
}
export interface IComponentPropsExtended
  extends IComponentProps,
    IEntityExtended {}
