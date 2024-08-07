import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "@sps/sps-website-builder/models/slider/frontend/component/variants/sps-lite/admin-form";
import { Component as AdminTableRow } from "@sps/sps-website-builder/models/slider/frontend/component/variants/sps-lite/admin-table-row";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-table/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent
      module="sps-website-builder"
      name="slider"
      variant={props.variant}
      adminForm={
        <AdminForm
          isServer={props.isServer}
          hostUrl={props.hostUrl}
          variant="admin-form"
        />
      }
    >
      <div className="flex flex-col gap-6 pt-8 p-4">
        {props.data.map((entity, index) => {
          return (
            <AdminTableRow
              key={index}
              isServer={props.isServer}
              hostUrl={props.hostUrl}
              variant="admin-table-row"
              data={entity}
            />
          );
        })}
      </div>
    </ParentComponent>
  );
}
