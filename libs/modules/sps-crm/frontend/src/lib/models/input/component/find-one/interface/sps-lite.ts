import {
  IModel,
  IModelExtended,
  variants as modelVariants,
} from "../../../model";

export const variants = [...modelVariants] as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
}

export interface IComponentProps extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModel;
}

export interface IComponentPropsExtended extends IComponentBase {
  variant: (typeof variants)[number];
  data: IModelExtended;
}
