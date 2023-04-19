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
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface IInputsProps extends IInputProps {
  component:
    | `text`
    | `listbox`
    | `radio-group`
    | `switch`
    | `file`
    | `repeatable`
    | `range`;
}

export default function Inputs(props: IInputsProps) {
  const { component } = props;

  const Comp = useMemo(() => {
    switch (component) {
      case `text`:
        return TextInput;
      case `file`:
        return FileInput;
      case `listbox`:
        return ListboxInput;
      case `switch`:
        return SwitchInput;
      case `radio-group`:
        return RadioGroupInput;
      case `repeatable`:
        return RepeatableInput;
      case `range`:
        return RangeInput;
      default:
        return TextInput;
    }
  }, [component]);

  return <Comp {...props} />;
}
