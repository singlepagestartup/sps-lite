import { IModel } from "@sps/<%= module %>-models-<%= model %>-contracts";
import { IModel as IModelExtended } from "@sps/<%= module %>-models-<%= model %>-contracts-extended";

export const variant = "<%= variant %>" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
