import React, { FC, HTMLInputTypeAttribute } from "react";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { UseControllerProps } from "react-hook-form";
import { IInsideComponentProps } from "./repeatable";

export interface IInputProps
  extends Omit<UseControllerProps, "name">,
    React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: any;
  ButtonComp?: any;
  index?: number;
  name: string;
  OptionComp?: any;
  placeholder?: string;
  initialValue?: any;
  multiple?: boolean;
  accept?: string;
  by?: string;
  className?: string;
  inputConfig?: any;
  parentKey?: string;
  defaultValue?: any;
  baseKey?: string;
  inputs?: any;
  rules?: any;
  type?: HTMLInputTypeAttribute;
  rows?: number;
  removeButtonTitle?: string;
  addButtonTitle?: string;
  renderOptionValue?: (option: any) => string;
  valueAsNumber?: boolean;
  InsideComponent?: FC<IInsideComponentProps>;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  disabled?: boolean;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  extraMedia?: IBackendFile[] | null;
  ResetIcon?: any;
  CalendarIcon?: any;
  onAppend?: ({ fieldIndex }: { fieldIndex: number }) => any;
  onRemove?: ({ fieldIndex }: { fieldIndex: number }) => any;
  reset?: any;
  variant:
    | "text"
    | "listbox"
    | "radio-group"
    | "switch"
    | "file"
    | "repeatable"
    | "range"
    | "date";
  [key: string]: any;
}
