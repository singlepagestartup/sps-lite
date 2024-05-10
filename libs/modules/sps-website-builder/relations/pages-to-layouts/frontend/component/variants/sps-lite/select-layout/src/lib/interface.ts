import { IModel } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts-extended";

export const variant = "select-layout" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  pageId?: string;
  data?: IModel[];
}

export interface IComponentPropsExtended extends IComponentProps {
  data?: IModel[];
}
