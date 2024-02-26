import { IComponentProps as IDateComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-date";
import { IComponentProps as IFileComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-file";
import { IComponentProps as IListboxComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-listbox";
import { IComponentProps as IRadioGroupComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-radiogroup";
import { IComponentProps as IRangeComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-range";
import { IComponentProps as ISwitchComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-switch";
import { IComponentProps as ITextComponentProps } from "@sps/sps-crm-models-input-frontend-component-variants-sps-lite-text";

export type IComponentProps =
  | IDateComponentProps
  | IFileComponentProps
  | IListboxComponentProps
  | IRadioGroupComponentProps
  | IRangeComponentProps
  | ISwitchComponentProps
  | ITextComponentProps;
