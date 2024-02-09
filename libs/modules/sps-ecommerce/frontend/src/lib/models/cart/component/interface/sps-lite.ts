import { IModel, IModelExtended } from "../../model";

type IComponentByVariantProps<T> = T extends { variant: "list" }
  ? { variant: "list"; isServer: boolean }
  : IModel & { variant: "default" | "checkout" };

export type IComponentProps<T> = IComponentByVariantProps<T> & {
  showSkeletons?: boolean;
  isServer: boolean;
};

export type IComponentPropsExtended<T> = IComponentProps<T> &
  (IModelExtended | { variant: "list" });
