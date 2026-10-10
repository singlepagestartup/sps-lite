import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleWidget } from "../../../../rbac/widget/index";

interface IComponentVariantProps {
  variant?: string;
}
export function ProfileDefault({
  variant = "rbac-subject-settings",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="website"
        activeHref="/rbac/subject/settings"
        signedIn
        footer="compact"
      >
        <main
          className="min-w-0"
          data-ds-page="host.page.rbac-subject-settings"
          data-ds-route="/rbac/subject/settings"
        >
          <RbacModuleWidget variant="subject-me-account-settings" />
        </main>
      </HostModuleLayout>
    </div>
  );
}
