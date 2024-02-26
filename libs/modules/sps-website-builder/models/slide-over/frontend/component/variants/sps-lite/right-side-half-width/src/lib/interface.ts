import {
  IModel,
  variants,
} from "@sps/sps-website-builder-models-slide-over-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-slide-over-contracts-extended";

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
