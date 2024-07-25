import { IComponentPropsExtended } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IComponentPropsExtended["data"][number]>
      module="sps-rbac"
      name="roles-to-permissions"
      label="roles-to-permissions"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderField={props.renderField}
    />
  );
}
