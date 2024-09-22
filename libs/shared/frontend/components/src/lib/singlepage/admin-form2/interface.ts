import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindByIdActionProps } from "@sps/shared-frontend-api";

export interface IComponentProps<M extends { id?: string }, V>
  extends ISpsComponentBase {
  variant: V;
  data?: Partial<M>;
  apiProps?: {
    params?: IFindByIdActionProps["params"];
    options?: IFindByIdActionProps["options"];
  };
  className?: string;
}

export type IComponentPropsExtended<
  M extends { id?: string },
  V,
  IComponentProps,
> = IComponentProps & {
  data?: M;
};
