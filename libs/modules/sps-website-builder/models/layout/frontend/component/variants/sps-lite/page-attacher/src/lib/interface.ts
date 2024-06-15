import { IModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";
import { IModel as IPage } from "@sps/sps-website-builder-models-page-contracts";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "page-attacher" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  page: IPage;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
