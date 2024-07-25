import { IComponentPropsExtended } from "./interface";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-select-input/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent<IComponentPropsExtended["data"][number]>
      module="sps-website-builder"
      name="button"
      label="button"
      data={props.data}
      form={props.form}
      variant={props.variant}
      formFieldName={props.formFieldName}
      renderFunction={(entity) => {
        return `${entity.title} | ${entity.variant} | ${entity.url}`;
      }}
    />
  );
}
