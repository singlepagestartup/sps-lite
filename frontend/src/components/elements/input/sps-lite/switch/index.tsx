import Switch from "~components/ui/input/switch";
import { IElement } from "../..";

export default function SwitchInput(props: IElement) {
  return (
    <Switch
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
