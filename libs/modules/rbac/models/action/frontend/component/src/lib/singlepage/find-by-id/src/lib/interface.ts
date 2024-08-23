export { type IModel } from "@sps/rbac/models/action/sdk/model";
import { IModel } from "@sps/rbac/models/action/sdk/model";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find-by-id" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  id: string;
  set?: Dispatch<SetStateAction<IModel | undefined>>;
  children?: ({ data }: { data: IModel }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {}
