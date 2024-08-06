export { type IModel } from "@sps/sps-host/models/page/sdk/model";
import { IModel } from "@sps/sps-host/models/page/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { Dispatch, SetStateAction } from "react";

export const variant = "url-segment-value" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  segment: string;
  children?: (props: { data: string | undefined }) => any;
  set?: Dispatch<SetStateAction<string | undefined>>;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModel;
}
