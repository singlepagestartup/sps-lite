import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/relations/metadata-to-sps-file-storage-module-files/frontend/component/variants/sps-lite/default";
import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder/relations/metadata-to-sps-file-storage-module-files/frontend/component/variants/sps-lite/select-right";
export type IComponentProps =
  | IDefaultComponentProps
  | ISelectRightComponentProps
  | never;
