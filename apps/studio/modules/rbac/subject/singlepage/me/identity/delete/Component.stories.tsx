import { Component as RbacModuleSubject } from "../../../..";
import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../account/Account";
import { aiChatAccount } from "../../account/fixture";
import { ProfilesProvider } from "../../../../../../social/profile/singlepage/scope/ai-chat/project/Profiles";
import { aiChatWorkspaceFixture } from "../../../../../../social/profile/singlepage/scope/ai-chat/project/fixtures";
import { ProjectProvider } from "../../../../../../social/profile/singlepage/scope/ai-chat/project/Profile";
import { defaultSettingsIdentities } from "../../../../../shared";
import { useState } from "react";
function Example() {
  const [identity, setIdentity] = useState(defaultSettingsIdentities[0]);
  return (
    <AccountProvider account={aiChatAccount}>
      <ProfilesProvider {...aiChatWorkspaceFixture()}>
        <ProjectProvider profileId="pottery">
          <RbacModuleSubject
            variant="me-identity-delete"
            identity={identity}
            onDelete={() => {}}
          />
        </ProjectProvider>
      </ProfilesProvider>
    </AccountProvider>
  );
}
const meta = {
  id: "modules-rbac-models-subject-singlepage-me-identity-delete",
  title: "Modules/RBAC/Subject/Singlepage/me/identity/delete",
  component: Example,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
