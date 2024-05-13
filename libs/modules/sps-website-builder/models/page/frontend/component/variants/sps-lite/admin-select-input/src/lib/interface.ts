import { IModel } from "@sps/sps-website-builder-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-page-contracts-extended";

export const variant = "admin-select-input" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  onChange?: (value: any) => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
