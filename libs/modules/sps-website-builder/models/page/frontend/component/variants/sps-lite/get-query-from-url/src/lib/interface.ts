import { IModel } from "@sps/sps-website-builder/models/page/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/page/contracts/extended";
import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "get-query-from-url" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  url: string;
  set?: Dispatch<SetStateAction<any | undefined>>;
  children?: ({ data }: { data: any }) => any;
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended;
}
