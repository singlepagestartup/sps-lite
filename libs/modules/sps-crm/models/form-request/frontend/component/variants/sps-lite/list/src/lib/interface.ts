import { IModel as IModelExtended } from "@sps/sps-crm-models-form-request-contracts-extended";

export const variant = "list" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: typeof variant;
  data: IModelExtended[];
}
