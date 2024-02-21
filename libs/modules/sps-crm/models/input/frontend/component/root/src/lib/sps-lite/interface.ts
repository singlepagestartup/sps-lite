import { IComponentProps as IDateComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-date";
import { IComponentProps as IFileComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-file";
import { IComponentProps as IListboxComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-listbox";
import { IComponentProps as IRadioGroupComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-radiogroup";
import { IComponentProps as IRangeComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-range";
import { IComponentProps as ISwitchComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-switch";
import { IComponentProps as ITextComponentProps } from "@sps/sps-crm-input-frontend-component-sps-lite-variants-text";

export type IComponentProps =
  | IDateComponentProps
  | IFileComponentProps
  | IListboxComponentProps
  | IRadioGroupComponentProps
  | IRangeComponentProps
  | ISwitchComponentProps
  | ITextComponentProps;
