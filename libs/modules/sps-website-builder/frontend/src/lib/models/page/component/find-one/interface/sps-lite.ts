import { Dispatch, SetStateAction } from "react";
import { IModelExtended } from "../../../model";

export const variants = [] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  params?: { locale: string; [key: string]: any };
  searchParams?: { [key: string]: any };
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
