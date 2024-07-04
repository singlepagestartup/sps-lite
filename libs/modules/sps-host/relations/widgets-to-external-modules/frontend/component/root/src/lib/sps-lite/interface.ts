import { IComponentProps as IPrimaryComponentProps } from "@sps/sps-host/relations/widgets-to-external-modules/frontend/component/variants/sps-lite/primary";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-host/relations/widgets-to-external-modules/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | IPrimaryComponentProps
  | IDefaultComponentProps
  | never;
