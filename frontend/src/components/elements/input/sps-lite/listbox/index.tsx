import ListboxInput from "~components/ui/input/listbox";
import { IElement } from "../..";

export default function Input(props: IElement) {
  return (
    <ListboxInput
      {...props}
      data-component="elements.input"
      label={props.label || undefined}
      placeholder={props.placeholder || undefined}
      multiple={undefined}
      className={props.className || ""}
      type="date"
      step={undefined}
      min={undefined}
      max={undefined}
      value={undefined}
      id={undefined}
    />
  );
}
