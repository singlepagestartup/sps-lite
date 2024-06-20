import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-host/relations/layouts-to-widgets/frontend/component/variants/sps-lite/select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-host/relations/layouts-to-widgets/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
