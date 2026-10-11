import { Component as RbacModuleSubject } from "../../../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../account/Account";
import { aiChatAccount } from "../../../account/fixture";
import { ProfilesProvider } from "../../../../../../../social/profile/singlepage/scope/ai-chat/project/Profiles";
import { aiChatWorkspaceFixture } from "../../../../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
import { ProjectProvider } from "../../../../../../../social/profile/singlepage/scope/ai-chat/project/Profile";
function Example() {
  return (
    <AccountProvider account={aiChatAccount}>
      <ProfilesProvider {...aiChatWorkspaceFixture()}>
        <ProjectProvider profileId="pottery">
          <RbacModuleSubject
            variant="me-identity-create-email-and-password"
            onComplete={() => {}}
          />
        </ProjectProvider>
      </ProfilesProvider>
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-identity-create-email-and-password",
  title:
    "Modules/RBAC/Subject/Singlepage/me/identity/create/email-and-password",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
