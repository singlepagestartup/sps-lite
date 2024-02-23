import { IComponentPropsExtended } from "./interface";
import { FormField } from "@sps/ui-adapter";

export function Component(props: IComponentPropsExtended) {
  return (
    <>
      <FormField
        {...props.data}
        data-module="sps-crm"
        data-model="elements.input"
        data-variant={props.variant}
        ui="sps"
        label={"sps | " + props.data.label || undefined}
        type="text"
      />
      <FormField
        {...props.data}
        data-module="sps-crm"
        data-model="elements.input"
        data-variant={props.variant}
        ui="shadcn"
        label={"shadcn | " + props.data.label || undefined}
        type="text"
      />
    </>
  );
}
