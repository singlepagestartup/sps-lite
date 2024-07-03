import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/default";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/models/hero-section-block/frontend/component/variants/sps-lite/admin-table";

export type IComponentProps =
  | IDefaultComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps;
