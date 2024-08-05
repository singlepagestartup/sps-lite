import { IComponentPropsExtended, variant, IRelation } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IRelation, typeof variant>
      {...props}
      module="sps-website-builder"
      name="features-section-blocks-to-features"
      label="features-section-blocks-to-features"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField}
    />
  );
}
