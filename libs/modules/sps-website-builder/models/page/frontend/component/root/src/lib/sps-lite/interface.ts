import { IComponentProps as IGetUrlModelIdComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";
import { IComponentProps as IGetByUrlComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-by-url";
import { IComponentProps as ISimpleComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-simple";

export type IComponentProps =
  | IGetUrlModelIdComponentProps
  | IGetByUrlComponentProps
  | ISimpleComponentProps;
