import { IModel } from "@sps/sps-website-builder/models/page/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/page/contracts/extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "get-url-model-id" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  model: string;
  children?: (props: { data: string | undefined }) => any;
  set?: Dispatch<SetStateAction<string | undefined>>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
