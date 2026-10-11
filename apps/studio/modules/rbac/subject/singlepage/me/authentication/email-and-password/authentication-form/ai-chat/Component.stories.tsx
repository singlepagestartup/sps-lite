import { Component as RbacModuleSubject } from "../../../../../../index";

import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../../account/Account";
import { aiChatAccount } from "../../../../account/fixture";

function Example() {
  return (
    <RbacModuleSubject variant="me-authentication-email-and-password-authentication-form-ai-chat" />
  );
}

const meta = {
  id: "modules-rbac-models-subject-singlepage-me-authentication-email-and-password-authentication-form-ai-chat",
  title:
    "Modules/RBAC/Subject/Singlepage/authentication/email-and-password/authentication-form/ai-chat",
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
