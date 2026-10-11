import { Component as RbacModuleSubject } from "../../../../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../../account/Account";
import { aiChatAccount } from "../../../../account/fixture";
function Example({
  showTokens = true,
  empty = false,
}: { showTokens?: boolean; empty?: boolean } = {}) {
  return (
    <AccountProvider account={aiChatAccount}>
      <RbacModuleSubject
        variant="me-ecommerce-module-order-list-ai-chat"
        showTokens={showTokens}
        empty={empty}
      />
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-ecommerce-module-order-list-ai-chat",
  title: "Modules/RBAC/Subject/Singlepage/me/ecommerce/order/list/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
  args: { showTokens: true, empty: false },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const Empty: StoryObj<typeof meta> = { args: { empty: true } };
export const WithoutTokens: StoryObj<typeof meta> = {
  args: { showTokens: false },
};
