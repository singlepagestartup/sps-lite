import { IModel } from "@sps/sps-website-builder-models-modal-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-modal-contracts-extended";

export const variant = "simple" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  isOpenModal?: boolean;
  closeModal?: () => void;
  dialogPanelClassName?: string;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
