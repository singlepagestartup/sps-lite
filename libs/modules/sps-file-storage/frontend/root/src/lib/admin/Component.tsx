import { IComponentProps } from "./interface";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-file-storage/models/widget/frontend/component/variants/sps-lite/admin-table";
import { Component as FileSpsLiteAdminTable } from "@sps/sps-file-storage/models/file/frontend/component/variants/sps-lite/admin-table";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "widget",
      Comp: WidgetSpsLiteAdminTable,
    },
    {
      name: "file",
      Comp: FileSpsLiteAdminTable,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-file-storage"
    />
  );
}
