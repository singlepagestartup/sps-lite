import { IModel, IModelExtended } from "../../model";

export type IComponentProps = (
  | IModel
  | {
      variant: "list";
      isServer: boolean;
    }
) & {
  showSkeletons?: boolean;
  isServer: boolean;
  variant: "default" | "checkout" | "list";
};

export type IComponentPropsExtended = IComponentProps &
  (IModelExtended | { variant: "list" });
