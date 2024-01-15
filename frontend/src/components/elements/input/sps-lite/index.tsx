import FileInput from "./file";
import ListboxInput from "./listbox";
import RadioGroupInput from "./radio-group";
import RangeInput from "./range";
import SwitchInput from "./switch";
import TextInput from "./text";
import DateInput from "./date";
import { IElement } from "..";

export const variants = {
  text: TextInput,
  file: FileInput,
  listbox: ListboxInput,
  switch: SwitchInput,
  "radio-group": RadioGroupInput,
  range: RangeInput,
  date: DateInput,
};

export default function SpsLite(props: IElement) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
