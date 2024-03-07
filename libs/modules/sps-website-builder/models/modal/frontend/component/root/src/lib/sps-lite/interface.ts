import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-modal-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-website-builder-models-modal-frontend-component-variants-sps-lite-list";
import { IComponentProps as ISimpleComponentProps } from "@sps/sps-website-builder-models-modal-frontend-component-variants-sps-lite-simple";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | ISimpleComponentProps;
