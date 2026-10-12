import { Component as SocialModuleProfile } from "../../../../index";

import type { Meta, StoryObj } from "@storybook/react";
import { AccountProvider } from "../../../../../../rbac/subject/singlepage/me/account/Account";
import { ProfilesProvider } from "../../../scope/ai-chat/project/Profiles";
import { aiChatAccount } from "../../../../../../rbac/subject/singlepage/me/account/fixture";
import { aiChatWorkspaceFixture } from "../../../scope/ai-chat/project/fixtures";

function Example({ pending, empty }: { pending: boolean; empty: boolean }) {
  return (
    <AccountProvider account={aiChatAccount}>
      <ProfilesProvider
        initialProjects={empty ? [] : aiChatWorkspaceFixture().initialProjects}
        loading={pending}
      >
        <SocialModuleProfile
          variant="select-ai-chat-project"
          profileId="pottery"
        />
      </ProfilesProvider>
    </AccountProvider>
  );
}
const meta = {
  id: "modules-social-models-profile-singlepage-select-ai-chat-project",
  title: "Modules/Social/Profile/Singlepage/select/ai-chat/project",
  component: Example,
  parameters: { layout: "fullscreen" },
  args: { pending: false, empty: false },
  argTypes: { pending: { control: "boolean" }, empty: { control: "boolean" } },
} satisfies Meta<typeof Example>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const Loading: StoryObj<typeof meta> = { args: { pending: true } };
export const Empty: StoryObj<typeof meta> = { args: { empty: true } };
