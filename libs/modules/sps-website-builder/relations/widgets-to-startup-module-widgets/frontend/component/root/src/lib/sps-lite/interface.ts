import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-frontend-component-variants-sps-lite-select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-relations-widgets-to-startup-module-widgets-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;