import { IModel } from "@sps/sps-notification-models-notification-contracts";
import { IModel as IModelExtended } from "@sps/sps-notification-models-notification-contracts-extended";

export const variant = "admin-table" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  className?: string;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
