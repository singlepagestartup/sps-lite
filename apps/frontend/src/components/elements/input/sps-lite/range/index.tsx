import { IElement } from "../..";
import { FormField } from "@sps/ui";

export default function Input(props: IElement) {
  return (
    <>
      <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="range"
      />
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        type="range"
      />
    </>
  );

  // return (
  //   <RangeInput
  //     {...props}
  //     data-component="elements.input"
  //     label={props.label || undefined}
  //     placeholder={props.placeholder || undefined}
  //     multiple={undefined}
  //     className={props.className || ""}
  //     type="date"
  //     step={props.step || 1}
  //     min={props.min || 0}
  //     max={props.max || 100}
  //     value={undefined}
  //     id={undefined}
  //   />
  // );
}
