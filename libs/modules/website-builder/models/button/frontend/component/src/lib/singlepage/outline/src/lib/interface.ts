export { type IModel } from "@sps/website-builder/models/button/sdk/model";
import { IModel } from "@sps/website-builder/models/button/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "outline" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  data: Partial<IModel>;
  onClick?: () => void;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
