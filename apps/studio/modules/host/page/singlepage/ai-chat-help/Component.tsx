import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as WebsiteBuilderModuleWidget } from "../../../../website-builder/widget/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

import { useAIChatProjectHref } from "../../../../rbac/subject/singlepage/account/Account";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "ai-chat-help",
}: IComponentVariantProps = {}) {
  const projectHref = useAIChatProjectHref();
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="help"
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="account"
            showTokens
            page="help"
            onNavigate={onNavigate}
          />
        )}
      >
        <WebsiteBuilderModuleWidget
          variant="content-ai-chat-help"
          projectHref={projectHref}
        />
      </HostModuleLayout>
    </div>
  );
}
