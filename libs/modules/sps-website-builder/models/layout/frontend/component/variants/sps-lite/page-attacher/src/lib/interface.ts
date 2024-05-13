import { IModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";

export const variant = "page-attacher" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: IModel;
  page: IPage;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
