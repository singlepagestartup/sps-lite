import { Component as RbacModuleSubject } from "../../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../account/Account";
import { aiChatAccount } from "../../account/fixture";
function Example() {
  return (
    <AccountProvider account={aiChatAccount}>
      <RbacModuleSubject variant="me-delete-ai-chat" />
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-delete-ai-chat",
  title: "Modules/RBAC/Subject/Singlepage/me/delete/ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
