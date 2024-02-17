import { Dispatch, SetStateAction } from "react";
import { IModel, IModelExtended } from "../../../model";

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  params?: { locale: string; [key: string]: any };
  searchParams?: { [key: string]: any };
}

export interface IComponentPropsExtended extends IComponentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
  data: IModelExtended;
}
