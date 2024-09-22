import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";
import { ReactNode } from "react";

export interface IComponentProps<M extends { id?: string }, V>
  extends ISpsComponentBase {
  variant: V;
  data: Partial<M>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  className?: string;
  adminForm?: (props: ISpsComponentBase & { data?: M }) => ReactNode;
  type?: "model" | "relation";
  module: string;
  name: string;
}

export type IComponentPropsExtended<
  M extends { id?: string },
  V,
  IComponentProps,
> = IComponentProps & {
  data: M;
};
