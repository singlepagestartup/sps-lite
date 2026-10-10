import { Component as WebsiteBuilderModuleWidget } from "../../../../website-builder/widget/index";

import { AdminV2PageShell } from "../shared/AdminV2PageShell";

export function AdminPreviewDialog() {
  return (
    <div data-ds-page="host.page.admin-preview-dialog">
      <AdminV2PageShell
        activePath="/admin/website-builder/widget"
        eyebrow="host.page"
        title="Content preview"
        description="Edit page content and review it at desktop or mobile width."
      >
        <div className="rounded-3xl border border-[var(--color-sps-line)] bg-[var(--color-sps-grey)] p-5">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[var(--color-sps-white)] p-4 ">
            <WebsiteBuilderModuleWidget variant="admin-v2-rich-editor" />
          </div>
        </div>
      </AdminV2PageShell>
    </div>
  );
}
