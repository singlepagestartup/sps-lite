import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      {/* <FormField
      {...props}
      data-component="elements.input"
      ui="sps"
      label={"sps | " + props.label || undefined}
      type="checkbox"
    /> */}
      <FormField
        {...props.data}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.data.label || undefined}
        type="checkbox"
      />
    </>
  );
}
