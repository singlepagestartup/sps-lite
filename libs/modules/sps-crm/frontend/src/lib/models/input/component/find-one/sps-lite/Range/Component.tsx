import { IComponentPropsExtended } from "../../interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      {/* sps variant has bugs */}
      {/* <FormField
        {...props}
        data-component="elements.input"
        ui="sps"
        label={"sps | " + props.label || undefined}
        type="range"
      /> */}
      <FormField
        {...props}
        data-component="elements.input"
        ui="shadcn"
        label={"shadcn | " + props.label || undefined}
        type="range"
      />
    </>
  );
}
