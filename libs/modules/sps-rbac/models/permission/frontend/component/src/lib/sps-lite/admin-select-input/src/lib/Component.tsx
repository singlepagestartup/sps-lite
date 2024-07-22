import { IComponentPropsExtended } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IComponentPropsExtended["data"][number]>
      module="sps-rbac"
      name="permission"
      label="permission"
      formFieldName={props.formFieldName}
      data={props.data}
      form={props.form}
      variant={props.variant}
      renderFunction={(entity) => {
        return `${entity.path} | ${entity.method} | ${entity.type}`;
      }}
    />
  );
}
