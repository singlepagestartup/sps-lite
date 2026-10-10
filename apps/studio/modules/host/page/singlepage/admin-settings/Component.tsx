import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

import { AdminV2PageShell } from "../shared/AdminV2PageShell";

interface IComponentVariantProps {
  variant?: string;
}
export function AdminSettings({
  variant = "admin-settings",
}: IComponentVariantProps = {}) {
  return (
    <div
      data-ds-page="host.page.admin-settings"
      data-module="host"
      data-model="page"
      data-variant={variant}
    >
      <AdminV2PageShell
        activePath="/admin/settings"
        eyebrow="host.page"
        title="Workspace settings"
        description="Manage the account and preferences for this workspace."
      >
        <RbacModuleSubject variant="admin-v2-settings" />
      </AdminV2PageShell>
    </div>
  );
}
