import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/select-right";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | never;
