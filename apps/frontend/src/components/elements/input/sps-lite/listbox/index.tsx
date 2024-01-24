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
        type="select"
      />
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        type="select"
      />
    </>
  );

  // return (
  //   <ListboxInput
  //     {...props}
  //     data-component="elements.input"
  //     label={props.label || undefined}
  //     placeholder={props.placeholder || undefined}
  //     multiple={undefined}
  //     className={props.className || ""}
  //     type="date"
  //     step={undefined}
  //     min={undefined}
  //     max={undefined}
  //     value={undefined}
  //     id={undefined}
  //   />
  // );
}
