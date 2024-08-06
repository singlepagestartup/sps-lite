export { type IModel } from "@sps/sps-rbac/relations/sessions-to-authentications/sdk/model";
import { IModel } from "@sps/sps-rbac/relations/sessions-to-authentications/sdk/model";
import { ISpsComponentBase } from "@sps/ui-adapter";
import { IFindActionProps } from "@sps/shared-frontend-api";
import { Dispatch, SetStateAction } from "react";

export const variant = "find" as const;

export interface IComponentProps extends ISpsComponentBase {
  variant: typeof variant;
  set?: Dispatch<SetStateAction<IModel[] | undefined>>;
  children?: ({ data }: { data: IModel[] | undefined }) => any;
  apiProps?: {
    params?: IFindActionProps["params"];
    options?: IFindActionProps["options"];
  };
}

export interface IComponentPropsExtended extends IComponentProps {}
