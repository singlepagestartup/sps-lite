import { IModel } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-relations-pages-to-widgets-contracts-extended";

export const variant = "select-right" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  pageId?: string;
  data?: IModel;
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModelExtended;
}
