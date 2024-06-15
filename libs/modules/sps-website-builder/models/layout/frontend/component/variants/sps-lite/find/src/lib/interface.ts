import { IModel } from "@sps/sps-website-builder-models-layout-contracts";
import { IModel as IModelExtended } from "@sps/sps-website-builder-models-layout-contracts-extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] | undefined }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {}
