import { IModel } from "@sps/sps-website-builder/models/navbar/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/navbar/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { Dispatch, SetStateAction } from "react";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] }) => any;
  query?: any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
