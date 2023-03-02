import { FC, useEffect, useMemo } from "react";
import {
  RegisterOptions,
  useController,
  UseControllerProps,
  ValidateResult,
} from "react-hook-form";
import { getInputErrors } from "~utils/forms";
import FileInput from "./file";
import ListboxInput from "./listbox";
import RadioGroupInput from "./radio-group";
import RepeatableInput, { IInsideComponentProps } from "./repeatable";
import SwitchInput from "./switch";
import TextInput from "./text";

export interface IInputProps extends UseControllerProps {
  label?: string;
  options?: any;
  ButtonComp?: any;
  index?: number;
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
  type?: string;
  rows?: number;
  removeButtonTitle?: string;
  addButtonTitle?: string;
  translate?: (message: string) => string;
  renderOptionValue?: (option: any) => string;
  valueAsNumber?: boolean;
  InsideComponent?: FC<IInsideComponentProps>;
  step?: number;
}

export interface IInputsProps extends IInputProps {
  component:
    | `text`
    | `listbox`
    | `radio-group`
    | `switch`
    | `file`
    | `repeatable`;
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
      default:
        return TextInput;
    }
  }, [component]);

  return <Comp {...props} />;
}
