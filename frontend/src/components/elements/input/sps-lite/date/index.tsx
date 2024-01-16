import Calendar from "~components/ui/input/calendar";
import { IElement } from "../..";

export default function DateInput(props: IElement) {
  return (
    <Calendar
      {...props}
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
      data-component="elements.input"
    />
  );
}
