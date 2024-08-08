import { IComponentPropsExtended, variant } from "./interface";
import { IModel } from "@sps/sps-website-builder/models/content-block/sdk/model";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IModel, typeof variant>
      {...props}
      module="sps-website-builder"
      name="content-block"
      label="content-block"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField || "title"}
    />
  );
}
