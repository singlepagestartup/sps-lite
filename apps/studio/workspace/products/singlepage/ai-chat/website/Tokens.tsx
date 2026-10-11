import { Component as RbacModuleSubject } from "./Preview/components/rbac/subject/index";
import { Component as HostModuleLayout } from "./Preview/components/host/layout/index";
import { Component as EcommerceModuleOrder } from "./Preview/components/ecommerce/order/index";

import sourceText from "./tokens.md?raw";
import { parseAIChatServicePage } from "./content";
import { AccountProvider } from "./Preview/components/rbac/subject/singlepage/account/Account";
import { aiChatAccount } from "../../../../utils/products/ai-chat-account-fixture";

export default function Tokens({ text }: { text?: string } = {}) {
  return (
    <AccountProvider account={aiChatAccount}>
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
        <EcommerceModuleOrder
          variant="checkout-tokens-ai-chat"
          copy={parseAIChatServicePage(text ?? sourceText)}
        />
      </HostModuleLayout>
    </AccountProvider>
  );
}
