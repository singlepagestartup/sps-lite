import { IComponentProps as IReverseComponentProps } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-reverse";
import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | IReverseComponentProps
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
