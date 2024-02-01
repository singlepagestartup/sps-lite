import type { IEntity as ILoader } from "@sps/sps-website-builder-contracts/lib/entities/loader/interfaces";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/layout/interfaces";
import type { IEntity as IEntityExtended } from "@sps/sps-website-builder-contracts-extended/lib/entities/layout/interfaces";
import type { IEntity as IPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { ReactNode } from "react";

export interface IComponentProps {
  children: ReactNode;
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IEntityExtended {
  page: IPage;
  loader?: ILoader | null;
}
