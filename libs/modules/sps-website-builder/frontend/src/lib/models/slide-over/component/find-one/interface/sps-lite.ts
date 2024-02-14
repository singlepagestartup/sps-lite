import { Dispatch, SetStateAction } from "react";
import { IComponentPropsExtended as IPage } from "../../../../page/component/find-one/interface";
import {
  IModel,
  IModelExtended,
  variants as modelVariants,
} from "../../../model";

export const variants = [...modelVariants] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModel;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}
