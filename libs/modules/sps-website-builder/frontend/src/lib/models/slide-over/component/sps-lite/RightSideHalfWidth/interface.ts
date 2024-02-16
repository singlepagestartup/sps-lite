import { IModel, IModelExtended } from "../../../model";

export const variant = "right-side-half-width" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  className?: string;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: typeof variant;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isServer: boolean;
  className?: string;
  data: IModelExtended;
}
