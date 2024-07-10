import { IModel } from "@sps/sps-website-builder/models/navbar/contracts/root";
import { IModel as IModelExtended } from "@sps/sps-website-builder/models/navbar/contracts/extended";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { Dispatch, SetStateAction } from "react";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModelExtended[] | undefined>>;
  children?: ({ data }: { data: IModelExtended[] | undefined }) => any;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {
  data: IModelExtended[];
}
