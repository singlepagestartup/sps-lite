import { Component as HostModuleLayout } from "../../../layout/index";
import { Component as EcommerceModuleOrder } from "../../../../ecommerce/order/index";
import { Component as RbacModuleSubject } from "../../../../rbac/subject/index";

interface IComponentVariantProps {
  variant?: string;
}
export function Component({
  variant = "ai-chat-rbac-subjects-tokens",
}: IComponentVariantProps = {}) {
  return (
    <div data-module="host" data-model="page" data-variant={variant}>
      <HostModuleLayout
        variant="ai-chat-dashboard"
        page="tokens"
        subjectAccount={({ onNavigate }) => (
          <RbacModuleSubject
            variant="account"
            showTokens
            page="tokens"
            onNavigate={onNavigate}
          />
        )}
      >
        <EcommerceModuleOrder variant="checkout-tokens-ai-chat" />
      </HostModuleLayout>
    </div>
  );
}
