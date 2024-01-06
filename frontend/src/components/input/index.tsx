"use client";

import { FC, useMemo } from "react";
import { UseControllerProps } from "react-hook-form";
import FileInput from "./file";
import ListboxInput from "./listbox";
import RadioGroupInput from "./radio-group";
import RangeInput from "./range";
import RepeatableInput, { IInsideComponentProps } from "./repeatable";
import SwitchInput from "./switch";
import TextInput from "./text";
import DateInput from "./date";
import { IEntity as IBackendFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

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
  className?: string;
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
}

export default function Input(props: IInputProps) {
  const { variant } = props;

  const Comp = useMemo(() => {
    switch (variant) {
      case "text":
        return TextInput;
      case "file":
        return FileInput;
      case "listbox":
        return ListboxInput;
      case "switch":
        return SwitchInput;
      case "radio-group":
        return RadioGroupInput;
      case "repeatable":
        return RepeatableInput;
      case "range":
        return RangeInput;
      case "date":
        return DateInput;
      default:
        return TextInput;
    }
  }, [variant]);

  return <Comp {...props} />;
}
