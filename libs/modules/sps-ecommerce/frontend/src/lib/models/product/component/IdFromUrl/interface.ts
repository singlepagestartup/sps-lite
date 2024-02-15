import { IModelExtended } from "../../model";

export const variant = "id-from-url" as const;

export interface IComponentBase {
  showSkeletons?: boolean;
  isServer: boolean;
  lupa: string;
}

export interface IComponentProps extends IComponentBase {
  variant: typeof variant;
}

export interface IComponentPropsExtended extends IComponentBase {
  isServer: boolean;
  data: IModelExtended;
}
