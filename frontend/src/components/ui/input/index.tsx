import { FC } from "react";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { UseControllerProps } from "react-hook-form";
import { IInsideComponentProps } from "./repeatable";

export interface IInputProps extends UseControllerProps {
  label?: string | null;
  options?: any;
  ButtonComp?: any;
  index?: number;
  OptionComp?: any;
  placeholder?: string | null;
  initialValue?: any;
  multiple?: boolean | null;
  accept?: string;
  by?: string;
  className?: string | null;
  inputConfig?: any;
  parentKey?: string;
  defaultValue?: any;
  baseKey?: string;
  inputs?: any;
  rules?: any;
  type?: string | null;
  rows?: number;
  removeButtonTitle?: string;
  addButtonTitle?: string;
  translate?: (message: string) => string;
  renderOptionValue?: (option: any) => string;
  valueAsNumber?: boolean;
  InsideComponent?: FC<IInsideComponentProps>;
  step?: number | null;
  min?: number | null;
  max?: number | null;
  disabled?: boolean;
  media?: IBackendFile[] | null;
  additionalMedia?: IBackendFile[] | null;
  extraMedia?: IBackendFile[] | null;
  ResetIcon?: any;
  CalendarIcon?: any;
  onAppend?: ({ fieldIndex }: { fieldIndex: number }) => any;
  onRemove?: ({ fieldIndex }: { fieldIndex: number }) => any;
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
