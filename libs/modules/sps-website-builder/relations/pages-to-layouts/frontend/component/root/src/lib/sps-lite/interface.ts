import { IComponentProps as ISelectLayoutComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-layout";
import { IComponentProps as IGetLayoutComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-get-layout";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | ISelectLayoutComponentProps
  | IGetLayoutComponentProps
  | IDefaultComponentProps
  | never;
