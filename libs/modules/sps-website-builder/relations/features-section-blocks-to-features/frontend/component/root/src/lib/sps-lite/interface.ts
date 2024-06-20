import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/component/variants/sps-lite/select-right";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
