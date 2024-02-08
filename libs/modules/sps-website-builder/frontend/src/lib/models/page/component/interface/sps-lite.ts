import { Dispatch, SetStateAction } from "react";
import { IModelExtended } from "../../model";

export interface IComponentProps {
  isServer: boolean;
  params?: { locale: string; [key: string]: any };
  searchParams?: { [key: string]: any };
}

export interface IComponentPropsExtended
  extends IComponentProps,
    IModelExtended {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
