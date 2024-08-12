export { type IModel } from "@sps/host/models/page/sdk/model";
import { IModel } from "@sps/host/models/page/sdk/model";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find-by-id" as const;

export interface IComponentProps extends Omit<ISpsComponentBase, "children"> {
  variant: typeof variant;
  id: string;
  set?: Dispatch<SetStateAction<IModel | undefined>>;
  children?: ({ data }: { data: IModel }) => ReactNode;
}

export interface IComponentPropsExtended extends IComponentProps {}
