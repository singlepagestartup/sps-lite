import ListboxInput from "~components/ui/input/select/sps";
import { IElement } from "../..";
import FormField from "~components/ui/form-field";

export default function Input(props: IElement) {
  return (
    <>
      <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        placeholder={props.placeholder || undefined}
        multiple={undefined}
        className={props.className || ""}
        type="select"
        step={undefined}
        min={undefined}
        max={undefined}
        value={undefined}
        id={undefined}
        name={props.name}
      />
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        placeholder={props.placeholder || undefined}
        multiple={undefined}
        className={props.className || ""}
        type="select"
        step={undefined}
        min={undefined}
        max={undefined}
        value={undefined}
        id={undefined}
        name={props.name}
      />
    </>
  );
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
