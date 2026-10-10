import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

import { Component as RbacModuleWidget } from "../../../../rbac/widget/index";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "ai-chat-rbac-subjects-settings",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="settings"
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="account"
            showTokens
            page="settings"
            onNavigate={onNavigate}
          />
        )}
      >
        <RbacModuleWidget variant="subject-me-account-settings" showTokens />
      </HostModuleLayout>
    </div>
  );
}
