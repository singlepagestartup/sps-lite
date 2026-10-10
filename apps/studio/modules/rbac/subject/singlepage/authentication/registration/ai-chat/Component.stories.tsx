import { Component as RbacModuleSubject } from "../../../../index";

import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../account/Account";
import { aiChatAccount } from "../../../../../../../workspace/utils/products/ai-chat-account-fixture";

function Example() {
  return <RbacModuleSubject variant="authentication-registration-ai-chat" />;
}

const meta = {
  id: "modules-rbac-models-subject-singlepage-authentication-registration-ai-chat",
  title:
    "Modules/Rbac/Models/Subject/Singlepage/authentication/registration/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <AccountProvider account={aiChatAccount}>
        <Story />
      </AccountProvider>
    ),
  ],
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
