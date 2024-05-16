import { IModel } from "@sps/sps-website-builder-models-feature-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-feature-contracts-extended";

export const variant = "admin-table-row" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
