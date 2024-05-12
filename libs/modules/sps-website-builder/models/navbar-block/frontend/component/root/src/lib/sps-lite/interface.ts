import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-default";
import { IComponentProps as ICenteredLogotypeComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-centered-logotype";
import { IComponentProps as ISimpleLinksOnLeftComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-simple-links-on-left";

export type IComponentProps =
  | IDefaultComponentProps
  | ICenteredLogotypeComponentProps
  | ISimpleLinksOnLeftComponentProps;
