import { Component as RbacModuleWidget } from "../../index";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../subject/singlepage/me/account/Account";
import { aiChatAccount } from "../../../subject/singlepage/me/account/fixture";
import { ProfilesProvider } from "../../../../social/profile/singlepage/scope/ai-chat/project/Profiles";
import { aiChatWorkspaceFixture } from "../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
import { ProjectProvider } from "../../../../social/profile/singlepage/scope/ai-chat/project/Profile";
function Example() {
  return (
    <AccountProvider account={aiChatAccount}>
      <ProfilesProvider {...aiChatWorkspaceFixture()}>
        <ProjectProvider profileId="pottery">
          <RbacModuleWidget
            variant="subject-me-social-module-profile-id-chat-id-thread-id-ai-chat"
            profileId="pottery"
            chatId="pottery:project-chat"
            threadId="pottery:products:products:thread"
          />
        </ProjectProvider>
      </ProfilesProvider>
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-widget-singlepage-subject-me-social-module-profile-id-chat-id-thread-id-ai-chat",
  title:
    "Modules/RBAC/Widget/Singlepage/subject-me-social-module-profile-id-chat-id-thread-id-ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
