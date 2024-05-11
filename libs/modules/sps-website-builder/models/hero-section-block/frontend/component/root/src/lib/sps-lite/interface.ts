import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as ISimpleCenteredComponentProps } from "@sps/sps-website-builder-models-hero-section-block-frontend-component-variants-sps-lite-simple-centered";

export type IComponentProps =
  | IAdminSelectInputComponentProps
  | IAdminFormInputsComponentProps
  | IAdminFormComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | ISimpleCenteredComponentProps;
