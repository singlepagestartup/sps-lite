import { IComponentPropsExtended } from "./interface";
import { Component as AdminForm } from "../../../admin-form";
import { Component as AdminTableRow } from "../../../admin-table-row";
import { Component as ParentComponent } from "@sps/shared-frontend-components/singlepage/admin/admin-table/Component";

export function Component(props: IComponentPropsExtended) {
  return (
    <ParentComponent
      module="sps-website-builder"
      name="logotypes-to-sps-file-storage-module-widgets"
      type="relation"
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
