import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-file-storage-relations-widgets-to-files-frontend-component-variants-sps-lite-select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-file-storage-relations-widgets-to-files-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
