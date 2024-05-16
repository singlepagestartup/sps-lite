import { IModel } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts-extended";

export const variant = "get-layout" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  children?: React.ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
