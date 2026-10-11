import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "rbac-module-subject-me-ecommerce-module-order-checkout-tokens-ai-chat",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="tokens"
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="me-account"
            showTokens
            page="tokens"
            onNavigate={onNavigate}
          />
        )}
      >
        <RbacModuleSubject variant="me-ecommerce-module-order-checkout-tokens-ai-chat" />
      </HostModuleLayout>
    </div>
  );
}
