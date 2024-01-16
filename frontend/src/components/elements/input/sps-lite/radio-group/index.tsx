import RadioGroupInput from "~components/ui/input/radio-group";
import { IElement } from "../..";

export default function Input(props: IElement) {
  return (
    <RadioGroupInput
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
