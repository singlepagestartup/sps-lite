import { IModel } from "@sps/sps-host-models-page-contracts";
import { IModel as IModelExtended } from "@sps/sps-host-models-page-contracts-extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] }) => any;
  query?: any;
}

export interface IComponentPropsExtended extends IComponentProps {}
