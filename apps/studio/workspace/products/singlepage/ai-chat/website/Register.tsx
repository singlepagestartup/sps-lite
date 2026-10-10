import { Component as HostModuleLayout } from "./Preview/components/host/layout/index";
import { Component as RbacModuleSubject } from "./Preview/components/rbac/subject/index";

import sourceText from "./register.md?raw";
import { parseAIChatServicePage } from "./content";
import { AccountProvider } from "./Preview/components/rbac/subject/singlepage/account/Account";
import { aiChatAccount } from "../../../../utils/products/ai-chat-account-fixture";

export default function Register({ text }: { text?: string } = {}) {
  return (
    <AccountProvider account={aiChatAccount}>
      <HostModuleLayout variant="ai-chat-dashboard" page="register">
        <RbacModuleSubject
          variant="authentication-email-and-password-registration-form-ai-chat"
          copy={parseAIChatServicePage(text ?? sourceText)}
        />
      </HostModuleLayout>
    </AccountProvider>
  );
}
