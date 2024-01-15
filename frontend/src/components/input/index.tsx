"use client";

import { useMemo } from "react";
import FileInput from "./file";
import ListboxInput from "./listbox";
import RadioGroupInput from "./radio-group";
import RangeInput from "./range";
import RepeatableInput from "./repeatable";
import SwitchInput from "./switch";
import TextInput from "./text";
import DateInput from "./date";
import { IInputProps } from "~components/ui/input";

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
