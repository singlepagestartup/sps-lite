import { IModel, IModelExtended } from "../../model";

type IComponentByVariantProps<T> = T extends { variant: "list" }
  ? { variant: "list"; isServer: boolean }
  : IModel & { variant: "default" | "list" };

export type IComponentProps<T> = IComponentByVariantProps<T> & {
  showSkeletons?: boolean;
  isServer: boolean;
};

type IComponentExtendedByVariantProps<T> = T extends { variant: "list" }
  ? { variant: "list"; list: IModelExtended[] }
  : IModelExtended;

export type IComponentPropsExtended<T> = IComponentProps<T> &
  IComponentExtendedByVariantProps<T>;
