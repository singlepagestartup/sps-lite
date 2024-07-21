import { IComponentPropsExtended } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IComponentPropsExtended["data"][number]>
      module="sps-website-builder"
      name="footer-blocks-to-buttons-arrays"
      label="footer-blocks-to-buttons-arrays"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField}
    />
  );
}
