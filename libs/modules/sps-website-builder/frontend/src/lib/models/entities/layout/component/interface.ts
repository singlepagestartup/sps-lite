import type { IModel as ILoader } from "@sps/sps-website-builder-contracts/lib/models/loader/interfaces";
import type { IModel as IPage } from "@sps/sps-website-builder-contracts-extended/lib/models/page/interfaces";
import { ReactNode } from "react";
import { IModelExtended } from "../_model";

export interface IComponentProps {
  children: ReactNode;
  isServer: boolean;
  showSkeletons?: boolean;
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  page: IPage;
  loader?: ILoader | null;
}
