import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as ILinkComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-link";
import { IComponentProps as IGhostComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-ghost";
import { IComponentProps as IOutlineComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-outline";
import { IComponentProps as IDestructiveComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-destructive";

import { IComponentProps as ISecondaryComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-secondary";
import { IComponentProps as IPrimaryComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-primary";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-button-frontend-component-variants-sps-lite-default";

export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormInputsComponentProps
  | IAdminFormComponentProps
  | ILinkComponentProps
  | IGhostComponentProps
  | IOutlineComponentProps
  | IDestructiveComponentProps
  | ISecondaryComponentProps
  | IPrimaryComponentProps
  | IDefaultComponentProps;
