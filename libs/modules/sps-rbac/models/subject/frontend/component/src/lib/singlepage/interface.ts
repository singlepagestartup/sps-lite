import { IComponentProps as IFindByIdComponentProps } from "./find-by-id";
import { IComponentProps as IFindComponentProps } from "./find";
import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";
import { IComponentProps as IDefaultComponentProps } from "./default";
import { IComponentProps as IInitComponentProps } from "./init";
import { IComponentProps as ILoginAndPasswordComponentProps } from "./login-and-password";
import { IComponentProps as ILogoutActionComponentProps } from "./logout-action";
import { IComponentProps as ILogoutButtonComponentProps } from "./logout-button";
import { IComponentProps as IIsAllowedWrapperComponentProps } from "./is-authorized-wrapper";
import { IComponentProps as ISetSessionWrapperComponentProps } from "./set-session-wrapper";
import { IComponentProps as ISelectMethodComponentProps } from "./select-method";

export type IComponentProps =
  | IFindByIdComponentProps
  | IFindComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | IInitComponentProps
  | ILoginAndPasswordComponentProps
  | ILogoutActionComponentProps
  | ILogoutButtonComponentProps
  | IIsAllowedWrapperComponentProps
  | ISetSessionWrapperComponentProps
  | ISelectMethodComponentProps
  | never;
