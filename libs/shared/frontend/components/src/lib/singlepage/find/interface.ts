import { Dispatch, SetStateAction } from "react";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export interface IComponentProps<M, V> extends ISpsComponentBase {
  variant: V;
  set?: Dispatch<SetStateAction<M[] | undefined>>;
  children?: ({ data }: { data: M[] | undefined }) => any;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export type IComponentPropsExtended<
  M extends { id: string },
  V,
  IComponentProps,
> = IComponentProps & {
  data: M;
};
