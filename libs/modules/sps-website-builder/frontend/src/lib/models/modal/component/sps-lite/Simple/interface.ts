import { IModel, IModelExtended } from "../../../model";

export const variant = "simple" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  isOpenModal: boolean;
  closeModal: () => void;
  dialogPanelClassName: string;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: typeof variant;
  className?: string;
  isServer: boolean;
  isOpenModal: boolean;
  closeModal: () => void;
  dialogPanelClassName: string;
  data: IModelExtended;
}
