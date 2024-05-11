import { IModel } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  widgetId?: string;
  data?: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
