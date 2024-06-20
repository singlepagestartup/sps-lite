import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-form-inputs";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminPanelComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-panel";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/default";
import { IComponentProps as IFindComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/find";
import { IComponentProps as IPageAttacherComponentProps } from "@sps/sps-website-builder/models/layout/frontend/component/variants/sps-lite/page-attacher";

export type IComponentProps =
  | IAdminFormInputsComponentProps
  | IAdminSelectInputComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminPanelComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | IFindComponentProps
  | IPageAttacherComponentProps;
