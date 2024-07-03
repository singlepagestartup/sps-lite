import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/default";
import { IComponentProps as ISelectRightComponentProps } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/frontend/component/variants/sps-lite/select-right";
export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | ISelectRightComponentProps
  | IDefaultComponentProps
  | never;
