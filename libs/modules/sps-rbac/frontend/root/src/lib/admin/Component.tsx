import { IComponentProps } from "./interface";
import { Component as RoleSpsLiteAdminTable } from "@sps/sps-rbac/models/role/frontend/component/variants/sps-lite/admin-table";
import { Component as SubjectSpsLiteAdminTable } from "@sps/sps-rbac/models/subject/frontend/component/variants/sps-lite/admin-table";
import { Component as IdentitySpsLiteAdminTable } from "@sps/sps-rbac/models/identity/frontend/component/variants/sps-lite/admin-table";
import { Component as AuthenticationBlockSpsLiteAdminTable } from "@sps/sps-rbac/models/authentication-block/frontend/component/variants/sps-lite/admin-table";
import { Component as WidgetSpsLiteAdminTable } from "@sps/sps-rbac/models/widget/frontend/component/variants/sps-lite/admin-table";
import { Component as ParentComponent } from "@sps/shared-frontend-components/sps-lite/admin/admin-panel/Component";

export function Component(props: IComponentProps) {
  const models = [
    {
      name: "role",
      Comp: RoleSpsLiteAdminTable,
    },
    {
      name: "subject",
      Comp: SubjectSpsLiteAdminTable,
    },
    {
      name: "identity",
      Comp: IdentitySpsLiteAdminTable,
    },
    {
      name: "authentication-block",
      Comp: AuthenticationBlockSpsLiteAdminTable,
    },
    {
      name: "widget",
      Comp: WidgetSpsLiteAdminTable,
    },
  ];

  return (
    <ParentComponent
      isServer={props.isServer}
      models={models}
      name="admin-panel"
      module="sps-rbac"
    />
  );
}
