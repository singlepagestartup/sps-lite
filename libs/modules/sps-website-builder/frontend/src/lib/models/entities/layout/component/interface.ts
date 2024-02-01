import type { IEntity as ILoader } from "@sps/sps-website-builder-contracts/lib/entities/loader/interfaces";
import type { IEntity as IPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";
import { ReactNode } from "react";
import { IModelExtended } from "../_model";

export interface IComponentProps {
  children: ReactNode;
  isServer?: boolean;
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  page: IPage;
  loader?: ILoader | null;
}
