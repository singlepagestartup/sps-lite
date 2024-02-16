import { IComponentProps as IDateComponentProps } from "./Date/interface";
import { IComponentProps as IFileComponentProps } from "./File/interface";
import { IComponentProps as IListboxComponentProps } from "./Listbox/interface";
import { IComponentProps as IRadioGroupComponentProps } from "./RadioGroup/interface";
import { IComponentProps as IRangeComponentProps } from "./Range/interface";
import { IComponentProps as ISwitchComponentProps } from "./Switch/interface";
import { IComponentProps as ITextComponentProps } from "./Text/interface";

export type IComponentProps =
  | IDateComponentProps
  | IFileComponentProps
  | IListboxComponentProps
  | IRadioGroupComponentProps
  | IRangeComponentProps
  | ISwitchComponentProps
  | ITextComponentProps;
