import { IComponentPropsExtended, variant, IRelation } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IRelation, typeof variant>
      {...props}
      module="sps-website-builder"
      name="widgets-to-hero-section-blocks"
      label="widgets-to-hero-section-blocks"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField}
    />
  );
}
