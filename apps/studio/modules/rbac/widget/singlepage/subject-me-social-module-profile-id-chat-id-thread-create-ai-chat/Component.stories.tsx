import { Component as RbacModuleWidget } from "../../index";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfilesProvider } from "../../../../social/profile/singlepage/scope/ai-chat/project/Profiles";
import { aiChatWorkspaceFixture } from "../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
function Example() {
  return (
    <ProfilesProvider {...aiChatWorkspaceFixture()}>
      <RbacModuleWidget
        variant="subject-me-social-module-profile-id-chat-id-thread-create-ai-chat"
        profileId="pottery"
        chatId="pottery:project-chat"
        cancelHref="/ai-chat/social/profiles/pottery"
      />
    </ProfilesProvider>
  );
}
const meta = {
  id: "modules-rbac-models-widget-singlepage-subject-me-social-module-profile-id-chat-id-thread-create-ai-chat",
  title:
    "Modules/RBAC/Widget/Singlepage/subject-me-social-module-profile-id-chat-id-thread-create-ai-chat",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
