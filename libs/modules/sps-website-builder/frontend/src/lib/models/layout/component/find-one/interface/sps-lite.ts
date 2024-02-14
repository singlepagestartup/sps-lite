import { ReactNode } from "react";
import { IComponentPropsExtended as IPage } from "../../../../page/component/find-one/interface";
import { IModelExtended, variants as modelVariants } from "../../../model";

export const variants = [...modelVariants] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  children: ReactNode;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
  children: ReactNode;
}
