import { IModel, IModelExtended, variants } from "../../../model";

export const variant: (typeof variants)[number] =
  "right-side-half-width" as const;

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

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
