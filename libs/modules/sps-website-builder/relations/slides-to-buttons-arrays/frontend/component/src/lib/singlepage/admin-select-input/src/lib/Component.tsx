import { IComponentPropsExtended, variant, IRelation } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IRelation, typeof variant>
      {...props}
      module="sps-website-builder"
      name="slides-to-buttons-arrays"
      label="slides-to-buttons-arrays"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField}
    />
  );
}
