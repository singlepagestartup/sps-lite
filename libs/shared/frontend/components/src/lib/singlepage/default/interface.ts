import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export const variant = "default" as const;

export interface IComponentProps<M extends { id: string }, V>
  extends ISpsComponentBase {
  variant: V;
  data: Partial<M>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
}

export interface IComponentPropsExtended<M extends { id: string }, V>
  extends IComponentProps<M, V> {
  data: M;
}
