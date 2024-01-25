import { IElement } from "../..";
import { FormField } from "@sps/ui-adapter";

export default function Input(props: IElement) {
  return (
    <>
      <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="radio"
      />
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        type="radio"
      />
    </>
  );
}
