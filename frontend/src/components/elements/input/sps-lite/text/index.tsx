import { IElement } from "../..";
import FormField from "~components/ui/form-field";

export default function TextInput(props: IElement) {
  return (
    <>
      <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={props.label || undefined}
        placeholder={props.placeholder || undefined}
        multiple={undefined}
        className={props.className || ""}
        type="text"
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
        label={props.label || undefined}
        placeholder={props.placeholder || undefined}
        multiple={undefined}
        className={props.className || ""}
        type="text"
        step={undefined}
        min={undefined}
        max={undefined}
        value={undefined}
        id={undefined}
        name={props.name}
      />
    </>
  );
}
