import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-select-right";

import { IComponentProps as IGetLayoutComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-get-layout";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-relations-pages-to-layouts-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IGetLayoutComponentProps
  | IDefaultComponentProps
  | never;
